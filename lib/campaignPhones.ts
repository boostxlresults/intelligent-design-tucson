/**
 * Per-campaign phone numbers hardcoded into PPC landing page markup.
 *
 * These are the HTML FALLBACK under ServiceTitan DNI — not a replacement for it.
 * (Corrected 2026-09-08: these routes used to be exempted from DNI, which broke
 * click-level attribution entirely. See components/integrations/DNIInjector.tsx.)
 *
 * DNI now runs on every page and swaps these numbers for a session-specific pool
 * number carrying the visitor's gclid/fbclid. The hardcoded value only ever reaches
 * a caller who taps before the swap executes; that call still lands on the campaign
 * line and is still attributable at campaign level.
 *
 * NEVER put the main company line (520) 333-2665 on a paid landing page — calls to
 * it land in a generic ServiceTitan bucket with no campaign and no click.
 */
export type CampaignPhone = { tel: string; display: string };

export const CAMPAIGN_PHONES: Record<string, CampaignPhone> = {
  "/lp/ac-repair-tucson": { tel: "5208123470", display: "(520) 812-3470" },
  "/lp/emergency-ac-repair-tucson": { tel: "5208123485", display: "(520) 812-3485" },
  "/lp/ac-not-cooling": { tel: "5208123470", display: "(520) 812-3470" },  // shares Page A number (symptom kws moving into AC-Repair ad group)
  "/lp/ac-blowing-hot-air": { tel: "5208123470", display: "(520) 812-3470" },  // AC-Repair ad group fallback
  "/lp/ac-fan-not-spinning": { tel: "5208123470", display: "(520) 812-3470" },  // AC-Repair ad group fallback
  "/drain-clearing-4888": { tel: "5203486684", display: "(520) 348-6684" },
};

export function getCampaignPhone(pathname?: string | null): CampaignPhone | null {
  if (!pathname) return null;
  for (const key of Object.keys(CAMPAIGN_PHONES)) {
    if (pathname === key || pathname.startsWith(key + "/")) return CAMPAIGN_PHONES[key];
  }
  return null;
}
