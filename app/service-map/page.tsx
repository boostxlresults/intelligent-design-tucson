import { Metadata } from 'next';
import { getServiceMapDb } from '@/lib/serviceMapDb';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';
import ServiceMapClient from './ServiceMapClient';

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = generateSEOMetadata({
  title: 'Service Map | Live Job Check-Ins Across Tucson | Intelligent Design',
  description: 'See where Intelligent Design is completing HVAC, plumbing, solar, electrical, and roofing services across Tucson and surrounding areas. Real-time service map with verified job completions.',
  canonicalUrl: 'https://www.idesignac.com/service-map',
  keywords: ['service map', 'HVAC Tucson', 'plumbing Tucson', 'solar installation Tucson', 'job check-ins', 'service area map'],
});

interface CheckIn {
  id: number;
  service_type: string;
  business_unit: string;
  description: string;
  city: string;
  state: string;
  zip: string;
  latitude: number | null;
  longitude: number | null;
  completed_at: string;
  images: string;
  tags: string;
}

interface ServiceMapStats {
  total_jobs: number | string;
  total_cities: number | string;
  total_services: number | string;
}

async function getCheckins(): Promise<{
  checkins: CheckIn[];
  stats: ServiceMapStats;
  filters: { cities: { name: string; count: number }[]; services: { name: string; count: number }[] };
}> {
  try {
    const sql = getServiceMapDb();
    if (!sql) {
      return {
        checkins: [],
        stats: { total_jobs: 0, total_cities: 0, total_services: 0 },
        filters: { cities: [], services: [] },
      };
    }
    
    // Get the most recent 100 check-ins with descriptions for initial render
    const checkins = await sql`
      SELECT id, service_type, business_unit, 
        COALESCE(description, short_description) as description,
        city, state, zip, latitude, longitude, 
        completed_at, images, tags
      FROM job_checkins 
      ORDER BY completed_at DESC 
      LIMIT 100
    `;

    // Get stats
    const stats = await sql`
      SELECT 
        COUNT(*) as total_jobs,
        COUNT(DISTINCT city) as total_cities,
        COUNT(DISTINCT service_type) as total_services
      FROM job_checkins
    `;

    // Get filter options
    const cities = await sql`
      SELECT DISTINCT city, COUNT(*) as cnt 
      FROM job_checkins 
      GROUP BY city 
      ORDER BY cnt DESC
    `;
    
    const services = await sql`
      SELECT DISTINCT service_type, COUNT(*) as cnt 
      FROM job_checkins 
      GROUP BY service_type 
      ORDER BY cnt DESC
    `;

    return {
      checkins: checkins as CheckIn[],
      stats: stats[0] as ServiceMapStats,
      filters: {
        cities: cities.map((c: any) => ({ name: c.city, count: parseInt(c.cnt) })),
        services: services.map((s: any) => ({ name: s.service_type, count: parseInt(s.cnt) })),
      },
    };
  } catch (error) {
    console.error('Error fetching service map data:', error);
    return {
      checkins: [],
      stats: { total_jobs: 0, total_cities: 0, total_services: 0 },
      filters: { cities: [], services: [] },
    };
  }
}

function generateServiceSchemas(checkins: CheckIn[]) {
  return checkins.slice(0, 50).map((checkin) => ({
    '@type': 'Service',
    name: `${checkin.service_type} in ${checkin.city}`,
    description: checkin.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Intelligent Design Air Conditioning, Plumbing, Solar & Electric',
      telephone: '(520) 375-9187',
      url: 'https://www.idesignac.com/',
      image: 'https://www.idesignac.com/images/logo.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3335 S Palo Verde Rd Suite 109',
        addressLocality: 'Tucson',
        addressRegion: 'AZ',
        postalCode: '85713',
        addressCountry: 'US',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.97',
        reviewCount: '23000',
        bestRating: '5',
      },
    },
    areaServed: {
      '@type': 'Place',
      name: `${checkin.city}, ${checkin.state} ${checkin.zip}`,
      ...(checkin.latitude && checkin.longitude
        ? {
            geo: {
              '@type': 'GeoCoordinates',
              latitude: checkin.latitude,
              longitude: checkin.longitude,
            },
          }
        : {}),
    },
    ...(checkin.images && checkin.images !== '[]'
      ? {
          image: {
            '@type': 'ImageObject',
            url: JSON.parse(checkin.images)[0],
            caption: `${checkin.service_type} service by Intelligent Design in ${checkin.city}, AZ`,
          },
        }
      : {}),
    serviceType: checkin.service_type,
    termsOfService: 'https://www.idesignac.com/guarantees',
  }));
}

export default async function ServiceMapPage() {
  const { checkins, stats, filters } = await getCheckins();
  const serviceSchemas = generateServiceSchemas(checkins);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'Service Map - Intelligent Design',
        description: 'Real-time service completion map showing verified job check-ins across Tucson and surrounding areas.',
        url: 'https://www.idesignac.com/service-map',
      },
      ...serviceSchemas,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceMapClient
        initialCheckins={checkins}
        stats={stats}
        filters={filters}
      />
    </>
  );
}
