import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";
import MobileFloatingActions from "@/components/MobileFloatingActions";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import SchedulerEmbed from "@/components/SchedulerEmbed";
import TrustBar from "@/components/TrustBar";
import ServiceFAQ from "@/components/ServiceFAQ";
import { CommonQuestions } from "@/components/CommonQuestions";
import { smartThermostatInstallationFAQs } from "@/data/faqs/hvac";
import { smartThermostatCommonQuestions } from "@/data/commonQuestions/hvac";
import smartThermostatHero from "@assets/generated_images/Smart_thermostat_on_wall_6b58a71c.webp";
import smartThermostatService from "@assets/generated_images/Technician_installing_smart_thermostat_c7732aa3.webp";
import SmartThermostatInstallationSchema from '@/components/SmartThermostatInstallationSchema';
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";

export default function SmartThermostatInstallation() {
  const description = 'Professional smart thermostat installation in Tucson. WiFi thermostats, Nest, Ecobee, Honeywell. Save 20-30% on energy bills. Expert installation, same-day service available.';
  const imageUrl = `${SITE_URL}${smartThermostatHero}`;

  return (
    <>
      <GTM />
      <DNIInjector />
      
      <SmartThermostatInstallationSchema />
      
      <MetaHead
        title="Smart Thermostat Installation Tucson AZ | WiFi Thermostat Experts | Intelligent Design"
        description={description}
        canonical="https://www.idesignac.com/smart-thermostat-installation-tucson"
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Smart Thermostat Installation Tucson AZ | WiFi Thermostat Experts | Intelligent Design' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: 'https://www.idesignac.com/smart-thermostat-installation-tucson' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Smart thermostat installation in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Smart Thermostat Installation Tucson AZ | WiFi Thermostat Experts | Intelligent Design' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Smart thermostat installation in Tucson' }
        ]}
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative text-white py-16 md:py-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${smartThermostatHero})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Expert Smart Thermostat Installation in Tucson AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                  Over 22,000 5-Star Reviews
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  Upgrade to a WiFi thermostat and save 20-30% on your energy bills. Professional installation of Nest, Ecobee, Honeywell, and all major brands. Same-day service available throughout Tucson.
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

          {/* Trust Bar */}
          <TrustBar />

          {/* Page Highlights Section */}
          <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
                Why Upgrade to a Smart Thermostat?
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Save 20-30% on Energy Bills</p>
                    <p className="text-sm text-gray-600">Smart scheduling learns your routine | Auto-adjust when you're away | Optimize HVAC runtime | Lower monthly costs</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Control from Anywhere</p>
                    <p className="text-sm text-gray-600">WiFi-enabled remote access | Adjust from your phone | Vacation mode | Voice control compatible</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Top Brands We Install</p>
                    <p className="text-sm text-gray-600">Nest, Ecobee, Honeywell, Sensi & more | Works with Alexa, Google Home | Professional setup & training</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Expert Installation Included</p>
                    <p className="text-sm text-gray-600">NATE certified technicians | C-wire installation if needed | WiFi setup | Complete app training</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Rebates & Incentives Available</p>
                    <p className="text-sm text-gray-600">TEP & SRP rebates up to $100 | Utility company programs | Instant savings on energy bills</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Same-Day Installation</p>
                    <p className="text-sm text-gray-600">Fast scheduling | Most installs in under 2 hours | Clean, professional service | Satisfaction guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Smart Thermostat Installation Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Professional Smart Thermostat Installation Services in Tucson, AZ
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="text-lg mb-6">
                    At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we specialize in professional smart thermostat installation throughout Tucson, Arizona. Upgrading to a WiFi-enabled smart thermostat is one of the smartest investments you can make in your home's comfort and energy efficiency. Our experienced technicians install all major brands including Google Nest, Ecobee, Honeywell Home, and more—ensuring perfect integration with your existing HVAC system and smart home ecosystem.
                  </p>
                  <p className="text-lg mb-6">
                    Smart thermostats represent a revolutionary advancement in home climate control. Unlike traditional programmable thermostats that require manual schedule input, modern WiFi thermostats learn your preferences, adjust automatically based on occupancy and weather, and provide detailed energy usage insights through intuitive smartphone apps. Many Tucson homeowners see energy savings of 10-23% after installing a smart thermostat—reducing monthly bills by $100-$300 annually in our climate where air conditioning runs heavily 8-9 months per year.
                  </p>
                  <p className="text-lg mb-6">
                    Our comprehensive smart thermostat installation service goes far beyond simply mounting a new device on your wall. We evaluate your existing wiring to ensure compatibility, install necessary power adapters or C-wire connections if needed, connect your thermostat to your home WiFi network, configure smartphone apps for remote control, integrate with voice assistants like Alexa or Google Assistant, and teach you how to maximize energy savings through intelligent scheduling and automation features.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <SchedulerEmbed
                      triggerText="Book Installation"
                      variant="default"
                      size="lg"
                      data-testid="button-schedule-section1"
                    />
                    <Button size="lg" variant="outline" asChild>
                      <a href="tel:+15203332665" data-testid="button-call-section1">
                        <Phone className="w-5 h-5 mr-2" />
                        (520) 333-2665
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-200 mb-6">
                    <img
                      src={smartThermostatService}
                      alt="Professional HVAC technician installing smart WiFi thermostat in Tucson home"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Why Choose Our Smart Thermostat Installation Service?
                  </h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>Expert installation of all major brands (Nest, Ecobee, Honeywell)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>Complete WiFi setup and app configuration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>C-wire installation when needed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>Smart home integration (Alexa, Google, Apple)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>Same-day installation available</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>Personalized training on all features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>Family and veteran-owned since 1979</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits of Smart Thermostats Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Benefits of Smart Thermostat Installation in Tucson
                </h2>
              </div>

              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-lg mb-6">
                  Tucson's unique climate makes smart thermostats particularly valuable. With scorching summer temperatures regularly exceeding 100°F and air conditioning systems running nearly continuously from May through September, even small efficiency improvements translate to substantial savings. Smart thermostats optimize your HVAC system's performance in ways traditional thermostats simply cannot match.
                </p>
                
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Significant Energy Cost Savings
                </h3>
                <p className="text-lg mb-6">
                  Studies by the Environmental Protection Agency and major thermostat manufacturers consistently show that smart thermostats reduce heating and cooling costs by 10-23% compared to traditional programmable thermostats—and up to 30% compared to manual control. For the average Tucson household spending $150-$250 monthly on summer cooling, this translates to $180-$690 in annual savings. The thermostat installation investment typically pays for itself within 1-2 years through reduced energy bills.
                </p>
                <p className="text-lg mb-6">
                  These savings come from multiple intelligent features working together: learning algorithms that optimize your schedule automatically, geofencing that detects when everyone leaves home and raises the temperature, weather-based adjustments that pre-cool before hot afternoons, and usage reports that identify wasteful patterns. Many smart thermostats also provide utility rebates—Tucson Electric Power and other local utilities offer incentives for installing qualifying WiFi thermostats.
                </p>

                <h3 className="text-2xl font-bold text-primary mb-4">
                  Remote Control and Convenience
                </h3>
                <p className="text-lg mb-6">
                  Remote smartphone control is perhaps the most appreciated feature of smart thermostats. Using dedicated apps from Nest, Ecobee, or Honeywell, you can adjust your home's temperature from anywhere—perfect for Tucson's lifestyle where you might be at work, traveling, or simply relaxing in another room. Pre-cool your house before arriving home on a scorching day, adjust settings if your schedule changes unexpectedly, or turn off the AC entirely if you forgot when leaving for vacation.
                </p>
                <p className="text-lg mb-6">
                  Voice control through Amazon Alexa, Google Assistant, or Apple Siri adds another layer of convenience. Simply say "Alexa, set temperature to 74 degrees" or "Hey Google, what's the current temperature?" without getting up or reaching for your phone. This hands-free control is particularly useful when cooking, doing chores, or getting ready for bed.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <SchedulerEmbed
                    triggerText="Schedule Service"
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
                      Call: (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Smart Thermostat Brands We Install Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Smart Thermostat Brands We Install
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-lg mb-8">
                  At Intelligent Design, we install and support all major smart thermostat brands. Our technicians receive ongoing training on each manufacturer's specific installation requirements, WiFi setup procedures, and advanced features to ensure perfect installation regardless of which model you choose.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-3">Google Nest Thermostats</h3>
                    <p className="text-lg">
                      The Nest Learning Thermostat is one of the most popular smart thermostats for good reason. It learns your schedule automatically over 1-2 weeks, eliminating manual programming entirely. The distinctive circular design with a high-resolution color display looks beautiful on any wall. Nest's Farsight feature lights up when you approach, displaying temperature or time. Energy history shows exactly how much energy you're using and why. Auto-Schedule learns your preferred temperatures and creates a custom schedule. Home/Away Assist uses your phone's location to automatically switch to energy-saving mode when everyone leaves. The more affordable Nest Thermostat (non-Learning) offers similar remote control and scheduling features at a lower price point.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-3">Ecobee Smart Thermostats</h3>
                    <p className="text-lg">
                      Ecobee SmartThermostats are favored by tech enthusiasts for their advanced features and included room sensors. The SmartThermostat with Voice Control has built-in Alexa, allowing you to stream music, check weather, or control other smart devices without a separate Echo device. SmartSensor technology is where Ecobee really shines—included remote sensors placed in bedrooms or other rooms measure temperature and occupancy throughout your home, ensuring comfort in the rooms you actually use rather than just where the thermostat is located. This is particularly valuable in Tucson homes where sunny west-facing rooms can be significantly hotter than other areas. The more budget-friendly Ecobee3 Lite offers excellent scheduling and remote control without the voice assistant functionality.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-3">Honeywell Home WiFi Thermostats</h3>
                    <p className="text-lg">
                      Honeywell has been manufacturing thermostats for over a century, and their smart models combine that reliability with modern WiFi capabilities. The T9 Smart Thermostat with room sensors focuses temperature control on occupied rooms for maximum comfort and efficiency. The T10 Pro includes professional-grade features like adaptive intelligent recovery that begins heating or cooling at just the right time to reach your desired temperature exactly when scheduled. Honeywell thermostats are known for intuitive interfaces that are easy to program even for those less comfortable with technology. The Honeywell Home app provides straightforward remote control, scheduling, and energy usage tracking.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-3">Additional Quality Brands</h3>
                    <p className="text-lg">
                      We also install Emerson Sensi Touch WiFi thermostats, which offer excellent value with professional installation support and utility rebate eligibility. The Lux Kono Smart Thermostat provides a unique interchangeable faceplate design that lets you match your home decor. Johnson Controls GLAS is a translucent OLED smart thermostat that doubles as an air quality monitor. We're happy to discuss the pros and cons of each brand during your consultation to help you select the perfect smart thermostat for your needs, budget, and existing HVAC equipment.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                  <SchedulerEmbed
                    triggerText="Get Free Estimate"
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
                      Call: (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Installation Process Section */}
          <section className="bg-muted/50 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Our Smart Thermostat Installation Process
              </h2>
              
              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-lg mb-6">
                  Professional installation ensures your smart thermostat works perfectly from day one. While some manufacturers market their thermostats as "DIY friendly," improper installation can lead to system damage, incorrect operation, or voided warranties. Our certified technicians follow a comprehensive process that guarantees reliable performance.
                </p>

                <div className="bg-card p-8 rounded-lg shadow-lg mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Step-by-Step Installation
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="bg-primary text-white font-bold px-3 py-1 rounded-full mr-4 flex-shrink-0">1</span>
                      <div>
                        <h4 className="font-bold mb-2">System Evaluation and Compatibility Check</h4>
                        <p>Before beginning installation, we photograph your existing thermostat wiring and identify all wire functions. We test your HVAC system to ensure it's operating correctly, check for proper voltage at the thermostat, and verify that your chosen smart thermostat model is compatible with your heating and cooling equipment. This prevents installation issues and ensures optimal performance.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-primary text-white font-bold px-3 py-1 rounded-full mr-4 flex-shrink-0">2</span>
                      <div>
                        <h4 className="font-bold mb-2">C-Wire Installation (If Needed)</h4>
                        <p>Most smart thermostats require continuous power via a C-wire (common wire) to power their WiFi, touchscreen, and processing capabilities. Many older Tucson homes lack this wire. We can run a new C-wire from your HVAC system to the thermostat location, install a power adapter kit at your air handler or furnace, or use a compatible external transformer depending on your specific setup and thermostat requirements.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-primary text-white font-bold px-3 py-1 rounded-full mr-4 flex-shrink-0">3</span>
                      <div>
                        <h4 className="font-bold mb-2">Thermostat Mounting and Wiring</h4>
                        <p>We carefully remove your old thermostat, label all wires for reference, and install the new smart thermostat's mounting plate perfectly level. Each wire is securely connected to the correct terminal, following manufacturer specifications exactly. We verify connections with a multimeter to ensure proper voltage and prevent short circuits that could damage your HVAC equipment.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-primary text-white font-bold px-3 py-1 rounded-full mr-4 flex-shrink-0">4</span>
                      <div>
                        <h4 className="font-bold mb-2">WiFi Setup and App Configuration</h4>
                        <p>Once mounted and wired, we power on your new smart thermostat and connect it to your home WiFi network. We install the manufacturer's smartphone app on your devices, create or link your account, and configure initial settings including temperature preferences, schedule, and system type. This includes connecting to Alexa, Google Home, or Apple HomeKit if you use these ecosystems.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-primary text-white font-bold px-3 py-1 rounded-full mr-4 flex-shrink-0">5</span>
                      <div>
                        <h4 className="font-bold mb-2">System Testing and Customer Training</h4>
                        <p>We thoroughly test heating and cooling operation to verify correct wiring and system response. We demonstrate all key features including adjusting temperature, changing modes, creating schedules, using geofencing, viewing energy history, and troubleshooting common issues. You'll receive our direct contact information for any questions or concerns after installation.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Installation"
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
                      (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Intelligent Design Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Why Choose Intelligent Design for Smart Thermostat Installation?
              </h2>

              <div className="max-w-4xl mx-auto">
                <p className="text-lg mb-6">
                  Intelligent Design has earned the trust of thousands of Tucson homeowners through consistently excellent service. Our technicians average over 17 years of industry experience and receive ongoing training on the latest smart home technologies. We've installed thousands of smart thermostats throughout Tucson, Oro Valley, Marana, and surrounding communities—we know exactly how to handle any installation challenge.
                </p>
                <p className="text-lg mb-6">
                  <strong>Over 22,000 Five-Star Reviews:</strong> Our 4.97 Google rating and BBB A+ accreditation reflect our commitment to customer satisfaction. We don't just install your thermostat and leave—we ensure you're completely comfortable using all features and answer any questions you have.
                </p>
                <p className="text-lg mb-6">
                  <strong>Transparent Upfront Pricing:</strong> We provide detailed written estimates before beginning any work. No hidden fees, no surprise charges—you'll know exactly what to expect. We also help you identify available utility rebates that can offset your installation cost.
                </p>
                <p className="text-lg mb-6">
                  <strong>Same-Day Service Available:</strong> We understand that you want to start enjoying your new smart thermostat as soon as possible. When you call before noon, we can often schedule same-day installation throughout the Tucson area. We stock popular models and maintain excellent relationships with local suppliers to minimize wait times.
                </p>
                <p className="text-lg mb-6">
                  <strong>Family and Veteran-Owned Since 1979:</strong> As a local Tucson business, we're invested in our community. We treat every customer like family and stand behind our work with comprehensive warranties on both equipment and labor.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
                  <SchedulerEmbed
                    triggerText="Book Now"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-section5"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-section5">
                      Call: (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Common Questions - Conversational Q&A for AI Search Optimization */}
          <CommonQuestions questions={smartThermostatCommonQuestions} />

          {/* FAQ Section - LLM-Optimized with 11 Questions */}
          <ServiceFAQ faqs={smartThermostatInstallationFAQs.faqs} />

          {/* Service Areas Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Smart Thermostat Installation Throughout Greater Tucson
                </h2>
                <p className="text-lg mb-8">
                  <strong>Intelligent Design Air Conditioning, Plumbing, Solar, & Electric</strong>
                  <br />
                  1145 E Fort Lowell Rd, Tucson, AZ 85719
                  <br />
                  <a href="tel:+15203332665" className="text-primary font-bold hover:underline">
                    (520) 333-2665
                  </a>
                </p>
                <p className="text-lg mb-4">
                  We proudly serve Tucson, Oro Valley, Marana, Catalina Foothills, Green Valley, Sahuarita, Vail, and all surrounding communities with professional smart thermostat installation services.
                </p>
                <div className="mt-8">
                  <SchedulerEmbed
                    triggerText="Schedule Your Installation Today"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-footer"
                  />
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
