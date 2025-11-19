import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { sewerLineRepairFAQs } from '@/data/faqs/plumbing';
import sewerLineHero from '@assets/generated_images/Sewer_line_repair_service_6973017c.webp';
import SewerLineRepairSchema from '@/components/SewerLineRepairSchema';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import { CommonQuestions } from "@/components/CommonQuestions";
import { sewerLineCommonQuestions } from "@/data/commonQuestions/plumbing";

const description = 'Expert sewer line repair in Tucson. Trenchless pipe lining, traditional excavation, root removal, cast iron pipe repair. Video camera inspection. Call (520) 333-2665 for sewer service.';
const imageUrl = new URL(sewerLineHero, import.meta.url).href;

export default function SewerLineRepair() {

  return (
    <>
      <MetaHead
        title="Sewer Line Repair Tucson AZ | Trenchless & Traditional Sewer Replacement"
        description={description}
        canonical={`${SITE_URL}/sewer-line-repair-tucson`}
        openGraph={[
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Sewer Line Repair Tucson AZ | Trenchless & Traditional Sewer Replacement" },
          { property: "og:description", content: description },
          { property: "og:url", content: `${SITE_URL}/sewer-line-repair-tucson` },
          { property: "og:image", content: imageUrl },
        ]}
        twitter={[
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "Sewer Line Repair Tucson AZ | Trenchless & Traditional Sewer Replacement" },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: imageUrl },
        ]}
      />
      <GTM />
      <DNIInjector />
      <SewerLineRepairSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${sewerLineHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Sewer Line Repair & Replacement in Tucson, AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews | 45+ Years Experience
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Trenchless Pipe Lining | Traditional Excavation | Root Intrusion Solutions | Cast Iron Pipe Repair | Video Camera Inspection | Licensed ROC #171687
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
              Why Choose Intelligent Design for Sewer Line Repair?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Trenchless & Traditional Methods</p>
                  <p className="text-sm text-gray-600">Pipe lining technology | Pipe bursting | Traditional excavation | Minimal landscape disruption | Modern PVC installation</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Video Camera Inspection</p>
                  <p className="text-sm text-gray-600">High-definition sewer cameras | Identify all damage | Locate root intrusion | Accurate repair planning | Before & after verification</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Root Intrusion Specialists</p>
                  <p className="text-sm text-gray-600">Mechanical root cutting | Hydro jetting | Root barrier installation | Permanent solutions | Prevent future problems</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Desert soil expertise | Trusted since 1979 | All permits handled</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Cast Iron Pipe Experts</p>
                  <p className="text-sm text-gray-600">Deteriorated pipe replacement | Epoxy pipe lining | Modern PVC conversion | Long-term solutions | Comprehensive warranties</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Restoration</p>
                  <p className="text-sm text-gray-600">Professional backfilling | Landscape restoration | Driveway repair coordination | Clean job sites | Return to original condition</p>
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
                Professional Sewer Line Repair in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Sewer line problems are among the most serious plumbing issues homeowners face. A failed sewer line causes sewage backups into your home, creates health hazards, damages foundations, and can cost tens of thousands in repairs if ignored. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've been repairing and replacing sewer lines in Tucson since 1979. Our licensed master plumbers use advanced video camera inspection technology to diagnose sewer problems accurately and offer both trenchless and traditional repair methods to restore your sewer system efficiently and cost-effectively.
              </p>
              <p className="text-lg mb-6">
                Tucson's unique environment accelerates sewer line deterioration. Desert soils shift and settle, causing pipe separations and misalignments. Tree roots from mesquite, palo verde, and mulberry trees aggressively seek water, infiltrating sewer lines through tiny cracks and joints. Many Tucson homes built before 1980 have aging clay or cast iron sewer pipes that have reached the end of their 50-70 year lifespan. Understanding these local factors helps us diagnose problems correctly and recommend the most appropriate repair method—whether targeted spot repairs, trenchless pipe lining, or complete sewer lateral replacement.
              </p>
              <p className="text-lg mb-8">
                We begin every sewer repair with video camera inspection, threading a high-definition camera through your sewer line to identify all damage, blockages, and problem areas. This provides complete diagnostic information, allowing us to recommend the right repair approach and provide accurate cost estimates. Whether your sewer issues stem from tree roots, pipe deterioration, ground settling, or blockages, we have the equipment, expertise, and experience to restore your sewer system properly and prevent future problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Camera Inspection"
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

        {/* Repair Methods Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Sewer Line Repair Methods
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Trenchless Pipe Lining (Cured-in-Place Pipe)
              </h3>
              <p className="text-lg mb-6">
                Trenchless pipe lining creates a new pipe inside your existing sewer line without excavation. We insert a flexible liner saturated with epoxy resin into the damaged pipe, inflate it against the pipe walls, and cure it with heat or UV light. Once cured, the liner becomes a structurally sound pipe within your old pipe, sealing cracks, preventing root intrusion, and providing 50+ year lifespan. The entire process occurs from small access pits at each end—no trenching across your yard.
              </p>
              <p className="text-lg mb-6">
                Trenchless lining is ideal when the existing pipe path is acceptable, damage is internal (cracks, root intrusion, corrosion), and you want to preserve landscaping, driveways, or structures above the sewer line. It typically costs $100-$250 per linear foot—comparable to or less than traditional excavation when you factor in landscape restoration costs. The process takes 1-2 days: camera inspection, thorough cleaning with hydro jetting, liner installation, curing, and final camera verification. You have a fully functional sewer immediately with minimal property disruption.
              </p>
              <p className="text-lg mb-6">
                Limitations exist. Severely collapsed pipes may not accept liners. Sharp bends or significant grade problems may require traditional methods. Proper cleaning is essential—roots, debris, and buildup must be removed completely for liner adhesion. However, for most aging sewer lines with cracks, root intrusion, or corrosion, trenchless lining provides excellent, long-lasting repair at competitive pricing with minimal disruption.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Traditional Excavation and Replacement
              </h3>
              <p className="text-lg mb-6">
                Traditional sewer repair involves excavating a trench over the damaged pipe section, removing the old pipe, and installing new PVC sewer pipe. While more disruptive than trenchless methods, traditional excavation remains the best choice for certain situations: completely collapsed pipes, severe misalignment requiring grade correction, adding cleanout access points for future maintenance, or when trenching costs less than trenchless for short repair sections.
              </p>
              <p className="text-lg mb-8">
                Modern PVC sewer pipe is superior to old clay or cast iron. It doesn't corrode, resists root intrusion at properly sealed joints, handles ground movement better with rubber gasket joints, and lasts 100+ years. Installation costs $75-$200 per linear foot depending on depth, distance, and access difficulty. The process takes 2-5 days: excavation, pipe removal, installation of new PVC with proper slope and backfill compaction, pressure testing, and site restoration. We coordinate with landscapers and concrete contractors for complete restoration to original condition.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Discuss Repair Options"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Root Intrusion Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Tree Root Intrusion Solutions
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Understanding Root Problems in Tucson
              </h3>
              <p className="text-lg mb-6">
                Tree roots cause frequent sewer line problems in Tucson. Our desert trees—mesquite, palo verde, mulberry, oleander—develop extensive root systems searching for water. Sewer pipes offer concentrated moisture, attracting roots. They enter through tiny cracks at joints, then expand inside the pipe, creating massive root balls that block flow completely. Even small cracks invisible from outside allow root entry. Once established, roots grow rapidly, filling pipes within months.
              </p>
              <p className="text-lg mb-6">
                Older sewer lines are most vulnerable. Clay pipes have porous joints where roots easily enter. Cast iron develops cracks as it corrodes. Even concrete pipes have joints susceptible to root intrusion. Modern PVC with rubber gasket joints resists roots better, but improper installation or ground movement can create gaps allowing entry. Homes with large mature trees near sewer lateral paths experience recurring root problems requiring regular maintenance.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Root Removal and Prevention
              </h3>
              <p className="text-lg mb-6">
                Mechanical root cutting uses rotating blades on cable equipment to cut roots flush with pipe interior, restoring flow immediately. This provides quick relief but doesn't prevent regrowth—roots return within 1-2 years. Hydro jetting uses high-pressure water (3000-4000 PSI) to completely clear roots and debris, cleaning pipe walls thoroughly. Results last longer than mechanical cutting (18-24 months typically) but roots still return unless pipe damage is addressed.
              </p>
              <p className="text-lg mb-8">
                Permanent solutions address the pipe damage allowing root entry. Trenchless pipe lining seals all cracks and joints, creating smooth interior that prevents root intrusion. Traditional pipe replacement with modern PVC and properly sealed joints eliminates entry points. Chemical root treatments (copper sulfate or foaming compounds) kill existing roots and discourage regrowth but don't repair pipe damage. For homes with persistent root problems, we recommend camera inspection to assess pipe condition, root clearing to restore function, and lining or replacement for permanent fix.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Root Removal Service: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cast Iron Pipe Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Cast Iron Sewer Pipe Repair & Replacement
              </h2>
              <p className="text-lg mb-6">
                Many Tucson homes built between 1940-1970 have cast iron sewer lines. Cast iron was the premium material for its era, expected to last 50-70 years. However, Arizona's soil conditions and waste chemistry cause cast iron to deteriorate from inside out. Hydrogen sulfide gas produced by waste bacteria converts to sulfuric acid, corroding pipe walls. Eventually pipes develop pinholes, cracks, and complete failures. Most cast iron sewer lines 50+ years old need replacement or rehabilitation.
              </p>
              <p className="text-lg mb-6">
                Signs of cast iron failure include: recurring backups despite clearing, sewage odors indoors or in yard, rust-colored water in drains, visible corrosion on exposed sections, and soft spots or settling in yard above sewer line. Camera inspection reveals the full extent of deterioration—thinning pipe walls, rust buildup narrowing the pipe, holes, and structural damage. Once cast iron begins failing, the entire system typically needs attention as corrosion affects all sections.
              </p>
              <p className="text-lg mb-6">
                Repair options include spot replacement of failed sections with PVC for localized damage, trenchless epoxy lining to coat interior and seal deterioration providing 50+ year life extension, or complete replacement with modern PVC for severely deteriorated systems. Replacement costs more upfront but provides permanent solution eliminating all old cast iron. Lining costs less and preserves landscaping but requires pipe to be structurally sound enough to accept liner.
              </p>
              <p className="text-lg mb-8">
                We provide honest assessments of cast iron sewer lines. If deterioration is widespread, we recommend replacement rather than piecemeal repairs that only delay inevitable failure. If damage is localized or structural integrity remains good, lining provides cost-effective rehabilitation. Our goal is to recommend the solution that provides best long-term value, not just cheapest immediate fix.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Pipe Inspection"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pipe Bursting Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Pipe Bursting Technology
              </h2>
              <p className="text-lg mb-6">
                Pipe bursting is a trenchless replacement method where we pull a new pipe through the old pipe, simultaneously fracturing the old pipe and pushing it aside. A bursting head larger than the existing pipe diameter is pulled through using cable or hydraulic systems, breaking the old pipe into fragments while immediately replacing it with new HDPE (high-density polyethylene) pipe. This creates a brand-new sewer line along the existing path without trenching.
              </p>
              <p className="text-lg mb-6">
                Pipe bursting works well when the existing path and grade are acceptable but the pipe is beyond repair—severely deteriorated, collapsed, or undersized. It allows upsizing from 4-inch to 6-inch pipe for increased capacity. The process requires access pits at each end but no trenching between. Surrounding soil must be conducive to bursting—loose or sandy soils work well; extremely hard caliche may present challenges. Nearby utilities must be located and protected.
              </p>
              <p className="text-lg mb-8">
                Costs are comparable to traditional excavation ($100-$200 per linear foot) but with less landscape disruption. The method shines when trenching is extremely difficult or expensive—under driveways, mature landscaping, or structures. Installation typically takes 1-3 days depending on distance and access. The new HDPE pipe provides 100+ year lifespan and excellent flow characteristics. We evaluate your specific situation and recommend pipe bursting when it provides best combination of cost, minimal disruption, and long-term performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section5">
                    <Phone className="w-5 h-5 mr-2" />
                    Free Consultation: (520) 333-2665
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
                Why Choose Intelligent Design for Sewer Line Repair?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has served Tucson families since 1979. We're a family and veteran-owned business with over 45 years of experience providing honest, professional plumbing services. Our licensed master plumbers have repaired hundreds of sewer lines throughout Tucson and understand the unique challenges of Southern Arizona's desert soils, mature trees, and aging housing infrastructure.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on quality workmanship, transparent pricing, and exceptional customer service. When you choose Intelligent Design for sewer line repair, you're getting: high-definition video camera inspection to diagnose all problems accurately, both trenchless and traditional repair options explained clearly, expert root intrusion removal and prevention, cast iron pipe rehabilitation specialists, all permits and inspections handled professionally, comprehensive warranties on materials and labor, and clean, professional work with complete site restoration.
              </p>
              <p className="text-lg mb-8">
                We invest in the latest technology—video inspection cameras, trenchless lining equipment, hydro jetting systems, and pipe bursting tools—to provide the most effective, least disruptive repairs possible. Our plumbers undergo continuous training on new methods and materials. Licensed, bonded, and insured (ROC #171687), we handle all aspects of sewer line repair from initial diagnosis through final testing and restoration, ensuring your sewer system functions properly for decades to come.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Service Today"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section6"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={sewerLineCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={sewerLineRepairFAQs.faqs} />

        {/* Business Information Section (NAP) */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Sewer Line Inspection Today
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
                    triggerText="Schedule Service"
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