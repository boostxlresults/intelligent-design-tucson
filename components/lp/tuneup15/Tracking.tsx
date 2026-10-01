"use client";

import { useEffect } from "react";
import { captureLpAttribution } from "@/lib/lpAttribution";
import { ga4Event, metaTrack } from "@/lib/metaPixel";
import { fireVibeLead } from "@/lib/analytics";

/**
 * Landing-page tracking for /lp/15-tune-up.
 *   - captures ad parameters off the URL into sessionStorage
 *   - Meta ViewContent on landing (PageView already fires from the base code)
 *   - every tel: tap: Meta Contact + GA4 phone_click (+ the Vibe lead event the
 *     rest of the site fires on phone taps)
 * Renders nothing.
 */
export default function Tracking() {
  useEffect(() => {
    captureLpAttribution();
    metaTrack("ViewContent", { content_name: "$15 Tune-Up LP", content_category: "hvac_tuneup" });

    const onClick = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement | null;
      const a = target?.closest?.('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!a) return;
      const where = a.getAttribute("data-lp-call") || "page";
      metaTrack("Contact", { content_name: "$15 Tune-Up LP", placement: where });
      ga4Event("phone_click", { event_category: "conversion", event_label: "Phone Call", source_component: `lp15_${where}` });
      fireVibeLead();
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
