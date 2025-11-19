import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import GeneracInstallationSchema from '@/components/GeneracInstallationSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { generacInstallationFAQs } from '@/data/faqs/electrical';
import { CommonQuestions } from '@/components/CommonQuestions';
import { generatorCommonQuestions } from '@/data/commonQuestions/electrical';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import generacHero from '@assets/generated_images/GENERAC_generator_installation_fab44966.webp';

export default function GeneracInstallation() {
  const description = 'Professional GENERAC generator installation in Tucson. Whole house backup power, automatic transfer switches, expert sizing & installation. Licensed electricians. Call (520) 333-2665 for free consultation.';
  const imageUrl = `${SITE_URL}${generacHero}`;

  return (
    <>
      <MetaHead
        title="GENERAC Generator Installation Tucson AZ | Whole House Backup Power"
        description={description}
        canonical={`${SITE_URL}/generac-installation-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'GENERAC Generator Installation Tucson AZ | Whole House Backup Power' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/generac-installation-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional GENERAC generator installation at Tucson home' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'GENERAC Generator Installation Tucson AZ | Whole House Backup Power' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional GENERAC generator installation at Tucson home' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <GeneracInstallationSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${generacHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                GENERAC Generator Installation Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Whole House Backup Power | Automatic Transfer Switches | Expert Sizing | Professional Installation | Licensed Electricians
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Free Consultation"
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
              Why Choose Intelligent Design for GENERAC Installation?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Certified GENERAC Installers</p>
                  <p className="text-sm text-gray-600">Factory-trained technicians | Authorized dealer | Proper installation techniques | Warranty protection</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Expert System Sizing</p>
                  <p className="text-sm text-gray-600">Load calculations | Right-sized generators | Avoid over/under sizing | Maximum efficiency</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Turnkey Installation</p>
                  <p className="text-sm text-gray-600">Concrete pad | Gas/electrical connections | Transfer switch | Permitting & inspections</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Licensed & Insured Professionals</p>
                  <p className="text-sm text-gray-600">ROC licensed electricians | Fully insured | 45+ years experience | Code-compliant work</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Warranties</p>
                  <p className="text-sm text-gray-600">GENERAC manufacturer warranty | Labor guarantees | Parts coverage | Long-term protection</p>
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
              Professional GENERAC Generator Installation in Tucson
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Power outages in Tucson can happen anytime—from summer monsoon storms to winter winds and utility maintenance. When the power goes out, a professionally installed GENERAC whole house generator automatically kicks in within seconds, keeping your home comfortable, safe, and fully functional. At Intelligent Design, we're proud to be a certified GENERAC dealer with over 45 years of experience installing backup power systems for Tucson families and businesses.
              </p>
              <p>
                Our factory-trained technicians handle every aspect of your GENERAC generator installation, from the initial consultation and load calculation to concrete pad installation, gas line connections, electrical wiring, automatic transfer switch installation, and final testing. We ensure your generator is properly sized for your home's electrical needs, positioned for optimal performance and aesthetics, and fully compliant with all local codes and regulations.
              </p>
              <p>
                GENERAC is America's #1 selling brand of home backup generators, known for reliability, innovation, and comprehensive warranty coverage. When you choose Intelligent Design for your GENERAC installation, you're not just getting a generator—you're gaining peace of mind knowing your home will have uninterrupted power during outages, protecting your food, medications, HVAC systems, security systems, and overall comfort.
              </p>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our GENERAC Installation Includes:
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Free in-home consultation and assessment</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Detailed load calculations for proper sizing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Reinforced concrete pad installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Natural gas or propane line connections</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Automatic transfer switch installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Complete electrical wiring and connections</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">All necessary permits and inspections</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">System programming and testing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Owner training on operation and maintenance</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Manufacturer and labor warranties</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <SchedulerEmbed
                triggerText="Schedule Free Generator Consultation"
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
              Choosing the Right GENERAC Generator Size
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Proper generator sizing is critical for reliable backup power. An undersized generator won't power all your essential systems, while an oversized generator wastes money on unnecessary capacity and fuel. Our certified technicians perform detailed load calculations to determine exactly what size GENERAC generator your Tucson home needs.
              </p>
              <p>
                We consider your home's square footage, electrical panel capacity, essential circuits (HVAC, refrigeration, well pumps, medical equipment), desired coverage (whole house vs. essential circuits), and future expansion needs. Here's a general guide to GENERAC generator sizing for Tucson homes:
              </p>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">7.5-10kW GENERAC Generators</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Best for:</strong> Small homes (under 1,500 sq ft) or essential circuits only
                </p>
                <p className="text-sm text-gray-600">
                  Powers: Refrigerator, freezer, lights, garage door, sump pump, select outlets. May not support central AC depending on tonnage.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">13-16kW GENERAC Generators</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Best for:</strong> Medium homes (1,500-2,500 sq ft) with partial whole-house coverage
                </p>
                <p className="text-sm text-gray-600">
                  Powers: All essentials plus one 3-4 ton central AC unit, most appliances, lighting throughout home, well pumps.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">18-22kW GENERAC Generators</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Best for:</strong> Large homes (2,500-4,000 sq ft) with whole-house coverage
                </p>
                <p className="text-sm text-gray-600">
                  Powers: Multiple AC units (5+ tons total cooling), all major appliances, pool equipment, workshop tools, EV chargers, entire home without load shedding.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">24-26kW+ GENERAC Generators</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Best for:</strong> Very large homes (4,000+ sq ft) or homes with high electrical demands
                </p>
                <p className="text-sm text-gray-600">
                  Powers: Multiple large AC systems, luxury appliances, guest houses, extensive outdoor lighting/equipment, heated pools/spas, everything simultaneously.
                </p>
              </div>

              <p>
                During your free consultation, we'll review your electrical panel, discuss your priorities, and recommend the optimal GENERAC generator size for your specific needs and budget. We'll also explain fuel consumption, runtime capabilities, and ongoing maintenance requirements for each model.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                variant="default"
                asChild
              >
                <a href="tel:+15203332665" data-testid="button-call-sizing">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Expert Sizing Advice: (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The GENERAC Installation Process
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Installing a whole house GENERAC generator is a multi-step process that requires careful planning, proper execution, and adherence to all safety codes. Here's what you can expect when you choose Intelligent Design for your GENERAC installation:
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 1: Free In-Home Consultation</h3>
                <p className="text-gray-700">
                  We visit your home to assess your electrical needs, evaluate potential generator locations, inspect your electrical panel and gas service, and discuss your backup power goals. We'll recommend the appropriate GENERAC model and provide a detailed written estimate covering all equipment and installation costs.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 2: Permitting & Planning</h3>
                <p className="text-gray-700">
                  We handle all necessary permits with local authorities, coordinate gas line requirements with your utility provider if needed, create detailed installation plans, and schedule your installation at a convenient time.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 3: Site Preparation</h3>
                <p className="text-gray-700">
                  Our crew prepares the installation site by excavating for the concrete pad, ensuring proper drainage and clearances, installing the reinforced concrete foundation, and verifying the generator will have adequate ventilation and access for maintenance.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 4: Generator Installation</h3>
                <p className="text-gray-700">
                  After the concrete cures, we position and secure the GENERAC generator, connect natural gas or propane fuel lines, install the automatic transfer switch in your electrical panel, run all electrical wiring, and make final connections.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 5: System Programming & Testing</h3>
                <p className="text-gray-700">
                  We program the generator controller, test automatic transfer switch operation, simulate power outages to verify seamless switching, check all safety systems, and ensure proper operation under load conditions.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 6: Inspection, Training & Documentation</h3>
                <p className="text-gray-700">
                  We coordinate final inspection with local authorities, provide comprehensive owner training on operation and maintenance, deliver all warranty documentation and manuals, and set up recommended maintenance schedules.
                </p>
              </div>

              <p>
                Typical GENERAC installations take 1-3 days depending on site conditions, permit requirements, and generator size. We work efficiently while maintaining the highest quality standards to ensure your backup power system provides decades of reliable service.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <SchedulerEmbed
                triggerText="Start Your GENERAC Installation"
                variant="default"
                size="lg"
                data-testid="button-schedule-process"
              />
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={generatorCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={generacInstallationFAQs.faqs} />
      </main>

      <Footer />
    </>
  );
}