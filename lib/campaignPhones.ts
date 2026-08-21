/**
 * Per-campaign ServiceTitan DNI tracking numbers for PPC landing pages.
 *
 * PLACEHOLDERS — the real number for each page is supplied per campaign.
 * Each /lp page uses its OWN number so calls attribute to the right campaign,
 * and these routes are EXEMPT from the sitewide ServiceTitan DNI swap (so the
 * hardcoded campaign number is never replaced). Do NOT point paid spend at a
 * page until its real number is in place.
 */
export type CampaignPhone = { tel: string; display: string };

export const CAMPAIGN_PHONES: Record<string, CampaignPhone> = {
  "/lp/ac-repair-tucson": { tel: "5208123470", display: "(520) 812-3470" },
  "/lp/emergency-ac-repair-tucson": { tel: "5208123485", display: "(520) 812-3485" },
  "/lp/ac-not-cooling": { tel: "5208123470", display: "(520) 812-3470" },  // shares Page A number (symptom kws moving into AC-Repair ad group)
};

export function getCampaignPhone(pathname?: string | null): CampaignPhone | null {
  if (!pathname) return null;
  for (const key of Object.keys(CAMPAIGN_PHONES)) {
    if (pathname === key || pathname.startsWith(key + "/")) return CAMPAIGN_PHONES[key];
  }
  return null;
}
