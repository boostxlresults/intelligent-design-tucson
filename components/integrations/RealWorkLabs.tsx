"use client";

import Script from "next/script";

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

const LOCATION_TO_RWL_ID: Record<string, string> = {
  "tucson": "rwl-tucson",
  "tucson-estates": "rwl-tucson-estates",
  "casas-adobes": "rwl-casas-adobes",
  "tortolita": "rwl-tortolita",
  "drexel-heights": "rwl-drexel-heights",
  "oro-valley": "rwl-oro-valley",
  "marana": "rwl-marana",
  "gladden-farms": "rwl-gladden-farms",
  "avra-valley": "rwl-avra-valley",
  "picture-rocks": "rwl-picture-rocks",
  "sahuarita": "rwl-sahuarita",
  "vail": "rwl-vail",
  "green-valley": "rwl-2green-valley",
  "saddlebrooke-catalina": "rwl-saddlebrooke-catalina",
  "east-tucson": "rwl-east-tucson",
  "catalina-foothills": "rwl-catalina-foothills",
  "tanque-verde": "rwl-tanque-verde",
  "rita-ranch": "rwl-rita-ranch",
  "corona-de-tucson": "rwl-corona-de-tucson",
  "red-rock-casa-grande": "rwl-red-rock-casa-grande",
};

export function RealWorkLabsMap({ locationSlug, className = "" }: RealWorkLabsMapProps) {
  const rwlId = LOCATION_TO_RWL_ID[locationSlug];
  
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
