import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://intelligentdesignac.com"),
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
        {children}
      </body>
    </html>
  );
}
