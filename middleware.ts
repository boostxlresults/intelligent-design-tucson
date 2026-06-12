import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getRedirectDestination } from '@/lib/redirects';
import locRedirectConfig from '@/data/locationRedirectConfig.json';
import legacy404 from '@/data/legacy404Redirects.json';

const SERVICE_AREA_SLUGS = new Set<string>(locRedirectConfig.serviceAreaSlugs);
const NEIGHBORHOOD_TO_CITY: Record<string, string> = locRedirectConfig.neighborhoodToCity;
const LEGACY_REDIRECTS: Record<string, string> = legacy404.redirects;
const LEGACY_GONE = new Set<string>(legacy404.gone);

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

  // Legacy WordPress 404 cleanup: 308-redirect old URLs to their closest live page,
  // 410 true junk (date archives, hello-world, search/web-story endpoints). Trailing-slash tolerant.
  {
    const noSlash = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    const variants = [pathname, noSlash, noSlash + '/'];
    for (const v of variants) {
      if (LEGACY_GONE.has(v)) {
        return new NextResponse(null, { status: 410, statusText: 'Gone' });
      }
    }
    for (const v of variants) {
      const dest = LEGACY_REDIRECTS[v];
      if (dest) {
        const url = request.nextUrl.clone();
        url.pathname = dest;
        url.search = '';
        return NextResponse.redirect(url, 308);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
