/**
 * Schema Helper Functions
 * 
 * Utilities for building consistent schema markup across all service pages.
 * Uses canonical business data from constants.ts to ensure NAP consistency.
 */

import { BUSINESS_INFO, AREA_SERVED } from './constants';

export interface ServiceSchemaParams {
  serviceType: string;
  description: string;
  areaServed?: typeof AREA_SERVED;
}

export interface BreadcrumbItem {
  position: number;
  name: string;
  item: string;
}

/**
 * Builds a Service schema with canonical business information
 * 
 * @param params - Service-specific parameters (serviceType, description)
 * @returns Complete Service schema object ready for JSON-LD injection
 */
export function buildServiceSchema(params: ServiceSchemaParams) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: params.serviceType,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_INFO.name,
      image: BUSINESS_INFO.image,
      telephone: BUSINESS_INFO.telephone,
      url: BUSINESS_INFO.url,
      address: BUSINESS_INFO.address,
      geo: BUSINESS_INFO.geo,
      aggregateRating: BUSINESS_INFO.aggregateRating,
      priceRange: BUSINESS_INFO.priceRange,
      openingHoursSpecification: BUSINESS_INFO.openingHoursSpecification
    },
    areaServed: params.areaServed || AREA_SERVED,
    description: params.description,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD"
    }
  };
}

/**
 * Builds a BreadcrumbList schema
 * 
 * @param breadcrumbs - Array of breadcrumb items with position, name, and URL
 * @returns Complete BreadcrumbList schema object ready for JSON-LD injection
 * 
 * @example
 * buildBreadcrumbSchema([
 *   { position: 1, name: "Home", item: "https://www.idesignac.com" },
 *   { position: 2, name: "Services", item: "https://www.idesignac.com/services" },
 *   { position: 3, name: "AC Installation", item: "https://www.idesignac.com/ac-installation-tucson" }
 * ])
 */
export function buildBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map(crumb => ({
      "@type": "ListItem",
      position: crumb.position,
      name: crumb.name,
      item: crumb.item
    }))
  };
}

/**
 * IMPORTANT NOTE ON FAQ SCHEMAS:
 * 
 * DO NOT use this helper to build FAQ schemas for service pages.
 * 
 * The ServiceFAQ component (client/src/components/ServiceFAQ.tsx) automatically
 * generates FAQ schema from the FAQ data in client/src/data/faqs/*.ts
 * 
 * Creating duplicate FAQ schemas will cause validation errors and confuse Google.
 * 
 * The ServiceFAQ component handles:
 * - Rendering FAQ UI (accordion interface)
 * - Generating FAQPage JSON-LD schema automatically
 * - Ensuring consistency between visible FAQs and schema markup
 * 
 * When refactoring schema files, REMOVE any hardcoded FAQ schemas.
 */
