/**
 * Customer Reviews Data
 * Converted from JSON to TS module for Turbopack compatibility
 *
 * IMPORTANT: These values MUST match actual Google Business Profile data.
 * Source: live Google Business Profile (Place ID ChIJvQ3jnG501oYRqNUFk4-5nno),
 * pulled via SerpApi Google Maps Reviews API. Google rating 4.8, 3,735 reviews
 * (June 2026). Update monthly or when review count changes significantly.
 * DO NOT use cross-platform totals — Google schema should reflect Google data only.
 *
 * featuredReviews below are REAL, verbatim Google reviews (genuine reviewer
 * display names + dates). Never replace these with invented/sample text —
 * fabricated review markup risks a Google spam manual action. To refresh,
 * re-pull from the GBP and paste verbatim entries only.
 */

export const reviewsData = {
  aggregateRating: {
    ratingValue: 4.8,
    reviewCount: 3735,
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
