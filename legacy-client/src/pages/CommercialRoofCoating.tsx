import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceFAQ from '@/components/ServiceFAQ';
import { commercialRoofCoatingFAQs } from '@/data/faqs/roofing';
import { CommonQuestions } from "@/components/CommonQuestions";
import { roofCoatingCommonQuestions } from "@/data/commonQuestions/roofing";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import CommercialRoofCoatingSchema from '@/components/CommercialRoofCoatingSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import roofCoatingHero from '@assets/generated_images/commercial_roof_coating_application_54879965.webp';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';

export default function CommercialRoofCoating() {
  const description = 'Commercial roof coating in Tucson. Cool roof technology, extend roof life 10-20 years, reduce energy costs. TPO, EPDM, metal coatings. Call (520) 333-2665 for free assessment.';
  const imageUrl = `${SITE_URL}${roofCoatingHero}`;

  return (
    <>
      <MetaHead
        title="Commercial Roof Coating Tucson AZ | Cool Roof Coatings & Energy Savings"
        description={description}
        canonical={`${SITE_URL}/commercial-roof-coating-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Commercial Roof Coating Tucson AZ | Cool Roof Coatings & Energy Savings' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/commercial-roof-coating-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Commercial roof coating application in progress in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Commercial Roof Coating Tucson AZ | Cool Roof Coatings & Energy Savings' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl }
        ]}
      />
      <GTM />
      <DNIInjector />
      <CommercialRoofCoatingSchema />
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
                Commercial Roof Coating Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Cool Roof Technology | Energy Savings 15-30% | Extend Roof Life 10-20 Years | Silicone & Acrylic Coatings | 45+ Years Experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Get Free Assessment"
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
              Why Choose Intelligent Design for Commercial Roof Coating?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Significant Energy Savings</p>
                  <p className="text-sm text-gray-600">Reduce cooling costs 15-30% | Cool roof technology | Lower HVAC runtime | Improved comfort</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Extend Roof Life 10-20 Years</p>
                  <p className="text-sm text-gray-600">Defer replacement costs | UV protection | Seamless waterproofing | Cost-effective solution</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Premium Coating Systems</p>
                  <p className="text-sm text-gray-600">Silicone & acrylic coatings | Manufacturer certified | 10-20 year warranties | Proven performance</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Coating Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Licensed & insured | Trusted since 1979</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Minimal Business Disruption</p>
                  <p className="text-sm text-gray-600">Quick installation | Building stays operational | No tear-off required | Weather-dependent scheduling</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Free Roof Assessment</p>
                  <p className="text-sm text-gray-600">Condition evaluation | Moisture survey | Cost analysis | Honest recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Commercial Roof Coating in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Commercial roof coating is the cost-effective alternative to roof replacement, extending service life 10-20 years while dramatically improving energy efficiency and waterproofing. Unlike replacement which requires complete tear-off, extensive downtime, and costs $5-$10 per square foot, professional coating typically costs $2-$5 per square foot and can be completed with minimal business disruption. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've coated thousands of Tucson commercial roofs since 1979, helping businesses defer major replacement costs while capturing immediate energy savings and enhanced building protection.
              </p>
              <p className="text-lg mb-6">
                Tucson's climate creates the ideal application for commercial roof coating while also demanding specialized coating products and techniques. Our intense UV radiation makes reflective cool roof coatings exceptionally cost-effective—reducing roof surface temperatures 50-80°F and cutting cooling costs 15-30% in typical buildings. However, this same UV exposure accelerates coating degradation, requiring premium products formulated for high-UV environments. Monsoon rains test coating waterproofing—professional application creating seamless barriers prevents water infiltration through aging membrane cracks and seams. Extreme heat requires coatings with superior thermal stability that won't soften, sag, or degrade during extended 110°F+ temperatures.
              </p>
              <p className="text-lg mb-8">
                We specialize in coating commercial roofs throughout Tucson—TPO and PVC single-ply membranes, EPDM rubber roofing, modified bitumen systems, built-up roofing, metal roofs, and spray foam systems. Our process includes comprehensive roof assessment with moisture surveys, honest evaluation of coating suitability, detailed proposals comparing coating versus replacement economics, complete surface preparation and repairs, professional coating application to manufacturer specifications, quality control throughout installation, and comprehensive warranties protecting your investment. Whether your roof needs proactive coating to extend serviceable life or restoration coating as a replacement alternative, we deliver solutions protecting your building while improving energy efficiency and deferring major capital expenses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Assessment"
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
                Commercial Roof Coating Systems
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Silicone Roof Coatings
              </h3>
              <p className="text-lg mb-6">
                Silicone roof coatings are the premium choice for Tucson commercial roofs, offering exceptional UV resistance, ponding water tolerance, and long-term performance in extreme climates. Silicone's key advantages include superior UV stability—silicone doesn't degrade under intense desert sun exposure, maintaining flexibility and waterproofing for 15-25+ years. Ponding water resistance is unmatched—silicone coatings can withstand continuous water immersion without degrading, making them ideal for flat roofs with drainage challenges. Silicone remains flexible across wide temperature ranges from winter lows to summer highs exceeding 180°F on roof surfaces.
              </p>
              <p className="text-lg mb-6">
                Application benefits make silicone ideal for Tucson: single-component formulation requiring no mixing, relatively low odor during application, rapid cure time allowing quick return to service, and excellent adhesion to most commercial roofing substrates including TPO, EPDM, modified bitumen, metal, and spray foam. Silicone coatings typically cost $2.50-$5.00 per square foot installed—premium pricing reflects superior performance. Expected lifespan: 15-25+ years with minimal maintenance. We recommend silicone for roofs with ponding water issues, buildings with sensitive operations requiring minimal downtime during coating application, and property owners prioritizing maximum longevity and performance in Tucson's harsh climate.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Acrylic Roof Coatings
              </h3>
              <p className="text-lg mb-6">
                Acrylic roof coatings provide cost-effective cool roof performance for Tucson commercial buildings. Water-based acrylic coatings offer excellent UV resistance, high solar reflectance reducing roof temperatures 40-60°F, superior dirt resistance maintaining reflectivity over time, and environmentally friendly application with low VOCs and minimal odor. Acrylic coatings excel on roofs with minimal ponding water, properly draining TPO and EPDM membranes, modified bitumen systems, and metal roofing where ponding is not a concern.
              </p>
              <p className="text-lg mb-8">
                Performance characteristics make acrylic attractive for budget-conscious projects: costs $1.50-$3.50 per square foot installed—40-50% less than silicone, easier application allowing faster project completion, excellent adhesion to clean substrates, and superior aesthetics with bright white appearance. Limitations include reduced performance in ponding water (requires well-drained roofs), 10-15 year typical lifespan in Tucson (shorter than silicone), and potential for dirt accumulation requiring periodic cleaning. We recommend acrylic coatings for well-maintained roofs with positive drainage, property owners prioritizing initial cost savings while accepting shorter lifespan, and buildings where budget constraints preclude premium silicone systems. Both coating types dramatically outperform roof replacement economics while extending serviceable life and capturing immediate energy savings.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Schedule Your Free Roof Assessment</h3>
                <p className="text-blue-800 mb-4">
                  Our coating specialists will evaluate your roof condition, perform moisture surveys, recommend appropriate coating systems, and provide detailed proposals comparing coating versus replacement economics. No-obligation assessments help you make informed decisions about protecting your building investment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Get Free Assessment"
                    variant="default"
                    size="default"
                    data-testid="button-schedule-cta"
                  />
                  <Button
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-cta">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={roofCoatingCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={commercialRoofCoatingFAQs.faqs} />
      </main>

      <Footer />
    </>
  );
}