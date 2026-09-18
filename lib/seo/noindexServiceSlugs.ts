import noindexSlugs from '@/data/noindex-service-slugs.json';
import { CORE_NAV_SERVICE_SLUGS } from '@/data/coreNavServiceSlugs';

/**
 * Resolved set of /services/<slug> pages that get a noindex meta tag and are
 * kept out of the sitemap.
 *
 * data/noindex-service-slugs.json is a hand-curated list of dead service x city
 * permutation pages. Bulk sweeps of that list have twice caught hub pages that
 * the site links to from every service page, which hides a page we actively
 * promote and strands the internal links pointing at it. Subtracting the core
 * navigation slugs makes that failure structurally impossible instead of
 * something that has to be caught by hand each time.
 */
export const NOINDEX_SERVICE_SLUGS: ReadonlySet<string> = new Set(
  noindexSlugs.slugs.filter((slug) => !CORE_NAV_SERVICE_SLUGS.has(slug))
);

export function isNoIndexServiceSlug(slug: string): boolean {
  return NOINDEX_SERVICE_SLUGS.has(slug);
}
