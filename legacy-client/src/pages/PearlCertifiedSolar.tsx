import { useEffect } from "react";
import { Phone, Sun, TrendingUp, Shield, CheckCircle2, Award, DollarSign, MapPin, Mail } from "lucide-react";
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
import heroImage from "@assets/generated_images/solar_panels_Pearl_certification_3a4420d1.webp";

export default function PearlCertifiedSolar() {
  const description = "Pearl Certified solar installations in Tucson with verified performance guarantees. Increase home value, verify savings, and get quality assurance with Intelligent Design's certified solar services.";
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
          "name": "Pearl Certified Solar",
          "item": "https://www.idesignac.com/pearl-certified-solar"
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What makes solar Pearl Certified?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pearl Certified solar installations meet strict performance guarantees, quality standards, and installation requirements. Third-party verification confirms proper system sizing, optimal panel placement, quality components, and projected energy production. The certification provides documented proof that your solar system will deliver promised savings."
          }
        },
        {
          "@type": "Question",
          "name": "How does Pearl Certification increase solar home value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pearl Certified solar systems increase home value by providing third-party verification of system performance and quality. Appraisers can use Pearl documentation to justify higher valuations, and buyers can be confident in projected energy savings. Studies show homes with Pearl Certified solar sell for significantly more than homes with uncertified systems."
          }
        },
        {
          "@type": "Question",
          "name": "What solar services qualify for Pearl Certification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pearl Certification covers residential solar panel installations, commercial solar systems, solar + battery storage combinations, solar HVAC systems, and comprehensive solar upgrades. Any solar installation can qualify if it meets Pearl's performance and quality standards."
          }
        },
        {
          "@type": "Question",
          "name": "Does Pearl Certification guarantee solar savings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Pearl Certification verifies projected energy production and savings calculations. If your system doesn't perform as documented, you have third-party proof to support warranty claims. This verification gives you confidence that your solar investment will deliver promised returns."
          }
        },
        {
          "@type": "Question",
          "name": "How long does solar Pearl Certification last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pearl Certification stays with your solar system for its lifetime and transfers to future homeowners. The certification documentation remains valid and can be used by appraisers and buyers indefinitely, providing lasting value beyond your ownership."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get Pearl Certification for existing solar panels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! If you have recently installed solar panels with proper documentation, you may be able to obtain Pearl Certification retroactively. We'll assess your system to determine if it meets Pearl's performance and quality standards and help you through the certification process."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in Pearl solar certification documentation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pearl solar certification includes system specifications, energy production projections, quality verification, installation standards compliance, warranty information, and projected savings calculations. This comprehensive documentation can be shared with appraisers, buyers, and financial institutions."
          }
        },
        {
          "@type": "Question",
          "name": "Does Pearl Certification help with solar financing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Pearl Certification can improve solar financing terms by providing lenders with verified system performance data. Many lenders offer better rates for Pearl Certified installations because the third-party verification reduces risk and confirms the system's value."
          }
        },
        {
          "@type": "Question",
          "name": "How does Intelligent Design ensure Pearl Certification for solar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Intelligent Design follows Pearl's rigorous installation standards, uses high-quality components, performs proper system sizing calculations, conducts thorough site assessments, and documents all installation details. Our certified technicians are trained in Pearl requirements to ensure your solar system qualifies for certification."
          }
        },
        {
          "@type": "Question",
          "name": "What are the benefits of Pearl Certified solar vs standard installation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pearl Certified solar provides verified performance guarantees, third-party quality assurance, increased home value, documented energy savings, better financing terms, appraisal recognition, and transferable certification. Standard installations lack independent verification and documentation, making it harder to prove system value and performance."
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
        title="Pearl Certified Solar | Verified Solar Performance | Intelligent Design Tucson"
        description={description}
        canonical={`${SITE_URL}/pearl-certified-solar`}
        openGraph={[
          { property: 'og:title', content: 'Pearl Certified Solar | Verified Solar Performance | Intelligent Design Tucson' },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: `${SITE_URL}/pearl-certified-solar` },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: 'Pearl Certified solar panels installation in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Pearl Certified Solar | Verified Solar Performance | Intelligent Design Tucson' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Pearl Certified solar panels installation in Tucson' }
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
            alt="Pearl Certified solar panels installation in Tucson"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
            Pearl Certified Solar | Verified Solar Performance
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            Independent Verification of Solar Quality & Energy Savings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8" data-testid="button-hero-cta-schedule">
              <Sun className="mr-2 h-5 w-5" />
              Get Pearl Certified Solar
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 backdrop-blur-sm bg-white/90" data-testid="button-hero-cta-call">
              <Phone className="mr-2 h-5 w-5" />
              Call (520) 333-2665
            </Button>
          </div>
        </div>
      </section>

      <TrustBar />

      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 space-y-16 md:space-y-24">
        <section data-testid="section-intro">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-section-title">
              Pearl Certification for Solar Installations
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-intro-description">
              When you invest in solar, you deserve proof that your system will deliver promised savings. Pearl Certified solar installations provide third-party verification of system quality, performance guarantees, and energy production projections. Your Pearl Certification increases home value and gives buyers confidence in your solar investment.
            </p>
          </div>
        </section>

        <section data-testid="section-what-makes-certified">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-certified-solar-title">
            What Makes Solar Pearl Certified
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card data-testid="card-performance-guarantees">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Performance Guarantees</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Third-party verified energy production projections ensure your solar system delivers promised savings year after year.
                </p>
              </CardContent>
            </Card>
            <Card data-testid="card-quality-standards">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Quality Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rigorous installation requirements ensure proper panel placement, optimal system sizing, and quality components.
                </p>
              </CardContent>
            </Card>
            <Card data-testid="card-verified-documentation">
              <CardHeader>
                <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Verified Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive reports document system specifications, performance metrics, and projected ROI for appraisers and buyers.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section data-testid="section-benefits">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-benefits-title">
            Benefits of Pearl Certified Solar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Increased Home Value",
                description: "Third-party documentation helps appraisers recognize solar value, increasing your home's marketability and sale price."
              },
              {
                icon: CheckCircle2,
                title: "Verified Savings",
                description: "Independent verification confirms your solar system will deliver promised energy savings and ROI projections."
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Pearl standards ensure optimal panel placement, proper sizing, and high-quality components for maximum performance."
              }
            ].map((benefit, index) => (
              <Card key={index} data-testid={`card-benefit-${index}`}>
                <CardHeader>
                  <benefit.icon className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" data-testid="button-benefits-cta">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Solar Consultation
            </Button>
          </div>
        </section>

        <section data-testid="section-solar-services">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-services-title">
            Solar Services with Pearl Certification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Residential Solar Panel Installation",
              "Commercial Solar Systems",
              "Solar + Battery Storage",
              "Solar HVAC Integration",
              "Solar System Upgrades",
              "Solar Performance Optimization"
            ].map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border" data-testid={`item-service-${index}`}>
                <Sun className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg">{service}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" data-testid="button-services-cta">
              View All Solar Services
            </Button>
          </div>
        </section>

        <section data-testid="section-scheduler">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8" data-testid="text-scheduler-title">
            Get Your Free Solar Consultation
          </h2>
          <SchedulerEmbed />
          <div className="text-center mt-6">
            <Button size="lg" data-testid="button-scheduler-cta">
              <Phone className="mr-2 h-5 w-5" />
              Or Call (520) 333-2665
            </Button>
          </div>
        </section>

        <section data-testid="section-faq">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-faq-title">
            Pearl Certified Solar FAQs
          </h2>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            <AccordionItem value="item-1" data-testid="faq-item-1">
              <AccordionTrigger data-testid="faq-question-1">What makes solar Pearl Certified?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-1">
                Pearl Certified solar installations meet strict performance guarantees, quality standards, and installation requirements. Third-party verification confirms proper system sizing, optimal panel placement, quality components, and projected energy production. The certification provides documented proof that your solar system will deliver promised savings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" data-testid="faq-item-2">
              <AccordionTrigger data-testid="faq-question-2">How does Pearl Certification increase solar home value?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-2">
                Pearl Certified solar systems increase home value by providing third-party verification of system performance and quality. Appraisers can use Pearl documentation to justify higher valuations, and buyers can be confident in projected energy savings. Studies show homes with Pearl Certified solar sell for significantly more than homes with uncertified systems.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" data-testid="faq-item-3">
              <AccordionTrigger data-testid="faq-question-3">What solar services qualify for Pearl Certification?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-3">
                Pearl Certification covers residential solar panel installations, commercial solar systems, solar + battery storage combinations, solar HVAC systems, and comprehensive solar upgrades. Any solar installation can qualify if it meets Pearl's performance and quality standards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" data-testid="faq-item-4">
              <AccordionTrigger data-testid="faq-question-4">Does Pearl Certification guarantee solar savings?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-4">
                Yes! Pearl Certification verifies projected energy production and savings calculations. If your system doesn't perform as documented, you have third-party proof to support warranty claims. This verification gives you confidence that your solar investment will deliver promised returns.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" data-testid="faq-item-5">
              <AccordionTrigger data-testid="faq-question-5">How long does solar Pearl Certification last?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-5">
                Pearl Certification stays with your solar system for its lifetime and transfers to future homeowners. The certification documentation remains valid and can be used by appraisers and buyers indefinitely, providing lasting value beyond your ownership.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" data-testid="faq-item-6">
              <AccordionTrigger data-testid="faq-question-6">Can I get Pearl Certification for existing solar panels?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-6">
                Yes! If you have recently installed solar panels with proper documentation, you may be able to obtain Pearl Certification retroactively. We'll assess your system to determine if it meets Pearl's performance and quality standards and help you through the certification process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" data-testid="faq-item-7">
              <AccordionTrigger data-testid="faq-question-7">What's included in Pearl solar certification documentation?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-7">
                Pearl solar certification includes system specifications, energy production projections, quality verification, installation standards compliance, warranty information, and projected savings calculations. This comprehensive documentation can be shared with appraisers, buyers, and financial institutions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8" data-testid="faq-item-8">
              <AccordionTrigger data-testid="faq-question-8">Does Pearl Certification help with solar financing?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-8">
                Yes! Pearl Certification can improve solar financing terms by providing lenders with verified system performance data. Many lenders offer better rates for Pearl Certified installations because the third-party verification reduces risk and confirms the system's value.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9" data-testid="faq-item-9">
              <AccordionTrigger data-testid="faq-question-9">How does Intelligent Design ensure Pearl Certification for solar?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-9">
                Intelligent Design follows Pearl's rigorous installation standards, uses high-quality components, performs proper system sizing calculations, conducts thorough site assessments, and documents all installation details. Our certified technicians are trained in Pearl requirements to ensure your solar system qualifies for certification.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10" data-testid="faq-item-10">
              <AccordionTrigger data-testid="faq-question-10">What are the benefits of Pearl Certified solar vs standard installation?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-10">
                Pearl Certified solar provides verified performance guarantees, third-party quality assurance, increased home value, documented energy savings, better financing terms, appraisal recognition, and transferable certification. Standard installations lack independent verification and documentation, making it harder to prove system value and performance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="text-center mt-8">
            <Button size="lg" data-testid="button-faq-cta">
              <Phone className="mr-2 h-5 w-5" />
              Questions? Call (520) 333-2665
            </Button>
          </div>
        </section>

        <section data-testid="section-contact">
          <ContactCard />
        </section>
      </main>

      <Footer />
    </div>
  );
}
