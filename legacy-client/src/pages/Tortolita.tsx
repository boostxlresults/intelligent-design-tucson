import { useEffect } from "react";
import { Phone, MapPin, Clock, AirVent, Flame, Droplet, Sun, Zap, Home as HomeIcon, Wrench } from "lucide-react";
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
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";
import heroImage from "@assets/generated_images/Tortolita_Arizona_new_developments_d6be1107.webp";
import { Link } from "wouter";

export default function Tortolita() {
  const description = "Expert HVAC, plumbing, solar, electrical, roofing, and drain services in Tortolita. Serving this growing community northwest of Tucson since 1979. 24/7 emergency service. BBB A+ rated with 22,000+ five-star reviews.";
  const imageUrl = `${SITE_URL}${heroImage}`;

  useEffect(() => {

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you serve Tortolita, Arizona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We proudly serve all of Tortolita and the surrounding areas. Tortolita is a growing community northwest of Tucson that we've been serving since 1979. We provide same-day service for HVAC, plumbing, solar, electrical, and roofing needs throughout the community."
          }
        },
        {
          "@type": "Question",
          "name": "What services do you offer in Tortolita?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer complete home services including air conditioning repair and installation, heating services, plumbing repairs and installations, solar panel systems, electrical services, roofing, and drain & sewer services. From routine maintenance to emergency repairs and new installations, we handle it all."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can you respond to Tortolita service calls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer fast response times throughout Tortolita. For emergency calls, we typically arrive within 1-2 hours. For scheduled appointments, we offer same-day and next-day service. Our proximity to Tortolita allows us to serve you quickly and efficiently."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer emergency service in Tortolita?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We provide 24/7 emergency service for HVAC, plumbing, and electrical emergencies in Tortolita. Whether it's a broken AC in summer heat, a plumbing leak, or an electrical issue, call us anytime at (520) 333-2665 for immediate assistance."
          }
        },
        {
          "@type": "Question",
          "name": "Are you licensed to work in Tortolita?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We hold all necessary Arizona state licenses for HVAC, plumbing, electrical, solar, and roofing work. Our technicians are fully licensed, bonded, and insured. We're also BBB A+ rated, ensuring the highest standards of quality and professionalism."
          }
        },
        {
          "@type": "Question",
          "name": "What makes you different from other Tortolita contractors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We've been serving the Tortolita area since 1979 with comprehensive warranties, upfront pricing, and 100% satisfaction guarantees. With over 22,000 five-star reviews, our reputation speaks for itself. We're a family-owned business committed to treating your home with the care it deserves."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work on all brands of HVAC systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Our expert technicians are trained to service and repair all major HVAC brands. Whether you have Carrier, Trane, Lennox, Goodman, or any other brand, we have the expertise to keep your system running efficiently."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with solar installation in Tortolita?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Definitely! Tortolita's sunny climate is perfect for solar energy. We offer residential solar panel installations, solar AC systems, and ongoing maintenance. We'll help you maximize federal tax credits and local incentives."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer financing for major projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer flexible financing options for HVAC replacements, solar installations, water heater upgrades, and other major home improvements. We work with multiple financing partners to provide payment plans that fit your budget."
          }
        },
        {
          "@type": "Question",
          "name": "What are your service hours for Tortolita?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our office hours are Monday-Friday 8:00 AM to 5:00 PM, and Saturday 8:00 AM to 2:00 PM. However, we offer 24/7 emergency service for urgent HVAC, plumbing, and electrical issues. You can always reach us at (520) 333-2665, day or night."
          }
        }
      ]
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.idesignac.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Tortolita Services",
          "item": "https://www.idesignac.com/tortolita"
        }
      ]
    };

    const schemas = [
      { id: 'faq-schema', data: faqSchema, attr: 'faq' },
      { id: 'breadcrumb-schema', data: breadcrumbSchema, attr: 'breadcrumb' }
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

  const services = [
    {
      icon: AirVent,
      title: "Air Conditioning",
      description: "Expert AC repair, installation, and maintenance for Tortolita's extreme heat.",
      link: "/hvac-tortolita"
    },
    {
      icon: Flame,
      title: "Heating",
      description: "Reliable heating services to keep you warm during chilly desert nights.",
      link: "/heating-tortolita"
    },
    {
      icon: Droplet,
      title: "Plumbing",
      description: "Complete plumbing services from leak repairs to water heater installations.",
      link: "/plumbing-tortolita"
    },
    {
      icon: Sun,
      title: "Solar",
      description: "Professional solar panel installation and maintenance for Tortolita homes.",
      link: "/solar-installation-tortolita"
    },
    {
      icon: Zap,
      title: "Electrical",
      description: "Licensed electrical services including panel upgrades and repairs.",
      link: "/electrical-tortolita"
    },
    {
      icon: HomeIcon,
      title: "Roofing",
      description: "Expert roof repair, installation, and coating services for Arizona homes.",
      link: "/roofing-tortolita"
    },
    {
      icon: Wrench,
      title: "Drain & Sewer",
      description: "Professional drain clearing, sewer repairs, and camera inspections.",
      link: "/drain-clearing-tucson"
    }
  ];

  return (
    <>
      <MetaHead
        title="HVAC, Plumbing, Solar, Electrical & Roofing Services in Tortolita, AZ | Intelligent Design"
        description={description}
        canonical="https://www.idesignac.com/tortolita"
        openGraph={[
          { property: 'og:title', content: 'HVAC, Plumbing, Solar, Electrical & Roofing Services in Tortolita, AZ | Intelligent Design' },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: 'https://www.idesignac.com/tortolita' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: 'Tortolita Arizona new developments' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'HVAC, Plumbing, Solar, Electrical & Roofing Services in Tortolita, AZ | Intelligent Design' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Tortolita Arizona new developments' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
            <div className="absolute inset-0 z-0">
              <img
                src={heroImage}
                alt="Tortolita Arizona new developments"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,70%,25%)]/90 to-[hsl(215,70%,25%)]/60"></div>
            </div>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="hero-title">
                  HVAC, Plumbing, Solar, Electrical & Roofing Services in Tortolita, AZ
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-4" data-testid="hero-subtitle">
                  Serving Tortolita's Growing Community
                </p>
                <p className="text-lg text-white/80 mb-8" data-testid="hero-description">
                  24/7 Emergency Service • BBB A+ Rated • 22,000+ Five-Star Reviews
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-[hsl(25,85%,55%)] hover:bg-[hsl(25,85%,45%)] text-white text-lg px-8 py-6"
                    data-testid="cta-schedule-service"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: (520) 333-2665
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white backdrop-blur-sm bg-white/10 hover:bg-white/20 text-lg px-8 py-6"
                    data-testid="cta-schedule-online"
                  >
                    Schedule Online
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Bar */}
          <TrustBar />

          {/* Introduction Section */}
          <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-6" data-testid="intro-title">
                  Proud to Serve Tortolita, Arizona
                </h2>
                <p className="text-lg text-[hsl(215,10%,40%)] mb-6" data-testid="intro-description">
                  Since 1979, Intelligent Design has been serving Tortolita families with expert HVAC, plumbing, solar, electrical, roofing, and drain services. We understand the unique needs of this growing community northwest of Tucson.
                </p>
                <p className="text-lg text-[hsl(215,10%,40%)] mb-8" data-testid="intro-commitment">
                  We're not just contractors—we're your neighbors. Our team of licensed, background-checked technicians is committed to delivering exceptional service with upfront pricing, lifetime warranties, and 100% satisfaction guaranteed.
                </p>
                <Button
                  size="lg"
                  className="bg-[hsl(25,85%,55%)] hover:bg-[hsl(25,85%,45%)] text-white"
                  data-testid="cta-learn-more"
                >
                  Learn More About Us
                </Button>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 md:py-20 bg-[hsl(215,15%,92%)]">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-4" data-testid="services-title">
                  Complete Home Services in Tortolita
                </h2>
                <p className="text-lg text-[hsl(215,10%,40%)]" data-testid="services-subtitle">
                  From air conditioning to solar panels, we do it all
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    className="hover-elevate active-elevate-2 overflow-visible"
                    data-testid={`service-card-${index}`}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-[hsl(25,85%,55%)]/10 rounded-lg flex items-center justify-center mb-4">
                        <service.icon className="h-6 w-6 text-[hsl(25,85%,55%)]" />
                      </div>
                      <CardTitle className="text-xl" data-testid={`service-title-${index}`}>
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[hsl(215,10%,40%)] mb-4" data-testid={`service-description-${index}`}>
                        {service.description}
                      </p>
                      <Button
                        variant="outline"
                        className="w-full"
                        asChild
                        data-testid={`cta-service-${index}`}
                      >
                        <Link href={service.link}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-12">
                <Button
                  size="lg"
                  className="bg-[hsl(25,85%,55%)] hover:bg-[hsl(25,85%,45%)] text-white"
                  asChild
                  data-testid="cta-view-all-services"
                >
                  <Link href="/#services">View All Services</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* About Tortolita Section */}
          <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-6" data-testid="about-area-title">
                  About Tortolita, Arizona
                </h2>
                <p className="text-lg text-[hsl(215,10%,40%)] mb-6" data-testid="about-area-description">
                  Tortolita is a growing unincorporated community northwest of Tucson, known for its new developments and master-planned communities. The area offers modern homes with mountain views and access to excellent amenities in nearby Marana and Oro Valley.
                </p>
                
                <h3 className="text-2xl font-bold text-[hsl(215,70%,25%)] mb-4 mt-8" data-testid="features-title">
                  Local Features
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="feature-1-title">
                      New Development Growth
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="feature-1-description">
                      Tortolita features numerous new housing developments with modern floor plans, energy-efficient construction, and contemporary amenities. This makes it an attractive option for homebuyers seeking new construction in the Tucson area.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="feature-2-title">
                      Scenic Mountain Views
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="feature-2-description">
                      Residents enjoy stunning views of the Tortolita Mountains and surrounding Sonoran Desert landscape. The area's natural beauty provides a picturesque backdrop for outdoor activities and daily life.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="feature-3-title">
                      Proximity to Amenities
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="feature-3-description">
                      While maintaining a quieter, more rural feel, Tortolita offers easy access to shopping, dining, and entertainment in nearby Marana and Oro Valley. Residents enjoy the best of both worlds: peaceful living with urban convenience nearby.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 md:py-20 bg-[hsl(215,15%,92%)]">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-8 text-center" data-testid="faq-title">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-white rounded-lg px-6" data-testid="faq-item-1">
                    <AccordionTrigger className="text-left font-semibold">
                      Do you serve Tortolita, Arizona?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Yes! We proudly serve all of Tortolita and the surrounding areas. Tortolita is a growing community northwest of Tucson that we've been serving since 1979. We provide same-day service for HVAC, plumbing, solar, electrical, and roofing needs throughout the community.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-white rounded-lg px-6" data-testid="faq-item-2">
                    <AccordionTrigger className="text-left font-semibold">
                      What services do you offer in Tortolita?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      We offer complete home services including air conditioning repair and installation, heating services, plumbing repairs and installations, solar panel systems, electrical services, roofing, and drain & sewer services. From routine maintenance to emergency repairs and new installations, we handle it all.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-white rounded-lg px-6" data-testid="faq-item-3">
                    <AccordionTrigger className="text-left font-semibold">
                      How quickly can you respond to Tortolita service calls?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      We offer fast response times throughout Tortolita. For emergency calls, we typically arrive within 1-2 hours. For scheduled appointments, we offer same-day and next-day service. Our proximity to Tortolita allows us to serve you quickly and efficiently.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-white rounded-lg px-6" data-testid="faq-item-4">
                    <AccordionTrigger className="text-left font-semibold">
                      Do you offer emergency service in Tortolita?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Absolutely! We provide 24/7 emergency service for HVAC, plumbing, and electrical emergencies in Tortolita. Whether it's a broken AC in summer heat, a plumbing leak, or an electrical issue, call us anytime at (520) 333-2665 for immediate assistance.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-white rounded-lg px-6" data-testid="faq-item-5">
                    <AccordionTrigger className="text-left font-semibold">
                      Are you licensed to work in Tortolita?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Yes! We hold all necessary Arizona state licenses for HVAC, plumbing, electrical, solar, and roofing work. Our technicians are fully licensed, bonded, and insured. We're also BBB A+ rated, ensuring the highest standards of quality and professionalism.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="bg-white rounded-lg px-6" data-testid="faq-item-6">
                    <AccordionTrigger className="text-left font-semibold">
                      What makes you different from other Tortolita contractors?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      We've been serving the Tortolita area since 1979 with comprehensive warranties, upfront pricing, and 100% satisfaction guarantees. With over 22,000 five-star reviews, our reputation speaks for itself. We're a family-owned business committed to treating your home with the care it deserves.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="bg-white rounded-lg px-6" data-testid="faq-item-7">
                    <AccordionTrigger className="text-left font-semibold">
                      Do you work on all brands of HVAC systems?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Yes! Our expert technicians are trained to service and repair all major HVAC brands. Whether you have Carrier, Trane, Lennox, Goodman, or any other brand, we have the expertise to keep your system running efficiently.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" className="bg-white rounded-lg px-6" data-testid="faq-item-8">
                    <AccordionTrigger className="text-left font-semibold">
                      Can you help with solar installation in Tortolita?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Definitely! Tortolita's sunny climate is perfect for solar energy. We offer residential solar panel installations, solar AC systems, and ongoing maintenance. We'll help you maximize federal tax credits and local incentives.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9" className="bg-white rounded-lg px-6" data-testid="faq-item-9">
                    <AccordionTrigger className="text-left font-semibold">
                      Do you offer financing for major projects?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Yes! We offer flexible financing options for HVAC replacements, solar installations, water heater upgrades, and other major home improvements. We work with multiple financing partners to provide payment plans that fit your budget.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10" className="bg-white rounded-lg px-6" data-testid="faq-item-10">
                    <AccordionTrigger className="text-left font-semibold">
                      What are your service hours for Tortolita?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Our office hours are Monday-Friday 8:00 AM to 5:00 PM, and Saturday 8:00 AM to 2:00 PM. However, we offer 24/7 emergency service for urgent HVAC, plumbing, and electrical issues. You can always reach us at (520) 333-2665, day or night.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* NAP & Contact Section */}
          <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-8 text-center" data-testid="contact-title">
                  Contact Intelligent Design Tucson
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card data-testid="contact-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-[hsl(25,85%,55%)]" />
                        Office Location
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="font-semibold text-[hsl(215,70%,25%)]" data-testid="contact-address">
                          Intelligent Design Air Conditioning, Plumbing, Solar & Electric
                        </p>
                        <p className="text-[hsl(215,10%,40%)]">West La Osa Street</p>
                        <p className="text-[hsl(215,10%,40%)]">Tucson, AZ 85705</p>
                      </div>
                      <div>
                        <p className="flex items-center gap-2 text-[hsl(215,10%,40%)]" data-testid="contact-phone">
                          <Phone className="h-4 w-4 text-[hsl(25,85%,55%)]" />
                          (520) 333-2665
                        </p>
                      </div>
                      <div>
                        <p className="flex items-center gap-2 text-[hsl(215,10%,40%)]" data-testid="contact-hours">
                          <Clock className="h-4 w-4 text-[hsl(25,85%,55%)]" />
                          24/7 Emergency Service Available
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card data-testid="scheduler-card">
                    <CardHeader>
                      <CardTitle>Schedule Service Today</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[hsl(215,10%,40%)] mb-6">
                        Get expert service from Tucson's most trusted home service company serving Tortolita. Same-day appointments available!
                      </p>
                      <Button
                        size="lg"
                        className="w-full bg-[hsl(25,85%,55%)] hover:bg-[hsl(25,85%,45%)] text-white"
                        data-testid="cta-schedule-now"
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        Call (520) 333-2665
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 bg-[hsl(215,70%,25%)] text-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="final-cta-title">
                Ready to Experience the Intelligent Design Difference?
              </h2>
              <p className="text-xl mb-8 text-white/90" data-testid="final-cta-description">
                Join thousands of satisfied Tortolita homeowners. Call us today!
              </p>
              <Button
                size="lg"
                className="bg-[hsl(25,85%,55%)] hover:bg-[hsl(25,85%,45%)] text-white text-lg px-8 py-6"
                data-testid="cta-final-call"
              >
                <Phone className="mr-2 h-5 w-5" />
                (520) 333-2665
              </Button>
            </div>
          </section>
        </main>
        <Footer />
        <MobileFloatingActions />
      </div>
    </>
  );
}
