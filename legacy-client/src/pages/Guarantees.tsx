import { useEffect } from "react";
import { Phone, Shield, Award, CheckCircle2, ThumbsUp, DollarSign, Settings, Wrench, Clock, FileCheck, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import guaranteesHero from "@assets/generated_images/Intelligent_Design_guarantee_certificate_7e28320e.webp";

export default function Guarantees() {
  const description = "Unmatched guarantees on HVAC, plumbing, solar, electrical & roofing in Tucson. No Lemon Guarantee, Satisfaction Guarantee, Lifetime Craftsmanship Warranty, and more. 24/7 service with over 22,000 five-star reviews.";
  const imageUrl = `${SITE_URL}${guaranteesHero}`;

  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the No Lemon Guarantee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our No Lemon Guarantee provides a 10-year warranty on compressors and heat exchangers. If your compressor or heat exchanger fails within 10 years of installation, we will replace the entire unit within 48 hours at no additional cost to you. This guarantee demonstrates our confidence in the quality equipment we install and our commitment to your comfort."
          }
        },
        {
          "@type": "Question",
          "name": "What does the Satisfaction Guarantee include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Satisfaction Guarantee ensures you receive professional service from thoroughly trained, drug-free technicians who maintain clean work areas. We stand behind our work 100%—you don't pay until you're completely satisfied with the service. If you're not happy with our work, we'll make it right or you don't pay."
          }
        },
        {
          "@type": "Question",
          "name": "How does the Investment Guarantee work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Investment Guarantee is our price match promise. If you receive a lower quote for a comparable installation from another licensed, bonded, and insured Tucson contractor, we'll match their price. We want you to get the best value for your investment without sacrificing quality or service."
          }
        },
        {
          "@type": "Question",
          "name": "What is covered under the Performance Guarantee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We perform a Manual J load calculation to ensure your system is properly sized for your home. If your new system doesn't perform as expected within the first 2 years, we will remove it and replace it with a properly sized system at no additional cost. This guarantee ensures your system will keep you comfortable year-round."
          }
        },
        {
          "@type": "Question",
          "name": "What does the Lifetime Craftsmanship Guarantee cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Lifetime Craftsmanship Guarantee covers all installation work for as long as you own your home. This includes ductwork, electrical connections, water lines, refrigerant lines, and all other installation labor. If any issue arises from our installation work, we'll fix it at no charge. This is our commitment to quality workmanship that lasts."
          }
        },
        {
          "@type": "Question",
          "name": "How does the No Surprises Guarantee protect me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With our No Surprises Guarantee, the price we quote is the price you pay. Once you sign your agreement, the price will not change. If any modifications are needed during the project, we provide written change orders for your approval before proceeding. You'll never receive unexpected charges on your final bill."
          }
        },
        {
          "@type": "Question",
          "name": "Are these guarantees available for all services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Our comprehensive guarantees apply to all our services including HVAC installation and repair, plumbing services, solar installations, electrical work, and roofing projects. Whether it's a small repair or a complete system installation, you're protected by our industry-leading guarantees."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to do anything to activate these guarantees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No activation is required! All our guarantees automatically apply to every service we provide. Simply keep your invoice and service records for your files. Our guarantees are our promise to you—they're included with every job at no extra cost."
          }
        },
        {
          "@type": "Question",
          "name": "How long has Intelligent Design been offering these guarantees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We've been serving Tucson families since 1979 with these comprehensive guarantees. For over 45 years, we've stood behind our work with industry-leading warranties that give our customers peace of mind. Our 22,000+ five-star reviews reflect our commitment to honoring these guarantees."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if I need to use one of these guarantees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply call our office at (520) 333-2665 and explain the situation. Our team will review your service history and promptly schedule a visit to honor our guarantee. We're available 24/7 for emergencies, and we take pride in making the guarantee process as smooth and stress-free as possible."
          }
        },
        {
          "@type": "Question",
          "name": "Are these guarantees transferable if I sell my home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Lifetime Craftsmanship Guarantee is for as long as you own your home. Other guarantees like the No Lemon Guarantee and Performance Guarantee are typically tied to the original installation. Contact us if you're selling your home to discuss which guarantees may be transferable—we want to help protect your investment and add value to your property."
          }
        },
        {
          "@type": "Question",
          "name": "How do your guarantees compare to other Tucson contractors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our guarantees are among the most comprehensive in the Tucson home services industry. Few contractors offer a 10-year No Lemon Guarantee, Lifetime Craftsmanship Warranty, or our 2-year Performance Guarantee with system replacement. These guarantees reflect our 45+ years of experience and our commitment to doing the job right the first time."
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
          "name": "Guarantees & Warranties",
          "item": "https://www.idesignac.com/guarantees"
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

  const guarantees = [
    {
      icon: Shield,
      title: "No Lemon Guarantee",
      description: "Your peace of mind is our priority. We provide a 10-year guarantee on compressors and heat exchangers. If your compressor or heat exchanger fails within 10 years of installation, we'll replace the entire unit within 48 hours—no questions asked, no additional cost to you.",
      details: [
        "10-year coverage on critical components",
        "Complete unit replacement within 48 hours",
        "No hidden fees or exclusions",
        "Applies to all new HVAC installations"
      ]
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction Guarantee",
      description: "We're not satisfied until you are. Our professional, drug-free technicians maintain clean work areas and deliver exceptional service every time. You won't pay a penny until you're completely happy with our work.",
      details: [
        "Thoroughly trained, professional technicians",
        "Drug-free, background-checked team members",
        "Clean work areas and respectful service",
        "100% satisfaction or you don't pay"
      ]
    },
    {
      icon: DollarSign,
      title: "Investment Guarantee",
      description: "Get the best value for your money. Our price match promise means if you receive a lower quote for comparable work from another licensed, bonded, and insured Tucson contractor, we'll match their price. Quality work at the best price—guaranteed.",
      details: [
        "Price match on comparable installations",
        "Must be licensed, bonded, and insured contractor",
        "Same quality equipment and workmanship",
        "Best value guarantee in Tucson"
      ]
    },
    {
      icon: Settings,
      title: "Performance Guarantee",
      description: "Your system will perform exactly as designed. We perform a Manual J load calculation to ensure proper sizing for your home. If your new system doesn't perform as expected within 2 years, we'll remove it and replace it with a properly sized system at no cost.",
      details: [
        "Professional Manual J load calculation",
        "Proper system sizing guaranteed",
        "2-year performance warranty",
        "Free system replacement if needed"
      ]
    },
    {
      icon: Award,
      title: "Lifetime Craftsmanship Guarantee",
      description: "Our workmanship is guaranteed for life. All installation work—including ductwork, electrical connections, water lines, refrigerant lines, and more—is covered for as long as you own your home. Quality installation that stands the test of time.",
      details: [
        "Lifetime coverage on all installation work",
        "Includes ductwork and all connections",
        "Covers electrical and plumbing work",
        "Valid for as long as you own your home"
      ]
    },
    {
      icon: FileCheck,
      title: "No Surprises Guarantee",
      description: "The price we quote is the price you pay—period. Once you sign your agreement, the price will not change. Any project modifications require written change orders with your approval before we proceed. Complete transparency, zero surprises.",
      details: [
        "Locked-in pricing after agreement",
        "Written change orders for any modifications",
        "Your approval required before changes",
        "No unexpected charges on final bill"
      ]
    }
  ];

  return (
    <>
      <MetaHead
        title="Guarantees & Warranties | Intelligent Design Tucson | Lifetime Protection"
        description={description}
        canonical={`${SITE_URL}/guarantees`}
        openGraph={{
          title: "Guarantees & Warranties | Intelligent Design Tucson | Lifetime Protection",
          description,
          image: imageUrl,
          url: `${SITE_URL}/guarantees`,
        }}
        twitter={{
          title: "Guarantees & Warranties | Intelligent Design Tucson | Lifetime Protection",
          description,
          image: imageUrl,
          imageAlt: "Intelligent Design warranty and guarantee certificate in Tucson Arizona",
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
            style={{ backgroundImage: `url(${guaranteesHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/20" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Industry-Leading Guarantees & Warranties in Tucson
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200" data-testid="text-hero-description">
                Lifetime Craftsmanship Warranty | No Lemon Guarantee | 100% Satisfaction Guaranteed
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
                Our Commitment to You
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Since 1979, Intelligent Design has been Tucson's trusted home services expert. Our comprehensive guarantees aren't just promises—they're our commitment to exceptional service, quality workmanship, and your complete satisfaction.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you need HVAC service, plumbing, electrical work, solar installation, or roofing, every job comes with our industry-leading guarantees. These warranties protect your investment and give you peace of mind knowing you're working with Tucson's most trusted contractor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Get Started Today"
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

        {/* Guarantees Grid Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12" data-testid="heading-guarantees">
              Six Guarantees That Protect Your Investment
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {guarantees.map((guarantee, index) => (
                <div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200 hover-elevate"
                  data-testid={`card-guarantee-${index}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <guarantee.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {guarantee.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {guarantee.description}
                  </p>
                  <ul className="space-y-2">
                    {guarantee.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <SchedulerEmbed
                triggerText="Experience Our Guarantees Today"
                variant="destructive"
                size="lg"
                data-testid="button-schedule-guarantees"
              />
            </div>
          </div>
        </section>

        {/* Why Our Guarantees Matter Section */}
        <section className="py-12 md:py-16 bg-card border-y border-card-border">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8" data-testid="heading-why-guarantees">
              Why Our Guarantees Matter
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg border border-border">
                <Wrench className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-xl font-bold text-foreground mb-2">Over 45 Years of Excellence</h3>
                <p className="text-muted-foreground">
                  Family and veteran-owned since 1979, we've built our reputation on standing behind our work. Our guarantees reflect decades of experience and our commitment to Tucson families.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <Shield className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-xl font-bold text-foreground mb-2">Licensed, Bonded & Insured</h3>
                <p className="text-muted-foreground">
                  We maintain all required licenses, bonds, and insurance to protect you and your property. Our guarantees are backed by a financially stable company you can trust.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <Award className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-xl font-bold text-foreground mb-2">BBB A+ Accredited</h3>
                <p className="text-muted-foreground">
                  Our A+ rating with the Better Business Bureau demonstrates our commitment to ethical business practices and customer satisfaction. We earn your trust every day.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <Clock className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-xl font-bold text-foreground mb-2">24/7 Emergency Service</h3>
                <p className="text-muted-foreground">
                  We're here when you need us most. Our guarantees include round-the-clock support for emergencies, ensuring you're never left without help when problems arise.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button
                size="lg"
                variant="default"
                asChild
              >
                <a href="tel:+15203332665" data-testid="button-call-why-guarantees">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8" data-testid="heading-faq">
              Frequently Asked Questions About Our Guarantees
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-card" data-testid="faq-item-1">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What is the No Lemon Guarantee?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our No Lemon Guarantee provides a 10-year warranty on compressors and heat exchangers. If your compressor or heat exchanger fails within 10 years of installation, we will replace the entire unit within 48 hours at no additional cost to you. This guarantee demonstrates our confidence in the quality equipment we install and our commitment to your comfort.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-card" data-testid="faq-item-2">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What does the Satisfaction Guarantee include?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our Satisfaction Guarantee ensures you receive professional service from thoroughly trained, drug-free technicians who maintain clean work areas. We stand behind our work 100%—you don't pay until you're completely satisfied with the service. If you're not happy with our work, we'll make it right or you don't pay.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-card" data-testid="faq-item-3">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  How does the Investment Guarantee work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our Investment Guarantee is our price match promise. If you receive a lower quote for a comparable installation from another licensed, bonded, and insured Tucson contractor, we'll match their price. We want you to get the best value for your investment without sacrificing quality or service.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-card" data-testid="faq-item-4">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What is covered under the Performance Guarantee?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We perform a Manual J load calculation to ensure your system is properly sized for your home. If your new system doesn't perform as expected within the first 2 years, we will remove it and replace it with a properly sized system at no additional cost. This guarantee ensures your system will keep you comfortable year-round.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-card" data-testid="faq-item-5">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What does the Lifetime Craftsmanship Guarantee cover?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our Lifetime Craftsmanship Guarantee covers all installation work for as long as you own your home. This includes ductwork, electrical connections, water lines, refrigerant lines, and all other installation labor. If any issue arises from our installation work, we'll fix it at no charge. This is our commitment to quality workmanship that lasts.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border rounded-lg px-6 bg-card" data-testid="faq-item-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  How does the No Surprises Guarantee protect me?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  With our No Surprises Guarantee, the price we quote is the price you pay. Once you sign your agreement, the price will not change. If any modifications are needed during the project, we provide written change orders for your approval before proceeding. You'll never receive unexpected charges on your final bill.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-border rounded-lg px-6 bg-card" data-testid="faq-item-7">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Are these guarantees available for all services?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! Our comprehensive guarantees apply to all our services including HVAC installation and repair, plumbing services, solar installations, electrical work, and roofing projects. Whether it's a small repair or a complete system installation, you're protected by our industry-leading guarantees.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border border-border rounded-lg px-6 bg-card" data-testid="faq-item-8">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Do I need to do anything to activate these guarantees?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No activation is required! All our guarantees automatically apply to every service we provide. Simply keep your invoice and service records for your files. Our guarantees are our promise to you—they're included with every job at no extra cost.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border border-border rounded-lg px-6 bg-card" data-testid="faq-item-9">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  How long has Intelligent Design been offering these guarantees?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We've been serving Tucson families since 1979 with these comprehensive guarantees. For over 45 years, we've stood behind our work with industry-leading warranties that give our customers peace of mind. Our 22,000+ five-star reviews reflect our commitment to honoring these guarantees.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border border-border rounded-lg px-6 bg-card" data-testid="faq-item-10">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What should I do if I need to use one of these guarantees?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Simply call our office at (520) 333-2665 and explain the situation. Our team will review your service history and promptly schedule a visit to honor our guarantee. We're available 24/7 for emergencies, and we take pride in making the guarantee process as smooth and stress-free as possible.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="border border-border rounded-lg px-6 bg-card" data-testid="faq-item-11">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Are these guarantees transferable if I sell my home?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The Lifetime Craftsmanship Guarantee is for as long as you own your home. Other guarantees like the No Lemon Guarantee and Performance Guarantee are typically tied to the original installation. Contact us if you're selling your home to discuss which guarantees may be transferable—we want to help protect your investment and add value to your property.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="border border-border rounded-lg px-6 bg-card" data-testid="faq-item-12">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  How do your guarantees compare to other Tucson contractors?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our guarantees are among the most comprehensive in the Tucson home services industry. Few contractors offer a 10-year No Lemon Guarantee, Lifetime Craftsmanship Warranty, or our 2-year Performance Guarantee with system replacement. These guarantees reflect our 45+ years of experience and our commitment to doing the job right the first time.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="text-center mt-8">
              <SchedulerEmbed
                triggerText="Schedule Service Now"
                variant="destructive"
                size="lg"
                data-testid="button-schedule-faq"
              />
            </div>
          </div>
        </section>

        {/* NAP Section */}
        <section className="py-12 md:py-16 bg-card border-y border-card-border">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="heading-contact">
                  Ready to Experience Our Guarantees?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Join over 22,000 satisfied Tucson families who trust Intelligent Design for all their home service needs. Our industry-leading guarantees protect your investment and ensure your complete satisfaction.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Visit Our Office</p>
                      <p className="text-muted-foreground">1145 E Fort Lowell Rd<br />Tucson, AZ 85719</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Call Us 24/7</p>
                      <a 
                        href="tel:+15203332665" 
                        className="text-lg font-bold text-primary hover-elevate px-2 py-1 rounded-md inline-block"
                        data-testid="link-nap-phone"
                      >
                        (520) 333-2665
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Email Us</p>
                      <a 
                        href="mailto:info@idesignac.com"
                        className="text-primary hover-elevate px-2 py-1 rounded-md inline-block"
                        data-testid="link-nap-email"
                      >
                        info@idesignac.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">Service Hours</h3>
                  <p className="text-muted-foreground mb-2">
                    <span className="font-semibold">Emergency Service:</span> 24/7/365
                  </p>
                  <p className="text-muted-foreground mb-2">
                    <span className="font-semibold">Office Hours:</span> Mon-Fri: 7am-6pm
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Weekend:</span> Sat: 8am-4pm, Sun: Emergency Only
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">Serving All of Tucson</h3>
                  <p className="text-muted-foreground">
                    Including Oro Valley, Marana, Catalina, Vail, Sahuarita, Green Valley, and surrounding areas.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule Online"
                    variant="destructive"
                    size="lg"
                    className="flex-1"
                    data-testid="button-schedule-nap"
                  />
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-nap">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
