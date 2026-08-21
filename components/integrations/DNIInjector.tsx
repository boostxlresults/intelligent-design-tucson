"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { getCampaignPhone } from "@/lib/campaignPhones";

/**
 * ServiceTitan Dynamic Number Insertion (DNI)
 * 
 * Changed to lazyOnload — DNI swaps phone numbers for call tracking attribution.
 * It does NOT need to run before LCP paints. It only needs to run before a user
 * actually clicks a phone number, which happens well after page load.
 * 
 * lazyOnload fires after the page is fully loaded and the browser is idle,
 * which is early enough to swap numbers before any real user interaction.
 */
export default function DNIInjector() {
  const pathname = usePathname();
  // Landing pages with their own dedicated call-tracking number opt out of DNI so it is never swapped.
  if (pathname && (pathname.startsWith("/ac-tune-up-2888") || getCampaignPhone(pathname))) return null;
  return (
    <Script
      id="servicetitan-dni"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            if (typeof window.dni !== 'undefined') return;
            
            var dni = (function(q,w,e,r,t,y,u){
              q['ServiceTitanDniObject']=t;
              q[t]=q[t]||function(){(q[t].q=q[t].q||[]).push(arguments)};
              q[t].l=1*new Date();
              y=w.createElement(e);
              u=w.getElementsByTagName(e)[0];
              y.async=true;
              y.src=r;
              u.parentNode.insertBefore(y,u);
              return q[t];
            })(window,document,'script','https://static.servicetitan.com/marketing-ads/dni.js','dni');
            
            dni('init', '227669022');
            
            if (document.readyState === 'complete') {
              dni('load');
            } else {
              window.addEventListener('load', function() { dni('load'); }, { once: true, passive: true });
            }
          })();
        `
      }}
    />
  );
}
