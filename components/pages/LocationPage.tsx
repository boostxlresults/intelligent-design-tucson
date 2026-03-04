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
import { RealWorkLabsMap } from "@/components/integrations/RealWorkLabs";
import { hasRealWorkLabsMap } from "@/lib/realworklabs-mapping";
import { getLocationProjectReviews } from "@/data/projectReviews";
import TableOfContents, { type TOCItem } from "@/components/navigation/TableOfContents";
import FloatingTOCButton from "@/components/navigation/FloatingTOCButton";
import LocalBlogPosts from "@/components/locations/LocalBlogPosts";
import ZipCodeModule from "@/components/locations/ZipCodeModule";
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
  CheckCircle2,
  MapPin,
  Star
} from "lucide-react";

function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function extractLocationTOCItems(data: LocationPageData): TOCItem[] {
  const tocItems: TOCItem[] = [];
  
  tocItems.push({ id: "services-offered", label: "Services We Offer", level: 2 });
  
  if (hasRealWorkLabsMap(data.slug)) {
    tocItems.push({ id: "recent-projects", label: "Recent Projects", level: 2 });
  }
  
  // ZipCodeModule always renders using locationData.ts
  tocItems.push({ id: "zip-codes", label: "Service Areas & Zip Codes", level: 2 });
  
  data.content?.sections?.forEach((section) => {
    if ("type" in section && section.type === "heading" && (section.level === 2 || !section.level)) {
      tocItems.push({
        id: generateSlug(section.heading),
        label: section.heading,
        level: 2
      });
    }
  });
  
  tocItems.push({ id: "reviews", label: "Customer Reviews", level: 2 });
  
  if (data.faqs && data.faqs.length > 0) {
    tocItems.push({ id: "faqs", label: "Frequently Asked Questions", level: 2 });
  }
  
  tocItems.push({ id: "schedule", label: "Schedule Service", level: 2 });
  
  return tocItems;
}

/**
 * LocationPage Component
 * 
 * Template for all location service area pages
 * Automatically includes:
 * - ServiceTitan scheduler 3x (hero, middle, bottom)
 * - Service tiles linking to all 6+ services
 * - Reviews module (23,000+)
 * - Location-specific FAQs
 * - SEO-optimized content structure
 */

interface BlogPostMeta {
  slug: string;
  category: string;
  title: string;
  description: string;
  readingTime?: number;
}

interface LocationPageProps {
  data: LocationPageData;
  schemas?: Array<Record<string, unknown>>;
  relatedBlogPosts?: BlogPostMeta[];
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

export default function LocationPage({ data, schemas, relatedBlogPosts }: LocationPageProps) {
  const tocItems = extractLocationTOCItems(data);
  
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
            sizes="100vw"
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
          
          {/* Table of Contents - Jump to Section */}
          {tocItems.length > 0 && (
            <TableOfContents 
              items={tocItems} 
              className="mt-8"
              defaultExpanded={true}
            />
          )}
          
          {/* Trigger point for floating TOC button */}
          <div id="toc-trigger-point" aria-hidden="true" />
        </div>
      </section>
      
      {/* Floating TOC Button */}
      {tocItems.length > 0 && (
        <FloatingTOCButton items={tocItems} triggerElementId="toc-trigger-point" />
      )}

      {/* Services Offered in This Location */}
      <section id="services-offered" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-3 text-center" data-testid="heading-services-offered">
            Services We Offer in {data.locationName}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Serving {data.locationDisplayName} with 46+ years of combined home services expertise. 
            Family and veteran-owned, BBB A+ rated with 23,000+ five-star reviews.
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

      {/* Recent Projects Map - RealWorkLabs Integration (only shown for mapped locations) */}
      {hasRealWorkLabsMap(data.slug) && (() => {
        const projectReviews = getLocationProjectReviews(data.slug);
        const serviceTypes = [...new Set(projectReviews.map(r => r.serviceType))];
        return (
          <section id="recent-projects" className="py-16 bg-muted/30 scroll-mt-20">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-3" data-testid="heading-recent-projects">
                  Recent Projects in {data.locationName}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  See our completed HVAC, plumbing, solar, electrical, and roofing projects near you. 
                  Real work, real results for {data.locationDisplayName} homeowners.
                </p>
              </div>
              <RealWorkLabsMap 
                locationSlug={data.slug} 
                className="min-h-[400px] rounded-lg overflow-hidden"
              />
              <div className="mt-10 max-w-4xl mx-auto" data-testid="section-project-summaries">
                <h3 className="text-xl font-semibold mb-4">
                  What {data.locationName} Homeowners Are Saying
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our {serviceTypes.join(', ').replace(/, ([^,]*)$/, ', and $1')} projects in {data.locationDisplayName} showcase the quality workmanship 
                  that has earned Intelligent Design over 23,000 five-star reviews across the Tucson metro area.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {projectReviews.slice(0, 4).map((review, idx) => (
                    <Card key={idx} className="p-4" data-testid={`card-project-review-${idx}`}>
                      <CardContent className="p-0">
                        <div className="flex items-center gap-1 mb-2">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" aria-hidden="true" />
                          ))}
                          <span className="text-xs text-muted-foreground ml-2">{review.serviceType}</span>
                        </div>
                        <p className="text-sm mb-2 line-clamp-3">{review.reviewBody}</p>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-medium">{review.author}</span>
                          <span className="text-xs text-muted-foreground">{review.projectDescription}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* Enhanced Service Areas & Zip Codes with Local SEO Data */}
      <ZipCodeModule locationSlug={data.slug} locationName={data.locationName} />

      {/* Main Content Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {data.content?.sections?.map((section, index) => {
              // Type narrowing for discriminated union
              if ("type" in section) {
                if (section.type === "heading") {
                  const HeadingTag = `h${section.level || 2}` as keyof React.JSX.IntrinsicElements;
                  const headingId = generateSlug(section.heading);
                  return (
                    <HeadingTag 
                      key={index}
                      id={headingId}
                      className="text-3xl font-bold mt-10 mb-4 first:mt-0 scroll-mt-24"
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
      <section id="reviews" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <ReviewModule variant="full" />
        </div>
      </section>

      {/* Related Blog Posts - Internal Linking for SEO */}
      {relatedBlogPosts && relatedBlogPosts.length > 0 && (
        <LocalBlogPosts 
          locationName={data.locationName} 
          posts={relatedBlogPosts} 
        />
      )}

      {/* Location FAQs */}
      {data.faqs && data.faqs.length > 0 && (
        <section id="faqs" className="py-16 bg-muted/30 scroll-mt-20">
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
      <section id="schedule" className="py-16 bg-primary/5 scroll-mt-20">
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
