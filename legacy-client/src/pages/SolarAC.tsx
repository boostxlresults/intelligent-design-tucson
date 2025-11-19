import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CommonQuestions } from "@/components/CommonQuestions";
import { solarACCommonQuestions } from "@/data/commonQuestions/solar";
import ServiceFAQ from '@/components/ServiceFAQ';
import { solarACIntegrationFAQs } from '@/data/faqs/solar';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingActions from "@/components/MobileFloatingActions";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import SchedulerEmbed from "@/components/SchedulerEmbed";
import TrustBar from "@/components/TrustBar";
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import solarACHero from "@assets/generated_images/Solar_panels_with_AC_unit_043e3f3d.webp";
import solarACService from "@assets/generated_images/Technician_with_solar_AC_system_a0ababa3.webp";
import SolarACSchema from '@/components/SolarACSchema';

export default function SolarAC() {
  const description = 'Save up to 100% on cooling costs with EG4 hybrid solar-powered AC in Tucson! Expert installation of 12k BTU solar mini-split systems. Runs on solar by day, grid by night. Call (520) 333-2665!';
  const imageUrl = `${SITE_URL}${solarACHero}`;

  return (
    <>
      <MetaHead
        title="EG4 Solar Powered Air Conditioner Tucson | Hybrid Mini Split AC Installation | Intelligent Design"
        description={description}
        canonical={`${SITE_URL}/solar-ac-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'EG4 Solar Powered Air Conditioner Tucson | Hybrid Mini Split AC Installation' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/solar-ac-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'EG4 solar-powered hybrid mini-split air conditioning system in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'EG4 Solar Powered Air Conditioner Tucson | Hybrid Mini Split AC Installation' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'EG4 solar-powered hybrid mini-split air conditioning system in Tucson' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <SolarACSchema />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="relative text-white py-16 md:py-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${solarACHero})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  EG4 Solar Powered AC in Tucson AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                  Over 22,000 5-Star Reviews
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  Revolutionary Hybrid Solar Mini-Split | Runs on Sun by Day, Grid by Night | Free Assessment
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule Free Assessment"
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
                Why Choose EG4 Hybrid Solar AC?
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Save 60-100% on Cooling Costs</p>
                    <p className="text-sm text-gray-600">Runs on free solar power during peak daytime hours, then automatically switches to grid at night</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Arizona's Only Dual-Licensed HVAC & Solar Contractor</p>
                    <p className="text-sm text-gray-600">45+ years expertise | 22,000+ five-star reviews | Seamless installation coordination</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Revolutionary DC Solar Technology</p>
                    <p className="text-sm text-gray-600">Direct solar operation eliminates conversion losses | 15-25% more efficient than traditional solar AC</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Fast Installation & ROI</p>
                    <p className="text-sm text-gray-600">2-4 week installation | 4-7 year payback typical | Free consultation and system design</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Massive Tax Incentives Available</p>
                    <p className="text-sm text-gray-600">30% federal + 25% state tax credits = 40-55% net cost reduction on complete system</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Smart WiFi Control & Monitoring</p>
                    <p className="text-sm text-gray-600">Track real-time solar production | Remote control | Energy savings dashboard | R32 eco-friendly refrigerant</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Experience the Future of Cooling with EG4 Hybrid Solar Air Conditioning
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
                <div>
                  <p className="text-lg mb-6">
                    Intelligent Design Air Conditioning, Plumbing, Solar, & Electric is proud to offer Tucson homeowners the revolutionary EG4 12k BTU Hybrid Solar Mini-Split - an advanced air conditioning system that runs directly on DC solar power during the day and automatically switches to grid power at night. As Arizona's only dual-licensed HVAC and solar contractor with over 45 years of experience, we're uniquely qualified to design, install, and service these cutting-edge hybrid cooling systems that can reduce your energy costs by up to 100% while providing year-round comfort.
                  </p>
                  <p className="text-lg mb-6">
                    The EG4 hybrid solar AC represents a quantum leap beyond traditional air conditioning technology. Unlike conventional systems that constantly draw expensive grid electricity, the EG4 harnesses Tucson's abundant sunshine to provide free cooling during peak daytime hours when you need it most. The intelligent hybrid controller seamlessly transitions between solar and grid power based on available sunlight, ensuring uninterrupted comfort 24/7 regardless of weather conditions. This true hybrid operation means the system can run on solar alone, grid alone, or blend both power sources for optimal efficiency.
                  </p>
                </div>
                
                <div className="relative">
                  <img
                    src={solarACService}
                    alt="Intelligent Design technician installing EG4 hybrid solar-powered mini-split air conditioning system in Tucson"
                    className="w-full h-auto rounded-lg shadow-xl"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="max-w-4xl mx-auto mb-8">
                <p className="text-lg mb-6">
                  With 12,000 BTU cooling and heating capacity, the EG4 mini-split effectively conditions spaces up to 650 square feet - perfect for master bedrooms, home offices, converted garages, casitas, workshops, or any area needing independent climate control. The system includes high-efficiency bifacial solar panels that capture sunlight from both surfaces, an ultra-quiet mini-split with WiFi smartphone control, and professional installation by our certified technicians. Whether you're tired of sky-high summer electric bills, need to cool a specific zone, or want energy independence, the EG4 solar AC delivers intelligent, eco-friendly cooling.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Get Free Solar Assessment"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section1"
                />
                <Button size="lg" className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold" asChild>
                  <a href="tel:+15203332665" data-testid="button-call-section1">Call For Free Quote</a>
                </Button>
              </div>
            </div>
          </section>

          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  How the EG4 Hybrid Solar AC System Works
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-lg mb-6">
                  The EG4 hybrid solar mini-split represents breakthrough air conditioning technology specifically designed for solar power integration. Traditional AC systems convert DC solar power to AC, then the air conditioner converts it back to DC internally - a wasteful double conversion that loses 15-25% of your solar energy. The EG4 eliminates this inefficiency by running directly on DC solar power from the panels, maximizing every watt of Tucson's abundant sunshine.
                </p>
                <p className="text-lg mb-6">
                  Here's how the intelligent hybrid system operates: During sunny daytime hours, the bifacial solar panels (either 7x 415-watt Sirius or 5x 445-watt Boviet panels included in the kit) generate DC electricity that flows directly to the mini-split's hybrid controller. The system runs entirely on free solar power, providing zero-cost cooling when you need it most - during Tucson's intense midday heat. The bifacial panel technology captures sunlight on both front and back surfaces, increasing energy production by 10-20% compared to traditional panels, particularly effective in our bright desert environment.
                </p>
                <p className="text-lg mb-6">
                  When the sun sets or clouds reduce solar output below the AC's power requirements, the hybrid controller automatically switches to grid power within milliseconds - so seamlessly you won't notice the transition. The system can also blend both power sources during partly cloudy conditions or high-demand situations, using available solar to offset grid consumption. This intelligent power management maximizes solar utilization while ensuring uninterrupted comfort regardless of weather conditions.
                </p>
                <p className="text-lg mb-6">
                  The mini-split component features ultra-efficient R32 refrigerant that meets all new EPA environmental standards while providing superior cooling performance. The outdoor condenser unit operates reliably in extreme temperatures - still cooling when outdoor temps reach 0°F and heating down to -15°F, perfect for Tucson's occasional cold snaps. The indoor wall-mounted air handler delivers whisper-quiet operation (as low as 19 decibels) with multiple fan speeds, intelligent temperature control, and precise comfort management.
                </p>
                <p className="text-lg mb-6">
                  WiFi connectivity and smartphone app control allow you to monitor real-time solar production, track energy savings, adjust temperature settings remotely, set schedules and timers, and receive maintenance alerts. You can see exactly how much solar power you're using versus grid power, helping optimize your cooling schedule for maximum free solar operation. The system also includes a traditional infrared remote for conventional wireless control.
                </p>
                <p className="text-lg mb-8">
                  Unlike off-grid battery systems requiring expensive battery banks, the EG4 hybrid uses the utility grid as unlimited backup power - dramatically reducing system cost while maintaining perfect reliability. Optional battery integration is available for those wanting emergency backup during power outages or complete energy independence. The result is a sophisticated cooling system that harnesses Tucson's greatest resource - sunshine - to provide comfortable, affordable, eco-friendly climate control for decades.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Consultation"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-section2"
                  />
                  <Button size="lg" className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold" asChild>
                    <a href="tel:+15203332665" data-testid="button-call-section2">
                      <Phone className="w-5 h-5 mr-2" />
                      (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Why Tucson Homeowners Choose EG4 Solar Air Conditioning
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-3">Dramatic Energy Savings</h3>
                  <p className="text-gray-700">
                    Save 60-100% on cooling costs for conditioned spaces by running on free solar power during peak daytime hours. Most Tucson installations achieve full payback within 4-7 years, then enjoy decades of essentially free cooling.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-3">True Hybrid Technology</h3>
                  <p className="text-gray-700">
                    Unlike basic solar systems, the EG4 runs directly on DC solar power, automatically switches to grid when needed, or blends both sources for optimal efficiency - ensuring 24/7 reliable cooling.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-3">Superior Efficiency</h3>
                  <p className="text-gray-700">
                    High-SEER mini-split technology uses 30-50% less energy than central AC, while bifacial solar panels capture 10-20% more energy than traditional panels - maximum output from every component.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-3">Smart Control</h3>
                  <p className="text-gray-700">
                    WiFi connectivity and smartphone app provide real-time solar production monitoring, energy savings tracking, remote temperature control, and system optimization from anywhere.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-3">Extreme Climate Performance</h3>
                  <p className="text-gray-700">
                    Operates reliably in Tucson's harsh conditions - cooling down to 0°F outdoor temps and heating down to -15°F. Handles our intense summer heat and occasional winter freezes without issue.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-3">Eco-Friendly R32 Refrigerant</h3>
                  <p className="text-gray-700">
                    Uses environmentally-responsible R32 refrigerant that meets all EPA standards with zero ozone depletion potential and significantly lower global warming impact than older refrigerants.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-3">Perfect for Zone Cooling</h3>
                  <p className="text-gray-700">
                    Ideal for cooling specific areas like master bedrooms, home offices, garages, casitas, or additions up to 650 sq ft without expensive ductwork or central AC upgrades.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-3">Whisper-Quiet Operation</h3>
                  <p className="text-gray-700">
                    Indoor unit operates as quietly as 19 decibels - quieter than a whisper - ensuring peaceful sleep and undisturbed work. No noisy window units or loud central AC systems.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-3">Generous Tax Incentives</h3>
                  <p className="text-gray-700">
                    Federal 30% solar tax credit plus Arizona's 25% state credit (up to $1,000) reduce net system cost by 40-55%, dramatically accelerating your return on investment.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Book Free Assessment"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-section3"
                  />
                  <Button size="lg" className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold" asChild>
                    <a href="tel:+15203332665" data-testid="button-call-section3">Get Pricing Today</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Complete EG4 Solar AC Installation Services
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-lg mb-6">
                  As Tucson's only contractor with both HVAC and solar licensing, Intelligent Design provides seamless, professional EG4 hybrid solar AC installation from initial consultation through decades of ongoing service. Our comprehensive approach ensures optimal system performance, maximum energy savings, and hassle-free operation for the life of your equipment.
                </p>

                <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Installation Process</h3>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-bold mb-2">Free Consultation & Site Assessment</h4>
                        <p className="text-gray-700">Our certified technicians visit your property to evaluate roof orientation and shading, measure the space requiring cooling, assess electrical panel capacity, discuss your energy goals and budget, and determine optimal system sizing and placement.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-bold mb-2">Custom System Design</h4>
                        <p className="text-gray-700">We create detailed plans including solar panel layout optimized for maximum production, mini-split placement for optimal airflow and efficiency, electrical routing and connection specifications, and complete cost analysis showing equipment, installation, incentives, and projected ROI.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-bold mb-2">Permitting & Approvals</h4>
                        <p className="text-gray-700">We handle all building permits, electrical permits, utility interconnection applications, HOA approvals (if applicable), and inspection scheduling - completely hassle-free for you.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold">4</div>
                      <div>
                        <h4 className="font-bold mb-2">Professional Installation</h4>
                        <p className="text-gray-700">Our experienced crews install solar panel mounting systems and panels, indoor wall-mounted air handler unit, outdoor condenser unit, refrigerant lines and electrical connections, hybrid power controller and safety disconnects - typically completed in 1-2 days with minimal disruption.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold">5</div>
                      <div>
                        <h4 className="font-bold mb-2">System Commissioning</h4>
                        <p className="text-gray-700">We verify all electrical connections and safety systems, test solar production and power switching, commission refrigerant system and verify charge, program WiFi connectivity and app access, and provide complete operation training.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold">6</div>
                      <div>
                        <h4 className="font-bold mb-2">Inspection & Activation</h4>
                        <p className="text-gray-700">Final building department and electrical inspections, utility interconnection approval and meter configuration (if applicable), system activation and performance verification, and warranty registration and documentation.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg mb-6">
                  Our dual-licensed expertise means we coordinate both the solar and HVAC aspects seamlessly rather than managing separate contractors. This integrated approach saves time, eliminates communication issues, provides single-source accountability, and ensures optimal system integration for maximum performance and efficiency. Every installation includes comprehensive workmanship warranties, equipment manufacturer warranties, ongoing technical support, and optional maintenance plans covering both solar and AC components.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Installation Quote"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-section4"
                  />
                  <Button size="lg" className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold" asChild>
                    <a href="tel:+15203332665" data-testid="button-call-section4">
                      <Phone className="w-5 h-5 mr-2" />
                      (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  EG4 Solar AC: Perfect for Tucson's Unique Climate Challenges
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-lg mb-6">
                  Tucson presents unique challenges and opportunities for air conditioning - and the EG4 hybrid solar system is specifically designed to excel in our desert environment. Our location receives 350+ days of sunshine annually with some of the highest solar insolation rates in North America, making solar AC particularly effective. The intense summer heat (110°F+ days) creates massive cooling demands that account for 50-70% of summer electric bills, providing excellent opportunity for solar offset.
                </p>
                <p className="text-lg mb-6">
                  The EG4 system's direct DC solar operation means peak solar production hours (10am-4pm) perfectly align with peak cooling demand - when your AC works hardest, the sun shines strongest, providing free energy exactly when needed most. The bifacial solar panels excel in Tucson's bright, reflective environment, capturing additional energy from ground reflection off our light-colored soils and surfaces.
                </p>
                <p className="text-lg mb-6">
                  Tucson's monsoon season brings dramatic dust storms and occasional power outages during severe weather. The EG4 system's robust construction handles desert dust and debris, while optional battery backup ensures cooling continues during grid failures - critical when summer storms knock out power during 100°F+ temperatures. The ultra-efficient mini-split technology dramatically reduces cooling loads compared to leaky ductwork in hot attics, common in Tucson homes, where duct losses can waste 25-40% of cooling capacity.
                </p>
                <p className="text-lg mb-6">
                  Many Tucson homes have specific hot spots - west-facing rooms, converted garages, upstairs bedrooms - that central AC struggles to cool adequately. The EG4 mini-split provides targeted cooling for these problem areas without requiring expensive ductwork modifications or oversized central AC systems. Similarly, casitas, workshops, home offices, and additions benefit from independent climate control without the expense of extending central systems.
                </p>
                <p className="text-lg mb-6">
                  Arizona's generous solar incentives (30% federal + 25% state tax credits) combined with Tucson's high electricity rates and intense cooling demands create some of the nation's fastest solar payback periods - typically 4-7 years for EG4 systems. After payback, you enjoy decades of essentially free cooling while protecting yourself from future utility rate increases. TEP rates have historically increased 3-5% annually, meaning your solar savings grow every year.
                </p>
                <p className="text-lg mb-8">
                  The EG4 system also provides valuable heating capability for Tucson's occasional cold snaps (we do get freezing temperatures December through February). The heat pump technology efficiently warms spaces down to -15°F outdoor temperatures, providing year-round climate control from a single solar-powered system. This dual-purpose capability maximizes your investment value and eliminates the need for separate heating equipment in many applications.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Get Free Assessment"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-section5"
                  />
                  <Button size="lg" className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold" asChild>
                    <a href="tel:+15203332665" data-testid="button-call-section5">Call Now for Quote</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Common Questions - Conversational Q&A for AI Search Optimization */}
          <CommonQuestions questions={solarACCommonQuestions} />

          {/* FAQ Section - LLM-Optimized with 11 Questions */}
          <ServiceFAQ faqs={solarACIntegrationFAQs.faqs} />

          <section className="py-16 md:py-20 bg-primary text-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Experience Free Solar Cooling in Tucson?
              </h2>
              <p className="text-xl mb-8 text-gray-200">
                Contact Intelligent Design today for your free EG4 solar AC consultation and start saving immediately!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Get Free Assessment"
                  variant="destructive"
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
                    Call: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="bg-gray-100 p-8 md:p-12 rounded-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
                  Service Areas for EG4 Solar AC Installation
                </h2>
                <p className="text-lg mb-6 text-center max-w-3xl mx-auto">
                  Intelligent Design proudly serves Tucson and all surrounding communities with professional EG4 hybrid solar mini-split installation, service, and maintenance.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <h3 className="font-bold text-primary mb-2">Tucson Metro</h3>
                    <p className="text-gray-700">Central Tucson, Midtown, Downtown, University Area, Sam Hughes, Armory Park</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Northwest</h3>
                    <p className="text-gray-700">Oro Valley, Marana, Dove Mountain, Tortolita, Rancho Vistoso, Saddlebrooke</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Northeast</h3>
                    <p className="text-gray-700">Catalina Foothills, Catalina, SaddleBrooke Ranch, Oracle, La Paloma</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">East Tucson</h3>
                    <p className="text-gray-700">Rita Ranch, Vail, Corona de Tucson, Pantano, Rincon Valley</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">South Tucson</h3>
                    <p className="text-gray-700">Sahuarita, Green Valley, Continental, Corona de Tucson, Valencia West</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">West Tucson</h3>
                    <p className="text-gray-700">Picture Rocks, Red Rock, Avra Valley, Three Points, Flowing Wells</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-lg mb-4">
                    <strong>Intelligent Design Air Conditioning, Plumbing, Solar, & Electric</strong>
                  </p>
                  <p className="text-gray-700 mb-2">1145 E Fort Lowell Rd, Tucson, AZ 85719</p>
                  <p className="text-gray-700 mb-2">
                    <a href="tel:+15203332665" className="text-primary font-bold hover:underline">(520) 333-2665</a>
                  </p>
                  <p className="text-gray-700">ROC #323640 | Licensed, Bonded & Insured</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <MobileFloatingActions />
      </div>
    </>
  );
}
