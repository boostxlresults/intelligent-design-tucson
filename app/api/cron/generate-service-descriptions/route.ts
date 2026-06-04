import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import OpenAI from 'openai';

export const maxDuration = 300; // 5 minutes max for Pro plan
export const dynamic = 'force-dynamic';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const BATCH_SIZE = 25; // Process 25 records per run to stay within time limits

/**
 * Generate an SEO-optimized, public-facing description for a service map check-in.
 * Uses geo-modified keywords (service type + zip code + city) for local SEO.
 */
async function generateDescription(
  serviceType: string,
  city: string,
  state: string,
  zip: string,
  businessUnit: string,
  rawNotes: string
): Promise<string> {
  const prompt = `You are an SEO copywriter for Intelligent Design Air Conditioning, Plumbing, Solar, & Electric — a family-owned, veteran-owned home services company in Tucson, AZ with 46+ years of experience and a 5.0 Google rating from 23,000+ reviews.

Write a professional, public-facing service description for a completed job. This will appear on our website's service map page.

REQUIREMENTS:
- Write 2-3 sentences (80-150 words) that sound professional and authoritative
- Naturally incorporate the geo-modified keyword: "${serviceType} in ${city}, AZ ${zip}"
- Describe what the service entails in general terms (do NOT include any customer names, phone numbers, internal notes, pricing, dispatch details, or technician names)
- Mention the benefit to the homeowner (comfort, safety, efficiency, etc.)
- Sound like a verified job completion summary that builds trust
- Do NOT use first person. Write in third person about "Intelligent Design" or "the team"
- Do NOT include any HTML tags
- Do NOT fabricate specific details about the job that aren't inferable from the service type
- Keep it factual and professional — no hype or exclamation marks

SERVICE TYPE: ${serviceType}
BUSINESS UNIT: ${businessUnit}
LOCATION: ${city}, ${state} ${zip}

RAW INTERNAL NOTES (use ONLY to understand what type of work was done — do NOT expose any internal details):
${rawNotes ? rawNotes.slice(0, 300) : 'No notes available'}

Write the public-facing description now:`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 250,
    temperature: 0.7,
  });

  return response.choices[0]?.message?.content?.trim() || '';
}

export async function GET(request: Request) {
  // Verify cron secret
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const dbUrl = process.env.SERVICE_MAP_DATABASE_URL;
  if (!dbUrl) {
    return NextResponse.json({ error: 'SERVICE_MAP_DATABASE_URL not configured' }, { status: 500 });
  }

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: 'OPENAI_API_KEY not configured' }, { status: 500 });
  }

  try {
    const sql = neon(dbUrl);

    // Find records that need AI-generated descriptions
    // These are records where `description` is NULL (only have raw `short_description`)
    const pendingRows = await sql`
      SELECT id, service_type, business_unit, short_description, city, state, zip
      FROM job_checkins
      WHERE description IS NULL
      ORDER BY completed_at DESC
      LIMIT ${BATCH_SIZE}
    `;

    if (pendingRows.length === 0) {
      return NextResponse.json({
        message: 'All descriptions are up to date',
        processed: 0,
        timestamp: new Date().toISOString(),
      });
    }

    let processed = 0;
    let errors = 0;

    for (const row of pendingRows) {
      try {
        const description = await generateDescription(
          row.service_type,
          row.city,
          row.state,
          row.zip,
          row.business_unit || '',
          row.short_description || ''
        );

        if (description && description.length > 20) {
          await sql`
            UPDATE job_checkins
            SET description = ${description}
            WHERE id = ${row.id}
          `;
          processed++;
        } else {
          // If generation failed, set a generic description so we don't retry forever
          const fallback = `Intelligent Design completed a ${row.service_type.toLowerCase()} service in ${row.city}, AZ ${row.zip}. Our certified technicians delivered expert workmanship backed by our 100% satisfaction guarantee. Serving the greater Tucson area with 46+ years of experience.`;
          await sql`
            UPDATE job_checkins
            SET description = ${fallback}
            WHERE id = ${row.id}
          `;
          processed++;
        }
      } catch (e: any) {
        console.error(`Error generating description for ID ${row.id}:`, e.message);
        errors++;
      }
    }

    // Count remaining records that still need descriptions
    const remaining = await sql`
      SELECT COUNT(*) as cnt FROM job_checkins WHERE description IS NULL
    `;

    return NextResponse.json({
      message: 'Description generation complete',
      processed,
      errors,
      remaining: parseInt(remaining[0]?.cnt || '0'),
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Description generation cron error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
