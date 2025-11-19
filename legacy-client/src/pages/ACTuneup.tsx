import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingActions from "@/components/MobileFloatingActions";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import SchedulerEmbed from "@/components/SchedulerEmbed";
import ACTuneupSchema from "@/components/ACTuneupSchema";
import TrustBar from "@/components/TrustBar";
import ServiceFAQ from "@/components/ServiceFAQ";
import { CommonQuestions } from "@/components/CommonQuestions";
import { acTuneupFAQs } from "@/data/faqs/hvac";
import { acMaintenanceCommonQuestions } from "@/data/commonQuestions/hvac";
import acTuneupImage from "@assets/generated_images/AC_tune-up_maintenance_Tucson_home_2437d8a1.webp";
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";

export default function ACTuneup() {
  const description = 'Professional AC tune-ups in Tucson, AZ. Comprehensive air conditioning tune-up service to maximize efficiency, prevent breakdowns, and extend system life. Pre-season tune-ups available from Tucson\'s highest-rated HVAC company.';
  const imageUrl = `${SITE_URL}${acTuneupImage}`;

  return (
    <>
      <MetaHead
        title="AC Tune-Up Tucson AZ | Air Conditioning Tune-Ups & Inspections | Intelligent Design"
        description={description}
        canonical="https://www.idesignac.com/ac-tuneup-tucson"
        openGraph={[
          { property: "og:locale", content: "en_US" },
          { property: "og:type", content: "website" },
          { property: "og:title", content: "AC Tune-Up Tucson AZ | Air Conditioning Tune-Ups & Inspections | Intelligent Design" },
          { property: "og:description", content: description },
          { property: "og:url", content: "https://www.idesignac.com/ac-tuneup-tucson" },
          { property: "og:site_name", content: "Intelligent Design" },
          { property: "og:image", content: imageUrl },
          { property: "og:image:width", content: "1920" },
          { property: "og:image:height", content: "1080" },
          { property: "og:image:alt", content: "Professional HVAC technician performing air conditioning tune-up maintenance in Tucson" }
        ]}
        twitter={[
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "AC Tune-Up Tucson AZ | Air Conditioning Tune-Ups & Inspections | Intelligent Design" },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: imageUrl },
          { name: "twitter:image:alt", content: "Professional HVAC technician performing air conditioning tune-up maintenance in Tucson" }
        ]}
      />
      <GTM />
      <DNIInjector />
      <ACTuneupSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${acTuneupImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Highest-Rated AC Tune-Up in Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Pre-Season Tune-Ups | Complete System Inspection | Efficiency Optimization | Prevent Breakdowns
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule AC Tune-Up"
                  variant="destructive"
                  size="lg"
                  data-testid="button-schedule-tuneup-hero"
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
              Why Get an AC Tune-Up from Intelligent Design?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Prevent Summer Breakdowns</p>
                  <p className="text-sm text-gray-600">Pre-season tune-ups catch problems early | Avoid emergency repairs during peak heat | Keep your family comfortable</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Lower Energy Bills by 15-30%</p>
                  <p className="text-sm text-gray-600">Clean coils & calibrated systems run efficiently | Refrigerant optimization | Airflow improvements</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive 86-Point Inspection</p>
                  <p className="text-sm text-gray-600">Thorough system analysis | Electrical testing | Safety checks | Performance optimization | Complete diagnostics</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Extend Equipment Life 3-5 Years</p>
                  <p className="text-sm text-gray-600">Regular maintenance prevents premature failure | Protect your HVAC investment | Maximize ROI</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Maintain Warranty Coverage</p>
                  <p className="text-sm text-gray-600">Most manufacturers require annual service | We document all work | Keep warranty valid</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Affordable Peace of Mind</p>
                  <p className="text-sm text-gray-600">Transparent pricing | Maintenance plan discounts | Small investment prevents major repairs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional AC Tune-Up Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional AC Tune-Up Services in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                When Tucson temperatures soar above 110°F, your air conditioning system works harder than almost anywhere else in the country. An annual AC tune-up is essential preventative maintenance that keeps your system running efficiently, prevents unexpected breakdowns during extreme heat, and can reduce your energy bills by 15-20%.
              </p>
              <p className="text-lg mb-6">
                At Intelligent Design, our certified HVAC technicians provide comprehensive AC tune-up services throughout Tucson and surrounding areas. With over 45 years of experience and more than 22,000 five-star reviews, we've helped tens of thousands of Tucson homeowners maximize their AC performance and avoid costly emergency repairs.
              </p>
              <p className="text-lg mb-8">
                Our AC tune-up service includes a complete 24-point inspection, cleaning of critical components, calibration of your thermostat, refrigerant level check, electrical connection testing, and performance optimization. We identify small issues before they become major problems, ensuring your system is ready to handle Tucson's brutal summer heat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Tune-Up Online"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-tuneup-1"
                />
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-tuneup-1">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included in Our AC Tune-Up Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What's Included in Our 24-Point AC Tune-Up
              </h2>
              <p className="text-lg mb-8">
                Our comprehensive AC tune-up service covers every critical component of your air conditioning system. Here's exactly what we do during every tune-up visit:
              </p>
              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3 text-primary">System Inspection</h3>
                  <ul className="space-y-2 text-base">
                    <li>• Complete visual inspection of indoor and outdoor units</li>
                    <li>• Check refrigerant levels and pressures</li>
                    <li>• Inspect condensate drain line for clogs</li>
                    <li>• Test thermostat accuracy and calibration</li>
                    <li>• Check all electrical connections and tighten</li>
                    <li>• Inspect ductwork for leaks or damage</li>
                  </ul>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3 text-primary">Cleaning Services</h3>
                  <ul className="space-y-2 text-base">
                    <li>• Clean or replace air filters</li>
                    <li>• Clean evaporator and condenser coils</li>
                    <li>• Remove debris from outdoor unit</li>
                    <li>• Clean condensate drain pan</li>
                    <li>• Flush condensate drain line</li>
                    <li>• Clean blower components</li>
                  </ul>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3 text-primary">Performance Testing</h3>
                  <ul className="space-y-2 text-base">
                    <li>• Measure airflow and temperature differential</li>
                    <li>• Test capacitors and contactors</li>
                    <li>• Check amp draw on motors</li>
                    <li>• Test safety controls and limit switches</li>
                    <li>• Verify proper system cycling</li>
                    <li>• Measure static pressure</li>
                  </ul>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-3 text-primary">Optimization</h3>
                  <ul className="space-y-2 text-base">
                    <li>• Lubricate all moving parts</li>
                    <li>• Calibrate thermostat for accuracy</li>
                    <li>• Adjust blower components for maximum efficiency</li>
                    <li>• Balance refrigerant charge if needed</li>
                    <li>• Provide detailed report with recommendations</li>
                    <li>• Answer all your questions about system performance</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Book Your Tune-Up"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-tuneup-2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits of Annual AC Tune-Ups Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Annual AC Tune-Ups Are Essential in Tucson
              </h2>
              <p className="text-lg mb-6">
                Tucson's extreme heat puts extraordinary stress on air conditioning systems. While AC systems in milder climates might run 1,500-2,000 hours per year, Tucson systems often exceed 3,000-4,000 hours annually—nearly double the usage. This intensive operation makes preventative maintenance absolutely critical.
              </p>
              <p className="text-lg mb-6">
                <strong>Prevent Costly Emergency Repairs:</strong> Most AC breakdowns don't happen randomly—they develop over time. A loose electrical connection, low refrigerant level, or dirty coil that might cause a minor efficiency loss in spring can lead to complete system failure during a July heatwave. Our tune-ups catch these issues early, before you're facing a $2,000 compressor replacement or a weekend without AC when it's 115°F outside.
              </p>
              <p className="text-lg mb-6">
                <strong>Reduce Energy Bills by 15-20%:</strong> A well-maintained AC system operates far more efficiently than a neglected one. Dirty coils force your system to work harder, low refrigerant reduces cooling capacity, and worn components draw more electricity. Homeowners who schedule annual tune-ups typically save $200-400 per year on cooling costs—more than paying for the tune-up itself.
              </p>
              <p className="text-lg mb-6">
                <strong>Extend Your System's Lifespan:</strong> The average AC system in Tucson lasts 10-12 years with regular maintenance, but only 7-9 years without it. That's a difference of 3-5 years—potentially delaying a $8,000-$12,000 replacement by half a decade. Regular tune-ups reduce wear and tear, prevent minor issues from damaging major components, and keep your system running smoothly for years longer.
              </p>
              <p className="text-lg mb-8">
                <strong>Maintain Manufacturer Warranties:</strong> Most AC manufacturers require annual professional maintenance to keep warranties valid. Without documented tune-ups, you could void your warranty and be responsible for expensive repairs that would otherwise be covered. Our service includes detailed documentation that protects your warranty coverage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Tune-Up Now"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-tuneup-3"
                />
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-tuneup-3">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* When to Schedule Your AC Tune-Up Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Best Time to Schedule Your AC Tune-Up in Tucson
              </h2>
              <p className="text-lg mb-6">
                The ideal time for an AC tune-up in Tucson is early spring—typically March or early April. This timing ensures your system is optimized before the intense summer heat arrives, while still being early enough that HVAC companies have more availability and can schedule your service quickly.
              </p>
              <p className="text-lg mb-6">
                <strong>Spring (March-April) - Best Time:</strong> Schedule your tune-up before temperatures consistently exceed 90°F. This gives you time to address any issues discovered during the tune-up before you're depending on your AC daily. Early spring appointments are also easier to schedule, with less wait time than peak summer.
              </p>
              <p className="text-lg mb-6">
                <strong>Fall (October-November) - Also Good:</strong> After months of heavy use, a fall tune-up ensures your system is in good condition and ready for next year. This is also a smart time if you use your AC year-round or want to catch any wear that developed during the summer before it becomes a problem.
              </p>
              <p className="text-lg mb-6">
                <strong>Summer - Emergency Only:</strong> If you haven't had a tune-up and notice reduced cooling, higher bills, or unusual sounds, don't wait until fall. A mid-summer tune-up can still prevent a complete breakdown and improve efficiency, even if it's not ideal timing.
              </p>
              <p className="text-lg mb-8">
                <strong>Annual Schedule Recommended:</strong> The best approach is to schedule your AC tune-up at the same time every year—either spring or fall. We can set up recurring appointments so you never forget, ensuring continuous warranty coverage and optimal performance year after year.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Spring Tune-Up"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-tuneup-4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Certified Expert Technicians Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Certified, Experienced AC Tune-Up Technicians
              </h2>
              <p className="text-lg mb-6">
                Every technician at Intelligent Design is fully licensed, EPA-certified, and extensively trained in all major AC brands and systems. Our team includes specialists who've worked on thousands of Tucson air conditioning systems over decades, bringing unmatched expertise to every tune-up.
              </p>
              <p className="text-lg mb-6">
                Unlike basic maintenance companies that might send inexperienced technicians to perform rote checklist tasks, our AC tune-up specialists are trained diagnosticians. They don't just clean coils and check filters—they analyze your system's performance, identify efficiency problems, spot developing issues, and provide expert recommendations to optimize cooling and prevent failures.
              </p>
              <p className="text-lg mb-6">
                Our technicians carry advanced diagnostic equipment including digital manifold gauges, temperature probes, airflow meters, amp clamps, and combustion analyzers. This professional-grade equipment allows us to measure exact system performance and identify problems that basic visual inspections would miss completely.
              </p>
              <p className="text-lg mb-8">
                We're also committed to transparent, honest service. If we find an issue during your tune-up, we'll explain exactly what's wrong, why it matters, what happens if you don't address it, and provide clear pricing before doing any additional work. You're always in control of repair decisions, with no pressure or hidden charges.
              </p>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-tuneup-5">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Business Information Section (NAP) */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your AC Tune-Up Today
              </h2>
              <div className="bg-card p-8 rounded-lg border text-center">
                <h3 className="text-2xl font-bold mb-4" data-testid="text-business-name">
                  Intelligent Design Air Conditioning, Plumbing, Solar, & Electric
                </h3>
                <div className="space-y-2 text-lg mb-6">
                  <p data-testid="text-address-line1">1145 E Fort Lowell Rd</p>
                  <p data-testid="text-address-line2">Tucson, AZ 85719</p>
                  <p className="text-xl font-bold text-primary" data-testid="text-phone">(520) 333-2665</p>
                  <p className="font-semibold" data-testid="text-hours">24/7 Emergency Service Available</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Service Areas:</h4>
                  <p className="text-base">
                    Tucson, Oro Valley, Marana, Vail, Sahuarita, Green Valley, Catalina, and surrounding areas
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Online Now"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-tuneup-6"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-tuneup-6">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now: (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={acMaintenanceCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={acTuneupFAQs.faqs} />

      </main>

      <Footer />
    </>
  );
}
