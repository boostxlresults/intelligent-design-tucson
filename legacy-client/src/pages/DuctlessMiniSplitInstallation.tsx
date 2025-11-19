import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingActions from "@/components/MobileFloatingActions";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import SchedulerEmbed from "@/components/SchedulerEmbed";
import DuctlessMiniSplitInstallationSchema from "@/components/DuctlessMiniSplitInstallationSchema";
import TrustBar from "@/components/TrustBar";
import ServiceFAQ from "@/components/ServiceFAQ";
import { ductlessMiniSplitInstallationFAQs } from "@/data/faqs/hvac";
import heroImage from "@assets/generated_images/Ductless_mini_split_installation_Tucson_d37599e5.webp";
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";

export default function DuctlessMiniSplitInstallation() {
  const description = 'Expert ductless mini split installation in Tucson. Energy-efficient cooling, multi-zone systems, all brands. Free estimates from Tucson\'s #1 rated HVAC installer!';
  const imageUrl = `${SITE_URL}${heroImage}`;

  return (
    <>
      <GTM />
      <DNIInjector />
      <DuctlessMiniSplitInstallationSchema />
      
      <MetaHead
        title="Ductless Mini Split Installation Tucson AZ | Mini Split AC Installation | Intelligent Design"
        description={description}
        canonical="https://www.idesignac.com/ductless-installation-tucson"
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Ductless Mini Split Installation Tucson AZ | Mini Split AC Installation | Intelligent Design' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: 'https://www.idesignac.com/ductless-installation-tucson' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional HVAC technician installing ductless mini split air conditioning system in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Ductless Mini Split Installation Tucson AZ | Mini Split AC Installation | Intelligent Design' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional HVAC technician installing ductless mini split air conditioning system in Tucson' }
        ]}
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative text-white py-16 md:py-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  #1 Rated Ductless Mini Split Installation in Tucson AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                  Over 22,000 5-Star Reviews
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  Energy-efficient ductless mini split installations by Tucson's most trusted HVAC experts. Superior comfort, lower bills, professional installation guaranteed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Get Free Estimate"
                    variant="destructive"
                    size="lg"
                    data-testid="hero-schedule-estimate"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="hero-phone-button">
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
                Why Choose Ductless Mini Splits from Intelligent Design?
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">No Ductwork Required</p>
                    <p className="text-sm text-gray-600">Perfect for homes without ducts | Additions & renovations | Historic homes | Easy installation</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Save 30-40% on Energy Bills</p>
                    <p className="text-sm text-gray-600">High SEER ratings up to 30+ | Zone control prevents waste | Inverter technology | Ultra-efficient</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Multi-Zone Flexibility</p>
                    <p className="text-sm text-gray-600">Independent temperature control per room | Up to 8 zones per system | Customize comfort | Reduce waste</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Free In-Home Consultation</p>
                    <p className="text-sm text-gray-600">Expert system design | Load calculations | No-obligation quote | Compare options & pricing</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Top Brands & Warranties</p>
                    <p className="text-sm text-gray-600">Mitsubishi Diamond Contractor | Daikin, LG, Fujitsu | Up to 12-year warranties | Financing available</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Expert Installation</p>
                    <p className="text-sm text-gray-600">NATE certified installers | Clean, professional work | Same-day installation available | Full training provided</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <img 
                    src="https://www.idesignac.com/wp-content/uploads/2024/12/mini-split-ac-installation.jpg" 
                    alt="Professional technician installing ductless mini split AC system"
                    className="rounded-lg w-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    Ductless Mini Split Installation: The Future of Cooling in Tucson
                  </h2>
                  <p className="text-lg mb-4">
                    In the scorching heat of Tucson, a ductless mini split system isn't just an appliance—it's a necessity that delivers superior comfort while dramatically reducing energy costs. Intelligent Design specializes in expert ductless mini split installations, ensuring your home stays cool without the hassle, expense, and energy loss of traditional ductwork.
                  </p>
                  <p className="text-lg mb-6">
                    Our certified installation team is trained in the latest techniques and uses state-of-the-art equipment. We offer comprehensive services that include assessing your space, recommending the best system configuration, and installing it with precision. From load calculations to final commissioning, our focus is on quality workmanship and complete customer satisfaction.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <SchedulerEmbed
                      triggerText="Schedule Free Consultation"
                      variant="default"
                      size="lg"
                      data-testid="content-schedule-consultation-1"
                    />
                    <Button
                      size="lg"
                      className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                      asChild
                    >
                      <a href="tel:+15203332665" data-testid="content-phone-button-1">
                        Call For Free Estimate
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Ductless Mini Splits Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Why Ductless Mini Splits Are Perfect for Tucson Homes
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Exceptional Energy Efficiency</h3>
                  <p className="text-lg mb-4">
                    Ductless mini split systems are the most energy-efficient cooling option available for Tucson homes. Modern systems achieve SEER ratings of 18-30+, compared to 13-16 SEER for conventional central AC. This translates to 30-50% lower cooling costs—a significant savings when your AC runs 8+ months per year in Arizona's climate.
                  </p>
                  <p className="text-lg">
                    Inverter-driven compressors continuously adjust cooling output rather than cycling on and off, maintaining precise temperature control while consuming less energy. No ductwork means zero energy loss from duct leakage, which typically wastes 20-30% of cooling in traditional systems. Many Tucson homeowners see their electricity bills drop by hundreds of dollars annually after switching to ductless mini splits.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Zone Cooling & Personalized Comfort</h3>
                  <p className="text-lg mb-4">
                    Multi-zone ductless systems allow independent temperature control in different rooms or areas. Cool bedrooms to 68°F for sleeping while keeping living areas at 74°F. Turn off cooling in unoccupied rooms entirely, eliminating wasted energy. This zone control is impossible with traditional central AC systems.
                  </p>
                  <p className="text-lg">
                    Each indoor unit has its own thermostat and remote control, giving family members personalized comfort. No more thermostat battles! Zone cooling is particularly valuable in Tucson homes with additions, casitas, converted garages, or spaces that don't connect to existing ductwork. You only cool the spaces you're using, maximizing efficiency and comfort.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Easy Installation, No Ductwork Required</h3>
                  <p className="text-lg mb-4">
                    Installing central AC ductwork in an existing Tucson home is expensive, invasive, and often impractical. Ductless mini splits require only a small 3-inch hole through the wall to connect indoor and outdoor units. Installation is completed in hours, not days or weeks, with minimal disruption to your home.
                  </p>
                  <p className="text-lg">
                    This makes ductless systems ideal for older Tucson homes without existing ductwork, room additions, garage conversions, casitas, sunrooms, and any space where running ducts is cost-prohibitive. The flexible refrigerant lines can run up to 50 feet, allowing creative placement options. Wall-mounted, ceiling-mounted, and floor-standing indoor units provide installation flexibility for any room configuration.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Superior Indoor Air Quality</h3>
                  <p className="text-lg mb-4">
                    Ductless mini splits improve indoor air quality compared to conventional systems. No ductwork means no accumulation of dust, allergens, and contaminants in ducts that then blow into your living space. Multi-stage filtration in indoor units captures particles, improving air quality for allergy and asthma sufferers.
                  </p>
                  <p className="text-lg">
                    Many ductless systems include advanced features like plasma filtration, deodorizing filters, and humidity control. Because refrigerant lines are sealed systems, there's no opportunity for outdoor pollutants, monsoon dust, or allergens to infiltrate—a significant advantage in Tucson's dusty environment. You breathe cleaner, healthier air year-round.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Installation Process Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Our Professional Installation Process
                </h2>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">1. Free In-Home Consultation & Load Calculation</h3>
                  <p className="text-lg mb-4">
                    Every successful ductless mini split installation begins with proper planning. We start with a free, no-obligation in-home consultation where our certified technicians evaluate your cooling needs, home layout, and specific challenges. We don't use rough estimates—we perform detailed Manual J load calculations considering square footage, insulation levels, window exposure, ceiling heights, and Tucson's extreme climate.
                  </p>
                  <p className="text-lg">
                    This engineering-based approach ensures we recommend the right system size and configuration. Undersized systems can't maintain comfort during Tucson's 110°F+ summer days. Oversized systems waste energy and provide poor humidity control. We size systems precisely for optimal performance and efficiency, then provide a detailed written estimate with multiple equipment options at different price points.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">2. Expert Installation & System Commissioning</h3>
                  <p className="text-lg mb-4">
                    Our factory-trained installation teams follow strict manufacturer specifications and industry best practices. We handle everything: obtaining permits, mounting outdoor condensers on stable pads or wall brackets, routing refrigerant lines and electrical through walls with minimal intrusion, installing indoor units precisely level, making secure electrical connections, vacuum testing refrigerant lines to ensure no leaks, and charging systems to exact specifications.
                  </p>
                  <p className="text-lg">
                    Installation quality directly impacts system performance, efficiency, and longevity. We don't rush jobs or cut corners. Refrigerant lines are professionally brazed, not using quick-connect fittings that can leak. Electrical work meets all local codes with proper disconnect switches and circuit protection. Condensate drains are routed properly to prevent water damage. Every installation meets or exceeds manufacturer specifications.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">3. Performance Testing & Customer Training</h3>
                  <p className="text-lg mb-4">
                    After installation, we thoroughly test system performance before leaving your home. This includes verifying proper refrigerant pressures, measuring airflow and temperature differentials, testing all thermostats and remote controls, ensuring drainage functions correctly, and confirming electrical draws match specifications. We don't consider a job complete until the system performs flawlessly.
                  </p>
                  <p className="text-lg mb-6">
                    We provide comprehensive customer training on system operation, remote control functions, maintenance filter access, and energy-saving settings. You'll understand how to maximize your investment's efficiency and comfort. We also register manufacturer warranties, provide all documentation, and schedule your first maintenance visit. Our goal is your complete satisfaction and a system that delivers superior comfort for years to come.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <SchedulerEmbed
                      triggerText="Get Started Today"
                      variant="default"
                      size="lg"
                      data-testid="content-schedule-consultation-2"
                    />
                    <Button
                      size="lg"
                      className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                      asChild
                    >
                      <a href="tel:+15203332665" data-testid="content-phone-button-2">Call For Free Quote</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* System Options Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Ductless Mini Split System Options
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Single-Zone Systems</h3>
                  <p className="text-lg">
                    Perfect for cooling one room or space like a master bedroom, home office, garage conversion, or casita. Single-zone systems include one outdoor condenser and one indoor unit. Ideal for supplementing existing AC in problem areas or providing dedicated cooling where ductwork doesn't reach. Costs typically range from $3,000-$6,000 installed.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Multi-Zone Systems</h3>
                  <p className="text-lg">
                    Multi-zone systems connect multiple indoor units (up to 8) to one outdoor condenser, providing independent temperature control in different rooms. Perfect for whole-home cooling or cooling specific areas like all bedrooms or living spaces. More cost-effective than installing multiple single-zone systems. Costs range from $6,000-$15,000+ depending on number of zones and equipment selected.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Wall-Mounted Units</h3>
                  <p className="text-lg">
                    The most common and cost-effective indoor unit type. Mounted high on walls for optimal air distribution. Sleek, modern designs blend with any decor. Easy to clean and maintain. Best for bedrooms, living rooms, and offices.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Ceiling Cassette Units</h3>
                  <p className="text-lg">
                    Recessed into ceilings for invisible appearance—only the vent grille shows. Distribute air in four directions for superior coverage. Ideal for open floor plans, commercial spaces, or when wall space is limited. Premium option with higher cost.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Floor-Standing Units</h3>
                  <p className="text-lg">
                    Installed low on walls or under windows. Good for rooms where wall mounting isn't possible or preferred. Easier accessibility for maintenance. Works well in rooms with low ceilings or concrete block construction.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Premium Brands Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Premium Brands We Install
                </h2>
                <p className="text-xl text-gray-700">
                  We install only top-tier ductless mini split brands proven to withstand Tucson's extreme climate
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Mitsubishi Electric</h3>
                  <p className="text-lg mb-6">
                    The industry leader in ductless mini split technology. Mitsubishi systems are renowned for whisper-quiet operation, exceptional efficiency (up to 30.5 SEER), industry-leading reliability, and advanced features like Hyper-Heat for cold weather operation. Backed by 12-year compressor warranties and excellent factory support. Our #1 recommendation for Tucson homeowners seeking the best performance and longevity.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Daikin</h3>
                  <p className="text-lg mb-6">
                    Another premium Japanese manufacturer with cutting-edge inverter technology. Daikin systems offer excellent efficiency, reliable operation, advanced air purification features, and smart home integration. Known for innovative engineering and superior humidity control—important in Tucson's monsoon season. Comprehensive warranties and strong dealer support network.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Fujitsu</h3>
                  <p className="text-lg mb-6">
                    High-quality ductless systems with excellent SEER ratings and whisper-quiet operation. Fujitsu's Halcyon series offers superior efficiency and reliability at competitive prices. Features like intelligent eye sensors detect room occupancy and adjust operation for maximum energy savings. Great value proposition with solid warranty coverage.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">LG & Samsung</h3>
                  <p className="text-lg mb-6">
                    Korean manufacturers offering feature-rich systems with modern aesthetics and smart technology integration. Excellent efficiency ratings, WiFi connectivity for remote control, and competitive pricing. Good options for budget-conscious homeowners seeking quality and efficiency without premium price tags.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 md:p-12 rounded-lg text-center">
                <p className="text-lg mb-6">
                  All systems come with comprehensive manufacturer warranties and our installation workmanship guarantee.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Discuss System Options"
                    variant="default"
                    size="lg"
                    data-testid="content-schedule-consultation-3"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="content-phone-button-3">Call For Free Quote</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Intelligent Design Section */}
          <section className="bg-primary text-white py-16 md:py-20">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Intelligent Choice for Ductless Mini Split Installation
              </h2>
              <p className="text-lg mb-6">
                Why choose Intelligent Design for your ductless mini split installation? Because we bring a perfect blend of expertise, dedication, and commitment to customer satisfaction. Our installation teams are factory-certified and trained in the latest techniques, ensuring your system receives the specialized care it deserves.
              </p>
              <p className="text-lg mb-6">
                We're not just installing equipment—we're providing a comprehensive cooling solution tailored to your home's specific needs and Tucson's demanding climate. From the initial consultation through final commissioning and beyond, we're committed to your complete satisfaction. Every installation is backed by our workmanship warranty and manufacturer coverage.
              </p>
              <p className="text-lg">
                Our mission is to deliver ductless mini split installations that exceed your expectations. We pride ourselves on superior customer service, meticulous attention to detail, and installations that perform flawlessly for years. Join thousands of satisfied Tucson homeowners who trust Intelligent Design for superior HVAC solutions.
              </p>
            </div>
          </section>

          {/* Financing & Service Area Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    Financing Options & Rebates Available
                  </h2>
                  <p className="text-lg mb-4">
                    We understand that a new ductless mini split system is a significant investment. That's why we offer flexible financing options with approved credit, allowing you to enjoy superior comfort and energy savings now while spreading payments over time. Ask about our current promotional financing offers including 0% interest options.
                  </p>
                  <p className="text-lg">
                    Many high-efficiency ductless mini split systems qualify for utility rebates and tax credits. We'll help you identify available incentives and navigate rebate applications. These programs can save hundreds to thousands of dollars on your installation, making premium energy-efficient systems more affordable. Our team stays current on all available rebates to maximize your savings.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    Serving All of Greater Tucson
                  </h2>
                  <p className="text-lg mb-6">
                    Intelligent Design provides expert ductless mini split installation throughout greater Tucson including Oro Valley, Marana, Vail, Sahuarita, Green Valley, Catalina Foothills, and all of Pima County. Our installation teams are familiar with local building codes, permit requirements, and the unique cooling challenges each neighborhood faces. We maintain the same high standards of installation excellence and customer service across all communities we serve.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <SchedulerEmbed
                      triggerText="Explore Financing Options"
                      variant="default"
                      size="lg"
                      data-testid="content-schedule-consultation-4"
                    />
                    <Button
                      size="lg"
                      className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                      asChild
                    >
                      <a href="tel:+15203332665" data-testid="content-phone-button-4">Schedule Consultation</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Contact Intelligent Design for Ductless Mini Split Installation
                </h2>
              </div>
              
              <div className="bg-white p-8 md:p-12 rounded-lg max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Business Information</h3>
                    <p className="mb-2"><strong>Intelligent Design Air Conditioning, Plumbing, Solar, & Electric</strong></p>
                    <p className="mb-2">1145 E Fort Lowell Rd</p>
                    <p className="mb-2">Tucson, AZ 85719</p>
                    <p className="mb-2">
                      <a href="tel:+15203332665" className="text-primary hover:underline font-bold">
                        (520) 333-2665
                      </a>
                    </p>
                    <p className="mb-4">Hours: 24/7 Emergency Service Available</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Service Areas</h3>
                    <p className="mb-2">We proudly serve:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Tucson</li>
                      <li>Oro Valley</li>
                      <li>Marana</li>
                      <li>Vail</li>
                      <li>Sahuarita</li>
                      <li>Green Valley</li>
                      <li>Catalina</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Free Estimate"
                    variant="default"
                    size="lg"
                    data-testid="nap-schedule-estimate"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="nap-phone-button">
                      <Phone className="w-5 h-5 mr-2" />
                      (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <ServiceFAQ faqs={ductlessMiniSplitInstallationFAQs.faqs} />
        </main>

        <Footer />
        <MobileFloatingActions />
      </div>
    </>
  );
}
