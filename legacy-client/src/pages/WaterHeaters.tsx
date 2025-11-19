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
import { waterHeatersFAQs } from '@/data/faqs/plumbing';
import waterHeaterHero from '@assets/generated_images/Water_heater_service_overview_f99cdacb.webp';
import WaterHeatersSchema from '@/components/WaterHeatersSchema';
import { CommonQuestions } from "@/components/CommonQuestions";
import { waterHeaterCommonQuestions } from "@/data/commonQuestions/plumbing";

export default function WaterHeaters() {
  const description = 'Expert water heater services in Tucson. Tank, tankless, hybrid, gas & electric water heaters. Professional installation, repair & maintenance. Call (520) 333-2665 for free consultation.';
  const imageUrl = `${SITE_URL}${waterHeaterHero}`;

  return (
    <>
      <MetaHead
        title="Water Heater Services Tucson AZ | Tank, Tankless, Hybrid Water Heaters"
        description={description}
        canonical={`${SITE_URL}/water-heaters-tucson`}
        openGraph={[
          { property: 'og:title', content: 'Water Heater Services Tucson AZ | Tank, Tankless, Hybrid' },
          { property: 'og:description', content: 'Expert water heater services in Tucson. Tank, tankless, hybrid, gas & electric. Professional installation, repair & maintenance since 1979.' },
          { property: 'og:url', content: `${SITE_URL}/water-heaters-tucson` },
          { property: 'og:type', content: 'website' },
          { property: 'og:image', content: imageUrl },
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Water Heater Services Tucson AZ | Tank, Tankless, Hybrid' },
          { name: 'twitter:description', content: 'Expert water heater services in Tucson. Tank, tankless, hybrid, gas & electric. Professional installation, repair & maintenance since 1979.' },
          { name: 'twitter:image', content: imageUrl },
        ]}
      />
      <GTM />
      <DNIInjector />
      <WaterHeatersSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${waterHeaterHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Water Heater Services in Tucson, AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Tank, Tankless & Hybrid Water Heaters | Expert Installation & Repair | Gas & Electric | Free Sizing Consultation | 45+ Years Experience
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
              Why Choose Intelligent Design for Water Heater Services?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">All Water Heater Types</p>
                  <p className="text-sm text-gray-600">Tank, tankless, hybrid | Gas & electric | Expert sizing | Free consultation | Best brands</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Professional Installation</p>
                  <p className="text-sm text-gray-600">Licensed master plumbers | Permitting & inspections | Code compliant | Same-day installation available</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Expert Repair Service</p>
                  <p className="text-sm text-gray-600">Emergency repairs | All makes & models | Honest assessments | Repair vs replace guidance</p>
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
                  <p className="font-semibold text-gray-900 mb-1">Energy Efficiency Experts</p>
                  <p className="text-sm text-gray-600">High-efficiency models | Utility rebate assistance | Operating cost analysis | Long-term savings</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Warranties</p>
                  <p className="text-sm text-gray-600">Manufacturer warranties | Labor warranties | Extended protection | Peace of mind coverage</p>
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
                Water Heater Services in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Choosing the right water heater for your Tucson home is a significant decision that affects your comfort, utility bills, and daily convenience for years to come. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've helped thousands of Tucson families select, install, repair, and maintain water heaters since 1979. Our licensed master plumbers have expertise with every type of water heater—tank, tankless, hybrid, gas, and electric—and we're here to help you make the best choice for your home, budget, and lifestyle.
              </p>
              <p className="text-lg mb-6">
                Water heaters are the second-largest energy consumer in most homes, accounting for 14-18% of utility bills. The right system can save hundreds of dollars annually while providing reliable hot water for showers, laundry, dishes, and cleaning. The wrong system leads to frustration—running out of hot water, excessive energy costs, frequent repairs, and premature replacement. We take time to understand your household's hot water needs, explain all options clearly, and provide honest recommendations without pressure.
              </p>
              <p className="text-lg mb-8">
                Tucson's hard water and warm climate create unique considerations for water heater selection and maintenance. Our local expertise helps you navigate these factors to choose a system that performs optimally in Southern Arizona's conditions. Whether you're replacing a failed unit, upgrading for efficiency, or installing in new construction, we provide professional service from initial consultation through installation and ongoing maintenance.
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

        {/* Types of Water Heaters Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Types of Water Heaters
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tank Water Heaters
              </h3>
              <p className="text-lg mb-6">
                Traditional tank water heaters store 30-80 gallons of hot water in an insulated tank, maintaining temperature 24/7 for instant availability. When you use hot water, cold water enters the tank and heats to the set temperature (typically 120-140°F). Tank heaters are the most common and affordable option, with gas models ranging from $1,200-$2,000 installed and electric models from $800-$1,500 installed.
              </p>
              <p className="text-lg mb-6">
                Gas tank water heaters use natural gas or propane burners to heat water. They heat faster than electric models, cost less to operate in Tucson (natural gas rates are lower than electricity), and work during power outages. However, they require venting for combustion gases, typically through existing chimney flues or dedicated vents. Electric tank water heaters use heating elements and require no venting, making installation simpler and more flexible. They're 95% efficient at converting electricity to heat (vs 60% for gas), but higher electricity costs in Tucson make gas more economical for most homeowners.
              </p>
              <p className="text-lg mb-6">
                Tank water heaters typically last 8-12 years in Tucson. Our hard water accelerates mineral buildup inside tanks, reducing efficiency and lifespan. Annual flushing removes sediment and extends life significantly. The anode rod—a sacrificial component that prevents tank corrosion—should be inspected every 3-4 years and replaced when depleted. With proper maintenance, tank water heaters provide reliable, economical hot water for average households.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Tankless Water Heaters
              </h3>
              <p className="text-lg mb-6">
                Tankless water heaters (also called on-demand or instantaneous heaters) heat water only when needed, eliminating standby energy losses from maintaining a tank of hot water. When you turn on a hot water tap, cold water flows through the unit's heat exchanger, where gas burners or electric elements rapidly heat it to the desired temperature. Tankless units provide endless hot water—you'll never run out mid-shower—and last 15-20 years with proper maintenance.
              </p>
              <p className="text-lg mb-6">
                Tankless water heaters save 24-34% on energy costs compared to tank heaters by eliminating standby heat loss. A family using 41 gallons or less of hot water daily saves 24-34% with tankless; families using 86+ gallons daily save 8-14%. For Tucson's average household, this translates to $100-$200 annual savings on gas bills. Tankless units also take up minimal space—about the size of a suitcase mounted on a wall—freeing valuable floor space in utility rooms and garages.
              </p>
              <p className="text-lg mb-6">
                However, tankless water heaters cost more upfront ($2,500-$4,500 installed for gas; $1,500-$3,000 for electric) and have higher installation complexity. Gas tankless units often require upgrading gas lines, adding dedicated venting, and sometimes upgrading to larger gas meters. Electric tankless units may require electrical panel upgrades and dedicated circuits. Despite higher initial costs, tankless heaters pay for themselves over their 20-year lifespan through energy savings and eliminate the stress of running out of hot water during guests' visits or back-to-back showers.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Hybrid/Heat Pump Water Heaters
              </h3>
              <p className="text-lg mb-8">
                Hybrid water heaters combine tank storage with heat pump technology for exceptional efficiency. Rather than generating heat directly, they extract heat from ambient air and transfer it to water—similar to how air conditioners work in reverse. This makes them 2-3 times more efficient than standard electric water heaters, using 60-70% less energy and saving $300-$400 annually on electricity bills. They cost $2,000-$3,500 installed and qualify for utility rebates and federal tax credits that reduce net cost significantly.
              </p>
              <p className="text-lg mb-8">
                Tucson's warm climate makes hybrid water heaters particularly effective. They work best when installed in spaces that maintain 40-90°F year-round—our garages and utility rooms stay well within this range. The unit extracts heat from the surrounding air, slightly cooling and dehumidifying the space as a beneficial side effect in Tucson's heat. Hybrid heaters need adequate space around them for airflow (typically 1,000+ cubic feet) and proper drainage for condensation, but when properly installed they deliver unmatched efficiency and reasonable hot water capacity (50-80 gallon tanks).
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Explore Water Heater Options"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sizing & Selection Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Water Heater Sizing & Selection
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Sizing Tank Water Heaters
              </h3>
              <p className="text-lg mb-6">
                Proper sizing ensures you have enough hot water for your household without paying for excess capacity. Tank water heaters are sized by storage capacity (gallons) and first-hour rating (FHR)—how much hot water the unit can supply in one hour starting with a full tank. For Tucson households: 1-2 people need 30-40 gallons (40-50 FHR), 2-3 people need 40-50 gallons (50-70 FHR), 3-4 people need 50-60 gallons (70-90 FHR), and 5+ people need 60-80 gallons (90+ FHR).
              </p>
              <p className="text-lg mb-6">
                However, household size is just one factor. Hot water usage patterns matter more. A couple that takes long showers, runs dishwashers daily, and does frequent laundry needs more capacity than a family of four with quick showers and efficient appliances. Peak demand periods—when multiple hot water uses happen simultaneously—determine sizing requirements. If you regularly run the dishwasher while someone showers or need to serve multiple bathrooms at once, upsize your water heater or consider tankless.
              </p>
              <p className="text-lg mb-6">
                We calculate your exact needs during free consultations. By reviewing your usage patterns, household size, number of bathrooms, appliances, and lifestyle, we recommend the properly sized system that meets your needs without wasting energy heating excess water. Undersized water heaters run constantly, wear out faster, and leave you with cold showers. Oversized units waste energy and money. Proper sizing hits the sweet spot of reliable hot water at optimal cost.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Sizing Tankless Water Heaters
              </h3>
              <p className="text-lg mb-6">
                Tankless water heaters are sized by flow rate (gallons per minute, or GPM) and temperature rise. Flow rate is the total hot water demand when all fixtures run simultaneously during peak usage. Temperature rise is the difference between incoming cold water temperature and desired hot water temperature. Tucson's groundwater averages 65-70°F year-round, and most households want 120°F hot water, requiring a 50-55°F temperature rise.
              </p>
              <p className="text-lg mb-8">
                To size a tankless heater, calculate peak flow: shower (2.5 GPM) + second shower (2.5 GPM) + dishwasher (1.5 GPM) = 6.5 GPM total demand. You'd need a unit rated for at least 6.5 GPM at a 50°F temperature rise. Larger homes with 3+ bathrooms and high simultaneous demand may need 9-11 GPM units or multiple tankless heaters. Smaller homes with 1-2 bathrooms and modest demand can use 5-7 GPM units. Gas tankless heaters are more powerful than electric and better suited for whole-house applications, while electric tankless works well for single-bathroom additions or point-of-use applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Free Sizing Consultation: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Efficiency & Cost Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Efficiency & Operating Costs
              </h2>
              <p className="text-lg mb-6">
                Water heating typically costs Tucson households $400-$600 annually, making efficiency a key consideration. Energy Factor (EF) or Uniform Energy Factor (UEF) ratings measure water heater efficiency—higher numbers mean better efficiency and lower operating costs. Standard gas tank water heaters rate 0.58-0.62 UEF, electric tanks rate 0.90-0.95 UEF, gas tankless rate 0.82-0.94 UEF, electric tankless rate 0.96-0.99 UEF, and hybrid heat pump units rate 2.0-3.5 UEF.
              </p>
              <p className="text-lg mb-6">
                However, efficiency ratings don't tell the whole story in Tucson. Natural gas costs about $1.20 per therm while electricity costs $0.12-$0.13 per kWh. This makes gas water heaters more economical despite lower efficiency ratings. A 0.60 UEF gas water heater costs about $230 annually to operate for a typical family, while a 0.95 UEF electric tank costs $480 annually. High-efficiency gas tankless (0.92 UEF) costs about $175 annually, and hybrid electric (2.5 UEF) costs about $180 annually.
              </p>
              <p className="text-lg mb-6">
                When comparing costs, consider both upfront investment and lifetime operating expenses. A standard gas tank ($1,500 installed) operating for 10 years costs $3,800 total (installation plus $230/year × 10). A gas tankless ($3,500 installed) operating for 20 years costs $7,000 total (installation plus $175/year × 20), or $3,500 over the same 10-year period. The tankless actually costs less over time and continues saving for another decade. Hybrid electric units offer similar lifetime economics with the added benefit of reducing electrical demand on the grid.
              </p>
              <p className="text-lg mb-8">
                Tucson Electric Power and Southwest Gas offer rebates for high-efficiency water heaters. Gas tankless models with 0.90+ UEF may qualify for $200-$400 rebates. Hybrid heat pump water heaters qualify for federal tax credits up to $300 plus utility rebates of $200-$500. These incentives significantly reduce upfront costs, improving the value proposition of high-efficiency systems. We help you navigate available rebates and file necessary paperwork to maximize your savings.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Get Efficiency Analysis"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Installation & Maintenance Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Installation & Maintenance
              </h2>
              <p className="text-lg mb-6">
                Proper installation is critical for water heater safety, efficiency, and longevity. All water heater installations in Tucson require permits and inspections to ensure code compliance. Our licensed master plumbers handle all aspects: removing and disposing of old units, installing new equipment to current code standards, obtaining permits, coordinating inspections, testing for proper operation, and explaining maintenance requirements.
              </p>
              <p className="text-lg mb-6">
                Installation complexity varies by heater type and location. Simple tank-for-tank replacements in accessible locations (same fuel type, adequate venting, proper electrical) can be completed in 3-4 hours. Complex installations—switching fuel types, upgrading from tank to tankless, adding new venting systems, upgrading electrical panels, or relocating units—may require 6-8 hours plus material costs for infrastructure improvements. We provide detailed quotes covering all work so you understand exactly what's included.
              </p>
              <p className="text-lg mb-6">
                Regular maintenance extends water heater life and maintains efficiency. Tank water heaters benefit from annual flushing to remove sediment buildup, anode rod inspection every 3-4 years (replacement when 50% depleted), temperature-pressure relief valve testing, and burner/heating element inspection. Tankless water heaters need annual descaling (especially important in Tucson's hard water), inlet screen filter cleaning, and burner maintenance. Hybrid units require air filter cleaning every 3 months and heat exchanger inspection annually.
              </p>
              <p className="text-lg mb-8">
                We offer annual maintenance plans that keep your water heater operating at peak efficiency, catch small problems before they become expensive failures, and extend equipment lifespan significantly. Plan members receive priority service, discounted repairs, and the peace of mind that comes with professional oversight. For most water heaters, the annual maintenance cost is far less than one emergency repair or the cost of premature replacement.
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
                Why Choose Intelligent Design for Water Heaters?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has served Tucson families since 1979. We're a family and veteran-owned business with over 45 years of experience providing honest, professional plumbing services. Our licensed master plumbers have installed thousands of water heaters throughout Tucson and understand the unique challenges of Southern Arizona's hard water, warm climate, and local building codes.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on quality workmanship, transparent pricing, and exceptional customer service. When you choose Intelligent Design for your water heater needs, you're getting: free consultation and sizing analysis, expert recommendations based on your specific needs (not highest profit margin), professional installation by licensed plumbers, all permits and inspections handled, comprehensive warranties on equipment and labor, ongoing maintenance and repair service, and a team that stands behind every installation.
              </p>
              <p className="text-lg mb-8">
                We carry all major brands—Rheem, Bradford White, AO Smith, Rinnai, Navien, and more—allowing us to recommend the best equipment for your situation rather than being limited to a single manufacturer. Our purchasing power with suppliers means competitive pricing, and our experience with every water heater type ensures we install and service your system correctly the first time. We provide honest assessments for repair vs. replacement decisions, helping you make the most economical choice for your situation.
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
        <ServiceFAQ faqs={waterHeatersFAQs.faqs} />

        {/* Business Information Section (NAP) */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Water Heater Service Today
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