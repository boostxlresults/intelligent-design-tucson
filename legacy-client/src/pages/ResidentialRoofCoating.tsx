import { useEffect } from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceFAQ from '@/components/ServiceFAQ';
import { residentialRoofCoatingFAQs } from '@/data/faqs/roofing';
import { CommonQuestions } from "@/components/CommonQuestions";
import { roofCoatingCommonQuestions } from "@/data/commonQuestions/roofing";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import ResidentialRoofCoatingSchema from '@/components/ResidentialRoofCoatingSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import roofCoatingHero from '@assets/generated_images/residential_roof_coating_application_05371d89.webp';

export default function ResidentialRoofCoating() {
  const description = 'Expert residential roof coating in Tucson. Cool roof technology, UV protection, energy savings & extended roof life. Free estimates. Call (520) 333-2665 for professional coating services.';
  const imageUrl = `${SITE_URL}${roofCoatingHero}`;
  
  useEffect(() => {
    return () => {
      document.querySelectorAll('script[data-schema]').forEach(el => el.remove());
    };
  }, []);

  return (
    <>
      <MetaHead
        title="Residential Roof Coating Tucson AZ | Cool Roof Coatings & UV Protection"
        description={description}
        canonical={`${SITE_URL}/residential-roof-coating-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Residential Roof Coating Tucson AZ | Cool Roof Coatings & UV Protection' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/residential-roof-coating-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional applying residential roof coating in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Residential Roof Coating Tucson AZ | Cool Roof Coatings & UV Protection' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional applying residential roof coating in Tucson' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <ResidentialRoofCoatingSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${roofCoatingHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Residential Roof Coating Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Cool Roof Technology | Energy Savings up to 25% | UV Protection | Extend Roof Life 10-20 Years | Free Estimates
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Get Free Roof Estimate"
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
              Why Choose Intelligent Design for Residential Roof Coating?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Advanced Cool Roof Technology</p>
                  <p className="text-sm text-gray-600">Reduce roof temps 50-80°F | Lower cooling costs 10-25% | High solar reflectance | Energy rebates available</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Premium Coating Systems</p>
                  <p className="text-sm text-gray-600">Acrylic, silicone, polyurethane options | Desert-rated formulas | 10-20 year lifespan | Manufacturer warranties</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Extend Roof Life Affordably</p>
                  <p className="text-sm text-gray-600">Add 10-20 years to roof life | 40-70% less than replacement | Seamless waterproof protection | Stop leaks</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Expertise</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Desert climate specialists | Trusted since 1979</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Professional Application</p>
                  <p className="text-sm text-gray-600">Certified technicians | Proper surface prep | Multi-coat systems | Quality inspections</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Free Roof Analysis</p>
                  <p className="text-sm text-gray-600">Comprehensive roof inspection | Coating suitability assessment | Energy savings estimates | Transparent pricing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Expert Residential Roof Coating in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Tucson's extreme desert climate creates unique challenges for residential roofs. Our intense solar radiation—350+ days of sunshine annually—degrades roofing materials faster than almost anywhere in North America. Daily temperature swings of 40°F or more cause constant thermal expansion and contraction. Summer roof surface temperatures exceeding 180°F accelerate aging and breakdown. These conditions make Tucson homes ideal candidates for advanced roof coating systems that protect, cool, and extend roof life at a fraction of replacement costs.
              </p>
              <p className="text-lg mb-6">
                Roof coating technology has advanced dramatically in recent years, offering Tucson homeowners proven solutions for extending roof life while simultaneously reducing energy costs. Modern cool roof coatings reflect up to 90% of solar radiation, reducing roof surface temperatures by 50-80°F and cutting cooling costs by 10-25%. These highly reflective, elastomeric coating systems create seamless waterproof membranes over existing roofing materials, stopping leaks while protecting against UV degradation, thermal stress, and weather damage.
              </p>
              <p className="text-lg mb-8">
                At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've been coating Tucson residential roofs since 1979, helping thousands of homeowners extend roof life, reduce energy costs, and avoid premature roof replacement. We use only premium coating systems specifically formulated for desert environments, applied by certified technicians using proven techniques that ensure maximum performance and longevity. Whether your home has a flat roof, metal roof, tile roof, or shingle roof, we provide expert coating solutions backed by comprehensive warranties and our 45+ years of Tucson roofing experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Roof Coating Estimate"
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
                Cool Roof Coating Technology for Tucson Homes
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How Cool Roof Coatings Work
              </h3>
              <p className="text-lg mb-6">
                Cool roof coating technology is specifically designed to combat solar heat gain—Tucson's primary roofing challenge. These advanced coatings contain specialized reflective pigments and particles engineered to bounce solar radiation back into the atmosphere rather than absorbing it as heat. The science involves two key properties: solar reflectance (how much sunlight is reflected) and thermal emittance (how quickly absorbed heat is radiated away). Premium cool roof coatings achieve solar reflectance of 80-90% and thermal emittance of 85%+, meaning nearly all incoming solar energy is rejected.
              </p>
              <p className="text-lg mb-6">
                The cooling impact is dramatic and measurable. An uncoated dark roof in Tucson typically reaches surface temperatures of 160-180°F on summer afternoons. This extreme heat conducts through roofing materials into attic spaces and living areas, forcing air conditioning systems to work harder and run longer. A white elastomeric cool roof coating reduces that same roof surface to 80-110°F—a temperature reduction of 50-80°F. This massive decrease in roof temperature translates directly to lower attic temperatures (often 20-30°F cooler), reduced heat transfer into living spaces, lower cooling costs, improved indoor comfort, and dramatically reduced thermal stress on roofing materials.
              </p>
              <p className="text-lg mb-8">
                Energy savings from cool roof coatings in Tucson are substantial and well-documented. Department of Energy studies show cooling cost reductions of 10-25% in extreme cooling climates like Tucson. For homes spending $200-300/month on summer air conditioning, this means $25-75/month savings—$300-900 annually. Over a coating's 10-15 year lifespan, total energy savings often exceed the coating's initial cost, making cool roof coating financially beneficial even before considering avoided replacement costs. Additionally, many utilities and government programs offer rebates for cool roof installations, further improving the economic case.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Roof Coating Types and Applications
              </h3>
              <p className="text-lg mb-6">
                Several coating chemistries suit different Tucson residential roofing situations. Acrylic coatings are water-based, environmentally friendly, highly reflective, and offer excellent UV resistance at moderate cost. They're ideal for sloped roofs without ponding water issues and provide good performance on metal, modified bitumen, and single-ply membrane roofs. Acrylic coatings typically last 7-10 years in Tucson's climate and can be easily recoated. Their primary limitation is reduced performance in areas with standing water.
              </p>
              <p className="text-lg mb-6">
                Silicone coatings represent premium technology offering superior durability and ponding water resistance. These coatings maintain flexibility across extreme temperature ranges, resist moisture absorption, and provide exceptional long-term UV stability. Silicone is the best choice for flat or low-slope roofs prone to ponding water, roofs requiring maximum longevity (10-15+ years), and situations where premium performance justifies higher initial cost. The primary drawback is slippery surfaces when wet, requiring careful consideration for roofs with foot traffic.
              </p>
              <p className="text-lg mb-8">
                Polyurethane coatings provide exceptional durability and impact resistance, making them ideal for roofs with regular foot traffic or exposure to debris. These coatings cure to a tough, abrasion-resistant finish that protects underlying roofing materials effectively. However, polyurethane requires a topcoat for UV protection and costs more than acrylic systems. Elastomeric coatings offer high flexibility for roofs subject to movement or thermal cycling, excellent waterproofing, and moderate pricing. We assess your specific roof type, condition, slope, and requirements to recommend the optimal coating system for your situation.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Get Coating Recommendation"
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
                Professional Roof Coating Application Process
              </h2>
              <p className="text-lg mb-6">
                Successful roof coating performance depends critically on proper application—surface preparation and coating technique matter as much as coating quality. Our professional process begins with comprehensive roof inspection to assess coating suitability, identify necessary repairs, and determine optimal coating system. Not all roofs are good coating candidates. Severely deteriorated roofs, roofs with extensive structural damage, or roofs near the end of serviceable life may require replacement rather than coating. We provide honest assessments because coating over serious problems wastes money and delays necessary replacement.
              </p>
              <p className="text-lg mb-6">
                For suitable roofs, we begin with thorough cleaning—the most critical preparation step. All dirt, dust, debris, biological growth (algae, mold), and loose materials must be completely removed for proper coating adhesion. We use pressure washing, scraping, and brushing as needed to achieve clean surfaces. Next, we complete all necessary repairs: patching holes or cracks, replacing damaged materials, repairing or replacing flashing, addressing drainage problems, and fixing any structural issues. Coating cannot fix underlying problems—it protects and extends life of sound roofing materials.
              </p>
              <p className="text-lg mb-8">
                After preparation, we apply appropriate primer for your roof material and coating type to ensure chemical bonding. The coating itself is applied in multiple coats—typically 2-3 applications—using professional spray equipment, rollers, or brushes depending on roof geometry and coating type. We achieve minimum 20 mils dry film thickness (often more) for proper performance and longevity. Special attention goes to seams, penetrations, transitions, and roof edges where we reinforce with fabric and additional coating. Final inspection ensures complete coverage, proper thickness, and uniform appearance. We time application carefully, avoiding extreme heat, cold, rain, or wind that can compromise coating performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Professional Coating: (520) 333-2665
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
                Roof Coating Benefits and ROI
              </h2>
              <p className="text-lg mb-6">
                Roof coating provides multiple financial and performance benefits for Tucson homeowners. The most immediate benefit is cost savings versus replacement—coating typically costs 40-70% less than full roof replacement while adding 10-20 years of serviceable life. For a 2,000 sq ft home where replacement costs $15,000-25,000, coating costs $3,000-8,000 depending on system type. This dramatic cost difference makes coating extremely attractive for roofs in decent condition that need protection rather than replacement.
              </p>
              <p className="text-lg mb-6">
                Energy cost reduction provides ongoing savings throughout the coating's life. As discussed, cooling cost reductions of 10-25% translate to $300-900+ annually for typical Tucson homes. Over a coating's 10-15 year lifespan, cumulative energy savings can reach $3,000-13,500—often equaling or exceeding the coating's initial cost. This means the coating essentially pays for itself through energy savings alone, even before considering the avoided replacement cost. Additional benefits include improved indoor comfort from reduced heat gain, extended HVAC system life from reduced runtime, and potential increase in home value from improved energy efficiency.
              </p>
              <p className="text-lg mb-8">
                Environmental benefits matter too. Roof coating is inherently sustainable—it extends existing roof life, avoiding landfill waste from tear-off and replacement. Cool roof coatings reduce energy consumption and associated greenhouse gas emissions. Many coating products contain recycled content and use environmentally responsible chemistries. Some Tucson homeowners qualify for energy efficiency rebates or tax credits for cool roof installations. The combination of financial savings, environmental responsibility, and roof protection makes coating an intelligent choice for suitable Tucson residential roofs.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Calculate Your Savings"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={roofCoatingCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={residentialRoofCoatingFAQs.faqs} />

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Ready to Protect Your Roof and Save Energy?
              </h2>
              <p className="text-lg mb-8">
                Get a free professional roof coating estimate from Tucson's trusted roofing experts. We'll assess your roof, recommend the optimal coating system, and provide transparent pricing with no obligation. Serving Tucson, Oro Valley, Marana, Vail, Sahuarita, and surrounding areas since 1979.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Free Estimate"
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