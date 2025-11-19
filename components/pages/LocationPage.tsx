import Image from "next/image";
import Link from "next/link";
import { SchedulerCluster } from "@/components/SchedulerCluster";
import SchedulerEmbed from "@/components/integrations/SchedulerEmbed";
import { ReviewModule } from "@/components/ReviewModule";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClientSchemas } from "@/components/ClientSchemas";
import TrustBar from "@/components/content/TrustBar";
import RichText from "@/components/content/RichText";
import type { LocationPageData } from "@/types/services";
import { 
  AirVent, 
  Flame, 
  Droplet, 
  Sun, 
  Zap, 
  Home as HomeIcon, 
  Wrench,
  ArrowRight,
  Phone,
  CheckCircle2
} from "lucide-react";

/**
 * LocationPage Component
 * 
 * Template for all location service area pages
 * Automatically includes:
 * - ServiceTitan scheduler 3x (hero, middle, bottom)
 * - Service tiles linking to all 6+ services
 * - Reviews module (22,000+)
 * - Location-specific FAQs
 * - SEO-optimized content structure
 */

interface LocationPageProps {
  data: LocationPageData;
  schemas?: Array<Record<string, unknown>>;
}

// Icon mapping helper
const iconMap: Record<string, any> = {
  AirVent,
  Flame,
  Droplet,
  Sun,
  Zap,
  HomeIcon,
  Wrench,
};

export default function LocationPage({ data, schemas }: LocationPageProps) {
  console.log(`[LocationPage] ${data.slug}: Received ${schemas?.length || 0} schemas`);
  
  return (
    <article className="min-h-screen">
      {/* JSON-LD Schema Markup - Client component workaround for Next.js script tag limitation */}
      {schemas && schemas.length > 0 && <ClientSchemas schemas={schemas} />}
      
      {/* Hero Section - Full Width Background with Gradient Overlay */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={data.heroImage}
            alt={data.heroImageAlt}
            fill
            className="object-cover"
            priority
            data-testid="img-location-hero"
          />
        </div>
        
        {/* Left-to-right gradient overlay matching service pages */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-location-h1">
              {data.h1}
            </h1>
            <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
              {data.h2Subheading}
            </p>
            <p className="text-xl mb-8 text-gray-200" data-testid="text-tagline">
              {data.tagline}
            </p>
            
            {/* CTA Buttons - Match Service Page Hero Styling */}
            <div className="flex flex-col sm:flex-row gap-4">
              <SchedulerEmbed
                triggerText="Schedule Service"
                variant="destructive"
                size="lg"
                className="text-lg px-8 py-6 h-auto"
                data-testid="button-schedule-hero"
              />
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 h-auto bg-yellow-400 border-2 border-yellow-500 text-gray-900 hover:bg-yellow-500 font-bold"
                asChild
              >
                <a href="tel:+15203332665" data-testid="button-call-hero">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Social Proof */}
      <TrustBar />

      {/* Highlights Section - 6 Bullet Points with Icons */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Why Choose Intelligent Design in {data.locationName}?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {data.highlights.map((highlight, index) => (
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

      {/* Services Offered in This Location */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-3 text-center" data-testid="heading-services-offered">
            Services We Offer in {data.locationName}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Serving {data.locationDisplayName} with comprehensive home services since 1979. 
            Family and veteran-owned, BBB A+ rated with 22,000+ five-star reviews.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((service, index) => {
              const Icon = iconMap[service.icon] || AirVent;
              
              return (
                <Link
                  key={index}
                  href={service.link}
                  data-testid={`link-service-${service.link}`}
                >
                  <Card className="h-full hover-elevate active-elevate-2 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-primary/10 p-3 shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                          <p className="text-muted-foreground mb-3">{service.description}</p>
                          <span className="inline-flex items-center text-primary font-medium">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas & Zip Codes */}
      {data.zipCodes && data.zipCodes.length > 0 && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card data-testid="card-zip-codes">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-center" data-testid="heading-zip-codes">
                  Service Areas & Zip Codes in {data.locationName}
                </h2>
                <p className="text-center text-muted-foreground mb-6">
                  We proudly serve the following zip codes in and around {data.locationDisplayName}:
                </p>
                <div className="flex flex-wrap justify-center gap-3" data-testid="list-zip-codes">
                  {data.zipCodes.map((zip, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary font-semibold rounded-md"
                      data-testid={`badge-zip-${zip}`}
                    >
                      {zip}
                    </span>
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground mt-6">
                  Not sure if we serve your area? <a href="tel:+15203332665" className="text-primary hover:underline font-semibold">Call us at (520) 333-2665</a> and we'll let you know!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Main Content Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {data.content?.sections?.map((section, index) => {
              // Type narrowing for discriminated union
              if ("type" in section) {
                if (section.type === "heading") {
                  const HeadingTag = `h${section.level || 2}` as keyof JSX.IntrinsicElements;
                  return (
                    <HeadingTag 
                      key={index} 
                      className="text-3xl font-bold mt-10 mb-4 first:mt-0"
                      data-testid={`heading-content-${section.level || 2}`}
                    >
                      {section.heading}
                    </HeadingTag>
                  );
                }
                
                if (section.type === "paragraph") {
                  return (
                    <RichText 
                      key={index} 
                      content={section.content}
                      className="text-lg mb-6 leading-relaxed prose prose-lg max-w-none prose-strong:text-gray-900 prose-ul:my-4 prose-li:my-1"
                    />
                  );
                }
                
                if (section.type === "list" && section.items) {
                  return (
                    <ul key={index} className="list-disc list-inside mb-6 space-y-2">
                      {section.items.map((item: string, i: number) => (
                        <li key={i} className="text-lg text-foreground">{item}</li>
                      ))}
                    </ul>
                  );
                }
              } else {
                // Legacy format
                return (
                  <div key={index} className="mb-8">
                    {section.heading && (
                      <h3 className="text-2xl font-bold mt-6 mb-4">{section.heading}</h3>
                    )}
                    <p className="text-lg mb-4 leading-relaxed text-foreground">{section.content}</p>
                  </div>
                );
              }
              
              return null;
            })}
          </div>

          {/* ServiceTitan Scheduler #2 - Middle of content */}
          <div className="mt-12">
            <SchedulerCluster position="middle" />
          </div>
        </div>
      </section>

      {/* Reviews Module */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <ReviewModule variant="full" />
        </div>
      </section>

      {/* Location FAQs */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8" data-testid="heading-faqs">
              Frequently Asked Questions About Services in {data.locationName}
            </h2>
            <div className="space-y-4">
              {data.faqs.map((faq, index) => (
                <Card key={index} data-testid={`card-faq-${index}`}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ServiceTitan Scheduler #3 - Bottom before footer */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <SchedulerCluster position="bottom" />
        </div>
      </section>

      {/* Office Info Section - if enabled */}
      {data.showOfficeInfo && (
        <section className="py-12 bg-background border-t">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Serving {data.locationDisplayName}</h2>
              <p className="text-muted-foreground mb-2">
                Intelligent Design Heating, Cooling, Plumbing & Electrical
              </p>
              <p className="text-muted-foreground">
                2620 N Stone Ave, Tucson, AZ 85705
              </p>
              <p className="text-muted-foreground mt-2">
                Call: <span className="dni-number font-semibold text-primary">(520) 333-2665</span>
              </p>
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
