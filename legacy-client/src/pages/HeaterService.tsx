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
import { heatingMaintenanceCommonQuestions } from "@/data/commonQuestions/hvac";
import heaterServiceHero from "@assets/generated_images/Heater_service_hero_background_895aa368.webp";
import heaterServiceImage from "@assets/generated_images/Heater_service_maintenance_image_927f5159.webp";
import HeaterServiceSchema from '@/components/HeaterServiceSchema';
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";

export default function HeaterService() {
  const description = 'Professional heater service in Tucson, AZ. Expert heating system maintenance, tune-ups & inspections. Keep your heater running efficiently all winter. Trusted Tucson heating service from Intelligent Design.';
  const imageUrl = `${SITE_URL}${heaterServiceHero}`;

  return (
    <>
      <MetaHead
        title="Heater Service Tucson AZ | Heating System Maintenance & Tune-Up"
        description={description}
        canonical="https://www.idesignac.com/heater-service-tucson"
        openGraph={[
          { property: "og:locale", content: "en_US" },
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Heater Service Tucson AZ | Heating System Maintenance & Tune-Up" },
          { property: "og:description", content: description },
          { property: "og:url", content: "https://www.idesignac.com/heater-service-tucson" },
          { property: "og:site_name", content: "Intelligent Design" },
          { property: "og:image", content: imageUrl },
          { property: "og:image:width", content: "1920" },
          { property: "og:image:height", content: "1080" },
          { property: "og:image:alt", content: "Professional HVAC technician servicing heater at Tucson home" }
        ]}
        twitter={[
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "Heater Service Tucson AZ | Heating System Maintenance & Tune-Up" },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: imageUrl },
          { name: "twitter:image:alt", content: "Professional HVAC technician servicing heater at Tucson home" }
        ]}
      />
      <GTM />
      <DNIInjector />
      
      <HeaterServiceSchema />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative text-white py-16 md:py-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heaterServiceHero})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Professional Heater Service in Tucson AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                  Over 22,000 5-Star Reviews
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  Annual Maintenance | System Tune-Ups | Efficiency Optimization | Safety Inspections
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule Heater Service Online"
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
                Why Maintain Your Heater with Intelligent Design?
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Save 15-30% on Heating Costs</p>
                    <p className="text-sm text-gray-600">Regular maintenance keeps systems running efficiently | Lower winter bills | Prevent costly repairs</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Prevent Winter Breakdowns</p>
                    <p className="text-sm text-gray-600">Pre-season tune-ups catch issues early | Avoid emergency repairs | Keep your family warm</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Comprehensive Inspection</p>
                    <p className="text-sm text-gray-600">Thorough system diagnostics | Safety checks | Carbon monoxide testing | Performance optimization</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Extend Equipment Life</p>
                    <p className="text-sm text-gray-600">Regular service extends heater lifespan 3-5 years | Protect your investment | Better performance</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Priority Service & Discounts</p>
                    <p className="text-sm text-gray-600">Maintenance plan members get priority scheduling | Exclusive repair discounts | No trip charges</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Expert Technicians</p>
                    <p className="text-sm text-gray-600">NATE certified | 45+ years experience | Background-checked professionals | Satisfaction guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Heater Service Company Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Best Heater Service Company in Tucson, AZ
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="text-lg mb-6">
                    Regular heater service is essential for reliable winter comfort in Tucson, AZ. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we provide comprehensive heating system maintenance that keeps your heater running efficiently, safely, and reliably throughout the coldest months.
                  </p>
                  <p className="text-lg mb-6">
                    Our certified HVAC technicians perform thorough inspections, cleaning, and tune-ups that prevent breakdowns, reduce energy costs, and extend your heater's lifespan. Whether you have a gas furnace, electric heater, or heat pump, we have the expertise to maintain your system at peak performance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <SchedulerEmbed
                      triggerText="Schedule Service Now"
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
                      src={heaterServiceImage}
                      alt="Professional heater service technician performing maintenance on heating system in Tucson, Arizona"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
                <p className="text-lg mb-4">
                  With a nearly perfect 4.97 rating on Google and over 22,000 reviews, Intelligent Design is Tucson's most trusted heating service company. Our technicians average over 17 years of experience and receive ongoing training on the latest HVAC technologies and best practices.
                </p>
                <p className="text-lg">
                  We're committed to providing honest, reliable service that protects your investment and keeps your family comfortable. Our maintenance plans offer convenient scheduling, priority service, and cost savings that make regular heater service affordable and hassle-free.
                </p>
              </div>
            </div>
          </section>

          {/* Why Heater Service Matters Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Why Regular Heater Service is Essential
                </h2>
                <p className="text-xl text-gray-700 font-semibold">
                  Protect Your Investment and Keep Your Family Comfortable
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-lg">
                  Many homeowners overlook heater maintenance until something goes wrong. This reactive approach leads to uncomfortable breakdowns, costly emergency repairs, and shortened equipment life. Regular professional service prevents these problems while delivering significant benefits throughout the year.
                </p>
                <p className="text-lg">
                  During a comprehensive heater service visit, our technicians thoroughly inspect, clean, and optimize every component of your heating system. We identify and address minor issues before they escalate into major problems. Clean, well-adjusted systems operate more efficiently, consuming less energy and saving you money on utility bills.
                </p>
                <p className="text-lg">
                  Safety is paramount with heating systems, especially gas furnaces. Annual professional service ensures proper combustion, checks for gas leaks, tests carbon monoxide detectors, and verifies all safety controls function correctly. This protects your family from potentially dangerous situations.
                </p>
                <p className="text-lg">
                  Regular maintenance also extends your heater's lifespan significantly. Systems that receive annual professional service last 5-10 years longer than neglected equipment. This延ays the need for costly replacement and maximizes your return on investment.
                </p>
                <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-xl font-bold text-primary mb-3">Benefits of Regular Heater Service:</h3>
                  <ul className="space-y-2 text-lg">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Prevents up to 95% of potential breakdowns and emergency repairs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Reduces energy bills by 15-20% through improved efficiency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Extends equipment lifespan by 5-10 years with proper care</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Ensures safe operation and carbon monoxide protection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Maintains manufacturer warranty requirements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Service Process Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Our Comprehensive Heater Service Process
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3">Thorough Inspection</h3>
                  <p className="text-base">
                    We examine every component of your heating system including burners, heat exchanger, blower motor, electrical connections, ductwork, and safety controls to identify any issues or wear.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3">Complete Cleaning & Adjustment</h3>
                  <p className="text-base">
                    We clean burners, heat exchangers, and blower components, replace air filters, lubricate moving parts, calibrate thermostats, and adjust system settings for optimal performance.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3">Testing & Reporting</h3>
                  <p className="text-base">
                    We test all safety controls, measure system efficiency, check carbon monoxide levels, verify proper operation, and provide a detailed report of our findings and recommendations.
                  </p>
                </div>
              </div>

              <div className="bg-primary text-white p-8 md:p-12 rounded-lg text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready for Professional Heater Service?
                </h3>
                <p className="text-xl mb-6">
                  Schedule your annual heater maintenance today and enjoy reliable comfort all winter long!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Service Online"
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

          {/* Service Coverage Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Complete Heater Service for All System Types
              </h2>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Gas Furnace Service</h3>
                  <p className="text-base mb-4">
                    Our gas furnace service includes complete combustion analysis, heat exchanger inspection, burner cleaning, pilot light adjustment, gas pressure testing, and comprehensive safety checks to ensure efficient, safe operation.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Combustion efficiency testing and adjustment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Heat exchanger inspection for cracks or damage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Burner cleaning and flame adjustment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Safety control testing and verification</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Electric Heater Service</h3>
                  <p className="text-base mb-4">
                    Electric heater maintenance focuses on heating elements, electrical connections, sequencers, and controls. We ensure all components operate safely and efficiently, preventing costly failures and maintaining optimal performance.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Heating element inspection and testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Electrical connection tightening and inspection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Sequencer and contactor testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Amperage draw verification</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Heat Pump Service</h3>
                  <p className="text-base mb-4">
                    Heat pump service covers both heating and cooling modes. We check refrigerant levels, inspect reversing valves, test defrost controls, clean coils, and verify efficient operation in both modes for year-round comfort.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Refrigerant level check and leak detection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Reversing valve operation testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Defrost cycle verification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Coil cleaning and airflow optimization</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">System Component Service</h3>
                  <p className="text-base mb-4">
                    Beyond the heat source, we service all system components including blower assemblies, air filters, thermostats, ductwork, and ventilation. Complete system attention ensures maximum efficiency and comfort.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Blower motor lubrication and belt inspection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Air filter replacement and airflow testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Thermostat calibration and programming</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Ductwork inspection for leaks or damage</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Heater Service"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-coverage"
                />
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-coverage">
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
                Why Choose Intelligent Design for Heater Service?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Expert Certified Technicians</h3>
                  <p className="text-base">
                    Our heating service technicians are certified, licensed, and insured with an average of 17+ years experience. They receive continuous training on the latest HVAC technologies and service techniques to provide you with expert care.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Comprehensive Service Plans</h3>
                  <p className="text-base">
                    Our maintenance plans provide convenient annual service, priority scheduling, exclusive discounts on repairs, and peace of mind knowing your heater receives professional attention on a regular schedule.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Transparent Pricing</h3>
                  <p className="text-base">
                    No surprises or hidden fees. We provide clear, upfront pricing for all service work. You'll know exactly what your heater maintenance costs before we begin, with no unexpected charges.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Family & Veteran Owned</h3>
                  <p className="text-base">
                    As a family and veteran-owned business serving Tucson since 1979, we treat every customer like family. We're committed to honest, reliable service with integrity and respect for your home.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Satisfaction Guaranteed</h3>
                  <p className="text-base">
                    We stand behind our service with comprehensive guarantees. If you're not completely satisfied with your heater maintenance, we'll make it right. Your comfort and satisfaction are our top priorities.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">All Brands Serviced</h3>
                  <p className="text-base">
                    We service all major heating system brands including Carrier, Trane, Lennox, Rheem, Goodman, American Standard, York, Bryant, Amana, and more. No matter your system, we have the expertise to maintain it properly.
                  </p>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Schedule Your Heater Service Today
                </h3>
                <p className="text-xl mb-6">
                  Protect your investment and ensure reliable comfort all winter. Call now or schedule online!
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

          {/* Common Questions - Conversational Q&A for AI Search Optimization */}
          <CommonQuestions questions={heatingMaintenanceCommonQuestions} />

          {/* FAQ Section - LLM-Optimized with 11 Questions */}
          <ServiceFAQ faqs={heaterTuneupFAQs.faqs} />

          {/* NAP Section */}
          <section className="py-16 md:py-20 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Contact Intelligent Design for Heater Service in Tucson
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
                    triggerText="Schedule Heater Service Online"
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
