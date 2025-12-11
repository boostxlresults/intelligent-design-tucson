import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SchedulerEmbed from "@/components/integrations/SchedulerEmbed";
import TrustBar from "@/components/content/TrustBar";
import { ReviewModule } from "@/components/ReviewModule";
import { ClientSchemas } from "@/components/ClientSchemas";
import { SchedulerCluster } from "@/components/SchedulerCluster";
import TableOfContents, { type TOCItem } from "@/components/navigation/TableOfContents";
import FloatingTOCButton from "@/components/navigation/FloatingTOCButton";

function extractCategoryTOCItems(data: ServiceCategoryData): TOCItem[] {
  const tocItems: TOCItem[] = [];
  
  tocItems.push({ id: "services", label: `${data.categoryName} Services We Offer`, level: 2 });
  tocItems.push({ id: "reviews", label: "Customer Reviews", level: 2 });
  tocItems.push({ id: "schedule", label: "Schedule Service", level: 2 });
  
  return tocItems;
}

export interface SubService {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface ServiceCategoryData {
  title: string;
  description: string;
  slug: string;
  h1: string;
  h2Subheading: string;
  tagline: string;
  heroImage: string;
  heroImageAlt: string;
  categoryName: string;
  intro: string;
  subServices: SubService[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
}

interface ServiceCategoryPageProps {
  data: ServiceCategoryData;
  schemas?: Array<Record<string, unknown>>;
}

export default function ServiceCategoryPage({ data, schemas }: ServiceCategoryPageProps) {
  const tocItems = extractCategoryTOCItems(data);
  
  return (
    <article className="min-h-screen">
      {schemas && schemas.length > 0 && <ClientSchemas schemas={schemas} />}
      
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={data.heroImage}
            alt={data.heroImageAlt}
            fill
            className="object-cover"
            priority
            data-testid="img-hero"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-h1">
              {data.h1}
            </h1>
            <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
              {data.h2Subheading}
            </p>
            <p className="text-xl mb-8 text-gray-200">
              {data.tagline}
            </p>
            
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

      <TrustBar />

      {/* Why Choose Us with TOC */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Why Choose Intelligent Design for {data.categoryName}?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {data.whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                data-testid={`card-why-${index}`}
              >
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
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

      <section id="services" className="py-12 md:py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {data.categoryName} Services We Offer
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {data.intro}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {data.subServices.map((service) => (
              <Card 
                key={service.slug}
                className="overflow-hidden hover-elevate transition-all duration-300 hover:-translate-y-1"
                data-testid={`card-service-${service.slug}`}
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                    data-testid={`img-service-${service.slug}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="w-full justify-between group"
                    asChild
                  >
                    <Link href={`/services/${service.slug}`} data-testid={`link-service-${service.slug}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <ReviewModule variant="full" />
        </div>
      </section>

      <section id="schedule" className="py-16 bg-primary/5 scroll-mt-20">
        <div className="container mx-auto px-4">
          <SchedulerCluster position="bottom" />
        </div>
      </section>
    </article>
  );
}
