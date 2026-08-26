/**
 * STANDALONE_PAGES — bare slugs that resolve directly (not redirected to /services/<slug>).
 *
 * HOW TO ADD A NEW LANDING PAGE OR STANDALONE ROUTE:
 * Just add the slug string here. This is the only file you need to touch.
 * Confirmed pages (e.g. "foo/confirmed") must also be listed here.
 *
 * This file is intentionally small so it stays editable via the GitHub MCP
 * regardless of how large redirects.ts grows.
 */

export const STANDALONE_PAGES = new Set([
  // Core site pages
  'financing', 'guarantees', 'resources', 'home', 'about',
  'contact', 'careers', 'privacy-policy', 'special-offers',
  'customer-reviews', 'video-testimonials', 'family-protection-plans',
  'new-homebuyer-offer', 'realtors-offer', 'recent-projects',
  'filter-shop',
  'knowledge-hub', 'r22-phaseout', 'education-library',
  'drain-clearing-special', 'ac-system-faqs', 'schedule',
  'service-areas', 'services', 'blog', 'service-map',
  'ac-repair-tucson', 'new-air-conditioner',
  'proper-ac-sizing', 'ac-sizing-estimator',

  // Paid landing pages
  'free-roof-inspection',
  'ac-tune-up-2888',
  'drain-clearing-4888', 'drain-clearing-4888/confirmed',
]);
