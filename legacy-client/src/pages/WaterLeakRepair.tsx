import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { waterLeakRepairFAQs } from '@/data/faqs/plumbing';
import waterLeakHero from '@assets/generated_images/Water_leak_repair_service_7bc4fcdb.webp';
import WaterLeakRepairSchema from '@/components/WaterLeakRepairSchema';
import { CommonQuestions } from "@/components/CommonQuestions";
import { leakDetectionCommonQuestions } from "@/data/commonQuestions/plumbing";

export default function WaterLeakRepair() {
  const description = 'Emergency water leak repair in Tucson. Slab leaks, pipe leaks, pinhole leaks. Advanced detection technology. Copper, PEX, PVC pipe repairs. Call (520) 333-2665 for 24/7 service.';
  const imageUrl = `${SITE_URL}${waterLeakHero}`;

  return (
    <>
      <MetaHead
        title="Water Leak Repair Tucson AZ | Emergency Leak Detection & Pipe Repair"
        description={description}
        canonical={`${SITE_URL}/water-leak-repair-tucson`}
        openGraph={[
          { property: 'og:title', content: 'Water Leak Repair Tucson AZ | Emergency Leak Detection & Repair' },
          { property: 'og:description', content: 'Emergency water leak repair in Tucson. Slab leaks, pipe leaks, pinhole leaks. Advanced detection technology. 24/7 service since 1979.' },
          { property: 'og:url', content: `${SITE_URL}/water-leak-repair-tucson` },
          { property: 'og:type', content: 'website' },
          { property: 'og:image', content: imageUrl },
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Water Leak Repair Tucson AZ | Emergency Leak Detection & Repair' },
          { name: 'twitter:description', content: 'Emergency water leak repair in Tucson. Slab leaks, pipe leaks, pinhole leaks. Advanced detection technology. 24/7 service since 1979.' },
          { name: 'twitter:image', content: imageUrl },
        ]}
      />
      <GTM />
      <DNIInjector />
      <WaterLeakRepairSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${waterLeakHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Water Leak Repair in Tucson, AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                24/7 Emergency Service | Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Slab Leak Detection & Repair | Pipe Leak Repairs | Pinhole Leaks | Advanced Leak Detection Technology | Water Damage Prevention | 45+ Years Experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Leak Detection"
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
                    Emergency: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* TrustBar Component */}
        <TrustBar />

        {/* Page Highlights Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              Why Choose Intelligent Design for Water Leak Repair?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Advanced Leak Detection</p>
                  <p className="text-sm text-gray-600">Electronic listening equipment | Thermal imaging cameras | Non-invasive detection | Pinpoint accuracy | Prevents unnecessary demolition</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">24/7 Emergency Service</p>
                  <p className="text-sm text-gray-600">Immediate response | Stop water damage fast | Emergency leak isolation | Night & weekend service | Always available</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">All Pipe Types Repaired</p>
                  <p className="text-sm text-gray-600">Copper, PEX, PVC, CPVC | Slab leaks | Wall & ceiling leaks | Pinhole leaks | Underground pipe leaks | Joint failures</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Hard water expertise | Trusted since 1979 | Licensed ROC #171687</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Solutions</p>
                  <p className="text-sm text-gray-600">Single leak repairs | Whole-home repiping | Water damage prevention | Insurance documentation | Warranty protection</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Minimal Disruption</p>
                  <p className="text-sm text-gray-600">Precise leak location | Smallest possible access | Professional restoration | Clean work sites | Respect your home</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Water Leak Repair Services in Tucson
              </h2>
              <p className="text-lg mb-6">
                Water leaks are among the most damaging and costly problems Tucson homeowners face. A single pinhole leak can release hundreds of gallons daily, causing thousands of dollars in water damage to floors, walls, ceilings, and foundations. Slab leaks hidden under concrete floors often go undetected for weeks or months, resulting in catastrophic damage and astronomical water bills. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've been repairing water leaks in Tucson homes since 1979, using advanced detection technology and proven repair methods to stop leaks quickly and prevent water damage.
              </p>
              <p className="text-lg mb-6">
                Tucson's unique conditions accelerate water leak development. Our extremely hard water (12-16 grains hardness) causes internal pipe corrosion and pinhole leaks in copper pipes. Desert soils shift and settle, stressing underground water lines and creating cracks. Temperature swings cause pipes to expand and contract, weakening joints over time. Many Tucson homes built in the 1970s-1990s now face widespread copper pipe corrosion, requiring either targeted repairs or complete repiping. Understanding these local factors allows us to diagnose leak causes accurately and recommend the most cost-effective solutions.
              </p>
              <p className="text-lg mb-8">
                Our licensed master plumbers use electronic leak detection equipment—acoustic listening devices, thermal imaging cameras, and moisture meters—to locate hidden leaks without destructive demolition. We pinpoint exact leak locations, then determine the best repair approach: targeted pipe repairs, rerouting around problem areas, or whole-home repiping for systemic issues. We provide 24/7 emergency service for active leaks causing immediate damage and same-day service for suspected leaks requiring professional detection and assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Leak Detection"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section1"
                />
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section1">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Leaks Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Types of Water Leaks We Repair
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Slab Leak Detection and Repair
              </h3>
              <p className="text-lg mb-6">
                Slab leaks occur when water pipes running under concrete foundation slabs develop leaks. These are particularly problematic because they're hidden, often going undetected until significant damage occurs. Signs include warm spots on floors (hot water leaks), unexplained water bill spikes, sound of running water when fixtures are off, cracks in floor tiles or foundation, and moisture appearing at floor edges. Slab leaks result from pipe corrosion, ground shifting, poor initial installation, or electrolysis from contact with rebar.
              </p>
              <p className="text-lg mb-6">
                We use electronic leak detection to locate slab leaks precisely before any concrete cutting. Acoustic equipment detects the sound signature of water escaping under pressure. Once located, we evaluate repair options: cutting concrete directly over the leak for direct access and repair (cost-effective for single leaks), rerouting pipes above ground through walls or attic spaces (avoids floor demolition), or whole-home repiping if multiple slab leaks indicate systemic corrosion. We minimize concrete cutting to the smallest area necessary and coordinate with flooring contractors for proper restoration.
              </p>
              <p className="text-lg mb-6">
                Slab leak repairs in Tucson typically cost $1,000-$3,000 depending on leak location, access difficulty, and repair method. This includes leak detection, concrete cutting, pipe repair or replacement, pressure testing, and temporary floor restoration. For homes with multiple slab leaks or extensive under-slab pipe corrosion, whole-home repiping ($3,000-$10,000) may be more economical than repeated slab repairs. We provide honest assessments of your entire plumbing system, explaining all options clearly so you can make informed decisions.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Pinhole Leak Repairs
              </h3>
              <p className="text-lg mb-6">
                Pinhole leaks are tiny perforations in copper pipes caused by internal corrosion. Tucson's hard water is highly corrosive to copper, gradually eating through pipe walls from inside. Pinholes start small—barely visible spray or dampness—but rapidly enlarge, causing significant water damage. Multiple pinhole leaks within short timeframes indicate systemic pipe corrosion throughout your home. Homes with original copper pipes installed 30-40+ years ago are prime candidates for pinhole leak problems.
              </p>
              <p className="text-lg mb-8">
                Individual pinhole leaks can be repaired by cutting out the affected section and installing new pipe with compression fittings or soldering. However, if you're experiencing multiple pinholes, your entire copper system is likely corroding. Repairing one leak doesn't address the systemic problem—more pinholes will develop. For homes with recurring pinhole leaks, whole-home repiping with PEX (cross-linked polyethylene) provides permanent solution. PEX is immune to corrosion, flexible enough to snake through walls with minimal demolition, and costs less to install than copper.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Get Leak Assessment"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pipe Repair Methods Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Pipe Repair Methods and Materials
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Copper Pipe Repairs
              </h3>
              <p className="text-lg mb-6">
                Copper pipes are common in Tucson homes built from 1950-2000. When copper leaks, we cut out the damaged section and install new pipe using either compression fittings (no soldering required, fast installation) or soldered joints (permanent, strongest connection). For accessible leaks in walls, under sinks, or in attics, copper repairs are straightforward and cost-effective ($200-$500 typically). However, copper's susceptibility to corrosion in Tucson's hard water means repairs may be temporary if the entire system is aging.
              </p>
              <p className="text-lg mb-6">
                We often recommend replacing failed copper sections with PEX rather than copper-to-copper repairs. PEX won't corrode like copper, costs less, installs faster, and provides longer-lasting repairs. For whole-home repiping projects replacing aging copper throughout the house, PEX is our recommended material due to superior corrosion resistance, flexibility allowing easier installation through existing walls, fewer joints meaning fewer potential leak points, and lower total cost than copper repiping.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                PEX Pipe Repairs and Installation
              </h3>
              <p className="text-lg mb-6">
                PEX (cross-linked polyethylene) is the superior choice for Tucson water systems. It's completely immune to corrosion from hard water, flexible enough to snake through walls with minimal demolition, resistant to freezing (not a major concern in Tucson but valuable for mountain homes), easier and faster to install than copper, and less expensive than copper for both materials and labor. PEX joints use crimp rings, clamp connections, or press fittings—all faster and more reliable than soldering copper.
              </p>
              <p className="text-lg mb-8">
                When repairing leaks, we often reroute problem areas with PEX rather than repairing in-place. PEX's flexibility allows us to run new supply lines through attic spaces, walls, or along baseboards, completely avoiding problem areas like slab leaks or inaccessible wall cavities. This "repipe around the problem" approach costs less than extensive demolition and provides superior long-term reliability. For whole-home repiping, PEX installation typically takes 2-3 days and costs 30-40% less than copper repiping.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Discuss Repair Options: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Detection Technology Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Advanced Leak Detection Technology
              </h2>
              <p className="text-lg mb-6">
                Professional leak detection uses specialized equipment to locate hidden leaks without destructive exploration. Electronic acoustic equipment listens for the characteristic sound of water escaping from pressurized pipes. Different leak types produce distinct sound signatures, allowing experienced technicians to differentiate between pipe leaks, joint leaks, and fixture leaks. We use ground microphones for underground leaks and wall-contact sensors for leaks behind walls and under floors.
              </p>
              <p className="text-lg mb-6">
                Thermal imaging cameras visualize temperature differences invisible to the naked eye. Water leaking from hot water pipes creates warm spots on floors, walls, and ceilings. Evaporating water creates cool spots. By scanning your home with thermal cameras, we identify potential leak locations quickly and non-invasively. Moisture meters measure water content in building materials—drywall, wood, concrete—confirming suspected leaks and assessing water damage extent.
              </p>
              <p className="text-lg mb-6">
                Pressure testing isolates leak locations by sectioning off parts of your plumbing system and monitoring pressure drops. If pressure holds steady in one zone but drops in another, we know exactly where to focus our search. Tracer gas detection involves introducing harmless, detectable gas into water lines, then using sensors to detect where gas escapes—particularly effective for slab leaks and underground leaks where acoustic methods struggle.
              </p>
              <p className="text-lg mb-8">
                Professional leak detection costs $250-$500 but saves thousands by preventing unnecessary demolition and pinpointing exact repair locations. Attempting to locate leaks by cutting random access holes wastes time and money, causes excessive property damage, and often misses the leak entirely. Our detection technology pays for itself many times over by enabling targeted repairs with minimal disruption to your home.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Leak Detection"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Water Damage Prevention Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Water Damage Prevention and Emergency Response
              </h2>
              <p className="text-lg mb-6">
                Water leaks cause progressive damage that worsens every hour. A pinhole leak releasing 1-2 gallons per hour causes 50-100 gallons daily—600-700 gallons weekly—flooding walls, soaking insulation, and promoting mold growth. Slab leaks under concrete foundations erode soil, creating voids that cause foundation settling and cracking. Quick response to suspected leaks minimizes damage and repair costs significantly.
              </p>
              <p className="text-lg mb-6">
                When you discover an active leak, immediately shut off water at the main shutoff valve (typically in your garage near the water heater or outside near the water meter). This stops water flow and prevents further damage while you wait for emergency service. If you can't locate the main shutoff, turn off fixture supply valves for isolated leaks (under sinks, behind toilets). Move belongings away from wet areas and place towels or buckets to contain water spread.
              </p>
              <p className="text-lg mb-6">
                Document damage thoroughly for insurance claims. Photograph wet areas, damaged belongings, and water meter readings showing unusual consumption. Most homeowner's insurance covers sudden, accidental water damage but not gradual damage from neglected maintenance. Slab leaks and pinhole leaks are typically covered as sudden events. We provide detailed documentation of leak locations, causes, and repairs for your insurance adjuster.
              </p>
              <p className="text-lg mb-8">
                Preventative measures reduce leak risks. Annual plumbing inspections identify early warning signs—corrosion, high water pressure, loose fittings—before they cause leaks. Water softener installation protects pipes from corrosion caused by Tucson's hard water, extending pipe lifespan significantly. Whole-home water pressure regulators prevent excessive pressure from stressing pipes and joints. Modern leak detection systems with automatic shutoffs monitor water flow 24/7, shutting off water and alerting you to leaks immediately—invaluable protection for vacation homes or when you're away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section5">
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency Service: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Intelligent Design for Water Leak Repair?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has served Tucson families since 1979. We're a family and veteran-owned business with over 45 years of experience providing honest, professional plumbing services. Our licensed master plumbers have repaired thousands of water leaks throughout Tucson and understand the unique challenges of Southern Arizona's hard water, shifting soils, and aging housing stock.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on quality workmanship, transparent pricing, and exceptional customer service. When you choose Intelligent Design for water leak repair, you're getting: advanced electronic leak detection equipment operated by trained technicians, 24/7 emergency service for urgent leak situations, all pipe types repaired including copper, PEX, PVC, and CPVC, minimal disruption with targeted repairs and professional restoration, honest assessments of repair vs. repipe options, comprehensive warranties on materials and labor, and a team that stands behind every repair.
              </p>
              <p className="text-lg mb-8">
                We carry extensive inventory of pipe materials, fittings, and repair supplies on our service vehicles for immediate repairs. Our plumbers undergo continuous training on the latest leak detection technology and repair methods. We provide same-day service for most leak situations and emergency service 24/7 for active leaks causing immediate damage. Licensed, bonded, and insured (ROC #171687), we handle all aspects of leak detection and repair professionally and efficiently.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Service Today"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section6"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={leakDetectionCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={waterLeakRepairFAQs.faqs} />

        {/* Business Information Section (NAP) */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Water Leak Repair Today
              </h2>
              <div className="bg-card p-8 rounded-lg border text-center">
                <h3 className="text-2xl font-bold mb-4" data-testid="text-business-name">
                  Intelligent Design Air Conditioning, Plumbing, Solar, & Electric
                </h3>
                <div className="space-y-2 text-lg mb-6">
                  <p data-testid="text-address-line1">1145 E Fort Lowell Rd</p>
                  <p data-testid="text-address-line2">Tucson, AZ 85719</p>
                  <p className="text-xl font-bold text-primary" data-testid="text-phone">(520) 333-2665</p>
                  <p className="font-semibold" data-testid="text-hours">24/7 Emergency Service | Licensed, Bonded & Insured AZ ROC 340962,  ROC 322375, ROC 296386, ROC 276673</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Service Areas:</h4>
                  <p className="text-base">
                    Tucson, Marana, Oro Valley, Sahuarita, Vail, Green Valley, Catalina, Casas Adobes, Flowing Wells, Tanque Verde, Corona de Tucson, Drexel Heights, and all surrounding areas.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Leak Detection"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-footer"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-footer">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now: (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}