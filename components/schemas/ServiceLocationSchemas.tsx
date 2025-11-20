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
  
  // Extract HowTo data from content sections
  let howToGuide: any = undefined;
  if (data.content?.sections) {
    const howToSection = data.content.sections.find((section: any) => section.type === 'howto');
    // Type narrowing: verify this is actually a HowTo section with required fields
    if (howToSection && 'steps' in howToSection && 'heading' in howToSection && 'description' in howToSection) {
      howToGuide = {
        name: howToSection.heading,
        description: howToSection.description,
        steps: howToSection.steps.map((step: any) => ({
          name: step.name,
          text: step.description,
          duration: step.duration,
          tools: step.tools
        })),
        // Calculate total time from all steps (rough estimate)
        totalTime: howToSection.steps.length > 0 ? `PT${howToSection.steps.reduce((acc: number, s: any) => {
          const mins = parseInt(s.duration) || 0;
          return acc + mins;
        }, 0)}M` : undefined
      };
    }
  }
  
  // Use comprehensive schema registry with geo-enhancement + HowTo
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
      howToGuide, // ✅ NEW - Extracted from content sections
    }
  });
}
