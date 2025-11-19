import { useEffect } from "react";
import { Phone, Sun, CheckCircle2, MapPin, Clock, Award } from "lucide-react";
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

export default function SolarInstallationRillito() {
  const description = "Professional solar panel installation in Rillito, AZ. Expert design, premium equipment, 30% federal tax credit assistance. Serving Rillito families since 1979. BBB A+ rated.";
  const imageUrl = `${SITE_URL}/og-solar-rillito.jpg`;

  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Solar Installation in Rillito, AZ",
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
          "name": "Rillito"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Rillito",
        "containedIn": {
          "@type": "State",
          "name": "Arizona"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Solar Installation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Residential Solar Panel Installation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Solar System Design & Consultation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Solar Tax Credit Assistance"
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
          "name": "Rillito Services",
          "item": `${SITE_URL}/rillito`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Solar Installation Rillito",
          "item": `${SITE_URL}/solar-installation-rillito`
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Rillito a good location for solar panels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Rillito receives over 350 days of sunshine annually, making it one of the best locations in the United States for solar energy production. The combination of abundant sunshine, favorable net metering policies, and high TEP electric rates make solar an excellent investment for Rillito homeowners."
          }
        },
        {
          "@type": "Question",
          "name": "How much can I save with solar in Rillito?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rillito homeowners typically save $1,200-$2,400 annually on electricity bills with solar panels. Over 25 years, total savings average $30,000-$60,000 depending on system size and energy usage. The 30% federal tax credit and TEP net metering program enhance these savings significantly."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need special permits for solar in Rillito?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, solar installations in Rillito require building permits and electrical permits from the Town of Rillito. We handle all permitting, including HOA approvals if applicable, structural calculations, and utility interconnection applications. Most Rillito permits are approved within 2-3 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "How long does solar installation take in Rillito?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "From consultation to activation, the typical timeline is 6-10 weeks. Design and permitting take 3-5 weeks, physical installation takes 1-3 days, and utility approval takes 2-4 weeks. We coordinate all aspects to ensure a smooth process for Rillito homeowners."
          }
        },
        {
          "@type": "Question",
          "name": "What's the ROI for solar panels in Rillito?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rillito solar systems typically pay for themselves in 7-10 years through energy savings and tax credits. After payback, homeowners enjoy 15+ years of free electricity. Solar also increases home values by approximately $15,000-$25,000 in the Rillito market."
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
      icon: Sun,
      title: "350+ Sunny Days/Year",
      description: "Rillito's exceptional sunshine makes solar highly productive"
    },
    {
      icon: CheckCircle2,
      title: "30% Federal Tax Credit",
      description: "Save thousands with the federal Investment Tax Credit"
    },
    {
      icon: Award,
      title: "Premium Tier-1 Panels",
      description: "25-year warranties on equipment built for Arizona heat"
    },
    {
      icon: Clock,
      title: "Fast Installation",
      description: "Most Rillito systems installed in 1-3 days"
    }
  ];

  return (
    <>
      <MetaHead
        title="Solar Installation Rillito AZ | Solar Panel Installation"
        description={description}
        canonical={`${SITE_URL}/solar-installation-rillito`}
        robots="index, follow, max-image-preview:large"
        openGraph={[
          { property: 'og:title', content: 'Solar Installation Rillito AZ | Solar Panel Installation' },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: `${SITE_URL}/solar-installation-rillito` },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Solar Installation Rillito AZ | Solar Panel Installation' },
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
                  Solar Installation in Rillito, AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                  Over 22,000 5-Star Reviews | 45+ Years Experience
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  Premium Solar Panels | 30% Tax Credit | Expert Design & Installation | Energy Independence
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule Free Solar Consultation"
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
                  Expert Solar Installation for Rillito Homes
                </h2>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  Rillito homeowners are discovering the financial and environmental benefits of solar energy. With over 350 days of sunshine annually and some of Arizona's highest electric rates from Tucson Electric Power, solar panels deliver exceptional returns on investment. At Intelligent Design, we've helped hundreds of Rillito families transition to clean, renewable solar power since 1979, providing expert system design, premium equipment installation, and comprehensive support to maximize your solar savings.
                </p>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  Our solar installation process begins with a detailed energy analysis of your Rillito home. We examine 12 months of TEP utility bills to understand your consumption patterns and identify the optimal system size. Our NABCEP-certified solar designers use advanced 3D modeling technology to map your roof, analyze sun exposure throughout the year, assess any shading from nearby mountains or vegetation, and design panel layouts that maximize energy production while complementing your home's architecture.
                </p>
                <p className="text-lg mb-8 text-[hsl(215,10%,30%)]">
                  We exclusively use tier-1 solar panels with 25-year performance warranties, high-efficiency inverters engineered for extreme heat, and aluminum racking systems rated for Arizona's monsoon winds. Every Rillito installation includes comprehensive monitoring systems so you can track production in real-time, complete TEP net metering setup, and professional electrical integration by licensed Arizona electricians. Our installations follow strict quality standards and all local building codes, ensuring safe, reliable performance for decades.
                </p>

                <div className="bg-[hsl(25,85%,55%)]/5 border-l-4 border-[hsl(25,85%,55%)] p-6 mb-8">
                  <h3 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-3">
                    Why Rillito is Perfect for Solar
                  </h3>
                  <ul className="space-y-2 text-[hsl(215,10%,30%)]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>Exceptional Solar Resource:</strong> 350+ sunny days per year with minimal cloud cover</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>High Electric Rates:</strong> TEP rates make solar savings substantial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>Net Metering Benefits:</strong> Full retail credit for excess solar production</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>Home Value Increase:</strong> Solar adds $15,000-$25,000 to Rillito property values</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>Federal Tax Credits:</strong> 30% ITC through 2032 significantly reduces system cost</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-6 mt-12">
                  The Rillito Solar Installation Process
                </h2>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  <strong>Step 1: Free Solar Consultation</strong> - We begin with an in-home consultation to assess your roof, review energy bills, discuss goals, and answer questions. We evaluate roof orientation (south-facing is optimal), pitch, condition, and any shading issues from Rillito's scenic mountain views or mature landscaping. Using satellite imagery and specialized software, we model sun exposure throughout the year to estimate production.
                </p>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  <strong>Step 2: Custom System Design</strong> - Our designers create a detailed system layout optimized for your Rillito home. We specify panel quantity and placement, inverter configuration (string or microinverters), electrical requirements, and structural attachments. You'll receive a comprehensive proposal showing projected energy production, year-by-year savings, total investment after tax credits, and estimated payback period.
                </p>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  <strong>Step 3: Permits & Approvals</strong> - We handle all permitting with the Town of Rillito building department, including structural calculations, electrical plans, and fire setback compliance. If your home is in an HOA community, we manage architectural approvals. We also submit interconnection applications to TEP and coordinate utility requirements. Most Rillito permits are approved within 2-3 weeks.
                </p>
                <p className="text-lg mb-8 text-[hsl(215,10%,30%)]">
                  <strong>Step 4: Professional Installation</strong> - Our NABCEP-certified installers complete most Rillito residential systems in 1-3 days. We install racking securely to roof trusses, mount panels, run conduit, install inverters, upgrade electrical panels if needed, and integrate monitoring systems. After installation, Town of Rillito inspectors and TEP verify proper installation before your system goes live.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <SchedulerEmbed
                    triggerText="Get Your Free Solar Quote"
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
                  Solar Savings for Rillito Homeowners
                </h2>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  The average Rillito home uses 1,000-1,400 kWh monthly. With TEP electric rates and Arizona's abundant sunshine, a properly sized solar system can reduce your electric bill by 80-100%. Typical Rillito homeowners save $1,200-$2,400 annually, totaling $30,000-$60,000 over 25 years. The 30% federal tax credit immediately reduces system cost by thousands of dollars, shortening payback periods to 7-10 years.
                </p>
                <p className="text-lg mb-8 text-[hsl(215,10%,30%)]">
                  Beyond monthly savings, solar increases Rillito home values significantly. Studies show buyers will pay $15,000-$25,000 more for homes with owned solar systems. Solar also provides protection against future TEP rate increases, which have historically averaged 3-5% annually. By generating your own electricity, you lock in predictable energy costs for decades.
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-6">
                  Why Choose Intelligent Design for Solar in Rillito
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">45+ Years Serving Rillito</p>
                      <p className="text-sm text-gray-600">Local expertise since 1979. We understand Rillito's unique requirements, from HOA guidelines to optimal roof orientations given local topography.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">NABCEP Certified Installers</p>
                      <p className="text-sm text-gray-600">Industry-leading certifications and continuous training ensure expert installations meeting all Arizona codes and best practices.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Premium Equipment Only</p>
                      <p className="text-sm text-gray-600">Tier-1 solar panels with 25-year warranties, high-efficiency inverters, and racking systems engineered for Rillito's climate.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">22,000+ Five-Star Reviews</p>
                      <p className="text-sm text-gray-600">BBB A+ rated with thousands of satisfied Rillito customers. Our reputation is built on quality work and exceptional service.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Complete Permitting Support</p>
                      <p className="text-sm text-gray-600">We handle all Rillito permits, HOA approvals, and TEP interconnection paperwork. You don't lift a finger.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Comprehensive Warranties</p>
                      <p className="text-sm text-gray-600">25-year panel warranties, 10-25 year inverter warranties, and 10-year workmanship warranty for complete peace of mind.</p>
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
                  Rillito Solar Installation FAQs
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="border rounded-lg px-6 bg-white">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      Is Rillito a good location for solar panels?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,30%)]">
                      Absolutely! Rillito receives over 350 days of sunshine annually, making it one of the best locations in the United States for solar energy production. The combination of abundant sunshine, favorable net metering policies, and high TEP electric rates make solar an excellent investment for Rillito homeowners.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border rounded-lg px-6 bg-white">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      How much can I save with solar in Rillito?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,30%)]">
                      Rillito homeowners typically save $1,200-$2,400 annually on electricity bills with solar panels. Over 25 years, total savings average $30,000-$60,000 depending on system size and energy usage. The 30% federal tax credit and TEP net metering program enhance these savings significantly.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border rounded-lg px-6 bg-white">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      Do I need special permits for solar in Rillito?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,30%)]">
                      Yes, solar installations in Rillito require building permits and electrical permits from the Town of Rillito. We handle all permitting, including HOA approvals if applicable, structural calculations, and utility interconnection applications. Most Rillito permits are approved within 2-3 weeks.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border rounded-lg px-6 bg-white">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      How long does solar installation take in Rillito?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,30%)]">
                      From consultation to activation, the typical timeline is 6-10 weeks. Design and permitting take 3-5 weeks, physical installation takes 1-3 days, and utility approval takes 2-4 weeks. We coordinate all aspects to ensure a smooth process for Rillito homeowners.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border rounded-lg px-6 bg-white">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      What's the ROI for solar panels in Rillito?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,30%)]">
                      Rillito solar systems typically pay for themselves in 7-10 years through energy savings and tax credits. After payback, homeowners enjoy 15+ years of free electricity. Solar also increases home values by approximately $15,000-$25,000 in the Rillito market.
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
                  More Services in Rillito
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="outline" asChild>
                    <Link href="/rillito">All Rillito Services</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/residential-solar-installation-tucson">Solar Installation Tucson</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 bg-[hsl(215,70%,25%)] text-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Go Solar in Rillito?
              </h2>
              <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                Get your free solar consultation and custom quote today. Start saving on your electric bill with clean, renewable energy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Free Consultation"
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
                      Serving Rillito<br />
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
