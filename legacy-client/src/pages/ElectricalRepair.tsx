import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import ElectricalRepairSchema from '@/components/ElectricalRepairSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { electricalRepairFAQs } from '@/data/faqs/electrical';
import { CommonQuestions } from '@/components/CommonQuestions';
import { electricalInspectionCommonQuestions } from '@/data/commonQuestions/electrical';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import electricalRepairHero from '@assets/generated_images/Electrical_repair_service_9c456f25.webp';

export default function ElectricalRepair() {
  const description = 'Expert electrical repair in Tucson. 24/7 emergency service, licensed electricians, circuit repair, outlet/switch repair, panel issues. Call (520) 333-2665 for same-day electrical repairs.';
  const imageUrl = `${SITE_URL}${electricalRepairHero}`;

  return (
    <>
      <MetaHead
        title="Electrical Repair Tucson AZ | 24/7 Emergency Electrician Services"
        description={description}
        canonical={`${SITE_URL}/electrical-repair-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Electrical Repair Tucson AZ | 24/7 Emergency Electrician Services' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/electrical-repair-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional electrician performing electrical repair service in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Electrical Repair Tucson AZ | 24/7 Emergency Electrician Services' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional electrician performing electrical repair service in Tucson' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <ElectricalRepairSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${electricalRepairHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Electrical Repair Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                24/7 Emergency Service | Licensed Electricians | Circuit Repair | Outlet & Switch Repair | Panel Issues | Same-Day Service
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Electrical Repair"
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
              Why Choose Intelligent Design for Electrical Repair?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">24/7 Emergency Electrical Service</p>
                  <p className="text-sm text-gray-600">Available anytime, day or night | Same-day repairs | Fast response times | No overtime charges</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Licensed & Insured Electricians</p>
                  <p className="text-sm text-gray-600">ROC licensed professionals | Fully insured | Background-checked technicians | 45+ years experience</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">All Types of Electrical Repairs</p>
                  <p className="text-sm text-gray-600">Circuit breaker issues | Outlet/switch problems | Wiring repairs | Panel troubleshooting | Lighting repairs</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Upfront Pricing & Guarantees</p>
                  <p className="text-sm text-gray-600">No hidden fees | Written estimates | Satisfaction guaranteed | Warranty on all repairs</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Safety-First Approach</p>
                  <p className="text-sm text-gray-600">Code-compliant repairs | Safety inspections | Proper testing | Quality materials only</p>
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
              Comprehensive Electrical Repair Services in Tucson
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                When electrical problems strike your Tucson home or business, you need fast, reliable electrical repair service from licensed professionals you can trust. At Intelligent Design, we've been providing expert electrical repair services to Tucson families and businesses for over 45 years, building a reputation for quality workmanship, fair pricing, and exceptional customer service.
              </p>
              <p>
                Our team of licensed, experienced electricians is available 24/7 to handle any electrical emergency or repair need. From simple outlet replacements to complex circuit troubleshooting, we have the expertise and equipment to diagnose and fix electrical problems quickly and safely. We understand that electrical issues can be stressful and potentially dangerous, which is why we prioritize fast response times and thorough, code-compliant repairs that keep your property safe.
              </p>
              <p>
                Whether you're dealing with flickering lights, tripped breakers, non-functioning outlets, or any other electrical issue, our electricians will arrive promptly in fully-stocked service vehicles, ready to diagnose the problem and provide upfront pricing before beginning any work. We never charge overtime fees for emergency service, and we stand behind all our repairs with comprehensive warranties.
              </p>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Common Electrical Repairs We Handle:
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Circuit breaker repairs and replacements</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Outlet and switch repairs/replacements</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Electrical panel troubleshooting</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Wiring repairs and rewiring</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Lighting fixture repairs</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">GFCI outlet installations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Ceiling fan repairs</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Smoke detector repairs/replacements</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Electrical troubleshooting and diagnostics</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Surge protection repairs</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <SchedulerEmbed
                triggerText="Schedule Your Electrical Repair"
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
              Signs You Need Electrical Repair Service
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Electrical problems often start small but can quickly become serious safety hazards if left unaddressed. Knowing the warning signs of electrical issues can help you avoid dangerous situations and costly damage. If you notice any of these warning signs in your Tucson home or business, call Intelligent Design immediately for professional electrical repair:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Frequently tripping circuit breakers:</strong> If breakers trip repeatedly, it indicates an overloaded circuit, short circuit, or ground fault that requires professional repair.</li>
                <li><strong>Flickering or dimming lights:</strong> Lights that flicker, dim, or brighten unexpectedly can signal loose wiring connections, voltage fluctuations, or overloaded circuits.</li>
                <li><strong>Warm or discolored outlets/switches:</strong> Outlets or switches that feel warm, show discoloration, or emit burning smells indicate dangerous wiring problems requiring immediate attention.</li>
                <li><strong>Buzzing or crackling sounds:</strong> Electrical components should operate silently. Buzzing, crackling, or sizzling sounds indicate loose connections or arcing that poses fire risks.</li>
                <li><strong>Dead outlets or switches:</strong> Outlets or switches that don't work at all may have failed internally or indicate problems with the circuit wiring.</li>
                <li><strong>Burning odors:</strong> Any burning smell near electrical components is a serious warning sign that should never be ignored.</li>
                <li><strong>Sparking outlets or switches:</strong> Visible sparking when plugging in devices or operating switches indicates dangerous arcing that requires immediate repair.</li>
                <li><strong>Shock or tingling sensations:</strong> Feeling shocks or tingles when touching appliances, switches, or outlets indicates dangerous grounding problems.</li>
              </ul>
              <p>
                Don't ignore these warning signs. Electrical problems rarely resolve themselves and typically worsen over time, increasing safety risks and potential repair costs. Our electricians are available 24/7 to assess your electrical system and provide safe, effective repairs.
              </p>
            </div>

            <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-900 mb-3">
                Electrical Emergency? Call Now!
              </h3>
              <p className="text-gray-700 mb-4">
                If you're experiencing sparking, burning smells, or other dangerous electrical symptoms, don't wait. Call us immediately at (520) 333-2665 for emergency electrical repair service.
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
              Our Electrical Repair Process
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                At Intelligent Design, we follow a systematic approach to electrical repairs that ensures thorough diagnostics, safe repairs, and lasting results. When you call us for electrical repair service, here's what you can expect:
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 1: Emergency Response & Arrival</h3>
                <p className="text-gray-700">
                  We dispatch a licensed electrician to your location promptly, typically within 1-2 hours for emergency calls. Our technicians arrive in fully-equipped service vehicles with diagnostic tools and common repair parts, ready to address most electrical issues on the first visit.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 2: Thorough Diagnosis</h3>
                <p className="text-gray-700">
                  Our electrician will listen to your description of the problem, ask clarifying questions, and perform a comprehensive electrical inspection to identify the root cause. We use advanced diagnostic equipment including multimeters, circuit analyzers, and thermal imaging cameras to accurately pinpoint electrical issues.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 3: Upfront Pricing</h3>
                <p className="text-gray-700">
                  Before beginning any repair work, we provide a detailed written estimate that clearly explains the problem, the necessary repairs, and the total cost. We never start work without your approval, and we never add hidden fees or surprise charges.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 4: Professional Repair</h3>
                <p className="text-gray-700">
                  Once approved, our electrician will complete the repair using quality materials and proven techniques that meet or exceed all local electrical codes. We take care to protect your property during repairs and clean up thoroughly when finished.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 5: Testing & Verification</h3>
                <p className="text-gray-700">
                  After completing repairs, we thoroughly test the electrical system to verify proper operation and safety. We check voltage levels, test circuits, and ensure all components function correctly before considering the job complete.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 6: Explanation & Documentation</h3>
                <p className="text-gray-700">
                  We'll explain what we found, what we fixed, and provide recommendations for preventing future problems. You'll receive detailed documentation of all work performed, parts used, and warranty information.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <SchedulerEmbed
                triggerText="Get Your Electrical Repair Started"
                variant="default"
                size="lg"
                data-testid="button-schedule-process"
              />
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={electricalInspectionCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={electricalRepairFAQs.faqs} />

        <section className="py-12 md:py-16 bg-blue-900 text-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Contact Intelligent Design for Electrical Repair
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <a href="tel:+15203332665" className="text-yellow-400 hover:text-yellow-300 text-xl" data-testid="link-phone-contact">
                      (520) 333-2665
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Address</h3>
                    <p>1145 E Fort Lowell Rd<br />Tucson, AZ 85719</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Hours</h3>
                    <p>24/7 Emergency Service Available<br />Monday-Sunday: Always Open</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Service Areas</h3>
                    <p>Tucson, Oro Valley, Marana, Catalina Foothills, Vail, Sahuarita, Green Valley</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Electrical Repair Online"
                  variant="default"
                  size="lg"
                  className="bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                  data-testid="button-schedule-contact"
                />
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-gray-100"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Emergency Service
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}