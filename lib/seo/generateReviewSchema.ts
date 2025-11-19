/**
 * Review Schema Generator
 * Individual customer reviews for enhanced trust signals
 */

import { reviewsData } from '@/data/reviews';
import { BUSINESS_INFO } from './constants';

export interface ReviewSchemaOptions {
  maxReviews?: number; // Number of reviews to include (default: 5)
  itemReviewed?: {
    type: string;
    name: string;
  };
}

export function generateReviewSchemas(options: ReviewSchemaOptions = {}) {
  const { maxReviews = 5, itemReviewed } = options;
  const { featuredReviews } = reviewsData;
  
  const reviewsToInclude = featuredReviews.slice(0, maxReviews);
  
  return reviewsToInclude.map(review => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": 5,
      "worstRating": 1
    },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished,
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name
    },
    ...(itemReviewed && {
      "itemReviewed": {
        "@type": itemReviewed.type,
        "name": itemReviewed.name
      }
    })
  }));
}
