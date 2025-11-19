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
import SchedulerEmbed from "@/components/SchedulerEmbed";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";
import heroImage from "@assets/generated_images/East_Tucson_residential_area_5a55bc22.png";

export default function EastTucson() {
  const description = "Expert home services in East Tucson including Tanque Verde, Rita Ranch, and Corona De Tucson. HVAC, plumbing, solar, electrical & roofing. Same-day service. BBB A+ rated.";
  const imageUrl = `${SITE_URL}${heroImage}`;

  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you serve East Tucson, Arizona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We proudly serve all of East Tucson including Tanque Verde Valley, Rita Ranch, Corona De Tucson, and the Harrison Road corridor. East Tucson is one of our primary service areas. We provide same-day service for HVAC, plumbing, solar, electrical, and roofing needs throughout the community."
          }
        },
        {
          "@type": "Question",
          "name": "What areas of East Tucson do you cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve all neighborhoods in East Tucson including Rita Ranch, Tanque Verde Valley, Corona De Tucson, areas along Harrison Road, neighborhoods near Saguaro National Park East, and communities near the Rincon Mountains. Our service area extends throughout eastern Tucson and the surrounding foothills."
          }
        },
        {
          "@type": "Question",
          "name": "What services do you offer in East Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer complete home services including air conditioning repair and installation, heating services, plumbing repairs and installations, solar panel systems, electrical services, roofing, and drain & sewer services. From routine maintenance to emergency repairs and new installations, we handle it all for East Tucson homes."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can you respond to East Tucson service calls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer fast response times throughout East Tucson. For emergency calls, we typically arrive within 1-2 hours. For scheduled appointments, we offer same-day and next-day service. Our location allows us to serve the entire East Tucson area quickly and efficiently."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer emergency service in East Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We provide 24/7 emergency service for HVAC, plumbing, and electrical emergencies throughout East Tucson. Whether it's a broken AC in summer heat, a plumbing leak, or an electrical issue, call us anytime at (520) 333-2665 for immediate assistance."
          }
        },
        {
          "@type": "Question",
          "name": "Are you familiar with homes in the Rita Ranch and Tanque Verde areas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We've been serving Rita Ranch, Tanque Verde, and all of East Tucson since 1979. We're very familiar with the home construction styles, common issues, and specific needs of properties in this area. Our technicians have extensive experience working with both newer developments and established neighborhoods."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work on all brands of HVAC systems in East Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Our expert technicians are trained to service and repair all major HVAC brands. Whether you have Carrier, Trane, Lennox, Goodman, or any other brand, we have the expertise to keep your system running efficiently in East Tucson's desert climate."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with solar installation in East Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Definitely! East Tucson's sunny location is perfect for solar energy. We offer residential and commercial solar panel installations, solar AC systems, and ongoing maintenance. We'll help you maximize federal tax credits and local incentives while reducing your energy bills."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer financing for major projects in East Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer flexible financing options for HVAC replacements, solar installations, water heater upgrades, and other major home improvements. We work with multiple financing partners to provide payment plans that fit your budget."
          }
        },
        {
          "@type": "Question",
          "name": "What are your service hours for East Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our office is open Monday-Friday 8:00 AM to 5:00 PM, and Saturday 8:00 AM to 2:00 PM. However, we offer 24/7 emergency service for urgent situations. You can reach us anytime at (520) 333-2665 for immediate assistance in East Tucson."
          }
        }
      ]
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Intelligent Design Heating & Cooling - East Tucson",
      "image": imageUrl,
      "@id": "https://www.idesignac.com/east-tucson",
      "url": "https://www.idesignac.com/east-tucson",
      "telephone": "+1-520-333-2665",
      "priceRange": "$$",
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
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "14:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/idesignac",
        "https://www.instagram.com/idesignac"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "22000"
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
          "item": "https://www.idesignac.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "East Tucson Services",
          "item": "https://www.idesignac.com/east-tucson"
        }
      ]
    };

    const schemas = [
      { id: 'faq-schema', data: faqSchema, attr: 'faq' },
      { id: 'local-business-schema', data: localBusinessSchema, attr: 'local-business' },
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
      description: "Expert AC repair, installation, and maintenance for East Tucson homes.",
      link: "/hvac-east-tucson"
    },
    {
      icon: Flame,
      title: "Heating",
      description: "Reliable heating services to keep your family comfortable year-round.",
      link: "/heating-east-tucson"
    },
    {
      icon: Droplet,
      title: "Plumbing",
      description: "Complete plumbing services from leak repairs to fixture installations.",
      link: "/plumbing-east-tucson"
    },
    {
      icon: Sun,
      title: "Solar",
      description: "Professional solar panel installation and maintenance.",
      link: "/solar-installation-east-tucson"
    },
    {
      icon: Zap,
      title: "Electrical",
      description: "Licensed electrical services including panel upgrades and repairs.",
      link: "/electrical-east-tucson"
    },
    {
      icon: HomeIcon,
      title: "Roofing",
      description: "Expert roof repair, installation, and coating services.",
      link: "/roofing-east-tucson"
    },
    {
      icon: Wrench,
      title: "Drain & Sewer",
      description: "Professional drain clearing and sewer repair services.",
      link: "/drain-clearing-tucson"
    }
  ];

  return (
    <>
      <MetaHead
        title="HVAC, Plumbing, Solar, Electrical & Roofing Services in East Tucson, AZ"
        description={description}
        canonical="https://www.idesignac.com/east-tucson"
        robots="index, follow, max-image-preview:large"
        openGraph={[
          { property: 'og:title', content: 'HVAC, Plumbing, Solar, Electrical & Roofing Services in East Tucson, AZ' },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: 'https://www.idesignac.com/east-tucson' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: 'East Tucson Arizona residential area' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'HVAC, Plumbing, Solar, Electrical & Roofing Services in East Tucson, AZ' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'East Tucson Arizona residential area' }
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
                alt="East Tucson Arizona residential area"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,70%,25%)]/90 to-[hsl(215,70%,25%)]/60"></div>
            </div>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="hero-title">
                  HVAC, Plumbing, Solar, Electrical & Roofing Services in East Tucson, AZ
                </h1>
                <p className="text-lg text-white/80 mb-8" data-testid="hero-description">
                  Serving Rita Ranch, Tanque Verde, Corona De Tucson, and all of East Tucson since 1979
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-[hsl(25,85%,55%)] hover:bg-[hsl(25,85%,45%)] text-white text-lg px-8 py-6"
                    data-testid="cta-call-now"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: (520) 333-2665
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white backdrop-blur-sm bg-white/10 hover:bg-white/20 text-lg px-8 py-6"
                    data-testid="cta-schedule-service"
                  >
                    Schedule Service
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Bar */}
          <TrustBar />

          {/* Services Grid */}
          <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-4" data-testid="services-title">
                  Complete Home Services in East Tucson
                </h2>
                <p className="text-lg text-[hsl(215,10%,40%)]" data-testid="services-subtitle">
                  Professional service for every home system
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

          {/* About East Tucson Section */}
          <section className="py-16 md:py-20 bg-[hsl(215,15%,92%)]">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-6" data-testid="about-east-tucson-title">
                  About East Tucson, Arizona
                </h2>
                <p className="text-lg text-[hsl(215,10%,40%)] mb-6" data-testid="about-east-tucson-description">
                  East Tucson encompasses a diverse collection of neighborhoods and communities stretching from the Rincon Mountains to the Harrison Road corridor. This dynamic area includes established communities like Tanque Verde Valley, rapidly growing developments like Rita Ranch, and the scenic landscapes near Saguaro National Park East. With stunning mountain views, excellent schools, and easy access to outdoor recreation, East Tucson offers an exceptional desert lifestyle.
                </p>
                
                <h3 className="text-2xl font-bold text-[hsl(215,70%,25%)] mb-4 mt-8" data-testid="neighborhoods-title">
                  Neighborhoods We Serve
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="neighborhood-rita-ranch-title">
                      Rita Ranch
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="neighborhood-rita-ranch-description">
                      One of Tucson's fastest-growing master-planned communities, Rita Ranch offers modern homes, excellent schools, parks, and community amenities. We serve this vibrant neighborhood with comprehensive HVAC, plumbing, solar, and electrical services tailored to newer construction homes.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="neighborhood-tanque-verde-title">
                      Tanque Verde Valley
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="neighborhood-tanque-verde-description">
                      Known for its scenic beauty and proximity to outdoor recreation, Tanque Verde Valley features diverse housing from ranch estates to modern subdivisions. The area is popular with families and outdoor enthusiasts who appreciate easy access to hiking, biking, and the stunning Tanque Verde Falls.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="neighborhood-corona-title">
                      Corona De Tucson
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="neighborhood-corona-description">
                      This unincorporated community southeast of Tucson offers larger lots, horse properties, and a rural atmosphere while maintaining convenient access to city amenities. We provide complete home services to Corona De Tucson residents who value the peaceful desert lifestyle.
                    </p>
                  </div>

                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="neighborhood-harrison-title">
                      Harrison Road Corridor
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="neighborhood-harrison-description">
                      The Harrison Road corridor features a mix of established neighborhoods and new developments. This area provides easy access to shopping, dining, and services while maintaining a suburban feel. We serve homeowners throughout this corridor with fast, reliable service.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[hsl(215,70%,25%)] mb-4 mt-8" data-testid="attractions-title">
                  Local Attractions & Outdoor Recreation
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="attraction-saguaro-title">
                      Saguaro National Park East
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="attraction-saguaro-description">
                      Saguaro National Park's Rincon Mountain District offers world-class hiking, scenic drives, and incredible desert landscapes. The park's eastern section features the famous Cactus Forest Loop Drive and numerous trails showcasing the iconic saguaro cacti. East Tucson residents enjoy year-round access to this natural treasure.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="attraction-colossal-title">
                      Colossal Cave Mountain Park
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="attraction-colossal-description">
                      This historic landmark offers fascinating cave tours, hiking trails, and a glimpse into Arizona's natural and cultural history. The park is a popular destination for families and visitors exploring the unique geology of the Sonoran Desert.
                    </p>
                  </div>

                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="attraction-rincon-title">
                      Rincon Mountains
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="attraction-rincon-description">
                      The dramatic Rincon Mountains provide a stunning backdrop to East Tucson and offer exceptional hiking, wildlife viewing, and photography opportunities. The mountains create a unique microclimate that influences local weather patterns and provides cooler temperatures at higher elevations.
                    </p>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-white rounded-lg border-2 border-[hsl(25,85%,55%)]">
                  <h3 className="text-2xl font-bold text-[hsl(215,70%,25%)] mb-4" data-testid="why-choose-title">
                    Why East Tucson Residents Choose Intelligent Design
                  </h3>
                  <ul className="space-y-3 text-[hsl(215,10%,40%)]">
                    <li className="flex items-start" data-testid="benefit-local">
                      <MapPin className="h-5 w-5 text-[hsl(25,85%,55%)] mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Local Expertise:</strong> Serving East Tucson since 1979, we understand the unique needs of homes in this area from newer Rita Ranch developments to established Tanque Verde properties.</span>
                    </li>
                    <li className="flex items-start" data-testid="benefit-response">
                      <Clock className="h-5 w-5 text-[hsl(25,85%,55%)] mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Fast Response Times:</strong> Our location enables quick service throughout East Tucson including same-day appointments and 1-2 hour emergency response.</span>
                    </li>
                    <li className="flex items-start" data-testid="benefit-quality">
                      <Phone className="h-5 w-5 text-[hsl(25,85%,55%)] mr-3 mt-1 flex-shrink-0" />
                      <span><strong>BBB A+ Rated:</strong> Over 22,000 five-star reviews from satisfied customers throughout the Tucson area demonstrate our commitment to excellence.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-lg text-[hsl(215,10%,40%)] mb-6" data-testid="service-coverage-text">
                    Whether you're in Rita Ranch, Tanque Verde Valley, Corona De Tucson, or anywhere in East Tucson, we're here to provide exceptional home services when you need them most.
                  </p>
                  <SchedulerEmbed />
                </div>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-4" data-testid="faq-title">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-lg text-[hsl(215,10%,40%)]" data-testid="faq-subtitle">
                    Common questions about our East Tucson services
                  </p>
                </div>
                <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
                  <AccordionItem value="item-1" data-testid="faq-item-1">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-1">
                      Do you serve East Tucson, Arizona?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-1">
                      Yes! We proudly serve all of East Tucson including Tanque Verde Valley, Rita Ranch, Corona De Tucson, and the Harrison Road corridor. East Tucson is one of our primary service areas. We provide same-day service for HVAC, plumbing, solar, electrical, and roofing needs throughout the community.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" data-testid="faq-item-2">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-2">
                      What areas of East Tucson do you cover?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-2">
                      We serve all neighborhoods in East Tucson including Rita Ranch, Tanque Verde Valley, Corona De Tucson, areas along Harrison Road, neighborhoods near Saguaro National Park East, and communities near the Rincon Mountains. Our service area extends throughout eastern Tucson and the surrounding foothills.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" data-testid="faq-item-3">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-3">
                      What services do you offer in East Tucson?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-3">
                      We offer complete home services including air conditioning repair and installation, heating services, plumbing repairs and installations, solar panel systems, electrical services, roofing, and drain & sewer services. From routine maintenance to emergency repairs and new installations, we handle it all for East Tucson homes.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" data-testid="faq-item-4">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-4">
                      How quickly can you respond to East Tucson service calls?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-4">
                      We offer fast response times throughout East Tucson. For emergency calls, we typically arrive within 1-2 hours. For scheduled appointments, we offer same-day and next-day service. Our location allows us to serve the entire East Tucson area quickly and efficiently.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" data-testid="faq-item-5">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-5">
                      Do you offer emergency service in East Tucson?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-5">
                      Absolutely! We provide 24/7 emergency service for HVAC, plumbing, and electrical emergencies throughout East Tucson. Whether it's a broken AC in summer heat, a plumbing leak, or an electrical issue, call us anytime at (520) 333-2665 for immediate assistance.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" data-testid="faq-item-6">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-6">
                      Are you familiar with homes in the Rita Ranch and Tanque Verde areas?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-6">
                      Yes! We've been serving Rita Ranch, Tanque Verde, and all of East Tucson since 1979. We're very familiar with the home construction styles, common issues, and specific needs of properties in this area. Our technicians have extensive experience working with both newer developments and established neighborhoods.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" data-testid="faq-item-7">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-7">
                      Do you work on all brands of HVAC systems in East Tucson?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-7">
                      Yes! Our expert technicians are trained to service and repair all major HVAC brands. Whether you have Carrier, Trane, Lennox, Goodman, or any other brand, we have the expertise to keep your system running efficiently in East Tucson's desert climate.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" data-testid="faq-item-8">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-8">
                      Can you help with solar installation in East Tucson?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-8">
                      Definitely! East Tucson's sunny location is perfect for solar energy. We offer residential and commercial solar panel installations, solar AC systems, and ongoing maintenance. We'll help you maximize federal tax credits and local incentives while reducing your energy bills.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9" data-testid="faq-item-9">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-9">
                      Do you offer financing for major projects in East Tucson?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-9">
                      Yes! We offer flexible financing options for HVAC replacements, solar installations, water heater upgrades, and other major home improvements. We work with multiple financing partners to provide payment plans that fit your budget.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10" data-testid="faq-item-10">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-10">
                      What are your service hours for East Tucson?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-10">
                      Our office is open Monday-Friday 8:00 AM to 5:00 PM, and Saturday 8:00 AM to 2:00 PM. However, we offer 24/7 emergency service for urgent situations. You can reach us anytime at (520) 333-2665 for immediate assistance in East Tucson.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-16 md:py-20 bg-[hsl(215,70%,25%)] text-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="final-cta-title">
                Ready to Experience Superior Service?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto" data-testid="final-cta-description">
                Join thousands of satisfied East Tucson homeowners who trust Intelligent Design for all their home service needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[hsl(25,85%,55%)] hover:bg-[hsl(25,85%,45%)] text-white text-lg px-8 py-6"
                  data-testid="final-cta-call"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (520) 333-2665
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white backdrop-blur-sm bg-white/10 hover:bg-white/20 text-lg px-8 py-6"
                  data-testid="final-cta-schedule"
                >
                  Schedule Online
                </Button>
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
