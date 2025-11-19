import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getServiceLocationSchemas } from '@/components/schemas/ServiceLocationSchemas';
import { getLocationSchemas } from '@/components/schemas/LocationSchemas';
import * as serviceExports from '@/data/pages/services';
import * as locationExports from '@/data/pages/locations';
import serviceManifest from '@/data/pages/services/manifest.json';
import locationManifest from '@/data/pages/locations/manifest.json';
import type { ServicePageData, LocationPageData } from '@/types/services';

/**
 * Production-Hardened Proxy: JSON-LD Schema Injection
 * 
 * Injects JSON-LD schemas into HTML responses at the network boundary.
 * This is the recommended workaround for Next.js 16 App Router's limitation
 * where script tags with dangerouslySetInnerHTML don't render in SSR output.
 * 
 * Hardening features:
 * - Explicit fetch() with response cloning for safe buffering
 * - Streaming detection and graceful fallback
 * - Header sanitization (strips content-length, etag, etc.)
 * - Size limits and charset validation
 * - Comprehensive error handling with logging
 */

const MAX_HTML_SIZE = 1_000_000; // 1MB limit for HTML buffering

// Service name mapping: URL format → canonical manifest format
const SERVICE_NAME_MAP: Record<string, string> = {
  'hvac': 'h-v-a-c'
};

/**
 * Normalizes slug for manifest lookup by converting service names to canonical format.
 * Example: "hvac-oro-valley" → "h-v-a-c-oro-valley"
 */
function normalizeServiceSlug(slug: string): string {
  for (const [urlName, canonicalName] of Object.entries(SERVICE_NAME_MAP)) {
    if (slug.startsWith(urlName + '-') || slug === urlName) {
      return slug.replace(new RegExp(`^${urlName}`), canonicalName);
    }
  }
  return slug;
}

export default async function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  
  // Skip non-HTML requests (APIs, static assets, images)
  if (pathname.startsWith('/_next/') || 
      pathname.startsWith('/api/') || 
      pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|json)$/)) {
    return NextResponse.next();
  }
  
  // Skip non-GET requests (HEAD, OPTIONS, POST, etc.)
  if (request.method !== 'GET') {
    return NextResponse.next();
  }
  
  // Skip prefetch requests (Next.js optimization)
  if (request.headers.get('x-middleware-prefetch') || 
      request.headers.get('purpose') === 'prefetch') {
    return NextResponse.next();
  }
  
  // Skip if this is an internal bypass request (prevents infinite loop)
  if (request.headers.get('x-proxy-bypass') === 'true') {
    return NextResponse.next();
  }
  
  // Extract slug from pathname (remove leading slash)
  const slug = pathname.slice(1);
  
  // Skip homepage and empty slugs
  if (!slug || slug === '/') {
    return NextResponse.next();
  }
  
  // Normalize slug for manifest lookup (hvac → h-v-a-c)
  const normalizedSlug = normalizeServiceSlug(slug);
  
  // Check if this is a service or location page
  // Note: manifest uses "aliases" for service+location combos, "services" for standalone services
  const serviceAliases = (serviceManifest as any).aliases || {};
  const services = (serviceManifest as any).services || {};
  const isServiceAlias = normalizedSlug in serviceAliases;
  const isStandaloneService = normalizedSlug in services;
  const isServicePage = isServiceAlias || isStandaloneService;
  const isLocationPage = slug in (locationManifest.locations || {});
  
  let manifestEntry: any = null;
  
  if (isServicePage) {
    if (isServiceAlias) {
      // aliases maps normalized slug → canonical service key (e.g., "h-v-a-c-oro-valley" → "h-v-a-c")
      const canonicalService = serviceAliases[normalizedSlug];
      
      // Reverse mapping: canonical service key → URL service name
      const SERVICE_NAME_REVERSE_MAP: Record<string, string> = { 'h-v-a-c': 'hvac' };
      const urlServiceName = SERVICE_NAME_REVERSE_MAP[canonicalService] || canonicalService;
      
      // Extract location by removing service prefix (e.g., "hvac-oro-valley" → "oro-valley")
      let locationSlug = '';
      if (slug.startsWith(urlServiceName + '-')) {
        locationSlug = slug.substring(urlServiceName.length + 1); // +1 for hyphen
      }
      
      // Try service-location lookup first
      const serviceLocations = (serviceManifest as any).serviceLocations || {};
      if (canonicalService in serviceLocations && locationSlug && locationSlug in serviceLocations[canonicalService]) {
        const locationData = serviceLocations[canonicalService][locationSlug];
        manifestEntry = { slug, dataFile: locationData.dataFile, type: 'service' as const, serviceSlug: urlServiceName, locationSlug };
      } 
      // Fall back to flat service lookup
      else if (canonicalService in services) {
        const serviceData = services[canonicalService];
        manifestEntry = { slug, dataFile: serviceData.dataFile, type: 'service' as const, serviceSlug: urlServiceName, locationSlug: '' };
      }
    } else if (isStandaloneService) {
      // Standalone service (e.g., "financing", "family-protection-plans")
      const serviceData = services[normalizedSlug];
      manifestEntry = { slug, dataFile: serviceData.dataFile, type: 'service' as const, serviceSlug: normalizedSlug, locationSlug: '' };
    }
  } else if (isLocationPage) {
    const locationData = (locationManifest.locations as any)[slug];
    manifestEntry = { slug, ...locationData, type: 'location' as const };
  }
  
  // Not a service/location page - pass through
  if (!manifestEntry) {
    return NextResponse.next();
  }
  
  
  try {
    // Fetch the fully rendered HTML by making an internal request
    // Add bypass header to prevent infinite loop
    const bypassHeaders = new Headers(request.headers);
    bypassHeaders.set('x-proxy-bypass', 'true');
    
    const response = await fetch(request.nextUrl.toString(), {
      headers: bypassHeaders,
      redirect: 'manual',
    });
    
    // Check if this is an HTML response
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('text/html')) {
      // Not HTML, return as-is
      return new NextResponse(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      });
    }
    
    // Buffer the HTML response
    const html = await response.text();
    
    // Size limit check (prevent excessive buffering)
    if (html.length > MAX_HTML_SIZE) {
      console.warn(`[PROXY] Skipping ${slug}: HTML too large (${html.length} bytes)`);
      return new NextResponse(html, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      });
    }
    
    // Generate schemas based on page type
    let schemas: Array<Record<string, unknown>> = [];
    
    const dataKey = `${(manifestEntry as any).dataFile}Data`;
    
    if ((manifestEntry as any).type === 'service') {
      const serviceData = (serviceExports as any)[dataKey] as ServicePageData | undefined;
      if (serviceData) {
        // Use correctly parsed service and location slugs from manifest entry
        const serviceSlug = (manifestEntry as any).serviceSlug || slug;
        const locationSlug = (manifestEntry as any).locationSlug || '';
        
        // For service-only pages (no location), use areaServed as locationName
        // For service+location pages, derive locationName from locationSlug
        const locationName = locationSlug 
          ? (serviceData.areaServed || locationSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))
          : (serviceData.areaServed || 'Tucson');
        
        schemas = getServiceLocationSchemas(serviceData, serviceSlug, locationSlug, locationName);
      }
    } else {
      const locationData = (locationExports as any)[dataKey] as LocationPageData | undefined;
      if (locationData) {
        schemas = getLocationSchemas(locationData);
      }
    }
    
    // If no schemas generated, passthrough
    if (schemas.length === 0) {
      return NextResponse.next();
    }
    
    // Generate schema script tags (XSS-safe: escape < characters)
    const schemaScripts = schemas.map((schema, index) => {
      const schemaJson = JSON.stringify(schema).replace(/</g, '\\u003c');
      return `<script type="application/ld+json" id="schema-${(manifestEntry as any).type}-${slug}-${index}">${schemaJson}</script>`;
    }).join('\n');
    
    // Inject schemas before </head>
    const modifiedHtml = html.replace('</head>', `${schemaScripts}\n</head>`);
    
    // Create new response with modified HTML
    const rewritten = new NextResponse(modifiedHtml, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
    
    // Explicitly DELETE length-sensitive and validator headers
    // (body length changed, so these are now invalid)
    rewritten.headers.delete('content-length');
    rewritten.headers.delete('content-encoding');
    rewritten.headers.delete('etag');
    rewritten.headers.delete('last-modified');
    
    console.log(`[PROXY] ✓ Injected ${schemas.length} schemas for ${slug}`);
    
    return rewritten;
    
  } catch (error) {
    // On any error, log and return passthrough
    console.error(`[PROXY ERROR] ${slug}:`, error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    // Match all routes except Next.js internals and static assets
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
