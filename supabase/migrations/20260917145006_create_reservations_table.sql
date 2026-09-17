/*
# Create reservations table for wine bar

1. New Tables
- `reservations`
  - `id` (uuid, primary key)
  - `name` (text, not null) - guest's full name
  - `email` (text, not null) - guest's email
  - `phone` (text, not null) - guest's phone number
  - `party_size` (int, not null) - number of guests
  - `reservation_date` (date, not null) - date of reservation
  - `reservation_time` (text, not null) - time slot
  - `seating_preference` (text, nullable) - bar, table, or patio preference
  - `special_occasion` (text, nullable) - optional occasion note
  - `notes` (text, nullable) - additional requests
  - `status` (text, not null, default 'pending') - pending, confirmed, cancelled
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `reservations`.
- Allow anon + authenticated to INSERT (public reservation form).
- Allow anon + authenticated to SELECT (so confirmation can be shown).
- No UPDATE or DELETE from the frontend.

3. Notes
- This is a single-tenant app with no authentication.
- Anyone can submit a reservation through the public form.
- Staff would manage reservations through Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  party_size int NOT NULL,
  reservation_date date NOT NULL,
  reservation_time text NOT NULL,
  seating_preference text,
  special_occasion text,
  notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_reservations" ON reservations;
CREATE POLICY "anon_insert_reservations"
  ON reservations FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_reservations" ON reservations;
CREATE POLICY "anon_select_reservations"
  ON reservations FOR SELECT
  TO anon, authenticated
  USING (true);
