import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { supabase } from '@/lib/supabase'
import { Resend } from 'resend'
import { checkRateLimit } from '@/lib/rate-limit'

const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder-key')

const leadSchema = z.object({
  full_name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  country_of_birth: z.string().min(2),
  current_country: z.string().min(2),
  message: z.string().min(10),
  consent: z.boolean(),
  turnstileToken: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  referrer: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'
    
    // Check rate limit
    const rateLimitResult = await checkRateLimit(ip)
    
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          reset: rateLimitResult.reset 
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.reset.toISOString(),
          }
        }
      )
    }

    const body = await request.json()
    
    // Validate the request body
    const validatedData = leadSchema.parse(body)
    
    if (!validatedData.consent) {
      return NextResponse.json(
        { error: 'Consent is required' },
        { status: 400 }
      )
    }

    // Verify Turnstile token if provided
    if (validatedData.turnstileToken && process.env.TURNSTILE_SECRET_KEY !== 'placeholder-key') {
      const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY || '',
          response: validatedData.turnstileToken,
        }),
      })

      const turnstileResult = await turnstileResponse.json()
      
      if (!turnstileResult.success) {
        return NextResponse.json(
          { error: 'CAPTCHA verification failed' },
          { status: 400 }
        )
      }
    }

    // IP is already obtained above for rate limiting

    // Save lead to Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          ...validatedData,
          ip_address: ip,
        }
      ])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to save lead' },
        { status: 500 }
      )
    }

    // Send email to admin
    try {
      await resend.emails.send({
        from: 'noreply@yourdomain.com', // Replace with your verified domain
        to: [process.env.ADMIN_EMAIL || 'admin@yourdomain.com'],
        subject: `New DV Lottery Consultation Request from ${validatedData.full_name}`,
        html: `
          <h2>New Green Card Lottery Consultation Request</h2>
          <p><strong>Name:</strong> ${validatedData.full_name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
          <p><strong>Country of Birth:</strong> ${validatedData.country_of_birth}</p>
          <p><strong>Current Country:</strong> ${validatedData.current_country}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message}</p>
          <p><strong>UTM Source:</strong> ${validatedData.utm_source || 'Direct'}</p>
          <p><strong>UTM Medium:</strong> ${validatedData.utm_medium || 'N/A'}</p>
          <p><strong>UTM Campaign:</strong> ${validatedData.utm_campaign || 'N/A'}</p>
          <p><strong>Referrer:</strong> ${validatedData.referrer || 'Direct'}</p>
          <p><strong>IP Address:</strong> ${ip}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        `,
      })
    } catch (emailError) {
      console.error('Failed to send admin email:', emailError)
      // Don't fail the request if email fails
    }

    // Send welcome email to user
    try {
      await resend.emails.send({
        from: 'hello@yourdomain.com', // Replace with your verified domain
        to: [validatedData.email],
        subject: 'Thank you for your Green Card Lottery consultation request',
        html: `
          <h2>Thank You for Your Interest in Professional DV Lottery Assistance!</h2>
          <p>Dear ${validatedData.full_name},</p>
          <p>Thank you for reaching out to Green Card Lottery Expert. We've received your consultation request and our immigration experts will review your information.</p>
          
          <h3>What happens next?</h3>
          <ul>
            <li>We'll review your eligibility and situation within 24 hours</li>
            <li>You'll receive personalized guidance for your DV lottery application</li>
            <li>We'll explain how our services can maximize your chances of success</li>
          </ul>
          
          <p>In the meantime, here are some important reminders:</p>
          <ul>
            <li>The DV lottery is free to enter directly through the official government website</li>
            <li>Photo requirements are strict and cause many rejections</li>
            <li>Application deadlines are firm - late submissions are not accepted</li>
            <li>Professional review significantly reduces the risk of disqualification</li>
          </ul>
          
          <p>We look forward to helping you with your American dream!</p>
          
          <p>Best regards,<br>
          The Green Card Lottery Expert Team</p>
          
          <hr>
          <p><small>This email was sent to ${validatedData.email} because you requested a consultation on our website. If you did not make this request, please ignore this email.</small></p>
        `,
      })
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({ success: true, id: data.id })
  } catch (error) {
    console.error('API error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.issues },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}