"use client";
import { usePathname } from "next/navigation";

/**
 * Hides sitewide chrome (mega-footer, mobile floating bar, chat, showcase widgets)
 * on paid landing routes so they have a reduced footer and no exit paths in the body.
 * The landing page renders its own reduced footer + sticky bar.
 */
export default function LandingChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname && pathname.startsWith("/ac-tune-up-2888")) return null;
  return <>{children}</>;
}
