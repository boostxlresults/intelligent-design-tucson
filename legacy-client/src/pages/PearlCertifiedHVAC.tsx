import { useEffect } from "react";
import { Phone, Wind, TrendingUp, Shield, CheckCircle2, Award, Thermometer, MapPin, Mail } from "lucide-react";
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
import ContactCard from "@/components/ContactCard";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import heroImage from "@assets/generated_images/HVAC_system_Pearl_certification_eafeb4c2.webp";

export default function PearlCertifiedHVAC() {
  const description = "Pearl Certified HVAC installations in Tucson with verified high-efficiency performance. Lower energy bills, increased home value, and guaranteed comfort with Intelligent Design's certified HVAC services.";
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
          "name": "Pearl Certified HVAC",
          "item": "https://www.idesignac.com/pearl-certified-hvac"
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Pearl Certified HVAC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pearl Certified HVAC systems meet strict high-efficiency performance standards verified by third-party testing. Proper system sizing, quality installation, and optimal performance are independently documented. Pearl Certification proves your HVAC system delivers maximum comfort and energy savings while increasing your home's value."
          }
        },
        {
          "@type": "Question",
          "name": "What are the efficiency standards for Pearl Certified HVAC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pearl Certified HVAC systems must meet or exceed ENERGY STAR standards with SEER ratings of 16+ for AC units, AFUE ratings of 95+ for furnaces, and HSPF ratings of 9+ for heat pumps. Systems must be properly sized using Manual J load calculations and installed according to ACCA Quality Installation standards."
          }
        },
        {
          "@type": "Question",
          "name": "How much can I save with Pearl Certified HVAC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pearl Certified HVAC systems typically reduce energy bills by 20-40% compared to standard efficiency systems. In Tucson's extreme climate, this can mean savings of $500-$1,500 per year on cooling and heating costs. Pearl documentation verifies projected savings, giving you confidence in your ROI."
          }
        },
        {
          "@type": "Question",
          "name": "Does Pearl Certified HVAC increase home value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Pearl Certification provides third-party documentation that appraisers can use to justify higher home values. Studies show Pearl Certified HVAC systems can increase home value by $3,000-$8,000 and help homes sell faster. The certification transfers to new owners, making your investment more valuable."
          }
        },
        {
          "@type": "Question",
          "name": "What HVAC services qualify for Pearl Certification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pearl Certification covers high-efficiency AC installations, heat pump systems, dual-fuel HVAC systems, ductless mini-split installations, complete HVAC replacements, and whole-home comfort upgrades. Any HVAC installation that meets Pearl's performance and quality standards can qualify for certification."
          }
        },
        {
          "@type": "Question",
          "name": "How long does Pearl HVAC certification last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pearl Certification stays with your HVAC system for its lifetime and transfers to future homeowners. The documentation remains valid indefinitely and can be used by appraisers, buyers, and real estate professionals to verify system quality and performance."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get Pearl Certification for my existing HVAC system?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you recently installed a high-efficiency HVAC system with proper documentation, you may qualify for retroactive Pearl Certification. We'll assess your system to verify it meets Pearl's efficiency standards, installation requirements, and performance criteria."
          }
        },
        {
          "@type": "Question",
          "name": "What documentation does Pearl HVAC certification provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pearl HVAC certification includes system specifications, efficiency ratings, Manual J load calculations, installation verification, performance testing results, projected energy savings, and maintenance recommendations. This comprehensive documentation can be shared with appraisers, buyers, and warranty providers."
          }
        },
        {
          "@type": "Question",
          "name": "How does Intelligent Design ensure Pearl Certification for HVAC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our NATE-certified technicians follow Pearl's rigorous installation standards including Manual J load calculations for proper sizing, Manual D duct design, refrigerant charge verification, airflow testing, and complete system commissioning. We use only high-efficiency equipment and document every installation detail for Pearl verification."
          }
        },
        {
          "@type": "Question",
          "name": "Do Pearl Certified HVAC systems qualify for rebates and tax credits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Pearl Certified HVAC systems typically qualify for federal tax credits up to $2,000, state rebates, and utility incentives. Pearl documentation makes it easier to claim these benefits by providing verified proof of system efficiency and proper installation. We'll help you identify all available incentives."
          }
        }
      ]
    };

    let breadcrumbScript = document.querySelector('script[data-schema="breadcrumb"]');
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.setAttribute('data-schema', 'breadcrumb');
      document.head.appendChild(breadcrumbScript);
    }
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);

    let faqScript = document.querySelector('script[data-schema="faq"]');
    if (!faqScript) {
      faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.setAttribute('data-schema', 'faq');
      document.head.appendChild(faqScript);
    }
    faqScript.textContent = JSON.stringify(faqSchema);

    return () => {
      const schemas = document.querySelectorAll('[data-schema]');
      schemas.forEach(el => el.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <MetaHead
        title="Pearl Certified HVAC | High-Efficiency Comfort Systems | Intelligent Design Tucson"
        description={description}
        canonical={`${SITE_URL}/pearl-certified-hvac`}
        openGraph={[
          { property: 'og:title', content: 'Pearl Certified HVAC | High-Efficiency Comfort Systems | Intelligent Design Tucson' },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: `${SITE_URL}/pearl-certified-hvac` },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: 'Pearl Certified HVAC system in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Pearl Certified HVAC | High-Efficiency Comfort Systems | Intelligent Design Tucson' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Pearl Certified HVAC system in Tucson' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <Header />
      <MobileFloatingActions />

      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Pearl Certified HVAC system in Tucson"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
            Pearl Certified HVAC | High-Efficiency Comfort Systems
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Verified Performance | Increased Home Value | Lower Energy Bills | Guaranteed Comfort
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SchedulerEmbed
              triggerText="Get Free HVAC Assessment"
              variant="destructive"
              size="lg"
              data-testid="button-schedule-hero"
            />
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              asChild
            >
              <a href="tel:+15203332665" data-testid="button-call-hero">
                <Phone className="w-5 h-5 mr-2" />
                Call: (520) 333-2665
              </a>
            </Button>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Pearl Certified HVAC?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Independent third-party verification ensures your HVAC system delivers maximum efficiency, comfort, and home value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  Verified Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Third-party verification ensures your HVAC system meets strict efficiency standards (SEER 16+, AFUE 95+, HSPF 9+) with proper sizing and installation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  Increased Home Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pearl Certification can add $3,000-$8,000 to your home's value. Appraisers use Pearl documentation to justify higher valuations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                    <Wind className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  Lower Energy Bills
                </CardTitle>
              </CardHeader>
                <CardContent>
                <p className="text-muted-foreground">
                  Save 20-40% on energy costs compared to standard systems. In Tucson's climate, that's $500-$1,500 annual savings with verified projections.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                    <Award className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  Quality Assurance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Installation verified by Pearl standards including Manual J load calculations, Manual D duct design, and complete system commissioning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-red-100 dark:bg-red-900 flex items-center justify-center">
                    <Thermometer className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  Guaranteed Comfort
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Proper system sizing and quality installation ensure consistent temperatures, better humidity control, and superior comfort year-round.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  Transferable Certification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pearl Certification stays with your home and transfers to future owners, providing lasting value beyond your ownership.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Pearl Certified HVAC?</AccordionTrigger>
              <AccordionContent>
                Pearl Certified HVAC systems meet strict high-efficiency performance standards verified by third-party testing. Proper system sizing, quality installation, and optimal performance are independently documented. Pearl Certification proves your HVAC system delivers maximum comfort and energy savings while increasing your home's value.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What are the efficiency standards for Pearl Certified HVAC?</AccordionTrigger>
              <AccordionContent>
                Pearl Certified HVAC systems must meet or exceed ENERGY STAR standards with SEER ratings of 16+ for AC units, AFUE ratings of 95+ for furnaces, and HSPF ratings of 9+ for heat pumps. Systems must be properly sized using Manual J load calculations and installed according to ACCA Quality Installation standards.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>How much can I save with Pearl Certified HVAC?</AccordionTrigger>
              <AccordionContent>
                Pearl Certified HVAC systems typically reduce energy bills by 20-40% compared to standard efficiency systems. In Tucson's extreme climate, this can mean savings of $500-$1,500 per year on cooling and heating costs. Pearl documentation verifies projected savings, giving you confidence in your ROI.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Does Pearl Certified HVAC increase home value?</AccordionTrigger>
              <AccordionContent>
                Yes! Pearl Certification provides third-party documentation that appraisers can use to justify higher home values. Studies show Pearl Certified HVAC systems can increase home value by $3,000-$8,000 and help homes sell faster. The certification transfers to new owners, making your investment more valuable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>What HVAC services qualify for Pearl Certification?</AccordionTrigger>
              <AccordionContent>
                Pearl Certification covers high-efficiency AC installations, heat pump systems, dual-fuel HVAC systems, ductless mini-split installations, complete HVAC replacements, and whole-home comfort upgrades. Any HVAC installation that meets Pearl's performance and quality standards can qualify for certification.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>How long does Pearl HVAC certification last?</AccordionTrigger>
              <AccordionContent>
                Pearl Certification stays with your HVAC system for its lifetime and transfers to future homeowners. The documentation remains valid indefinitely and can be used by appraisers, buyers, and real estate professionals to verify system quality and performance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Can I get Pearl Certification for my existing HVAC system?</AccordionTrigger>
              <AccordionContent>
                If you recently installed a high-efficiency HVAC system with proper documentation, you may qualify for retroactive Pearl Certification. We'll assess your system to verify it meets Pearl's efficiency standards, installation requirements, and performance criteria.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>What documentation does Pearl HVAC certification provide?</AccordionContent>
              <AccordionContent>
                Pearl HVAC certification includes system specifications, efficiency ratings, Manual J load calculations, installation verification, performance testing results, projected energy savings, and maintenance recommendations. This comprehensive documentation can be shared with appraisers, buyers, and warranty providers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>How does Intelligent Design ensure Pearl Certification for HVAC?</AccordionTrigger>
              <AccordionContent>
                Our NATE-certified technicians follow Pearl's rigorous installation standards including Manual J load calculations for proper sizing, Manual D duct design, refrigerant charge verification, airflow testing, and complete system commissioning. We use only high-efficiency equipment and document every installation detail for Pearl verification.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>Do Pearl Certified HVAC systems qualify for rebates and tax credits?</AccordionTrigger>
              <AccordionContent>
                Yes! Pearl Certified HVAC systems typically qualify for federal tax credits up to $2,000, state rebates, and utility incentives. Pearl documentation makes it easier to claim these benefits by providing verified proof of system efficiency and proper installation. We'll help you identify all available incentives.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <ContactCard />

      <Footer />
    </div>
  );
}
