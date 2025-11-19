import { useEffect } from "react";
import { Phone, Star, Users, Award, Shield, CheckCircle2, Heart, Briefcase, Clock, ThumbsUp, TrendingUp, MapPin, Mail } from "lucide-react";
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
import heroImage from "@assets/generated_images/happy_Tucson_family_with_technician_74923601.webp";

export default function WhyTucsonChoosesIntelligentDesign() {
  const description = "Discover why over 22,000 Tucson families choose Intelligent Design for HVAC, plumbing, solar, electrical & roofing. Family & veteran-owned since 2009. BBB A+ rated. 80+ professional technicians serving Greater Tucson 24/7.";
  const imageUrl = `${SITE_URL}${heroImage}`;

  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why should I choose Intelligent Design over other Tucson contractors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Intelligent Design has over 22,000 five-star reviews, BBB A+ rating since 1979, and is family & veteran-owned. We employ 80+ highly trained technicians who provide 24/7 service across all trades: HVAC, plumbing, electrical, solar, and roofing. Our industry-leading guarantees, comprehensive warranties, and transparent pricing make us Tucson's most trusted home services company."
          }
        },
        {
          "@type": "Question",
          "name": "How long has Intelligent Design been serving Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Intelligent Design was founded in 2009 and has been serving Tucson families and businesses for over 15 years. Our family and veteran-owned company has built a reputation on quality workmanship, honest pricing, and exceptional customer service throughout Greater Tucson."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Intelligent Design different from other home services companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We're the only contractor in Tucson offering all five major trades under one roof: HVAC, plumbing, electrical, solar, and roofing. This means one company you can trust for all your home services needs."
          }
        },
        {
          "@type": "Question",
          "name": "How many reviews does Intelligent Design have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We have over 22,000 five-star reviews across Google, Angi, BBB, and other platforms. With a 4.97 average rating, we're Tucson's highest-rated and most-reviewed home services company. Our customers consistently praise our professional technicians, transparent pricing, and quality work."
          }
        },
        {
          "@type": "Question",
          "name": "Is Intelligent Design family-owned?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Intelligent Design is proudly family and veteran-owned. We understand Tucson values because we're your neighbors. Our commitment to treating every customer like family has earned us the trust of thousands of Tucson homeowners and businesses."
          }
        },
        {
          "@type": "Question",
          "name": "What certifications does Intelligent Design have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain BBB A+ rating, proper licensing, insurance, and bonding for all services we provide."
          }
        },
        {
          "@type": "Question",
          "name": "How many technicians work at Intelligent Design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our team includes 80+ highly trained technicians across HVAC, plumbing, electrical, solar, and roofing. All technicians are background-checked, drug-tested, and continuously trained on the latest technologies and best practices. This large team ensures we can provide same-day service and 24/7 emergency availability."
          }
        },
        {
          "@type": "Question",
          "name": "Does Intelligent Design offer financing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer flexible financing options to make home comfort and improvements affordable. From HVAC system replacements to solar installations, we work with you to find payment plans that fit your budget. Our financing specialists can discuss options during your consultation."
          }
        },
        {
          "@type": "Question",
          "name": "What guarantees does Intelligent Design offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer six industry-leading guarantees: No Lemon Guarantee (10-year), Satisfaction Guarantee, Investment Guarantee (price match), Performance Guarantee (2-year), Lifetime Craftsmanship Warranty, and No Surprises Guarantee. These comprehensive warranties protect your investment and demonstrate our confidence in our work."
          }
        },
        {
          "@type": "Question",
          "name": "Does Intelligent Design service commercial properties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We serve both residential and commercial clients throughout Greater Tucson. Our commercial services include HVAC, plumbing, electrical, solar, and roofing for businesses of all sizes. We understand the unique needs of commercial properties and provide responsive, professional service with minimal disruption."
          }
        },
        {
          "@type": "Question",
          "name": "What areas does Intelligent Design serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve all of Greater Tucson including Tucson, Oro Valley, Marana, Sahuarita, Green Valley, Vail, Corona de Tucson, Drexel Heights, Casas Adobes, Tucson Estates, Tortolita, Picture Rocks, Rillito, Cortaro, and Avra Valley. Our large team ensures fast response times throughout our service area."
          }
        },
        {
          "@type": "Question",
          "name": "Can Intelligent Design handle emergency service calls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We provide 24/7 emergency service for HVAC, plumbing, and electrical issues. Whether it's a middle-of-the-night AC failure in summer, a burst pipe, or electrical emergency, our technicians are always available. Call (520) 333-2665 anytime for immediate assistance."
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
          "name": "Why Tucson Chooses Intelligent Design",
          "item": "https://www.idesignac.com/why-tucson-chooses-intelligent-design"
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

  const trustSignals = [
    {
      icon: Star,
      title: "22,000+ Five-Star Reviews",
      description: "Tucson's highest-rated home services company with a 4.97 average rating across all platforms.",
      link: "/customer-reviews",
      linkText: "Read Our Reviews"
    },
    {
      icon: Star,
      title: "Video Testimonials",
      description: "Watch real Tucson customers share their experiences with our HVAC, plumbing, solar, and electrical services.",
      link: "/video-testimonials",
      linkText: "Watch Videos"
    },
    {
      icon: Briefcase,
      title: "Recent Projects",
      description: "See our latest HVAC, plumbing, solar, electrical, and roofing projects completed for Tucson families.",
      link: "/recent-projects",
      linkText: "View Projects"
    },
    {
      icon: Shield,
      title: "Industry-Leading Guarantees",
      description: "Six comprehensive guarantees including Lifetime Craftsmanship Warranty and No Lemon Guarantee.",
      link: "/guarantees",
      linkText: "Our Guarantees"
    },
    {
      icon: Heart,
      title: "Family Protection Plans",
      description: "Annual maintenance plans that keep your HVAC, plumbing, and electrical systems running perfectly year-round.",
      link: "/family-protection-plans",
      linkText: "Protect Your Home"
    }
  ];

  const specialOffers = [
    {
      icon: Heart,
      title: "New Homebuyer Offer",
      description: "Special savings and services for new Tucson homeowners. Get comprehensive home inspections and priority service.",
      link: "/new-homebuyer-offer",
      linkText: "New Homeowner Savings"
    },
    {
      icon: Briefcase,
      title: "REALTORS® Offer",
      description: "Exclusive program for REALTORS® and their clients. Fast inspections, competitive pricing, and priority scheduling.",
      link: "/realtors-offer",
      linkText: "Partner With Us"
    }
  ];

  return (
    <>
      <MetaHead
        title="Why Tucson Chooses Intelligent Design | Tucson's #1 Rated Home Services Company"
        description={description}
        canonical={`${SITE_URL}/why-tucson-chooses-intelligent-design`}
        openGraph={{
          title: "Why Tucson Chooses Intelligent Design | Tucson's #1 Rated Home Services Company",
          description,
          image: imageUrl,
          url: `${SITE_URL}/why-tucson-chooses-intelligent-design`,
        }}
        twitter={{
          title: "Why Tucson Chooses Intelligent Design | Tucson's #1 Rated Home Services Company",
          description,
          image: imageUrl,
          imageAlt: "Happy Tucson family with Intelligent Design technician",
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
                Why Tucson Chooses Intelligent Design
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Tucson's #1 Rated Home Services Company
              </p>
              <p className="text-xl mb-8 text-gray-200" data-testid="text-hero-description">
                Over 22,000 Five-Star Reviews | Family & Veteran-Owned Since 2009 | 80+ Professional Technicians
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
                Why We're Tucson's Most Trusted Home Services Company
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Since 2009, Intelligent Design has been the name Tucson families trust for HVAC, plumbing, electrical, solar, and roofing services. As a family and veteran-owned company, we understand what matters most to homeowners—reliability, honesty, and exceptional service.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With over 22,000 five-star reviews and a BBB A+ rating, our reputation speaks for itself. Our team of 80+ highly trained technicians is available 24/7 to serve you, and we're the only company in Tucson offering all five major trades under one roof.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We're not just contractors—we're your neighbors. We live here, work here, and are committed to making Tucson homes more comfortable, efficient, and valuable. When you choose Intelligent Design, you're choosing a company that treats every customer like family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Experience the Difference"
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

        {/* Trust Signals Grid */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12" data-testid="heading-trust-signals">
              What Sets Us Apart
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {trustSignals.map((signal, index) => (
                <Card
                  key={index}
                  className="hover-elevate"
                  data-testid={`card-trust-signal-${index}`}
                >
                  <CardHeader>
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                      <signal.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">
                      {signal.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {signal.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full"
                      asChild
                    >
                      <Link href={signal.link} data-testid={`link-trust-signal-${index}`}>
                        {signal.linkText}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offers Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="heading-special-offers">
                Special Programs & Offers
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're committed to supporting our community with exclusive programs for new homeowners and real estate professionals.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {specialOffers.map((offer, index) => (
                <Card
                  key={index}
                  className="hover-elevate"
                  data-testid={`card-special-offer-${index}`}
                >
                  <CardHeader>
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                      <offer.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">
                      {offer.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {offer.description}
                    </p>
                    <Button
                      variant="default"
                      className="w-full"
                      asChild
                    >
                      <Link href={offer.link} data-testid={`link-special-offer-${index}`}>
                        {offer.linkText}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Content */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12" data-testid="heading-our-story">
              Our Story: Family & Veteran-Owned Excellence
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  Founded on Family Values
                </h3>
                <p className="text-gray-700 mb-4">
                  Intelligent Design was founded in 2009 by a family committed to bringing honest, reliable home services to Tucson. As a veteran-owned business, we bring military precision, discipline, and integrity to every job we complete.
                </p>
                <p className="text-gray-700">
                  What started as a small HVAC company has grown into Tucson's most comprehensive home services provider, but we've never forgotten our roots. We still treat every customer like family, and every home like our own.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  Growth Built on Trust
                </h3>
                <p className="text-gray-700 mb-4">
                  From day one, we've focused on earning trust through exceptional service. Our 22,000+ five-star reviews didn't happen by accident—they're the result of doing the right thing, every time, for every customer.
                </p>
                <p className="text-gray-700">
                  Today, our team of 80+ technicians serves thousands of Tucson families across all five major trades: HVAC, plumbing, electrical, solar, and roofing. This makes us unique in Southern Arizona—one company you can trust for all your home service needs.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Award className="w-8 h-8 text-primary" />
                  Commitment to Excellence
                </h3>
                <p className="text-gray-700 mb-4">
                  We don't just meet industry standards—we exceed them. Our comprehensive certifications, ongoing training programs, and rigorous quality control demonstrate our commitment to the highest quality work across all trades.
                </p>
                <p className="text-gray-700">
                  Every technician on our team is background-checked, drug-tested, and continuously trained on the latest technologies and best practices. We invest in our people because we know that great service starts with great people.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-primary" />
                  Community First
                </h3>
                <p className="text-gray-700 mb-4">
                  We're more than a business—we're part of the Tucson community. We sponsor local youth sports, support veteran organizations, and give back to the families who have supported us.
                </p>
                <p className="text-gray-700">
                  When you choose Intelligent Design, you're supporting a local business that reinvests in our community. We're here for the long haul, and we're committed to making Tucson a better place to live.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <SchedulerEmbed
                triggerText="Join Our Family of Satisfied Customers"
                variant="destructive"
                size="lg"
                data-testid="button-schedule-story"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="heading-faq">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-1">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Why should I choose Intelligent Design over other Tucson contractors?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Intelligent Design has over 22,000 five-star reviews, BBB A+ rating since 1979, and is family & veteran-owned. We employ 80+ highly trained technicians who provide 24/7 service across all trades: HVAC, plumbing, electrical, solar, and roofing. Our industry-leading guarantees, comprehensive warranties, and transparent pricing make us Tucson's most trusted home services company.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-2">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  How long has Intelligent Design been serving Tucson?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Intelligent Design was founded in 2009 and has been serving Tucson families and businesses for over 15 years. Our family and veteran-owned company has built a reputation on quality workmanship, honest pricing, and exceptional customer service throughout Greater Tucson.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-3">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What makes Intelligent Design different from other home services companies?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We're the only contractor in Tucson offering all five major trades under one roof: HVAC, plumbing, electrical, solar, and roofing. This means one company you can trust for all your home services needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-4">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  How many reviews does Intelligent Design have?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We have over 22,000 five-star reviews across Google, Angi, BBB, and other platforms. With a 4.97 average rating, we're Tucson's highest-rated and most-reviewed home services company. Our customers consistently praise our professional technicians, transparent pricing, and quality work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-5">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Is Intelligent Design family-owned?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! Intelligent Design is proudly family and veteran-owned. We understand Tucson values because we're your neighbors. Our commitment to treating every customer like family has earned us the trust of thousands of Tucson homeowners and businesses.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What certifications does Intelligent Design have?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We maintain BBB A+ rating, proper licensing, insurance, and bonding for all services we provide.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-7">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  How many technicians work at Intelligent Design?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our team includes 80+ highly trained technicians across HVAC, plumbing, electrical, solar, and roofing. All technicians are background-checked, drug-tested, and continuously trained on the latest technologies and best practices. This large team ensures we can provide same-day service and 24/7 emergency availability.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-8">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Does Intelligent Design offer financing?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! We offer flexible financing options to make home comfort and improvements affordable. From HVAC system replacements to solar installations, we work with you to find payment plans that fit your budget. Our financing specialists can discuss options during your consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-9">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What guarantees does Intelligent Design offer?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We offer six industry-leading guarantees: No Lemon Guarantee (10-year), Satisfaction Guarantee, Investment Guarantee (price match), Performance Guarantee (2-year), Lifetime Craftsmanship Warranty, and No Surprises Guarantee. These comprehensive warranties protect your investment and demonstrate our confidence in our work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-10">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Does Intelligent Design service commercial properties?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! We serve both residential and commercial clients throughout Greater Tucson. Our commercial services include HVAC, plumbing, electrical, solar, and roofing for businesses of all sizes. We understand the unique needs of commercial properties and provide responsive, professional service with minimal disruption.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-11">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What areas does Intelligent Design serve?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We serve all of Greater Tucson including Tucson, Oro Valley, Marana, Sahuarita, Green Valley, Vail, Corona de Tucson, Drexel Heights, Casas Adobes, Tucson Estates, Tortolita, Picture Rocks, Rillito, Cortaro, and Avra Valley. Our large team ensures fast response times throughout our service area.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="bg-card border border-border rounded-lg px-6" data-testid="faq-item-12">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Can Intelligent Design handle emergency service calls?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely! We provide 24/7 emergency service for HVAC, plumbing, and electrical issues. Whether it's a middle-of-the-night AC failure in summer, a burst pipe, or electrical emergency, our technicians are always available. Call (520) 333-2665 anytime for immediate assistance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                Still have questions? We're here to help!
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
                Ready to Experience the Intelligent Design Difference?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Join thousands of satisfied Tucson families who trust us for all their home service needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div>
                <ContactCard />
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">24/7 Emergency Service</h3>
                      <p className="text-muted-foreground">
                        Available around the clock for HVAC, plumbing, and electrical emergencies
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-start gap-4">
                    <ThumbsUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Same-Day Service Available</h3>
                      <p className="text-muted-foreground">
                        With 80+ technicians, we can often provide same-day service throughout Greater Tucson
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">100% Satisfaction Guaranteed</h3>
                      <p className="text-muted-foreground">
                        You don't pay until you're completely satisfied with our work
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <SchedulerEmbed
                triggerText="Schedule Your Service Now"
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
