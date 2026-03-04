/**
 * Service Area / Location Page Schemas - COMPREHENSIVE VERSION
 * Uses centralized schema registry for maximum SEO impact
 * Generates 5-6+ schemas per page including Geo-Enhanced LocalBusiness, 
 * AggregateRating, Reviews, GeoCircle, and Project Showcase schemas
 * for RealWorkLabs content indexability
 */

import { getPageSchemas } from '@/lib/seo/schemaRegistry';
import { generateProjectShowcaseSchemas } from '@/lib/seo/generateProjectShowcaseSchema';
import { SITE_URL } from '@/lib/constants';
import { hasRealWorkLabsMap } from '@/lib/realworklabs-mapping';
import { getLocationProjectReviews } from '@/data/projectReviews';
import type { LocationPageData } from '@/types/services';

/**
 * Generate comprehensive schema array for service area pages
 * Returns 5-6+ schemas: LocalBusiness, GeoCircle, AggregateRating, Reviews
 * Plus Project Showcase schemas for locations with RealWorkLabs maps
 */
export function getLocationSchemas(data: LocationPageData) {
  const services = data.services ? data.services.map(s => s.title) : [];
  
  const schemas = getPageSchemas({
    pageType: 'service-area',
    canonicalUrl: `${SITE_URL}/service-areas/${data.slug}`,
    pageData: {
      location: data.locationDisplayName || data.locationName,
      locationDescription: data.description,
      services,
      faqs: data.faqs || [],
      zipCodes: data.zipCodes,
    }
  });

  if (hasRealWorkLabsMap(data.slug)) {
    const reviews = getLocationProjectReviews(data.slug);
    const projectSchemas = generateProjectShowcaseSchemas({
      locationName: data.locationName,
      locationSlug: data.slug,
      canonicalUrl: `${SITE_URL}/service-areas/${data.slug}`,
      reviews,
    });
    schemas.push(...projectSchemas);
  }

  return schemas;
}
