/**
 * Routes that render with NO sitewide chrome: no header, no promo banner, no
 * mega-footer, no Google publisher script. They carry their own top bar, their
 * own conversion path and their own minimal footer.
 *
 * Used by app/layout.tsx. A path matches on equality or as a prefix, so listing
 * "/lp/15-tune-up" also covers "/lp/15-tune-up/thank-you".
 *
 * What is NOT gated by this list, on purpose:
 *   - DNIInjector (must load on every page, see CLAUDE.md section 1)
 *   - LegalStrip (visitor-identification notice, must appear on every page)
 *   - the Meta pixel base code and GTM in <head>
 */
export const STANDALONE_LANDING_PATHS = ["/lp/15-tune-up"] as const;

export function isStandaloneLandingPath(pathname?: string | null): boolean {
  if (!pathname) return false;
  return STANDALONE_LANDING_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"));
}
