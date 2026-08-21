"use client";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { getCampaignPhone } from "@/lib/campaignPhones";

/** Sticky mobile tap-to-call bar on PPC landing pages, using the campaign number. */
export default function LpStickyCall() {
  const pathname = usePathname();
  const camp = getCampaignPhone(pathname);
  if (!camp) return null;
  return (
    <a
      href={`tel:${camp.tel}`}
      data-testid="lp-sticky-call"
      className="fixed inset-x-0 bottom-0 z-50 flex min-h-[56px] items-center justify-center gap-2 bg-[#C8101F] px-4 py-3 text-lg font-extrabold text-white shadow-[0_-4px_16px_rgba(0,0,0,0.2)] md:hidden"
    >
      <Phone className="h-5 w-5" /> Call {camp.display}
    </a>
  );
}
