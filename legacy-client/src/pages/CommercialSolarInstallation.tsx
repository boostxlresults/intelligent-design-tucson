import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CommonQuestions } from "@/components/CommonQuestions";
import { commercialSolarCommonQuestions } from "@/data/commonQuestions/solar";
import ServiceFAQ from '@/components/ServiceFAQ';
import { commercialSolarInstallationFAQs } from '@/data/faqs/solar';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import CommercialSolarInstallationSchema from '@/components/CommercialSolarInstallationSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import commercialSolarHero from '@assets/generated_images/Commercial_solar_panel_installation_a8b637e2.webp';

export default function CommercialSolarInstallation() {
  const description = 'Professional commercial solar installation in Tucson. Reduce operating costs, maximize tax incentives, and achieve energy independence for your business. 45+ years experience. Call (520) 333-2665.';
  const imageUrl = `${SITE_URL}${commercialSolarHero}`;

  return (
    <>
      <MetaHead
        title="Commercial Solar Installation Tucson AZ | Business Solar Panel Systems"
        description={description}
        canonical={`${SITE_URL}/commercial-solar-installation-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Commercial Solar Installation Tucson AZ | Business Solar Panel Systems' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/commercial-solar-installation-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional commercial solar panel installation on Tucson business' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Commercial Solar Installation Tucson AZ | Business Solar Panel Systems' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional commercial solar panel installation on Tucson business' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <CommercialSolarInstallationSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${commercialSolarHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Commercial Solar Installation Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Reduce Operating Costs | 30% Tax Credit + Accelerated Depreciation | Energy Independence | ROI Analysis | 45+ Years Experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Business Consultation"
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
              Why Choose Intelligent Design for Commercial Solar Installation?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Maximize Financial Returns</p>
                  <p className="text-sm text-gray-600">30% federal tax credit | MACRS depreciation | Utility rebates | 4-8 year payback periods</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Commercial-Grade Equipment</p>
                  <p className="text-sm text-gray-600">High-efficiency panels | Commercial inverters | Engineered mounting | 25-year warranties</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Minimal Business Disruption</p>
                  <p className="text-sm text-gray-600">Weekend/after-hours installation | Phased deployment | Brief electrical shutdowns | Rapid completion</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Project Management</p>
                  <p className="text-sm text-gray-600">Permits & approvals | Utility coordination | Financing assistance | Dedicated project manager</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Commercial expertise | Trusted since 1979</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Long-Term Support & Monitoring</p>
                  <p className="text-sm text-gray-600">System monitoring | Maintenance plans | Priority service | Production guarantees</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Commercial Solar Installation in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Tucson businesses face rising electricity costs that directly impact profitability and competitiveness. Commercial solar installation provides immediate operating cost reduction, protection from future utility rate increases, and demonstrates environmental leadership that attracts eco-conscious customers and employees. With Tucson's abundant sunshine—averaging 350+ sunny days annually—commercial solar systems produce consistent, predictable energy for decades. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we specialize in commercial solar installations ranging from small businesses to large industrial facilities, delivering turnkey solutions that maximize financial returns while minimizing business disruption.
              </p>
              <p className="text-lg mb-6">
                Commercial solar installations require different expertise than residential projects. Building codes are more stringent, electrical systems are more complex, and installations must accommodate three-phase power, demand charges, and commercial rate structures. Our commercial solar team includes licensed electricians, structural engineers, and project managers who navigate these complexities seamlessly. We conduct comprehensive energy audits analyzing your facility's consumption patterns, demand charges, and rate schedules to design systems optimized for your specific business needs and utility structure.
              </p>
              <p className="text-lg mb-8">
                Our commercial installations leverage federal tax incentives providing 30% Investment Tax Credit (ITC) and Modified Accelerated Cost Recovery System (MACRS) allowing accelerated depreciation of solar assets. These combined incentives typically reduce net solar investment by 50-70%, dramatically improving ROI. We provide detailed financial analyses showing projected energy savings, tax benefits, cash flow impacts, and payback periods. Most Tucson commercial solar installations achieve 4-8 year payback with 25+ years of savings—making solar one of the highest-return capital investments available to businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Request Business Solar Analysis"
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
                Commercial Solar Installation Process
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Energy Audit & Site Assessment
              </h3>
              <p className="text-lg mb-6">
                Commercial solar projects begin with comprehensive energy audits examining your facility's electricity consumption, demand patterns, and rate structures. We analyze 12-24 months of utility bills to understand seasonal variations, peak demand periods, and opportunities for demand charge reduction. Commercial electricity rates are complex—many Tucson businesses pay demand charges based on peak 15-minute usage intervals, time-of-use rates with higher peak-period pricing, and various utility fees. Solar systems designed without considering these rate structures may not deliver optimal financial returns.
              </p>
              <p className="text-lg mb-6">
                Our site assessment evaluates available roof and ground space for solar installations. We examine roof structural capacity, age, condition, and remaining useful life. Installing solar on roofs nearing replacement age is inefficient—we recommend roof replacement before solar installation to avoid costly panel removal and reinstallation. For ground-mount systems, we assess available land, orientation, shading, soil conditions, and local zoning requirements. We use drone surveys and 3D modeling to map entire facilities, identifying optimal solar locations while avoiding shaded areas and maintaining accessibility for roof maintenance.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Custom System Design & Engineering
              </h3>
              <p className="text-lg mb-6">
                Commercial solar system design requires electrical and structural engineering expertise. Our engineers design systems matching your facility's electrical infrastructure—whether single-phase or three-phase power, voltage levels, and electrical panel capacity. We model energy production using industry-standard software that accounts for Tucson's solar resource, seasonal variations, system losses, and shading. System sizing balances multiple factors: available space, budget constraints, energy offset goals, utility rate structures, and interconnection limitations.
              </p>
              <p className="text-lg mb-6">
                Structural engineering ensures your building can safely support solar panel weight and wind loads. Commercial roofs vary widely—flat roofs with ballasted mounts, metal roofs with standing seam clamps, or pitched roofs with penetrating mounts. Each requires specific engineering approaches. We provide stamped structural calculations demonstrating code compliance and building safety. Our designs include detailed electrical one-line diagrams, equipment specifications, mounting details, and installation procedures meeting all Tucson building codes and National Electrical Code requirements.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Financing & Incentive Maximization
              </h3>
              <p className="text-lg mb-6">
                Commercial solar financing options include cash purchase, solar loans, equipment financing, and power purchase agreements (PPAs). Cash purchases provide highest long-term returns and direct ownership of all tax benefits. Commercial solar loans offer low interest rates (3-7% APR) with terms matching equipment life, creating positive cash flow from energy savings exceeding loan payments. Equipment leases and PPAs allow solar adoption with minimal upfront investment but sacrifice tax benefits and ownership advantages to third-party financiers.
              </p>
              <p className="text-lg mb-8">
                We help businesses maximize available incentives including federal 30% Investment Tax Credit, MACRS accelerated depreciation allowing 85% of system cost to be depreciated over 5 years, bonus depreciation potentially deducting 60% of costs in year one, and utility rebates when available. For a $100,000 commercial solar installation, combined incentives can reduce net cost to $30,000-$40,000 after tax benefits. We provide detailed financial models showing tax benefit timing, cash flow projections, and ROI calculations for different financing scenarios.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Installation & Commissioning
              </h3>
              <p className="text-lg mb-6">
                Commercial solar installation requires coordinated project management minimizing business disruption. We schedule installation during low-activity periods—weekends, holidays, or after-hours when appropriate. Electrical shutdowns required for interconnection are planned weeks in advance, coordinated with your operations team, and typically completed within 2-4 hours. Installation timelines vary by system size: small commercial systems (20-50kW) install in 3-7 days, medium systems (50-200kW) take 1-3 weeks, and large installations (200kW+) may require 3-8 weeks depending on complexity.
              </p>
              <p className="text-lg mb-6">
                Installation includes mounting system installation with proper waterproofing, solar panel installation and wiring, inverter installation and configuration, electrical integration and safety equipment, monitoring system setup, and comprehensive testing. We employ safety protocols including fall protection, electrical lockout/tagout procedures, and site security. Daily progress updates keep you informed of timeline, any issues encountered, and upcoming milestones. Upon completion, we conduct commissioning tests verifying system performance, safety compliance, and proper operation before turning the system over to your operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Project Consultation"
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
                Commercial Solar Financial Benefits
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Federal Tax Incentives for Commercial Solar
              </h3>
              <p className="text-lg mb-6">
                The federal Investment Tax Credit (ITC) provides 30% of total commercial solar installation costs as a direct tax credit through 2032, then stepping down to 26% in 2033 and 22% in 2034. This dollar-for-dollar tax reduction significantly improves solar economics. For a $100,000 system, the ITC provides $30,000 in tax credits. Unlike deductions that reduce taxable income, tax credits directly reduce taxes owed, making them more valuable financially.
              </p>
              <p className="text-lg mb-6">
                Modified Accelerated Cost Recovery System (MACRS) allows businesses to depreciate 85% of solar system costs over 5 years using accelerated depreciation schedules. This depreciation creates substantial tax deductions reducing ordinary business income. For profitable businesses in high tax brackets, MACRS depreciation can provide tax savings of 15-25% of system cost. Bonus depreciation, when available, allows businesses to deduct 60% or more of system costs in the first year, creating immediate cash flow benefits from tax savings.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Electricity Cost Savings & ROI
              </h3>
              <p className="text-lg mb-6">
                Commercial solar systems typically offset 40-100% of facility electricity costs depending on available space and energy usage. Tucson commercial electricity rates range from $0.08-$0.15 per kWh depending on rate schedule, with demand charges adding $10-$20 per kW of peak demand monthly. A 100kW commercial solar system in Tucson produces approximately 160,000-180,000 kWh annually worth $13,000-$21,000 at current rates. Over 25 years, this system generates $325,000-$525,000 in electricity savings accounting for 3-4% annual utility rate increases.
              </p>
              <p className="text-lg mb-8">
                Return on investment for Tucson commercial solar averages 200-400% over system lifetime. After federal tax incentives reduce net investment by 50-70%, most commercial solar installations achieve 4-8 year payback periods. Following payback, systems provide 17-21 years of free electricity and protection from utility rate increases. Solar also provides budget certainty—businesses can predict electricity costs decades into the future rather than facing annual rate increases averaging 3-5%. This financial predictability assists with long-term business planning and budgeting.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Get Financial Analysis"
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

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={commercialSolarCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={commercialSolarInstallationFAQs.faqs} />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Ready to Reduce Your Business Energy Costs?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Join Tucson businesses saving thousands annually with commercial solar energy. Contact Intelligent Design today for your free energy audit and customized solar proposal with detailed ROI analysis.
              </p>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Serving Tucson and Surrounding Business Communities
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
                  Available 24/7 for Business Consultations
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Business Consultation Now"
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