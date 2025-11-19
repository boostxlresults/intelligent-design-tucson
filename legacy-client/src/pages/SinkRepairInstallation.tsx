import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { sinkRepairInstallationFAQs } from '@/data/faqs/plumbing';
import sinkInstallHero from '@assets/generated_images/Sink_installation_service_a1b31886.webp';
import SinkRepairInstallationSchema from '@/components/SinkRepairInstallationSchema';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import { CommonQuestions } from "@/components/CommonQuestions";
import { fixtureInstallationCommonQuestions } from "@/data/commonQuestions/plumbing";

const description = 'Professional sink installation & repair in Tucson. Kitchen & bathroom sinks, faucets, garbage disposals. Undermount, drop-in, farmhouse, vessel sinks. Call (520) 333-2665 today.';
const imageUrl = new URL(sinkInstallHero, import.meta.url).href;

export default function SinkRepairInstallation() {

  return (
    <>
      <MetaHead
        title="Sink Repair & Installation Tucson AZ | Kitchen & Bathroom Sinks"
        description={description}
        canonical={`${SITE_URL}/sink-repair-installation-tucson`}
        openGraph={[
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Sink Repair & Installation Tucson AZ | Kitchen & Bathroom Sinks" },
          { property: "og:description", content: description },
          { property: "og:url", content: `${SITE_URL}/sink-repair-installation-tucson` },
          { property: "og:image", content: imageUrl },
        ]}
        twitter={[
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "Sink Repair & Installation Tucson AZ | Kitchen & Bathroom Sinks" },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: imageUrl },
        ]}
      />
      <GTM />
      <DNIInjector />
      <SinkRepairInstallationSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${sinkInstallHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Sink Repair & Installation in Tucson, AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews | 45+ Years Experience
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Kitchen & Bathroom Sinks | Faucet Installation | Garbage Disposals | Undermount, Drop-In, Farmhouse & Vessel Sinks | Professional Fixture Upgrades
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Installation"
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

        {/* TrustBar Component */}
        <TrustBar />

        {/* Page Highlights Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              Why Choose Intelligent Design for Sink Services?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">All Sink Types Installed</p>
                  <p className="text-sm text-gray-600">Undermount, drop-in, farmhouse, vessel | Kitchen & bathroom | Stainless, composite, porcelain | Expert installation</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Faucet & Disposal Installation</p>
                  <p className="text-sm text-gray-600">Full faucet installation | Garbage disposal setup | Pull-down, touchless, pot fillers | Quality fixtures</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Professional Repairs</p>
                  <p className="text-sm text-gray-600">Leak repairs | Drain clearing | Faucet repairs | Disposal repairs | Same-day service available</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Licensed plumbers | Trusted since 1979 | ROC #171687</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Fixture Upgrades</p>
                  <p className="text-sm text-gray-600">Modern sink styles | High-efficiency faucets | Upgraded finishes | Design consultation | Complete remodels</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Quality Workmanship Guaranteed</p>
                  <p className="text-sm text-gray-600">Clean installations | Code compliant | Warranty protection | Professional service | Your satisfaction guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Sink Installation & Repair in Tucson
              </h2>
              <p className="text-lg mb-6">
                Your kitchen and bathroom sinks are among the most-used fixtures in your home, experiencing daily use for cooking, cleaning, hygiene, and countless other tasks. Whether you're remodeling, upgrading fixtures, replacing failed sinks or faucets, or dealing with leaks and drainage problems, professional installation and repair ensures long-lasting functionality and appearance. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've been installing and repairing sinks throughout Tucson since 1979, bringing 45+ years of plumbing expertise to every project.
              </p>
              <p className="text-lg mb-6">
                Modern sink options offer dramatic variety in styles, materials, configurations, and features compared to basic sinks of decades past. Today's homeowners choose from undermount sinks that create seamless countertop transitions, farmhouse sinks that make design statements, vessel sinks that transform bathroom aesthetics, and specialized configurations like double-bowl prep sinks or integrated sink-countertops. Matching these options to your lifestyle, design preferences, and budget requires knowledge of how different sink types perform, install, and maintain—expertise our licensed plumbers provide.
              </p>
              <p className="text-lg mb-8">
                Proper installation is critical for sink longevity and performance. Undermount sinks require precise cutting and sealing to prevent water intrusion that damages cabinets. Farmhouse sinks need structural support modifications for their weight and front-mounted design. All sinks require correct drain assembly, proper faucet installation, appropriate water supply connections, and careful sealing to prevent leaks. We handle all aspects professionally: template creation, cutouts, sink mounting, plumbing connections, disposal installation if desired, and final sealing and cleanup.
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

        {/* Sink Types Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Types of Sinks We Install
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Undermount Sinks
              </h3>
              <p className="text-lg mb-6">
                Undermount sinks attach beneath countertops, creating sleek, modern appearance without visible rim. They're popular for both kitchen and bathroom installations because they allow easy cleaning—spills wipe directly into the sink without catching on rim edges. Undermount installation requires solid-surface countertops (granite, quartz, solid surface) capable of supporting the sink's weight and providing stable mounting surface. Installation is more complex than drop-in sinks, requiring precise template cutting, proper support clips, and waterproof sealing to prevent moisture damage to cabinets.
              </p>
              <p className="text-lg mb-6">
                For kitchen undermounts, we recommend stainless steel (16-18 gauge for durability) or composite granite for best performance in Tucson's hard water. Bathroom undermounts commonly use porcelain or vitreous china matching toilet and tub fixtures. Installation costs $300-$600 depending on sink size, countertop material, and cutout complexity. The investment provides clean aesthetics, easier maintenance, and increased counter space compared to drop-in sinks with visible rims.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Drop-In (Self-Rimming) Sinks
              </h3>
              <p className="text-lg mb-6">
                Drop-in sinks have rims that rest on top of countertop cutouts, making them the easiest and most affordable to install. They work with any countertop material including laminate, tile, and solid surfaces. Installation requires only a correctly-sized cutout—the sink drops in and seals with caulk around the rim. This simplicity makes drop-in sinks ideal for DIY homeowners, rentals, or budget-conscious installations.
              </p>
              <p className="text-lg mb-8">
                However, drop-in rims create edges where food, water, and grime accumulate, requiring additional cleaning. They reduce effective counter space slightly compared to undermounts. For many homeowners, these trade-offs are acceptable given the lower installation cost ($200-$400 typical) and universal compatibility. We install drop-in sinks in kitchens, bathrooms, laundry rooms, and utility areas throughout Tucson homes, ensuring proper cutout sizing, secure mounting, and watertight sealing.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Explore Sink Options"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Farmhouse & Specialty Sinks Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Farmhouse Sinks & Specialty Installations
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Farmhouse (Apron-Front) Sinks
              </h3>
              <p className="text-lg mb-6">
                Farmhouse sinks feature front-facing aprons that extend past cabinet edges, creating distinctive visual statements in kitchens. Their deep basins accommodate large pots, baking sheets, and extensive food prep work. Farmhouse sinks have surged in popularity with modern farmhouse and transitional kitchen designs. Available in materials from traditional fireclay to modern stainless steel, they range from authentic reproduction antiques to contemporary interpretations.
              </p>
              <p className="text-lg mb-6">
                Installation requires modifying existing cabinets to accommodate the apron front. We cut cabinet faces, add structural support for the sink's considerable weight (80-200 pounds depending on material), install proper mounting brackets, and ensure level installation for proper drainage. The process takes 3-5 hours including cabinet modifications and plumbing connections. Installation costs $400-$800 depending on sink size, material, and cabinet modifications required.
              </p>
              <p className="text-lg mb-6">
                Not all cabinets accept farmhouse sinks without extensive modification. Very shallow cabinets, particleboard cabinets lacking structural strength, or custom cabinetry may require professional assessment before committing to farmhouse installation. We evaluate your specific situation, discuss feasibility honestly, and recommend whether farmhouse installation works with your existing cabinets or requires cabinet replacement.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Vessel Sinks and Pedestal Sinks
              </h3>
              <p className="text-lg mb-8">
                Vessel sinks sit atop bathroom vanities like decorative bowls, creating spa-like aesthetics popular in master bathroom remodels. They're available in glass, stone, copper, porcelain, and ceramic with endless design variations. Installation is relatively simple—proper faucet height (vessel sinks require tall faucets), secure mounting to prevent tipping, and appropriate drain assembly. Vessel sinks work best in vanities with adequate counter space around them and in bathrooms where the elevated sink height (typically 32-36" to sink rim) works ergonomically.
              </p>
              <p className="text-lg mb-8">
                Pedestal sinks combine wall-mounted basin with decorative pedestal base hiding plumbing. They're space-efficient for powder rooms and small bathrooms, providing elegant appearance without requiring cabinetry. However, they offer no storage and require wall reinforcement for proper support. We install pedestal sinks with appropriate blocking inside walls to support weight, proper waste arm height, and secure pedestal placement that hides all plumbing connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Discuss Your Project: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Faucets & Fixtures Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Faucet Installation & Garbage Disposals
              </h2>
              <p className="text-lg mb-6">
                Faucet selection dramatically affects daily kitchen and bathroom functionality. Modern faucets offer features unimaginable decades ago: touchless operation preventing cross-contamination, pull-down spray heads providing flexibility, pot fillers eliminating heavy pot carrying, filtered water dispensers, and temperature memory. Kitchen faucets now commonly include pull-down or pull-out sprayers integrated into the spout, high-arc spouts providing clearance for large pots, and magnetic docking ensuring spray heads secure properly after use.
              </p>
              <p className="text-lg mb-6">
                Quality matters significantly. Premium faucets use ceramic disc valve technology lasting 20+ years compared to compression valves requiring washer replacement every few years. Solid brass construction outlasts plated plastic. We recommend established brands like Moen, Delta, Kohler, and Grohe for reliability and widely-available replacement parts. Finishes range from traditional chrome and brushed nickel to trending matte black and champagne bronze. Choose finishes coordinating with other fixtures and consider that chrome shows water spots in Tucson's hard water while brushed finishes hide them better.
              </p>
              <p className="text-lg mb-6">
                Faucet installation includes: removing old faucets and cleaning mounting surfaces, installing new faucet with appropriate deck plate configuration (1-hole, 3-hole, wall-mount), connecting water supply lines with proper shutoff valves, testing for leaks and proper operation, and installing accessories like soap dispensers or side sprayers if included. Installation takes 1-2 hours typically and costs $150-$300 labor when performed with sink installation or $200-$400 as standalone service.
              </p>
              <p className="text-lg mb-8">
                Garbage disposal installation complements kitchen sink projects. Modern disposals feature continuous feed operation (no batch feeding), multi-grind technology reducing food particles efficiently, sound insulation reducing operation noise, and corrosion-resistant grind chambers. Sizing matters: ½ HP handles light use (1-2 people), ¾ HP serves average families, 1 HP accommodates heavy use or large households. Installation includes proper electrical connections (most require dedicated circuits), secure mounting to sink drain, discharge pipe connection to drain system, and testing. We install disposals during sink installation or as standalone projects, ensuring proper sizing and operation.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Upgrade Your Fixtures"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Repair Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Sink & Faucet Repair Services
              </h2>
              <p className="text-lg mb-6">
                Even quality sinks and faucets eventually require repairs. Common problems include dripping faucets wasting water and increasing bills, slow-draining sinks indicating partial clogs, leaking sink drains or supply connections causing cabinet damage, loose faucets from worn mounting hardware, spray hoses losing pressure or leaking, and garbage disposals jamming, leaking, or making unusual noises.
              </p>
              <p className="text-lg mb-6">
                Faucet repairs often involve cartridge or valve replacement. Modern faucets use cartridges containing all valve components—when faucets drip or leak, replacing the cartridge restores like-new function. Cartridge replacement costs $150-$300 including parts and labor, far less than complete faucet replacement ($350-$700). We stock common cartridges for major brands on service vehicles for same-day repairs. Older compression faucets with rubber washers are becoming rare but we repair them when economical or replace with modern cartridge faucets when parts aren't available.
              </p>
              <p className="text-lg mb-6">
                Sink drain leaks typically occur at slip-joint connections below sinks or at the sink flange where drain meets sink. We repair leaks by replacing worn washers, tightening connections properly (not over-tightening which damages components), or replacing corroded drain assemblies entirely. Garbage disposal leaks occur at mounting flange, dishwasher connection, or discharge pipe—we diagnose exact leak source and repair or replace as appropriate.
              </p>
              <p className="text-lg mb-8">
                Preventative maintenance extends fixture life. We recommend annual inspection of supply line connections (braided stainless lines replacing old copper), drain assembly integrity, faucet aerator cleaning to maintain pressure (mineral buildup from hard water restricts flow), disposal condition, and cabinet undersides for moisture indicating slow leaks. Early leak detection prevents thousands in water damage to cabinets, floors, and adjacent rooms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section5">
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule Repair: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Intelligent Design for Sink Services?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has served Tucson families since 1979. We're a family and veteran-owned business with over 45 years of experience providing honest, professional plumbing services. Our licensed master plumbers have installed thousands of sinks throughout Tucson and stay current with modern fixture technology, installation techniques, and design trends.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on quality workmanship, transparent pricing, and exceptional customer service. When you choose Intelligent Design for sink installation or repair, you're getting: expert installation of all sink types and materials, professional faucet and disposal installation, quality fixture recommendations matching your budget and preferences, proper code-compliant installation preventing future problems, comprehensive warranties on materials and labor, and respectful service that leaves your home clean.
              </p>
              <p className="text-lg mb-8">
                We understand sink installation is often part of larger kitchen or bathroom remodeling. We coordinate with your contractors, work within your timeline, and ensure our plumbing work integrates seamlessly with countertops, cabinetry, and flooring. Licensed, bonded, and insured (ROC #171687), we handle all aspects of sink and faucet work professionally and efficiently, ensuring fixtures that function beautifully for decades.
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
        <CommonQuestions questions={fixtureInstallationCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={sinkRepairInstallationFAQs.faqs} />

        {/* Business Information Section (NAP) */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Sink Service Today
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