/**
 * Customer Reviews Data
 * Converted from JSON to TS module for Turbopack compatibility
 *
 * IMPORTANT: These values MUST match actual Google Business Profile data.
 * Google reviews: 3,732 at 4.8 stars (verified via Local Falcon, June 2026).
 * Update monthly or when review count changes significantly.
 * DO NOT use cross-platform totals — Google schema should reflect Google data only.
 *
 * featuredReviews is intentionally EMPTY: hand-written/sample reviews must not be
 * emitted as Review schema (Google treats invented review markup as spam and it
 * risks a manual action). Populate this ONLY with verbatim, real Google reviews
 * pulled from a live source before re-enabling Review schema output.
 */

export const reviewsData = {
  aggregateRating: {
    ratingValue: 4.8,
    reviewCount: 3732,
    bestRating: 5,
    worstRating: 1
  },
  featuredReviews: [] as Array<{
    author: string;
    rating: number;
    reviewBody: string;
    datePublished: string;
  }>
};
