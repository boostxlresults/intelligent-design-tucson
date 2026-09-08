"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { isPaidLandingPage } from "@/lib/campaignPhones";

/**
 * ServiceTitan Dynamic Number Insertion (DNI)
 *
 * MUST RUN ON EVERY PAGE. No path exclusions. (2026-09-08)
 *
 * DNI previously returned null for any route in CAMPAIGN_PHONES — which meant every
 * paid landing page under /lp/* rendered with a hardcoded campaign number and no
 * ServiceTitan script at all. Consequence: a call could be bucketed to a campaign,
 * but with no gclid captured ServiceTitan could not upload the conversion back to
 * Google Ads, so Google reported zero conversions from pages that were ringing the
 * phone (/lp/ac-not-cooling: 87 paid clicks Sept 1-8, 1 call, 0 conversions in Ads).
 * Worse, the same landing pages receive Meta traffic, and every Meta caller dialing
 * the hardcoded number was credited to Google.
 *
 * DNI is the only mechanism that reads the visitor's real source (gclid for Google,
 * fbclid + UTMs for Meta, referrer for organic), assigns a session-specific pool
 * number, and lets ServiceTitan attribute the call to the click that caused it.
 * ServiceTitan requires it for both its Google Ads and Meta Ads integrations.
 *
 * The hardcoded numbers in lib/campaignPhones.ts remain as the HTML fallback: if a
 * visitor taps before the swap executes they still reach the campaign line and the
 * call is still attributable at campaign level. Belt and braces, not either/or.
 *
 * Do NOT reintroduce a pathname check here.
 *
 * LOAD STRATEGY (2026-09-08): organic pages keep strategy="lazyOnload" — DNI does
 * not need to run before LCP, only before a user taps a number, which on those
 * pages happens well after load. Paid landing pages use "afterInteractive"
 * instead, because their entire design is a tap-to-call above the fold and a
 * visitor arriving hot from an ad may tap within a second or two. Until the swap
 * runs, the markup shows the DNI source number (the main company line), and a
 * call placed on it lands in a generic ServiceTitan bucket with no campaign — so
 * the swap needs to win that race.
 *
 * This is a STRATEGY switch, not an exclusion. DNI loads on every page either
 * way. Do not turn it back into an early return.
 */
export default function DNIInjector() {
  const pathname = usePathname();
  // NOT an exclusion — this only decides how EARLY the script loads.
  const strategy = isPaidLandingPage(pathname) ? "afterInteractive" : "lazyOnload";
  return (
    <Script
      id="servicetitan-dni"
      strategy={strategy}
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            if (typeof window.dni !== 'undefined') return;
            
            var dni = (function(q,w,e,r,t,y,u){
              q['ServiceTitanDniObject']=t;
              q[t]=q[t]||function(){(q[t].q=q[t].q||[]).push(arguments)};
              q[t].l=1*new Date();
              y=w.createElement(e);
              u=w.getElementsByTagName(e)[0];
              y.async=true;
              y.src=r;
              u.parentNode.insertBefore(y,u);
              return q[t];
            })(window,document,'script','https://static.servicetitan.com/marketing-ads/dni.js','dni');
            
            dni('init', '227669022');
            
            if (document.readyState === 'complete') {
              dni('load');
            } else {
              window.addEventListener('load', function() { dni('load'); }, { once: true, passive: true });
            }
          })();
        `
      }}
    />
  );
}
