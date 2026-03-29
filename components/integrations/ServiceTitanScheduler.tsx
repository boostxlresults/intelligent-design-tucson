"use client";
import { useCallback, useEffect, useState } from "react";

/**
 * Schedule Engine Scheduler Integration
 *
 * Loads embed.scheduleengine.net/schedule-engine-v3.js on demand when the
 * user clicks a Schedule button. Uses the same apiKey as the GTM tag
 * (cl2m1ic44000g01rw1lka2pas) and calls window.ScheduleEngine.show().
 *
 * If GTM has already loaded the script (se-widget-embed already in DOM),
 * we skip injection and just call show() directly.
 */

const SE_API_KEY = "cl2m1ic44000g01rw1lka2pas";
const SE_SCRIPT_SRC = "https://embed.scheduleengine.net/schedule-engine-v3.js";
const SE_SCRIPT_ID = "se-widget-embed";

declare global {
  interface Window {
    ScheduleEngine?: {
      show: (options?: Record<string, unknown>) => void;
    };
  }
}

let loadPromise: Promise<boolean> | null = null;

function loadScheduleEngine(): Promise<boolean> {
  // Already loaded
  if (window.ScheduleEngine?.show) return Promise.resolve(true);
  // Already in progress
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve) => {
    // If GTM already injected the script tag, just wait for it to initialize
    const existing = document.getElementById(SE_SCRIPT_ID);
    if (existing) {
      // Script tag exists — poll for ScheduleEngine to appear
      const start = Date.now();
      const interval = setInterval(() => {
        if (window.ScheduleEngine?.show) {
          clearInterval(interval);
          resolve(true);
        } else if (Date.now() - start > 8000) {
          clearInterval(interval);
          loadPromise = null;
          resolve(false);
        }
      }, 100);
      return;
    }

    // Script not in DOM yet — inject it ourselves
    const script = document.createElement("script");
    script.id = SE_SCRIPT_ID;
    script.src = SE_SCRIPT_SRC;
    script.async = true;
    script.dataset.apiKey = SE_API_KEY;

    script.onload = () => {
      // Poll for ScheduleEngine to be initialized after script loads
      const start = Date.now();
      const interval = setInterval(() => {
        if (window.ScheduleEngine?.show) {
          clearInterval(interval);
          resolve(true);
        } else if (Date.now() - start > 5000) {
          clearInterval(interval);
          loadPromise = null;
          resolve(false);
        }
      }, 50);
    };

    script.onerror = () => {
      loadPromise = null;
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
      const ready = await loadScheduleEngine();
      if (ready && window.ScheduleEngine?.show) {
        window.ScheduleEngine.show();
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { openScheduler, isLoading };
}

export function preloadScheduler() {
  if (typeof window !== "undefined") {
    if (!document.querySelector(`link[href="${SE_SCRIPT_SRC}"]`)) {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = "https://embed.scheduleengine.net";
      document.head.appendChild(link);
    }
  }
}

export default function ServiceTitanScheduler() {
  useEffect(() => {
    const handleFirstInteraction = () => {
      preloadScheduler();
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
