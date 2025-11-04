-- Create admin_users table to track admin accounts
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) NOT NULL UNIQUE,
  full_name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on admin_users
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Admin can view/update their own profile
CREATE POLICY "admins_select_own_profile" ON admin_users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "admins_update_own_profile" ON admin_users
  FOR UPDATE USING (auth.uid() = id);

-- Create consultations_archive table for historical tracking
CREATE TABLE IF NOT EXISTS consultations_archive (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  consultation_id UUID REFERENCES consultations(id) ON DELETE CASCADE,
  previous_status VARCHAR(50),
  new_status VARCHAR(50),
  changed_by UUID REFERENCES admin_users(id),
  changed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on consultations_archive
ALTER TABLE consultations_archive ENABLE ROW LEVEL SECURITY;

-- Only admins can view/insert archive records
CREATE POLICY "admins_can_view_archive" ON consultations_archive
  FOR SELECT USING (EXISTS (SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()));

CREATE POLICY "admins_can_insert_archive" ON consultations_archive
  FOR INSERT WITH CHECK (EXISTS (SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()));
