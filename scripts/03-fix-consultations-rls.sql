-- Fix RLS policies for consultations table
-- First, drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public to insert consultations" ON consultations;
DROP POLICY IF EXISTS "Allow authenticated to view consultations" ON consultations;
DROP POLICY IF EXISTS "Allow authenticated to update consultations" ON consultations;

-- Enable RLS on consultations table
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert consultations (public form submissions)
CREATE POLICY "public_insert_consultations" ON consultations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated users to read all consultations
CREATE POLICY "authenticated_read_consultations" ON consultations
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update consultations
CREATE POLICY "authenticated_update_consultations" ON consultations
  FOR UPDATE
  TO authenticated
  USING (true);
