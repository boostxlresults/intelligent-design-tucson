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
import { trenchlessRepairFAQs } from '@/data/faqs/plumbing';
import trenchlessRepairHero from '@assets/generated_images/Trenchless_sewer_pipe_lining_c7c72cfe.webp';
import TrenchlessRepairSchema from '@/components/TrenchlessRepairSchema';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import { CommonQuestions } from "@/components/CommonQuestions";
import { sewerLineCommonQuestions } from "@/data/commonQuestions/plumbing";

const description = 'Certified IPT Trenchless Pipe Lining partner in Tucson. No-dig sewer repair preserves your landscaping & hardscaping. 50-year warranty. Same-day service. Call (520) 333-2665.';
const imageUrl = new URL(trenchlessRepairHero, import.meta.url).href;

export default function TrenchlessRepair() {

  return (
    <>
      <MetaHead
        title="Trenchless Sewer Repair & Pipe Lining Tucson AZ | Certified IPT Partner"
        description={description}
        canonical={`${SITE_URL}/trenchless-repair-tucson`}
        openGraph={[
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Trenchless Sewer Repair & Pipe Lining Tucson AZ | Certified IPT Partner" },
          { property: "og:description", content: description },
          { property: "og:url", content: `${SITE_URL}/trenchless-repair-tucson` },
          { property: "og:image", content: imageUrl },
        ]}
        twitter={[
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "Trenchless Sewer Repair & Pipe Lining Tucson AZ | Certified IPT Partner" },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: imageUrl },
        ]}
      />
      <GTM />
      <DNIInjector />
      <TrenchlessRepairSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${trenchlessRepairHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Trenchless Sewer Repair & Pipe Lining in Tucson, AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Certified IPT Trenchless Partner | No-Dig Technology | Preserve Landscaping & Hardscaping | 50-Year Warranty | Same-Day Service
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Camera Inspection"
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
              Why Choose Trenchless Sewer Repair from Intelligent Design?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Certified IPT Trenchless Partner</p>
                  <p className="text-sm text-gray-600">Industry-leading CIPP technology | Rigorous training standards | Premium materials | Guaranteed quality</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">No Excavation Required</p>
                  <p className="text-sm text-gray-600">Preserve landscaping & trees | No driveway destruction | Minimal property disruption | Same-day completion</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">50-Year Transferable Warranty</p>
                  <p className="text-sm text-gray-600">Lifetime pipe solution | Root-proof lining | Corrosion resistant | Adds home value</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Cost Savings vs. Traditional Dig-and-Replace</p>
                  <p className="text-sm text-gray-600">30-50% lower total costs | No landscape restoration | No concrete replacement | Faster completion</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Advanced Camera Inspection Technology</p>
                  <p className="text-sm text-gray-600">Pinpoint pipe damage | Video documentation | Before & after proof | Accurate diagnosis</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | Licensed plumbers | 22,000+ reviews | Satisfaction guaranteed</p>
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
                Trenchless Sewer Repair & Pipe Lining in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                A failed sewer line used to mean one thing: extensive excavation that destroyed landscaping, tore up driveways, and turned your property into a construction zone for days or weeks. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we offer Tucson homeowners a better solution. As a certified IPT (Insituform Perma-Lateral Technologies) Trenchless Pipe Lining partner, we can repair or replace your sewer line without digging trenches across your property.
              </p>
              <p className="text-lg mb-6">
                Trenchless sewer repair uses advanced CIPP (cured-in-place pipe) lining technology to rehabilitate damaged pipes from the inside. We insert a flexible, epoxy-saturated liner into your existing sewer line, inflate it to conform perfectly to the pipe interior, and cure it with controlled heat or UV light. The result is a seamless, jointless new pipe inside your old one—stronger than the original pipe and backed by a 50-year transferable warranty. Your yard, landscaping, driveways, and hardscaping remain untouched.
              </p>
              <p className="text-lg mb-8">
                Tucson homeowners choose trenchless repair for good reasons: it preserves mature trees and expensive landscaping, requires no concrete or paver replacement, completes in a single day, costs 30-50% less than traditional excavation when restoration costs are included, and delivers a pipe that will outlast traditional replacements. If you're facing sewer line problems, trenchless technology may offer the perfect solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Free Camera Inspection"
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

        {/* IPT Certification Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Certified IPT Trenchless Pipe Lining Partner
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What is IPT Certification?
              </h3>
              <p className="text-lg mb-6">
                IPT (Insituform Perma-Lateral Technologies) is the world leader in trenchless pipe rehabilitation technology. Founded in 1971, IPT pioneered the CIPP (cured-in-place pipe) lining process and continues to set industry standards for materials, installation methods, and quality assurance. IPT certification represents the highest level of expertise and quality in the trenchless repair industry.
              </p>
              <p className="text-lg mb-6">
                Becoming an IPT-certified contractor requires completing comprehensive training on CIPP lining procedures, materials science, quality control, and safety protocols. Our technicians undergo ongoing education to stay current with the latest advancements in trenchless technology. This certification ensures that every trenchless repair we perform meets IPT's exacting standards and qualifies for their industry-leading warranties.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Superior Materials & Technology
              </h3>
              <p className="text-lg mb-6">
                IPT-certified contractors use premium epoxy resin formulations specifically engineered for sewer pipe rehabilitation. These resins are tested and approved for contact with drinking water, resistant to chemicals commonly found in sewer systems, immune to root penetration and corrosion, and capable of withstanding decades of thermal cycling. The liner material itself is a specially woven fiberglass fabric that provides exceptional strength and dimensional stability during the curing process.
              </p>
              <p className="text-lg mb-6">
                When cured, IPT pipe lining creates a smooth, seamless surface that actually improves flow capacity compared to corroded or scale-covered old pipes. The epoxy resin is harder and more durable than the original pipe material, whether cast iron, clay, or concrete. Because the lining is jointless, it eliminates the weak points where traditional pipes typically fail. This is why IPT can offer a 50-year warranty—the lined pipe is simply superior to anything else available.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Comprehensive Quality Assurance
              </h3>
              <p className="text-lg mb-8">
                Every IPT trenchless repair includes rigorous quality control measures. Before installation, we perform a thorough video camera inspection to document existing damage and confirm the pipe is suitable for lining. During installation, we monitor resin saturation, liner placement, inflation pressure, and curing temperature to ensure optimal results. After curing, we conduct a final camera inspection to verify the liner is properly positioned, fully adhered, and completely smooth throughout its length. You receive before-and-after video documentation showing the transformation of your sewer line.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Get Free Estimate"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trenchless Process Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                The Trenchless Sewer Repair Process
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Step 1: Video Camera Inspection
              </h3>
              <p className="text-lg mb-6">
                Trenchless repair begins with a comprehensive video camera inspection of your sewer line. We insert a specialized waterproof camera mounted on a flexible cable through a cleanout or access point. The camera transmits high-definition video as we navigate through your entire sewer system, allowing us to identify cracks, root intrusion, corrosion, offset joints, and other damage. The video also shows pipe material, diameter, and overall condition.
              </p>
              <p className="text-lg mb-6">
                This inspection serves multiple purposes: it confirms whether trenchless repair is suitable for your situation, pinpoints the exact location and extent of damage, identifies any obstacles that need addressing before lining, and provides video documentation of the "before" condition. We provide you with a copy of the inspection video and explain our findings in plain language, so you understand exactly what's wrong with your sewer line and why we're recommending specific repairs.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Step 2: Pipe Cleaning & Preparation
              </h3>
              <p className="text-lg mb-6">
                Before installing the liner, we thoroughly clean the interior of your sewer pipe. Using high-pressure water jetting equipment, we remove scale, roots, grease, and debris that could interfere with liner adhesion. For severely root-infested pipes, we may use specialized cutting tools to grind away heavy root masses and open the pipe to full diameter. This cleaning process is crucial—the liner must bond directly to clean pipe walls for maximum strength and longevity.
              </p>
              <p className="text-lg mb-6">
                Once cleaned, we perform another camera inspection to verify the pipe is ready for lining. We measure the precise length of pipe to be lined and inspect access points to ensure we can insert and position the liner correctly. This preparation phase typically takes 1-2 hours depending on pipe condition and the amount of debris to be removed.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Step 3: Liner Installation & Curing
              </h3>
              <p className="text-lg mb-6">
                The CIPP liner arrives pre-saturated with specially formulated epoxy resin and rolled onto a large reel. We insert the liner into your sewer pipe through an access point—usually an existing cleanout or small access pit. Using water or air pressure, we carefully invert the liner so it unfurls inside the pipe, with the resin-saturated side against the pipe walls. The pressure forces the flexible liner to conform perfectly to the interior shape of the pipe, including any bends or irregularities.
              </p>
              <p className="text-lg mb-6">
                Once properly positioned, we maintain pressure while heating the liner to cure the epoxy resin. We use either hot water circulation or steam to bring the resin to curing temperature (typically 160-180°F), which we maintain for several hours. The heat causes the epoxy to harden, transforming the flexible liner into a rigid, structural pipe. After curing and cooling, we deflate and remove the pressure bladder, trim the liner ends flush with existing pipes, and reinstate any lateral connections (such as cleanouts or branch lines).
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Step 4: Final Inspection & Testing
              </h3>
              <p className="text-lg mb-8">
                The final step is another complete video camera inspection to verify the liner is properly cured, fully adhered to the old pipe, smooth throughout its length, and properly trimmed at connection points. We check that all laterals are properly reinstated and flow is unobstructed. We also conduct pressure testing or flow testing to ensure the repaired sewer line performs correctly. You receive "after" video documentation showing your newly lined pipe, along with all warranty paperwork and installation records for your files.
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

        {/* Cost Comparison Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Trenchless Repair vs. Traditional Excavation Cost Comparison
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Understanding Total Project Costs
              </h3>
              <p className="text-lg mb-6">
                When comparing trenchless repair to traditional dig-and-replace, many homeowners initially focus only on the pipe repair cost. While trenchless materials and installation may cost slightly more per linear foot than simply replacing pipe, this narrow comparison misses the bigger financial picture. Traditional excavation requires extensive site restoration that can easily exceed the cost of the actual pipe work.
              </p>
              <p className="text-lg mb-6">
                Consider a typical Tucson sewer line repair running under a landscaped yard with mature trees, decorative rock, irrigation system, and concrete walkways. Traditional excavation would require removing and replacing irrigation lines, tree protection measures or removal, reseeding or re-sodding large areas, concrete removal and replacement, decorative rock removal and replacement, and potential structural repairs if excavation compromises building foundations. These restoration costs can range from $5,000-$20,000 or more, depending on property features.
              </p>
              <p className="text-lg mb-6">
                Trenchless repair eliminates virtually all restoration costs. We need only small access pits at the beginning and end of the repair section—typically 3x3 feet or smaller. Everything else remains untouched. When you factor in total project costs including restoration, trenchless repair typically costs 30-50% less than traditional excavation. Plus, you avoid weeks of living with a torn-up yard and the stress of supervising multiple contractors for restoration work.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Long-Term Value & Warranty Protection
              </h3>
              <p className="text-lg mb-6">
                Trenchless pipe lining doesn't just save money on installation—it provides superior long-term value. Traditional pipe replacement typically comes with warranties of 1-5 years, limited to defects in materials or workmanship. The pipes themselves are subject to the same failures that damaged your original pipes: root intrusion at joints, corrosion, and structural deterioration over time.
              </p>
              <p className="text-lg mb-6">
                IPT trenchless pipe lining carries a 50-year transferable warranty covering the liner material and installation. The warranty transfers to subsequent homeowners if you sell your property—a valuable selling point that can increase home value. Because the liner is seamless, jointless, and immune to root intrusion and corrosion, it eliminates the failure modes that plague traditional pipes. You're not just repairing your sewer line; you're installing a permanent solution that should outlast your ownership of the home.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Time & Disruption Costs
              </h3>
              <p className="text-lg mb-8">
                Traditional sewer line replacement can take 3-7 days or longer, depending on property conditions and restoration requirements. During this time, your property is a construction zone with limited or no sewer service, heavy equipment operating daily, noise and disruption to your household, and contractors accessing your property. If the sewer line runs under a driveway or patio, you may lose vehicular access for days or weeks.
              </p>
              <p className="text-lg mb-8">
                Trenchless repair is typically completed in one day. We arrive in the morning, complete the camera inspection, cleaning, lining, and curing process, conduct final inspection, and restore plumbing service—all before dinner. You experience minimal disruption, maintain access to your property, avoid the stress of extended construction, and return to normal life immediately. For many Tucson homeowners, this convenience alone makes trenchless repair the preferred choice.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Get Free Quote"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* When to Choose Trenchless Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                When to Choose Trenchless Sewer Repair
              </h2>
              <p className="text-lg mb-6">
                Trenchless pipe lining works for most common sewer line problems, but it's not suitable for every situation. Understanding when trenchless technology is the right choice helps you make informed decisions about your sewer repair options.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Ideal Candidates for Trenchless Repair
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Cracked or Fractured Pipes:</span> Pipes with cracks, fractures, or separated joints are perfect candidates for trenchless lining.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Root-Infested Sewer Lines:</span> Tree roots that have penetrated joints or cracks can be removed, then the seamless liner prevents future root intrusion.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Corroded Cast Iron or Clay Pipes:</span> Older pipes suffering from corrosion or deterioration get a new lease on life with epoxy lining.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Offset or Misaligned Joints:</span> Joints that have shifted due to ground movement can be lined over, creating a smooth interior surface.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Pipes Under Landscaping or Hardscaping:</span> When excavation would destroy valuable landscaping, mature trees, driveways, patios, or pool decking, trenchless is ideal.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Difficult Access Situations:</span> Sewer lines under buildings, foundations, or other structures where excavation is impractical or impossible.
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Situations Requiring Traditional Repair
              </h3>
              <p className="text-lg mb-6">
                While trenchless technology is remarkably versatile, some situations require traditional excavation and pipe replacement:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Completely Collapsed Pipes:</span> If the pipe has collapsed to the point where we cannot navigate a camera through or insert a liner, excavation may be necessary.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Severe Bellies or Back-Pitch:</span> Significant sagging sections that prevent proper drainage usually require excavation to re-grade the pipe.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Pipe Upsizing Needed:</span> If your existing sewer line is undersized and needs to be replaced with larger diameter pipe, traditional replacement is required.
                  </div>
                </li>
              </ul>
              <p className="text-lg mb-8">
                During our camera inspection, we'll provide an honest assessment of whether trenchless repair is suitable for your specific situation. If traditional excavation is necessary, we'll explain why and provide detailed quotes for both options when feasible, so you can make an informed decision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section5">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Assessment: (520) 333-2665
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
                Why Choose Intelligent Design for Trenchless Sewer Repair?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has served Tucson families since 1979. We're a family and veteran-owned business with over 45 years of experience providing honest, professional plumbing services. As one of Tucson's few IPT-certified trenchless repair contractors, we represent the highest level of expertise and quality in no-dig sewer rehabilitation.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on quality workmanship, transparent pricing, and exceptional customer service. When you choose Intelligent Design for your trenchless sewer repair, you're getting IPT-certified technicians trained on the most advanced trenchless technology, premium materials backed by 50-year warranties, comprehensive video documentation before and after repair, professional installation that meets or exceeds industry standards, and a team that stands behind every repair.
              </p>
              <p className="text-lg mb-6">
                We understand that sewer line problems create stress and uncertainty. That's why we offer free camera inspections with honest assessments of your repair options. If trenchless repair will save you money and deliver better results, we'll recommend it. If traditional excavation is more appropriate, we'll explain why and provide detailed quotes. Our goal is to help you make the best decision for your specific situation, not to push you toward the most expensive option.
              </p>
              <p className="text-lg mb-8">
                As a full-service plumbing company, we can also address related issues during your sewer repair. If your sewer line problems stem from improper grading, we can correct it. If you need a sump pump or backwater valve installed to prevent future backups, we have the expertise. If your entire sewer system would benefit from additional cleanouts for easier maintenance, we'll recommend them. This comprehensive approach ensures your plumbing system works efficiently for years to come.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Free Inspection"
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
        <ServiceFAQ faqs={trenchlessRepairFAQs.faqs} />

        {/* Business Information Section (NAP) */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Free Camera Inspection Today
              </h2>
              <div className="bg-card p-8 rounded-lg border text-center">
                <h3 className="text-2xl font-bold mb-4" data-testid="text-business-name">
                  Intelligent Design Air Conditioning, Plumbing, Solar, & Electric
                </h3>
                <div className="space-y-2 text-lg mb-6">
                  <p data-testid="text-address-line1">1145 E Fort Lowell Rd</p>
                  <p data-testid="text-address-line2">Tucson, AZ 85719</p>
                  <p className="text-xl font-bold text-primary" data-testid="text-phone">(520) 333-2665</p>
                  <p className="font-semibold" data-testid="text-hours">Certified IPT Trenchless Partner | ROC #171687</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Service Areas:</h4>
                  <p className="text-base">
                    Tucson, Marana, Oro Valley, Sahuarita, Vail, Green Valley, Catalina, Casas Adobes, Flowing Wells, Tanque Verde, Corona de Tucson, Drexel Heights, and all surrounding areas.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Free Inspection"
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