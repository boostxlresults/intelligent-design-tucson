/**
 * Service Area / Location Page Schemas - COMPREHENSIVE VERSION
 * Uses centralized schema registry for maximum SEO impact
 * Generates 5-6+ schemas per page including Geo-Enhanced LocalBusiness, 
 * AggregateRating, Reviews, GeoCircle
 */

import { getPageSchemas } from '@/lib/seo/schemaRegistry';
import { SITE_URL } from '@/lib/constants';
import type { LocationPageData } from '@/types/services';

/**
 * Generate comprehensive schema array for service area pages
 * Returns 5-6+ schemas: LocalBusiness, GeoCircle, AggregateRating, Reviews
 */
export function getLocationSchemas(data: LocationPageData) {
  // Extract services from the services array
  const services = data.services ? data.services.map(s => s.title) : [];
  
  // Use comprehensive schema registry with geo-enhancement and correct domain
  return getPageSchemas({
    pageType: 'service-area',
    canonicalUrl: `${SITE_URL}/${data.slug}`,
    pageData: {
      location: data.locationDisplayName || data.locationName, // "Oro Valley" format
      locationDescription: data.description,
      services, // All services offered in this area
      faqs: data.faqs || [], // Location-specific FAQs
      zipCodes: data.zipCodes, // Location-specific zip codes for PostalCodeSpecification
    }
  });
}
