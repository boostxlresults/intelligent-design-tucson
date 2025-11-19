import { useEffect } from "react";
import { Phone, Droplet, CheckCircle2, MapPin, Clock, Award } from "lucide-react";
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

export default function PlumbingOroValley() {
  const description = "Expert plumbing services in Oro Valley, AZ. Licensed plumbers for repairs, installations, drain cleaning, water heaters, leak detection. 24/7 emergency service. BBB A+ rated.";
  const imageUrl = `${SITE_URL}/og-plumbing-oro-valley.jpg`;

  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Plumbing Services in Oro Valley, AZ",
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
          "name": "Oro Valley"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Oro Valley",
        "containedIn": {
          "@type": "State",
          "name": "Arizona"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Plumbing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Plumbing Repair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Water Heater Installation & Repair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Drain Cleaning & Sewer Services"
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
          "name": "Oro Valley Services",
          "item": `${SITE_URL}/oro-valley`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Plumbing Oro Valley",
          "item": `${SITE_URL}/plumbing-oro-valley`
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you offer emergency plumbing in Oro Valley?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We provide 24/7 emergency plumbing services throughout Oro Valley. Whether it's a burst pipe, water heater failure, or severe drain clog, our licensed plumbers respond quickly to minimize damage and restore your plumbing system."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can you respond to Oro Valley plumbing emergencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For emergency calls in Oro Valley, we typically arrive within 1-2 hours. Our proximity to Oro Valley and fully-stocked service vehicles allow us to respond quickly and resolve most issues on the first visit."
          }
        },
        {
          "@type": "Question",
          "name": "Are your plumbers licensed in Arizona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! All our plumbers hold valid Arizona contractor licenses and are fully bonded and insured. We maintain comprehensive training programs to ensure our team stays current with the latest plumbing codes, techniques, and technologies."
          }
        },
        {
          "@type": "Question",
          "name": "What plumbing services do you offer in Oro Valley?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide complete plumbing services including emergency repairs, water heater installation and repair, drain cleaning, leak detection, sewer line services, fixture installations, water softener systems, garbage disposals, and preventive maintenance for Oro Valley homes and businesses."
          }
        },
        {
          "@type": "Question",
          "name": "Do you warranty your plumbing work in Oro Valley?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We stand behind our work with comprehensive warranties. Our plumbing repairs and installations include workmanship guarantees, and we use quality parts backed by manufacturer warranties. We're committed to your complete satisfaction."
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
      description: "Round-the-clock emergency plumbing for Oro Valley residents"
    },
    {
      icon: Award,
      title: "Licensed & Insured",
      description: "Arizona-licensed plumbers with comprehensive training"
    },
    {
      icon: CheckCircle2,
      title: "Upfront Pricing",
      description: "Clear estimates before work begins, no hidden fees"
    },
    {
      icon: Droplet,
      title: "Quality Workmanship",
      description: "Guaranteed repairs and installations by expert plumbers"
    }
  ];

  return (
    <>
      <MetaHead
        title="Plumbing Services Oro Valley AZ | Licensed Plumber"
        description={description}
        canonical={`${SITE_URL}/plumbing-oro-valley`}
        robots="index, follow, max-image-preview:large"
        openGraph={[
          { property: 'og:title', content: 'Plumbing Services Oro Valley AZ | Licensed Plumber' },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: `${SITE_URL}/plumbing-oro-valley` },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Plumbing Services Oro Valley AZ | Licensed Plumber' },
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
                  Plumbing Services in Oro Valley, AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                  Over 22,000 5-Star Reviews | 45+ Years Experience
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  Expert Repairs | Water Heaters | Drain Cleaning | Leak Detection | 24/7 Emergency Service
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule Plumbing Service"
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

          {/* Main Content */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-6">
                  Trusted Plumber Serving Oro Valley Since 1979
                </h2>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  When plumbing problems strike your Oro Valley home, you need a licensed plumber you can trust. At Intelligent Design, we've been providing expert plumbing services to Oro Valley families and businesses since 1979. Our licensed, bonded, and insured plumbers deliver fast, reliable solutions for everything from minor repairs to major installations, backed by our 100% satisfaction guarantee and BBB A+ rating.
                </p>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  Oro Valley's unique water conditions and plumbing infrastructure require specialized knowledge. Our technicians understand the challenges homeowners face, from hard water issues that accelerate fixture wear to seasonal stress on water heaters during winter months. We stay current with Town of Oro Valley codes and regulations, ensuring every job meets or exceeds local standards while protecting your home's value and safety.
                </p>
                <p className="text-lg mb-8 text-[hsl(215,10%,30%)]">
                  Our comprehensive plumbing services include emergency repairs for burst pipes and water heater failures, professional drain cleaning using camera inspection technology, leak detection with non-invasive methods, water heater installation and replacement, sewer line services including trenchless repair, fixture upgrades and installations, garbage disposal services, and preventive maintenance programs. Every service visit includes a courtesy inspection to identify potential issues before they become emergencies.
                </p>

                <div className="bg-[hsl(25,85%,55%)]/5 border-l-4 border-[hsl(25,85%,55%)] p-6 mb-8">
                  <h3 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-3">
                    Why Oro Valley Homeowners Choose Us
                  </h3>
                  <ul className="space-y-2 text-[hsl(215,10%,30%)]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>24/7 Emergency Response:</strong> Available around the clock for urgent plumbing needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>Licensed Arizona Plumbers:</strong> Fully licensed, bonded, and insured professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>Upfront Pricing:</strong> Clear estimates before work begins, no surprise charges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>Fast Service:</strong> Same-day and emergency service throughout Oro Valley</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>Quality Workmanship:</strong> Comprehensive warranties on parts and labor</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-6 mt-12">
                  Complete Plumbing Services for Oro Valley
                </h2>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  <strong>Emergency Plumbing Repair</strong> - Plumbing emergencies don't wait for business hours. Our 24/7 emergency plumbers respond quickly to burst pipes, severe leaks, water heater failures, backed-up sewers, and other urgent issues throughout Oro Valley. We arrive with fully-stocked trucks containing common parts and specialized tools, enabling us to resolve most emergencies on the first visit and minimize water damage to your home.
                </p>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  <strong>Water Heater Services</strong> - From traditional tank water heaters to modern tankless and hybrid systems, we handle all water heater needs. Our services include professional installation of new units sized correctly for your household, expert repair of existing systems, preventive maintenance including annual flushing, and emergency replacement when failures occur. We help Oro Valley homeowners select energy-efficient models that reduce utility costs while providing reliable hot water.
                </p>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  <strong>Drain Cleaning & Sewer Services</strong> - Slow drains and backed-up sewers require professional attention. We use advanced camera inspection to diagnose issues accurately, hydro-jetting for thorough cleaning, and trenchless technology for repairs that minimize landscape disruption. Our drain maintenance programs keep Oro Valley plumbing systems flowing freely, preventing costly backups and extending system life.
                </p>
                <p className="text-lg mb-8 text-[hsl(215,10%,30%)]">
                  <strong>Leak Detection & Repair</strong> - Hidden leaks waste thousands of gallons and cause expensive damage. Our non-invasive leak detection technology locates problems behind walls, under slabs, and in underground lines without unnecessary destruction. We repair leaks promptly using quality materials and proper techniques, protecting your Oro Valley home from water damage and high utility bills.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <SchedulerEmbed
                    triggerText="Schedule Service Now"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-content"
                  />
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-content">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: (520) 333-2665
                    </a>
                  </Button>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-6">
                  Plumbing Expertise You Can Trust
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">45+ Years Serving Oro Valley</p>
                      <p className="text-sm text-gray-600">Local expertise since 1979. We know Oro Valley plumbing systems, water conditions, and code requirements inside and out.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Licensed Master Plumbers</p>
                      <p className="text-sm text-gray-600">Arizona-licensed professionals with extensive training and certifications. Background-checked, drug-tested, and uniformed.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Advanced Technology</p>
                      <p className="text-sm text-gray-600">Camera inspection, electronic leak detection, hydro-jetting, and trenchless technology for superior results.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">22,000+ Five-Star Reviews</p>
                      <p className="text-sm text-gray-600">BBB A+ rated with thousands of satisfied Oro Valley customers. Our reputation speaks to our quality and service.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Honest Recommendations</p>
                      <p className="text-sm text-gray-600">We provide repair vs. replace guidance based on what's best for you, not our bottom line. No high-pressure sales.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Comprehensive Warranties</p>
                      <p className="text-sm text-gray-600">Industry-leading warranties on workmanship and parts. We stand behind every job with 100% satisfaction guarantee.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-8 text-center">
                  Oro Valley Plumbing FAQs
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="border rounded-lg px-6 bg-white">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      Do you offer emergency plumbing in Oro Valley?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,30%)]">
                      Yes! We provide 24/7 emergency plumbing services throughout Oro Valley. Whether it's a burst pipe, water heater failure, or severe drain clog, our licensed plumbers respond quickly to minimize damage and restore your plumbing system.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border rounded-lg px-6 bg-white">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      How quickly can you respond to Oro Valley plumbing emergencies?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,30%)]">
                      For emergency calls in Oro Valley, we typically arrive within 1-2 hours. Our proximity to Oro Valley and fully-stocked service vehicles allow us to respond quickly and resolve most issues on the first visit.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border rounded-lg px-6 bg-white">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      Are your plumbers licensed in Arizona?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,30%)]">
                      Absolutely! All our plumbers hold valid Arizona contractor licenses and are fully bonded and insured. We maintain comprehensive training programs to ensure our team stays current with the latest plumbing codes, techniques, and technologies.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border rounded-lg px-6 bg-white">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      What plumbing services do you offer in Oro Valley?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,30%)]">
                      We provide complete plumbing services including emergency repairs, water heater installation and repair, drain cleaning, leak detection, sewer line services, fixture installations, water softener systems, garbage disposals, and preventive maintenance for Oro Valley homes and businesses.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border rounded-lg px-6 bg-white">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      Do you warranty your plumbing work in Oro Valley?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,30%)]">
                      Yes! We stand behind our work with comprehensive warranties. Our plumbing repairs and installations include workmanship guarantees, and we use quality parts backed by manufacturer warranties. We're committed to your complete satisfaction.
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
                  More Services in Oro Valley
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="outline" asChild>
                    <Link href="/oro-valley">All Oro Valley Services</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/plumbing-maintenance-tucson">Plumbing Services Tucson</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 bg-[hsl(215,70%,25%)] text-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need a Plumber in Oro Valley?
              </h2>
              <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                Get expert plumbing service from licensed professionals. Same-day service available. Call now or schedule online.
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
                      Serving Oro Valley<br />
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
