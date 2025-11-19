import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingActions from "@/components/MobileFloatingActions";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import SchedulerEmbed from "@/components/SchedulerEmbed";
import TrustBar from "@/components/TrustBar";
import ServiceFAQ from "@/components/ServiceFAQ";
import { CommonQuestions } from "@/components/CommonQuestions";
import { ductInstallationFAQs } from "@/data/faqs/hvac";
import { ductworkCommonQuestions } from "@/data/commonQuestions/hvac";
import ductInstallationHero from "@assets/generated_images/Duct_installation_service_Tucson_home_0e426c42.webp";
import ductInstallationService from "@assets/generated_images/Blue-uniformed_HVAC_installers_working_82f3dc0d.webp";
import DuctInstallationSchema from '@/components/DuctInstallationSchema';
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";

export default function DuctInstallation() {
  const description = 'Professional duct installation in Tucson, AZ. New construction, duct replacement, system upgrades. Proper sizing & design for maximum efficiency. Call (520) 333-2665';
  const imageUrl = `${SITE_URL}${ductInstallationHero}`;

  return (
    <>
      <GTM />
      <DNIInjector />
      
      <DuctInstallationSchema />
      
      <MetaHead
        title="Duct Installation Tucson AZ | New Ductwork Installation | Intelligent Design"
        description={description}
        canonical="https://www.idesignac.com/duct-installation-tucson"
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Duct Installation Tucson AZ | New Ductwork Installation | Intelligent Design' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: 'https://www.idesignac.com/duct-installation-tucson' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional HVAC technician installing ductwork at Tucson home' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Duct Installation Tucson AZ | New Ductwork Installation | Intelligent Design' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional HVAC technician installing ductwork at Tucson home' }
        ]}
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative text-white py-16 md:py-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${ductInstallationHero})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Expert Duct Installation Services in Tucson AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                  Over 22,000 5-Star Reviews
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  New Construction | Whole-Home Replacement | Proper Sizing & Design
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Get Free Estimate"
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

          {/* Trust Bar */}
          <TrustBar />

          {/* Page Highlights Section */}
          <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
                Why Choose Intelligent Design for Duct Installation?
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Engineered for Maximum Efficiency</p>
                    <p className="text-sm text-gray-600">Manual J load calculations | Proper sizing prevents waste | Balanced airflow | Code-compliant design</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Lower Energy Bills 20-40%</p>
                    <p className="text-sm text-gray-600">Properly designed ducts reduce HVAC runtime | Eliminate hot/cold spots | Consistent comfort | Better ROI</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Quality Materials & Installation</p>
                    <p className="text-sm text-gray-600">R-8 insulated flex duct | Metal fittings & plenums | Professional sealing | Tested for leaks</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Perfect for New Construction & Replacements</p>
                    <p className="text-sm text-gray-600">New builds | Additions | Remodels | Full duct replacement | System upgrades</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">45+ Years Installation Experience</p>
                    <p className="text-sm text-gray-600">NATE certified technicians | 22,000+ five-star reviews | Licensed & insured | Family & veteran-owned</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Free Estimates & Financing</p>
                    <p className="text-sm text-gray-600">No-obligation quotes | Transparent pricing | Flexible payment options | Fast project completion</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Duct Installation Services Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Professional Duct Installation Services in Tucson, AZ
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="text-lg mb-6">
                    When it comes to home comfort and energy efficiency, your ductwork plays a critical role that's often underestimated. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we specialize in professional duct installation throughout Tucson, AZ and surrounding areas. Whether you're building a new home, replacing an aging duct system, or upgrading for better efficiency, our expert technicians deliver precision installations that maximize your HVAC system's performance.
                  </p>
                  <p className="text-lg mb-6">
                    Our comprehensive duct installation services include new construction ductwork, whole-home duct replacement, system upgrades and expansions, and additions or remodels. Every installation begins with proper design and Manual D calculations to ensure your new ductwork is sized correctly for optimal airflow, efficiency, and comfort in every room.
                  </p>
                  <p className="text-lg mb-6">
                    With over 22,000 five-star reviews and a BBB A+ rating, Tucson homeowners trust Intelligent Design for duct installation projects of all sizes. Our HVAC technicians average 17+ years of experience and stay current with the latest ductwork technologies and installation techniques to deliver superior results every time.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <SchedulerEmbed
                      triggerText="Schedule Free Estimate"
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
                        Call For Free Quote
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src={ductInstallationService}
                      alt="Professional HVAC technicians installing new ductwork in Tucson home"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Proper Duct Design Matters Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Why Proper Duct Design Matters in Tucson's Climate
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-lg mb-6">
                  In Tucson, where summer temperatures regularly exceed 110°F and your air conditioner works harder than almost anywhere else in the country, proper duct design isn't just important—it's essential. Poorly designed or installed ductwork can waste 20-30% of your conditioned air before it ever reaches your living spaces, forcing your HVAC system to work overtime and driving up energy costs significantly.
                </p>
                <p className="text-lg mb-6">
                  At Intelligent Design, we don't guess at duct sizing. We use industry-standard Manual D load calculations that account for your HVAC system's capacity, your home's square footage and layout, ceiling heights and insulation levels, the number and placement of supply and return vents, and Tucson's extreme climate conditions. This scientific approach ensures every room receives the right amount of airflow for consistent comfort.
                </p>
                <p className="text-lg mb-6">
                  Proper duct design also addresses airflow optimization to eliminate hot and cold spots, energy efficiency through minimal air leakage and heat gain, comfort zones that allow balanced heating and cooling, and noise reduction with properly sized ducts that prevent whistling and rushing sounds. When ducts are too small, your system struggles to move enough air, leading to poor comfort and higher bills. When they're too large, air moves too slowly, creating temperature variations and reduced dehumidification.
                </p>
                <p className="text-lg">
                  Our design process also considers duct placement and routing. In Tucson's climate, where attic temperatures can reach 150°F or more during summer, we minimize duct runs through unconditioned spaces whenever possible. When attic installation is necessary, we use high-R-value insulation to protect your cool air from the intense heat surrounding the ducts.
                </p>
              </div>
            </div>
          </section>

          {/* Our Duct Installation Process Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Our Comprehensive Duct Installation Process
                </h2>
              </div>

              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-lg mb-8">
                  When you choose Intelligent Design for your duct installation project, you get a methodical, professional process designed to deliver lasting results:
                </p>

                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-3">1. Site Evaluation and Consultation</h3>
                    <p className="text-lg">
                      Our process begins with a thorough on-site evaluation of your home. We assess your existing HVAC equipment, measure room dimensions and ceiling heights, evaluate insulation and air sealing, identify optimal duct routing paths, and discuss your comfort concerns and goals. This comprehensive assessment allows us to design a duct system specifically for your home and needs.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-3">2. System Design and Engineering</h3>
                    <p className="text-lg">
                      Using Manual D calculations and advanced HVAC design software, we create a detailed duct layout that specifies exact sizes for every trunk line and branch, optimal supply and return vent locations, insulation requirements for each duct section, and required supports and sealing methods. You'll receive a clear proposal with a detailed scope of work and transparent pricing before any installation begins.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-3">3. Professional Installation</h3>
                    <p className="text-lg">
                      Our experienced technicians execute the installation with precision and care. We install trunk lines and main distribution ducts, connect branch lines to individual rooms, mount and secure all ductwork properly to prevent sagging, seal all joints and connections with mastic sealant (not just tape), apply proper insulation to specification, and install registers, grilles, and dampers. Throughout the process, we protect your home with floor coverings and dust barriers, and we clean up thoroughly each day.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-3">4. Testing and System Balancing</h3>
                    <p className="text-lg">
                      Installation is only complete once we've verified performance. We conduct comprehensive testing including duct leakage testing to ensure minimal air loss, airflow measurements at each register, static pressure testing to verify proper system operation, and room-by-room temperature verification. We then balance the system by adjusting dampers to achieve even airflow and comfort throughout your home.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
                  <SchedulerEmbed
                    triggerText="Request Free Estimate"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-section3"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-section3">
                      Call: (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Duct Material Options Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Duct Material Options for Tucson Homes
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-lg mb-8">
                  Choosing the right duct materials for Tucson's climate is crucial for long-term performance and efficiency. We offer several options, each with specific advantages:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-primary mb-3">Rigid Metal Ducts</h3>
                    <p className="text-lg mb-3">
                      Galvanized steel or aluminum ducts offer the best durability and longevity, lasting 30+ years. They resist crushing and damage, maintain their shape and airflow capacity over time, and are ideal for main trunk lines and exposed installations.
                    </p>
                    <p className="text-lg font-semibold text-gray-700">
                      Best for: Maximum durability and long-term performance
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-primary mb-3">Flexible Ducts</h3>
                    <p className="text-lg mb-3">
                      Insulated flexible ducts provide easier installation in tight spaces like attics and crawl spaces, cost-effective solutions for branch runs, and built-in insulation (typically R-4.2 to R-6). They're perfect for connecting rigid trunk lines to individual room registers.
                    </p>
                    <p className="text-lg font-semibold text-gray-700">
                      Best for: Branch runs and tight-space installations
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-primary mb-3">Fiberboard Ducts</h3>
                    <p className="text-lg mb-3">
                      Rigid fiberglass duct board combines ductwork and insulation in one product, offering good insulation properties (R-4 to R-6), quieter operation than metal, and moderate cost. However, it's less durable than metal and best suited for limited applications.
                    </p>
                    <p className="text-lg font-semibold text-gray-700">
                      Best for: Specific applications where noise reduction is priority
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-primary mb-3">Insulation Options</h3>
                    <p className="text-lg mb-3">
                      For Tucson's extreme attic temperatures, we recommend R-6 or R-8 insulation for all ducts in unconditioned spaces. Higher R-values significantly reduce heat gain, keeping your cool air cool from the air handler to your vents.
                    </p>
                    <p className="text-lg font-semibold text-gray-700">
                      Best for: Maximum energy efficiency in hot climates
                    </p>
                  </div>
                </div>

                <p className="text-lg mb-6">
                  Our most common recommendation for Tucson homes is a hybrid approach: rigid metal trunk lines with R-6 or R-8 external insulation, combined with insulated flexible ducts for branch runs. This combination provides excellent durability where it matters most while keeping installation costs reasonable.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                  <SchedulerEmbed
                    triggerText="Discuss Material Options"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-section4"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-section4">
                      Get Expert Advice
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* When You Need New Ductwork Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  When You Need New Ductwork in Your Tucson Home
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-lg mb-8">
                  How do you know when it's time to install new ductwork? Here are the most common scenarios where duct installation makes sense:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                    <h3 className="text-xl font-bold mb-3">Installing a New HVAC System</h3>
                    <p className="text-lg">
                      If you're upgrading to a new, more efficient HVAC system, your existing ductwork may not be properly sized for the new equipment. Modern high-efficiency systems often require different airflow characteristics than older units. Installing new ductwork designed specifically for your new system ensures you get the full efficiency and comfort benefits of your investment.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                    <h3 className="text-xl font-bold mb-3">Home Additions or Major Remodels</h3>
                    <p className="text-lg">
                      Adding square footage to your home means extending your duct system to serve the new spaces. Whether it's a bedroom addition, sunroom, converted garage, or second-story expansion, professional duct installation ensures your HVAC system can adequately heat and cool the expanded space without straining the existing system.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                    <h3 className="text-xl font-bold mb-3">Poor Airflow and Comfort Issues</h3>
                    <p className="text-lg">
                      Rooms that are always too hot or too cold, weak airflow from certain vents, excessive dust throughout the home, and humidity problems often indicate duct design or condition issues. Sometimes repair isn't enough—complete duct replacement with proper design resolves these persistent comfort problems permanently.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                    <h3 className="text-xl font-bold mb-3">Old, Deteriorated Ductwork</h3>
                    <p className="text-lg">
                      Ductwork doesn't last forever. If your home has original ducts from the 1970s or 1980s, they may have extensive leaks, disconnected sections, crushed or damaged areas, inadequate or deteriorated insulation, or asbestos-containing materials (in very old homes). Modern duct installation dramatically improves efficiency and air quality compared to aging, failing ductwork.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                    <h3 className="text-xl font-bold mb-3">Energy Efficiency Upgrades</h3>
                    <p className="text-lg">
                      If your energy bills are higher than they should be and your HVAC system is in good condition, leaky or poorly designed ductwork is often the culprit. The Department of Energy estimates that poorly sealed ducts can reduce HVAC system efficiency by 20% or more. New, properly sealed and insulated ductwork can pay for itself through energy savings over time.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-8 rounded-lg">
                  <p className="text-lg mb-6">
                    Not sure if you need new ductwork or if repairs would suffice? Our experienced technicians can perform a comprehensive duct evaluation including visual inspection, leakage testing, airflow measurements, and efficiency analysis. We'll provide honest recommendations based on your specific situation and budget.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <SchedulerEmbed
                      triggerText="Schedule Duct Evaluation"
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
                        Call: (520) 333-2665
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Questions - Conversational Q&A for AI Search Optimization */}
          <CommonQuestions questions={ductworkCommonQuestions} />

          {/* FAQ Section - LLM-Optimized with 11 Questions */}
          <ServiceFAQ faqs={ductInstallationFAQs.faqs} />

          {/* NAP Section */}
          <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    Contact Intelligent Design for Expert Duct Installation
                  </h2>
                  <p className="text-xl text-gray-700 mb-8">
                    Serving Tucson and Surrounding Areas Since 1979
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Get Your Free Estimate Today</h3>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <Phone className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-lg">Phone</p>
                          <a href="tel:+15203332665" className="text-xl text-primary hover:underline">
                            (520) 333-2665
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="font-semibold text-lg">Address</p>
                          <p className="text-gray-700">1145 E Fort Lowell Rd<br />Tucson, AZ 85719</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="font-semibold text-lg">Hours</p>
                          <p className="text-gray-700">24/7 Emergency Service Available</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-6">Service Areas</h3>
                    <p className="text-lg mb-4">
                      We proudly serve Tucson and the surrounding communities including:
                    </p>
                    <ul className="grid grid-cols-2 gap-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="text-primary mr-2">✓</span> Tucson
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">✓</span> Oro Valley
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">✓</span> Marana
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">✓</span> Catalina
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">✓</span> Vail
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">✓</span> Sahuarita
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">✓</span> Green Valley
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">✓</span> Catalina Foothills
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center bg-blue-50 p-8 rounded-lg">
                  <p className="text-lg mb-6">
                    Ready to improve your home's comfort and efficiency with professional duct installation? Contact Tucson's most trusted HVAC company today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <SchedulerEmbed
                      triggerText="Schedule Free Consultation"
                      variant="destructive"
                      size="lg"
                      data-testid="button-schedule-nap"
                    />
                    <Button
                      size="lg"
                      className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                      asChild
                    >
                      <a href="tel:+15203332665" data-testid="button-call-nap">
                        <Phone className="w-5 h-5 mr-2" />
                        Call: (520) 333-2665
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <MobileFloatingActions />
        <Footer />
      </div>
    </>
  );
}
