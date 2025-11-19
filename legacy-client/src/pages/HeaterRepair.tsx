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
import { heatingRepairCommonQuestions } from "@/data/commonQuestions/hvac";
import heaterRepairHero from "@assets/generated_images/Heater_repair_hero_background_2abaeefe.webp";
import heaterRepairService from "@assets/generated_images/Heater_repair_service_image_c9082dcb.webp";
import HeaterRepairSchema from '@/components/HeaterRepairSchema';
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";

export default function HeaterRepair() {
  const description = 'Top-rated heater repair in Tucson, AZ. Fast, reliable furnace & heating repair service. 24/7 emergency heater repair. Stay warm with affordable Tucson heating repair solutions from Intelligent Design.';
  const imageUrl = `${SITE_URL}${heaterRepairHero}`;

  return (
    <>
      <MetaHead
        title="Heater Repair Tucson AZ | Furnace & Heating Repair Service"
        description={description}
        canonical="https://www.idesignac.com/heater-repair-tucson"
        openGraph={[
          { property: "og:locale", content: "en_US" },
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Heater Repair Tucson AZ | Furnace & Heating Repair Service" },
          { property: "og:description", content: description },
          { property: "og:url", content: "https://www.idesignac.com/heater-repair-tucson" },
          { property: "og:site_name", content: "Intelligent Design" },
          { property: "og:image", content: imageUrl },
          { property: "og:image:width", content: "1920" },
          { property: "og:image:height", content: "1080" },
          { property: "og:image:alt", content: "Professional HVAC technician repairing heater at Tucson home" }
        ]}
        twitter={[
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "Heater Repair Tucson AZ | Furnace & Heating Repair Service" },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: imageUrl },
          { name: "twitter:image:alt", content: "Professional HVAC technician repairing heater at Tucson home" }
        ]}
      />
      <GTM />
      <DNIInjector />
      
      <HeaterRepairSchema />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative text-white py-16 md:py-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heaterRepairHero})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Top-Rated Heater Repair in Tucson AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                  Over 22,000 5-Star Reviews
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  24/7 Emergency Heater Repair | Fast Response Times | Expert Technicians
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule Heater Repair Online"
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
                Why Choose Intelligent Design for Heater Repair?
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">24/7 Emergency Heater Repair</p>
                    <p className="text-sm text-gray-600">Fast response during cold weather | Same-day service available | No overtime charges</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">All Heating Systems Serviced</p>
                    <p className="text-sm text-gray-600">Gas furnaces, heat pumps, electric heaters & more | All brands | Residential & commercial</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Upfront, Transparent Pricing</p>
                    <p className="text-sm text-gray-600">Written estimates before repairs | No hidden fees | Financing options available</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Expert Certified Technicians</p>
                    <p className="text-sm text-gray-600">NATE certified | Factory trained | Background-checked professionals | 45+ years experience</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">100% Satisfaction Guarantee</p>
                    <p className="text-sm text-gray-600">Workmanship warranty | Quality parts & labor | If it's not right, we'll make it right</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Family & Veteran-Owned Since 1979</p>
                    <p className="text-sm text-gray-600">Trusted Tucson company | 22,000+ five-star reviews | BBB A+ rated | Licensed & insured</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Heater Repair Company Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Best Heater Repair Company in Tucson, AZ
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="text-lg mb-6">
                    Living in Tucson, AZ, may mean hot summers, but winter nights can get surprisingly cold. When your heater stops working properly, you need reliable repair service fast. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we provide the best heater repair service in Tucson, AZ.
                  </p>
                  <p className="text-lg mb-6">
                    Our expert HVAC technicians are available 24/7 to restore warmth and comfort to your home. Whether you have a gas furnace, electric heater, or heat pump system, our certified professionals have the skills and experience to diagnose and fix any heating problem quickly and effectively.
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
                      src={heaterRepairService}
                      alt="Professional heater repair technician servicing heating system in Tucson, Arizona"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
                <p className="text-lg mb-4">
                  In Tucson, AZ, choosing the right heating repair company matters. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've earned the trust of thousands of Tucson residents. With a nearly perfect 4.97 rating on Google and over 22,000 reviews, we're the most trusted heating repair company in Southern Arizona.
                </p>
                <p className="text-lg">
                  Our HVAC technicians average over 17 years of experience each and receive ongoing training on the latest heating system technologies. We're committed to providing fast, affordable, and reliable heater repair service that keeps your family comfortable all winter long.
                </p>
              </div>
            </div>
          </section>

          {/* Why Heater Isn't Working Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Common Reasons Your Heater Needs Repair
                </h2>
                <p className="text-xl text-gray-700 font-semibold">
                  Expert Tucson Heating System Diagnostics & Repair Services
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-lg">
                  Understanding why heaters fail helps you recognize problems early. If your heater won't turn on at all, the issue could be electrical—from a tripped breaker to a faulty thermostat or blown fuse. Heaters draw significant power, especially during startup, and electrical issues are among the most common causes of heating system failures.
                </p>
                <p className="text-lg">
                  Dirty or clogged components are another frequent culprit. Air filters clogged with dust and debris restrict airflow, forcing your heater to work harder and potentially overheat. Burners covered in soot or debris won't heat efficiently. Regular maintenance prevents many of these issues, but when problems arise, professional heater repair is essential.
                </p>
                <p className="text-lg">
                  Mechanical wear and tear affects older heating systems. Blower motors, belts, bearings, and other moving parts eventually wear out. Strange noises—grinding, squealing, or banging—often indicate mechanical problems requiring immediate attention. Ignoring these sounds can lead to complete system failure and costly emergency repairs.
                </p>
                <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-xl font-bold text-primary mb-3">Warning Signs You Need Heater Repair:</h3>
                  <ul className="space-y-2 text-lg">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Heater won't turn on or cycles on and off frequently</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Insufficient heat or uneven heating throughout your home</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Strange noises (banging, grinding, squealing, rattling)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Yellow pilot light flame or unusual odors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Sudden increase in energy bills without increased usage</span>
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
                What to Expect During Your Heater Repair Service
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3">Comprehensive Diagnosis</h3>
                  <p className="text-base">
                    Our certified technicians perform a thorough inspection of your entire heating system, identifying the root cause of the problem—not just treating symptoms.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3">Upfront Pricing</h3>
                  <p className="text-base">
                    Before we begin any repair work, we provide clear, upfront pricing with no hidden fees. You'll know exactly what the repair will cost and approve the work before we start.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3">Expert Repair & Testing</h3>
                  <p className="text-base">
                    We complete the repair using high-quality parts, then thoroughly test your system to ensure it's running safely and efficiently before we leave your home.
                  </p>
                </div>
              </div>

              <div className="bg-primary text-white p-8 md:p-12 rounded-lg text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Need Emergency Heater Repair?
                </h3>
                <p className="text-xl mb-6">
                  We're available 24/7 for heating emergencies. Don't spend a cold night without heat!
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
                      Emergency: (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Types of Heater Repairs Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Comprehensive Heater Repair Services in Tucson
              </h2>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Gas Furnace Repair</h3>
                  <p className="text-base mb-4">
                    Our technicians are experts in gas furnace repair, from ignition problems to heat exchanger issues. We handle pilot light problems, faulty gas valves, cracked heat exchangers, and more. Safety is our top priority with all gas furnace repairs.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Ignition and pilot light repair</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Heat exchanger inspection and replacement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Gas valve and burner repair</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Safety control repairs</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Electric Heater Repair</h3>
                  <p className="text-base mb-4">
                    Electric heaters require specialized knowledge of electrical components and heating elements. We diagnose and repair heating element failures, thermostat issues, electrical connections, and control board problems efficiently.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Heating element replacement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Thermostat calibration and repair</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Electrical connection repair</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Control board diagnostics and replacement</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Heat Pump Repair</h3>
                  <p className="text-base mb-4">
                    Heat pumps provide both heating and cooling, making them popular in Tucson. We repair refrigerant leaks, reversing valve problems, compressor issues, and defrost control malfunctions to keep your heat pump running year-round.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Refrigerant leak detection and repair</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Reversing valve replacement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Compressor repair and replacement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Defrost control repair</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Mechanical Component Repair</h3>
                  <p className="text-base mb-4">
                    Mechanical failures cause many heating system breakdowns. We replace worn blower motors, repair or replace damaged belts, lubricate bearings, and fix ductwork issues that reduce your system's efficiency.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Blower motor repair and replacement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Belt replacement and alignment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Bearing lubrication and replacement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Ductwork sealing and repair</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Heater Repair"
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
                Why Choose Intelligent Design for Heater Repair?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Certified Expert Technicians</h3>
                  <p className="text-base">
                    All our heating repair technicians are certified, licensed, and insured. They average over 17 years of experience and receive ongoing training on the latest heating technologies and repair techniques.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">24/7 Emergency Service</h3>
                  <p className="text-base">
                    Heating emergencies don't wait for convenient times. We're available around the clock, including weekends and holidays, to restore warmth to your home when you need it most.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Upfront, Honest Pricing</h3>
                  <p className="text-base">
                    No surprises or hidden fees. We provide clear, upfront pricing before beginning any repair work. You'll always know what your heater repair will cost before we start.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Family & Veteran Owned</h3>
                  <p className="text-base">
                    As a family and veteran-owned business serving Tucson since 1979, we treat every customer like family. We're committed to providing reliable, professional service with integrity.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Comprehensive Warranties</h3>
                  <p className="text-base">
                    We stand behind our work with comprehensive warranties on both parts and labor. Your satisfaction and peace of mind are our top priorities.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">All Major Brands</h3>
                  <p className="text-base">
                    We service all major heating system brands including Carrier, Trane, Lennox, Rheem, Goodman, American Standard, York, Bryant, and more.
                  </p>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Schedule Your Heater Repair?
                </h3>
                <p className="text-xl mb-6">
                  Get your heating system running efficiently again. Call now or schedule online!
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
          <CommonQuestions questions={heatingRepairCommonQuestions} />

          {/* FAQ Section - LLM-Optimized with 11 Questions */}
          <ServiceFAQ faqs={heaterTuneupFAQs.faqs} />

          {/* NAP Section */}
          <section className="py-16 md:py-20 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Contact Intelligent Design for Heater Repair in Tucson
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
                    triggerText="Schedule Heater Repair Online"
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
