# Cool Cork Pool Decks — Journey Build Spec

**Route:** `/cool-cork-pool-decks` (native App Router route in this repo)
**Partner:** ThermalCork Solutions (Intelligent Design is Tucson's only certified ThermalCork applicator)
**Owner:** Joey Schwartz (joey@gsmresults.com)
**Status:** Foundation pushed. Awaiting env keys to wire AI + email + booking.

---

## Funnel Overview

1. **Landing page** — `/cool-cork-pool-decks`
   - Hero: real customer photo (owner's son lying on cork deck at 109°F ambient — barefoot-comfortable)
   - Pain-avoidance copy framing (standing brand rule): stop burning feet, stop staring at cracks, stop slip hazards
   - Benefit sections: surface temperature (cork stays walkable when concrete/pavers burn), seamless crack coverage, slip resistance, durability, ThermalCork certification authority
   - FAQ with FAQPage schema markup
   - CTAs: **Project Visualizer & Price Range** (primary → opens visualizer modal) and **Request a Free Deck Inspection & Exact Estimate** (secondary → jumps to booking step directly)

2. **Visualizer** — full-screen modal, works desktop/mobile/tablet. Step state machine:
   - `capture` — take photo (mobile camera) or upload. Image → Vercel Blob.
   - `measure` — POST `/api/cork/measure`: Claude vision (Sonnet) returns deck-surface polygon(s) + estimated sq ft (uses reference objects: coping, furniture, pool dimensions). Overlay tinted polygon on photo. Copy presents it as an estimate (~±20%); exact number comes at inspection.
   - `refine` — brush tool (pointer + touch events on canvas) to EXCLUDE areas from corking. Live sq ft recalculation from polygon area ratio. Or accept AI area as-is.
   - `render` — POST `/api/cork/render`: Gemini image API produces photoreal render — deck resurfaced in selected KC color, cracks removed, everything else (pool, water, rocks, landscape) untouched. First render on-demand with progress animation; remaining 11 KC colors prefetch in background, cache in Blob keyed by (journeyId, colorId). Color swatch taps after first render are instant. Custom color: color picker → render with hex.
   - `capture-lead-1` — name + email (required) — "Where should we send your estimate report?"
   - `capture-lead-2` — zip + phone (required)
   - `estimate` — price range = sqFt × rate config (see `lib/cork/config.ts`, currently $6/sq ft base with low/high band). Shown with their final rendering.
   - `book` — "Request a Free Deck Inspection & Exact Estimate" micro-commit: preferred day + time window, name/email/phone autofilled from journey, address with Google Places Autocomplete.
   - On booking: create ServiceTitan booking (write app — creds TBD), send internal lead notification email, send customer email (Mailgun) with final rendering + price range + CTA button linking back to `/cool-cork-pool-decks`.
   - On estimate step completion (even without booking): send customer report email with rendering + range + inspection CTA.

3. **Persistence** — every step writes to Neon (Drizzle). Partial journeys = recoverable leads.

---

## Data Model (Drizzle / Neon)

`cork_journeys`
- id (uuid pk), created_at, updated_at
- step_reached (enum: capture|measure|refine|render|lead1|lead2|estimate|book|booked)
- original_image_url, mask_polygon (jsonb), sq_ft_estimated (int), sq_ft_final (int)
- selected_color_id (text), custom_color_hex (text nullable)
- render_urls (jsonb: {colorId: blobUrl})
- name, email, phone, zip, address (nullable until captured)
- preferred_day, preferred_time_window (nullable)
- price_low_cents, price_high_cents
- servicetitan_booking_id (nullable), emails_sent (jsonb)
- utm / gclid passthrough fields for attribution

---

## API Routes

- `POST /api/cork/journey` — create journey session
- `PATCH /api/cork/journey/:id` — persist step data
- `POST /api/cork/measure` — Claude vision measurement (server-side, ANTHROPIC_API_KEY)
- `POST /api/cork/render` — Gemini render + Blob cache (GEMINI_API_KEY)
- `POST /api/cork/estimate` — compute + persist price range, trigger report email
- `POST /api/cork/book` — ServiceTitan booking + internal notification + confirmation email

All AI calls server-side only. No keys in client code.

---

## Env Vars (Vercel — Joey adds values himself; never commit)

- `ANTHROPIC_API_KEY` — measurement vision calls (Sonnet)
- `GEMINI_API_KEY` — photoreal renders
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` — Places Autocomplete (restrict to idesignac.com + Places/Maps JS APIs)
- `MAILGUN_API_KEY`, `MAILGUN_DOMAIN` — report + confirmation emails
- `SERVICETITAN_CLIENT_ID`, `SERVICETITAN_CLIENT_SECRET`, `SERVICETITAN_TENANT_ID`, `SERVICETITAN_APP_KEY` — booking write
- `CORK_INTERNAL_NOTIFY_EMAIL` — internal lead alert recipient
- `BLOB_READ_WRITE_TOKEN` — Vercel Blob (auto-provisioned when Blob store attached)
- `DATABASE_URL` — existing Neon connection (already in project)

---

## Standing Rules That Apply Here

- Pain-avoidance framing in all copy
- No sheet metal shop references
- Estimate presented as a range; exact quote only at inspection
- Conversion tracking changes require explicit approval — landing page will fire standard GTM events (visualizer_open, photo_uploaded, measured, color_selected, lead_email, lead_phone, estimate_shown, booking_requested) but no changes to existing conversion actions without sign-off
