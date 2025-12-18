/**
 * Place Schema Generator
 * Creates a Place entity for enhanced Google Maps and Apple Maps visibility
 * 
 * Place schema establishes the physical location as a distinct entity,
 * separate from the business entity (Organization/LocalBusiness).
 * This improves local search signals and Maps integration.
 */

import { BUSINESS_INFO } from './constants';
import { reviewsData } from '@/data/reviews';

export interface PlaceSchemaOptions {
  canonicalUrl: string;
  includeOpeningHours?: boolean;
  includeRating?: boolean;
}

export function generatePlaceSchema(options: PlaceSchemaOptions) {
  const {
    canonicalUrl,
    includeOpeningHours = true,
    includeRating = true
  } = options;

  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${canonicalUrl}#place`,
    "name": BUSINESS_INFO.name,
    "description": "Headquarters of Intelligent Design - Family and veteran-owned home services company serving Tucson, Arizona since 1979.",
    "telephone": BUSINESS_INFO.phone,
    "url": canonicalUrl,
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
    "hasMap": "https://www.google.com/maps/place/Intelligent+Design+Air+Conditioning/@32.2655122,-110.9540688,17z",
    "isAccessibleForFree": true,
    "publicAccess": true
  };

  if (includeOpeningHours) {
    schema.openingHoursSpecification = [
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
        "description": "Emergency services available 24/7"
      }
    ];
  }

  if (includeRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": reviewsData.aggregateRating.ratingValue,
      "reviewCount": reviewsData.aggregateRating.reviewCount,
      "bestRating": reviewsData.aggregateRating.bestRating
    };
  }

  return schema;
}
