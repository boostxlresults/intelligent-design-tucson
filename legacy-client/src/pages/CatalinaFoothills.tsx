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
import heroImage from "@assets/generated_images/Catalina_Foothills_luxury_homes_dcaa70f9.png";

export default function CatalinaFoothills() {
  const description = "Luxury home services in Catalina Foothills. Expert HVAC, plumbing, solar, electrical & roofing for upscale homes. 24/7 emergency service. BBB A+ rated with 22,000+ reviews.";
  const imageUrl = `${SITE_URL}${heroImage}`;

  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you serve the Catalina Foothills area?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We proudly serve all of Catalina Foothills, one of Tucson's most prestigious communities. We specialize in providing premium home services for upscale residences, including HVAC, plumbing, solar, electrical, and roofing for luxury properties along Skyline Drive, Ventana Canyon, and throughout the Foothills."
          }
        },
        {
          "@type": "Question",
          "name": "What makes your service different for luxury homes in Catalina Foothills?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We understand the unique needs of luxury homes in Catalina Foothills. Our technicians are experienced with high-end HVAC systems, premium plumbing fixtures, advanced solar installations, and sophisticated electrical systems. We provide discreet, professional service that respects your property and privacy while delivering exceptional results."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can you respond to service calls in Catalina Foothills?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer priority service throughout Catalina Foothills. For emergency calls, we typically arrive within 1-2 hours. For scheduled appointments, we provide flexible scheduling including same-day service. Our proximity to the Foothills ensures prompt, reliable response times."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer 24/7 emergency service in Catalina Foothills?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We provide 24/7 emergency service for HVAC, plumbing, and electrical issues in Catalina Foothills. We understand that climate control emergencies can't wait in Arizona's extreme temperatures. Call us anytime at (520) 333-2665 for immediate assistance."
          }
        },
        {
          "@type": "Question",
          "name": "Are you experienced with high-end HVAC systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Our technicians are extensively trained on premium HVAC brands and advanced systems common in Catalina Foothills luxury homes. We service all major brands including Carrier Infinity, Trane, Lennox, and high-efficiency systems. We're also experienced with multi-zone systems and smart home integrations."
          }
        },
        {
          "@type": "Question",
          "name": "Can you install solar systems on luxury homes in Catalina Foothills?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Definitely! We specialize in premium solar installations designed for luxury homes. Our solar solutions are aesthetically integrated into your property while maximizing energy production. We handle all permits, HOA requirements, and ensure installations meet the high standards of Catalina Foothills residences."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with homeowners associations in Catalina Foothills?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We have extensive experience working within HOA guidelines common in Catalina Foothills communities. We handle all necessary documentation, approvals, and ensure our work meets or exceeds HOA requirements while maintaining the aesthetic standards of your community."
          }
        },
        {
          "@type": "Question",
          "name": "What financing options do you offer for major home upgrades?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer premium financing options for HVAC replacements, solar installations, whole-home electrical upgrades, and other major improvements. We work with multiple financing partners to provide flexible payment plans that fit your budget, with options for qualified homeowners."
          }
        },
        {
          "@type": "Question",
          "name": "Are your technicians background-checked and insured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! All our technicians are fully licensed, background-checked, bonded, and insured. We understand the importance of trust and security when servicing luxury homes. Our team maintains the highest standards of professionalism and discretion."
          }
        },
        {
          "@type": "Question",
          "name": "What are your service hours for Catalina Foothills?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our office is open Monday-Friday 8:00 AM to 5:00 PM, and Saturday 8:00 AM to 2:00 PM. We also offer 24/7 emergency service for urgent situations. Call us anytime at (520) 333-2665 for immediate assistance or to schedule a convenient appointment time."
          }
        }
      ]
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Intelligent Design Heating & Cooling - Catalina Foothills",
      "image": imageUrl,
      "@id": "https://www.idesignac.com/catalina-foothills",
      "url": "https://www.idesignac.com/catalina-foothills",
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
          "name": "Catalina Foothills Services",
          "item": "https://www.idesignac.com/catalina-foothills"
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
      description: "Premium AC services for luxury homes and high-end HVAC systems.",
      link: "/ac-repair-tucson"
    },
    {
      icon: Flame,
      title: "Heating",
      description: "Expert heating installation and maintenance for upscale residences.",
      link: "/heater-repair-tucson"
    },
    {
      icon: Droplet,
      title: "Plumbing",
      description: "Professional plumbing services for premium fixtures and systems.",
      link: "/plumbing-maintenance-tucson"
    },
    {
      icon: Sun,
      title: "Solar",
      description: "Sophisticated solar installations designed for luxury properties.",
      link: "/residential-solar-installation-tucson"
    },
    {
      icon: Zap,
      title: "Electrical",
      description: "Advanced electrical services for modern luxury homes.",
      link: "/electrical-repair-tucson"
    },
    {
      icon: HomeIcon,
      title: "Roofing",
      description: "Premium roofing services meeting the highest standards.",
      link: "/residential-roof-repair-tucson"
    },
    {
      icon: Wrench,
      title: "Drain & Sewer",
      description: "Expert drain and sewer services with minimal disruption.",
      link: "/drain-clearing-tucson"
    }
  ];

  return (
    <>
      <MetaHead
        title="Premium HVAC, Plumbing & Solar Services in Catalina Foothills, AZ"
        description={description}
        canonical="https://www.idesignac.com/catalina-foothills"
        robots="index, follow, max-image-preview:large"
        openGraph={[
          { property: 'og:title', content: 'Premium HVAC, Plumbing & Solar Services in Catalina Foothills, AZ' },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: 'https://www.idesignac.com/catalina-foothills' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: 'Catalina Foothills Arizona luxury homes' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Premium HVAC, Plumbing & Solar Services in Catalina Foothills, AZ' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Catalina Foothills Arizona luxury homes' }
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
                alt="Catalina Foothills Arizona luxury homes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,70%,25%)]/90 to-[hsl(215,70%,25%)]/60"></div>
            </div>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="hero-title">
                  Premium HVAC, Plumbing & Solar Services in Catalina Foothills, AZ
                </h1>
                <p className="text-lg text-white/80 mb-8" data-testid="hero-description">
                  Exceptional home services for Catalina Foothills' most distinguished properties
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
                  Premium Home Services in Catalina Foothills
                </h2>
                <p className="text-lg text-[hsl(215,10%,40%)]" data-testid="services-subtitle">
                  Specialized services for luxury residences
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    className="hover-elevate active-elevate-2 cursor-pointer overflow-visible"
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
                        data-testid={`cta-service-${index}`}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-12">
                <Button
                  size="lg"
                  className="bg-[hsl(25,85%,55%)] hover:bg-[hsl(25,85%,45%)] text-white"
                  data-testid="cta-view-all-services"
                >
                  View All Services
                </Button>
              </div>
            </div>
          </section>

          {/* About Catalina Foothills Section */}
          <section className="py-16 md:py-20 bg-[hsl(215,15%,92%)]">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-6" data-testid="about-catalina-foothills-title">
                  About Catalina Foothills, Arizona
                </h2>
                <p className="text-lg text-[hsl(215,10%,40%)] mb-6" data-testid="about-catalina-foothills-description">
                  Catalina Foothills is one of Arizona's most prestigious and desirable communities, renowned for its luxury estates, spectacular mountain views, and upscale lifestyle. Nestled against the stunning Santa Catalina Mountains, this unincorporated community north of Tucson features some of the most exclusive real estate in the Southwest. With world-class resorts, championship golf courses, fine dining, and exceptional shopping, the Foothills offers an unparalleled quality of life for discerning residents.
                </p>
                
                <h3 className="text-2xl font-bold text-[hsl(215,70%,25%)] mb-4 mt-8" data-testid="areas-title">
                  Premium Neighborhoods We Serve
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="area-skyline-title">
                      Skyline Drive Corridor
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="area-skyline-description">
                      The iconic Skyline Drive is home to luxury estates with panoramic views of the Tucson valley and surrounding mountains. This prestigious corridor features architectural masterpieces, gated communities, and properties designed by renowned architects. We provide specialized services for these high-end homes, understanding the unique requirements of luxury HVAC, plumbing, and electrical systems.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="area-ventana-title">
                      Ventana Canyon
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="area-ventana-description">
                      Ventana Canyon is an exclusive luxury resort community featuring custom homes, world-class golf courses, and the renowned Loews Ventana Canyon Resort. This prestigious area combines natural beauty with sophisticated amenities. Our team specializes in maintaining the advanced climate control and sophisticated home systems common in this elite community.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="area-sabino-title">
                      Sabino Canyon Area
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="area-sabino-description">
                      The neighborhoods surrounding Sabino Canyon offer stunning natural beauty combined with upscale living. Residents enjoy easy access to Sabino Canyon Recreation Area's world-renowned hiking trails and dramatic desert landscapes. We serve homes throughout this area with premium services designed for properties that demand the best.
                    </p>
                  </div>

                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="area-la-paloma-title">
                      La Paloma & Sunrise Drive
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="area-la-paloma-description">
                      The La Paloma area along Sunrise Drive features elegant estates, gated communities, and the prestigious Omni Tucson National Resort. This sophisticated neighborhood exemplifies Foothills luxury living. Our technicians are experienced with the high-performance HVAC systems and advanced home automation found in these exclusive properties.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[hsl(215,70%,25%)] mb-4 mt-8" data-testid="attractions-title">
                  Local Attractions & Amenities
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="attraction-sabino-canyon-title">
                      Sabino Canyon Recreation Area
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="attraction-sabino-canyon-description">
                      Sabino Canyon is one of Southern Arizona's most beloved natural treasures, offering spectacular hiking, wildlife viewing, and seasonal waterfalls. The paved road and tram service make the canyon accessible to all fitness levels. This stunning natural area is a major draw for Catalina Foothills residents who value outdoor recreation and natural beauty.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="attraction-la-encantada-title">
                      La Encantada Shopping Center
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="attraction-la-encantada-description">
                      La Encantada is an upscale outdoor shopping center featuring luxury retailers, fine dining, and stunning mountain views. With brands like Apple, Pottery Barn, Lululemon, and AJ's Fine Foods, it's the premier shopping destination for Foothills residents seeking quality and sophistication.
                    </p>
                  </div>

                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="attraction-golf-title">
                      World-Class Golf Courses
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="attraction-golf-description">
                      Catalina Foothills is home to several championship golf courses including Ventana Canyon Golf Club, Omni Tucson National, and La Paloma Country Club. These pristine courses offer challenging play against the backdrop of the Santa Catalina Mountains, attracting golf enthusiasts from around the world.
                    </p>
                  </div>

                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="attraction-mountains-title">
                      Santa Catalina Mountains
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="attraction-mountains-description">
                      The dramatic Santa Catalina Mountains provide a stunning natural backdrop to the Foothills. Mount Lemmon Highway offers a scenic drive to cooler elevations with hiking, skiing, and breathtaking views. The mountains create a unique environment that influences local climate and adds to the area's exceptional beauty.
                    </p>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-white rounded-lg border-2 border-[hsl(25,85%,55%)]">
                  <h3 className="text-2xl font-bold text-[hsl(215,70%,25%)] mb-4" data-testid="why-choose-title">
                    Why Catalina Foothills Homeowners Choose Intelligent Design
                  </h3>
                  <ul className="space-y-3 text-[hsl(215,10%,40%)]">
                    <li className="flex items-start" data-testid="benefit-luxury">
                      <MapPin className="h-5 w-5 text-[hsl(25,85%,55%)] mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Luxury Home Expertise:</strong> We specialize in serving high-end properties with advanced HVAC systems, premium fixtures, and sophisticated home automation. Our technicians understand the unique requirements of luxury homes.</span>
                    </li>
                    <li className="flex items-start" data-testid="benefit-discretion">
                      <Clock className="h-5 w-5 text-[hsl(25,85%,55%)] mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Professional Discretion:</strong> We provide discreet, professional service that respects your privacy and property. Our team is background-checked, fully insured, and trained to work in upscale environments.</span>
                    </li>
                    <li className="flex items-start" data-testid="benefit-excellence">
                      <Phone className="h-5 w-5 text-[hsl(25,85%,55%)] mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Excellence & Reliability:</strong> With over 22,000 five-star reviews and BBB A+ rating, we've earned the trust of Tucson's most discerning homeowners through consistent excellence and superior service.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-lg text-[hsl(215,10%,40%)] mb-6" data-testid="service-coverage-text">
                    From Skyline Drive to Ventana Canyon, Sabino Canyon to La Paloma, we provide exceptional home services throughout Catalina Foothills' most prestigious neighborhoods.
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
                    Common questions about our Catalina Foothills services
                  </p>
                </div>
                <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
                  <AccordionItem value="item-1" data-testid="faq-item-1">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-1">
                      Do you serve the Catalina Foothills area?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-1">
                      Yes! We proudly serve all of Catalina Foothills, one of Tucson's most prestigious communities. We specialize in providing premium home services for upscale residences, including HVAC, plumbing, solar, electrical, and roofing for luxury properties along Skyline Drive, Ventana Canyon, and throughout the Foothills.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" data-testid="faq-item-2">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-2">
                      What makes your service different for luxury homes in Catalina Foothills?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-2">
                      We understand the unique needs of luxury homes in Catalina Foothills. Our technicians are experienced with high-end HVAC systems, premium plumbing fixtures, advanced solar installations, and sophisticated electrical systems. We provide discreet, professional service that respects your property and privacy while delivering exceptional results.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" data-testid="faq-item-3">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-3">
                      How quickly can you respond to service calls in Catalina Foothills?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-3">
                      We offer priority service throughout Catalina Foothills. For emergency calls, we typically arrive within 1-2 hours. For scheduled appointments, we provide flexible scheduling including same-day service. Our proximity to the Foothills ensures prompt, reliable response times.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" data-testid="faq-item-4">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-4">
                      Do you offer 24/7 emergency service in Catalina Foothills?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-4">
                      Absolutely! We provide 24/7 emergency service for HVAC, plumbing, and electrical issues in Catalina Foothills. We understand that climate control emergencies can't wait in Arizona's extreme temperatures. Call us anytime at (520) 333-2665 for immediate assistance.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" data-testid="faq-item-5">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-5">
                      Are you experienced with high-end HVAC systems?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-5">
                      Yes! Our technicians are extensively trained on premium HVAC brands and advanced systems common in Catalina Foothills luxury homes. We service all major brands including Carrier Infinity, Trane, Lennox, and high-efficiency systems. We're also experienced with multi-zone systems and smart home integrations.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" data-testid="faq-item-6">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-6">
                      Can you install solar systems on luxury homes in Catalina Foothills?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-6">
                      Definitely! We specialize in premium solar installations designed for luxury homes. Our solar solutions are aesthetically integrated into your property while maximizing energy production. We handle all permits, HOA requirements, and ensure installations meet the high standards of Catalina Foothills residences.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" data-testid="faq-item-7">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-7">
                      Do you work with homeowners associations in Catalina Foothills?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-7">
                      Yes! We have extensive experience working within HOA guidelines common in Catalina Foothills communities. We handle all necessary documentation, approvals, and ensure our work meets or exceeds HOA requirements while maintaining the aesthetic standards of your community.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" data-testid="faq-item-8">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-8">
                      What financing options do you offer for major home upgrades?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-8">
                      We offer premium financing options for HVAC replacements, solar installations, whole-home electrical upgrades, and other major improvements. We work with multiple financing partners to provide flexible payment plans that fit your budget, with options for qualified homeowners.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9" data-testid="faq-item-9">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-9">
                      Are your technicians background-checked and insured?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-9">
                      Yes! All our technicians are fully licensed, background-checked, bonded, and insured. We understand the importance of trust and security when servicing luxury homes. Our team maintains the highest standards of professionalism and discretion.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10" data-testid="faq-item-10">
                    <AccordionTrigger className="text-left" data-testid="faq-trigger-10">
                      What are your service hours for Catalina Foothills?
                    </AccordionTrigger>
                    <AccordionContent data-testid="faq-content-10">
                      Our office is open Monday-Friday 8:00 AM to 5:00 PM, and Saturday 8:00 AM to 2:00 PM. We also offer 24/7 emergency service for urgent situations. Call us anytime at (520) 333-2665 for immediate assistance or to schedule a convenient appointment time.
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
                Experience Premium Service Excellence
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto" data-testid="final-cta-description">
                Join Catalina Foothills' most discerning homeowners who trust Intelligent Design for exceptional home services.
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
