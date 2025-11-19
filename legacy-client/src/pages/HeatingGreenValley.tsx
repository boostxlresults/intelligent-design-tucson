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
import { heatingLocationFAQs } from "@/data/faqs/hvac";
import heroImage from "@assets/generated_images/Heating_tech_heat_pump_service_fdc5a775.webp";

export default function HeatingGreenValley() {
  const description = "Professional heating services in Green Valley, AZ. Furnace repair, installation, maintenance, heat pumps. 24/7 emergency heater service. BBB A+ rated.";
  const imageUrl = `${SITE_URL}/og-heating-green-valley.jpg`;

  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Heating Services in Green Valley, AZ",
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
          "name": "Green Valley"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Green Valley",
        "containedIn": {
          "@type": "State",
          "name": "Arizona"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Heating Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Furnace Repair & Emergency Service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Furnace Installation & Replacement"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Furnace Maintenance & Tune-ups"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Heat Pump Installation & Service"
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
          "name": "Green Valley Services",
          "item": `${SITE_URL}/green-valley`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Heating Green Valley",
          "item": `${SITE_URL}/heating-green-valley`
        }
      ]
    };

    const schemas = [
      { id: 'service-schema', data: serviceSchema, attr: 'heating-green-valley-service' },
      { id: 'breadcrumb-schema', data: breadcrumbSchema, attr: 'heating-green-valley-breadcrumb' },
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
      description: "Round-the-clock emergency heating repair for Green Valley residents"
    },
    {
      icon: Award,
      title: "Licensed & Insured",
      description: "Arizona-licensed heating technicians with comprehensive training"
    },
    {
      icon: CheckCircle2,
      title: "Quality Equipment",
      description: "Top-rated furnaces and heat pumps with manufacturer warranties"
    },
    {
      icon: HomeIcon,
      title: "Expert Installation",
      description: "Professional heating installations for reliable desert winter comfort"
    }
  ];

  return (
    <>
      <MetaHead
        title="Heating Services Green Valley AZ | Furnace Repair & Installation"
        description={description}
        canonical={`${SITE_URL}/heating-green-valley`}
        robots="index, follow, max-image-preview:large"
        openGraph={[
          { property: 'og:title', content: 'Heating Services Green Valley AZ | Furnace Repair & Installation' },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: `${SITE_URL}/heating-green-valley` },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Heating Services Green Valley AZ | Furnace Repair & Installation' },
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
                  Heating Services in Green Valley, AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                  Over 22,000 5-Star Reviews | 45+ Years Experience
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  Furnace Repair | Installation | Maintenance | Heat Pumps | 24/7 Emergency Service
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule Heating Service"
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
                  Trusted Heating Company Serving Green Valley Since 1979
                </h2>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  When your Green Valley heating system needs service, you need experienced furnace technicians you can trust. At Intelligent Design, we've been providing expert furnace repair, installation, and maintenance to Green Valley families and businesses since 1979. Our licensed, bonded, and insured heating professionals deliver reliable solutions for everything from emergency heater repairs to complete furnace replacements, backed by our 100% satisfaction guarantee and BBB A+ rating.
                </p>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  While Green Valley winters are mild compared to other regions, desert nights can get surprisingly cold, and a malfunctioning furnace is never convenient. Our technicians understand how Arizona's unique climate affects heating equipment, how dust accumulation impacts performance, and how to maintain optimal efficiency year-round. We stay current with local energy efficiency programs and use equipment specifically rated for desert conditions.
                </p>
                <p className="text-lg mb-8 text-[hsl(215,10%,30%)]">
                  Our comprehensive heating services include emergency furnace repair for system failures, complete furnace installation and replacement, preventive maintenance and tune-ups, heat pump installation and service, thermostat upgrades and installation, gas line services and safety inspections, efficiency upgrades and retrofits, and ductwork services. Every service visit includes a thorough safety inspection to ensure your heating system operates reliably and safely.
                </p>

                <div className="bg-[hsl(25,85%,55%)]/5 border-l-4 border-[hsl(25,85%,55%)] p-6 mb-8">
                  <h3 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-3">
                    Why Green Valley Homeowners Choose Us
                  </h3>
                  <ul className="space-y-2 text-[hsl(215,10%,30%)]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>24/7 Emergency Service:</strong> Available around the clock for urgent heating needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>Licensed Heating Technicians:</strong> Fully licensed, bonded, and insured professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>Quality Equipment:</strong> Top-rated furnaces and heat pumps from leading manufacturers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>Fast Service:</strong> Same-day and emergency service throughout Green Valley</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>Comprehensive Warranties:</strong> Workmanship and manufacturer warranties</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-6 mt-12">
                  Complete Heating Services for Green Valley
                </h2>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  <strong>Furnace Repair & Emergency Service</strong> - Heating emergencies happen at the worst times. Our 24/7 emergency heating technicians respond quickly to furnace failures, pilot light issues, thermostat problems, and blower motor failures throughout Green Valley. We arrive with diagnostic equipment and common parts to restore heat to your home quickly and safely.
                </p>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  <strong>Furnace Installation & Replacement</strong> - From standard efficiency to high-efficiency condensing furnaces, we install all types of heating equipment. Our services include professional heat load calculations, proper sizing for Green Valley homes, high-efficiency system selection, expert installation following manufacturer specifications, and commissioning for optimal performance. We help homeowners maximize utility rebates and tax credits.
                </p>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  <strong>Furnace Maintenance & Tune-ups</strong> - Regular maintenance ensures reliable operation and prevents mid-winter breakdowns. Our comprehensive tune-ups include burner cleaning and adjustment, heat exchanger inspection, blower motor service, thermostat calibration, safety control testing, and filter replacement. Our maintenance plans keep Green Valley heating systems running efficiently year after year.
                </p>
                <p className="text-lg mb-8 text-[hsl(215,10%,30%)]">
                  <strong>Heat Pump Installation & Service</strong> - Ideal for mild Arizona winters, heat pumps provide both heating and cooling efficiency. We install and service all major heat pump brands, offering professional refrigerant charging, reversing valve service, defrost control maintenance, and auxiliary heat configuration for maximum year-round comfort and efficiency.
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
                  Heating Expertise You Can Trust
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">45+ Years Serving Green Valley</p>
                      <p className="text-sm text-gray-600">Local expertise since 1979. We know Green Valley heating systems, climate considerations, and efficiency solutions inside and out.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Licensed Master Technicians</p>
                      <p className="text-sm text-gray-600">Arizona-licensed heating professionals with extensive training and certifications. Background-checked, drug-tested, and uniformed.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Quality Equipment</p>
                      <p className="text-sm text-gray-600">Top-rated furnaces and heat pumps from Carrier, Trane, Lennox, and other leading manufacturers, all sized and installed correctly.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">22,000+ Five-Star Reviews</p>
                      <p className="text-sm text-gray-600">BBB A+ rated with thousands of satisfied Green Valley customers. Our reputation speaks to our quality and service.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Upfront Pricing</p>
                      <p className="text-sm text-gray-600">No surprises or hidden fees. We provide clear, detailed estimates before starting any work on your heating system.</p>
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

          <ServiceFAQ faqs={heatingLocationFAQs.faqs} sectionHeading="Green Valley Heating FAQs" serviceName={heatingLocationFAQs.serviceName} serviceId={heatingLocationFAQs.serviceId} />

          {/* Service Links */}
          <section className="py-16 bg-white border-t">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[hsl(215,70%,25%)] mb-6">
                  More Services in Green Valley
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="outline" asChild>
                    <Link href="/green-valley">All Green Valley Services</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/heater-repair-tucson">Heating Services Tucson</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 bg-[hsl(215,70%,25%)] text-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Heating Service in Green Valley?
              </h2>
              <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                Get expert furnace service from licensed professionals. Same-day service available. Call now or schedule online.
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
                      Serving Green Valley<br />
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
