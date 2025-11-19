import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CommonQuestions } from "@/components/CommonQuestions";
import { residentialSolarCommonQuestions } from "@/data/commonQuestions/solar";
import ServiceFAQ from '@/components/ServiceFAQ';
import { residentialSolarInstallationFAQs } from '@/data/faqs/solar';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import ResidentialSolarInstallationSchema from '@/components/ResidentialSolarInstallationSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import solarHero from '@assets/generated_images/Residential_solar_panel_installation_23ee301f.webp';

export default function ResidentialSolarInstallation() {
  const description = 'Professional residential solar installation in Tucson. Premium panels, 30% tax credit, expert design & installation. 45+ years experience. Call (520) 333-2665 for free solar consultation.';
  const imageUrl = `${SITE_URL}${solarHero}`;

  return (
    <>
      <MetaHead
        title="Residential Solar Installation Tucson AZ | Home Solar Panel Installation"
        description={description}
        canonical={`${SITE_URL}/residential-solar-installation-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Residential Solar Installation Tucson AZ | Home Solar Panel Installation' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/residential-solar-installation-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional residential solar panel installation on Tucson home' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Residential Solar Installation Tucson AZ | Home Solar Panel Installation' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional residential solar panel installation on Tucson home' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <ResidentialSolarInstallationSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${solarHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Residential Solar Installation Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Premium Solar Panels | 30% Tax Credit | Expert Design & Installation | Energy Independence | 45+ Years Experience
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

        <TrustBar />

        <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              Why Choose Intelligent Design for Residential Solar Installation?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Premium Equipment & Warranties</p>
                  <p className="text-sm text-gray-600">Tier-1 solar panels | 25-year warranties | High-efficiency inverters | Premium mounting systems</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Maximum Tax Credits & Incentives</p>
                  <p className="text-sm text-gray-600">30% federal tax credit | Arizona incentives | Net metering setup | Rebate assistance</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Custom System Design</p>
                  <p className="text-sm text-gray-600">Detailed energy analysis | Optimal panel placement | Shade assessment | Production guarantees</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Expertise</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Local knowledge | Trusted since 1979</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Installation Services</p>
                  <p className="text-sm text-gray-600">Permits & inspections | Utility coordination | Professional installation | System monitoring</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Flexible Financing Options</p>
                  <p className="text-sm text-gray-600">Low-APR solar loans | Cash discounts | Multiple payment plans | Positive cash flow from day one</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Expert Residential Solar Installation in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Tucson homeowners are discovering the power of solar energy to dramatically reduce electricity bills, increase home value, and achieve energy independence. With over 350 sunny days per year, Tucson is one of America's best locations for residential solar energy production. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've helped thousands of Tucson families transition to clean, renewable solar power since 1979, providing expert system design, premium equipment installation, and comprehensive support to maximize your solar investment.
              </p>
              <p className="text-lg mb-6">
                Our residential solar installation process begins with a detailed energy analysis of your home's electricity usage, roof characteristics, and energy goals. We examine 12 months of utility bills to understand consumption patterns and identify opportunities for energy efficiency improvements before sizing your solar system. Our solar designers use advanced 3D modeling technology to map your roof, analyze sun exposure throughout the year, identify shading issues, and design optimal panel layouts that maximize energy production while maintaining your home's aesthetics.
              </p>
              <p className="text-lg mb-8">
                We use only tier-1 solar panels from manufacturers with proven track records of reliability and performance. These premium panels come with 25-year performance warranties guaranteeing 85-92% output after 25 years—significantly better than economy panels that may degrade 20-30% over the same period. Our installations include high-efficiency inverters (string or microinverter systems based on your needs), aluminum racking systems engineered for Tucson's monsoon winds, comprehensive monitoring systems, and professional electrical integration. Every installation is performed by NABCEP-certified solar installers following strict quality standards and local building codes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Solar Consultation"
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
                Our Residential Solar Installation Process
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Step 1: Free Solar Consultation & Energy Analysis
              </h3>
              <p className="text-lg mb-6">
                Your solar journey begins with a comprehensive consultation where we review your energy goals, assess your property, and analyze your electricity usage patterns. We examine your past 12 months of utility bills to understand seasonal variations and identify your average monthly consumption. Our solar consultants evaluate your roof's orientation, pitch, age, and condition. South-facing roofs provide optimal production in Tucson, though west and east-facing installations also perform well. We assess shading from trees, nearby buildings, and seasonal sun angles using specialized software that models sun paths throughout the year.
              </p>
              <p className="text-lg mb-6">
                We discuss your energy goals—whether you want to offset 50%, 75%, or 100% of your electricity usage. Some homeowners prefer smaller systems that eliminate their highest-cost peak usage, while others want complete energy independence. We explain how Tucson Electric Power's net metering works, how solar production correlates with your consumption patterns, and realistic expectations for energy bill savings. This consultation is pressure-free and educational—we want you to make an informed decision that's right for your family and budget.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Step 2: Custom System Design & Proposal
              </h3>
              <p className="text-lg mb-6">
                Using data from your consultation and energy analysis, our solar designers create a custom system specifically for your home. We use advanced 3D modeling software that maps your roof with satellite imagery and calculates precise sun exposure for every square foot. This technology identifies optimal panel placement to maximize production while avoiding shaded areas. We design around roof penetrations, skylights, vents, and architectural features to create clean, professional-looking installations.
              </p>
              <p className="text-lg mb-6">
                Your custom proposal includes detailed system specifications: exact panel quantities and models, inverter type and location, mounting system details, electrical configuration, and estimated annual energy production. We provide financial projections showing system costs, available tax credits and incentives, net investment after incentives, estimated annual savings, and payback period. We compare multiple equipment options—from value-tier to premium—so you can choose the best balance of performance and budget. All proposals include production guarantees and comprehensive warranty information.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Step 3: Permits, Approvals & Financing
              </h3>
              <p className="text-lg mb-6">
                Once you approve the design and sign your installation agreement, we handle all permitting and utility approvals—you don't need to visit government offices or navigate bureaucratic processes. We prepare and submit building permit applications to Pima County or your local municipality, including detailed electrical plans, structural calculations, and equipment specifications. Permit approval typically takes 2-4 weeks. Simultaneously, we submit interconnection applications to Tucson Electric Power or your utility provider for net metering approval.
              </p>
              <p className="text-lg mb-8">
                If you're financing your solar installation, we connect you with specialized solar lenders offering competitive rates and terms. Solar loans typically feature 0-6% APR with terms from 10-25 years. Many homeowners choose loans where monthly payments are lower than their current electricity bills, creating positive cash flow from day one. We assist with loan applications and can coordinate with your preferred lenders or financial institutions. Cash purchases receive special discounts and provide the fastest return on investment.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Step 4: Professional Installation
              </h3>
              <p className="text-lg mb-6">
                Installation day transforms your home into a clean energy producer. Our NABCEP-certified installation crews arrive with all equipment, tools, and safety gear needed for professional installation. Most residential solar installations take 1-3 days depending on system size and roof complexity. We begin by staging equipment and setting up safety measures including scaffolding or roof anchors. The installation process includes: mounting rail installation with proper roof attachments and waterproof flashing, solar panel installation and secure mounting, inverter installation in optimal locations, electrical wiring and disconnect installation, and system grounding and safety equipment.
              </p>
              <p className="text-lg mb-6">
                We take extreme care protecting your roof and property. All roof penetrations receive professional waterproofing with stainless steel hardware and double-sealed flashing. For tile roofs, we carefully remove and replace tiles, using special tile hooks that don't require roof penetrations. Our installations meet or exceed all building codes and manufacturer specifications. We communicate throughout installation about progress, any discoveries affecting the project, and timeline updates. Installation sites are kept clean with daily debris removal and final site cleanup leaving your property pristine.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Step 5: Inspection, Interconnection & Activation
              </h3>
              <p className="text-lg mb-6">
                After physical installation completion, we schedule required inspections by local building departments and your utility company. Building inspections verify code compliance, proper installation, and electrical safety. Utility inspections confirm proper interconnection equipment and net metering compatibility. We coordinate all inspection appointments and address any inspector questions or requirements. Inspection approval typically occurs within 1-2 weeks of installation completion.
              </p>
              <p className="text-lg mb-8">
                Once inspections pass, we receive Permission to Operate (PTO) from your utility company—official authorization to connect your solar system to the grid and begin net metering. System activation includes final testing of all electrical connections, inverter programming and configuration, monitoring system setup and testing, homeowner training on system operation, and providing all warranty documentation. We walk you through your monitoring app showing real-time production, explain what to expect in different weather conditions, and review maintenance recommendations. Your solar system begins producing clean energy and reducing your electricity bills immediately.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Get Free Solar Quote"
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
                Solar Equipment We Install
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Premium Solar Panels
              </h3>
              <p className="text-lg mb-6">
                We install only tier-1 solar panels from manufacturers with proven reliability and comprehensive warranties. Tier-1 classification means manufacturers have vertical integration (controlling their supply chain), automated production facilities, financial stability, and years of proven performance. Our preferred manufacturers include industry leaders known for superior efficiency, durability in extreme climates, and excellent warranty support. Solar panel technology has advanced significantly—modern panels produce 350-450 watts each compared to 250-300 watts from panels installed just 10 years ago.
              </p>
              <p className="text-lg mb-6">
                Panel efficiency ratings (18-23%) determine how much electricity each panel produces from available sunlight. Higher efficiency panels cost more but require less roof space for the same energy production—valuable for homes with limited suitable roof area. All panels we install carry 25-year performance warranties guaranteeing at least 85% of original output after 25 years, with many premium panels guaranteeing 90-92%. Product warranties cover manufacturing defects for 10-25 years depending on manufacturer. We help you select panels balancing efficiency, aesthetics, warranty protection, and budget.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Inverter Systems: String vs. Microinverters
              </h3>
              <p className="text-lg mb-6">
                Inverters convert solar panels' DC electricity into AC electricity used by your home and the grid. We offer two proven inverter technologies: string inverters and microinverters, each with distinct advantages. String inverters connect panels in series to a single centralized inverter typically installed near your electrical panel. String inverters are economical, have 10-15 year warranties (25 years for premium models), offer simple troubleshooting, and work well for roofs with uniform sun exposure and minimal shading. Modern string inverters include rapid shutdown features and DC optimizers that mitigate shading impacts.
              </p>
              <p className="text-lg mb-6">
                Microinverters are small inverters attached to each individual panel, converting DC to AC right at the panel. Microinverter advantages include: superior performance in partial shade conditions, panel-level monitoring showing exactly which panels are producing, no single point of failure—if one microinverter fails only that panel is affected, 15-25 year warranties, and easier system expansion. Microinverters cost 15-20% more than string inverters but provide better long-term reliability and production in challenging installation conditions. We recommend microinverters for complex roof layouts, homes with shading issues, or when panel-level monitoring is desired.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Mounting and Racking Systems
              </h3>
              <p className="text-lg mb-6">
                Mounting systems secure solar panels to your roof while protecting roof integrity and weatherproofing. We use aluminum racking systems engineered specifically for Tucson's climate and weather conditions including monsoon winds. For shingle roofs, we use specialized flashing boots that seal around roof attachments preventing leaks. Attachment points are sealed with premium roofing sealants providing decades of leak-free performance. For tile roofs, we offer tile hook systems that attach to roof deck without penetrating tiles, or carefully remove and replace tiles over traditional mounting points.
              </p>
              <p className="text-lg mb-8">
                All mounting systems are engineered to withstand 120+ mph winds exceeding Tucson's maximum recorded monsoon wind speeds. Structural calculations ensure your roof can safely support panel weight (typically 2-4 pounds per square foot)—well within standard roof load capacities. Rail spacing and panel clamping follows manufacturer specifications ensuring panels remain secure through decades of thermal cycling and weather exposure. We use stainless steel hardware throughout preventing corrosion in Tucson's climate.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Consultation"
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
                Financial Benefits of Residential Solar in Tucson
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                30% Federal Solar Tax Credit
              </h3>
              <p className="text-lg mb-6">
                The federal Investment Tax Credit (ITC) provides 30% of your total solar installation cost as a direct tax credit through December 31, 2032. This is a dollar-for-dollar reduction in taxes owed, not a deduction. For a $20,000 solar system, you receive a $6,000 tax credit reducing your net investment to $14,000. The credit applies to all system components: panels, inverters, mounting equipment, installation labor, permits, and even battery storage when installed with solar. There's no maximum dollar limit on the credit.
              </p>
              <p className="text-lg mb-6">
                The solar tax credit is non-refundable—it can reduce your tax liability to zero but won't generate a refund. However, unused credits carry forward to future tax years indefinitely. Homeowners with lower tax liability can use the credit over multiple years until fully claimed. You claim the credit by filing IRS Form 5695 with your tax return for the year your system was installed and operational. We provide all documentation needed for tax filing and recommend consulting a tax professional to maximize benefits.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Arizona Solar Incentives
              </h3>
              <p className="text-lg mb-6">
                Arizona offers significant solar property tax exemption—solar equipment value is NOT added to your property tax assessment. Even though solar typically increases home value by $15,000-$25,000, you pay no additional property taxes on this added value. This benefit continues as long as you own the home, saving hundreds of dollars annually in avoided property tax increases. Arizona also exempts solar equipment from sales tax in many jurisdictions, reducing upfront installation costs by an additional 5-10%.
              </p>
              <p className="text-lg mb-6">
                Tucson Electric Power and other Arizona utilities offer net metering programs crediting excess solar production at retail electricity rates. When your solar produces more than you consume, excess energy flows to the grid and your meter runs backward, creating bill credits. These credits offset electricity usage during evening hours or cloudy days. Net metering effectively turns the utility grid into a virtual battery, banking your excess production for later use. Combined with the federal tax credit and property tax exemption, total solar incentives in Arizona reduce net installation costs by 35-45%.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Long-Term Savings and Return on Investment
              </h3>
              <p className="text-lg mb-6">
                Tucson homeowners typically save $1,200-$2,400 annually on electricity bills with properly sized solar systems. These savings compound over time as utility rates increase 3-5% annually while your solar system continues producing free electricity. Over a 25-year solar panel lifespan, total electricity savings range from $35,000-$65,000 depending on system size and consumption patterns. Solar installation costs in Tucson average $2.50-$3.50 per watt before incentives, with typical 7kW systems costing $17,500-$24,500 ($12,250-$17,150 after the 30% tax credit).
              </p>
              <p className="text-lg mb-8">
                Payback periods for Tucson solar installations average 6-10 years depending on system size, electricity usage, and financing method. Cash purchases provide the fastest payback and highest ROI. After payback, systems provide 15-20 years of essentially free electricity. Solar also increases home resale value by approximately $15,000-$25,000 based on multiple real estate studies. Homes with solar sell 20% faster and often at premium prices as buyers value reduced electricity costs and environmental benefits. Solar is both a utility cost reduction strategy and a valuable home improvement investment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Get Financial Analysis"
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
        <CommonQuestions questions={residentialSolarCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={residentialSolarInstallationFAQs.faqs} />

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Ready to Go Solar in Tucson?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Join thousands of Tucson homeowners saving money and reducing their carbon footprint with clean solar energy. Contact Intelligent Design today for your free solar consultation and customized system design.
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
                  Available 24/7 for Consultations
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Solar Consultation Now"
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