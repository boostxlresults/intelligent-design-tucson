/**
 * Multi-Category LocalBusiness Schema Generator
 * Creates separate LocalBusiness schemas for each service category (HVAC, Plumbing, etc.)
 * Optimizes for Google Business Profile secondary categories
 * Enhanced with zip code coverage for AI SEO optimization
 */

import { gbpCategoriesData } from '@/data/gbpCategories';
import { BUSINESS_INFO } from './constants';
import { generateAggregateRatingSchema } from './generateAggregateRatingSchema';
import { reviewsData } from '@/data/reviews';
import { generateZipCodeSchemas } from './zipCodes';

export interface MultiCategoryLocalBusinessOptions {
  categories?: string[]; // Specific categories to generate (default: all)
  includeRatings?: boolean; // Include aggregate rating (default: true)
  includeMap?: boolean; // Include Google Maps link (default: true)
  canonicalUrl: string;
  location?: string; // Specific location for geo-targeted schema
}

export function generateMultiCategoryLocalBusinessSchemas(options: MultiCategoryLocalBusinessOptions) {
  const { 
    categories,
    includeRatings = true,
    includeMap = true,
    canonicalUrl,
    location
  } = options;

  const gbpCategories = gbpCategoriesData.categories;
  const categoriesToGenerate = categories || Object.keys(gbpCategories);

  return categoriesToGenerate.map(categoryKey => {
    const category = gbpCategories[categoryKey as keyof typeof gbpCategories];
    if (!category) return null;

    const schema: any = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", category.gbpCategory],
      "@id": `${canonicalUrl}#${categoryKey}`,
      "name": `${BUSINESS_INFO.name} - ${category.name}`,
      "alternateName": category.alternateNames,
      "description": category.description,
      "url": canonicalUrl,
      "telephone": BUSINESS_INFO.phone,
      "email": BUSINESS_INFO.email,
      "priceRange": category.priceRange,
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
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": BUSINESS_INFO.geo.latitude,
            "longitude": BUSINESS_INFO.geo.longitude
          },
          "geoRadius": `${category.serviceRadius} mi`
        },
        ...generateZipCodeSchemas()
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${category.name} Services`,
        "itemListElement": category.services.map((service: string, index: number) => ({
          "@type": "Offer",
          "position": index + 1,
          "itemOffered": {
            "@type": "Service",
            "name": service,
            "provider": {
              "@type": "LocalBusiness",
              "name": BUSINESS_INFO.name
            }
          }
        }))
      },
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

    // Include aggregate rating
    if (includeRatings) {
      schema.aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": reviewsData.aggregateRating.ratingValue,
        "reviewCount": reviewsData.aggregateRating.reviewCount,
        "bestRating": reviewsData.aggregateRating.bestRating
      };
    }

    // Add location-specific data if provided
    if (location && gbpCategoriesData.serviceLocations[location as keyof typeof gbpCategoriesData.serviceLocations]) {
      const locationData = gbpCategoriesData.serviceLocations[location as keyof typeof gbpCategoriesData.serviceLocations];
      schema.areaServed = {
        "@type": "City",
        "name": locationData.name,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": locationData.coordinates.latitude,
          "longitude": locationData.coordinates.longitude
        }
      };
      
      // Add location-specific Google Maps link
      if (includeMap) {
        // Properly URL-encode all special characters (spaces, ampersands, slashes, etc.)
        const categoryQuery = encodeURIComponent(category.gbpCategory);
        const locationQuery = encodeURIComponent(locationData.name);
        schema.hasMap = `https://www.google.com/maps/search/${categoryQuery}+in+${locationQuery},+AZ/@${locationData.coordinates.latitude},${locationData.coordinates.longitude},14z`;
      }
    } else {
      // Add HQ Google Maps link if no specific location
      if (includeMap) {
        schema.hasMap = `https://www.google.com/maps/place/Intelligent+Design+Air+Conditioning/@${BUSINESS_INFO.geo.latitude},${BUSINESS_INFO.geo.longitude},17z`;
      }
    }

    // Add category-specific knowledge graph signals
    schema.knowsAbout = category.services.slice(0, 10); // Top 10 services for this category

    return schema;
  }).filter(Boolean); // Remove any null entries
}
