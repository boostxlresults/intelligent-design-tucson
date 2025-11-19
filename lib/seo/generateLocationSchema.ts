/**
 * LocalBusiness Schema Generator for Next.js Migration
 * Used on location pages and service+location pages
 * Enhanced with zip code coverage for AI SEO optimization
 * 
 * Usage in Next.js page:
 * import { generateLocationSchema } from '@/lib/seo/generateLocationSchema';
 * const schema = generateLocationSchema({ location: 'Tucson', services: [...] });
 */

import { BUSINESS_INFO } from './constants';
import { gbpCategoriesData } from '@/data/gbpCategories';
import { generateZipCodeSchemas } from './zipCodes';

export interface LocationSchemaOptions {
  location: string;
  services?: string[]; // List of services offered in this location
  description?: string;
  canonicalUrl: string;
  imageUrl?: string;
  includeGeoCircle?: boolean; // Include service radius (default: true)
  serviceRadius?: number; // Service radius in miles (default: 50)
  zipCodes?: string[]; // Location-specific zip codes for PostalCodeSpecification
}

export function generateLocationSchema(options: LocationSchemaOptions) {
  const {
    location,
    services = [],
    description,
    canonicalUrl,
    imageUrl,
    includeGeoCircle = true,
    serviceRadius = 50,
    zipCodes
  } = options;

  // Get location coordinates if available
  const locationData = gbpCategoriesData.serviceLocations[location.toLowerCase().replace(/\s+/g, '-') as keyof typeof gbpCategoriesData.serviceLocations];

  // Generate DefinedRegion objects from location-specific zip codes
  // DefinedRegion is the Schema.org compliant type for postal code targeting
  // Falls back to all service zip codes if none provided
  const zipCodeSchemas = zipCodes && zipCodes.length > 0
    ? zipCodes.map(zip => ({
        "@type": "DefinedRegion" as const,
        "postalCode": zip,
        "addressCountry": "US"
      }))
    : generateZipCodeSchemas();

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${BUSINESS_INFO.name} - ${location}`,
    "description": description || `Professional home services in ${location}, AZ. HVAC, plumbing, solar, electrical, and roofing services.`,
    "image": imageUrl || `${canonicalUrl.split('/').slice(0, 3).join('/')}/og-image.jpg`,
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address.street,
      "addressLocality": BUSINESS_INFO.address.city,
      "addressRegion": BUSINESS_INFO.address.state,
      "postalCode": BUSINESS_INFO.address.zip,
      "addressCountry": BUSINESS_INFO.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.geo.latitude,
      "longitude": BUSINESS_INFO.geo.longitude
    },
    "url": canonicalUrl,
    "areaServed": includeGeoCircle ? [
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": locationData?.coordinates.latitude || BUSINESS_INFO.geo.latitude,
          "longitude": locationData?.coordinates.longitude || BUSINESS_INFO.geo.longitude
        },
        "geoRadius": `${serviceRadius} mi`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location,
          "addressRegion": "AZ"
        }
      },
      ...zipCodeSchemas
    ] : [
      {
        "@type": "City",
        "name": location,
        "containedIn": {
          "@type": "State",
          "name": "Arizona"
        }
      },
      ...zipCodeSchemas
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "00:00",
        "closes": "23:59",
        "description": "Emergency services only"
      }
    ]
  };

  // Add services if provided
  if (services.length > 0) {
    (schema as any).hasOfferCatalog = {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service
        }
      }))
    };
  }

  return schema;
}
