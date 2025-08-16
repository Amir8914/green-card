import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Lead = {
  id: string
  full_name: string
  email: string
  phone?: string
  country_of_birth: string
  current_country: string
  message: string
  consent: boolean
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  referrer?: string
  ip_address?: string
  created_at: string
  updated_at: string
}