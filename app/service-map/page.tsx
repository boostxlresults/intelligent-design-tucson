import { Metadata } from 'next';
import { getServiceMapDb } from '@/lib/serviceMapDb';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';
import ServiceMapClient from './ServiceMapClient';

import { reviewsData } from '@/data/reviews';
export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = generateSEOMetadata({
  title: 'Service Map | Live Job Check-Ins Across Tucson | Intelligent Design',
  description: 'See where Intelligent Design is completing HVAC, plumbing, solar, electrical, and roofing services across Tucson and surrounding areas. Real-time service map with verified job completions.',
  canonicalUrl: 'https://www.idesignac.com/service-map',
  keywords: [
    'service map', 'HVAC Tucson', 'plumbing Tucson', 'solar installation Tucson',
    'AC repair Tucson', 'roofing contractor Tucson', 'electrician Tucson',
    'air conditioning repair near me', 'plumber near me Tucson AZ',
    'job check-ins', 'service area map', 'verified service completions',
    'AC installation 85711', 'AC repair 85742', 'plumbing 85745',
    'HVAC contractor Marana', 'air conditioning Oro Valley', 'solar Vail AZ',
  ],
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

/**
 * Generate comprehensive Service schema with CompletedAction for each check-in.
 * Each service signals to Google: "We performed THIS service at THIS location on THIS date."
 */
function generateServiceSchemas(checkins: CheckIn[]) {
  return checkins.slice(0, 50).map((checkin) => ({
    '@type': 'Service',
    '@id': `https://www.idesignac.com/service-map#service-${checkin.id}`,
    name: `${checkin.service_type} in ${checkin.city}, AZ ${checkin.zip}`,
    description: checkin.description,
    serviceType: checkin.service_type,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.idesignac.com/#organization',
      name: 'Intelligent Design Air Conditioning, Plumbing, Solar, & Electric',
    },
    areaServed: {
      '@type': 'PostalAddress',
      addressLocality: checkin.city,
      addressRegion: checkin.state,
      postalCode: checkin.zip,
      addressCountry: 'US',
    },
    ...(checkin.latitude && checkin.longitude
      ? {
          serviceLocation: {
            '@type': 'Place',
            name: `${checkin.city}, ${checkin.state} ${checkin.zip}`,
            geo: {
              '@type': 'GeoCoordinates',
              latitude: checkin.latitude,
              longitude: checkin.longitude,
            },
          },
        }
      : {}),
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.idesignac.com/schedule',
        actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
      },
      result: {
        '@type': 'Reservation',
        name: `Schedule ${checkin.service_type}`,
      },
    },
    ...((() => {
      try {
        const imgs = checkin.images ? JSON.parse(checkin.images) : [];
        if (Array.isArray(imgs) && imgs.length > 0 && imgs[0]) {
          return {
            image: {
              '@type': 'ImageObject',
              url: imgs[0],
              caption: `${checkin.service_type} completed by Intelligent Design in ${checkin.city}, AZ ${checkin.zip}`,
            },
          };
        }
      } catch {}
      return {};
    })()),
    termsOfService: 'https://www.idesignac.com/guarantees',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: checkin.latitude || 32.2226,
          longitude: checkin.longitude || -110.9747,
        },
        geoRadius: '50000',
      },
    },
  }));
}

/**
 * Generate CompletedAction schema — signals to Google that these services were actually performed.
 * This is stronger than just listing services; it proves active service delivery.
 */
function generateCompletedActions(checkins: CheckIn[]) {
  return checkins.slice(0, 30).map((checkin) => ({
    '@type': 'Action',
    actionStatus: 'https://schema.org/CompletedActionStatus',
    name: `Completed ${checkin.service_type} in ${checkin.city}, AZ ${checkin.zip}`,
    description: checkin.description,
    agent: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.idesignac.com/#organization',
      name: 'Intelligent Design Air Conditioning, Plumbing, Solar, & Electric',
    },
    location: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: checkin.city,
        addressRegion: checkin.state,
        postalCode: checkin.zip,
        addressCountry: 'US',
      },
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
    endTime: checkin.completed_at,
    object: {
      '@type': 'Service',
      name: checkin.service_type,
      serviceType: checkin.service_type,
    },
  }));
}

/**
 * Generate FAQ schema with geo-modified questions that target featured snippets.
 * These answer the exact questions people search for: "How much does X cost in Y?"
 */
function generateFAQSchema(checkins: CheckIn[], stats: ServiceMapStats) {
  // Get unique service types and cities for FAQ generation
  const serviceTypes = [...new Set(checkins.map(c => c.service_type))];
  const topCities = [...new Set(checkins.map(c => c.city))].slice(0, 5);
  
  const faqs: { question: string; answer: string }[] = [];

  // Service-specific FAQs with geo-modification
  serviceTypes.slice(0, 8).forEach((service) => {
    const city = topCities[0] || 'Tucson';
    const relevantCheckins = checkins.filter(c => c.service_type === service);
    const zips = [...new Set(relevantCheckins.map(c => c.zip))].slice(0, 3).join(', ');

    faqs.push({
      question: `Does Intelligent Design offer ${service.toLowerCase()} services in ${city}, AZ?`,
      answer: `Yes, Intelligent Design provides professional ${service.toLowerCase()} services throughout ${city}, AZ and surrounding zip codes including ${zips}. With over 46 years of experience, 80+ certified technicians, and a 5.0 Google rating from 23,000+ reviews, Intelligent Design is the most trusted ${service.toLowerCase()} provider in the greater Tucson area. All services include a 100% satisfaction guarantee.`,
    });
  });

  // General trust-building FAQs
  faqs.push({
    question: 'How many jobs has Intelligent Design completed in Tucson?',
    answer: `Intelligent Design has completed over ${Number(stats.total_jobs).toLocaleString()} verified service calls across ${stats.total_cities} cities in the greater Tucson area, covering ${stats.total_services} different service types including HVAC, plumbing, solar, electrical, and roofing. Our real-time service map shows exactly where our technicians are working every day.`,
  });

  faqs.push({
    question: 'What areas does Intelligent Design serve in Arizona?',
    answer: `Intelligent Design serves all of greater Tucson and surrounding communities including ${topCities.join(', ')}, and more — covering ${stats.total_cities} cities total. Our 80+ certified technicians provide same-day service for HVAC, plumbing, solar, electrical, and roofing needs across all these areas.`,
  });

  faqs.push({
    question: 'Is Intelligent Design available for emergency service?',
    answer: 'Yes, Intelligent Design offers 24/7 emergency service for HVAC, plumbing, and electrical issues throughout the greater Tucson area. With 80+ certified technicians on staff, we can typically respond same-day. Call (520) 333-2665 for immediate assistance.',
  });

  faqs.push({
    question: 'What is Intelligent Design\'s rating and how many reviews do they have?',
    answer: 'Intelligent Design maintains a 5.0 Google rating with over 23,000 verified reviews, making them the highest-rated and most-reviewed home services company in Tucson, AZ. They are also BBB A+ rated, veteran-owned, and family-operated with 46+ years of combined experience.',
  });

  return {
    '@type': 'FAQPage',
    '@id': 'https://www.idesignac.com/service-map#faq',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export default async function ServiceMapPage() {
  const { checkins, stats, filters } = await getCheckins();
  const serviceSchemas = generateServiceSchemas(checkins);
  const completedActions = generateCompletedActions(checkins);
  const faqSchema = generateFAQSchema(checkins, stats);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // WebPage schema
      {
        '@type': 'WebPage',
        '@id': 'https://www.idesignac.com/service-map#webpage',
        name: 'Service Map - Live Job Check-Ins Across Tucson | Intelligent Design',
        description: `Real-time verified service completions across ${stats.total_cities} cities. Over ${Number(stats.total_jobs).toLocaleString()} jobs completed by Intelligent Design in HVAC, plumbing, solar, electrical, and roofing.`,
        url: 'https://www.idesignac.com/service-map',
        isPartOf: { '@id': 'https://www.idesignac.com/#website' },
        about: { '@id': 'https://www.idesignac.com/#organization' },
        dateModified: new Date().toISOString(),
      },
      // BreadcrumbList schema
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.idesignac.com/service-map#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.idesignac.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Service Map',
            item: 'https://www.idesignac.com/service-map',
          },
        ],
      },
      // LocalBusiness schema (full)
      {
        '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'HVACBusiness', 'Plumber', 'Electrician', 'RoofingContractor'],
        '@id': 'https://www.idesignac.com/#organization',
        name: 'Intelligent Design Air Conditioning, Plumbing, Solar, & Electric',
        alternateName: ['Intelligent Design', 'iDesign AC', 'Intelligent Design Tucson'],
        description: 'Family-owned, veteran-owned home services company serving Tucson, AZ for 46+ years. Specializing in HVAC, plumbing, solar, electrical, and roofing with 80+ certified technicians.',
        url: 'https://www.idesignac.com/',
        telephone: '(520) 333-2665',
        email: 'info@idesignac.com',
        image: 'https://www.idesignac.com/images/logo.png',
        logo: 'https://www.idesignac.com/images/logo.png',
        foundingDate: '1980',
        numberOfEmployees: {
          '@type': 'QuantitativeValue',
          minValue: 80,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '3335 S Palo Verde Rd Suite 109',
          addressLocality: 'Tucson',
          addressRegion: 'AZ',
          postalCode: '85713',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 32.1876,
          longitude: -110.9258,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: String(reviewsData.aggregateRating.ratingValue),
          reviewCount: String(reviewsData.aggregateRating.reviewCount),
          bestRating: '5',
          worstRating: '1',
        },
        areaServed: filters.cities.map((city) => ({
          '@type': 'City',
          name: `${city.name}, AZ`,
        })),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Home Services',
          itemListElement: filters.services.map((service) => ({
            '@type': 'OfferCatalog',
            name: service.name,
            itemListElement: [{
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: service.name,
              },
            }],
          })),
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
        priceRange: '$$',
        paymentAccepted: ['Cash', 'Credit Card', 'Financing Available'],
        currenciesAccepted: 'USD',
        sameAs: [
          'https://www.facebook.com/IntelligentDesignAC',
          'https://www.instagram.com/intelligentdesigntucson/',
          'https://www.tiktok.com/@intelligentdesigntucson',
          'https://www.youtube.com/@intelligentdesigntucson',
          'https://www.bbb.org/us/az/tucson/profile/air-conditioning-contractors/intelligent-design-air-conditioning-plumbing-solar-electric-1286-1000072498',
        ],
        knowsAbout: [
          'Air Conditioning Repair', 'AC Installation', 'HVAC Maintenance',
          'Plumbing Repair', 'Water Heater Installation', 'Drain Cleaning',
          'Solar Panel Installation', 'Solar Battery Storage',
          'Electrical Wiring', 'Panel Upgrades', 'EV Charger Installation',
          'Roof Repair', 'Roof Coating', 'ThermalCork Roof Coating',
          'Furnace Repair', 'Heat Pump Installation', 'Ductless Mini Split',
        ],
        slogan: 'Tucson\'s Most Trusted Home Services Company',
        award: [
          'BBB A+ Rating',
          '5.0 Google Rating with 23,000+ Reviews',
          'Veteran-Owned Business',
        ],
      },
      // Service schemas with geo-coordinates
      ...serviceSchemas,
      // CompletedAction schemas — proof of active service delivery
      ...completedActions,
      // FAQ schema for featured snippets
      faqSchema,
      // ItemList schema for the check-in cards (helps with rich results)
      {
        '@type': 'ItemList',
        '@id': 'https://www.idesignac.com/service-map#checkin-list',
        name: 'Recent Service Completions by Intelligent Design',
        description: `The ${checkins.length} most recent verified job completions across the greater Tucson area.`,
        numberOfItems: checkins.length,
        itemListElement: checkins.slice(0, 50).map((checkin, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: `${checkin.service_type} in ${checkin.city}, AZ ${checkin.zip}`,
          description: checkin.description,
          url: `https://www.idesignac.com/service-map#service-${checkin.id}`,
        })),
      },
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
