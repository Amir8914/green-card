# Lead-gen Website Project Memory

## Project Overview
- **Business**: Green Card Lottery Consulting - Expert DV lottery application assistance
- **Purpose**: Rank top-3 for "green card lottery" keywords; capture leads via single form; store leads and send emails
- **Type**: Next.js lead generation website for immigration consulting
- **Primary Goal**: High-converting, SEO-optimized lead capture system
- **Target Keywords**: green card lottery, DV lottery application, diversity visa lottery, USA immigration lottery
- **GitHub Repository**: https://github.com/Amir8914/green-card.git
- **Owner**: Amir8914

## Tech Stack (Authoritative - Do Not Change)
- **Framework**: Next.js 14+ (App Router only)
- **Patterns**: Server Actions + Route Handlers (no Pages Router)
- **Hosting**: Vercel (prioritize ISR/SSG where possible)
- **Database**: Supabase (Postgres) with `leads` table + RLS enabled
- **Email Service**: Resend (primary) | Alternatives: Postmark/Mailgun
- **Anti-spam**: Cloudflare Turnstile + rate-limiting via Upstash Redis
- **Error Tracking**: Sentry + Vercel Monitoring
- **Analytics**: GA4 + Google Search Console + Vercel Analytics

## Code Quality Standards
**Deliver production-ready, well-structured code with helpful comments.**

Requirements:
- Write clean, best-practice code with a clear structure and brief comments where helpful
- Use best practices for code and structure; add short explanatory comments
- Produce clean, well-structured code and comment the tricky parts
- Follow best practices, keep the project organized, and add concise comments as needed

## Form Requirements
### Fields (Updated for Immigration Consulting)
- name/full_name (required)
- email (required)
- phone (optional - for better lead quality)
- country_of_birth (required for DV lottery eligibility)
- current_country (required for consultation context)
- message/questions (required)
- consent (boolean, required for GDPR)
- utm_source (tracking)
- utm_medium (tracking)
- utm_campaign (tracking)
- referrer (tracking)
- ip (if policy allows)

### Validation & UX
- **Server**: Zod validation (re-validate all client input)
- **Client**: React Hook Form for UX
- **Flow**: Submit → DB write → send 2 emails → show "Thank you"

## Email Deliverability Rules
- **Sender**: Branded email (hello@mydomain.com)
- **Format**: Plain-text fallback required
- **Subject**: Concise and descriptive
- **Authentication**: SPF + DKIM + DMARC aligned to sending domain
- **Recipients**: User + site owner

## SEO Requirements (Strict)
### Metadata
- Next.js Metadata API per route
- Title ≤ 60 characters
- Description 150-160 characters
- Canonical URLs on all pages

### Technical SEO
- `sitemap.xml` (auto-generated)
- `robots.txt`
- JSON-LD structured data:
  - Organization
  - WebSite + SearchAction
  - BreadcrumbList
  - FAQ (if relevant)

### Performance Targets
- LCP < 2.5s
- INP < 200ms
- CLS < 0.1
- Must pass Lighthouse/PageSpeed

### Accessibility
- Descriptive `alt` attributes on images
- Semantic HTML markup
- ARIA labels where needed

## Content Strategy
- **Structure**: 9 pages - Homepage, About, Services, DV Lottery Guide, Success Stories, FAQ, Contact, Privacy Policy, Terms of Service
- **Trust Signals**: Immigration expertise, success rates, client testimonials, professional certifications, years of experience
- **Focus**: Green card lottery keyword ranking + educational content authority
- **Lead Magnets**: Free DV lottery eligibility check, photo requirements guide, application checklist

## Development Commands (Required)
```bash
# Development server
pnpm dev

# Production build & start
pnpm build
pnpm start

# Database migrations
supabase db push

# Code quality checks
pnpm lint

# Type checking (if separate)
pnpm typecheck
```

## Environment Variables Required
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Resend/Email
RESEND_API_KEY=

# Cloudflare Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=

# Upstash Redis (rate limiting)
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# Sentry
SENTRY_DSN=

# Analytics
NEXT_PUBLIC_GA_ID=
```

## Definition of Done (Release Checklist)
- [ ] Form works end-to-end (DB write + 2 emails sent)
- [ ] Spam protection active (Turnstile + rate limiting)
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Search Console
- [ ] Sentry monitoring active
- [ ] No console errors on key pages
- [ ] Performance targets met
- [ ] Email deliverability configured (SPF/DKIM/DMARC)

## Database Schema
### `leads` table (Supabase)
- Row Level Security (RLS) enabled
- Fields match form contract above
- Proper indexes for querying

## Security & Privacy
- Rate limiting on form submissions
- IP logging (if privacy policy allows)
- GDPR/privacy compliance via consent field
- Turnstile CAPTCHA integration

## Current Implementation Status (Last Updated: 2025-08-16)

### ✅ Completed Features
- **Next.js 14+ Project Setup**: App Router configured with TypeScript
- **Core Dependencies**: React Hook Form, Zod validation, Supabase client, Resend, rate limiting
- **Contact Form**: Full implementation with all required fields and validation
- **Form Fields Implemented**:
  - full_name (required)
  - email (required)
  - phone (optional)
  - country_of_birth (required)
  - current_country (required)
  - message (required)
  - consent checkbox (required)
  - UTM tracking (automatic)
  - referrer tracking (automatic)
- **Server Action/API Route**: `/api/submit-lead` with complete validation and error handling
- **Database Schema**: Supabase `leads` table with RLS policies
- **Email Integration**: Resend setup for admin and user confirmation emails
- **Anti-spam**: Rate limiting via Upstash Redis (implemented)
- **Anti-spam**: Cloudflare Turnstile integration (ready for keys)
- **SEO Fundamentals**:
  - Metadata API implementation in layout.tsx
  - robots.txt generation
  - sitemap.xml generation
  - Structured data components (Organization, WebSite)
- **Basic Pages Structure**:
  - Homepage (/)
  - About page (/about)
  - Services page (/services)
  - Contact page (/contact)
- **Layout & Navigation**: Header with navigation, footer with policy links

### 🚧 In Progress / Needs Configuration
- **Environment Variables**: All placeholders need real values
- **Email Domains**: Update from placeholder domains to real verified domains
- **Cloudflare Turnstile**: Keys needed for activation
- **Google Analytics**: GA4 integration ready, needs ID
- **Sentry**: Dependency installed, needs configuration

### ❌ Still Missing (Per Content Strategy)
- **Content Pages**:
  - DV Lottery Guide page
  - Success Stories page
  - FAQ page
  - Privacy Policy page content
  - Terms of Service page content
- **Advanced SEO**:
  - BreadcrumbList structured data
  - FAQ structured data (when FAQ page exists)
- **Lead Magnets**: Free eligibility check, photo guide, application checklist
- **Performance Optimization**: Image optimization, lazy loading

### 🔧 Technical Debt / Improvements Needed
- Error tracking setup (Sentry configuration)
- Performance monitoring setup
- Email template improvements (HTML + plain text fallbacks)
- Form UX enhancements (better success/error states)
- Accessibility audit and improvements

### 📋 Environment Variables Still Needed
```bash
# Update these placeholder values:
SITE_URL=https://yourdomain.com
ADMIN_EMAIL=admin@yourdomain.com

# Configure these services:
NEXT_PUBLIC_TURNSTILE_SITE_KEY=real_turnstile_key
TURNSTILE_SECRET_KEY=real_turnstile_secret
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
SENTRY_DSN=https://your-sentry-dsn

# Verify these are set:
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```