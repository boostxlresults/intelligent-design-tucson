"use client";
import { useCallback, useEffect, useState } from "react";
import { hydrateUrlForSE, hasClickId } from "@/lib/attribution";

/**
 * ServiceTitan Scheduling Pro — Direct Embed
 *
 * Loads embed.scheduler.servicetitan.com/scheduler-v1.js directly in the
 * site code (NOT via GTM) so it is always available regardless of GTM
 * load timing.
 *
 * The script requires:
 *   - id="se-widget-embed" on the script tag
 *   - data-api-key attribute on the script tag
 *
 * To open the scheduler:
 *   window._scheduler.show({ schedulerId: 'sched_vwgezlwi56yyvwdb0nzlng14' })
 *
 * The GTM container also has an old Schedule Engine tag (schedule-engine-v3.js)
 * with the same id="se-widget-embed". To prevent the GTM tag from conflicting,
 * we inject our script tag early (on first user interaction) so it is already
 * in the DOM before GTM fires. GTM's tag injection checks for an existing
 * element with that ID and skips if found.
 */

const ST_API_KEY = "m1cp1a9zj306h48ohavpwg8w";
const ST_SCHEDULER_ID = "sched_vwgezlwi56yyvwdb0nzlng14";
const ST_SCRIPT_SRC = "https://embed.scheduler.servicetitan.com/scheduler-v1.js";
const ST_SCRIPT_ID = "se-widget-embed";

declare global {
  interface Window {
    _scheduler?: {
      show: (options: { schedulerId: string }) => void;
    };
  }
}

let scriptInjected = false;
let loadPromise: Promise<boolean> | null = null;

function injectScript(): Promise<boolean> {
  // Already loaded and ready
  if (window._scheduler?.show) return Promise.resolve(true);
  // Already loading
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve) => {
    // If our script tag is already in the DOM (from a prior call), just poll
    const existing = document.getElementById(ST_SCRIPT_ID) as HTMLScriptElement | null;
    if (existing && existing.src.includes("servicetitan.com")) {
      // Our script is already injected — poll for _scheduler
      const start = Date.now();
      const iv = setInterval(() => {
        if (window._scheduler?.show) { clearInterval(iv); resolve(true); }
        else if (Date.now() - start > 8000) { clearInterval(iv); loadPromise = null; resolve(false); }
      }, 100);
      return;
    }

    // Remove any conflicting old schedule-engine tag (GTM may have injected it)
    const conflict = document.getElementById(ST_SCRIPT_ID);
    if (conflict) conflict.remove();

    // Inject the ServiceTitan Scheduling Pro script
    const script = document.createElement("script");
    script.id = ST_SCRIPT_ID;
    script.src = ST_SCRIPT_SRC;
    script.async = true;
    script.dataset.apiKey = ST_API_KEY;
    scriptInjected = true;

    script.onload = () => {
      // Poll for _scheduler to initialize after the script loads
      const start = Date.now();
      const iv = setInterval(() => {
        if (window._scheduler?.show) { clearInterval(iv); resolve(true); }
        else if (Date.now() - start > 5000) { clearInterval(iv); loadPromise = null; resolve(false); }
      }, 50);
    };

    script.onerror = () => {
      loadPromise = null;
      scriptInjected = false;
      resolve(false);
    };

    document.body.appendChild(script);
  });

  return loadPromise;
}

export function useScheduler() {
  const [isLoading, setIsLoading] = useState(false);

  const openScheduler = useCallback(async () => {
    setIsLoading(true);
    try {
      // Bridge stored ad-click attribution into the URL so ServiceTitan
      // Scheduling Pro captures gclid/gbraid/wbraid/utm natively on the booking.
      hydrateUrlForSE();
      try {
        (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event: "se_widget_open", gclid_present: hasClickId() });
      } catch { /* noop */ }
      const ready = await injectScript();
      if (ready && window._scheduler?.show) {
        window._scheduler.show({ schedulerId: ST_SCHEDULER_ID });
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { openScheduler, isLoading };
}

/** Preconnect to the scheduler origin on first user interaction */
export function preloadScheduler() {
  if (typeof window === "undefined") return;
  if (document.querySelector('link[href="https://embed.scheduler.servicetitan.com"]')) return;
  const link = document.createElement("link");
  link.rel = "preconnect";
  link.href = "https://embed.scheduler.servicetitan.com";
  document.head.appendChild(link);
}

/**
 * Injected into the layout. Preconnects on first interaction and
 * pre-injects the script tag so it beats GTM's conflicting old tag.
 */
export default function ServiceTitanScheduler() {
  useEffect(() => {
    // Preconnect on first interaction
    const handleFirstInteraction = () => {
      preloadScheduler();
      // Also eagerly inject the script tag to claim the se-widget-embed ID
      // before GTM fires and injects the old schedule-engine-v3.js tag
      if (!scriptInjected && !document.getElementById(ST_SCRIPT_ID)) {
        const script = document.createElement("script");
        script.id = ST_SCRIPT_ID;
        script.src = ST_SCRIPT_SRC;
        script.async = true;
        script.dataset.apiKey = ST_API_KEY;
        script.onload = () => {
          // Mark as loaded so injectScript() knows it's ready
          scriptInjected = true;
        };
        document.body.appendChild(script);
        scriptInjected = true;
      }
      window.removeEventListener("mousemove", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("mousemove", handleFirstInteraction, { once: true, passive: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener("mousemove", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  return null;
}
