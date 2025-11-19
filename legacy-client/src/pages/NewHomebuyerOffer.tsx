import { useEffect } from "react";
import { Phone, Home, Gift, CheckCircle2, Shield, Clock, ThumbsUp, MapPin, Mail } from "lucide-react";
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
import heroImage from "@assets/generated_images/new_home_welcome_sign_a02322cf.webp";

export default function NewHomebuyerOffer() {
  const description = "Special offers for new homeowners in Tucson! Free home inspections, discounts on first services, and maintenance plans. Welcome home with Intelligent Design's new homebuyer program.";
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
          "name": "New Homebuyer Offer",
          "item": "https://www.idesignac.com/new-homebuyer-offer"
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the New Homebuyer Offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our New Homebuyer Offer provides special savings and services for new Tucson homeowners including a free comprehensive home systems inspection (HVAC, plumbing, electrical), 15% off your first service, priority scheduling, and discounted Family Protection Plan enrollment. This exclusive program helps you protect your investment and budget for home maintenance."
          }
        },
        {
          "@type": "Question",
          "name": "Who qualifies for the New Homebuyer Offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Any homeowner who has purchased a home in the Tucson area within the past 6 months qualifies for our New Homebuyer Offer. Both first-time buyers and repeat buyers are eligible. Simply provide proof of purchase date when scheduling your free inspection."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in the free home inspection?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our comprehensive home inspection includes HVAC system evaluation and filter check, water heater inspection and flush recommendation, plumbing system assessment for leaks, electrical panel inspection, indoor air quality check, and a detailed report with maintenance recommendations and cost estimates for any needed repairs."
          }
        },
        {
          "@type": "Question",
          "name": "How much can I save with the New Homebuyer Offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "New homebuyers save 15% on their first service (up to $500 savings), receive a free home inspection valued at $299, get discounted Family Protection Plan enrollment (save $200 on annual membership), and enjoy priority scheduling. Total potential savings exceed $1,000 in your first year."
          }
        },
        {
          "@type": "Question",
          "name": "How long is the New Homebuyer Offer valid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You must purchase your home within the past 6 months to qualify. Once qualified, you can use the free inspection within 90 days of purchase and the 15% service discount within 12 months of purchase. We recommend scheduling your inspection within 30 days to identify any issues early."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use the offer for multiple services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 15% discount applies to your first qualifying service only (HVAC, plumbing, electrical, or roofing). However, you can combine it with other offers like our Family Protection Plan discount, financing promotions, or manufacturer rebates to maximize your savings."
          }
        },
        {
          "@type": "Question",
          "name": "What if my home inspection finds problems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide a detailed report of all findings with transparent pricing for any recommended repairs. There's no obligation to proceed with repairs, but if you do, you'll receive your 15% new homebuyer discount. We can also help you pursue warranty claims with your home's previous owner if applicable."
          }
        },
        {
          "@type": "Question",
          "name": "Why do new homeowners choose Intelligent Design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "New homeowners trust us because we're BBB A+ rated, have 22,000+ five-star reviews, provide transparent pricing with no surprises, offer comprehensive warranties on all work, and have served Tucson families since 1979. We understand the stress of moving and make home maintenance easy."
          }
        },
        {
          "@type": "Question",
          "name": "How do I claim my New Homebuyer Offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply call (520) 333-2665 or schedule online and mention the New Homebuyer Offer. Have your closing date ready to verify eligibility. We'll schedule your free inspection at your convenience and apply your discount automatically to your first qualifying service."
          }
        },
        {
          "@type": "Question",
          "name": "Can I combine this offer with financing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Our New Homebuyer Offer can be combined with our flexible financing options including 0% APR for 12 months on approved credit. This makes it easier to budget for necessary repairs or upgrades without straining your finances after buying your home."
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
        title="New Homebuyer Offer | Welcome Home Savings | Intelligent Design Tucson"
        description={description}
        canonical={`${SITE_URL}/new-homebuyer-offer`}
        openGraph={{
          title: "New Homebuyer Offer | Welcome Home Savings | Intelligent Design Tucson",
          description,
          image: imageUrl,
          url: `${SITE_URL}/new-homebuyer-offer`,
        }}
        twitter={{
          title: "New Homebuyer Offer | Welcome Home Savings | Intelligent Design Tucson",
          description,
          image: imageUrl,
          imageAlt: "New home with welcome sign in Tucson",
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
            alt="New home with welcome sign in Tucson"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
            New Homebuyer Offer | Welcome Home Savings
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            Exclusive Discounts & Free Inspection for Tucson's New Homeowners
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8" data-testid="button-hero-cta-schedule">
              <Gift className="mr-2 h-5 w-5" />
              Claim Your New Homebuyer Offer
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
              Congratulations on Your New Tucson Home!
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-intro-description">
              Welcome to Tucson! As a special thank you for choosing our community, Intelligent Design offers exclusive savings for new homeowners. Get a free comprehensive home systems inspection, 15% off your first service, and priority scheduling. We'll help you protect your investment and budget for home maintenance with confidence.
            </p>
          </div>
        </section>

        <section data-testid="section-offer-details">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-offer-title">
            Your New Homebuyer Offer Includes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card data-testid="card-free-inspection">
              <CardHeader>
                <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Free Home Inspection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Comprehensive evaluation of HVAC, plumbing, and electrical systems with detailed report and recommendations.
                </p>
                <p className="text-primary font-semibold">Value: $299</p>
              </CardContent>
            </Card>
            <Card data-testid="card-service-discount">
              <CardHeader>
                <Gift className="h-12 w-12 text-primary mb-4" />
                <CardTitle>15% Off First Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Save on any HVAC, plumbing, electrical, solar, or roofing service within your first year of homeownership.
                </p>
                <p className="text-primary font-semibold">Savings: Up to $500</p>
              </CardContent>
            </Card>
            <Card data-testid="card-priority-scheduling">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Priority Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Skip the wait with priority appointment scheduling for all services during your first year.
                </p>
                <p className="text-primary font-semibold">Priceless Convenience</p>
              </CardContent>
            </Card>
            <Card data-testid="card-protection-plan">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Protection Plan Discount</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Save $200 on Family Protection Plan enrollment with preventive maintenance and priority emergency service.
                </p>
                <p className="text-primary font-semibold">Savings: $200</p>
              </CardContent>
            </Card>
            <Card data-testid="card-financing">
              <CardHeader>
                <ThumbsUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Flexible Financing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  0% APR financing for 12 months on approved credit makes unexpected repairs affordable.
                </p>
                <p className="text-primary font-semibold">Easy Budget Planning</p>
              </CardContent>
            </Card>
            <Card data-testid="card-expert-guidance">
              <CardHeader>
                <Home className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Personalized recommendations for maintaining your home's systems and budgeting for future needs.
                </p>
                <p className="text-primary font-semibold">Peace of Mind</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" data-testid="button-offer-cta">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Your Free Inspection
            </Button>
          </div>
        </section>

        <section data-testid="section-why-choose">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-why-choose-title">
            Why New Homeowners Choose Intelligent Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "BBB A+ Rating Since 1979",
              "22,000+ Five-Star Reviews",
              "Transparent Pricing - No Surprises",
              "Comprehensive Warranties",
              "24/7 Emergency Service",
              "Family-Owned Tucson Company"
            ].map((reason, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border" data-testid={`item-reason-${index}`}>
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg">{reason}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" data-testid="button-why-choose-cta">
              Learn More About Our Company
            </Button>
          </div>
        </section>

        <section data-testid="section-new-homeowner-services">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-services-title">
            Essential Services for New Homeowners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: CheckCircle2,
                title: "HVAC Inspection & Service",
                description: "Ensure your AC and heating systems are ready for Tucson's extreme temperatures."
              },
              {
                icon: Shield,
                title: "Plumbing System Check",
                description: "Identify potential leaks, water heater issues, and drainage problems before they become emergencies."
              },
              {
                icon: ThumbsUp,
                title: "Electrical Safety Inspection",
                description: "Verify your electrical panel, outlets, and wiring meet current safety standards."
              },
              {
                icon: Home,
                title: "Water Heater Evaluation",
                description: "Assess water heater condition, efficiency, and remaining lifespan to plan for replacement."
              },
              {
                icon: Clock,
                title: "Indoor Air Quality",
                description: "Improve air quality with duct cleaning, air purification, and humidity control solutions."
              },
              {
                icon: Gift,
                title: "Smart Home Upgrades",
                description: "Install smart thermostats, leak detectors, and energy monitoring systems."
              }
            ].map((service, index) => (
              <Card key={index} data-testid={`card-service-${index}`}>
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" data-testid="button-services-cta">
              <Phone className="mr-2 h-5 w-5" />
              Get Started Today
            </Button>
          </div>
        </section>

        <section data-testid="section-scheduler">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8" data-testid="text-scheduler-title">
            Schedule Your Free New Homeowner Inspection
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
            New Homebuyer Offer FAQs
          </h2>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            <AccordionItem value="item-1" data-testid="faq-item-1">
              <AccordionTrigger data-testid="faq-question-1">What is the New Homebuyer Offer?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-1">
                Our New Homebuyer Offer provides special savings and services for new Tucson homeowners including a free comprehensive home systems inspection (HVAC, plumbing, electrical), 15% off your first service, priority scheduling, and discounted Family Protection Plan enrollment. This exclusive program helps you protect your investment and budget for home maintenance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" data-testid="faq-item-2">
              <AccordionTrigger data-testid="faq-question-2">Who qualifies for the New Homebuyer Offer?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-2">
                Any homeowner who has purchased a home in the Tucson area within the past 6 months qualifies for our New Homebuyer Offer. Both first-time buyers and repeat buyers are eligible. Simply provide proof of purchase date when scheduling your free inspection.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" data-testid="faq-item-3">
              <AccordionTrigger data-testid="faq-question-3">What's included in the free home inspection?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-3">
                Our comprehensive home inspection includes HVAC system evaluation and filter check, water heater inspection and flush recommendation, plumbing system assessment for leaks, electrical panel inspection, indoor air quality check, and a detailed report with maintenance recommendations and cost estimates for any needed repairs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" data-testid="faq-item-4">
              <AccordionTrigger data-testid="faq-question-4">How much can I save with the New Homebuyer Offer?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-4">
                New homebuyers save 15% on their first service (up to $500 savings), receive a free home inspection valued at $299, get discounted Family Protection Plan enrollment (save $200 on annual membership), and enjoy priority scheduling. Total potential savings exceed $1,000 in your first year.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" data-testid="faq-item-5">
              <AccordionTrigger data-testid="faq-question-5">How long is the New Homebuyer Offer valid?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-5">
                You must purchase your home within the past 6 months to qualify. Once qualified, you can use the free inspection within 90 days of purchase and the 15% service discount within 12 months of purchase. We recommend scheduling your inspection within 30 days to identify any issues early.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" data-testid="faq-item-6">
              <AccordionTrigger data-testid="faq-question-6">Can I use the offer for multiple services?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-6">
                The 15% discount applies to your first qualifying service only (HVAC, plumbing, electrical, or roofing). However, you can combine it with other offers like our Family Protection Plan discount, financing promotions, or manufacturer rebates to maximize your savings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" data-testid="faq-item-7">
              <AccordionTrigger data-testid="faq-question-7">What if my home inspection finds problems?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-7">
                We provide a detailed report of all findings with transparent pricing for any recommended repairs. There's no obligation to proceed with repairs, but if you do, you'll receive your 15% new homebuyer discount. We can also help you pursue warranty claims with your home's previous owner if applicable.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8" data-testid="faq-item-8">
              <AccordionTrigger data-testid="faq-question-8">Why do new homeowners choose Intelligent Design?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-8">
                New homeowners trust us because we're BBB A+ rated, have 22,000+ five-star reviews, provide transparent pricing with no surprises, offer comprehensive warranties on all work, and have served Tucson families since 1979. We understand the stress of moving and make home maintenance easy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9" data-testid="faq-item-9">
              <AccordionTrigger data-testid="faq-question-9">How do I claim my New Homebuyer Offer?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-9">
                Simply call (520) 333-2665 or schedule online and mention the New Homebuyer Offer. Have your closing date ready to verify eligibility. We'll schedule your free inspection at your convenience and apply your discount automatically to your first qualifying service.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10" data-testid="faq-item-10">
              <AccordionTrigger data-testid="faq-question-10">Can I combine this offer with financing?</AccordionTrigger>
              <AccordionContent data-testid="faq-answer-10">
                Yes! Our New Homebuyer Offer can be combined with our flexible financing options including 0% APR for 12 months on approved credit. This makes it easier to budget for necessary repairs or upgrades without straining your finances after buying your home.
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
