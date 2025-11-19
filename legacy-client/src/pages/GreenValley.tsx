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
import heroImage from "@assets/generated_images/Green_Valley_Arizona_scenic_views_75533cdf.webp";
import { Link } from "wouter";

export default function GreenValley() {
  const description = "Expert HVAC, plumbing, solar, electrical, roofing, and drain services in Green Valley. Serving this peaceful retirement community south of Tucson since 1979. 24/7 emergency service. BBB A+ rated with 22,000+ five-star reviews.";
  const imageUrl = `${SITE_URL}${heroImage}`;

  useEffect(() => {

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you serve Green Valley, Arizona?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We proudly serve all of Green Valley and the surrounding south Tucson area. This peaceful retirement community is one of our primary service areas. We provide comprehensive HVAC, plumbing, solar, electrical, roofing, and drain services throughout Green Valley and have been serving residents since 1979."
          }
        },
        {
          "@type": "Question",
          "name": "What services do you offer in Green Valley?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer complete home services including air conditioning repair and installation, heating systems, plumbing services, solar panel installations, electrical work, roofing services, and drain & sewer repairs. From routine maintenance to emergency repairs and new installations, our expert technicians handle every home service need."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can you respond to Green Valley service calls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer fast response times throughout Green Valley. For emergency situations, we typically arrive within 1-2 hours. For scheduled appointments, we provide same-day and next-day service options. Our proximity to Green Valley ensures quick and reliable service for your home."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer 24/7 emergency service in Green Valley?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We understand that home emergencies can happen at any time. We provide 24/7 emergency service for HVAC, plumbing, and electrical issues throughout Green Valley. Call us anytime at (520) 333-2665 for immediate assistance with AC breakdowns, plumbing leaks, or electrical problems."
          }
        },
        {
          "@type": "Question",
          "name": "Are you licensed to work in Green Valley?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We hold all necessary Arizona state licenses for HVAC, plumbing, electrical, solar, and roofing work. Our technicians are fully licensed, bonded, and insured. We're BBB A+ rated, ensuring the highest quality standards and professionalism for every job in Green Valley."
          }
        },
        {
          "@type": "Question",
          "name": "What makes you different from other Green Valley contractors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We've been serving Green Valley residents since 1979 with upfront pricing, comprehensive warranties, and 100% satisfaction guarantees. Our 22,000+ five-star reviews reflect our commitment to excellence. We understand the unique needs of Green Valley's retirement community and provide respectful, reliable service."
          }
        },
        {
          "@type": "Question",
          "name": "Do you service all HVAC brands?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Our factory-trained technicians service and repair all major HVAC brands including Carrier, Trane, Lennox, Goodman, Rheem, York, and more. No matter what brand or model you have, we have the expertise and experience to keep it running efficiently."
          }
        },
        {
          "@type": "Question",
          "name": "Can you install solar panels in Green Valley?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Green Valley's abundant Arizona sunshine makes it ideal for solar energy. We offer residential solar panel systems, solar AC installations, and ongoing maintenance. We'll help you maximize federal tax credits and local incentives to make solar energy affordable and beneficial."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer financing options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer flexible financing options for HVAC installations, solar projects, water heater replacements, and other major home improvements. We partner with multiple lenders to provide payment plans that fit your budget, making it easier to invest in your home's comfort and efficiency."
          }
        },
        {
          "@type": "Question",
          "name": "What are your service hours for Green Valley?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our office is open Monday-Friday 8:00 AM to 5:00 PM, and Saturday 8:00 AM to 2:00 PM for appointments and inquiries. However, we offer 24/7 emergency service for urgent HVAC, plumbing, and electrical needs. You can reach us anytime at (520) 333-2665 for immediate assistance."
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
          "name": "Green Valley Services",
          "item": "https://www.idesignac.com/green-valley"
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
      description: "Expert AC repair, installation, and maintenance for Green Valley homes.",
      link: "/hvac-green-valley"
    },
    {
      icon: Flame,
      title: "Heating",
      description: "Reliable heating services for comfortable desert winters.",
      link: "/heating-green-valley"
    },
    {
      icon: Droplet,
      title: "Plumbing",
      description: "Complete plumbing services from repairs to new installations.",
      link: "/plumbing-green-valley"
    },
    {
      icon: Sun,
      title: "Solar",
      description: "Professional solar panel installation and maintenance services.",
      link: "/solar-installation-green-valley"
    },
    {
      icon: Zap,
      title: "Electrical",
      description: "Licensed electrical services including upgrades and repairs.",
      link: "/electrical-green-valley"
    },
    {
      icon: HomeIcon,
      title: "Roofing",
      description: "Expert roof repair, installation, and coating services.",
      link: "/roofing-green-valley"
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
        title="HVAC, Plumbing, Solar, Electrical & Roofing Services in Green Valley, AZ"
        description={description}
        canonical="https://www.idesignac.com/green-valley"
        robots="index, follow, max-image-preview:large"
        openGraph={[
          { property: 'og:title', content: 'HVAC, Plumbing, Solar, Electrical & Roofing Services in Green Valley, AZ' },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: 'https://www.idesignac.com/green-valley' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: 'Green Valley Arizona scenic desert views' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'HVAC, Plumbing, Solar, Electrical & Roofing Services in Green Valley, AZ' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Green Valley Arizona scenic desert views' }
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
                alt="Green Valley Arizona scenic desert views"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,70%,25%)]/90 to-[hsl(215,70%,25%)]/60"></div>
            </div>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="hero-title">
                  HVAC, Plumbing, Solar, Electrical & Roofing Services in Green Valley, AZ
                </h1>
                <p className="text-lg text-white/80 mb-8" data-testid="hero-description">
                  Serving Green Valley's peaceful retirement community with expert home services since 1979
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
                  Complete Home Services in Green Valley
                </h2>
                <p className="text-lg text-[hsl(215,10%,40%)]" data-testid="services-subtitle">
                  Reliable service for your comfort and peace of mind
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

          {/* About Green Valley Section */}
          <section className="py-16 md:py-20 bg-[hsl(215,15%,92%)]">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-6" data-testid="about-green-valley-title">
                  About Green Valley, Arizona
                </h2>
                <p className="text-lg text-[hsl(215,10%,40%)] mb-6" data-testid="about-green-valley-description">
                  Green Valley is a peaceful retirement community set in the beautiful Sonoran Desert south of Tucson. Known for its golf courses, recreation centers, and active lifestyle, Green Valley offers residents a serene desert setting with all the amenities for comfortable living.
                </p>
                
                <h3 className="text-2xl font-bold text-[hsl(215,70%,25%)] mb-4 mt-8" data-testid="features-title">
                  Community Features
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="feature-golf-title">
                      World-Class Golf Courses
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="feature-golf-description">
                      Green Valley is home to multiple premier golf courses offering exceptional playing conditions year-round. Golf enthusiasts enjoy championship layouts set against stunning desert mountain backdrops.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="feature-recreation-title">
                      Community Recreation Centers
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="feature-recreation-description">
                      Residents have access to excellent recreation centers featuring fitness facilities, pools, social clubs, and organized activities. The community fosters an active, engaged lifestyle for retirees.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="feature-location-title">
                      Proximity to Tucson
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="feature-location-description">
                      While offering a peaceful, small-town atmosphere, Green Valley is conveniently located just south of Tucson. Residents enjoy easy access to major medical facilities, shopping, dining, and cultural attractions.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[hsl(25,85%,55%)] pl-6">
                    <h4 className="text-xl font-bold text-[hsl(215,70%,25%)] mb-2" data-testid="feature-scenic-title">
                      Scenic Desert Views
                    </h4>
                    <p className="text-[hsl(215,10%,40%)]" data-testid="feature-scenic-description">
                      Surrounded by the beauty of the Sonoran Desert, Green Valley offers breathtaking mountain views, stunning sunsets, and the unique flora and fauna of the Arizona desert. It's a paradise for nature lovers and outdoor enthusiasts.
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
                      Do you serve Green Valley, Arizona?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Yes! We proudly serve all of Green Valley and the surrounding south Tucson area. This peaceful retirement community is one of our primary service areas. We provide comprehensive HVAC, plumbing, solar, electrical, roofing, and drain services throughout Green Valley and have been serving residents since 1979.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-[hsl(215,15%,92%)] rounded-lg px-6" data-testid="faq-item-2">
                    <AccordionTrigger className="text-left font-semibold">
                      What services do you offer in Green Valley?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      We offer complete home services including air conditioning repair and installation, heating systems, plumbing services, solar panel installations, electrical work, roofing services, and drain & sewer repairs. From routine maintenance to emergency repairs and new installations, our expert technicians handle every home service need.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-[hsl(215,15%,92%)] rounded-lg px-6" data-testid="faq-item-3">
                    <AccordionTrigger className="text-left font-semibold">
                      How quickly can you respond to Green Valley service calls?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      We offer fast response times throughout Green Valley. For emergency situations, we typically arrive within 1-2 hours. For scheduled appointments, we provide same-day and next-day service options. Our proximity to Green Valley ensures quick and reliable service for your home.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-[hsl(215,15%,92%)] rounded-lg px-6" data-testid="faq-item-4">
                    <AccordionTrigger className="text-left font-semibold">
                      Do you offer 24/7 emergency service in Green Valley?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Absolutely! We understand that home emergencies can happen at any time. We provide 24/7 emergency service for HVAC, plumbing, and electrical issues throughout Green Valley. Call us anytime at (520) 333-2665 for immediate assistance with AC breakdowns, plumbing leaks, or electrical problems.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-[hsl(215,15%,92%)] rounded-lg px-6" data-testid="faq-item-5">
                    <AccordionTrigger className="text-left font-semibold">
                      Are you licensed to work in Green Valley?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Yes! We hold all necessary Arizona state licenses for HVAC, plumbing, electrical, solar, and roofing work. Our technicians are fully licensed, bonded, and insured. We're BBB A+ rated, ensuring the highest quality standards and professionalism for every job in Green Valley.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="bg-[hsl(215,15%,92%)] rounded-lg px-6" data-testid="faq-item-6">
                    <AccordionTrigger className="text-left font-semibold">
                      What makes you different from other Green Valley contractors?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      We've been serving Green Valley residents since 1979 with upfront pricing, comprehensive warranties, and 100% satisfaction guarantees. Our 22,000+ five-star reviews reflect our commitment to excellence. We understand the unique needs of Green Valley's retirement community and provide respectful, reliable service.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="bg-[hsl(215,15%,92%)] rounded-lg px-6" data-testid="faq-item-7">
                    <AccordionTrigger className="text-left font-semibold">
                      Do you service all HVAC brands?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Yes! Our factory-trained technicians service and repair all major HVAC brands including Carrier, Trane, Lennox, Goodman, Rheem, York, and more. No matter what brand or model you have, we have the expertise and experience to keep it running efficiently.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" className="bg-[hsl(215,15%,92%)] rounded-lg px-6" data-testid="faq-item-8">
                    <AccordionTrigger className="text-left font-semibold">
                      Can you install solar panels in Green Valley?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Absolutely! Green Valley's abundant Arizona sunshine makes it ideal for solar energy. We offer residential solar panel systems, solar AC installations, and ongoing maintenance. We'll help you maximize federal tax credits and local incentives to make solar energy affordable and beneficial.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9" className="bg-[hsl(215,15%,92%)] rounded-lg px-6" data-testid="faq-item-9">
                    <AccordionTrigger className="text-left font-semibold">
                      Do you offer financing options?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Yes! We offer flexible financing options for HVAC installations, solar projects, water heater replacements, and other major home improvements. We partner with multiple lenders to provide payment plans that fit your budget, making it easier to invest in your home's comfort and efficiency.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10" className="bg-[hsl(215,15%,92%)] rounded-lg px-6" data-testid="faq-item-10">
                    <AccordionTrigger className="text-left font-semibold">
                      What are your service hours for Green Valley?
                    </AccordionTrigger>
                    <AccordionContent className="text-[hsl(215,10%,40%)]">
                      Our office is open Monday-Friday 8:00 AM to 5:00 PM, and Saturday 8:00 AM to 2:00 PM for appointments and inquiries. However, we offer 24/7 emergency service for urgent HVAC, plumbing, and electrical needs. You can reach us anytime at (520) 333-2665 for immediate assistance.
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
                        Serving Green Valley
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="font-semibold text-[hsl(215,70%,25%)]" data-testid="contact-name">
                          Intelligent Design Air Conditioning, Plumbing, Solar & Electric
                        </p>
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
                        Expert service for your Green Valley home. Same-day appointments available!
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
                Ready for Expert Service in Green Valley?
              </h2>
              <p className="text-xl mb-8 text-white/90" data-testid="final-cta-description">
                Join your Green Valley neighbors in experiencing the Intelligent Design difference.
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
