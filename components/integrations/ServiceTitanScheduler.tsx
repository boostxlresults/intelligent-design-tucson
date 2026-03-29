"use client";
import { useCallback, useEffect, useState } from "react";

/**
 * Schedule Engine Scheduler Integration
 *
 * GTM (GTM-WKG99GJ) already loads the Schedule Engine script
 * (embed.scheduleengine.net/schedule-engine-v3.js) which exposes
 * window.ScheduleEngine. We simply wait for it to be available
 * and call ScheduleEngine.show().
 *
 * We do NOT load a second scheduler script — that caused a duplicate
 * id="se-widget-embed" conflict that prevented the widget from initializing.
 */

declare global {
  interface Window {
    ScheduleEngine?: {
      show: (options?: Record<string, unknown>) => void;
    };
  }
}

/** Poll for window.ScheduleEngine to be ready (loaded by GTM) */
function waitForScheduleEngine(timeoutMs = 10000): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.ScheduleEngine?.show) {
      resolve(true);
      return;
    }
    const start = Date.now();
    const interval = setInterval(() => {
      if (window.ScheduleEngine?.show) {
        clearInterval(interval);
        resolve(true);
      } else if (Date.now() - start > timeoutMs) {
        clearInterval(interval);
        resolve(false);
      }
    }, 100);
  });
}

export function useScheduler() {
  const [isLoading, setIsLoading] = useState(false);

  const openScheduler = useCallback(async () => {
    setIsLoading(true);
    try {
      const ready = await waitForScheduleEngine();
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
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://embed.scheduleengine.net";
    document.head.appendChild(link);
  }
}

export default function ServiceTitanScheduler() {
  useEffect(() => {
    const handleMouseMove = () => {
      preloadScheduler();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleMouseMove);
    };
    window.addEventListener("mousemove", handleMouseMove, { once: true, passive: true });
    window.addEventListener("touchstart", handleMouseMove, { once: true, passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleMouseMove);
    };
  }, []);
  return null;
}
