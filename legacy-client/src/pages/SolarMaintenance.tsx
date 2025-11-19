import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CommonQuestions } from "@/components/CommonQuestions";
import { solarMaintenanceAloneCommonQuestions } from "@/data/commonQuestions/solar";
import ServiceFAQ from '@/components/ServiceFAQ';
import { solarMaintenanceFAQs } from '@/data/faqs/solar';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import SolarMaintenanceSchema from '@/components/SolarMaintenanceSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import solarMaintenanceHero from '@assets/generated_images/Solar_maintenance_and_monitoring_e428ab0f.webp';

export default function SolarMaintenance() {
  const description = 'Professional solar maintenance in Tucson. Panel cleaning, monitoring, inspections, and preventive maintenance. Maximize system performance and protect your investment. Call (520) 333-2665.';
  const imageUrl = `${SITE_URL}${solarMaintenanceHero}`;

  return (
    <>
      <MetaHead
        title="Solar Maintenance Tucson AZ | Solar Panel Cleaning & Monitoring Services"
        description={description}
        canonical={`${SITE_URL}/solar-maintenance-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Solar Maintenance Tucson AZ | Solar Panel Cleaning & Monitoring Services' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/solar-maintenance-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional solar panel maintenance and monitoring in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Solar Maintenance Tucson AZ | Solar Panel Cleaning & Monitoring Services' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional solar panel maintenance and monitoring in Tucson' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <SolarMaintenanceSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${solarMaintenanceHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Solar Maintenance Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Panel Cleaning | System Monitoring | Performance Optimization | Preventive Maintenance | 45+ Years Experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Maintenance"
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
              Why Choose Intelligent Design for Solar Maintenance?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Professional Panel Cleaning</p>
                  <p className="text-sm text-gray-600">Deionized water cleaning | No-scratch methods | Dust removal | Performance restoration</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Advanced System Monitoring</p>
                  <p className="text-sm text-gray-600">Real-time production tracking | Performance alerts | Energy analytics | Remote diagnostics</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Inspections</p>
                  <p className="text-sm text-gray-600">Electrical connections check | Mounting integrity | Inverter performance | Warranty compliance</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Preventive Maintenance Programs</p>
                  <p className="text-sm text-gray-600">Scheduled service visits | Priority scheduling | Discounted rates | Extended equipment life</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Expertise</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Local specialists | Trusted since 1979</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Maximize Investment Protection</p>
                  <p className="text-sm text-gray-600">Warranty preservation | Performance optimization | Early problem detection | ROI maximization</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Solar Maintenance Services in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Solar panels are remarkably reliable and low-maintenance, but proper care is essential to maximize performance, protect your investment, and ensure long-term energy production. Tucson's desert environment presents unique challenges including dust accumulation, intense UV exposure, monsoon storms, and extreme temperature swings. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we provide comprehensive solar maintenance services specifically designed for Tucson's climate, helping homeowners maintain peak system performance and protect warranties since 1979.
              </p>
              <p className="text-lg mb-6">
                Regular solar maintenance can increase energy production by 15-25% compared to neglected systems. Desert dust, pollen, bird droppings, and pollution create a film on panels that blocks sunlight and reduces efficiency. Even a thin layer of dust can decrease output by 10-15%, while heavy soiling can reduce production by 25-35%. Our professional cleaning services use deionized water and soft-brush techniques that safely remove contaminants without scratching panels or voiding warranties. We clean panels early morning or late afternoon to prevent thermal shock and ensure optimal cleaning effectiveness.
              </p>
              <p className="text-lg mb-8">
                Beyond cleaning, comprehensive maintenance includes electrical connection inspections, inverter performance testing, mounting system integrity checks, wiring condition assessment, and monitoring system verification. We identify potential problems before they cause system failures or void equipment warranties. Our technicians are trained on all major solar equipment brands and use manufacturer-recommended maintenance procedures. Annual maintenance visits typically take 1-2 hours and provide detailed performance reports showing current production, historical trends, and recommendations for optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Maintenance Visit"
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
                Our Solar Maintenance Services
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Professional Solar Panel Cleaning
              </h3>
              <p className="text-lg mb-6">
                Tucson's desert environment means solar panels accumulate dust, pollen, and debris faster than in most locations. While rain provides some natural cleaning, Tucson's limited rainfall and dry conditions mean panels often go months between natural cleaning events. Professional panel cleaning restores energy production to peak levels by removing accumulated contaminants that block sunlight. We use deionized water that won't leave mineral deposits or streaks on panels, ensuring maximum light transmission and preventing water spots that attract additional dust.
              </p>
              <p className="text-lg mb-6">
                Our cleaning process begins with safety setup including proper roof access equipment and fall protection. We inspect panels for damage before cleaning, documenting any cracks, discoloration, or physical damage. Cleaning uses soft brushes or specialized solar panel cleaning equipment that safely removes dirt without scratching anti-reflective coatings. We avoid harsh chemicals, abrasive materials, or high-pressure washing that can damage panels or seals. Cleaning includes panel surfaces, frames, and junction boxes. We also clear debris from roof areas around panels and check drainage paths to prevent water accumulation.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                System Monitoring and Performance Analysis
              </h3>
              <p className="text-lg mb-6">
                Modern solar systems include monitoring capabilities that track real-time and historical production data. However, many homeowners don't actively review monitoring data or understand what normal performance should be. Our monitoring services include setting up and configuring monitoring systems, establishing performance baselines, identifying production anomalies, and providing regular performance reports. We analyze production data to identify underperforming panels, inverter issues, shading problems, or other factors reducing system output.
              </p>
              <p className="text-lg mb-6">
                Performance monitoring compares actual production to expected output based on system size, local solar irradiance, and historical data. Deviations of 10-15% indicate potential problems requiring investigation. We check for panel-level issues using microinverter data or string optimizer monitoring, inverter efficiency and error codes, production consistency across arrays, and seasonal production patterns. Early problem detection prevents small issues from becoming expensive failures and helps maintain warranty compliance. We provide homeowners with easy-to-understand performance summaries showing energy production, cost savings, and environmental benefits.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Electrical and Safety Inspections
              </h3>
              <p className="text-lg mb-6">
                Solar system electrical components require periodic inspection to ensure safe, reliable operation. Our electrical inspections include checking DC and AC connections for tightness and corrosion, testing ground connections and bonding, inspecting conduit and wire protection, verifying rapid shutdown system operation, and testing GFCI and disconnect switches. Loose connections cause resistance heating that can lead to fires or equipment damage. Tucson's temperature extremes cause expansion and contraction that can loosen connections over time.
              </p>
              <p className="text-lg mb-8">
                We use thermal imaging cameras to identify hot spots indicating electrical problems before they cause failures. Infrared inspections reveal loose connections, failing bypass diodes, cell damage, and other issues invisible to visual inspection. Our technicians test inverter output voltage and current, verify proper shutdown sequences, and check for error codes or performance warnings. Electrical inspections ensure your system operates safely and efficiently while maintaining warranty compliance and code requirements. We provide detailed inspection reports with photos documenting system condition.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mounting System and Roof Integrity Checks
              </h3>
              <p className="text-lg mb-6">
                Panel mounting systems must withstand decades of Tucson's intense sun, monsoon winds, and temperature swings. Our inspections verify mounting rail attachment security, check for corrosion or material degradation, assess panel clamp tightness, inspect roof flashing and waterproofing, and identify any structural concerns. Tucson's monsoon season produces powerful wind gusts that can stress mounting systems. We ensure all hardware remains tight and panels are securely mounted to withstand extreme weather.
              </p>
              <p className="text-lg mb-6">
                Roof condition is critical for solar system longevity. We inspect roof areas under and around panels for damage, deterioration, or leaks. Early leak detection prevents water damage to homes and potential system removal for roof repairs. For tile roofs, we check tile condition and ensure tile hooks remain properly positioned. Metal roofs require inspection of attachment points for proper sealing. We coordinate with roofing professionals when repairs are needed, ensuring work is completed without compromising solar systems or warranties.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Inverter Maintenance and Testing
              </h3>
              <p className="text-lg mb-6">
                Inverters are the most likely solar system component to require maintenance or replacement. String inverters typically last 10-15 years, while microinverters often provide 15-25 years of service. Regular inverter testing identifies problems before complete failure, allowing planned replacement rather than emergency service. We test inverter voltage and current output, verify cooling fan operation, check for error codes or warnings, inspect physical condition and connections, and test communication with monitoring systems.
              </p>
              <p className="text-lg mb-8">
                Inverters contain electronic components sensitive to heat and dust. Tucson's extreme temperatures stress inverter electronics, particularly for units in direct sun or poorly ventilated locations. We clean inverter ventilation openings, verify proper airflow, and recommend shade or ventilation improvements when needed. For microinverter systems, we test individual unit performance and identify failing units before they stop producing entirely. Our maintenance includes keeping inverter firmware updated with manufacturer improvements and security patches.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Get Maintenance Quote"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section2">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Benefits of Regular Solar Maintenance
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Maximize Energy Production and Savings
              </h3>
              <p className="text-lg mb-6">
                Regular maintenance ensures your solar system produces maximum energy year after year. Clean panels produce 15-25% more electricity than dirty panels. For a typical 7kW Tucson residential system producing $1,200 annually in electricity savings, lost production from neglected maintenance costs $180-$300 per year. Over a 25-year system lifetime, deferred maintenance can cost $4,500-$7,500 in lost energy production. Professional maintenance pays for itself many times over through increased production and extended equipment life.
              </p>
              <p className="text-lg mb-6">
                Beyond cleaning, maintenance identifies and corrects performance problems reducing output. Failing inverters, damaged panels, loose connections, and shading issues often go unnoticed without systematic monitoring and inspection. We catch these problems early when repairs are simpler and less expensive. Our performance optimization recommendations help you maximize solar production through improved system settings, equipment upgrades, or operational changes. Regular maintenance ensures you receive the full financial benefits of your solar investment year after year.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Protect Equipment Warranties
              </h3>
              <p className="text-lg mb-6">
                Most solar equipment warranties require proper maintenance to remain valid. Panel manufacturers may deny warranty claims if damage resulted from improper maintenance or neglect. Inverter warranties often require annual inspections and documentation. Our maintenance services provide the documentation needed to support warranty claims, including dated inspection reports, performance data, and maintenance records. We follow manufacturer-recommended maintenance procedures ensuring warranty compliance.
              </p>
              <p className="text-lg mb-6">
                Regular maintenance also identifies warranty-covered defects before warranties expire. Solar panels carry 25-year performance warranties and 10-25 year product warranties. Inverters typically have 10-15 year warranties. Without regular inspections, defects may go unnoticed until after warranty expiration, leaving you responsible for replacement costs. Our inspections identify failing panels, inverters with performance issues, and other warranty-covered problems while manufacturers still provide free replacement. This warranty protection alone can save thousands of dollars over system lifetime.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Extend Equipment Lifespan
              </h3>
              <p className="text-lg mb-6">
                Well-maintained solar systems regularly exceed 30-35 year operational lifespans. Conversely, neglected systems experience accelerated degradation and premature failures. Regular cleaning prevents hot spots caused by dirt accumulation that can damage solar cells. Electrical inspections prevent connection failures and arcing. Monitoring detects inverter problems before catastrophic failure. These maintenance activities extend equipment life and maximize return on investment.
              </p>
              <p className="text-lg mb-8">
                Tucson's climate is particularly demanding on solar equipment. Intense UV exposure, extreme heat, monsoon moisture, and dust accumulation accelerate equipment aging. Regular maintenance mitigates these environmental stresses through cleaning, corrosion prevention, and early problem detection. Our maintenance programs are specifically designed for Tucson's unique challenges, ensuring your solar investment provides decades of reliable service. Extending system life by even 5 years can add $6,000-$12,000 in additional electricity savings.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Start Maintenance Plan"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section3"
                />
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
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
                Solar Maintenance Recommendations for Tucson
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Panel Cleaning Schedule
              </h3>
              <p className="text-lg mb-6">
                Tucson solar panels should be professionally cleaned 2-4 times annually depending on location and environmental factors. Homes near agricultural areas, construction sites, or major roads accumulate dirt faster. Properties with large trees or frequent bird activity require more frequent cleaning. We recommend cleaning at the end of spring pollen season (May), before peak summer production (June), after monsoon season (September), and in late fall (November). This schedule ensures panels remain clean during highest production periods.
              </p>
              <p className="text-lg mb-6">
                Between professional cleanings, homeowners can perform visual inspections and light rinsing if accessible. Use only water and soft brushes—never abrasive materials or harsh chemicals. Avoid walking on panels or roof areas that could cause damage. Clean panels early morning or evening to prevent thermal shock from cold water on hot panels. Monitor production data after cleaning to verify performance improvement. If output doesn't increase after cleaning, contact us for more thorough inspection and testing.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Annual Inspection and Testing
              </h3>
              <p className="text-lg mb-6">
                Every solar system should receive comprehensive annual inspection covering electrical connections, inverter performance, panel condition, mounting integrity, and monitoring accuracy. Annual inspections identify problems before they cause failures or void warranties. Schedule inspections in spring or fall when temperatures are moderate and before peak production seasons. Inspection timing allows repairs before high-production summer months when every day of downtime means lost savings.
              </p>
              <p className="text-lg mb-8">
                Our annual inspection service includes 25-point system evaluation, thermal imaging of electrical components, inverter testing and diagnostics, panel visual inspection, mounting and roof assessment, production data analysis, monitoring system verification, and detailed reporting with photos. We provide recommendations for repairs, upgrades, or optimization based on findings. Annual inspections typically take 1-2 hours and can be combined with cleaning service for convenience and cost savings. Regular inspections ensure reliable operation and maximum return on your solar investment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Inspection"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
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
        <CommonQuestions questions={solarMaintenanceAloneCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={solarMaintenanceFAQs.faqs} />

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Protect Your Solar Investment with Professional Maintenance
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Keep your Tucson solar system producing maximum energy with expert maintenance from Intelligent Design. Our comprehensive maintenance programs ensure peak performance, warranty protection, and maximum ROI.
              </p>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Serving Tucson and Surrounding Areas
                </h3>
                <p className="text-lg text-gray-600 mb-2">
                  Tucson • Oro Valley • Marana • Green Valley • Sahuarita • Vail • Catalina Foothills
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Intelligent Design Air Conditioning, Plumbing, Solar, & Electric
                </h3>
                <p className="text-lg text-gray-700 mb-2">
                  1145 E Fort Lowell Rd, Tucson, AZ 85719
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Phone: <a href="tel:+15203332665" className="text-blue-600 hover:underline" data-testid="link-phone-nap">(520) 333-2665</a>
                </p>
                <p className="text-lg text-gray-700">
                  Available 24/7 for Service
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Maintenance Now"
                  variant="destructive"
                  size="lg"
                  data-testid="button-schedule-bottom"
                />
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-bottom">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}