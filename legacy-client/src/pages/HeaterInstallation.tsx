import { Phone, CheckCircle2 } from "lucide-react";
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
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import SchedulerEmbed from "@/components/SchedulerEmbed";
import TrustBar from "@/components/TrustBar";
import ServiceFAQ from "@/components/ServiceFAQ";
import { CommonQuestions } from "@/components/CommonQuestions";
import { heaterTuneupFAQs } from "@/data/faqs/hvac";
import { heatingInstallationCommonQuestions } from "@/data/commonQuestions/hvac";
import heaterInstallationHero from "@assets/generated_images/Heater_installation_hero_background_b1c3018e.webp";
import heaterInstallationImage from "@assets/generated_images/Heater_installation_service_image_64d22e49.webp";
import HeaterInstallationSchema from '@/components/HeaterInstallationSchema';
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";

export default function HeaterInstallation() {
  const description = 'Expert heater installation in Tucson, AZ. Professional furnace installation & replacement services. Energy-efficient heating systems installed right. Trusted Tucson heater installation from Intelligent Design.';
  const imageUrl = `${SITE_URL}${heaterInstallationHero}`;

  return (
    <>
      <MetaHead
        title="Heater Installation Tucson AZ | Furnace Installation & Replacement"
        description={description}
        canonical="https://www.idesignac.com/heater-installation-tucson"
        openGraph={[
          { property: "og:locale", content: "en_US" },
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Heater Installation Tucson AZ | Furnace Installation & Replacement" },
          { property: "og:description", content: description },
          { property: "og:url", content: "https://www.idesignac.com/heater-installation-tucson" },
          { property: "og:site_name", content: "Intelligent Design" },
          { property: "og:image", content: imageUrl },
          { property: "og:image:width", content: "1920" },
          { property: "og:image:height", content: "1080" },
          { property: "og:image:alt", content: "Professional HVAC technician installing new heater at Tucson home" }
        ]}
        twitter={[
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "Heater Installation Tucson AZ | Furnace Installation & Replacement" },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: imageUrl },
          { name: "twitter:image:alt", content: "Professional HVAC technician installing new heater at Tucson home" }
        ]}
      />
      <GTM />
      <DNIInjector />
      
      <HeaterInstallationSchema />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative text-white py-16 md:py-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heaterInstallationHero})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Expert Heater Installation in Tucson AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                  Over 22,000 5-Star Reviews
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  New Furnace Installation | System Replacement | Energy-Efficient Upgrades
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule Installation Online"
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

          {/* Trust Bar */}
          <TrustBar />

          {/* Page Highlights Section */}
          <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
                Why Choose Intelligent Design for Heater Installation?
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Free In-Home Estimates</p>
                    <p className="text-sm text-gray-600">No-obligation consultation | Expert system sizing | Compare options | Transparent pricing</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">High-Efficiency Systems Save Money</p>
                    <p className="text-sm text-gray-600">AFUE ratings up to 98% | Lower monthly bills 30-50% | Eco-friendly options | Quiet operation</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Rebates & Financing Available</p>
                    <p className="text-sm text-gray-600">TEP & SRP rebates | Flexible payment options | 0% APR available | Make upgrades affordable</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Expert Installation Guaranteed</p>
                    <p className="text-sm text-gray-600">NATE certified installers | Load calculations | Code-compliant work | Workmanship warranty</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Top Brands at Great Prices</p>
                    <p className="text-sm text-gray-600">Carrier, Trane, Lennox, Goodman & more | Factory warranties up to 10 years | Best value</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Fast, Clean Installation</p>
                    <p className="text-sm text-gray-600">Most installs in 1 day | Minimal disruption | Complete cleanup | System training included</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Heater Installation Company Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Best Heater Installation Company in Tucson, AZ
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="text-lg mb-6">
                    When it's time for a new heater in Tucson, AZ, you need experienced professionals who install systems correctly the first time. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we specialize in expert heater installation that delivers reliable comfort, maximum efficiency, and years of dependable performance.
                  </p>
                  <p className="text-lg mb-6">
                    Our certified HVAC installation technicians have the knowledge and experience to recommend the perfect heating system for your home and budget. We handle every aspect of installation—from removing your old equipment to testing and optimizing your new system—ensuring flawless operation from day one.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <SchedulerEmbed
                      triggerText="Get Free Estimate"
                      variant="default"
                      size="lg"
                      data-testid="button-schedule-section1"
                    />
                    <Button
                      size="lg"
                      className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                      asChild
                    >
                      <a href="tel:+15203332665" data-testid="button-call-quote">
                        Call For Free Quote
                      </a>
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src={heaterInstallationImage}
                      alt="Professional heater installation technicians installing new heating system in Tucson, Arizona"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
                <p className="text-lg mb-4">
                  With a nearly perfect 4.97 rating on Google and over 22,000 reviews, Intelligent Design is Tucson's most trusted heater installation company. Our technicians average over 17 years of experience and stay current with the latest heating technologies and installation techniques.
                </p>
                <p className="text-lg">
                  We're committed to helping you choose the right system and installing it perfectly. From energy-efficient high-efficiency furnaces to innovative heat pump systems, we offer the best heating solutions backed by comprehensive warranties and exceptional customer service.
                </p>
              </div>
            </div>
          </section>

          {/* Signs You Need Installation Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Signs You Need a New Heater Installation
                </h2>
                <p className="text-xl text-gray-700 font-semibold">
                  When Repair No Longer Makes Sense
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-lg">
                  Knowing when to replace rather than repair your heater saves money and prevents uncomfortable emergencies. If your heating system is over 15 years old and experiencing frequent problems, replacement often makes more financial sense than continuing to invest in repairs on aging equipment.
                </p>
                <p className="text-lg">
                  Rising energy bills indicate declining efficiency. As heaters age, they work harder to produce the same heat, consuming more energy and costing you more money every month. Modern high-efficiency systems can reduce your heating costs by 30-40% compared to older equipment, paying for themselves through energy savings.
                </p>
                <p className="text-lg">
                  Comfort issues like uneven heating, insufficient warmth, or constant cycling suggest your current heater can't meet your home's needs. Rather than struggling through another winter with inadequate heat, a properly sized new heater installation provides consistent, reliable comfort throughout your entire home.
                </p>
                <p className="text-lg">
                  Safety concerns require immediate attention. If your gas furnace shows signs of a cracked heat exchanger, carbon monoxide leaks, or other safety issues, replacement is often the only safe solution. Your family's safety is worth far more than any repair cost savings.
                </p>
                <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-xl font-bold text-primary mb-3">Key Indicators for Heater Replacement:</h3>
                  <ul className="space-y-2 text-lg">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>System age over 15-20 years with declining performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Repair costs exceeding 50% of replacement value</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Energy bills increasing 20-30% without usage changes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Frequent breakdowns requiring repeated service calls</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Safety concerns or carbon monoxide warnings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Installation Process Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Our Professional Heater Installation Process
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3">Expert Consultation</h3>
                  <p className="text-base">
                    We perform detailed load calculations, discuss your comfort preferences and budget, explain all available options, and help you select the perfect heating system for your home's specific needs.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3">Professional Installation</h3>
                  <p className="text-base">
                    Our certified technicians remove your old equipment, install your new system according to manufacturer specifications and code requirements, and connect all components properly for safe, efficient operation.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3">Testing & Education</h3>
                  <p className="text-base">
                    We thoroughly test all system functions, optimize performance settings, teach you how to operate your new heater efficiently, and ensure you're completely satisfied before we leave your home.
                  </p>
                </div>
              </div>

              <div className="bg-primary text-white p-8 md:p-12 rounded-lg text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready for a New Heater?
                </h3>
                <p className="text-xl mb-6">
                  Get a free in-home estimate with transparent pricing and financing options!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Free Estimate"
                    variant="secondary"
                    size="lg"
                    data-testid="button-schedule-process"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-process">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* System Types Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Heating Systems We Install in Tucson
              </h2>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Gas Furnaces</h3>
                  <p className="text-base mb-4">
                    Gas furnaces provide powerful, efficient heat for Tucson winters. Modern high-efficiency models (95%+ AFUE) deliver maximum comfort while minimizing energy costs. We install all major brands with professional expertise.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>High-efficiency condensing furnaces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Standard efficiency gas furnaces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Variable-speed blower systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Modulating gas valve technology</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Electric Heaters</h3>
                  <p className="text-base mb-4">
                    Electric heaters offer clean, reliable heat without requiring gas lines. Perfect for homes without natural gas access, they provide efficient heating with lower installation costs and minimal maintenance needs.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Electric furnaces with staged heating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Heat strip systems for heat pumps</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Packaged electric units</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Zoned electric heating solutions</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Heat Pumps</h3>
                  <p className="text-base mb-4">
                    Heat pumps provide both heating and cooling in one efficient system, ideal for Tucson's climate. They use electricity to move heat rather than generate it, offering excellent energy efficiency and year-round comfort.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>High-efficiency air-source heat pumps</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Dual-fuel hybrid systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Ductless mini-split heat pumps</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Variable-speed inverter technology</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Specialty Systems</h3>
                  <p className="text-base mb-4">
                    We install specialty heating systems for unique situations including homes without ductwork, multi-zone requirements, or specific efficiency goals. Our experts design custom solutions for any heating challenge.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Ductless mini-split systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Packaged rooftop units</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Multi-zone heating systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Geothermal heat pump systems</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Explore Your Options"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-systems"
                />
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-systems">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Why Choose Intelligent Design for Heater Installation?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Expert Installation Team</h3>
                  <p className="text-base">
                    Our installation technicians are certified, licensed, and insured with an average of 17+ years experience. They install your heater according to manufacturer specifications and all applicable codes for safe, efficient operation.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Free In-Home Estimates</h3>
                  <p className="text-base">
                    We provide free, no-obligation in-home estimates that include load calculations, equipment recommendations, and transparent pricing. You'll understand all your options before making any decisions.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Flexible Financing</h3>
                  <p className="text-base">
                    We offer flexible financing options that make new heater installation affordable. Don't let upfront costs prevent you from enjoying the comfort and efficiency of a new heating system.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Family & Veteran Owned</h3>
                  <p className="text-base">
                    As a family and veteran-owned business serving Tucson since 1979, we treat every customer like family. We're committed to honest recommendations and quality workmanship you can trust.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Comprehensive Warranties</h3>
                  <p className="text-base">
                    We stand behind our installations with comprehensive warranties covering both equipment and workmanship. Your investment is protected with the industry's best warranty coverage.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">All Major Brands</h3>
                  <p className="text-base">
                    We install all major heating brands including Carrier, Trane, Lennox, Rheem, Goodman, American Standard, York, Bryant, Amana, and more. Choose the brand you trust most.
                  </p>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Get Your Free Heater Installation Estimate
                </h3>
                <p className="text-xl mb-6">
                  Discover the perfect heating system for your home. Schedule your free consultation today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Free Estimate"
                    variant="secondary"
                    size="lg"
                    data-testid="button-schedule-why-choose"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-why-choose">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Common Questions - Conversational Q&A for AI Search Optimization */}
          <CommonQuestions questions={heatingInstallationCommonQuestions} />

          {/* FAQ Section - LLM-Optimized with 11 Questions */}
          <ServiceFAQ faqs={heaterTuneupFAQs.faqs} />

          {/* NAP Section */}
          <section className="py-16 md:py-20 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Contact Intelligent Design for Heater Installation in Tucson
                  </h2>
                  <div className="space-y-4 text-lg">
                    <p className="flex items-start">
                      <span className="font-bold mr-2">Address:</span>
                      <span>1145 E Fort Lowell Rd, Tucson, AZ 85719</span>
                    </p>
                    <p className="flex items-start">
                      <span className="font-bold mr-2">Phone:</span>
                      <a href="tel:+15203332665" className="hover:text-yellow-400 transition-colors">
                        (520) 333-2665
                      </a>
                    </p>
                    <p className="flex items-start">
                      <span className="font-bold mr-2">Hours:</span>
                      <span>Monday-Friday 7:00 AM - 6:00 PM, Saturday 8:00 AM - 4:00 PM</span>
                    </p>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-4">Service Areas</h3>
                    <p className="text-lg">
                      We proudly serve Tucson and surrounding areas including Oro Valley, Marana, Sahuarita, Green Valley, Vail, and more throughout Southern Arizona.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <SchedulerEmbed
                    triggerText="Schedule Free Estimate Online"
                    variant="secondary"
                    size="lg"
                    data-testid="button-schedule-contact"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-contact">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now: (520) 333-2665
                    </a>
                  </Button>
                </div>
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
