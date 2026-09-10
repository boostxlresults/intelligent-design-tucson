/**
 * Phone numbers rendered on PPC landing pages.
 *
 * These MUST be the ServiceTitan DNI **source number** - the number DNI is
 * configured to find and replace. That is (520) 333-2665.
 *
 * WHY (corrected 2026-09-08, second pass):
 * ServiceTitan DNI is a find-and-replace against a configured source number. It
 * does not swap arbitrary numbers. Proven live on a single page load:
 *   /services/ac-repair-tucson ships tel:5203332665 -> DNI swaps it to a pool
 *     number (observed (520) 657-0312).                                    PASS
 *   /lp/* previously shipped tel:5208123470 -> DNI loaded but left it alone.
 *     (520) 812-3470 is itself a dedicated ServiceTitan tracking number, so it
 *     is not on the swap-source list and DNI has nothing to match.         FAIL
 *
 * Consequence of the old setup: /lp/ac-not-cooling took 87 paid clicks Sept 1-8
 * and produced one call with no gclid attached, so ServiceTitan could not upload
 * the conversion and Google Ads reported zero. Meta callers on the same hardcoded
 * number were credited to Google.
 *
 * With 333-2665 in the markup, DNI swaps it per session for a pool number
 * carrying the visitor's gclid/fbclid, and calls attribute to the click that
 * caused them on both Google and Meta.
 *
 * KNOWN TRADEOFF: if a visitor taps before the swap executes, they reach the main
 * company line and that call lands in a generic ServiceTitan bucket with no
 * campaign. This is a small window (see DNIInjector: paid pages load DNI with
 * afterInteractive rather than lazyOnload to shrink it) and is strictly better
 * than the old behaviour, where NO call from these pages carried a click id.
 *
 * TO CLOSE THAT WINDOW COMPLETELY: add each campaignNumber below to the DNI
 * swap-source list in ServiceTitan (tenant 227669022). DNI would then swap the
 * campaign number too, giving campaign-level attribution on the fallback and
 * click-level attribution after the swap. That is a ServiceTitan-side setting.
 */
export type CampaignPhone = {
  /** Rendered on the page. Must be the DNI swap source. */
  tel: string;
  display: string;
  /** The dedicated ServiceTitan tracking number for this campaign. NOT rendered
   *  today - kept so it can be restored once it is a DNI swap source. */
  campaignNumber?: string;
};

/** The number ServiceTitan DNI is configured to replace. Do not render any other
 *  number on a page where call attribution matters. */
export const DNI_SOURCE_PHONE = { tel: "5203332665", display: "(520) 333-2665" } as const;

export const CAMPAIGN_PHONES: Record<string, CampaignPhone> = {
  "/lp/ac-repair-tucson": { ...DNI_SOURCE_PHONE, campaignNumber: "(520) 812-3470" },
  "/lp/emergency-ac-repair-tucson": { ...DNI_SOURCE_PHONE, campaignNumber: "(520) 812-3485" },
  "/lp/ac-not-cooling": { ...DNI_SOURCE_PHONE, campaignNumber: "(520) 812-3470" },
  "/lp/ac-blowing-hot-air": { ...DNI_SOURCE_PHONE, campaignNumber: "(520) 812-3470" },
  "/lp/ac-fan-not-spinning": { ...DNI_SOURCE_PHONE, campaignNumber: "(520) 812-3470" },
  "/lp/ac-not-turning-on": { ...DNI_SOURCE_PHONE, campaignNumber: "(520) 812-3470" },
  "/lp/clogged-drain": { ...DNI_SOURCE_PHONE, campaignNumber: "(520) 812-3494" },
  "/lp/water-leak-detection": { ...DNI_SOURCE_PHONE, campaignNumber: "(520) 812-3494" },
  "/drain-clearing-4888": { ...DNI_SOURCE_PHONE, campaignNumber: "(520) 348-6684" },
};

export function getCampaignPhone(pathname?: string | null): CampaignPhone | null {
  if (!pathname) return null;
  for (const key of Object.keys(CAMPAIGN_PHONES)) {
    if (pathname === key || pathname.startsWith(key + "/")) return CAMPAIGN_PHONES[key];
  }
  return null;
}

/** True for routes that exist to receive paid traffic. Used ONLY to load DNI
 *  sooner on those pages - never to skip loading it. */
export function isPaidLandingPage(pathname?: string | null): boolean {
  return getCampaignPhone(pathname) !== null;
}
