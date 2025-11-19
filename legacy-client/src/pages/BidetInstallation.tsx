import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import BidetInstallationSchema from '@/components/BidetInstallationSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { bidetInstallationFAQs } from '@/data/faqs/plumbing';
import bidetHero from '@assets/generated_images/Bidet_installation_service_c10bca7b.webp';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import { CommonQuestions } from "@/components/CommonQuestions";
import { fixtureInstallationCommonQuestions } from "@/data/commonQuestions/plumbing";

const description = 'Professional bidet installation in Tucson. Electronic bidet seats, standalone bidets, bidet toilets. Heated seats, warm water, air dryer. Call (520) 333-2665 for expert installation.';
const imageUrl = new URL(bidetHero, import.meta.url).href;

export default function BidetInstallation() {

  return (
    <>
      <MetaHead
        title="Bidet Installation Tucson AZ | Electronic Bidet Seats & Standalone Bidets"
        description={description}
        canonical={`${SITE_URL}/bidet-installation-tucson`}
        openGraph={[
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Bidet Installation Tucson AZ | Electronic Bidet Seats & Standalone Bidets" },
          { property: "og:description", content: description },
          { property: "og:url", content: `${SITE_URL}/bidet-installation-tucson` },
          { property: "og:image", content: imageUrl },
        ]}
        twitter={[
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "Bidet Installation Tucson AZ | Electronic Bidet Seats & Standalone Bidets" },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: imageUrl },
        ]}
      />
      <GTM />
      <DNIInjector />
      <BidetInstallationSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bidetHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Bidet Installation Services in Tucson, AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews | 45+ Years Experience
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Electronic Bidet Seats | Standalone Bidets | Bidet Toilets | Superior Hygiene & Comfort | Water Conservation | Licensed Installation ROC #171687
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
              Why Choose Intelligent Design for Bidet Installation?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">All Bidet Types Installed</p>
                  <p className="text-sm text-gray-600">Electronic bidet seats | Standalone bidets | Bidet toilets | Handheld sprayers | Expert product selection | Quality brands</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Superior Hygiene Benefits</p>
                  <p className="text-sm text-gray-600">Gentle water cleaning | Reduces toilet paper 75-100% | Medical benefits | Elderly & mobility assistance | Modern comfort features</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Professional Installation</p>
                  <p className="text-sm text-gray-600">Licensed plumbers | Proper connections | Electrical setup if needed | Leak-free installation | Complete testing</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Modern fixtures expertise | Trusted since 1979 | Licensed ROC #171687</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Advanced Features</p>
                  <p className="text-sm text-gray-600">Heated seats | Warm water spray | Air dryer | Adjustable pressure | Remote controls | Night lights | Self-cleaning nozzles</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Warranty & Support</p>
                  <p className="text-sm text-gray-600">Installation warranty | Manufacturer support | Feature training | Maintenance guidance | Ongoing service</p>
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
                Professional Bidet Installation in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Bidets have transformed from luxury European fixtures to mainstream bathroom essentials embraced by American households seeking superior hygiene, comfort, and sustainability. Modern bidet technology offers features unimaginable in traditional bidets—heated seats, warm water spray, air drying, adjustable pressure, remote controls, and self-cleaning nozzles—all while reducing toilet paper consumption by 75-100%. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've helped hundreds of Tucson families upgrade their bathrooms with professional bidet installation since 1979.
              </p>
              <p className="text-lg mb-6">
                The rising popularity of bidets reflects growing awareness of their benefits: superior cleanliness compared to toilet paper alone, gentle care for sensitive skin and medical conditions, significant environmental impact reduction through decreased toilet paper usage, long-term cost savings, and enhanced accessibility for elderly users and people with mobility limitations. Modern electronic bidet seats make upgrading simple—they replace existing toilet seats without requiring additional bathroom space or extensive plumbing modifications.
              </p>
              <p className="text-lg mb-8">
                Our licensed plumbers install all bidet types: electronic bidet seats with full feature sets, non-electric bidet attachments for budget-conscious upgrades, standalone bidet fixtures for traditional installations, and complete bidet toilet combinations. We help you select appropriate models for your needs and budget, ensure compatibility with existing toilets, handle all plumbing and electrical connections professionally, and provide thorough training on feature operation and maintenance. Whether you're motivated by hygiene, sustainability, medical needs, or simple comfort, we make bidet installation straightforward and worry-free.
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

        {/* Bidet Types Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Types of Bidets We Install
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Electronic Bidet Seats
              </h3>
              <p className="text-lg mb-6">
                Electronic bidet seats represent the most popular modern bidet solution—they replace your existing toilet seat, adding comprehensive bidet functionality without requiring bathroom modifications or additional floor space. Installation is straightforward: remove your old seat, install the bidet seat using existing toilet mounting bolts, connect the water supply line via T-adapter at the toilet fill valve, and plug into a nearby GFCI outlet. The entire process takes 1-2 hours, and most modern toilets are compatible.
              </p>
              <p className="text-lg mb-6">
                Features vary by model and price point. Entry-level seats ($300-$600) provide basic warm water wash, adjustable pressure and nozzle position, and soft-close lids. Mid-range models ($600-$1,000) add heated seats with temperature control, warm air dryers, deodorizers, night lights, and wireless remote controls. Premium seats ($1,000-$1,500+) include tankless instant water heaters (unlimited warm water), oscillating and pulsating wash modes, user preset memory, self-cleaning nozzles with sterilization, energy-saving modes, and smartphone app controls.
              </p>
              <p className="text-lg mb-6">
                Key considerations for electronic bidet seats: toilet compatibility (round vs. elongated bowl, adequate clearance between seat and tank), electrical outlet accessibility (we install GFCI outlets if needed), water pressure requirements (most need 20+ PSI), and feature priorities matching your budget. Popular brands include TOTO (premium quality, Japanese engineering), BioBidet (excellent value, comprehensive features), Brondell (innovative designs, good warranties), and Kohler (American brand, reliable performance). We help you select models offering the best combination of features, reliability, and value for your specific needs.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Standalone Bidet Fixtures
              </h3>
              <p className="text-lg mb-6">
                Standalone bidets are separate fixtures installed next to toilets, requiring dedicated floor space and plumbing connections. Traditional in European and Asian bathrooms, they offer spacious cleaning area and classical aesthetics. Installation is more complex than bidet seats: setting the fixture with appropriate floor mounting, connecting hot and cold water supply lines, installing drain and trap assembly, ensuring proper height and positioning relative to toilet, and testing all connections for leaks.
              </p>
              <p className="text-lg mb-8">
                Standalone bidets work well in large master bathrooms with available floor space and where traditional aesthetics are desired. They range from basic porcelain fixtures ($500-$1,000) to designer models with premium finishes ($1,500-$3,000+). Installation costs $400-$800 including labor and materials, making total investment $900-$3,800. While more expensive and space-intensive than bidet seats, standalone bidets appeal to users preferring traditional separate fixture approach and those with ample bathroom space.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Explore Bidet Options"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Health, Hygiene & Environmental Benefits
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Superior Hygiene and Health Benefits
              </h3>
              <p className="text-lg mb-6">
                Water cleaning provides significantly superior hygiene compared to toilet paper alone. Gentle water spray thoroughly cleanses without the abrasive friction of wiping, removing bacteria more effectively while being gentler on sensitive skin. This is particularly beneficial for people with hemorrhoids, where toilet paper irritation can worsen symptoms while gentle water provides soothing relief. Postpartum mothers find bidets invaluable for comfortable hygiene during recovery.
              </p>
              <p className="text-lg mb-6">
                Medical professionals increasingly recommend bidets for various conditions: urinary tract infection prevention through better hygiene, digestive disorder management where frequent bathroom use makes gentle cleaning essential, mobility impairment assistance providing independence for elderly users and people with disabilities, and skin sensitivity relief for conditions like eczema or psoriasis aggravated by toilet paper. The adjustable pressure settings accommodate varying sensitivity levels and personal preferences.
              </p>
              <p className="text-lg mb-6">
                Bidets also benefit public health. The COVID-19 pandemic highlighted toilet paper supply chain vulnerabilities and increased awareness of bidet benefits. Bidets reduce disease transmission by eliminating hand contact with contaminated toilet paper and provide superior cleansing that removes more pathogens. Modern bidet seats feature touchless operation via remote controls or sensors, further reducing contamination risks.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Environmental Impact and Cost Savings
              </h3>
              <p className="text-lg mb-6">
                Americans use approximately 36.5 billion rolls of toilet paper annually, requiring 15 million trees, 473 billion gallons of water for production, and generating significant carbon emissions from manufacturing and transportation. A single bidet user reduces toilet paper consumption by 75-100%, dramatically decreasing their environmental footprint. Over a lifetime, one person using a bidet instead of toilet paper saves dozens of trees and thousands of gallons of water.
              </p>
              <p className="text-lg mb-8">
                Financial benefits accumulate over time. Average households spend $150-$300 annually on toilet paper. Bidets reduce this to $0-$75 (some users eliminate toilet paper entirely, others use minimal amounts for drying). A $500 electronic bidet seat saves $75-$300 yearly, paying for itself in 2-7 years. Afterward, you enjoy decades of savings while benefiting from superior hygiene and comfort. Water usage is minimal—about 0.125 gallons per use—adding just $5-$10 to annual water bills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Learn More: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Modern Bidet Features and Technology
              </h2>
              <p className="text-lg mb-6">
                Today's electronic bidet seats incorporate sophisticated technology for comfort and convenience. Heated seats with adjustable temperature settings (85-104°F typical range) provide comfort year-round, especially appreciated during Tucson's rare cold snaps. Warm water heating uses either reservoir tanks (heating pre-stored water) or tankless on-demand systems (instant unlimited warm water). Tankless systems cost more but never run out of warm water during extended use.
              </p>
              <p className="text-lg mb-6">
                Adjustable spray features let users customize their experience. Pressure controls range from gentle to vigorous cleaning. Nozzle position adjustment moves the spray forward or backward for optimal targeting. Multiple spray patterns include rear wash, front wash (feminine hygiene), oscillating mode that moves nozzle for thorough cleaning, and pulsating mode that varies pressure rhythmically. These customizations ensure comfortable, effective cleaning for all users.
              </p>
              <p className="text-lg mb-6">
                Air dryer functionality reduces or eliminates toilet paper need entirely. Warm air drying takes 2-3 minutes typically, with adjustable temperature settings. While not as instant as towel drying, many users appreciate the hands-free convenience. Deodorizing systems use carbon filters or ionizers to neutralize odors automatically. Night lights provide gentle illumination for nighttime use without harsh bathroom lighting.
              </p>
              <p className="text-lg mb-8">
                Advanced features in premium models include self-cleaning nozzles that rinse before and after each use (some use UV sterilization), automatic open/close lids sensing user approach, user preset memory storing multiple users' preferences, energy-saving modes reducing standby power consumption, and smartphone app controls for ultimate convenience. Remote controls (wireless or side-panel mounted) make operation simple, with large buttons and intuitive layouts suitable for all ages and tech comfort levels.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="See Features In Person"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Bidet Installation Process
              </h2>
              <p className="text-lg mb-6">
                Proper bidet installation ensures reliable, leak-free operation and full feature functionality. For electronic bidet seats, we start by verifying toilet compatibility—measuring bowl shape (round or elongated), checking mounting bolt spacing, ensuring adequate clearance between seat and tank for bidet mechanisms, and confirming water pressure meets minimum requirements (typically 20 PSI). Most modern toilets are compatible, but we identify any issues before installation begins.
              </p>
              <p className="text-lg mb-6">
                Installation involves: shutting off water supply and flushing toilet to drain tank, removing existing toilet seat, installing bidet seat mounting bracket and seat according to manufacturer specifications, connecting water supply via T-adapter at fill valve (includes shut-off for easy maintenance), verifying all connections are leak-free with pressure testing, installing GFCI electrical outlet if needed ($150-$300 additional), plugging in bidet seat and testing all features, and providing thorough training on operation and maintenance.
              </p>
              <p className="text-lg mb-6">
                Electrical requirements are important for electronic bidets. Most require standard 120V GFCI-protected outlets within 3-4 feet of the toilet. Many bathrooms already have outlets meeting these requirements. When they don't, we install new GFCI outlets properly positioned and safely wired. This protects against electrical shock in wet bathroom environments. Some basic bidet seats and non-electric attachments operate purely on water pressure, requiring no electricity—good options when electrical installation isn't feasible.
              </p>
              <p className="text-lg mb-8">
                For standalone bidet installation, the process is more extensive: determining optimal positioning relative to toilet (typically 15-18 inches center-to-center), securing fixture to floor with appropriate mounting hardware, running hot and cold water supply lines (may require wall access), installing drain assembly with proper trap configuration, ensuring fixture is level for proper drainage, testing all connections thoroughly, and sealing around base. This takes 3-5 hours typically and requires professional plumbing expertise for proper installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section5">
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule Installation: (520) 333-2665
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
                Why Choose Intelligent Design for Bidet Installation?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has served Tucson families since 1979. We're a family and veteran-owned business with over 45 years of experience providing honest, professional plumbing services. Our licensed master plumbers stay current with modern bathroom fixture technology, including the rapidly evolving bidet market, and we've helped hundreds of Tucson homeowners upgrade to bidet-equipped bathrooms.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on quality workmanship, transparent pricing, and exceptional customer service. When you choose Intelligent Design for bidet installation, you're getting: expert product recommendations matching your needs and budget, professional installation with proper plumbing and electrical connections, thorough compatibility assessment preventing installation problems, comprehensive training on feature operation and maintenance, warranty protection on installation and manufacturer support coordination, and respectful service that treats your home with care.
              </p>
              <p className="text-lg mb-8">
                We understand bidet installation represents new territory for many customers. We take time to explain options clearly, demonstrate features, answer questions patiently, and ensure you're completely comfortable with your new bidet before we leave. Our goal is to make the upgrade process smooth and rewarding, helping you enjoy the hygiene, comfort, and sustainability benefits of modern bidet technology. Licensed, bonded, and insured (ROC #171687), we provide professional bidet installation services throughout Tucson.
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
        <ServiceFAQ faqs={bidetInstallationFAQs.faqs} />

        {/* Business Information Section (NAP) */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Bidet Installation Today
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
                    triggerText="Schedule Installation"
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