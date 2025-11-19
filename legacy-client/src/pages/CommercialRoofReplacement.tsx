import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceFAQ from '@/components/ServiceFAQ';
import { commercialRoofReplacementFAQs } from '@/data/faqs/roofing';
import { CommonQuestions } from "@/components/CommonQuestions";
import { commercialRoofingCommonQuestions } from "@/data/commonQuestions/roofing";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import CommercialRoofReplacementSchema from '@/components/CommercialRoofReplacementSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import roofReplacementHero from '@assets/generated_images/commercial_roof_replacement_project_7e6d1a3c.webp';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';

export default function CommercialRoofReplacement() {
  const description = 'Complete commercial roof replacement in Tucson. TPO, EPDM, modified bitumen systems. Minimal downtime, project management, warranties. Call (520) 333-2665 for free assessment.';
  const imageUrl = `${SITE_URL}${roofReplacementHero}`;

  return (
    <>
      <MetaHead
        title="Commercial Roof Replacement Tucson AZ | Complete Business Roof Replacement"
        description={description}
        canonical={`${SITE_URL}/commercial-roof-replacement-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Commercial Roof Replacement Tucson AZ | Complete Business Roof Replacement' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/commercial-roof-replacement-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Commercial roof replacement project in progress in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Commercial Roof Replacement Tucson AZ | Complete Business Roof Replacement' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl }
        ]}
      />
      <GTM />
      <DNIInjector />
      <CommercialRoofReplacementSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${roofReplacementHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Commercial Roof Replacement Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Complete Roof Replacement | TPO, EPDM & Modified Bitumen | Minimal Downtime | Energy Savings | 45+ Years Experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Assessment"
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
              Why Choose Intelligent Design for Commercial Roof Replacement?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Project Management</p>
                  <p className="text-sm text-gray-600">Permitting & inspections | Detailed scheduling | Minimal downtime | Professional coordination</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Energy-Efficient Systems</p>
                  <p className="text-sm text-gray-600">Cool roof technology | Reduce cooling costs 15-30% | Utility rebates | Tax incentives</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Premium Materials & Warranties</p>
                  <p className="text-sm text-gray-600">Top-tier membranes | 20-30 year warranties | Manufacturer certified | Quality guaranteed</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Licensed & insured | Trusted since 1979</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Flexible Financing Options</p>
                  <p className="text-sm text-gray-600">Business financing available | Competitive rates | Payment plans | Lease options</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Safety Program</p>
                  <p className="text-sm text-gray-600">OSHA compliant | Worker protection | Liability coverage | Site safety management</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Complete Commercial Roof Replacement in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Commercial roof replacement is a significant investment that protects your building, business operations, and property value for decades. Unlike residential roofing, commercial replacement involves complex logistics, specialized systems, permit requirements, and coordination to minimize business disruption. When your commercial roof reaches the end of its service life, shows extensive deterioration, or requires frequent costly repairs, complete replacement becomes the most economical long-term solution. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've replaced thousands of commercial roofs throughout Tucson since 1979, delivering quality installations with minimal operational impact.
              </p>
              <p className="text-lg mb-6">
                Tucson's extreme climate accelerates commercial roof aging and creates unique replacement challenges. Our intense UV radiation—among the nation's highest—degrades roofing membranes faster than most climates, typically reducing expected service life by 20-30%. Daily temperature swings of 40°F or more create thermal stress that cracks membranes and splits seams. Monsoon storms with brief but powerful winds test membrane attachment and can expose weaknesses in aging roofs. Summer heat exceeding 110°F for extended periods accelerates deterioration of all roofing components. These factors make timely replacement critical—waiting too long risks interior damage, business interruption, and emergency situations that cost far more than planned replacement.
              </p>
              <p className="text-lg mb-8">
                Our commercial roof replacement service includes comprehensive assessment of existing roof condition and building structure, honest evaluation of replacement versus repair economics, detailed proposals with all costs and financing options, complete permitting and inspection coordination, professional project management minimizing downtime, quality installation by experienced certified crews, thorough cleanup and disposal of old roofing, final inspection and warranty documentation, and optional maintenance programs protecting your investment. We specialize in occupied building replacement—working around business operations through careful scheduling, phased installation, and communication. Your business continuity, building protection, and long-term satisfaction are our priorities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Assessment"
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
                Signs Your Commercial Roof Needs Replacement
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Age & Service Life Considerations
              </h3>
              <p className="text-lg mb-6">
                Commercial roof age is the primary indicator for replacement planning. Most Tucson commercial roofs approach end of serviceable life at: TPO roofing 18-25 years, EPDM roofing 20-30 years, modified bitumen 15-22 years, built-up roofing 20-30 years, and metal roofing installed by professional metal roofers using 22-24-26 gauge materials 25-40 years. Tucson's harsh UV exposure typically reduces these timeframes by 3-5 years compared to milder climates. Even well-maintained roofs deteriorate over time—UV breaks down polymers, thermal cycling causes material fatigue, and weathering degrades protective layers. Proactive replacement before catastrophic failure prevents interior damage, business disruption, and emergency replacement costs that far exceed planned replacement expenses.
              </p>
              <p className="text-lg mb-6">
                Beyond age, specific deterioration signs indicate replacement need regardless of roof age. Widespread membrane cracking, splitting, or brittleness indicates material has lost flexibility and weather resistance. Multiple leak areas despite repairs suggest systemic failure rather than isolated damage. Seam failures across numerous locations indicate membrane shrinkage or attachment failure. Extensive blistering or delamination shows moisture infiltration into roofing layers. Widespread ponding water from inadequate drainage or roof deflection accelerates deterioration. Wet or deteriorated insulation reduces thermal performance and indicates need for complete system replacement.
              </p>
              <p className="text-lg mb-6">
                Economic factors also drive replacement decisions. When cumulative repair costs over 2-3 years exceed 40% of replacement cost, replacement becomes more economical than continued repairs. Frequent emergency repairs disrupt operations and indicate systemic problems. High energy costs from poor roof insulation or reflectivity may justify replacement purely for energy savings—15-30% cooling cost reduction pays for new roof over 8-12 years in Tucson. Property value considerations matter too—buildings with old failing roofs are harder to sell or lease, and new roofs significantly improve property marketability and tenant satisfaction.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Physical & Structural Warning Signs
              </h3>
              <p className="text-lg mb-6">
                Interior water damage is the most obvious replacement indicator. Multiple leak locations, recurring leaks despite repairs, staining on ceilings or walls, mold growth from chronic moisture, and damaged inventory or equipment from leaks all indicate roof failure. Interior damage costs often exceed roof replacement costs—making proactive replacement before extensive interior damage far more economical. Visible exterior damage signals advanced deterioration: large areas of exposed membrane substrate, missing or detached membrane sections, failed flashing at numerous locations, deteriorated parapet caps and coping, rusted or corroded metal components, and sagging or deflected roof areas suggesting structural issues.
              </p>
              <p className="text-lg mb-8">
                Drainage problems compound other issues and indicate potential replacement need. Clogged drains and scuppers from deteriorated roof materials, inadequate drainage capacity for monsoon rainfall, ponding water across large roof areas, failed or deteriorated drainage components, and negative slope areas from building settlement or roof deflection all suggest systematic problems. While drainage improvements can sometimes extend roof life, extensive drainage issues combined with aged membranes typically warrant complete replacement including drainage system upgrades and tapered insulation to ensure proper slope.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Get Free Assessment"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Commercial Roof Replacement Process
              </h2>
              <p className="text-lg mb-6">
                Professional commercial roof replacement follows a systematic process ensuring quality results with minimal business disruption. Initial assessment includes comprehensive roof inspection documenting all damage and deterioration, infrared thermography detecting hidden moisture in insulation, core samples evaluating substrate and insulation condition, structural evaluation assessing deck and support adequacy, and measurement for accurate material estimation. We evaluate your building's specific needs—desired roof lifespan, energy efficiency goals, budget parameters, aesthetic requirements, and operational constraints—to recommend the optimal replacement system and approach.
              </p>
              <p className="text-lg mb-6">
                Project planning and preparation includes detailed written proposals outlining all work, materials, costs, and timeline; building permit acquisition and engineering when required; material procurement and delivery coordination; crew scheduling and equipment arrangement; and coordination with property managers and tenants for access and operational needs. We develop phased schedules for occupied buildings, weather-contingent timelines accounting for monsoon season, and communication protocols providing regular project updates. Pre-construction meetings address safety requirements, site logistics, noise mitigation, and protection of building operations.
              </p>
              <p className="text-lg mb-8">
                Replacement execution includes complete tear-off of existing roofing materials to substrate (or installation over existing roof when appropriate), substrate inspection and repair of damaged decking or structure, installation of new insulation to specified R-value with proper tapers for drainage, membrane installation following manufacturer specifications and best practices, flashing installation at all penetrations, walls, and equipment, drainage system installation or upgrades including drains, scuppers, and gutters, roof-mounted equipment curb installation with proper flashing details, and quality control inspection throughout installation. Final project closeout includes thorough site cleanup and debris disposal, final building inspection approval, warranty documentation and manufacturer registration, as-built drawings and maintenance recommendations, and optional maintenance program enrollment. We ensure you understand your new roof system and how to maintain it for maximum longevity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Start Your Project: (520) 333-2665
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
                Minimizing Business Disruption During Replacement
              </h2>
              <p className="text-lg mb-6">
                Occupied building roof replacement requires careful planning to minimize operational impact while maintaining quality installation. Our approach begins with comprehensive pre-construction planning—detailed communication with building management, tenant notification and coordination, identification of sensitive operations or equipment, schedule development around business critical times, and contingency planning for weather delays. We work with you to identify optimal timing—seasonal considerations, business cycle patterns, scheduled shutdowns or low-activity periods, and tenant turnover opportunities for vacant space replacement.
              </p>
              <p className="text-lg mb-6">
                Phased replacement allows portions of building to remain fully operational while work proceeds on other sections. We divide large roofs into manageable phases—typically 5,000-10,000 square feet—completing each phase fully before beginning the next. This maintains watertight protection across the building, limits noise and disruption to specific areas at any time, allows building access throughout replacement, and extends overall project duration but dramatically reduces operational impact. For buildings with extremely sensitive operations, weekend or off-hours replacement can be scheduled—higher labor costs but zero business-hour disruption.
              </p>
              <p className="text-lg mb-8">
                Protective measures during replacement include complete tarping and protection during tear-off phases, dust and debris containment using barriers and daily cleanup, noise mitigation scheduling loudest work during optimal times, vibration control to protect sensitive equipment, maintained access to all building entries and parking, and continuous communication with building management regarding daily work areas and any issues. We assign dedicated project managers providing single-point contact, daily progress updates, immediate issue resolution, and coordination with your team. Our goal is completing high-quality replacement that protects your building for decades while maintaining business operations throughout the process.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Discuss Your Project"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Maximizing Energy Efficiency & ROI
              </h2>
              <p className="text-lg mb-6">
                Commercial roof replacement offers exceptional opportunities for energy efficiency improvements delivering substantial long-term cost savings in Tucson's climate. Cool roof technology—highly reflective white TPO or PVC membranes—reflects 75-85% of solar radiation reducing roof surface temperatures from 160-180°F (dark roofs) to 110-130°F (cool roofs). This dramatic temperature reduction decreases heat transfer into buildings, lowers cooling loads significantly, reduces HVAC equipment runtime and wear, and improves interior comfort. Typical Tucson commercial buildings see cooling cost reductions of 15-30% after cool roof replacement—annual savings of $5,000-$20,000+ for medium to large buildings.
              </p>
              <p className="text-lg mb-6">
                Insulation upgrades during replacement dramatically improve building thermal performance. Older commercial roofs often have minimal insulation (R-5 to R-10) or wet deteriorated insulation providing no thermal benefit. New polyisocyanurate insulation in R-values from R-20 to R-35+ reduces heat transfer in both directions—keeping heat out in summer and retaining conditioned air year-round. Higher R-values provide incremental benefits—R-30 versus R-20 typically adds $0.50-$1.00 per square foot but pays for itself through energy savings in 3-5 years. Tapered insulation systems create positive drainage directing water to drains while providing superior insulation—solving drainage problems while maximizing energy performance.
              </p>
              <p className="text-lg mb-8">
                Financial incentives improve replacement ROI. Tucson Electric Power and Southwest Gas offer commercial rebates for cool roof installations and increased insulation—typically $0.10-$0.50 per square foot. Federal tax deductions under Section 179D allow immediate expensing of energy-efficient building improvements including roofing—potentially $1.80+ per square foot in tax benefits. We help businesses navigate available incentives providing necessary documentation and certifications. Total replacement costs are often offset 10-25% through combined rebates and tax benefits. When evaluating proposals, we calculate comprehensive lifecycle costs including installation costs, energy savings potential, maintenance costs, expected service life, and available incentives—helping you make informed decisions maximizing building performance and financial return.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section5">
                    <Phone className="w-5 h-5 mr-2" />
                    Calculate Savings: (520) 333-2665
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
                Why Choose Intelligent Design for Commercial Roof Replacement?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has replaced commercial roofs throughout Tucson since 1979. We're a family and veteran-owned company with over 45 years of commercial roofing experience and comprehensive understanding of Tucson's climate challenges, commercial building requirements, and business operational needs. Our ROC-licensed contractors are manufacturer-certified installers for all major roofing systems—GAF, Firestone, Johns Manville, Carlisle—ensuring installations meet specifications for comprehensive warranty coverage.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on quality installations, professional project management, and exceptional customer service. When you choose Intelligent Design for commercial roof replacement, you receive: comprehensive roof assessment and honest recommendations, detailed proposals with transparent all-inclusive pricing, complete permitting and inspection coordination, professional project management minimizing business disruption, quality installation by experienced certified crews, comprehensive safety program protecting workers and property, thorough cleanup and old material disposal, final inspection and complete warranty documentation, and optional maintenance programs protecting your investment for decades.
              </p>
              <p className="text-lg mb-8">
                We specialize in occupied building replacement—our project managers have extensive experience coordinating commercial work around business operations, communicating with tenants and property managers, and completing quality installations with minimal disruption. We maintain comprehensive liability and workers compensation insurance protecting you throughout installation. Our safety program ensures OSHA compliance and protects your building and business. Our relationships with leading manufacturers provide access to premium products, technical support, extended warranty options, and competitive pricing. Your building's protection, your business continuity, and your long-term satisfaction are our priorities.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Request Proposal"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section6"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={commercialRoofingCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={commercialRoofReplacementFAQs.faqs} />

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Commercial Roof Replacement Today
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
                    triggerText="Get Your Assessment"
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