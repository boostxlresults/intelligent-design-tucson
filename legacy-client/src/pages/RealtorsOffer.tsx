import { useEffect } from "react";
import { Phone, Home, Users, CheckCircle2, Clock, Shield, Star, MapPin, Mail } from "lucide-react";
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
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";
import heroImage from "@assets/generated_images/realtor_home_inspection_partnership_fe34ac31.webp";

export default function RealtorsOffer() {
  const description = "Exclusive REALTORS® partnership program with Intelligent Design. Priority service for your clients, special pricing, quick response times, and expert home services support. Join Tucson's most trusted home services partner.";
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
          "name": "REALTORS® Offer",
          "item": "https://www.idesignac.com/realtors-offer"
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Intelligent Design REALTORS® Program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our REALTORS® Program is an exclusive partnership providing real estate professionals with priority service for their clients, special pricing on all services, 24-48 hour response times for inspections and quotes, dedicated account manager support, and co-marketing opportunities. We help you close deals faster and provide exceptional value to your clients."
          }
        },
        {
          "@type": "Question",
          "name": "How do I join the REALTORS® Program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Joining is simple and free! Call (520) 333-2665 or fill out our online enrollment form. You'll receive a dedicated account manager, marketing materials you can share with clients, priority scheduling access, and special pricing codes. There are no fees or minimum referral requirements to participate."
          }
        },
        {
          "@type": "Question",
          "name": "What services are available through the REALTORS® Program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All our services are available including HVAC inspection and repair, plumbing system evaluation, electrical safety checks, solar installations, water heater replacement, roofing services, and home energy audits. We provide comprehensive home services to support your transactions from listing to closing."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can you respond to my clients' needs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "REALTORS® Program members receive priority scheduling with 24-48 hour response times for non-emergency services and same-day response for urgent situations. We understand real estate timelines and work around inspection contingencies and closing deadlines to keep your deals on track."
          }
        },
        {
          "@type": "Question",
          "name": "What pricing do my clients receive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your clients receive preferred partner pricing with savings of 10-15% on most services. We provide transparent, competitive quotes with no hidden fees. Pricing is clearly disclosed upfront so there are no surprises, and we can work within inspection repair budgets."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with pre-listing inspections?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Pre-listing inspections help you identify and address potential issues before they derail a sale. We provide comprehensive home system evaluations with detailed reports and repair estimates, allowing you to list properties with confidence and avoid last-minute surprises."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide documentation for closing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We provide detailed service records, warranty information, permits for all work, and compliance documentation needed for closing. Our reports are professional and comprehensive, satisfying lender requirements and providing buyers with confidence in their purchase."
          }
        },
        {
          "@type": "Question",
          "name": "Can I refer clients for new home construction services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We work with builders and new homeowners on HVAC installations, solar pre-wiring, electrical upgrades, plumbing systems, and energy-efficient solutions. We can coordinate with construction timelines and help your clients customize their new homes."
          }
        },
        {
          "@type": "Question",
          "name": "How does the referral process work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply call your dedicated account manager or use our online referral form with your client's contact information and service needs. We'll contact them within 24 hours, provide excellent service, and keep you informed throughout the process. You stay in the loop without having to manage the service details."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I partner with Intelligent Design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We're BBB A+ rated with 22,000+ five-star reviews, have served Tucson since 1979, provide transparent pricing and professional service, offer comprehensive warranties on all work, and understand real estate timelines and requirements. Our reputation helps you build trust with your clients and close more deals."
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
        title="REALTORS® Program | Partner with Tucson's #1 Rated Company | Intelligent Design"
        description={description}
        canonical={`${SITE_URL}/realtors-offer`}
        openGraph={{
          title: "REALTORS® Program | Partner with Tucson's #1 Rated Company | Intelligent Design",
          description,
          image: imageUrl,
          url: `${SITE_URL}/realtors-offer`,
        }}
        twitter={{
          title: "REALTORS® Program | Partner with Tucson's #1 Rated Company | Intelligent Design",
          description,
          image: imageUrl,
          imageAlt: "Real estate professional partnership with Intelligent Design Tucson",
        }}
      />
      <GTM />
      <DNIInjector />
      <Header />
      <MobileFloatingActions />

      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Real estate professional partnership with Intelligent Design Tucson"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
            REALTORS® Program | Partner with Tucson's #1 Rated Company
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            Exclusive Benefits for Real Estate Professionals & Their Clients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8" data-testid="button-hero-cta-enroll">
              <Users className="mr-2 h-5 w-5" />
              Join the Program Today
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
              Your Trusted Home Services Partner
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-intro-description">
              Intelligent Design's REALTORS® Program provides real estate professionals with the resources and support to serve clients better, close deals faster, and build lasting relationships. With priority service, preferred pricing, and dedicated support, we help you deliver exceptional value at every stage of the transaction.
            </p>
          </div>
        </section>

        <section data-testid="section-realtor-benefits">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-benefits-title">
            Program Benefits for REALTORS®
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card data-testid="card-priority-service">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Priority Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  24-48 hour response times for inspections and quotes. Same-day service for urgent situations. We work around your transaction timelines.
                </p>
              </CardContent>
            </Card>
            <Card data-testid="card-special-pricing">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Special Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your clients receive 10-15% savings on all services with transparent, competitive pricing and no hidden fees.
                </p>
              </CardContent>
            </Card>
            <Card data-testid="card-account-manager">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Dedicated Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your personal account manager coordinates all services, keeps you informed, and ensures client satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" data-testid="button-benefits-cta">
              <Phone className="mr-2 h-5 w-5" />
              Enroll Now - It's Free!
            </Button>
          </div>
        </section>

        <section data-testid="section-client-benefits">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-client-benefits-title">
            Benefits for Your Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "BBB A+ Rated Company Since 1979",
              "22,000+ Five-Star Reviews",
              "Transparent Pricing & Estimates",
              "Comprehensive Warranties",
              "Professional Documentation for Closing",
              "Same-Day Emergency Service Available"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border" data-testid={`item-client-benefit-${index}`}>
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" data-testid="button-client-benefits-cta">
              See Our Customer Reviews
            </Button>
          </div>
        </section>

        <section data-testid="section-how-it-works">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-how-it-works-title">
            How the Program Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card data-testid="card-step-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <CardTitle>Enroll for Free</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sign up online or call us. No fees, no minimum referrals required. Get your account manager assigned immediately.
                </p>
              </CardContent>
            </Card>
            <Card data-testid="card-step-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <CardTitle>Refer Your Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Contact your account manager or use our online referral form. We'll respond within 24 hours to schedule service.
                </p>
              </CardContent>
            </Card>
            <Card data-testid="card-step-3">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <CardTitle>We Deliver Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Professional service, transparent pricing, and comprehensive documentation. We keep you informed every step of the way.
                </p>
              </CardContent>
            </Card>
            <Card data-testid="card-step-4">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  4
                </div>
                <CardTitle>Close with Confidence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Happy clients, smooth transactions, and a trusted partner for all their future home service needs.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" data-testid="button-how-it-works-cta">
              <Phone className="mr-2 h-5 w-5" />
              Get Started Today
            </Button>
          </div>
        </section>

        <section data-testid="section-scheduler">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8" data-testid="text-scheduler-title">
            Join Our REALTORS® Program
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
            REALTORS® Program FAQs
          </h2>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            <AccordionItem value="item-1" data-testid="faq-item-1">
              <AccordionTrigger data-testid="faq-question-1">What is the Intelligent Design REALTORS® Program?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-1">
                Our REALTORS® Program is an exclusive partnership providing real estate professionals with priority service for their clients, special pricing on all services, 24-48 hour response times for inspections and quotes, dedicated account manager support, and co-marketing opportunities. We help you close deals faster and provide exceptional value to your clients.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" data-testid="faq-item-2">
              <AccordionTrigger data-testid="faq-question-2">How do I join the REALTORS® Program?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-2">
                Joining is simple and free! Call (520) 333-2665 or fill out our online enrollment form. You'll receive a dedicated account manager, marketing materials you can share with clients, priority scheduling access, and special pricing codes. There are no fees or minimum referral requirements to participate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" data-testid="faq-item-3">
              <AccordionTrigger data-testid="faq-question-3">What services are available through the REALTORS® Program?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-3">
                All our services are available including HVAC inspection and repair, plumbing system evaluation, electrical safety checks, solar installations, water heater replacement, roofing services, and home energy audits. We provide comprehensive home services to support your transactions from listing to closing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" data-testid="faq-item-4">
              <AccordionTrigger data-testid="faq-question-4">How quickly can you respond to my clients' needs?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-4">
                REALTORS® Program members receive priority scheduling with 24-48 hour response times for non-emergency services and same-day response for urgent situations. We understand real estate timelines and work around inspection contingencies and closing deadlines to keep your deals on track.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" data-testid="faq-item-5">
              <AccordionTrigger data-testid="faq-question-5">What pricing do my clients receive?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-5">
                Your clients receive preferred partner pricing with savings of 10-15% on most services. We provide transparent, competitive quotes with no hidden fees. Pricing is clearly disclosed upfront so there are no surprises, and we can work within inspection repair budgets.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" data-testid="faq-item-6">
              <AccordionTrigger data-testid="faq-question-6">Can you help with pre-listing inspections?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-6">
                Absolutely! Pre-listing inspections help you identify and address potential issues before they derail a sale. We provide comprehensive home system evaluations with detailed reports and repair estimates, allowing you to list properties with confidence and avoid last-minute surprises.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" data-testid="faq-item-7">
              <AccordionTrigger data-testid="faq-question-7">Do you provide documentation for closing?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-7">
                Yes! We provide detailed service records, warranty information, permits for all work, and compliance documentation needed for closing. Our reports are professional and comprehensive, satisfying lender requirements and providing buyers with confidence in their purchase.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8" data-testid="faq-item-8">
              <AccordionTrigger data-testid="faq-question-8">Can I refer clients for new home construction services?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-8">
                Yes! We work with builders and new homeowners on HVAC installations, solar pre-wiring, electrical upgrades, plumbing systems, and energy-efficient solutions. We can coordinate with construction timelines and help your clients customize their new homes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9" data-testid="faq-item-9">
              <AccordionTrigger data-testid="faq-question-9">How does the referral process work?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-9">
                Simply call your dedicated account manager or use our online referral form with your client's contact information and service needs. We'll contact them within 24 hours, provide excellent service, and keep you informed throughout the process. You stay in the loop without having to manage the service details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10" data-testid="faq-item-10">
              <AccordionTrigger data-testid="faq-question-10">Why should I partner with Intelligent Design?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-10">
                We're BBB A+ rated with 22,000+ five-star reviews, have served Tucson since 1979, provide transparent pricing and professional service, offer comprehensive warranties on all work, and understand real estate timelines and requirements. Our reputation helps you build trust with your clients and close more deals.
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
