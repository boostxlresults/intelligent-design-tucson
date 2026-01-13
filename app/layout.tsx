import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileFloatingActions from "@/components/layout/MobileFloatingActions";
import GTM from "@/components/integrations/GTM";
import DNIInjector from "@/components/integrations/DNIInjector";
import ContractorCommercePlugin from "@/components/integrations/ContractorCommercePlugin";
import HatchChat from "@/components/integrations/HatchChat";
import CookieConsent from "@/components/integrations/CookieConsent";
import ServiceTitanScheduler from "@/components/integrations/ServiceTitanScheduler";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Intelligent Design - HVAC, Plumbing, Solar, Electrical & Roofing | Tucson, AZ",
    template: "%s | Intelligent Design",
  },
  description: "Family and veteran-owned home services company serving Tucson and surrounding areas. Expert HVAC, plumbing, solar, electrical, and roofing services with 23,000+ 5-star reviews.",
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
        {/* Preconnect to third-party origins for faster subsequent requests */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://static.servicetitan.com" />
        <link rel="dns-prefetch" href="https://plugin.contractorcommerce.com" />
        <link rel="dns-prefetch" href="https://app.realworklabs.com" />
        {/* Google Analytics 4 (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D10QGY0N5E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D10QGY0N5E');
          `}
        </Script>
        {/* Contentsquare Analytics - deferred to reduce main thread blocking */}
        <Script
          src="https://t.contentsquare.net/uxa/9c3e82c07cad8.js"
          strategy="lazyOnload"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <GTM />
        <DNIInjector />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileFloatingActions />
        {/* <CookieConsent /> - Hidden per user request */}
        <Toaster />
        {/* Lazy-loaded third-party scripts (load after page is interactive) */}
        <ContractorCommercePlugin />
        <HatchChat />
        {/* ServiceTitan Scheduling Pro - loads on-demand when user interacts */}
        <ServiceTitanScheduler />
      </body>
    </html>
  );
}
