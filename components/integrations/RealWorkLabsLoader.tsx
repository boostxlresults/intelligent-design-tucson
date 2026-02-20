"use client";

import Script from "next/script";

const RWL_API_KEY = "Mv2yZInBciS35Sln";
const RWL_BASE_URL = "https://app.realworklabs.com";

export default function RealWorkLabsLoader() {
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
