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
import { heaterTuneupFAQs } from "@/data/faqs/hvac";
import furnaceHero from "@assets/generated_images/Furnace_systems_hero_background_a983faa1.webp";
import furnaceService from "@assets/generated_images/Furnace_service_image_94f634f8.webp";
import FurnacesSchema from '@/components/FurnacesSchema';
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";

export default function Furnaces() {
  const description = 'Expert furnace installation, repair & replacement in Tucson, AZ. High-efficiency gas & electric furnaces for reliable winter heating. Professional furnace services from Intelligent Design.';
  const imageUrl = `${SITE_URL}${furnaceHero}`;

  return (
    <>
      <MetaHead
        title="Furnaces Tucson AZ | Furnace Installation, Repair & Replacement"
        description={description}
        canonical="https://www.idesignac.com/furnaces-tucson"
        openGraph={[
          { property: "og:locale", content: "en_US" },
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Furnaces Tucson AZ | Furnace Installation, Repair & Replacement" },
          { property: "og:description", content: description },
          { property: "og:url", content: "https://www.idesignac.com/furnaces-tucson" },
          { property: "og:site_name", content: "Intelligent Design" },
          { property: "og:image", content: imageUrl },
          { property: "og:image:width", content: "1920" },
          { property: "og:image:height", content: "1080" },
          { property: "og:image:alt", content: "Professional HVAC technician installing high-efficiency furnace at Tucson home" }
        ]}
        twitter={[
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "Furnaces Tucson AZ | Furnace Installation, Repair & Replacement" },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: imageUrl },
          { name: "twitter:image:alt", content: "Professional HVAC technician installing high-efficiency furnace at Tucson home" }
        ]}
      />
      <GTM />
      <DNIInjector />
      
      <FurnacesSchema />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative text-white py-16 md:py-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${furnaceHero})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Expert Furnace Installation & Service in Tucson AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                  Over 22,000 5-Star Reviews
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  High-Efficiency Furnaces | Expert Installation | Professional Service | Trusted Technicians
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule Furnace Service Online"
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
                Why Choose Intelligent Design for Furnace Systems?
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">High-Efficiency Furnaces</p>
                    <p className="text-sm text-gray-600">AFUE ratings up to 98% | Lower heating bills 30-50% | Gas & electric models | Quiet operation</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Reliable Winter Heating</p>
                    <p className="text-sm text-gray-600">Powerful, consistent heat | Handles coldest nights | Fast warm-up | Proven technology</p>
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
                    <p className="font-semibold text-gray-900 mb-1">Expert Installation Guaranteed</p>
                    <p className="text-sm text-gray-600">NATE certified installers | Proper sizing & load calculations | Code-compliant work | Workmanship warranty</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Rebates & Financing Available</p>
                    <p className="text-sm text-gray-600">TEP & SRP utility rebates | 0% APR financing options | Federal tax credits | Affordable upgrades</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Complete Service & Support</p>
                    <p className="text-sm text-gray-600">Installation, repair & maintenance | 24/7 emergency service | 45+ years experience | Satisfaction guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Furnace Company Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Best Furnace Company in Tucson, AZ
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="text-lg mb-6">
                    When winter arrives in Tucson, AZ, you need a furnace that delivers reliable, efficient warmth. While our winters may be milder than northern climates, cold nights still require dependable heating. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we're Tucson's premier furnace installation, repair, and replacement specialists.
                  </p>
                  <p className="text-lg mb-6">
                    Whether you need a new furnace installation, repairs on an existing system, or are considering replacement, our factory-trained technicians provide expert service on all major brands. We specialize in both gas and electric furnaces, helping you choose the perfect system for your home's needs, budget, and comfort requirements.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <SchedulerEmbed
                      triggerText="Schedule Online Now"
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
                        Call For A Free Quote
                      </a>
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src={furnaceService}
                      alt="Professional furnace installation and service in Tucson, Arizona"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
                <p className="text-lg mb-4">
                  At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've earned the trust of thousands of Tucson residents with our comprehensive furnace services. With a nearly perfect 4.97 rating on Google and over 22,000 reviews, we're Southern Arizona's most trusted HVAC company. Our technicians average over 17 years of experience and receive ongoing training on the latest furnace technologies.
                </p>
                <p className="text-lg">
                  We're committed to providing honest recommendations, transparent pricing, and professional installation that ensures your furnace operates safely and efficiently for years to come. Whether you're replacing an aging system or installing a furnace in a new home, we're here to help you make the best decision for your family's comfort.
                </p>
              </div>
            </div>
          </section>

          {/* Furnace Types Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Types of Furnaces for Tucson Homes
                </h2>
                <p className="text-xl text-gray-700 font-semibold">
                  Gas, Electric & High-Efficiency Options
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-lg">
                  Choosing the right furnace for your Tucson home depends on several factors including available utilities, operating costs, efficiency preferences, and budget. Understanding the differences between furnace types helps you make an informed decision that provides reliable comfort and optimal value for your specific situation.
                </p>
                <p className="text-lg">
                  Gas furnaces are the most popular choice in Tucson homes with natural gas service. Modern gas furnaces are available in a wide range of efficiency levels, from standard 80% AFUE models to ultra-high-efficiency 98% AFUE systems. High-efficiency gas furnaces extract more heat from combustion, reducing fuel consumption and lowering your energy bills significantly. They also qualify for federal tax credits and utility rebates.
                </p>
                <p className="text-lg">
                  Electric furnaces are ideal for homes without natural gas service or for homeowners who prefer not to use combustion heating. While electric furnaces typically have higher operating costs than gas, they offer advantages including lower installation costs, no venting requirements, longer lifespan, and excellent reliability. In Tucson's mild winter climate, electric furnaces can be cost-effective alternatives to gas.
                </p>
                <p className="text-lg">
                  High-efficiency furnaces (95%+ AFUE) represent the pinnacle of furnace technology. These systems extract maximum heat from fuel, dramatically reducing waste and operating costs. Features like variable-speed blowers, modulating burners, and advanced controls provide superior comfort, quieter operation, and better air circulation. While initial costs are higher, energy savings and available incentives make them excellent long-term investments.
                </p>
                <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-xl font-bold text-primary mb-3">Furnace Efficiency Ratings:</h3>
                  <ul className="space-y-2 text-lg">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Standard Efficiency (80% AFUE): Basic models, lower upfront cost</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>High-Efficiency (90-95% AFUE): Balanced efficiency and value</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Ultra-High-Efficiency (96-98% AFUE): Maximum savings, tax credit eligible</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Electric Resistance (100% AFUE): All energy converts to heat</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Variable-Speed Models: Superior comfort and efficiency</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* What to Expect Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                What to Expect During Furnace Installation
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3">Professional Assessment</h3>
                  <p className="text-base">
                    Our experts perform detailed load calculations, evaluate your home's heating needs, and recommend the right furnace size and efficiency level for optimal comfort and savings.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3">Expert Installation</h3>
                  <p className="text-base">
                    Our certified technicians install your furnace following all manufacturer specifications and local codes, ensuring safe, efficient operation and maximum equipment lifespan.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3">Complete Testing</h3>
                  <p className="text-base">
                    We thoroughly test your new furnace, verify all safety controls, ensure proper combustion and airflow, and provide complete operation training before we leave.
                  </p>
                </div>
              </div>

              <div className="bg-primary text-white p-8 md:p-12 rounded-lg text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Upgrade Your Furnace?
                </h3>
                <p className="text-xl mb-6">
                  Get reliable, efficient heating for your Tucson home. Free estimates available!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Service Now"
                    variant="secondary"
                    size="lg"
                    data-testid="button-schedule-emergency"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-emergency">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Furnace Services Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Comprehensive Furnace Services in Tucson
              </h2>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Furnace Installation</h3>
                  <p className="text-base mb-4">
                    We install all major furnace brands with expert precision. Our installations include proper sizing, ductwork integration, gas or electrical connections, venting, and complete system testing for safe, efficient operation.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Professional load calculations and sizing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Gas and electric furnace installation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Complete venting and ductwork connections</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Thorough testing and commissioning</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Furnace Repair</h3>
                  <p className="text-base mb-4">
                    Our technicians diagnose and repair all furnace issues including ignition problems, blower motor failures, heat exchanger cracks, thermostat issues, and gas valve malfunctions quickly and professionally.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Ignition system and pilot light repair</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Blower motor and belt replacement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Heat exchanger inspection and replacement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>24/7 emergency furnace repair service</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Furnace Maintenance</h3>
                  <p className="text-base mb-4">
                    Annual furnace maintenance is essential for safety, efficiency, and longevity. Our comprehensive tune-ups include cleaning, inspection, testing, and calibration to prevent breakdowns and ensure optimal performance.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Complete system inspection and cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Safety control testing and verification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Combustion efficiency testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Carbon monoxide testing for safety</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Furnace Replacement</h3>
                  <p className="text-base mb-4">
                    When your furnace is beyond economical repair or approaching the end of its lifespan, we provide expert replacement with new, high-efficiency models that dramatically reduce energy costs.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Honest replacement recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>High-efficiency furnace options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Professional removal and disposal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Rebate and financing assistance</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Furnace Service"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-services"
                />
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-services">
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
                Why Choose Intelligent Design for Furnaces?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Certified Furnace Experts</h3>
                  <p className="text-base">
                    All our furnace technicians are factory-trained and certified on major brands. They average over 17 years of experience and receive continuous training on the latest furnace technologies and installation techniques.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Professional Installation</h3>
                  <p className="text-base">
                    Proper installation is critical for furnace safety and efficiency. We follow all manufacturer specifications, local codes, and industry best practices, ensuring your system operates correctly from day one.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Transparent Pricing</h3>
                  <p className="text-base">
                    No surprises or hidden fees. We provide clear, upfront pricing for all furnace services. You'll know exactly what your installation, repair, or maintenance will cost before we begin work.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Family & Veteran Owned</h3>
                  <p className="text-base">
                    As a family and veteran-owned business serving Tucson since 1979, we treat every customer like family. We're committed to providing reliable, professional service with complete integrity.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Rebate & Financing Help</h3>
                  <p className="text-base">
                    We help you navigate available tax credits, utility rebates, and financing options to make your furnace investment affordable. Our team assists with all paperwork and maximizes your savings.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">All Major Brands</h3>
                  <p className="text-base">
                    We install and service all major furnace brands including Carrier, Trane, Lennox, Rheem, Goodman, American Standard, York, Bryant, Amana, and more with factory-trained expertise.
                  </p>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Install or Replace Your Furnace?
                </h3>
                <p className="text-xl mb-6">
                  Get efficient, reliable heating for your Tucson home. Call now or schedule online!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Online"
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

          <ServiceFAQ faqs={heaterTuneupFAQs.faqs} />

          {/* NAP Section */}
          <section className="py-16 md:py-20 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Contact Intelligent Design for Furnaces in Tucson
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
                      <span>24/7 Emergency Service Available</span>
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
                    triggerText="Schedule Furnace Service Online"
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
