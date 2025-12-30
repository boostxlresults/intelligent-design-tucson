"use client";

import Script from "next/script";

/**
 * ServiceTitan Dynamic Number Insertion (DNI)
 * 
 * Uses afterInteractive to balance INP with call tracking reliability.
 * DNI must load soon after hydration to swap phone numbers before users click.
 */
export default function DNIInjector() {
  return (
    <Script
      id="servicetitan-dni"
      strategy="afterInteractive"
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
