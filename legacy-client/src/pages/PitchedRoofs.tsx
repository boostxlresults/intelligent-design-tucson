import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceFAQ from '@/components/ServiceFAQ';
import { pitchedRoofsFAQs } from '@/data/faqs/roofing';
import { CommonQuestions } from "@/components/CommonQuestions";
import { roofReplacementCommonQuestions } from "@/data/commonQuestions/roofing";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import PitchedRoofsSchema from '@/components/PitchedRoofsSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import pitchedRoofHero from '@assets/generated_images/residential_pitched_roof_structure_1a18974e.webp';

export default function PitchedRoofs() {
  const description = 'Expert pitched roof installation in Tucson. Gabled roofs, sloped systems, proper ventilation, residential & commercial. Superior water drainage. 45+ years experience. Call (520) 333-2665.';
  const imageUrl = `${SITE_URL}${pitchedRoofHero}`;

  return (
    <>
      <MetaHead
        title="Pitched Roof Installation Tucson AZ | Sloped Roof Systems & Repair"
        description={description}
        canonical={`${SITE_URL}/pitched-roofs-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Pitched Roof Installation Tucson AZ | Sloped Roof Systems & Repair' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/pitched-roofs-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Residential pitched roof structure in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Pitched Roof Installation Tucson AZ | Sloped Roof Systems & Repair' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Residential pitched roof structure in Tucson' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <PitchedRoofsSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${pitchedRoofHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Pitched Roof Systems Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Gabled & Hip Roofs | Sloped Roof Systems | Superior Ventilation | Residential & Commercial | Free Estimates | 45+ Years Experience
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
              Why Choose Intelligent Design for Pitched Roofing?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Superior Water Drainage</p>
                  <p className="text-sm text-gray-600">Sloped design | No ponding issues | Rapid monsoon runoff | Valley systems | Long-lasting performance</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Optimal Ventilation Design</p>
                  <p className="text-sm text-gray-600">Ridge & soffit vents | Reduce attic heat 30°F+ | Extend roof life 20-30% | Lower cooling costs</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">All Material Options</p>
                  <p className="text-sm text-gray-600">Shingles, tile, metal | Budget to premium | Desert-rated materials | Perfect for Tucson climate</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Gable & hip roof experts | Trusted since 1979</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Custom Roof Design</p>
                  <p className="text-sm text-gray-600">Optimal pitch selection | Architectural compatibility | Energy efficiency focus | Code compliance</p>
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
                Expert Pitched Roof Installation in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Pitched roofs—also called sloped roofs—are the most common residential and commercial roofing configuration in Tucson, offering superior water drainage, ventilation potential, and material longevity compared to flat roofs. Whether traditional gable roofs on ranch-style homes, elegant hip roofs on Spanish Colonial residences, or complex combination designs on custom properties, pitched roofs provide reliable weather protection while accommodating any roofing material from economical asphalt shingles to premium clay tiles. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've designed and installed thousands of pitched roofs throughout Tucson since 1979, combining engineering expertise with craftsmanship ensuring optimal performance in our demanding desert climate.
              </p>
              <p className="text-lg mb-6">
                Pitched roof design requires careful consideration of multiple factors specific to Tucson's climate and building requirements. Optimal roof pitch balances water drainage (critical during monsoons delivering 2-4 inches per hour), ventilation effectiveness (essential for managing extreme attic heat), material compatibility (different materials require different minimum pitches), wind resistance (steeper pitches can experience greater wind forces), energy efficiency (pitch affects solar heat gain and ventilation), and aesthetics (pitch dramatically impacts home appearance and style). In Tucson, most residential pitched roofs use 4:12 to 6:12 pitch (4-6 inches vertical rise per 12 inches horizontal run), providing excellent drainage and ventilation while controlling costs.
              </p>
              <p className="text-lg mb-8">
                Proper ventilation is absolutely critical for pitched roof performance in Tucson's extreme heat. Summer attic temperatures without adequate ventilation routinely exceed 150-160°F, cooking roofing materials from beneath, dramatically reducing their lifespan, and transferring excessive heat to living spaces below. Proper ventilation—combining intake vents (typically soffit vents) with exhaust vents (ridge vents, gable vents, or powered attic fans)—reduces attic temperatures to 120-130°F, extending roofing material life 20-30%, lowering cooling costs 10-20%, and improving interior comfort. Whether you need new pitched roof construction, replacement of aging roofs, ventilation upgrades, or repairs to storm damage, we provide comprehensive solutions engineered for Tucson's unique climate challenges and your specific property requirements.
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
                Common Pitched Roof Designs for Tucson Homes
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Gable Roofs: Simple & Effective
              </h3>
              <p className="text-lg mb-6">
                Gable roofs—featuring two sloping sides meeting at a central ridge—represent the most economical and straightforward pitched roof design. This classic configuration excels in Tucson through simple construction reducing labor costs, excellent water drainage with no complex valleys or transitions, superior ventilation when combined with gable-end vents, easy maintenance with accessible slopes, and versatile material compatibility (works with any roofing material). Gable roofs are most common on ranch-style, contemporary, and transitional homes where clean lines and cost-effectiveness are priorities.
              </p>
              <p className="text-lg mb-6">
                Variations on basic gable design include cross-gabled roofs (perpendicular gables creating T or L shapes), Dutch gables (hip roof base with small gable at peak), and open gable roofs (exposed gable ends creating architectural interest). For Tucson monsoons, proper gable-end bracing prevents wind damage—building codes require enhanced connections in high-wind areas. We reinforce gable ends with hurricane ties, proper sheathing attachment, and braced framing ensuring stability during 60-70 mph monsoon gusts. Well-designed gable roofs provide 30-50+ years of reliable service (lifespan depends on roofing material) at installation costs 15-25% less than more complex designs.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Hip Roofs: Enhanced Protection
              </h3>
              <p className="text-lg mb-6">
                Hip roofs—where all sides slope downward to exterior walls without gable ends—offer superior wind resistance ideal for Tucson's monsoon season. The enclosed design prevents wind from getting under roof edges, all roof slopes provide similar wind resistance, and hip roofs rarely suffer edge damage during storms. Hip roofs are traditional for Spanish Colonial, Mediterranean, and many ranch-style homes in Tucson, contributing to the Southwest aesthetic. Construction costs run 15-20% higher than comparable gable roofs due to more complex framing and additional material (hips and ridges require special pieces).
              </p>
              <p className="text-lg mb-8">
                Hip roof ventilation requires different approaches than gable roofs since there are no gable ends for vents. Solutions include ridge vents running the full ridge length, specialized hip vents for angled ridges, soffit vents for intake, and sometimes supplemental powered attic fans. Proper hip roof ventilation achieves the same temperature reduction as gable roofs but requires more sophisticated design. For Tucson homeowners prioritizing storm resistance and traditional aesthetics over initial cost, hip roofs provide excellent long-term value through reduced maintenance, superior wind performance, and timeless appearance enhancing property value $8,000-$20,000 compared to basic gable designs.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Compare Designs"
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
                Roof Pitch Selection & Performance
              </h2>
              <p className="text-lg mb-6">
                Roof pitch—the slope of your roof measured as vertical rise per horizontal run—significantly impacts performance, cost, and aesthetics. Common pitches and their characteristics: Low pitch (2:12 to 3:12) minimizes material costs and suits contemporary designs but requires enhanced waterproofing, limits material choices, and provides modest ventilation. Standard pitch (4:12 to 6:12) offers excellent drainage, good ventilation, wide material compatibility, balanced costs, and suits most architectural styles—this is optimal for most Tucson applications. Steep pitch (7:12 to 12:12) provides superior drainage, enhanced aesthetics, maximum attic space, but increases costs 20-40% and requires safety equipment for installation and maintenance.
              </p>
              <p className="text-lg mb-6">
                For Tucson's climate, we typically recommend 4:12 to 6:12 pitch providing rapid water drainage during monsoons (preventing any ponding), adequate slope for natural convection ventilation, compatibility with all roofing materials including tiles, cost-effective construction without extreme pitch premiums, and appropriate aesthetics for most architectural styles. Steeper pitches make sense for specific applications: dramatic architectural styles (Spanish Colonial with prominent tile roofs), maximizing usable attic space for storage or conversion, or properties in foothill areas where enhanced drainage benefits outweigh cost increases.
              </p>
              <p className="text-lg mb-8">
                Pitch affects material selection: asphalt shingles require minimum 2:12 pitch (4:12 recommended for Tucson), concrete and clay tiles need minimum 3:12 (4:12+ ideal), metal roofing works at 2:12+ with standing seam (3:12+ for other profiles), and built-up or modified bitumen suit low-slope applications (1:12 to 3:12). During design, we consider your aesthetic preferences, budget constraints, climate performance requirements, and material choices determining optimal pitch delivering best overall value. Properly pitched roofs shed water rapidly, ventilate effectively, support chosen materials, and provide decades of reliable protection while complementing your home's architectural style.
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
                Ventilation Systems for Pitched Roofs
              </h2>
              <p className="text-lg mb-6">
                Proper attic ventilation is the single most important factor in pitched roof longevity and energy efficiency in Tucson's extreme climate. Ventilation systems must balance intake and exhaust creating continuous airflow: intake vents (typically continuous soffit vents) draw cool outside air into attic space at lowest points, air flows upward through attic driven by natural convection (hot air rises), and exhaust vents (ridge vents, gable vents, or powered fans) expel hot air at highest points. This continuous circulation prevents heat accumulation that cooks roofing materials and transfers to living spaces.
              </p>
              <p className="text-lg mb-6">
                Recommended ventilation configurations for Tucson pitched roofs: Ridge vents with soffit vents provide optimal performance through full-length ridge exhaust, intake along entire perimeter, natural convection without power requirements, and no visible roof penetrations. Gable vents with soffit vents work well for gable roofs providing end-to-end cross-ventilation, simple installation, but less efficient than ridge vents. Powered attic fans with soffit intake offer maximum air movement, thermostatic control, supplemental cooling during extreme heat, but require electrical connection and eventual motor replacement. Combined systems (ridge vents plus powered fans) provide redundancy and maximum performance for large or complex attics.
              </p>
              <p className="text-lg mb-8">
                Proper ventilation requires adequate net free area (NFA): minimum 1 square foot per 150 square feet of attic floor area, balanced 50/50 between intake and exhaust, baffles maintaining airflow path from soffits to ridge, and no obstructions blocking airflow. In Tucson's heat, we often recommend exceeding minimum ventilation requirements by 25-50% providing extra cooling capacity during peak summer months. During roof replacement, we assess existing ventilation, identify deficiencies, and upgrade systems ensuring optimal performance. Investment in proper ventilation ($500-$2,000 during reroof) pays back within 2-4 years through energy savings while extending roof life by decades.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Ventilation Assessment"
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
                Pitched Roof Installation Process
              </h2>
              <p className="text-lg mb-6">
                Professional pitched roof installation ensures decades of reliable performance through meticulous attention to design, materials, and construction techniques. Our comprehensive process begins with site evaluation and design reviewing architectural plans, confirming structural adequacy for roof loads, optimizing pitch for drainage and aesthetics, selecting appropriate materials for climate and budget, and designing ventilation systems for optimal attic temperatures. Detailed proposals outline materials, costs, timeline, and warranty coverage enabling informed decisions.
              </p>
              <p className="text-lg mb-6">
                Construction begins with complete tear-off (when replacing existing roofs) removing all old materials, deck inspection identifying damaged sheathing requiring replacement, and surface preparation ensuring clean, sound substrate. Critical installation steps include drip edge and ice/water shield at vulnerable areas, premium underlayment rated for Tucson heat covering entire deck, proper valley construction (metal or woven depending on material), ventilation installation including baffles maintaining airflow, and roofing material installation following manufacturer specifications. For shingle roofs: proper starter courses, correct nailing patterns, sealed edges for wind resistance. For tile roofs: battens or direct fastening, proper overlap, mortar at hips and ridges.
              </p>
              <p className="text-lg mb-8">
                Final installation includes flashing around chimneys, skylights, vents, and penetrations using premium materials and proven techniques, ridge and hip caps with proper exposure and sealing, gutter and downspout installation or integration ensuring water management, comprehensive cleanup removing all debris, and final inspection verifying code compliance and manufacturer warranty requirements. Typical residential pitched roof installation takes 2-5 days depending on size and complexity. We work efficiently minimizing disruption while ensuring every detail meets our exacting standards. Your new pitched roof represents decades of weather protection and energy efficiency—professional installation ensures you realize that full potential.
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
                Why Choose Intelligent Design for Pitched Roofing?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has served Tucson homeowners and businesses since 1979. We're a family and veteran-owned company with over 45 years of experience providing professional roofing services throughout Southern Arizona. Our licensed contractors have designed and installed thousands of pitched roofs from simple gable designs to complex custom configurations, understanding the engineering principles and construction techniques ensuring optimal performance in Tucson's demanding climate.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on quality workmanship, honest guidance, and exceptional service. When you choose Intelligent Design for pitched roofing, you receive: free comprehensive consultations and estimates, expert roof design optimizing pitch, ventilation, and materials, structural evaluation ensuring adequate support, professional installation by experienced roofers, comprehensive warranties on materials and labor, proper ventilation design and installation, energy efficiency optimization, and responsive service addressing any concerns promptly.
              </p>
              <p className="text-lg mb-8">
                We work with leading manufacturers and suppliers ensuring access to quality materials, technical support, and extended warranty programs. Our experience spans all pitched roof configurations—gable, hip, combination, and custom designs—and all roofing materials from economical shingles to premium tiles and metal. Whether you need new construction roofing, replacement of aging systems, ventilation upgrades, or complex repairs, we provide expert solutions delivering the reliability, energy efficiency, and aesthetics your property deserves. Your pitched roof represents a significant investment in your home's protection and value—trust Tucson's most experienced roofing professionals to do it right.
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
        <CommonQuestions questions={roofReplacementCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={pitchedRoofsFAQs.faqs} />

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Pitched Roof Service Today
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