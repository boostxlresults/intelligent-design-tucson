import { getServiceMapDb } from '@/lib/serviceMapDb';
import { NextResponse } from 'next/server';

export const revalidate = 3600; // Revalidate every hour

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');
  const service = searchParams.get('service');
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '50');
  const offset = (page - 1) * limit;

  try {
    const sql = getServiceMapDb();
    if (!sql) {
      return NextResponse.json({ checkins: [], total: 0, page: 1, totalPages: 0, filters: { cities: [], services: [] } });
    }

    let query = `SELECT id, service_type, business_unit, 
      COALESCE(description, short_description) as description,
      city, state, zip, latitude, longitude, 
      completed_at, images, tags
      FROM job_checkins WHERE 1=1`;
    
    const params: any[] = [];
    let paramIdx = 1;

    if (city && city !== 'all') {
      query += ` AND LOWER(city) = LOWER($${paramIdx})`;
      params.push(city);
      paramIdx++;
    }

    if (service && service !== 'all') {
      query += ` AND LOWER(service_type) = LOWER($${paramIdx})`;
      params.push(service);
      paramIdx++;
    }

    query += ` ORDER BY completed_at DESC LIMIT $${paramIdx} OFFSET $${paramIdx + 1}`;
    params.push(limit, offset);

    const rows = await sql(query, params);

    // Get total count
    let countQuery = `SELECT COUNT(*) as total FROM job_checkins WHERE 1=1`;
    const countParams: any[] = [];
    let countIdx = 1;

    if (city && city !== 'all') {
      countQuery += ` AND LOWER(city) = LOWER($${countIdx})`;
      countParams.push(city);
      countIdx++;
    }

    if (service && service !== 'all') {
      countQuery += ` AND LOWER(service_type) = LOWER($${countIdx})`;
      countParams.push(service);
      countIdx++;
    }

    const countResult = await sql(countQuery, countParams);
    const total = parseInt(countResult[0]?.total || '0');

    // Get filter options
    const cities = await sql`SELECT DISTINCT city, COUNT(*) as cnt FROM job_checkins GROUP BY city ORDER BY cnt DESC`;
    const services = await sql`SELECT DISTINCT service_type, COUNT(*) as cnt FROM job_checkins GROUP BY service_type ORDER BY cnt DESC`;

    return NextResponse.json({
      checkins: rows,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      filters: {
        cities: cities.map((c: any) => ({ name: c.city, count: parseInt(c.cnt) })),
        services: services.map((s: any) => ({ name: s.service_type, count: parseInt(s.cnt) })),
      },
    });
  } catch (error) {
    console.error('Service map API error:', error);
    return NextResponse.json({ error: 'Failed to fetch service map data' }, { status: 500 });
  }
}
