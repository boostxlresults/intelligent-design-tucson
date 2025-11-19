import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import HomeEnergyUpgradesSchema from '@/components/HomeEnergyUpgradesSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { CommonQuestions } from '@/components/CommonQuestions';
import { homeEnergyUpgradesFAQs } from '@/data/faqs/hvac';
import { energyAuditCommonQuestions } from '@/data/commonQuestions/hvac';
import energyUpgradeHero from '@assets/generated_images/Home_energy_efficiency_upgrades_ab55f600.webp';
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";

export default function HomeEnergyUpgrades() {
  const description = 'Professional home energy upgrades in Tucson. Energy audits, LED lighting, smart thermostats, insulation improvements, solar integration. Save money and reduce energy bills. Call (520) 333-2665 for free energy consultation.';
  const imageUrl = `${SITE_URL}${energyUpgradeHero}`;

  return (
    <>
      <GTM />
      <DNIInjector />
      <HomeEnergyUpgradesSchema />
      
      <MetaHead
        title="Home Energy Upgrades Tucson AZ | Energy Efficiency Improvements & Savings"
        description={description}
        canonical="https://www.idesignac.com/home-energy-upgrades-tucson"
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Home Energy Upgrades Tucson AZ | Energy Efficiency Improvements & Savings' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: 'https://www.idesignac.com/home-energy-upgrades-tucson' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional home energy efficiency upgrades in Tucson home' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Home Energy Upgrades Tucson AZ | Energy Efficiency Improvements & Savings' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional home energy efficiency upgrades in Tucson home' }
        ]}
      />
      
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${energyUpgradeHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Home Energy Upgrades Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Energy Audits | LED Lighting Upgrades | Smart Thermostats | Solar Integration | Insulation Improvements | Lower Energy Bills
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Energy Assessment"
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
              Why Choose Intelligent Design for Energy Upgrades?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Energy Audits</p>
                  <p className="text-sm text-gray-600">Professional assessments | Thermal imaging | Usage analysis | Customized recommendations</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Upgrade Solutions</p>
                  <p className="text-sm text-gray-600">LED lighting conversions | HVAC optimization | Smart home integration | Solar panel systems</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Significant Cost Savings</p>
                  <p className="text-sm text-gray-600">Lower monthly bills | Rebate assistance | ROI calculations | Long-term value</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Tucson Climate Expertise</p>
                  <p className="text-sm text-gray-600">Desert-specific solutions | Monsoon preparation | Extreme heat management | 45+ years local experience</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Licensed & Certified Professionals</p>
                  <p className="text-sm text-gray-600">ROC licensed electricians | Energy efficiency certified | Quality installations | Code compliant</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Trusted Tucson Company</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | BBB A+ rated | Serving Tucson since 1979</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Professional Home Energy Upgrades in Tucson
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Rising energy costs and Tucson's extreme desert climate make home energy efficiency more important than ever. At Intelligent Design, we specialize in comprehensive home energy upgrades that significantly reduce your monthly utility bills while improving comfort, indoor air quality, and environmental sustainability. With over 45 years of experience serving Tucson homes, we understand exactly which energy efficiency improvements deliver the best return on investment in our unique climate.
              </p>
              <p>
                Our approach to home energy upgrades begins with a professional energy assessment that identifies exactly where your home is wasting energy and money. Using thermal imaging cameras, electrical usage analysis, HVAC system evaluation, and building envelope inspection, we create a detailed picture of your home's energy performance. Then we recommend a prioritized list of upgrades tailored to your specific home, budget, and energy goals—from simple LED lighting conversions to comprehensive whole-home efficiency transformations.
              </p>
              <p>
                What makes Intelligent Design unique is our ability to handle every aspect of your energy upgrade under one roof. As a full-service company specializing in electrical, HVAC, solar, and plumbing, we can implement comprehensive energy solutions that independent contractors can't coordinate effectively. Whether you're interested in LED lighting, smart thermostats, high-efficiency HVAC equipment, solar panels, or complete home automation systems, our licensed technicians have the expertise to deliver professional installations that maximize your energy savings and comfort.
              </p>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Home Energy Upgrade Services:
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Comprehensive energy audits and assessments</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">LED lighting conversion and smart controls</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Smart thermostat installation and programming</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">High-efficiency HVAC system upgrades</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Solar panel installation and integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Whole-house energy monitoring systems</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Tankless water heater installations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Ceiling fan installation for natural cooling</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Attic ventilation and insulation coordination</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Electrical panel upgrades for new systems</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <SchedulerEmbed
                triggerText="Get Free Energy Assessment"
                variant="default"
                size="lg"
                data-testid="button-schedule-services"
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Top Energy Efficiency Upgrades for Tucson Homes
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Not all energy upgrades deliver equal value, especially in Tucson's desert climate. Based on our decades of experience, these upgrades provide the fastest return on investment for most Tucson homeowners:
              </p>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">1. High-Efficiency HVAC Systems</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it matters:</strong> In Tucson's extreme heat, air conditioning represents 40-60% of summer energy bills.
                </p>
                <p className="text-sm text-gray-600">
                  Upgrading to a high-efficiency (16+ SEER) air conditioning system can reduce cooling costs by 30-50%. Modern systems also provide better humidity control and more consistent temperatures. Paired with proper duct sealing and attic insulation, the savings compound even further. Most Tucson homeowners see payback within 5-8 years through reduced energy bills.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">2. LED Lighting Conversion</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it matters:</strong> Lighting accounts for 10-15% of home energy use, and old bulbs generate significant heat.
                </p>
                <p className="text-sm text-gray-600">
                  Converting to LED lighting reduces lighting energy consumption by 75% while dramatically reducing the heat load your AC must remove. LED bulbs last 25 times longer than incandescent bulbs, virtually eliminating replacement costs. A whole-home LED conversion typically pays for itself in 18-24 months. Adding smart lighting controls extends savings further by ensuring lights are only on when needed.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">3. Smart Thermostat Installation</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it matters:</strong> Intelligent temperature control prevents energy waste without sacrificing comfort.
                </p>
                <p className="text-sm text-gray-600">
                  Smart thermostats learn your schedule and automatically adjust temperatures when you're away or sleeping. Features like geofencing, remote control, energy reports, and integration with time-of-use rates can reduce HVAC energy consumption by 10-23%. Installation costs $300-500 but typically generates $180-300 in annual savings, providing payback in under 2 years. Many utility companies offer rebates that reduce upfront costs.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">4. Solar Panel Systems</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it matters:</strong> Tucson's abundant sunshine makes solar one of the best investments available.
                </p>
                <p className="text-sm text-gray-600">
                  With 300+ days of sunshine annually, Tucson is ideal for solar energy. A properly sized residential solar system can eliminate 70-100% of your electricity bills, providing $1,200-2,400 in annual savings. Combined with federal tax credits (30%), state incentives, and net metering, most systems pay for themselves in 6-9 years while protecting against future rate increases. Solar panels also increase home values by $15,000-30,000 on average.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">5. Tankless Water Heaters</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it matters:</strong> Water heating is the second-largest energy expense in most homes.
                </p>
                <p className="text-sm text-gray-600">
                  Tankless water heaters eliminate standby energy losses (constantly heating 40-50 gallons of stored water) and provide endless hot water. Energy savings typically range from 24-34% compared to tank-style heaters. Additional benefits include space savings, longer equipment life (20+ years vs. 10-12 for tanks), and reduced risk of water damage from tank failures. Payback periods average 8-12 years.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">6. Attic Radiant Barriers & Ventilation</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it matters:</strong> Tucson attics can reach 150°F+ in summer, radiating massive heat into living spaces.
                </p>
                <p className="text-sm text-gray-600">
                  Radiant barriers reflect up to 97% of radiant heat, keeping attic temperatures 20-30°F cooler. Combined with proper attic ventilation, this reduces AC runtime and extends equipment life. Attic improvements often provide the best "bang for the buck" in hot climates, with costs of $1,500-3,000 typically returning 10-15% annual savings on cooling costs. The cooler attic also protects stored items and roof shingles.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                variant="default"
                asChild
              >
                <a href="tel:+15203332665" data-testid="button-call-upgrades">
                  <Phone className="w-5 h-5 mr-2" />
                  Discuss Your Upgrade Options: (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Energy Upgrade Process
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                When you partner with Intelligent Design for home energy upgrades, we follow a systematic approach that ensures maximum savings and satisfaction:
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 1: Comprehensive Energy Assessment</h3>
                <p className="text-gray-700">
                  We begin with a thorough energy audit of your home. Our certified technicians use thermal imaging to identify heat loss/gain areas, analyze your utility bills to understand usage patterns, inspect your HVAC system efficiency and ductwork, evaluate your lighting and appliance energy consumption, and assess your electrical panel capacity for potential upgrades. This creates a complete baseline of your current energy performance.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 2: Customized Recommendations & Savings Projections</h3>
                <p className="text-gray-700">
                  Based on the assessment, we present a prioritized list of recommended upgrades ranked by return on investment. For each recommendation, we provide upfront costs including installation, projected annual energy savings in dollars, expected payback period, available rebates and tax incentives, and long-term benefits beyond energy savings. You choose which improvements align with your budget and goals.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 3: Detailed Planning & Scheduling</h3>
                <p className="text-gray-700">
                  Once you approve the upgrades, we create a detailed implementation plan including equipment selection and specifications, installation timeline and coordination, any necessary permits or approvals, rebate application assistance, and financing options if desired. We schedule all work at your convenience, coordinating multiple trades if needed for comprehensive upgrades.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 4: Professional Installation</h3>
                <p className="text-gray-700">
                  Our licensed, experienced technicians complete all installations to the highest standards. We use quality equipment from trusted manufacturers, follow all building codes and manufacturers' specifications, protect your home during work with drop cloths and shoe covers, coordinate multiple improvements efficiently to minimize disruption, and clean up thoroughly when finished. Most upgrades are completed in 1-3 days depending on scope.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 5: Testing, Training & Documentation</h3>
                <p className="text-gray-700">
                  After installation, we thoroughly test all new systems to ensure optimal performance, train you on operating any new equipment or controls, provide all warranty documentation and user manuals, submit rebate applications on your behalf, and set up any recommended maintenance schedules. We want you to understand and get maximum value from your energy upgrades.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Step 6: Follow-Up & Ongoing Support</h3>
                <p className="text-gray-700">
                  We follow up after 30 days to ensure you're satisfied and answer any questions. We can also help you track your energy savings by comparing utility bills, optimize system settings based on your usage patterns, schedule ongoing maintenance to protect your investment, and plan future upgrades as budget allows. We're your long-term partner in home energy efficiency.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <SchedulerEmbed
                triggerText="Start Your Energy Upgrade Journey"
                variant="default"
                size="lg"
                data-testid="button-schedule-process"
              />
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={energyAuditCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={homeEnergyUpgradesFAQs.faqs} />

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 border border-blue-200">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Start Saving on Energy Costs?
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Contact Intelligent Design today for a free home energy assessment. We'll identify exactly where you're wasting energy and recommend the upgrades that will deliver the best return on investment for your Tucson home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Free Energy Assessment"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-cta"
                  />
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2"
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

        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Serving Tucson & Surrounding Areas</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Tucson</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Oro Valley</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Marana</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Green Valley</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Sahuarita</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Vail</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Catalina Foothills</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Flowing Wells</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-start gap-2">
                    <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-yellow-400" />
                    <span>
                      <strong className="text-white">Phone:</strong><br />
                      <a href="tel:+15203332665" className="hover:text-yellow-400 transition-colors">(520) 333-2665</a>
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-yellow-400" />
                    <span>
                      <strong className="text-white">Address:</strong><br />
                      1145 E Fort Lowell Rd<br />
                      Tucson, AZ 85719
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-yellow-400" />
                    <span>
                      <strong className="text-white">Hours:</strong><br />
                      24/7 Emergency Service Available<br />
                      Monday-Friday: 7:00 AM - 6:00 PM<br />
                      Saturday-Sunday: 8:00 AM - 4:00 PM
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-yellow-400" />
                    <span>
                      <strong className="text-white">License:</strong><br />
                      ROC Licensed & Insured
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Intelligent Design Air Conditioning, Plumbing, Solar, & Electric. All rights reserved. | Family & Veteran Owned | Serving Tucson Since 1979
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}