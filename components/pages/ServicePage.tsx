import Image from "next/image";
import { CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SchedulerCluster } from "@/components/SchedulerCluster";
import SchedulerEmbed from "@/components/integrations/SchedulerEmbed";
import { ReviewModule } from "@/components/ReviewModule";
import { ClientSchemas } from "@/components/ClientSchemas";
import TrustBar from "@/components/content/TrustBar";
import RichText from "@/components/content/RichText";
import type { ServicePageData } from "@/types/services";

/**
 * ServicePage Component
 * 
 * Shared template for all service pages
 * Automatically includes:
 * - ServiceTitan scheduler 3x (hero, middle, bottom)
 * - DNI phone tracking (via root layout)
 * - 22,000+ reviews module
 * - SEO-optimized content structure
 * - JSON-LD schema markup for AI SEO
 */

interface ServicePageProps {
  data: ServicePageData;
  schemas?: Array<Record<string, unknown>>;
}

export default function ServicePage({ data, schemas }: ServicePageProps) {
  console.log(`[ServicePage] Received ${schemas?.length || 0} schemas`);
  
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
            data-testid="img-hero"
          />
        </div>
        
        {/* Left-to-right gradient overlay matching home page for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
        
        {/* Content */}
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
            
            {/* CTA Buttons - Match Home Page Hero Styling */}
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
            Why Choose Intelligent Design for <span className="whitespace-nowrap">{data.serviceName}</span>?
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

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {data.content.sections.map((section, index) => {
            // Type narrowing for discriminated union
            if ("type" in section) {
              if (section.type === "heading") {
                const HeadingTag = `h${section.level || 2}` as keyof JSX.IntrinsicElements;
                return (
                  <HeadingTag 
                    key={index} 
                    className="text-2xl font-bold mt-8 mb-4"
                    data-testid={`heading-${section.level || 2}`}
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
                    className="text-lg mb-4 leading-relaxed prose prose-lg max-w-none prose-strong:text-gray-900 prose-ul:my-4 prose-li:my-1"
                  />
                );
              }
              
              if (section.type === "list" && section.items) {
                return (
                  <ul key={index} className="list-disc list-inside mb-4 space-y-2">
                    {section.items.map((item: string, i: number) => (
                      <li key={i} className="text-lg">{item}</li>
                    ))}
                  </ul>
                );
              }
              
              if (section.type === "cta") {
                return (
                  <div key={index} className="my-12 bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded-lg p-8 shadow-sm" data-testid={`cta-${index}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{section.heading}</h3>
                    <p className="text-lg text-gray-700 mb-6">{section.content}</p>
                    <SchedulerEmbed
                      triggerText={section.buttonText}
                      variant="destructive"
                      size="lg"
                      className="text-lg px-8 py-4"
                      data-testid={`button-cta-${index}`}
                    />
                  </div>
                );
              }
              
              if (section.type === "testimonial") {
                return (
                  <div key={index} className="my-12 bg-white border-l-4 border-green-500 rounded-lg p-8 shadow-md" data-testid={`testimonial-${index}`}>
                    <blockquote className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                      "{section.quote}"
                    </blockquote>
                    <div className="flex items-center gap-2 text-gray-900 font-semibold">
                      <span>{section.author}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600 font-normal">{section.location}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{section.service}</div>
                  </div>
                );
              }
              
              if (section.type === "case_study") {
                return (
                  <div key={index} className="my-12 bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200 rounded-xl p-8 shadow-lg" data-testid={`case-study-${index}`}>
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">{section.location}</span>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Challenge</h4>
                        <p className="text-gray-700">{section.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Solution</h4>
                        <p className="text-gray-700">{section.solution}</p>
                      </div>
                      
                      {section.equipment && (
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">Equipment Installed</h4>
                          <p className="text-gray-700 font-medium">{section.equipment}</p>
                        </div>
                      )}
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Measurable Results</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {section.results.map((result, i) => (
                            <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
                              <div className="text-sm text-gray-600 mb-1">{result.label}</div>
                              <div className="text-2xl font-bold text-blue-600">{result.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600 italic pt-4 border-t border-gray-200">
                        Timeframe: {section.timeframe}
                      </div>
                    </div>
                  </div>
                );
              }
              
              if (section.type === "howto") {
                return (
                  <div key={index} className="my-12" data-testid={`howto-${index}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h3>
                    <p className="text-lg text-gray-700 mb-8">{section.description}</p>
                    
                    <div className="space-y-6">
                      {section.steps.map((step, i) => (
                        <div key={step.id} className="flex gap-4 bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                              {i + 1}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.name}</h4>
                            <p className="text-gray-700 mb-3">{step.description}</p>
                            {step.duration && (
                              <div className="text-sm text-blue-600 font-medium">
                                ⏱️ Duration: {step.duration}
                              </div>
                            )}
                            {step.tools && step.tools.length > 0 && (
                              <div className="text-sm text-gray-600 mt-2">
                                🛠️ Tools needed: {step.tools.join(', ')}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
            } else {
              // Legacy format
              return (
                <div key={index} className="mb-6">
                  {section.heading && (
                    <h3 className="text-2xl font-bold mt-6 mb-3">{section.heading}</h3>
                  )}
                  <p className="text-lg mb-4 leading-relaxed">{section.content}</p>
                </div>
              );
            }
            
            return null;
          })}

          {/* ServiceTitan Scheduler #2 - Middle of content */}
          <SchedulerCluster position="middle" />
        </div>
      </section>

      {/* Reviews Module */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <ReviewModule variant="full" />
        </div>
      </section>

      {/* FAQs Section */}
      {data.faqs?.faqs && data.faqs.faqs.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {data.faqs.faqs.map((faq, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Common Questions Section - AI Search Optimization Layer */}
      {data.commonQuestions && data.commonQuestions.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" data-testid="heading-common-questions">
                Common Questions About {data.serviceName}
              </h2>
              <p className="text-lg text-muted-foreground">
                Real answers to questions Tucson homeowners ask us every day
              </p>
            </div>
            <div className="space-y-8">
              {data.commonQuestions.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white border-l-4 border-blue-600 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  data-testid={`common-question-${index}`}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-relaxed">
                    {item.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
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
    </article>
  );
}
