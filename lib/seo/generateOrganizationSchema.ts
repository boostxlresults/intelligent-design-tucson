/**
 * Organization Schema Generator
 * Primary organization schema for homepage and sitewide use
 * Enhanced with zip code coverage for AI SEO optimization
 */

import { BUSINESS_INFO } from './constants';
import { reviewsData } from '@/data/reviews';
import { generateZipCodeSchemas } from './zipCodes';

export interface OrganizationSchemaOptions {
  canonicalUrl: string;
  includeRating?: boolean;
  includeContactPoints?: boolean;
  includeSameAs?: boolean; // Social media links + GBP
  includeMemberOf?: boolean; // BBB, Pearl certifications
  includeAwards?: boolean; // Industry awards/certifications
  includeMap?: boolean; // Google Maps link
}

export function generateOrganizationSchema(options: OrganizationSchemaOptions) {
  const { 
    canonicalUrl,
    includeRating = true,
    includeContactPoints = true,
    includeSameAs = true,
    includeMemberOf = true,
    includeAwards = true,
    includeMap = true
  } = options;

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${canonicalUrl}#organization`,
    "name": BUSINESS_INFO.name,
    "url": canonicalUrl,
    "logo": `${canonicalUrl}/logo.png`,
    "image": `${canonicalUrl}/og-image.jpg`,
    "description": "Family and veteran-owned home services company providing HVAC, plumbing, solar, electrical, and roofing services in Tucson, Arizona. Licensed, insured, and trusted by over 22,000 customers.",
    "telephone": BUSINESS_INFO.phone,
    "email": BUSINESS_INFO.email,
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
    "areaServed": [
      {
        "@type": "State",
        "name": "Arizona"
      },
      ...generateZipCodeSchemas()
    ],
    "slogan": "Your Comfort is Our Priority",
    "foundingDate": "2010",
    "knowsAbout": [
      "HVAC Installation",
      "Air Conditioning Repair",
      "Heating System Repair",
      "Furnace Installation",
      "Heat Pump Service",
      "Ductless Mini-Split Systems",
      "Indoor Air Quality",
      "Plumbing Services",
      "Water Heater Installation",
      "Drain Cleaning",
      "Leak Detection",
      "Solar Panel Installation",
      "Solar Energy Systems",
      "Battery Storage",
      "Generator Installation",
      "Electrical Services",
      "Electrical Panel Upgrades",
      "Lighting Installation",
      "Roofing Services",
      "Roof Repair",
      "Roof Coating",
      "Emergency Services",
      "24/7 HVAC Repair",
      "Emergency Plumbing"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": "Arizona ROC Licensed Contractor"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "Veteran-Owned Business"
      }
    ]
  };

  // Add aggregate rating
  if (includeRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": reviewsData.aggregateRating.ratingValue,
      "reviewCount": reviewsData.aggregateRating.reviewCount,
      "bestRating": reviewsData.aggregateRating.bestRating
    };
  }

  // Add contact points
  if (includeContactPoints) {
    schema.contactPoint = [
      {
        "@type": "ContactPoint",
        "telephone": BUSINESS_INFO.phone,
        "contactType": "customer service",
        "areaServed": "AZ",
        "availableLanguage": ["English", "Spanish"],
        "contactOption": ["TollFree"]
      },
      {
        "@type": "ContactPoint",
        "telephone": BUSINESS_INFO.phone,
        "contactType": "emergency",
        "areaServed": "AZ",
        "availableLanguage": ["English", "Spanish"],
        "hoursAvailable": "24/7"
      }
    ];
  }

  // Add social media links + Google Business Profile
  if (includeSameAs) {
    schema.sameAs = [
      "https://www.facebook.com/IDesignAC",
      "https://www.instagram.com/intelligentdesignac/",
      "https://www.linkedin.com/company/intelligent-design-hvac",
      "https://www.youtube.com/@intelligentdesigntucson",
      // TODO: Replace with actual Google Business Profile URL
      // Format: https://maps.app.goo.gl/[unique-id] or https://g.page/[business-name]
      "https://www.google.com/maps/place/Intelligent+Design+Air+Conditioning"
    ];
  }

  // Add Google Maps link for enhanced local SEO
  if (includeMap) {
    schema.hasMap = "https://www.google.com/maps/place/Intelligent+Design+Air+Conditioning/@32.2655122,-110.9540688,17z";
  }

  // Add membership/accreditation (BBB, industry organizations)
  if (includeMemberOf) {
    schema.memberOf = [
      {
        "@type": "Organization",
        "name": "Better Business Bureau",
        "alternateName": "BBB",
        // TODO: Add actual BBB profile URL when available
        // "url": "https://www.bbb.org/us/az/tucson/profile/[business-id]"
      },
      {
        "@type": "Organization",
        "name": "Contractor License Board",
        "alternateName": "Arizona ROC"
      }
    ];
  }

  // Add industry awards and certifications for trust signals
  if (includeAwards) {
    schema.awards = [
      "BBB A+ Rating",
      "22,000+ Five-Star Reviews",
      "Family-Owned Business",
      "Veteran-Owned Business",
      "Arizona ROC Licensed",
      // TODO: Add verifiable awards/certifications:
      // - Carrier Factory Authorized Dealer
      // - Trane Comfort Specialist
      // - NATE Certified Technicians
      // - Better Business Bureau Torch Award (if applicable)
      // - Angie's List Super Service Award (if applicable)
    ];
  }

  return schema;
}
