import { Metadata } from "next";
import { getPageSchemas } from "@/lib/seo/schemaRegistry";
import Hero from "@/components/content/Hero";
import TrustBar from "@/components/content/TrustBar";
import ServiceTiles from "@/components/content/ServiceTiles";
import { ReviewModule } from "@/components/ReviewModule";
import ContactCard from "@/components/content/ContactCard";
import BadgeWall from "@/components/content/BadgeWall";
import RichText from "@/components/content/RichText";
import ServiceFAQ from "@/components/content/ServiceFAQ";
import { CheckCircle2 } from "lucide-react";
import { homeData } from "@/data/pages/services/home";

export const metadata: Metadata = {
  title: "Expert HVAC, Plumbing, Solar & Electrical | Tucson, AZ",
  description: "Intelligent Design provides expert HVAC, plumbing, solar, electrical, and roofing services in Tucson, AZ. Family and veteran-owned with 22,000+ 5-star reviews.",
  alternates: {
    canonical: "https://www.idesignac.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    title: "Expert HVAC, Plumbing, Solar & Electrical | Tucson, AZ",
    description: "Intelligent Design provides expert HVAC, plumbing, solar, electrical, and roofing services in Tucson, AZ. Family and veteran-owned with 22,000+ 5-star reviews.",
    url: "https://www.idesignac.com",
    siteName: "Intelligent Design Air Conditioning, Plumbing, Solar & Electric",
    images: [{
      url: "https://www.idesignac.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Intelligent Design - Tucson's Most Trusted Home Services Company",
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert HVAC, Plumbing, Solar & Electrical | Tucson, AZ",
    description: "Intelligent Design provides expert HVAC, plumbing, solar, electrical, and roofing services in Tucson, AZ. Family and veteran-owned with 22,000+ 5-star reviews.",
    images: ["https://www.idesignac.com/og-image.jpg"],
  },
};

export default function Home() {
  // Generate comprehensive homepage schemas (8-10 schemas)
  // Organization, WebSite, Multi-Category LocalBusiness (x5), Reviews (x3)
  const schemas = getPageSchemas({
    pageType: 'homepage',
    canonicalUrl: 'https://www.idesignac.com'
  });

  // Consolidate all schemas into a single @graph block for Turbopack compatibility
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": schemas
  };

  return (
    <>
      {/* Comprehensive JSON-LD Schema Graph - Server-Side Rendering */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      <main className="flex flex-col">
        {/* Hero Section with Background Image & CTA */}
        <Hero />

        {/* Trust Signals Bar */}
        <TrustBar />

        {/* Highlights Section - 6 Key Benefits */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              Why Choose Intelligent Design?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {homeData.highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                  data-testid={`card-highlight-${index}`}
                >
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{highlight.title}</p>
                    <p className="text-sm text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Tiles Grid */}
        <ServiceTiles />

        {/* Main Content Section - Rich AI SEO Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            {homeData.content.sections.map((section, index) => {
              if ("type" in section) {
                if (section.type === "heading") {
                  const HeadingTag = `h${section.level}` as keyof JSX.IntrinsicElements;
                  return (
                    <HeadingTag
                      key={index}
                      className={
                        section.level === 2
                          ? "text-3xl font-bold mt-12 mb-6 first:mt-0"
                          : "text-2xl font-bold mt-8 mb-4"
                      }
                      data-testid={`heading-h${section.level}-${index}`}
                    >
                      {section.heading}
                    </HeadingTag>
                  );
                } else if (section.type === "paragraph") {
                  return (
                    <div key={index} className="mb-6 text-muted-foreground leading-relaxed">
                      <RichText content={section.content} />
                    </div>
                  );
                } else if (section.type === "list") {
                  return (
                    <ul key={index} className="mb-6 space-y-2 list-disc list-inside text-muted-foreground">
                      {section.items?.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  );
                }
              }
              return null;
            })}
          </div>
        </section>

        {/* Customer Reviews */}
        <ReviewModule />

        {/* FAQ Section */}
        {homeData.faqs && homeData.faqs.faqs.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <ServiceFAQ faqs={homeData.faqs.faqs} />
            </div>
          </section>
        )}

        {/* Badge Wall - Certifications & Awards */}
        <BadgeWall />

        {/* Contact Information */}
        <ContactCard />
      </main>
    </>
  );
}
