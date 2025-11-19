import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CommonQuestions } from "@/components/CommonQuestions";
import { solarTaxCreditsCommonQuestions } from "@/data/commonQuestions/solar";
import ServiceFAQ from '@/components/ServiceFAQ';
import { solarTaxCreditsFAQs } from '@/data/faqs/solar';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import SolarTaxCreditsSchema from '@/components/SolarTaxCreditsSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import taxCreditsHero from '@assets/generated_images/Solar_tax_credits_savings_a056e008.webp';

export default function SolarTaxCredits() {
  const description = 'Maximize solar tax credits in Tucson. 30% federal ITC, Arizona incentives, property tax exemptions, net metering benefits. Expert guidance on claiming all available credits. Call (520) 333-2665.';
  const imageUrl = `${SITE_URL}${taxCreditsHero}`;

  return (
    <>
      <MetaHead
        title="Solar Tax Credits Tucson AZ | Federal ITC & Arizona Solar Incentives 2025"
        description={description}
        canonical={`${SITE_URL}/solar-tax-credits-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Solar Tax Credits Tucson AZ | Federal ITC & Arizona Solar Incentives 2025' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/solar-tax-credits-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Solar tax credits and savings for Tucson homeowners' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Solar Tax Credits Tucson AZ | Federal ITC & Arizona Solar Incentives 2025' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Solar tax credits and savings for Tucson homeowners' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <SolarTaxCreditsSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${taxCreditsHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Solar Tax Credits Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                30% Federal Tax Credit | Arizona Property Tax Exemption | Net Metering Credits | Expert Guidance | Maximize Your Savings
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Get Tax Credit Analysis"
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
              Why Choose Intelligent Design for Solar Tax Credit Guidance?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Expert Tax Credit Guidance</p>
                  <p className="text-sm text-gray-600">30% federal ITC knowledge | Documentation support | Filing assistance | Maximize your credits</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Arizona Incentive Specialists</p>
                  <p className="text-sm text-gray-600">Property tax exemption | Net metering setup | Local rebates | State-specific benefits</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Documentation</p>
                  <p className="text-sm text-gray-600">IRS Form 5695 support | Certification documents | Receipt organization | Tax professional coordination</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Financial Analysis Tools</p>
                  <p className="text-sm text-gray-600">Credit calculators | ROI projections | Payback analysis | Multi-year planning</p>
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
                  <p className="font-semibold text-gray-900 mb-1">Ongoing Incentive Updates</p>
                  <p className="text-sm text-gray-600">Policy change monitoring | New incentive alerts | Expiration reminders | Proactive guidance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Solar Tax Credits and Incentives in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Solar tax credits and incentives dramatically reduce the net cost of solar installation, making clean energy affordable for Tucson homeowners. The combination of federal, state, and local incentives can reduce your solar investment by 30-40%, shortening payback periods and improving long-term returns. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we help Tucson families navigate the complex landscape of solar incentives, ensuring you receive every credit and rebate available while providing documentation needed for tax filing and compliance.
              </p>
              <p className="text-lg mb-6">
                Understanding available incentives is crucial for accurate solar financial planning. Many homeowners underestimate total savings by overlooking state and local benefits beyond the well-known federal tax credit. Arizona offers unique advantages including property tax exemptions that save hundreds of dollars annually, sales tax exemptions in some jurisdictions, and utility net metering programs providing ongoing credits. When combined, these incentives typically reduce a $20,000 solar installation to $13,000-$14,000 net cost after the first year, with continuing benefits throughout system lifetime.
              </p>
              <p className="text-lg mb-8">
                Solar incentives change frequently as policies evolve and programs expire. The current federal solar Investment Tax Credit (ITC) provides 30% credit through December 31, 2032, then steps down to 26% in 2033 and 22% in 2034. Acting before stepdowns preserves maximum benefits. Arizona state incentives and utility programs also vary year-to-year based on budgets and policy priorities. Our team stays current on all available programs, helping you time installations to maximize incentives while meeting your energy goals and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Tax Credit Consultation"
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
                Federal Solar Investment Tax Credit (ITC)
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                30% Tax Credit Through 2032
              </h3>
              <p className="text-lg mb-6">
                The federal solar Investment Tax Credit (ITC) provides a dollar-for-dollar tax credit equal to 30% of your total solar installation cost through December 31, 2032. This is not a tax deduction (which reduces taxable income) but a direct credit reducing your actual tax liability. For a $20,000 solar system, you receive a $6,000 tax credit, reducing net cost to $14,000. There is no maximum dollar limit on the credit—larger systems receive proportionally larger credits.
              </p>
              <p className="text-lg mb-6">
                The ITC applies to all solar installation costs including solar panels and mounting hardware, inverters and electrical equipment, labor and installation services, permitting and inspection fees, sales tax on equipment, energy storage systems (when installed with solar), and even solar-powered water heating equipment. This comprehensive coverage means your entire solar project qualifies for the 30% credit, not just equipment costs. Battery storage systems that previously required separate analysis now clearly qualify when installed simultaneously with solar panels.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                How the Solar Tax Credit Works
              </h3>
              <p className="text-lg mb-6">
                The solar tax credit is claimed on your federal income tax return for the year your system was installed and became operational (received Permission to Operate from your utility). You claim the credit using IRS Form 5695 "Residential Energy Credits," which calculates your credit amount and transfers it to your Form 1040. The credit directly reduces taxes owed—if you owe $8,000 in taxes and have a $6,000 solar credit, you pay only $2,000 to the IRS.
              </p>
              <p className="text-lg mb-6">
                The solar tax credit is non-refundable, meaning it can reduce your tax liability to zero but won't generate a refund. If your tax liability is less than your solar credit, you don't lose the unused portion—it carries forward indefinitely to future tax years. For example, if you have a $6,000 credit but only $4,000 tax liability, you use $4,000 this year and carry forward $2,000 to next year's return. This carry-forward provision ensures everyone eventually receives their full credit, even if it takes multiple years.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Eligibility Requirements and Limitations
              </h3>
              <p className="text-lg mb-6">
                To qualify for the federal solar tax credit, you must own your solar system (leased or power purchase agreement systems don't qualify for homeowner credits). The system must be installed at your primary or secondary residence in the United States. New construction homes qualify if you're the first occupant and the solar installation occurs before occupancy. The system must generate electricity for home use—solar installations solely for swimming pool heating or hot tubs don't qualify, though solar electric systems can power pool equipment.
              </p>
              <p className="text-lg mb-8">
                You must have sufficient tax liability to use the credit. The ITC cannot create a negative tax balance or generate refunds. Homeowners with limited tax liability due to low income, high deductions, or retirement status may need multiple years to fully claim large credits. Tax professionals can provide strategies to optimize credit timing including accelerating income, deferring deductions, or timing installations to match higher-income years. We provide all documentation needed for tax filing and recommend consulting qualified tax advisors to maximize your credit benefits.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Calculate Your Tax Credit"
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
                Arizona Solar Incentives and Benefits
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Solar Equipment Property Tax Exemption
              </h3>
              <p className="text-lg mb-6">
                Arizona law exempts solar energy devices from property tax assessments, meaning solar equipment value is NOT added to your property tax calculation. This benefit is substantial—solar installations typically increase home value by $15,000-$25,000, which would normally result in $200-$350 annually in additional property taxes. The exemption saves these costs every year you own the home, providing hundreds to thousands of dollars in cumulative savings over system lifetime.
              </p>
              <p className="text-lg mb-6">
                The property tax exemption continues as long as you own the solar system and the home. If you sell your home, the new owner receives the same exemption benefit. There are no income limits, system size restrictions, or sunset dates on this exemption—it's permanent law in Arizona. This ongoing benefit adds significantly to solar ROI, particularly for homeowners planning long-term residence. When calculating solar payback periods, remember to include annual property tax savings alongside electricity bill reductions.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Net Metering and Utility Credits
              </h3>
              <p className="text-lg mb-6">
                Net metering programs from Tucson Electric Power (TEP) and other Arizona utilities provide ongoing credits for excess solar production. When your solar system produces more electricity than your home consumes, excess energy flows to the utility grid and you receive credits on your electric bill. These credits offset electricity you consume from the grid during evening hours, cloudy days, or high-demand periods. Net metering effectively uses the utility grid as a virtual battery, storing your excess production for later use.
              </p>
              <p className="text-lg mb-6">
                Arizona utilities currently offer favorable net metering policies crediting excess production at or near retail electricity rates. These policies are more generous than many states where excess production receives only wholesale rates (50-70% less than retail). TEP's net metering program allows systems up to 125% of average annual consumption, providing flexibility to offset high summer usage. We handle all net metering applications and interconnection paperwork, ensuring your system is properly configured to receive maximum utility credits.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Sales Tax Exemptions
              </h3>
              <p className="text-lg mb-6">
                Arizona exempts solar energy equipment from state sales tax, reducing upfront installation costs by approximately 5.6% (state rate). Some Arizona cities and counties provide additional solar sales tax exemptions. Tucson, for example, exempts solar equipment from city transaction privilege tax. Combined state and local exemptions can reduce a $20,000 solar installation cost by $1,000-$1,500, providing immediate savings without requiring documentation or claims.
              </p>
              <p className="text-lg mb-8">
                Sales tax exemptions apply automatically at purchase—you don't pay tax on solar equipment and don't need to file for refunds or credits. Exemptions typically cover solar panels, inverters, mounting systems, and installation labor. Some equipment peripherally related to solar (monitoring systems, electrical upgrades not strictly required) may not qualify for exemption. We structure proposals to maximize exempt costs while ensuring transparent pricing and proper tax treatment of all components.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Explore Arizona Incentives"
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
                Maximizing Your Solar Tax Credits and Incentives
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Strategic Timing for Maximum Benefits
              </h3>
              <p className="text-lg mb-6">
                Installation timing affects which incentives you receive and when you claim tax credits. For federal tax credits, systems must be installed and operational (receiving Permission to Operate) during the tax year you claim the credit. Installing in December 2024 allows claiming the credit on your April 2025 tax return. Installing in January 2025 means waiting until April 2026 to claim the credit. For homeowners with high current-year tax liability, accelerating installation may make sense.
              </p>
              <p className="text-lg mb-6">
                The federal ITC remains at 30% through December 31, 2032, providing a generous multi-year window for installation. However, utility net metering policies can change year-to-year. Arizona has seen periodic attempts to reduce net metering benefits. Installing while current favorable policies are guaranteed protects against future policy changes that might reduce value of solar production. Equipment costs may also decline over time, but policy benefits available now may outweigh modest future price reductions.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Documentation and Record Keeping
              </h3>
              <p className="text-lg mb-6">
                Proper documentation is essential for claiming solar tax credits and defending against potential IRS audits. We provide comprehensive documentation packages including itemized invoices showing equipment and labor costs, manufacturer certifications of equipment solar eligibility, installation completion certificates, utility Permission to Operate letters, and warranty documentation. Keep these records for at least seven years after claiming credits—the IRS can audit tax returns for several years.
              </p>
              <p className="text-lg mb-6">
                For Arizona property tax exemptions, most counties automatically apply the exemption based on building permits or utility interconnection records. However, confirming the exemption appears on your property tax assessment is prudent. Review tax assessments annually to ensure solar equipment value isn't included. If incorrectly assessed, contact your county assessor with installation documentation proving solar equipment eligibility for exemption.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Working with Tax Professionals
              </h3>
              <p className="text-lg mb-6">
                While IRS Form 5695 is relatively straightforward, consulting qualified tax professionals ensures you maximize benefits and avoid errors. Tax advisors can help with timing credit claims to match high-income years, coordinating solar credits with other tax credits, understanding alternative minimum tax implications, planning for credit carryforwards, and structuring ownership for maximum benefits. We provide all documentation your tax preparer needs but recommend professional tax advice for optimal results.
              </p>
              <p className="text-lg mb-8">
                For commercial solar installations, tax benefits become more complex with additional options including MACRS depreciation (Modified Accelerated Cost Recovery System), bonus depreciation, and potentially complex ownership structures. Business owners should work with tax advisors experienced in commercial solar tax benefits to navigate these opportunities. We can connect you with solar-experienced tax professionals in Tucson familiar with federal and Arizona incentive programs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Get Incentive Strategy"
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
        <CommonQuestions questions={solarTaxCreditsCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={solarTaxCreditsFAQs.faqs} />


        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Maximize Your Solar Savings with Expert Tax Credit Guidance
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Let Intelligent Design help you navigate solar tax credits and incentives. We provide comprehensive documentation, filing support, and expert guidance ensuring you receive every available benefit.
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
                  triggerText="Schedule Consultation Now"
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