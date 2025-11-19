/**
 * Canonical Business Profile for Schema Markup
 * 
 * Single source of truth for all NAP (Name, Address, Phone) data across all service schemas.
 * Ensures consistency with homepage Schema.tsx and Google Business Profile.
 * 
 * CRITICAL: Do NOT modify these values without updating:
 * - Homepage Schema.tsx
 * - Google Business Profile
 * - All directory listings (BBB, Yelp, etc.)
 */

export const BUSINESS_INFO = {
  name: "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
  alternateName: ["Intelligent Design", "Intelligent Design Tucson", "Intelligent Design AC"],
  legalName: "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
  url: "https://www.idesignac.com",
  logo: {
    "@type": "ImageObject" as const,
    url: "https://www.idesignac.com/logo.png",
    width: 240,
    height: 48
  },
  image: "https://www.idesignac.com/logo.png",
  telephone: "+1-520-333-2665",
  email: "info@idesignac.com",
  foundingDate: "1979",
  slogan: "Tucson's Highest-Rated Home Service Experts",
  priceRange: "$$",
  currenciesAccepted: "USD",
  
  address: {
    "@type": "PostalAddress" as const,
    streetAddress: "1145 E Fort Lowell Rd",
    addressLocality: "Tucson",
    addressRegion: "AZ",
    postalCode: "85719",
    addressCountry: "US"
  },
  
  geo: {
    "@type": "GeoCoordinates" as const,
    latitude: 32.2655122,
    longitude: -110.9540688
  },
  
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    opens: "00:00",
    closes: "23:59"
  },
  
  aggregateRating: {
    "@type": "AggregateRating" as const,
    ratingValue: 4.97,
    reviewCount: 22000,
    bestRating: 5,
    worstRating: 1
  },
  
  paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Check", "Financing Available"],
  
  sameAs: [
    "https://www.facebook.com/IntelligentDesignAC/",
    "https://www.instagram.com/intelligentdesigntucson/",
    "https://www.tiktok.com/@intelligentdesigntucson",
    "https://www.youtube.com/@Idesignac",
    "https://www.linkedin.com/company/intelligent-design-air-conditioning-plumbing-solar-electric/",
    "https://www.bbb.org/us/az/tucson/profile/air-conditioning-contractor/intelligent-design-air-conditioning-plumbing-solar-electric-1286-20032256",
    "https://www.yelp.com/biz/intelligent-design-tucson",
    "https://maps.app.goo.gl/eLz89dNv9q3MdQ9s8"
  ],
  
  award: [
    "BBB A+ Accredited Business",
    "Google Guaranteed"
  ],
  
  knowsLanguage: ["en-US"]
};

/**
 * Area Served - All cities covered by Intelligent Design
 * Used in service schemas to define service area coverage
 */
export const AREA_SERVED = [
  {
    "@type": "City" as const,
    name: "Tucson",
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Tucson",
      addressRegion: "AZ",
      addressCountry: "US"
    }
  },
  {
    "@type": "City" as const,
    name: "Oro Valley",
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Oro Valley",
      addressRegion: "AZ",
      addressCountry: "US"
    }
  },
  {
    "@type": "City" as const,
    name: "Marana",
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Marana",
      addressRegion: "AZ",
      addressCountry: "US"
    }
  },
  {
    "@type": "City" as const,
    name: "Vail",
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Vail",
      addressRegion: "AZ",
      addressCountry: "US"
    }
  },
  {
    "@type": "City" as const,
    name: "Sahuarita",
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Sahuarita",
      addressRegion: "AZ",
      addressCountry: "US"
    }
  },
  {
    "@type": "City" as const,
    name: "Green Valley",
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Green Valley",
      addressRegion: "AZ",
      addressCountry: "US"
    }
  },
  {
    "@type": "City" as const,
    name: "Catalina Foothills",
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Catalina Foothills",
      addressRegion: "AZ",
      addressCountry: "US"
    }
  },
  {
    "@type": "City" as const,
    name: "Catalina",
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Catalina",
      addressRegion: "AZ",
      addressCountry: "US"
    }
  },
  {
    "@type": "City" as const,
    name: "Casas Adobes",
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Casas Adobes",
      addressRegion: "AZ",
      addressCountry: "US"
    }
  },
  {
    "@type": "City" as const,
    name: "Flowing Wells",
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Flowing Wells",
      addressRegion: "AZ",
      addressCountry: "US"
    }
  },
  {
    "@type": "City" as const,
    name: "Tanque Verde",
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Tanque Verde",
      addressRegion: "AZ",
      addressCountry: "US"
    }
  },
  {
    "@type": "City" as const,
    name: "Corona de Tucson",
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Corona de Tucson",
      addressRegion: "AZ",
      addressCountry: "US"
    }
  },
  {
    "@type": "City" as const,
    name: "Drexel Heights",
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Drexel Heights",
      addressRegion: "AZ",
      addressCountry: "US"
    }
  },
  {
    "@type": "City" as const,
    name: "Avra Valley",
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Avra Valley",
      addressRegion: "AZ",
      addressCountry: "US"
    }
  },
  {
    "@type": "City" as const,
    name: "Picture Rocks",
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Picture Rocks",
      addressRegion: "AZ",
      addressCountry: "US"
    }
  },
  {
    "@type": "City" as const,
    name: "Tucson Estates",
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Tucson Estates",
      addressRegion: "AZ",
      addressCountry: "US"
    }
  },
  {
    "@type": "City" as const,
    name: "Rillito",
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Rillito",
      addressRegion: "AZ",
      addressCountry: "US"
    }
  },
  {
    "@type": "City" as const,
    name: "Red Rock",
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Red Rock",
      addressRegion: "AZ",
      addressCountry: "US"
    }
  },
  {
    "@type": "City" as const,
    name: "Rita Ranch",
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Rita Ranch",
      addressRegion: "AZ",
      addressCountry: "US"
    }
  },
  {
    "@type": "City" as const,
    name: "Casa Grande",
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Casa Grande",
      addressRegion: "AZ",
      addressCountry: "US"
    }
  }
];
