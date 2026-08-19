import Link from "next/link";

/**
 * Sitewide "Free Estimates" promo banner.
 * FIXED directly below the fixed header (top offset = header height: 96px / md 128px).
 * Stays on screen while scrolling. NOTE: position:sticky does NOT work here because
 * body has `overflow-x: hidden` (it becomes a scroll container), so we use fixed +
 * matching top padding on <main> (pt-[152px] md:pt-48 = header + banner height).
 * The whole banner links to /schedule via a stretched link; the asterisk is a separate
 * link that anchors to the footer disclaimer (#estimate-disclaimer). Persistent (no
 * dismiss). Sits below the header so the header's tap-to-call button is never covered.
 * Fixed height + no-wrap keep the offset constant across breakpoints.
 */
export default function PromoBanner() {
  return (
    <div className="fixed left-0 right-0 top-24 md:top-32 z-40 flex h-14 md:h-16 items-center justify-center bg-[#FFD100] px-4 text-center text-[#1D4ED8] shadow-md">
      <Link
        href="/schedule"
        aria-label="Free estimates on all services — schedule service"
        data-testid="banner-free-estimates"
        className="whitespace-nowrap text-base font-extrabold uppercase tracking-wide after:absolute after:inset-0 sm:text-lg md:text-2xl"
      >
        FREE ESTIMATES ON ALL SERVICES!
      </Link>
      <a
        href="#estimate-disclaimer"
        aria-label="See estimate disclaimer"
        data-testid="banner-disclaimer-link"
        className="relative z-10 px-1 text-base font-extrabold no-underline sm:text-lg md:text-2xl"
      >
        *
      </a>
    </div>
  );
}
