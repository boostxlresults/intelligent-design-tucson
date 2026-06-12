import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getRedirectDestination } from '@/lib/redirects';
import locRedirectConfig from '@/data/locationRedirectConfig.json';

const SERVICE_AREA_SLUGS = new Set<string>(locRedirectConfig.serviceAreaSlugs);
const NEIGHBORHOOD_TO_CITY: Record<string, string> = locRedirectConfig.neighborhoodToCity;

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/_next/') ||
      pathname.startsWith('/api/') ||
      pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|json|woff|woff2|ttf|eot)$/)) {
    return NextResponse.next();
  }

  // Return 410 Gone for legacy WordPress paths (bot probes)
  if (pathname.startsWith('/wp-content') ||
      pathname.startsWith('/wp-admin') ||
      pathname.startsWith('/wp-includes') ||
      pathname.match(/^\/wp-[^/]*\.php/)) {
    return new NextResponse(null, { status: 410, statusText: 'Gone' });
  }

  const redirectDest = getRedirectDestination(pathname);
  if (redirectDest) {
    const url = request.nextUrl.clone();
    url.pathname = redirectDest;
    return NextResponse.redirect(url, 308);
  }

  // Consolidate thin ZIP x service doorway pages (/locations/<city>-<zip>/<service>)
  // into the canonical /service-areas/<city> page (central Tucson as a safe default).
  // These were "crawled - currently not indexed" in GSC; consolidating them recovers
  // crawl budget and concentrates local relevance on indexable city pages.
  const locMatch = pathname.match(/^\/locations\/([a-z0-9-]+?)-\d{5}\/[a-z0-9-]+\/?$/);
  if (locMatch) {
    const rawCity = locMatch[1];
    const city = NEIGHBORHOOD_TO_CITY[rawCity] || rawCity;
    const targetCity = SERVICE_AREA_SLUGS.has(city) ? city : 'tucson';
    const url = request.nextUrl.clone();
    url.pathname = `/service-areas/${targetCity}`;
    url.search = '';
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
