import { useEffect } from "react";
import { Phone, MapPin, Mail, Clock, AirVent, Flame, Droplet, Sun, Zap, Home as HomeIcon, Wrench } from "lucide-react";
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
import heroImage from "@assets/generated_images/Tucson_Arizona_skyline_mountains_b8fae114.webp";
import { Link } from "wouter";

export default function Tucson() {
  const description = "Tucson's #1 rated HVAC, plumbing, solar, electrical, roofing, and drain services. Proudly serving Tucson families since 1979. 24/7 emergency service. Office on West La Osa Street. BBB A+ rated with 22,000+ five-star reviews.";
  const imageUrl = `${SITE_URL}${heroImage}`;

  useEffect(() => {

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Intelligent Design serve all of Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We serve all of Tucson and the surrounding areas. Our office is located on West La Osa Street in Tucson, and we provide same-day service throughout the greater Tucson area including downtown, midtown, east side, northwest, and south Tucson. We've been proudly serving Tucson families since 1979."
          }
        },
        {
          "@type": "Question",
          "name": "What services do you offer in Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer comprehensive home services including HVAC (air conditioning and heating), plumbing, solar installation, electrical services, roofing, and drain & sewer services. Whether you need emergency AC repair, water heater installation, solar panels, electrical panel upgrades, roof repairs, or drain cleaning, our expert technicians are here to help."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer 24/7 emergency service in Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We understand that AC breakdowns and plumbing emergencies don't wait for business hours. We offer 24/7 emergency service throughout Tucson, 365 days a year. Call us anytime at (520) 333-2665 for immediate assistance."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can you respond to service calls in Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We pride ourselves on fast response times. For emergency calls, we typically arrive within 1-2 hours. For scheduled service appointments, we offer same-day and next-day options. Our Tucson location allows us to quickly reach customers throughout the metro area."
          }
        },
        {
          "@type": "Question",
          "name": "Are your technicians licensed and insured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! All our technicians are fully licensed, bonded, and insured. They undergo thorough background checks, regular drug testing, and continuous training. We're BBB A+ rated and maintain all necessary Arizona state licenses for HVAC, plumbing, electrical, solar, and roofing work."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Intelligent Design different from other Tucson contractors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We're a family-owned Tucson business that's been serving our community since 1979. We offer upfront pricing, lifetime craftsmanship warranties, no lemon guarantees, and satisfaction guarantees. With over 22,000 five-star reviews and BBB A+ rating, our reputation speaks for itself."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer financing options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer flexible financing options for HVAC installations, solar projects, water heater replacements, and other major home improvements. We work with multiple financing partners to help you find affordable payment plans that fit your budget."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with solar installation in Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Tucson's abundant sunshine makes it perfect for solar energy. We offer residential and commercial solar panel installations, solar AC systems, and solar maintenance. We'll help you take advantage of federal tax credits and local incentives."
          }
        },
        {
          "@type": "Question",
          "name": "What areas of Tucson do you service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We service all of Tucson including downtown Tucson, midtown, eastside, northwest Tucson, south Tucson, Catalina Foothills, Rita Ranch, Vail, and surrounding communities. If you're in the greater Tucson metropolitan area, we can help!"
          }
        },
        {
          "@type": "Question",
          "name": "What are your service hours?",
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
          "name": "Tucson Services",
          "item": "https://www.idesignac.com/tucson"
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
      description: "Expert AC repair, installation, and maintenance for Tucson's extreme heat.",
      link: "/hvac-tucson"
    },
    {
      icon: Flame,
      title: "Heating",
      description: "Reliable heating services to keep you warm during chilly desert nights.",
      link: "/heating-tucson"
    },
    {
      icon: Droplet,
      title: "Plumbing",
      description: "Complete plumbing services from leak repairs to water heater installations.",
      link: "/plumbing-tucson"
    },
    {
      icon: Sun,
      title: "Solar",
      description: "Professional solar panel installation and maintenance for Tucson homes.",
      link: "/solar-installation-tucson"
    },
    {
      icon: Zap,
      title: "Electrical",
      description: "Licensed electrical services including panel upgrades and repairs.",
      link: "/electrical-tucson"
    },
    {
      icon: HomeIcon,
      title: "Roofing",
      description: "Expert roof repair, installation, and coating services for Arizona homes.",
      link: "/roofing-tucson"
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
        title="HVAC, Plumbing, Solar, Electrical & Roofing Services in Tucson, AZ | #1 Rated Company"
        description={description}
        canonical="https://www.idesignac.com/tucson"
        openGraph={[
          { property: 'og:title', content: 'HVAC, Plumbing, Solar, Electrical & Roofing Services in Tucson, AZ | #1 Rated Company' },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: 'https://www.idesignac.com/tucson' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: 'Tucson Arizona skyline with mountains' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'HVAC, Plumbing, Solar, Electrical & Roofing Services in Tucson, AZ | #1 Rated Company' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Tucson Arizona skyline with mountains' }
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
                alt="Tucson Arizona skyline with Santa Catalina mountains"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,70%,25%)]/90 to-[hsl(215,70%,25%)]/60"></div>
            </div>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="hero-title">
                  HVAC, Plumbing, Solar, Electrical & Roofing Services in Tucson, AZ
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-4" data-testid="hero-subtitle">
                  #1 Rated Company in Tucson
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
                  Proud to Call Tucson Home
                </h2>
                <p className="text-lg text-[hsl(215,10%,40%)] mb-6" data-testid="intro-description">
                  Since 1979, Intelligent Design has been serving Tucson families with expert HVAC, plumbing, solar, electrical, roofing, and drain services. Our office on West La Osa Street is your local headquarters for all home service needs.
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
                  Complete Home Services in Tucson
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

          {/* About Tucson Section */}
          <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-6" data-testid="about-tucson-title">
                  About Tucson, Arizona
                </h2>
                <p className="text-lg text-[hsl(215,10%,40%)] mb-6" data-testid="about-tucson-description">
                  One of the largest cities in Arizona, Tucson is a diverse and vibrant community with sprawling hiking trails, groundbreaking restaurants, and historic sights. The city's unique blend of Sonoran Desert beauty and urban amenities makes it an exceptional place to call home.
                </p>
                
                <h3 className="text-2xl font-bold text-[hsl(215,70%,25%)] mb-4 mt-8" data-testid="attractions-title">
                  Local Attractions
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="attraction-botanical-title">
                      Tucson Botanical Gardens
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="attraction-botanical-description">
                      Founded in 1964, the Tucson Botanical Gardens showcases stunning collections of cacti, succulents, and a popular butterfly exhibit. It's a peaceful oasis in the heart of the city.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="attraction-desert-museum-title">
                      Arizona-Sonora Desert Museum
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="attraction-desert-museum-description">
                      Experience desert animals, over 2,000 plant types, and an impressive artificial cave at this world-renowned museum. It's a must-visit destination for locals and tourists alike.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="attraction-miniatures-title">
                      Mini Time Machine Museum of Miniatures
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="attraction-miniatures-description">
                      Discover over 500 miniature houses and figurines in this unique museum. It's a fascinating glimpse into the art of miniatures from around the world.
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
                      Does Intelligent Design serve all of Tucson?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Yes! We serve all of Tucson and the surrounding areas. Our office is located on West La Osa Street in Tucson, and we provide same-day service throughout the greater Tucson area including downtown, midtown, east side, northwest, and south Tucson. We've been proudly serving Tucson families since 1979.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-white rounded-lg px-6" data-testid="faq-item-2">
                    <AccordionTrigger className="text-left font-semibold">
                      What services do you offer in Tucson?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      We offer comprehensive home services including HVAC (air conditioning and heating), plumbing, solar installation, electrical services, roofing, and drain & sewer services. Whether you need emergency AC repair, water heater installation, solar panels, electrical panel upgrades, roof repairs, or drain cleaning, our expert technicians are here to help.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-white rounded-lg px-6" data-testid="faq-item-3">
                    <AccordionTrigger className="text-left font-semibold">
                      Do you offer 24/7 emergency service in Tucson?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Absolutely! We understand that AC breakdowns and plumbing emergencies don't wait for business hours. We offer 24/7 emergency service throughout Tucson, 365 days a year. Call us anytime at (520) 333-2665 for immediate assistance.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-white rounded-lg px-6" data-testid="faq-item-4">
                    <AccordionTrigger className="text-left font-semibold">
                      How quickly can you respond to service calls in Tucson?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      We pride ourselves on fast response times. For emergency calls, we typically arrive within 1-2 hours. For scheduled service appointments, we offer same-day and next-day options. Our Tucson location allows us to quickly reach customers throughout the metro area.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-white rounded-lg px-6" data-testid="faq-item-5">
                    <AccordionTrigger className="text-left font-semibold">
                      Are your technicians licensed and insured?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Yes! All our technicians are fully licensed, bonded, and insured. They undergo thorough background checks, regular drug testing, and continuous training. We're BBB A+ rated and maintain all necessary Arizona state licenses for HVAC, plumbing, electrical, solar, and roofing work.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="bg-white rounded-lg px-6" data-testid="faq-item-6">
                    <AccordionTrigger className="text-left font-semibold">
                      What makes Intelligent Design different from other Tucson contractors?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      We're a family-owned Tucson business that's been serving our community since 1979. We offer upfront pricing, lifetime craftsmanship warranties, no lemon guarantees, and satisfaction guarantees. With over 22,000 five-star reviews and BBB A+ rating, our reputation speaks for itself.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="bg-white rounded-lg px-6" data-testid="faq-item-7">
                    <AccordionTrigger className="text-left font-semibold">
                      Do you offer financing options?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Yes! We offer flexible financing options for HVAC installations, solar projects, water heater replacements, and other major home improvements. We work with multiple financing partners to help you find affordable payment plans that fit your budget.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" className="bg-white rounded-lg px-6" data-testid="faq-item-8">
                    <AccordionTrigger className="text-left font-semibold">
                      Can you help with solar installation in Tucson?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Absolutely! Tucson's abundant sunshine makes it perfect for solar energy. We offer residential and commercial solar panel installations, solar AC systems, and solar maintenance. We'll help you take advantage of federal tax credits and local incentives.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9" className="bg-white rounded-lg px-6" data-testid="faq-item-9">
                    <AccordionTrigger className="text-left font-semibold">
                      What areas of Tucson do you service?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      We service all of Tucson including downtown Tucson, midtown, eastside, northwest Tucson, south Tucson, Catalina Foothills, Rita Ranch, Vail, and surrounding communities. If you're in the greater Tucson metropolitan area, we can help!
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10" className="bg-white rounded-lg px-6" data-testid="faq-item-10">
                    <AccordionTrigger className="text-left font-semibold">
                      What are your service hours?
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
                        Get expert service from Tucson's most trusted home service company. Same-day appointments available!
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
                Join thousands of satisfied Tucson homeowners. Call us today!
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
