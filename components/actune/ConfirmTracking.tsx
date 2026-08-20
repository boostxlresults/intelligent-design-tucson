"use client";
import { useEffect, useRef } from "react";

function fbq(...args: unknown[]) {
  try { (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq?.(...args); } catch { /* noop */ }
}
function dl(payload: Record<string, unknown>) {
  try { (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push(payload); } catch { /* noop */ }
}

/** Fires the conversion once on the confirmation page. Not on button click. */
export default function ConfirmTracking() {
  const fired = useRef(false);
  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    fbq("track", "Lead", { content_name: "AC Tune-Up $28.88", content_category: "hvac", value: 28.88, currency: "USD" });
    dl({ event: "generate_lead", lead_type: "ac_tune_up_2888", value: 28.88, currency: "USD" });
  }, []);
  return null;
}
