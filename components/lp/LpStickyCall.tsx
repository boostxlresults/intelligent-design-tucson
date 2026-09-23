"use client";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { getCampaignPhone } from "@/lib/campaignPhones";

/** Sticky mobile tap-to-call bar on PPC landing pages, using the campaign number.
 *
 *  secondaryHref/secondaryLabel add a second button beside the call button. Only
 *  pass them on a page that actually has the target anchor, since the bar renders
 *  on every /lp/ route. Omitted, the bar stays a single full-width call button. */
export default function LpStickyCall({
  secondaryHref,
  secondaryLabel,
}: {
  secondaryHref?: string;
  secondaryLabel?: string;
} = {}) {
  const pathname = usePathname();
  const camp = getCampaignPhone(pathname);
  if (!camp) return null;

  const hasSecondary = Boolean(secondaryHref && secondaryLabel);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex shadow-[0_-4px_16px_rgba(0,0,0,0.2)] md:hidden">
      <a
        href={`tel:${camp.tel}`}
        data-testid="lp-sticky-call"
        className={`flex min-h-[56px] items-center justify-center gap-2 bg-[#C8101F] px-4 py-3 text-lg font-extrabold text-white ${hasSecondary ? "w-1/2" : "w-full"}`}
      >
        <Phone className="h-5 w-5" /> {hasSecondary ? "Call now" : `Call ${camp.display}`}
      </a>
      {hasSecondary && (
        <a
          href={secondaryHref}
          data-testid="lp-sticky-secondary"
          className="flex min-h-[56px] w-1/2 items-center justify-center bg-[#0d1b3e] px-4 py-3 text-lg font-extrabold text-white"
        >
          {secondaryLabel}
        </a>
      )}
    </div>
  );
}
