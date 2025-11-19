import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import LightingUpgradesSchema from '@/components/LightingUpgradesSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { lightingUpgradesFAQs } from '@/data/faqs/electrical';
import { CommonQuestions } from '@/components/CommonQuestions';
import { lightingCommonQuestions } from '@/data/commonQuestions/electrical';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import lightingUpgradesHero from '@assets/generated_images/Interior_lighting_upgrades_modern_7fb322f3.webp';

export default function LightingUpgrades() {
  const description = 'Professional lighting upgrades in Tucson. LED conversion, recessed lighting, dimmer installation, smart lighting controls. Licensed electricians. Call (520) 333-2665 for modern lighting upgrades.';
  const imageUrl = `${SITE_URL}${lightingUpgradesHero}`;

  return (
    <>
      <MetaHead
        title="Lighting Upgrades Tucson AZ | Modern LED & Smart Lighting Installation"
        description={description}
        canonical={`${SITE_URL}/lighting-upgrades-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Lighting Upgrades Tucson AZ | Modern LED & Smart Lighting Installation' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/lighting-upgrades-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Modern interior lighting upgrades in Tucson home' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Lighting Upgrades Tucson AZ | Modern LED & Smart Lighting Installation' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Modern interior lighting upgrades in Tucson home' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <LightingUpgradesSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${lightingUpgradesHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Lighting Upgrades Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                LED Conversion | Recessed Lighting | Dimmer Installation | Smart Lighting Controls | Modern Fixtures | Licensed Electricians
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Lighting Upgrade"
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
              Why Choose Intelligent Design for Lighting Upgrades?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Licensed & Experienced Electricians</p>
                  <p className="text-sm text-gray-600">ROC licensed professionals | 45+ years experience | Expert lighting installations | Code-compliant work</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Lighting Solutions</p>
                  <p className="text-sm text-gray-600">LED upgrades | Recessed lighting | Dimmers | Smart controls | Design consultation</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Energy-Efficient LED Technology</p>
                  <p className="text-sm text-gray-600">75% energy savings | Long lifespan | Superior light quality | Reduced heat output</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Smart Lighting Integration</p>
                  <p className="text-sm text-gray-600">Voice control | Smartphone apps | Automation | Scheduling | Scene programming</p>
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
              Professional Lighting Upgrades in Tucson
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Modern lighting dramatically transforms how your home looks, feels, and functions while significantly reducing energy costs. Whether you're updating outdated fixtures, converting to energy-efficient LEDs, adding dimmer controls for ambiance, or integrating smart lighting automation, professional lighting upgrades enhance your daily living experience. At Intelligent Design, we help Tucson homeowners modernize their lighting with solutions that combine style, efficiency, and cutting-edge technology.
              </p>
              <p>
                Today's lighting options go far beyond simply replacing bulbs. LED technology provides superior light quality with up to 75% energy savings compared to incandescent bulbs, while lasting 25,000-50,000 hours. Recessed lighting creates clean, modern aesthetics and provides excellent task and ambient illumination. Dimmer switches allow you to adjust lighting levels for any activity or mood. Smart lighting systems integrate with voice assistants and smartphone apps, enabling remote control, automated schedules, and programmed scenes that adjust multiple lights simultaneously.
              </p>
              <p>
                Our licensed electricians assess your home's current lighting, identify opportunities for improvement, recommend fixtures and technologies that match your goals and budget, and handle all electrical work to safely and correctly install new lighting systems. Whether you're upgrading a single room or your entire home, we provide professional installation services that enhance both beauty and functionality while reducing energy costs.
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
                Our Lighting Upgrade Services Include:
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">LED bulb and fixture conversion</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Recessed lighting installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Dimmer switch installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Smart lighting system setup</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Under-cabinet lighting</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Track lighting installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Pendant and chandelier upgrades</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Lighting design consultation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Circuit upgrades for new fixtures</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Voice-controlled lighting integration</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <SchedulerEmbed
                triggerText="Schedule Lighting Consultation"
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
              Benefits of Professional Lighting Upgrades
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Professional lighting upgrades provide significant advantages for Tucson homeowners:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Dramatic energy savings:</strong> LED lighting uses 75% less electricity than incandescent bulbs and lasts up to 25 times longer, reducing both energy bills and bulb replacement costs significantly.</li>
                <li><strong>Improved light quality:</strong> Modern LEDs provide better color rendering, more consistent brightness, and options for color temperature from warm to cool white, enhancing how your home looks and feels.</li>
                <li><strong>Enhanced home value:</strong> Updated lighting is a key factor in home value and buyer appeal, making it one of the best investments you can make in your property.</li>
                <li><strong>Increased functionality:</strong> Proper lighting design improves task lighting for kitchens and workspaces, ambient lighting for living areas, and accent lighting for architectural features and artwork.</li>
                <li><strong>Smart home integration:</strong> Modern lighting can integrate with whole-home automation systems for voice control, smartphone operation, automated schedules, and programmed scenes.</li>
                <li><strong>Safety improvements:</strong> Better illumination reduces tripping hazards, makes stairs safer, and improves visibility throughout your home, especially important for aging residents.</li>
                <li><strong>Reduced heat output:</strong> LEDs produce far less heat than incandescent bulbs, reducing cooling loads in Tucson's hot climate and making homes more comfortable.</li>
                <li><strong>Customizable ambiance:</strong> Dimmer switches and smart controls allow you to adjust lighting levels for any activity from bright task lighting to soft ambient illumination.</li>
                <li><strong>Environmental benefits:</strong> Lower energy consumption reduces your carbon footprint, and LEDs contain no mercury like CFLs, making them safer to dispose of.</li>
                <li><strong>Maintenance reduction:</strong> Long-lasting LED bulbs mean far fewer bulb replacements, eliminating the hassle and cost of constant bulb changing, especially for hard-to-reach fixtures.</li>
              </ul>
              <p>
                For Tucson homeowners looking to modernize their homes, reduce energy costs, and enhance daily living, professional lighting upgrades deliver immediate and long-term benefits that improve comfort, functionality, and value.
              </p>

              <div className="mt-6 flex justify-center">
                <Button
                  size="lg"
                  variant="default"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-benefits">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Lighting Consultation: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Save Money with LED Lighting Upgrades
              </h3>
              <p className="text-gray-700 mb-4">
                Converting your home to LED lighting can save $200-$400 per year on electricity bills. An average Tucson home spends $300-$500 annually on lighting energy. LEDs reduce that by 75%, saving enough to pay for the upgrade within 1-2 years while enjoying better light quality and less maintenance.
              </p>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                asChild
              >
                <a href="tel:+15203332665" data-testid="button-call-savings">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for LED Upgrades: (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Lighting Upgrade Process
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Our professional lighting upgrade process ensures safe, reliable, and beautiful results:
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 1: Lighting Assessment & Consultation</h3>
                <p className="text-gray-700">
                  We evaluate your current lighting situation including fixture types and conditions, light levels in each space, electrical capacity and wiring condition, existing controls and switches, and problem areas with inadequate or poorly distributed light. We discuss your lighting goals, style preferences, functional needs, budget considerations, and interest in smart home features. This consultation helps us develop a customized lighting upgrade plan.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 2: Lighting Design & Product Selection</h3>
                <p className="text-gray-700">
                  Based on your needs and our assessment, we create a lighting design that specifies fixture types and locations, LED bulb or integrated fixture selections, dimmer and control recommendations, color temperature choices (warm white, neutral, or cool white), and smart lighting options if desired. We help you select products that balance aesthetics, functionality, energy efficiency, and budget while ensuring all components are compatible and code-compliant.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 3: Electrical Assessment & Circuit Upgrades</h3>
                <p className="text-gray-700">
                  Before installation, we verify that existing electrical circuits can handle new lighting loads, check switch compatibility with LED dimmers (standard dimmers often don't work correctly with LEDs), assess whether additional circuits are needed for expanded lighting, and determine if electrical boxes or mounting hardware need updating. We complete any necessary electrical upgrades to ensure safe and reliable operation of your new lighting system.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 4: Fixture Installation & Wiring</h3>
                <p className="text-gray-700">
                  We professionally install each light fixture including recessed cans with proper spacing and alignment, pendant lights at the correct height, under-cabinet lighting with proper power routing, track lighting with secure mounting, and chandelier installation with proper support. For recessed lighting in existing ceilings, we cut precise openings, route wiring through attic or ceiling spaces, and patch and finish cutouts for a clean appearance. All wiring is done to electrical code with proper connections and supports.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 5: Dimmer & Control Installation</h3>
                <p className="text-gray-700">
                  We install LED-compatible dimmers at appropriate locations, smart switches and controls if specified, multi-location controls for stairs and hallways, timer switches for outdoor or security lighting, and integrate everything with smart home hubs if desired. We program smart lighting systems with your preferred scenes, schedules, and automation rules, and configure voice control with Alexa, Google Home, or Apple HomeKit if you're using smart fixtures.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 6: Testing, Training & Cleanup</h3>
                <p className="text-gray-700">
                  We thoroughly test every fixture, switch, and control to ensure proper operation, verify dimmer compatibility and smooth dimming action, confirm smart features and app connectivity, check light levels and distribution, and make any necessary adjustments. We provide complete instruction on using new controls, operating smart features, adjusting settings, and maintaining your lighting system. We clean up thoroughly and dispose of old fixtures responsibly.
                </p>
              </div>

              <p>
                Most lighting upgrades are completed in 1-2 days depending on the number of fixtures and complexity of the installation. Whole-home upgrades or projects requiring extensive electrical work may take longer. We work efficiently to minimize disruption while ensuring quality results.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <SchedulerEmbed
                triggerText="Get Free Lighting Estimate"
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
        <CommonQuestions questions={lightingCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={lightingUpgradesFAQs.faqs} />

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Upgrade Your Home's Lighting?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our licensed electricians are ready to help you design and install modern, energy-efficient lighting that enhances your home's beauty, functionality, and value. Call us today or schedule online for a free consultation and estimate.
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
