import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import OpenAI from 'openai';

export const maxDuration = 300; // 5 minutes max for Pro plan
export const dynamic = 'force-dynamic';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const BATCH_SIZE = 50; // Process 50 records per run

/**
 * Service-specific keyword variations for natural inclusion in descriptions.
 * These map service types to related search terms people actually use.
 */
const SERVICE_KEYWORD_MAP: Record<string, string[]> = {
  'AC Repair': ['air conditioning repair', 'AC fix', 'cooling system repair', 'central air repair', 'AC not cooling'],
  'AC Maintenance': ['air conditioning tune-up', 'AC maintenance', 'HVAC preventive maintenance', 'AC inspection', 'cooling system service'],
  'HVAC Installation': ['new AC installation', 'HVAC system replacement', 'air conditioning installation', 'central air installation', 'AC unit replacement'],
  'HVAC Consultation': ['HVAC assessment', 'air conditioning consultation', 'home comfort evaluation', 'AC system evaluation', 'energy efficiency consultation'],
  'Plumbing': ['plumbing repair', 'plumber', 'plumbing service', 'pipe repair', 'plumbing fix'],
  'Plumbing Installation': ['plumbing installation', 'new plumbing', 'fixture installation', 'pipe installation', 'plumbing upgrade'],
  'Drain & Sewer': ['drain cleaning', 'sewer repair', 'clogged drain', 'sewer line service', 'drain clearing'],
  'Water Heater Service': ['water heater repair', 'water heater installation', 'hot water heater', 'tankless water heater', 'water heater replacement'],
  'Solar Installation': ['solar panel installation', 'residential solar', 'solar energy system', 'solar power installation', 'home solar panels'],
  'Roofing': ['roof repair', 'roofing contractor', 'roof inspection', 'roof coating', 'roof maintenance'],
  'Electrical': ['electrician', 'electrical repair', 'electrical service', 'wiring repair', 'electrical installation'],
  'Electrical Installation': ['electrical panel upgrade', 'wiring installation', 'outlet installation', 'electrical upgrade', 'circuit installation'],
};

/**
 * Generate an SEO-optimized, public-facing description for a service map check-in.
 * Uses geo-modified keywords, keyword variations, and trust signals for maximum local SEO impact.
 */
async function generateDescription(
  serviceType: string,
  city: string,
  state: string,
  zip: string,
  businessUnit: string,
  rawNotes: string
): Promise<string> {
  const keywordVariations = SERVICE_KEYWORD_MAP[serviceType] || [`${serviceType.toLowerCase()} service`];
  const randomKeyword = keywordVariations[Math.floor(Math.random() * keywordVariations.length)];
  const secondaryKeyword = keywordVariations[Math.floor(Math.random() * keywordVariations.length)];

  const prompt = `You are an expert local SEO copywriter for Intelligent Design Air Conditioning, Plumbing, Solar, & Electric — a family-owned, veteran-owned home services company in Tucson, AZ with 46+ years of combined experience, 80+ certified technicians, a 5.0 Google rating from 23,000+ verified reviews, and BBB A+ accreditation.

Write a professional, public-facing service completion summary for our service map page. This content must maximize local SEO signals.

CRITICAL SEO REQUIREMENTS:
1. MUST naturally incorporate the PRIMARY geo-keyword: "${serviceType.toLowerCase()} in ${city}, AZ ${zip}"
2. MUST include ONE of these keyword variations naturally: "${randomKeyword}" or "${secondaryKeyword}"
3. MUST mention the zip code "${zip}" at least once
4. Include ONE trust signal (choose randomly): "5.0 Google rating" OR "23,000+ reviews" OR "46+ years of experience" OR "80+ certified technicians" OR "veteran-owned" OR "100% satisfaction guarantee" OR "same-day service" OR "licensed and insured" OR "BBB A+ rated"
5. Include ONE benefit to the homeowner: comfort, safety, energy efficiency, peace of mind, lower utility bills, extended equipment life, or home value protection
6. End with a subtle call-to-action phrase like "serving [city] and surrounding areas" or "available for [service type] throughout [zip]"

CONTENT RULES:
- Write exactly 3-4 sentences (100-160 words)
- Write in third person about "Intelligent Design" or "the team"
- Sound like a verified, factual job completion summary — authoritative but not salesy
- Do NOT include customer names, phone numbers, internal notes, pricing, dispatch details, or technician names
- Do NOT include HTML tags or markdown
- Do NOT use exclamation marks or hype language
- Do NOT fabricate specific technical details unless clearly inferable from the service type
- Vary sentence structure — do not start every sentence with "Intelligent Design"

SERVICE TYPE: ${serviceType}
BUSINESS UNIT: ${businessUnit}
LOCATION: ${city}, ${state} ${zip}

RAW INTERNAL NOTES (use ONLY to understand what type of work was done — NEVER expose internal details):
${rawNotes ? rawNotes.replace(/<[^>]*>/g, '').slice(0, 300) : 'Standard service call'}

Write the SEO-optimized public description now:`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 300,
    temperature: 0.75,
  });

  return response.choices[0]?.message?.content?.trim() || '';
}

export async function GET(request: Request) {
  // Verify cron secret (skip if not set — allows manual triggering)
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

        if (description && description.length > 50) {
          await sql`
            UPDATE job_checkins
            SET description = ${description}
            WHERE id = ${row.id}
          `;
          processed++;
        } else {
          // Fallback with geo-modified keywords
          const fallback = `Intelligent Design completed a professional ${row.service_type.toLowerCase()} service in ${row.city}, AZ ${row.zip}. The team of certified technicians delivered expert workmanship backed by a 100% satisfaction guarantee and 46+ years of combined experience. With a 5.0 Google rating from over 23,000 verified reviews, Intelligent Design remains the most trusted home services provider serving ${row.city} and surrounding areas in the ${row.zip} zip code.`;
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
