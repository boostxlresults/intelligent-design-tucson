/**
 * Centralized Schema Registry
 * Per-page-type schema orchestration for maximum SEO impact
 * 
 * This registry defines which schemas should be generated for each page type,
 * ensuring comprehensive coverage across the entire site.
 */

import { generateOrganizationSchema } from './generateOrganizationSchema';
import { generateWebSiteSchema } from './generateWebSiteSchema';
import { generateMultiCategoryLocalBusinessSchemas } from './generateMultiCategoryLocalBusinessSchema';
import { generateAggregateRatingSchema } from './generateAggregateRatingSchema';
import { generateReviewSchemas } from './generateReviewSchema';
import { generateContactPointSchemas } from './generateContactPointSchema';
import { generateServiceSchema } from './generateServiceSchema';
import { generateLocationSchema } from './generateLocationSchema';
import { generateOfferSchemas } from './generateOfferSchema';
import { generateFAQSchema } from './generateFAQSchema';
import { generateBreadcrumbs } from './generateBreadcrumbs';
import { generateHowToSchema } from './generateHowToSchema';
import { generateVideoObjectSchema } from './generateVideoObjectSchema';

export type PageType = 
  | 'homepage'
  | 'service'
  | 'service-location'
  | 'service-area'
  | 'blog'
  | 'info';

export interface SchemaRegistryOptions {
  pageType: PageType;
  canonicalUrl: string;
  pageData?: {
    serviceName?: string;
    serviceDescription?: string;
    location?: string;
    locationDescription?: string;
    services?: string[];
    faqs?: Array<{ question: string; answer: string }>;
    categories?: string[]; // For multi-category pages
    includeOffers?: boolean;
    zipCodes?: string[]; // Location-specific zip codes for DefinedRegion schema
    howToGuide?: {
      name: string;
      description: string;
      steps: Array<{
        name: string;
        text: string;
        duration?: string;
        tools?: string[];
      }>;
      totalTime?: string;
    };
    videos?: Array<{
      name: string;
      description: string;
      thumbnailUrl: string;
      uploadDate: string;
      embedUrl: string;
      duration?: string;
    }>;
  };
}

/**
 * Orchestrates all schemas for a given page type
 * Returns an array of schema objects to be rendered
 */
export function getPageSchemas(options: SchemaRegistryOptions): Array<Record<string, any>> {
  const { pageType, canonicalUrl, pageData = {} } = options;
  const schemas: Array<Record<string, any>> = [];

  switch (pageType) {
    case 'homepage':
      return getHomepageSchemas(canonicalUrl);
    
    case 'service':
      return getServicePageSchemas(canonicalUrl, pageData);
    
    case 'service-location':
      return getServiceLocationPageSchemas(canonicalUrl, pageData);
    
    case 'service-area':
      return getServiceAreaPageSchemas(canonicalUrl, pageData);
    
    case 'blog':
      return getBlogPageSchemas(canonicalUrl, pageData);
    
    case 'info':
      return getInfoPageSchemas(canonicalUrl, pageData);
    
    default:
      return [];
  }
}

/**
 * HOMEPAGE SCHEMAS (6-8 schemas)
 * - Organization
 * - WebSite
 * - 5× Multi-Category LocalBusiness (HVAC, Plumbing, Electrical, Roofing, Solar)
 * - AggregateRating
 * - Reviews (top 3)
 */
function getHomepageSchemas(canonicalUrl: string) {
  const schemas = [];

  // 1. Organization Schema
  schemas.push(generateOrganizationSchema({
    canonicalUrl,
    includeRating: true,
    includeContactPoints: true,
    includeSameAs: true
  }));

  // 2. WebSite Schema
  schemas.push(generateWebSiteSchema({ url: canonicalUrl }));

  // 3-7. Multi-Category LocalBusiness Schemas (5 categories)
  const multiCategorySchemas = generateMultiCategoryLocalBusinessSchemas({
    canonicalUrl,
    includeRatings: true
  });
  schemas.push(...multiCategorySchemas);

  // 8-10. Review Schemas (top 3 reviews)
  const reviewSchemas = generateReviewSchemas({
    maxReviews: 3,
    itemReviewed: {
      type: "Organization",
      name: "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric"
    }
  });
  schemas.push(...reviewSchemas);

  return schemas;
}

/**
 * SERVICE PAGE SCHEMAS (7-10 schemas)
 * - Service
 * - Category-Specific LocalBusiness
 * - AggregateRating
 * - FAQPage
 * - BreadcrumbList ✅ NEW
 * - HowTo (if preparation guide exists) ✅ NEW
 * - VideoObject (if videos embedded) ✅ NEW
 * - Offer (optional)
 */
function getServicePageSchemas(canonicalUrl: string, pageData: any) {
  const schemas = [];

  // 1. Service Schema
  if (pageData.serviceName && pageData.serviceDescription) {
    schemas.push(generateServiceSchema({
      serviceName: pageData.serviceName,
      description: pageData.serviceDescription,
      services: pageData.services || [],
      canonicalUrl
    }));
  }

  // 2. Category-Specific LocalBusiness
  if (pageData.categories && pageData.categories.length > 0) {
    const categorySchemas = generateMultiCategoryLocalBusinessSchemas({
      categories: pageData.categories,
      canonicalUrl,
      includeRatings: true
    });
    schemas.push(...categorySchemas);
  }

  // 3. FAQPage Schema
  if (pageData.faqs && pageData.faqs.length > 0) {
    schemas.push(generateFAQSchema(pageData.faqs));
  }

  // 4. BreadcrumbList Schema ✅ NEW
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' }
  ];
  if (pageData.serviceName) {
    breadcrumbItems.push({
      name: pageData.serviceName,
      url: canonicalUrl
    });
  }
  // Extract proper base URL (protocol + domain)
  const baseUrl = canonicalUrl.match(/^https?:\/\/[^\/]+/)?.[0] || 'https://www.idesignac.com';
  schemas.push(generateBreadcrumbs(breadcrumbItems, baseUrl));

  // 5. HowTo Schema (if preparation guide exists) ✅ NEW
  if (pageData.howToGuide) {
    schemas.push(generateHowToSchema({
      name: pageData.howToGuide.name,
      description: pageData.howToGuide.description,
      steps: pageData.howToGuide.steps,
      totalTime: pageData.howToGuide.totalTime
    }));
  }

  // 6. VideoObject Schemas (if videos embedded) ✅ NEW
  if (pageData.videos && pageData.videos.length > 0) {
    pageData.videos.forEach((video: any) => {
      schemas.push(generateVideoObjectSchema({
        name: video.name,
        description: video.description,
        thumbnailUrl: video.thumbnailUrl,
        uploadDate: video.uploadDate,
        embedUrl: video.embedUrl,
        duration: video.duration,
        canonicalUrl
      }));
    });
  }

  // 7. Offer Schemas (if applicable)
  if (pageData.includeOffers) {
    const offerSchemas = generateOfferSchemas({ includeAll: false });
    schemas.push(...offerSchemas);
  }

  return schemas;
}

/**
 * SERVICE+LOCATION PAGE SCHEMAS (7-10+ schemas)
 * - Service
 * - Geo-Enhanced LocalBusiness
 * - Category-Specific LocalBusiness (multi-category)
 * - FAQPage
 * - BreadcrumbList ✅
 * - HowTo (if preparation guide exists) ✅ NEW
 * - VideoObject (if videos embedded) ✅ NEW
 * - Offer (optional)
 */
function getServiceLocationPageSchemas(canonicalUrl: string, pageData: any) {
  const schemas = [];

  // 1. Service Schema with location
  if (pageData.serviceName && pageData.serviceDescription && pageData.location) {
    schemas.push(generateServiceSchema({
      serviceName: `${pageData.serviceName} in ${pageData.location}`,
      description: pageData.serviceDescription,
      location: pageData.location,
      services: pageData.services || [],
      canonicalUrl
    }));
  }

  // 2. Geo-Enhanced LocalBusiness with GeoCircle
  if (pageData.location) {
    schemas.push(generateLocationSchema({
      location: pageData.location,
      services: pageData.services || [],
      description: pageData.locationDescription,
      canonicalUrl,
      includeGeoCircle: true,
      serviceRadius: 50
    }));
  }

  // 3. Category-Specific LocalBusiness with location
  if (pageData.categories && pageData.categories.length > 0 && pageData.location) {
    const categorySchemas = generateMultiCategoryLocalBusinessSchemas({
      categories: pageData.categories,
      canonicalUrl,
      includeRatings: true,
      location: pageData.location.toLowerCase().replace(/\s+/g, '-')
    });
    schemas.push(...categorySchemas);
  }

  // 4. FAQPage Schema
  if (pageData.faqs && pageData.faqs.length > 0) {
    schemas.push(generateFAQSchema(pageData.faqs));
  }

  // 5. BreadcrumbList Schema
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' }
  ];
  if (pageData.serviceName) {
    breadcrumbItems.push({
      name: pageData.serviceName,
      url: canonicalUrl
    });
  }
  // Extract proper base URL (protocol + domain)
  const baseUrl = canonicalUrl.match(/^https?:\/\/[^\/]+/)?.[0] || 'https://www.idesignac.com';
  schemas.push(generateBreadcrumbs(breadcrumbItems, baseUrl));

  // 6. HowTo Schema (if preparation guide exists) ✅ NEW
  if (pageData.howToGuide) {
    schemas.push(generateHowToSchema({
      name: pageData.howToGuide.name,
      description: pageData.howToGuide.description,
      steps: pageData.howToGuide.steps,
      totalTime: pageData.howToGuide.totalTime
    }));
  }

  // 7. VideoObject Schemas (if videos embedded) ✅ NEW
  if (pageData.videos && pageData.videos.length > 0) {
    pageData.videos.forEach((video: any) => {
      schemas.push(generateVideoObjectSchema({
        name: video.name,
        description: video.description,
        thumbnailUrl: video.thumbnailUrl,
        uploadDate: video.uploadDate,
        embedUrl: video.embedUrl,
        duration: video.duration,
        canonicalUrl
      }));
    });
  }

  // 8. Offer Schemas
  if (pageData.includeOffers) {
    const offerSchemas = generateOfferSchemas({ includeAll: false });
    schemas.push(...offerSchemas);
  }

  return schemas;
}

/**
 * SERVICE AREA PAGE SCHEMAS (5-6 schemas)
 * - LocalBusiness
 * - AggregateRating
 * - Review
 * - BreadcrumbList
 * - GeoCircle
 */
function getServiceAreaPageSchemas(canonicalUrl: string, pageData: any) {
  const schemas = [];

  // 1. LocalBusiness with GeoCircle and location-specific zip codes
  if (pageData.location) {
    schemas.push(generateLocationSchema({
      location: pageData.location,
      services: pageData.services || [],
      description: pageData.locationDescription,
      canonicalUrl,
      includeGeoCircle: true,
      serviceRadius: 50,
      zipCodes: pageData.zipCodes // Pass location-specific zip codes
    }));
  }

  // 2-3. Review Schemas (2 reviews)
  const reviewSchemas = generateReviewSchemas({
    maxReviews: 2,
    itemReviewed: {
      type: "LocalBusiness",
      name: `Intelligent Design - ${pageData.location || ''}`
    }
  });
  schemas.push(...reviewSchemas);

  return schemas;
}

/**
 * BLOG PAGE SCHEMAS (3-5 schemas)
 * - Article/BlogPosting
 * - Organization
 * - BreadcrumbList
 * - ImageObject (if applicable)
 * - FAQPage (if applicable)
 */
function getBlogPageSchemas(canonicalUrl: string, pageData: any) {
  const schemas = [];

  // Organization Schema
  schemas.push(generateOrganizationSchema({
    canonicalUrl: canonicalUrl.split('/blog')[0],
    includeRating: false,
    includeContactPoints: false,
    includeSameAs: false
  }));

  // FAQPage if applicable
  if (pageData.faqs && pageData.faqs.length > 0) {
    schemas.push(generateFAQSchema(pageData.faqs));
  }

  return schemas;
}

/**
 * INFO PAGE SCHEMAS (2-3 schemas)
 * - WebPage
 * - Organization
 * - FAQPage (if applicable)
 */
function getInfoPageSchemas(canonicalUrl: string, pageData: any) {
  const schemas = [];

  // Organization Schema
  schemas.push(generateOrganizationSchema({
    canonicalUrl: canonicalUrl.split('/').slice(0, 3).join('/'),
    includeRating: false,
    includeContactPoints: true,
    includeSameAs: false
  }));

  // FAQPage if applicable
  if (pageData.faqs && pageData.faqs.length > 0) {
    schemas.push(generateFAQSchema(pageData.faqs));
  }

  return schemas;
}
