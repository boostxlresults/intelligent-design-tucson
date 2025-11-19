/**
 * Service Schema Generator for Next.js Migration
 * Eliminates duplicate schema components across 69 service pages
 * 
 * Usage in Next.js page:
 * import { generateServiceSchema } from '@/lib/seo/generateServiceSchema';
 * const schema = generateServiceSchema({ serviceName: 'HVAC', location: 'Tucson', ... });
 */

import { BUSINESS_INFO } from './constants';

export interface ServiceSchemaOptions {
  serviceName: string;
  description: string;
  location?: string;
  services?: string[]; // List of specific services offered
  priceRange?: string; // e.g., "$$", "$$$"
  canonicalUrl: string;
  imageUrl?: string;
}

export function generateServiceSchema(options: ServiceSchemaOptions) {
  const {
    serviceName,
    description,
    location,
    services = [],
    priceRange = '$$',
    canonicalUrl,
    imageUrl
  } = options;

  const areaServed = location ? {
    "@type": "City",
    "name": location,
    "containedIn": {
      "@type": "State",
      "name": "Arizona"
    }
  } : {
    "@type": "State",
    "name": "Arizona"
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": BUSINESS_INFO.name,
      "image": imageUrl || `${canonicalUrl.split('/').slice(0, 3).join('/')}/og-image.jpg`,
      "telephone": BUSINESS_INFO.phone,
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
      "priceRange": priceRange,
      "areaServed": areaServed
    },
    "areaServed": areaServed
  };

  // Add service catalog if specific services provided
  if (services.length > 0) {
    (schema as any).hasOfferCatalog = {
      "@type": "OfferCatalog",
      "name": `${serviceName} Services`,
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
