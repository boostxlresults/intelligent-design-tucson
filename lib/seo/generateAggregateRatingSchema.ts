/**
 * AggregateRating Schema Generator
 * Displays 5.0 star rating with 22,000+ reviews across all relevant pages
 */

import { reviewsData } from '@/data/reviews';

export interface AggregateRatingOptions {
  itemReviewed: {
    type: string; // "Organization", "LocalBusiness", "Service", etc.
    name: string;
  };
}

export function generateAggregateRatingSchema(options?: AggregateRatingOptions) {
  const { aggregateRating } = reviewsData;
  
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": aggregateRating.ratingValue,
    "reviewCount": aggregateRating.reviewCount,
    "bestRating": aggregateRating.bestRating,
    "worstRating": aggregateRating.worstRating
  };

  if (options?.itemReviewed) {
    return {
      ...baseSchema,
      "itemReviewed": {
        "@type": options.itemReviewed.type,
        "name": options.itemReviewed.name
      }
    };
  }

  return baseSchema;
}
