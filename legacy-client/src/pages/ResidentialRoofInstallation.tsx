import { useEffect } from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceFAQ from '@/components/ServiceFAQ';
import { residentialRoofInstallationFAQs } from '@/data/faqs/roofing';
import { CommonQuestions } from "@/components/CommonQuestions";
import { roofReplacementCommonQuestions } from "@/data/commonQuestions/roofing";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import ResidentialRoofInstallationSchema from '@/components/ResidentialRoofInstallationSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import roofInstallationHero from '@assets/generated_images/residential_roof_installation_crew_9ad609fb.webp';

export default function ResidentialRoofInstallation() {
  const description = 'Expert residential roof installation in Tucson. New construction & additions. Tile, shingle, metal & flat roofs. 45+ years experience. Call (520) 333-2665 for free estimate.';
  const imageUrl = `${SITE_URL}${roofInstallationHero}`;
  
  useEffect(() => {
    return () => {
      document.querySelectorAll('script[data-schema]').forEach(el => el.remove());
    };
  }, []);

  return (
    <>
      <MetaHead
        title="Residential Roof Installation Tucson AZ | New Home Roof Installation"
        description={description}
        canonical={`${SITE_URL}/residential-roof-installation-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Residential Roof Installation Tucson AZ | New Home Roof Installation' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/residential-roof-installation-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'New residential roof installation crew working on Tucson home' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Residential Roof Installation Tucson AZ | New Home Roof Installation' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'New residential roof installation crew working on Tucson home' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <ResidentialRoofInstallationSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${roofInstallationHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Residential Roof Installation Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                New Construction | Custom Homes | Additions | All Roof Types | Expert Installation | 45+ Years Experience
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
              Why Choose Intelligent Design for Roof Installation?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">All Roofing Systems</p>
                  <p className="text-sm text-gray-600">Tile, shingle, metal, flat roofs | Premium materials | Expert installation | Custom solutions</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Licensed & Certified</p>
                  <p className="text-sm text-gray-600">ROC #171687 licensed | Manufacturer certified | Bonded & insured | Code compliant</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Warranties</p>
                  <p className="text-sm text-gray-600">Material warranties up to lifetime | Labor warranties | Leak guarantees | Transferable protection</p>
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
                  <p className="font-semibold text-gray-900 mb-1">Energy-Efficient Options</p>
                  <p className="text-sm text-gray-600">Cool roof technology | Proper ventilation | Insulation upgrades | Rebate assistance</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Project Management</p>
                  <p className="text-sm text-gray-600">Permitting handled | Inspections coordinated | Timeline adherence | Clean job sites</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Residential Roof Installation in Tucson
              </h2>
              <p className="text-lg mb-6">
                Installing a new roof is one of the most significant investments you'll make in your Tucson home. Whether you're building a custom home, adding a room addition, or constructing a new residential development, the quality of roof installation directly impacts your home's protection, energy efficiency, appearance, and value for decades to come. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've installed thousands of residential roofs throughout Tucson since 1979, delivering exceptional craftsmanship and lasting performance.
              </p>
              <p className="text-lg mb-6">
                Tucson's climate demands specialized roofing knowledge and installation techniques. Our intense UV radiation, extreme temperature fluctuations (40°F daily swings common), violent monsoon winds, and occasional winter freezes create conditions that test roofing systems beyond typical performance standards. We understand how to select materials optimized for Southern Arizona's climate, install them using techniques that account for thermal expansion and movement, ensure proper ventilation and insulation for energy efficiency, and create roofing systems that protect your home for 30-50+ years.
              </p>
              <p className="text-lg mb-8">
                We work with homeowners, custom home builders, production builders, architects, and developers to deliver roofing solutions perfectly matched to project requirements. Our licensed contractors bring deep expertise with every residential roofing system—tile, shingle, metal, and flat roofs—and handle every aspect from design consultation and material selection through permitting, installation, and final inspections. When you choose Intelligent Design for roof installation, you're partnering with Tucson's most trusted roofing contractor for superior results and peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Request Estimate"
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
                Roofing Systems We Install
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Clay & Concrete Tile Roofing
              </h3>
              <p className="text-lg mb-6">
                Tile roofing defines Tucson's architectural character and provides unmatched performance in desert climates. Clay tiles offer authentic beauty, 50+ year lifespan, exceptional heat reflection (reducing cooling costs 20-30%), superior fire resistance (Class A rating), and wind resistance up to 150 mph when properly installed. We install Spanish/S-tile profiles, mission tile profiles, flat tile systems, and custom specialty tiles. Clay tiles cost $10-$18 per square foot installed but deliver lifetime value through longevity, energy savings, and home value enhancement.
              </p>
              <p className="text-lg mb-6">
                Concrete tiles provide similar performance and appearance to clay at reduced cost ($8-$12 per square foot). Modern concrete tiles feature integral coloring that won't fade, lighter weight than traditional concrete tiles (though still requiring reinforced framing), and diverse color and profile options. Both clay and concrete tiles require proper installation including adequate roof pitch (minimum 3:12), reinforced framing to support weight (9-12 pounds per square foot), high-quality underlayment (minimum 30-pound felt or synthetic), proper batten systems for ventilation and tile support, and expert flashing at all penetrations and transitions.
              </p>
              <p className="text-lg mb-6">
                Our tile installation process ensures lasting performance: engineered framing analysis to verify structural capacity, premium underlayment installation with proper overlaps, precise batten layout for optimal tile positioning, expert tile cutting and placement for uniform appearance, proper mortar application at hips and ridges, comprehensive flashing systems at all vulnerable areas, and thorough quality inspections at each phase. We're certified installers for major tile manufacturers, qualifying your project for enhanced warranties.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Composition Shingle Roofing
              </h3>
              <p className="text-lg mb-6">
                Architectural composition shingles offer excellent value for budget-conscious new construction. Premium shingles provide 25-50 year performance at $4-$7 per square foot installed, significantly less than tile. Modern architectural shingles feature dimensional profiles that mimic tile or wood shake appearance, algae-resistant formulations, impact resistance for hail protection, and cool roof options with reflective granules that reduce cooling costs. Quality shingle installation delivers reliable weather protection and attractive appearance for decades.
              </p>
              <p className="text-lg mb-8">
                We install only premium shingles from leading manufacturers—GAF, Owens Corning, CertainTeed—backed by comprehensive warranties. Our shingle installation incorporates ice and water shield at valleys and edges, synthetic underlayment for superior tear resistance and weatherproofing, proper shingle alignment and nailing patterns to resist wind uplift, dimensional ridge cap shingles for professional appearance, and complete flashing systems. While shingles don't last as long as tile in Tucson's intense sun, proper installation and premium materials deliver 20-30 years of dependable performance.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Explore Roofing Options"
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
                Metal & Flat Roofing Systems
              </h2>
              <p className="text-lg mb-6">
                Metal roofing excels for contemporary and modern architectural styles increasingly popular in Tucson. Standing seam metal roofs provide sleek appearance, 40-60 year lifespan, exceptional energy efficiency (reflecting 60-70% of solar radiation), zero maintenance requirements, and recyclability at end of life. Metal roofing suits low-slope applications where tile isn't appropriate and handles thermal expansion expertly through panel design. Installation costs range $7-$15 per square foot depending on metal type (steel, aluminum, copper) and complexity.
              </p>
              <p className="text-lg mb-6">
                We install standing seam systems with concealed fasteners for clean aesthetic and superior weather resistance, metal tile profiles that mimic traditional clay tiles, corrugated and ribbed metal for budget-conscious projects, and custom metal roofing for architectural designs. Our metal roof installations include proper thermal breaks to prevent heat transfer, expansion joints for thermal movement, comprehensive flashing systems, and factory-finish options in numerous colors. Metal roofing pairs excellently with solar panel installations common on Tucson new construction.
              </p>
              <p className="text-lg mb-8">
                Flat and low-slope roofing systems suit contemporary homes and portions of traditional homes. We install TPO single-ply membranes (white reflective surface reduces cooling costs significantly), EPDM rubber membranes, modified bitumen systems, and spray polyurethane foam roofing. Each system requires different installation techniques, proper slope for drainage (minimum 1/4 inch per foot), comprehensive flashing and edging, and quality control during installation. We're certified installers ensuring proper technique and warranty coverage for flat roofing systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Free Consultation: (520) 333-2665
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
                Energy-Efficient Roofing Solutions
              </h2>
              <p className="text-lg mb-6">
                Energy-efficient roofing dramatically reduces cooling costs in Tucson's climate where air conditioning operates 6-9 months annually. Cool roof technology—highly reflective roofing materials that reflect solar radiation rather than absorbing it—can reduce roof surface temperatures by 50-80°F compared to traditional dark roofs. Light-colored tile, cool roof shingles, white TPO membranes, and reflective metal roofing all qualify as cool roofs. The resulting cooling cost savings can reach 20-30% annually, paying back any premium cost within 5-7 years.
              </p>
              <p className="text-lg mb-6">
                Proper attic ventilation is equally critical for energy efficiency. We design ventilation systems using ridge vents for exhaust, soffit vents for intake, adequate ventilation area (1 square foot per 150 square feet of attic space), and balanced intake/exhaust ratios. Proper ventilation expels superheated attic air before it radiates into living spaces, extends roofing material life by reducing thermal stress, prevents moisture accumulation, and can reduce cooling costs 10-15%. Many builders undersize ventilation—we ensure adequate capacity.
              </p>
              <p className="text-lg mb-8">
                Radiant barriers—reflective materials installed in attics—reduce radiant heat transfer by 40-60%, further lowering cooling costs. We recommend and install radiant barriers beneath roof decking or over attic insulation. Combined with cool roofing, proper ventilation, and adequate attic insulation, comprehensive energy-efficient roofing systems can reduce cooling costs 30-40% compared to conventional systems. Tucson Electric Power and Southwest Gas offer rebates for energy-efficient roofing and insulation—we help maximize available incentives.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Learn About Energy Savings"
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
                Our Installation Process
              </h2>
              <p className="text-lg mb-6">
                Professional roof installation follows systematic processes ensuring quality results. Our process begins with comprehensive consultation: understanding your project requirements, architectural style, budget parameters, energy efficiency goals, and timeline. We assess roof design, evaluate framing requirements for selected roofing materials, discuss material options with samples, and provide detailed written estimates breaking down materials, labor, permitting, and warranties.
              </p>
              <p className="text-lg mb-6">
                After contract signing, we handle all permitting and obtain required building permits, submit engineered plans when required, and coordinate inspection schedules. Installation begins with preparation: protecting landscaping and property, delivering materials, setting up safe work areas, and verifying materials match specifications. The installation phase includes expert framing or structural reinforcement as needed, premium underlayment installation, precise roofing material installation following manufacturer specifications, comprehensive flashing systems, and quality control inspections at each phase.
              </p>
              <p className="text-lg mb-8">
                Final phases include passing all required building inspections, comprehensive cleanup (we leave your property cleaner than we found it), final walkthrough with you to ensure satisfaction, warranty documentation and care instructions, and follow-up after installation. We maintain clear communication throughout, provide realistic timelines, and deliver professional results that exceed expectations. Our project managers are accessible, responsive, and committed to your satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section5">
                    <Phone className="w-5 h-5 mr-2" />
                    Start Your Project: (520) 333-2665
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
                Why Choose Intelligent Design for Roof Installation?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has served Tucson families and builders since 1979. We're a family and veteran-owned business with over 45 years of experience providing honest, professional roofing services. Our licensed contractors (ROC #171687) bring deep expertise with every residential roofing system and understand Tucson's unique climate challenges and building requirements.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on quality workmanship, transparent pricing, and exceptional customer service. We're certified installers for major roofing manufacturers, qualifying your project for enhanced warranties unavailable with non-certified contractors. Our crews are experienced professionals who take pride in their craftsmanship. We invest in ongoing training, use premium materials, and maintain the highest quality standards.
              </p>
              <p className="text-lg mb-8">
                When you choose Intelligent Design for roof installation, you receive: expert consultation and material selection guidance, comprehensive written estimates with transparent pricing, full permitting and inspection coordination, professional installation by experienced crews, quality materials from leading manufacturers, comprehensive warranty coverage, clean job sites with daily cleanup, and responsive project management. We're large enough to handle any project but small enough to care about every customer. Your satisfaction is our success.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Consultation"
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
        <ServiceFAQ faqs={residentialRoofInstallationFAQs.faqs} />

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Residential Roof Installation Today
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