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
import heroImage from "@assets/generated_images/Tanque_Verde_residential_community_80a4563e.png";

export default function TanqueVerde() {
  const description = "Trusted home services in Tanque Verde, east Tucson. HVAC, plumbing, solar, electrical & roofing. Serving families near Saguaro National Park. Same-day service available.";
  const imageUrl = `${SITE_URL}${heroImage}`;

  useEffect(() => {

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you serve Tanque Verde, Arizona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We proudly serve all of Tanque Verde and the surrounding areas in east Tucson. Tanque Verde is one of our primary service areas. We provide same-day service for HVAC, plumbing, solar, electrical, and roofing needs throughout this beautiful desert community."
          }
        },
        {
          "@type": "Question",
          "name": "What services do you offer in Tanque Verde?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer complete home services including air conditioning repair and installation, heating services, plumbing repairs and installations, solar panel systems, electrical services, roofing, and drain & sewer services. From routine maintenance to emergency repairs and new installations, we handle it all for Tanque Verde residents."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can you respond to Tanque Verde service calls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer fast response times throughout Tanque Verde. For emergency calls, we typically arrive within 1-2 hours. For scheduled appointments, we offer same-day and next-day service. Our location allows us to serve the Tanque Verde area quickly and efficiently."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer emergency service in Tanque Verde?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We provide 24/7 emergency service for HVAC, plumbing, and electrical emergencies in Tanque Verde. Whether it's a broken AC in summer heat, a plumbing leak, or an electrical issue, call us anytime at (520) 333-2665 for immediate assistance."
          }
        },
        {
          "@type": "Question",
          "name": "Are you licensed to work in Tanque Verde?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We hold all necessary Arizona state licenses for HVAC, plumbing, electrical, solar, and roofing work. Our technicians are fully licensed, bonded, and insured. We're also BBB A+ rated, ensuring the highest standards of quality and professionalism for Tanque Verde homeowners."
          }
        },
        {
          "@type": "Question",
          "name": "What makes you different from other Tanque Verde contractors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We've been serving the Tanque Verde area since 1979 with comprehensive warranties, upfront pricing, and 100% satisfaction guarantees. With over 22,000 five-star reviews, our reputation speaks for itself. We're a family-owned business committed to treating your home with the care it deserves."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work on all brands of HVAC systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Our expert technicians are trained to service and repair all major HVAC brands. Whether you have Carrier, Trane, Lennox, Goodman, or any other brand, we have the expertise to keep your system running efficiently in Tanque Verde's desert climate."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with solar installation in Tanque Verde?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Definitely! Tanque Verde's sunny location is perfect for solar energy. We offer residential and commercial solar panel installations, solar AC systems, and ongoing maintenance. We'll help you maximize federal tax credits and local incentives while reducing your energy bills."
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
          "name": "What are your service hours for Tanque Verde?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our office is open Monday-Friday 8:00 AM to 5:00 PM, and Saturday 8:00 AM to 2:00 PM. However, we offer 24/7 emergency service for urgent situations. You can reach us anytime at (520) 333-2665 for immediate assistance in Tanque Verde."
          }
        }
      ]
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Intelligent Design Heating & Cooling - Tanque Verde",
      "image": imageUrl,
      "@id": "https://www.idesignac.com/tanque-verde",
      "url": "https://www.idesignac.com/tanque-verde",
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
          "name": "Tanque Verde Services",
          "item": "https://www.idesignac.com/tanque-verde"
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
      description: "Expert AC repair, installation, and maintenance for Tanque Verde homes.",
      link: "/hvac-tanque-verde"
    },
    {
      icon: Flame,
      title: "Heating",
      description: "Reliable heating services to keep your family comfortable year-round.",
      link: "/heating-tanque-verde"
    },
    {
      icon: Droplet,
      title: "Plumbing",
      description: "Complete plumbing services from leak repairs to fixture installations.",
      link: "/plumbing-tanque-verde"
    },
    {
      icon: Sun,
      title: "Solar",
      description: "Professional solar panel installation and maintenance.",
      link: "/solar-installation-tanque-verde"
    },
    {
      icon: Zap,
      title: "Electrical",
      description: "Licensed electrical services including panel upgrades and repairs.",
      link: "/electrical-tanque-verde"
    },
    {
      icon: HomeIcon,
      title: "Roofing",
      description: "Expert roof repair, installation, and coating services.",
      link: "/roofing-tanque-verde"
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
        title="HVAC, Plumbing, Solar, Electrical & Roofing Services in Tanque Verde, AZ | Intelligent Design"
        description={description}
        canonical="https://www.idesignac.com/tanque-verde"
        openGraph={[
          { property: 'og:title', content: 'HVAC, Plumbing, Solar, Electrical & Roofing Services in Tanque Verde, AZ | Intelligent Design' },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: 'https://www.idesignac.com/tanque-verde' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: 'Tanque Verde Arizona residential community' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'HVAC, Plumbing, Solar, Electrical & Roofing Services in Tanque Verde, AZ | Intelligent Design' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Tanque Verde Arizona residential community' }
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
                alt="Tanque Verde Arizona residential community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,70%,25%)]/90 to-[hsl(215,70%,25%)]/60"></div>
            </div>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="hero-title">
                  HVAC, Plumbing, Solar, Electrical & Roofing Services in Tanque Verde, AZ
                </h1>
                <p className="text-lg text-white/80 mb-8" data-testid="hero-description">
                  Trusted home services for Tanque Verde families near Saguaro National Park East
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
                  Complete Home Services in Tanque Verde
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

          {/* About Tanque Verde Section */}
          <section className="py-16 md:py-20 bg-[hsl(215,15%,92%)]">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-6" data-testid="about-tanque-verde-title">
                  About Tanque Verde, Arizona
                </h2>
                <p className="text-lg text-[hsl(215,10%,40%)] mb-6" data-testid="about-tanque-verde-description">
                  Tanque Verde is a scenic area in eastern Tucson known for its natural beauty, outdoor recreation opportunities, and family-friendly neighborhoods. Situated at the base of the Rincon Mountains and adjacent to Saguaro National Park East, this community offers residents a unique desert lifestyle with convenient access to hiking, wildlife viewing, and stunning desert landscapes. The area features a mix of established homes and newer developments, attracting families and outdoor enthusiasts who value the peaceful atmosphere and proximity to nature.
                </p>
                
                <h3 className="text-2xl font-bold text-[hsl(215,70%,25%)] mb-4 mt-8" data-testid="area-highlights-title">
                  What Makes Tanque Verde Special
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="highlight-location-title">
                      Prime Eastern Tucson Location
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="highlight-location-description">
                      Tanque Verde's location along Wentworth Road and Tanque Verde Road provides easy access to both natural areas and urban amenities. Residents enjoy a suburban lifestyle with convenient shopping, dining, and services while being minutes away from hiking trails and outdoor recreation. The area's elevation provides slightly cooler temperatures and stunning mountain views.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="highlight-schools-title">
                      Excellent Schools & Family-Friendly Environment
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="highlight-schools-description">
                      Tanque Verde is known for its quality schools and safe neighborhoods, making it a popular choice for families. The area features parks, recreational facilities, and community events that bring neighbors together. Many homes feature larger lots and desert landscaping that blends seamlessly with the surrounding natural environment.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="highlight-outdoor-title">
                      Outdoor Recreation Paradise
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="highlight-outdoor-description">
                      For outdoor enthusiasts, Tanque Verde is unmatched. The area provides direct access to world-class hiking, mountain biking, horseback riding, and wildlife viewing. From gentle nature walks to challenging mountain climbs, there's something for every fitness level. The proximity to Saguaro National Park East makes it easy to enjoy Arizona's natural beauty year-round.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[hsl(215,70%,25%)] mb-4 mt-8" data-testid="attractions-title">
                  Local Attractions & Natural Wonders
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="attraction-saguaro-title">
                      Saguaro National Park East
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="attraction-saguaro-description">
                      Saguaro National Park's Rincon Mountain District is right in Tanque Verde's backyard. This stunning national park showcases thousands of iconic saguaro cacti, the symbol of the American Southwest. The Cactus Forest Loop Drive offers a scenic tour through dense saguaro forests, while numerous hiking trails range from easy walks to challenging backcountry adventures. The park provides exceptional opportunities for photography, bird watching, and experiencing the unique Sonoran Desert ecosystem.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="attraction-falls-title">
                      Tanque Verde Falls
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="attraction-falls-description">
                      Tanque Verde Falls is a beloved local destination, especially during Arizona's winter and spring months when water flows create seasonal waterfalls and natural pools. The moderate hike to the falls is popular with families and offers beautiful desert scenery along Tanque Verde Creek. It's a perfect example of how the area's natural features provide year-round recreation opportunities right in your neighborhood.
                    </p>
                  </div>

                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="attraction-rincon-title">
                      Rincon Mountains
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="attraction-rincon-description">
                      The Rincon Mountains provide a dramatic backdrop to Tanque Verde and influence the area's unique climate and ecosystem. These mountains offer extensive hiking trails, including routes that climb from desert floor to pine forests at higher elevations. The elevation gain creates "sky islands" of different plant and animal life, making every hike a journey through multiple ecological zones. The mountains also help create cooler microclimates in Tanque Verde compared to central Tucson.
                    </p>
                  </div>

                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="attraction-loop-title">
                      The Loop Trail System
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="attraction-loop-description">
                      Tanque Verde residents enjoy easy access to The Loop, Tucson's premier multi-use pathway system. This paved trail network is perfect for cycling, running, and walking, connecting neighborhoods and providing car-free recreation routes. The eastern section of The Loop passes through Tanque Verde, offering scenic views and safe outdoor exercise opportunities for all ages.
                    </p>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-white rounded-lg border-2 border-[hsl(25,85%,55%)]">
                  <h3 className="text-2xl font-bold text-[hsl(215,70%,25%)] mb-4" data-testid="why-choose-title">
                    Why Tanque Verde Residents Choose Intelligent Design
                  </h3>
                  <ul className="space-y-3 text-[hsl(215,10%,40%)]">
                    <li className="flex items-start" data-testid="benefit-local">
                      <MapPin className="h-5 w-5 text-[hsl(25,85%,55%)] mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Local Knowledge:</strong> We've been serving Tanque Verde since 1979, understanding the unique needs of homes in this desert environment from older established properties to newer developments.</span>
                    </li>
                    <li className="flex items-start" data-testid="benefit-response">
                      <Clock className="h-5 w-5 text-[hsl(25,85%,55%)] mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Quick Service:</strong> Our location enables fast response throughout Tanque Verde with same-day appointments and 1-2 hour emergency response times when you need us most.</span>
                    </li>
                    <li className="flex items-start" data-testid="benefit-trust">
                      <Phone className="h-5 w-5 text-[hsl(25,85%,55%)] mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Trusted Excellence:</strong> With over 22,000 five-star reviews and BBB A+ rating, we've earned the confidence of families throughout the Tucson area through consistent quality and integrity.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-lg text-[hsl(215,10%,40%)] mb-6" data-testid="service-coverage-text">
                    Whether your home is near Wentworth Road, along Tanque Verde Road, or in the neighborhoods surrounding Saguaro National Park, we're here to provide exceptional home services with the care and expertise your family deserves.
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
                    Common questions about our Tanque Verde services
                  </p>
                </div>
                <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
                  <AccordionItem value="item-1" data-testid="faq-item-1">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-1">
                      Do you serve Tanque Verde, Arizona?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-1">
                      Yes! We proudly serve all of Tanque Verde and the surrounding areas in east Tucson. Tanque Verde is one of our primary service areas. We provide same-day service for HVAC, plumbing, solar, electrical, and roofing needs throughout this beautiful desert community.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" data-testid="faq-item-2">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-2">
                      What services do you offer in Tanque Verde?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-2">
                      We offer complete home services including air conditioning repair and installation, heating services, plumbing repairs and installations, solar panel systems, electrical services, roofing, and drain & sewer services. From routine maintenance to emergency repairs and new installations, we handle it all for Tanque Verde residents.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" data-testid="faq-item-3">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-3">
                      How quickly can you respond to Tanque Verde service calls?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-3">
                      We offer fast response times throughout Tanque Verde. For emergency calls, we typically arrive within 1-2 hours. For scheduled appointments, we offer same-day and next-day service. Our location allows us to serve the Tanque Verde area quickly and efficiently.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" data-testid="faq-item-4">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-4">
                      Do you offer emergency service in Tanque Verde?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-4">
                      Absolutely! We provide 24/7 emergency service for HVAC, plumbing, and electrical emergencies in Tanque Verde. Whether it's a broken AC in summer heat, a plumbing leak, or an electrical issue, call us anytime at (520) 333-2665 for immediate assistance.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" data-testid="faq-item-5">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-5">
                      Are you licensed to work in Tanque Verde?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-5">
                      Yes! We hold all necessary Arizona state licenses for HVAC, plumbing, electrical, solar, and roofing work. Our technicians are fully licensed, bonded, and insured. We're also BBB A+ rated, ensuring the highest standards of quality and professionalism for Tanque Verde homeowners.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" data-testid="faq-item-6">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-6">
                      What makes you different from other Tanque Verde contractors?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-6">
                      We've been serving the Tanque Verde area since 1979 with comprehensive warranties, upfront pricing, and 100% satisfaction guarantees. With over 22,000 five-star reviews, our reputation speaks for itself. We're a family-owned business committed to treating your home with the care it deserves.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" data-testid="faq-item-7">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-7">
                      Do you work on all brands of HVAC systems?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-7">
                      Yes! Our expert technicians are trained to service and repair all major HVAC brands. Whether you have Carrier, Trane, Lennox, Goodman, or any other brand, we have the expertise to keep your system running efficiently in Tanque Verde's desert climate.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" data-testid="faq-item-8">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-8">
                      Can you help with solar installation in Tanque Verde?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-8">
                      Definitely! Tanque Verde's sunny location is perfect for solar energy. We offer residential and commercial solar panel installations, solar AC systems, and ongoing maintenance. We'll help you maximize federal tax credits and local incentives while reducing your energy bills.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9" data-testid="faq-item-9">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-9">
                      Do you offer financing for major projects?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-9">
                      Yes! We offer flexible financing options for HVAC replacements, solar installations, water heater upgrades, and other major home improvements. We work with multiple financing partners to provide payment plans that fit your budget.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10" data-testid="faq-item-10">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-10">
                      What are your service hours for Tanque Verde?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-10">
                      Our office is open Monday-Friday 8:00 AM to 5:00 PM, and Saturday 8:00 AM to 2:00 PM. However, we offer 24/7 emergency service for urgent situations. You can reach us anytime at (520) 333-2665 for immediate assistance in Tanque Verde.
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
                Join thousands of satisfied Tanque Verde homeowners who trust Intelligent Design for all their home service needs.
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
