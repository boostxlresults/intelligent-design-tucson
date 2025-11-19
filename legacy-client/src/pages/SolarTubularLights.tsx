import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CommonQuestions } from "@/components/CommonQuestions";
import { solarCostsCommonQuestions } from "@/data/commonQuestions/solar";
import ServiceFAQ from '@/components/ServiceFAQ';
import { solarTubularLightsFAQs } from '@/data/faqs/solar';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import SolarTubularLightsSchema from '@/components/SolarTubularLightsSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import solarTubularHero from '@assets/generated_images/solar_tubular_skylight_installation_b66a1121.webp';

export default function SolarTubularLights() {
  const description = 'Expert solar tubular light installation in Tucson. Natural daylighting, energy-efficient lighting, reduce electricity costs. Free estimates. Call (520) 333-2665 for tubular skylight installation.';
  const imageUrl = `${SITE_URL}${solarTubularHero}`;

  return (
    <>
      <MetaHead
        title="Solar Tubular Lights Tucson AZ | Tubular Skylights & Natural Daylighting"
        description={description}
        canonical={`${SITE_URL}/solar-tubular-lights-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Solar Tubular Lights Tucson AZ | Tubular Skylights & Natural Daylighting' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/solar-tubular-lights-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Solar tubular skylight dome on Tucson roof bringing natural daylighting indoors' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Solar Tubular Lights Tucson AZ | Tubular Skylights & Natural Daylighting' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Solar tubular skylight dome on Tucson roof bringing natural daylighting indoors' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <SolarTubularLightsSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${solarTubularHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Solar Tubular Lights Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Natural Daylighting | Energy-Efficient Lighting | Reduce Electricity Costs | No Electric Bills | Free Installation Estimates
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Get Free Estimate"
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
              Why Choose Intelligent Design for Solar Tubular Lights?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Free Natural Daylight</p>
                  <p className="text-sm text-gray-600">No electricity costs | Bright full-spectrum light | 350+ sunny days in Tucson | Perfect for desert climate</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Significant Energy Savings</p>
                  <p className="text-sm text-gray-600">Reduce lighting costs 60-90% | Lower cooling bills | 3-7 year payback | Decades of savings</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Professional Installation</p>
                  <p className="text-sm text-gray-600">All roof types | Leak-free guaranteed | Proper flashing | 2-3 hour installation | Licensed contractors</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Desert installation expertise | Trusted since 1979</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Premium Quality Systems</p>
                  <p className="text-sm text-gray-600">Top-rated manufacturers | UV-resistant domes | 98% reflective tubes | 20-30 year lifespan</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Warranties</p>
                  <p className="text-sm text-gray-600">Manufacturer warranties | Installation guarantees | Leak-free performance | Peace of mind protection</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Expert Solar Tubular Light Installation in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Transform dark, windowless interior spaces in your Tucson home with brilliant natural daylight using solar tubular lights—also called tubular skylights, sun tubes, or light tubes. These innovative daylighting systems capture sunlight on your roof and channel it through highly reflective tubes directly into interior rooms, providing bright, full-spectrum natural light without electricity, heat gain, or the expense and complexity of traditional skylights. In Tucson's sunny climate with 350+ days of sunshine annually, solar tubular lights offer exceptional performance and energy savings.
              </p>
              <p className="text-lg mb-6">
                Solar tubular lights solve a common problem in Tucson homes—interior bathrooms, hallways, closets, and other spaces that lack windows and require electric lighting even on the brightest sunny days. These rooms consume electricity continuously for basic visibility and feel dark and confined despite artificial lighting. Tubular lights flood these spaces with natural sunlight, transforming dark rooms into bright, welcoming areas while eliminating daytime lighting costs. The natural full-spectrum light improves mood, enhances color perception, and creates healthier, more pleasant living spaces.
              </p>
              <p className="text-lg mb-8">
                At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've installed hundreds of solar tubular lights in Tucson homes since 1979. We understand the unique installation requirements for Tucson's common tile roofs, the importance of proper flashing in our monsoon climate, and techniques for minimizing heat transfer in our extreme summer temperatures. Whether you want to brighten a windowless bathroom, illuminate a dark hallway, add natural light to your walk-in closet, or reduce lighting costs throughout your home, we provide expert installation using premium daylighting systems backed by comprehensive warranties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Free Consultation"
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
                How Solar Tubular Lights Work
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Simple Technology, Brilliant Results
              </h3>
              <p className="text-lg mb-6">
                Solar tubular lights use elegantly simple technology to bring natural sunlight deep into your home's interior. The system consists of three main components working together to capture, channel, and distribute sunlight. On your roof, a clear acrylic or polycarbonate dome captures sunlight from all angles throughout the day. This dome is engineered to gather light efficiently regardless of sun position—from low-angle morning and evening sun to high-noon overhead sunlight. The dome's UV-resistant materials withstand Tucson's intense solar radiation while filtering out heat-causing infrared radiation.
              </p>
              <p className="text-lg mb-6">
                From the dome, sunlight enters a highly reflective tube—typically 10 or 14 inches in diameter—that runs from your roof through the attic to your ceiling. This tube's interior surface is coated with materials achieving 98%+ reflectivity, meaning nearly all light entering the tube reaches your room rather than being absorbed. As sunlight travels down the tube, it bounces off the mirrored walls repeatedly, but the exceptional reflectivity means minimal light loss even through 6-10 foot tube runs. The tube is sealed and insulated, preventing heat transfer from hot attic spaces and maintaining your home's thermal envelope.
              </p>
              <p className="text-lg mb-8">
                At ceiling level, the light emerges through a diffuser—a frosted lens that spreads the concentrated sunlight evenly throughout the room. The diffuser prevents glare and hot spots while providing soft, natural illumination similar to recessed lighting but using zero electricity. On sunny Tucson days, a 10-inch diameter tubular light provides illumination equivalent to 200-300 watts of incandescent lighting or 4-6 standard 60-watt bulbs. Even on cloudy days (rare in Tucson), tubular lights provide 50-100 watts equivalent—sufficient for most interior spaces during daylight hours.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Energy Efficiency and Savings
              </h3>
              <p className="text-lg mb-6">
                The energy and cost savings from solar tubular lights in Tucson are substantial and long-lasting. Each tubular light eliminates the need for electric lighting in the space it illuminates during all daylight hours—typically 8-12 hours daily in Tucson depending on season. A single tube replacing 200-300 watts of conventional lighting saves 2-3 kilowatt-hours (kWh) daily, 60-90 kWh monthly, and 730-1,100 kWh annually. At Tucson's average electricity rates of $0.12-0.14 per kWh, this translates to $85-$150 annual savings per tubular light.
              </p>
              <p className="text-lg mb-6">
                For a typical home installing 3-4 tubular lights in bathrooms, hallways, and other interior spaces, total annual savings reach $250-$600. With installation costs of $500-$1,200 per unit, the payback period is typically 3-7 years—after which all savings represent pure benefit. Over the 20-30+ year lifespan of quality tubular lights, total savings can exceed $2,000-$4,000 per unit. These calculations consider only direct lighting cost savings—additional benefits include reduced cooling costs from eliminating heat-producing light fixtures and potential increase in home value from improved natural lighting.
              </p>
              <p className="text-lg mb-8">
                Environmental benefits complement financial savings. Eliminating daytime electric lighting reduces your carbon footprint and fossil fuel consumption. Unlike solar electric panels that require complex electronics and degrade over time, tubular lights are passive systems with no moving parts, no maintenance requirements, and no performance degradation—they provide the same brilliant natural light decades after installation as they did on day one. This makes tubular lights one of the simplest, most reliable, and most cost-effective sustainable home improvements available.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-savings">
                    <Phone className="w-5 h-5 mr-2" />
                    Learn About Savings: (520) 333-2665
                  </a>
                </Button>
              </div>
              
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Calculate Your Savings"
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
                Professional Installation Process
              </h2>
              <p className="text-lg mb-6">
                Professional installation is critical for solar tubular lights to achieve optimal performance and leak-free operation. Our installation process begins with site assessment—we evaluate proposed locations, verify adequate roof access, check for obstructions in the attic (wiring, ductwork, insulation), measure ceiling heights, and confirm the roof area above receives direct sunlight. We help you select optimal tube sizes and placements to maximize light output and coverage for your specific needs and budget.
              </p>
              <p className="text-lg mb-6">
                Installation starts on the roof where we carefully mark the tube location and create the roof penetration. For tile roofs common in Tucson, we remove tiles in the penetration area and install proper flashing that integrates with the tile system to ensure weather-tight performance. For shingle roofs, we install specialized flashing that layers with shingles for leak-free integration. Flat roofs use curb-mounted systems with raised flashing. All flashings are sealed with premium roof sealants designed for Tucson's extreme temperatures and monsoon conditions. We install the dome assembly securely, ensuring proper pitch for water runoff.
              </p>
              <p className="text-lg mb-8">
                Inside the attic, we route the reflective tube from roof to ceiling, carefully navigating around obstructions while maintaining the straightest possible path—fewer bends mean maximum light transmission. We support and secure the tube properly to prevent sagging or displacement. At the ceiling, we cut the opening precisely, install the diffuser assembly flush with the ceiling surface, and finish the ceiling integration professionally for seamless appearance. The entire installation typically takes 2-3 hours per tube. We test light output, verify weatherproofing, clean up completely, and provide care and warranty information. Our installations are guaranteed leak-free and include manufacturer warranties covering materials and workmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Professional Installation: (520) 333-2665
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
                Ideal Applications for Tubular Skylights
              </h2>
              <p className="text-lg mb-6">
                Solar tubular lights excel in specific applications where traditional windows or skylights are impractical but natural light is highly desirable. Interior bathrooms—especially master bathrooms common in Tucson homes—benefit tremendously from tubular lights. These spaces typically have no exterior walls for windows due to home layout, requiring constant electric lighting even during bright daytime hours. A tubular skylight transforms a dark, cave-like bathroom into a bright, spa-like space with beautiful natural light, improving morning routines and reducing electricity costs. Privacy is maintained since the ceiling-mounted diffuser provides no view into the home.
              </p>
              <p className="text-lg mb-6">
                Hallways and corridors represent another ideal application. These interior circulation spaces often lack windows and require daytime lighting for safety and aesthetics. Tubular lights placed strategically along hallways eliminate the need for fixture-based lighting during daylight hours while making these passages feel open and welcoming rather than tunnel-like. Walk-in closets, dressing rooms, and laundry rooms similarly benefit from natural light that improves color matching for clothing selection and makes tasks more pleasant while reducing energy consumption.
              </p>
              <p className="text-lg mb-8">
                Home offices, craft rooms, and hobby spaces gain significant benefits from tubular skylight installation. Natural full-spectrum daylight reduces eye strain, improves color perception for visual tasks, enhances mood and productivity, and creates more pleasant working environments. Kitchens, particularly areas away from exterior windows, can use tubular lights to brighten work zones, islands, or pantries. Entryways and foyers become brighter and more welcoming. Stairwells gain safety lighting without electricity. The key requirement is that the desired location sits directly below an unobstructed roof area receiving direct sunlight throughout the day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Plan Your Installation"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section4">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={solarCostsCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={solarTubularLightsFAQs.faqs} />


        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Ready to Add Natural Light to Your Home?
              </h2>
              <p className="text-lg mb-8">
                Schedule a free consultation for solar tubular light installation. We'll assess your home, recommend optimal placements, and provide transparent pricing with no obligation. Serving Tucson, Oro Valley, Marana, Vail, Sahuarita, and surrounding areas since 1979.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Get Free Consultation"
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