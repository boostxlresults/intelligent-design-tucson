import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { waterHeaterInstallationFAQs } from '@/data/faqs/plumbing';
import waterHeaterInstallationHero from '@assets/generated_images/Water_heater_installation_service_2f1d92e9.webp';
import WaterHeaterInstallationSchema from '@/components/WaterHeaterInstallationSchema';
import { CommonQuestions } from "@/components/CommonQuestions";
import { waterHeaterCommonQuestions } from "@/data/commonQuestions/plumbing";

export default function WaterHeaterInstallation() {
  const description = 'Professional water heater installation in Tucson. Tank, tankless & hybrid water heaters. Expert sizing, permitting & installation. Free consultation. Call (520) 333-2665 for same-day installation.';
  const imageUrl = `${SITE_URL}${waterHeaterInstallationHero}`;

  return (
    <>
      <MetaHead
        title="Water Heater Installation Tucson AZ | Tank, Tankless & Hybrid Installation"
        description={description}
        canonical={`${SITE_URL}/water-heater-installation-tucson`}
        openGraph={[
          { property: 'og:title', content: 'Water Heater Installation Tucson AZ | Tank, Tankless & Hybrid' },
          { property: 'og:description', content: 'Professional water heater installation in Tucson. Expert sizing, permitting & installation. Same-day service available. Over 22,000 5-star reviews.' },
          { property: 'og:url', content: `${SITE_URL}/water-heater-installation-tucson` },
          { property: 'og:type', content: 'website' },
          { property: 'og:image', content: imageUrl },
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Water Heater Installation Tucson AZ | Tank, Tankless & Hybrid' },
          { name: 'twitter:description', content: 'Professional water heater installation in Tucson. Expert sizing, permitting & installation. Same-day service available. Over 22,000 5-star reviews.' },
          { name: 'twitter:image', content: imageUrl },
        ]}
      />
      <GTM />
      <DNIInjector />
      <WaterHeaterInstallationSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${waterHeaterInstallationHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Water Heater Installation in Tucson, AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Tank, Tankless & Hybrid Installation | Expert Sizing & Permitting | Same-Day Service Available | Free Consultation | 45+ Years Experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Free Consultation"
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
              Why Choose Intelligent Design for Water Heater Installation?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Expert Sizing & Selection</p>
                  <p className="text-sm text-gray-600">Free consultation | Professional load calculations | All types available | Honest recommendations</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Professional Installation</p>
                  <p className="text-sm text-gray-600">Licensed master plumbers | Code compliant | All permits handled | Same-day service available</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">All Major Brands</p>
                  <p className="text-sm text-gray-600">Rheem, Bradford White, AO Smith, Rinnai, Navien | Best-in-class equipment | Manufacturer warranties</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Tucson hard water expertise | Trusted since 1979</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Transparent Pricing</p>
                  <p className="text-sm text-gray-600">Upfront quotes | No hidden fees | Financing available | Best value guarantee</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Service</p>
                  <p className="text-sm text-gray-600">Old unit removal | Installation | Permitting | Inspections | Cleanup | Warranty support</p>
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
                Professional Water Heater Installation Services
              </h2>
              <p className="text-lg mb-6">
                Installing a new water heater is a significant investment in your home's comfort and efficiency. Whether you're replacing a failed unit, upgrading for better performance, or installing in new construction, professional installation ensures safety, efficiency, and longevity. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've installed thousands of water heaters throughout Tucson since 1979, and we understand exactly what it takes to deliver a quality installation that performs flawlessly for years to come.
              </p>
              <p className="text-lg mb-6">
                Proper water heater installation involves much more than connecting pipes and turning on power. It requires accurate sizing calculations, proper venting (for gas units), adequate electrical capacity (for electric units), code-compliant installation, permit acquisition and inspections, leak testing, and safety checks. Our licensed master plumbers handle every aspect professionally, ensuring your new water heater operates safely and efficiently from day one.
              </p>
              <p className="text-lg mb-8">
                We install all types of water heaters—traditional tank (gas and electric), tankless (gas and electric), and hybrid/heat pump models—from all major manufacturers including Rheem, Bradford White, AO Smith, Rinnai, Navien, and more. This multi-brand approach means we recommend equipment based on your specific needs and budget, not manufacturer incentives. Whether you need a simple tank replacement or a complex tankless installation with infrastructure upgrades, we have the expertise and equipment to complete your installation correctly and efficiently.
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

        {/* Installation Types Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Types of Water Heater Installations
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tank Water Heater Installation
              </h3>
              <p className="text-lg mb-6">
                Traditional tank water heaters remain the most popular choice for Tucson homeowners due to their affordability, reliability, and straightforward installation. A tank water heater stores 30-80 gallons of hot water in an insulated tank, maintaining it at the set temperature for instant availability. Installation involves connecting cold water inlet and hot water outlet pipes, installing temperature-pressure relief valve and discharge pipe, connecting fuel supply (gas line or electricity), installing proper venting (gas units only), mounting the unit level and secure, and testing for proper operation and safety.
              </p>
              <p className="text-lg mb-6">
                Gas tank water heaters require proper venting to exhaust combustion gases safely. We install atmospheric vents (natural draft) for standard efficiency units or power vents for high-efficiency units, ensuring proper draft and carbon monoxide safety. Electric tank water heaters don't require venting but need adequate electrical supply—most use 240V circuits with 30-amp breakers. Simple tank-for-tank replacements (same fuel type, location, and size) typically take 3-4 hours including old unit removal, installation, permitting, and testing.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Tankless Water Heater Installation
              </h3>
              <p className="text-lg mb-6">
                Tankless water heaters provide endless hot water by heating on demand rather than storing heated water. Installation is more complex than tank heaters but delivers superior long-term performance and efficiency. Gas tankless installations often require gas line upgrades to supply adequate BTU input (150,000-200,000 BTU for whole-house units), new venting systems (stainless steel sealed-combustion vents), electrical connections for controls and ignition, and proper condensate drainage (for condensing units). Some installations may require upgrading to larger gas meters if household total demand exceeds current meter capacity.
              </p>
              <p className="text-lg mb-6">
                Electric tankless water heaters eliminate venting complexity but demand significant electrical capacity. Whole-house electric tankless units typically require 100-150 amps of dedicated electrical service—often exceeding what's available in existing electrical panels. This may necessitate electrical panel upgrades, which we coordinate and complete as part of the installation. Electric tankless works well for point-of-use applications (single bathroom or kitchen) where electrical demands are more modest and long pipe runs waste energy and water.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Hybrid/Heat Pump Water Heater Installation
              </h3>
              <p className="text-lg mb-8">
                Hybrid water heaters combine tank storage with heat pump technology for exceptional efficiency—using 60-70% less energy than standard electric water heaters. Installation requires adequate space around the unit for air circulation (typically 1,000+ cubic feet of space), proper condensate drainage, electrical connection (standard 240V circuit), and the unit must be installed in spaces that maintain 40-90°F year-round. Tucson's warm garages and utility rooms are ideal locations, and the heat pump actually cools and dehumidifies the installation space as a beneficial side effect.
              </p>
              <p className="text-lg mb-8">
                Hybrid water heaters cost more upfront than standard electric tanks ($2,000-$3,500 installed) but save $300-$400 annually on electricity. They also qualify for utility rebates and federal tax credits that reduce net cost significantly—often $500-$2,000 in total incentives. With proper installation and maintenance, hybrid water heaters last 10-15 years and pay for themselves through energy savings. We help you navigate available rebates and provide necessary documentation for tax credit claims.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Explore Installation Options"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Professional Installation Process
              </h2>
              <p className="text-lg mb-6">
                At Intelligent Design, we follow a comprehensive installation process that ensures quality, safety, and your complete satisfaction. From initial consultation through final testing and cleanup, we maintain clear communication and professional standards throughout your water heater installation project.
              </p>
              <p className="text-lg mb-6">
                Step 1: Free In-Home Consultation. We begin with a complimentary consultation where we assess your current water heater, evaluate your hot water needs, measure available space and utility connections, calculate proper sizing requirements, explain all available options (tank, tankless, hybrid), provide transparent pricing for each option, and answer all your questions without pressure. This consultation ensures you make an informed decision about the best water heater for your home and budget.
              </p>
              <p className="text-lg mb-6">
                Step 2: Scheduling and Preparation. Once you select your new water heater, we schedule installation at your convenience and order equipment if not in stock. We obtain all necessary permits from the City of Tucson and coordinate any required utility work (gas meter upgrades, etc.). For emergency replacements, we often complete the entire process—consultation, equipment procurement, and installation—in a single day using in-stock equipment.
              </p>
              <p className="text-lg mb-6">
                Step 3: Professional Installation. On installation day, our licensed plumbers arrive with all necessary equipment, tools, and materials. We turn off utilities and drain the old water heater, carefully remove the old unit and transport it for proper disposal, prepare the installation area and make any necessary modifications, install the new water heater according to manufacturer specifications and code requirements, connect all water, gas/electrical, and venting systems, install safety devices (pressure relief valves, seismic straps per code), and seal and insulate all connections for efficiency and safety.
              </p>
              <p className="text-lg mb-6">
                Step 4: Testing and Inspection. After installation, we thoroughly test every aspect of your new water heater including filling the tank and checking for leaks, testing gas connections for leaks (gas units), verifying proper electrical connections and voltages (electric units), testing burner operation and flame characteristics (gas units), confirming proper venting and draft (gas units), testing temperature-pressure relief valve operation, verifying proper water temperature and pressure, and checking all safety systems. We then schedule and coordinate the required city inspection, which typically occurs within 24-48 hours of installation.
              </p>
              <p className="text-lg mb-8">
                Step 5: Education and Follow-Up. Before leaving, we explain how to operate your new water heater, demonstrate safety features and shut-off procedures, provide maintenance recommendations and schedules, register manufacturer warranties on your behalf, and answer any remaining questions. We follow up after installation to ensure you're completely satisfied and address any concerns. Our service doesn't end when we finish installation—we're here for ongoing support, maintenance, and repairs throughout your water heater's life.
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

        {/* Tucson Specific Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Water Heater Installation Considerations for Tucson Homes
              </h2>
              <p className="text-lg mb-6">
                Tucson's unique climate and water conditions create specific considerations for water heater installation. Our 45+ years of local experience means we understand these factors and design installations that perform optimally in Southern Arizona's environment.
              </p>
              <p className="text-lg mb-6">
                Tucson's extremely hard water (typically 12-16 grains per gallon hardness) accelerates mineral buildup in water heaters, particularly tank models. We recommend installing water softeners before or in conjunction with water heater installations to dramatically extend equipment life and maintain efficiency. For customers who don't want whole-house water softeners, we can install sacrificial anode rods with longer lifespans or powered anode rods that provide continuous corrosion protection without depletion.
              </p>
              <p className="text-lg mb-6">
                Tucson's warm climate provides advantages for certain water heater types. Hybrid heat pump water heaters work exceptionally well because our garages and utility rooms stay warm year-round, keeping heat pumps operating at peak efficiency. Tankless water heaters benefit from Tucson's relatively warm groundwater (65-70°F), requiring less energy to reach target temperatures than in colder climates. However, our intense summer heat requires proper location planning—water heaters in uninsulated attics or exposed locations work harder and wear faster.
              </p>
              <p className="text-lg mb-8">
                Tucson building codes and Tucson Water requirements include specific regulations for water heater installations. All installations require permits and inspections. Seismic strapping is mandatory for earthquake protection. Expansion tanks are required on closed plumbing systems. Temperature-pressure relief valves must discharge through proper drain lines to safe locations. Combustion air and venting must meet strict standards. Our intimate knowledge of Tucson codes ensures your installation passes inspection the first time and protects you from potential liability.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Tucson-Expert Installation"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Intelligent Design for Your Water Heater Installation?
              </h2>
              <p className="text-lg mb-6">
                Choosing the right plumbing company for water heater installation can make the difference between years of trouble-free hot water and expensive problems. At Intelligent Design, we've built our reputation on professional installations that exceed customer expectations and deliver long-term value.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and 45+ years serving Tucson, we've earned the community's trust through consistent quality and honest service. We're a family and veteran-owned business that treats every customer like family. Our licensed master plumbers average 15+ years of experience and receive ongoing manufacturer training on the latest equipment and installation techniques. This expertise means we handle complex installations confidently and resolve unexpected challenges efficiently.
              </p>
              <p className="text-lg mb-8">
                We provide comprehensive service from start to finish: free consultation and expert sizing, competitive pricing on quality equipment, professional installation by licensed plumbers, all permitting and inspections handled, complete removal and disposal of old equipment, thorough testing and quality assurance, manufacturer warranty registration, labor warranties on all installations, financing options for your budget, ongoing maintenance and repair service, and 24/7 emergency support. When you choose Intelligent Design for water heater installation, you're choosing a partner committed to your comfort and satisfaction for years to come.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Get Your Free Consultation"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section6"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={waterHeaterCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={waterHeaterInstallationFAQs.faqs} />

        {/* Business Information Section (NAP) */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Water Heater Installation Today
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
                    triggerText="Schedule Free Consultation"
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