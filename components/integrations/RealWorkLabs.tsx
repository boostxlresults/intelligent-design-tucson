"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { getRealWorkLabsId } from "@/lib/realworklabs-mapping";

const RWL_API_KEY = process.env.NEXT_PUBLIC_RWL_API_KEY || "";
const RWL_BASE_URL = "https://app.realworklabs.com";

let rwlScriptLoaded = false;
let rwlScriptLoading = false;
let rwlInitialized = false;
const pendingCallbacks: (() => void)[] = [];

function loadRealWorkLabsScript(onReady?: () => void) {
  if (onReady) {
    if (rwlInitialized) {
      onReady();
      return;
    }
    pendingCallbacks.push(onReady);
  }

  if (rwlScriptLoaded || rwlScriptLoading) return;
  rwlScriptLoading = true;

  const script = document.createElement("script");
  script.src = `${RWL_BASE_URL}/static/plugin/loader.js?v=${Date.now()}`;
  script.async = true;
  
  window.addEventListener("rwlPluginReady", () => {
    rwlScriptLoaded = true;
    if ((window as any).rwlPlugin) {
      (window as any).rwlPlugin.init(RWL_BASE_URL, RWL_API_KEY);
      rwlInitialized = true;
      pendingCallbacks.forEach(cb => cb());
      pendingCallbacks.length = 0;
    }
  }, { once: true });

  document.body.appendChild(script);
}

function reinitializeWidget(elementId: string) {
  const rwlPlugin = (window as any).rwlPlugin;
  if (rwlPlugin && typeof rwlPlugin.refresh === "function") {
    rwlPlugin.refresh();
  } else if (rwlPlugin && typeof rwlPlugin.init === "function") {
    rwlPlugin.init(RWL_BASE_URL, RWL_API_KEY);
  }
}

export default function RealWorkLabs() {
  return null;
}

export interface RealWorkLabsMapProps {
  locationSlug: string;
  className?: string;
}

export function RealWorkLabsMap({ locationSlug, className = "" }: RealWorkLabsMapProps) {
  const rwlId = getRealWorkLabsId(locationSlug);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const initWidget = useCallback(() => {
    if (rwlId) {
      setTimeout(() => reinitializeWidget(rwlId), 100);
    }
  }, [rwlId]);

  useEffect(() => {
    if (!rwlId || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          loadRealWorkLabsScript(initWidget);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [rwlId, initWidget]);

  if (!rwlId) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      id={rwlId}
      className={className}
      data-testid={`rwl-map-${locationSlug}`}
      style={{ minHeight: isVisible ? undefined : "300px" }}
    />
  );
}
