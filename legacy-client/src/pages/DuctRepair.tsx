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
import { ductRepairFAQs } from "@/data/faqs/hvac";
import { ductworkCommonQuestions } from "@/data/commonQuestions/hvac";
import ductRepairHero from "@assets/generated_images/Duct_repair_service_Tucson_Arizona_363c7550.webp";
import DuctRepairSchema from '@/components/DuctRepairSchema';
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";

export default function DuctRepair() {
  const description = 'Expert duct repair in Tucson, AZ. Fix leaks, restore airflow, improve efficiency. Same-day emergency service. Certified technicians. Call (520) 333-2665';
  const imageUrl = `${SITE_URL}${ductRepairHero}`;

  return (
    <>
      <GTM />
      <DNIInjector />
      
      <DuctRepairSchema />
      
      <MetaHead
        title="Duct Repair Tucson AZ | Air Duct Repair & Leak Sealing | Intelligent Design"
        description={description}
        canonical="https://www.idesignac.com/duct-repair-tucson"
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Duct Repair Tucson AZ | Air Duct Repair & Leak Sealing | Intelligent Design' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: 'https://www.idesignac.com/duct-repair-tucson' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional HVAC technician repairing air ducts in Tucson home' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Duct Repair Tucson AZ | Air Duct Repair & Leak Sealing | Intelligent Design' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional HVAC technician repairing air ducts in Tucson home' }
        ]}
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative text-white py-16 md:py-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${ductRepairHero})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Trusted Air Duct Repair Services in Tucson AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                  Over 22,000 5-Star Reviews
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  Same-Day Service Available | Expert Leak Sealing | Certified Technicians
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule Repair"
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
                Why Repair Your Ductwork with Intelligent Design?
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Stop Losing 20-40% of Your Air</p>
                    <p className="text-sm text-gray-600">Leaky ducts waste conditioned air into attics/walls | Fix leaks = immediate energy savings | Better comfort</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Lower Energy Bills Permanently</p>
                    <p className="text-sm text-gray-600">Sealed ducts reduce HVAC runtime | Save 15-30% on monthly bills | ROI typically under 2 years</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Expert Diagnostics & Repair</p>
                    <p className="text-sm text-gray-600">Camera inspection finds hidden issues | Professional sealing materials | Code-compliant repairs</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Improve Indoor Air Quality</p>
                    <p className="text-sm text-gray-600">Sealed ducts prevent attic dust/insulation from entering air | Healthier home environment</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Same-Day Emergency Service</p>
                    <p className="text-sm text-gray-600">Fast response for disconnected/damaged ducts | 24/7 availability | Minimal disruption</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Satisfaction Guaranteed</p>
                    <p className="text-sm text-gray-600">45+ years experience | 22,000+ five-star reviews | Workmanship warranty | Upfront pricing</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Duct Repair Services Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Professional Duct Repair Services in Tucson, Arizona
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="text-lg mb-6">
                    Your home's ductwork is the circulatory system of your HVAC, delivering conditioned air to every room. When ducts develop leaks, gaps, or damage, you're literally paying to cool or heat the attic, crawl spaces, and walls instead of your living areas. In Tucson's extreme climate, even small duct leaks can waste 20-40% of your cooling energy.
                  </p>
                  <p className="text-lg mb-6">
                    At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, our certified technicians specialize in comprehensive duct repair services. We seal leaks, repair damaged sections, restore disconnected ducts, and optimize airflow throughout your system. Our duct repair services include:
                  </p>
                  <ul className="text-lg space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Professional Leak Sealing:</strong> Using aerosol-based sealing and mastic compounds to permanently seal duct leaks from the inside out</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Duct Damage Repair:</strong> Repairing crushed, torn, or deteriorated duct sections with proper materials and techniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Connection Restoration:</strong> Reconnecting and securing loose or disconnected ductwork throughout your home</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>Airflow Optimization:</strong> Balancing and adjusting your duct system for even temperature distribution</span>
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <SchedulerEmbed
                      triggerText="Schedule Duct Inspection"
                      variant="default"
                      size="lg"
                      data-testid="button-schedule-section1"
                    />
                    <Button
                      size="lg"
                      className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                      asChild
                    >
                      <a href="tel:+15203332665" data-testid="button-call-quote">
                        Call For Free Estimate
                      </a>
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src={ductRepairHero}
                      alt="Professional duct repair technician sealing air duct leaks in Tucson home attic"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
                <p className="text-lg mb-4">
                  With over 22,000 five-star reviews and a 4.97 rating on Google, Intelligent Design has earned the trust of Tucson homeowners for honest, professional duct repair services. Our HVAC technicians average over 17 years of experience and are trained in the latest duct repair technologies and methods.
                </p>
                <p className="text-lg">
                  We don't just patch problems—we solve them permanently. Every duct repair includes a comprehensive inspection, detailed diagnostics, and a complete explanation of what we found and how we'll fix it. You'll know exactly what's wrong, what it will cost, and how the repair will improve your home's comfort and efficiency.
                </p>
              </div>
            </div>
          </section>

          {/* Common Duct Problems Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Common Duct Problems in Tucson Homes
                </h2>
                <p className="text-xl text-gray-700 font-semibold">
                  Understanding Why Ductwork Fails in Southern Arizona
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-lg mb-6">
                  Tucson's extreme temperature swings—from 115°F summer days to near-freezing winter nights—put enormous stress on ductwork. Metal ducts expand and contract with temperature changes, loosening connections and creating gaps. Flexible ducts can deteriorate from heat exposure in attics that reach 150°F or higher. These climate factors make duct problems more common in Tucson than in milder climates.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Thermal Expansion and Contraction Damage
                    </h3>
                    <p className="text-base">
                      The extreme temperature swings in Tucson attics cause metal ductwork to expand and contract repeatedly. Over time, this movement loosens joints, creates gaps at connections, and can even crack rigid ductwork. Flexible ducts become brittle from heat exposure and develop cracks or holes. This is the #1 cause of duct leaks in Southern Arizona homes.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Age and Material Deterioration
                    </h3>
                    <p className="text-base">
                      Ductwork typically lasts 15-25 years, but Tucson's harsh attic conditions can accelerate deterioration. Insulation around ducts breaks down, adhesives fail, mastic sealants crack, and flexible duct materials become brittle. Older homes with original ductwork often have significant leaks that have developed gradually over decades.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Poor Original Installation
                    </h3>
                    <p className="text-base">
                      Many Tucson homes have ductwork that was never installed correctly. Common installation problems include unsealed joints, undersized ducts for room requirements, excessive bends that restrict airflow, crushed or kinked flexible ducts, and inadequate support causing sagging. These problems waste energy from day one and worsen over time.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Rodent and Pest Damage
                    </h3>
                    <p className="text-base">
                      Rodents and other pests can damage ductwork by chewing through flexible ducts, building nests in duct cavities, or tearing insulation. This creates health concerns from contamination and significant air leaks. We often find extensive rodent damage in attic ductwork that homeowners didn't know existed until they noticed declining system performance.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-lg mb-6">
                    If your ductwork is more than 10 years old or you've noticed declining comfort and rising energy bills, a professional duct inspection can identify problems before they get worse. We use advanced diagnostic equipment to find hidden leaks and assess the overall condition of your duct system.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <SchedulerEmbed
                      triggerText="Schedule Duct Inspection"
                      variant="default"
                      size="lg"
                      data-testid="button-schedule-section2"
                    />
                    <Button
                      size="lg"
                      className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                      asChild
                    >
                      <a href="tel:+15203332665" data-testid="button-call-quote-2">Call For Free Estimate</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Duct Repair Process Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Our Professional Duct Repair Process
                </h2>
                <p className="text-xl text-gray-700 font-semibold">
                  Comprehensive Diagnosis and Permanent Solutions
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div className="order-2 md:order-1">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">
                        Step 1: Comprehensive Duct Inspection
                      </h3>
                      <p className="text-base mb-3">
                        Our certified technicians begin with a thorough visual inspection of all accessible ductwork in your attic, crawl spaces, and living areas. We look for visible damage, disconnections, crushed sections, and signs of deterioration. We also inspect duct insulation, support systems, and connection points.
                      </p>
                      <p className="text-base">
                        For a complete assessment, we may use specialized cameras to inspect ductwork in hard-to-reach areas and identify problems that aren't visible from the outside.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">
                        Step 2: Advanced Diagnostic Testing
                      </h3>
                      <p className="text-base mb-3">
                        We perform airflow measurements at each supply register and return vent to identify rooms with inadequate airflow. We may also conduct duct leakage testing to quantify how much conditioned air is being lost through leaks—typically 20-30% in older homes.
                      </p>
                      <p className="text-base">
                        This diagnostic data helps us prioritize repairs for maximum impact and gives you measurable proof of improvement after repairs are completed.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">
                        Step 3: Repair Solutions and Estimate
                      </h3>
                      <p className="text-base mb-3">
                        Based on our inspection and testing, we provide a detailed explanation of problems found, the recommended repair methods, and transparent pricing. We'll show you photos or video of the problem areas and explain how each repair will improve your system's performance.
                      </p>
                      <p className="text-base">
                        Our estimates include options for immediate critical repairs and recommendations for additional improvements that can further enhance efficiency and comfort.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">
                        Step 4: Professional Repair Work
                      </h3>
                      <p className="text-base mb-3">
                        Once approved, our technicians perform the repairs using industry-leading materials and methods. We use mastic sealants and metal-backed tape for duct sealing (never cloth duct tape, which fails in attic heat), properly sized replacement sections for damaged ducts, and secure mechanical connections for all joints.
                      </p>
                      <p className="text-base">
                        All work is performed to current building codes and industry standards, ensuring lasting results that will perform reliably for years.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">
                        Step 5: Testing and Verification
                      </h3>
                      <p className="text-base">
                        After completing repairs, we re-test airflow and duct leakage to verify improvements. We'll show you the before and after measurements so you can see the documented improvement in your system's performance. We also provide recommendations for ongoing maintenance to protect your investment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src={ductRepairHero}
                      alt="Intelligent Design technician inspecting and repairing air ducts in Tucson home"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-6 bg-primary text-white p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-3">
                      Why Choose Intelligent Design for Duct Repair?
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Certified HVAC technicians with 17+ years average experience</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Advanced diagnostic equipment for accurate problem identification</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Industry-leading repair materials and methods</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Transparent pricing with detailed written estimates</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>100% satisfaction guarantee on all work</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>22,000+ five-star reviews from satisfied Tucson customers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Duct Repair"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-process"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-process">Call: (520) 333-2665</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Signs You Need Duct Repair Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Signs Your Tucson Home Needs Duct Repair
                </h2>
                <p className="text-xl text-gray-700">
                  Don't Ignore These Warning Signs of Duct Problems
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                    <span className="text-3xl mr-3">🌡️</span>
                    Hot and Cold Spots Throughout Your Home
                  </h3>
                  <p className="text-base">
                    If some rooms are always too hot while others are freezing, you likely have duct leaks or disconnected ductwork preventing proper air distribution. This is one of the clearest signs of duct problems. Rooms farthest from the air handler are often most affected because more duct leaks compound the airflow loss.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                    <span className="text-3xl mr-3">💰</span>
                    Unexplainably High Energy Bills
                  </h3>
                  <p className="text-base">
                    If your cooling costs have increased significantly without corresponding rate increases or usage changes, leaky ducts are a likely culprit. The U.S. Department of Energy estimates that 20-30% of air moving through duct systems is lost to leaks—that's 20-30% of your energy dollars going directly into your attic or walls.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                    <span className="text-3xl mr-3">🌪️</span>
                    Excessive Dust Accumulation
                  </h3>
                  <p className="text-base">
                    Leaky return ducts can pull dusty attic air into your home's air circulation system, leading to excessive dust on furniture, surfaces, and air vents. If you're dusting constantly and changing filters frequently, leaky return ducts may be pulling in contaminated air from attic spaces, crawl spaces, or wall cavities.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                    <span className="text-3xl mr-3">🎵</span>
                    Whistling or Rattling Sounds
                  </h3>
                  <p className="text-base">
                    Whistling sounds often indicate air escaping through gaps or holes in ductwork. Rattling or banging noises can signal loose duct sections, disconnected segments, or ducts that expand and contract with temperature changes. These sounds typically get worse as your HVAC system runs and indicate areas where repairs are needed.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                    <span className="text-3xl mr-3">💨</span>
                    Weak Airflow from Vents
                  </h3>
                  <p className="text-base">
                    If air barely flows from certain vents or airflow has noticeably decreased over time, you may have crushed or disconnected ducts, major leaks near the air handler, or excessive duct leakage reducing pressure throughout the system. This forces your HVAC to run longer to achieve set temperatures, wasting energy and increasing wear on your system.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                    <span className="text-3xl mr-3">🏠</span>
                    Visible Duct Damage
                  </h3>
                  <p className="text-base">
                    If you can see damaged, disconnected, crushed, or deteriorating ductwork in your attic or crawl space, those visible problems are likely just the beginning. For every obvious problem you can see, there are often multiple hidden issues in areas that aren't easily accessible. Professional inspection finds all the problems, not just the visible ones.
                  </p>
                </div>
              </div>

              <div className="bg-primary text-white p-8 md:p-12 rounded-lg text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Don't Let Duct Problems Cost You Comfort and Money
                </h3>
                <p className="text-lg mb-6">
                  The longer you wait to repair duct problems, the more money you waste on energy bills and the more stress you put on your HVAC system. Professional duct repair typically pays for itself in energy savings within 2-3 years while dramatically improving home comfort immediately.
                </p>
                <p className="text-lg mb-8">
                  Intelligent Design offers same-day duct repair service when you call early. Our certified technicians can diagnose and repair most duct problems in a single visit, restoring your home's comfort and efficiency quickly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Duct Inspection Today"
                    variant="outline"
                    size="lg"
                    className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
                    data-testid="button-schedule-signs"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-signs">Call: (520) 333-2665</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits of Professional Duct Repair Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Benefits of Professional Duct Repair in Tucson
                </h2>
                <p className="text-xl text-gray-700">
                  Real Results You Can Measure
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        20-40% Energy Savings
                      </h3>
                      <p className="text-lg mb-3">
                        The U.S. Department of Energy reports that sealing and repairing duct leaks can reduce cooling costs by 20-40% in most homes. For a Tucson household spending $250/month on summer cooling, that's potential savings of $50-$100 per month during peak season—$600-$1,200 in annual savings.
                      </p>
                      <p className="text-lg">
                        Professional duct repair typically pays for itself in energy savings within 2-3 years and continues saving you money for decades. It's one of the most cost-effective home energy improvements you can make.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        Dramatically Improved Comfort
                      </h3>
                      <p className="text-lg mb-3">
                        Properly sealed and repaired ductwork delivers conditioned air where it's supposed to go—into your living spaces, not your attic. This eliminates hot and cold spots, ensures even temperatures throughout your home, and allows your HVAC system to maintain your desired temperature efficiently.
                      </p>
                      <p className="text-lg">
                        Many customers report that after duct repair, rooms that were always uncomfortable become their favorite spaces in the home. The difference in comfort is immediate and dramatic.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        Better Indoor Air Quality
                      </h3>
                      <p className="text-lg mb-3">
                        Leaky return ducts can pull dusty, contaminated air from attics, crawl spaces, and wall cavities into your home's air circulation. This introduces dust, insulation particles, allergens, and potentially harmful contaminants into the air you breathe.
                      </p>
                      <p className="text-lg">
                        Sealing return ducts prevents contaminated air from entering your HVAC system, significantly improving indoor air quality. Customers often report reduced allergy symptoms, less dust accumulation, and fresher-smelling indoor air after professional duct sealing.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        Extended HVAC System Life
                      </h3>
                      <p className="text-lg mb-3">
                        When ducts leak, your HVAC system must run longer to maintain desired temperatures. This increases wear and tear on critical components like the compressor, blower motor, and heat exchanger. Over time, this excessive runtime leads to premature equipment failure.
                      </p>
                      <p className="text-lg">
                        By repairing duct leaks, your HVAC system runs less frequently and more efficiently, reducing component wear and extending system life by years. This delays costly equipment replacement and maximizes your return on your HVAC investment.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        Environmental Benefits
                      </h3>
                      <p className="text-lg">
                        Reducing energy waste isn't just good for your wallet—it's good for the environment. By improving your duct system's efficiency, you reduce your home's carbon footprint and contribute to energy conservation. In Tucson's hot climate where air conditioning is a significant portion of household energy use, duct repair is one of the most impactful energy efficiency improvements you can make.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-gray-50 p-8 md:p-12 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                      Real Customer Results
                    </h3>
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-lg">
                        <p className="text-lg font-semibold mb-2">
                          "Our energy bill dropped by $95/month after duct sealing"
                        </p>
                        <p className="text-base text-gray-700">
                          — Martinez Family, Oro Valley
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-lg">
                        <p className="text-lg font-semibold mb-2">
                          "The master bedroom is finally comfortable. It used to be 5 degrees warmer than the rest of the house."
                        </p>
                        <p className="text-base text-gray-700">
                          — Johnson Family, Marana
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-lg">
                        <p className="text-lg font-semibold mb-2">
                          "I was shocked at how much dust was coming through leaky return ducts. Air quality is so much better now."
                        </p>
                        <p className="text-base text-gray-700">
                          — Thompson Family, Tucson
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary text-white p-8 rounded-lg text-center">
                    <h4 className="text-xl font-bold mb-4">
                      Ready to Experience These Benefits?
                    </h4>
                    <p className="text-lg mb-6">
                      Schedule your professional duct inspection today and discover how much you could save on energy costs while improving your home's comfort.
                    </p>
                    <div className="flex flex-col gap-4">
                      <SchedulerEmbed
                        triggerText="Schedule Duct Inspection"
                        variant="outline"
                        size="lg"
                        className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
                        data-testid="button-schedule-benefits"
                      />
                      <Button
                        size="lg"
                        className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                        asChild
                      >
                        <a href="tel:+15203332665" data-testid="button-call-benefits">Call: (520) 333-2665</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* NAP Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Contact Intelligent Design for Duct Repair in Tucson
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Professional Duct Repair Services
                  </h3>
                  <div className="space-y-4 text-lg">
                    <div>
                      <p className="font-bold">Intelligent Design Air Conditioning, Plumbing, Solar, & Electric</p>
                      <p>1145 E Fort Lowell Rd</p>
                      <p>Tucson, AZ 85719</p>
                    </div>
                    <div>
                      <p className="font-bold">Phone:</p>
                      <p>
                        <a href="tel:+15203332665" className="text-primary hover:underline" data-testid="link-call-nap">
                          (520) 333-2665
                        </a>
                      </p>
                    </div>
                    <div>
                      <p className="font-bold">Hours:</p>
                      <p>24/7 Emergency Service Available</p>
                      <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                      <p>Saturday: 8:00 AM - 5:00 PM</p>
                      <p>Sunday: Emergency Service Only</p>
                    </div>
                    <div>
                      <p className="font-bold">Service Areas:</p>
                      <p>Tucson, Oro Valley, Marana, Catalina, Catalina Foothills, Vail, Sahuarita, Green Valley, and surrounding areas</p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <SchedulerEmbed
                      triggerText="Schedule Online"
                      variant="default"
                      size="lg"
                      data-testid="button-schedule-nap"
                    />
                    <Button
                      size="lg"
                      className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                      asChild
                    >
                      <a href="tel:+15203332665" data-testid="button-call-nap">Call Now</a>
                    </Button>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Why Choose Intelligent Design?
                  </h3>
                  <ul className="space-y-4 text-base">
                    <li className="flex items-start">
                      <span className="text-primary text-xl mr-3">✓</span>
                      <span><strong>22,000+ Five-Star Reviews:</strong> Nearly perfect 4.97 rating on Google from satisfied Tucson customers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary text-xl mr-3">✓</span>
                      <span><strong>BBB A+ Rating:</strong> Accredited with highest rating for business practices and customer service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary text-xl mr-3">✓</span>
                      <span><strong>17+ Years Average Experience:</strong> Our HVAC technicians are among the most experienced in Southern Arizona</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary text-xl mr-3">✓</span>
                      <span><strong>Same-Day Service Available:</strong> Call early for same-day duct repair service in Tucson</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary text-xl mr-3">✓</span>
                      <span><strong>100% Satisfaction Guarantee:</strong> We stand behind our work with a complete satisfaction guarantee</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary text-xl mr-3">✓</span>
                      <span><strong>Transparent Pricing:</strong> Detailed written estimates before work begins—no surprise charges</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary text-xl mr-3">✓</span>
                      <span><strong>Licensed & Insured:</strong> Fully licensed, bonded, and insured for your protection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common Questions - Conversational Q&A for AI Search Optimization */}
          <CommonQuestions questions={ductworkCommonQuestions} />

          {/* FAQ Section - LLM-Optimized with 11 Questions */}
          <ServiceFAQ faqs={ductRepairFAQs.faqs} />
        </main>

        <Footer />
        <MobileFloatingActions />
      </div>
    </>
  );
}
