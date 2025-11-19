import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import GarbageDisposalSchema from '@/components/GarbageDisposalSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { garbageDisposalFAQs } from '@/data/faqs/plumbing';
import garbageDisposalHero from '@assets/generated_images/Garbage_disposal_installation_service_874790af.png';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import { CommonQuestions } from "@/components/CommonQuestions";
import { garbageDisposalCommonQuestions } from "@/data/commonQuestions/plumbing";

const description = 'Expert garbage disposal installation and repair in Tucson. Install new disposals, fix jammed units, stop leaks. All major brands. Licensed plumbers. Call (520) 333-2665 for same-day service.';
const imageUrl = new URL(garbageDisposalHero, import.meta.url).href;

export default function GarbageDisposal() {

  return (
    <>
      <MetaHead
        title="Garbage Disposal Installation & Repair Tucson AZ | Professional Installation"
        description={description}
        canonical={`${SITE_URL}/garbage-disposal-installation-tucson`}
        openGraph={[
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Garbage Disposal Installation & Repair Tucson AZ | Professional Installation" },
          { property: "og:description", content: description },
          { property: "og:url", content: `${SITE_URL}/garbage-disposal-installation-tucson` },
          { property: "og:image", content: imageUrl },
        ]}
        twitter={[
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "Garbage Disposal Installation & Repair Tucson AZ | Professional Installation" },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: imageUrl },
        ]}
      />
      <GTM />
      <DNIInjector />
      <GarbageDisposalSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${garbageDisposalHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Garbage Disposal Installation & Repair in Tucson, AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews | 45+ Years Experience
              </p>
              <p className="text-xl mb-8 text-gray-200">
                New Installation | Disposal Repair | Leak Fixes | Jam Removal | All Major Brands | Same-Day Service | Licensed Plumbers ROC #171687
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Installation"
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
              Why Choose Intelligent Design for Garbage Disposal Service?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Expert Installation Service</p>
                  <p className="text-sm text-gray-600">All major brands installed | InSinkErator, Waste King, Moen | Proper electrical setup | Leak-free connections | Code-compliant work</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Fast Repair Services</p>
                  <p className="text-sm text-gray-600">Fix jammed disposals | Stop leaks | Replace worn parts | Same-day repairs | Emergency service available</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Licensed & Experienced</p>
                  <p className="text-sm text-gray-600">45+ years serving Tucson | Licensed plumbers & electricians | ROC #171687 | Fully insured | 22,000+ reviews</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Quality Equipment</p>
                  <p className="text-sm text-gray-600">Premium disposal models | Hard water resistant | Powerful motors (1/2-1 HP) | Sound insulation | Anti-jam features</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Transparent Pricing</p>
                  <p className="text-sm text-gray-600">Upfront quotes | No hidden fees | Competitive rates | Financing available | Warranty included</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Complete Service</p>
                  <p className="text-sm text-gray-600">Old disposal removal | Professional installation | Testing & cleanup | Operation training | Maintenance tips</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Garbage Disposal Installation in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                A properly functioning garbage disposal transforms kitchen cleanup from a chore into a convenience, grinding food waste efficiently while keeping your kitchen fresh and your drains flowing freely. Modern garbage disposals offer powerful motors, quiet operation, corrosion-resistant components, and advanced features like anti-jam technology that make them essential kitchen appliances. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've installed thousands of garbage disposals throughout Tucson homes since 1979, providing professional installation that ensures years of reliable performance and hassle-free operation.
              </p>
              <p className="text-lg mb-6">
                Tucson's extremely hard water—measuring 13-15 grains per gallon among the hardest in the nation—creates unique challenges for garbage disposals. Mineral buildup accelerates wear on internal components, corrodes mounting assemblies, and can cause premature failure in lower-quality units. That's why we recommend and install premium disposal models with stainless steel grind chambers, corrosion-resistant components, and robust construction designed to withstand our harsh water conditions. Proper installation with leak-proof connections, secure electrical wiring, and appropriate drain integration ensures your investment performs optimally for 10-15 years or longer.
              </p>
              <p className="text-lg mb-8">
                Our garbage disposal installation service includes comprehensive consultation on appropriate sizing and features for your household needs, professional removal and disposal of old units, expert installation with proper electrical connections, leak-free drain hookup and testing, secure mounting that prevents vibration and noise, thorough testing to ensure proper operation, complete cleanup of work area, and detailed instructions on proper use and maintenance. We install all major brands including InSinkErator, Waste King, Moen, and KitchenAid, helping you select models with appropriate horsepower, noise levels, warranties, and special features that match your cooking habits and family size. Whether you're replacing a failed disposal, upgrading to a more powerful model, or installing your first garbage disposal, we make the process straightforward, affordable, and worry-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Get Free Estimate"
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
                Choosing the Right Garbage Disposal for Your Tucson Home
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Horsepower & Grinding Performance
              </h3>
              <p className="text-lg mb-6">
                Garbage disposal horsepower directly impacts grinding performance, noise levels, and longevity. A 1/2 horsepower disposal suits 1-2 person households with light usage—occasional vegetable scraps, small amounts of food waste, and infrequent operation. These budget-friendly models ($100-$200) work adequately for minimal demands but struggle with tougher materials and may jam more frequently. A 3/4 horsepower disposal represents the sweet spot for most Tucson families of 3-4 people with moderate to heavy cooking. These mid-range models ($200-$400) handle most food waste efficiently, grind faster to reduce water usage, operate more quietly than 1/2 HP units, and resist jamming better under normal use.
              </p>
              <p className="text-lg mb-6">
                For large families, avid home cooks, or households that generate substantial food waste, 1 horsepower or higher disposals ($400-$800) deliver professional-grade performance. These premium units power through tough materials like chicken bones, corn cobs, and fruit pits that would jam lesser disposals. They feature heavy-duty motors that last longer, superior sound insulation for quieter operation, and advanced grinding systems that pulverize waste more thoroughly to prevent drain clogs. In Tucson's hard water environment, the robust construction of higher-horsepower models better resists mineral-related corrosion and deterioration.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Grind Chamber Materials & Hard Water Resistance
              </h3>
              <p className="text-lg mb-6">
                Grind chamber material significantly affects disposal longevity in Tucson's harsh water conditions. Budget disposals use galvanized steel chambers that corrode rapidly in hard water, typically failing within 5-7 years from rust perforation. Mid-range models feature stainless steel grind chambers offering superior corrosion resistance—essential for Tucson installations where mineral-laden water constantly contacts metal surfaces. Stainless steel chambers typically last 10-15 years even with hard water exposure, maintain grinding efficiency longer as corrosion doesn't dull grind components, resist odor retention better than galvanized steel, and minimize mineral buildup that can impede operation.
              </p>
              <p className="text-lg mb-8">
                Premium disposals incorporate additional hard water protection features: reinforced stainless steel construction throughout critical components, special coatings that resist mineral adhesion, sealed bearings and motors protected from water intrusion, and corrosion-resistant mounting assemblies and fasteners. While these premium features increase initial cost by $100-$300, they dramatically extend disposal lifespan in Tucson's challenging water conditions, often providing better long-term value than frequent replacement of budget units. We help you balance upfront costs against expected service life based on your water quality, usage patterns, and budget constraints.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Installation"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Garbage Disposal Repair & Troubleshooting
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Common Disposal Problems & Solutions
              </h3>
              <p className="text-lg mb-6">
                Jammed disposals represent the most frequent service call we receive. Disposals jam when foreign objects (silverware, bottle caps, bones) or fibrous foods (celery, corn husks, potato peels) lodge between grinding components and the flywheel. A humming motor with no grinding indicates jamming—the motor runs but the flywheel can't rotate. We resolve jams by cutting power to prevent motor burnout, using a disposal wrench or Allen key to manually rotate the flywheel and free the obstruction, removing jammed materials from the chamber, and testing operation after clearing. Some disposals feature reset buttons that trip when jams overload the motor—pressing the reset button after clearing the jam often restores function.
              </p>
              <p className="text-lg mb-6">
                Disposal leaks develop from several sources requiring different repairs. Leaks at the sink flange indicate deteriorated putty or loose mounting assembly—we tighten mounting bolts or replace the entire mounting assembly if corrosion has occurred. Dishwasher connection leaks result from loose hose clamps or deteriorated connection nipples—we secure connections and replace worn components. Drain elbow leaks come from loose slip-joint nuts or worn gaskets—we tighten connections and replace gaskets as needed. Housing cracks from freeze damage or impact cannot be economically repaired—cracked housings require complete disposal replacement. In Tucson's hard water, mineral buildup often accelerates gasket deterioration and corrosion at connection points, making regular inspection important for early leak detection.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Unusual Noises & Performance Issues
              </h3>
              <p className="text-lg mb-6">
                Grinding or rattling noises often indicate foreign objects in the disposal chamber. Metal items like silverware, bottle caps, or twist-ties create loud grinding sounds and can damage grind components if not removed quickly. We immediately shut off power, manually check the chamber for foreign objects, and remove any items found. Glass fragments are particularly problematic—if glass breaks in a disposal, we recommend thorough cleaning rather than grinding, as glass can damage seals and create dangerous sharp edges in your plumbing.
              </p>
              <p className="text-lg mb-8">
                Slow grinding or frequent resets indicate motor problems or dull grind components from wear. Disposals lose grinding efficiency over time as impellers and shred rings wear down, particularly when subjected to hard materials or mineral buildup from Tucson's water. If your disposal requires frequent resets, takes much longer to grind than when new, or struggles with foods it previously handled easily, the unit may be approaching end of service life. On disposals over 8-10 years old with declining performance, replacement typically provides better value than attempting repairs, especially given modern disposal improvements in efficiency, noise reduction, and durability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Repairs: (520) 333-2665
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
                Professional Installation Process
              </h2>
              <p className="text-lg mb-6">
                Professional garbage disposal installation ensures safe electrical connections, leak-free operation, and optimal performance for years. Our installation process begins with assessing your existing setup—sink configuration, drain line condition, available electrical power, and under-sink space constraints. We measure sink opening dimensions to ensure proper mounting fit, verify electrical circuit capacity for the disposal model selected, inspect drain line condition and configuration, and identify any necessary modifications before beginning installation. This comprehensive pre-installation assessment prevents surprises and ensures we have all necessary materials and adapters for seamless installation.
              </p>
              <p className="text-lg mb-6">
                The installation process includes complete removal of old disposal if present, thorough cleaning of sink flange mounting area to ensure proper seal, installation of new mounting assembly with fresh plumber's putty creating watertight seal, secure disposal mounting that prevents vibration and loosening, professional electrical connection using proper wire gauge and junction box, dishwasher drain hose connection if applicable with proper high loop or air gap, drain line connection using appropriate adapters and gaskets, and comprehensive testing under various load conditions. We ensure all electrical work meets National Electrical Code requirements, all plumbing connections are leak-free, disposal operates quietly without excessive vibration, and reset button functions properly.
              </p>
              <p className="text-lg mb-8">
                After installation, we provide thorough training on proper disposal operation and maintenance. We demonstrate correct startup procedure (always run cold water before and during grinding), explain what foods to avoid (fibrous vegetables, expandable starches, grease and oil), show how to use the reset button if overload occurs, and recommend regular cleaning methods (ice cubes and citrus peels weekly to clean and freshen). We also explain warranty coverage, provide manufacturer documentation, and schedule optional follow-up inspection if desired. Our goal is ensuring you understand your new disposal and can maintain it properly for maximum longevity—especially important in Tucson's hard water environment where proper care dramatically extends disposal lifespan.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Service"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Maintenance Tips for Tucson's Hard Water
              </h2>
              <p className="text-lg mb-6">
                Proper maintenance extends garbage disposal lifespan and prevents common problems, especially in Tucson's challenging hard water environment. Weekly maintenance includes grinding ice cubes to scour the grind chamber and dislodge accumulated debris, feeding citrus peels (lemon or orange) to naturally clean and deodorize the disposal, running cold water for 15-20 seconds after grinding to flush all waste through drain lines completely, and avoiding putting grease, oil, or fat down the disposal as these congeal and trap food particles. These simple weekly habits prevent the gradual buildup of food residue and mineral deposits that cause odors and reduce grinding efficiency.
              </p>
              <p className="text-lg mb-6">
                Monthly deep cleaning prevents mineral buildup from Tucson's hard water. Pour 1-2 cups of white vinegar down the disposal, let it sit for 10-15 minutes to dissolve mineral deposits, run cold water and operate disposal for 30 seconds to flush loosened minerals, and optionally grind baking soda for additional cleaning and deodorizing. This monthly vinegar treatment dissolves hard water scale before it accumulates enough to impede operation or cause component deterioration. For disposals showing signs of mineral buildup (slower grinding, unusual noises, or persistent odors despite regular cleaning), more frequent vinegar treatments help restore performance.
              </p>
              <p className="text-lg mb-8">
                Long-term maintenance considerations include annual professional inspection if you have well water or very hard municipal water, water softener installation to dramatically reduce mineral buildup on all plumbing fixtures including disposals, prompt attention to any unusual noises or performance changes before small problems become expensive failures, and avoiding common disposal-killers like potato peels (create paste), eggshells (membrane can wrap around components), coffee grounds (accumulate and form sludge), pasta and rice (expand and create clogs), and fibrous vegetables like celery and asparagus (stringy fibers wrap around moving parts). By following these maintenance practices and using your disposal properly, quality units routinely last 12-15 years even in Tucson's hard water—providing excellent long-term value from your investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Get Free Consultation"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section5"
                />
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section5">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={garbageDisposalCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={garbageDisposalFAQs.faqs} serviceName={garbageDisposalFAQs.serviceName} serviceId={garbageDisposalFAQs.serviceId} />

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Professional Garbage Disposal Service?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get expert installation or repair from Tucson's trusted plumbing professionals. 45+ years experience, 22,000+ five-star reviews, and same-day service available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SchedulerEmbed
                triggerText="Schedule Service Now"
                variant="destructive"
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
                  Call: (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Serving Tucson & Surrounding Areas
              </h2>
              <p className="text-gray-700 mb-2">
                <strong>Intelligent Design Air Conditioning, Plumbing, Solar, & Electric</strong>
              </p>
              <p className="text-gray-700 mb-2">
                1145 E Fort Lowell Rd, Tucson, AZ 85719
              </p>
              <p className="text-gray-700 mb-2">
                Phone: <a href="tel:+15203332665" className="text-primary hover:underline">(520) 333-2665</a>
              </p>
              <p className="text-gray-600 mt-4">
                Licensed, Bonded & Insured | ROC #171687 | Serving Tucson, Oro Valley, Marana, Sahuarita, Vail, and all of Pima County
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
