import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import GeneracRepairSchema from '@/components/GeneracRepairSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { generacRepairFAQs } from '@/data/faqs/electrical';
import { CommonQuestions } from '@/components/CommonQuestions';
import { generatorCommonQuestions } from '@/data/commonQuestions/electrical';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import generacRepairHero from '@assets/generated_images/GENERAC_generator_repair_maintenance_1bbc6e14.webp';

export default function GeneracRepair() {
  const description = 'Professional GENERAC generator repair & maintenance in Tucson. Factory-trained technicians, all models serviced, preventive maintenance, emergency repairs. Call (520) 333-2665 for expert GENERAC service.';
  const imageUrl = `${SITE_URL}${generacRepairHero}`;

  return (
    <>
      <MetaHead
        title="GENERAC Generator Repair Tucson AZ | Expert Maintenance & Service"
        description={description}
        canonical={`${SITE_URL}/generac-repair-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'GENERAC Generator Repair Tucson AZ | Expert Maintenance & Service' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/generac-repair-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional technician performing GENERAC generator repair and maintenance' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'GENERAC Generator Repair Tucson AZ | Expert Maintenance & Service' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional technician performing GENERAC generator repair and maintenance' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <GeneracRepairSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${generacRepairHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                GENERAC Generator Repair Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Expert Repairs | Preventive Maintenance | All Models Serviced | Factory-Trained Technicians | Same-Day Service Available
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Generator Service"
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

        <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              Why Choose Intelligent Design for GENERAC Repair?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Factory-Trained Technicians</p>
                  <p className="text-sm text-gray-600">GENERAC certified specialists | Advanced diagnostics | Proper repair procedures | Up-to-date training</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">All GENERAC Models Serviced</p>
                  <p className="text-sm text-gray-600">Air-cooled generators | Liquid-cooled systems | All kW ratings | Portable & standby units</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Genuine GENERAC Parts</p>
                  <p className="text-sm text-gray-600">OEM parts only | Factory-backed warranties | Proper fit & function | Long-lasting reliability</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Maintenance Plans</p>
                  <p className="text-sm text-gray-600">Annual service agreements | Preventive maintenance | Priority scheduling | Extended equipment life</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Fast Emergency Service</p>
                  <p className="text-sm text-gray-600">Same-day service available | Quick diagnostics | Fully-stocked service vehicles | Minimize downtime</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Trusted Tucson Company</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | BBB A+ rated | Serving Tucson since 1979</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Expert GENERAC Generator Repair & Maintenance in Tucson
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Your GENERAC generator is a critical investment in your home's backup power security. When it fails to start during an outage or shows signs of trouble, you need fast, expert repair from technicians who specialize in GENERAC systems. At Intelligent Design, we're factory-trained and certified to diagnose and repair all GENERAC generator models, from compact 7.5kW air-cooled units to powerful 60kW+ liquid-cooled commercial systems.
              </p>
              <p>
                Our GENERAC-certified technicians have the specialized knowledge, diagnostic equipment, and genuine OEM parts needed to quickly identify problems and restore your generator to peak operating condition. We understand the urgency of generator repairs—your backup power system must be ready when you need it most. That's why we offer same-day service for emergency repairs and maintain extensive inventories of common GENERAC parts to complete most repairs on the first visit.
              </p>
              <p>
                Beyond repairs, we also provide comprehensive preventive maintenance services designed to keep your GENERAC generator running reliably for decades. Regular maintenance prevents costly breakdowns, extends equipment life, maintains warranty coverage, and ensures your generator will start when the power goes out. Our maintenance plans are customized to your generator model and usage patterns, providing the exact service your GENERAC needs, exactly when it needs it.
              </p>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Common GENERAC Repairs We Handle:
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Won't start or fails to transfer power</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Error codes and warning indicators</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Battery replacement and charging issues</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Transfer switch problems</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Oil leaks and fluid system repairs</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Control board and sensor failures</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Fuel system cleaning and repairs</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Overheating and cooling system issues</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Voltage regulation problems</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Complete engine and alternator repairs</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <SchedulerEmbed
                triggerText="Schedule Generator Repair"
                variant="default"
                size="lg"
                data-testid="button-schedule-services"
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Signs Your GENERAC Generator Needs Repair
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                GENERAC generators are engineered for reliability, but like all mechanical equipment, they require maintenance and occasionally need repairs. Recognizing warning signs early allows you to address problems before they leave you without backup power during an outage. Call us immediately if you notice any of these symptoms:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Generator won't start during weekly test:</strong> Failed weekly self-tests indicate battery, fuel system, control board, or starter problems requiring immediate attention.</li>
                <li><strong>Error codes or warning lights:</strong> The GENERAC controller displays specific error codes indicating various issues from low battery to sensor failures.</li>
                <li><strong>Unusual noises during operation:</strong> Knocking, grinding, or excessive vibration suggest engine problems, loose components, or failing bearings.</li>
                <li><strong>Fuel or oil leaks:</strong> Visible leaks beneath the generator indicate failed gaskets, loose connections, or damaged fuel lines requiring repair.</li>
                <li><strong>Excessive smoke or exhaust:</strong> Blue smoke (burning oil), black smoke (rich fuel mixture), or white smoke (coolant leak) all indicate engine problems.</li>
                <li><strong>Failure to transfer power:</strong> If the generator starts but power doesn't transfer to your home, the automatic transfer switch may have failed.</li>
                <li><strong>Inconsistent power output:</strong> Flickering lights or voltage fluctuations during generator operation suggest voltage regulation or alternator problems.</li>
                <li><strong>Generator shuts down unexpectedly:</strong> Automatic shutdowns indicate overheating, low oil pressure, or safety system activation requiring diagnosis.</li>
                <li><strong>Battery not charging:</strong> Dead batteries or charging system failures will prevent automatic starting during power outages.</li>
                <li><strong>Long cranking before starting:</strong> Extended cranking times indicate weak batteries, fuel delivery problems, or ignition system issues.</li>
              </ul>
              <p>
                Don't wait until the next power outage to discover your generator isn't working. If you've noticed any warning signs or your GENERAC hasn't been professionally serviced in the past year, schedule a diagnostic check with our certified technicians.
              </p>
            </div>

            <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">
                Generator Won't Start? Get Emergency Service!
              </h3>
              <p className="text-gray-700 mb-4">
                If your GENERAC generator failed to start during a power outage or isn't completing weekly test cycles, call us immediately for same-day diagnostic and repair service.
              </p>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
                asChild
              >
                <a href="tel:+15203332665" data-testid="button-call-emergency">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Repair: (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Preventive Maintenance for Your GENERAC Generator
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Regular preventive maintenance is the key to ensuring your GENERAC generator starts reliably every time the power goes out. GENERAC recommends annual professional service for residential generators, with more frequent service for units that run extended hours or operate in harsh conditions. Our comprehensive maintenance service includes:
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Annual GENERAC Maintenance Includes:</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Oil and Filter Change:</strong> Fresh oil and genuine GENERAC filters protect engine components and ensure proper lubrication under all operating conditions.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Air Filter Inspection/Replacement:</strong> Clean air filters prevent engine damage and maintain fuel efficiency. We clean reusable filters or replace disposable ones.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Spark Plug Inspection/Replacement:</strong> Fresh spark plugs ensure reliable starting and smooth engine operation. We check gap settings and replace as needed.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Battery Testing and Service:</strong> We load-test batteries, clean terminals, check charging voltage, and replace batteries showing signs of weakness.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Complete System Testing:</strong> Full exercise under load, transfer switch operation verification, voltage output testing, and fuel system checks.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Visual Inspection:</strong> Check for leaks, loose connections, belt wear, corrosion, proper clearances, and any signs of damage or wear.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Coolant System Service:</strong> (Liquid-cooled models) Check coolant levels, test antifreeze concentration, inspect hoses, and top off as needed.</span>
                  </div>
                </div>
              </div>

              <p>
                We also provide detailed service reports documenting all work performed, parts replaced, test results, and recommendations for future maintenance. These reports are valuable for warranty claims and provide a complete maintenance history that can increase your home's resale value.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Save with Annual Maintenance Plans
                </h3>
                <p className="text-gray-700 mb-3">
                  Our annual maintenance agreements provide scheduled service, priority scheduling, exclusive discounts on repairs, and complete peace of mind. Plans start at just $249/year for residential generators.
                </p>
                <SchedulerEmbed
                  triggerText="Enroll in Maintenance Plan"
                  variant="default"
                  data-testid="button-schedule-maintenance"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={generatorCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={generacRepairFAQs.faqs} />
      </main>

      <Footer />
    </>
  );
}