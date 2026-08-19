import Link from "next/link";

/**
 * Sitewide "Free Estimates" promo banner.
 * Sticky directly below the fixed header (top offset matches the header height:
 * pt-24 / md:pt-32 on <main>). Stays on screen while scrolling.
 * The whole banner links to /schedule via a stretched link; the asterisk is a
 * separate link that anchors to the footer disclaimer (#estimate-disclaimer).
 * Persistent (no dismiss). Sits below the header so the header's tap-to-call
 * button is never covered.
 */
export default function PromoBanner() {
  return (
    <div className="sticky top-24 md:top-32 z-40 w-full bg-[#FFD100] px-4 py-4 text-center text-[#1D4ED8] shadow-md">
      <Link
        href="/schedule"
        aria-label="Free estimates on all services — schedule service"
        data-testid="banner-free-estimates"
        className="text-lg font-extrabold uppercase leading-tight tracking-wide after:absolute after:inset-0 sm:text-xl md:text-2xl"
      >
        FREE ESTIMATES ON ALL SERVICES!
      </Link>
      <a
        href="#estimate-disclaimer"
        aria-label="See estimate disclaimer"
        data-testid="banner-disclaimer-link"
        className="relative z-10 -mx-0.5 inline-block px-1 text-lg font-extrabold no-underline sm:text-xl md:text-2xl"
      >
        *
      </a>
    </div>
  );
}
