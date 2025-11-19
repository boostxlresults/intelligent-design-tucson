import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import CircuitBreakersSchema from '@/components/CircuitBreakersSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { circuitBreakersFAQs } from '@/data/faqs/electrical';
import { CommonQuestions } from '@/components/CommonQuestions';
import { panelUpgradeCommonQuestions } from '@/data/commonQuestions/electrical';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import circuitBreakerHero from '@assets/generated_images/Circuit_breaker_repair_replacement_2a43f55d.webp';

export default function CircuitBreakers() {
  const description = 'Professional circuit breaker repair and replacement in Tucson. Tripped breakers, panel upgrades, AFCI/GFCI breakers, safety inspections. Licensed electricians. Call (520) 333-2665 for circuit breaker service.';
  const imageUrl = `${SITE_URL}${circuitBreakerHero}`;

  return (
    <>
      <MetaHead
        title="Circuit Breakers Tucson AZ | Circuit Breaker Repair & Replacement Service"
        description={description}
        canonical={`${SITE_URL}/circuit-breakers-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Circuit Breakers Tucson AZ | Circuit Breaker Repair & Replacement Service' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/circuit-breakers-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional circuit breaker repair and replacement in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Circuit Breakers Tucson AZ | Circuit Breaker Repair & Replacement Service' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional circuit breaker repair and replacement in Tucson' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <CircuitBreakersSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${circuitBreakerHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Circuit Breakers Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Circuit Breaker Repair | Breaker Replacement | AFCI/GFCI Installation | Panel Upgrades | Safety Inspections | Licensed Electricians
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Breaker Service"
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
              Why Choose Intelligent Design for Circuit Breaker Service?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Licensed & Experienced Electricians</p>
                  <p className="text-sm text-gray-600">ROC licensed professionals | 45+ years experience | Expert panel service | Code-compliant work</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Breaker Services</p>
                  <p className="text-sm text-gray-600">Breaker replacement | AFCI/GFCI installation | Panel upgrades | Troubleshooting | Safety inspections</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Safety-First Approach</p>
                  <p className="text-sm text-gray-600">Proper breaker sizing | Arc fault protection | Ground fault protection | Fire prevention</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Quality Components</p>
                  <p className="text-sm text-gray-600">Top-rated breaker brands | UL-listed products | Warranty protection | Long-term reliability</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Upfront Pricing & Warranties</p>
                  <p className="text-sm text-gray-600">Detailed estimates | No hidden fees | Labor warranties | Manufacturer guarantees</p>
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
              Professional Circuit Breaker Service in Tucson
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Circuit breakers are your home's primary electrical safety devices, protecting your wiring and appliances from dangerous overcurrent conditions that can cause fires or equipment damage. When circuit breakers trip frequently, fail to reset, or show signs of wear, prompt professional service is essential for maintaining electrical safety. At Intelligent Design, our licensed electricians provide expert circuit breaker repair, replacement, and upgrade services that protect your Tucson home and ensure reliable electrical performance.
              </p>
              <p>
                Modern electrical codes require advanced circuit breakers including AFCI (Arc Fault Circuit Interrupter) breakers that detect dangerous arcing conditions and prevent electrical fires, and GFCI (Ground Fault Circuit Interrupter) breakers that protect against electrical shock in wet locations like bathrooms, kitchens, and outdoor areas. If your home has an older electrical panel, upgrading to these safety-enhanced breakers significantly reduces fire and shock risks while bringing your electrical system up to current code requirements.
              </p>
              <p>
                Whether you're experiencing frequent breaker trips, need to add circuits for new appliances or home additions, want to upgrade to safer AFCI/GFCI protection, or need breaker replacement for aging or damaged breakers, our experienced electricians diagnose the problem accurately and recommend the right solution. We work with all major breaker panel brands and ensure proper breaker sizing and installation for safe, reliable operation.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <SchedulerEmbed
                triggerText="Get Free Estimate"
                variant="default"
                size="lg"
                data-testid="button-schedule-content1"
              />
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <a href="tel:+15203332665" data-testid="button-call-content1">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (520) 333-2665
                </a>
              </Button>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Circuit Breaker Services Include:
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Circuit breaker replacement</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">AFCI breaker installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">GFCI breaker installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Tandem breaker installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Double-pole breaker service</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Circuit troubleshooting</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Panel capacity assessment</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Circuit additions for new loads</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Electrical safety inspections</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Federal Pacific panel replacement</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <SchedulerEmbed
                triggerText="Schedule Breaker Service"
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
              Signs You Need Circuit Breaker Service
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Watch for these warning signs that indicate you need professional circuit breaker service:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Frequent breaker trips:</strong> If a circuit breaker trips repeatedly, it may be undersized for the load, damaged, or indicating dangerous wiring problems that need professional diagnosis and correction.</li>
                <li><strong>Breaker won't reset:</strong> A breaker that trips and won't reset, or immediately trips again when reset, indicates a serious short circuit or ground fault requiring immediate professional attention.</li>
                <li><strong>Burning smell from panel:</strong> Any burning smell or discoloration around your electrical panel or individual breakers indicates dangerous overheating that can cause fires and requires emergency service.</li>
                <li><strong>Warm or hot breakers:</strong> While breakers may be slightly warm during normal operation, excessive heat indicates overloading or internal breaker failure requiring replacement.</li>
                <li><strong>Physical damage:</strong> Cracked, broken, or corroded breakers compromise safety and should be replaced immediately to prevent fire hazards or electrical shock.</li>
                <li><strong>Buzzing or crackling sounds:</strong> Unusual sounds from breakers indicate loose connections, arcing, or internal damage that present serious fire and safety hazards.</li>
                <li><strong>Old age:</strong> Breakers in homes 30+ years old may be worn out or may not meet current safety standards, and should be professionally evaluated for replacement.</li>
                <li><strong>Federal Pacific or Zinsco panels:</strong> These older panel brands are known for safety problems and should be completely replaced rather than repaired.</li>
                <li><strong>Need for additional circuits:</strong> When adding major appliances, home additions, or EV chargers, you may need new circuits requiring breaker additions or panel upgrades.</li>
                <li><strong>Insurance requirements:</strong> Some insurance companies require updated electrical panels with modern AFCI/GFCI protection for policy coverage or rate reductions.</li>
              </ul>
              <p>
                If you're experiencing any of these issues, contact Intelligent Design for professional circuit breaker evaluation and service to protect your home and family from electrical hazards.
              </p>

              <div className="mt-6 flex justify-center">
                <Button
                  size="lg"
                  variant="destructive"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-signs">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Emergency Service: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Emergency Breaker Service Available
              </h3>
              <p className="text-gray-700 mb-4">
                Electrical panel and breaker problems can be serious safety hazards. If you're experiencing frequent trips, burning smells, or breakers that won't reset, don't wait. We offer same-day service for urgent electrical issues. Call us now for immediate assistance.
              </p>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
                asChild
              >
                <a href="tel:+15203332665" data-testid="button-call-emergency">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Emergency Service: (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Circuit Breaker Service Process
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Our professional circuit breaker service process ensures safe, reliable results:
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 1: Problem Assessment & Diagnosis</h3>
                <p className="text-gray-700">
                  We begin by discussing your electrical issues including which breakers are tripping, how frequently trips occur, what appliances or circuits are affected, and whether you've noticed any burning smells, sounds, or visual problems. We inspect your electrical panel to assess breaker condition, check for signs of overheating or damage, verify proper breaker sizing for each circuit, and test for loose connections or panel problems. This thorough diagnosis identifies whether the issue is a faulty breaker, overloaded circuit, wiring problem, or larger panel issue.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 2: Solution Recommendations</h3>
                <p className="text-gray-700">
                  Based on our assessment, we recommend the appropriate solution which may include replacing individual damaged or worn breakers, upgrading to AFCI or GFCI breakers for enhanced safety, adding new circuits to handle increased electrical loads, redistributing circuits to balance panel load, or complete panel replacement if the panel is outdated, damaged, or lacks capacity for your needs. We explain our findings clearly, answer all your questions, and provide detailed estimates before proceeding with any work.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 3: Safe Power Shutdown</h3>
                <p className="text-gray-700">
                  Before working on your electrical panel, we safely shut down power to the affected circuits or the entire panel using proper lockout/tagout procedures. We verify power is off using non-contact voltage testers and multimeters before touching any components. For breaker replacement, we typically need to shut down the main breaker, meaning temporary loss of power to your entire home. We coordinate timing with you to minimize inconvenience and ensure refrigerators, computers, and other sensitive devices are protected.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 4: Breaker Removal & Installation</h3>
                <p className="text-gray-700">
                  We carefully disconnect wiring from the old breaker, documenting wire positions for proper reconnection. We remove the failed breaker and inspect the panel bus bars and connections for damage or corrosion. New breakers are selected to match panel specifications and circuit requirements, ensuring proper amperage rating, compatible with panel brand and bus bar design, and meeting current electrical code requirements including AFCI/GFCI where needed. We install the new breaker, securely connect all wiring, and ensure proper seating on the bus bar.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 5: Testing & Verification</h3>
                <p className="text-gray-700">
                  After installation, we restore power and thoroughly test the new breaker and circuit to verify proper operation of all outlets and fixtures on the circuit, correct breaker response to test buttons (for AFCI/GFCI), appropriate load handling without nuisance tripping, and secure connections with no overheating. We test AFCI breakers using arc fault simulators and GFCI breakers using ground fault test buttons to ensure they provide proper protection. We also verify panel grounding and bonding are correct.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 6: Documentation & Education</h3>
                <p className="text-gray-700">
                  We clearly label all breakers in your panel for easy identification, update panel directory to reflect circuit assignments, provide documentation of work performed and parts installed, and explain proper operation of new AFCI/GFCI breakers if installed. We educate you on what causes breaker trips, when to be concerned about trips, how to safely reset breakers, and when to call for professional service. We also provide maintenance recommendations for your electrical system.
                </p>
              </div>

              <p>
                Most circuit breaker replacements are completed in 1-3 hours. More complex work involving multiple breakers or circuit additions may take longer. We work efficiently while maintaining the highest safety standards and ensuring quality results.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <SchedulerEmbed
                triggerText="Get Free Service Estimate"
                variant="default"
                size="lg"
                data-testid="button-schedule-process"
              />
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <a href="tel:+15203332665" data-testid="button-call-process">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={panelUpgradeCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={circuitBreakersFAQs.faqs} />

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Fix Your Circuit Breaker Problems?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our licensed electricians are ready to diagnose and repair your circuit breaker issues quickly and safely. Don't wait if you're experiencing frequent trips, panel problems, or safety concerns. Call us today or schedule online for prompt, professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SchedulerEmbed
                triggerText="Schedule Service Now"
                variant="default"
                size="lg"
                data-testid="button-schedule-footer"
              />
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <a href="tel:+15203332665" data-testid="button-call-footer">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
