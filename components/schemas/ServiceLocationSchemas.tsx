/**
 * Service × Location Page Schemas - COMPREHENSIVE VERSION
 * Uses centralized schema registry for maximum SEO impact
 * Generates 6-8+ schemas per page including Service, Geo-Enhanced LocalBusiness, 
 * AggregateRating, FAQ, GeoCircle, Offers
 */

import { normalizeFAQs, hasValidFAQs } from './faqHelpers';
import { getPageSchemas } from '@/lib/seo/schemaRegistry';
import type { ServicePageData } from '@/types/services';

// Map service categories to GBP categories for multi-category LocalBusiness schemas
const CATEGORY_MAP: Record<string, string[]> = {
  'HVAC': ['HVACCompany'],
  'Plumbing': ['Plumber'],
  'Electrical': ['Electrician'],
  'Solar': ['SolarEnergyEquipmentSupplier'],
  'Roofing': ['RoofingContractor']
};

/**
 * Generate comprehensive schema array for service × location pages
 * Returns 6-8+ schemas: Service, Geo-Enhanced LocalBusiness, AggregateRating, FAQ, GeoCircle, Offers
 */
export function getServiceLocationSchemas(
  data: ServicePageData,
  serviceSlug: string,
  locationSlug: string,
  locationName: string
) {
  // Extract and normalize FAQs
  const faqs = hasValidFAQs(data.faqs) ? normalizeFAQs(data.faqs) : [];
  
  // Map category to GBP categories
  const categories = CATEGORY_MAP[data.category] || [];
  
  // Determine if this service should include offers
  const includeOffers = ['ac-repair', 'ac-installation', 'hvac', 'furnace', 'plumbing', 'electrical'].some(
    keyword => serviceSlug.includes(keyword)
  );

  // Build canonical URL (omit location segment for service-only pages)
  const canonicalUrl = locationSlug 
    ? `https://www.intelligentdesignac.com/services/${serviceSlug}/${locationSlug}`
    : `https://www.intelligentdesignac.com/services/${serviceSlug}`;
  
  // Use comprehensive schema registry with geo-enhancement
  return getPageSchemas({
    pageType: 'service-location',
    canonicalUrl,
    pageData: {
      serviceName: data.serviceName,
      serviceDescription: data.description,
      location: locationName, // Full location name (e.g., "Oro Valley")
      locationDescription: `Professional ${data.serviceName} services in ${locationName}, AZ`,
      services: [data.serviceName], // Array of services offered
      categories, // GBP categories for multi-category LocalBusiness
      faqs, // Normalized FAQ array
      includeOffers, // Whether to include promotional offers
    }
  });
}
