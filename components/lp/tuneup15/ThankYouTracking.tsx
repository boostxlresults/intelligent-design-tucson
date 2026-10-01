"use client";

import { useEffect } from "react";
import { ga4Event, metaTrack } from "@/lib/metaPixel";
import { fireVibeLead } from "@/lib/analytics";

/**
 * Fires the conversion events exactly once per lead on the thank-you page.
 *   - Meta Lead, with the same event_id the server used for the Conversions
 *     API call, so Meta dedupes browser and server copies
 *   - GA4 generate_lead
 * A refresh of the thank-you page does not fire again (sessionStorage guard
 * keyed on the event id).
 */
export default function ThankYouTracking() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const eventId = params.get("eid") || "";
    const guardKey = `id_lp15_lead_${eventId || "noid"}`;
    try {
      if (eventId && sessionStorage.getItem(guardKey)) return;
      sessionStorage.setItem(guardKey, "1");
    } catch {
      /* storage unavailable; fire anyway */
    }
    metaTrack("Lead", { content_name: "$15 Tune-Up", content_category: "hvac_tuneup", currency: "USD", value: 15 }, eventId || undefined);
    ga4Event("generate_lead", { form_id: "tuneup15", form_name: "$15 Tune-Up", currency: "USD", value: 15, event_id: eventId });
    fireVibeLead();
  }, []);

  useEffect(() => {
    const onClick = (ev: MouseEvent) => {
      const a = (ev.target as HTMLElement | null)?.closest?.('a[href^="tel:"]');
      if (!a) return;
      metaTrack("Contact", { content_name: "$15 Tune-Up LP", placement: "thankyou" });
      ga4Event("phone_click", { event_category: "conversion", event_label: "Phone Call", source_component: "lp15_thankyou" });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
