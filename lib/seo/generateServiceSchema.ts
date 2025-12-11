/**
 * Service Schema Generator for Next.js Migration
 * Eliminates duplicate schema components across 69 service pages
 * Enhanced with zip code coverage and brand/variant data for AI SEO optimization
 * 
 * Schema.org properties:
 * - hasBrand: Links to manufacturer brands (Lennox, Trane, Rheem, etc.)
 * - hasVariant: Links to service variations (tankless, ductless, etc.)
 * - additionalType: More specific service categorization
 * 
 * Usage in Next.js page:
 * import { generateServiceSchema } from '@/lib/seo/generateServiceSchema';
 * const schema = generateServiceSchema({ serviceName: 'HVAC', location: 'Tucson', ... });
 */

import { BUSINESS_INFO } from './constants';
import { generateZipCodeSchemas, getZipsForArea } from './zipCodes';
import { getBrandDataForCategory, generateBrandSchemas, generateVariantSchemas } from './serviceBrands';

export interface ServiceSchemaOptions {
  serviceName: string;
  description: string;
  location?: string;
  services?: string[]; // List of specific services offered
  priceRange?: string; // e.g., "$$", "$$$"
  canonicalUrl: string;
  imageUrl?: string;
  category?: string; // Service category for brand matching (HVAC, Plumbing, etc.)
  includeBrands?: boolean; // Whether to include hasBrand (default: true)
  includeVariants?: boolean; // Whether to include hasVariant (default: true)
}

export function generateServiceSchema(options: ServiceSchemaOptions) {
  const {
    serviceName,
    description,
    location,
    services = [],
    priceRange = '$$',
    canonicalUrl,
    imageUrl,
    category,
    includeBrands = true,
    includeVariants = true
  } = options;

  // Enhanced areaServed with zip codes for AI search optimization
  const zipCodeSchemas = generateZipCodeSchemas();
  
  const areaServed = location ? [
    {
      "@type": "City",
      "name": location,
      "containedIn": {
        "@type": "State",
        "name": "Arizona"
      }
    },
    ...zipCodeSchemas
  ] : [
    {
      "@type": "State",
      "name": "Arizona"
    },
    ...zipCodeSchemas
  ];

  // Get brand data based on service name or category
  const brandData = getBrandDataForCategory(category || serviceName);

  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "serviceType": serviceName,
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

  // Add hasBrand - manufacturer brands we install/service
  if (includeBrands && brandData && brandData.brands.length > 0) {
    schema.brand = generateBrandSchemas(brandData.brands);
  }

  // Add hasVariant - service variations available
  if (includeVariants && brandData && brandData.variants.length > 0) {
    schema.hasVariant = generateVariantSchemas(brandData.variants);
  }

  // Add additionalType for more specific categorization
  if (brandData && brandData.additionalTypes.length > 0) {
    schema.additionalType = brandData.additionalTypes;
  }

  // Add service catalog if specific services provided
  if (services.length > 0) {
    schema.hasOfferCatalog = {
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
