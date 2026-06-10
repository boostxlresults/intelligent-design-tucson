import { Metadata } from "next";
import ServicePage from "@/components/pages/ServicePage";
import { StructuredData } from "@/components/StructuredData";
import { acemergencyData } from "@/data/pages/services/acemergency";
import { 
  generateServiceMetadata,
  generateServiceSchema,
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateBreadcrumbSchema
} from "@/lib/seo";

/**
 * Emergency AC Repair Landing Page
 * 
 * Dedicated landing page for Google Ads Emergency AC campaign.
 * Optimized for Quality Score with exact keyword-to-page matching:
 * - "ac not working", "broken ac", "ac stopped working", "ac emergency"
 * - "ac won't turn on", "ac not cooling", "ac blowing hot air"
 * 
 * Key QS signals:
 * - H1 matches primary search intent ("AC Not Working?")
 * - Phone CTA primary (emergency intent = call, not form)
 * - Content directly addresses all emergency AC search queries
 * - Fast load time (no heavy assets)
 * - Mobile-first (emergency searches are 80%+ mobile)
 */

export const metadata: Metadata = generateServiceMetadata(
  acemergencyData.serviceName,
  acemergencyData.h1,
  acemergencyData.description,
  acemergencyData.slug,
  acemergencyData.heroImage
);

export default function ACEmergencyPage() {
  // Generate all structured data schemas
  const structuredData = [
    generateLocalBusinessSchema(),
    generateServiceSchema(
      acemergencyData.serviceName,
      acemergencyData.description,
      acemergencyData.slug
    ),
    generateFAQSchema(acemergencyData.faqs?.faqs || []),
    generateBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "AC Services", path: "/ac" },
      { name: "Emergency AC Repair", path: `/${acemergencyData.slug}` },
    ]),
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <ServicePage data={acemergencyData} />
    </>
  );
}
