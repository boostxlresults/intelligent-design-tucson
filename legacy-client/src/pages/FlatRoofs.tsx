import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceFAQ from '@/components/ServiceFAQ';
import { flatRoofsFAQs } from '@/data/faqs/roofing';
import { CommonQuestions } from "@/components/CommonQuestions";
import { flatRoofCommonQuestions } from "@/data/commonQuestions/roofing";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import FlatRoofsSchema from '@/components/FlatRoofsSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import flatRoofHero from '@assets/generated_images/commercial_flat_roof_system_7bd54a33.webp';

export default function FlatRoofs() {
  const description = 'Expert flat roof systems in Tucson. TPO, EPDM, modified bitumen installation & repair for commercial and residential. Superior drainage solutions. 45+ years experience. Call (520) 333-2665.';
  const imageUrl = `${SITE_URL}${flatRoofHero}`;

  return (
    <>
      <MetaHead
        title="Flat Roof Repair & Installation Tucson AZ | TPO, EPDM, Modified Bitumen"
        description={description}
        canonical={`${SITE_URL}/flat-roof-repair-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Flat Roof Repair & Installation Tucson AZ | TPO, EPDM, Modified Bitumen' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/flat-roof-repair-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Commercial flat roof system installation in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Flat Roof Repair & Installation Tucson AZ | TPO, EPDM, Modified Bitumen' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Commercial flat roof system installation in Tucson' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <FlatRoofsSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${flatRoofHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Flat Roof Systems Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                TPO, EPDM & Modified Bitumen | Commercial & Residential | Superior Drainage Solutions | Free Inspections | 45+ Years Experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Free Consultation"
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
              Why Choose Intelligent Design for Flat Roof Systems?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Premium Flat Roof Materials</p>
                  <p className="text-sm text-gray-600">TPO, EPDM, modified bitumen | Energy-efficient systems | UV-resistant membranes | Desert-rated materials</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Superior Drainage Design</p>
                  <p className="text-sm text-gray-600">Prevent ponding water | Tapered insulation systems | Multiple drain points | Monsoon-ready solutions</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Commercial & Residential Expertise</p>
                  <p className="text-sm text-gray-600">All flat roof types | Modern & mid-century homes | Commercial buildings | Professional installation</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Desert climate expertise | Trusted since 1979</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Energy Efficiency Focus</p>
                  <p className="text-sm text-gray-600">Reflective white membranes | Reduce cooling costs | Cool roof technology | LEED-compliant options</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Warranties</p>
                  <p className="text-sm text-gray-600">Material & labor coverage | Manufacturer warranties | Leak guarantees | Long-term protection</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Expert Flat Roof Installation & Repair in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Flat and low-slope roofs are increasingly popular in Tucson for both commercial buildings and modern residential architecture. These roof systems offer unique advantages including usable rooftop space, easier maintenance access, cost-effective installation, and excellent energy efficiency with reflective membranes. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've installed and repaired thousands of flat roof systems throughout Tucson since 1979, providing expert craftsmanship in TPO, EPDM, modified bitumen, and built-up roofing technologies.
              </p>
              <p className="text-lg mb-6">
                Tucson's extreme desert climate demands specialized flat roofing approaches. Our intense UV radiation—among the highest in the nation—deteriorates roofing materials faster than moderate climates, requiring UV-resistant membranes and protective coatings. Daily temperature swings of 40-50°F cause thermal expansion and contraction stressing seams and attachments. Summer roof surface temperatures exceeding 170°F test material durability and heat resistance. Monsoon rains—while infrequent—can deliver 2-4 inches per hour, overwhelming inadequate drainage systems and causing catastrophic ponding.
              </p>
              <p className="text-lg mb-8">
                Proper flat roof design and installation addresses these challenges through reflective white or light-colored membranes reducing heat absorption, adequate roof slope (minimum 1/4 inch per foot) ensuring drainage, multiple drain points preventing ponding water, high-quality seaming preventing leaks, and proper insulation balancing energy efficiency with vapor management. Whether you need a new flat roof installation, repairs to an existing system, drainage improvements, or membrane restoration, we provide solutions engineered for Tucson's unique climate and your specific building requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Consultation"
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
                Flat Roofing Materials: TPO, EPDM & Modified Bitumen
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                TPO Roofing Systems
              </h3>
              <p className="text-lg mb-6">
                TPO (Thermoplastic Polyolefin) has become the most popular commercial and residential flat roofing material in Tucson due to superior energy efficiency and durability. White TPO membranes reflect 75-85% of solar radiation, dramatically reducing roof surface temperatures and cooling costs. In Tucson's intense heat, this translates to 20-30% reductions in summer cooling expenses compared to dark-colored roofs. TPO's heat-welded seams create watertight bonds stronger than the membrane itself, eliminating the seam failures common with adhered systems.
              </p>
              <p className="text-lg mb-6">
                TPO membranes resist UV degradation, punctures, tears, and chemical exposure while remaining flexible across Tucson's extreme temperature range. Available in 45, 60, and 80-mil thicknesses, we recommend 60-mil minimum for Tucson applications balancing durability with cost-effectiveness. TPO installation involves mechanically attaching membrane to roof deck, heat-welding all seams and penetrations, installing proper flashing at walls and edges, and ensuring adequate attachment to resist monsoon winds. Expected lifespan: 20-30 years with minimal maintenance, making TPO an excellent long-term value despite higher upfront costs than EPDM.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                EPDM Rubber Roofing
              </h3>
              <p className="text-lg mb-6">
                EPDM (Ethylene Propylene Diene Monomer) rubber roofing offers proven performance at lower cost than TPO, making it ideal for budget-conscious commercial and residential projects. Black EPDM has protected Tucson buildings for decades with excellent UV resistance, weather durability, and puncture resistance. While EPDM absorbs more heat than white TPO, its lower installation cost ($6-$10 per sq ft versus $7-$12 for TPO) makes it attractive when energy efficiency is less critical or when combined with other insulation improvements.
              </p>
              <p className="text-lg mb-8">
                EPDM installation uses fully adhered or mechanically attached methods depending on building requirements. Seams are sealed with specialized tape or liquid adhesives rather than heat-welding, requiring meticulous installation to prevent seam failures. White EPDM provides energy efficiency comparable to TPO at costs between black EPDM and TPO. EPDM's flexibility accommodates thermal movement well, and repairs are straightforward using rubber patches and sealants. Expected lifespan: 25-30 years with proper installation and periodic seam maintenance. We recommend EPDM for residential flat roofs, garage roofs, covered patios, and commercial buildings where initial cost is paramount.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Get Free Estimate"
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
                Modified Bitumen & Drainage Solutions
              </h2>
              <p className="text-lg mb-6">
                Modified bitumen roofing combines traditional built-up roofing reliability with modern polymer technology, creating exceptionally durable waterproofing for Tucson's extreme climate. These multi-ply systems use asphalt modified with rubber or plastic polymers, reinforced with fiberglass or polyester mats, and surfaced with granules or reflective coatings. Modified bitumen excels in heat resistance, with some products rated to 240°F surface temperatures—critical for Tucson summers where roof surfaces routinely exceed 165°F.
              </p>
              <p className="text-lg mb-6">
                Installation methods include torch-applied (heat-welding layers together), cold-applied (using adhesives), and self-adhering systems. For Tucson, we prefer torch-applied or self-adhering systems for superior seam integrity and weather resistance. Granulated cap sheets provide UV protection and can include reflective granules reducing heat absorption. Modified bitumen handles thermal movement exceptionally well and resists punctures from foot traffic and debris. Cost: $8-$13 per square foot installed. Expected lifespan: 15-20 years, extended through periodic recoating with reflective roof coatings.
              </p>
              <p className="text-lg mb-8">
                Proper drainage is absolutely critical for flat roof longevity. Ponding water—standing water remaining 48+ hours after rain—accelerates membrane deterioration, promotes leaks, and can reduce roof lifespan by 50%. Our drainage solutions include tapered insulation systems creating positive drainage to multiple drain points, adequately sized roof drains (typically 4-6 inch diameter), scuppers providing secondary drainage through parapet walls, overflow drains preventing catastrophic water accumulation, and proper roof slope (minimum 1/4 inch per foot, ideally 1/2 inch per foot). During monsoon season, Tucson can receive 2-4 inches of rainfall per hour—adequate drainage isn't optional, it's essential for roof survival.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                Flat Roof Repair & Maintenance
              </h2>
              <p className="text-lg mb-6">
                Even the best flat roof systems require periodic maintenance and occasional repairs to achieve maximum lifespan. Common flat roof problems in Tucson include membrane punctures from debris or foot traffic, seam failures from thermal stress and UV exposure, ponding water from inadequate drainage or structural sagging, flashing failures at penetrations and walls, and blistering from moisture trapped beneath membranes. Early detection and prompt repair prevent minor issues from becoming expensive failures.
              </p>
              <p className="text-lg mb-6">
                Our flat roof maintenance program includes bi-annual inspections (spring and fall), drain cleaning and debris removal, seam inspections and resealing as needed, membrane repairs addressing punctures or damage, flashing maintenance around penetrations, and documentation with photos and reports. Proactive maintenance costs $200-$500 annually but prevents 90% of premature roof failures and leak-related damage. For commercial properties, scheduled maintenance protects building contents, prevents business disruption, and maximizes roof system investment.
              </p>
              <p className="text-lg mb-8">
                Flat roof repairs range from simple membrane patches ($200-$500) to extensive restoration ($3,000-$8,000+) depending on damage extent. We provide honest assessments of repair versus replacement economics. Generally, if repairs cost less than 30% of replacement and the roof is under 15 years old, repair makes sense. For older roofs with extensive damage, replacement often provides better value through improved energy efficiency, enhanced warranties, and decades of maintenance-free performance. We'll help you make the most economical decision for your specific situation.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Inspection"
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
                Flat Roofs for Modern Residential Homes
              </h2>
              <p className="text-lg mb-6">
                Flat roof systems are increasingly popular for Tucson residential properties, particularly contemporary, mid-century modern, and southwestern architectural styles. Residential flat roofs offer unique advantages over traditional pitched roofs including modern aesthetic appeal complementing contemporary design, usable rooftop space for decks, gardens, or equipment, easier and safer maintenance access compared to steep pitches, lower installation costs due to simpler structure, and exceptional energy efficiency with white reflective membranes.
              </p>
              <p className="text-lg mb-6">
                For residential applications, we typically recommend white TPO for maximum energy efficiency and longevity, or EPDM for budget-conscious projects. Residential flat roof installation includes structural assessment ensuring adequate load capacity, proper insulation meeting or exceeding code requirements (typically R-30 to R-38), vapor barriers preventing moisture infiltration, drainage design with adequate slope and drain points, parapet walls or edge metal for safety and aesthetics, and proper flashing at all penetrations and transitions.
              </p>
              <p className="text-lg mb-8">
                Many Tucson residential flat roofs incorporate rooftop amenities maximizing usable space. Popular features include rooftop decks with pavers over pedestals protecting membrane, solar panel arrays taking advantage of optimal orientation, evaporative cooling equipment benefiting from roof accessibility, and roof gardens using proper waterproofing and drainage layers. We coordinate with architects and builders ensuring roof systems support intended uses while meeting all building codes and manufacturer requirements. Properly designed residential flat roofs provide decades of trouble-free performance while enhancing home value and livability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section5">
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
                Why Choose Intelligent Design for Flat Roofing?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has served Tucson families and businesses since 1979. We're a family and veteran-owned company with over 45 years of experience providing professional flat roofing services. Our licensed contractors understand flat roof systems inside and out, from material selection and installation techniques to proper drainage design and long-term maintenance.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on quality workmanship, honest pricing, and exceptional service. When you choose Intelligent Design for flat roofing, you receive: free consultations and roof assessments, expert material selection for your specific needs, professional installation by certified technicians, comprehensive warranties on materials and labor, energy efficiency optimization reducing cooling costs, proper drainage design preventing ponding, and ongoing maintenance programs extending roof life.
              </p>
              <p className="text-lg mb-8">
                We maintain relationships with leading manufacturers including GAF, Firestone, Johns Manville, and Carlisle, ensuring access to premium materials and manufacturer-backed warranties. Our flat roofing expertise spans all systems—TPO, EPDM, modified bitumen, built-up roofing, and foam systems—enabling us to recommend the best solution for your building type, budget, and performance requirements. Whether you need a new commercial flat roof, residential flat roof installation, repairs to an existing system, or drainage improvements, we have the experience and resources to deliver lasting quality.
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
        <CommonQuestions questions={flatRoofCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={flatRoofsFAQs.faqs} />

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Flat Roof Service Today
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