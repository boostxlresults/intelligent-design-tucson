import { useEffect } from "react";
import { Phone, Shield, CheckCircle2, Clock, DollarSign, Award, Wrench, Users, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
import heroImage from "@assets/generated_images/family_protection_plan_membership_card_e9b0e508.webp";

export default function FamilyProtectionPlans() {
  const description = "Join our Family Protection Plan for priority HVAC, plumbing, electrical & roofing service in Tucson. Save up to 20% on repairs, get priority scheduling, and protect your home with regular maintenance. Three plan tiers available.";
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
          "name": "Family Protection Plans",
          "item": "https://www.idesignac.com/family-protection-plans"
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a Family Protection Plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Family Protection Plans are comprehensive home service membership programs that provide regular maintenance, priority scheduling, and exclusive discounts on all HVAC, plumbing, electrical, and roofing services. Members receive preventative maintenance visits, priority emergency service, and significant savings on repairs and installations."
          }
        },
        {
          "@type": "Question",
          "name": "What are the differences between Basic, Premium, and Elite plans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Basic Plan ($299/year) includes annual maintenance, priority scheduling, and 10% discount on repairs. Premium Plan ($499/year) includes semi-annual maintenance, priority emergency service, 15% discount, and extended warranties. Elite Plan ($799/year) includes quarterly maintenance, 24/7 VIP service, 20% discount, and lifetime warranties on covered equipment."
          }
        },
        {
          "@type": "Question",
          "name": "What does the maintenance visit include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Each maintenance visit includes a comprehensive 47-point inspection of your HVAC system, plumbing, and electrical systems. We check for potential issues, clean components, test efficiency, and provide a detailed report with recommendations. This preventative maintenance helps avoid costly emergency repairs."
          }
        },
        {
          "@type": "Question",
          "name": "Can I cancel my Family Protection Plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can cancel your plan at any time. For annual plans paid upfront, we offer a pro-rated refund for unused services. We're confident you'll love the benefits and savings, which is why we make cancellation easy with no hidden fees or penalties."
          }
        },
        {
          "@type": "Question",
          "name": "Do protection plans work for commercial properties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer customized commercial protection plans for businesses throughout Tucson. Commercial plans include more frequent visits, priority service for business hours, and volume discounts. Contact us for a custom quote based on your property size and service needs."
          }
        },
        {
          "@type": "Question",
          "name": "What is priority scheduling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Protection Plan members get priority scheduling for all service calls, including same-day appointments when available. During peak seasons, members are scheduled first. Premium and Elite members also receive priority emergency service with guaranteed 24-hour response times."
          }
        },
        {
          "@type": "Question",
          "name": "Are parts and labor included in the plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The plan covers the cost of preventative maintenance visits and inspections. Repairs and replacement parts are not included but members receive exclusive discounts (10-20% depending on plan tier). This ensures you pay for what you need while enjoying significant savings over regular pricing."
          }
        },
        {
          "@type": "Question",
          "name": "Can I transfer my plan if I sell my home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Family Protection Plans are transferable. This can be an attractive selling point for potential buyers, as they inherit the remaining coverage and benefits. Transferring the plan is simple and requires only a phone call to our office to update account information."
          }
        },
        {
          "@type": "Question",
          "name": "What's covered under the lifetime warranty on Elite plans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Elite Plan members receive lifetime warranties on all covered equipment and installations for as long as they maintain active membership. This includes HVAC systems, water heaters, electrical panels, and more. Our craftsmans hip guarantee ensures repairs and replacements at no additional cost for covered items."
          }
        },
        {
          "@type": "Question",
          "name": "How do I sign up for a Family Protection Plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Signing up is easy! Call us at (520) 333-2665 or schedule online to speak with a membership specialist. We'll review your home's needs, recommend the best plan tier, and get you enrolled immediately. Your first maintenance visit can be scheduled within 48 hours of enrollment."
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

  return (
    <>
      <MetaHead
        title="Family Protection Plans | Priority Service & Exclusive Benefits | Intelligent Design"
        description={description}
        canonical={`${SITE_URL}/family-protection-plans`}
        openGraph={{
          title: "Family Protection Plans | Priority Service & Exclusive Benefits | Intelligent Design",
          description,
          image: imageUrl,
          url: `${SITE_URL}/family-protection-plans`,
        }}
        twitter={{
          title: "Family Protection Plans | Priority Service & Exclusive Benefits | Intelligent Design",
          description,
          image: imageUrl,
          imageAlt: "Family Protection Plan membership card from Intelligent Design Tucson",
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
                  Family Protection Plans
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                  Priority Service & Exclusive Benefits
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  Save up to 20% on repairs | Priority scheduling | Regular maintenance included
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Enroll Today"
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
                  Protect Your Home & Save Money
                </h2>
                <p className="text-lg text-gray-600">
                  Our Family Protection Plans are comprehensive home service membership programs designed to keep your HVAC, plumbing, electrical, and roofing systems running smoothly year-round. With regular preventative maintenance, priority service, and exclusive discounts, you'll enjoy peace of mind and significant savings.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="border-2 border-gray-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">Basic Plan</CardTitle>
                    <CardDescription className="text-3xl font-bold text-gray-900 mt-2">
                      $299<span className="text-lg font-normal text-gray-600">/year</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Annual maintenance visit</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Priority scheduling</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">10% discount on all repairs</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">47-point system inspection</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">No trip charges for members</span>
                      </li>
                    </ul>
                    <SchedulerEmbed
                      triggerText="Choose Basic Plan"
                      variant="outline"
                      className="w-full mt-6"
                      data-testid="button-plan-basic"
                    />
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-600 shadow-lg relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">Premium Plan</CardTitle>
                    <CardDescription className="text-3xl font-bold text-gray-900 mt-2">
                      $499<span className="text-lg font-normal text-gray-600">/year</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Semi-annual maintenance visits</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Priority emergency service</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">15% discount on all repairs</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Extended warranties included</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Lifetime craftsmanship guarantee</span>
                      </li>
                    </ul>
                    <SchedulerEmbed
                      triggerText="Choose Premium Plan"
                      variant="default"
                      className="w-full mt-6"
                      data-testid="button-plan-premium"
                    />
                  </CardContent>
                </Card>

                <Card className="border-2 border-yellow-500">
                  <CardHeader>
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-yellow-600" />
                    </div>
                    <CardTitle className="text-2xl">Elite Plan</CardTitle>
                    <CardDescription className="text-3xl font-bold text-gray-900 mt-2">
                      $799<span className="text-lg font-normal text-gray-600">/year</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Quarterly maintenance visits</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">24/7 VIP priority service</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">20% discount on all repairs</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Lifetime warranties on equipment</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Transferable to new homeowner</span>
                      </li>
                    </ul>
                    <SchedulerEmbed
                      triggerText="Choose Elite Plan"
                      variant="outline"
                      className="w-full mt-6"
                      data-testid="button-plan-elite"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Member Benefits & Advantages
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Priority Scheduling</h3>
                    <p className="text-gray-600">Members get first priority for appointments, including same-day service when available.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Significant Savings</h3>
                    <p className="text-gray-600">Save 10-20% on all repairs and installations, quickly offsetting your membership cost.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Preventative Maintenance</h3>
                    <p className="text-gray-600">Regular tune-ups catch small issues before they become expensive emergency repairs.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Extended Warranties</h3>
                    <p className="text-gray-600">Premium and Elite members receive extended coverage on equipment and installations.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">24/7 Emergency Support</h3>
                    <p className="text-gray-600">Premium and Elite members get priority emergency service with guaranteed response times.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Peace of Mind</h3>
                    <p className="text-gray-600">Know your home systems are professionally maintained and protected year-round.</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <SchedulerEmbed
                  triggerText="Join Our Protection Plan Today"
                  variant="destructive"
                  size="lg"
                  data-testid="button-schedule-benefits"
                />
                <p className="text-gray-600 mt-4">Questions? Call us at <a href="tel:+15203332665" className="text-blue-600 hover:underline" data-testid="link-call-benefits">(520) 333-2665</a></p>
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
                    What is a Family Protection Plan?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our Family Protection Plans are comprehensive home service membership programs that provide regular maintenance, priority scheduling, and exclusive discounts on all HVAC, plumbing, electrical, and roofing services. Members receive preventative maintenance visits, priority emergency service, and significant savings on repairs and installations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" data-testid="faq-item-2">
                  <AccordionTrigger className="text-left">
                    What are the differences between Basic, Premium, and Elite plans?
                  </AccordionTrigger>
                  <AccordionContent>
                    Basic Plan ($299/year) includes annual maintenance, priority scheduling, and 10% discount on repairs. Premium Plan ($499/year) includes semi-annual maintenance, priority emergency service, 15% discount, and extended warranties. Elite Plan ($799/year) includes quarterly maintenance, 24/7 VIP service, 20% discount, and lifetime warranties on covered equipment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" data-testid="faq-item-3">
                  <AccordionTrigger className="text-left">
                    What does the maintenance visit include?
                  </AccordionTrigger>
                  <AccordionContent>
                    Each maintenance visit includes a comprehensive 47-point inspection of your HVAC system, plumbing, and electrical systems. We check for potential issues, clean components, test efficiency, and provide a detailed report with recommendations. This preventative maintenance helps avoid costly emergency repairs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" data-testid="faq-item-4">
                  <AccordionTrigger className="text-left">
                    Can I cancel my Family Protection Plan?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, you can cancel your plan at any time. For annual plans paid upfront, we offer a pro-rated refund for unused services. We're confident you'll love the benefits and savings, which is why we make cancellation easy with no hidden fees or penalties.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" data-testid="faq-item-5">
                  <AccordionTrigger className="text-left">
                    Do protection plans work for commercial properties?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! We offer customized commercial protection plans for businesses throughout Tucson. Commercial plans include more frequent visits, priority service for business hours, and volume discounts. Contact us for a custom quote based on your property size and service needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" data-testid="faq-item-6">
                  <AccordionTrigger className="text-left">
                    What is priority scheduling?
                  </AccordionTrigger>
                  <AccordionContent>
                    Protection Plan members get priority scheduling for all service calls, including same-day appointments when available. During peak seasons, members are scheduled first. Premium and Elite members also receive priority emergency service with guaranteed 24-hour response times.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" data-testid="faq-item-7">
                  <AccordionTrigger className="text-left">
                    Are parts and labor included in the plan?
                  </AccordionTrigger>
                  <AccordionContent>
                    The plan covers the cost of preventative maintenance visits and inspections. Repairs and replacement parts are not included but members receive exclusive discounts (10-20% depending on plan tier). This ensures you pay for what you need while enjoying significant savings over regular pricing.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" data-testid="faq-item-8">
                  <AccordionTrigger className="text-left">
                    Can I transfer my plan if I sell my home?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, Family Protection Plans are transferable. This can be an attractive selling point for potential buyers, as they inherit the remaining coverage and benefits. Transferring the plan is simple and requires only a phone call to our office to update account information.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" data-testid="faq-item-9">
                  <AccordionTrigger className="text-left">
                    What's covered under the lifetime warranty on Elite plans?
                  </AccordionTrigger>
                  <AccordionContent>
                    Elite Plan members receive lifetime warranties on all covered equipment and installations for as long as they maintain active membership. This includes HVAC systems, water heaters, electrical panels, and more. Our craftsmanship guarantee ensures repairs and replacements at no additional cost for covered items.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" data-testid="faq-item-10">
                  <AccordionTrigger className="text-left">
                    How do I sign up for a Family Protection Plan?
                  </AccordionTrigger>
                  <AccordionContent>
                    Signing up is easy! Call us at (520) 333-2665 or schedule online to speak with a membership specialist. We'll review your home's needs, recommend the best plan tier, and get you enrolled immediately. Your first maintenance visit can be scheduled within 48 hours of enrollment.
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
                  triggerText="Schedule Your Enrollment Consultation"
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
