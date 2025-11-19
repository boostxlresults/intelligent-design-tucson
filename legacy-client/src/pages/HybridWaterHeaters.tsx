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
import { hybridWaterHeatersFAQs } from '@/data/faqs/plumbing';
import hybridWaterHeaterHero from '@assets/generated_images/Hybrid_water_heater_installation_39259483.webp';
import HybridWaterHeatersSchema from '@/components/HybridWaterHeatersSchema';
import { CommonQuestions } from "@/components/CommonQuestions";
import { waterHeaterCommonQuestions } from "@/data/commonQuestions/plumbing";

export default function HybridWaterHeaters() {
  const description = 'Expert hybrid water heater installation, repair & replacement in Tucson. Save up to 70% on water heating costs with energy-efficient heat pump technology. Call (520) 333-2665 for same-day service.';
  const imageUrl = `${SITE_URL}${hybridWaterHeaterHero}`;

  return (
    <>
      <MetaHead
        title="Hybrid Water Heater Installation & Repair Tucson AZ | Intelligent Design"
        description={description}
        canonical={`${SITE_URL}/hybrid-water-heaters-tucson`}
        openGraph={[
          { property: 'og:title', content: 'Hybrid Water Heater Installation & Repair Tucson AZ | Intelligent Design' },
          { property: 'og:description', content: 'Expert hybrid water heater installation, repair & replacement in Tucson. Save up to 70% on water heating costs with energy-efficient heat pump technology. Call (520) 333-2665 for same-day service.' },
          { property: 'og:url', content: `${SITE_URL}/hybrid-water-heaters-tucson` },
          { property: 'og:type', content: 'website' },
          { property: 'og:image', content: imageUrl },
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Hybrid Water Heater Installation & Repair Tucson AZ | Intelligent Design' },
          { name: 'twitter:description', content: 'Expert hybrid water heater installation, repair & replacement in Tucson. Save up to 70% on water heating costs with energy-efficient heat pump technology.' },
          { name: 'twitter:image', content: imageUrl },
        ]}
      />
      <GTM />
      <DNIInjector />
      <HybridWaterHeatersSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${hybridWaterHeaterHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Hybrid Water Heater Installation & Repair in Tucson, AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Save Up to 70% on Water Heating Costs | Energy-Efficient Heat Pump Technology | Federal Tax Credits Available | Expert Installation
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
              Why Choose Hybrid Water Heaters from Intelligent Design?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Save Up to 70% on Water Heating Costs</p>
                  <p className="text-sm text-gray-600">Heat pump technology | 2-3x more efficient | $300-$500 annual savings | 10-15 year payback</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Federal Tax Credits & Utility Rebates</p>
                  <p className="text-sm text-gray-600">Up to $2,000 federal credits | TEP rebates available | We handle paperwork | Maximize savings</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Perfect for Tucson's Climate</p>
                  <p className="text-sm text-gray-600">Most efficient in warm weather | Cools garage space | Year-round performance | Ideal for Arizona</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Expert Installation & Service</p>
                  <p className="text-sm text-gray-600">Licensed plumbers | Professional installation | Same-day service | Full warranty support</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Premium Equipment & Brands</p>
                  <p className="text-sm text-gray-600">Rheem, AO Smith, Bradford White | Energy Star certified | 10-year warranties | Proven reliability</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Transparent pricing | Satisfaction guaranteed</p>
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
                Hybrid Water Heater Installation & Repair in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                When it's time to replace your water heater, most Tucson homeowners face an important decision: stick with traditional technology or upgrade to a high-efficiency hybrid water heater? At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we help hundreds of Tucson families make this choice every year, and the numbers speak for themselves. Hybrid water heaters typically save 50-70% on water heating costs compared to standard electric water heaters—that's $300-$500 per year for the average household.
              </p>
              <p className="text-lg mb-6">
                Hybrid water heaters, also known as heat pump water heaters, work differently than traditional water heaters. Instead of generating heat directly through electric resistance elements or gas burners, they extract heat from the surrounding air and transfer it into the water tank. This process uses the same proven heat pump technology found in air conditioners and refrigerators, but in reverse. By moving heat instead of creating it, hybrid water heaters achieve remarkable efficiency—often delivering 2-3 times more hot water per dollar spent on electricity.
              </p>
              <p className="text-lg mb-8">
                Tucson's climate is ideal for hybrid water heater performance. These units work best when ambient air temperatures stay between 40-90°F, and since most Tucson garages and utility rooms remain warm year-round, hybrid water heaters maintain peak efficiency. As a bonus, the heat pump extracts heat from the surrounding air, effectively cooling and dehumidifying the space where it's installed—welcome relief during Tucson's hot summers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Get Free Quote"
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

        {/* How Hybrid Water Heaters Work Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                How Hybrid Water Heaters Work
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Heat Pump Technology Explained
              </h3>
              <p className="text-lg mb-6">
                Hybrid water heaters combine a standard electric water heater tank with an integrated heat pump mounted on top. The heat pump contains a compressor, evaporator, and condenser—the same components found in air conditioners and refrigerators. When the system calls for hot water, the heat pump activates and draws warm air from the room through the evaporator coils. Refrigerant inside these coils absorbs heat from the air, then the compressor pressurizes the refrigerant, raising its temperature significantly.
              </p>
              <p className="text-lg mb-6">
                This superheated refrigerant passes through a heat exchanger (condenser) that transfers the heat to the water in the tank. The refrigerant cools back down, the cycle repeats, and the air expelled from the unit is cooler and less humid than the air it drew in. This process is remarkably efficient because moving heat requires much less energy than generating it. Think of it this way: lifting a hot rock into a bucket of water is easier than heating the rock from scratch.
              </p>
              <p className="text-lg mb-6">
                Hybrid water heaters also retain the standard electric heating elements as backup. During periods of extremely high hot water demand—when multiple showers run simultaneously, for example—the electric elements can activate to provide additional heating capacity. This hybrid approach ensures you never run out of hot water while maintaining maximum efficiency during normal usage.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Multiple Operating Modes
              </h3>
              <p className="text-lg mb-6">
                Most hybrid water heaters offer several operating modes to optimize performance for different situations:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Efficiency/Economy Mode:</span> Heat pump only, maximum energy savings, best for normal daily hot water use.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Auto/Hybrid Mode:</span> Heat pump primary with electric element backup, balanced efficiency and performance.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Electric/High-Demand Mode:</span> Electric elements only, fastest recovery for heavy hot water usage periods.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Vacation Mode:</span> Maintains minimum temperature to prevent freezing while minimizing energy use when away from home.
                  </div>
                </li>
              </ul>
              <p className="text-lg mb-8">
                Most Tucson homeowners set their hybrid water heater to Auto/Hybrid mode and leave it there. The system intelligently manages the heat pump and electric elements based on hot water demand, ambient temperature, and programmed settings. Smart models can even learn your family's hot water usage patterns and optimize operation automatically.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Consultation"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cost Savings Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Hybrid Water Heater Cost Savings in Tucson
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Dramatic Operating Cost Reduction
              </h3>
              <p className="text-lg mb-6">
                Water heating typically accounts for 15-25% of a home's total energy costs, making it the second or third largest energy expense after heating and cooling. With Tucson Electric Power (TEP) rates, the average Tucson household spends $400-$700 annually heating water with a standard electric water heater. Switching to a hybrid water heater can reduce this cost by 50-70%, resulting in annual savings of $300-$500.
              </p>
              <p className="text-lg mb-6">
                The savings come from simple physics. A standard electric water heater converts electrical energy to heat at roughly 95% efficiency—excellent efficiency, but it still requires significant electricity. A hybrid water heater, by contrast, moves heat from air to water using a small amount of electricity to run the compressor and fan. For every 1 kWh of electricity consumed, a hybrid water heater can deliver 2-3 kWh worth of heating. This 200-300% effective efficiency is what generates the dramatic cost savings.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Federal Tax Credits & Utility Rebates
              </h3>
              <p className="text-lg mb-6">
                The federal government recognizes the energy-saving potential of hybrid water heaters and offers substantial tax credits for qualifying installations. Under current energy efficiency tax credit programs (as of 2024), homeowners can receive up to $2,000 in federal tax credits for installing an Energy Star certified heat pump water heater. This credit directly reduces your federal tax bill and can be claimed on your tax return for the year of installation.
              </p>
              <p className="text-lg mb-6">
                Additionally, Tucson Electric Power (TEP) periodically offers rebates for energy-efficient water heater installations. These rebates can range from $200-$800 depending on the program and specific equipment installed. When combined with federal tax credits, these incentives can reduce the net cost of a hybrid water heater by $300-$2,000, dramatically shortening the payback period.
              </p>
              <p className="text-lg mb-6">
                Intelligent Design helps you navigate the rebate and tax credit process. We provide all documentation needed for rebate applications and tax credit claims, including manufacturer certification letters, installation invoices with required details, and Energy Star qualification proof. We stay current on available incentive programs and ensure you receive maximum financial benefits from your hybrid water heater investment.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Long-Term Return on Investment
              </h3>
              <p className="text-lg mb-6">
                Hybrid water heaters cost more upfront than standard electric water heaters—typically $1,500-$3,500 for equipment and installation compared to $800-$1,500 for standard electric. However, when you factor in energy savings, tax credits, and rebates, the payback period is usually 3-6 years. Since hybrid water heaters typically last 10-15 years, you'll enjoy 4-12 years of pure savings after the initial investment is recouped.
              </p>
              <p className="text-lg mb-8">
                Over a 15-year lifespan, a hybrid water heater can save Tucson homeowners $4,500-$7,500 compared to operating a standard electric water heater. That's real money that stays in your pocket instead of going to the utility company. For families planning to stay in their homes long-term, the financial case for hybrid water heaters is compelling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Free Estimate: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Requirements Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Hybrid Water Heater Installation Requirements
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Space & Clearance Considerations
              </h3>
              <p className="text-lg mb-6">
                Hybrid water heaters are taller than traditional water heaters due to the heat pump unit mounted on top. A typical hybrid water heater stands 6-7 feet tall compared to 4-5 feet for a standard water heater. More importantly, hybrid water heaters require adequate air space for the heat pump to operate efficiently. The general guideline is minimum 700-1,000 cubic feet of air space, which translates to roughly a 10x10 room with 8-foot ceilings.
              </p>
              <p className="text-lg mb-6">
                Most Tucson garages, utility rooms, and laundry rooms easily meet these space requirements. The unit also needs clearance on all sides for air circulation—typically 6-12 inches on the sides and back, with adequate overhead clearance for the air intake on top. If your water heater is currently in a small closet, we may need to explore alternative placement options or consider a traditional high-efficiency water heater instead.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Electrical & Plumbing Connections
              </h3>
              <p className="text-lg mb-6">
                Hybrid water heaters typically require 240V electrical service, similar to standard electric water heaters. However, some models may have different amperage requirements than your existing water heater. Our technicians assess your current electrical service during the consultation and make any necessary upgrades to ensure safe, code-compliant operation. This might include installing a new dedicated circuit or upgrading the breaker.
              </p>
              <p className="text-lg mb-6">
                Plumbing connections are straightforward and similar to traditional water heater installation. We connect the cold water inlet, hot water outlet, temperature/pressure relief valve discharge pipe, and gas line (if applicable for hybrid gas models). Additionally, hybrid water heaters produce condensation from the heat pump operation, requiring a condensate drain line. We typically route this to a floor drain, laundry sink, or outside, ensuring proper drainage and preventing water damage.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Professional Installation Process
              </h3>
              <p className="text-lg mb-6">
                Hybrid water heater installation is not a DIY project. These units are heavy (300-500 pounds when full), require electrical expertise, involve plumbing work, and must be installed per manufacturer specifications to maintain warranty coverage and qualify for tax credits and rebates. Professional installation ensures safety, efficiency, and compliance with local building codes.
              </p>
              <p className="text-lg mb-6">
                Our installation process begins with removing your old water heater and preparing the installation space. We verify electrical service adequacy, make any necessary upgrades, and install a new drain pan for leak protection. The new hybrid water heater is carefully positioned, leveled, and secured. We make all electrical connections, plumbing connections, and install the condensate drain line. After filling the tank and purging air from the system, we test all connections for leaks and verify proper operation in all modes.
              </p>
              <p className="text-lg mb-8">
                Before leaving, we program the unit for optimal efficiency based on your household size and hot water usage patterns, demonstrate the controls and operating modes, explain maintenance requirements, and answer all your questions. Most installations are completed in 4-6 hours, and you'll have hot water the same day. We haul away your old water heater and leave your installation area clean.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Installation"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Brands & Models Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Premium Hybrid Water Heater Brands
              </h2>
              <p className="text-lg mb-6">
                At Intelligent Design, we install only premium-quality hybrid water heaters from manufacturers with proven track records of reliability and performance. Our preferred brands include Rheem, AO Smith, and Bradford White—all leaders in water heater manufacturing with decades of experience and industry-leading warranties.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Rheem Hybrid Water Heaters
              </h3>
              <p className="text-lg mb-6">
                Rheem manufactures the ProTerra series of hybrid electric water heaters, consistently rated among the most efficient and reliable models available. Rheem ProTerra units feature advanced heat pump technology with multiple operating modes, WiFi connectivity for remote monitoring and control, and leak detection systems. Most Rheem hybrid water heaters qualify for Energy Star certification and come with 10-year tank warranties. The ProTerra series is particularly well-suited for Tucson's climate, delivering consistent performance even during our hottest months.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                AO Smith Hybrid Water Heaters
              </h3>
              <p className="text-lg mb-6">
                AO Smith offers the Voltex hybrid electric water heater line, known for quiet operation and user-friendly controls. Voltex models feature sound-dampening insulation that reduces operating noise, making them ideal for installations near living spaces. These units include advanced diagnostics that help identify potential issues before they become problems, and many models offer smart home integration. AO Smith backs their hybrid water heaters with comprehensive warranties covering both the tank and heat pump components.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Bradford White Hybrid Water Heaters
              </h3>
              <p className="text-lg mb-8">
                Bradford White's AeroTherm series brings commercial-grade durability to residential hybrid water heating. These units feature heavy-duty construction, stainless steel heat exchangers for corrosion resistance, and advanced temperature management systems. Bradford White is known for building water heaters that outlast industry averages, making their hybrid models an excellent choice for homeowners prioritizing longevity and reliability. The AeroTherm series includes models ranging from 50 to 80 gallons, accommodating households of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section5">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Pricing: (520) 333-2665
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
                Why Choose Intelligent Design for Hybrid Water Heater Installation?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has served Tucson families since 1979. We're a family and veteran-owned business with over 45 years of experience providing honest, professional plumbing services. Our team includes licensed master plumbers who stay current with the latest water heater technology and installation best practices through ongoing training and manufacturer certifications.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on quality workmanship, transparent pricing, and exceptional customer service. When you choose Intelligent Design for your hybrid water heater installation, you're getting factory-trained technicians, premium equipment, professional installation, complete warranty coverage, and a team that stands behind every installation.
              </p>
              <p className="text-lg mb-6">
                We understand that a water heater replacement is a significant investment. That's why we offer flexible financing options to make hybrid water heaters affordable for every Tucson family. Our financing programs feature competitive rates, quick approval, and convenient monthly payments. You can start enjoying energy savings and lower utility bills immediately while spreading the cost over time.
              </p>
              <p className="text-lg mb-8">
                As a full-service plumbing company, we can also address any related plumbing needs during your water heater installation. If your water pressure is too high and a pressure-reducing valve is needed, we'll install it. If your aging water supply lines should be replaced, we can handle that too. If you need expanded capacity with a recirculation system for instant hot water throughout your home, we have the expertise. This comprehensive approach ensures your entire plumbing system works together efficiently.
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
        <CommonQuestions questions={waterHeaterCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={hybridWaterHeatersFAQs.faqs} />

        {/* Business Information Section (NAP) */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Hybrid Water Heater Installation Today
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