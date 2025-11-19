import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceFAQ from '@/components/ServiceFAQ';
import { commercialRoofInspectionFAQs } from '@/data/faqs/roofing';
import { CommonQuestions } from "@/components/CommonQuestions";
import { commercialRoofingCommonQuestions } from "@/data/commonQuestions/roofing";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import CommercialRoofInspectionSchema from '@/components/CommercialRoofInspectionSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import roofInspectionHero from '@assets/generated_images/commercial_roof_inspection_professional_ddb06396.webp';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';

export default function CommercialRoofInspection() {
  const description = 'Professional commercial roof inspection in Tucson. Preventative maintenance, detailed reports, moisture surveys, property management services. Call (520) 333-2665 to schedule inspection.';
  const imageUrl = `${SITE_URL}${roofInspectionHero}`;

  return (
    <>
      <MetaHead
        title="Commercial Roof Inspection Tucson AZ | Professional Roof Assessment"
        description={description}
        canonical={`${SITE_URL}/commercial-roof-inspection-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Commercial Roof Inspection Tucson AZ | Professional Roof Assessment' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/commercial-roof-inspection-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional commercial roof inspection in progress in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Commercial Roof Inspection Tucson AZ | Professional Roof Assessment' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl }
        ]}
      />
      <GTM />
      <DNIInjector />
      <CommercialRoofInspectionSchema />
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
                Commercial Roof Inspection Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Preventative Maintenance | Detailed Reports | Moisture Surveys | Property Management Services | 45+ Years Experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Inspection"
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
              Why Choose Intelligent Design for Commercial Roof Inspection?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Assessments</p>
                  <p className="text-sm text-gray-600">Complete roof evaluation | Infrared thermography | Moisture detection | Detailed documentation</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Preventative Maintenance Focus</p>
                  <p className="text-sm text-gray-600">Catch problems early | Cost-effective repairs | Extend roof life | Avoid emergency situations</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Detailed Reporting</p>
                  <p className="text-sm text-gray-600">Photo documentation | Written findings | Repair recommendations | Cost estimates provided</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Inspection Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Licensed & insured | Trusted since 1979</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Property Management Services</p>
                  <p className="text-sm text-gray-600">Portfolio inspections | Standardized reporting | Online access | Dedicated account managers</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Free Basic Inspections</p>
                  <p className="text-sm text-gray-600">No-cost visual assessments | Repair estimates | Comprehensive fee-based inspections available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Commercial Roof Inspection in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Regular professional roof inspections are the foundation of effective commercial roof management, preventing costly emergency repairs, extending roof service life, and protecting building operations and assets. Commercial roofs are significant investments—$50,000 to $500,000+ depending on building size—that require proactive monitoring to maximize lifespan and return on investment. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've inspected thousands of Tucson commercial roofs since 1979, helping building owners and property managers make informed decisions about maintenance, repairs, and capital planning through comprehensive professional assessments.
              </p>
              <p className="text-lg mb-6">
                Tucson's extreme climate accelerates commercial roof aging and creates unique inspection needs. Our intense UV radiation—among the nation's highest—degrades roofing membranes requiring regular monitoring to catch deterioration before it causes leaks. Daily temperature swings of 40°F or more stress seams and attachments, making periodic inspection of these vulnerable areas critical. Brief but powerful monsoon storms can damage roofs in minutes—post-storm inspections identify wind-lifted membranes, impact damage, and compromised drainage before problems worsen. Extended summer heat exceeding 110°F for months tests all roofing components, and inspections verify systems are performing adequately under thermal stress.
              </p>
              <p className="text-lg mb-8">
                Our commercial roof inspection services include complete visual assessment of all roof surfaces and systems, infrared thermography moisture surveys detecting hidden wet insulation, drainage evaluation identifying ponding water and capacity issues, flashing and penetration inspection at all vulnerable transitions, roof-mounted equipment assessment checking curbs and supports, interior inspection for leak evidence, comprehensive photo documentation, detailed written reports with prioritized repair recommendations, and cost estimates for identified needs. We work with building owners, property managers, facility managers, and real estate professionals providing objective assessments supporting informed decision-making. Whether you need routine preventative maintenance inspections, pre-purchase assessments, insurance claim documentation, or warranty compliance inspections, we deliver professional service protecting your building investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Get Inspection Quote"
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
                Comprehensive Commercial Roof Inspection Services
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Visual Roof Assessment
              </h3>
              <p className="text-lg mb-6">
                Comprehensive visual roof assessment is the foundation of professional commercial roof inspection. Our experienced inspectors systematically examine every roof component documenting current condition and identifying developing issues. Membrane examination includes assessment of overall condition and aging, identification of cracks, splits, blisters, or punctures, evaluation of seam integrity and potential failures, documentation of UV degradation and chalking, and assessment of ponding water areas and moisture retention. We inspect all flashing locations—roof penetrations, HVAC equipment, walls, parapets, drains, and skylights—checking for separation, deterioration, failed sealants, and inadequate details.
              </p>
              <p className="text-lg mb-6">
                Drainage system evaluation examines all components affecting water removal: roof drains checking for clogs, damage, and proper function; scuppers verifying adequate sizing, spacing, and condition; gutters and downspouts assessing capacity and maintenance needs; and ponding water areas identifying inadequate slope or drainage capacity. We assess roof-mounted equipment including HVAC units, exhaust fans, and other mechanical systems, checking equipment curbs and supports, flashing details and waterproofing, clearances and access requirements, and impact on roof membrane from vibration or foot traffic.
              </p>
              <p className="text-lg mb-6">
                Edge conditions and terminations receive thorough inspection: parapet walls and caps, roof edge metal and fascia, expansion joints between roof sections, and termination bars and counter-flashing. We examine substrate conditions where visible, assess overall structural integrity for sagging or deflection, and evaluate building interior for leak evidence, water staining, or damage. Every inspection includes extensive photo documentation with location-specific images, roof diagrams marking problem areas, and detailed notes describing observed conditions—providing comprehensive records for future reference and comparison.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Infrared Thermography Moisture Surveys
              </h3>
              <p className="text-lg mb-6">
                Infrared thermography uses thermal imaging technology detecting moisture hidden beneath intact roof membranes—problems invisible to visual inspection alone. Thermal cameras detect temperature differences across roof surfaces caused by wet insulation retaining heat differently than dry insulation. This advanced diagnostic tool is critical for commercial roof management because wet insulation reduces thermal performance increasing energy costs, adds structural load potentially exceeding design limits, accelerates membrane deterioration from beneath, promotes biological growth and material degradation, and indicates roof system failures requiring attention before visible leaks develop.
              </p>
              <p className="text-lg mb-8">
                Thermography surveys are performed during specific conditions maximizing temperature differentials: typically conducted in evening hours after sunset when wet areas retain heat longer than dry areas, requires temperature differentials of 10-15°F between wet and dry insulation, cannot be performed during rain or with wet roof surfaces, and works best on clear nights allowing roof surfaces to cool. Survey results identify wet insulation locations and extent, help prioritize repair areas based on moisture severity, guide targeted core sampling to verify findings, and support decisions between localized repairs and complete replacement. We recommend thermography for roofs over 10 years old, when leak sources cannot be visually identified, before coating or recovery installations, during pre-purchase property assessments, and as part of comprehensive condition assessments. Thermography typically costs $300-$800 but can save thousands by identifying specific problem areas requiring attention versus blanket assumptions about roof conditions.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Request Inspection"
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
                Property Management Inspection Services
              </h2>
              <p className="text-lg mb-6">
                Property management companies face unique challenges managing commercial roof assets across multiple buildings with varying ages, systems, and conditions. Our specialized property management inspection services help you effectively manage roof portfolios while controlling costs and minimizing tenant disruption. Regularly scheduled inspection programs provide: consistent twice-annual or quarterly inspections for all properties in your portfolio, standardized reporting formats enabling easy comparison across buildings, priority identification and budgeting for repair and replacement needs, documentation maintaining manufacturer warranty compliance, and long-term asset tracking monitoring roof conditions over time.
              </p>
              <p className="text-lg mb-6">
                We provide property managers with tools and information needed for effective decision-making: online access to inspection reports and photos accessible 24/7, roof asset databases tracking all properties with age, condition, and recommendations, capital planning support with lifecycle cost analysis and replacement timing, emergency response protocols for urgent situations, and dedicated account managers providing single-point contact and consistent service. Our standardized inspection checklists ensure nothing is missed while customization accommodates property-specific requirements or tenant concerns.
              </p>
              <p className="text-lg mb-8">
                Volume pricing for property management companies with multiple buildings makes professional inspection services cost-effective even for large portfolios. Preventative maintenance programs stemming from regular inspections extend roof life 20-30% through early problem identification and cost-effective repairs—saving far more than inspection costs through deferred replacement expenses and avoided emergency situations. We coordinate directly with tenants minimizing disruption, provide rapid response for urgent situations, and work within your operational and budgeting requirements. Property managers throughout Tucson trust us for reliable inspection services protecting their assets while controlling costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Property Managers: (520) 333-2665
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
                Real Estate Transaction Inspections
              </h2>
              <p className="text-lg mb-6">
                Commercial real estate transactions require objective professional roof assessments protecting both buyers and sellers. Pre-purchase roof inspections provide buyers with critical information about one of the property's most expensive and important building systems. Comprehensive transaction inspections document current roof condition with detailed descriptions and photos, identify immediate repair needs with cost estimates, assess remaining service life for capital planning purposes, detect hidden issues like wet insulation or structural problems through thermography and examination, estimate replacement costs and timing for budgeting, and provide leverage for price negotiations or seller repair requirements.
              </p>
              <p className="text-lg mb-6">
                Pre-sale roof inspections benefit sellers by identifying and addressing issues before listing, demonstrating proactive property maintenance to buyers, providing documentation of roof condition supporting asking price, avoiding transaction delays from unexpected buyer inspection findings, and enabling informed decisions about pre-sale repairs versus pricing adjustments. Transaction inspection reports are neutral and factual—we have no stake in deal outcomes, only providing accurate roof condition assessment enabling informed decisions by all parties. Reports typically include executive summary for easy review, detailed findings with supporting photos, cost estimates for identified issues, remaining service life assessment, and recommendations for repairs, maintenance, or budgeting.
              </p>
              <p className="text-lg mb-8">
                We work with commercial real estate brokers, buyers, sellers, lenders, and attorneys throughout Tucson providing timely professional assessments supporting transaction decisions. Inspection scheduling accommodates transaction timelines with rapid turnaround when needed. Our experience with commercial roofing and building systems enables thorough evaluation identifying issues that might be missed by general property inspectors. Whether you're acquiring an investment property, selling a building, or need third-party assessment for lending purposes, we deliver professional inspection services protecting your interests and facilitating informed real estate decisions.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Transaction Inspection"
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
                Preventative Maintenance & Lifecycle Management
              </h2>
              <p className="text-lg mb-6">
                Regular professional inspections are the foundation of effective preventative maintenance programs extending commercial roof service life 20-30% while reducing total lifecycle costs. Preventative maintenance catches small problems—minor seam failures, isolated membrane damage, clogged drains, deteriorating sealants—when repairs cost hundreds of dollars. Without inspection and proactive repair, these small issues worsen causing extensive damage requiring repairs costing thousands or tens of thousands. Regular inspections also maintain manufacturer warranty coverage—most commercial roof warranties require documented annual or bi-annual professional inspections as condition of coverage.
              </p>
              <p className="text-lg mb-6">
                Preventative maintenance programs based on regular inspections include: scheduled inspections twice annually or quarterly depending on roof age and condition, minor repairs and maintenance addressing identified issues promptly, drainage system cleaning preventing water backup, sealant renewal at penetrations and terminations, documentation maintaining warranty compliance, and budgeting for larger repairs or eventual replacement. Well-maintained commercial roofs regularly exceed expected service life—20-year TPO roofs lasting 25-30 years, 25-year EPDM lasting 30-35+ years—when minor issues are addressed promptly preventing accelerated deterioration.
              </p>
              <p className="text-lg mb-8">
                Long-term roof asset management uses inspection data to plan capital expenditures strategically. Regular inspections tracking roof condition over time support decisions about optimal timing for replacement—replacing too early wastes remaining serviceable life while waiting too long risks emergency situations and interior damage. Lifecycle cost analysis comparing ongoing maintenance costs versus replacement costs helps determine the most economical approach. We help building owners and property managers develop comprehensive roof asset management strategies maximizing building protection while optimizing expenditures across property portfolios and multi-year planning horizons.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section5">
                    <Phone className="w-5 h-5 mr-2" />
                    Start Maintenance Program: (520) 333-2665
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
                Why Choose Intelligent Design for Commercial Roof Inspection?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has inspected commercial roofs throughout Tucson since 1979. We're a family and veteran-owned company with over 45 years of commercial roofing experience and comprehensive understanding of all commercial roof systems, Tucson climate challenges, and building requirements. Our licensed contractors have inspected thousands of commercial roofs across every building type and roofing system, providing the experience necessary for thorough accurate assessments.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on honest assessments, thorough documentation, and professional service. When you choose Intelligent Design for commercial roof inspection, you receive: comprehensive visual assessment of all roof systems and components, infrared thermography moisture surveys when appropriate, extensive photo documentation with location-specific images, detailed written reports with prioritized findings, repair and maintenance recommendations with cost estimates, remaining service life assessments, warranty compliance documentation, and ongoing support for maintenance planning and capital budgeting.
              </p>
              <p className="text-lg mb-8">
                Our inspection services are objective and independent—we provide honest assessments regardless of whether recommended actions benefit us financially. We're equally comfortable recommending minor repairs, ongoing maintenance, or complete replacement based on actual roof conditions and your building requirements. Our relationships with leading manufacturers provide access to technical resources and warranty information. We work with building owners, property managers, real estate professionals, insurance adjusters, and facility managers throughout Tucson providing reliable inspection services protecting building investments and supporting informed decision-making.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Get Professional Assessment"
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
        <ServiceFAQ faqs={commercialRoofInspectionFAQs.faqs} />

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Commercial Roof Inspection Today
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
                    triggerText="Schedule Inspection"
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