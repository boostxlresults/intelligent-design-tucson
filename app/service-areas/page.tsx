import { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, Clock, CheckCircle2, Home, Zap, Wrench, Sun, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SchedulerEmbed from "@/components/integrations/SchedulerEmbed";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo";

const description = "Intelligent Design serves all of Greater Tucson including Oro Valley, Marana, Sahuarita, Green Valley, Vail & 10+ communities. 24/7 emergency service, same-day appointments, fast response times. Over 22,000 five-star reviews.";

export const metadata: Metadata = {
  title: "Areas We Serve | Professional HVAC, Plumbing, Solar & Electrical Throughout Greater Tucson",
  description,
  openGraph: {
    title: "Areas We Serve | Professional HVAC, Plumbing, Solar & Electrical Throughout Greater Tucson",
    description,
    url: "https://www.idesignac.com/service-areas",
    type: "website",
  },
  twitter: {
    title: "Areas We Serve | Professional HVAC, Plumbing, Solar & Electrical Throughout Greater Tucson",
    description,
  },
};

const serviceAreas = [
  {
    name: "Tucson",
    slug: "tucson",
    description: "Central Tucson and surrounding neighborhoods"
  },
  {
    name: "Oro Valley",
    slug: "oro-valley",
    description: "Full HVAC, plumbing, solar & electrical service"
  },
  {
    name: "Marana",
    slug: "marana",
    description: "Residential and commercial services available"
  },
  {
    name: "Sahuarita",
    slug: "sahuarita",
    description: "Same-day service and emergency response"
  },
  {
    name: "Green Valley",
    slug: "green-valley",
    description: "Complete home services for all properties"
  },
  {
    name: "Vail",
    slug: "vail",
    description: "Fast response times, quality service"
  },
  {
    name: "Corona de Tucson",
    slug: "corona-de-tucson",
    description: "All trades available year-round"
  },
  {
    name: "Drexel Heights",
    slug: "drexel-heights",
    description: "Professional service, competitive pricing"
  },
  {
    name: "Casas Adobes",
    slug: "casas-adobes",
    description: "Trusted local contractor since 2009"
  },
  {
    name: "Tucson Estates",
    slug: "tucson-estates",
    description: "Comprehensive HVAC and home services"
  },
  {
    name: "Tortolita",
    slug: "tortolita",
    description: "Northern Tucson service excellence"
  },
  {
    name: "Picture Rocks",
    slug: "picture-rocks",
    description: "Western Tucson area coverage"
  },
  {
    name: "Rillito",
    slug: "rillito",
    description: "Complete residential and commercial service"
  },
  {
    name: "Cortaro",
    slug: "cortaro",
    description: "Fast, reliable service to all areas"
  },
  {
    name: "Avra Valley",
    slug: "avra-valley",
    description: "Extended service area, same great quality"
  }
];

const faqs = [
  {
    question: "What areas does Intelligent Design serve?",
    answer: "Intelligent Design serves all of Greater Tucson including Tucson, Oro Valley, Marana, Sahuarita, Green Valley, Vail, Corona de Tucson, Drexel Heights, Casas Adobes, Tucson Estates, Tortolita, Picture Rocks, Rillito, Cortaro, and Avra Valley. We provide HVAC, plumbing, electrical, solar, and roofing services throughout the entire region."
  },
  {
    question: "Do you provide service to Oro Valley?",
    answer: "Yes! Oro Valley is a major service area for Intelligent Design. We have technicians based near Oro Valley to ensure fast response times. We provide all our services including HVAC, plumbing, electrical, solar, and roofing to Oro Valley residents and businesses."
  },
  {
    question: "How quickly can you respond to service calls in Marana?",
    answer: "With 80+ technicians strategically located throughout Greater Tucson, we typically respond to Marana service calls within 1-2 hours for emergencies. We offer same-day service for most non-emergency appointments in Marana and surrounding areas."
  },
  {
    question: "Do you serve Green Valley and Sahuarita?",
    answer: "Absolutely! Green Valley and Sahuarita are important parts of our service area. We serve both communities with the same quality service, competitive pricing, and industry-leading guarantees as the rest of Greater Tucson."
  },
  {
    question: "What is your response time for emergency calls?",
    answer: "We provide 24/7 emergency service throughout our entire service area. For HVAC, plumbing, and electrical emergencies, we typically arrive within 1-2 hours. Our large team of 80+ technicians ensures we can respond quickly no matter where you are in Greater Tucson."
  },
  {
    question: "Do you charge extra for service in outlying areas?",
    answer: "No! We provide the same transparent, competitive pricing throughout our entire service area. Whether you're in central Tucson or Avra Valley, you'll receive the same quality service at the same fair prices with no hidden fees or travel charges within our service area."
  },
  {
    question: "Can you provide same-day service in Vail?",
    answer: "Yes! We offer same-day service throughout Greater Tucson including Vail. With our large team, we can often schedule appointments the same day you call. For emergencies, we provide 24/7 service with rapid response times."
  },
  {
    question: "What services do you provide in all areas?",
    answer: "We provide complete HVAC (installation, repair, maintenance), plumbing (all residential and commercial services), electrical (panel upgrades, repairs, installations), solar (design, installation, maintenance), and roofing (repairs, replacement, coating) services in all areas we serve."
  },
  {
    question: "How far north do you serve (Tortolita, Rillito)?",
    answer: "We serve Tortolita, Rillito, Cortaro, and the entire northern Greater Tucson area. Our service area extends throughout Pima County, ensuring comprehensive coverage for all communities in the region."
  },
  {
    question: "Do you serve commercial properties in all areas?",
    answer: "Yes! We provide commercial HVAC, plumbing, electrical, solar, and roofing services throughout our entire service area. From small businesses to large commercial facilities, we have the experience and resources to handle projects of any size."
  }
];

export default function ServiceAreasPage() {
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/70 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Areas We Serve
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Professional HVAC, Plumbing, Solar & Electrical Throughout Greater Tucson
              </p>
              <p className="text-xl mb-8 text-gray-200" data-testid="text-hero-description">
                Serving 15+ Communities | Fast Response Times | 24/7 Emergency Service Available
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Service Today"
                  variant="default"
                  size="lg"
                  className="bg-destructive hover-elevate active-elevate-2"
                  data-testid="button-schedule-hero"
                />
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold hover-elevate active-elevate-2"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-hero">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Coverage Summary */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card data-testid="card-service-hvac">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">HVAC Services</CardTitle>
                  <Home className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">Installation, repair & maintenance</p>
                </CardContent>
              </Card>

              <Card data-testid="card-service-plumbing">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Plumbing</CardTitle>
                  <Wrench className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">Residential & commercial plumbing</p>
                </CardContent>
              </Card>

              <Card data-testid="card-service-solar">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Solar</CardTitle>
                  <Sun className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">Design, installation & maintenance</p>
                </CardContent>
              </Card>

              <Card data-testid="card-service-electrical">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Electrical</CardTitle>
                  <Zap className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">Panel upgrades, repairs & more</p>
                </CardContent>
              </Card>

              <Card data-testid="card-service-roofing">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Roofing</CardTitle>
                  <Hammer className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">Repair, replacement & coating</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-service-areas">
                Our Service Areas
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-service-areas-description">
                We proudly serve Greater Tucson and surrounding communities with expert home services. Click any area below to learn more about our services in your neighborhood.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceAreas.map((area) => (
                <Card key={area.slug} className="hover-elevate" data-testid={`card-area-${area.slug}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2" data-testid={`title-area-${area.slug}`}>
                          {area.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{area.description}</p>
                      </div>
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm text-muted-foreground">All services available</p>
                      <Link
                        href="/contact"
                        className="text-sm font-medium text-primary hover:underline"
                        data-testid={`link-contact-${area.slug}`}
                      >
                        Contact Us →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Service Highlights */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-emergency-service">
                Why Choose Intelligent Design?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-emergency-description">
                We're committed to providing the best home services experience throughout Greater Tucson.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex gap-4" data-testid="feature-emergency">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Emergency Service</h3>
                  <p className="text-muted-foreground">
                    Around-the-clock emergency service throughout our entire service area with 1-2 hour response times.
                  </p>
                </div>
              </div>

              <div className="flex gap-4" data-testid="feature-technicians">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">80+ Expert Technicians</h3>
                  <p className="text-muted-foreground">
                    Our large team of certified professionals ensures fast response times and expert service in every community.
                  </p>
                </div>
              </div>

              <div className="flex gap-4" data-testid="feature-reviews">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">22,000+ 5-Star Reviews</h3>
                  <p className="text-muted-foreground">
                    Trusted by thousands of homeowners throughout Greater Tucson for quality service and fair pricing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4" data-testid="feature-pricing">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">No Travel Charges</h3>
                  <p className="text-muted-foreground">
                    Transparent, competitive pricing throughout our entire service area with no hidden fees.
                  </p>
                </div>
              </div>

              <div className="flex gap-4" data-testid="feature-same-day">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Same-Day Service</h3>
                  <p className="text-muted-foreground">
                    We offer same-day appointments for most non-emergency service calls throughout Greater Tucson.
                  </p>
                </div>
              </div>

              <div className="flex gap-4" data-testid="feature-veteran-owned">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Family & Veteran-Owned</h3>
                  <p className="text-muted-foreground">
                    Local company serving Greater Tucson since 2009 with integrity and professionalism.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-faqs">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground" data-testid="text-faqs-description">
                Common questions about our service areas and coverage.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} data-testid={`faq-item-${index}`}>
                  <AccordionTrigger data-testid={`faq-trigger-${index}`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent data-testid={`faq-content-${index}`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-cta">
              Ready to Schedule Service?
            </h2>
            <p className="text-xl mb-8 text-gray-200" data-testid="text-cta-description">
              Contact us today for fast, professional home services anywhere in Greater Tucson.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SchedulerEmbed
                triggerText="Schedule Online Now"
                variant="default"
                size="lg"
                className="bg-destructive hover-elevate active-elevate-2"
                data-testid="button-schedule-cta"
              />
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold hover-elevate active-elevate-2"
                asChild
              >
                <a href="tel:+15203332665" data-testid="button-call-cta">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
