import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceFAQ from '@/components/ServiceFAQ';
import { skylightsFAQs } from '@/data/faqs/roofing';
import { CommonQuestions } from "@/components/CommonQuestions";
import { roofRepairCommonQuestions } from "@/data/commonQuestions/roofing";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import SkylightsSchema from '@/components/SkylightsSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import skylightsHero from '@assets/generated_images/residential_skylights_installation_detail_afe78823.webp';

export default function Skylights() {
  const description = 'Expert skylight installation and repair in Tucson. Fixed, venting, solar-powered skylights. Natural light, ventilation, energy efficiency. Call (520) 333-2665 for professional skylight services.';
  const imageUrl = `${SITE_URL}${skylightsHero}`;

  return (
    <>
      <MetaHead
        title="Skylights Tucson AZ | Professional Skylight Installation & Repair Services"
        description={description}
        canonical={`${SITE_URL}/skylights-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Skylights Tucson AZ | Professional Skylight Installation & Repair Services' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/skylights-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional skylight installation on Tucson residential roof with natural light streaming in' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Skylights Tucson AZ | Professional Skylight Installation & Repair Services' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional skylight installation on Tucson residential roof with natural light streaming in' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <SkylightsSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${skylightsHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Skylights Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Professional Installation | Fixed & Venting Skylights | Solar-Powered Options | Natural Light & Ventilation | Free Estimates
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
              Why Choose Intelligent Design for Skylight Installation?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Expert Installation Guarantee</p>
                  <p className="text-sm text-gray-600">Leak-free performance | Proper flashing | All roof types | Licensed contractors | Warranty backed</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Premium Skylight Systems</p>
                  <p className="text-sm text-gray-600">Energy Star rated | Low-E glass | Impact-resistant | UV protection | Factory warranties</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Turnkey Service</p>
                  <p className="text-sm text-gray-600">Design consultation | Permit handling | Roof & interior work | Professional finishing | Cleanup</p>
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
                  <p className="font-semibold text-gray-900 mb-1">Energy-Efficient Options</p>
                  <p className="text-sm text-gray-600">Reduce cooling costs | Daylighting savings | Solar-powered venting | Low-E coatings | Rebate eligible</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Fixed & Venting Models</p>
                  <p className="text-sm text-gray-600">Custom sizing | Manual & electric operation | Rain sensors | Remote control | Smart home compatible</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Expert Skylight Installation in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Skylights transform Tucson homes by bringing abundant natural light into living spaces, reducing dependence on electric lighting, and in the case of venting skylights, providing natural ventilation that exhausts hot air and improves indoor air quality. In our sunny desert climate with 350+ days of sunshine annually, skylights offer exceptional performance—flooding interiors with brilliant daylight, reducing lighting costs significantly, and creating brighter, more inviting living environments that connect indoor spaces with Tucson's beautiful blue skies.
              </p>
              <p className="text-lg mb-6">
                Modern skylights have evolved dramatically from the leaky, heat-gaining models of past decades. Today's premium skylights feature advanced low-emissivity glass coatings that block up to 70% of solar heat while allowing visible light, multi-pane insulated glazing that prevents heat transfer, impact-resistant materials designed for hail protection, and factory-integrated blinds or shades for light and heat control. These energy-efficient designs ensure skylights provide net energy benefits in Tucson's climate—the electricity saved through daylighting exceeds any minimal cooling cost increase from properly specified, installed skylights.
              </p>
              <p className="text-lg mb-8">
                At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've installed hundreds of residential skylights throughout greater Tucson since 1979. Our expert installation team understands the critical importance of proper flashing and sealing in Tucson's monsoon climate, specialized techniques required for tile roofs common in our area, and methods for minimizing heat gain while maximizing natural light. We offer comprehensive skylight solutions including fixed skylights for pure daylighting, venting skylights for light plus ventilation, solar-powered models eliminating electrical wiring needs, and custom sizes for unique architectural requirements. Every installation is backed by manufacturer warranties and our guarantee of leak-free performance.
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
                Types of Skylights for Tucson Homes
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Fixed Skylights
              </h3>
              <p className="text-lg mb-6">
                Fixed skylights provide pure daylighting without ventilation capability. These non-opening units are the simplest, most affordable, and most energy-efficient skylight option, ideal for bringing natural light into living rooms, bedrooms, dining areas, hallways, and any space where ventilation isn't required but natural light is desired. Fixed skylights have fewer components and seal points than venting models, reducing potential leak sources and maintenance needs while providing maximum glass area for light transmission.
              </p>
              <p className="text-lg mb-6">
                The primary advantages of fixed skylights include lower cost ($800-$2,500 installed versus $1,200-$4,000 for venting units), simpler installation with fewer components and no electrical requirements, better energy efficiency due to fewer moving parts and seals, and reduced maintenance with no operating mechanisms to service. Fixed skylights work exceptionally well in cathedral ceiling applications where the skylight opening extends directly from roof to living space without light shafts—these dramatic installations flood rooms with natural light and provide beautiful views of Tucson's clear blue skies and stunning clouds during monsoon season.
              </p>
              <p className="text-lg mb-8">
                For Tucson's climate, we recommend fixed skylights with low-E coatings, tinted or bronze glazing, and either factory-integrated or aftermarket blinds or shades for light and heat control. Properly specified fixed skylights provide excellent daylighting benefits with minimal heat gain—the electricity saved from reduced lighting often exceeds any small increase in cooling costs. North-facing skylights receive consistent indirect light throughout the day without direct solar exposure, making them ideal for heat-conscious applications. Multiple smaller skylights often perform better than one large unit, providing more even light distribution and easier heat management.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-types">
                    <Phone className="w-5 h-5 mr-2" />
                    Discuss Skylight Options: (520) 333-2665
                  </a>
                </Button>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Venting Skylights
              </h3>
              <p className="text-lg mb-6">
                Venting skylights (also called operable skylights) open to provide both natural light and ventilation, making them ideal for bathrooms, kitchens, and any space benefiting from hot air exhaust and fresh air intake. These units feature hinged sashes that open manually via crank pole or electrically via wall switch or remote control. The ventilation capability is particularly valuable in Tucson where exhausting built-up heat reduces cooling loads and removing moisture prevents mold and mildew growth in bathrooms and kitchens.
              </p>
              <p className="text-lg mb-6">
                Manual venting skylights use extension poles for opening and closing—economical and reliable but requiring physical access and effort. Electric venting skylights offer convenient switch or remote operation, programmable timers for automated opening/closing, and integration with smart home systems. Solar-powered electric skylights eliminate electrical wiring requirements by using integrated solar panels and rechargeable batteries—ideal for retrofit installations where running new electrical wiring is difficult or expensive. Many solar-powered models include rain sensors that automatically close the skylight when rain is detected, preventing water intrusion during unexpected monsoon storms.
              </p>
              <p className="text-lg mb-8">
                Venting skylights cost more than fixed models ($1,200-$4,000+ installed) due to operating mechanisms, electrical components (for powered units), and increased complexity. However, the ventilation benefits justify the investment in appropriate applications—a bathroom venting skylight can eliminate the need for a separate exhaust fan, while kitchen skylights exhaust cooking heat and odors naturally. The key is selecting the right venting mechanism for your accessibility and budget. We help assess your needs and recommend manual, electric, or solar-powered operation based on skylight location, budget, and desired features.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Explore Skylight Options"
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
                Energy Efficiency and Heat Management
              </h2>
              <p className="text-lg mb-6">
                Skylights in Tucson require careful specification to maximize daylighting benefits while minimizing heat gain—a critical balance in our extreme cooling climate. Modern energy-efficient skylights achieve this through advanced glazing technologies. Low-E (low-emissivity) coatings are microscopic metallic layers applied to glass that selectively block infrared radiation (heat) while allowing visible light to pass. Low-E skylights can reject up to 70% of solar heat while admitting 70%+ of visible light—providing bright natural illumination without corresponding heat load.
              </p>
              <p className="text-lg mb-6">
                Multi-pane insulated glazing further improves energy performance. Double-pane skylights feature two layers of glass with air or argon gas between them, reducing heat transfer through the skylight assembly. Triple-pane units provide even better insulation for extreme climate control. Tinted or reflective glazing reduces both light and heat transmission—appropriate for west or south-facing installations or situations where full sun exposure occurs. Bronze, gray, or reflective tints reduce glare while maintaining views and providing solar control.
              </p>
              <p className="text-lg mb-8">
                Light and heat control options include factory-integrated blinds or shades installed between glass panes (protected from dust and damage), motorized interior shades or blinds for adjustable control, and exterior awnings or shades for maximum heat blocking. Skylights with between-glass blinds offer the cleanest solution—blinds never need cleaning and can't be damaged, operating via magnetic controls from room level. The combination of low-E coatings, proper glazing selection, and effective shading ensures Tucson skylights provide net energy benefits. We calculate daylighting savings versus any heat gain to demonstrate positive return on investment through reduced lighting and appropriate heat control measures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Energy-Efficient Solutions: (520) 333-2665
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
                Professional Installation Process
              </h2>
              <p className="text-lg mb-6">
                Professional skylight installation is complex, requiring expertise in roofing, carpentry, drywall, and weather sealing. Our comprehensive process begins with in-home consultation where we assess proposed locations, evaluate structural requirements, discuss skylight options and features, take precise measurements, and provide detailed estimates. We help you select optimal skylight sizes and types for your specific applications, considering factors like room size, ceiling height, orientation, and intended use.
              </p>
              <p className="text-lg mb-6">
                Installation starts with obtaining necessary building permits—required in Tucson for work involving structural modifications and roof penetrations. We handle all permitting paperwork and coordinate inspection schedules. The installation sequence includes: interior preparation protecting floors and furnishings, locating and marking skylight position from interior, cutting ceiling opening to specified dimensions, framing ceiling opening with proper headers and support, cutting roof opening aligned with ceiling opening (for cathedral ceilings, these coincide), framing roof opening with structural support adequate for skylight load and code requirements, and building light shaft between roof and ceiling for standard installations (angling shaft walls to maximize light spread).
              </p>
              <p className="text-lg mb-8">
                On the roof, we install the skylight curb or mounting frame (if required), set the skylight unit in position and secure it properly, install flashing integrated with roofing materials—critical for leak prevention, seal all penetrations using premium weather sealants, and verify proper water runoff. For tile roofs common in Tucson, this involves carefully removing tiles around the opening, creating custom flashing that works with tile profiles, and reinstalling tiles for seamless integration. Interior finishing includes insulating the light shaft, installing drywall and taping, priming and painting to match existing finishes, and installing trim around ceiling opening. For venting skylights, we complete electrical connections (if required). Final cleanup and inspection ensure professional results and customer satisfaction. Typical installation takes 1-2 days depending on complexity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Get Installation Quote"
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
        <CommonQuestions questions={roofRepairCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={skylightsFAQs.faqs} />

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Ready to Brighten Your Home with Skylights?
              </h2>
              <p className="text-lg mb-8">
                Schedule a free consultation for professional skylight installation. We'll assess your home, recommend optimal solutions, and provide transparent pricing with no obligation. Serving Tucson, Oro Valley, Marana, Vail, Sahuarita, and surrounding areas since 1979.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Free Consultation"
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