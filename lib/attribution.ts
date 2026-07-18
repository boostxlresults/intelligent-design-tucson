/**
 * Client-side ad-click attribution helper.
 *
 * The sitewide capture script (see app/layout.tsx, id="idach-attr") stores the
 * click attribution under localStorage/cookie key "idach_click_attribution" and
 * exposes it as window.IDACH_ATTR. This module reads it back for forms and for
 * hydrating the URL so ServiceTitan Scheduling Pro captures the click natively.
 */
export const ATTR_KEY = "idach_click_attribution";
export const ATTR_FIELDS = ["gclid", "gbraid", "wbraid", "utm_campaign", "utm_source", "utm_medium", "utm_term"] as const;
export type AttrField = (typeof ATTR_FIELDS)[number];
export type Attribution = Partial<Record<AttrField, string>> & { ts?: number; landing?: string };

/** Read the stored attribution: window global first, then cookie, then localStorage. */
export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  const w = window as unknown as { IDACH_ATTR?: Attribution };
  if (w.IDACH_ATTR) return w.IDACH_ATTR;
  try {
    const c = document.cookie.split("; ").find((x) => x.startsWith(ATTR_KEY + "="));
    if (c) return JSON.parse(decodeURIComponent(c.slice(ATTR_KEY.length + 1)));
  } catch { /* noop */ }
  try {
    const s = localStorage.getItem(ATTR_KEY);
    if (s) return JSON.parse(s);
  } catch { /* noop */ }
  return {};
}

/** Flatten the stored attribution into hidden-field/body values, omitting empties. */
export function attributionFields(): Record<string, string> {
  const a = getAttribution();
  const out: Record<string, string> = {};
  for (const k of ATTR_FIELDS) if (a[k]) out[k] = a[k] as string;
  return out;
}

export function hasClickId(): boolean {
  const a = getAttribution();
  return !!(a.gclid || a.gbraid || a.wbraid);
}

/**
 * Ensure the stored click IDs are present on the current URL so ServiceTitan
 * Scheduling Pro captures them into the booking (native attribution — Plan A).
 * Only ADDS missing params via replaceState; never removes existing ones and
 * never touches any DOM/phone elements (DNI-safe).
 */
export function hydrateUrlForSE(): void {
  if (typeof window === "undefined") return;
  try {
    const a = getAttribution();
    if (!a.gclid && !a.gbraid && !a.wbraid) return;
    const url = new URL(window.location.href);
    let changed = false;
    for (const k of ATTR_FIELDS) {
      if (a[k] && !url.searchParams.get(k)) { url.searchParams.set(k, a[k] as string); changed = true; }
    }
    if (changed) window.history.replaceState(null, "", url.toString());
  } catch { /* noop */ }
}
