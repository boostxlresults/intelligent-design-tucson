import { useEffect } from "react";
import { Phone, CheckCircle2, DollarSign, Calendar, FileText, Shield, TrendingDown, Clock } from "lucide-react";
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
import financingHero from "@assets/generated_images/Family_celebrating_affordable_financing_ea677ced.webp";

export default function Financing() {
  const description = "Affordable financing for HVAC, solar, plumbing, electrical, and roofing services in Tucson. Flexible payment plans with competitive rates (O.A.C.). Quick approval process. Make home improvements affordable today. Call (520) 333-2665.";
  const imageUrl = `${SITE_URL}${financingHero}`;

  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What financing options does Intelligent Design offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Intelligent Design offers flexible financing options for all our services including HVAC, solar, plumbing, electrical, and roofing. We work with leading financing partners to provide competitive rates, flexible payment terms, and quick approval processes. Financing is available O.A.C. (On Approved Credit) with options for various credit profiles."
          }
        },
        {
          "@type": "Question",
          "name": "Can I finance my AC installation or replacement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer comprehensive financing for all AC installation and replacement projects. Whether you need a new air conditioning system, ductless mini-split, or complete HVAC replacement, our financing options make it affordable with low monthly payments. Apply today for quick approval."
          }
        },
        {
          "@type": "Question",
          "name": "Is financing available for solar panel installation in Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Solar panel financing is one of our most popular options. We offer special financing programs for residential and commercial solar installations, making it easier to invest in clean energy. Combined with federal tax credits and local incentives, financing makes solar more affordable than ever."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can I get approved for financing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our financing approval process is typically very quick—many customers receive approval within minutes of applying. We work with multiple lending partners to ensure you get the best rates and terms. You can apply online, over the phone, or during your service appointment with one of our technicians."
          }
        },
        {
          "@type": "Question",
          "name": "What credit score do I need to qualify for financing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work with multiple financing partners to serve customers with various credit profiles. While specific requirements vary by lender, we often have options available for customers with fair to excellent credit. All financing is subject to credit approval (O.A.C.). Contact us to discuss your specific situation."
          }
        },
        {
          "@type": "Question",
          "name": "Can I finance emergency repair services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We understand that emergency repairs often come unexpectedly. Our financing options are available for emergency services including AC repairs, plumbing emergencies, electrical issues, and more. Don't let budget concerns delay critical repairs—our financing makes it manageable."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any special financing promotions available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We frequently offer special financing promotions including 0% interest for qualified periods, deferred payment options, and seasonal specials. Current promotions vary by season and service type. Call us at (520) 333-2665 or ask your service technician about current financing offers."
          }
        },
        {
          "@type": "Question",
          "name": "What services can be financed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Almost all our services can be financed! This includes AC installation, heating systems, solar panels, water heaters, plumbing repairs and installations, electrical upgrades, roofing projects, and more. Whether it's a small repair or a complete system replacement, we have financing options available O.A.C."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer same-day financing approval?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Most of our financing applications are processed and approved the same day, often within minutes. This allows you to move forward with necessary home improvements without delay. Our team can help you through the application process during your service appointment or consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Can I pay off my financing early without penalties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most of our financing options allow early payoff without prepayment penalties, though specific terms vary by lender and financing program. We encourage you to review your financing agreement or contact us for details about your specific financing terms. Many customers choose to pay off early to save on interest."
          }
        },
        {
          "@type": "Question",
          "name": "How do I apply for financing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Applying for financing is easy! You can apply online through our website, call our office at (520) 333-2665, or apply during your service appointment. Our team will guide you through the simple application process and help you understand your financing options. Most applications take just a few minutes to complete."
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
          "name": "Financing Options",
          "item": "https://www.idesignac.com/financing"
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

  const highlights = [
    {
      icon: DollarSign,
      title: "Flexible Payment Plans",
      description: "Choose payment terms that fit your budget with competitive rates and flexible monthly payments."
    },
    {
      icon: Clock,
      title: "Quick Approval Process",
      description: "Get approved in minutes with our streamlined application process—most decisions same-day."
    },
    {
      icon: Shield,
      title: "Multiple Financing Partners",
      description: "We work with leading lenders to find you the best rates and terms for your specific situation."
    },
    {
      icon: Calendar,
      title: "Special Promotions Available",
      description: "Take advantage of seasonal offers including 0% interest periods and deferred payment options (O.A.C.)."
    },
    {
      icon: FileText,
      title: "Simple Application",
      description: "Easy online or in-person application—apply during your service appointment for immediate approval."
    },
    {
      icon: TrendingDown,
      title: "Options for All Credit Levels",
      description: "Financing programs available for various credit profiles—we work to find solutions that fit your needs."
    }
  ];

  return (
    <>
      <MetaHead
        title="Flexible Financing Options Tucson AZ | HVAC, Solar, Plumbing & More | Intelligent Design"
        description={description}
        canonical={`${SITE_URL}/financing`}
        openGraph={{
          title: "Flexible Financing Options Tucson AZ | HVAC, Solar, Plumbing & More",
          description,
          image: imageUrl,
          url: `${SITE_URL}/financing`,
        }}
        twitter={{
          title: "Flexible Financing Options Tucson AZ | HVAC, Solar, Plumbing & More",
          description,
          image: imageUrl,
          imageAlt: "Family celebrating affordable home service financing in Tucson",
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
            style={{ backgroundImage: `url(${financingHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/20" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Flexible Financing for Your Home Services in Tucson
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200" data-testid="text-hero-description">
                Make Home Improvements Affordable | HVAC | Solar | Plumbing | Electrical | Roofing | Quick Approval (O.A.C.)
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Get Started Today"
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

        {/* Page Highlights Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8" data-testid="heading-highlights">
              Why Choose Intelligent Design Financing?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                  data-testid={`card-highlight-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <highlight.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-cta-financing">
              Ready to Make Home Improvements Affordable?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Apply for financing today and get approved in minutes. No obligation, quick process!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SchedulerEmbed
                triggerText="Apply for Financing"
                variant="secondary"
                size="lg"
                data-testid="button-schedule-cta"
              />
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground"
                asChild
              >
                <a href="tel:+15203332665" data-testid="button-call-cta">
                  <Phone className="w-5 h-5 mr-2" />
                  (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6" data-testid="heading-content-1">
                Affordable Home Service Financing in Tucson, AZ
              </h2>
              
              <p className="text-gray-700 mb-6">
                At <strong>Intelligent Design Air Conditioning, Plumbing, Solar, & Electric</strong>, we understand that home improvements and emergency repairs don't always fit conveniently into your budget. That's why we offer comprehensive financing options for all our services—making it easier than ever for Tucson homeowners to invest in their comfort, safety, and energy efficiency without breaking the bank.
              </p>

              <p className="text-gray-700 mb-6">
                Whether you need a new air conditioning system to beat the Arizona heat, solar panels to reduce your energy bills, a water heater replacement, electrical upgrades, or critical plumbing repairs, our flexible financing solutions put essential home services within reach. With competitive rates, quick approval processes, and payment plans tailored to your budget, you can move forward with confidence knowing that quality home services are affordable and accessible.
              </p>

              <div className="bg-blue-50 border-l-4 border-primary p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <CheckCircle2 className="inline w-6 h-6 text-green-600 mr-2" />
                  Finance Almost Any Home Service Project
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>HVAC Systems:</strong> Air conditioning installation, heating systems, ductless mini-splits, and complete system replacements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Solar Energy:</strong> Residential and commercial solar panel installations, battery storage systems, and solar maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Plumbing Services:</strong> Water heaters, whole-home repiping, water filtration systems, sewer line repairs, and more</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Electrical Work:</strong> Panel upgrades, GENERAC generators, lighting upgrades, EV charger installation, and electrical repairs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Roofing Projects:</strong> Roof repairs, replacements, coatings, and complete roof installations</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" data-testid="heading-content-2">
                How Our Financing Process Works
              </h2>

              <p className="text-gray-700 mb-6">
                We've designed our financing process to be as simple and convenient as possible. Here's what you can expect when you choose Intelligent Design for your home service financing needs:
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1: Get a Free Estimate</h3>
                  <p className="text-gray-700">
                    Contact us to schedule a free consultation and estimate for your home service needs. Our expert technicians will assess your situation and provide you with a detailed quote for the recommended services or equipment.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2: Review Financing Options</h3>
                  <p className="text-gray-700">
                    Once you have your estimate, we'll walk you through available financing options. We work with multiple lending partners to ensure you get competitive rates and terms that fit your budget and financial situation.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3: Quick & Easy Application</h3>
                  <p className="text-gray-700">
                    Apply for financing online, over the phone, or during your service appointment. Our streamlined application process typically takes just a few minutes to complete, and most customers receive approval decisions the same day—often within minutes.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4: Get Approved & Schedule Service</h3>
                  <p className="text-gray-700">
                    Once approved, we'll schedule your installation or service at a time that's convenient for you. Our professional technicians will complete the work to the highest standards, and you can start enjoying your home improvements right away with manageable monthly payments.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 my-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Special Financing Promotions Available!
                </h3>
                <p className="text-gray-700 text-center mb-4">
                  Ask about our current financing specials including:
                </p>
                <ul className="space-y-2 text-gray-700 max-w-2xl mx-auto">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>0% interest for qualified periods on approved credit</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Deferred payment options—no payments for months</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Seasonal promotions on HVAC, solar, and plumbing projects</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Flexible terms for projects of all sizes</span>
                  </li>
                </ul>
                <div className="text-center mt-6">
                  <SchedulerEmbed
                    triggerText="Learn About Current Promotions"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-promotions"
                  />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" data-testid="heading-content-3">
                Why Financing Makes Sense for Home Services
              </h2>

              <p className="text-gray-700 mb-6">
                Investing in your home's comfort, safety, and efficiency shouldn't be delayed due to budget constraints. Here's why smart homeowners choose financing for their home service needs:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <DollarSign className="w-6 h-6 text-primary mr-2" />
                    Preserve Your Savings
                  </h3>
                  <p className="text-gray-700">
                    Keep your emergency fund intact while still getting the home improvements you need. Financing allows you to spread the cost over time rather than depleting your savings all at once.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Clock className="w-6 h-6 text-primary mr-2" />
                    Don't Delay Critical Repairs
                  </h3>
                  <p className="text-gray-700">
                    Address urgent issues immediately instead of waiting to save up. Delaying repairs can lead to more expensive problems down the road—financing helps you act now and prevent further damage.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <TrendingDown className="w-6 h-6 text-primary mr-2" />
                    Lower Your Energy Bills
                  </h3>
                  <p className="text-gray-700">
                    Invest in energy-efficient HVAC systems or solar panels that actually pay for themselves over time through reduced utility bills. The monthly savings can offset or even exceed your financing payment.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Shield className="w-6 h-6 text-primary mr-2" />
                    Increase Home Value
                  </h3>
                  <p className="text-gray-700">
                    Quality home improvements like new HVAC systems, solar installations, and modern plumbing increase your property value. You're investing in an asset that provides returns when you sell.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" data-testid="heading-content-4">
                Financing for Every Situation
              </h2>

              <p className="text-gray-700 mb-6">
                We understand that every homeowner's financial situation is unique. That's why we've partnered with multiple financing providers to offer solutions for various credit profiles and project sizes:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Small to Large Projects:</strong>
                    <span className="text-gray-700"> Whether you need a simple repair or a complete system replacement, we have financing options scaled to your project size.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Various Credit Profiles:</strong>
                    <span className="text-gray-700"> We work with lenders who serve customers with fair to excellent credit. All financing is subject to credit approval (O.A.C.).</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Emergency Services:</strong>
                    <span className="text-gray-700"> Don't let a broken AC or burst pipe wait—financing is available for urgent repairs so you can get back to comfort quickly.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Planned Upgrades:</strong>
                    <span className="text-gray-700"> Financing long-term improvements like solar installations or complete HVAC system upgrades allows you to enhance your home without depleting your savings.</span>
                  </div>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" data-testid="heading-content-5">
                The Intelligent Design Advantage
              </h2>

              <p className="text-gray-700 mb-6">
                When you choose Intelligent Design for your home services and financing, you're partnering with Tucson's most trusted home services company. Here's what sets us apart:
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900">Over 22,000 Five-Star Reviews:</strong>
                      <span className="text-gray-700"> Tucson homeowners trust us for exceptional service, quality workmanship, and honest pricing.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900">Family & Veteran-Owned:</strong>
                      <span className="text-gray-700"> Founded by Marine veteran Andrew Dobbins, we bring military precision and family values to every job.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900">Comprehensive Services:</strong>
                      <span className="text-gray-700"> One company for all your needs—HVAC, solar, plumbing, electrical, and roofing. Simplify your home maintenance with one trusted partner.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900">Licensed & Certified Technicians:</strong>
                      <span className="text-gray-700"> Our team includes EPA-certified HVAC technicians, licensed plumbers, certified electricians, and experienced solar installers.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900">24/7 Emergency Service:</strong>
                      <span className="text-gray-700"> We're here when you need us most—no extra charges for appointment times, even for emergency calls.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900">Lifetime Warranties Available:</strong>
                      <span className="text-gray-700"> Protect your investment with industry-leading warranty options on equipment and installations.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12" data-testid="heading-content-6">
                Get Started with Financing Today
              </h2>

              <p className="text-gray-700 mb-6">
                Don't let budget concerns delay the home improvements you need. Whether you're facing an emergency repair, planning a major upgrade, or investing in energy-efficient solutions, Intelligent Design's flexible financing options make it possible to move forward with confidence.
              </p>

              <p className="text-gray-700 mb-6">
                Our team is ready to help you explore your financing options and find a solution that fits your budget and timeline. With quick approval processes, competitive rates, and payment plans designed for real life, we make quality home services accessible to every Tucson homeowner.
              </p>

              <p className="text-gray-700 mb-8">
                <strong>Call us today at <a href="tel:+15203332665" className="text-primary font-bold hover:underline">(520) 333-2665</a></strong> to schedule your free consultation and learn more about current financing promotions. Our friendly team will answer all your questions and help you get started on the path to a more comfortable, efficient, and valuable home.
              </p>

              <div className="text-center bg-primary/5 border-2 border-primary/20 rounded-lg p-8 my-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Apply for financing or schedule your free consultation today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Free Consultation"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-final"
                  />
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-final">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4" data-testid="heading-faq">
              Frequently Asked Questions About Financing
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Get answers to common questions about our financing options
            </p>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="faq-1" className="bg-white border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-1">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What financing options does Intelligent Design offer?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Intelligent Design offers flexible financing options for all our services including HVAC, solar, plumbing, electrical, and roofing. We work with leading financing partners to provide competitive rates, flexible payment terms, and quick approval processes. Financing is available O.A.C. (On Approved Credit) with options for various credit profiles.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="bg-white border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-2">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Can I finance my AC installation or replacement?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes! We offer comprehensive financing for all AC installation and replacement projects. Whether you need a new air conditioning system, ductless mini-split, or complete HVAC replacement, our financing options make it affordable with low monthly payments. Apply today for quick approval.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="bg-white border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-3">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Is financing available for solar panel installation in Tucson?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Absolutely! Solar panel financing is one of our most popular options. We offer special financing programs for residential and commercial solar installations, making it easier to invest in clean energy. Combined with federal tax credits and local incentives, financing makes solar more affordable than ever.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="bg-white border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-4">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  How quickly can I get approved for financing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Our financing approval process is typically very quick—many customers receive approval within minutes of applying. We work with multiple lending partners to ensure you get the best rates and terms. You can apply online, over the phone, or during your service appointment with one of our technicians.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5" className="bg-white border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-5">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What credit score do I need to qualify for financing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We work with multiple financing partners to serve customers with various credit profiles. While specific requirements vary by lender, we often have options available for customers with fair to excellent credit. All financing is subject to credit approval (O.A.C.). Contact us to discuss your specific situation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6" className="bg-white border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Can I finance emergency repair services?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes! We understand that emergency repairs often come unexpectedly. Our financing options are available for emergency services including AC repairs, plumbing emergencies, electrical issues, and more. Don't let budget concerns delay critical repairs—our financing makes it manageable.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-7" className="bg-white border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-7">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Are there any special financing promotions available?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We frequently offer special financing promotions including 0% interest for qualified periods, deferred payment options, and seasonal specials. Current promotions vary by season and service type. Call us at (520) 333-2665 or ask your service technician about current financing offers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-8" className="bg-white border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-8">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What services can be financed?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Almost all our services can be financed! This includes AC installation, heating systems, solar panels, water heaters, plumbing repairs and installations, electrical upgrades, roofing projects, and more. Whether it's a small repair or a complete system replacement, we have financing options available O.A.C.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-9" className="bg-white border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-9">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Do you offer same-day financing approval?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes! Most of our financing applications are processed and approved the same day, often within minutes. This allows you to move forward with necessary home improvements without delay. Our team can help you through the application process during your service appointment or consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-10" className="bg-white border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-10">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Can I pay off my financing early without penalties?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Most of our financing options allow early payoff without prepayment penalties, though specific terms vary by lender and financing program. We encourage you to review your financing agreement or contact us for details about your specific financing terms. Many customers choose to pay off early to save on interest.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-11" className="bg-white border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-11">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  How do I apply for financing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Applying for financing is easy! You can apply online through our website, call our office at (520) 333-2665, or apply during your service appointment. Our team will guide you through the simple application process and help you understand your financing options. Most applications take just a few minutes to complete.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Service Area & Contact Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center" data-testid="heading-service-area">
                Serving Tucson & Surrounding Areas
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Contact Information</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Phone:</strong> <a href="tel:+15203332665" className="text-primary hover:underline">(520) 333-2665</a>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Address:</strong><br />
                    1145 E Fort Lowell Rd<br />
                    Tucson, AZ 85719
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Service Hours</h3>
                  <p className="text-gray-700">
                    24/7 Emergency Service Available<br />
                    No Extra Charges for Appointment Times
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Areas We Serve</h3>
                  <p className="text-gray-700 text-sm">
                    Tucson, Oro Valley, Marana, Sahuarita, Vail, Green Valley, Catalina Foothills, and surrounding areas
                  </p>
                </div>
              </div>

              <div className="text-center">
                <SchedulerEmbed
                  triggerText="Schedule Your Free Consultation"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-footer"
                />
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
