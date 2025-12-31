/**
 * HomeAndConstructionBusiness Schema Generator
 * Creates the parent HomeAndConstructionBusiness entity that encompasses all service categories
 * 
 * Schema hierarchy:
 * Organization > LocalBusiness > HomeAndConstructionBusiness > [HVACBusiness, Plumber, Electrician, RoofingContractor]
 * 
 * This provides a unified business entity for Google Maps and Apple Maps,
 * while specific service categories are handled by multi-category LocalBusiness schemas.
 */

import { BUSINESS_INFO } from './constants';
import { reviewsData } from '@/data/reviews';
import { generateZipCodeSchemas } from './zipCodes';

export interface HomeAndConstructionBusinessSchemaOptions {
  canonicalUrl: string;
  includeOpeningHours?: boolean;
  includeRating?: boolean;
  includeCredentials?: boolean;
}

export function generateHomeAndConstructionBusinessSchema(options: HomeAndConstructionBusinessSchemaOptions) {
  const {
    canonicalUrl,
    includeOpeningHours = true,
    includeRating = true,
    includeCredentials = true
  } = options;

  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${canonicalUrl}#homeandconstruction`,
    "name": BUSINESS_INFO.name,
    "alternateName": [
      "Intelligent Design",
      "Intelligent Design Tucson",
      "IDAC",
      "Wood's Plumbing"
    ],
    "description": "Full-service home improvement contractor providing HVAC, plumbing, electrical, roofing, and solar services. Family and veteran-owned, serving Tucson since 1979 with 23,000+ five-star reviews.",
    "url": canonicalUrl,
    "telephone": BUSINESS_INFO.phone,
    "email": BUSINESS_INFO.email,
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Financing Available",
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
    "areaServed": [
      {
        "@type": "State",
        "name": "Arizona"
      },
      {
        "@type": "City",
        "name": "Tucson",
        "containedIn": {
          "@type": "State",
          "name": "Arizona"
        }
      },
      ...generateZipCodeSchemas()
    ],
    "foundingDate": "1979",
    "slogan": "Your Comfort is Our Priority",
    "knowsAbout": [
      "Home Improvement",
      "HVAC Systems",
      "Plumbing Services",
      "Electrical Work",
      "Roofing",
      "Solar Energy",
      "Home Maintenance",
      "Emergency Repairs"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HVAC Installation & Repair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Plumbing Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Electrical Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roofing Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Solar Panel Installation"
        }
      }
    ]
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

  if (includeCredentials) {
    schema.hasCredential = [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": "Arizona ROC CR-39 Air Conditioning and Refrigeration License",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Arizona Registrar of Contractors"
        },
        "identifier": "ROC 276673"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": "Arizona ROC CR-37 Plumbing License",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Arizona Registrar of Contractors"
        },
        "identifier": "ROC 296386"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": "Arizona ROC CR-11 Electrical License",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Arizona Registrar of Contractors"
        },
        "identifier": "ROC 322375"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": "Arizona ROC CR-42 Roofing License",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Arizona Registrar of Contractors"
        },
        "identifier": "ROC 340962"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "Veteran-Owned Business"
      }
    ];

    schema.award = [
      "BBB A+ Rating",
      "23,000+ Five-Star Reviews",
      "Family-Owned Business Since 1979",
      "Veteran-Owned Business",
      "46+ Years of Experience"
    ];
  }

  return schema;
}
