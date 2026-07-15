"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

const RWL_API_KEY = "Mv2yZInBciS35Sln";
const RWL_BASE_URL = "https://app.realworklabs.com";
// The RealWorkLabs project showcase only renders on these routes, so only load the
// plugin here. This removes its main-thread cost from every service + service-area
// page (the URL groups flagged for mobile INP) with zero content/conversion impact.
const RWL_PATHS = new Set(["/", "/recent-projects"]);

export default function RealWorkLabsLoader() {
  const pathname = usePathname();
  if (!pathname || !RWL_PATHS.has(pathname)) return null;
  return (
    <Script
      src={`${RWL_BASE_URL}/static/plugin/loader.js`}
      strategy="lazyOnload"
      onLoad={() => {
        const initPlugin = () => {
          if ((window as any).rwlPlugin) {
            (window as any).rwlPlugin.init(RWL_BASE_URL, RWL_API_KEY);
          }
        };
        window.addEventListener("rwlPluginReady", initPlugin, { once: true });
        initPlugin();
      }}
    />
  );
}
