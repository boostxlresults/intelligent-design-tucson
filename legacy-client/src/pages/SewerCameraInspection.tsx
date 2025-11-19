import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import SewerCameraInspectionSchema from '@/components/SewerCameraInspectionSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { sewerCameraInspectionFAQs } from '@/data/faqs/plumbing';
import sewerCameraHero from '@assets/generated_images/Sewer_camera_inspection_service_9e9380c7.webp';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import { CommonQuestions } from "@/components/CommonQuestions";
import { sewerLineCommonQuestions } from "@/data/commonQuestions/plumbing";

const description = 'Professional sewer camera inspection in Tucson. HD video pipe inspection locates blockages, damage, root intrusion. Pre-purchase inspections. Call (520) 333-2665 for video inspection.';
const imageUrl = new URL(sewerCameraHero, import.meta.url).href;

export default function SewerCameraInspection() {

  return (
    <>
      <MetaHead
        title="Sewer Camera Inspection Tucson AZ | Video Pipe Inspection Services"
        description={description}
        canonical={`${SITE_URL}/sewer-camera-inspection-tucson`}
        openGraph={[
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Sewer Camera Inspection Tucson AZ | Video Pipe Inspection Services" },
          { property: "og:description", content: description },
          { property: "og:url", content: `${SITE_URL}/sewer-camera-inspection-tucson` },
          { property: "og:image", content: imageUrl },
        ]}
        twitter={[
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "Sewer Camera Inspection Tucson AZ | Video Pipe Inspection Services" },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: imageUrl },
        ]}
      />
      <GTM />
      <DNIInjector />
      <SewerCameraInspectionSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${sewerCameraHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Sewer Camera Inspection Services in Tucson, AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews | 45+ Years Experience
              </p>
              <p className="text-xl mb-8 text-gray-200">
                HD Video Pipe Inspection | Locate Blockages & Damage | Root Intrusion Detection | Pre-Purchase Inspections | Post-Repair Verification | Licensed ROC #171687
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
              Why Choose Intelligent Design for Sewer Camera Inspection?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">High-Definition Video Technology</p>
                  <p className="text-sm text-gray-600">Professional HD cameras | Crystal-clear imaging | LED lighting | Color display | Record inspections | Distance tracking</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Diagnostics</p>
                  <p className="text-sm text-gray-600">Locate all blockages | Identify damage extent | Root intrusion mapping | Corrosion assessment | Detailed reporting</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Pre-Purchase Inspections</p>
                  <p className="text-sm text-gray-600">Protect your investment | Avoid hidden sewer issues | Written reports | Cost estimates | Negotiation leverage</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Expert technicians | Trusted since 1979 | All pipe types</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Post-Repair Verification</p>
                  <p className="text-sm text-gray-600">Quality control inspections | Verify repairs done correctly | Before & after documentation | Peace of mind</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Video Documentation Included</p>
                  <p className="text-sm text-gray-600">Digital copies provided | Insurance documentation | Clear explanations | Informed decisions | Detailed reports</p>
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
                Professional Sewer Camera Inspection in Tucson
              </h2>
              <p className="text-lg mb-6">
                Sewer camera inspection provides visual proof of what's happening inside your underground sewer lines. Rather than guessing at problems based on symptoms or performing costly exploratory excavation, we thread a waterproof, high-definition camera through your sewer system to see exactly what's causing issues. This technology allows precise diagnosis of blockages, damage, root intrusion, corrosion, and other problems—information critical for planning cost-effective repairs and avoiding unnecessary work.
              </p>
              <p className="text-lg mb-6">
                At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've been using sewer camera technology since it became available to the plumbing industry in the 1990s. Our investment in professional-grade camera equipment and operator training ensures we capture clear, detailed images throughout your entire sewer system. We don't just identify obvious blockages—we assess overall pipe condition, identify developing problems before they cause failures, and provide documentation you can use for repair planning, insurance claims, or home sale negotiations.
              </p>
              <p className="text-lg mb-8">
                Sewer camera inspection is valuable in numerous situations: recurring backups that clearing doesn't permanently solve, pre-purchase inspections to avoid buying homes with hidden sewer problems, planning repairs or renovations that might affect sewer lines, verifying contractor repairs were completed properly, preventative maintenance to catch problems early, and locating exactly where tree roots have infiltrated pipes. For $200-$400, you gain complete visual knowledge of your sewer system's condition—information worth far more than the inspection cost when it prevents expensive misdiagnosed repairs or identifies problems before they cause emergency failures.
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

        {/* Technology Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Advanced Camera Inspection Technology
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                High-Definition Video Cameras
              </h3>
              <p className="text-lg mb-6">
                Our sewer cameras feature high-definition imaging sensors that capture crystal-clear video even in completely dark pipe environments. Powerful LED lighting rings surrounding the camera head illuminate pipe interiors brightly and evenly, eliminating shadows that might hide defects. The cameras transmit real-time color video to monitors, allowing operators and customers to watch inspection progress and see problems as they're discovered.
              </p>
              <p className="text-lg mb-6">
                Camera heads are waterproof and designed to navigate bends, offsets, and varying pipe diameters. Flexible push cables 100-400 feet long reach from house cleanouts to main sewer connections. Self-leveling camera heads maintain upright orientation regardless of pipe rotation, ensuring consistent viewing angle. Distance counters track exactly how far the camera has traveled from the access point—critical for pinpointing repair locations.
              </p>
              <p className="text-lg mb-6">
                Recording equipment captures the entire inspection digitally. We can pause, review, and capture still images of specific problem areas. After inspection, we provide digital copies of the video and photos for your records. This documentation proves invaluable when obtaining repair bids, filing insurance claims, or demonstrating to buyers/sellers the condition of sewer systems during real estate transactions.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                What Cameras Reveal
              </h3>
              <p className="text-lg mb-6">
                Sewer cameras identify numerous pipe conditions invisible without visual inspection. Root intrusion appears as white, fibrous material entering through cracks or joints—we see exactly where roots enter and how extensively they've grown inside pipes. Cracks and breaks show as bright spots where camera light escapes through damage, with video revealing crack size, direction, and location. Corrosion appears as rough, pitted pipe surfaces, particularly visible in aging cast iron where interior walls have deteriorated significantly.
              </p>
              <p className="text-lg mb-8">
                Blockages from grease, debris, or foreign objects are immediately obvious, with cameras showing what's blocking flow and how severely. Pipe separations or offsets—where pipe sections have pulled apart or misaligned due to ground settling—appear as gaps or ledges interrupting smooth pipe interior. Collapsed pipe sections show as complete pipe failure blocking camera progress. Improper slope manifests as standing water in pipe low spots. Overall pipe condition—material type, age-related wear, scaling from mineral deposits—becomes apparent throughout the inspection.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="See Your Sewer Line"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                When to Schedule Sewer Camera Inspection
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pre-Purchase Home Inspections
              </h3>
              <p className="text-lg mb-6">
                Sewer camera inspection is essential when purchasing Tucson homes, especially those built before 1980 when clay and cast iron sewer pipes were standard. These materials have 50-70 year lifespans and may be nearing failure. Sewer line replacement costs $3,000-$15,000+, and most standard home inspections don't include sewer evaluation. A $300 camera inspection can reveal problems allowing you to negotiate price reductions, require repairs before closing, or avoid purchasing homes with hidden sewer disasters.
              </p>
              <p className="text-lg mb-6">
                We inspect from house cleanout to main sewer connection, documenting entire sewer lateral condition. Our detailed reports include video evidence of problems, written assessment of severity, repair cost estimates for identified issues, and overall condition grading. This information protects you from buying homes requiring immediate sewer repairs or provides negotiating leverage to reduce purchase price by estimated repair costs. Many Tucson homebuyers have saved thousands by discovering sewer problems before closing.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Diagnosing Recurring Drain Problems
              </h3>
              <p className="text-lg mb-6">
                When drain clearing provides only temporary relief—backups return within weeks or months—camera inspection reveals underlying causes. Recurring clogs often indicate structural problems: root intrusion that grows back after clearing, pipe damage creating snag points for debris, improper slope allowing grease accumulation, or partial pipe collapses restricting flow. Identifying the root cause allows permanent fixes rather than repeated short-term clearing.
              </p>
              <p className="text-lg mb-8">
                Camera inspection also differentiates between problems requiring simple clearing versus repairs or replacement. A blockage from flushed items needs only clearing. Root intrusion through cracked pipes needs pipe repair or lining to prevent regrowth. Collapsed or severely corroded pipes need replacement. Without camera inspection, you might pay repeatedly for clearing when the real solution requires repair—or conversely, you might be told you need expensive replacement when clearing would solve the problem. Visual evidence ensures appropriate solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Solve Drain Problems: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Verification Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Post-Repair Verification and Quality Control
              </h2>
              <p className="text-lg mb-6">
                After major sewer repairs—trenchless lining, excavation and replacement, or root removal—camera inspection verifies work was completed correctly. We inspect to confirm: repairs occurred at correct locations identified in diagnostic inspection, new materials were installed properly without defects, pipe alignment and slope meet code requirements, connections are sealed preventing leaks or future root intrusion, and no damage or debris was left inside pipes during repair work.
              </p>
              <p className="text-lg mb-6">
                This quality control protects you. Contractors make mistakes—working in wrong locations, leaving tools or debris in pipes, improper slope causing future drainage problems, or damaged pipes during excavation. Discovering these problems immediately while contractors are on-site under warranty allows correction at no additional cost. Discovering them months later after warranties expire or contractors have moved on leaves you paying for others' mistakes.
              </p>
              <p className="text-lg mb-6">
                For trenchless pipe lining, post-repair inspection is essential. We verify liner installed completely without gaps, cured properly with smooth interior surface, sealed all identified cracks and root entry points, and restored full pipe diameter without narrowing flow. For traditional repairs, we confirm new pipe installed with proper connections, correct slope throughout the run, and no offset or misalignment at joints.
              </p>
              <p className="text-lg mb-8">
                We provide before-and-after camera footage showing conditions prior to repair and results after completion. This documentation proves repairs were necessary and completed properly—valuable for insurance claims, warranty enforcement, or resale disclosure. Always insist on post-repair camera verification when hiring contractors for sewer work. Reputable contractors welcome verification; questionable contractors resist it.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Verify Your Sewer Repair"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Preventative Maintenance Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Preventative Maintenance and Real-Time Monitoring
              </h2>
              <p className="text-lg mb-6">
                Preventative camera inspection every 5-10 years identifies developing problems before they cause failures. Early-stage root intrusion can be cleared before roots damage pipes. Minor cracks can be monitored or lined before they become major breaks. Gradual corrosion can be tracked, allowing planned replacement at convenient times rather than emergency situations. Preventative inspection costs $200-$400; emergency sewer failures cost thousands in repairs plus water damage restoration.
              </p>
              <p className="text-lg mb-6">
                Homes with known risk factors benefit especially from regular inspection. Large mature trees near sewer lines require monitoring for root intrusion every 2-3 years. Homes with aging clay or cast iron pipes should be inspected every 3-5 years to track deterioration and plan eventual replacement. Properties with previous sewer problems need follow-up inspection to ensure repairs remain effective and no new issues develop.
              </p>
              <p className="text-lg mb-6">
                Camera inspection provides peace of mind for homeowners concerned about sewer condition. If you experience slow drains, unusual odors, or worry about aging pipes, inspection either identifies problems requiring attention or confirms your system is functioning properly. This knowledge allows informed decisions about maintenance, repairs, or budgeting for eventual replacement rather than anxious uncertainty.
              </p>
              <p className="text-lg mb-8">
                Real-time monitoring during active problems helps diagnose intermittent issues. If you experience backups only during rain (possible groundwater infiltration through cracks), inspection during wet periods reveals water entering pipes. If certain fixtures cause problems while others don't, camera inspection traces each drain line to identify where blockages or damage occur. This diagnostic capability ensures we address actual problems rather than guessing based on limited symptoms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section5">
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule Inspection: (520) 333-2665
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
                Why Choose Intelligent Design for Sewer Camera Inspection?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has served Tucson families since 1979. We're a family and veteran-owned business with over 45 years of experience providing honest, professional plumbing services. Our licensed master plumbers are trained in video camera operation and pipe assessment, ensuring accurate diagnosis of sewer conditions and clear communication of findings.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on quality workmanship, transparent pricing, and exceptional customer service. When you choose Intelligent Design for sewer camera inspection, you're getting: professional HD camera equipment providing crystal-clear images, experienced technicians who understand what they're seeing and can explain it clearly, comprehensive written reports with video documentation for your records, honest assessments and repair recommendations without pressure tactics, all pipe types and diameters inspected professionally, and follow-up repair services if problems are identified.
              </p>
              <p className="text-lg mb-8">
                We invest in top-quality camera equipment and maintain it meticulously for reliable operation. Our technicians undergo training not just in camera operation but in pipe materials, sewer system design, and problem diagnosis. This expertise ensures we identify all issues—not just obvious blockages but subtle warning signs of developing problems. Licensed, bonded, and insured (ROC #171687), we provide professional sewer inspection services with detailed documentation and clear explanations of findings.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Inspection Today"
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
        <ServiceFAQ faqs={sewerCameraInspectionFAQs.faqs} />

        {/* Business Information Section (NAP) */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Sewer Camera Inspection Today
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
                    triggerText="Schedule Inspection"
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