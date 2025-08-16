-- Create leads table for green card lottery consulting
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  country_of_birth VARCHAR(100) NOT NULL,
  current_country VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  consent BOOLEAN NOT NULL DEFAULT false,
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(100),
  referrer TEXT,
  ip_address INET,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for efficient querying
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_created_at ON leads(created_at);
CREATE INDEX idx_leads_country_of_birth ON leads(country_of_birth);
CREATE INDEX idx_leads_utm_source ON leads(utm_source);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy for public insert (form submissions)
CREATE POLICY "Enable insert for all users" ON leads
FOR INSERT
TO public
WITH CHECK (true);

-- Create policy for authenticated read (admin access)
CREATE POLICY "Enable read for authenticated users only" ON leads
FOR SELECT
TO authenticated
USING (true);