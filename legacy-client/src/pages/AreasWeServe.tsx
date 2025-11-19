import { useEffect } from "react";
import { Phone, MapPin, Clock, CheckCircle2, Home, Zap, Wrench, Sun, Hammer, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingActions from "@/components/MobileFloatingActions";
import TrustBar from "@/components/TrustBar";
import SchedulerEmbed from "@/components/SchedulerEmbed";
import ContactCard from "@/components/ContactCard";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";
import heroImage from "@assets/generated_images/Tucson_Arizona_service_area_map_3260f5d4.webp";

export default function AreasWeServe() {
  const description = "Intelligent Design serves all of Greater Tucson including Oro Valley, Marana, Sahuarita, Green Valley, Vail & 10+ communities. 24/7 emergency service, same-day appointments, fast response times. Over 22,000 five-star reviews.";
  const imageUrl = `${SITE_URL}${heroImage}`;

  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What areas does Intelligent Design serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Intelligent Design serves all of Greater Tucson including Tucson, Oro Valley, Marana, Sahuarita, Green Valley, Vail, Corona de Tucson, Drexel Heights, Casas Adobes, Tucson Estates, Tortolita, Picture Rocks, Rillito, Cortaro, and Avra Valley. We provide HVAC, plumbing, electrical, solar, and roofing services throughout the entire region."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide service to Oro Valley?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Oro Valley is a major service area for Intelligent Design. We have technicians based near Oro Valley to ensure fast response times. We provide all our services including HVAC, plumbing, electrical, solar, and roofing to Oro Valley residents and businesses."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can you respond to service calls in Marana?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With 80+ technicians strategically located throughout Greater Tucson, we typically respond to Marana service calls within 1-2 hours for emergencies. We offer same-day service for most non-emergency appointments in Marana and surrounding areas."
          }
        },
        {
          "@type": "Question",
          "name": "Do you serve Green Valley and Sahuarita?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Green Valley and Sahuarita are important parts of our service area. We serve both communities with the same quality service, competitive pricing, and industry-leading guarantees as the rest of Greater Tucson."
          }
        },
        {
          "@type": "Question",
          "name": "What is your response time for emergency calls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide 24/7 emergency service throughout our entire service area. For HVAC, plumbing, and electrical emergencies, we typically arrive within 1-2 hours. Our large team of 80+ technicians ensures we can respond quickly no matter where you are in Greater Tucson."
          }
        },
        {
          "@type": "Question",
          "name": "Do you charge extra for service in outlying areas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No! We provide the same transparent, competitive pricing throughout our entire service area. Whether you're in central Tucson or Avra Valley, you'll receive the same quality service at the same fair prices with no hidden fees or travel charges within our service area."
          }
        },
        {
          "@type": "Question",
          "name": "Can you provide same-day service in Vail?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer same-day service throughout Greater Tucson including Vail. With our large team, we can often schedule appointments the same day you call. For emergencies, we provide 24/7 service with rapid response times."
          }
        },
        {
          "@type": "Question",
          "name": "What services do you provide in all areas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide complete HVAC (installation, repair, maintenance), plumbing (all residential and commercial services), electrical (panel upgrades, repairs, installations), solar (design, installation, maintenance), and roofing (repairs, replacement, coating) services in all areas we serve."
          }
        },
        {
          "@type": "Question",
          "name": "How far north do you serve (Tortolita, Rillito)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve Tortolita, Rillito, Cortaro, and the entire northern Greater Tucson area. Our service area extends throughout Pima County, ensuring comprehensive coverage for all communities in the region."
          }
        },
        {
          "@type": "Question",
          "name": "Do you serve commercial properties in all areas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We provide commercial HVAC, plumbing, electrical, solar, and roofing services throughout our entire service area. From small businesses to large commercial facilities, we have the experience and resources to handle projects of any size."
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
          "name": "Areas We Serve",
          "item": "https://www.idesignac.com/areas-served"
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

  const serviceAreas = [
    {
      name: "Tucson",
      link: "/tucson",
      description: "Central Tucson and surrounding neighborhoods"
    },
    {
      name: "Oro Valley",
      link: "/oro-valley",
      description: "Full HVAC, plumbing, solar & electrical service"
    },
    {
      name: "Marana",
      link: "/marana",
      description: "Residential and commercial services available"
    },
    {
      name: "Sahuarita",
      link: "/sahuarita",
      description: "Same-day service and emergency response"
    },
    {
      name: "Green Valley",
      link: "/green-valley",
      description: "Complete home services for all properties"
    },
    {
      name: "Vail",
      link: "/vail",
      description: "Fast response times, quality service"
    },
    {
      name: "Corona de Tucson",
      link: "/corona-de-tucson",
      description: "All trades available year-round"
    },
    {
      name: "Drexel Heights",
      link: "/drexel-heights",
      description: "Professional service, competitive pricing"
    },
    {
      name: "Casas Adobes",
      link: "/casas-adobes",
      description: "Trusted local contractor since 2009"
    },
    {
      name: "Tucson Estates",
      link: "/tucson-estates",
      description: "Comprehensive HVAC and home services"
    },
    {
      name: "Tortolita",
      link: "/tortolita",
      description: "Northern Tucson service excellence"
    },
    {
      name: "Picture Rocks",
      link: "/picture-rocks",
      description: "Western Tucson area coverage"
    },
    {
      name: "Rillito",
      link: "/rillito",
      description: "Complete residential and commercial service"
    },
    {
      name: "Cortaro",
      link: "/cortaro",
      description: "Fast, reliable service to all areas"
    },
    {
      name: "Avra Valley",
      link: "/avra-valley",
      description: "Extended service area, same great quality"
    }
  ];

  return (
    <>
      <MetaHead
        title="Areas We Serve | Professional HVAC, Plumbing, Solar & Electrical Throughout Greater Tucson"
        description={description}
        canonical={`${SITE_URL}/areas-served`}
        openGraph={{
          title: "Areas We Serve | Professional HVAC, Plumbing, Solar & Electrical Throughout Greater Tucson",
          description,
          image: imageUrl,
          url: `${SITE_URL}/areas-served`,
        }}
        twitter={{
          title: "Areas We Serve | Professional HVAC, Plumbing, Solar & Electrical Throughout Greater Tucson",
          description,
          image: imageUrl,
          imageAlt: "Tucson Arizona greater metro service area map",
        }}
      />
      <GTM />
      <DNIInjector />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/20" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Areas We Serve
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Professional HVAC, Plumbing, Solar & Electrical Throughout Greater Tucson
              </p>
              <p className="text-xl mb-8 text-gray-200" data-testid="text-hero-description">
                Serving 15+ Communities | Fast Response Times | 24/7 Emergency Service Available
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Service Today"
                  variant="destructive"
                  size="lg"
                  data-testid="button-schedule-hero"
                />
                <Button
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-hero">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* TrustBar Component */}
        <TrustBar />

        {/* Introduction Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="heading-introduction">
                Serving All of Greater Tucson and Surrounding Communities
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Since 2009, Intelligent Design has been the trusted name for home services throughout Greater Tucson. Our strategically positioned team of 80+ technicians ensures fast response times to every community we serve.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From central Tucson to outlying areas like Avra Valley and Tortolita, we provide the same exceptional service, transparent pricing, and industry-leading guarantees to every customer. No matter where you are in our service area, you can count on Intelligent Design for professional HVAC, plumbing, electrical, solar, and roofing services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Schedule in Your Area"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-intro"
                />
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-sm"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-intro">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Map Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-coverage-area">
                Our Service Coverage Area
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our comprehensive service area covers all of Pima County and Greater Tucson metropolitan area, providing complete home services to both residential and commercial properties.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <Home className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Residential Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Single-family homes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Townhomes and condos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Multi-family properties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">New construction</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Fast Response Times</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">24/7 emergency availability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Same-day service available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">1-2 hour emergency response</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">80+ technicians available</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Complete Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">All of Greater Tucson</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Pima County communities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">No extra travel charges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Consistent pricing throughout</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">All Services Available in Every Area</h3>
              <div className="grid md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <Wrench className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-semibold text-gray-900">HVAC</p>
                  <p className="text-sm text-gray-600">AC & Heating</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <Wrench className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-semibold text-gray-900">Plumbing</p>
                  <p className="text-sm text-gray-600">All Services</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-semibold text-gray-900">Electrical</p>
                  <p className="text-sm text-gray-600">Repairs & Upgrades</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <Sun className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-semibold text-gray-900">Solar</p>
                  <p className="text-sm text-gray-600">Installation & Service</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                    <Hammer className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-semibold text-gray-900">Roofing</p>
                  <p className="text-sm text-gray-600">Repair & Replace</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="heading-service-areas">
                Communities We Proudly Serve
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Click on your community to learn more about our services in your area.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {serviceAreas.map((area, index) => (
                <Card
                  key={index}
                  className="hover-elevate text-center"
                  data-testid={`card-service-area-${index}`}
                >
                  <CardHeader>
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{area.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {area.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <Link href={area.link} data-testid={`link-service-area-${index}`}>
                        Learn More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                Don't see your community listed? We likely serve your area too!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Check Service Availability"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-areas"
                />
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-areas">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Info */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12" data-testid="heading-service-info">
              What to Expect from Our Service
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Clock className="w-8 h-8 text-primary" />
                  Fast Response Times Throughout Greater Tucson
                </h3>
                <p className="text-gray-700 mb-4">
                  With 80+ technicians strategically positioned throughout our service area, we provide industry-leading response times. Most emergency calls are answered within 1-2 hours, and we offer same-day service for non-emergency appointments in most areas.
                </p>
                <p className="text-gray-700">
                  Our large team means you won't wait days for service. Whether you're in central Tucson or an outlying community, we're committed to being there when you need us most.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                  Consistent Service Quality Everywhere
                </h3>
                <p className="text-gray-700 mb-4">
                  Every technician receives the same rigorous training and adheres to our high standards. Whether you're in Oro Valley or Avra Valley, you'll receive the same professional service, transparent pricing, and quality workmanship.
                </p>
                <p className="text-gray-700">
                  All our technicians are background-checked, drug-tested, and continuously trained on the latest technologies and best practices. Your satisfaction is guaranteed no matter where you're located.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-primary" />
                  No Extra Charges for Your Location
                </h3>
                <p className="text-gray-700 mb-4">
                  We believe in transparent, fair pricing throughout our service area. You won't pay extra trip charges or inflated prices just because you're in an outlying area. Our pricing is consistent and competitive across all communities we serve.
                </p>
                <p className="text-gray-700">
                  From Picture Rocks to Corona de Tucson, you'll receive the same upfront, honest pricing with no surprises.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <SchedulerEmbed
                triggerText="Schedule Service in Your Area"
                variant="destructive"
                size="lg"
                data-testid="button-schedule-service-info"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="heading-faq">
              Service Area Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-1">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What areas does Intelligent Design serve?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Intelligent Design serves all of Greater Tucson including Tucson, Oro Valley, Marana, Sahuarita, Green Valley, Vail, Corona de Tucson, Drexel Heights, Casas Adobes, Tucson Estates, Tortolita, Picture Rocks, Rillito, Cortaro, and Avra Valley. We provide HVAC, plumbing, electrical, solar, and roofing services throughout the entire region.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-2">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Do you provide service to Oro Valley?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! Oro Valley is a major service area for Intelligent Design. We have technicians based near Oro Valley to ensure fast response times. We provide all our services including HVAC, plumbing, electrical, solar, and roofing to Oro Valley residents and businesses.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-3">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  How quickly can you respond to service calls in Marana?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  With 80+ technicians strategically located throughout Greater Tucson, we typically respond to Marana service calls within 1-2 hours for emergencies. We offer same-day service for most non-emergency appointments in Marana and surrounding areas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-4">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Do you serve Green Valley and Sahuarita?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely! Green Valley and Sahuarita are important parts of our service area. We serve both communities with the same quality service, competitive pricing, and industry-leading guarantees as the rest of Greater Tucson.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-5">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What is your response time for emergency calls?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We provide 24/7 emergency service throughout our entire service area. For HVAC, plumbing, and electrical emergencies, we typically arrive within 1-2 hours. Our large team of 80+ technicians ensures we can respond quickly no matter where you are in Greater Tucson.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Do you charge extra for service in outlying areas?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No! We provide the same transparent, competitive pricing throughout our entire service area. Whether you're in central Tucson or Avra Valley, you'll receive the same quality service at the same fair prices with no hidden fees or travel charges within our service area.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-7">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Can you provide same-day service in Vail?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! We offer same-day service throughout Greater Tucson including Vail. With our large team, we can often schedule appointments the same day you call. For emergencies, we provide 24/7 service with rapid response times.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-8">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What services do you provide in all areas?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We provide complete HVAC (installation, repair, maintenance), plumbing (all residential and commercial services), electrical (panel upgrades, repairs, installations), solar (design, installation, maintenance), and roofing (repairs, replacement, coating) services in all areas we serve.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-9">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  How far north do you serve (Tortolita, Rillito)?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We serve Tortolita, Rillito, Cortaro, and the entire northern Greater Tucson area. Our service area extends throughout Pima County, ensuring comprehensive coverage for all communities in the region.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-10">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Do you serve commercial properties in all areas?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! We provide commercial HVAC, plumbing, electrical, solar, and roofing services throughout our entire service area. From small businesses to large commercial facilities, we have the experience and resources to handle projects of any size.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                Have more questions about service in your area?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Schedule a Consultation"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-faq"
                />
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-faq">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="heading-contact">
                Schedule Service in Your Area Today
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Experience the Intelligent Design difference—professional service, transparent pricing, and guaranteed satisfaction throughout Greater Tucson.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <ContactCard />
            </div>

            <div className="text-center mt-12">
              <SchedulerEmbed
                triggerText="Book Your Appointment Now"
                variant="destructive"
                size="lg"
                data-testid="button-schedule-contact"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
