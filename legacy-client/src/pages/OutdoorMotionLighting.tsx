import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import OutdoorMotionLightingSchema from '@/components/OutdoorMotionLightingSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { outdoorMotionLightingFAQs } from '@/data/faqs/electrical';
import { CommonQuestions } from '@/components/CommonQuestions';
import { outdoorLightingCommonQuestions } from '@/data/commonQuestions/electrical';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import motionLightingHero from '@assets/generated_images/Outdoor_motion_lighting_installation_1350b5ea.webp';

export default function OutdoorMotionLighting() {
  const description = 'Professional outdoor motion lighting installation in Tucson. Security lighting, landscape motion sensors, LED fixtures, smart controls. Licensed electricians. Call (520) 333-2665 for motion lighting installation.';
  const imageUrl = `${SITE_URL}${motionLightingHero}`;

  return (
    <>
      <MetaHead
        title="Outdoor Motion Lighting Tucson AZ | Security & Landscape Motion Lights"
        description={description}
        canonical={`${SITE_URL}/outdoor-motion-lighting-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Outdoor Motion Lighting Tucson AZ | Security & Landscape Motion Lights' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/outdoor-motion-lighting-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional outdoor motion lighting installation in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Outdoor Motion Lighting Tucson AZ | Security & Landscape Motion Lights' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional outdoor motion lighting installation in Tucson' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <OutdoorMotionLightingSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${motionLightingHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Outdoor Motion Lighting Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Security Lighting | Motion Sensor Installation | LED Outdoor Fixtures | Smart Controls | Landscape Lighting | Licensed Electricians
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Lighting Installation"
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
              Why Choose Intelligent Design for Outdoor Motion Lighting?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Licensed & Experienced Electricians</p>
                  <p className="text-sm text-gray-600">ROC licensed professionals | 45+ years experience | Expert outdoor lighting installations | Code-compliant work</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Motion Lighting Solutions</p>
                  <p className="text-sm text-gray-600">Security lighting | Motion sensors | Landscape lighting | Smart controls | Timer automation</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Energy-Efficient LED Fixtures</p>
                  <p className="text-sm text-gray-600">LED technology | Low energy consumption | Long lifespan | Bright illumination | Cost savings</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Weatherproof Installation</p>
                  <p className="text-sm text-gray-600">Outdoor-rated fixtures | Weather-resistant wiring | Proper sealing | Monsoon-ready installations</p>
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
              Professional Outdoor Motion Lighting Installation in Tucson
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Outdoor motion lighting provides essential security, safety, and convenience for Tucson homeowners. Motion-activated lights deter intruders, illuminate pathways and entries, reduce energy costs by only activating when needed, and enhance your home's curb appeal. At Intelligent Design, we provide expert outdoor motion lighting installation services that enhance your property's security while adding functional illumination exactly where and when you need it.
              </p>
              <p>
                Modern motion lighting systems offer sophisticated features including adjustable sensitivity settings, customizable timer durations, day/night sensors that prevent daytime activation, integration with smart home systems, and energy-efficient LED technology that provides bright illumination while minimizing electricity costs. Our licensed electricians design and install motion lighting solutions tailored to your property's specific needs and your security priorities.
              </p>
              <p>
                Whether you need security lighting around entry doors and garages, motion-activated landscape lighting along walkways and driveways, perimeter lighting to illuminate your property boundaries, or flood lights for large outdoor areas, Intelligent Design provides professional installation services that combine functionality with aesthetic appeal. We help you create a well-lit outdoor environment that enhances both security and usability of your outdoor spaces.
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
                Our Outdoor Motion Lighting Services Include:
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Security motion lighting installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Motion sensor fixture upgrades</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">LED motion-activated flood lights</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Landscape path lighting with sensors</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Smart motion lighting integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Dusk-to-dawn sensor installation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Weatherproof outdoor wiring</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Multiple fixture zone control</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Timer and schedule programming</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Lighting system troubleshooting</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <SchedulerEmbed
                triggerText="Schedule Motion Lighting Installation"
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
              Benefits of Professional Outdoor Motion Lighting
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Professional outdoor motion lighting installation provides important advantages for Tucson homeowners:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Enhanced security:</strong> Motion-activated lights deter potential intruders by eliminating dark hiding spots and creating the impression of occupancy even when you're away.</li>
                <li><strong>Improved safety:</strong> Automatic illumination of walkways, steps, and entry areas prevents trips and falls, especially important for nighttime arrivals and departures.</li>
                <li><strong>Energy efficiency:</strong> Motion sensors ensure lights only activate when needed, dramatically reducing electricity consumption compared to lights that stay on continuously.</li>
                <li><strong>Convenience:</strong> Hands-free activation means you never fumble for keys in the dark or navigate dim pathways while carrying groceries or packages.</li>
                <li><strong>Extended fixture life:</strong> Reduced operating hours mean outdoor light bulbs and fixtures last significantly longer, lowering replacement and maintenance costs.</li>
                <li><strong>Property value:</strong> Professional outdoor lighting enhances curb appeal and is a desirable feature for potential buyers.</li>
                <li><strong>Smart home integration:</strong> Modern motion lighting can integrate with home automation systems for centralized control and monitoring via smartphone apps.</li>
                <li><strong>Customizable settings:</strong> Adjust sensitivity, duration, and activation schedules to match your specific needs and preferences.</li>
                <li><strong>Wildlife awareness:</strong> Motion lights in Tucson also alert you to wildlife presence, important in areas where javelina, coyotes, or other animals are active.</li>
                <li><strong>Insurance benefits:</strong> Many insurance companies offer discounts for homes with security lighting systems, as they reduce break-in risk.</li>
              </ul>
              <p>
                For Tucson homeowners concerned about security or seeking to improve outdoor safety and convenience, professional motion lighting installation provides peace of mind and practical benefits that last for years.
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
                Save Energy with Motion-Activated Lighting
              </h3>
              <p className="text-gray-700 mb-4">
                Motion sensor lighting can reduce your outdoor lighting energy costs by 50-75% compared to continuously-on security lights. With LED fixtures, you get bright, reliable security illumination at a fraction of traditional lighting costs, and fixtures last 25,000+ hours.
              </p>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                asChild
              >
                <a href="tel:+15203332665" data-testid="button-call-savings">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Security Lighting: (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Outdoor Motion Lighting Installation Process
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Our professional outdoor motion lighting installation process ensures safe, reliable, and effective results:
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 1: Property Assessment & Lighting Design</h3>
                <p className="text-gray-700">
                  We conduct a thorough evaluation of your property to identify security vulnerabilities, high-traffic areas requiring illumination, optimal fixture locations for maximum coverage, potential dark spots or blind areas, and architectural features to highlight. We discuss your security priorities, aesthetic preferences, and any problem areas you've identified. This assessment informs our lighting design recommendations.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 2: Fixture Selection & Planning</h3>
                <p className="text-gray-700">
                  Based on your needs and our site assessment, we recommend appropriate fixtures including LED motion-activated flood lights for large areas, wall-mounted motion lights for entries and garages, landscape path lights with integrated sensors, and specialty fixtures for unique applications. We help you select fixtures that balance security effectiveness, energy efficiency, aesthetic appeal, and budget considerations.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 3: Electrical Wiring Installation</h3>
                <p className="text-gray-700">
                  We install weatherproof electrical wiring from your home's electrical panel or existing outdoor circuits to each fixture location. All outdoor wiring uses appropriate conduit, waterproof boxes, and weather-resistant connections to ensure long-term reliability in Tucson's monsoon conditions. We follow all electrical codes for outdoor installations and obtain permits when required.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 4: Fixture Mounting & Installation</h3>
                <p className="text-gray-700">
                  We securely mount each light fixture in the optimal location and position for effective coverage. Fixtures are installed level and angled correctly to maximize detection range while minimizing false triggers. We ensure all mounting hardware is weather-resistant and properly sealed to prevent water intrusion. Landscape fixtures are positioned for both functional illumination and aesthetic appeal.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 5: Sensor Configuration & Testing</h3>
                <p className="text-gray-700">
                  We configure each motion sensor's settings including detection sensitivity to balance security and false trigger prevention, timer duration for how long lights stay on after activation, dusk-to-dawn sensors to prevent unnecessary daytime activation, and detection range and pattern. We thoroughly test each fixture to ensure reliable operation and proper coverage with no dead zones.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 6: Smart Control Integration & Training</h3>
                <p className="text-gray-700">
                  If you're using smart motion lighting, we integrate fixtures with your home automation system, configure app controls and monitoring, set up scheduling and automation rules, and enable remote control capabilities. We provide complete instruction on operating your new lighting system, adjusting settings as needed, and maintaining fixtures for long-term performance.
                </p>
              </div>

              <p>
                Most outdoor motion lighting installations are completed in 4-6 hours for a typical single-family home. More extensive systems with multiple fixtures, complex wiring requirements, or smart home integration may take longer. We clean up thoroughly and ensure all outdoor areas are left in excellent condition.
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
        <CommonQuestions questions={outdoorLightingCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={outdoorMotionLightingFAQs.faqs} />

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Enhance Your Home Security with Motion Lighting?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our licensed electricians are ready to design and install outdoor motion lighting that protects your home and family. We handle everything from planning to installation. Call us today or schedule online for a free consultation.
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
