import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export const maxDuration = 60;
export const dynamic = 'force-dynamic';

// ServiceTitan API Credentials
const ST_CLIENT_ID = process.env.ST_CLIENT_ID || 'cid.05yuzql8drftq70qsr0p92kv1';
const ST_CLIENT_SECRET = process.env.ST_CLIENT_SECRET || 'cs1.9493galthwyaggnfde4j2qn9iws6guwmjm65eatcg18n1c3dbw';
const ST_APP_KEY = process.env.ST_APP_KEY || 'ak1.pokzkxlhneuoybksiclx7s3ke';
const ST_TENANT_ID = process.env.ST_TENANT_ID || '227669022';

const BU_ID_MAP: Record<number, string> = {
  38050: 'HVAC Sales',
  38177: 'HVAC Install',
  38296: 'Plumbing',
  38297: 'G & A',
  38298: 'HVAC Service Repair',
  100004: 'HVAC Scheduled Service',
  63273843: 'Electrical',
  63273971: 'PV Solar',
  70034293: 'Roofing',
};

const BU_SERVICE_MAP: Record<string, string> = {
  'HVAC Sales': 'HVAC Consultation',
  'HVAC Install': 'HVAC Installation',
  'HVAC Service Repair': 'AC Repair',
  'HVAC Scheduled Service': 'AC Maintenance',
  'Plumbing': 'Plumbing',
  'Electrical': 'Electrical',
  'PV Solar': 'Solar Installation',
  'Roofing': 'Roofing',
};

async function getSTToken(): Promise<string> {
  const resp = await fetch('https://auth.servicetitan.io/connect/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: ST_CLIENT_ID,
      client_secret: ST_CLIENT_SECRET,
    }),
  });
  if (!resp.ok) throw new Error(`ST auth failed: ${resp.status}`);
  const data = await resp.json();
  return data.access_token;
}

function categorizeService(job: any): string {
  const buId = job.businessUnitId;
  const buName = BU_ID_MAP[buId] || '';
  const summary = (job.summary || '').toLowerCase();

  if (summary.includes('install') || summary.includes('replacement')) {
    if ([38298, 100004, 38050, 38177].includes(buId)) return 'HVAC Installation';
    if (buId === 38296) return 'Plumbing Installation';
    if (buId === 63273843) return 'Electrical Installation';
  }
  if (summary.includes('tune') || summary.includes('maintenance') || summary.includes('pma')) return 'AC Maintenance';
  if (summary.includes('drain') || summary.includes('sewer')) return 'Drain & Sewer';
  if (summary.includes('water heater')) return 'Water Heater Service';
  if (summary.includes('solar') || summary.includes('panel')) return 'Solar Installation';
  if (summary.includes('roof') || summary.includes('coating')) return 'Roofing';

  return BU_SERVICE_MAP[buName] || buName || 'General Service';
}

function cleanSummary(summary: string | null): string {
  if (!summary) return '';
  let text = summary.split('Notes added by')[0].trim();
  text = text.replace('***do not move these calls****', '').trim();
  text = text.replace(/\r\n/g, ' ').replace(/\n/g, ' ');
  while (text.includes('  ')) text = text.replace('  ', ' ');
  return text.slice(0, 500);
}

export async function GET(request: Request) {
  // Verify cron secret (Vercel sends this header for cron jobs)
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const dbUrl = process.env.SERVICE_MAP_DATABASE_URL;
  if (!dbUrl) {
    return NextResponse.json({ error: 'DATABASE_URL not configured' }, { status: 500 });
  }

  try {
    const sql = neon(dbUrl);
    const token = await getSTToken();
    const headers = { Authorization: `Bearer ${token}`, 'ST-App-Key': ST_APP_KEY };

    // Fetch jobs completed in the last 3 days (overlap for safety)
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 3);
    const startStr = startDate.toISOString().split('T')[0] + 'T00:00:00Z';

    let allJobs: any[] = [];
    let page = 1;
    while (page <= 10) {
      const resp = await fetch(
        `https://api.servicetitan.io/jpm/v2/tenant/${ST_TENANT_ID}/jobs?completedOnOrAfter=${startStr}&jobStatus=Completed&page=${page}&pageSize=100`,
        { headers }
      );
      if (!resp.ok) break;
      const data = await resp.json();
      allJobs = allJobs.concat(data.data || []);
      if (!data.hasMore) break;
      page++;
    }

    // Filter out G&A
    allJobs = allJobs.filter((j: any) => j.businessUnitId !== 38297);

    // Get existing job IDs to skip duplicates
    const existingRows = await sql`SELECT servicetitan_job_id FROM job_checkins WHERE completed_at >= ${startStr}`;
    const existingIds = new Set(existingRows.map((r: any) => r.servicetitan_job_id));

    // Filter to only new jobs
    const newJobs = allJobs.filter((j: any) => !existingIds.has(String(j.id)));
    if (newJobs.length === 0) {
      return NextResponse.json({ message: 'No new jobs to sync', totalChecked: allJobs.length, newJobs: 0 });
    }

    // Batch fetch locations
    const locationIds = [...new Set(newJobs.map((j: any) => j.locationId).filter(Boolean))];
    const locations: Record<number, any> = {};

    for (let i = 0; i < locationIds.length; i += 50) {
      const batch = locationIds.slice(i, i + 50);
      const idsParam = batch.join(',');
      const resp = await fetch(
        `https://api.servicetitan.io/crm/v2/tenant/${ST_TENANT_ID}/locations?ids=${idsParam}&pageSize=50`,
        { headers }
      );
      if (resp.ok) {
        const data = await resp.json();
        for (const loc of data.data || []) {
          const addr = loc.address || {};
          locations[loc.id] = {
            city: addr.city || '',
            state: addr.state || 'AZ',
            zip: addr.zip || '',
            street: (addr.street || '').trim(),
            latitude: addr.latitude,
            longitude: addr.longitude,
          };
        }
      }
    }

    // Insert new jobs
    let inserted = 0;
    for (const job of newJobs) {
      const loc = locations[job.locationId];
      if (!loc || !loc.city) continue;

      const serviceType = categorizeService(job);
      const buId = job.businessUnitId;
      const buName = BU_ID_MAP[buId] || '';
      const completedAt = job.completedOn || job.modifiedOn;
      const summary = cleanSummary(job.summary);
      const shortDesc = summary || `${serviceType} completed in ${loc.city}, AZ`;
      const addressFull = `${loc.street} ${loc.city}, ${loc.state} ${loc.zip}`.trim();

      try {
        await sql`
          INSERT INTO job_checkins 
          (servicetitan_job_id, service_type, business_unit, short_description,
           address_full, city, state, zip, latitude, longitude,
           technician_name, customer_first_name, customer_last_initial,
           completed_at, images, tags)
          VALUES (${String(job.id)}, ${serviceType}, ${buName}, ${shortDesc},
                  ${addressFull}, ${loc.city}, ${loc.state}, ${loc.zip},
                  ${loc.latitude}, ${loc.longitude},
                  ${''}, ${''}, ${''},
                  ${completedAt}, ${JSON.stringify([])}, ${JSON.stringify([serviceType, buName])})
          ON CONFLICT (servicetitan_job_id) DO NOTHING
        `;
        inserted++;
      } catch (e) {
        // Skip individual insert errors
      }
    }

    return NextResponse.json({
      message: `Sync complete`,
      totalChecked: allJobs.length,
      newJobs: newJobs.length,
      inserted,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Service map cron error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
