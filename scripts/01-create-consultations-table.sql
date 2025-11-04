-- Create consultations table for storing lead inquiries
CREATE TABLE IF NOT EXISTS consultations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'new'
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_consultations_email ON consultations(email);
CREATE INDEX IF NOT EXISTS idx_consultations_created_at ON consultations(created_at);

-- Added RLS policies for security
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (from contact form)
CREATE POLICY IF NOT EXISTS "Allow public to insert consultations" ON consultations
  FOR INSERT WITH CHECK (true);

-- Allow authenticated admin users to view and update
CREATE POLICY IF NOT EXISTS "Allow authenticated to view consultations" ON consultations
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY IF NOT EXISTS "Allow authenticated to update consultations" ON consultations
  FOR UPDATE USING (auth.role() = 'authenticated');
