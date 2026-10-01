/**
 * Landing-page attribution capture (client only).
 *
 * The sitewide capture script in app/layout.tsx (id "idach-attr") only stores
 * UTMs when a Google click id is present. Meta traffic arrives with fbclid and
 * UTMs but no gclid, so that script stores nothing for it. This helper fills
 * the gap for paid landing pages: on first paint it reads the ad parameters
 * off the URL, keeps them in sessionStorage for the rest of the visit, and
 * hands them back as hidden-field values for the lead form and as the query
 * string carried onto the thank-you page.
 */
export const LP_ATTR_KEY = "id_lp_attribution";

export const LP_ATTR_FIELDS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
  "gbraid",
  "wbraid",
] as const;

export type LpAttrField = (typeof LP_ATTR_FIELDS)[number];
export type LpAttribution = Partial<Record<LpAttrField, string>> & {
  landing_url?: string;
  referrer?: string;
};

function readStored(): LpAttribution {
  try {
    const raw = sessionStorage.getItem(LP_ATTR_KEY);
    if (raw) return JSON.parse(raw) as LpAttribution;
  } catch {
    /* storage unavailable */
  }
  return {};
}

/** Merge URL parameters into sessionStorage (URL wins) and return the result. */
export function captureLpAttribution(): LpAttribution {
  if (typeof window === "undefined") return {};
  const stored = readStored();
  const params = new URLSearchParams(window.location.search);
  let fromUrl = false;
  for (const k of LP_ATTR_FIELDS) {
    const v = params.get(k);
    if (v) {
      stored[k] = v.slice(0, 300);
      fromUrl = true;
    }
  }
  if (fromUrl || !stored.landing_url) {
    stored.landing_url = window.location.href.slice(0, 500);
    if (document.referrer) stored.referrer = document.referrer.slice(0, 300);
  }
  try {
    sessionStorage.setItem(LP_ATTR_KEY, JSON.stringify(stored));
  } catch {
    /* storage unavailable */
  }
  return stored;
}

/** Read without touching the URL. */
export function getLpAttribution(): LpAttribution {
  if (typeof window === "undefined") return {};
  return readStored();
}

/** The ad parameters as a query string, for carrying onto the thank-you page. */
export function lpAttributionQuery(extra: Record<string, string> = {}): string {
  const a = getLpAttribution();
  const q = new URLSearchParams();
  for (const k of LP_ATTR_FIELDS) if (a[k]) q.set(k, a[k] as string);
  for (const [k, v] of Object.entries(extra)) if (v) q.set(k, v);
  return q.toString();
}

/** Meta browser cookies used for Conversions API matching. */
export function readMetaCookies(): { fbp?: string; fbc?: string } {
  if (typeof document === "undefined") return {};
  const out: { fbp?: string; fbc?: string } = {};
  for (const part of document.cookie.split("; ")) {
    if (part.startsWith("_fbp=")) out.fbp = part.slice(5);
    if (part.startsWith("_fbc=")) out.fbc = part.slice(5);
  }
  return out;
}
