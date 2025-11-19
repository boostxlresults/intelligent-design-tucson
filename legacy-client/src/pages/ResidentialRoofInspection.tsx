import { useEffect } from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceFAQ from '@/components/ServiceFAQ';
import { residentialRoofInspectionFAQs } from '@/data/faqs/roofing';
import { CommonQuestions } from "@/components/CommonQuestions";
import { roofInspectionCommonQuestions } from "@/data/commonQuestions/roofing";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import ResidentialRoofInspectionSchema from '@/components/ResidentialRoofInspectionSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import roofInspectionHero from '@assets/generated_images/residential_roof_inspection_professional_3249793e.webp';

export default function ResidentialRoofInspection() {
  const description = 'Professional residential roof inspections in Tucson. Pre-purchase inspections, maintenance inspections, detailed reports & preventative care. Call (520) 333-2665 for expert roof inspection services.';
  const imageUrl = `${SITE_URL}${roofInspectionHero}`;
  
  useEffect(() => {
    return () => {
      document.querySelectorAll('script[data-schema]').forEach(el => el.remove());
    };
  }, []);

  return (
    <>
      <MetaHead
        title="Residential Roof Inspection Tucson AZ | Professional Home Roof Inspections"
        description={description}
        canonical={`${SITE_URL}/residential-roof-inspection-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Residential Roof Inspection Tucson AZ | Professional Home Roof Inspections' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/residential-roof-inspection-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional residential roof inspector conducting detailed inspection on Tucson home' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Residential Roof Inspection Tucson AZ | Professional Home Roof Inspections' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional residential roof inspector conducting detailed inspection on Tucson home' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <ResidentialRoofInspectionSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${roofInspectionHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Residential Roof Inspection Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Professional Inspections | Pre-Purchase Reports | Maintenance Inspections | Storm Damage Assessment | Free Inspection with Repairs
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Roof Inspection"
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
              Why Choose Intelligent Design for Residential Roof Inspection?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Inspection Process</p>
                  <p className="text-sm text-gray-600">Complete roof surface exam | Attic inspection | Photo documentation | Detailed written reports</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Certified Roof Inspectors</p>
                  <p className="text-sm text-gray-600">45+ years experience | All roof types | Licensed professionals | Insurance approved</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Detailed Reports & Estimates</p>
                  <p className="text-sm text-gray-600">Photo evidence | Condition ratings | Repair priorities | Cost estimates | Remaining life assessment</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Free Inspections Available</p>
                  <p className="text-sm text-gray-600">Free with repairs | Free insurance claims | Free storm damage | Competitive inspection pricing</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">All Tucson Roof Types</p>
                  <p className="text-sm text-gray-600">Tile, shingle, flat, metal roofs | Desert climate expertise | Monsoon damage assessment</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Honest Recommendations</p>
                  <p className="text-sm text-gray-600">No unnecessary repairs | Repair vs replace guidance | Priority-based recommendations | Budget-conscious</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Expert Residential Roof Inspection in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Your home's roof is a critical investment requiring regular professional inspection to maintain its integrity and maximize its lifespan. Tucson's extreme desert climate—intense UV radiation, severe thermal cycling, monsoon storms, and damaging winds—creates unique roofing challenges that accelerate wear and cause unexpected failures. Regular professional roof inspections identify problems in early stages when repairs are minor and affordable, preventing small issues from becoming expensive emergencies that threaten your home's interior and belongings.
              </p>
              <p className="text-lg mb-6">
                At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've conducted thousands of professional residential roof inspections throughout greater Tucson since 1979. Our certified inspectors understand the specific failure modes and aging patterns of all roofing materials in Tucson's challenging climate. We inspect tile roofs, shingle roofs, flat roofs, metal roofs, and specialty roofing systems, identifying current damage, potential problems, and opportunities for preventative maintenance that extends roof life and protects your investment.
              </p>
              <p className="text-lg mb-8">
                Whether you need a pre-purchase inspection before buying a home, a maintenance inspection to assess current roof condition, a post-storm inspection after monsoon damage, or an insurance claim inspection following wind or hail events, we provide comprehensive, honest assessments backed by detailed photo documentation and clear written reports. Our inspections give you the information needed to make informed decisions about roof repairs, maintenance timing, or replacement planning—protecting both your home and your budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Book Inspection Now"
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
                Types of Residential Roof Inspections
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pre-Purchase Home Inspections
              </h3>
              <p className="text-lg mb-6">
                Pre-purchase roof inspections are essential when buying any Tucson home. The roof represents one of the largest expense items in home ownership—replacement costs range from $10,000 to $40,000+ depending on size, materials, and complexity. Discovering roof problems after closing can devastate budgets and eliminate equity gained through the purchase. Our pre-purchase inspections provide comprehensive assessment of roof age, condition, remaining serviceable life, current damage or deficiencies, repair needs and costs, code compliance issues, and proper installation quality.
              </p>
              <p className="text-lg mb-6">
                This information empowers you during negotiations. If the roof needs $8,000 in repairs or has only 3-5 years remaining life, you can request seller repairs before closing, negotiate purchase price reduction to offset upcoming roof expenses, budget appropriately for near-term roof costs, or reconsider the purchase if roof issues are too extensive. Many Tucson home sales involve roof negotiations—sellers often agree to repairs or price adjustments when presented with professional inspection reports documenting deficiencies. The $200-$350 inspection investment frequently returns thousands of dollars in negotiating leverage or avoided surprise expenses.
              </p>
              <p className="text-lg mb-8">
                We provide detailed written reports within 24-48 hours suitable for presenting to sellers, real estate agents, and lenders. Reports include extensive photo documentation, specific issue descriptions, repair cost estimates, remaining roof life projections, and replacement recommendations if applicable. We also discuss findings directly with you and your real estate agent, explaining technical issues in understandable terms and answering questions about timing, priorities, and costs. Our goal is providing complete information for confident home purchase decisions.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Maintenance & Preventative Inspections
              </h3>
              <p className="text-lg mb-6">
                Regular maintenance inspections represent the most cost-effective roof care strategy for Tucson homeowners. These routine examinations—recommended every 2-3 years for newer roofs and annually for roofs over 10 years old—identify minor problems before they cause serious damage. Early detection of cracked tiles, deteriorating flashing, seal failures, drainage problems, or underlayment issues allows affordable repairs that prevent leaks, water damage, and premature roof failure.
              </p>
              <p className="text-lg mb-6">
                Tucson's climate accelerates roof aging through constant UV bombardment, extreme thermal cycling, and occasional severe weather. Problems develop gradually—a small crack becomes a leak, minor flashing deterioration becomes water intrusion, slight drainage issues become ponding and membrane failure. Maintenance inspections catch these developing problems in early stages when repairs cost hundreds rather than thousands of dollars. They also identify maintenance opportunities like debris removal, gutter cleaning, seal renewal, and protective coatings that extend roof life significantly.
              </p>
              <p className="text-lg mb-8">
                Our maintenance inspections include comprehensive roof surface examination, all flashing and penetration assessment, attic inspection for leak evidence, ventilation and insulation evaluation, drainage system review, and photo documentation of conditions. We provide priority-ranked recommendations distinguishing urgent issues requiring immediate attention from items that can be scheduled for future maintenance. This allows budget-conscious planning—addressing critical problems immediately while scheduling other work during slower periods or when finances permit.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Maintenance Inspection"
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
                Storm Damage & Insurance Claim Inspections
              </h2>
              <p className="text-lg mb-6">
                Tucson's monsoon season brings severe weather capable of significant roof damage—high winds lift and tear shingles, blow off tiles, drive rain under roofing materials, deposit debris, and occasionally deliver hail. After severe weather events, professional roof inspection is essential for identifying damage that may not be immediately obvious from the ground but will cause problems if left unaddressed. Wind can lift shingles without completely removing them, creating entry points for water. Hail can crack tiles or bruise shingles in ways that aren't visible but compromise weather protection.
              </p>
              <p className="text-lg mb-6">
                We provide comprehensive storm damage inspections documenting all weather-related issues for insurance claims. Our detailed reports include extensive photo documentation showing damage clearly, descriptions of damage cause and extent, assessment of whether damage is recent storm-related or pre-existing wear, and repair cost estimates itemizing all necessary work. This documentation is critical for successful insurance claims—adjusters need clear evidence that damage resulted from a covered event rather than normal aging or lack of maintenance.
              </p>
              <p className="text-lg mb-8">
                Many homeowners don't realize their roof sustained damage until leaks appear during subsequent rains—often weeks or months after the storm. By then, documentation becomes difficult and insurance claims may be denied as untimely. We recommend inspection within days of any severe weather event, even if no obvious damage is visible. Early inspection and claim filing protects your coverage rights and prevents disputes about damage timing or cause. We work directly with insurance adjusters, provide supplemental documentation if initial estimates are insufficient, and advocate for complete repairs necessary to restore your roof's integrity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Storm Damage Inspection: (520) 333-2665
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
                What Our Inspections Reveal
              </h2>
              <p className="text-lg mb-6">
                Professional roof inspections identify issues invisible to untrained observers. From roof surface examination, we detect subtle sagging indicating structural problems or water damage, granule loss patterns on shingles showing UV degradation and aging, tile cracks from thermal stress that will worsen, seal failures around penetrations before active leaking begins, flashing deterioration in early stages, improper installation that will cause premature failure, biological growth (algae, moss) holding moisture and accelerating decay, drainage deficiencies causing water pooling, and wind damage that's not immediately obvious.
              </p>
              <p className="text-lg mb-6">
                Attic inspection reveals critical information not visible from exterior examination: moisture staining from slow leaks that haven't penetrated ceilings yet, wood rot in early stages before structural compromise, inadequate ventilation causing excessive heat and moisture buildup, underlayment deterioration visible from below, insulation deficiencies affecting energy efficiency, improper roof deck attachment or damaged decking, and evidence of previous repairs or modifications of unknown quality. These hidden issues often indicate problems requiring attention before they manifest as obvious leaks or damage.
              </p>
              <p className="text-lg mb-8">
                We also assess remaining roof life based on material condition, installation quality, and maintenance history. This projection helps you plan financially—knowing whether your roof has 2 years or 10 years of serviceable life remaining allows intelligent budgeting for eventual replacement or investment in repairs and coatings that extend usable life. For Tucson's common tile roofs, we evaluate tile condition, underlayment age, flashing integrity, and structural soundness to provide accurate life expectancy estimates accounting for our harsh desert climate.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Get Professional Assessment"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={roofInspectionCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={residentialRoofInspectionFAQs.faqs} />

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Ready for Professional Roof Inspection?
              </h2>
              <p className="text-lg mb-8">
                Schedule your comprehensive residential roof inspection with Tucson's most trusted roofing experts. Get detailed reports, honest assessments, and clear recommendations. Serving Tucson, Oro Valley, Marana, Vail, Sahuarita, and surrounding areas since 1979.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Book Inspection Today"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-final"
                />
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-final">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (520) 333-2665
                  </a>
                </Button>
              </div>
              <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Intelligent Design Air Conditioning, Plumbing, Solar, & Electric</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">1145 E Fort Lowell Rd, Tucson, AZ 85719</p>
                  <p className="text-lg font-bold text-primary">(520) 333-2665</p>
                  <p>Licensed, Bonded & Insured | ROC #169648, ROC #169649</p>
                  <p className="text-sm">Serving Greater Tucson: Oro Valley, Marana, Vail, Sahuarita, Green Valley, Catalina, Rita Ranch & Surrounding Communities</p>
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