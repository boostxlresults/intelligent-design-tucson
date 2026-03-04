"use client";

import { useCallback, useEffect, useState } from "react";

const API_KEY = "m1cp1a9zj306h48ohavpwg8w";
const SCHEDULER_ID = "sched_vwgezlwi56yyvwdb0nzlng14";

let schedulerLoaded = false;
let schedulerLoading = false;
let loadPromise: Promise<void> | null = null;

declare global {
  interface Window {
    _scheduler?: {
      show: (options: { schedulerId: string }) => void;
    };
  }
}

function loadSchedulerScript(): Promise<void> {
  if (schedulerLoaded) return Promise.resolve();
  if (loadPromise) return loadPromise;

  schedulerLoading = true;
  loadPromise = new Promise((resolve) => {
    const script = document.createElement("script");
    script.id = "se-widget-embed";
    script.src = "https://embed.scheduler.servicetitan.com/scheduler-v1.js";
    script.async = true;
    script.dataset.apiKey = API_KEY;
    script.dataset.schedulerid = SCHEDULER_ID;

    script.onload = () => {
      schedulerLoaded = true;
      schedulerLoading = false;
      setTimeout(resolve, 100);
    };

    script.onerror = () => {
      schedulerLoading = false;
      loadPromise = null;
      resolve();
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
      await loadSchedulerScript();
      if (window._scheduler?.show) {
        window._scheduler.show({ schedulerId: SCHEDULER_ID });
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { openScheduler, isLoading, schedulerId: SCHEDULER_ID };
}

export function preloadScheduler() {
  if (typeof window !== "undefined" && !schedulerLoaded && !schedulerLoading) {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://embed.scheduler.servicetitan.com";
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
