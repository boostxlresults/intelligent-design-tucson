import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import HomeEnergyAuditSchema from '@/components/HomeEnergyAuditSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { CommonQuestions } from '@/components/CommonQuestions';
import { homeEnergyAuditFAQs } from '@/data/faqs/hvac';
import { energyAuditCommonQuestions } from '@/data/commonQuestions/hvac';
import energyAuditHero from '@assets/generated_images/Home_energy_audit_consultation_c5abfdea.webp';
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";

export default function HomeEnergyAudit() {
  const description = 'Professional home energy audits in Tucson. Identify savings opportunities, optimize efficiency, solar readiness assessment. Reduce bills and qualify for incentives. Call (520) 333-2665.';
  const imageUrl = `${SITE_URL}${energyAuditHero}`;

  return (
    <>
      <GTM />
      <DNIInjector />
      <HomeEnergyAuditSchema />
      
      <MetaHead
        title="Home Energy Audit Tucson AZ | Energy Efficiency Assessment & Solar Consultation"
        description={description}
        canonical="https://www.idesignac.com/home-energy-audit-tucson"
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Home Energy Audit Tucson AZ | Energy Efficiency Assessment & Solar Consultation' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: 'https://www.idesignac.com/home-energy-audit-tucson' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional home energy audit consultation in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Home Energy Audit Tucson AZ | Energy Efficiency Assessment & Solar Consultation' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional home energy audit consultation in Tucson' }
        ]}
      />
      
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${energyAuditHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Home Energy Audit Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Comprehensive Energy Assessment | Identify Savings Opportunities | Solar Readiness Analysis | HVAC Efficiency Testing | 45+ Years Experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Free Audit"
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
              Why Choose Intelligent Design for Home Energy Audits?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Assessment</p>
                  <p className="text-sm text-gray-600">HVAC efficiency testing | Insulation analysis | Air leakage detection | Appliance evaluation</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Advanced Testing Equipment</p>
                  <p className="text-sm text-gray-600">Thermal imaging cameras | Blower door testing | Energy monitors | Professional diagnostics</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Solar Readiness Evaluation</p>
                  <p className="text-sm text-gray-600">Roof assessment | Consumption analysis | System sizing | Financial projections</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Detailed Savings Recommendations</p>
                  <p className="text-sm text-gray-600">Prioritized improvements | Cost-benefit analysis | ROI calculations | Implementation roadmap</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Expertise</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Desert climate specialists | Trusted since 1979</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Solutions Provider</p>
                  <p className="text-sm text-gray-600">HVAC upgrades | Solar installation | Efficiency improvements | One-stop service</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Home Energy Audits in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Tucson's extreme climate creates unique energy challenges for homeowners. Summers averaging 100+ degrees strain cooling systems while mild winters reduce heating costs. Desert temperature swings, intense UV exposure, and monsoon humidity all impact home energy efficiency. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we provide comprehensive home energy audits specifically designed for Tucson's climate, helping homeowners identify inefficiencies, reduce utility bills, and prepare for solar installation since 1979.
              </p>
              <p className="text-lg mb-6">
                A professional energy audit is far more than a visual inspection. We use advanced diagnostic equipment including thermal imaging cameras revealing hidden air leaks and insulation gaps, blower door testing measuring whole-house air tightness, energy monitoring equipment tracking real-time consumption, and infrared thermography identifying temperature variations. Our certified energy auditors analyze every aspect of your home's energy use from HVAC efficiency to lighting, appliances, insulation, windows, and air sealing. The result is a detailed report identifying specific improvements with projected costs and savings.
              </p>
              <p className="text-lg mb-8">
                Most Tucson homes can reduce energy consumption by 20-40% through strategic efficiency improvements. Average households spending $2,000-$3,000 annually on electricity can save $400-$1,200 per year through audit-recommended upgrades. Energy audits also prepare homes for solar installation by optimizing efficiency first, ensuring you size solar systems based on reduced consumption rather than wasteful current usage. This approach maximizes solar ROI and may reduce required system size by 20-30%, saving thousands in installation costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Energy Audit"
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

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Home Energy Audit Process
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pre-Audit Preparation and Utility Analysis
              </h3>
              <p className="text-lg mb-6">
                Effective energy audits begin before we arrive at your home. We request 12 months of utility bills to analyze consumption patterns, identify seasonal variations, and establish baseline energy use. Tucson homes typically show 40-60% higher summer consumption due to air conditioning, with patterns revealing whether your home is well-insulated or losing conditioned air. We compare your usage to similar-sized homes in your neighborhood to identify if consumption is above, below, or average for your home type and size.
              </p>
              <p className="text-lg mb-6">
                We ask homeowners to complete pre-audit questionnaires covering home age, square footage, insulation type and depth, HVAC system age and type, window types, and recent upgrades or improvements. This information helps us understand your home's construction and prioritize audit activities. We also request occupancy patterns—when family members are home, thermostat settings, and any areas with comfort problems. Understanding how you use your home ensures recommendations match your lifestyle and priorities while maximizing energy savings.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Comprehensive Home Inspection
              </h3>
              <p className="text-lg mb-6">
                Our on-site audit systematically examines every energy-using system in your home. We inspect attic, wall, and floor insulation measuring depth and R-value, evaluate insulation condition and coverage, identify missing or damaged areas, and check for proper air sealing around penetrations. Tucson's extreme heat makes adequate attic insulation critical—we recommend R-38 to R-49 insulation in Tucson attics, but many homes have R-19 or less. Upgrading insulation can reduce cooling costs by 15-25%.
              </p>
              <p className="text-lg mb-6">
                We evaluate HVAC system efficiency, age, and condition through visual inspection, filter cleanliness, thermostat operation, ductwork condition and leakage, refrigerant charge (if accessible), and airflow measurement. Poorly maintained or outdated HVAC systems waste enormous energy in Tucson's climate. Systems over 15 years old often operate at 50-60% of their original efficiency. Duct leakage alone causes 20-30% energy loss in many homes. We identify opportunities for HVAC upgrades, duct sealing, and system right-sizing that dramatically reduce energy consumption.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Advanced Diagnostic Testing
              </h3>
              <p className="text-lg mb-6">
                Thermal imaging cameras reveal heat patterns invisible to the naked eye. We scan exterior and interior walls identifying insulation voids, air leakage paths, moisture intrusion, thermal bridging through framing, and ductwork heat loss. Thermal imaging pinpoints exactly where homes lose conditioned air, allowing targeted improvements rather than guesswork. Common findings include uninsulated areas around windows and doors, missing insulation in knee walls, and severe duct leakage in unconditioned attics.
              </p>
              <p className="text-lg mb-6">
                Blower door testing measures whole-house air tightness by creating negative pressure and measuring airflow required to maintain that pressure. Results quantify exactly how leaky your home is compared to energy efficiency standards. We identify major leakage points during testing and can estimate potential savings from air sealing improvements. Typical Tucson homes built before 2000 are 30-50% leakier than modern energy codes require. Air sealing improvements can reduce cooling costs by 10-20% while improving comfort and indoor air quality.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Appliance and Lighting Assessment
              </h3>
              <p className="text-lg mb-6">
                We inventory all major appliances noting age, type, and estimated efficiency. Old refrigerators, water heaters, pool pumps, and appliances can consume 2-3 times more electricity than modern efficient models. We identify appliances nearing end-of-life where upgrades provide immediate energy savings and improved reliability. Water heater evaluation is particularly important in Tucson where traditional tank heaters work harder in desert heat. Heat pump water heaters or tankless units can reduce water heating costs by 50-70%.
              </p>
              <p className="text-lg mb-8">
                Lighting accounts for 10-15% of home electricity use. We assess current lighting technologies and recommend LED upgrades where appropriate. Modern LED bulbs use 75-80% less energy than incandescent bulbs while lasting 25 times longer. A complete home LED conversion typically costs $200-$400 and saves $150-$300 annually on electricity—paying for itself within 18-24 months. We also evaluate opportunities for daylighting, outdoor lighting controls, and smart lighting systems that further reduce consumption.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Solar Readiness Evaluation
              </h3>
              <p className="text-lg mb-6">
                For homeowners interested in solar energy, our audit includes detailed solar readiness assessment. We evaluate roof age, condition, and remaining useful life (installing solar on roofs needing replacement within 5-10 years is poor timing). We assess roof orientation and pitch—south-facing roofs are optimal in Tucson but west and east orientations work well. We measure available unshaded roof area and identify any obstacles requiring panel placement adjustments. We analyze shading from trees, buildings, or structures throughout the year.
              </p>
              <p className="text-lg mb-8">
                Solar system sizing recommendations consider your current consumption, planned efficiency improvements, and future usage changes (electric vehicles, pool additions, home expansions). We provide preliminary system size estimates, production projections, cost ranges, and financial analysis including tax credits and payback periods. This solar evaluation ensures homeowners understand their options and can plan strategically—implementing efficiency improvements first, then sizing solar appropriately based on reduced consumption.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Get Free Audit Quote"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section2">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Detailed Audit Report and Recommendations
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Comprehensive Energy Assessment Report
              </h3>
              <p className="text-lg mb-6">
                Following your home energy audit, we provide a detailed written report documenting all findings, testing results, and recommendations. The report includes current energy usage analysis, thermal imaging photos showing problem areas, blower door test results and air leakage quantification, insulation assessments, HVAC system evaluation, appliance efficiency ratings, and solar readiness evaluation. Reports also include photos and diagrams helping homeowners visualize problems and understand recommended improvements.
              </p>
              <p className="text-lg mb-6">
                Each recommendation includes detailed cost estimates, projected annual savings, simple payback periods, and priority ranking. We categorize improvements as high-priority (quick payback, major savings), medium-priority (moderate payback, significant savings), and low-priority (longer payback, comfort/maintenance benefits). This prioritization helps homeowners make informed decisions about which improvements to implement first, creating a phased implementation plan matching budget and priorities.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Common Efficiency Improvements for Tucson Homes
              </h3>
              <p className="text-lg mb-6">
                Typical efficiency improvements recommended for Tucson homes include HVAC system upgrades to high-efficiency units (15+ SEER), attic insulation upgrades to R-38 or R-49, air sealing of leaks around windows, doors, and penetrations, duct sealing and insulation improvements, smart thermostat installation, heat pump water heater upgrades, LED lighting conversion, window shading or tinting for solar heat control, and programmable pool pump timers. These improvements collectively reduce energy consumption by 25-45% for most homes.
              </p>
              <p className="text-lg mb-6">
                ROI varies by improvement type. Air sealing and insulation often provide 2-4 year paybacks with minimal investment. HVAC upgrades have 7-12 year paybacks but provide immediate comfort improvements and reliability. LED lighting pays back within 2 years. Smart thermostats pay back within 1-2 years while improving convenience. We help homeowners prioritize based on budget, home condition, and personal preferences—creating customized implementation plans delivering maximum savings and comfort.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Implementation Support and Follow-Up
              </h3>
              <p className="text-lg mb-6">
                Unlike standalone energy auditors, Intelligent Design provides complete implementation services for recommended improvements. We install HVAC systems, perform duct sealing, upgrade insulation, install smart thermostats, replace water heaters, and install solar systems. This single-source approach ensures audit recommendations are properly implemented and eliminates coordination challenges working with multiple contractors.
              </p>
              <p className="text-lg mb-8">
                We provide detailed proposals for recommended work including equipment specifications, installation scope, warranties, and financing options. After improvements are completed, we can perform follow-up testing verifying energy savings and system performance. This closed-loop approach ensures audit investments deliver promised savings and comfort improvements. Many homeowners implement improvements in phases over 1-3 years, progressively reducing energy consumption and preparing for solar installation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Consultation"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section3"
                />
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Benefits of Home Energy Audits for Tucson Homeowners
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Reduce Utility Bills 25-40%
              </h3>
              <p className="text-lg mb-6">
                Professional energy audits identify specific improvements reducing electricity costs by 25-40% for typical Tucson homes. Households spending $2,500 annually on electricity can save $625-$1,000 per year through audit-recommended upgrades. These savings compound over years—a homeowner saving $750 annually over 20 years keeps $15,000 that would otherwise go to utility companies. Even better, many improvements qualify for utility rebates and tax credits reducing upfront costs.
              </p>
              <p className="text-lg mb-6">
                Tucson Electric Power and Sulphur Springs Valley Electric offer rebates for energy efficiency improvements including HVAC upgrades, insulation, water heaters, and more. Federal tax credits are available for qualifying HVAC systems, insulation, and solar installations. These incentives can reduce efficiency upgrade costs by 20-40%, improving payback periods and ROI. We help homeowners identify and apply for all available incentives, maximizing financial benefits of efficiency improvements.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Improve Home Comfort
              </h3>
              <p className="text-lg mb-6">
                Energy audits identify comfort problems caused by inadequate insulation, air leakage, or HVAC deficiencies. Common complaints include rooms that are too hot or cold, difficulty maintaining consistent temperatures, excessive dust accumulation, and high humidity during monsoons. Audit-recommended improvements address root causes rather than symptoms. Better insulation and air sealing create more uniform temperatures throughout homes. Right-sized HVAC systems maintain comfort more effectively than oversized equipment cycling on and off.
              </p>
              <p className="text-lg mb-8">
                Improved comfort means more enjoyment of your home and better sleep quality. Eliminating hot spots, cold drafts, and temperature swings creates healthier living environments. Better air sealing reduces dust infiltration and allergen entry. Properly sized and maintained HVAC systems control humidity more effectively, preventing mold growth and improving air quality. These comfort and health benefits complement energy savings, making efficiency improvements valuable on multiple levels.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Start Saving Energy"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section4">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={energyAuditCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={homeEnergyAuditFAQs.faqs} />

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Start Saving Energy and Money Today
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Discover how much you can save with a professional home energy audit from Intelligent Design. Our comprehensive assessments identify efficiency opportunities and prepare your Tucson home for maximum comfort and savings.
              </p>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Serving Tucson and Surrounding Areas
                </h3>
                <p className="text-lg text-gray-600 mb-2">
                  Tucson • Oro Valley • Marana • Green Valley • Sahuarita • Vail • Catalina Foothills
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Intelligent Design Air Conditioning, Plumbing, Solar, & Electric
                </h3>
                <p className="text-lg text-gray-700 mb-2">
                  1145 E Fort Lowell Rd, Tucson, AZ 85719
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Phone: <a href="tel:+15203332665" className="text-blue-600 hover:underline" data-testid="link-phone-nap">(520) 333-2665</a>
                </p>
                <p className="text-lg text-gray-700">
                  Available 24/7 for Consultations
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Free Audit Now"
                  variant="destructive"
                  size="lg"
                  data-testid="button-schedule-bottom"
                />
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-bottom">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (520) 333-2665
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