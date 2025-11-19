import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CommonQuestions } from "@/components/CommonQuestions";
import { solarCostsCommonQuestions } from "@/data/commonQuestions/solar";
import ServiceFAQ from '@/components/ServiceFAQ';
import { solarPanelCostsFAQs } from '@/data/faqs/solar';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import SolarPanelCostsSchema from '@/components/SolarPanelCostsSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import costAnalysisHero from '@assets/generated_images/Solar_panel_costs_investment_bb17047d.webp';

export default function SolarPanelCosts() {
  const description = 'Understand solar panel costs in Tucson. Detailed pricing breakdown, ROI analysis, payback periods, financing options. Transparent pricing from Tucson\'s trusted solar experts. Call (520) 333-2665.';
  const imageUrl = `${SITE_URL}${costAnalysisHero}`;

  return (
    <>
      <MetaHead
        title="Solar Panel Costs Tucson AZ | Solar Installation Pricing & ROI Analysis 2025"
        description={description}
        canonical={`${SITE_URL}/solar-panel-costs-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Solar Panel Costs Tucson AZ | Solar Installation Pricing & ROI Analysis 2025' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/solar-panel-costs-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Solar panel cost analysis and investment planning in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Solar Panel Costs Tucson AZ | Solar Installation Pricing & ROI Analysis 2025' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Solar panel cost analysis and investment planning in Tucson' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <SolarPanelCostsSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${costAnalysisHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Solar Panel Costs Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Transparent Pricing | Detailed Cost Breakdown | ROI Analysis | Flexible Financing | 45+ Years Trusted Service
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Get Free Quote"
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
              Why Choose Intelligent Design for Solar Cost Analysis?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Transparent Pricing</p>
                  <p className="text-sm text-gray-600">Detailed cost breakdowns | No hidden fees | Clear proposals | Itemized quotes</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive ROI Analysis</p>
                  <p className="text-sm text-gray-600">Payback calculations | Lifetime savings | Production guarantees | Financial projections</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Flexible Financing Options</p>
                  <p className="text-sm text-gray-600">Low-APR solar loans | $0 down options | Cash discounts | Multiple payment plans</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Premium Equipment Value</p>
                  <p className="text-sm text-gray-600">Tier-1 panels | 25-year warranties | High efficiency | Best-in-class inverters</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Expertise</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Local pricing knowledge | Trusted since 1979</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Installation Services</p>
                  <p className="text-sm text-gray-600">All-inclusive pricing | Professional installation | Permits included | No surprise costs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Understanding Solar Panel Costs in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Solar panel costs have decreased dramatically over the past decade, making clean energy affordable for most Tucson homeowners. Current residential solar installation costs in Tucson range from $2.50-$3.50 per watt before incentives, with typical 6-10kW systems costing $15,000-$35,000. After the 30% federal solar tax credit, net costs drop to $10,500-$24,500. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we provide transparent pricing, detailed cost breakdowns, and comprehensive financial analysis helping Tucson families understand their solar investment and maximize return on investment since 1979.
              </p>
              <p className="text-lg mb-6">
                Solar costs vary significantly based on system size, equipment quality, roof complexity, and installation requirements. Understanding what drives costs helps homeowners make informed decisions balancing budget constraints with long-term performance and value. Cheapest options often use economy-grade panels with shorter warranties, basic inverters, and minimal monitoring. Premium installations feature tier-1 panels with 25-year performance warranties, high-efficiency inverters, comprehensive monitoring, and professional engineering. The difference in equipment quality affects energy production, longevity, and total lifetime value.
              </p>
              <p className="text-lg mb-8">
                When evaluating solar costs, consider total lifetime value rather than just upfront price. A $15,000 premium system producing 15% more energy over 25 years generates $5,000-$8,000 more electricity savings than a $13,000 economy system. Better warranties reduce replacement costs. Higher-quality installations require less maintenance and deliver more reliable performance. Our detailed proposals compare equipment tiers with projected production, savings, and total lifetime value, helping you select the best balance of cost and performance for your situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Get Detailed Quote"
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
                Solar Installation Cost Breakdown
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Equipment Costs (55-60% of Total)
              </h3>
              <p className="text-lg mb-6">
                Solar panels account for 35-40% of total installation costs. Premium tier-1 panels from manufacturers like Q Cells, LG, or REC cost $0.90-$1.20 per watt. Value-tier panels cost $0.60-$0.80 per watt. For a 7kW system, panel costs range from $4,200 (value) to $8,400 (premium). Premium panels justify higher costs through better efficiency (using less roof space), superior warranties (25-30 years vs. 10-15 years), proven reliability, and higher energy production over lifetime.
              </p>
              <p className="text-lg mb-6">
                Inverters convert solar DC electricity to usable AC power and represent 15-20% of system costs. String inverters for 7kW systems cost $1,200-$2,500. Microinverter systems cost $2,500-$3,500. Microinverters cost more but provide panel-level optimization, superior monitoring, longer warranties (15-25 years vs. 10-15 years), and better performance in partial shade. Mounting hardware and racking systems add $700-$1,500 depending on roof type and installation complexity. Monitoring systems, disconnects, and electrical equipment add another $500-$1,000.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Installation Labor (25-30% of Total)
              </h3>
              <p className="text-lg mb-6">
                Professional installation labor accounts for 25-30% of total solar costs. This includes project management, system engineering and design, NABCEP-certified installer labor, roof work and mounting installation, electrical wiring and integration, system testing and commissioning, and safety equipment and insurance. Labor costs vary based on roof complexity—simple single-plane roofs cost less than multi-plane tile or metal roofs requiring custom mounting solutions.
              </p>
              <p className="text-lg mb-6">
                Experienced, certified installers cost more than unlicensed crews but deliver superior workmanship, warranty compliance, safety, and long-term reliability. Poor installation voids equipment warranties, creates roof leaks, causes electrical problems, and reduces system performance. We employ NABCEP-certified installers with extensive Tucson-specific experience. Our installation quality ensures optimal performance, warranty protection, and decades of trouble-free operation. The modest premium for expert installation prevents costly problems and maximizes long-term value.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Permits, Inspections, and Interconnection (5-10% of Total)
              </h3>
              <p className="text-lg mb-6">
                Permitting and inspection costs include building permit fees ($200-$600 depending on jurisdiction), electrical permit fees ($100-$300), utility interconnection applications ($100-$400), engineering stamps and structural calculations ($200-$500), and inspection fees. Total permitting costs typically range from $600-$1,800. These regulatory requirements ensure safe, code-compliant installations that meet local building standards and utility requirements.
              </p>
              <p className="text-lg mb-8">
                We handle all permitting and inspection coordination, including preparing permit applications with engineered plans, submitting to building departments and utilities, scheduling required inspections, addressing inspector questions or requirements, and obtaining final approvals and Permission to Operate. This comprehensive service eliminates homeowner burden navigating bureaucratic processes and ensures compliant installations qualifying for incentives and warranties. Permitting expertise is included in our installation pricing—no surprise fees or delays.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Overhead and Profit Margin (10-15% of Total)
              </h3>
              <p className="text-lg mb-6">
                Contractor overhead and profit margin cover business operations including licensing and insurance, warranty support and service, customer support and project management, continuing education and certifications, equipment and tools, and administrative costs. Established companies with strong reputations, comprehensive warranties, and professional service command modest premium pricing justified by superior quality, reliability, and support.
              </p>
              <p className="text-lg mb-8">
                Lowest-price contractors often cut corners on equipment quality, installation standards, permits, insurance, or support services. These shortcuts create long-term problems including voided warranties, code violations, poor performance, and bankruptcy leaving homeowners without warranty support. Our pricing reflects 45+ years in business, 22,000+ satisfied customers, comprehensive warranties, and ongoing support. This proven track record ensures your solar investment is protected by a stable, reputable company standing behind its work for decades.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Request Cost Analysis"
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
                Solar Return on Investment and Payback Periods
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Understanding Solar ROI in Tucson
              </h3>
              <p className="text-lg mb-6">
                Solar ROI in Tucson is excellent due to 350+ sunny days annually, high electricity rates, and generous incentives. Typical Tucson residential solar installations provide 12-20% annual returns—far exceeding most traditional investments. For a $20,000 system (net $14,000 after federal tax credit), annual electricity savings of $1,400-$2,000 represent 10-14% return. Add in property value increase ($15,000-$20,000) realized upon home sale, and total returns significantly exceed initial investment.
              </p>
              <p className="text-lg mb-6">
                Solar payback periods in Tucson average 6-10 years depending on system size, electricity consumption, and financing method. Cash purchases provide fastest payback. Solar loans extend payback periods slightly but allow $0 down installation. After payback, systems provide 15-20 years of essentially free electricity. Over 25-year panel lifespan, total electricity savings typically range from $35,000-$70,000, representing 250-400% return on net investment after tax credits.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Factors Affecting Solar ROI
              </h3>
              <p className="text-lg mb-6">
                Several factors influence solar ROI including current electricity consumption (higher usage provides faster payback), electricity rate escalation (Arizona rates increase 3-5% annually), system size and cost (larger systems have better economics per watt), equipment quality and efficiency (premium equipment produces more electricity), available incentives (federal credits, state exemptions, utility rebates), and financing terms (cash vs. loans). We analyze these factors providing customized ROI projections specific to your home, consumption, and financial situation.
              </p>
              <p className="text-lg mb-6">
                Tucson's exceptional solar resource means systems produce more electricity per kW than most US locations. A 7kW Tucson system produces approximately 11,000-12,000 kWh annually—enough to offset 80-100% of average home electricity usage. This high production combined with rising utility rates creates compelling economics. Even conservative projections show positive ROI within 6-8 years. Optimistic scenarios with 5% annual electricity rate escalation show paybacks as fast as 4-6 years.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Long-Term Value and Home Resale
              </h3>
              <p className="text-lg mb-6">
                Solar installations increase home resale value by approximately $15,000-$25,000 based on multiple real estate studies. This value increase is roughly $3-$4 per watt of installed capacity. A 7kW system adds $21,000-$28,000 to home value. Importantly, Arizona's property tax exemption means you don't pay property taxes on this added value. Solar homes sell 20% faster than comparable non-solar homes as buyers value reduced electricity costs and environmental benefits.
              </p>
              <p className="text-lg mb-8">
                Long-term solar value extends beyond direct electricity savings. Solar provides price certainty—your energy costs are locked in while utility rates increase unpredictably. This protection against rate increases is particularly valuable during inflationary periods. Environmental benefits include carbon footprint reduction equivalent to planting 100-150 trees annually. Energy independence provides resilience against grid outages (especially with battery storage). These intangible benefits complement financial returns, making solar attractive even beyond pure economics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Get ROI Projection"
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
                Solar Financing Options
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Cash Purchase
              </h3>
              <p className="text-lg mb-6">
                Cash purchases provide the fastest payback periods and highest lifetime returns. You pay the full installation cost upfront, receive the 30% federal tax credit, and immediately begin saving on electricity bills. With no interest charges or fees, all electricity savings contribute directly to ROI. Tucson cash purchases typically pay back in 5-8 years with 25+ year total returns of $40,000-$80,000. Cash buyers often receive installation discounts reducing net costs by 5-10%.
              </p>
              <p className="text-lg mb-6">
                Cash purchases make sense for homeowners with available funds, high current electricity bills creating rapid payback, tax liability sufficient to use full 30% credit in one year, and long-term homeownership plans maximizing lifetime value. We offer cash discount pricing making this option even more attractive. While not everyone has $15,000-$25,000 available for solar investment, those who do enjoy exceptional returns and immediate electricity bill reductions.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Solar Loans
              </h3>
              <p className="text-lg mb-6">
                Solar loans enable $0 down solar installation with monthly payments typically lower than current electricity bills, creating positive cash flow from day one. Specialized solar lenders offer competitive rates (3-7% APR) with 10-25 year terms. You own the system, qualify for full federal tax credit, and receive all state/local benefits. Unlike leases or PPAs, ownership provides maximum long-term value including home equity increase and electricity savings after loan payoff.
              </p>
              <p className="text-lg mb-8">
                Solar loan payments are structured to be less than electricity savings, meaning solar immediately reduces total housing costs. For example, a homeowner paying $180 monthly for electricity might have a $140 solar loan payment while producing $180 worth of electricity—a net $40 monthly savings. After loan payoff in 10-20 years, all electricity savings are pure benefit. We work with multiple solar lenders finding best rates and terms for your financial situation, making solar affordable for nearly any budget.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Explore Financing"
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
        <CommonQuestions questions={solarCostsCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={solarPanelCostsFAQs.faqs} />


        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Get Transparent Solar Pricing and Expert Analysis
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Discover exactly how much solar will cost for your Tucson home with detailed quotes, ROI analysis, and flexible financing options from Intelligent Design. Our transparent pricing and expert guidance ensure you make confident, informed decisions.
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
                  triggerText="Get Free Quote Now"
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