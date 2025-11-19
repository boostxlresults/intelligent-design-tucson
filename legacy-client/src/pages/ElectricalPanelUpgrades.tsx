import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import ElectricalPanelUpgradesSchema from '@/components/ElectricalPanelUpgradesSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { electricalPanelUpgradesFAQs } from '@/data/faqs/electrical';
import { CommonQuestions } from '@/components/CommonQuestions';
import { panelUpgradeCommonQuestions } from '@/data/commonQuestions/electrical';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import panelUpgradeHero from '@assets/generated_images/Electrical_panel_upgrade_installation_9ec32c5d.webp';

export default function ElectricalPanelUpgrades() {
  const description = 'Professional electrical panel upgrades in Tucson. Main panel replacement, 200 amp upgrades, circuit additions, safety inspections. Licensed electricians. Call (520) 333-2665 for panel upgrade consultation.';
  const imageUrl = `${SITE_URL}${panelUpgradeHero}`;

  return (
    <>
      <MetaHead
        title="Electrical Panel Upgrades Tucson AZ | Main Panel Replacement & Service"
        description={description}
        canonical={`${SITE_URL}/electrical-panel-upgrades-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Electrical Panel Upgrades Tucson AZ | Main Panel Replacement & Service' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/electrical-panel-upgrades-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional electrical panel upgrade installation in Tucson home' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Electrical Panel Upgrades Tucson AZ | Main Panel Replacement & Service' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional electrical panel upgrade installation in Tucson home' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <ElectricalPanelUpgradesSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${panelUpgradeHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Electrical Panel Upgrades Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                200 Amp Panel Upgrades | Main Panel Replacement | Circuit Additions | Safety Inspections | Licensed Electricians | Code Compliant
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Panel Upgrade"
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
              Why Choose Intelligent Design for Panel Upgrades?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Licensed & Experienced Electricians</p>
                  <p className="text-sm text-gray-600">ROC licensed professionals | 45+ years experience | Expert panel installations | Code-compliant work</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Panel Upgrade Services</p>
                  <p className="text-sm text-gray-600">100A to 200A upgrades | Main panel replacement | Subpanel installation | Circuit additions</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Permitting & Inspections Handled</p>
                  <p className="text-sm text-gray-600">All permits obtained | Coordination with utility company | Final inspections | Utility reconnection</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Modern Safety Features</p>
                  <p className="text-sm text-gray-600">AFCI/GFCI protection | Surge protection | Proper grounding | Arc fault protection</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Upfront Pricing & Warranties</p>
                  <p className="text-sm text-gray-600">Detailed written estimates | No hidden fees | Labor warranties | Manufacturer guarantees</p>
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
              Professional Electrical Panel Upgrades in Tucson
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Your home's electrical panel is the heart of your electrical system, distributing power safely to every circuit throughout your home. As modern homes use more electricity than ever—with air conditioning, electric vehicles, home offices, smart home devices, and energy-intensive appliances—older electrical panels often struggle to meet these demands. At Intelligent Design, we specialize in professional electrical panel upgrades that provide the capacity, safety features, and reliability today's Tucson homes require.
              </p>
              <p>
                Many Tucson homes built before the 1990s have outdated 100-amp or even 60-amp electrical panels that simply can't support modern electrical loads. These older panels lack important safety features like arc fault and ground fault protection, may contain obsolete components like fuses or problematic brands like Federal Pacific, and frequently experience circuit overloads that trip breakers or create fire hazards. Our licensed electricians can assess your current panel and recommend the right upgrade to meet your home's power needs.
              </p>
              <p>
                A professional panel upgrade from Intelligent Design includes complete removal of your old panel, installation of a new code-compliant panel with adequate capacity, proper circuit labeling and organization, integration of modern safety features, coordination with TEP for service upgrades when needed, and all necessary permits and inspections. We handle the entire process from start to finish, ensuring minimal disruption to your daily routine while dramatically improving your home's electrical safety and capacity.
              </p>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Panel Upgrade Services Include:
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">100A to 200A panel upgrades</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Main panel replacement and relocation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Subpanel installation and upgrades</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Circuit additions for new appliances</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">AFCI and GFCI breaker installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Whole-house surge protection</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Panel grounding and bonding upgrades</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Federal Pacific panel replacements</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">EV charger panel preparations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Generator ready panel installations</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <SchedulerEmbed
                triggerText="Get Free Panel Assessment"
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
              Signs You Need an Electrical Panel Upgrade
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Knowing when to upgrade your electrical panel can prevent safety hazards, property damage, and the inconvenience of inadequate power. Watch for these warning signs that indicate your Tucson home needs a panel upgrade:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Frequently tripping circuit breakers:</strong> If breakers trip regularly when running normal appliances or multiple devices, your panel lacks adequate capacity for your home's electrical demands.</li>
                <li><strong>Flickering or dimming lights:</strong> Lights that dim when appliances start or flicker frequently indicate voltage drops caused by an overloaded or undersized panel.</li>
                <li><strong>Buzzing sounds from the panel:</strong> Buzzing, crackling, or humming sounds from your electrical panel suggest loose connections, failing breakers, or other dangerous conditions.</li>
                <li><strong>Burning smell near panel:</strong> Any burning smell near your electrical panel requires immediate professional attention as it indicates overheating and fire risk.</li>
                <li><strong>Discolored or warm panel:</strong> Discoloration, scorch marks, or heat coming from the panel or breakers indicates dangerous overheating conditions.</li>
                <li><strong>Rusty or corroded panel:</strong> Corrosion inside the panel from moisture exposure creates dangerous electrical hazards and indicates the need for replacement.</li>
                <li><strong>Outdated 60 or 100 amp service:</strong> Most modern homes require at least 200 amp service to safely power air conditioning, appliances, and electronics.</li>
                <li><strong>Fuses instead of breakers:</strong> Homes still using fuse boxes should upgrade to modern circuit breaker panels with enhanced safety features.</li>
                <li><strong>Federal Pacific or Zinsco panels:</strong> These problematic panel brands have known safety issues and should be replaced immediately.</li>
                <li><strong>Renovations or additions:</strong> Home expansions, kitchen remodels, EV charger installation, or pool additions typically require panel capacity upgrades.</li>
                <li><strong>Unable to add new circuits:</strong> If your panel has no available spaces for additional circuits, you need a larger panel or subpanel installation.</li>
                <li><strong>Insurance company requirements:</strong> Some insurers require panel upgrades for older homes or as a condition of coverage renewal.</li>
              </ul>
              <p>
                If you've noticed any of these warning signs, contact Intelligent Design for a professional electrical panel inspection. Our licensed electricians will assess your panel's condition, capacity, and safety, then recommend the most appropriate upgrade for your home and budget.
              </p>
            </div>

            <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">
                Panel Safety Concern? Get Immediate Inspection!
              </h3>
              <p className="text-gray-700 mb-4">
                If your electrical panel shows signs of overheating, burning smells, or frequent breaker trips, don't delay. Call us now for an emergency electrical panel inspection and safety assessment.
              </p>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
                asChild
              >
                <a href="tel:+15203332665" data-testid="button-call-emergency">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Service: (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Panel Upgrade Process
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Upgrading an electrical panel is a complex process that requires expertise, proper permitting, and coordination with your utility company. When you choose Intelligent Design for your panel upgrade, we handle every detail from start to finish:
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 1: Inspection & Assessment</h3>
                <p className="text-gray-700">
                  Our licensed electrician visits your home to inspect your current panel, assess your electrical needs, review your home's wiring condition, and discuss your plans for future electrical loads. We'll calculate the required panel capacity and recommend the optimal upgrade solution.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 2: Detailed Estimate & Planning</h3>
                <p className="text-gray-700">
                  We provide a comprehensive written estimate detailing all work to be performed, equipment to be installed, total costs including permits and inspections, and expected timeline. We'll explain the entire process so you know exactly what to expect.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 3: Permits & Utility Coordination</h3>
                <p className="text-gray-700">
                  We obtain all required electrical permits from local building departments and coordinate with Tucson Electric Power (TEP) to schedule service disconnection and reconnection. If a service upgrade is needed, we work with TEP to install the new meter base and service entrance.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 4: Panel Installation</h3>
                <p className="text-gray-700">
                  On installation day, TEP disconnects power at your meter. Our electricians remove your old panel, install the new panel with proper mounting and grounding, transfer all circuits to the new panel with improved organization, install required AFCI/GFCI protection, and add whole-house surge protection if desired.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 5: Testing & Inspection</h3>
                <p className="text-gray-700">
                  We thoroughly test all circuits for proper voltage, grounding, and operation before calling for city/county electrical inspection. After passing inspection, we coordinate with TEP for final meter reconnection and power restoration.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 6: Final Walkthrough & Documentation</h3>
                <p className="text-gray-700">
                  We review the completed installation with you, explain the new panel layout and circuit labeling, provide operation instructions and safety guidelines, deliver all permits, inspection certificates, and warranty documentation.
                </p>
              </div>

              <p>
                Most panel upgrade installations are completed in 1-2 days, though more complex upgrades involving service entrance replacement may take longer. Your power is only off during the actual installation work, typically 4-8 hours.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <SchedulerEmbed
                triggerText="Schedule Panel Upgrade Consultation"
                variant="default"
                size="lg"
                data-testid="button-schedule-process"
              />
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={panelUpgradeCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={electricalPanelUpgradesFAQs.faqs} />

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 border border-blue-200">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Upgrade Your Electrical Panel?
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Contact Intelligent Design today for a free panel assessment and upgrade consultation. Our licensed electricians will evaluate your current panel, discuss your electrical needs, and recommend the best upgrade solution for your Tucson home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Free Assessment"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-cta"
                  />
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-cta">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Serving Tucson & Surrounding Areas</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Tucson</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Oro Valley</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Marana</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Green Valley</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Sahuarita</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Vail</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Catalina Foothills</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Flowing Wells</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-start gap-2">
                    <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-yellow-400" />
                    <span>
                      <strong className="text-white">Phone:</strong><br />
                      <a href="tel:+15203332665" className="hover:text-yellow-400 transition-colors">(520) 333-2665</a>
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-yellow-400" />
                    <span>
                      <strong className="text-white">Address:</strong><br />
                      1145 E Fort Lowell Rd<br />
                      Tucson, AZ 85719
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-yellow-400" />
                    <span>
                      <strong className="text-white">Hours:</strong><br />
                      24/7 Emergency Service Available<br />
                      Monday-Friday: 7:00 AM - 6:00 PM<br />
                      Saturday-Sunday: 8:00 AM - 4:00 PM
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-yellow-400" />
                    <span>
                      <strong className="text-white">License:</strong><br />
                      ROC Licensed & Insured
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Intelligent Design Air Conditioning, Plumbing, Solar, & Electric. All rights reserved. | Family & Veteran Owned | Serving Tucson Since 1979
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}