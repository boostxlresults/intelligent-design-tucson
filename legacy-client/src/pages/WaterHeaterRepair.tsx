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
import { waterHeaterRepairFAQs } from '@/data/faqs/plumbing';
import waterHeaterRepairHero from '@assets/generated_images/Water_heater_repair_service_399fceb7.webp';
import WaterHeaterRepairSchema from '@/components/WaterHeaterRepairSchema';
import { CommonQuestions } from "@/components/CommonQuestions";
import { waterHeaterCommonQuestions } from "@/data/commonQuestions/plumbing";

export default function WaterHeaterRepair() {
  const description = 'Expert water heater repair in Tucson. Tank, tankless & hybrid repairs. Same-day emergency service. No hot water? Strange noises? Leaking? Call (520) 333-2665 for fast, professional repairs.';
  const imageUrl = `${SITE_URL}${waterHeaterRepairHero}`;

  return (
    <>
      <MetaHead
        title="Water Heater Repair Tucson AZ | Same-Day Emergency Service Available"
        description={description}
        canonical={`${SITE_URL}/water-heater-repair-tucson`}
        openGraph={[
          { property: 'og:title', content: 'Water Heater Repair Tucson AZ | Same-Day Emergency Service' },
          { property: 'og:description', content: 'Expert water heater repair in Tucson. Tank, tankless & hybrid repairs. Same-day emergency service. Over 22,000 5-star reviews.' },
          { property: 'og:url', content: `${SITE_URL}/water-heater-repair-tucson` },
          { property: 'og:type', content: 'website' },
          { property: 'og:image', content: imageUrl },
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Water Heater Repair Tucson AZ | Same-Day Emergency Service' },
          { name: 'twitter:description', content: 'Expert water heater repair in Tucson. Tank, tankless & hybrid repairs. Same-day emergency service. Over 22,000 5-star reviews.' },
          { name: 'twitter:image', content: imageUrl },
        ]}
      />
      <GTM />
      <DNIInjector />
      <WaterHeaterRepairSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${waterHeaterRepairHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Water Heater Repair in Tucson, AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Same-Day Emergency Repairs | Tank, Tankless & Hybrid | No Hot Water? Leaking? Strange Noises? | Expert Diagnostics | 45+ Years Experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Repair Service"
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
              Why Choose Intelligent Design for Water Heater Repair?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Same-Day Emergency Service</p>
                  <p className="text-sm text-gray-600">24/7 availability | Fast response times | Most repairs completed same day | Priority emergency scheduling</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Expert Diagnostics</p>
                  <p className="text-sm text-gray-600">Licensed master plumbers | Advanced diagnostic equipment | Accurate problem identification | All brands serviced</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Honest Repair vs Replace Guidance</p>
                  <p className="text-sm text-gray-600">No pressure sales | Transparent pricing | Cost-benefit analysis | Economical recommendations</p>
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
                  <p className="font-semibold text-gray-900 mb-1">Fully Stocked Service Trucks</p>
                  <p className="text-sm text-gray-600">Common parts on board | Faster repairs | Less waiting | Quality OEM parts</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Warranties</p>
                  <p className="text-sm text-gray-600">Parts warranties | Labor guarantees | Service protection | Peace of mind coverage</p>
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
                Expert Water Heater Repair Services in Tucson
              </h2>
              <p className="text-lg mb-6">
                When your water heater stops working, every minute without hot water feels like an eternity. Whether you're facing cold showers, strange noises, leaking tanks, or insufficient hot water, Intelligent Design Air Conditioning, Plumbing, Solar, & Electric provides fast, professional water heater repair services throughout Tucson. Our licensed master plumbers have repaired thousands of water heaters since 1979 and have the expertise to diagnose and fix any water heater problem quickly and correctly.
              </p>
              <p className="text-lg mb-6">
                We repair all types and brands of water heaters—tank (gas and electric), tankless (gas and electric), and hybrid/heat pump models. Our service trucks carry common repair parts including heating elements, thermostats, pressure relief valves, anode rods, gas valves, control boards, and more. This means we can often complete repairs the same day without waiting for parts to be ordered. For emergency situations like no hot water or leaking tanks, we prioritize service to restore your comfort as quickly as possible.
              </p>
              <p className="text-lg mb-8">
                Tucson's hard water creates unique challenges for water heaters. Mineral buildup accelerates wear on components and reduces efficiency. Our technicians understand these local factors and provide repairs that account for Tucson's water conditions. We also provide honest assessments about repair versus replacement options, helping you make the most economical decision for your situation. With over 22,000 five-star reviews and 45+ years of Tucson experience, you can trust us to deliver reliable, professional water heater repair service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Repair"
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
                    Emergency Repair: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Common Problems Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Common Water Heater Problems We Repair
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No Hot Water
              </h3>
              <p className="text-lg mb-6">
                Complete loss of hot water is one of the most urgent water heater problems. For electric water heaters, the most common causes are failed heating elements, tripped circuit breakers, or faulty thermostats. Electric water heaters typically have two heating elements—upper and lower—and if both fail, you'll have no hot water at all. If only the upper element fails, you may have a small amount of hot water but not enough for a shower. Thermostat failures prevent the heating elements from activating, and power supply issues like tripped breakers or blown fuses cut power completely.
              </p>
              <p className="text-lg mb-6">
                For gas water heaters, no hot water usually indicates pilot light issues, gas valve problems, or burner failures. The pilot light may have gone out due to drafts, debris, or a faulty thermocouple. If the thermocouple fails, it won't signal the gas valve to open, preventing gas flow to the burner. Gas supply issues—closed valves, empty propane tanks, or utility interruptions—also cause complete loss of hot water. Our technicians quickly diagnose the exact cause and restore your hot water, often within hours of your service call.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Insufficient Hot Water
              </h3>
              <p className="text-lg mb-6">
                Running out of hot water faster than normal indicates capacity or efficiency problems. Sediment buildup at the bottom of tank water heaters is the most common culprit in Tucson. Our hard water contains high concentrations of calcium and magnesium that settle as sediment. This sediment layer insulates the water from the heat source, requiring more energy to heat less water. It also reduces the effective tank capacity—a 50-gallon tank with significant sediment buildup may only hold 35-40 gallons of usable hot water.
              </p>
              <p className="text-lg mb-6">
                Other causes of insufficient hot water include failed heating elements (in electric heaters), undersized water heaters for household demand, faulty dip tubes that allow cold and hot water to mix, and thermostat settings that are too low. In tankless water heaters, insufficient hot water can result from inadequate unit sizing for simultaneous demands, flow restrictor issues, or heat exchanger scaling from hard water. We diagnose the specific cause and recommend the most cost-effective repair—whether that's flushing sediment, replacing components, or upgrading to a properly sized unit.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Leaking Water Heaters
              </h3>
              <p className="text-lg mb-8">
                Water heater leaks range from minor nuisances to serious emergencies. Small leaks at connection points—inlet and outlet pipes, drain valves, or temperature-pressure relief valves—can often be repaired by tightening connections or replacing valve components. However, leaks from the tank itself indicate tank failure and require complete water heater replacement. Once a tank develops a leak, it cannot be repaired because the leak results from internal corrosion that has breached the steel tank and protective glass lining.
              </p>
              <p className="text-lg mb-8">
                If you notice water pooling around your water heater, call us immediately. We'll determine whether the leak is repairable or requires replacement. For repairable leaks, we fix the issue quickly and prevent water damage. For tank leaks, we turn off the water and power/gas supply to prevent flooding, then provide replacement options. Acting quickly on water heater leaks prevents costly water damage to floors, walls, and belongings. Our emergency service prioritizes leak calls to minimize damage and disruption.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Get Emergency Repair"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Repair vs Replace Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Repair or Replace? Making the Right Decision
              </h2>
              <p className="text-lg mb-6">
                One of the most common questions we hear is: "Should I repair my water heater or replace it?" This decision depends on several factors including the age of your water heater, the cost of repair, the frequency of problems, and your long-term needs. We provide honest, transparent guidance to help you make the most economical choice for your situation.
              </p>
              <p className="text-lg mb-6">
                As a general rule, repair makes sense when: the unit is less than 6-7 years old (for tank heaters) or less than 12-15 years old (for tankless), the repair cost is under $500, this is the first major repair needed, and the problem is straightforward like a failed heating element or thermostat. These repairs restore full function at reasonable cost and provide several more years of reliable service. Young water heaters that need minor repairs are almost always worth fixing.
              </p>
              <p className="text-lg mb-6">
                Replacement makes more sense when: the unit is 8+ years old (tank) or 15+ years old (tankless), repair costs exceed $500, you've needed multiple repairs recently, you're experiencing frequent issues, efficiency has declined significantly (higher utility bills), the tank is leaking from the tank body (not connections), or you're consistently running out of hot water. At this point, continued repairs become uneconomical compared to a new, efficient water heater with full warranties.
              </p>
              <p className="text-lg mb-8">
                We also consider the "50% rule"—if the repair cost exceeds 50% of replacement cost and your water heater is past the halfway point of its expected lifespan, replacement usually provides better long-term value. For example, a $600 repair on an 8-year-old tank water heater (with 8-12 year typical lifespan) doesn't make sense when a new water heater costs $1,200-$2,000 and comes with 6-12 year warranties. We walk through this analysis with you, explain your options, and let you make the decision without pressure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Honest Assessment: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Repair Process Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Water Heater Repair Process
              </h2>
              <p className="text-lg mb-6">
                When you call Intelligent Design for water heater repair, we follow a systematic process designed to diagnose and fix your problem quickly while keeping you informed every step of the way. We understand that water heater failures are stressful, and we work efficiently to restore your hot water with minimal disruption to your daily routine.
              </p>
              <p className="text-lg mb-6">
                Step 1: Emergency Response and Scheduling. When you contact us with a water heater problem, we gather information about your symptoms, water heater type, age, and any visible issues. For emergencies like no hot water, leaking tanks, or gas odors, we prioritize your service call and often provide same-day appointments. For non-emergency repairs, we schedule at your convenience and provide arrival windows to minimize your wait time.
              </p>
              <p className="text-lg mb-6">
                Step 2: Thorough Diagnosis. Our licensed technicians arrive in fully stocked service trucks with diagnostic equipment and common repair parts. We perform a comprehensive inspection of your water heater, testing all components, checking for leaks, measuring temperatures and pressures, inspecting safety devices, and identifying the root cause of your problem. We explain what we find in plain language and show you the failed components when possible.
              </p>
              <p className="text-lg mb-6">
                Step 3: Transparent Pricing and Options. Before performing any repair work, we provide upfront pricing for the recommended repairs. If multiple repair options exist, we explain each option's pros and cons. If replacement makes more sense than repair, we explain why and provide replacement quotes for comparison. You make the final decision about how to proceed, and we never pressure you or start work without your approval.
              </p>
              <p className="text-lg mb-6">
                Step 4: Professional Repair Work. Once you approve the repair, we get to work immediately. Our technicians have extensive experience with all water heater types and brands, ensuring proper repair procedures and quality workmanship. We use OEM (original equipment manufacturer) parts or high-quality equivalents that meet or exceed original specifications. Most repairs are completed in 1-3 hours, though complex issues may take longer.
              </p>
              <p className="text-lg mb-8">
                Step 5: Testing and Cleanup. After completing repairs, we thoroughly test the water heater to ensure proper operation, safe function, adequate temperature, proper pressure, and no leaks. We clean up our work area, properly dispose of any replaced parts, and explain what we did. We also provide maintenance recommendations to help prevent future problems and extend your water heater's lifespan. All repairs come with parts and labor warranties for your protection.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Repair Now"
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
                Why Choose Intelligent Design for Water Heater Repair?
              </h2>
              <p className="text-lg mb-6">
                When your water heater fails, you need a plumber you can trust to diagnose the problem accurately, provide honest recommendations, perform quality repairs, and stand behind their work. Intelligent Design has served Tucson families since 1979 with professional, reliable water heater repair services. We're a family and veteran-owned business that treats every customer like a neighbor, because in Tucson, you are our neighbor.
              </p>
              <p className="text-lg mb-6">
                Our licensed master plumbers have repaired every brand and type of water heater available in the Tucson market. This experience means we can quickly identify problems that might stump less experienced technicians. We invest in ongoing training, diagnostic equipment, and fully stocked service vehicles to provide efficient, high-quality repairs. Our technicians don't just fix the immediate problem—they inspect the entire water heater to catch potential issues before they cause failures.
              </p>
              <p className="text-lg mb-8">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on transparency, quality workmanship, and exceptional customer service. We provide upfront pricing with no hidden fees, offer financing options for larger repairs or replacements, warranty all repair work, respond quickly to emergencies, and maintain open communication throughout the service process. When you choose Intelligent Design for water heater repair, you're choosing a company that's been trusted by Tucson homeowners for over four decades.
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
        <ServiceFAQ faqs={waterHeaterRepairFAQs.faqs} />

        {/* Business Information Section (NAP) */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Water Heater Repair Today
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
                    triggerText="Schedule Repair Service"
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