import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileFloatingActions from "@/components/layout/MobileFloatingActions";
import GTM from "@/components/integrations/GTM";
import DNIInjector from "@/components/integrations/DNIInjector";
import CookieConsent from "@/components/integrations/CookieConsent";
import { Toaster } from "@/components/ui/toaster";
import AccessibilityToggle from "@/components/content/AccessibilityToggle";

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
  description: "Family and veteran-owned home services company serving Tucson and surrounding areas. Expert HVAC, plumbing, solar, electrical, and roofing services with 22,000+ 5-star reviews.",
  metadataBase: new URL("https://www.idesignac.com"),
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <GTM />
        <DNIInjector />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileFloatingActions />
        <CookieConsent />
        <AccessibilityToggle />
        <Toaster />
      </body>
    </html>
  );
}
