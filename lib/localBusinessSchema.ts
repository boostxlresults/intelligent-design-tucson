/**
 * HVACBusiness JSON-LD schema for Intelligent Design
 * Fires on every page via root layout — enables AI/LLM entity recognition,
 * Google AI Overviews citation, and local pack signals.
 *
 * Sources: GBP primary ChIJvQ3jnG501oYRqNUFk4-5nno, idesignac.com
 */

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["HVACBusiness", "Plumber", "Electrician"],
  "@id": "https://www.idesignac.com/#business",
  "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
  "alternateName": ["Intelligent Design AC", "Intelligent Design Tucson"],
  "url": "https://www.idesignac.com",
  "logo": "https://www.idesignac.com/logo.png",
  "image": "https://www.idesignac.com/og-image.jpg",
  "telephone": "+15203332665",
  "email": "service@idesignac.com",
  "description": "Tucson's top-rated HVAC, plumbing, solar, electrical, and roofing contractor. Family & veteran-owned. Expert AC repair, installation, and maintenance serving Tucson and Southern Arizona since 1979.",
  "foundingDate": "1979",
  "slogan": "Tucson's Most Trusted Home Services",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1145 E Fort Lowell Rd",
    "addressLocality": "Tucson",
    "addressRegion": "AZ",
    "postalCode": "85719",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.2553,
    "longitude": -110.9298
  },
  "hasMap": "https://maps.app.goo.gl/sB2Uyxac4wFGzodL6",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Tucson", "sameAs": "https://www.wikidata.org/wiki/Q18575" },
    { "@type": "City", "name": "Oro Valley" },
    { "@type": "City", "name": "Marana" },
    { "@type": "City", "name": "Vail" },
    { "@type": "City", "name": "Sahuarita" },
    { "@type": "City", "name": "Green Valley" },
    { "@type": "AdministrativeArea", "name": "Catalina Foothills" }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 32.2553,
      "longitude": -110.9298
    },
    "geoRadius": "80467"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Home Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heating Repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plumbing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solar Installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electrical" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roofing" } }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "3732",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.facebook.com/IntelligentDesignAC",
    "https://www.google.com/maps/place/?q=place_id:ChIJvQ3jnG501oYRqNUFk4-5nno",
    "https://www.yelp.com/biz/intelligent-design-air-conditioning-tucson",
    "https://www.bbb.org/us/az/tucson/profile/heating-and-air-conditioning/intelligent-design-air-conditioning-1126-27006593"
  ],
  "knowsAbout": [
    "HVAC systems", "Air conditioning repair", "Furnace repair", "Heat pump installation",
    "Plumbing repair", "Solar panel installation", "Electrical panel upgrade", "Roofing"
  ]
};
