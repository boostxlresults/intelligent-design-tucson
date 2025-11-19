import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import OutletsSwitchesSchema from '@/components/OutletsSwitchesSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { outletsSwitchesFAQs } from '@/data/faqs/electrical';
import { CommonQuestions } from '@/components/CommonQuestions';
import { outletSwitchCommonQuestions } from '@/data/commonQuestions/electrical';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import outletsHero from '@assets/generated_images/Outlet_switch_installation_upgrade_4037e370.webp';

export default function OutletsSwitches() {
  const description = 'Professional outlet and switch installation in Tucson. New outlets, GFCI/USB outlets, dimmer switches, smart switches, repairs & upgrades. Licensed electricians. Call (520) 333-2665 for outlet and switch service.';
  const imageUrl = `${SITE_URL}${outletsHero}`;

  return (
    <>
      <MetaHead
        title="Outlets & Switches Tucson AZ | Professional Installation & Replacement"
        description={description}
        canonical={`${SITE_URL}/outlets-switches-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Outlets & Switches Tucson AZ | Professional Installation & Replacement' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/outlets-switches-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional outlet and switch installation and upgrade in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Outlets & Switches Tucson AZ | Professional Installation & Replacement' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional outlet and switch installation and upgrade in Tucson' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <OutletsSwitchesSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${outletsHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Outlets & Switches Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                New Outlet Installation | GFCI/USB Outlets | Dimmer Switches | Smart Switches | Repairs & Upgrades | Licensed Electricians
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Installation"
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
              Why Choose Intelligent Design for Outlets & Switches?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Licensed & Experienced Electricians</p>
                  <p className="text-sm text-gray-600">ROC licensed professionals | 45+ years experience | Expert installations | Code-compliant work</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Outlet & Switch Services</p>
                  <p className="text-sm text-gray-600">New installations | Replacements | Upgrades | GFCI outlets | Smart switches | USB outlets</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Modern Smart & USB Options</p>
                  <p className="text-sm text-gray-600">Smart switches | USB charging outlets | Dimmer switches | Motion sensors | Timer switches</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Safety-First Installations</p>
                  <p className="text-sm text-gray-600">GFCI protection | Proper grounding | Tamper-resistant outlets | Weather-resistant outdoor units</p>
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
              Professional Outlet & Switch Installation in Tucson
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Electrical outlets and switches are the most-used components in your home's electrical system, and they play critical roles in safety, convenience, and functionality. Whether you need to add outlets for new appliances and electronics, upgrade to modern USB charging outlets, install GFCI protection in wet locations, replace worn or damaged outlets and switches, or add smart switches for home automation, Intelligent Design provides expert installation services that combine safety, reliability, and modern convenience.
              </p>
              <p>
                Modern outlet and switch technology has evolved significantly beyond basic on/off switches and two-prong outlets. Today's options include USB charging outlets that eliminate bulky adapters, GFCI outlets that protect against shock in bathrooms and kitchens, tamper-resistant outlets required by code for child safety, smart switches controllable via smartphone or voice commands, dimmer switches for adjustable lighting, motion sensor switches for hands-free operation, and weather-resistant outlets for outdoor use. Our experienced electricians help you select and install the right products for each application in your home.
              </p>
              <p>
                Proper outlet and switch installation is more complex than it appears, requiring correct wire connections, proper grounding for safety, appropriate box sizing and mounting, and code-compliant spacing and placement. DIY installation errors can cause electrical shocks, fires, or equipment damage. Our licensed electricians ensure every installation meets all electrical codes and safety standards while providing reliable, long-term performance.
              </p>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Outlet & Switch Services Include:
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">New outlet installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">GFCI outlet installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">USB charging outlet installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Dimmer switch installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Smart switch installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">3-way & 4-way switch installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Outlet/switch replacement</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Outdoor outlet installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">220V outlet installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Outlet/switch troubleshooting</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <SchedulerEmbed
                triggerText="Schedule Installation"
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
              Benefits of Professional Outlet & Switch Installation
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Professional outlet and switch installation provides important advantages for Tucson homeowners:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Enhanced safety:</strong> Licensed electricians ensure proper wiring, grounding, and code compliance, preventing electrical shocks, fires, and damage to expensive electronics and appliances.</li>
                <li><strong>GFCI protection:</strong> Required in bathrooms, kitchens, garages, and outdoor areas, GFCI outlets detect ground faults and shut off power in milliseconds, preventing potentially fatal electrical shocks.</li>
                <li><strong>Modern convenience:</strong> USB charging outlets eliminate bulky adapters, smart switches enable voice and app control, and dimmer switches provide adjustable lighting for any activity or mood.</li>
                <li><strong>Increased home value:</strong> Adequate outlets in convenient locations, modern switch styles, and smart home features are valued by homebuyers and enhance your property's appeal.</li>
                <li><strong>Proper outlet spacing:</strong> Electrical codes require outlets every 12 feet along walls to prevent overuse of extension cords, which are a leading cause of residential fires.</li>
                <li><strong>Tamper-resistant safety:</strong> Modern outlets include spring-loaded shutters that prevent children from inserting objects, required by code in all new construction and recommended for families with young children.</li>
                <li><strong>Weatherproof outdoor outlets:</strong> Properly installed outdoor outlets with weather-resistant covers and GFCI protection provide safe, reliable power for landscaping, holiday lights, and outdoor entertaining.</li>
                <li><strong>Reduced extension cord use:</strong> Strategic outlet placement eliminates the need for extension cords that present tripping hazards and fire risks when overloaded or damaged.</li>
                <li><strong>Smart home integration:</strong> Smart switches and outlets integrate with home automation for voice control, smartphone operation, scheduling, and integration with other smart devices.</li>
                <li><strong>Insurance compliance:</strong> Professional, code-compliant electrical work maintains your homeowner's insurance coverage and may qualify you for safety discounts.</li>
              </ul>
              <p>
                For Tucson homeowners seeking to enhance safety, convenience, and home value, professional outlet and switch installation delivers immediate benefits and long-term peace of mind.
              </p>
            </div>

            <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Upgrade to Modern, Safe Outlets & Switches
              </h3>
              <p className="text-gray-700 mb-4">
                Upgrading outdated two-prong outlets to modern grounded outlets with GFCI protection where needed costs just $75-$150 per outlet but significantly improves electrical safety and protects valuable electronics. USB outlets ($100-$175) eliminate adapter clutter and provide fast charging for phones and tablets.
              </p>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                asChild
              >
                <a href="tel:+15203332665" data-testid="button-call-savings">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Outlet Upgrades: (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Outlet & Switch Installation Process
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Our professional outlet and switch installation process ensures safe, reliable, code-compliant results:
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 1: Needs Assessment & Planning</h3>
                <p className="text-gray-700">
                  We discuss your electrical needs including where you need additional outlets, which outlets need GFCI protection, whether you want USB charging capability, if you're interested in smart switches or dimmers, and any problems with existing outlets or switches. We evaluate your current electrical system to identify areas lacking adequate outlets, outdated two-prong ungrounded outlets requiring upgrade, missing GFCI protection in required locations, and opportunities for convenience improvements. We provide recommendations and detailed estimates for all proposed work.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 2: Product Selection</h3>
                <p className="text-gray-700">
                  We help you select appropriate outlets and switches for each location including standard grounded outlets for general use, GFCI outlets for wet locations and outdoor areas, USB charging outlets for bedrooms, kitchens, and home offices, tamper-resistant outlets for child safety, dimmer switches for flexible lighting control, smart switches for home automation, and specialty switches like timer, motion sensor, or illuminated models. We ensure all products are compatible with your existing wiring and electrical boxes while meeting current code requirements.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 3: Power Shutdown & Safety</h3>
                <p className="text-gray-700">
                  Before beginning work, we safely shut off power to the affected circuits at your electrical panel and verify power is off using non-contact voltage testers before touching any wiring. We use lockout/tagout procedures to prevent accidental re-energization during work. For new outlet installations requiring wiring from existing circuits or the panel, we plan power shutdowns to minimize disruption to your daily activities and protect sensitive electronics like computers and home entertainment systems.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 4: Installation or Replacement</h3>
                <p className="text-gray-700">
                  For outlet/switch replacement, we remove old devices, inspect wiring and electrical boxes for damage or code violations, install new outlets or switches with proper wire connections and secure grounding, and ensure devices fit properly in boxes with no crowding or wire strain. For new installations, we cut precise openings, install electrical boxes securely attached to studs, run wiring from existing circuits or electrical panel following code requirements, and install outlets with proper connections and testing. All work is completed to current electrical code standards.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 5: GFCI & Smart Device Setup</h3>
                <p className="text-gray-700">
                  GFCI outlets are tested using the built-in test button to verify they trip and reset properly, protecting downstream outlets if installed at circuit beginning. Smart switches and outlets are configured including WiFi network connection, integration with smart home systems like Alexa or Google Home, app installation and account setup, and programming of any desired schedules or automation rules. We verify all smart features function correctly and provide instruction on operation.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 6: Testing, Cleanup & Education</h3>
                <p className="text-gray-700">
                  After installation, we restore power and thoroughly test every outlet and switch to verify proper operation, correct polarity, secure grounding connections, GFCI test and reset function, and appropriate voltage levels. We install cover plates matching your home's decor, clean up all work areas removing any debris or drywall dust, and patch and touch up any wall damage from new installations. We explain proper use of GFCI outlets, operation of dimmer and smart switches, and when to contact us for service or concerns.
                </p>
              </div>

              <p>
                Most outlet and switch installations are completed in 1-4 hours depending on the number of devices and whether new wiring is required. Whole-home outlet upgrades may take a full day or more. We work efficiently while maintaining the highest quality and safety standards.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <SchedulerEmbed
                triggerText="Get Free Installation Estimate"
                variant="default"
                size="lg"
                data-testid="button-schedule-process"
              />
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={outletSwitchCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={outletsSwitchesFAQs.faqs} />

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Upgrade Your Outlets & Switches?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our licensed electricians are ready to install modern, safe outlets and switches that enhance your home's convenience, safety, and functionality. Call us today or schedule online for a free consultation and estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SchedulerEmbed
                triggerText="Schedule Free Consultation"
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
