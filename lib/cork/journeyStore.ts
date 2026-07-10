/**
 * Cork journey persistence — Neon (raw SQL via @neondatabase/serverless).
 * Self-bootstrapping table for MVP; replace with Drizzle migration in shared/schema.ts
 * as a fast-follow (kept out of shared schema to avoid touching existing files).
 */
import { neon } from "@neondatabase/serverless";

const sql = process.env.DATABASE_URL ? neon(process.env.DATABASE_URL) : null;
let tableReady = false;

async function ensureTable() {
  if (!sql || tableReady) return;
  await sql`
    CREATE TABLE IF NOT EXISTS cork_journeys (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      created_at timestamptz NOT NULL DEFAULT now(),
      updated_at timestamptz NOT NULL DEFAULT now(),
      step_reached text NOT NULL DEFAULT 'capture',
      sq_ft_estimated integer,
      sq_ft_final integer,
      selected_color_id text,
      custom_color_hex text,
      name text,
      email text,
      phone text,
      zip text,
      address text,
      preferred_day text,
      preferred_time_window text,
      price_low_cents integer,
      price_high_cents integer,
      servicetitan_booking_id text,
      utm jsonb,
      notes jsonb
    )`;
  tableReady = true;
}

const UPDATABLE = new Set([
  "step_reached",
  "sq_ft_estimated",
  "sq_ft_final",
  "selected_color_id",
  "custom_color_hex",
  "name",
  "email",
  "phone",
  "zip",
  "address",
  "preferred_day",
  "preferred_time_window",
  "price_low_cents",
  "price_high_cents",
  "servicetitan_booking_id",
  "utm",
  "notes",
]);

export async function createJourney(utm?: Record<string, string>): Promise<string | null> {
  if (!sql) return null;
  await ensureTable();
  const rows = await sql`INSERT INTO cork_journeys (utm) VALUES (${JSON.stringify(utm ?? {})}::jsonb) RETURNING id`;
  return rows[0]?.id ?? null;
}

export async function updateJourney(id: string, fields: Record<string, unknown>): Promise<void> {
  if (!sql || !id) return;
  await ensureTable();
  const entries = Object.entries(fields).filter(([k]) => UPDATABLE.has(k));
  if (entries.length === 0) return;
  // Build a parameterized update using the tagged-template driver safely per-column.
  for (const [k, v] of entries) {
    const val = k === "utm" || k === "notes" ? JSON.stringify(v) : v;
    await sql`UPDATE cork_journeys SET ${sql.unsafe(k)} = ${val}, updated_at = now() WHERE id = ${id}`;
  }
}

export async function getJourney(id: string): Promise<Record<string, unknown> | null> {
  if (!sql || !id) return null;
  await ensureTable();
  const rows = await sql`SELECT * FROM cork_journeys WHERE id = ${id}`;
  return (rows[0] as Record<string, unknown>) ?? null;
}
