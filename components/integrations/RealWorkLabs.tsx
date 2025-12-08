"use client";

import Script from "next/script";
import { getRealWorkLabsId } from "@/lib/realworklabs-mapping";

const RWL_API_KEY = "Mv2yZInBciS35Sln";

export default function RealWorkLabs() {
  return (
    <Script
      id="realworklabs-loader"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(){
            var d = document, t = 'script',
                o = d.createElement(t),
                s = d.getElementsByTagName(t)[0];
            o.src = 'https://app.realworklabs.com/static/plugin/loader.js?v=' + new Date().getTime();
            window.addEventListener('rwlPluginReady', function () {
              window.rwlPlugin.init('https://app.realworklabs.com', '${RWL_API_KEY}');
            }, false);
            s.parentNode.insertBefore(o, s);
          }());
        `,
      }}
    />
  );
}

export interface RealWorkLabsMapProps {
  locationSlug: string;
  className?: string;
}

export function RealWorkLabsMap({ locationSlug, className = "" }: RealWorkLabsMapProps) {
  const rwlId = getRealWorkLabsId(locationSlug);
  
  if (!rwlId) {
    return null;
  }

  return (
    <div 
      id={rwlId} 
      className={className}
      data-testid={`rwl-map-${locationSlug}`}
    />
  );
}
