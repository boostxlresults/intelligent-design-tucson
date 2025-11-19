import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { waterHeaterFlushFAQs } from '@/data/faqs/plumbing';
import waterHeaterFlushHero from '@assets/generated_images/Water_heater_flush_maintenance_d57742fc.webp';
import WaterHeaterFlushSchema from '@/components/WaterHeaterFlushSchema';
import { CommonQuestions } from "@/components/CommonQuestions";
import { waterHeaterCommonQuestions } from "@/data/commonQuestions/plumbing";

export default function WaterHeaterFlush() {
  const description = 'Professional water heater flush and maintenance in Tucson. Extend lifespan, improve efficiency, prevent breakdowns. Combat hard water buildup. Call (520) 333-2665 for service.';
  const imageUrl = `${SITE_URL}${waterHeaterFlushHero}`;

  return (
    <>
      <MetaHead
        title="Water Heater Flush & Maintenance Tucson AZ | Extend Heater Lifespan"
        description={description}
        canonical={`${SITE_URL}/water-heater-flush-tucson`}
        openGraph={[
          { property: 'og:title', content: 'Water Heater Flush & Maintenance Tucson AZ | Extend Lifespan' },
          { property: 'og:description', content: 'Professional water heater flush and maintenance in Tucson. Combat hard water, extend lifespan, improve efficiency. Over 22,000 5-star reviews.' },
          { property: 'og:url', content: `${SITE_URL}/water-heater-flush-tucson` },
          { property: 'og:type', content: 'website' },
          { property: 'og:image', content: imageUrl },
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Water Heater Flush & Maintenance Tucson AZ | Extend Lifespan' },
          { name: 'twitter:description', content: 'Professional water heater flush and maintenance in Tucson. Combat hard water, extend lifespan, improve efficiency. Over 22,000 5-star reviews.' },
          { name: 'twitter:image', content: imageUrl },
        ]}
      />
      <GTM />
      <DNIInjector />
      <WaterHeaterFlushSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${waterHeaterFlushHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Water Heater Flush & Maintenance in Tucson, AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Combat Hard Water Buildup | Extend Lifespan 3-5 Years | Improve Efficiency | Prevent Breakdowns | Annual Maintenance Plans
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Flush Service"
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
              Why Choose Intelligent Design for Water Heater Maintenance?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Hard Water Expertise</p>
                  <p className="text-sm text-gray-600">Tucson-specific service | Power flushing for mineral removal | 45+ years local experience | Water softener recommendations</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Maintenance</p>
                  <p className="text-sm text-gray-600">Not just flushing | Anode rod inspection | Safety testing | Component checks | Full service included</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Extend Lifespan 3-5 Years</p>
                  <p className="text-sm text-gray-600">Proven results | Prevent premature failure | Save thousands on replacement | Better efficiency maintained</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Professional Equipment</p>
                  <p className="text-sm text-gray-600">Power flush systems | Descaling equipment for tankless | Licensed plumbers | All brands serviced</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Annual Maintenance Plans</p>
                  <p className="text-sm text-gray-600">Never forget service | Priority scheduling | Discounted rates | Complete peace of mind</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Affordable Investment</p>
                  <p className="text-sm text-gray-600">$100-$200 service saves thousands | Improves efficiency | Lowers energy bills | Prevents breakdowns</p>
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
                Professional Water Heater Flush & Maintenance Services
              </h2>
              <p className="text-lg mb-6">
                Water heater maintenance is one of the most cost-effective investments you can make in your Tucson home. A simple annual flush service costs $100-$200 but extends your water heater's lifespan by 3-5 years, maintains peak efficiency, prevents expensive breakdowns, and saves money on energy bills. For Tucson homeowners dealing with extremely hard water, regular maintenance isn't optional—it's essential for protecting your water heater investment.
              </p>
              <p className="text-lg mb-6">
                Tucson's water contains 12-16 grains per gallon of hardness minerals (calcium and magnesium carbonates). For context, water over 7 grains per gallon is considered "very hard." Our exceptionally hard water creates rapid sediment buildup in water heaters—much faster than the national average. This sediment accumulates at the tank bottom, acting as insulation between the heat source and water. The result: reduced efficiency, increased energy consumption, shortened lifespan, noisy operation, and eventual component failure.
              </p>
              <p className="text-lg mb-8">
                At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've provided water heater maintenance services in Tucson since 1979. Our licensed plumbers understand exactly how Tucson's hard water affects water heaters and what it takes to keep them operating efficiently for their full lifespan—and beyond. We use professional power flushing equipment that completely removes sediment (not just partial flushing), inspect critical components like anode rods that protect against corrosion, test safety devices, and provide comprehensive service that goes far beyond a simple drain and flush.
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

        {/* Why Maintenance Matters Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Water Heater Maintenance Matters in Tucson
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Combating Tucson's Hard Water
              </h3>
              <p className="text-lg mb-6">
                Tucson's water hardness ranks among the highest in the nation. When hard water is heated, dissolved minerals precipitate out of solution and settle as sediment. A typical Tucson household generates 5-10 pounds of sediment annually in a 50-gallon tank water heater—enough to fill a 2-liter bottle. This sediment layer grows thicker each year, creating multiple problems: reduced heating efficiency (sediment insulates water from heat), increased energy costs ($50-$150 per year), longer heat-up times and reduced capacity, noisy operation (popping, rumbling, banging), accelerated component wear and corrosion, and premature tank failure.
              </p>
              <p className="text-lg mb-6">
                Without regular flushing, sediment hardens into a cement-like layer that becomes extremely difficult to remove. Water heaters that go 3+ years without flushing in Tucson often have sediment so compacted that complete removal is impossible. At this point, the damage is done—efficiency is permanently reduced and failure becomes inevitable. Annual flushing prevents sediment from hardening and maintains your water heater in like-new condition.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Extending Water Heater Lifespan
              </h3>
              <p className="text-lg mb-6">
                The national average lifespan for tank water heaters is 10-15 years. In Tucson, unmaintained water heaters often fail after just 6-8 years due to hard water damage. However, water heaters that receive annual flush service routinely last 12-15 years—matching or exceeding the national average despite our challenging water conditions. That's 3-5 years of extended service from a $100-$200 annual investment.
              </p>
              <p className="text-lg mb-6">
                The math is compelling. Replacing a water heater costs $1,000-$4,000 depending on type. If annual maintenance ($1,000-$1,500 total over 10 years) extends lifespan by 3-5 years, you avoid a $1,000-$4,000 replacement expense plus enjoy the energy savings during those extra years. Most Tucson homeowners who invest in regular water heater maintenance save $2,000-$5,000 over their water heater's lifetime compared to those who skip maintenance.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Maintaining Peak Efficiency
              </h3>
              <p className="text-lg mb-8">
                A water heater's efficiency degrades significantly as sediment accumulates. Studies show that just 1/2 inch of sediment reduces efficiency by 15-20%. In Tucson, without annual flushing, 1-2 inches of sediment is common after 2-3 years. This can reduce efficiency by 30-40%, adding $100-$200 to annual energy costs. Tankless water heaters experience similar efficiency loss from mineral scaling on heat exchangers.
              </p>
              <p className="text-lg mb-8">
                Regular maintenance maintains peak efficiency throughout your water heater's lifespan. A 12-year-old water heater that receives annual service operates nearly as efficiently as a new unit, while an unmaintained 12-year-old unit (if it even lasts that long) operates at dramatically reduced efficiency. Over a decade, the energy savings from maintained efficiency pay for the maintenance service several times over.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Protect Your Investment"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Comprehensive Water Heater Maintenance Service
              </h2>
              <p className="text-lg mb-6">
                Unlike basic drain-and-flush services some companies offer, our comprehensive water heater maintenance includes everything needed to keep your water heater operating at peak performance and extend its lifespan to the maximum.
              </p>
              <p className="text-lg mb-6">
                Tank Water Heater Service includes: complete tank drainage and power flushing to remove all sediment, anode rod inspection and replacement (if 50%+ depleted), temperature-pressure relief valve testing and replacement if needed, burner assembly inspection and cleaning (gas heaters), heating element testing (electric heaters), thermostat calibration and adjustment, all connection inspection for leaks, gas line leak testing (gas heaters), venting inspection (gas heaters), and tank refilling with air purge and testing. We also provide a detailed service report with photos and recommendations.
              </p>
              <p className="text-lg mb-6">
                Tankless Water Heater Service includes: heat exchanger descaling using professional descaling solutions, inlet filter cleaning or replacement, burner inspection and cleaning (gas units), ignition system testing, flow sensor testing and calibration, venting inspection (gas units), error code diagnosis and resolution, leak inspection at all connections, and performance testing under load. Tankless descaling is critical in Tucson—mineral scaling reduces flow rates, causes error codes, and leads to expensive heat exchanger failures if neglected.
              </p>
              <p className="text-lg mb-8">
                We complete tank water heater service in 1-2 hours and tankless descaling in 2-3 hours. Service can be performed while you're at work or away—no need to supervise. We leave your water heater cleaner, more efficient, and more reliable than when we arrived. All service is performed by licensed master plumbers using professional equipment, and we guarantee our work with a service warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule Service: (520) 333-2665
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
                The most effective way to protect your water heater investment is enrolling in an annual maintenance plan. We automatically schedule your service each year so you never forget or postpone this critical maintenance. Plan members receive priority scheduling, discounted service rates, exclusive member pricing on repairs if needed, and peace of mind knowing their water heater is professionally maintained.
              </p>
              <p className="text-lg mb-6">
                Our maintenance plans are designed specifically for Tucson's hard water conditions. We track your water heater's service history, monitor component condition over time, and provide proactive recommendations before problems develop. Many plan members enjoy 15+ years of service from water heaters that typically last 8-12 years without maintenance—extraordinary value from a modest annual investment.
              </p>
              <p className="text-lg mb-8">
                Maintenance plans also include other benefits: priority emergency service if problems develop, 10-15% discount on any needed repairs, extended labor warranties, annual service reminders, and detailed service records for warranty claims and home sales. Whether you have a tank, tankless, or hybrid water heater, our annual maintenance plan ensures maximum lifespan, efficiency, and reliability.
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

        {/* Why Choose Us Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Intelligent Design for Water Heater Maintenance?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has maintained water heaters throughout Tucson since 1979. Our 45+ years of experience means we understand exactly how Tucson's hard water affects water heaters and what maintenance is required for maximum lifespan and efficiency. We're a family and veteran-owned business committed to honest, professional service.
              </p>
              <p className="text-lg mb-6">
                Our licensed master plumbers use professional power flushing equipment that completely removes sediment—not just partial drainage that leaves sediment behind. We inspect critical components like anode rods that most homeowners don't even know exist but are essential for preventing corrosion. We test safety devices to ensure your water heater operates safely. We provide comprehensive service that protects your investment.
              </p>
              <p className="text-lg mb-8">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've earned Tucson's trust through quality workmanship and exceptional service. When you choose Intelligent Design for water heater maintenance, you're choosing a company that will keep your water heater running efficiently for years to come—saving you money, preventing headaches, and delivering outstanding value from a modest investment.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Your Service"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section6"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={waterHeaterCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={waterHeaterFlushFAQs.faqs} />

        {/* Business Information Section (NAP) */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Water Heater Maintenance Today
              </h2>
              <div className="bg-card p-8 rounded-lg border text-center">
                <h3 className="text-2xl font-bold mb-4" data-testid="text-business-name">
                  Intelligent Design Air Conditioning, Plumbing, Solar, & Electric
                </h3>
                <div className="space-y-2 text-lg mb-6">
                  <p data-testid="text-address-line1">1145 E Fort Lowell Rd</p>
                  <p data-testid="text-address-line2">Tucson, AZ 85719</p>
                  <p className="text-xl font-bold text-primary" data-testid="text-phone">(520) 333-2665</p>
                  <p className="font-semibold" data-testid="text-hours">Licensed, Bonded & Insured AZ ROC 340962,  ROC 322375, ROC 296386, ROC 276673</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Service Areas:</h4>
                  <p className="text-base">
                    Tucson, Marana, Oro Valley, Sahuarita, Vail, Green Valley, Catalina, Casas Adobes, Flowing Wells, Tanque Verde, Corona de Tucson, Drexel Heights, and all surrounding areas.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Maintenance"
                    variant="default"
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
                      Call Now: (520) 333-2665
                    </a>
                  </Button>
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