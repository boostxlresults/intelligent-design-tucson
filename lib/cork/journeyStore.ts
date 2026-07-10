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
  const f = Object.fromEntries(Object.entries(fields).filter(([k]) => UPDATABLE.has(k)));
  if (Object.keys(f).length === 0) return;
  const s = (k: string) => (f[k] === undefined ? null : (f[k] as string | number | null));
  const j = (k: string) => (f[k] === undefined ? null : JSON.stringify(f[k]));
  await sql`
    UPDATE cork_journeys SET
      step_reached = COALESCE(${s("step_reached")}, step_reached),
      sq_ft_estimated = COALESCE(${s("sq_ft_estimated")}, sq_ft_estimated),
      sq_ft_final = COALESCE(${s("sq_ft_final")}, sq_ft_final),
      selected_color_id = COALESCE(${s("selected_color_id")}, selected_color_id),
      custom_color_hex = COALESCE(${s("custom_color_hex")}, custom_color_hex),
      name = COALESCE(${s("name")}, name),
      email = COALESCE(${s("email")}, email),
      phone = COALESCE(${s("phone")}, phone),
      zip = COALESCE(${s("zip")}, zip),
      address = COALESCE(${s("address")}, address),
      preferred_day = COALESCE(${s("preferred_day")}, preferred_day),
      preferred_time_window = COALESCE(${s("preferred_time_window")}, preferred_time_window),
      price_low_cents = COALESCE(${s("price_low_cents")}, price_low_cents),
      price_high_cents = COALESCE(${s("price_high_cents")}, price_high_cents),
      servicetitan_booking_id = COALESCE(${s("servicetitan_booking_id")}, servicetitan_booking_id),
      utm = COALESCE(${j("utm")}::jsonb, utm),
      notes = COALESCE(${j("notes")}::jsonb, notes),
      updated_at = now()
    WHERE id = ${id}`;
}

export async function getJourney(id: string): Promise<Record<string, unknown> | null> {
  if (!sql || !id) return null;
  await ensureTable();
  const rows = await sql`SELECT * FROM cork_journeys WHERE id = ${id}`;
  return (rows[0] as Record<string, unknown>) ?? null;
}
