import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import CeilingFanInstallationSchema from '@/components/CeilingFanInstallationSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { ceilingFanInstallationFAQs } from '@/data/faqs/electrical';
import { CommonQuestions } from '@/components/CommonQuestions';
import { ceilingFanCommonQuestions } from '@/data/commonQuestions/electrical';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import ceilingFanHero from '@assets/generated_images/Ceiling_fan_installation_service_45fdef2d.webp';

export default function CeilingFanInstallation() {
  const description = 'Expert ceiling fan installation in Tucson. New fan installation, replacement, wiring, balance adjustments. Licensed electricians. Call (520) 333-2665 for ceiling fan service.';
  const imageUrl = `${SITE_URL}${ceilingFanHero}`;

  return (
    <>
      <MetaHead
        title="Ceiling Fan Installation Tucson AZ | Professional Fan Installation & Replacement"
        description={description}
        canonical={`${SITE_URL}/ceiling-fan-installation-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Ceiling Fan Installation Tucson AZ | Professional Fan Installation & Replacement' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/ceiling-fan-installation-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional ceiling fan installation service in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Ceiling Fan Installation Tucson AZ | Professional Fan Installation & Replacement' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional ceiling fan installation service in Tucson' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <CeilingFanInstallationSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${ceilingFanHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Ceiling Fan Installation Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                New Fan Installation | Fan Replacement | Wiring & Electrical | Balance Adjustments | Licensed Electricians | Energy Efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Fan Installation"
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
              Why Choose Intelligent Design for Ceiling Fan Installation?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Licensed & Experienced Electricians</p>
                  <p className="text-sm text-gray-600">ROC licensed professionals | 45+ years experience | Expert fan installations | Code-compliant work</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Fan Services</p>
                  <p className="text-sm text-gray-600">New installations | Fan replacements | Wiring & electrical boxes | Balance & adjustments</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Fan-Rated Box Installation</p>
                  <p className="text-sm text-gray-600">Proper support boxes | Secure ceiling mounting | Vibration resistance | Safety compliance</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">All Ceiling Types</p>
                  <p className="text-sm text-gray-600">Standard ceilings | Vaulted & sloped | High ceilings | Cathedral ceilings</p>
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
              Professional Ceiling Fan Installation in Tucson
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Ceiling fans are one of the most cost-effective ways to improve comfort and reduce energy costs in Tucson homes. By creating air circulation, ceiling fans help your air conditioning work more efficiently in summer and improve heating distribution in winter. However, proper installation is crucial for safety, performance, and longevity. At Intelligent Design, we provide expert ceiling fan installation services that ensure your fans operate safely, quietly, and efficiently for years to come.
              </p>
              <p>
                Many homeowners attempt DIY ceiling fan installation only to encounter problems with inadequate electrical boxes, improper wiring, persistent wobbling, or unsafe mounting. Our licensed electricians have the expertise to handle every aspect of ceiling fan installation correctly the first time. We verify that ceiling boxes are properly rated for fan support, install new fan-rated boxes when necessary, ensure proper wiring and grounding, balance fans for vibration-free operation, and handle all types of ceiling configurations from standard flat ceilings to vaulted cathedral ceilings.
              </p>
              <p>
                Whether you're installing a new ceiling fan in a room that currently has a light fixture, replacing an old fan with a modern energy-efficient model, or adding fans to multiple rooms throughout your home, Intelligent Design provides professional installation services that prioritize safety and performance. We work with all major ceiling fan brands and styles, from basic models to smart fans with advanced controls and lighting options.
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
                Our Ceiling Fan Services Include:
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">New ceiling fan installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Fan replacement and upgrades</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Fan-rated electrical box installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Wiring for new fan locations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Wall switch and control installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Remote control setup</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Fan balancing and adjustment</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">High ceiling installations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Vaulted and sloped ceiling fans</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Smart ceiling fan installation</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <SchedulerEmbed
                triggerText="Schedule Fan Installation"
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
              Benefits of Professional Ceiling Fan Installation
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                While ceiling fans may seem straightforward, professional installation provides important advantages that ensure safety and optimal performance:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Safety compliance:</strong> Professional electricians ensure installations meet all electrical codes and safety requirements, protecting your home and family from electrical hazards and structural failures.</li>
                <li><strong>Proper electrical boxes:</strong> We verify or install fan-rated boxes that can safely support fan weight and vibration, preventing dangerous ceiling failures that can occur with standard light fixture boxes.</li>
                <li><strong>Correct wiring:</strong> Proper wiring ensures safe operation, prevents electrical shocks and fires, and provides reliable fan and light control functionality.</li>
                <li><strong>Vibration-free operation:</strong> Professional balancing eliminates annoying wobbling and noise, extending fan life and preventing damage to ceiling structure.</li>
                <li><strong>Optimal performance:</strong> Correctly installed fans with proper blade pitch and clearance provide maximum air circulation and energy savings.</li>
                <li><strong>Insurance protection:</strong> Professional installation with permits and inspections maintains your homeowner's insurance coverage and home value.</li>
                <li><strong>Time savings:</strong> Our experienced electricians complete installations quickly and correctly, avoiding the trial-and-error of DIY installation.</li>
                <li><strong>Warranty protection:</strong> Professional installation often maintains manufacturer warranties that can be voided by improper installation.</li>
                <li><strong>Long-term reliability:</strong> Quality installation prevents future problems like loose connections, failing mounts, and progressive structural damage.</li>
                <li><strong>Peace of mind:</strong> Licensed, insured electricians provide confidence that your ceiling fan installation is safe and code-compliant.</li>
              </ul>
              <p>
                For Tucson homeowners who rely on ceiling fans to supplement air conditioning during our long, hot summers, professional installation ensures maximum efficiency and comfort while protecting your investment and safety.
              </p>

              <div className="mt-6 flex justify-center">
                <Button
                  size="lg"
                  variant="default"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-benefits">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Professional Installation: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Save on Energy Costs with Ceiling Fans
              </h3>
              <p className="text-gray-700 mb-4">
                Properly installed ceiling fans can reduce your AC costs by 15-40% during Tucson summers. The wind-chill effect makes you feel 4-8 degrees cooler, allowing you to raise your thermostat and reduce energy consumption. Over time, ceiling fans pay for themselves through lower utility bills.
              </p>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                asChild
              >
                <a href="tel:+15203332665" data-testid="button-call-savings">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Energy-Saving Fans: (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Ceiling Fan Installation Process
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Our professional ceiling fan installation process ensures safe, reliable, and high-performance results:
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 1: Site Assessment</h3>
                <p className="text-gray-700">
                  We inspect your ceiling structure, verify electrical box location and rating, assess wiring availability and condition, measure ceiling height and room dimensions, and check for obstructions like sloped ceilings or ceiling beams. This assessment helps us recommend the right fan size and installation approach.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 2: Electrical Box Preparation</h3>
                <p className="text-gray-700">
                  If your existing electrical box isn't fan-rated, we install a proper fan-rated box securely attached to ceiling joists or blocking. We ensure the box is level and positioned correctly for optimal fan mounting. This critical step prevents future safety issues and ensures your fan stays securely in place.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 3: Wiring & Controls</h3>
                <p className="text-gray-700">
                  We verify proper wiring from the switch to the ceiling box, install new wiring if needed for switch control or new fan locations, connect fan wiring following manufacturer specifications and electrical codes, and install wall switches, dimmers, or remote controls as desired. All electrical connections are made safely and tested for proper operation.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 4: Fan Assembly & Mounting</h3>
                <p className="text-gray-700">
                  We assemble the fan motor and mounting bracket, securely attach the mounting bracket to the electrical box, hang the fan motor using the appropriate down rod length for your ceiling height, make all electrical connections inside the canopy, and ensure the fan is level and stable before proceeding.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 5: Blade & Light Installation</h3>
                <p className="text-gray-700">
                  We attach fan blades securely with all hardware properly tightened, install light kit if included, verify blade clearance meets safety requirements (7 feet minimum from floor, 18 inches from walls), and ensure all components are secure and properly aligned.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 6: Testing & Balancing</h3>
                <p className="text-gray-700">
                  We test all fan speeds and rotation directions, verify light operation if applicable, test all controls (wall switches, remotes, pull chains), balance the fan using balancing kits to eliminate wobble, and ensure quiet, smooth operation at all speeds.
                </p>
              </div>

              <p>
                Most ceiling fan installations are completed in 1-2 hours. More complex installations requiring new wiring or electrical box installation may take 2-3 hours. We clean up thoroughly and explain fan operation and maintenance before completing the job.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <SchedulerEmbed
                triggerText="Get Free Installation Estimate"
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
        <CommonQuestions questions={ceilingFanCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={ceilingFanInstallationFAQs.faqs} />

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready for Professional Ceiling Fan Installation?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our licensed electricians are ready to safely install your new ceiling fans with expert precision. We handle everything from electrical boxes to final balancing. Call us today or schedule online for prompt, professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SchedulerEmbed
                triggerText="Schedule Installation Now"
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