import { useEffect } from "react";
import { Phone, HomeIcon, CheckCircle2, MapPin, Clock, Award } from "lucide-react";
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

export default function RoofingTucsonEstates() {
  const description = "Professional roofing services in Tucson Estates, AZ. Expert roof repair, replacement, inspection, coating. Tile, shingle, flat roofs. 24/7 emergency service. BBB A+ rated.";
  const imageUrl = `${SITE_URL}/og-roofing-tucson-estates.jpg`;

  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Roofing Services in Tucson Estates, AZ",
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
          "name": "Tucson Estates"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Tucson Estates",
        "containedIn": {
          "@type": "State",
          "name": "Arizona"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Roofing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Roof Repair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Roof Replacement & Installation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Roof Inspection & Coating"
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
          "name": "Tucson Estates Services",
          "item": `${SITE_URL}/tucson-estates`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Roofing Tucson Estates",
          "item": `${SITE_URL}/roofing-tucson-estates`
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you offer emergency roof repair in Tucson Estates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We provide 24/7 emergency roofing services throughout Tucson Estates. Whether it's storm damage, roof leaks, or structural concerns, our licensed roofers respond quickly to minimize interior damage and protect your home."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can you respond to Tucson Estates roofing emergencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For emergency calls in Tucson Estates, we typically arrive within 1-2 hours. Our proximity to Tucson Estates and fully-equipped service vehicles allow us to respond quickly with tarps, temporary repairs, and permanent solutions."
          }
        },
        {
          "@type": "Question",
          "name": "Are your roofers licensed in Arizona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! All our roofers hold valid Arizona contractor licenses and are fully bonded and insured. We maintain comprehensive training programs to ensure our team stays current with the latest roofing techniques, materials, and Arizona building codes."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing services do you offer in Tucson Estates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide complete roofing services including emergency repairs, roof replacement and installation, roof inspections, roof coating and sealing, tile roof services, shingle roof services, flat roof repair, leak detection and repair, and preventive maintenance for Tucson Estates homes and businesses."
          }
        },
        {
          "@type": "Question",
          "name": "Do you warranty your roofing work in Tucson Estates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We stand behind our work with comprehensive warranties. Our roofing repairs and installations include workmanship guarantees, and we use quality materials backed by manufacturer warranties. We're committed to your complete satisfaction and roof longevity."
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
      description: "Round-the-clock emergency roofing for Tucson Estates residents"
    },
    {
      icon: Award,
      title: "Licensed & Insured",
      description: "Arizona-licensed roofers with comprehensive training"
    },
    {
      icon: CheckCircle2,
      title: "Quality Materials",
      description: "Premium roofing materials with manufacturer warranties"
    },
    {
      icon: HomeIcon,
      title: "Expert Craftsmanship",
      description: "Professional installations and repairs built to last"
    }
  ];

  return (
    <>
      <MetaHead
        title="Roofing Services Tucson Estates AZ | Professional Roofer"
        description={description}
        canonical={`${SITE_URL}/roofing-tucson-estates`}
        robots="index, follow, max-image-preview:large"
        openGraph={[
          { property: 'og:title', content: 'Roofing Services Tucson Estates AZ | Professional Roofer' },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: `${SITE_URL}/roofing-tucson-estates` },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Roofing Services Tucson Estates AZ | Professional Roofer' },
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
                  Professional Roofing Services in Tucson Estates, AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                  Over 22,000 5-Star Reviews | 45+ Years Experience
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  Roof Repair | Replacement | Inspection | Coating | Tile & Shingle | 24/7 Emergency Service
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule Roofing Service"
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
                  Trusted Roofer Serving Tucson Estates Since 1979
                </h2>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  When your Tucson Estates roof needs attention, you need experienced roofers you can trust. At Intelligent Design, we've been providing expert roofing services to Tucson Estates families and businesses since 1979. Our licensed, bonded, and insured roofing professionals deliver reliable solutions for everything from emergency leak repairs to complete roof replacements, backed by our 100% satisfaction guarantee and BBB A+ rating.
                </p>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  Tucson Estates's intense sun exposure and monsoon weather create unique challenges for roofing systems. Our technicians understand how UV radiation degrades roofing materials, how thermal cycling causes tiles to crack, and how summer storms can expose vulnerable areas. We stay current with Town of Tucson Estates building codes and use materials specifically rated for Arizona's harsh desert climate.
                </p>
                <p className="text-lg mb-8 text-[hsl(215,10%,30%)]">
                  Our comprehensive roofing services include emergency roof repairs for leaks and storm damage, complete roof replacement and installation, professional roof inspections with detailed reports, roof coating and sealing to extend life, tile roof repair and replacement, shingle roof services, flat roof repair and coating, leak detection and repair, preventive maintenance programs, and HOA-compliant roofing solutions. Every service visit includes a thorough roof inspection to identify potential issues before they become costly problems.
                </p>

                <div className="bg-[hsl(25,85%,55%)]/5 border-l-4 border-[hsl(25,85%,55%)] p-6 mb-8">
                  <h3 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-3">
                    Why Tucson Estates Homeowners Choose Us
                  </h3>
                  <ul className="space-y-2 text-[hsl(215,10%,30%)]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>24/7 Emergency Response:</strong> Available around the clock for urgent roofing needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>Licensed Arizona Roofers:</strong> Fully licensed, bonded, and insured professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>Quality Materials:</strong> Premium roofing products rated for Arizona climate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>Fast Service:</strong> Same-day and emergency service throughout Tucson Estates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[hsl(25,85%,55%)] flex-shrink-0 mt-0.5" />
                      <span><strong>Comprehensive Warranties:</strong> Workmanship and manufacturer warranties</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-6 mt-12">
                  Complete Roofing Services for Tucson Estates
                </h2>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  <strong>Emergency Roof Repair</strong> - Roofing emergencies don't wait for business hours. Our 24/7 emergency roofers respond quickly to storm damage, severe leaks, structural concerns, and wind damage throughout Tucson Estates. We arrive with tarps, tools, and materials to provide temporary protection and permanent repairs, minimizing interior water damage to your home.
                </p>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  <strong>Roof Replacement & Installation</strong> - From traditional tile roofs to modern shingle systems, we handle all roof replacement needs. Our services include professional removal of old roofing, proper deck preparation and repair, expert installation using quality materials, compliance with local building codes, and thorough cleanup. We help Tucson Estates homeowners select roofing materials that provide maximum protection, energy efficiency, and curb appeal.
                </p>
                <p className="text-lg mb-6 text-[hsl(215,10%,30%)]">
                  <strong>Roof Inspection & Coating</strong> - Regular inspections extend roof life and prevent costly damage. We provide comprehensive roof inspections with detailed reports, professional roof coating to seal and protect, preventive maintenance to address small issues, and thermal imaging to detect hidden moisture. Our maintenance programs keep Tucson Estates roofing systems performing optimally year after year.
                </p>
                <p className="text-lg mb-8 text-[hsl(215,10%,30%)]">
                  <strong>Tile & Specialty Roofing</strong> - Arizona's architectural heritage features distinctive tile roofing that requires specialized knowledge. Our tile roofing expertise includes cracked tile replacement, underlayment repair, proper tile fitting and sealing, and color-matched tiles for seamless repairs. We preserve the beauty and integrity of Tucson Estates's tile roofs while ensuring maximum weather protection.
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
                  Roofing Expertise You Can Trust
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">45+ Years Serving Tucson Estates</p>
                      <p className="text-sm text-gray-600">Local expertise since 1979. We know Tucson Estates roofing systems, climate challenges, and code requirements inside and out.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Licensed Master Roofers</p>
                      <p className="text-sm text-gray-600">Arizona-licensed professionals with extensive training and certifications. Background-checked, drug-tested, and uniformed.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Quality Materials</p>
                      <p className="text-sm text-gray-600">Premium roofing products from trusted manufacturers, all rated for Arizona's intense sun and weather conditions.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">22,000+ Five-Star Reviews</p>
                      <p className="text-sm text-gray-600">BBB A+ rated with thousands of satisfied Tucson Estates customers. Our reputation speaks to our quality and service.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Honest Assessments</p>
                      <p className="text-sm text-gray-600">We provide repair vs. replace guidance based on what's best for you, not our bottom line. No high-pressure sales.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Comprehensive Warranties</p>
                      <p className="text-sm text-gray-600">Industry-leading warranties on workmanship and materials. We stand behind every job with 100% satisfaction guarantee.</p>
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
                  Tucson Estates Roofing FAQs
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="border rounded-lg px-6 bg-white">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      Do you offer emergency roof repair in Tucson Estates?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,30%)]">
                      Yes! We provide 24/7 emergency roofing services throughout Tucson Estates. Whether it's storm damage, roof leaks, or structural concerns, our licensed roofers respond quickly to minimize interior damage and protect your home.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border rounded-lg px-6 bg-white">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      How quickly can you respond to Tucson Estates roofing emergencies?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,30%)]">
                      For emergency calls in Tucson Estates, we typically arrive within 1-2 hours. Our proximity to Tucson Estates and fully-equipped service vehicles allow us to respond quickly with tarps, temporary repairs, and permanent solutions.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border rounded-lg px-6 bg-white">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      Are your roofers licensed in Arizona?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,30%)]">
                      Absolutely! All our roofers hold valid Arizona contractor licenses and are fully bonded and insured. We maintain comprehensive training programs to ensure our team stays current with the latest roofing techniques, materials, and Arizona building codes.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border rounded-lg px-6 bg-white">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      What roofing services do you offer in Tucson Estates?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,30%)]">
                      We provide complete roofing services including emergency repairs, roof replacement and installation, roof inspections, roof coating and sealing, tile roof services, shingle roof services, flat roof repair, leak detection and repair, and preventive maintenance for Tucson Estates homes and businesses.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border rounded-lg px-6 bg-white">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      Do you warranty your roofing work in Tucson Estates?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,30%)]">
                      Yes! We stand behind our work with comprehensive warranties. Our roofing repairs and installations include workmanship guarantees, and we use quality materials backed by manufacturer warranties. We're committed to your complete satisfaction and roof longevity.
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
                  More Services in Tucson Estates
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="outline" asChild>
                    <Link href="/tucson-estates">All Tucson Estates Services</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/residential-roof-repair-tucson">Roofing Services Tucson</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 bg-[hsl(215,70%,25%)] text-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need a Roofer in Tucson Estates?
              </h2>
              <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                Get expert roofing service from licensed professionals. Same-day service available. Call now or schedule online.
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
                      Serving Tucson Estates<br />
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
