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
    "description": "Family and veteran-owned home services company providing HVAC, plumbing, solar, electrical, and roofing services in Tucson, Arizona. Licensed, insured, and trusted by over 23,000 customers.",
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
    "foundingDate": "1979",
    "alternateName": [
      "Intelligent Design",
      "Intelligent Design Air Conditioning",
      "Intelligent Design Tucson",
      "IDAC",
      "ID Air Conditioning",
      "Intelligent Design HVAC",
      "Intelligent Design Plumbing",
      "Intelligent Design Solar",
      "Wood's Plumbing"
    ],
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

  // Add social media links + Google Business Profile + all directory citations
  // A comprehensive sameAs array strengthens Google's entity confidence,
  // which directly feeds Google Maps ranking signals and AI recommendation likelihood.
  if (includeSameAs) {
    schema.sameAs = [
      // ── SOCIAL MEDIA ──────────────────────────────────────────────────────────
      "https://www.facebook.com/IDesignAC",
      "https://www.instagram.com/intelligentdesigntucson/",
      "https://www.linkedin.com/company/intelligent-design-air-conditioning-plumbing-solar-electric/",
      "https://www.youtube.com/@Idesignac",
      "https://nextdoor.com/page/intelligent-design-air-conditioning-plumbing-solar-electric/",

      // ── GOOGLE & MAPS ─────────────────────────────────────────────────────────
      "https://g.page/r/CajVBZOPuZ56EBE/",
      "https://www.google.com/maps/place/Intelligent+Design+Air+Conditioning/@32.2655122,-110.9540688,17z",
      "https://maps.app.goo.gl/eLz89dNv9q3MdQ9s8",
      "https://www.mapquest.com/us/arizona/intelligent-design-air-conditioning-plumbing-solar-electric-528816274",
      "http://www.mapquest.com/places/-809304959/",

      // ── TIER 1 HOME SERVICE DIRECTORIES ──────────────────────────────────────
      "https://www.bbb.org/us/az/tucson/profile/air-conditioning-contractor/intelligent-design-air-conditioning-plumbing-solar-electric-1286-20032256",
      "https://www.yelp.com/biz/intelligent-design-air-conditioning-plumbing-solar-and-electric-tucson-2",
      "https://www.angi.com/companylist/us/az/tucson/intelligent-design-air-conditioning%2C-plumbing%2C-solar%2C-and-electric-reviews-6575296.htm",
      "https://www.homeadvisor.com/rated.IntelligentDesignAir.53385619.html",
      "https://www.thumbtack.com/az/tucson/central-air-conditioning-installation/intelligent-design-ac-plumbing-solar-electric/service/548875304630370309",
      "https://www.houzz.com/professionals/plumbing-contractors/oro-valley-az-us-probr0-bo~t_11817~r_5307540",
      "https://www.expertise.com/home-improvement/ac-repair/arizona/tucson",

      // ── YELLOW PAGES & GENERAL DIRECTORIES ───────────────────────────────────
      "https://www.yellowpages.com/tucson-az/mip/intelligent-design-air-conditioning-plumbing-solar-electric-578628936",
      "https://www.yellowpagesdirectory.com/?page=show&state=AZ&id=447907",
      "http://www.superpages.com/tucson-az/bpp/intelligent-design-air-conditioning-plumbing-solar-electric-578628936",
      "http://www.dexknows.com/tucson-az/bp/intelligent-design-air-conditioning-plumbing-solar-electric-578628936",
      "https://www.merchantcircle.com/intelligent-design-air-conditioning-plumbing-solar-electric-tucson-az",

      // ── CHAMBER & BUSINESS DIRECTORIES ───────────────────────────────────────
      "https://www.chamberofcommerce.com/business-directory/arizona/tucson/air-conditioning-contractor/2017386018-intelligent-design-air-conditioning-plumbing-solar-electric",
      "https://citysquares.com/b/intelligent-design-air-conditioning-plumbing-solar-electric-26291431",
      "https://www.golocal247.com/biz/intelligent-design-air-conditioning-plumbing-solar-electric/tucson-az/1038550",
      "https://www.showmelocal.com/profile.aspx?bid=16642088",
      "https://www.hotfrog.com/company/5364b01fe85803294a2711e5cf680637",
      "https://www.elocal.com/profile/23680948",
      "https://www.insiderpages.com/profile/23680948",

      // ── NICHE & AGGREGATOR DIRECTORIES ───────────────────────────────────────
      "https://www.brownbook.net/business/39921232/intelligent-design-air-conditioning-plumbing-solar-electric/",
      "https://www.cylex.us.com/company/intelligent-design-air-conditioning--plumbing--solar----electric-25381512.html",
      "https://www.8coupons.com/stores/local/intelligent-design-air-conditioning-plumbing-solar-electric-tucson-85719-2031443644",
      "https://www.mylocalservices.com/Intelligent+Design+Air+Conditioning+Plumbing+S-Tucson-Arizona-21449611.html",
      "https://tucson.opendi.us/10053785.html",
      "https://uscity.net/listing/intelligent_design_air_conditioning_plumbing_solar_electric-11143353",
      "https://www.tupalo.co/tucson-arizona/intelligent-design-air-conditioning-plumbing-solar-electric",
      "https://www.iglobal.co/united-states/tucson/intelligent-design-plumbing",
      "https://www.n49.com/biz/2626191",
      "https://www.ibegin.com/directory/visit/19335569",
      "https://www.hours.com/us/Intelligent-Design-Air-Conditioning-Plumbing-Solar-and-Electric/Catalina-Foothills/1145-E-Fort-Lowell-Rd/",
      "https://www.neustarlocaleze.biz/directory/us/?id=964700018",
      "https://local-listings.data-axle.com/places/JVNFFQ2P",
      "http://ezlocal.com/az/tucson/air-conditioning-contractor/0918776758",
      "https://us.centralindex.com/company/c4943ba23cfaad10323cfd423db2f9ad",
      "https://www.tellows.com/num/5203332665",
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
        "url": "https://www.bbb.org/us/az/tucson/profile/air-conditioning-contractor/intelligent-design-air-conditioning-plumbing-solar-electric-1286-20032256"
      },
      {
        "@type": "Organization",
        "name": "Contractor License Board",
        "alternateName": "Arizona ROC"
      }
    ];
  }

  // Add manufacturer brand partnerships for credibility
  schema.brand = [
    { "@type": "Brand", "name": "Carrier" },
    { "@type": "Brand", "name": "Trane" },
    { "@type": "Brand", "name": "Daikin" },
    { "@type": "Brand", "name": "Amana" },
    { "@type": "Brand", "name": "Goodman" },
    { "@type": "Brand", "name": "American Standard" },
    { "@type": "Brand", "name": "Desert Shield", "url": "https://desertshield.com" }
  ];

  // Add industry awards and certifications for trust signals
  if (includeAwards) {
    schema.awards = [
      "BBB A+ Rating",
      "23,000+ Five-Star Reviews",
      "Family-Owned Business Since 1979",
      "Veteran-Owned Business",
      "Arizona ROC Licensed",
      "46+ Years of Experience"
    ];
  }

  return schema;
}
