import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceFAQ from '@/components/ServiceFAQ';
import { metalRoofsFAQs } from '@/data/faqs/roofing';
import { CommonQuestions } from "@/components/CommonQuestions";
import { metalRoofCommonQuestions } from "@/data/commonQuestions/roofing";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import MetalRoofsSchema from '@/components/MetalRoofsSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import metalRoofHero from '@assets/generated_images/standing_seam_metal_roof_bbc9c9f9.webp';

export default function MetalRoofs() {
  const description = 'Expert metal roofers in Tucson, AZ specializing in standing seam metal roof install, corrugated metal roofing, 22-24-26 gauge systems. Residential & commercial. 45+ years experience. Call (520) 333-2665.';
  const imageUrl = `${SITE_URL}${metalRoofHero}`;

  return (
    <>
      <MetaHead
        title="Metal Roofing Tucson AZ | Standing Seam & Corrugated Metal Roof Installation"
        description={description}
        canonical={`${SITE_URL}/metal-roofing-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Metal Roofing Tucson AZ | Standing Seam & Corrugated Metal Roof Installation' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/metal-roofing-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Standing seam metal roof installation in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Metal Roofing Tucson AZ | Standing Seam & Corrugated Metal Roof Installation' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Standing seam metal roof installation in Tucson' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <MetalRoofsSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${metalRoofHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Metal Roofing Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Standing Seam & Corrugated Metal | 40-70 Year Lifespan | Energy-Efficient Cool Roofs | Residential & Commercial | Free Estimates | 45+ Years Experience
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
              Why Choose Intelligent Design for Metal Roofing?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Exceptional 40-70 Year Lifespan</p>
                  <p className="text-sm text-gray-600">Outlasts other materials 2-4x | Minimal maintenance | Superior durability | Best long-term value</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Maximum Energy Efficiency</p>
                  <p className="text-sm text-gray-600">Cool roof technology | Reduce cooling costs 20-30% | Reflect 60-80% solar radiation | ENERGY STAR rated</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Premium 22-24-26 Gauge Metal Roofing Systems</p>
                  <p className="text-sm text-gray-600">Standing seam | Corrugated metal | Metal shingles | Stone-coated metal tile | Professional-grade thickness & quality</p>
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
                  <p className="font-semibold text-gray-900 mb-1">Superior Wind & Weather Resistance</p>
                  <p className="text-sm text-gray-600">Monsoon-proof installation | Interlocking panels | 120+ mph wind ratings | Fire resistant</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Lifetime Warranties Available</p>
                  <p className="text-sm text-gray-600">Material warranties 40-50 years | Paint warranties 25-40 years | Labor warranties | Transferable coverage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Expert Metal Roofers | Metal Roofing Tucson AZ
              </h2>
              <p className="text-lg mb-6">
                As Tucson's leading metal roofers since 1979, we specialize in professional metal roof install using premium 22-24-26 gauge materials that deliver unmatched longevity, energy efficiency, and weather protection. Metal roofing Tucson AZ properties face demanding climate challenges, and our modern metal roofing systems far surpass the noisy, rust-prone barn roofs of decades past. Our standing seam metal roofers provide expert craftsmanship in standing seam, corrugated metal, metal shingles, and stone-coated metal tile systems—all engineered specifically for Southern Arizona desert conditions with professional-grade thickness and quality.
              </p>
              <p className="text-lg mb-6">
                Tucson's extreme climate makes metal roofing particularly advantageous. Our intense UV radiation and thermal extremes that rapidly age organic materials (asphalt, wood) have minimal effect on properly coated metal. Daily temperature swings causing expansion and contraction in rigid materials are accommodated by metal roofing's flexibility and properly designed fastening systems. Summer surface temperatures exceeding 165°F—problematic for asphalt shingles—are easily handled by metal rated to 500°F+. Monsoon winds reaching 60-70 mph that lift and tear other materials are resisted by metal's interlocking panels and secure attachment. The result: 40-70 year lifespans common for quality metal roofing in Tucson versus 15-25 years for asphalt shingles.
              </p>
              <p className="text-lg mb-8">
                Energy efficiency makes metal roofing especially valuable in Tucson's extreme heat. Reflective coatings on light-colored metal roofs reflect 60-80% of solar radiation versus 20-30% for dark asphalt shingles, reducing roof surface temperatures 50-70°F. This dramatic temperature reduction translates directly to cooling cost savings of 20-30%, reduced HVAC equipment stress, and improved interior comfort. Cool roof metal products often qualify for utility rebates, tax credits, and LEED points, partially offsetting higher upfront costs. Combined with minimal maintenance, exceptional durability, and superior storm resistance, metal roofing provides outstanding long-term value for Tucson residential and commercial properties. Whether you need new construction roofing, replacement of aging systems, or restoration of existing metal roofs, we provide solutions engineered for decades of reliable, energy-efficient performance.
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
                Standing Seam Metal Roofers: Premium 22-26 Gauge Systems
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Superior Design & Functionality
              </h3>
              <p className="text-lg mb-6">
                Standing seam metal roofing represents the premium tier of metal roofing systems, offering superior performance, modern aesthetics, and exceptional longevity. Our standing seam metal roofers install 22-gauge and 24-gauge premium systems—professional-grade thickness providing maximum durability and weather resistance. The distinctive vertical panels with raised seams create clean, continuous lines running from eave to ridge, contributing to contemporary and modern architectural styles increasingly popular in metal roofing Tucson AZ installations. The defining feature—concealed fasteners beneath raised seams rather than penetrating panel faces—provides critical performance advantages: complete weather-tightness without fastener penetrations vulnerable to leaks, accommodation of thermal expansion and contraction through floating clip systems, elimination of fastener maintenance (no rubber washers to replace), and superior wind uplift resistance through continuous attachment.
              </p>
              <p className="text-lg mb-6">
                Standing seam systems work exceptionally well for metal roofing Tucson properties through ability to handle thermal movement (panels can expand/contract 3-4 inches on long runs without stress), compatibility with low-slope applications (works on pitches as low as 2:12, expanding design possibilities), excellent drainage from raised seams channeling water, and minimal maintenance requirements. Panel profiles include snap-lock (panels snap together, mechanically seamed, most economical standing seam), mechanically seamed (seams crimped with specialized tools, maximum weather-tightness, highest wind resistance), and architectural seams (wider seams creating dramatic shadow lines, premium aesthetics). Materials range from 22-gauge galvanized steel (economical, 30-40 year lifespan) to 24-gauge Galvalume (aluminum-zinc coating, 40-50 years) to premium aluminum (corrosion-proof, 50-70 years).
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Energy Efficiency & Cool Roof Technology
              </h3>
              <p className="text-lg mb-6">
                Standing seam metal roofs excel in Tucson's heat through advanced cool roof coatings maximizing solar reflectance and thermal emittance. Kynar 500 (PVDF) or similar fluoropolymer coatings provide exceptional color retention, superior UV resistance, and self-cleaning properties resisting dirt accumulation. Cool roof pigments engineered to reflect infrared radiation—even in darker colors—enable aesthetic choices while maintaining energy efficiency. Testing shows light-colored standing seam roofs reduce surface temperatures to 140-150°F versus 180-195°F for dark asphalt shingles, translating to attic temperature reductions of 20-30°F.
              </p>
              <p className="text-lg mb-8">
                Energy benefits compound in Tucson: lower attic temperatures reduce cooling loads 20-30%, reduced thermal cycling extends HVAC equipment life, improved upper-floor comfort, and reduced peak electrical demand lowering utility costs. Many standing seam products meet ENERGY STAR requirements and qualify for rebates from Tucson Electric Power or other utilities. Life-cycle cost analysis demonstrates standing seam roofs—despite 2-3x higher upfront cost than shingles—provide superior value through energy savings ($300-$800 annually), eliminated replacement costs over 40-70 year lifespan, minimal maintenance, and enhanced property value. For long-term property owners, standing seam metal roofing represents the ultimate investment in performance, efficiency, and durability.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Learn More About Standing Seam"
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
                Corrugated Metal & Alternative Systems
              </h2>
              <p className="text-lg mb-6">
                Corrugated metal roofing—featuring exposed fasteners and repeating wave or ribbed patterns—offers excellent performance at lower cost than standing seam, making it popular for budget-conscious applications, agricultural buildings, and designs emphasizing industrial or rustic aesthetics. Modern corrugated metal roofing far exceeds old barn roofs through Galvalume or painted finishes preventing rust, rubber-gasketed fasteners preventing leaks, proper underlayment and installation techniques, and profiles designed for weather-tightness. While exposed fasteners require periodic maintenance (washer replacement every 15-20 years), corrugated metal provides 30-50 year lifespans at costs 30-40% less than standing seam.
              </p>
              <p className="text-lg mb-6">
                Popular corrugated profiles include R-panel (vertical ribs, economical, widely available), PBR panel (similar to R-panel with different rib spacing), 5-V crimp (traditional agricultural profile), and corrugated (rounded waves, classic appearance). For Tucson residential applications, we typically recommend painted or coated panels in light colors maximizing energy efficiency and aesthetics. Corrugated metal works well for shops, garages, covered patios, additions, and homes where rustic or contemporary-industrial aesthetics complement architectural style. Requires minimum 3:12 pitch for weather-tightness.
              </p>
              <p className="text-lg mb-8">
                Alternative metal roofing systems include metal shingles mimicking wood shake, slate, or tile appearance while providing metal's durability and fire resistance; stone-coated metal tiles combining metal substrate with stone granule coating for tile aesthetics with metal performance; and specialty profiles including metal standing seam tiles, diamond-pattern panels, and custom architectural profiles. These systems bridge traditional aesthetics with metal's superior performance, ideal for HOAs restricting visible metal roofing or homeowners wanting specific appearances with metal benefits. Costs typically fall between corrugated and standing seam ($9-$16 per square foot installed) with 40-60 year lifespans and excellent energy efficiency.
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
                Expert Metal Roof Install Services | 22-24-26 Gauge Quality
              </h2>
              <p className="text-lg mb-6">
                Professional metal roof install requires specialized knowledge and techniques ensuring optimal performance and longevity. Our experienced metal roofers use premium 22-gauge, 24-gauge, and 26-gauge materials—professional-grade thickness delivering superior durability compared to thin, inferior products. Our comprehensive metal roofing Tucson AZ process begins with structural evaluation confirming deck adequacy and proper ventilation, design including panel layout, trim details, and thermal movement accommodation, and material selection balancing performance, aesthetics, and budget. Detailed proposals outline gauge specifications, warranties, and timeline enabling informed decisions.
              </p>
              <p className="text-lg mb-6">
                Installation begins with complete tear-off (when replacing existing roofs), deck inspection and repair, and specialized underlayment installation. Metal roofs require underlayment rated for metal's unique properties—higher temperatures from solar reflection, potential condensation from temperature differentials, and compatibility with metal movement. Synthetic underlayment or peel-and-stick products work well. Critical installation steps include drip edge and trim installation creating proper water management, valley construction using matching metal or specialized valley panels, thermal break installation preventing conductive heat transfer, and panel installation following manufacturer specifications for fastening, overlap, and seaming.
              </p>
              <p className="text-lg mb-8">
                For standing seam: panels attach via hidden clips allowing thermal movement, seams are mechanically crimped or snap-locked ensuring weather-tightness, and all penetrations receive custom flashings. For exposed fastener systems: specialized screws with EPDM washers prevent leaks, proper fastener placement in panel ribs (not valleys) ensures weather-tightness, and sealants at end laps provide additional protection. Final installation includes custom flashing around chimneys, skylights, and penetrations, ridge caps and trim completing transitions, gutter integration, comprehensive cleanup, and final inspection verifying quality. Typical metal roof installation takes 2-4 days for residential projects. Precision installation ensures your metal roof delivers its full 40-70 year potential while providing maximum energy efficiency and weather protection.
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
                Metal Roof Maintenance & Longevity
              </h2>
              <p className="text-lg mb-6">
                Metal roofing's exceptional longevity stems partly from minimal maintenance requirements compared to other materials. Recommended maintenance schedule includes annual inspections checking for loose fasteners (exposed fastener systems), damaged panels or coating, sealant condition at penetrations, debris accumulation in valleys, and proper drainage. Pre-monsoon inspections ensure storm readiness, while post-monsoon checks identify any wind or hail damage requiring repair. For most metal roofs, annual inspections cost $150-$300 and identify issues when repairs are simple and inexpensive.
              </p>
              <p className="text-lg mb-6">
                Specific maintenance needs vary by system. Standing seam roofs with concealed fasteners require minimal attention—primarily debris removal and checking seam integrity. Exposed fastener systems need periodic fastener inspection and possible washer replacement every 15-20 years ($500-$1,500 for typical roof) as rubber washers deteriorate from UV exposure. All metal roofs benefit from touch-up paint on scratches or damaged areas preventing corrosion, though quality coatings resist damage and corrosion for decades. Gutter cleaning prevents water backup that can stress flashing connections.
              </p>
              <p className="text-lg mb-8">
                Long-term maintenance over a metal roof's 40-70 year lifespan typically totals $3,000-$8,000—far less than the $15,000-$40,000 cost of 2-3 shingle roof replacements over the same period. Many metal roofs installed in Tucson 40-50 years ago remain serviceable with only minor maintenance. Keys to longevity: quality materials with proven coatings (Kynar 500 or equivalent), professional installation ensuring proper attachment and flashing, periodic inspections identifying minor issues before they worsen, prompt repairs addressing damage, and avoiding foot traffic except when necessary (use proper walkway protection). With minimal attention, your metal roof provides 40-70+ years of reliable, energy-efficient protection—potentially the last roof your building ever needs.
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
                Why Choose Intelligent Design for Metal Roofing?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has served Tucson homeowners and businesses since 1979. We're a family and veteran-owned company with over 45 years of experience providing professional metal roofing Tucson AZ services throughout Southern Arizona. Our licensed metal roofers have installed thousands of metal roofs ranging from residential standing seam to large commercial corrugated installations, understanding the specialized techniques and premium 22-24-26 gauge materials ensuring optimal performance in Tucson's demanding climate.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on superior craftsmanship, honest guidance, and exceptional service. When you choose Intelligent Design for metal roof install services, you receive: free comprehensive consultations and estimates, expert system selection for your needs and budget, energy efficiency analysis and recommendations, professional installation by experienced standing seam metal roofers, comprehensive warranties on materials and workmanship, proper thermal design preventing issues, cool roof optimization for maximum savings, and responsive service addressing concerns promptly.
              </p>
              <p className="text-lg mb-8">
                We partner with leading metal roofing manufacturers including McElroy, MBCI, Berridge, and ASC Building Products, ensuring access to quality materials, technical support, and manufacturer warranties. Our experience spans all metal roofing systems—standing seam, corrugated, metal shingles, and specialty profiles—enabling us to recommend optimal solutions for your property. Whether you need new construction roofing, replacement of aging systems, or restoration of existing metal roofs, we provide expert guidance and craftsmanship delivering the longevity, energy efficiency, and weather protection metal roofing promises. Your investment deserves the expertise and integrity that has made us Tucson's most trusted roofing professionals for over 45 years.
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
        <CommonQuestions questions={metalRoofCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={metalRoofsFAQs.faqs} />

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Metal Roofing Service Today
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