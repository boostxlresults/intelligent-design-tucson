import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceFAQ from '@/components/ServiceFAQ';
import { commercialRoofRepairFAQs } from '@/data/faqs/roofing';
import { CommonQuestions } from "@/components/CommonQuestions";
import { commercialRoofingCommonQuestions } from "@/data/commonQuestions/roofing";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import CommercialRoofRepairSchema from '@/components/CommercialRoofRepairSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import roofRepairHero from '@assets/generated_images/commercial_roof_repair_technician_3329f717.webp';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';

export default function CommercialRoofRepair() {
  const description = 'Expert commercial roof repair in Tucson. Flat roof systems, TPO, EPDM, minimal disruption to business operations. 45+ years experience. Call (520) 333-2665 for free commercial roof inspection.';
  const imageUrl = `${SITE_URL}${roofRepairHero}`;

  return (
    <>
      <MetaHead
        title="Commercial Roof Repair Tucson AZ | Business Roof Repair Services"
        description={description}
        canonical={`${SITE_URL}/commercial-roof-repair-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Commercial Roof Repair Tucson AZ | Business Roof Repair Services' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/commercial-roof-repair-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Commercial roof repair technician working on flat TPO roof system in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Commercial Roof Repair Tucson AZ | Business Roof Repair Services' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Commercial roof repair technician working on flat TPO roof system in Tucson' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <CommercialRoofRepairSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${roofRepairHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Commercial Roof Repair Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Flat Roof Systems | TPO & EPDM Repair | Minimal Business Disruption | Emergency Service | 45+ Years Experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Free Inspection"
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
              Why Choose Intelligent Design for Commercial Roof Repair?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Minimal Business Disruption</p>
                  <p className="text-sm text-gray-600">Flexible scheduling | Off-hours work available | Zero interior access needed | Keep operations running</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">All Commercial Roof Systems</p>
                  <p className="text-sm text-gray-600">TPO, EPDM, modified bitumen | Built-up roofing | Metal systems | Expert flat roof repairs</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Property Manager Partnerships</p>
                  <p className="text-sm text-gray-600">Dedicated account managers | Detailed reporting | Online invoicing | Volume pricing available</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Commercial Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Licensed & insured | Trusted since 1979</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Warranties</p>
                  <p className="text-sm text-gray-600">Labor warranties | Material warranties | Leak guarantees | Long-term protection</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Free Commercial Inspections</p>
                  <p className="text-sm text-gray-600">Complete roof assessment | Thermography available | Photo documentation | Honest recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Expert Commercial Roof Repair in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Your commercial building's roof protects valuable inventory, expensive equipment, and critical business operations from Tucson's intense sun, monsoon rains, and extreme temperature swings. When your commercial roof develops leaks, membrane damage, or drainage issues, rapid professional repair prevents minor problems from escalating into costly business interruptions, inventory damage, and structural deterioration. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've repaired thousands of Tucson commercial roofs since 1979, providing fast, reliable solutions with minimal disruption to your business operations.
              </p>
              <p className="text-lg mb-6">
                Tucson's climate creates unique challenges for commercial flat roof systems. Our extreme UV radiation—among the highest in the nation—accelerates membrane degradation and causes premature material failure. Daily temperature swings of 40°F or more create thermal stress that splits seams and cracks membranes. Intense monsoon rains test every seal, flashing detail, and drainage system. Brief but powerful winds can lift membrane edges and damage roof-mounted equipment. These factors require commercial roofing expertise specific to Tucson's desert environment and flat roof construction methods.
              </p>
              <p className="text-lg mb-8">
                We understand that commercial roof repairs must balance quality with minimal business disruption. Leaks can damage inventory, disrupt operations, create liability issues, and harm your business reputation. Our team provides 24/7 emergency response, flexible scheduling around business hours, honest repair versus replacement assessments, transparent pricing with detailed proposals, and professional craftsmanship backed by comprehensive warranties. Whether you need emergency leak repair, membrane restoration, drainage improvements, or extensive repairs after storm damage, we deliver solutions that protect your building and your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Roof Inspection"
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
                Common Commercial Roof Repairs in Tucson
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                TPO Membrane Repairs
              </h3>
              <p className="text-lg mb-6">
                TPO (Thermoplastic Polyolefin) is the most common commercial roofing membrane in Tucson, valued for its heat-reflective properties, heat-weldable seams, and durability. However, TPO systems require specific repairs as they age. Seam failures from thermal stress are the most frequent issue—Tucson's daily temperature cycling causes TPO to expand and contract, eventually stressing seams until they split. We repair seam failures using heat-welding techniques that create seams stronger than the original membrane, ensuring decades of leak-free performance.
              </p>
              <p className="text-lg mb-6">
                Membrane punctures from foot traffic, dropped tools, HVAC maintenance, or wind-blown debris require immediate attention. Small punctures can be heat-welded with patch material, while larger damaged areas may require membrane section replacement. We assess puncture extent and surrounding membrane condition to determine the most cost-effective repair approach. UV degradation and chalking indicate membrane aging—while surface chalking is normal, excessive degradation with loss of flexibility suggests approaching end of service life and potential need for coating or replacement rather than continued repairs.
              </p>
              <p className="text-lg mb-6">
                Shrinkage is a unique TPO challenge in Tucson's climate. Extreme heat can cause TPO membranes to shrink, pulling away from termination points, stressing seams, and creating stress cracks. We address shrinkage through membrane relaxation techniques, stress relief cuts at strategic locations, and reinforced termination details. Flashing failures around roof penetrations, walls, and equipment are common repair needs. We replace deteriorated flashing using proper TPO flashing techniques, heat-welding all seams, and ensuring proper detailing that accommodates membrane movement.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                EPDM Rubber Roof Repairs
              </h3>
              <p className="text-lg mb-6">
                EPDM (Ethylene Propylene Diene Monomer) rubber roofing is common on older Tucson commercial buildings, known for its durability and cost-effectiveness. EPDM repairs differ from TPO—seams are adhesive-bonded rather than heat-welded, requiring different repair techniques. Seam failures from adhesive degradation are the primary repair need. Tucson's heat accelerates adhesive breakdown, causing seams to peel and separate. We repair EPDM seams using premium bonding adhesives and proper surface preparation, creating durable watertight seals.
              </p>
              <p className="text-lg mb-8">
                Membrane punctures and tears require patch repairs using compatible EPDM material and proper bonding procedures. Unlike TPO, EPDM cannot be heat-welded, making surface preparation and adhesive selection critical for lasting repairs. We clean damaged areas thoroughly, apply appropriate primers, and bond patches with premium EPDM adhesives following manufacturer specifications. Shrinkage affects older EPDM installations—as EPDM ages and shrinks, it pulls away from edges and penetrations. We address shrinkage through membrane relaxation, stress relief details, and reinforced terminations that maintain watertight performance despite membrane movement.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Get Repair Estimate"
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
                Modified Bitumen & Built-Up Roof Repairs
              </h2>
              <p className="text-lg mb-6">
                Modified bitumen and built-up roofing systems remain common on many Tucson commercial buildings. Modified bitumen—typically two-ply systems with granulated cap sheets—requires specific repair techniques. Surface blistering from trapped moisture or poor installation must be addressed by cutting out blisters, drying substrate, and installing properly adhered patches. Split seams and laps from thermal movement require heat-welding or torch-application of compatible modified bitumen material. We assess surrounding roof condition to determine if localized repairs suffice or if the roof requires restoration coating or replacement.
              </p>
              <p className="text-lg mb-6">
                Granule loss from UV exposure indicates cap sheet aging and reduced weather protection. Localized granule loss can be addressed with protective coatings or new cap sheet layers in affected areas. Widespread granule loss suggests the need for complete re-surfacing or coating rather than patches. Alligatoring—the characteristic cracked pattern indicating severe aging—signals that the roof is near the end of serviceable life. Limited alligatoring can be addressed with coating systems, but extensive alligatoring typically requires replacement for cost-effective long-term protection.
              </p>
              <p className="text-lg mb-8">
                Built-up roofing (BUR) systems—multiple layers of felt and asphalt with gravel surfacing—require different repair approaches. We remove gravel from damaged areas, cut out deteriorated felt layers, install new felt plies properly adhered with hot asphalt or cold adhesives, apply flood coat, and replace gravel surfacing. Ponding water on BUR roofs accelerates deterioration and must be addressed through improved drainage, tapered insulation installation, or structural modifications. Flashing failures on modified bitumen and BUR systems require careful integration of new flashing with existing multi-ply systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency Repairs: (520) 333-2665
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
                Drainage & Ponding Water Solutions
              </h2>
              <p className="text-lg mb-6">
                Proper drainage is critical for commercial flat roof longevity. Ponding water—standing water remaining 48+ hours after rainfall—accelerates membrane deterioration, promotes biological growth, adds structural load, and eventually causes leaks. We identify and correct ponding causes through comprehensive solutions. Clogged drains and scuppers are the most common culprits—we clean all drains, install protective drain guards, and ensure proper flow. Inadequate roof slope prevents water flow to drains. We correct slope issues using tapered insulation systems that create positive drainage to all roof drains without costly structural modifications.
              </p>
              <p className="text-lg mb-6">
                Sagging roof decks from structural deflection, inadequate support, or wet insulation create low areas where water accumulates. We assess structural conditions using visual inspection, core samples, and sometimes infrared thermography to detect wet insulation. Solutions range from adding roof drains in ponding areas to structural reinforcement or deck replacement in severe cases. Insufficient drain capacity overwhelms drainage systems during intense monsoon downpours. We upgrade drain systems, add overflow scuppers, and ensure adequate capacity for Tucson's brief but intense rainfall events.
              </p>
              <p className="text-lg mb-8">
                Roof equipment—HVAC units, exhaust fans, and other mechanical systems—can block water flow to drains. We install proper crickets and drainage channels around equipment to direct water flow. Parapet wall scuppers must be properly sized, located, and detailed to handle overflow during extreme rain events. We inspect and repair scupper flashing, ensure proper sizing and spacing, and verify scuppers aren't blocked by debris or membrane termination details. Proper drainage protects your roofing investment and prevents the premature deterioration that leads to costly emergency repairs.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Service"
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
                Flashing & Penetration Repairs
              </h2>
              <p className="text-lg mb-6">
                Flashing failures cause the majority of commercial roof leaks. Flashing seals transitions between roof planes, walls, and roof penetrations—these critical details endure maximum weather exposure and thermal stress. HVAC curb flashing deteriorates from UV exposure, thermal cycling, and mechanical stress from equipment vibration. We replace failed HVAC flashing using premium materials properly integrated with roof membranes, install proper counter-flashing, and ensure watertight seals that accommodate thermal movement and equipment vibration.
              </p>
              <p className="text-lg mb-6">
                Parapet wall flashing at the perimeter of most commercial buildings fails from multiple causes: metal degradation from weathering, failed sealants at terminations, inadequate attachment allowing wind uplift, and separation between wall cap and through-wall flashing. We replace parapet flashing systems using properly detailed metal work, mechanically attached base flashing integrated with roof membranes, and durable sealants at all termination points. Proper parapet flashing is essential for building envelope performance and interior protection.
              </p>
              <p className="text-lg mb-8">
                Pipe penetrations, vents, and smaller roof penetrations develop leaks when flashing boots deteriorate or seals fail. We replace failed pipe flashing using appropriate boot materials (EPDM, TPO, or lead depending on penetration size and roof system), properly integrate boots with roof membranes, and install compression rings or clamps for lasting seals. Expansion joints between roof sections require specialized flashing systems that accommodate building movement. We repair or replace expansion joint covers using flexible flashing materials and proper installation techniques that maintain watertight performance despite ongoing thermal and structural movement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section5">
                    <Phone className="w-5 h-5 mr-2" />
                    Free Assessment: (520) 333-2665
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
                Why Choose Intelligent Design for Commercial Roof Repairs?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has served Tucson businesses since 1979. We're a family and veteran-owned company with over 45 years of commercial roofing experience. Our licensed contractors understand Tucson's commercial building construction, flat roof systems, and the unique challenges of Southern Arizona's climate. We've repaired roofs on every type of commercial building—office buildings, retail centers, warehouses, industrial facilities, multi-family housing, medical offices, and more.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on quality workmanship, minimal business disruption, and exceptional customer service. When you choose Intelligent Design for commercial roof repairs, you receive: free comprehensive roof inspections with photo documentation, honest assessment of repair versus replacement economics, transparent pricing with detailed written proposals, expert repairs using proper commercial roofing techniques, flexible scheduling to minimize operational impact, comprehensive warranties on labor and materials, insurance claim assistance and thorough documentation, and dedicated account management for property managers and building owners.
              </p>
              <p className="text-lg mb-8">
                We maintain extensive inventories of commercial roofing materials—TPO and EPDM membranes, modified bitumen systems, flashing materials, and sealants—enabling rapid response for emergency repairs and quick completion of planned repair work. Our commercial relationships with manufacturers provide access to specialized materials and technical support for complex repairs. We employ experienced commercial roofing professionals who understand building codes, safety requirements, and best practices for lasting repairs. Your building's protection and business continuity are our priorities.
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
        <CommonQuestions questions={commercialRoofingCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={commercialRoofRepairFAQs.faqs} />

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Commercial Roof Repair Today
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
                    triggerText="Schedule Service"
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