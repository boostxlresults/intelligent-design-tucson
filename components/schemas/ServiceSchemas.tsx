/**
 * Service Page Schemas - COMPREHENSIVE VERSION
 * Uses centralized schema registry for maximum SEO impact
 * Generates 5-7+ schemas per page including Service, LocalBusiness, AggregateRating, FAQ, Offers
 * Plus HowTo and Case Study schemas for AI SEO optimization
 */

import { normalizeFAQs, hasValidFAQs } from './faqHelpers';
import { getPageSchemas } from '@/lib/seo/schemaRegistry';
import type { ServicePageData, HowToSection, CaseStudySection } from '@/types/services';

// Map service categories to GBP categories for multi-category LocalBusiness schemas
const CATEGORY_MAP: Record<string, string[]> = {
  'HVAC': ['HVACCompany'],
  'Plumbing': ['Plumber'],
  'Electrical': ['Electrician'],
  'Solar': ['SolarEnergyEquipmentSupplier'],
  'Roofing': ['RoofingContractor']
};

/**
 * Generate HowTo schema from HowToSection
 */
function generateHowToSchema(section: HowToSection, canonicalUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": section.heading,
    "description": section.description || section.heading,
    "url": canonicalUrl,
    "step": section.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.description,
      "tool": step.tools && step.tools.length > 0 ? step.tools.map(tool => ({
        "@type": "HowToTool",
        "name": tool
      })) : undefined,
      "url": `${canonicalUrl}#${step.id}`
    }))
  };
}

/**
 * Generate schema from CaseStudySection with PropertyValue results
 */
function generateCaseStudySchema(section: CaseStudySection, canonicalUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": section.title,
    "description": section.challenge,
    "url": canonicalUrl,
    "author": {
      "@type": "Organization",
      "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.intelligentdesignac.com/logo.png"
      }
    },
    "datePublished": section.timeframe,
    "about": {
      "@type": "Service",
      "name": "AC Installation",
      "provider": {
        "@type": "Organization",
        "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric"
      },
      "areaServed": {
        "@type": "City",
        "name": section.location
      }
    },
    "mainEntity": section.results.map(result => ({
      "@type": "PropertyValue",
      "name": result.label,
      "value": result.value
    }))
  };
}

/**
 * Generate comprehensive schema array for service pages
 * Returns 5-9+ schemas: Service, LocalBusiness, AggregateRating, FAQ, Offers, HowTo, Case Studies
 */
export function getServiceSchemas(data: ServicePageData, serviceSlug: string) {
  // Extract and normalize FAQs
  const faqs = hasValidFAQs(data.faqs) ? normalizeFAQs(data.faqs) : [];
  
  // Map category to GBP categories
  const categories = CATEGORY_MAP[data.category] || [];
  
  // Determine if this service should include offers
  const includeOffers = ['ac-repair', 'ac-installation', 'hvac', 'furnace'].some(
    keyword => serviceSlug.includes(keyword)
  );

  const canonicalUrl = `https://www.intelligentdesignac.com/services/${serviceSlug}`;

  // Use comprehensive schema registry for base schemas
  const baseSchemas = getPageSchemas({
    pageType: 'service',
    canonicalUrl,
    pageData: {
      serviceName: data.serviceName,
      serviceDescription: data.description,
      services: [data.serviceName], // Array of services offered
      categories, // GBP categories for multi-category LocalBusiness
      faqs, // Normalized FAQ array
      includeOffers, // Whether to include promotional offers
    }
  });

  // Extract HowTo sections and generate schemas
  const howToSections = data.content.sections.filter(
    (section): section is HowToSection => 'type' in section && section.type === 'howto'
  );
  const howToSchemas = howToSections.map(section => 
    generateHowToSchema(section, canonicalUrl)
  );

  // Extract Case Study sections and generate schemas
  const caseStudySections = data.content.sections.filter(
    (section): section is CaseStudySection => 'type' in section && section.type === 'case_study'
  );
  const caseStudySchemas = caseStudySections.map(section =>
    generateCaseStudySchema(section, canonicalUrl)
  );

  // Combine all schemas
  return [...baseSchemas, ...howToSchemas, ...caseStudySchemas];
}
