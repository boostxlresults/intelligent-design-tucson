import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { resolveRedirect, validateDestination } from '@/lib/routeResolver';
import locRedirectConfig from '@/data/locationRedirectConfig.json';
import legacy404 from '@/data/legacy404Redirects.json';

const SERVICE_AREA_SLUGS = new Set<string>(locRedirectConfig.serviceAreaSlugs);
const NEIGHBORHOOD_TO_CITY: Record<string, string> = locRedirectConfig.neighborhoodToCity;
const LEGACY_REDIRECTS: Record<string, string> = legacy404.redirects;
const LEGACY_GONE = new Set<string>(legacy404.gone);

/**
 * Every redirect decision happens here, on the slash-stripped path, and is
 * answered with ONE 308. next.config sets skipTrailingSlashRedirect so Next
 * does not issue its own /foo/ -> /foo hop first; the Oct 1 2026 Moz crawl
 * counted 160 two-hop chains caused by exactly that. Query strings are
 * preserved on every redirect: stripping them destroys ad attribution
 * (gclid / fbclid / utm_*) for every visitor the redirect touches.
 */
function findRedirect(cleanPath: string): string | null {
  // 1. Legacy map (1,300 entries + heuristics) with destination validation and
  //    chain collapsing (lib/routeResolver.ts).
  const resolved = resolveRedirect(cleanPath);
  if (resolved) return resolved;

  // 2. Thin ZIP x service doorway pages (/locations/<city>-<zip>/<service>)
  //    consolidate into the canonical /service-areas/<city> page.
  const locMatch = cleanPath.match(/^\/locations\/([a-z0-9-]+?)-\d{5}\/[a-z0-9-]+$/);
  if (locMatch) {
    const rawCity = locMatch[1];
    const city = NEIGHBORHOOD_TO_CITY[rawCity] || rawCity;
    return `/service-areas/${SERVICE_AREA_SLUGS.has(city) ? city : 'tucson'}`;
  }

  // 3. Legacy WordPress 404 cleanup list (data/legacy404Redirects.json).
  for (const v of [cleanPath, cleanPath + '/']) {
    const dest = LEGACY_REDIRECTS[v];
    if (dest) return validateDestination(dest);
  }

  return null;
}

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/_next/') ||
      pathname.startsWith('/api/') ||
      pathname.endsWith('.md') ||
      pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|json|woff|woff2|ttf|eot|webp|avif|txt|xml)$/)) {
    return NextResponse.next();
  }

  // Return 410 Gone for legacy WordPress paths (bot probes)
  if (pathname.startsWith('/wp-content') ||
      pathname.startsWith('/wp-admin') ||
      pathname.startsWith('/wp-includes') ||
      pathname.match(/^\/wp-[^/]*\.php/)) {
    return new NextResponse(null, { status: 410, statusText: 'Gone' });
  }

  const hasTrailingSlash = pathname.length > 1 && pathname.endsWith('/');
  const cleanPath = hasTrailingSlash ? pathname.replace(/\/+$/, '') : pathname;

  // 410 true junk (date archives, hello-world, search/web-story endpoints).
  if (LEGACY_GONE.has(cleanPath) || LEGACY_GONE.has(cleanPath + '/')) {
    return new NextResponse(null, { status: 410, statusText: 'Gone' });
  }

  // Build the target with new URL(), not nextUrl.clone(): with
  // skipTrailingSlashRedirect on, a cloned NextURL re-applies the request's
  // trailing slash to whatever pathname is assigned, which turned /contact/
  // into a redirect to /contact/ (a loop) in local testing.
  const dest = findRedirect(cleanPath);
  if (dest && dest !== pathname) {
    return NextResponse.redirect(new URL(dest + request.nextUrl.search, request.url), 308);
  }

  if (hasTrailingSlash) {
    return NextResponse.redirect(new URL(cleanPath + request.nextUrl.search, request.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
