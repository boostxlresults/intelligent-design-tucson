/**
 * Redirect resolution with destination validation.
 *
 * getRedirectDestination() in lib/redirects.ts is a 1,300-entry map plus
 * heuristics, written over many months, and some of what it returns no longer
 * exists. The Oct 1 2026 Moz crawl showed the result: 45 internal 404s, almost
 * every one a redirect landing on a dead URL, plus 160 redirect chains. This
 * module sits between the middleware and that map:
 *
 *   1. ask the legacy map for a destination
 *   2. if the destination is a /services/ or /blog/ URL, check it exists
 *      (data/routeIndex.json, regenerated on every build)
 *   3. repair what does not: a blog slug that was truncated on disk, a bare
 *      old blog slug the keyword heuristic sent to /services/, a capitalized
 *      /service-areas/ city, a /blog/<slug> missing its category
 *   4. follow chains so the visitor gets one 308, not two or three
 *
 * Unresolvable blog posts go to their category index, never to a 404.
 * Unresolvable service slugs return null and fall through to the real 404.
 */
import routeIndex from "@/data/routeIndex.json";
import locRedirectConfig from "@/data/locationRedirectConfig.json";
import { getRedirectDestination, SERVICE_KEYWORDS } from "@/lib/redirects";

const SERVICES = new Set<string>(routeIndex.services);
const SERVICE_DIRS = new Set<string>(routeIndex.serviceDirs);
const BLOG: Record<string, string> = routeIndex.blog;
const BLOG_SLUGS = Object.keys(BLOG);
const BLOG_CATEGORIES = new Set(Object.values(BLOG));

const MAX_HOPS = 4;

/** Old "<trade>-<cityrunontogether>" slugs: hvac-greenvalley, drainsewer-orovalley. */
const SERVICE_AREAS: string[] = locRedirectConfig.serviceAreaSlugs;
const COMPACT_CITY: Record<string, string> = Object.fromEntries(SERVICE_AREAS.map((c) => [c.replace(/-/g, ""), c]));
const TRADE_PREFIX: Record<string, string> = {
  hvac: "hvac", heating: "heating", plumbing: "plumbing", roofing: "roofing", electrical: "electrical",
  drainsewer: "drain-clearing", solarinstallation: "solar-installation", solar: "solar-installation",
};
function resolveTradeCity(slug: string): string | null {
  const m = slug.match(/^([a-z]+)-([a-z]+)$/);
  if (!m) return null;
  const trade = TRADE_PREFIX[m[1]];
  const city = COMPACT_CITY[m[2]] || (SERVICE_AREAS.includes(m[2]) ? m[2] : null);
  if (!trade || !city) return null;
  const svc = `${trade}-${city}`;
  return SERVICES.has(svc) ? `/services/${svc}` : `/service-areas/${city}`;
}

export function serviceExists(slug: string): boolean {
  return SERVICES.has(slug) || SERVICE_DIRS.has(slug);
}

/** Exact, then prefix either way (slugs on disk are cut at 60 characters). */
export function resolveBlogSlug(slug: string): { category: string; slug: string } | null {
  if (BLOG[slug]) return { category: BLOG[slug], slug };
  const s = slug.toLowerCase();
  const hit = BLOG_SLUGS.find((k) => (s.length >= 24 && k.startsWith(s)) || (k.length >= 24 && s.startsWith(k)));
  return hit ? { category: BLOG[hit], slug: hit } : null;
}

/** Best-guess category index for an old blog slug we no longer have. */
export function blogCategoryFor(slug: string): string {
  const s = slug.toLowerCase();
  if (/solar|panel/.test(s)) return "solar";
  if (/roof|shingle|gutter/.test(s)) return "roofing";
  if (/water-heater|tankless|anode/.test(s)) return "water-heater";
  if (/drain|sewer|clog/.test(s)) return "drain-sewer";
  if (/plumb|repip|pipe|faucet|toilet|leak|filtration|softener/.test(s)) return "plumbing";
  if (/electric|outlet|breaker|panel-upgrade|lighting|generator|ev-charg/.test(s)) return "electrical";
  if (/air-quality|iaq|allerg|dust|humid/.test(s)) return "indoor-air-quality";
  if (/ac|air-condition|hvac|heat|furnace|thermostat|cool|duct/.test(s)) return "hvac";
  return "home-tips";
}

/**
 * Service slugs that pages link to but that were never built. Mapped to the
 * page that actually covers the topic. (Moz crawl 2026-10-01.)
 */
const SERVICE_ALIASES: Record<string, string> = {
  "ac-repair": "ac-repair-tucson",
  "ac-installation": "ac-installation-tucson",
  "hvac-repair": "ac-repair-tucson",
  "duct-sealing": "duct-sealing-tucson",
  "duct-repair": "duct-repair-tucson",
  "home-energy-audit": "home-energy-audit-tucson",
  "indoor-air-quality": "indoor-air-quality-tucson",
  "roof-inspection": "residential-roof-repair",
  "roof-repair": "residential-roof-repair",
  "roof-replacement": "residential-roof-replacement",
  "roof-replacements-tucson": "residential-roof-replacement",
  "ev-charger-installation": "electrical",
  "ev-chargers": "electrical",
  "whole-house-surge-protection": "electrical",
  "plumbers-tucson": "plumbing",
  "air-conditioning-service-tucson": "ac-service-tucson",
};

/** Exact old-site paths the legacy map does not cover (Moz crawl 2026-10-01). */
const PATH_FIXES: Record<string, string> = {
  "/solar-tucson": "/services/solar",
  "/solar-tucson/panel-and-installation-cost-tucson": "/services/residential-solar-installation",
  "/solar-tucson/solar-installers-tuscon": "/services/residential-solar-installation",
  "/solar-tucson/solar-powered-air-conditioner": "/services/solar-ac-tucson",
  "/solar-powered-air-conditioner": "/services/solar-ac-tucson",
  "/plumber-tucson/desert-shield-water-filtration-system": "/services/water-filtration",
  "/why-is-my-air-conditioning-working-upstairs-but-not-downstairs": "/blog/hvac",
};

/** Old WordPress sections: anything under them we cannot place goes to the trade page. */
const SECTION_FALLBACKS: Array<[RegExp, string]> = [
  [/^\/solar-tucson\//, "/services/solar"],
  [/^\/plumber-tucson\//, "/services/plumbing"],
  [/^\/plumbers-tucson\//, "/services/plumbing"],
  [/^\/air-conditioning\//, "/services/hvac"],
  [/^\/electrical-tucson\//, "/services/electrical"],
  [/^\/roofing-tucson-az\//, "/services/roofing"],
  [/^\/heating\//, "/services/heating-tucson"],
];

/** Validate and repair a single destination. Returns null for "leave it alone". */
function repair(dest: string): string | null {
  const [path] = dest.split(/[?#]/);

  const svc = path.match(/^\/services\/([^/]+)$/);
  if (svc) {
    const slug = svc[1].toLowerCase();
    if (serviceExists(slug)) return path === dest ? null : path;
    if (SERVICE_ALIASES[slug]) return `/services/${SERVICE_ALIASES[slug]}`;
    const tradeCity = resolveTradeCity(slug);
    if (tradeCity) return tradeCity;
    // Looks like an old blog slug the keyword heuristic grabbed?
    const post = resolveBlogSlug(slug);
    if (post) return `/blog/${post.category}/${post.slug}`;
    // Not a service, not a post: the legacy map may have a second entry for
    // the dead destination itself (e.g. /services/roofing-avravalley ->
    // /services/roofing-avra-valley) or for the bare slug. Follow it; the
    // caller validates the next hop.
    const again = getRedirectDestination(path) || getRedirectDestination(`/${slug}`);
    if (again && again !== dest) return again;
    return "__404__";
  }

  const nested = path.match(/^\/services\/([^/]+)\/([^/]+)$/);
  if (nested) {
    const inner = nested[2].toLowerCase();
    if (serviceExists(inner)) return `/services/${inner}`;
    if (SERVICE_ALIASES[inner]) return `/services/${SERVICE_ALIASES[inner]}`;
  }

  const post = path.match(/^\/blog\/([a-z-]+)\/([^/]+)$/);
  if (post) {
    const [, cat, slug] = post;
    if (BLOG[slug] === cat) return null;
    const hit = resolveBlogSlug(slug);
    if (hit) return `/blog/${hit.category}/${hit.slug}`;
    return `/blog/${BLOG_CATEGORIES.has(cat) ? cat : blogCategoryFor(slug)}`;
  }

  const bare = path.match(/^\/blog\/([^/]+)$/);
  if (bare && !BLOG_CATEGORIES.has(bare[1])) {
    const hit = resolveBlogSlug(bare[1]);
    return hit ? `/blog/${hit.category}/${hit.slug}` : `/blog/${blogCategoryFor(bare[1])}`;
  }

  const area = path.match(/^\/service-areas\/([^/]+)$/);
  if (area && area[1] !== area[1].toLowerCase()) return `/service-areas/${area[1].toLowerCase()}`;

  return null;
}

/** For destinations computed elsewhere (legacy404Redirects.json): repair if possible, else pass through. */
export function validateDestination(dest: string): string {
  const fixed = repair(dest);
  return fixed && fixed !== "__404__" ? fixed : dest;
}

/**
 * Final destination for a pathname, or null when the page should be served
 * (or 404) as is. Never returns the input path.
 */
export function resolveRedirect(pathname: string): string | null {
  let current = pathname;
  let result: string | null = null;

  for (let hop = 0; hop < MAX_HOPS; hop++) {
    let next: string | null = PATH_FIXES[current] || getRedirectDestination(current);
    if (!next) {
      const section = SECTION_FALLBACKS.find(([re]) => re.test(current));
      if (section) next = section[1];
    }

    if (!next) {
      // The legacy map had nothing. The path itself may still be repairable
      // (a /blog/<slug> with no category, a capitalized city, an old blog
      // slug at the root).
      const fixed = repair(current);
      if (fixed && fixed !== "__404__") next = fixed;
      else if (!fixed && hop === 0) {
        const seg = current.split("/").filter(Boolean);
        if (seg.length === 1) {
          const post = resolveBlogSlug(seg[0]);
          if (post) next = `/blog/${post.category}/${post.slug}`;
        }
      }
      if (!next) break;
    }

    // Validate what the map returned.
    const fixed = repair(next);
    if (fixed === "__404__") {
      // A /services/<slug> that does not exist. If the input looked like an
      // old blog post, send it to the right category rather than a dead page.
      const seg = current.split("/").filter(Boolean);
      if (seg.length === 1 && SERVICE_KEYWORDS.some((k) => seg[0].includes(k)) && seg[0].split("-").length >= 5) {
        next = `/blog/${blogCategoryFor(seg[0])}`;
      } else {
        break;
      }
    } else if (fixed) {
      next = fixed;
    }

    if (next === current) break;
    result = next;
    current = next;
  }

  // Never answer with a redirect to a page we know is dead; a 404 on the
  // original URL is one request shorter and tells Search Console the truth.
  if (result && repair(result) === "__404__") return null;
  return result && result !== pathname ? result : null;
}
