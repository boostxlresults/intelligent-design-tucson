"use client";
import { usePathname } from "next/navigation";

/**
 * Hides the wrapped sitewide chrome on the given route prefixes.
 * Used to strip distractions (mobile floating bar, chat, showcase) and/or the
 * mega-footer on paid landing routes that provide their own conversion path.
 */
export default function LandingChromeGate({
  paths = ["/ac-tune-up-2888"],
  children,
}: {
  paths?: string[];
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (pathname && paths.some((p) => pathname === p || pathname.startsWith(p))) return null;
  return <>{children}</>;
}
