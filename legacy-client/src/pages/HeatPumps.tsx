import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingActions from "@/components/MobileFloatingActions";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import SchedulerEmbed from "@/components/SchedulerEmbed";
import TrustBar from "@/components/TrustBar";
import ServiceFAQ from "@/components/ServiceFAQ";
import { CommonQuestions } from "@/components/CommonQuestions";
import { acInstallationFAQs } from "@/data/faqs/hvac";
import { heatPumpCommonQuestions } from "@/data/commonQuestions/hvac";
import heatPumpHero from "@assets/generated_images/Heat_pump_hero_background_29dc8aa3.webp";
import heatPumpService from "@assets/generated_images/Heat_pump_service_image_4bfd75a4.webp";
import HeatPumpsSchema from '@/components/HeatPumpsSchema';
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";

export default function HeatPumps() {
  const description = 'Expert heat pump installation, repair & service in Tucson, AZ. Year-round heating and cooling efficiency. Professional heat pump systems for Tucson homes. Trusted heat pump solutions from Intelligent Design.';
  const imageUrl = `${SITE_URL}${heatPumpHero}`;

  return (
    <>
      <MetaHead
        title="Heat Pumps Tucson AZ | Heat Pump Installation, Repair & Service"
        description={description}
        canonical="https://www.idesignac.com/heat-pumps-tucson"
        openGraph={[
          { property: "og:locale", content: "en_US" },
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Heat Pumps Tucson AZ | Heat Pump Installation, Repair & Service" },
          { property: "og:description", content: description },
          { property: "og:url", content: "https://www.idesignac.com/heat-pumps-tucson" },
          { property: "og:site_name", content: "Intelligent Design" },
          { property: "og:image", content: imageUrl },
          { property: "og:image:width", content: "1920" },
          { property: "og:image:height", content: "1080" },
          { property: "og:image:alt", content: "Professional HVAC technician installing heat pump at Tucson home" }
        ]}
        twitter={[
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "Heat Pumps Tucson AZ | Heat Pump Installation, Repair & Service" },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: imageUrl },
          { name: "twitter:image:alt", content: "Professional HVAC technician installing heat pump at Tucson home" }
        ]}
      />
      <GTM />
      <DNIInjector />
      
      <HeatPumpsSchema />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative text-white py-16 md:py-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heatPumpHero})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Expert Heat Pump Services in Tucson AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                  Over 22,000 5-Star Reviews
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  Installation, Repair & Service | Year-Round Comfort | Energy Efficient | Expert Technicians
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule Heat Pump Service Online"
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
                Why Choose Heat Pumps from Intelligent Design?
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Heat & Cool in One System</p>
                    <p className="text-sm text-gray-600">Year-round comfort | Eliminates need for separate AC & furnace | Space-saving design</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Save 30-50% on Energy Bills</p>
                    <p className="text-sm text-gray-600">Ultra-efficient operation | Up to 300% efficiency | Lower monthly costs | Eco-friendly technology</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Perfect for Tucson Climate</p>
                    <p className="text-sm text-gray-600">Efficient in mild winters | Excellent cooling performance | Backup heat for cold snaps</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Rebates & Tax Credits Available</p>
                    <p className="text-sm text-gray-600">Federal tax credits up to $2,000 | TEP & SRP rebates | Financing options | Maximize savings</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Expert Installation & Service</p>
                    <p className="text-sm text-gray-600">NATE certified technicians | 45+ years experience | All major brands | Maintenance plans available</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Free In-Home Consultations</p>
                    <p className="text-sm text-gray-600">No-obligation estimates | System sizing | Compare options | Transparent pricing</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Heat Pump Company Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Best Heat Pump Company in Tucson, AZ
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="text-lg mb-6">
                    Heat pumps are increasingly popular in Tucson, AZ, and for good reason. These versatile systems provide both heating and cooling in one efficient package, making them perfect for our desert climate. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we're Tucson's leading experts in heat pump installation, repair, and maintenance.
                  </p>
                  <p className="text-lg mb-6">
                    Unlike traditional HVAC systems that require separate heating and cooling equipment, heat pumps transfer heat rather than generate it. This makes them 2-3 times more energy-efficient than conventional furnaces while providing the same powerful cooling as traditional air conditioners. For Tucson homeowners looking to reduce energy costs while maintaining year-round comfort, heat pumps are an excellent choice.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <SchedulerEmbed
                      triggerText="Schedule Online Now"
                      variant="default"
                      size="lg"
                      data-testid="button-schedule-section1"
                    />
                    <Button
                      size="lg"
                      className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                      asChild
                    >
                      <a href="tel:+15203332665" data-testid="button-call-quote">
                        Call For A Free Quote
                      </a>
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src={heatPumpService}
                      alt="Professional heat pump installation and service in Tucson, Arizona"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
                <p className="text-lg mb-4">
                  At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've earned the trust of thousands of Tucson residents with our expert heat pump services. With a nearly perfect 4.97 rating on Google and over 22,000 reviews, we're the most trusted HVAC company in Southern Arizona. Our technicians are factory-trained on all major heat pump brands and average over 17 years of experience each.
                </p>
                <p className="text-lg">
                  Whether you're considering a new heat pump installation, need repairs on an existing system, or want to schedule routine maintenance, our team provides the expertise and professionalism you deserve. We're committed to helping Tucson homeowners enjoy energy-efficient comfort all year long.
                </p>
              </div>
            </div>
          </section>

          {/* Why Heat Pumps Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Why Choose a Heat Pump for Your Tucson Home?
                </h2>
                <p className="text-xl text-gray-700 font-semibold">
                  Energy Efficiency, Year-Round Comfort, Cost Savings
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-lg">
                  Heat pumps are gaining popularity in Tucson because they offer unique advantages over traditional heating and cooling systems. The most significant benefit is energy efficiency. Heat pumps don't generate heat—they move it from one place to another. This process requires far less energy than burning fuel or using electric resistance heating, resulting in efficiency ratings of 200-300% compared to 95% for the best furnaces.
                </p>
                <p className="text-lg">
                  For Tucson's climate, heat pumps are ideal. Our winters are mild, with temperatures rarely dropping below freezing. Modern heat pumps operate efficiently down to freezing temperatures, providing ample heating for Tucson's coldest nights while excelling at cooling during our hot summers. This versatility means one system handles all your comfort needs year-round.
                </p>
                <p className="text-lg">
                  Environmental impact matters to many Tucson residents. Heat pumps are among the greenest HVAC options available. They produce no combustion emissions, reduce overall energy consumption, and can be powered by renewable energy like solar panels. As electricity grids incorporate more renewable energy, heat pumps become increasingly sustainable.
                </p>
                <p className="text-lg">
                  Long-term cost savings make heat pumps attractive investments. While installation costs may be higher than basic air conditioners, the elimination of separate heating equipment, lower operating costs, and available rebates and tax credits often result in faster payback periods. Over the system's 15-20 year lifespan, heat pumps typically save thousands in energy costs.
                </p>
                <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-xl font-bold text-primary mb-3">Key Benefits of Heat Pumps:</h3>
                  <ul className="space-y-2 text-lg">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>2-3 times more energy efficient than traditional heating systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Both heating and cooling in one system—no separate furnace needed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Perfect for Tucson's mild winters and hot summers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Eligible for federal tax credits up to $2,000 and utility rebates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Lower carbon footprint compared to gas furnaces</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* What to Expect Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                What to Expect During Heat Pump Installation
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3">In-Home Assessment</h3>
                  <p className="text-base">
                    Our experts perform detailed load calculations, assess your home's needs, and recommend the ideal heat pump system size and efficiency level for optimal performance.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3">Professional Installation</h3>
                  <p className="text-base">
                    Our certified technicians install your heat pump system following manufacturer specifications and all local codes, ensuring peak efficiency and reliable operation.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3">Testing & Training</h3>
                  <p className="text-base">
                    We thoroughly test your new system, verify optimal performance, and provide complete training on operation and maintenance to maximize efficiency and comfort.
                  </p>
                </div>
              </div>

              <div className="bg-primary text-white p-8 md:p-12 rounded-lg text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Upgrade to a Heat Pump?
                </h3>
                <p className="text-xl mb-6">
                  Enjoy year-round comfort and energy savings. Get your free estimate today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Service Now"
                    variant="secondary"
                    size="lg"
                    data-testid="button-schedule-emergency"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-emergency">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Heat Pump Services Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Comprehensive Heat Pump Services in Tucson
              </h2>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Heat Pump Installation</h3>
                  <p className="text-base mb-4">
                    We install all major heat pump brands with expert precision. Our installations include proper sizing, professional ductwork connections, refrigerant charging, electrical work, and complete system testing for optimal performance.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Professional load calculations and sizing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Expert installation by certified technicians</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Complete electrical and refrigerant work</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Comprehensive testing and commissioning</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Heat Pump Repair</h3>
                  <p className="text-base mb-4">
                    Our technicians diagnose and repair all heat pump issues including refrigerant leaks, compressor problems, reversing valve failures, defrost control malfunctions, and electrical issues quickly and effectively.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Refrigerant leak detection and repair</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Compressor and reversing valve repair</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Defrost control and sensor replacement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>24/7 emergency repair service available</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Heat Pump Maintenance</h3>
                  <p className="text-base mb-4">
                    Regular maintenance is essential for heat pumps since they operate year-round. Our comprehensive tune-ups include inspection, cleaning, testing, and calibration to ensure peak efficiency and prevent breakdowns.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Twice-annual maintenance recommended</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Comprehensive inspection and cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Refrigerant level verification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Electrical testing and calibration</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Heat Pump Replacement</h3>
                  <p className="text-base mb-4">
                    When repair costs exceed replacement value or your system is beyond its lifespan, we provide expert heat pump replacement with newer, more efficient models that dramatically reduce energy costs.
                  </p>
                  <ul className="space-y-2 text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Honest replacement recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Energy-efficient system options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Professional removal and disposal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Financing and rebate assistance</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Heat Pump Service"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-services"
                />
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-services">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Why Choose Intelligent Design for Heat Pumps?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Certified Heat Pump Experts</h3>
                  <p className="text-base">
                    All our technicians are factory-trained and certified on major heat pump brands. They average over 17 years of experience and stay current on the latest heat pump technologies and installation techniques.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Professional Installation</h3>
                  <p className="text-base">
                    Proper installation is critical for heat pump performance. We follow all manufacturer specifications and local codes, ensuring your system operates at peak efficiency from day one with maximum longevity.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Transparent Pricing</h3>
                  <p className="text-base">
                    No surprises or hidden fees. We provide clear, upfront pricing for all heat pump services. You'll know exactly what your installation, repair, or maintenance will cost before we begin work.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Family & Veteran Owned</h3>
                  <p className="text-base">
                    As a family and veteran-owned business serving Tucson since 1979, we treat every customer like family. We're committed to providing reliable, professional service with complete integrity.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Rebate & Financing Assistance</h3>
                  <p className="text-base">
                    We help you navigate available tax credits, utility rebates, and financing options to make your heat pump investment affordable. Our team assists with all paperwork and maximizes your savings.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">All Major Brands</h3>
                  <p className="text-base">
                    We install and service all major heat pump brands including Carrier, Trane, Lennox, Rheem, Goodman, American Standard, York, Bryant, Mitsubishi, and more with factory-trained expertise.
                  </p>
                </div>
              </div>

              <div className="bg-primary text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Experience Heat Pump Comfort?
                </h3>
                <p className="text-xl mb-6">
                  Get efficient year-round comfort with a new heat pump. Call now or schedule online!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Online"
                    variant="secondary"
                    size="lg"
                    data-testid="button-schedule-why-choose"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-why-choose">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Common Questions - Conversational Q&A for AI Search Optimization */}
          <CommonQuestions questions={heatPumpCommonQuestions} />

          {/* FAQ Section - LLM-Optimized with 11 Questions */}
          <ServiceFAQ faqs={acInstallationFAQs.faqs} />

          {/* NAP Section */}
          <section className="py-16 md:py-20 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Contact Intelligent Design for Heat Pumps in Tucson
                  </h2>
                  <div className="space-y-4 text-lg">
                    <p className="flex items-start">
                      <span className="font-bold mr-2">Address:</span>
                      <span>1145 E Fort Lowell Rd, Tucson, AZ 85719</span>
                    </p>
                    <p className="flex items-start">
                      <span className="font-bold mr-2">Phone:</span>
                      <a href="tel:+15203332665" className="hover:text-yellow-400 transition-colors">
                        (520) 333-2665
                      </a>
                    </p>
                    <p className="flex items-start">
                      <span className="font-bold mr-2">Hours:</span>
                      <span>24/7 Emergency Service Available</span>
                    </p>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-4">Service Areas</h3>
                    <p className="text-lg">
                      We proudly serve Tucson and surrounding areas including Oro Valley, Marana, Sahuarita, Green Valley, Vail, and more throughout Southern Arizona.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <SchedulerEmbed
                    triggerText="Schedule Heat Pump Service Online"
                    variant="secondary"
                    size="lg"
                    data-testid="button-schedule-contact"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-contact">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now: (520) 333-2665
                    </a>
                  </Button>
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
