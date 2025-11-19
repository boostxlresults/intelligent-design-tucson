import { useEffect } from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceFAQ from '@/components/ServiceFAQ';
import { residentialRoofReplacementFAQs } from '@/data/faqs/roofing';
import { CommonQuestions } from "@/components/CommonQuestions";
import { roofReplacementCommonQuestions } from "@/data/commonQuestions/roofing";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import ResidentialRoofReplacementSchema from '@/components/ResidentialRoofReplacementSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import roofReplacementHero from '@assets/generated_images/Roof_replacement_in_progress_e00e92e6.webp';

export default function ResidentialRoofReplacement() {
  const description = 'Expert residential roof replacement in Tucson. Complete tear-off & replacement. Tile, shingle, metal & flat roofs. 45+ years experience. Call (520) 333-2665 for free estimate.';
  const imageUrl = `${SITE_URL}${roofReplacementHero}`;
  
  useEffect(() => {
    return () => {
      document.querySelectorAll('script[data-schema]').forEach(el => el.remove());
    };
  }, []);

  return (
    <>
      <MetaHead
        title="Residential Roof Replacement Tucson AZ | Complete Home Roof Replacement"
        description={description}
        canonical={`${SITE_URL}/residential-roof-replacement-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Residential Roof Replacement Tucson AZ | Complete Home Roof Replacement' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/residential-roof-replacement-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Residential roof replacement project underway in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Residential Roof Replacement Tucson AZ | Complete Home Roof Replacement' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Residential roof replacement project underway in Tucson' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <ResidentialRoofReplacementSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${roofReplacementHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Residential Roof Replacement Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Complete Tear-Off & Replacement | All Roof Types | Premium Materials | Expert Installation | 45+ Years Experience
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
              Why Choose Intelligent Design for Roof Replacement?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Tear-Off Service</p>
                  <p className="text-sm text-gray-600">Total removal of old roofing | Deck inspection & repair | Professional disposal | Clean sites</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">All Roofing Systems</p>
                  <p className="text-sm text-gray-600">Tile, shingle, metal, flat roofs | Premium materials | Expert installation | System upgrades</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Energy Efficiency Upgrades</p>
                  <p className="text-sm text-gray-600">Cool roof technology | Proper ventilation | Radiant barriers | Lower utility bills</p>
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
                  <p className="text-sm text-gray-600">Material warranties to lifetime | Labor warranties 10-15 years | Leak guarantees | Transferable</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Full Project Management</p>
                  <p className="text-sm text-gray-600">Permitting handled | Inspections coordinated | Property protection | Daily communication</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Expert Residential Roof Replacement in Tucson
              </h2>
              <p className="text-lg mb-6">
                Replacing your home's roof is a significant investment that protects your largest asset and dramatically improves your home's value, energy efficiency, and curb appeal. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've completed thousands of residential roof replacements throughout Tucson since 1979, delivering superior craftsmanship and lasting performance for every roof type. Our licensed contractors understand when roof replacement makes more economic sense than continued repairs and provide honest guidance to help you make the best decision for your home and budget.
              </p>
              <p className="text-lg mb-6">
                Tucson's extreme climate accelerates roof aging beyond typical performance expectations. Our intense UV radiation degrades roofing materials 30-50% faster than moderate climates. Daily temperature swings of 40°F or more create thermal stress that cracks tiles, curls shingles, and deteriorates sealants. Monsoon winds test every fastener and attachment. The result: roofs in Tucson typically need replacement sooner than national averages—shingle roofs at 15-20 years instead of 20-30, and tile roofs at 35-45 years instead of 50+. Recognizing when replacement is necessary prevents expensive interior damage from failed roofs.
              </p>
              <p className="text-lg mb-8">
                We provide complete roof replacement services including comprehensive inspection and honest assessment, detailed estimates with material options and pricing, complete tear-off and disposal of old roofing, deck inspection and repair of damaged sheathing, premium underlayment installation, expert installation of new roofing system, proper ventilation and insulation upgrades, comprehensive flashing systems, all permitting and inspections, and thorough cleanup of your property. Our systematic approach ensures your new roof protects your home for decades while enhancing its beauty and value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Request Free Assessment"
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
                Signs You Need Roof Replacement
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Age-Related Replacement
              </h3>
              <p className="text-lg mb-6">
                Roof age is the primary factor determining replacement timing. Composition shingle roofs in Tucson typically last 15-25 years depending on quality and maintenance. If your shingle roof is 18+ years old, replacement should be planned even if no obvious problems exist—the materials are approaching end of serviceable life and failures accelerate rapidly in final years. Tile roofs last longer—40-50 years for quality installations—but even tiles need replacement eventually as underlayment deteriorates and tiles become brittle.
              </p>
              <p className="text-lg mb-6">
                Metal roofs provide 40-60 year service life but may need replacement sooner if coatings fail or panels corrode. Flat roofing systems last 15-30 years depending on membrane type and maintenance. During roof inspections, we assess not just current condition but remaining service life projection. If a roof has less than 5 years of remaining life, replacement often makes more sense than repairs—you avoid spending thousands on repairs for a system that will still need replacement soon.
              </p>
              <p className="text-lg mb-6">
                Consider timing strategically. If you're planning to sell your home within 2-3 years, a new roof adds significant value and eliminates buyer concerns. Home inspections flag aging roofs, reducing offers or requiring seller concessions. If you're staying long-term in your home, replacing an aging roof before failures occur prevents emergency situations and interior damage. Planned replacement on your schedule is always less expensive and stressful than emergency replacement after a major leak.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Widespread Damage & Deterioration
              </h3>
              <p className="text-lg mb-6">
                When damage affects more than 30% of roof surface area, replacement becomes more economical than extensive repairs. Multiple leak areas indicate systemic failure rather than isolated problems. If you're experiencing leaks in several rooms, underlying issues like deteriorated underlayment or failed flashing systems are likely—problems that require complete replacement to resolve properly. Piecemeal repairs in this situation are temporary band-aids that postpone the inevitable while risking interior damage.
              </p>
              <p className="text-lg mb-8">
                Visible deterioration indicators include: widespread granule loss on shingles (large bare patches), numerous cracked or broken tiles across multiple roof areas, curling or cupping shingles, daylight visible through roof decking when viewed from attic, sagging roof sections indicating structural problems, widespread moss or algae growth, and deteriorated flashing at multiple locations. Any of these conditions across significant roof areas justifies replacement evaluation. We document all damage during inspections and provide honest guidance on repair versus replacement economics.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Roof Assessment"
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
                Our Roof Replacement Process
              </h2>
              <p className="text-lg mb-6">
                Professional roof replacement follows systematic processes ensuring quality results and protecting your property. Our process begins with comprehensive inspection where we examine every aspect of your existing roof, document all damage with photos, assess underlying structure, evaluate ventilation and insulation, and discuss your goals and concerns. We provide detailed written estimates including material options with pricing, labor costs, disposal fees, permit costs, timeline projections, and warranty coverage. Multiple material options allow you to choose the best balance of performance, aesthetics, and budget.
              </p>
              <p className="text-lg mb-6">
                After contract signing, we handle permitting, schedule material delivery to minimize storage time on your property, coordinate crew scheduling, and protect your property with ground covers, tarps, and barriers. The tear-off phase completely removes all existing roofing materials, exposes roof decking for inspection, identifies and repairs damaged or rotten decking, ensures proper surface for new roofing, and uses contained disposal methods. We inspect 100% of exposed deck, replacing any damaged sections to provide sound foundation for new roofing.
              </p>
              <p className="text-lg mb-6">
                Installation of new roofing includes premium underlayment application, proper flashing installation at all penetrations and transitions, systematic roofing material installation following manufacturer specifications, integrated ventilation systems, quality control inspections at each phase, and coordination of required building inspections. We maintain clean work sites with daily debris removal, protect sensitive areas, and communicate progress daily. Final phases include comprehensive cleanup, final inspection walkthrough with you, warranty documentation, and care/maintenance instructions.
              </p>
              <p className="text-lg mb-8">
                Most residential roof replacements complete in 3-8 days depending on size, complexity, and roofing type. We provide realistic timelines upfront and communicate proactively about any weather delays or complications. Our crews are experienced professionals who work efficiently while maintaining highest quality standards. Project managers are accessible throughout to answer questions and address any concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Started: (520) 333-2665
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
                Roofing Material Options
              </h2>
              <p className="text-lg mb-6">
                Choosing replacement roofing materials involves balancing performance, aesthetics, budget, and long-term value. Tile roofing—either clay or concrete—provides maximum lifespan (40-50+ years), superior energy efficiency, excellent wind and fire resistance, low maintenance, and highest home value enhancement. Clay tiles cost $10-$18 per square foot but deliver lifetime value. Concrete tiles at $8-$12 per square foot offer similar performance at reduced cost. Both require adequate roof structure to support weight.
              </p>
              <p className="text-lg mb-6">
                Architectural composition shingles offer excellent value at $6-$9 per square foot installed. Premium shingles provide 25-40 year service life, diverse aesthetic options, good wind and impact resistance, and straightforward installation. Cool roof shingles with reflective granules reduce cooling costs 15-25%. While shingles don't last as long as tile in Tucson's climate, they perform well for 20-30 years and suit budget-conscious replacements or homes you may sell within 15 years.
              </p>
              <p className="text-lg mb-8">
                Metal roofing Tucson installations by professional metal roofers at $12-$18 per square foot provide 40-60 year lifespan, exceptional energy efficiency, zero maintenance, contemporary aesthetic, and compatibility with solar installations. Our standing seam metal roofers install premium 22-24 gauge systems offering clean appearance and superior weather resistance, while corrugated metal roofing uses 26 gauge materials for economical durability. For flat or low-slope areas, TPO membranes ($8-$12 per square foot) provide excellent energy efficiency and 20-30 year performance. We help you select materials optimized for your home's architecture, your budget, energy efficiency goals, and long-term plans. All options we offer are premium quality from leading manufacturers with comprehensive warranties.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Explore Material Options"
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
                Energy Efficiency & Value Enhancement
              </h2>
              <p className="text-lg mb-6">
                Roof replacement presents optimal opportunity for energy efficiency upgrades that dramatically reduce cooling costs. Cool roof materials—light-colored tiles, reflective shingles, white TPO membranes, or metal roofing—reflect 60-70% of solar radiation instead of absorbing it. This reduces roof surface temperatures by 50-80°F compared to traditional dark roofs, lowering attic temperatures and reducing cooling costs 20-30%. The savings can pay back any premium cost for cool roofing within 5-8 years, with continued savings for decades.
              </p>
              <p className="text-lg mb-6">
                Proper attic ventilation dramatically improves energy performance. During replacement, we upgrade ventilation systems using ridge vents for exhaust, adequate soffit vents for intake, and balanced airflow systems. Properly ventilated attics expel superheated air before it radiates into living spaces, extend roofing material life by reducing thermal stress, and can reduce cooling costs an additional 10-15%. Radiant barriers installed during re-roofing block radiant heat transfer, further reducing cooling costs. Combined improvements can cut cooling expenses 30-40%.
              </p>
              <p className="text-lg mb-8">
                New roofing significantly enhances home value. Real estate studies show new roofs return 60-70% of cost in increased home value immediately, with higher returns in seller's markets. Beyond the financial return, new roofs eliminate buyer concerns, accelerate home sales, prevent inspection issues, and allow asking premium prices. If selling within 3-5 years, roof replacement before listing maximizes your return. Tucson Electric Power and Southwest Gas offer rebates for energy-efficient roofing—we help maximize available incentives to reduce your net cost.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section5">
                    <Phone className="w-5 h-5 mr-2" />
                    Calculate Savings: (520) 333-2665
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
                Why Choose Intelligent Design for Roof Replacement?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has served Tucson families since 1979. We're a family and veteran-owned business with over 45 years of experience providing honest, professional roofing services. Our licensed contractors (ROC #171687) bring deep expertise with every residential roofing system and understand Tucson's unique climate challenges. We've completed thousands of successful roof replacements throughout Tucson and surrounding areas.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on quality workmanship, transparent pricing, and exceptional customer service. We're certified installers for major roofing manufacturers, qualifying your project for enhanced warranties. Our crews are experienced professionals who respect your property and take pride in their craftsmanship. We invest in ongoing training and maintain the highest quality standards.
              </p>
              <p className="text-lg mb-8">
                When you choose Intelligent Design for roof replacement, you receive: honest assessment of replacement necessity, comprehensive estimates with multiple material options, full permitting and inspection coordination, complete tear-off and responsible disposal, expert installation by licensed crews, premium materials from leading manufacturers, comprehensive warranty coverage, property protection throughout project, daily cleanup and communication, and satisfaction guarantee. We're large enough to handle any project but small enough to care about every customer. Your satisfaction and home's protection are our priorities.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Free Consultation"
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
        <ServiceFAQ faqs={residentialRoofReplacementFAQs.faqs} />

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Residential Roof Replacement Today
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