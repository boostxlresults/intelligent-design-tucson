import { useEffect } from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceFAQ from '@/components/ServiceFAQ';
import { residentialRoofRepairFAQs } from '@/data/faqs/roofing';
import { CommonQuestions } from "@/components/CommonQuestions";
import { roofRepairCommonQuestions } from "@/data/commonQuestions/roofing";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import ResidentialRoofRepairSchema from '@/components/ResidentialRoofRepairSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import roofRepairHero from '@assets/generated_images/residential_roof_repair_technician_daf39f83.webp';

export default function ResidentialRoofRepair() {
  const description = 'Expert residential roof repair in Tucson. Fast leak repairs, tile replacement, shingle repair & emergency services. 45+ years experience. Call (520) 333-2665 for free roof inspection.';
  const imageUrl = `${SITE_URL}${roofRepairHero}`;
  
  useEffect(() => {
    return () => {
      document.querySelectorAll('script[data-schema]').forEach(el => el.remove());
    };
  }, []);

  return (
    <>
      <MetaHead
        title="Residential Roof Repair Tucson AZ | Expert Home Roof Repair Services"
        description={description}
        canonical={`${SITE_URL}/residential-roof-repair-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Residential Roof Repair Tucson AZ | Expert Home Roof Repair Services' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/residential-roof-repair-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional residential roof repair technician working on Tucson home' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Residential Roof Repair Tucson AZ | Expert Home Roof Repair Services' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional residential roof repair technician working on Tucson home' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <ResidentialRoofRepairSchema />
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
                Residential Roof Repair Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Fast Leak Repair | Tile & Shingle Repair | Emergency Storm Damage | Free Roof Inspection | 45+ Years Experience
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
              Why Choose Intelligent Design for Residential Roof Repair?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Fast Emergency Response</p>
                  <p className="text-sm text-gray-600">Same-day leak repairs | 24/7 emergency service | Emergency tarping | Prevent water damage</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">All Roof Types & Materials</p>
                  <p className="text-sm text-gray-600">Tile, shingle, flat, metal roofs | Perfect tile matching | Expert craftsmanship | Proper techniques</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Insurance Claim Assistance</p>
                  <p className="text-sm text-gray-600">Detailed documentation | Work with adjusters | Maximize coverage | Hassle-free claims</p>
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
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Warranties</p>
                  <p className="text-sm text-gray-600">Labor warranties | Material warranties | Leak guarantees | Peace of mind protection</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Free Roof Inspections</p>
                  <p className="text-sm text-gray-600">Complete roof assessment | Photo documentation | Detailed estimates | Honest recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Expert Residential Roof Repair in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Your home's roof is its primary defense against Tucson's intense sun, monsoon rains, and extreme temperature swings. When your residential roof develops leaks, damaged tiles, or structural issues, quick professional repair prevents minor problems from becoming expensive disasters. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've repaired thousands of Tucson residential roofs since 1979, providing fast, reliable, and lasting solutions for every roof type and repair need.
              </p>
              <p className="text-lg mb-6">
                Tucson's unique climate creates specific challenges for residential roofs. Our extreme UV radiation deteriorates roofing materials faster than most climates. Daily temperature swings of 40°F or more cause thermal expansion and contraction that cracks tiles and loosens shingles. Monsoon winds lift and dislodge roofing materials. Brief but intense rainfall tests every seal, flashing, and drainage system. These factors mean Tucson roofs require specialized repair knowledge and techniques different from other regions.
              </p>
              <p className="text-lg mb-8">
                We understand that roof repairs are unexpected expenses and often occur at the worst possible time—during or after storms when leaks threaten your belongings and home structure. Our team provides rapid response for emergency repairs, honest assessments of repair versus replacement options, transparent pricing, and professional craftsmanship backed by comprehensive warranties. Whether you need emergency leak repair, tile replacement, flashing repairs, or extensive restoration after storm damage, we have the expertise and resources to restore your roof's integrity quickly and affordably.
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
                Common Residential Roof Repairs in Tucson
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tile Roof Repairs
              </h3>
              <p className="text-lg mb-6">
                Clay and concrete tile roofs are the most common residential roofing in Tucson, valued for their durability, fire resistance, and desert aesthetic. However, tile roofs require specific repairs as they age. Cracked or broken tiles from thermal stress, foot traffic, or falling debris are the most frequent issue. Individual tiles crack when temperature changes cause expansion and contraction, particularly when tiles are older and have lost flexibility. We replace damaged tiles with matching colors and profiles, ensuring weather-tight performance and uniform appearance.
              </p>
              <p className="text-lg mb-6">
                Underlayment deterioration beneath tiles is a critical but often invisible problem. The underlayment—40# Felt or Waterproofing Peel & Stick—provides secondary water protection beneath tiles. Tucson's heat accelerates underlayment aging, causing it to become brittle and tear. When underlayment fails, water penetrates to roof decking during rains. Underlayment replacement requires removing tiles in affected sections, installing new underlayment, and replacing tiles.
              </p>
              <p className="text-lg mb-6">
                Tile roof flashing failures around chimneys, skylights, roof penetrations, and wall intersections cause many leaks. Flashing—metal pieces that seal transitions and penetrations—deteriorates from UV exposure, thermal cycling, and weather. We replace failed flashing with premium materials and proper installation techniques that account for tile roof movement and ensure decades of leak-free performance. Hip and ridge cap repairs are also common—these exposed tiles endure maximum weather exposure and require periodic replacement or reseating with fresh mortar.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Shingle Roof Repairs
              </h3>
              <p className="text-lg mb-6">
                Composition shingle roofs on Tucson residential properties require different repair approaches than tile roofs. Monsoon winds lift and tear shingles, creating exposed areas vulnerable to water intrusion. We replace wind-damaged shingles using proper nail patterns and sealing techniques that resist future wind uplift. Missing shingles must be replaced promptly—every rain exposes bare roof decking to water damage. We maintain extensive shingle inventories in common colors for quick matching and repairs.
              </p>
              <p className="text-lg mb-8">
                Granule loss from UV exposure indicates shingle aging and reduced weather protection. When shingles lose protective granules, asphalt becomes exposed and deteriorates rapidly. Isolated granule loss can be addressed with individual shingle replacement, but widespread granule loss across the roof surface indicates the need for complete replacement rather than piecemeal repairs. Thermal cracking and curling from Tucson's heat also requires shingle replacement. We assess overall roof condition honestly—sometimes localized repairs make sense, other times full replacement is more economical than continued repair cycles.
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
                Flat Roof & Low-Slope Repairs
              </h2>
              <p className="text-lg mb-6">
                Many Tucson residential properties—particularly contemporary and mid-century modern homes—have flat or low-slope roofs requiring specialized repair techniques. These roofs use different materials and waterproofing systems than pitched roofs: TPO membranes, EPDM rubber, modified bitumen, built-up roofing, or foam systems. Each material has specific failure modes and repair requirements. Membrane punctures from debris, foot traffic, or weathering require patch repairs using compatible materials and proper seaming techniques.
              </p>
              <p className="text-lg mb-6">
                Ponding water—standing water that remains 48+ hours after rain—indicates drainage problems that lead to premature membrane failure and leaks. We identify causes of ponding (inadequate slope, clogged drains, sagging structure) and implement solutions: drain system improvements, tapered insulation to improve drainage flow, or structural reinforcement. Seam failures in membrane roofs allow water infiltration and require professional reseaming with proper adhesives depending on membrane type.
              </p>
              <p className="text-lg mb-8">
                Flashing failures at parapet walls, roof penetrations, and equipment are common leak sources on flat roofs. We replace deteriorated flashing, improve attachment methods, and seal transitions properly. All flat roof repairs must account for UV exposure, thermal movement, and water flow patterns unique to Tucson's climate for lasting performance.
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
                Emergency Roof Repair Services
              </h2>
              <p className="text-lg mb-6">
                Roof emergencies don't wait for convenient times. Monsoon storms can damage roofs in minutes, creating active leaks that threaten your home's interior, belongings, and structure. We provide 24/7 emergency roof repair services throughout Tucson and surrounding areas with rapid response times. Our emergency services include immediate tarping to stop active water intrusion, temporary patches and seals to protect damaged areas until permanent repairs can be completed, and debris removal from roof surfaces after storms.
              </p>
              <p className="text-lg mb-6">
                During monsoon season, we maintain dedicated emergency crews and expanded material inventories to handle the surge in storm-damage repairs. We prioritize emergencies based on severity—active interior leaks receive same-day response, while damaged but not actively leaking roofs are scheduled within 24-48 hours. Emergency Tarping is available.
              </p>
              <p className="text-lg mb-8">
                After stabilizing emergency situations, we provide comprehensive damage assessment, detailed repair proposals, insurance claim documentation with photos and reports, and scheduling for complete permanent repairs. Our emergency services have protected thousands of Tucson homes from water damage, and our rapid response has saved homeowners tens of thousands in avoided interior damage costs. When storms strike, we're ready to protect your home.
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
                Roof Repair vs. Replacement Decision
              </h2>
              <p className="text-lg mb-6">
                Every roof is different with construction type, quality, and materials. Therefore, having an experienced roofing expert give a detailed assessment is always recommended. Here are some typical guidelines: If damage is localized (under 30% of roof surface), underlying structure is sound, cost is under 30% of replacement cost, and no recurring leak patterns exist, then repair is plausible. If roof damage exceeds 30% of surface area, multiple leak areas exist, underlayment is deteriorated, frequent repairs are needed, energy costs are high from poor insulation, or repair costs exceed 40% of replacement cost, then replacement may be the better option.
              </p>
              <p className="text-lg mb-8">
                We provide accurate assessments without pressure sales tactics. During inspections, we document all damage, assess overall roof condition, explain repair options with costs and expected longevity, provide replacement costs for comparison, and help you make an informed decision aligned with your budget and plans for the home. If you're planning to sell within 2-3 years, repairs may suffice. If you're staying long-term, replacement might provide better value through improved energy efficiency, enhanced home value, and decades of maintenance-free performance.
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
                Why Choose Intelligent Design for Roof Repairs?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has served Tucson families since 1979. We're a family and veteran-owned business with over 45 years of experience providing honest, professional roofing services. Our licensed contractors have repaired every type of residential roof throughout Tucson and understand the unique challenges of Southern Arizona's climate, building styles, and roofing materials.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on quality workmanship, transparent pricing, and exceptional customer service. When you choose Intelligent Design for roof repairs, you receive: free inspections with detailed photo documentation, honest assessment of repair versus replacement options, transparent pricing with detailed written estimates, expert repairs using proper materials and techniques, comprehensive warranties on labor and materials, insurance claim assistance and documentation, and responsive communication throughout the repair process.
              </p>
              <p className="text-lg mb-8">
                We maintain extensive inventories of roofing materials—tiles in numerous colors and profiles, shingles in popular styles, flat roof membranes and materials, and flashing and sealants—enabling us to complete most repairs quickly without delays for material ordering. Our purchasing relationships with suppliers provide access to discontinued tiles and specialty materials for perfect matching. We employ experienced roofing professionals who take pride in their craftsmanship and stand behind every repair. Your satisfaction and home's protection are our priorities.
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
        <CommonQuestions questions={roofRepairCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={residentialRoofRepairFAQs.faqs} />

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Residential Roof Repair Today
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