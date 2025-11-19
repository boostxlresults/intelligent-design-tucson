import { useEffect } from "react";
import { Phone, Wrench, CheckCircle2, MapPin, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import ContactCard from "@/components/ContactCard";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";
import heroImage from "@assets/generated_images/recent_home_improvement_project_showcase_9bee4b8b.webp";

export default function RecentProjects() {
  const description = "View recent HVAC, plumbing, electrical, solar & roofing projects completed by Intelligent Design across Tucson. See before/after results from AC installations, solar systems, whole-home replumbs, panel upgrades, and roof replacements. Quality work guaranteed.";
  const imageUrl = `${SITE_URL}${heroImage}`;

  useEffect(() => {
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
          "name": "Recent Projects",
          "item": "https://www.idesignac.com/recent-projects"
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I see photos of recent projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! This page showcases recent HVAC, plumbing, electrical, solar, and roofing projects completed across Tucson. We also post project photos on our social media channels and Google Business profile. Each project includes before/after details, location, and service type."
          }
        },
        {
          "@type": "Question",
          "name": "What types of projects does Intelligent Design complete?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We complete a full range of home improvement projects including AC installations, solar panel systems, whole-home replumbs, tankless water heater installations, electrical panel upgrades, roof replacements, duct installations, and more. From small repairs to major installations, we handle it all."
          }
        },
        {
          "@type": "Question",
          "name": "How long do typical projects take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Project timelines vary by scope. AC installations typically take 1-2 days, solar systems 2-3 days, roof replacements 2-4 days, electrical panel upgrades 1 day, and whole-home replumbs 3-5 days. We provide detailed timelines during consultation and keep you informed throughout."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer warranties on completed projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! All our work includes comprehensive warranties. We offer a lifetime craftsmanship guarantee on installation labor, plus manufacturer warranties on equipment (typically 5-10 years). Family Protection Plan members receive extended warranty coverage. We stand behind every project."
          }
        },
        {
          "@type": "Question",
          "name": "Can you provide references for similar projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! With over 22,000 five-star reviews, you can read detailed feedback about projects similar to yours. We can also connect you with recent customers who completed comparable work. Many customers mention specific project details in their reviews on Google, Angi, and BBB."
          }
        },
        {
          "@type": "Question",
          "name": "What areas of Tucson do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve all of Tucson and surrounding areas including Oro Valley, Marana, Vail, Sahuarita, Catalina Foothills, Rita Ranch, and Green Valley. Our recent projects span the entire Tucson metro area. If you're in Southern Arizona, we can help!"
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started on my project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Getting started is easy! Call (520) 333-2665 or schedule online for a free consultation. We'll assess your needs, provide a detailed written estimate, answer all your questions, and schedule your project at your convenience. Most projects can begin within days of approval."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle permits and inspections?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we handle all necessary permits and inspections for your project. Our team is familiar with Tucson building codes and city requirements. We coordinate with inspectors, ensure all work meets code, and provide you with completed permit documentation. You don't have to worry about paperwork."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Intelligent Design different from other contractors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer comprehensive multi-trade services under one roof, eliminating the need for multiple contractors. With 45+ years serving Tucson, over 22,000 five-star reviews, BBB A+ rating, and family/veteran ownership, we deliver unmatched quality and reliability. Our lifetime craftsmanship guarantee demonstrates our commitment."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer financing for large projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer flexible financing options for qualifying customers, making large projects like AC installations, solar systems, and roof replacements more affordable. We work with multiple lenders to provide competitive rates and terms. Ask about financing options during your consultation."
          }
        }
      ]
    };

    let breadcrumbScript = document.querySelector('script[data-schema="breadcrumb"]') as HTMLScriptElement;
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.setAttribute('data-schema', 'breadcrumb');
      document.head.appendChild(breadcrumbScript);
    }
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);

    let faqScript = document.querySelector('script[data-schema="faq"]') as HTMLScriptElement;
    if (!faqScript) {
      faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.setAttribute('data-schema', 'faq');
      document.head.appendChild(faqScript);
    }
    faqScript.textContent = JSON.stringify(faqSchema);

    return () => {
      document.querySelectorAll('[data-schema]').forEach(el => el.remove());
    };
  }, []);

  const projects = [
    {
      title: "Complete HVAC System Installation",
      location: "Oro Valley, AZ",
      service: "AC Installation",
      date: "January 2025",
      description: "Replaced aging 20-year-old system with high-efficiency 18 SEER unit. Installation completed in 1 day. Customer reports 40% energy savings and perfect cooling performance."
    },
    {
      title: "8.5kW Solar Panel System",
      location: "Tucson, AZ (Catalina Foothills)",
      service: "Solar Installation",
      date: "January 2025",
      description: "Installed 24-panel solar system with battery backup. Handled all permits and utility coordination. Customer's first electric bill was $6 compared to previous $280 monthly average."
    },
    {
      title: "Whole-Home Replumb",
      location: "Marana, AZ",
      service: "Plumbing",
      date: "December 2024",
      description: "Replaced all galvanized pipes with PEX throughout 2,400 sq ft home. Completed in 3 days with minimal disruption. Eliminated all leaks and improved water pressure by 60%."
    },
    {
      title: "200-Amp Electrical Panel Upgrade",
      location: "Vail, AZ",
      service: "Electrical",
      date: "January 2025",
      description: "Upgraded from 100-amp to 200-amp panel to support pool, EV charger, and solar system. Work completed in 6 hours with zero downtime. Passed inspection with flying colors."
    },
    {
      title: "Tile Roof Replacement",
      location: "Tucson, AZ (Foothills)",
      service: "Roofing",
      date: "December 2024",
      description: "Complete tear-off and replacement of 3,000 sq ft Spanish tile roof. Protected all landscaping, completed in 3 days, left property immaculate. Customer loves the appearance and improved insulation."
    },
    {
      title: "Tankless Water Heater Installation",
      location: "Sahuarita, AZ",
      service: "Plumbing",
      date: "January 2025",
      description: "Replaced 40-gallon tank with Navien tankless system. Endless hot water for family of 5, energy usage down 35%. Installation took 4 hours start to finish."
    },
    {
      title: "Complete Ductwork Replacement",
      location: "Tucson, AZ (Rita Ranch)",
      service: "HVAC",
      date: "December 2024",
      description: "Replaced all ductwork in 2,000 sq ft home to eliminate leaks. Properly sized and sealed all runs. Customer reports even temperatures throughout home and 25% lower cooling bills."
    },
    {
      title: "Whole-Home Generator Installation",
      location: "Oro Valley, AZ",
      service: "Electrical",
      date: "January 2025",
      description: "Installed 22kW Generac generator with automatic transfer switch. Powers entire home during outages. Customer had power during recent storm while neighbors were dark."
    },
    {
      title: "Emergency AC Replacement",
      location: "Tucson, AZ",
      service: "AC Installation",
      date: "January 2025",
      description: "System failed during 110°F heat wave. Installed new 16 SEER system within 24 hours. Customer thrilled with quick response and professional installation."
    },
    {
      title: "Commercial Roof Coating",
      location: "Tucson, AZ (Downtown)",
      service: "Commercial Roofing",
      date: "December 2024",
      description: "Applied reflective coating to 12,000 sq ft commercial flat roof. Extended roof life by 10+ years, reduced building temperature by 15°F. Completed over weekend to avoid business disruption."
    }
  ];

  return (
    <>
      <MetaHead
        title="Recent Projects | Our Work Speaks for Itself | Intelligent Design Tucson"
        description={description}
        canonical={`${SITE_URL}/recent-projects`}
        openGraph={{
          title: "Recent Projects | Our Work Speaks for Itself | Intelligent Design Tucson",
          description,
          image: imageUrl,
          url: `${SITE_URL}/recent-projects`,
        }}
        twitter={{
          title: "Recent Projects | Our Work Speaks for Itself | Intelligent Design Tucson",
          description,
          image: imageUrl,
          imageAlt: "Recent home improvement projects by Intelligent Design in Tucson",
        }}
      />
      <GTM />
      <DNIInjector />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          <section className="relative text-white py-16 md:py-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Recent Projects
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                  Our Work Speaks for Itself
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  See the quality and craftsmanship we bring to every Tucson home
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Start Your Project"
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

          <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Showcasing Recent Installations & Repairs
                </h2>
                <p className="text-lg text-gray-600">
                  Every project we complete demonstrates our commitment to quality workmanship, professional service, and customer satisfaction. From emergency repairs to major installations, see the results that have earned us over 22,000 five-star reviews.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {projects.map((project, index) => (
                  <Card key={index} data-testid={`project-card-${index}`} className="hover-elevate">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Wrench className="w-6 h-6 text-blue-600" />
                        </div>
                        <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded">
                          {project.service}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                      <p className="text-gray-700">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <SchedulerEmbed
                  triggerText="Get a Free Project Consultation"
                  variant="destructive"
                  size="lg"
                  data-testid="button-schedule-projects"
                />
                <p className="text-gray-600 mt-4">
                  Ready to discuss your project? Call <a href="tel:+15203332665" className="text-blue-600 hover:underline" data-testid="link-call-projects">(520) 333-2665</a>
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Why Choose Intelligent Design for Your Project
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Multi-Trade Expertise</h3>
                    <p className="text-gray-600">One company for HVAC, plumbing, electrical, solar, and roofing—no need to coordinate multiple contractors.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">45+ Years Experience</h3>
                    <p className="text-gray-600">Family and veteran-owned since 1979, serving multiple generations of Tucson families.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Lifetime Craftsmanship Warranty</h3>
                    <p className="text-gray-600">Our work is guaranteed for as long as you own your home—we stand behind every project.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600">Upfront written estimates with no hidden fees. The price we quote is the price you pay.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed, bonded, and insured for all trades. We handle all permits and inspections.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">22,000+ Five-Star Reviews</h3>
                    <p className="text-gray-600">Our consistent quality is proven by thousands of satisfied Tucson customers.</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <SchedulerEmbed
                  triggerText="Schedule Your Free Consultation"
                  variant="destructive"
                  size="lg"
                  data-testid="button-schedule-why"
                />
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" data-testid="faq-item-1">
                  <AccordionTrigger className="text-left">
                    Can I see photos of recent projects?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! This page showcases recent HVAC, plumbing, electrical, solar, and roofing projects completed across Tucson. We also post project photos on our social media channels and Google Business profile. Each project includes before/after details, location, and service type.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" data-testid="faq-item-2">
                  <AccordionTrigger className="text-left">
                    What types of projects does Intelligent Design complete?
                  </AccordionTrigger>
                  <AccordionContent>
                    We complete a full range of home improvement projects including AC installations, solar panel systems, whole-home replumbs, tankless water heater installations, electrical panel upgrades, roof replacements, duct installations, and more. From small repairs to major installations, we handle it all.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" data-testid="faq-item-3">
                  <AccordionTrigger className="text-left">
                    How long do typical projects take?
                  </AccordionTrigger>
                  <AccordionContent>
                    Project timelines vary by scope. AC installations typically take 1-2 days, solar systems 2-3 days, roof replacements 2-4 days, electrical panel upgrades 1 day, and whole-home replumbs 3-5 days. We provide detailed timelines during consultation and keep you informed throughout.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" data-testid="faq-item-4">
                  <AccordionTrigger className="text-left">
                    Do you offer warranties on completed projects?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely! All our work includes comprehensive warranties. We offer a lifetime craftsmanship guarantee on installation labor, plus manufacturer warranties on equipment (typically 5-10 years). Family Protection Plan members receive extended warranty coverage. We stand behind every project.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" data-testid="faq-item-5">
                  <AccordionTrigger className="text-left">
                    Can you provide references for similar projects?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! With over 22,000 five-star reviews, you can read detailed feedback about projects similar to yours. We can also connect you with recent customers who completed comparable work. Many customers mention specific project details in their reviews on Google, Angi, and BBB.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" data-testid="faq-item-6">
                  <AccordionTrigger className="text-left">
                    What areas of Tucson do you serve?
                  </AccordionTrigger>
                  <AccordionContent>
                    We serve all of Tucson and surrounding areas including Oro Valley, Marana, Vail, Sahuarita, Catalina Foothills, Rita Ranch, and Green Valley. Our recent projects span the entire Tucson metro area. If you're in Southern Arizona, we can help!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" data-testid="faq-item-7">
                  <AccordionTrigger className="text-left">
                    How do I get started on my project?
                  </AccordionTrigger>
                  <AccordionContent>
                    Getting started is easy! Call (520) 333-2665 or schedule online for a free consultation. We'll assess your needs, provide a detailed written estimate, answer all your questions, and schedule your project at your convenience. Most projects can begin within days of approval.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" data-testid="faq-item-8">
                  <AccordionTrigger className="text-left">
                    Do you handle permits and inspections?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we handle all necessary permits and inspections for your project. Our team is familiar with Tucson building codes and city requirements. We coordinate with inspectors, ensure all work meets code, and provide you with completed permit documentation. You don't have to worry about paperwork.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" data-testid="faq-item-9">
                  <AccordionTrigger className="text-left">
                    What makes Intelligent Design different from other contractors?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer comprehensive multi-trade services under one roof, eliminating the need for multiple contractors. With 45+ years serving Tucson, over 22,000 five-star reviews, BBB A+ rating, and family/veteran ownership, we deliver unmatched quality and reliability. Our lifetime craftsmanship guarantee demonstrates our commitment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" data-testid="faq-item-10">
                  <AccordionTrigger className="text-left">
                    Do you offer financing for large projects?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! We offer flexible financing options for qualifying customers, making large projects like AC installations, solar systems, and roof replacements more affordable. We work with multiple lenders to provide competitive rates and terms. Ask about financing options during your consultation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
                Contact Us Today
              </h2>
              <ContactCard />
              <div className="text-center mt-8">
                <SchedulerEmbed
                  triggerText="Get Your Free Project Quote"
                  variant="destructive"
                  size="lg"
                  data-testid="button-schedule-contact"
                />
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
