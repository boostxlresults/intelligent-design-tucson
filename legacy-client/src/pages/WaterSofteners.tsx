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
import { waterSoftenersFAQs } from '@/data/faqs/plumbing';
import waterSoftenerHero from '@assets/generated_images/Water_softener_system_installation_15639327.webp';
import cleanWaterTucsonLogo from "@assets/WaterClean~Png_1761771071635.png";
import WaterSoftenersSchema from '@/components/WaterSoftenersSchema';
import { CommonQuestions } from "@/components/CommonQuestions";
import { waterSoftenerCommonQuestions } from "@/data/commonQuestions/plumbing";

export default function WaterSofteners() {
  const description = 'Brita PRO smart water softener installation in Tucson. 4-week learning, 20-min quick recharge, vacation mode. Eliminate hard water problems. Call (520) 333-2665 for free water testing.';
  const imageUrl = `${SITE_URL}${waterSoftenerHero}`;

  return (
    <>
      <MetaHead
        title="Brita PRO Water Softener Installation Tucson AZ | Smart Features"
        description={description}
        canonical={`${SITE_URL}/water-softeners-tucson`}
        openGraph={[
          { property: 'og:title', content: 'Brita PRO Water Softener Installation Tucson AZ | Smart Features' },
          { property: 'og:description', content: 'Brita PRO smart water softener installation in Tucson. 4-week learning, 20-min quick recharge, vacation mode. Eliminate hard water problems.' },
          { property: 'og:url', content: `${SITE_URL}/water-softeners-tucson` },
          { property: 'og:type', content: 'website' },
          { property: 'og:image', content: imageUrl },
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Brita PRO Water Softener Installation Tucson AZ | Smart Features' },
          { name: 'twitter:description', content: 'Brita PRO smart water softener installation in Tucson. 4-week learning, 20-min quick recharge, vacation mode. Eliminate hard water problems.' },
          { name: 'twitter:image', content: imageUrl },
        ]}
      />
      <GTM />
      <DNIInjector />
      <WaterSoftenersSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${waterSoftenerHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Brita PRO Water Softener Installation in Tucson, AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Smart Learning Technology | 20-Minute Quick Recharge | Vacation Mode | Eliminate Hard Water Problems | Free Water Testing
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Free Water Test"
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

        {/* Clean Water Tucson Partnership Section */}
        <section className="bg-blue-50 py-12 border-y border-blue-100">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <img 
                  src={cleanWaterTucsonLogo} 
                  alt="Clean Water Tucson Logo" 
                  className="h-24 md:h-32 w-auto"
                  data-testid="img-clean-water-tucson-logo"
                />
              </div>
              <div className="text-center md:text-left max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3" data-testid="heading-clean-water-partnership">
                  Proud Partner of Clean Water Tucson
                </h2>
                <p className="text-lg text-gray-700 mb-4" data-testid="text-partnership-description">
                  Intelligent Design has partnered with Clean Water Tucson to provide comprehensive water quality solutions for Tucson families. Together, we offer expert water testing, advanced filtration systems, and professional installation to ensure your family has access to clean, safe water.
                </p>
                <Button
                  variant="outline"
                  className="gap-2"
                  asChild
                >
                  <a 
                    href="https://cleanwatertucson.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-testid="link-clean-water-tucson"
                  >
                    Learn More About Clean Water Tucson
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Page Highlights Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              Why Choose Brita PRO Water Softeners from Intelligent Design?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Smart Learning Technology</p>
                  <p className="text-sm text-gray-600">4-week usage profiling | Optimized regeneration | Maximum efficiency | Never run out of soft water</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">20-Minute Quick Recharge</p>
                  <p className="text-sm text-gray-600">Emergency capacity restore | 33% in 20 minutes | Perfect for unexpected guests | Industry-leading technology</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Eliminate Hard Water Damage</p>
                  <p className="text-sm text-gray-600">No more scale buildup | Protect appliances | Softer skin & hair | Better soap performance</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Save Money on Utilities & Maintenance</p>
                  <p className="text-sm text-gray-600">$500-$800/year savings | Less soap usage | Fewer appliance repairs | Extended equipment life</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Vacation Mode with Auto-Flush</p>
                  <p className="text-sm text-gray-600">7-day automatic maintenance | Prevents stagnant water | Energy saving | Travel with confidence</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | Expert installation | 22,000+ reviews | Free water testing</p>
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
                Brita PRO Water Softener Installation in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Tucson's water supply contains high levels of dissolved minerals—primarily calcium and magnesium—that make our water "hard." With hardness levels typically ranging from 120-180 ppm (parts per million), Tucson water ranks as moderately to very hard. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've installed Brita PRO water softeners in thousands of Tucson homes since 1979, helping families eliminate hard water problems and protect their plumbing systems and appliances.
              </p>
              <p className="text-lg mb-6">
                Hard water creates numerous problems throughout your home. Mineral deposits build up inside pipes, water heaters, and appliances, reducing efficiency and causing premature failure. Scale accumulates on faucets, showerheads, and fixtures, creating unsightly white residue that's difficult to clean. Soap doesn't lather properly in hard water, requiring more detergent, shampoo, and cleaning products. Your skin and hair feel dry after showering because minerals prevent soap from rinsing completely. Dishes and glassware develop spots and film. Laundry becomes stiff and faded as minerals deposit in fabric fibers.
              </p>
              <p className="text-lg mb-8">
                A quality water softener solves all these problems by removing hardness minerals before they enter your home's plumbing system. Brita PRO water softeners use advanced ion exchange technology combined with smart learning features that optimize performance and efficiency. The result is soft water throughout your entire home—protecting your investment in appliances, reducing maintenance costs, improving cleaning effectiveness, and providing better water for bathing and cooking. Many Tucson homeowners see the water softener pay for itself within 3-5 years through reduced soap usage, fewer appliance repairs, and lower energy bills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Free Consultation"
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

        {/* Brita PRO Smart Features Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Brita PRO Smart Water Softener Technology
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                4-Week Learning Profile Technology
              </h3>
              <p className="text-lg mb-6">
                Unlike traditional water softeners that regenerate on a fixed schedule regardless of actual water usage, Brita PRO smart softeners feature advanced learning technology. During the first 4 weeks of operation, the system monitors your household's water consumption patterns—tracking when you use the most water, typical daily usage volumes, and peak demand periods. This creates a customized usage profile specific to your family's needs.
              </p>
              <p className="text-lg mb-6">
                Using this learned profile, the softener intelligently predicts when regeneration will be needed and schedules it for times when water demand is lowest (typically 2-3 AM). The system continuously updates the profile to accommodate seasonal changes, guests, or lifestyle shifts. This smart regeneration means you're never caught without soft water during high-demand periods, the system uses only the salt and water actually needed for regeneration, no salt or water is wasted on unnecessary regeneration cycles, and efficiency improves over time as the system refines its understanding of your usage.
              </p>
              <p className="text-lg mb-6">
                Traditional time-clock softeners regenerate every few days whether needed or not, wasting salt and water. Metered softeners regenerate based solely on volume, which can leave you without soft water if usage suddenly increases. Brita PRO's learning technology combines the best of both approaches with predictive intelligence that adapts to your actual needs.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                20-Minute Quick Recharge Feature
              </h3>
              <p className="text-lg mb-6">
                Even with smart learning technology, unexpected situations can arise—guests visiting, multiple people showering in succession, back-to-back loads of laundry, or filling a large hot tub. If you unexpectedly deplete your soft water capacity, Brita PRO's exclusive Quick Recharge feature can restore 33% of the system's capacity in just 20 minutes.
              </p>
              <p className="text-lg mb-6">
                This is a game-changing feature that sets Brita PRO apart from other water softeners. Traditional systems require 2-3 hours for a complete regeneration cycle, leaving you without soft water during that time. With Quick Recharge, you're only 20 minutes away from having soft water again. The system uses a concentrated brine solution and accelerated backwash cycle to rapidly restore partial capacity, enough to get you through until the next scheduled full regeneration.
              </p>
              <p className="text-lg mb-6">
                Quick Recharge is perfect for Tucson households that occasionally have high water demand—family gatherings, pool parties, or simply busy days when everyone needs showers at the same time. Simply activate Quick Recharge from the control panel, wait 20 minutes, and you're back to soft water. The system automatically schedules a full regeneration for later that night to completely restore capacity.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Vacation Mode with 7-Day Auto-Flush
              </h3>
              <p className="text-lg mb-8">
                When you're away from home for extended periods, your water softener doesn't need to operate. Brita PRO's vacation mode puts the system in standby, conserving salt and water while you're gone. Simply activate vacation mode before leaving—the system stops monitoring usage and won't perform unnecessary regeneration cycles.
              </p>
              <p className="text-lg mb-8">
                However, stagnant water sitting in the resin bed for weeks can cause problems. That's why Brita PRO includes a 7-day auto-flush feature. Every 7 days during vacation mode, the system automatically performs a brief flush cycle to circulate fresh water through the resin bed and prevent bacterial growth or mineral clumping. This maintains system health during your absence without wasting resources on full regeneration cycles. When you return home, simply deactivate vacation mode and the system immediately resumes normal operation with its learned usage profile.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Learn More About Smart Features"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How Water Softeners Work Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                How Water Softeners Work
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ion Exchange Technology
              </h3>
              <p className="text-lg mb-6">
                Water softeners use a process called ion exchange to remove hardness minerals from water. The softener contains a resin tank filled with thousands of tiny resin beads. These beads are coated with sodium ions through a process called "charging" the resin. As hard water flows through the resin tank, calcium and magnesium ions (the hardness minerals) are attracted to the resin beads. The sodium ions release from the beads and exchange places with the calcium and magnesium ions—hence "ion exchange."
              </p>
              <p className="text-lg mb-6">
                The softened water (now containing small amounts of sodium instead of calcium and magnesium) flows out to your home's plumbing system. The hardness minerals remain trapped on the resin beads until the regeneration cycle. This ion exchange process is instantaneous and doesn't require chemicals, heat, or energy once the system is installed and operational.
              </p>
              <p className="text-lg mb-6">
                One common question is whether the sodium in softened water is a health concern. For most people, it's not. The amount of sodium added to water through softening is minimal—roughly 12.5 mg per 8-ounce glass for water with 120 ppm hardness (typical for Tucson). By comparison, a slice of bread contains about 150 mg of sodium. People on sodium-restricted diets should consult their physician, but for the vast majority of homeowners, the sodium levels in softened water are not medically significant.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                The Regeneration Cycle
              </h3>
              <p className="text-lg mb-6">
                Eventually, the resin beads become saturated with calcium and magnesium and can no longer soften water effectively. At this point, the system must regenerate—a process that cleans the resin beads and restores their sodium coating. Regeneration typically occurs automatically in the middle of the night when water usage is minimal.
              </p>
              <p className="text-lg mb-6">
                During regeneration, the system performs several steps. First, backwash: water flows backward through the resin tank to flush out any sediment or debris. Next, brine draw: concentrated salt water (brine) is drawn from the brine tank and flows through the resin. The high concentration of sodium ions forces the calcium and magnesium ions off the resin beads, recharging them with sodium. Then, slow rinse: fresh water rinses the resin to remove excess brine. Finally, fast rinse: a high-flow rinse prepares the system for normal operation. The brine tank is then refilled with fresh water to dissolve more salt for the next regeneration cycle.
              </p>
              <p className="text-lg mb-6">
                This entire process takes 2-3 hours for traditional systems, or just 20 minutes for Brita PRO's Quick Recharge feature. The discharged brine water goes to your home's drain system—typically a floor drain or utility sink. Tucson's municipal wastewater treatment system handles this brine discharge without issues, though homeowners with septic systems should consult a septic professional about proper system sizing when adding a water softener.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                System Sizing & Capacity
              </h3>
              <p className="text-lg mb-8">
                Water softeners are sized based on two factors: water hardness level and daily water usage. A typical Tucson household of 4 people uses 300-400 gallons of water daily. With Tucson's average hardness of 150 ppm, this equals 1,800-2,400 grains of hardness per day (water hardness is measured in "grains" when sizing softeners—1 grain equals 17.1 ppm).
              </p>
              <p className="text-lg mb-8">
                A properly sized water softener should have enough capacity to handle 3-4 days of water usage between regeneration cycles. For the example above, you'd want a softener with 5,400-9,600 grains of capacity. We always size conservatively to ensure the system can handle peak usage periods without running out of capacity. Undersized softeners regenerate too frequently, wasting salt and water. Oversized softeners cost more upfront and can allow water to sit too long in the resin tank between regenerations. During our free water testing and consultation, we measure your actual water hardness, estimate household usage, and recommend the perfectly sized system for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Free Water Test: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Benefits of Water Softener Installation
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Protect Appliances & Plumbing
              </h3>
              <p className="text-lg mb-6">
                Hard water is the number one cause of premature water heater failure, dishwasher breakdowns, and washing machine repairs. Scale buildup inside these appliances reduces efficiency, increases energy consumption, and ultimately causes mechanical failure. Water heaters with scale buildup can use 25-30% more energy to heat water and may fail 3-5 years earlier than water heaters supplied with soft water.
              </p>
              <p className="text-lg mb-6">
                Scale also accumulates inside pipes, gradually reducing water pressure and flow. Over decades, severe scale buildup can completely block pipes, requiring expensive re-piping. Soft water prevents all this damage. Appliances and plumbing systems served by soft water last longer, operate more efficiently, and require fewer repairs. For many Tucson homeowners, the money saved on appliance repairs and early replacements alone justifies the water softener investment.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Reduce Soap & Detergent Usage
              </h3>
              <p className="text-lg mb-6">
                Hardness minerals interfere with soap's cleaning ability. In hard water, soap combines with calcium and magnesium to form insoluble "soap scum" rather than dissolving and creating lather. This means you need 2-3 times more soap, shampoo, detergent, and cleaning products to achieve the same results you'd get with soft water.
              </p>
              <p className="text-lg mb-6">
                With soft water, soap works as intended—a little goes a long way. You'll use less dish detergent, laundry detergent, hand soap, shampoo, body wash, and household cleaners. The typical Tucson family saves $200-$400 annually on soap and cleaning products after installing a water softener. Clothes come cleaner with less detergent, colors stay brighter, and fabrics last longer because there are no mineral deposits damaging fibers.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Softer Skin & Hair
              </h3>
              <p className="text-lg mb-6">
                Many Tucson residents experience dry, itchy skin and dull, brittle hair—conditions often caused or worsened by hard water. When you shower in hard water, minerals prevent soap and shampoo from rinsing completely. This leaves a residue on your skin and hair that causes dryness and irritation. The minerals themselves also strip away natural oils that keep skin and hair healthy.
              </p>
              <p className="text-lg mb-6">
                Soft water rinses cleanly, allowing soap to wash away completely. Your skin retains its natural moisture and oils, feeling softer and less irritated. Hair becomes shinier, more manageable, and less prone to breakage. Many people with eczema, psoriasis, or sensitive skin report significant improvement after switching to soft water. Even healthy skin and hair benefit from the gentle properties of soft water.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Cleaner Dishes & Glassware
              </h3>
              <p className="text-lg mb-6">
                Those cloudy spots and white film on dishes and glassware aren't from poor dishwasher performance—they're mineral deposits left behind when hard water evaporates. No amount of dishwasher detergent or rinse aid can completely prevent this spotting in hard water. Over time, the mineral deposits etch into glass surfaces, creating permanent cloudiness.
              </p>
              <p className="text-lg mb-8">
                Soft water eliminates spotting and filming. Dishes come out sparkling clean without spots. Glassware stays crystal clear. You'll use less dishwasher detergent and can often skip rinse aids entirely. Your dishwasher will also last longer and operate more efficiently without scale buildup on heating elements and spray arms.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Experience the Benefits"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Water Softener Installation
              </h2>
              <p className="text-lg mb-6">
                Proper installation is crucial for water softener performance and longevity. At Intelligent Design, our licensed plumbers have installed thousands of water softeners throughout Tucson since 1979. We handle every aspect of installation—from sizing and placement to plumbing connections and startup—ensuring your system operates flawlessly from day one.
              </p>
              <p className="text-lg mb-6">
                The installation process begins with a free water test to determine your exact hardness level and identify any other water quality issues. We test for hardness, iron, chlorine, pH, and other parameters that might affect system performance or indicate the need for additional treatment. Based on test results and your household size, we recommend the properly sized Brita PRO water softener for your needs.
              </p>
              <p className="text-lg mb-6">
                On installation day, we select the optimal location for your softener—typically in the garage, utility room, or outdoor utility area. The softener must be installed on the main water line after the water meter and pressure regulator but before the water heater and other fixtures. We install a dedicated cold water bypass (usually to outdoor hose bibs) so you can use hard water for irrigation and avoid wasting soft water outdoors.
              </p>
              <p className="text-lg mb-6">
                Our technicians make all necessary plumbing connections, install the drain line for regeneration discharge, set up the salt storage tank, program the control valve with your water hardness and household settings, and activate the learning mode. We test the entire system to ensure proper operation and walk you through the controls, salt-adding procedure, and basic maintenance requirements.
              </p>
              <p className="text-lg mb-8">
                Most installations are completed in 3-4 hours. You'll have soft water flowing throughout your home the same day. We provide complete documentation including warranty registration, operating instructions, maintenance schedules, and our contact information for any questions or service needs. We also offer annual maintenance plans to keep your water softener operating at peak efficiency for years to come.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section5">
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule Installation: (520) 333-2665
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
                Why Choose Intelligent Design for Water Softener Installation?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has served Tucson families since 1979. We're a family and veteran-owned business with over 45 years of experience providing honest, professional plumbing services. Our team includes licensed master plumbers who are extensively trained on Brita PRO water treatment systems and understand the unique challenges of Tucson's hard water.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on quality workmanship, transparent pricing, and exceptional customer service. When you choose Intelligent Design for your water softener installation, you're getting free professional water testing and analysis, expert system sizing based on your specific needs, professional installation by licensed plumbers, comprehensive warranty coverage on equipment and labor, ongoing support and maintenance services, and a team that stands behind every installation.
              </p>
              <p className="text-lg mb-6">
                We exclusively install Brita PRO water softeners because they represent the best combination of reliability, efficiency, and advanced features available. The smart learning technology, 20-minute Quick Recharge, and vacation mode set Brita PRO apart from traditional water softeners. Combined with professional installation and our decades of service experience, you're getting a complete water softening solution that will protect your home and improve water quality for years to come.
              </p>
              <p className="text-lg mb-8">
                As a full-service plumbing company, we can also address comprehensive water quality concerns. If water testing reveals issues beyond hardness—such as chlorine, chloramines, lead, PFAS, or other contaminants—we can design a complete water treatment system combining Brita PRO softening and filtration. This whole-house approach ensures every drop of water in your home is not just soft, but also clean, safe, and great-tasting.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Get Started Today"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section6"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={waterSoftenerCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={waterSoftenersFAQs.faqs} />

        {/* Business Information Section (NAP) */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Free Water Test Today
              </h2>
              <div className="bg-card p-8 rounded-lg border text-center">
                <h3 className="text-2xl font-bold mb-4" data-testid="text-business-name">
                  Intelligent Design Air Conditioning, Plumbing, Solar, & Electric
                </h3>
                <div className="space-y-2 text-lg mb-6">
                  <p data-testid="text-address-line1">1145 E Fort Lowell Rd</p>
                  <p data-testid="text-address-line2">Tucson, AZ 85719</p>
                  <p className="text-xl font-bold text-primary" data-testid="text-phone">(520) 333-2665</p>
                  <p className="font-semibold" data-testid="text-hours">Licensed, Bonded & Insured AZ ROC 340962,  ROC 322375, ROC 296386, ROC 276673</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Service Areas:</h4>
                  <p className="text-base">
                    Tucson, Marana, Oro Valley, Sahuarita, Vail, Green Valley, Catalina, Casas Adobes, Flowing Wells, Tanque Verde, Corona de Tucson, Drexel Heights, and all surrounding areas.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Free Water Test"
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