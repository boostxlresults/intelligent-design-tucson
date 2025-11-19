import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import PlumbingMaintenanceSchema from '@/components/PlumbingMaintenanceSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { plumbingMaintenanceFAQs } from '@/data/faqs/plumbing';
import plumbingMaintenanceHero from '@assets/generated_images/Plumbing_maintenance_inspection_service_1be685bc.webp';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import { CommonQuestions } from "@/components/CommonQuestions";
import { plumbingInspectionCommonQuestions } from "@/data/commonQuestions/plumbing";

const description = 'Professional plumbing maintenance and inspection services in Tucson. Preventative care, annual plans, system health checks. Call (520) 333-2665 for comprehensive plumbing maintenance.';
const imageUrl = new URL(plumbingMaintenanceHero, import.meta.url).href;

export default function PlumbingMaintenance() {

  return (
    <>
      <MetaHead
        title="Plumbing Maintenance Tucson AZ | Preventative Inspection & Annual Plans"
        description={description}
        canonical={`${SITE_URL}/plumbing-maintenance-tucson`}
        openGraph={[
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Plumbing Maintenance Tucson AZ | Preventative Inspection & Annual Plans" },
          { property: "og:description", content: description },
          { property: "og:url", content: `${SITE_URL}/plumbing-maintenance-tucson` },
          { property: "og:image", content: imageUrl },
        ]}
        twitter={[
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "Plumbing Maintenance Tucson AZ | Preventative Inspection & Annual Plans" },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: imageUrl },
        ]}
      />
      <GTM />
      <DNIInjector />
      <PlumbingMaintenanceSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${plumbingMaintenanceHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Plumbing Maintenance & Inspection Services in Tucson
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Preventative Plumbing Care | Annual Maintenance Plans | System Health Inspections | Save 70% on Emergency Repairs | 45+ Years Experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Inspection"
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
              Why Choose Intelligent Design for Plumbing Maintenance?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Inspections</p>
                  <p className="text-sm text-gray-600">Complete system evaluation | All fixtures & pipes | Water heater check | Pressure testing | Detailed report</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Affordable Annual Plans</p>
                  <p className="text-sm text-gray-600">Scheduled maintenance | Priority service | 15-20% repair discounts | Extended warranties | Budget-friendly</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Prevent Costly Emergencies</p>
                  <p className="text-sm text-gray-600">Catch problems early | Avoid 80% of emergencies | Save $500-$1,500 yearly | Prevent water damage</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Tucson Hard Water Expertise</p>
                  <p className="text-sm text-gray-600">Combat mineral buildup | Extend equipment life | Local knowledge | 45+ years Tucson experience</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Licensed Master Plumbers</p>
                  <p className="text-sm text-gray-600">Expert technicians | Thorough inspections | Honest assessments | Professional service | No pressure sales</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Reduce Water Bills</p>
                  <p className="text-sm text-gray-600">Find hidden leaks | Fix running toilets | Improve efficiency | Save 15-30% on water costs</p>
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
                Professional Plumbing Maintenance in Tucson
              </h2>
              <p className="text-lg mb-6">
                Preventative plumbing maintenance is the most cost-effective way to protect your Tucson home from expensive emergency repairs and water damage. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've provided comprehensive plumbing maintenance services since 1979, helping thousands of Tucson homeowners avoid costly emergencies through proactive care. Our licensed master plumbers perform thorough system inspections, identify potential problems before they escalate, and keep your plumbing operating efficiently year-round.
              </p>
              <p className="text-lg mb-6">
                Most plumbing emergencies don't happen suddenly—they develop gradually over months or years. Small leaks worsen, mineral deposits accumulate, components wear out, and undetected problems create catastrophic failures. Regular maintenance catches these issues in early stages when repairs are simple and affordable. Statistics show that homes with annual plumbing maintenance experience 70-80% fewer emergency service calls and save an average of $500-$1,500 annually by preventing major repairs and water damage.
              </p>
              <p className="text-lg mb-8">
                Tucson's hard water and aging housing stock make preventative maintenance especially important. Our water contains 12-16 grains of hardness per gallon—among the highest in Arizona—accelerating mineral buildup in pipes, water heaters, and fixtures. Many Tucson homes were built in the 1970s-1990s with copper or galvanized steel piping now reaching end-of-life. Our local expertise helps you navigate these challenges through comprehensive inspections and maintenance plans tailored to Tucson's unique conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Maintenance"
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

        {/* What's Included Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What's Included in Plumbing Maintenance
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Comprehensive System Inspection
              </h3>
              <p className="text-lg mb-6">
                Our maintenance inspections evaluate every component of your plumbing system. We start with all water-using fixtures—sinks, toilets, showers, bathtubs, dishwashers, washing machines, water heaters, and outdoor hose bibs. Each fixture is tested for proper operation, leaks, water pressure, drainage speed, and efficiency. We check shut-off valves to ensure they function properly for future repairs or emergencies. Fixtures showing signs of wear, corrosion, or inefficiency are noted for repair or replacement recommendations.
              </p>
              <p className="text-lg mb-6">
                We inspect all accessible supply lines and drain pipes for leaks, corrosion, proper support, and potential problems. In homes with crawl spaces or basements, we examine pipes for condensation, corrosion, improper installation, or animal damage. Under sinks, we check for cabinet moisture indicating slow leaks. We test water pressure at multiple locations throughout your home—proper pressure is 50-70 PSI; too high causes fixture damage and leaks, too low indicates supply line problems or pressure regulator failure.
              </p>
              <p className="text-lg mb-6">
                Water heater inspection is a critical component. We check for leaks, examine the condition of the tank and connections, test the temperature-pressure relief valve, verify proper temperature settings, listen for unusual noises indicating sediment buildup, and recommend flushing or anode rod replacement when needed. Tucson's hard water creates significant sediment accumulation that reduces efficiency and shortens water heater life—we catch this before it causes failure.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Drain System Evaluation
              </h3>
              <p className="text-lg mb-6">
                We test every drain in your home for proper flow and clearing speed. Slow drains indicate developing clogs from hair, soap scum, grease, mineral deposits, or root intrusion in main lines. Early intervention—clearing minor accumulations before they become complete blockages—prevents emergency drain backups. We inspect visible drain lines and cleanouts for leaks, proper venting, and potential problems.
              </p>
              <p className="text-lg mb-8">
                For homes experiencing recurring drain problems or with trees near sewer lines, we recommend video camera inspections to identify root intrusion, pipe damage, bellied sections, or improper installation. Early detection of sewer line issues allows for planned repairs at your convenience rather than emergency excavation during a catastrophic failure.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Book Inspection"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Benefits of Regular Plumbing Maintenance
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Prevent Costly Emergency Repairs
              </h3>
              <p className="text-lg mb-6">
                Emergency plumbing calls typically cost $300-$800 and often occur at the worst possible times—weekends, holidays, or when you're out of town. Water heater failures flood garages and utility rooms. Slab leaks destroy flooring and create mold. Burst pipes cause thousands in water damage. Sewer backups contaminate homes and require expensive cleanup. Regular maintenance prevents 70-80% of these emergencies by catching problems early.
              </p>
              <p className="text-lg mb-6">
                A $150 annual inspection that identifies a deteriorating water heater anode rod and recommends replacement ($200) prevents a $1,500 emergency water heater replacement plus $500-$2,000 in water damage cleanup. Detecting a small slab leak early ($400 repair) prevents $5,000-$15,000 in foundation damage and flooring replacement. The math is simple—preventative maintenance saves exponentially more than it costs.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Extend Equipment Lifespan
              </h3>
              <p className="text-lg mb-6">
                Plumbing components have expected lifespans, but maintenance significantly extends them. Water heaters typically last 8-12 years in Tucson, but annual flushing and anode rod replacement can extend life to 15+ years—saving $1,500-$3,500 in premature replacement costs. Toilets and faucets last 15-20 years with minor maintenance versus 8-12 years when neglected. Properly maintained drain lines last decades versus requiring frequent clearing or replacement when mineral deposits and roots accumulate.
              </p>
              <p className="text-lg mb-6">
                Our hard water accelerates wear on all plumbing components. Mineral deposits clog aerators, coat heating elements, corrode pipes, and reduce efficiency. Maintenance includes cleaning aerators, descaling components, and identifying areas where water softeners or filtration would protect your investment. These simple interventions preserve your plumbing infrastructure for decades.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Reduce Water and Energy Bills
              </h3>
              <p className="text-lg mb-8">
                Hidden water waste costs hundreds annually. A running toilet wastes 200+ gallons daily—$50-$100 monthly. Dripping faucets waste 3,000+ gallons yearly. Leaking water heaters waste water and energy. Water pressure that's too high stresses fixtures and creates leaks. Our inspections identify all sources of waste and fix them, typically reducing water bills 15-30%. For a family with a $60 monthly water bill, maintenance-driven improvements save $10-$18 monthly—$120-$216 yearly—more than paying for annual maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Start Saving: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Plans Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Annual Maintenance Plans
              </h2>
              <p className="text-lg mb-6">
                Our annual maintenance plans provide comprehensive protection for your plumbing system at predictable, budget-friendly prices. Plans include one or two scheduled inspections annually (depending on plan level), priority emergency service when you need it, 15-20% discount on all repairs and installations, extended warranties on work performed, no dispatch fees for service calls, and detailed maintenance records tracking your system's health over time.
              </p>
              <p className="text-lg mb-6">
                Plans are customized to your home's needs. Newer homes (under 15 years) with properly functioning systems typically need annual inspections. Older homes (20+ years), homes with previous plumbing issues, properties with well water or no water softener, and homes with valuable landscaping over sewer lines benefit from semi-annual inspections. We help you choose the right plan level for your situation.
              </p>
              <p className="text-lg mb-6">
                Maintenance plan members receive priority service during emergencies—when your water heater fails on a holiday weekend or you have a slab leak, you're moved to the front of the schedule. The 15-20% repair discount alone often pays for plan costs. A $500 repair costs plan members $400-$425, saving $75-$100. Over time, the savings compound significantly.
              </p>
              <p className="text-lg mb-8">
                Plans provide peace of mind. You're not wondering when to call for service—we reach out to schedule your inspections. You're not surprised by major failures—we catch problems early. You're not paying emergency rates—you receive discounted pricing. Your plumbing system receives professional oversight from technicians who know your home's history and unique needs. For most homeowners, plans save $500-$1,500 annually while ensuring optimal system performance.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Join Maintenance Plan"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tucson-Specific Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Plumbing Maintenance for Tucson Homes
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Combating Tucson's Hard Water
              </h3>
              <p className="text-lg mb-6">
                Tucson's municipal water contains 12-16 grains of hardness per gallon, consisting primarily of calcium and magnesium dissolved from our aquifer's limestone geology. This creates the hardest water in Arizona and among the hardest in the nation. Hard water accelerates plumbing problems: mineral deposits clog aerators and shower heads within months, scale builds inside pipes reducing water flow, water heater sediment accumulates rapidly, fixtures and appliances wear out 30-50% faster, and copper pipes develop pinhole leaks from internal corrosion.
              </p>
              <p className="text-lg mb-6">
                Our maintenance inspections specifically address hard water damage. We clean or replace clogged aerators, inspect water heaters for excessive sediment requiring flushing, check for scale buildup in supply lines, examine fixtures for mineral damage, and recommend water softeners or filtration systems when beneficial. Homes without water softeners require more frequent maintenance—semi-annual inspections catch hard water damage before it causes failures.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Aging Infrastructure Challenges
              </h3>
              <p className="text-lg mb-6">
                Many Tucson neighborhoods were developed in the 1970s-1990s, meaning plumbing systems are 30-50 years old—approaching or exceeding expected lifespans. Copper supply lines from this era develop pinhole leaks from internal pitting corrosion accelerated by hard water. Galvanized steel pipes corrode from the inside, restricting flow and contaminating water. Clay or cast iron sewer lines crack, separate at joints, and suffer root intrusion. Older fixtures waste water and fail frequently.
              </p>
              <p className="text-lg mb-8">
                Maintenance for older homes focuses on identifying pipes and fixtures nearing end-of-life before catastrophic failures. We look for telltale signs: frequent small leaks indicating widespread corrosion, reduced water pressure from pipe scale, rust-colored water from corroding pipes, recurring drain problems from deteriorating sewer lines, and inefficient fixtures. Early detection allows for planned repiping or replacements at your convenience rather than emergency situations causing water damage and disruption.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section5">
                    <Phone className="w-5 h-5 mr-2" />
                    Protect Your Home: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Intelligent Design for Plumbing Maintenance?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has provided plumbing services to Tucson families since 1979. We're a family and veteran-owned business with over 45 years of local experience. Our licensed master plumbers understand Tucson's unique plumbing challenges—hard water damage, aging infrastructure, desert landscaping over sewer lines, and monsoon-related issues. We've maintained plumbing systems in thousands of Tucson homes and know what problems to expect at different home ages and locations.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on thorough inspections, honest assessments, and exceptional service. Our maintenance technicians are trained to identify problems, explain them clearly, provide repair cost estimates, and help you make informed decisions. We never use pressure sales tactics or recommend unnecessary work. Our goal is building long-term relationships through trustworthy service, not maximizing single-visit revenue.
              </p>
              <p className="text-lg mb-8">
                Our comprehensive approach includes detailed written reports after every inspection documenting findings, recommendations, and timeline for suggested work. You receive photos of concerning areas, explanations of what we found and why it matters, and clear pricing for recommended repairs. This transparency helps you budget for necessary work and understand your plumbing system's condition. Many customers stay with us for decades because they trust our guidance and appreciate our professional, no-pressure approach.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Today"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section6"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={plumbingInspectionCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={plumbingMaintenanceFAQs.faqs} />

        {/* Business Information Section (NAP) */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Plumbing Maintenance Today
              </h2>
              <div className="bg-card p-8 rounded-lg border text-center">
                <h3 className="text-2xl font-bold mb-4" data-testid="text-business-name">
                  Intelligent Design Air Conditioning, Plumbing, Solar, & Electric
                </h3>
                <div className="space-y-2 text-lg mb-6">
                  <p data-testid="text-address-line1">1145 E Fort Lowell Rd</p>
                  <p data-testid="text-address-line2">Tucson, AZ 85719</p>
                  <p className="text-xl font-bold text-primary" data-testid="text-phone">(520) 333-2665</p>
                  <p className="text-sm text-muted-foreground" data-testid="text-hours">Monday-Friday: 7:00 AM - 7:00 PM | Saturday: 8:00 AM - 5:00 PM</p>
                  <p className="text-sm font-semibold text-green-700" data-testid="text-emergency">24/7 Emergency Service Available</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <p className="text-muted-foreground max-w-2xl">
                    Serving Tucson and surrounding areas including Oro Valley, Marana, Sahuarita, Vail, and Green Valley. Licensed, bonded, and insured. ROC #171687
                  </p>
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