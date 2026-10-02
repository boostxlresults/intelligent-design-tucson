"use client";
import { usePathname } from "next/navigation";
import { isStandaloneLandingPath } from "@/lib/standaloneLandingPages";

/**
 * The <main> wrapper. Every normal page pads for the fixed header; standalone
 * landing routes have no header, so they get no padding. usePathname resolves
 * on the server too, so the padding class is correct in the first HTML and
 * there is no layout shift on hydration.
 */
export default function MainShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const standalone = isStandaloneLandingPath(pathname);
  return <main className={standalone ? "flex-1" : "flex-1 pt-[168px] md:pt-[208px]"}>{children}</main>;
}
