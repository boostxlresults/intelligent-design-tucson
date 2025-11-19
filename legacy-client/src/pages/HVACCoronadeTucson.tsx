import { useEffect } from "react";
import { Phone, HomeIcon, CheckCircle2, MapPin, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import ServiceFAQ from "@/components/ServiceFAQ";
import { hvacLocationFAQs } from "@/data/faqs/hvac";
import heroImage from "@assets/generated_images/HVAC_tech_successful_completion_bd112b6c.webp";

export default function HVACCoronadeTucson() {
  const description = "Expert HVAC & air conditioning services in Corona de Tucson, AZ. AC repair, installation, maintenance, ductless mini-splits, heat pumps. 24/7 emergency service. BBB A+ rated.";
  const imageUrl = `${SITE_URL}/og-hvac-corona-de-tucson.jpg`;

  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "HVAC & Air Conditioning Services in Corona de Tucson, AZ",
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
          "name": "Corona de Tucson"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Corona de Tucson",
        "containedIn": {
          "@type": "State",
          "name": "Arizona"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "HVAC Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AC Repair & Emergency Service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AC Installation & Replacement"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AC Maintenance & Tune-ups"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ductless Mini-Split Systems"
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
          "name": "Corona de Tucson Services",
          "item": `${SITE_URL}/corona-de-tucson`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "HVAC Corona de Tucson",
          "item": `${SITE_URL}/hvac-corona-de-tucson`
        }
      ]
    };

    const schemas = [
      { id: 'service-schema', data: serviceSchema, attr: 'hvac-coronade-tucson-service' },
      { id: 'breadcrumb-schema', data: breadcrumbSchema, attr: 'hvac-coronade-tucson-breadcrumb' },
    ];

    const createdScripts: HTMLScriptElement[] = [];

    schemas.forEach(({ id, data, attr }) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema', attr);
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
      createdScripts.push(script);
    });

    return () => {
      createdScripts.forEach(script => script.remove());
    };
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Round-the-clock emergency AC repair for Corona de Tucson residents"
    },
    {
      icon: Award,
      title: "Licensed & Insured",
      description: "Arizona-licensed HVAC technicians with comprehensive training"
    },
    {
      icon: CheckCircle2,
      title: "Quality Equipment",
      description: "Top-rated AC systems with manufacturer warranties"
    },
    {
      icon: HomeIcon,
      title: "Expert Installation",
      description: "Professional AC installations built for Arizona heat"
    }
  ];

  return (
    <>
      <MetaHead
        title="HVAC & AC Services Corona de Tucson AZ | Air Conditioning Repair & Installation"
        description={description}
        canonical={`${SITE_URL}/hvac-corona-de-tucson`}
        robots="index, follow, max-image-preview:large"
        openGraph={[
          { property: 'og:title', content: 'HVAC & AC Services Corona de Tucson AZ | Air Conditioning Repair & Installation' },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: `${SITE_URL}/hvac-corona-de-tucson` },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'HVAC & AC Services Corona de Tucson AZ | Air Conditioning Repair & Installation' },
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
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215,70%,25%)]/95 via-[hsl(215,60%,30%)]/90 to-[hsl(215,70%,25%)]/95" />
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                  HVAC & Air Conditioning Services in Corona de Tucson, AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                  Over 22,000 5-Star Reviews | 45+ Years Experience
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  AC Repair | Installation | Maintenance | Ductless Mini-Splits | Heat Pumps | 24/7 Emergency Service
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule AC Service"
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
                  Trusted HVAC Company Serving Corona de Tucson Since 1979
                </h2>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  When your Corona de Tucson air conditioning needs service, you need experienced HVAC technicians you can trust. At Intelligent Design, we've been providing expert AC repair, installation, and maintenance to Corona de Tucson families and businesses since 1979. Our licensed, bonded, and insured HVAC professionals deliver reliable solutions for everything from emergency AC repairs to complete system replacements, backed by our 100% satisfaction guarantee and BBB A+ rating.
                </p>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  Corona de Tucson's extreme summer temperatures demand air conditioning systems that perform flawlessly. Our technicians understand how the desert heat affects AC equipment, how dust and debris impact system efficiency, and how Arizona's unique climate challenges cooling systems. We stay current with local energy efficiency incentives and use equipment specifically rated for Arizona's demanding conditions.
                </p>
                <p className="text-lg mb-8 text-[hsl(215,10%,30%)]">
                  Our comprehensive HVAC services include emergency AC repair for system failures, complete air conditioning installation and replacement, preventive maintenance and tune-ups, ductless mini-split systems, heat pump installation and service, indoor air quality solutions, smart thermostat installation, duct cleaning and sealing, and energy efficiency upgrades. Every service visit includes a thorough system inspection to identify potential issues before they become costly breakdowns.
                </p>

                <div className="bg-[hsl(25,85%,55%)]/5 border-l-4 border-[hsl(25,85%,55%)] p-6 mb-8">
                  <h3 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-3">
                    Why Corona de Tucson Homeowners Choose Us
                  </h3>
                  <ul className="space-y-2 text-[hsl(215,10%,30%)]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>24/7 Emergency Service:</strong> Available around the clock for urgent AC needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>Licensed HVAC Technicians:</strong> Fully licensed, bonded, and insured professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>Quality Equipment:</strong> Top-rated AC systems from leading manufacturers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>Fast Service:</strong> Same-day and emergency service throughout Corona de Tucson</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>Comprehensive Warranties:</strong> Workmanship and manufacturer warranties</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-6 mt-12">
                  Complete HVAC Services for Corona de Tucson
                </h2>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  <strong>AC Repair & Emergency Service</strong> - Air conditioning emergencies don't wait for business hours. Our 24/7 emergency HVAC technicians respond quickly to system failures, refrigerant leaks, compressor issues, and electrical problems throughout Corona de Tucson. We arrive with diagnostic tools and common parts to restore your comfort fast, often completing repairs on the first visit.
                </p>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  <strong>AC Installation & Replacement</strong> - From single-stage systems to variable-speed units, we install all types of air conditioning equipment. Our services include professional load calculations, proper sizing for Corona de Tucson homes, high-efficiency system selection, expert installation following manufacturer specs, and refrigerant charging for optimal performance. We help homeowners maximize federal tax credits and utility rebates.
                </p>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  <strong>AC Maintenance & Tune-ups</strong> - Regular maintenance extends equipment life and prevents breakdowns during peak cooling season. Our comprehensive tune-ups include refrigerant level checks, coil cleaning, electrical testing, thermostat calibration, condensate drain clearing, and filter replacement. Our maintenance plans keep Corona de Tucson AC systems running efficiently year after year.
                </p>
                <p className="text-lg mb-8 text-[hsl(215,10%,30%)]">
                  <strong>Ductless Mini-Split Systems</strong> - Ideal for additions, garages, and homes without ductwork, ductless systems provide efficient zone cooling. We install and service all major ductless brands, offering professional refrigerant line installation, indoor unit mounting, outdoor unit placement, and multi-zone configurations for complete home comfort.
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
                  HVAC Expertise You Can Trust
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">45+ Years Serving Corona de Tucson</p>
                      <p className="text-sm text-gray-600">Local expertise since 1979. We know Corona de Tucson HVAC systems, climate challenges, and energy efficiency solutions inside and out.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Licensed Master Technicians</p>
                      <p className="text-sm text-gray-600">Arizona-licensed HVAC professionals with extensive training and certifications. Background-checked, drug-tested, and uniformed.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Quality Equipment</p>
                      <p className="text-sm text-gray-600">Top-rated AC systems from Carrier, Trane, Lennox, and other leading manufacturers, all sized and installed correctly.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">22,000+ Five-Star Reviews</p>
                      <p className="text-sm text-gray-600">BBB A+ rated with thousands of satisfied Corona de Tucson customers. Our reputation speaks to our quality and service.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Upfront Pricing</p>
                      <p className="text-sm text-gray-600">No surprises or hidden fees. We provide clear, detailed estimates before starting any work on your AC system.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Comprehensive Warranties</p>
                      <p className="text-sm text-gray-600">Industry-leading warranties on workmanship and equipment. We stand behind every job with 100% satisfaction guarantee.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ServiceFAQ faqs={hvacLocationFAQs.faqs} sectionHeading="Corona de Tucson HVAC FAQs" serviceName={hvacLocationFAQs.serviceName} serviceId={hvacLocationFAQs.serviceId} />

          {/* Service Links */}
          <section className="py-16 bg-white border-t">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[hsl(215,70%,25%)] mb-6">
                  More Services in Corona de Tucson
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="outline" asChild>
                    <Link href="/corona-de-tucson">All Corona de Tucson Services</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/ac-repair-tucson">AC Services Tucson</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 bg-[hsl(215,70%,25%)] text-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need HVAC Service in Corona de Tucson?
              </h2>
              <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                Get expert AC service from licensed professionals. Same-day service available. Call now or schedule online.
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
                      Serving Corona de Tucson<br />
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
