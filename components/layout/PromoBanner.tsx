import Link from "next/link";

/**
 * Sitewide "Free Estimates" promo banner.
 * Renders directly below the fixed header (as the first child of <main>).
 * The whole banner links to /schedule via a stretched link; the asterisk is a
 * separate link that anchors to the footer disclaimer (#estimate-disclaimer).
 * Persistent (no dismiss control). Kept below the header so the header's
 * tap-to-call button is never covered.
 */
export default function PromoBanner() {
  return (
    <div className="relative w-full bg-[#FFD100] px-4 py-2.5 text-center text-[#1A1A1A]">
      <Link
        href="/schedule"
        aria-label="Free estimates on all services — schedule service"
        data-testid="banner-free-estimates"
        className="text-sm font-bold uppercase leading-tight tracking-wide after:absolute after:inset-0 sm:text-base"
      >
        FREE ESTIMATES ON ALL SERVICES!
      </Link>
      <a
        href="#estimate-disclaimer"
        aria-label="See estimate disclaimer"
        data-testid="banner-disclaimer-link"
        className="relative z-10 -mx-0.5 inline-block px-1 text-sm font-bold underline decoration-1 underline-offset-2 sm:text-base"
      >
        *
      </a>
    </div>
  );
}
