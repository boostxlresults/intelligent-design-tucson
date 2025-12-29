/**
 * Service Page Schemas - COMPREHENSIVE VERSION
 * Uses centralized schema registry for maximum SEO impact
 * Generates 5-7+ schemas per page including Service, LocalBusiness, AggregateRating, FAQ, Offers
 * Plus HowTo and Case Study schemas for AI SEO optimization
 */

import { normalizeFAQs, hasValidFAQs } from './faqHelpers';
import { getPageSchemas } from '@/lib/seo/schemaRegistry';
import type { ServicePageData, HowToSection, CaseStudySection, VideoSection } from '@/types/services';

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
 * Parse timeframe string to full ISO 8601 date format with Arizona timezone
 * Handles formats like "Summer 2024 (July 18th...)" or "Spring 2024 (May 14th...)"
 * Returns format: "2024-07-15T00:00:00-07:00" (Arizona doesn't observe DST)
 */
function parseTimeframeToISO(timeframe: string): string {
  // Try to extract year and month from the timeframe
  const yearMatch = timeframe.match(/20\d{2}/);
  const year = yearMatch ? yearMatch[0] : new Date().getFullYear().toString();
  
  // Map seasons and months to approximate ISO dates
  const seasonMap: Record<string, string> = {
    'january': '01-15',
    'february': '02-15',
    'march': '03-15',
    'april': '04-15',
    'may': '05-15',
    'june': '06-15',
    'july': '07-15',
    'august': '08-15',
    'september': '09-15',
    'october': '10-15',
    'november': '11-15',
    'december': '12-15',
    'winter': '01-15',
    'spring': '04-15',
    'summer': '07-15',
    'fall': '10-15',
    'autumn': '10-15'
  };
  
  const lowerTimeframe = timeframe.toLowerCase();
  for (const [key, monthDay] of Object.entries(seasonMap)) {
    if (lowerTimeframe.includes(key)) {
      // Return full ISO 8601 with Arizona timezone (UTC-7, no DST)
      return `${year}-${monthDay}T00:00:00-07:00`;
    }
  }
  
  // Default to mid-year if no match
  return `${year}-06-15T00:00:00-07:00`;
}

/**
 * Generate schema from CaseStudySection with PropertyValue results
 * Includes image field for Rich Results validation
 */
function generateCaseStudySchema(section: CaseStudySection, canonicalUrl: string, heroImage?: string) {
  // Use case study image if available, otherwise use service hero image or default
  const imageUrl = heroImage 
    ? (heroImage.startsWith('http') ? heroImage : `https://www.idesignac.com${heroImage}`)
    : 'https://www.idesignac.com/images/case-study-default.webp';
    
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": section.title,
    "description": section.challenge,
    "image": imageUrl,
    "url": canonicalUrl,
    "author": {
      "@type": "Organization",
      "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
      "url": "https://www.idesignac.com/",
      "image": "https://www.idesignac.com/og-image.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1145 E Fort Lowell Rd",
        "addressLocality": "Tucson",
        "addressRegion": "AZ",
        "postalCode": "85719",
        "addressCountry": "US"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.idesignac.com/logo.png"
      },
      "image": "https://www.idesignac.com/og-image.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1145 E Fort Lowell Rd",
        "addressLocality": "Tucson",
        "addressRegion": "AZ",
        "postalCode": "85719",
        "addressCountry": "US"
      }
    },
    "datePublished": parseTimeframeToISO(section.timeframe),
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
 * Generate VideoObject schema from VideoSection
 */
function generateVideoSchema(section: VideoSection, canonicalUrl: string, thumbnailUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": section.title,
    "description": section.description,
    "thumbnailUrl": thumbnailUrl || `https://img.youtube.com/vi/${section.videoId}/maxresdefault.jpg`,
    "uploadDate": section.uploadDate ? (section.uploadDate.includes('T') ? section.uploadDate : `${section.uploadDate}T00:00:00Z`) : new Date().toISOString(),
    "duration": section.duration || "PT5M",
    "contentUrl": `https://www.youtube.com/watch?v=${section.videoId}`,
    "embedUrl": `https://www.youtube.com/embed/${section.videoId}`,
    "publisher": {
      "@type": "Organization",
      "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.idesignac.com/logo.png"
      }
    },
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "url": canonicalUrl
  };
}

/**
 * Generate comprehensive schema array for service pages
 * Returns 5-9+ schemas: Service, LocalBusiness, AggregateRating, FAQ, Offers, HowTo, Case Studies, Video
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

  const canonicalUrl = `https://www.idesignac.com/services/${serviceSlug}`;

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
  // Pass service hero image as fallback for case studies without their own images
  const caseStudySections = data.content.sections.filter(
    (section): section is CaseStudySection => 'type' in section && section.type === 'case_study'
  );
  const caseStudySchemas = caseStudySections.map(section =>
    generateCaseStudySchema(section, canonicalUrl, data.heroImage)
  );

  // Extract Video sections and generate schemas
  const videoSections = data.content.sections.filter(
    (section): section is VideoSection => 'type' in section && section.type === 'video'
  );
  const videoSchemas = videoSections.map(section =>
    generateVideoSchema(section, canonicalUrl, data.heroImage)
  );

  // Combine all schemas
  return [...baseSchemas, ...howToSchemas, ...caseStudySchemas, ...videoSchemas];
}
