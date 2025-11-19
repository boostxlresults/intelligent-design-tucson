import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import DrainClearingSchema from '@/components/DrainClearingSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { drainClearingFAQs } from '@/data/faqs/plumbing';
import drainClearingHero from '@assets/generated_images/Professional_drain_clearing_service_46ea7cfd.webp';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import { CommonQuestions } from "@/components/CommonQuestions";
import { drainCleaningCommonQuestions } from "@/data/commonQuestions/plumbing";

const description = 'Professional drain clearing services in Tucson. Kitchen, bathroom & main line clogs. Hydro jetting, cable snaking, prevention tips. Call (520) 333-2665 for fast drain clearing.';
const imageUrl = new URL(drainClearingHero, import.meta.url).href;

export default function DrainClearing() {

  return (
    <>
      <MetaHead
        title="Drain Clearing Tucson AZ | Professional Clog Removal & Prevention"
        description={description}
        canonical={`${SITE_URL}/drain-clearing-tucson`}
        openGraph={[
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Drain Clearing Tucson AZ | Professional Clog Removal & Prevention" },
          { property: "og:description", content: description },
          { property: "og:url", content: `${SITE_URL}/drain-clearing-tucson` },
          { property: "og:image", content: imageUrl },
        ]}
        twitter={[
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "Drain Clearing Tucson AZ | Professional Clog Removal & Prevention" },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: imageUrl },
        ]}
      />
      <GTM />
      <DNIInjector />
      <DrainClearingSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${drainClearingHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Professional Drain Clearing Services in Tucson
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Fast Clog Removal | Kitchen & Bathroom Drains | Main Sewer Lines | Hydro Jetting | Same-Day Service | 45+ Years Experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Drain Service"
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
              Why Choose Intelligent Design for Drain Clearing?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Same-Day Service Available</p>
                  <p className="text-sm text-gray-600">Emergency drain clearing | Fast response times | Available 24/7 | Most clogs cleared within hours</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Professional Equipment</p>
                  <p className="text-sm text-gray-600">Cable snaking machines | Hydro jetting equipment | Camera inspection | Latest clearing technology</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">All Drain Types</p>
                  <p className="text-sm text-gray-600">Kitchen & bathroom sinks | Tubs & showers | Toilets | Main sewer lines | Floor drains | Outdoor drains</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Experienced Technicians</p>
                  <p className="text-sm text-gray-600">Licensed master plumbers | 45+ years local experience | Expert diagnostics | Honest assessments</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Upfront Pricing</p>
                  <p className="text-sm text-gray-600">No hidden fees | Clear cost estimates | $99 drain special available | Multiple payment options</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Prevention & Maintenance</p>
                  <p className="text-sm text-gray-600">Preventative drain cleaning | Maintenance plans | Expert advice | Long-term solutions</p>
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
                Expert Drain Clearing in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Clogged drains are among the most common and frustrating plumbing problems facing Tucson homeowners. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've cleared tens of thousands of drains since 1979, providing fast, effective solutions for every type of clog—from simple sink blockages to severe main sewer line obstructions. Our licensed master plumbers use professional-grade equipment and proven techniques to clear drains completely, identify underlying causes, and prevent future problems.
              </p>
              <p className="text-lg mb-6">
                Most homeowners try DIY solutions first—plungers, chemical drain cleaners, or drain snakes purchased from hardware stores. While these occasionally work for minor clogs, they often fail to completely clear blockages, damage pipes (especially chemical cleaners), or provide only temporary relief before clogs return worse than before. Professional drain clearing uses specialized equipment that homeowners don't have access to: power cable machines with various cutting heads, hydro jetting systems generating 3000-4000 PSI water pressure, and video camera inspection to diagnose problems accurately.
              </p>
              <p className="text-lg mb-8">
                Tucson's hard water creates unique drain challenges. Mineral deposits accumulate inside pipes over years, gradually narrowing passages and creating rough surfaces where debris catches. Our water contains 12-16 grains of hardness per gallon—among the highest in Arizona—accelerating buildup. Combined with aging infrastructure in many Tucson neighborhoods (homes from the 1970s-1990s with deteriorating cast iron or clay sewer lines), drain problems are more common and severe here than in areas with softer water and newer plumbing. We understand these local factors and tailor our clearing methods accordingly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Clear My Drain"
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

        {/* Drain Clearing Methods Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Drain Clearing Methods
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Cable Snaking (Mechanical Clearing)
              </h3>
              <p className="text-lg mb-6">
                Cable snaking uses a flexible metal cable fed through drain lines to mechanically break apart and clear clogs. Professional power cable machines are far more effective than handheld drain snakes sold in stores. Our equipment includes cables up to 100 feet long with variable speed controls and interchangeable cutting heads designed for different clog types: spear heads pierce and retrieve solid objects, auger heads bore through compacted waste, and blade cutters slice through roots and heavy accumulations.
              </p>
              <p className="text-lg mb-6">
                The process starts by accessing the drain through the fixture opening, cleanout, or toilet connection. We feed the cable into the line, rotating it to cut through the clog while pushing forward to reach the blockage location. The cutting action breaks apart the obstruction, allowing it to flush through the system or be pulled back with the cable. For sink and tub drains, we often clear the p-trap first before snaking further into the line. For toilets, we use specialized closet augers designed to navigate the fixture's internal trap.
              </p>
              <p className="text-lg mb-6">
                Cable snaking is highly effective for most common clogs: hair and soap scum in bathroom drains, grease and food particles in kitchen sinks, paper and waste in toilets, and minor root intrusions in sewer lines. It's faster and more affordable than hydro jetting for straightforward blockages. However, snaking only creates a hole through the clog rather than completely removing all buildup from pipe walls. For pipes with heavy grease coating, mineral deposits, or recurring root problems, hydro jetting provides more thorough, longer-lasting results.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Hydro Jetting (High-Pressure Water Cleaning)
              </h3>
              <p className="text-lg mb-6">
                Hydro jetting uses high-pressure water (typically 3000-4000 PSI for residential applications) to completely scour drain and sewer lines. A specialized nozzle attached to a high-pressure hose is inserted into the drain line. Water jets spray in all directions—forward to propel the hose through the line, and backward at angles to blast pipe walls. This removes all debris: grease coatings, mineral deposits, soap scum, roots, and any other accumulations, leaving pipes as clean as new construction.
              </p>
              <p className="text-lg mb-8">
                Hydro jetting is the gold standard for preventative drain maintenance and severe blockages. It's ideal for: kitchen drains with heavy grease buildup, recurring clogs in the same location (indicating incomplete clearing), main sewer lines with root intrusion, mineral-clogged pipes from hard water, and preventative maintenance to keep drains flowing freely. While more expensive than cable snaking ($350-$800 vs $125-$300), hydro jetting provides superior results that last much longer—often preventing problems for 1-3 years compared to months with snaking alone.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Get Expert Clearing"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Common Drain Problems Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Common Drain Problems in Tucson
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Kitchen Sink Clogs
              </h3>
              <p className="text-lg mb-6">
                Kitchen sinks clog from grease, food particles, and soap scum accumulation. Despite having garbage disposals, many homeowners pour cooking grease down drains. Hot grease flows easily when liquid but solidifies as it cools, coating pipe walls and trapping food particles. Over time, this creates thick deposits that narrow pipes and completely block drainage. Coffee grounds, rice, pasta, and fibrous vegetables compound the problem by sticking to grease layers.
              </p>
              <p className="text-lg mb-6">
                We clear kitchen clogs by accessing the drain at the sink's p-trap or through cleanout access points. For grease clogs, hot water and cable snaking often suffice for immediate relief. However, hydro jetting is more effective for removing all grease coatings and preventing rapid re-clogging. After clearing, we advise never pouring grease down drains—collect it in containers for trash disposal instead. Running hot water during and after dish washing helps, but can't overcome regular grease disposal.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Bathroom Drain Clogs
              </h3>
              <p className="text-lg mb-6">
                Bathroom sink and tub drains clog primarily from hair accumulation mixed with soap scum and toothpaste residue. Hair binds into matted clumps that catch additional debris, eventually blocking water flow completely. Pop-up drain stoppers in sinks trap more hair than drain screens. Bathtubs with internal overflow systems can develop clogs in the overflow drain that are difficult to reach without professional equipment.
              </p>
              <p className="text-lg mb-6">
                Bathroom clogs typically respond well to cable snaking. We remove the drain stopper or overflow plate to access the clog directly, clearing the p-trap and branch line. For stubborn accumulations or recurring problems, we may recommend removing the stopper mechanism entirely (using strainer-style covers instead) to prevent future hair collection. Hydro jetting is excellent for homes with multiple bathrooms experiencing recurring clogs, as it clears the main drain line thoroughly.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Main Sewer Line Blockages
              </h3>
              <p className="text-lg mb-8">
                Main sewer line clogs affect all drains in the home simultaneously. Symptoms include: multiple fixtures draining slowly, toilets gurgling when other fixtures drain, sewage backing up into tubs or showers (the lowest drains), and sewage odors. Causes include tree root intrusion through pipe joints or cracks, collapsed or bellied pipes from ground settling, flushed items creating major blockages, and deteriorating cast iron or clay pipes from age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency Clearing: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Prevention Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Preventing Drain Clogs
              </h2>
              <p className="text-lg mb-6">
                Prevention is far more cost-effective than repeated emergency drain clearing. Simple habits protect your drains: never pour grease, oil, or fat down kitchen sinks—they solidify in pipes. Use drain strainers to catch hair, food particles, and debris before entering pipes. Flush drains weekly with very hot water to help dissolve soap scum and grease. Avoid chemical drain cleaners—they damage pipes without solving underlying problems. Don't flush anything except toilet paper—wipes (even "flushable" ones), feminine products, cotton swabs, and paper towels cause clogs.
              </p>
              <p className="text-lg mb-6">
                For Tucson homeowners, installing a water softener dramatically reduces mineral buildup in all plumbing, including drain lines. Softened water prevents the scale deposits that create rough pipe surfaces where debris catches. This single investment protects your entire plumbing system—drains, water heater, fixtures, and appliances—from hard water damage.
              </p>
              <p className="text-lg mb-6">
                Preventative professional drain cleaning—typically annual hydro jetting of main sewer lines and kitchen drains—prevents problems before they occur. This proactive approach costs $350-$500 annually but eliminates emergency clearing calls ($300-$600 each) and the inconvenience of backed-up drains. For homes with recurring drain problems, tree roots near sewer lines, or old plumbing, preventative maintenance is especially valuable.
              </p>
              <p className="text-lg mb-8">
                If you have mature trees near your sewer lateral (the line from your home to the street), roots are almost certainly in your pipes. Palo verde, mesquite, and mulberry trees are particularly aggressive root growers. We recommend annual or bi-annual root clearing to prevent severe blockages. Camera inspection shows root extent and helps us schedule appropriate preventative clearing intervals. Severe root intrusion may eventually require pipe replacement, but regular clearing extends the life of existing pipes significantly.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Preventative Service"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Camera Inspection Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Video Camera Drain Inspection
              </h2>
              <p className="text-lg mb-6">
                When drains clog repeatedly in the same location, when clearing doesn't resolve problems, or when we suspect pipe damage, video camera inspection provides definitive answers. We insert a waterproof camera mounted on a flexible cable into drain lines, viewing real-time video of pipe interiors. This reveals: the exact cause and location of clogs, extent of root intrusion, broken or collapsed pipe sections, bellied pipes (sagging from ground settling), improper pipe slope, and overall pipe condition.
              </p>
              <p className="text-lg mb-6">
                Camera inspection costs $200-$400 but often saves far more by preventing unnecessary repairs. Instead of excavating exploratory trenches to find problems, we pinpoint exact locations for targeted repairs. The video recording documents pipe condition, helping you understand necessary repairs and make informed decisions. For home purchases, pre-inspection camera surveys of sewer lines reveal hidden problems before closing—potentially saving thousands in unexpected repairs.
              </p>
              <p className="text-lg mb-8">
                We use camera inspection strategically: when clogs recur within weeks of clearing (indicating incomplete clearing or structural problems), when conventional clearing methods fail, before recommending pipe replacement (to confirm necessity and plan scope), and for preventative evaluation of older sewer lines. The insight provided helps determine whether simple clearing suffices or whether more extensive repairs are needed, ensuring appropriate solutions and avoiding unnecessary costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section5">
                    <Phone className="w-5 h-5 mr-2" />
                    Camera Inspection: (520) 333-2665
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
                Why Choose Intelligent Design for Drain Clearing?
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has cleared drains throughout Tucson since 1979. We're a family and veteran-owned business with over 45 years of experience providing honest, professional plumbing services. Our licensed master plumbers use state-of-the-art equipment—professional power cable machines, hydro jetting systems, and video camera inspection—to clear drains completely and identify underlying problems.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on fast response times, effective clearing methods, upfront pricing, and lasting solutions. We don't just clear the immediate clog—we investigate why it happened and help you prevent future problems through maintenance advice and preventative service options. Our goal is solving drain problems permanently, not creating repeat customers through incomplete work.
              </p>
              <p className="text-lg mb-8">
                We offer same-day service for most drain clearing calls and 24/7 emergency service for severe backups. Our technicians arrive in fully stocked trucks with all equipment needed to clear any clog on the first visit. We provide upfront pricing before starting work—no hidden fees or surprise charges. And we stand behind our work with warranties on clearing service. When you call Intelligent Design, you're getting the most experienced, best-equipped drain clearing team in Tucson.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Get Fast Service"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section6"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={drainCleaningCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={drainClearingFAQs.faqs} />

        {/* Business Information Section (NAP) */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Schedule Your Drain Clearing Service Today
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