import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceFAQ from '@/components/ServiceFAQ';
import { tileRoofsFAQs } from '@/data/faqs/roofing';
import { CommonQuestions } from "@/components/CommonQuestions";
import { tileRoofCommonQuestions } from "@/data/commonQuestions/roofing";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import TileRoofsSchema from '@/components/TileRoofsSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import tileRoofHero from '@assets/generated_images/Spanish_clay_tile_roof_6bc33a61.webp';

export default function TileRoofs() {
  const description = 'Expert tile roofing in Tucson. Spanish clay tile, concrete tile, mission tile, barrel tile installation & repair. Southwest style specialists. 45+ years experience. Call (520) 333-2665.';
  const imageUrl = `${SITE_URL}${tileRoofHero}`;

  return (
    <>
      <MetaHead
        title="Tile Roofing Tucson AZ | Clay & Concrete Tile Installation & Repair"
        description={description}
        canonical={`${SITE_URL}/tile-roofing-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Tile Roofing Tucson AZ | Clay & Concrete Tile Installation & Repair' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/tile-roofing-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Spanish clay tile roof installation in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Tile Roofing Tucson AZ | Clay & Concrete Tile Installation & Repair' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Spanish clay tile roof installation in Tucson' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <TileRoofsSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${tileRoofHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Tile Roofing Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Spanish Clay Tile | Concrete Tile | Mission & Barrel Tiles | Southwest Style Specialists | Free Estimates | 45+ Years Experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Free Estimate"
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
              Why Choose Intelligent Design for Tile Roofing?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Southwest Tile Specialists</p>
                  <p className="text-sm text-gray-600">Spanish clay tile | Concrete tiles | Mission & barrel styles | Authentic Southwest aesthetics</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">50-100+ Year Lifespan</p>
                  <p className="text-sm text-gray-600">Extreme durability | Outlasts other materials | Minimal maintenance | Excellent investment value</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Perfect Tile Matching</p>
                  <p className="text-sm text-gray-600">Extensive tile inventory | Custom color matching | Discontinued tile sourcing | Seamless repairs</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Historic home expertise | Trusted since 1979</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Energy Efficiency</p>
                  <p className="text-sm text-gray-600">Natural thermal mass | Reflective properties | Reduce cooling costs 15-25% | Optimal desert performance</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Warranties</p>
                  <p className="text-sm text-gray-600">Material warranties 50+ years | Labor warranties | Leak guarantees | Transferable coverage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Expert Clay & Concrete Tile Roofing in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Tile roofing defines Tucson's architectural character, from historic Spanish Colonial homes downtown to contemporary Southwest residences throughout the valley. Clay and concrete tiles offer unmatched durability, authentic aesthetics, and superior performance in our desert climate, making them the premium choice for discerning homeowners and commercial property owners. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've installed and restored thousands of tile roofs throughout Tucson since 1979, combining traditional craftsmanship with modern materials and techniques for tile roofs that last generations.
              </p>
              <p className="text-lg mb-6">
                Tucson's climate creates ideal conditions for tile roofing. Unlike humid regions where moisture can penetrate and damage tiles, our dry climate preserves tile integrity for 50-100+ years. Our intense UV radiation—harmful to many roofing materials—has minimal effect on ceramic clay and properly formulated concrete tiles. Daily temperature swings that stress other materials are absorbed by tile's thermal mass without degradation. Summer surface temperatures exceeding 165°F are easily tolerated by materials rated to 1,000°F+ (clay) or 500°F+ (concrete). Monsoon rains and winds test tile installation quality but rarely damage properly installed tile roofs.
              </p>
              <p className="text-lg mb-8">
                Tile roofing provides multiple advantages for Tucson properties: exceptional longevity (50-100+ years for clay, 40-75 years for concrete) far exceeding other materials, fire resistance with Class A ratings protecting against wildfire embers and flames, energy efficiency reducing cooling costs 15-25% through reflectivity and thermal mass, low maintenance requiring only periodic inspections and minor tile replacements, pest resistance preventing rodent and bird infiltration, wind resistance withstanding 100+ mph monsoon winds, and timeless aesthetics enhancing property value $15,000-$40,000. Whether you need new tile roof installation, restoration of historic tile roofing, repairs to storm damage, or tile replacement for aging roofs, we provide expert solutions honoring Tucson's tile roofing tradition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Get Free Estimate"
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
                Clay Tiles: Traditional Excellence
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Spanish Clay Tile Heritage
              </h3>
              <p className="text-lg mb-6">
                Clay tiles represent the original tile roofing material, used in Mediterranean and Spanish Colonial architecture for over 2,000 years. Made from natural clay molded and fired at high temperatures (1,800-2,100°F), these tiles develop exceptional hardness, weather resistance, and longevity. In Tucson, clay tiles grace our most prestigious historic properties including many downtown buildings from the Spanish Colonial and Mission Revival periods. The natural terra cotta color—resulting from iron oxide in clay—creates the warm, earthy aesthetic defining Southwest architecture.
              </p>
              <p className="text-lg mb-6">
                Clay tile advantages for Tucson include superior heat resistance maintaining integrity at temperatures exceeding 1,000°F, color permanence as natural terra cotta penetrates entire tile thickness (no fading or peeling), exceptional longevity with 50-100+ year lifespans common, lighter weight than concrete (600-800 lbs per square) reducing structural loads, authentic historic appearance for period restoration, and natural UV resistance without degradation. Popular clay tile profiles include barrel tiles (Spanish/Mission S-curve), two-piece Mission tiles (separate pan and cover pieces), flat interlocking tiles (contemporary), and specialty shapes for hips, ridges, and transitions.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Concrete Tiles: Versatile Performance
              </h3>
              <p className="text-lg mb-6">
                Concrete tiles offer tile roofing's durability and aesthetics at lower cost than clay, making them popular for new construction and replacements. Manufactured from cement, sand, and water with integral pigments, quality concrete tiles provide 40-75 year lifespans approaching clay tile longevity. Modern concrete tile technology produces excellent color stability, impact resistance, and weather performance suitable for Tucson's demanding climate. Concrete tiles cost $10-$18 per square foot installed versus $15-$25 for clay—significant savings on larger roofs.
              </p>
              <p className="text-lg mb-8">
                Concrete tile benefits include extensive color and profile options mimicking clay, slate, wood shake, or creating contemporary looks; excellent strength and impact resistance; Class A fire ratings; good UV and heat resistance with proper pigments; and widespread availability with competitive pricing. Considerations: heavier weight (900-1,200 lbs per square) may require structural evaluation, pigmented colors can fade 10-20% over decades requiring occasional resealing, and concrete absorbs more moisture than clay (minimal concern in Tucson's dry climate). For most Tucson applications, quality concrete tiles from reputable manufacturers (Eagle, Boral, US Tile) provide outstanding performance and value, indistinguishable from clay to casual observers while costing 30-40% less.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Compare Tile Options"
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
                Tile Roof Installation & Design
              </h2>
              <p className="text-lg mb-6">
                Professional tile roof installation requires specialized knowledge and techniques ensuring decades of leak-free performance. The process begins with structural evaluation confirming existing framing can support tile weight (typically 12-15 lbs per square foot dead load). Many Tucson homes built with asphalt shingle roofs can accommodate tiles without modification, though older homes or complex designs may require reinforcement. Structural upgrades—when needed—cost $2,000-$8,000 but enable tile roofing's superior longevity and value.
              </p>
              <p className="text-lg mb-6">
                Installation begins with complete tear-off and disposal of existing roofing, deck inspection repairing any damaged sheathing, and thorough cleaning. Premium underlayment rated for Tucson's heat (synthetic materials rated to 240°F+) covers the entire deck, providing critical secondary water protection. Battens or horizontal furring strips are often installed creating proper tile spacing and ventilation. Starter tiles at eaves, valley construction (typically metal W-valley or woven tiles), and proper flashing around chimneys, skylights, and penetrations create weathertight transitions.
              </p>
              <p className="text-lg mb-8">
                Tile installation follows manufacturer specifications for overlap, fastening, and pattern. Each tile is mechanically fastened (nails or screws) preventing wind uplift and ensuring stability. Hip and ridge caps receive additional mortar and fasteners for maximum wind resistance. Valley tiles or metal valleys channel water properly. Final installation includes inspection of all flashings, verification of proper drainage, and cleanup removing all debris. Quality tile installation takes 3-7 days for typical residential roofs depending on size and complexity. The investment in proper installation ensures tile roofs deliver their full 50-100+ year potential without premature failures requiring expensive repairs.
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
                Tile Roof Repair & Restoration
              </h2>
              <p className="text-lg mb-6">
                Even durable tile roofs require periodic maintenance and occasional repairs maximizing their exceptional lifespan. Common tile roof issues include cracked or broken tiles from thermal stress, foot traffic, or falling debris; underlayment deterioration (typically after 20-30 years) requiring replacement beneath intact tiles; flashing failures around chimneys, skylights, and penetrations; hip and ridge cap loosening from mortar deterioration or fastener failure; and valley problems from accumulated debris or improper construction. Early detection and repair prevent minor issues from becoming water intrusion and interior damage.
              </p>
              <p className="text-lg mb-6">
                Tile replacement requires careful technique removing broken tiles without damaging adjacent tiles, inspecting and repairing underlayment, and installing perfectly matched replacement tiles. We maintain extensive inventories of common Tucson tile profiles and colors ensuring seamless repairs. For discontinued or custom tiles, we work with specialty suppliers or commission custom-made replacements. When exact matches are unavailable, we strategically place slightly different tiles in less visible roof areas maintaining aesthetic uniformity from street level.
              </p>
              <p className="text-lg mb-8">
                Underlayment replacement—necessary every 20-30 years even when tiles remain sound—involves removing tiles in affected sections, installing new premium underlayment, and replacing tiles in their original positions. This substantial investment ($8,000-$20,000+ depending on roof size) extends tile roof life another 20-30 years at a fraction of complete replacement cost. We provide honest assessments helping you determine whether repairs, underlayment replacement, or complete reroof provides best value. Our reputation for integrity has earned over 22,000 five-star reviews from homeowners who trust our guidance on these important decisions.
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
                Historic Tile Roof Restoration
              </h2>
              <p className="text-lg mb-6">
                Tucson's historic neighborhoods feature magnificent tile roofs on Spanish Colonial, Mission Revival, and Territorial homes dating to the early 1900s. Many original clay tiles remain serviceable after 80-100+ years, testament to tile roofing's exceptional durability. Historic tile roof restoration preserves these architectural treasures while ensuring modern weather protection and code compliance. Our restoration expertise includes work on properties listed on the National Register of Historic Places and within historic preservation districts requiring adherence to preservation standards.
              </p>
              <p className="text-lg mb-6">
                Restoration process begins with comprehensive documentation photographing existing conditions, cataloging tile profiles and colors, and assessing structural adequacy. We carefully remove and inventory all salvageable tiles, labeling hip and ridge pieces for accurate reinstallation. Damaged or broken tiles are replaced with period-appropriate matches sourced from architectural salvage, specialty suppliers, or custom fabrication. Structural repairs address any framing deterioration or inadequacies discovered during tear-off. Modern underlayment and flashing provide superior weather protection while remaining concealed beneath historic tiles.
              </p>
              <p className="text-lg mb-8">
                Tile reinstallation follows original patterns and techniques, though we incorporate modern fastening methods ensuring wind resistance and code compliance. Mortar for hip and ridge caps matches original color and composition. Final restoration includes verification that work meets historic preservation guidelines when applicable. Restoration costs typically range $18-$35 per square foot depending on tile condition and structural requirements—higher than standard tile installation due to specialized labor and materials but worthwhile for preserving Tucson's architectural heritage. Restored historic tile roofs provide another 50-75 years of service while maintaining the authentic character that makes these properties unique.
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
                Why Choose Intelligent Design for Tile Roofing?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has served Tucson homeowners since 1979. We're a family and veteran-owned business with over 45 years of experience providing professional tile roofing services throughout Southern Arizona. Our licensed contractors have installed, repaired, and restored thousands of tile roofs ranging from modest residential homes to prestigious historic properties and commercial buildings.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've earned our reputation for superior craftsmanship, honest guidance, and exceptional service. When you choose Intelligent Design for tile roofing, you receive: free comprehensive consultations and estimates, expert material selection for your architectural style and budget, structural evaluation and reinforcement recommendations, professional installation by experienced tile roofers, comprehensive warranties on materials and workmanship, perfect tile matching for repairs using extensive inventory, historic preservation expertise for period properties, and responsive service addressing concerns promptly.
              </p>
              <p className="text-lg mb-8">
                We maintain relationships with leading tile manufacturers and suppliers including US Tile, Boral, Eagle, and Ludowici, ensuring access to quality materials, technical support, and specialty tiles. Our long history in Tucson means we understand local architectural styles, historic preservation requirements, and building codes ensuring your tile roof meets all requirements while delivering the aesthetics and performance you envision. Tile roofing represents a significant investment—you deserve the peace of mind that comes from working with Tucson's most trusted roofing professionals who will ensure your tile roof provides generations of beauty and protection.
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
        <CommonQuestions questions={tileRoofCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={tileRoofsFAQs.faqs} />

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Tile Roofing Service Today
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