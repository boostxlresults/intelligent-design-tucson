import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingActions from "@/components/MobileFloatingActions";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import SchedulerEmbed from "@/components/SchedulerEmbed";
import DuctlessMiniSplitRepairSchema from "@/components/DuctlessMiniSplitRepairSchema";
import TrustBar from "@/components/TrustBar";
import ServiceFAQ from "@/components/ServiceFAQ";
import { ductlessMiniSplitRepairFAQs } from "@/data/faqs/hvac";
import heroImage from "@assets/generated_images/Ductless_mini_split_repair_Tucson_153fb3a3.webp";
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";

export default function DuctlessMiniSplitRepair() {
  const description = 'Expert ductless mini split repair in Tucson. 24/7 emergency service, all brands, same-day repairs. Call Intelligent Design for reliable mini split AC repair today!';
  const imageUrl = `${SITE_URL}${heroImage}`;

  return (
    <>
      <GTM />
      <DNIInjector />
      <DuctlessMiniSplitRepairSchema />
      
      <MetaHead
        title="Ductless Mini Split Repair Tucson AZ | Mini Split AC Repair | Intelligent Design"
        description={description}
        canonical="https://www.idesignac.com/ductless-repair-tucson"
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Ductless Mini Split Repair Tucson AZ | Mini Split AC Repair | Intelligent Design' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: 'https://www.idesignac.com/ductless-repair-tucson' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional HVAC technician repairing ductless mini split air conditioning system in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Ductless Mini Split Repair Tucson AZ | Mini Split AC Repair | Intelligent Design' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional HVAC technician repairing ductless mini split air conditioning system in Tucson' }
        ]}
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative text-white py-16 md:py-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Expert Ductless Mini Split Repair in Tucson AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                  Over 22,000 5-Star Reviews
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  Fast, reliable ductless mini split repairs from Tucson's most trusted HVAC experts. 24/7 emergency service, all brands serviced, same-day repairs available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule Repair Online"
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
                Why Choose Intelligent Design for Mini Split Repair?
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">24/7 Emergency Mini Split Repair</p>
                    <p className="text-sm text-gray-600">Same-day service available | Fast response times | No overtime charges on emergency calls</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">All Major Brands Serviced</p>
                    <p className="text-sm text-gray-600">Mitsubishi, Daikin, LG, Fujitsu, Samsung & more | Factory-trained technicians | OEM parts available</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Expert Mini Split Diagnostics</p>
                    <p className="text-sm text-gray-600">Advanced troubleshooting equipment | Refrigerant leak detection | Circuit board testing | Compressor analysis</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Upfront, Honest Pricing</p>
                    <p className="text-sm text-gray-600">No hidden fees | Written estimates before repairs | Transparent parts & labor costs</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                    <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ five-star reviews | BBB A+ rated | Licensed & insured</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Satisfaction Guaranteed</p>
                    <p className="text-sm text-gray-600">Workmanship warranty on all repairs | Quality parts | If it's not right, we'll make it right</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Introduction Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Ductless Mini Split Repair: Essential for Surviving Tucson's Extreme Heat
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="text-lg mb-6">
                    In Tucson, Arizona, where the sun is more than just a celestial body—it's a relentless force—having a ductless mini split system that's in top shape isn't just a luxury; it's essential for your well-being and comfort. In this unforgiving environment, the role of a fully functional AC system is critical. That's where we, at Intelligent Design, come into the picture.
                  </p>
                  <p className="text-lg mb-6">
                    We're your reliable experts for comprehensive, high-quality repair services specifically designed for ductless mini split systems. Our thorough approach covers every aspect, from electrical components to refrigerant levels, system diagnostics to airflow optimization. Armed with the latest technology and tools, we pinpoint and resolve issues with utmost accuracy.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <SchedulerEmbed
                      triggerText="Book Emergency Repair"
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
                      src="https://www.idesignac.com/wp-content/uploads/2024/12/mini-split-ac-repair.jpg"
                      alt="Professional technician repairing ductless mini split AC system"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
                <p className="text-lg mb-4">
                  Our highly trained technicians are adept at servicing a wide range of ductless mini split models from all major manufacturers. But our services go beyond mere repairs. We strive to optimize your system for maximum performance, energy efficiency, and durability. With a keen understanding of Tucson's unique climatic challenges, we offer strategic, cost-effective, and environmentally responsible solutions tailored to your specific needs.
                </p>
                <p className="text-lg">
                  Choose Intelligent Design for a consistently cool and comfortable living space. We excel not only in immediate repair solutions but also in identifying potential issues that could lead to expensive breakdowns in the future. Through our systematic preventive maintenance programs, we aim to extend the lifespan of your system, offering you true value for your investment.
                </p>
              </div>
            </div>
          </section>

          {/* Common Problems Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Common Ductless Mini Split Problems We Fix
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Refrigerant Leaks & Recharging</h3>
                    <p className="text-lg mb-4">
                      Refrigerant leaks are one of the most common issues with ductless mini splits in Tucson's extreme climate. When your system runs constantly in 110°F heat, refrigerant lines are under tremendous pressure. Our technicians use electronic leak detectors and UV dye to locate even the smallest leaks. We repair the leak properly—not just add refrigerant—ensuring your system operates efficiently and preventing future failures.
                    </p>
                    <p className="text-lg">
                      Low refrigerant doesn't just reduce cooling power; it forces your compressor to work harder, increasing energy bills and potentially causing complete system failure. We verify the exact refrigerant charge using manufacturer specifications and precision gauges, ensuring optimal performance. Many refrigerant issues are covered under manufacturer warranty, and we handle all warranty claims for you.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Electrical Component Failures</h3>
                    <p className="text-lg mb-4">
                      Tucson's frequent monsoon storms and power fluctuations take a toll on ductless mini split electrical systems. We repair and replace failed capacitors, contactors, relays, and circuit boards. Our technicians carry a comprehensive inventory of electrical components for all major brands, allowing same-day repairs in most cases.
                    </p>
                    <p className="text-lg">
                      Electrical problems often manifest as systems that won't turn on, units that short cycle, or indoor units that stop communicating with outdoor condensers. We test voltage, amperage, and resistance at all connection points, identifying failing components before they cause cascade failures. Our repairs include surge protection recommendations to prevent future electrical damage.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Drainage & Water Leak Issues</h3>
                    <p className="text-lg mb-4">
                      Ductless mini splits remove significant humidity from Tucson homes, producing condensate that must drain properly. Clogged drain lines cause water to back up into your home, damaging walls and ceilings. We clear blocked drain lines using specialized tools and compressed air, removing algae growth and mineral deposits that accumulate in Tucson's hard water.
                    </p>
                    <p className="text-lg">
                      Water leaks can also indicate frozen evaporator coils—often caused by dirty filters restricting airflow or low refrigerant levels. Our comprehensive diagnosis identifies the root cause, not just the symptom. We install drain line treatments and recommend maintenance schedules to prevent future clogs, keeping your system draining properly year-round.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Compressor & Fan Motor Repairs</h3>
                    <p className="text-lg mb-4">
                      The compressor is your ductless system's heart, and fan motors are its lungs. When these critical components fail, repair or replacement is urgent. We diagnose compressor issues using amp draw testing, superheat/subcooling measurements, and oil analysis. Many compressor failures are actually caused by other problems—dirty coils, refrigerant issues, or electrical faults—which we address comprehensively.
                    </p>
                    <p className="text-lg">
                      Fan motor failures in indoor or outdoor units cause poor airflow and reduced cooling. We test motor capacitors, bearings, and windings to determine if repair or replacement is needed. Our technicians can replace fan motors on-site, restoring full system functionality the same day in most cases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div className="order-1 md:order-1">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src="https://www.idesignac.com/wp-content/uploads/2024/12/mini-split-ac-repair.jpg"
                      alt="Intelligent Design technician servicing ductless mini split system"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="order-2 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    Why Choose Intelligent Design for Ductless Mini Split Repair
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2">All Brands Serviced</h3>
                      <p className="text-lg">
                        We repair all major ductless mini split brands including Mitsubishi, Daikin, Fujitsu, LG, Samsung, Carrier, and Trane. Our technicians receive ongoing factory training and certification on the latest systems and diagnostic techniques.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">24/7 Emergency Service</h3>
                      <p className="text-lg">
                        AC failures don't wait for business hours, especially in Tucson's brutal summer heat. We offer true 24/7 emergency service with fast response times. Most emergency repairs are completed the same day, restoring your comfort quickly.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Upfront Pricing</h3>
                      <p className="text-lg">
                        No surprises. We diagnose the problem thoroughly and provide written estimates before starting any repair work. Our pricing is competitive and transparent with no hidden fees. You'll know exactly what you're paying and why.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 md:p-12 rounded-lg text-center">
                <p className="text-lg mb-8">
                  Our certified technicians average about 17 years of experience each and have comprehensive knowledge of all ductless mini split systems. We're a BBB A+ rated company with over 22,000 five-star reviews and a 4.97 rating on Google. When you choose Intelligent Design, you're choosing reliability, expertise, and a commitment to your comfort.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Repair Service"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-section2"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-quote-2">Call For A Free Quote</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Repair Process Section */}
          <section className="bg-primary text-white py-16 md:py-20">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Comprehensive Repair Process
              </h2>
              <div className="text-left space-y-6 mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-3">1. Thorough System Diagnosis</h3>
                  <p className="text-lg mb-4">
                    Every repair starts with a comprehensive diagnostic evaluation. Our certified technicians don't just address the obvious symptom—we investigate the entire system to identify root causes. Using advanced diagnostic tools including digital manifold gauges, airflow meters, and thermal imaging cameras, we pinpoint exactly what's wrong with your ductless mini split.
                  </p>
                  <p className="text-lg">
                    We test both indoor and outdoor units, checking electrical connections, refrigerant pressures, airflow rates, drainage systems, and control board functionality. This thorough approach prevents misdiagnosis and ensures we fix the real problem, not just temporary symptoms. You receive a detailed explanation of findings and repair options before any work begins.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">2. Expert Repair Execution</h3>
                  <p className="text-lg mb-4">
                    Once you approve the repair plan, our technicians get to work using industry-best practices and manufacturer specifications. We use only high-quality OEM or equivalent parts, never cheap substitutes that fail prematurely. Our service vehicles stock hundreds of common components, allowing same-day completion for most repairs.
                  </p>
                  <p className="text-lg">
                    For complex repairs requiring specialty parts, we expedite orders and maintain communication about timelines. Every repair is performed to manufacturer standards and local code requirements. We take pride in workmanship that lasts, protecting your investment and ensuring reliable operation.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">3. Performance Testing & Verification</h3>
                  <p className="text-lg mb-4">
                    We don't just fix the problem and leave. After completing repairs, we run comprehensive system tests to verify proper operation. This includes checking refrigerant pressures, measuring airflow and temperature differentials, testing electrical draws, and verifying all safety controls function correctly.
                  </p>
                  <p className="text-lg">
                    We also provide maintenance recommendations to prevent future issues and optimize system performance. You receive documentation of all work performed, parts used, and warranty information. Our goal is complete customer satisfaction and a ductless mini split system that runs flawlessly through Tucson's demanding climate.
                  </p>
                </div>
              </div>
              <p className="text-lg">
                For expert ductless mini split repair from licensed professionals and a 100% satisfaction guarantee, do not delay. Call Intelligent Design Air Conditioning, Plumbing, Solar, & Electric today. You can reach us at <a href="tel:+15203332665" className="text-yellow-400 hover:text-yellow-300 underline font-bold" data-testid="link-call-24-7">(520) 333-2665</a> for ductless mini split repair service in Tucson at any time, 24/7.
              </p>
            </div>
          </section>

          {/* Preventive Maintenance Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12 bg-gray-100 py-6 rounded-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Preventive Maintenance to Avoid Costly Repairs
                </h2>
              </div>

              <div className="text-center max-w-4xl mx-auto mb-12">
                <p className="text-lg mb-6">
                  The best repair is the one you never need. Regular preventive maintenance extends your ductless mini split's lifespan, maintains energy efficiency, and prevents unexpected breakdowns during Tucson's hottest days. Our Family Protection Plan membership includes scheduled maintenance visits, priority service scheduling, and exclusive discounts on repairs.
                </p>
                <p className="text-lg mb-6">
                  During maintenance visits, we clean indoor and outdoor coils, check refrigerant levels, test electrical components, clear drain lines, replace filters, and inspect all connections. This proactive approach identifies minor issues before they become major failures, saving you money and preventing uncomfortable AC outages.
                </p>
                <p className="text-lg mb-8">
                  Members also receive priority emergency service—if your system fails during a summer heatwave, you move to the front of the line. With extended warranty coverage and discounted repair rates, the membership typically pays for itself with just one service call. It's the smart way to protect your comfort and investment.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Join Protection Plan"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-maintenance"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-maintenance">Call For A Free Quote</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Emergency Services Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="https://www.idesignac.com/wp-content/uploads/2024/03/emergency.jpg"
                    alt="Emergency ductless mini split repair service in Tucson"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    Emergency Repair Services Across Greater Tucson
                  </h3>
                  <p className="text-lg mb-6">
                    When your ductless mini split fails during Tucson's scorching summer, you need help fast. We provide true emergency service with rapid response times throughout the greater Tucson area. Our technicians are strategically located to serve communities across Pima County, minimizing travel time and getting your cooling restored quickly.
                  </p>
                  <p className="text-lg mb-8">
                    From the Catalina Foothills to Green Valley, from Oro Valley to Vail, we're the trusted name in emergency ductless mini split repair. Our service vehicles are fully stocked with common parts and diagnostic equipment, allowing us to complete most emergency repairs on the first visit. We understand that AC failures in Arizona aren't just inconvenient—they're potentially dangerous, especially for elderly residents and young children.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <SchedulerEmbed
                      triggerText="Schedule Emergency Repair"
                      variant="default"
                      size="lg"
                      data-testid="button-schedule-emergency"
                    />
                    <Button
                      size="lg"
                      className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                      asChild
                    >
                      <a href="tel:+15203332665" data-testid="button-call-emergency">24/7 Emergency Line</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ServiceFAQ faqs={ductlessMiniSplitRepairFAQs.faqs} />

          {/* Service Area & Contact Information */}
          <section className="bg-white py-16 md:py-20 border-t">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Your Local Ductless Mini Split Repair Experts in Tucson
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has been serving the greater Tucson area since 1979. We're proud to be your trusted local HVAC company.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Contact Us</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Business Name</h4>
                      <p className="text-lg">Intelligent Design Air Conditioning, Plumbing, Solar, & Electric</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Address</h4>
                      <p className="text-lg">1145 E Fort Lowell Rd<br />Tucson, AZ 85719</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Phone</h4>
                      <a 
                        href="tel:+15203332665" 
                        className="text-lg font-bold text-primary hover:text-primary/80 transition-colors"
                        data-testid="link-nap-phone"
                      >
                        (520) 333-2665
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Service Hours</h4>
                      <p className="text-lg font-semibold text-destructive">24/7 Emergency Service Available</p>
                      <p className="text-base text-muted-foreground mt-1">Day or night, we're here when you need us</p>
                    </div>
                  </div>
                </div>

                {/* Service Area */}
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Areas We Serve</h3>
                  <p className="text-lg mb-6">
                    We proudly provide ductless mini split repair, installation, and maintenance services throughout the greater Tucson metropolitan area, including:
                  </p>
                  <ul className="grid grid-cols-2 gap-3 text-lg">
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Tucson
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Oro Valley
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Marana
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Vail
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Sahuarita
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Green Valley
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Catalina
                    </li>
                  </ul>
                  <p className="text-base text-muted-foreground mt-6">
                    Don't see your area listed? Call us at <a href="tel:+15203332665" className="text-primary font-semibold hover:underline">(520) 333-2665</a> to confirm service availability in your neighborhood.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-primary text-white py-16 md:py-20">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Immediate Response, Expert Repairs
              </h3>
              <p className="text-lg mb-6">
                Why wait in discomfort when you can have immediate ductless mini split repair services in Tucson? At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we're always ready to respond to your mini split emergencies. Our technicians are equipped to restore your comfort as soon as possible.
              </p>
              <p className="text-xl font-semibold">
                Reach out to us anytime, day or night, and let us take care of your emergency ductless mini split repair needs. We're here for you, providing quality repairs and peace of mind.
              </p>
            </div>
          </section>
        </main>

        <Footer />
        <MobileFloatingActions />
      </div>
    </>
  );
}
