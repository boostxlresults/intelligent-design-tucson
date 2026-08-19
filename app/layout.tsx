import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PromoBanner from "@/components/layout/PromoBanner";
import MobileFloatingActions from "@/components/layout/MobileFloatingActions";
import BlockScheduleEngineChat from "@/components/integrations/BlockScheduleEngineChat";
import DNIInjector from "@/components/integrations/DNIInjector";
import BroccoliChat from "@/components/integrations/BroccoliChat";
import ServiceTitanScheduler from "@/components/integrations/ServiceTitanScheduler";
import RealWorkLabsLoader from "@/components/integrations/RealWorkLabsLoader";
import PulseMWidget from "@/components/integrations/PulseMWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Tucson AC Repair, HVAC, Plumbing & Solar | Intelligent Design",
    template: "%s",
  },
  description: "Intelligent Design Air Conditioning is Tucson's top-rated HVAC contractor. Expert air conditioning repair, plumbing, solar, electrical & roofing services. 23,000+ 5-star reviews. Family & veteran-owned since 1979.",
  metadataBase: new URL("https://www.idesignac.com"),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Intelligent Design",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="PVVQSu2t1C9o0Ol31OBNHfrktFMCsB32xrbB41hU1ps" />

        {/* 
          CRITICAL PATH RESOURCE HINTS
          Only preconnect to origins needed for LCP (hero image is local, so only GTM matters).
          Too many preconnects compete for TCP/TLS slots and slow each other down.
          PageSpeed flagged "More than 4 preconnect connections" — reduced to 1.
        */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* dns-prefetch for non-critical third parties (no TCP handshake, just DNS) */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://static.servicetitan.com" />
        <link rel="dns-prefetch" href="https://app.realworklabs.com" />

        {/*
          POST-LCP SCRIPT LOADER
          
          GTM is deferred
          until AFTER the LCP element has painted. This eliminates the 1,800ms+ element
          render delay caused by main-thread blocking before first paint.
          
          Strategy:
          1. PerformanceObserver watches for LCP entry
          2. Once LCP paints → requestIdleCallback fires scripts during idle time
          3. Fallback: load after 5s if LCP observer never fires (old browsers)
          4. Final fallback: load on first user interaction
          
          This is the correct approach for US home services sites under CCPA.
          Tracking defaults to granted — users can opt out via cookie banner.
        */}
        {/*
          SITEWIDE AD-CLICK ATTRIBUTION CAPTURE
          Stores gclid/gbraid/wbraid + utm_* from the URL into localStorage + a
          first-party cookie (.idesignac.com, 90-day TTL), last-click-wins, and
          exposes window.IDACH_ATTR for forms + the ServiceTitan scheduler.
          Fail-silent, zero external requests, never touches phone/DNI elements.
        */}
        <Script id="idach-attr" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `
          (function () {
            try {
              var KEY = "idach_click_attribution";
              var TTL_DAYS = 90;
              var p = new URLSearchParams(window.location.search);
              var ids = {
                gclid: p.get("gclid"), gbraid: p.get("gbraid"), wbraid: p.get("wbraid"),
                utm_campaign: p.get("utm_campaign"), utm_source: p.get("utm_source"),
                utm_medium: p.get("utm_medium"), utm_term: p.get("utm_term"), utm_content: p.get("utm_content")
              };
              var hasNewClick = ids.gclid || ids.gbraid || ids.wbraid;
              var stored = null;
              try { stored = JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) {}
              if (stored && stored.ts && (Date.now() - stored.ts) > TTL_DAYS * 864e5) stored = null;
              if (hasNewClick) {
                stored = { ts: Date.now(), landing: location.pathname };
                for (var k in ids) if (ids[k]) stored[k] = ids[k];
                try { localStorage.setItem(KEY, JSON.stringify(stored)); } catch (e) {}
                document.cookie = KEY + "=" + encodeURIComponent(JSON.stringify(stored)) +
                  ";path=/;max-age=" + (TTL_DAYS * 86400) + ";domain=.idesignac.com;SameSite=Lax;Secure";
              }
              window.IDACH_ATTR = stored || null;
            } catch (e) {}
          })();
        ` }} />

        <Script id="post-lcp-loader" strategy="afterInteractive">
          {`
            (function() {
              var scriptsLoaded = false;
              
              function loadAllScripts() {
                if (scriptsLoaded) return;
                scriptsLoaded = true;
                
                // 1. Google Tag Manager
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),
                      dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id=GTM-WKG99GJ'+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WKG99GJ');
              }
              
              // Strategy 1: Fire after LCP paints (best case)
              if (typeof PerformanceObserver !== 'undefined') {
                try {
                  var lcpObserver = new PerformanceObserver(function(list) {
                    lcpObserver.disconnect();
                    if (typeof requestIdleCallback !== 'undefined') {
                      requestIdleCallback(loadAllScripts, { timeout: 2000 });
                    } else {
                      setTimeout(loadAllScripts, 0);
                    }
                  });
                  lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
                } catch(e) {}
              }
              
              // Strategy 2: Fallback — load after 5 seconds regardless
              setTimeout(loadAllScripts, 5000);
              
              // Strategy 3: Load on first user interaction (ensures tracking for engaged users)
              var interactionEvents = ['mousedown', 'touchstart', 'keydown', 'scroll'];
              function onFirstInteraction() {
                interactionEvents.forEach(function(e) {
                  document.removeEventListener(e, onFirstInteraction);
                });
                if (typeof requestIdleCallback !== 'undefined') {
                  requestIdleCallback(loadAllScripts);
                } else {
                  loadAllScripts();
                }
              }
              interactionEvents.forEach(function(e) {
                document.addEventListener(e, onFirstInteraction, { once: true, passive: true });
              });
            })();
          `}
        </Script>
        {/* Vibe (vbpx) advertising pixel */}
        <Script id="vibe-vbpx" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
  !function(v,i,b,e,c,o){if(!v[c]){var s=v[c]=function(){s.process?s.process.apply(s,arguments):s.queue.push(arguments)};s.queue=[],s.b=1*new Date;var t=i.createElement(b);t.async=!0,t.src=e;var n=i.getElementsByTagName(b)[0];n.parentNode.insertBefore(t,n)}}(window,document,"script","https://s.vibe.co/vbpx.js","vbpx");
  vbpx('init','i2lfF8');
  vbpx('event', 'page_view');
        ` }} />
        {/* AudienceLab visitor-identification pixel (loads after GA4/GTM initialize) */}
        <Script id="audiencelab-idpixel" src="https://cdn.idpixel.app/v1/idp-analytics-6a7de70b7ad06808d6aa3d63.min.js" data-ga4-key="G-D10QGY0N5E" strategy="afterInteractive" />
        {/* Meta Pixel base code (id 847049750928220) */}
        <Script id="meta-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','847049750928220');
fbq('track','PageView');
        ` }} />
        <noscript><img height="1" width="1" style={{ display: "none" }} alt="" src="https://www.facebook.com/tr?id=847049750928220&ev=PageView&noscript=1" /></noscript>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* BlockScheduleEngineChat must run before GTM to intercept WebChat */}
        <BlockScheduleEngineChat />
        {/* 
          GTM component removed from here — GTM is now loaded via post-lcp-loader above.
          Keeping the noscript iframe for users with JS disabled.
        */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WKG99GJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <DNIInjector />
        <Header />
        <main className="flex-1 pt-24 md:pt-32">
          <PromoBanner />
          {children}
        </main>
        <Footer />
        <MobileFloatingActions />
        {/* Lazy-loaded third-party scripts (load after page is interactive) */}
        <BroccoliChat />
        {/* RealWorkLabs project showcase widget */}
        <RealWorkLabsLoader />
        {/* PulseM floating review popup — visible only on /customer-reviews */}
        <PulseMWidget />
        {/* ServiceTitan Scheduling Pro - loads on-demand when user interacts */}
        <ServiceTitanScheduler />
      </body>
    </html>
  );
}
