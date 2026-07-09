'use client';
import { trackPhoneClick } from "@/lib/analytics";

export default function FooterPhoneLink() {
  return (
    <a
      href="tel:5203332665"
      className="text-foreground hover:text-primary transition-colors font-medium"
      onClick={() => trackPhoneClick('footer')}
      data-testid="link-footer-phone"
    >
      (520) 333-2665
    </a>
  );
}
