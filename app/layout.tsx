import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileFloatingActions from "@/components/layout/MobileFloatingActions";
import BlockScheduleEngineChat from "@/components/integrations/BlockScheduleEngineChat";
import DNIInjector from "@/components/integrations/DNIInjector";
import BroccoliChat from "@/components/integrations/BroccoliChat";
import ServiceTitanScheduler from "@/components/integrations/ServiceTitanScheduler";
import RealWorkLabsLoader from "@/components/integrations/RealWorkLabsLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Intelligent Design Air Conditioning, Plumbing, Solar & Electric | Tucson AZ",
    template: "%s | Intelligent Design Air Conditioning Tucson",
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
        <link rel="dns-prefetch" href="https://www.clarity.ms" />

        {/*
          POST-LCP SCRIPT LOADER
          
          All analytics and tracking scripts (GTM, Clarity, Contentsquare) are deferred
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
                
                // 2. Microsoft Clarity (heatmaps + session recordings)
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/k4y7b5b7df";
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window,document,"clarity","script");
                
                // 3. Contentsquare (loaded last — lowest priority)
                var cs = document.createElement('script');
                cs.async = true;
                cs.src = 'https://t.contentsquare.net/uxa/9c3e82c07cad8.js';
                document.body.appendChild(cs);
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
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileFloatingActions />
        {/* Lazy-loaded third-party scripts (load after page is interactive) */}
        <BroccoliChat />
        {/* RealWorkLabs project showcase widget */}
        <RealWorkLabsLoader />
        {/* ServiceTitan Scheduling Pro - loads on-demand when user interacts */}
        <ServiceTitanScheduler />
      </body>
    </html>
  );
}
