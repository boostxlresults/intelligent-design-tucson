import { useEffect } from "react";
import { Phone, Zap, CheckCircle2, MapPin, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingActions from "@/components/MobileFloatingActions";
import TrustBar from "@/components/TrustBar";
import SchedulerEmbed from "@/components/SchedulerEmbed";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";
import { Link } from "wouter";

export default function ElectricalTucson() {
  const description = "Licensed electrician in Tucson, AZ. Electrical repairs, panel upgrades, generator installation, lighting, outlets. 24/7 emergency service. BBB A+ rated.";
  const imageUrl = `${SITE_URL}/og-electrical-tucson.jpg`;

  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Electrical Services in Tucson, AZ",
      "description": description,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Intelligent Design Air Conditioning, Plumbing, Solar & Electric",
        "image": imageUrl,
        "telephone": "+1-520-333-2665",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1145 E Fort Lowell Rd",
          "addressLocality": "Tucson",
          "addressRegion": "AZ",
          "postalCode": "85719",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 32.2655122,
          "longitude": -110.9540688
        },
        "priceRange": "$$",
        "areaServed": {
          "@type": "City",
          "name": "Tucson"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Tucson",
        "containedIn": {
          "@type": "State",
          "name": "Arizona"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Electrical Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Electrical Repair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Panel Upgrades & Installation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Generator Installation & Service"
            }
          }
        ]
      }
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${SITE_URL}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Tucson Services",
          "item": `${SITE_URL}/tucson`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Electrical Tucson",
          "item": `${SITE_URL}/electrical-tucson`
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you offer emergency electrical service in Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We provide 24/7 emergency electrical services throughout Tucson. Our licensed electricians respond quickly to power outages, sparking outlets, burning smells, and other dangerous electrical emergencies to keep your family safe."
          }
        },
        {
          "@type": "Question",
          "name": "Are your electricians licensed in Arizona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! All our electricians hold valid Arizona electrical contractor licenses. They're fully bonded, insured, and undergo continuous training to stay current with electrical codes and safety standards."
          }
        },
        {
          "@type": "Question",
          "name": "What electrical services do you provide in Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide complete electrical services including emergency repairs, panel upgrades, generator installation, ceiling fan installation, lighting upgrades, outlet and switch replacement, circuit breaker service, and electrical inspections for Tucson homes and businesses."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a panel upgrade cost in Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Panel upgrade costs vary based on amperage and complexity. Most Tucson residential panel upgrades range from $1,500-$3,500. We provide free estimates and can assess your needs during a consultation to give you an accurate quote."
          }
        },
        {
          "@type": "Question",
          "name": "Do you install Generac generators in Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We're authorized Generac dealers providing professional generator installation throughout Tucson. We handle sizing, permitting, installation, and ongoing maintenance to ensure reliable backup power during outages."
          }
        }
      ]
    };

    const schemas = [
      { id: 'service-schema', data: serviceSchema, attr: 'service' },
      { id: 'breadcrumb-schema', data: breadcrumbSchema, attr: 'breadcrumb' },
      { id: 'faq-schema', data: faqSchema, attr: 'faq' }
    ];

    schemas.forEach(({ id, data, attr }) => {
      let script = document.querySelector(`script[data-schema="${attr}"]`) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema', attr);
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    });

    return () => {
      document.querySelectorAll('script[data-schema]').forEach(el => el.remove());
    };
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Round-the-clock emergency electrical for Tucson residents"
    },
    {
      icon: Award,
      title: "Licensed & Insured",
      description: "Arizona-licensed electricians with comprehensive training"
    },
    {
      icon: CheckCircle2,
      title: "Code Compliant",
      description: "All work meets or exceeds current electrical codes"
    },
    {
      icon: Zap,
      title: "Safety First",
      description: "Thorough inspections and safe installation practices"
    }
  ];

  return (
    <>
      <MetaHead
        title="Electrician Tucson AZ | Licensed Electrical Services"
        description={description}
        canonical={`${SITE_URL}/electrical-tucson`}
        robots="index, follow, max-image-preview:large"
        openGraph={[
          { property: 'og:title', content: 'Electrician Tucson AZ | Licensed Electrical Services' },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: `${SITE_URL}/electrical-tucson` },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Electrician Tucson AZ | Licensed Electrical Services' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl }
        ]}
      />
      <GTM />
      <DNIInjector />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-[hsl(215,70%,25%)] via-[hsl(215,60%,30%)] to-[hsl(215,70%,25%)] text-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                  Licensed Electrician in Tucson, AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                  Over 22,000 5-Star Reviews | 45+ Years Experience
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  Panel Upgrades | Generator Installation | Lighting | Repairs | 24/7 Emergency Service
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule Electrical Service"
                    variant="destructive"
                    size="lg"
                    data-testid="button-schedule-hero"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
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

          {/* Benefits Grid */}
          <section className="py-12 md:py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="w-12 h-12 bg-[hsl(25,85%,55%)]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                        <benefit.icon className="h-6 w-6 text-[hsl(25,85%,55%)]" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-[hsl(215,10%,40%)]">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Main Content - shortened for template */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-6">
                  Trusted Electrician Serving Tucson Since 1979
                </h2>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  Electrical problems demand immediate attention from licensed professionals. At Intelligent Design, we've been providing expert electrical services to Tucson homes and businesses since 1979. Our licensed, bonded, and insured electricians deliver safe, code-compliant solutions for everything from emergency repairs to complete electrical system upgrades.
                </p>
                <p className="text-lg mb-8 text-[hsl(215,10%,30%)]">
                  Our comprehensive electrical services include 24/7 emergency repairs, electrical panel upgrades to 200-amp service, Generac generator installation and maintenance, ceiling fan and lighting installation, outlet and switch replacement, circuit breaker service, electrical safety inspections, and preventive maintenance. Every service visit includes a courtesy electrical safety check to identify potential hazards.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <SchedulerEmbed
                    triggerText="Schedule Service Now"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-content"
                  />
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+15203332665" data-testid="button-call-content">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-8 text-center">
                  Tucson Electrical FAQs
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="border rounded-lg px-6 bg-white">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      Do you offer emergency electrical service in Tucson?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,30%)]">
                      Yes! We provide 24/7 emergency electrical services throughout Tucson. Our licensed electricians respond quickly to power outages, sparking outlets, burning smells, and other dangerous electrical emergencies to keep your family safe.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border rounded-lg px-6 bg-white">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      Are your electricians licensed in Arizona?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,30%)]">
                      Absolutely! All our electricians hold valid Arizona electrical contractor licenses. They're fully bonded, insured, and undergo continuous training to stay current with electrical codes and safety standards.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border rounded-lg px-6 bg-white">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      What electrical services do you provide in Tucson?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,30%)]">
                      We provide complete electrical services including emergency repairs, panel upgrades, generator installation, ceiling fan installation, lighting upgrades, outlet and switch replacement, circuit breaker service, and electrical inspections for Tucson homes and businesses.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* Service Links */}
          <section className="py-16 bg-white border-t">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[hsl(215,70%,25%)] mb-6">
                  More Services in Tucson
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="outline" asChild>
                    <Link href="/tucson">All Tucson Services</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/electrical-repair-tucson">Electrical Services Tucson</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 bg-[hsl(215,70%,25%)] text-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need an Electrician in Tucson?
              </h2>
              <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                Get expert electrical service from licensed professionals. Same-day service available. Call now or schedule online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Service"
                  variant="destructive"
                  size="lg"
                  data-testid="button-schedule-final"
                />
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-final">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* NAP Section */}
          <section className="py-12 bg-gray-50 border-t">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                  <div>
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <MapPin className="h-5 w-5 text-[hsl(25,85%,55%)]" />
                      <h3 className="font-bold text-[hsl(215,70%,25%)]">Address</h3>
                    </div>
                    <p className="text-[hsl(215,10%,30%)]">
                      1145 E Fort Lowell Rd<br />
                      Tucson, AZ 85719
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <Phone className="h-5 w-5 text-[hsl(25,85%,55%)]" />
                      <h3 className="font-bold text-[hsl(215,70%,25%)]">Phone</h3>
                    </div>
                    <p className="text-[hsl(215,10%,30%)]">
                      <a href="tel:+15203332665" className="hover:text-[hsl(25,85%,55%)]">(520) 333-2665</a>
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <Clock className="h-5 w-5 text-[hsl(25,85%,55%)]" />
                      <h3 className="font-bold text-[hsl(215,70%,25%)]">Service Area</h3>
                    </div>
                    <p className="text-[hsl(215,10%,30%)]">
                      Serving Tucson<br />
                      & Greater Tucson
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <MobileFloatingActions />
      </div>
    </>
  );
}
