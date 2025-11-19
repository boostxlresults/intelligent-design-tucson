import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import LeakDetectionSchema from '@/components/LeakDetectionSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { leakDetectionFAQs } from '@/data/faqs/plumbing';
import leakDetectionHero from '@assets/generated_images/Advanced_leak_detection_service_2ef26dea.webp';
import { CommonQuestions } from "@/components/CommonQuestions";
import { leakDetectionCommonQuestions } from "@/data/commonQuestions/plumbing";

export default function LeakDetection() {
  const description = 'Advanced leak detection services in Tucson. Acoustic & thermal technology finds hidden leaks. Non-invasive methods. Call (520) 333-2665 for professional leak detection.';
  const imageUrl = `${SITE_URL}${leakDetectionHero}`;

  return (
    <>
      <MetaHead
        title="Leak Detection Tucson AZ | Advanced Non-Invasive Technology"
        description={description}
        canonical={`${SITE_URL}/leak-detection-tucson`}
        openGraph={[
          { property: 'og:title', content: 'Leak Detection Tucson AZ | Advanced Non-Invasive Technology' },
          { property: 'og:description', content: 'Advanced leak detection services in Tucson. Find hidden slab leaks, underground leaks & more. Over 22,000 5-star reviews.' },
          { property: 'og:url', content: `${SITE_URL}/leak-detection-tucson` },
          { property: 'og:type', content: 'website' },
          { property: 'og:image', content: imageUrl },
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Leak Detection Tucson AZ | Advanced Non-Invasive Technology' },
          { name: 'twitter:description', content: 'Advanced leak detection services in Tucson. Find hidden slab leaks, underground leaks & more. Over 22,000 5-star reviews.' },
          { name: 'twitter:image', content: imageUrl },
        ]}
      />
      <GTM />
      <DNIInjector />
      <LeakDetectionSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${leakDetectionHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Advanced Leak Detection Services in Tucson
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Non-Invasive Technology | Acoustic & Thermal Imaging | Slab Leak Detection | Underground Leaks | Prevent Water Damage | 45+ Years Experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Detection"
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

        {/* TrustBar Component */}
        <TrustBar />

        {/* Page Highlights Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              Why Choose Intelligent Design for Leak Detection?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Advanced Detection Technology</p>
                  <p className="text-sm text-gray-600">Acoustic listening equipment | Thermal imaging cameras | Moisture meters | Pressure testing | 95%+ accuracy</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Non-Invasive Methods</p>
                  <p className="text-sm text-gray-600">No demolition required | Pinpoint leak location | Minimal disruption | Targeted repairs | Save thousands</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">All Leak Types</p>
                  <p className="text-sm text-gray-600">Slab leaks | Underground lines | Wall & ceiling leaks | Pool leaks | Irrigation leaks | Sewer leaks</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Prevent Water Damage</p>
                  <p className="text-sm text-gray-600">Early detection saves $5,000-$20,000+ in damage | Stop mold growth | Protect foundation | Lower bills</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Expert Technicians</p>
                  <p className="text-sm text-gray-600">Certified leak detection specialists | 45+ years experience | Latest training | Licensed master plumbers</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Insurance Documentation</p>
                  <p className="text-sm text-gray-600">Detailed reports | Photos & diagrams | Insurance claim support | Complete documentation</p>
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
                Professional Leak Detection in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Hidden water leaks are silent destroyers that cost Tucson homeowners thousands in water damage, foundation repairs, and wasted water every year. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've helped thousands of Tucson families locate hidden leaks since 1979 using advanced non-invasive detection technology. Our certified leak detection specialists use acoustic listening equipment, thermal imaging cameras, moisture meters, and pressure testing to pinpoint leak locations with 95%+ accuracy—without breaking walls, cutting floors, or invasive exploration.
              </p>
              <p className="text-lg mb-6">
                Many homeowners live with hidden leaks for months or years before discovering them, by which time significant damage has occurred. A slow slab leak under your foundation can waste $50-$300 worth of water monthly while silently undermining your home's structural integrity, creating moisture that attracts termites and promotes mold growth, and saturating soil that causes foundation cracks and floor tile damage. Early detection saves thousands in damage repair and prevents health hazards from mold exposure.
              </p>
              <p className="text-lg mb-8">
                Tucson's unique conditions make leak detection especially important. Our hard water (12-16 grains hardness per gallon) causes aggressive pipe corrosion, particularly in copper pipes common in homes from the 1970s-1990s. Desert soil conditions create ground settling and shifting that stresses underground pipes and foundation-embedded plumbing. Many Tucson neighborhoods have aging infrastructure approaching end-of-life. Our local expertise helps identify leaks quickly using proven methods refined over 45 years of Tucson service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Find My Leak"
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

        {/* Detection Technology Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Advanced Leak Detection Technology
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Acoustic Leak Detection
              </h3>
              <p className="text-lg mb-6">
                Acoustic leak detection uses sensitive listening equipment to hear water escaping from pressurized pipes. When water leaks through a crack or pinhole under pressure, it creates a characteristic sound signature—a high-frequency hissing or rushing noise. Our electronic acoustic devices amplify these sounds and filter out ambient noise, allowing technicians to pinpoint leak locations even when buried under concrete slabs, behind walls, or underground.
              </p>
              <p className="text-lg mb-6">
                Different leak types create different acoustic signatures. Pinhole leaks in copper pipes generate high-pitched frequencies. Larger cracks or breaks produce lower-frequency rushing sounds. Our technicians are trained to interpret these signatures, distinguishing actual leaks from other water sounds like normal fixture usage. By systematically surveying suspected areas with acoustic equipment, we locate leaks to within 1-2 feet of their actual position—precise enough for targeted repair with minimal demolition.
              </p>
              <p className="text-lg mb-6">
                Acoustic detection is highly effective for slab leaks, underground water line leaks, and hidden leaks in walls. It works best on pressurized water supply lines where water flow creates audible noise. For drain leaks or low-pressure situations, we combine acoustic methods with other technologies for comprehensive detection.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Thermal Imaging Cameras
              </h3>
              <p className="text-lg mb-6">
                Thermal imaging cameras visualize temperature differences invisible to the naked eye. Hot water leaks create warm spots on floors, walls, or ceilings. Cold water leaks create cool areas as evaporation draws heat from surrounding materials. Our high-resolution thermal cameras detect temperature variations as small as 0.1°F, revealing leak locations through their thermal signatures.
              </p>
              <p className="text-lg mb-8">
                Thermal imaging excels at finding hot water slab leaks under concrete floors—the warm water creates distinct hot spots visible through the thermal camera. It also detects leaks behind walls, above ceilings, and in concealed spaces where visual inspection is impossible. We use thermal imaging to quickly survey large areas, identifying suspected leak zones for further investigation with acoustic equipment or moisture meters. The combination provides fast, accurate leak location with no destruction.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Detection"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Common Leaks Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Common Hidden Leak Types
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Slab Leaks
              </h3>
              <p className="text-lg mb-6">
                Slab leaks occur in water lines embedded in or under concrete foundation slabs. They're among the most destructive and expensive leaks because they're completely hidden until significant damage appears. Tucson homes built from the 1970s-1990s commonly have copper water lines embedded in foundation slabs. These pipes corrode from contact with concrete, hard water exposure, and electrolysis from rebar contact. As pipes age and corrode, pinhole leaks develop that waste water and undermine foundations.
              </p>
              <p className="text-lg mb-6">
                Slab leak symptoms include: warm spots on floors (hot water leaks), sound of running water when all fixtures are off, unexplained water bill increases of 20-50%, cracks in floor tiles or foundation, damp carpeting or flooring, mildew odors from moisture under floors, and low water pressure from water escaping before reaching fixtures. If you notice these signs, immediate professional detection prevents catastrophic damage.
              </p>
              <p className="text-lg mb-6">
                We locate slab leaks using acoustic equipment to hear water escaping under slabs and thermal cameras to visualize hot spots from hot water leaks. Once located, repairs range from accessing the pipe through the slab for a targeted fix, to rerouting pipes around the slab for severe cases, to whole-house repiping for homes with multiple leaks indicating system-wide failure. We provide repair options and cost estimates so you can make informed decisions.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Underground Water Line Leaks
              </h3>
              <p className="text-lg mb-6">
                Underground leaks in water lines running from the meter to your home or throughout your yard waste enormous amounts of water and create soggy areas, foundation problems, and excessive bills. Tucson's expansive clay soils shift and settle with moisture changes, stressing buried pipes. Tree roots seek water and penetrate pipe joints. Age-related corrosion creates failures.
              </p>
              <p className="text-lg mb-8">
                Underground leak symptoms include: unusually green or wet areas in desert landscaping, erosion or sinkholes in yard, water meter running constantly when all water is off, significant bill increases, and reduced water pressure. We locate underground leaks using acoustic equipment to survey the line route and correlation technology that triangulates leak positions. Pressure testing confirms leak presence and helps estimate severity before excavation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency Detection: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Detection Process Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Leak Detection Process
              </h2>
              <p className="text-lg mb-6">
                Our systematic approach ensures we find leaks quickly and accurately. We start with a comprehensive consultation to understand your concerns: water bill increases, sounds of running water, wet spots, or other symptoms. We review your home's plumbing history, age, and any previous leak issues. This background helps target our investigation efficiently.
              </p>
              <p className="text-lg mb-6">
                Next, we perform water meter testing. We turn off all water-using fixtures and appliances, then observe your water meter. If it continues running, water is escaping somewhere. We can estimate leak severity by monitoring meter flow rates. This confirms leak presence before deploying electronic equipment.
              </p>
              <p className="text-lg mb-6">
                We then use our detection technology systematically: thermal imaging to quickly survey suspected areas and identify temperature anomalies, acoustic equipment to listen for leak sounds in targeted zones, moisture meters to detect hidden water in walls and floors, and pressure testing to isolate leak locations to specific pipe sections. Each technology provides complementary information that triangulates leak positions.
              </p>
              <p className="text-lg mb-6">
                Once we locate the leak, we mark its position and document findings with photos, measurements, and thermal images. We explain what we found, why the leak occurred, and provide repair recommendations with cost estimates. Our detailed reports support insurance claims when applicable. You decide whether to proceed with repairs immediately or schedule service for a convenient time.
              </p>
              <p className="text-lg mb-8">
                Most residential leak detection takes 2-4 hours from start to finish. Simple cases may take less time; complex situations with multiple suspected locations may require more thorough investigation. We provide time and cost estimates before starting work so you know what to expect. Our goal is finding leaks accurately with minimal disruption to your home and schedule.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Start Detection Process"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cost Savings Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Cost Savings from Early Leak Detection
              </h2>
              <p className="text-lg mb-6">
                Professional leak detection costs $250-$500 for most residential applications—a fraction of the damage costs from undetected leaks. A slab leak wasting water for six months costs $300-$1,800 in excess water bills alone. The same leak causes foundation damage requiring $5,000-$15,000 in repairs, flooring damage costing $3,000-$10,000 to replace, and mold remediation averaging $2,000-$8,000. Total damage easily reaches $10,000-$35,000. Detecting and repairing the leak early (detection $400 + repair $800-$2,500) saves $7,000-$32,000.
              </p>
              <p className="text-lg mb-6">
                Underground water line leaks waste even more water when they run undetected for months. A moderate underground leak can waste 10,000-30,000 gallons monthly—$100-$300 excess water bills. Over a year, that's $1,200-$3,600 wasted, plus the water itself (360,000 gallons) is an environmental disaster in desert Tucson. Early detection and repair ($400 detection + $600-$1,500 repair) pays for itself in 3-6 months through water bill savings alone.
              </p>
              <p className="text-lg mb-8">
                Beyond direct financial costs, hidden leaks create health hazards from mold growth, attract termites to moisture-damaged wood, and reduce home values when damage becomes apparent. Buyers' home inspections often discover hidden leak damage, forcing sellers to make expensive repairs or accept lower offers. Proactive leak detection when symptoms first appear prevents these problems entirely. The small investment in professional detection provides enormous returns through damage prevention and water conservation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section5">
                    <Phone className="w-5 h-5 mr-2" />
                    Save Money: (520) 333-2665
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
                Why Choose Intelligent Design for Leak Detection?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has provided leak detection services throughout Tucson since 1979. We're a family and veteran-owned business with over 45 years of local experience. Our certified leak detection specialists use the latest technology—acoustic listening equipment, thermal imaging cameras, moisture meters, and pressure testing—to locate hidden leaks with pinpoint accuracy. We invest in ongoing training and equipment upgrades to maintain our position as Tucson's leak detection leaders.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on accurate detection, honest assessments, and customer service. We understand the stress of suspected leaks—the worry about water damage, the frustration of rising bills, and the fear of expensive repairs. Our technicians explain findings clearly, provide detailed documentation, and offer repair options with transparent pricing. We work with insurance companies regularly and provide the documentation needed for successful claims.
              </p>
              <p className="text-lg mb-8">
                Our comprehensive approach includes not just finding leaks, but helping you understand why they occurred and how to prevent future problems. We examine pipe age and condition, discuss Tucson-specific factors like hard water and soil conditions, and recommend protective measures like water softeners or pressure regulators. Our goal is solving current problems while protecting your home long-term. When you choose Intelligent Design, you're getting Tucson's most experienced leak detection team.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Choose the Best"
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
        <ServiceFAQ faqs={leakDetectionFAQs.faqs} />

        {/* Business Information Section (NAP) */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Leak Detection Service Today
              </h2>
              <div className="bg-card p-8 rounded-lg border text-center">
                <h3 className="text-2xl font-bold mb-4" data-testid="text-business-name">
                  Intelligent Design Air Conditioning, Plumbing, Solar, & Electric
                </h3>
                <div className="space-y-2 text-lg mb-6">
                  <p data-testid="text-address-line1">1145 E Fort Lowell Rd</p>
                  <p data-testid="text-address-line2">Tucson, AZ 85719</p>
                  <p className="text-xl font-bold text-primary" data-testid="text-phone">(520) 333-2665</p>
                  <p className="text-sm text-muted-foreground" data-testid="text-hours">Monday-Friday: 7:00 AM - 7:00 PM | Saturday: 8:00 AM - 5:00 PM</p>
                  <p className="text-sm font-semibold text-green-700" data-testid="text-emergency">24/7 Emergency Service Available</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <p className="text-muted-foreground max-w-2xl">
                    Serving Tucson and surrounding areas including Oro Valley, Marana, Sahuarita, Vail, and Green Valley. Licensed, bonded, and insured. ROC #171687
                  </p>
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