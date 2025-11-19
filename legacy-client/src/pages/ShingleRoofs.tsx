import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceFAQ from '@/components/ServiceFAQ';
import { shingleRoofsFAQs } from '@/data/faqs/roofing';
import { CommonQuestions } from "@/components/CommonQuestions";
import { shingleRoofCommonQuestions } from "@/data/commonQuestions/roofing";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import ShingleRoofsSchema from '@/components/ShingleRoofsSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import shingleRoofHero from '@assets/generated_images/asphalt_shingle_roof_detail_d24441ea.webp';

export default function ShingleRoofs() {
  const description = 'Expert asphalt shingle roofing in Tucson. Architectural shingles, 3-tab, installation, repair & replacement. Energy-efficient solutions. 45+ years experience. Call (520) 333-2665.';
  const imageUrl = `${SITE_URL}${shingleRoofHero}`;

  return (
    <>
      <MetaHead
        title="Shingle Roofing Tucson AZ | Asphalt Shingle Installation & Repair"
        description={description}
        canonical={`${SITE_URL}/shingle-roofs-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Shingle Roofing Tucson AZ | Asphalt Shingle Installation & Repair' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/shingle-roofs-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional asphalt shingle roof installation in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Shingle Roofing Tucson AZ | Asphalt Shingle Installation & Repair' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional asphalt shingle roof installation in Tucson' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <ShingleRoofsSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${shingleRoofHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Asphalt Shingle Roofing Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Architectural & 3-Tab Shingles | Energy-Efficient Options | Expert Installation & Repair | Free Estimates | 45+ Years Experience
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
              Why Choose Intelligent Design for Shingle Roofing?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Premium Shingle Materials</p>
                  <p className="text-sm text-gray-600">Architectural shingles | Impact-resistant options | Designer styles | Energy-efficient cool roof shingles</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Expert Desert Installation</p>
                  <p className="text-sm text-gray-600">Tucson-specific techniques | Proper ventilation | Monsoon-resistant | Heat-rated underlayment</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Lifetime Workmanship Warranty</p>
                  <p className="text-sm text-gray-600">Manufacturer warranties | Lifetime labor warranty | Transferable coverage | Leak guarantees</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Local expertise | Trusted since 1979</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Roof Replacement</p>
                  <p className="text-sm text-gray-600">Tear-off & disposal | Decking inspection & repair | Ventilation upgrades | Gutters & trim</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Insurance Claim Assistance</p>
                  <p className="text-sm text-gray-600">Work with adjusters | Detailed documentation | Maximize coverage | Hassle-free process</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Expert Asphalt Shingle Roofing in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Asphalt shingle roofing combines affordability, versatility, and proven performance, making it one of the most popular residential roofing choices in Tucson. Modern architectural shingles offer superior durability, wind resistance, and aesthetic appeal compared to traditional 3-tab shingles, while advanced cool roof technologies reduce heat absorption and cooling costs in our desert climate. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've installed thousands of shingle roofs throughout Tucson since 1979, providing expert craftsmanship using premium materials designed specifically for Southern Arizona's extreme conditions.
              </p>
              <p className="text-lg mb-6">
                Tucson's climate presents unique challenges for shingle roofing that require specialized knowledge and installation techniques. Our intense UV radiation—among the highest in the United States—accelerates granule loss and shingle deterioration, reducing lifespan 20-30% compared to moderate climates. Daily temperature swings of 40-50°F cause thermal expansion and contraction stressing shingles and fasteners. Summer roof surface temperatures exceeding 165°F can prematurely age standard shingles not rated for desert heat. Monsoon winds reaching 50-70 mph test wind resistance and installation quality, while brief but intense rainfall reveals any flashing or sealing deficiencies.
              </p>
              <p className="text-lg mb-8">
                Successful shingle roofing in Tucson requires careful material selection, proper installation techniques, and adequate ventilation to manage extreme heat. We use architectural shingles rated for high-wind and high-temperature applications, heat-resistant synthetic underlayment (not standard felt that degrades in attic temperatures exceeding 180°F), proper ventilation systems reducing attic heat by 30-40°F, light-colored or cool roof shingles reflecting solar radiation, and Tucson-specific installation techniques including additional fasteners and sealed edges. Whether you need new shingle roof installation, replacement of an aging roof, repairs to storm damage, or ventilation upgrades, we provide solutions engineered for decades of reliable protection in Tucson's demanding climate.
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
                Architectural vs. 3-Tab Shingles: Choosing the Right Option
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Architectural Shingles: The Premium Choice
              </h3>
              <p className="text-lg mb-6">
                Architectural shingles—also called dimensional or laminate shingles—represent the current standard for quality residential roofing in Tucson. These multi-layer shingles create three-dimensional appearance with depth, texture, and visual appeal far exceeding flat 3-tab shingles. Construction uses two or more layers of asphalt shingle material laminated together, creating thicker, heavier shingles (typically 300-400 pounds per square versus 200-250 for 3-tab) that resist wind uplift, granule loss, and thermal stress better than single-layer products.
              </p>
              <p className="text-lg mb-6">
                Performance advantages make architectural shingles ideal for Tucson: superior wind resistance with ratings of 110-130 mph (versus 60-70 mph for basic 3-tab), enhanced UV resistance from thicker material and superior granule adhesion, longer lifespan averaging 18-25 years in Tucson (versus 12-15 for 3-tab), better impact resistance protecting against hail and wind-driven debris, and improved heat resistance maintaining integrity in 165°F+ surface temperatures. Aesthetic benefits include extensive color and style options mimicking wood shake, slate, or tile appearance, dimensional shadowing creating visual depth, and enhanced curb appeal increasing home value $5,000-$15,000.
              </p>
              <p className="text-lg mb-8">
                Architectural shingle costs average $120-$180 per square installed—approximately $30-$60 more per square than 3-tab—but the investment delivers superior performance, longer lifespan, and better warranty coverage. Most manufacturers offer 30-50 year limited warranties on architectural shingles (versus 20-25 years for 3-tab), and many include algae resistance, impact resistance options, and enhanced wind coverage. For Tucson's extreme climate, the additional cost of architectural shingles is worthwhile for homeowners planning to keep their homes 10+ years, as superior durability and longevity provide better long-term value than cheaper 3-tab options.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                3-Tab Shingles: Economical Protection
              </h3>
              <p className="text-lg mb-6">
                3-tab shingles offer basic but reliable protection at lower cost, making them suitable for rental properties, flip projects, or homeowners on tight budgets planning to sell within 5-10 years. These single-layer shingles feature uniform thickness and flat appearance with three tabs creating a repetitive pattern. While aesthetically simpler than architectural shingles, quality 3-tab products from reputable manufacturers provide adequate weather protection when properly installed with appropriate underlayment and ventilation.
              </p>
              <p className="text-lg mb-8">
                In Tucson's harsh climate, 3-tab shingles face challenges: faster granule loss from UV exposure, reduced wind resistance requiring additional fasteners, shorter lifespan (typically 12-15 years versus 18-25 for architectural), greater susceptibility to thermal curling and cracking, and limited warranty coverage. Despite these limitations, 3-tab shingles installed with premium underlayment, proper ventilation, and Tucson-specific techniques can provide reliable protection for their expected lifespan. We recommend 3-tab primarily for budget-conscious projects where upfront cost outweighs long-term value considerations. For most Tucson homeowners, architectural shingles' superior performance and longevity justify the modest cost premium.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Compare Options"
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
                Cool Roof Technology & Energy Efficiency
              </h2>
              <p className="text-lg mb-6">
                Cool roof shingles use advanced reflective technology to combat Tucson's intense solar heat, reducing roof surface temperatures by 20-50°F compared to standard shingles. These energy-efficient products incorporate specially engineered granules containing reflective pigments that bounce solar radiation back into the atmosphere rather than absorbing it as heat. In Tucson's climate where standard asphalt shingles can reach 165-180°F surface temperatures, cool roof shingles typically peak at 140-150°F, dramatically reducing heat transfer into attic spaces and living areas.
              </p>
              <p className="text-lg mb-6">
                Energy savings from cool roof shingles are substantial in Tucson: 10-20% reductions in summer cooling costs, 15-30°F lower attic temperatures improving HVAC efficiency, reduced thermal stress extending shingle lifespan 15-25%, and enhanced comfort in upper-floor rooms. Cool roof technology works across all color ranges—even darker colors now available with reflective technology—though lighter colors still provide maximum benefit. These shingles meet ENERGY STAR requirements and often qualify for utility rebates or tax credits, partially offsetting their modest $10-$20 per square cost premium over standard shingles.
              </p>
              <p className="text-lg mb-8">
                For maximum energy efficiency in Tucson, we recommend combining cool roof shingles with proper attic ventilation and adequate insulation. This comprehensive approach reduces cooling costs 20-35%, extends roof system lifespan, improves indoor comfort, and reduces environmental impact. Cool roof shingles from major manufacturers (GAF, Owens Corning, CertainTeed) offer the same warranty coverage, wind resistance, and aesthetic options as standard architectural shingles while delivering measurable energy savings throughout their service life. In Tucson's extreme heat, cool roof technology isn't a luxury—it's a smart investment in comfort, efficiency, and roof longevity.
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
                Professional Shingle Roof Installation Process
              </h2>
              <p className="text-lg mb-6">
                Quality shingle roof installation requires meticulous attention to detail and specialized techniques for Tucson's climate. Our comprehensive process begins with complete tear-off and disposal of existing roofing materials, deck inspection identifying and repairing damaged or deteriorated sheathing, and cleaning of all debris ensuring proper surface preparation. This thorough approach prevents hidden problems from compromising your new roof's performance and allows us to address structural issues before they worsen.
              </p>
              <p className="text-lg mb-6">
                Critical installation steps include drip edge installation at eaves and rakes channeling water away from fascia, ice/water shield at valleys and penetrations (despite Tucson's lack of ice, this premium product provides superior leak protection), synthetic underlayment rated to 240°F+ covering entire deck (not standard felt that fails in desert heat), proper valley construction using metal or woven shingle techniques, starter strips at all edges ensuring wind resistance, and precise shingle installation following manufacturer specifications for nailing, overlap, and alignment. In Tucson, we pay special attention to ventilation—installing or upgrading ridge vents, soffit vents, or gable vents ensuring adequate airflow that reduces attic temperatures 30-40°F.
              </p>
              <p className="text-lg mb-8">
                Final installation steps include proper flashing around chimneys, skylights, vents, and penetrations using premium materials and techniques that account for thermal movement, hip and ridge cap installation with proper exposure and sealing, gutter and downspout integration ensuring proper water management, comprehensive cleanup removing all debris and nails using magnetic tools, and final inspection verifying workmanship quality and warranty compliance. Typical residential shingle roof installation takes 1-3 days depending on size and complexity. We work efficiently to minimize disruption while ensuring meticulous attention to every detail protecting your home for decades to come.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Installation"
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
                Shingle Roof Repair & Maintenance
              </h2>
              <p className="text-lg mb-6">
                Regular maintenance extends shingle roof lifespan and prevents minor issues from becoming expensive failures. Recommended maintenance includes annual inspections identifying damaged, missing, or deteriorating shingles; debris removal preventing moisture retention and accelerated aging; gutter cleaning ensuring proper drainage; flashing inspection and resealing as needed; and attic inspection checking ventilation, insulation, and leak signs. Annual professional inspections cost $150-$300 but identify problems early when repairs are simple and inexpensive rather than waiting for leaks signaling significant damage.
              </p>
              <p className="text-lg mb-6">
                Common shingle roof repairs in Tucson include individual shingle replacement for wind-damaged or broken shingles ($200-$500), valley repairs addressing concentrated water flow areas ($300-$800), flashing repairs around chimneys and penetrations ($250-$700), ridge cap replacement for wind-lifted or deteriorated caps ($400-$1,200), and ventilation improvements reducing heat stress ($500-$2,000). Early repairs prevent water intrusion that damages decking, insulation, and interior spaces—costs escalating from hundreds to thousands when neglected.
              </p>
              <p className="text-lg mb-8">
                For aging shingle roofs showing widespread deterioration, we provide honest assessments of repair versus replacement economics. Generally, if repairs cost more than 30% of replacement and the roof is 15+ years old, replacement provides better value through improved energy efficiency, enhanced aesthetics, comprehensive warranty coverage, and decades of maintenance-free performance. We'll never pressure you into unnecessary replacement, but we will provide the information needed for informed decisions protecting your investment and your home. Our reputation for honest guidance has earned over 22,000 five-star reviews from satisfied Tucson homeowners.
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
                Why Choose Intelligent Design for Shingle Roofing?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has served Tucson homeowners since 1979. We're a family and veteran-owned business with over 45 years of experience providing professional roofing services throughout Southern Arizona. Our licensed contractors understand the unique challenges of Tucson's climate and have installed thousands of shingle roofs using proven techniques and premium materials engineered for desert conditions.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've earned our reputation for quality workmanship, transparent pricing, and exceptional customer service. When you choose Intelligent Design for shingle roofing, you receive: free comprehensive estimates with multiple material options, expert material selection for Tucson's climate, professional installation by certified technicians, lifetime workmanship warranty on labor, manufacturer warranties on materials (typically 30-50 years), proper ventilation design and installation, insurance claim assistance and documentation, and responsive service addressing any concerns promptly.
              </p>
              <p className="text-lg mb-8">
                We maintain partnerships with leading shingle manufacturers including GAF, Owens Corning, CertainTeed, and Tamko, ensuring access to the latest products, extended warranty programs, and technical support. Our purchasing relationships provide competitive pricing without compromising quality. We believe superior shingle roofing combines quality materials, expert installation, proper ventilation, and ongoing support—all delivered with the honesty and professionalism that has made us Tucson's most trusted home services company. Your home deserves the protection only a properly installed, high-quality shingle roof can provide.
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
        <CommonQuestions questions={shingleRoofCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={shingleRoofsFAQs.faqs} />

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Shingle Roofing Service Today
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