import Link from "next/link";

/**
 * Sitewide "Free Estimates" promo banner.
 * FIXED directly below the fixed header (top offset = header height: 112px / md 144px,
 * which is the logo at h-20 / md:h-24 plus py-4 / md:py-6 in Header.tsx; the old 96/128
 * values dated from the previous logo and left the top 16px of the banner hidden under
 * the header, so the text looked top-aligned).
 * Stays on screen while scrolling. NOTE: position:sticky does NOT work here because
 * body has `overflow-x: hidden` (it becomes a scroll container), so we use fixed +
 * matching top padding on <main> (pt-[168px] md:pt-[208px] = header + banner height).
 * The whole banner links to /schedule via a stretched link; the asterisk is a separate
 * link that anchors to the footer disclaimer (#estimate-disclaimer). Persistent (no
 * dismiss). Sits below the header so the header's tap-to-call button is never covered.
 * Fixed height + no-wrap keep the offset constant across breakpoints.
 */
export default function PromoBanner() {
  return (
    <div className="fixed left-0 right-0 top-[112px] md:top-[144px] z-40 flex h-14 md:h-16 items-center justify-center bg-[#FFD100] px-4 text-center text-[#1D4ED8] shadow-md">
      <Link
        href="/schedule"
        aria-label="Free estimates on all services - schedule service"
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
