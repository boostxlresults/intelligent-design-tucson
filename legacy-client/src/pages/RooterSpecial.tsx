import { useEffect } from 'react';
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
import { rooterSpecialFAQs } from '@/data/faqs/plumbing';
import rooterServiceHero from '@assets/generated_images/Professional_rooter_drain_clearing_a93068d8.webp';
import RooterSpecialSchema from '@/components/RooterSpecialSchema';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';

export default function RooterSpecial() {
  const description = 'Professional rooter and drain clearing services in Tucson. Same-day service for clogged drains, sewer lines & main lines. Video camera inspection. Call (520) 333-2665 for emergency service.';
  const imageUrl = `${SITE_URL}${rooterServiceHero}`;

  return (
    <>
      <MetaHead
        title="Rooter Services & Drain Clearing Tucson AZ | Same-Day Service"
        description={description}
        canonical={`${SITE_URL}/rooter-services-tucson`}
        openGraph={{
          title: "Rooter Services & Drain Clearing Tucson AZ | Same-Day Service",
          description,
          image: imageUrl,
          url: `${SITE_URL}/rooter-services-tucson`,
        }}
        twitter={{
          title: "Rooter Services & Drain Clearing Tucson AZ | Same-Day Service",
          description,
          image: imageUrl,
          imageAlt: "Professional rooter and drain clearing service in Tucson",
        }}
      />
      <GTM />
      <DNIInjector />
      <RooterSpecialSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${rooterServiceHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Professional Rooter Services & Drain Clearing in Tucson, AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Same-Day Service | Clogged Drains & Sewer Lines | Video Camera Inspection | Hydro Jetting | Emergency Service Available
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Drain Clearing"
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
              Why Choose Our Rooter & Drain Clearing Services?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Same-Day Emergency Service</p>
                  <p className="text-sm text-gray-600">Rapid response times | Priority scheduling | After-hours availability | No overtime charges</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Advanced Camera Inspection</p>
                  <p className="text-sm text-gray-600">Pinpoint clogs & damage | Video documentation | Accurate diagnosis | Before & after proof</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Professional Hydro Jetting Available</p>
                  <p className="text-sm text-gray-600">3,000-4,000 PSI cleaning | Complete pipe cleaning | Grease & root removal | Long-lasting results</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">All Types of Drain Clogs</p>
                  <p className="text-sm text-gray-600">Kitchen & bathroom drains | Main sewer lines | Storm drains | Floor drains | Any blockage</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Upfront Pricing & Guarantees</p>
                  <p className="text-sm text-gray-600">No hidden fees | Clear quotes before work | Satisfaction guarantee | Warranty on workmanship</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | Licensed plumbers | 22,000+ reviews | Trusted since 1979</p>
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
                Professional Rooter Services & Drain Clearing in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                A clogged drain is more than an inconvenience—it disrupts your daily routine, creates unsanitary conditions, and can lead to costly water damage if not addressed promptly. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we provide professional rooter and drain clearing services throughout Tucson and surrounding areas. Whether you're dealing with a slow kitchen sink, backed-up toilet, or complete sewer line blockage, our licensed plumbers have the equipment and expertise to clear the clog and restore proper drainage.
              </p>
              <p className="text-lg mb-6">
                Since 1979, Tucson homeowners have trusted Intelligent Design for honest, reliable drain clearing service. We arrive fully equipped with professional rooter machines, hydro jetting equipment, and video camera inspection technology. Our technicians diagnose the cause of your clog, explain your options, and provide upfront pricing before starting work. We don't upsell unnecessary services—we solve your drainage problem efficiently and get you back to normal as quickly as possible.
              </p>
              <p className="text-lg mb-8">
                We understand that drain clogs don't happen on a convenient schedule. That's why we offer same-day service for most drain emergencies and maintain evening and weekend availability. When you call with a clogged drain or backed-up sewer, we prioritize your service request and typically arrive within hours. Most clogs are cleared in a single visit, with your drains flowing freely before we leave. If we discover underlying problems during service, we'll explain the issue and recommend appropriate solutions—but the immediate goal is always to restore function fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Service Now"
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

        {/* Services We Provide Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Comprehensive Rooter & Drain Clearing Services
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Residential Drain Clearing
              </h3>
              <p className="text-lg mb-6">
                We clear all types of residential drain clogs throughout your home. Kitchen sink clogs caused by grease, food particles, and soap buildup are among the most common service calls. Bathroom drains clog from hair, soap scum, and personal care products. Toilet clogs result from excessive paper, foreign objects, or main line blockages. Floor drains in laundry rooms, garages, and basements collect lint, dirt, and debris that create blockages over time.
              </p>
              <p className="text-lg mb-6">
                Our technicians carry professional rooter equipment sized appropriately for residential drains—from small cable machines for sink and tub clogs to powerful drum machines for main sewer lines. We also use specialized tools like closet augers for toilet clogs and flexible cable extensions to navigate around bends and reach distant blockages. Most residential drain clogs are cleared in 30-60 minutes, with minimal disruption to your home.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Main Sewer Line Clearing
              </h3>
              <p className="text-lg mb-6">
                When multiple drains back up simultaneously, or when you experience sewage backing up into tubs or showers, the problem is likely in your main sewer line. Main line clogs are serious because they prevent all wastewater from leaving your home. Common causes include tree root intrusion, grease accumulation, collapsed or damaged pipes, flushed foreign objects, and scale buildup in older cast iron or clay pipes.
              </p>
              <p className="text-lg mb-6">
                We use heavy-duty rooter machines with powerful motors and large-diameter cables to clear main sewer line blockages. These machines can cut through tree roots, break apart solid obstructions, and scrape away buildup from pipe walls. For particularly stubborn clogs or extensive root intrusion, we may recommend hydro jetting for more thorough cleaning. We always perform camera inspection on main line calls to identify the exact cause and location of the blockage and check for underlying pipe damage.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Hydro Jetting Services
              </h3>
              <p className="text-lg mb-6">
                Hydro jetting is the most effective drain cleaning method available, using high-pressure water (3,000-4,000 PSI) to thoroughly scour pipe interiors. Unlike standard rooter service that punches a hole through clogs, hydro jetting cleans the entire circumference of the pipe, removing grease, scale, roots, and debris. The result is pipes that flow like new and stay clear much longer than conventional drain clearing.
              </p>
              <p className="text-lg mb-6">
                We recommend hydro jetting for restaurants and commercial kitchens with heavy grease buildup, homes with chronic clogging problems, older pipes with significant scale accumulation, severe root intrusion in sewer lines, and as preventive maintenance for trouble-free drainage. Hydro jetting is safe for most pipe materials when performed by experienced technicians who understand proper pressure settings and techniques. We always camera-inspect pipes before hydro jetting to ensure they're structurally sound enough to withstand the water pressure.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Video Camera Inspection
              </h3>
              <p className="text-lg mb-8">
                Video camera inspection is an invaluable diagnostic tool that shows exactly what's happening inside your drains and sewer lines. We use waterproof cameras mounted on flexible cables to navigate through pipes, transmitting live video to a monitor. This allows us to see clogs, cracks, root intrusion, corrosion, collapsed sections, and other issues that aren't visible from the surface.
              </p>
              <p className="text-lg mb-8">
                Camera inspection helps us provide accurate diagnosis instead of guessing, locate problems precisely to minimize access work, identify underlying issues causing recurring clogs, and document pipe condition for insurance or warranty claims. For recurring drain problems, camera inspection often reveals the root cause and allows us to recommend permanent solutions rather than temporary fixes. You receive a copy of the inspection video and a written report explaining our findings.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Request Camera Inspection"
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
                Common Drain Problems We Solve
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Kitchen Drain Clogs
              </h3>
              <p className="text-lg mb-6">
                Kitchen drains handle grease, food particles, soap, and other materials that create stubborn clogs. Grease is particularly problematic—it flows down drains as a liquid when hot, then solidifies as it cools, accumulating on pipe walls and trapping other debris. Over time, this buildup narrows the pipe opening until water can barely flow. Food particles, coffee grounds, and starchy materials add to the problem, creating dense clogs that resist simple plunging.
              </p>
              <p className="text-lg mb-6">
                We clear kitchen drain clogs using cable machines with specialized cutting heads designed to scrape away grease and break apart food particles. For severe grease clogs, hydro jetting is often the best solution—the high-pressure water cuts through grease completely and flushes it from the system. We also provide recommendations for preventing future kitchen clogs, such as using drain screens, disposing of grease properly, and running hot water after using the garbage disposal.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Bathroom Drain Blockages
              </h3>
              <p className="text-lg mb-6">
                Bathroom drains—especially shower, tub, and sink drains—commonly clog from hair accumulation combined with soap scum, toothpaste, and personal care products. Hair is particularly troublesome because it doesn't break down and tends to catch on rough spots inside pipes, creating mats that trap other materials. Bathroom sink pop-up assemblies also collect hair and gunk that restrict drainage.
              </p>
              <p className="text-lg mb-6">
                We use specialized tools for bathroom drain clogs, including flexible cable machines that navigate the tight bends in trap configurations and barbed drain tools that hook and remove hair clogs. For shower and tub drains, we often remove the strainer or overflow plate to access the clog directly. Slow bathroom drains caught early are usually simple fixes—waiting until water no longer drains at all makes the job more difficult and expensive.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Toilet Clogs & Backups
              </h3>
              <p className="text-lg mb-6">
                Toilets clog for various reasons: excessive toilet paper, flushing of inappropriate items (wipes, feminine products, paper towels), foreign objects (especially in homes with small children), and main sewer line blockages that prevent waste from draining. While many toilet clogs can be cleared with a plunger, some require professional equipment, and recurring toilet clogs usually indicate a deeper problem.
              </p>
              <p className="text-lg mb-6">
                We use closet augers—specialized tools designed specifically for toilet clogs—to reach blockages without damaging the porcelain. For clogs beyond the toilet trap, we may need to access the main line through a cleanout or roof vent. If multiple toilets in your home are backing up or flushing slowly, the problem is likely in the main sewer line, requiring rooter service or camera inspection to diagnose and clear.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Tree Root Intrusion
              </h3>
              <p className="text-lg mb-8">
                Tree roots are one of the most common causes of sewer line clogs in Tucson. Roots naturally seek water sources and will infiltrate sewer lines through joints, cracks, or weak points in the pipe material. Once inside, roots grow rapidly in the nutrient-rich environment, eventually filling the pipe and causing complete blockages. Clay and cast iron pipes are particularly vulnerable to root intrusion.
              </p>
              <p className="text-lg mb-8">
                We clear root clogs using specialized root-cutting blades attached to our rooter equipment. These blades are designed to shear through roots while minimizing damage to the pipe itself. However, root cutting is usually a temporary solution—roots will grow back unless the pipe is repaired or lined. After clearing root clogs, we typically recommend camera inspection to assess pipe condition and discuss long-term solutions like trenchless pipe lining to permanently prevent root intrusion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency Service: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Drain Maintenance Tips Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Preventing Future Drain Clogs
              </h2>
              <p className="text-lg mb-6">
                While professional drain clearing solves immediate clogs, prevention is always better than cure. Following a few simple practices can dramatically reduce the frequency of drain clogs and extend the time between professional service calls.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Kitchen Sink Best Practices
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    Never pour grease, oil, or fat down the drain. Let it cool and dispose of it in the trash instead.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    Use sink strainers to catch food particles before they enter the drain.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    Run hot water for 30 seconds after using the garbage disposal to flush food particles through the line.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    Avoid putting fibrous vegetables (celery, asparagus), coffee grounds, or eggshells down the disposal.
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Bathroom Drain Maintenance
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    Install hair catchers in shower and tub drains, and clean them regularly.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    Remove and clean sink pop-up assemblies every few months to prevent hair and gunk buildup.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    Flush drains weekly with hot water to dissolve soap scum and prevent buildup.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    Address slow drains promptly—they're warning signs that a clog is forming.
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Toilet Care
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    Only flush toilet paper and human waste—nothing else.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    Even "flushable" wipes shouldn't be flushed—they don't break down like toilet paper and cause clogs.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    Use reasonable amounts of toilet paper. If you need more, flush twice rather than creating a large mass.
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Preventive Maintenance Service
              </h3>
              <p className="text-lg mb-8">
                For homes with chronic drainage issues or older plumbing systems, annual preventive drain cleaning can prevent emergency clogs and extend pipe life. We can schedule yearly hydro jetting or rooter service to clear buildup before it becomes a problem. This is especially valuable for homes with mature trees near sewer lines, older cast iron or clay pipes, or heavy kitchen use. Preventive maintenance costs less than emergency service and provides peace of mind that your drains will function reliably.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Preventive Service"
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
                Why Tucson Trusts Intelligent Design for Drain Clearing
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has served Tucson families since 1979. We're a family and veteran-owned business with over 45 years of experience providing honest, reliable plumbing services. Our team includes licensed master plumbers who have cleared thousands of drains throughout Tucson and understand the unique challenges of our local plumbing systems.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a 4.97 Google rating, we've built our reputation on quality workmanship, fair pricing, and exceptional customer service. When you call Intelligent Design for drain clearing, you're getting same-day service for most clogs, upfront pricing with no hidden fees, professional equipment operated by licensed plumbers, honest diagnosis without upselling unnecessary services, and satisfaction guaranteed on all work performed.
              </p>
              <p className="text-lg mb-6">
                We understand that drain clogs are stressful and disruptive. Our technicians arrive on time, work efficiently, and treat your home with respect. We explain what we find, show you the problem if possible, and discuss options for both immediate clearing and long-term prevention. If camera inspection reveals underlying pipe damage, we provide honest recommendations for repair or replacement—but we never pressure you into services you don't need.
              </p>
              <p className="text-lg mb-8">
                As a full-service plumbing company, we can handle any drain or sewer issue you encounter. From simple sink clogs to complex main line problems, from routine maintenance to emergency backups, we have the expertise and equipment to solve your drainage problems quickly and effectively. And because we've been serving Tucson since 1979, we stand behind our work with warranties and a reputation we've spent decades building.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section5">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Today: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={rooterSpecialFAQs.faqs} />

        {/* Business Information Section (NAP) */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Get Professional Drain Clearing Today
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
                    triggerText="Schedule Drain Service"
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