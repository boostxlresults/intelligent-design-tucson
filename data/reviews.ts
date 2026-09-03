/**
 * Customer Reviews Data — SINGLE SOURCE OF TRUTH for all aggregateRating markup.
 *
 * Every aggregateRating on this site MUST import from this file. Do not hardcode
 * ratingValue/reviewCount anywhere else — six divergent values (4.8/3735, 4.9/3797,
 * 5.0/23000, 4.97/23000, 4.9/23000, 4.97/3500) shipped simultaneously before the
 * 2026-09-03 consolidation and contradicted each other in the same HTML documents.
 *
 * COMPOSITE (aggregateRating, used in schema sitewide) = all review platforms the
 * brand publicly reports, matching the "23,000+ reviews" claim shown across the site
 * and the PulseM widget on /customer-reviews. Because that widget renders inside a
 * cross-origin iframe (invisible to crawlers), /customer-reviews also renders a
 * first-party, crawler-visible sourcing breakdown — that block is what substantiates
 * this number. Keep them in sync.
 *
 * GOOGLE-ONLY (googleRating) is the verified Google Business Profile figure, kept for
 * reference, for the featuredReviews below, and for any Google-specific surface.
 *
 * Composite math (2026-09-03):
 *   PulseM   4.98 x 19,154  = 95,386.9   (source: PulseM/EverPro dashboard)
 *   Google   4.85 x  3,808  = 18,468.8   (source: SerpApi, Place ID ChIJvQ3jnG501oYRqNUFk4-5nno)
 *   Facebook 5.00 x    455  =  2,275.0   (recommendations, positive-only)
 *   ------------------------------------
 *   116,130.7 / 23,417 = 4.96
 *
 * Google displays 4.9 (its own rounding of a true 4.852 mean from the star histogram:
 * 3,567x5 / 105x4 / 29x3 / 26x2 / 81x1 = 3,808 total).
 *
 * REFRESH: re-pull Google via SerpApi and PulseM from the dashboard, recompute the
 * weighted mean, and update BOTH the numbers below and the visible breakdown on
 * /customer-reviews. Never round up. Never invent a value for a platform you cannot
 * source — that is what produced the 5.0/23,000 claim this replaces.
 *
 * featuredReviews below are REAL, verbatim Google reviews (genuine reviewer
 * display names + dates). Never replace these with invented/sample text —
 * fabricated review markup risks a Google spam manual action. To refresh,
 * re-pull from the GBP and paste verbatim entries only.
 */

/** Verified Google Business Profile figures. Displayed rating is Google's own rounding. */
export const googleRating = {
  ratingValue: 4.9,
  trueMean: 4.85,
  reviewCount: 3808,
  bestRating: 5,
  worstRating: 1,
  lastVerified: '2026-09-03',
  source: 'SerpApi google_maps place_id=ChIJvQ3jnG501oYRqNUFk4-5nno'
} as const;

/** Per-platform breakdown behind the composite. Rendered visibly on /customer-reviews. */
export const reviewPlatformBreakdown = [
  { platform: 'PulseM (direct post-service surveys)', rating: 4.98, count: 19154 },
  { platform: 'Google', rating: 4.85, count: 3808 },
  { platform: 'Facebook (recommendations)', rating: 5.0, count: 455 }
] as const;

export const REVIEW_TOTAL = 23417;
export const REVIEW_TOTAL_DISPLAY = '23,000+';

export const reviewsData = {
  /** COMPOSITE across all platforms — the one rating used in schema sitewide. */
  aggregateRating: {
    ratingValue: 4.96,
    reviewCount: REVIEW_TOTAL,
    bestRating: 5,
    worstRating: 1
  },
  featuredReviews: [
    {
      author: "Staci Burger",
      rating: 5,
      reviewBody: "Fantastic experience working with Intelligent Design! Erik and Adrian are skilled and knowledgeable. They worked together with a fun and confident demeanor. Erik listened during the consultation and understood the electrical work we were needing to have done in our space. When he and Adrian returned to complete the work order they did so without any issues. Truly was a positive experience working with them both. Bonus stars for their attention to detail and cleaning up before leaving!",
      datePublished: "2026-02-17"
    },
    {
      author: "Victor Lowensten",
      rating: 5,
      reviewBody: "Adam did an amazing job at our check-up/maintenance appointment. He was beyond knowledgeable and informed me of what is to come based on the life of all of our units (heat/ac). I will recommend this company, especially Adam to anyone I know that is in need of any maintenance or service!",
      datePublished: "2026-01-28"
    },
    {
      author: "Norman",
      rating: 5,
      reviewBody: "Tyler Manley did an outstanding job installing the Brita Pro water softener and Brita Pro water purifier systems at our home. All the work was planned and executed in a professional and efficient manner. The workmanship is excellent and the work area was fully cleaned afterwards. The resulting soft and purified water is great with clean clothes, hair and bodies and no more icky tasting water. My wife and I are very happy with the work and improved water.",
      datePublished: "2025-10-04"
    },
    {
      author: "T G",
      rating: 5,
      reviewBody: "Sayge and Jordin provided excellent customer service during my AC tune-up. They answered all of my questions clearly and were very helpful throughout the process. I highly recommend Intelligent Design.",
      datePublished: "2026-04-24"
    },
    {
      author: "Joemar Decker",
      rating: 5,
      reviewBody: "Jonathan was amazing. I was running a few minutes late He was happy to wait for just a bit. Good honest, reliable service thank you so much!",
      datePublished: "2026-02-26"
    },
    {
      author: "Sherry Harrolle",
      rating: 5,
      reviewBody: "Your team was very pleasant to work with which helped make the painful prices a little easier to choke down. They worked hard and did a fast good job. I appreciate the good work today in a world where good work is hard to find. Thank you Diana Moose (on behalf of Sherryl Harrolle)",
      datePublished: "2025-10-30"
    }
  ]
};
