'use client';
import { usePathname } from "next/navigation";
import { trackPhoneClick } from "@/lib/analytics";
import { getCampaignPhone } from "@/lib/campaignPhones";

export default function FooterPhoneLink() {
  const pathname = usePathname();
  const camp = getCampaignPhone(pathname);
  const isAcTune = !!pathname && pathname.startsWith("/ac-tune-up-2888");
  const tel = camp ? camp.tel : isAcTune ? "5203332665" : "5203332665";
  const display = camp ? camp.display : "(520) 333-2665";
  return (
    <a
      href={`tel:${tel}`}
      className="text-foreground hover:text-primary transition-colors font-medium"
      onClick={() => trackPhoneClick('footer')}
      data-testid="link-footer-phone"
    >
      {display}
    </a>
  );
}
