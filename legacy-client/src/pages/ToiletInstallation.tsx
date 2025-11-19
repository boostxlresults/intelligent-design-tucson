import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import ToiletInstallationSchema from '@/components/ToiletInstallationSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import ServiceFAQ from '@/components/ServiceFAQ';
import { toiletInstallationFAQs } from '@/data/faqs/plumbing';
import toiletHero from '@assets/generated_images/Toilet_installation_service_Tucson_55e9fcf6.png';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';
import { CommonQuestions } from "@/components/CommonQuestions";
import { fixtureInstallationCommonQuestions } from "@/data/commonQuestions/plumbing";

const description = 'Professional toilet installation and repair in Tucson. Install high-efficiency toilets, comfort-height models. Fix leaks, running toilets, clogs. Licensed plumbers. Call (520) 333-2665 today.';
const imageUrl = new URL(toiletHero, import.meta.url).href;

export default function ToiletInstallation() {

  return (
    <>
      <MetaHead
        title="Toilet Installation & Repair Tucson AZ | Expert Toilet Replacement"
        description={description}
        canonical={`${SITE_URL}/toilet-installation-tucson`}
        openGraph={[
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Toilet Installation & Repair Tucson AZ | Expert Toilet Replacement" },
          { property: "og:description", content: description },
          { property: "og:url", content: `${SITE_URL}/toilet-installation-tucson` },
          { property: "og:image", content: imageUrl },
        ]}
        twitter={[
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "Toilet Installation & Repair Tucson AZ | Expert Toilet Replacement" },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: imageUrl },
        ]}
      />
      <GTM />
      <DNIInjector />
      <ToiletInstallationSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${toiletHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Toilet Installation & Repair in Tucson, AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews | 45+ Years Experience
              </p>
              <p className="text-xl mb-8 text-gray-200">
                New Installation | Toilet Repair | High-Efficiency Models | Comfort-Height | Water-Saving | Leak Fixes | Licensed Plumbers ROC #171687
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
              Why Choose Intelligent Design for Toilet Service?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Expert Installation Service</p>
                  <p className="text-sm text-gray-600">All toilet types installed | High-efficiency models | Comfort-height | ADA-compliant | Proper sealing | Code-compliant work</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Fast Repair Services</p>
                  <p className="text-sm text-gray-600">Fix running toilets | Stop leaks | Repair clogs | Replace parts | Same-day service | Emergency repairs</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Licensed & Experienced</p>
                  <p className="text-sm text-gray-600">45+ years serving Tucson | Licensed plumbers | ROC #171687 | Fully insured | 22,000+ reviews | BBB A+ rated</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Water-Efficient Models</p>
                  <p className="text-sm text-gray-600">EPA WaterSense certified | 1.28 GPF or less | Save 20-60% water | Utility rebates | Powerful flush</p>
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
                  <p className="text-sm text-gray-600">Old toilet removal | Professional installation | Testing & cleanup | Permits handled | Satisfaction guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Toilet Installation in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Your toilet is the most-used plumbing fixture in your home, providing essential sanitation and comfort for your family every day. Modern toilets offer remarkable advances in water efficiency—using 1.28 gallons per flush or less compared to older models that consumed 3.5-7 gallons per flush—while delivering powerful, reliable flushing performance that prevents clogs and keeps your bathroom fresh and clean. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've installed thousands of toilets throughout Tucson homes since 1979, providing professional installation that ensures leak-free operation, proper seating, and years of trouble-free service from quality fixtures designed to withstand daily use.
              </p>
              <p className="text-lg mb-6">
                Tucson's extremely hard water—measuring 13-15 grains per gallon among the hardest in the nation—creates unique challenges for toilets. Mineral deposits accumulate inside toilet tanks, corroding fill valves and flush mechanisms, build up under the rim reducing flush performance, stain bowls requiring frequent harsh chemical cleaning, and clog jets affecting water flow patterns. That's why we recommend toilets specifically designed to resist hard water damage: fully glazed trapways that resist mineral adhesion, quality fill valves with hard water-resistant seals, powerful flush systems (minimum 1.28 GPF) that prevent mineral-related clogs, and durable construction that withstands Tucson's harsh water conditions for decades.
              </p>
              <p className="text-lg mb-8">
                Our toilet installation service includes comprehensive consultation on toilet selection matching your needs and budget, professional removal and disposal of old toilet meeting environmental regulations, thorough cleaning and inspection of toilet flange and subfloor, flange repair or replacement if damage is detected, proper wax ring installation ensuring complete seal, secure toilet mounting that prevents rocking and future leaks, water supply line connection with shutoff valve replacement if needed, careful leveling to ensure proper operation and comfort, complete testing for leaks and flush performance, and thorough cleanup leaving your bathroom spotless. We install all major brands including Kohler, Toto, American Standard, and Delta, helping you select models with appropriate features—standard or comfort-height, round or elongated bowl, one-piece or two-piece construction, and water-saving efficiency that matches your household needs while reducing water bills. Whether you're replacing a failed toilet, upgrading to a water-efficient model, or installing a new toilet in a bathroom renovation, we make the process straightforward, affordable, and worry-free.
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
                Choosing the Right Toilet for Your Tucson Home
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Water Efficiency & Environmental Impact
              </h3>
              <p className="text-lg mb-6">
                High-efficiency toilets (HETs) use 1.28 gallons per flush (GPF) or less—a dramatic improvement over older toilets consuming 3.5-7 gallons per flush. For a family of four flushing an average of 20 times daily, upgrading from a 3.5 GPF toilet to a 1.28 GPF model saves approximately 16,000 gallons of water annually—reducing water bills by $75-$150 per year in Tucson. Over the toilet's 20-30 year lifespan, this represents water savings of 320,000-480,000 gallons and cost savings of $1,500-$4,500, far exceeding the toilet's purchase and installation cost. In water-scarce Tucson where conservation is critical, high-efficiency toilets make environmental and economic sense.
              </p>
              <p className="text-lg mb-6">
                Modern HETs achieve superior efficiency through advanced flush technology. Dual-flush systems offer 0.8-1.0 GPF for liquid waste and full 1.28-1.6 GPF for solid waste, maximizing water savings. Pressure-assisted flush systems use air pressure to deliver powerful flushing action with minimal water. Gravity-fed designs with optimized trapways and large flush valves provide excellent performance while using less water than older gravity toilets. EPA WaterSense certified toilets meet strict efficiency and performance standards—using at least 20% less water than federal standards while providing reliable flushing. Many Tucson homeowners qualify for utility rebates when installing WaterSense certified toilets, further reducing upgrade costs.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Comfort-Height vs. Standard-Height Toilets
              </h3>
              <p className="text-lg mb-6">
                Standard-height toilets measure approximately 15 inches from floor to seat—the traditional height used for decades. Comfort-height toilets (also called ADA-compliant or "right-height" toilets) measure 17-19 inches from floor to seat—matching standard chair height and providing significant ergonomic advantages. For most adults, especially those over 50, taller individuals, people with knee or back issues, or anyone with mobility limitations, comfort-height toilets make sitting and standing much easier and more comfortable. The higher seat reduces stress on knees and back, particularly beneficial for arthritis sufferers or people recovering from surgery.
              </p>
              <p className="text-lg mb-8">
                Comfort-height toilets have become the preferred choice for most Tucson homeowners—representing approximately 70% of our residential installations. They're ideal for master bathrooms, guest bathrooms accessible to elderly visitors, and homes where aging-in-place considerations matter. Standard-height toilets remain appropriate for children's bathrooms or households with shorter adults who find standard height more comfortable. When replacing toilets throughout a home, many homeowners choose comfort-height for primary bathrooms and standard-height for children's bathrooms, optimizing comfort for all family members. We help you select appropriate heights based on your household composition, mobility needs, and personal preferences.
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
                Toilet Repair & Troubleshooting
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Running Toilets & Water Waste
              </h3>
              <p className="text-lg mb-6">
                A running toilet wastes 30-200 gallons of water daily—adding $50-$200+ to monthly water bills and wasting thousands of gallons monthly. Running toilets usually result from worn flapper valves that no longer seal properly against the flush valve opening, faulty fill valves that don't shut off when the tank reaches proper level, incorrect float adjustment causing overfilling and water running into overflow tube, or chain issues preventing complete flapper closure. We diagnose the exact cause through systematic testing—checking flapper seal quality, testing fill valve operation, verifying float settings, and inspecting chain length and condition.
              </p>
              <p className="text-lg mb-6">
                Tucson's hard water accelerates toilet component deterioration, particularly rubber parts like flappers and fill valve seals. Mineral deposits build up on flapper surfaces preventing proper sealing, corrode fill valve mechanisms causing premature failure, accumulate on float assemblies affecting adjustment, and clog small orifices in fill valves disrupting operation. We replace worn components with premium hard water-resistant parts designed for Tucson's challenging conditions, adjust settings for proper operation, and recommend periodic inspection for early problem detection. Component replacement is far more economical than water waste from running toilets—a $150 repair saves hundreds in wasted water costs over just a few months.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Toilet Leaks & Water Damage Prevention
              </h3>
              <p className="text-lg mb-6">
                Toilet leaks range from minor nuisances to major emergencies causing thousands in water damage. Base leaks around the toilet bottom indicate wax ring failure—the rubber seal between toilet and drain flange has deteriorated allowing wastewater to seep onto bathroom floors and potentially into subfloors causing rot and mold. Wax rings fail from toilet rocking (loose mounting bolts), age-related deterioration (typically 10-20 years), improper initial installation, or flange damage. We address base leaks by removing the toilet completely, inspecting and repairing flanges if damaged, installing new wax ring with proper compression, carefully leveling and securing toilet to prevent future rocking, and testing thoroughly for complete seal.
              </p>
              <p className="text-lg mb-8">
                Tank-to-bowl leaks occur at the connection between toilet tank and bowl, usually from deteriorated tank-to-bowl gaskets or loose tank bolts. These leaks waste water and can cause floor damage if not addressed promptly. Supply line leaks at the wall connection or toilet inlet indicate worn compression washers, corroded fittings from Tucson's hard water, or damaged supply lines requiring replacement. Internal leaks from tank components allow water to continuously run into the bowl—detectable by adding food coloring to tank water and checking if color appears in bowl without flushing. Any toilet leak warrants prompt professional attention—even small leaks waste significant water, increase utility bills substantially, and risk expensive water damage to floors, ceilings below, and structural components.
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
                Professional toilet installation ensures leak-free operation, proper seating, and long-term reliability that prevents costly water damage and premature failure. Our installation process begins with comprehensive assessment of your bathroom configuration—toilet flange condition and location, subfloor condition checking for water damage or rot, water supply line condition and shutoff valve operation, clearance requirements for new toilet model, and identification of any necessary repairs before installation. This thorough pre-installation inspection prevents surprises and ensures we have all necessary materials for seamless installation including wax rings, tank-to-bowl gaskets, supply lines, mounting bolts, and any flange repair components.
              </p>
              <p className="text-lg mb-6">
                The installation process includes complete removal of old toilet with proper handling to prevent floor damage, disposal of old fixture in compliance with environmental regulations, thorough cleaning of toilet flange and surrounding floor area, flange inspection and repair if cracks or damage are detected (critical for preventing future leaks), new wax ring installation with proper compression ensuring complete seal, careful toilet positioning and leveling to prevent rocking and ensure comfort, secure mounting with appropriate torque preventing overtightening that cracks porcelain, water supply connection with new shutoff valve if old valve shows wear, tank installation on two-piece models with proper gasket seal, and comprehensive testing under multiple flush cycles checking for any leaks at base, supply connection, and tank-to-bowl junction.
              </p>
              <p className="text-lg mb-8">
                After installation, we provide operation training and maintenance guidance. We demonstrate proper flushing technique if dual-flush model, explain which items should never be flushed (wipes, feminine products, cotton swabs despite "flushable" labels), show how to shut off water supply in emergencies, and recommend regular cleaning methods that prevent hard water staining without damaging toilet components. We also explain warranty coverage—typically 1 year on our installation workmanship plus manufacturer warranty on toilet (usually 5-10 years on porcelain, 1-5 years on components). Our goal is ensuring you understand your new toilet and can maintain it properly for decades of reliable service—especially important in Tucson's hard water environment where proper care dramatically extends fixture lifespan and performance.
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
                Maintenance Tips for Long Toilet Life
              </h2>
              <p className="text-lg mb-6">
                Proper maintenance extends toilet lifespan and prevents common problems, especially in Tucson's challenging hard water environment. Weekly maintenance includes checking for running water by listening for continuous tank filling sounds, inspecting visible supply line connections for moisture indicating small leaks, ensuring toilet doesn't rock when sat upon (tighten bolts if rocking detected), and maintaining reasonable cleanliness to identify problems early. These simple weekly checks catch small issues before they become expensive emergencies—a slight rock detected early requires simple bolt tightening, while ignored rocking eventually destroys wax ring seals requiring full toilet removal and reinstallation.
              </p>
              <p className="text-lg mb-6">
                Monthly deep cleaning prevents mineral buildup and staining from Tucson's hard water. Pour 1-2 cups white vinegar into toilet tank (not bowl), let sit overnight to dissolve mineral deposits on fill valve and flush components, flush multiple times in morning to rinse loosened minerals, clean bowl with non-abrasive cleaner appropriate for porcelain, and check tank components for visible mineral accumulation or corrosion. For stubborn hard water stains in bowls, pumice stones designed for toilet cleaning remove deposits without scratching porcelain (never use pumice on colored or patterned toilets). Monthly vinegar treatment in tanks prevents the heavy mineral buildup that causes fill valve failures, flapper deterioration, and flush mechanism problems common in Tucson's hard water.
              </p>
              <p className="text-lg mb-8">
                Long-term maintenance and replacement considerations include inspecting and replacing flappers every 3-5 years even if not obviously leaking (preventive replacement costs $10-$20 vs. hundreds in wasted water), replacing fill valves every 5-7 years or when toilet starts running frequently, tightening tank-to-bowl bolts if tank shows movement (careful not to overtighten and crack porcelain), water softener installation to dramatically reduce hard water damage to all plumbing fixtures including toilets, and prompt professional attention to any unusual noises, leaks, or performance changes before small problems cause expensive damage. Quality toilets with proper maintenance routinely last 25-50+ years in Tucson—but only with attention to component replacement and hard water mitigation. By following these maintenance practices and addressing small issues promptly, your toilet provides decades of reliable, efficient service while minimizing water waste and repair costs.
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
        <CommonQuestions questions={fixtureInstallationCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={toiletInstallationFAQs.faqs} serviceName={toiletInstallationFAQs.serviceName} serviceId={toiletInstallationFAQs.serviceId} />

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Professional Toilet Service?
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
