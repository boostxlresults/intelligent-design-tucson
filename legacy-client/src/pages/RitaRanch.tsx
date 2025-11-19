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
import heroImage from "@assets/generated_images/Rita_Ranch_Vail_community_bf9d84f1.png";

export default function RitaRanch() {
  const description = "Professional home services in Rita Ranch, southeast Tucson. HVAC, plumbing, solar, electrical & roofing for growing families. Same-day service. BBB A+ rated.";
  const imageUrl = `${SITE_URL}${heroImage}`;

  useEffect(() => {

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you serve Rita Ranch, Arizona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We proudly serve all of Rita Ranch and the surrounding Vail area. Located in southeast Tucson, Rita Ranch is one of our key service areas. We provide same-day service for HVAC, plumbing, solar, electrical, and roofing needs throughout this growing community."
          }
        },
        {
          "@type": "Question",
          "name": "What services do you offer in Rita Ranch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer complete home services including air conditioning repair and installation, heating services, plumbing repairs and installations, solar panel systems, electrical services, roofing, and drain & sewer services. From routine maintenance to emergency repairs and new installations, we handle it all for Rita Ranch families."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can you respond to Rita Ranch service calls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer fast response times throughout Rita Ranch and the Vail corridor. For emergency calls, we typically arrive within 1-2 hours. For scheduled appointments, we offer same-day and next-day service. Our location allows us to serve Rita Ranch homeowners quickly and efficiently."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer emergency service in Rita Ranch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We provide 24/7 emergency service for HVAC, plumbing, and electrical emergencies in Rita Ranch. Whether it's a broken AC in summer heat, a plumbing leak, or an electrical issue, call us anytime at (520) 333-2665 for immediate assistance."
          }
        },
        {
          "@type": "Question",
          "name": "Are you licensed to work in Rita Ranch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We hold all necessary Arizona state licenses for HVAC, plumbing, electrical, solar, and roofing work. Our technicians are fully licensed, bonded, and insured. We're also BBB A+ rated, ensuring the highest standards of quality and professionalism for Rita Ranch homeowners."
          }
        },
        {
          "@type": "Question",
          "name": "Why is Rita Ranch a great place for solar panels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rita Ranch's sunny southeast Tucson location provides excellent solar potential year-round. With abundant sunshine and newer homes designed for energy efficiency, solar panels can significantly reduce your utility bills. We help Rita Ranch homeowners maximize federal tax credits and local incentives."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work on newer homes in Rita Ranch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Rita Ranch features many newer homes, and our technicians are experienced with modern HVAC systems, plumbing fixtures, electrical panels, and energy-efficient installations. We're familiar with the construction standards and systems common in Rita Ranch's planned community."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with HVAC maintenance for Rita Ranch homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Definitely! Regular HVAC maintenance is essential in the desert climate. We offer comprehensive tune-ups, filter changes, duct cleaning, and system inspections. Our Family Protection Plans provide scheduled maintenance to keep your Rita Ranch home comfortable and energy-efficient year-round."
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
          "name": "What are your service hours for Rita Ranch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our office is open Monday-Friday 8:00 AM to 5:00 PM, and Saturday 8:00 AM to 2:00 PM. However, we offer 24/7 emergency service for urgent situations. You can reach us anytime at (520) 333-2665 for immediate assistance."
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
          "name": "Rita Ranch Services",
          "item": "https://www.idesignac.com/rita-ranch"
        }
      ]
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Intelligent Design Air Conditioning, Plumbing, Solar & Electric",
      "image": imageUrl,
      "description": description,
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
      "telephone": "+1-520-333-2665",
      "priceRange": "$$",
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
      "areaServed": {
        "@type": "City",
        "name": "Rita Ranch"
      }
    };

    const schemas = [
      { id: 'faq-schema', data: faqSchema, attr: 'faq' },
      { id: 'breadcrumb-schema', data: breadcrumbSchema, attr: 'breadcrumb' },
      { id: 'local-business-schema', data: localBusinessSchema, attr: 'local-business' }
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
      description: "Expert AC repair, installation, and maintenance for Rita Ranch homes.",
      link: "/hvac-rita-ranch"
    },
    {
      icon: Flame,
      title: "Heating",
      description: "Reliable heating services to keep your family comfortable year-round.",
      link: "/heating-rita-ranch"
    },
    {
      icon: Droplet,
      title: "Plumbing",
      description: "Complete plumbing services from leak repairs to fixture installations.",
      link: "/plumbing-rita-ranch"
    },
    {
      icon: Sun,
      title: "Solar",
      description: "Professional solar panel installation and maintenance.",
      link: "/solar-installation-rita-ranch"
    },
    {
      icon: Zap,
      title: "Electrical",
      description: "Licensed electrical services including panel upgrades and repairs.",
      link: "/electrical-rita-ranch"
    },
    {
      icon: HomeIcon,
      title: "Roofing",
      description: "Expert roof repair, installation, and coating services.",
      link: "/roofing-rita-ranch"
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
        title="HVAC, Plumbing, Solar, Electrical & Roofing Services in Rita Ranch, AZ"
        description={description}
        canonical="https://www.idesignac.com/rita-ranch"
        robots="index, follow, max-image-preview:large"
        openGraph={[
          { property: 'og:title', content: 'HVAC, Plumbing, Solar, Electrical & Roofing Services in Rita Ranch, AZ' },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: 'https://www.idesignac.com/rita-ranch' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: 'Rita Ranch Vail community residential area' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'HVAC, Plumbing, Solar, Electrical & Roofing Services in Rita Ranch, AZ' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Rita Ranch Vail community residential area' }
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
                alt="Rita Ranch Vail community residential area"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,70%,25%)]/90 to-[hsl(215,70%,25%)]/60"></div>
            </div>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="hero-title">
                  HVAC, Plumbing, Solar, Electrical & Roofing Services in Rita Ranch, AZ
                </h1>
                <p className="text-lg text-white/80 mb-8" data-testid="hero-description">
                  Serving Rita Ranch's growing families with expert home services since 1979
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
                  Complete Home Services in Rita Ranch
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

          {/* About Rita Ranch Section */}
          <section className="py-16 md:py-20 bg-[hsl(215,15%,92%)]">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-6" data-testid="about-rita-ranch-title">
                  About Rita Ranch, Arizona
                </h2>
                <p className="text-lg text-[hsl(215,10%,40%)] mb-6" data-testid="about-rita-ranch-description">
                  Rita Ranch is a family-friendly master-planned community located in southeast Tucson along the Vail corridor. This vibrant neighborhood features newer homes, excellent schools, and abundant recreational opportunities, making it one of Tucson's most desirable places to raise a family.
                </p>
                
                <h3 className="text-2xl font-bold text-[hsl(215,70%,25%)] mb-4 mt-8" data-testid="attractions-title">
                  Local Attractions & Activities
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="attraction-community-park-title">
                      Rita Ranch Community Park
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="attraction-community-park-description">
                      This beautiful community park features playgrounds, sports fields, ramadas, and walking paths. It's a popular gathering spot for Rita Ranch families and hosts various community events throughout the year.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="attraction-colossal-cave-title">
                      Colossal Cave Mountain Park
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="attraction-colossal-cave-description">
                      Just minutes from Rita Ranch, Colossal Cave offers guided cave tours, hiking trails, horseback riding, and a petting zoo. This historic landmark provides unique educational and recreational experiences for the whole family.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="attraction-vail-schools-title">
                      Vail School District
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="attraction-vail-schools-description">
                      Rita Ranch is served by the highly-rated Vail School District, known for its excellent academic programs, innovative learning approaches, and strong community involvement. The district consistently ranks among Arizona's top-performing school systems.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="attraction-i10-access-title">
                      Convenient I-10 Access
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="attraction-i10-access-description">
                      Rita Ranch offers easy access to Interstate 10, providing convenient commutes to downtown Tucson, Davis-Monthan Air Force Base, and beyond. The location provides the perfect balance of peaceful suburban living with urban accessibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-8 text-center" data-testid="faq-title">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-[hsl(215,15%,92%)] rounded-lg px-6" data-testid="faq-item-1">
                    <AccordionTrigger className="text-left font-semibold">
                      Do you serve Rita Ranch, Arizona?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Yes! We proudly serve all of Rita Ranch and the surrounding Vail area. Located in southeast Tucson, Rita Ranch is one of our key service areas. We provide same-day service for HVAC, plumbing, solar, electrical, and roofing needs throughout this growing community.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-[hsl(215,15%,92%)] rounded-lg px-6" data-testid="faq-item-2">
                    <AccordionTrigger className="text-left font-semibold">
                      What services do you offer in Rita Ranch?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      We offer complete home services including air conditioning repair and installation, heating services, plumbing repairs and installations, solar panel systems, electrical services, roofing, and drain & sewer services. From routine maintenance to emergency repairs and new installations, we handle it all for Rita Ranch families.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-[hsl(215,15%,92%)] rounded-lg px-6" data-testid="faq-item-3">
                    <AccordionTrigger className="text-left font-semibold">
                      How quickly can you respond to Rita Ranch service calls?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      We offer fast response times throughout Rita Ranch and the Vail corridor. For emergency calls, we typically arrive within 1-2 hours. For scheduled appointments, we offer same-day and next-day service. Our location allows us to serve Rita Ranch homeowners quickly and efficiently.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-[hsl(215,15%,92%)] rounded-lg px-6" data-testid="faq-item-4">
                    <AccordionTrigger className="text-left font-semibold">
                      Do you offer emergency service in Rita Ranch?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Absolutely! We provide 24/7 emergency service for HVAC, plumbing, and electrical emergencies in Rita Ranch. Whether it's a broken AC in summer heat, a plumbing leak, or an electrical issue, call us anytime at (520) 333-2665 for immediate assistance.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-[hsl(215,15%,92%)] rounded-lg px-6" data-testid="faq-item-5">
                    <AccordionTrigger className="text-left font-semibold">
                      Are you licensed to work in Rita Ranch?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Yes! We hold all necessary Arizona state licenses for HVAC, plumbing, electrical, solar, and roofing work. Our technicians are fully licensed, bonded, and insured. We're also BBB A+ rated, ensuring the highest standards of quality and professionalism for Rita Ranch homeowners.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="bg-[hsl(215,15%,92%)] rounded-lg px-6" data-testid="faq-item-6">
                    <AccordionTrigger className="text-left font-semibold">
                      Why is Rita Ranch a great place for solar panels?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Rita Ranch's sunny southeast Tucson location provides excellent solar potential year-round. With abundant sunshine and newer homes designed for energy efficiency, solar panels can significantly reduce your utility bills. We help Rita Ranch homeowners maximize federal tax credits and local incentives.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="bg-[hsl(215,15%,92%)] rounded-lg px-6" data-testid="faq-item-7">
                    <AccordionTrigger className="text-left font-semibold">
                      Do you work on newer homes in Rita Ranch?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Yes! Rita Ranch features many newer homes, and our technicians are experienced with modern HVAC systems, plumbing fixtures, electrical panels, and energy-efficient installations. We're familiar with the construction standards and systems common in Rita Ranch's planned community.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" className="bg-[hsl(215,15%,92%)] rounded-lg px-6" data-testid="faq-item-8">
                    <AccordionTrigger className="text-left font-semibold">
                      Can you help with HVAC maintenance for Rita Ranch homes?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Definitely! Regular HVAC maintenance is essential in the desert climate. We offer comprehensive tune-ups, filter changes, duct cleaning, and system inspections. Our Family Protection Plans provide scheduled maintenance to keep your Rita Ranch home comfortable and energy-efficient year-round.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9" className="bg-[hsl(215,15%,92%)] rounded-lg px-6" data-testid="faq-item-9">
                    <AccordionTrigger className="text-left font-semibold">
                      Do you offer financing for major projects?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Yes! We offer flexible financing options for HVAC replacements, solar installations, water heater upgrades, and other major home improvements. We work with multiple financing partners to provide payment plans that fit your budget.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10" className="bg-[hsl(215,15%,92%)] rounded-lg px-6" data-testid="faq-item-10">
                    <AccordionTrigger className="text-left font-semibold">
                      What are your service hours for Rita Ranch?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Our office is open Monday-Friday 8:00 AM to 5:00 PM, and Saturday 8:00 AM to 2:00 PM. However, we offer 24/7 emergency service for urgent situations. You can reach us anytime at (520) 333-2665 for immediate assistance.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* NAP & Contact Section */}
          <section className="py-16 md:py-20 bg-[hsl(215,15%,92%)]">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-8 text-center" data-testid="contact-title">
                  Contact Intelligent Design
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card data-testid="contact-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-[hsl(25,85%,55%)]" />
                        Serving Rita Ranch
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="font-semibold text-[hsl(215,70%,25%)]" data-testid="contact-name">
                          Intelligent Design Air Conditioning, Plumbing, Solar & Electric
                        </p>
                        <p className="text-[hsl(215,10%,40%)]">1145 E Fort Lowell Rd</p>
                        <p className="text-[hsl(215,10%,40%)]">Tucson, AZ 85719</p>
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
                        Expert service for your Rita Ranch home. Same-day appointments available!
                      </p>
                      <Button
                        size="lg"
                        className="w-full bg-[hsl(25,85%,55%)] hover:bg-[hsl(25,85%,45%)] text-white"
                        data-testid="cta-call-service"
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
                Ready for Expert Service in Rita Ranch?
              </h2>
              <p className="text-xl mb-8 text-white/90" data-testid="final-cta-description">
                Join your Rita Ranch neighbors in experiencing the Intelligent Design difference.
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
