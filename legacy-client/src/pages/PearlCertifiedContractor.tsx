import { useEffect } from "react";
import { Phone, Award, CheckCircle2, TrendingUp, Shield, Star, ThumbsUp, MapPin, Mail } from "lucide-react";
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
import heroImage from "@assets/generated_images/Pearl_Certification_badge_certificate_b0d54794.webp";

export default function PearlCertifiedContractor() {
  const description = "Intelligent Design is a Pearl Certified contractor in Tucson, delivering nationally recognized high-performance home improvements. Energy efficiency, quality standards, and verified results for HVAC, solar, and more.";
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
          "name": "Pearl Certified Contractor",
          "item": "https://www.idesignac.com/pearl-certified-contractor"
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Pearl Certification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pearl Certification is the nationally recognized standard for high-performance home improvements. It provides independent, third-party verification that your home improvements meet rigorous energy efficiency, quality, and performance standards. Pearl Certification increases home value and provides documented proof of your home's enhanced performance."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose a Pearl Certified contractor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pearl Certified contractors have met strict qualification requirements and commit to installing high-performance systems that meet or exceed industry standards. Choosing a Pearl Certified contractor ensures quality workmanship, verified energy savings, increased home value, and documented performance results that can be transferred to future homeowners."
          }
        },
        {
          "@type": "Question",
          "name": "What services qualify for Pearl Certification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pearl Certification covers high-performance HVAC systems, solar panel installations, energy-efficient water heaters, insulation and air sealing, high-efficiency windows and doors, and whole-home energy upgrades. Any home improvement that significantly impacts energy performance can potentially qualify for Pearl Certification."
          }
        },
        {
          "@type": "Question",
          "name": "How does Pearl Certification increase my home value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pearl Certification provides third-party documentation of your home's high-performance features, making them visible to appraisers and potential buyers. Studies show Pearl Certified homes sell for 5% more on average and spend less time on the market. The certification transfers to new owners, making your investment more valuable."
          }
        },
        {
          "@type": "Question",
          "name": "Is Intelligent Design a Pearl Certified contractor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Intelligent Design is proud to be a Pearl Certified contractor serving Tucson and Southern Arizona. Our technicians are trained in high-performance installation techniques, and we're committed to delivering verifiable energy savings and quality workmanship that meets Pearl's rigorous standards."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Pearl Certification cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pearl Certification fees vary based on the scope of your project, but typically range from $150-$500. This small investment provides documented proof of your home's enhanced performance and can increase your home's resale value by thousands of dollars. We'll include certification costs in your project estimate."
          }
        },
        {
          "@type": "Question",
          "name": "How long does the Pearl Certification process take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The certification process typically takes 2-4 weeks after project completion. This includes documentation review, third-party verification, and issuance of your Pearl Certification report. The report stays with your home and can be shared with appraisers, buyers, and real estate professionals."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get Pearl Certification for existing improvements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! If you've recently completed qualifying home improvements with proper documentation, you may be able to obtain Pearl Certification retroactively. Contact us for an assessment of your existing systems to determine if they meet Pearl's performance standards."
          }
        },
        {
          "@type": "Question",
          "name": "What documentation does Pearl Certification provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pearl Certification provides a comprehensive report documenting all certified improvements, energy performance metrics, quality standards met, and projected energy savings. This report is transferable to future homeowners and can be used by appraisers to justify higher home valuations."
          }
        },
        {
          "@type": "Question",
          "name": "Do Pearl Certified improvements qualify for tax credits or rebates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many Pearl Certified improvements qualify for federal tax credits, state rebates, and utility incentives. Pearl Certification documentation makes it easier to claim these benefits by providing verified proof of system performance and efficiency ratings. We'll help you identify all available incentives for your project."
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
        title="Pearl Certified Contractor | High-Performance Home Solutions | Intelligent Design Tucson"
        description={description}
        canonical={`${SITE_URL}/pearl-certified-contractor`}
        openGraph={[
          { property: 'og:title', content: 'Pearl Certified Contractor | High-Performance Home Solutions | Intelligent Design Tucson' },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: `${SITE_URL}/pearl-certified-contractor` },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: 'Pearl Certification badge for high-performance home improvements' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Pearl Certified Contractor | High-Performance Home Solutions | Intelligent Design Tucson' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Pearl Certification badge for high-performance home improvements' }
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
            alt="Pearl Certification badge for high-performance home improvements"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
            Pearl Certified Contractor | High-Performance Home Solutions
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            Nationally Recognized Standard for Energy Efficiency & Quality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8" data-testid="button-hero-cta-schedule">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Pearl Certified Service
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
              What is Pearl Certification?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-intro-description">
              Pearl Certification is the nationally recognized standard for high-performance home improvements. As a Pearl Certified contractor, Intelligent Design delivers independently verified, high-quality installations that meet rigorous energy efficiency and performance standards. Your Pearl Certification stays with your home, increasing its value and providing documented proof of superior performance for future buyers.
            </p>
          </div>
        </section>

        <section data-testid="section-what-it-means">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-certification-meaning-title">
            What Pearl Certification Means
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card data-testid="card-energy-efficiency">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Energy Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Third-party verified energy savings with documented performance metrics that prove your systems operate at peak efficiency.
                </p>
              </CardContent>
            </Card>
            <Card data-testid="card-quality-standards">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Quality Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rigorous installation requirements ensure proper sizing, installation techniques, and system performance that exceeds industry minimums.
                </p>
              </CardContent>
            </Card>
            <Card data-testid="card-verified-results">
              <CardHeader>
                <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Verified Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Independent documentation provides proof of performance that appraisers and buyers can trust, increasing your home's marketability.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section data-testid="section-benefits">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-benefits-title">
            Benefits of Choosing a Pearl Certified Contractor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Increased Home Value",
                description: "Pearl Certified homes sell for 5% more on average and spend less time on the market."
              },
              {
                icon: CheckCircle2,
                title: "Verified Savings",
                description: "Third-party documentation proves actual energy savings, not just manufacturer estimates."
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Strict contractor qualifications and installation standards ensure superior workmanship."
              },
              {
                icon: Star,
                title: "Transferable Certification",
                description: "Your certification stays with the home, providing value to future owners."
              },
              {
                icon: ThumbsUp,
                title: "Appraisal Recognition",
                description: "Appraisers can use Pearl documentation to justify higher home valuations."
              },
              {
                icon: TrendingUp,
                title: "Market Advantage",
                description: "Stand out from competing listings with verified high-performance features."
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
              Get Pearl Certified Today
            </Button>
          </div>
        </section>

        <section data-testid="section-qualifying-services">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-services-title">
            Services That Qualify for Pearl Certification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "High-Efficiency HVAC Systems",
              "Solar Panel Installations",
              "Energy-Efficient Water Heaters",
              "Insulation & Air Sealing",
              "High-Performance Windows & Doors",
              "Whole-Home Energy Upgrades"
            ].map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border" data-testid={`item-service-${index}`}>
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg">{service}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" data-testid="button-services-cta">
              Learn More About Our Services
            </Button>
          </div>
        </section>

        <section data-testid="section-scheduler">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8" data-testid="text-scheduler-title">
            Schedule Your Pearl Certified Installation
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
            Pearl Certification FAQs
          </h2>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            <AccordionItem value="item-1" data-testid="faq-item-1">
              <AccordionTrigger data-testid="faq-question-1">What is Pearl Certification?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-1">
                Pearl Certification is the nationally recognized standard for high-performance home improvements. It provides independent, third-party verification that your home improvements meet rigorous energy efficiency, quality, and performance standards. Pearl Certification increases home value and provides documented proof of your home's enhanced performance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" data-testid="faq-item-2">
              <AccordionTrigger data-testid="faq-question-2">Why choose a Pearl Certified contractor?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-2">
                Pearl Certified contractors have met strict qualification requirements and commit to installing high-performance systems that meet or exceed industry standards. Choosing a Pearl Certified contractor ensures quality workmanship, verified energy savings, increased home value, and documented performance results that can be transferred to future homeowners.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" data-testid="faq-item-3">
              <AccordionTrigger data-testid="faq-question-3">What services qualify for Pearl Certification?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-3">
                Pearl Certification covers high-performance HVAC systems, solar panel installations, energy-efficient water heaters, insulation and air sealing, high-efficiency windows and doors, and whole-home energy upgrades. Any home improvement that significantly impacts energy performance can potentially qualify for Pearl Certification.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" data-testid="faq-item-4">
              <AccordionTrigger data-testid="faq-question-4">How does Pearl Certification increase my home value?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-4">
                Pearl Certification provides third-party documentation of your home's high-performance features, making them visible to appraisers and potential buyers. Studies show Pearl Certified homes sell for 5% more on average and spend less time on the market. The certification transfers to new owners, making your investment more valuable.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" data-testid="faq-item-5">
              <AccordionTrigger data-testid="faq-question-5">Is Intelligent Design a Pearl Certified contractor?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-5">
                Yes! Intelligent Design is proud to be a Pearl Certified contractor serving Tucson and Southern Arizona. Our technicians are trained in high-performance installation techniques, and we're committed to delivering verifiable energy savings and quality workmanship that meets Pearl's rigorous standards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" data-testid="faq-item-6">
              <AccordionTrigger data-testid="faq-question-6">How much does Pearl Certification cost?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-6">
                Pearl Certification fees vary based on the scope of your project, but typically range from $150-$500. This small investment provides documented proof of your home's enhanced performance and can increase your home's resale value by thousands of dollars. We'll include certification costs in your project estimate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" data-testid="faq-item-7">
              <AccordionTrigger data-testid="faq-question-7">How long does the Pearl Certification process take?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-7">
                The certification process typically takes 2-4 weeks after project completion. This includes documentation review, third-party verification, and issuance of your Pearl Certification report. The report stays with your home and can be shared with appraisers, buyers, and real estate professionals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8" data-testid="faq-item-8">
              <AccordionTrigger data-testid="faq-question-8">Can I get Pearl Certification for existing improvements?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-8">
                Yes! If you've recently completed qualifying home improvements with proper documentation, you may be able to obtain Pearl Certification retroactively. Contact us for an assessment of your existing systems to determine if they meet Pearl's performance standards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9" data-testid="faq-item-9">
              <AccordionTrigger data-testid="faq-question-9">What documentation does Pearl Certification provide?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-9">
                Pearl Certification provides a comprehensive report documenting all certified improvements, energy performance metrics, quality standards met, and projected energy savings. This report is transferable to future homeowners and can be used by appraisers to justify higher home valuations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10" data-testid="faq-item-10">
              <AccordionTrigger data-testid="faq-question-10">Do Pearl Certified improvements qualify for tax credits or rebates?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-10">
                Many Pearl Certified improvements qualify for federal tax credits, state rebates, and utility incentives. Pearl Certification documentation makes it easier to claim these benefits by providing verified proof of system performance and efficiency ratings. We'll help you identify all available incentives for your project.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="text-center mt-8">
            <Button size="lg" data-testid="button-faq-cta">
              <Phone className="mr-2 h-5 w-5" />
              Have More Questions? Call Us
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
