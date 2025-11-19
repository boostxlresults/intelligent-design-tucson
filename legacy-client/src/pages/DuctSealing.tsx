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
import { ductSealingFAQs } from "@/data/faqs/hvac";
import { ductSealingCommonQuestions } from "@/data/commonQuestions/hvac";
import ductSealingHero from "@assets/generated_images/Professional_duct_sealing_service_670e8275.webp";
import ductSealingService from "@assets/generated_images/Duct_sealing_service_work_511e8f74.webp";
import DuctSealingSchema from '@/components/DuctSealingSchema';
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";

export default function DuctSealing() {
  const description = 'Elite Aeroseal duct sealing in Tucson, AZ. Certified dealer offering advanced duct sealing technology. Reduce energy bills up to 30%, improve comfort. Call (520) 333-2665';
  const imageUrl = `${SITE_URL}${ductSealingHero}`;

  return (
    <>
      <GTM />
      <DNIInjector />
      
      <DuctSealingSchema />
      
      <MetaHead
        title="Duct Sealing Tucson AZ | Elite Aeroseal Dealer | Intelligent Design"
        description={description}
        canonical="https://www.idesignac.com/duct-sealing-tucson"
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Duct Sealing Tucson AZ | Elite Aeroseal Dealer | Intelligent Design' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: 'https://www.idesignac.com/duct-sealing-tucson' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional duct sealing service in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Duct Sealing Tucson AZ | Elite Aeroseal Dealer | Intelligent Design' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional duct sealing service in Tucson' }
        ]}
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          <section className="relative text-white py-16 md:py-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${ductSealingHero})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Elite Aeroseal Duct Sealing in Tucson AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                  Over 22,000 5-Star Reviews
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  Certified Elite Aeroseal Dealer | Reduce Energy Bills Up to 30% | Advanced Technology
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule Duct Sealing"
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

          {/* Page Highlights Section */}
          <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
                Why Choose Elite Aeroseal Duct Sealing?
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Elite Aeroseal Certified Dealer</p>
                    <p className="text-sm text-gray-600">Advanced duct sealing technology | Proven results | Factory-certified technicians | Exclusive in Tucson</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Save 30-50% on Energy Bills</p>
                    <p className="text-sm text-gray-600">Seal leaks from the inside out | Reduce HVAC waste | Lower monthly costs | Typical 2-4 year payback</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Measurable, Guaranteed Results</p>
                    <p className="text-sm text-gray-600">Before & after leak testing | Computer-generated reports | See exactly how much air you're saving</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Non-Invasive Process</p>
                    <p className="text-sm text-gray-600">No demolition required | Seals from inside ducts | Works on hard-to-reach leaks | Clean, fast process</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Improve Comfort & Air Quality</p>
                    <p className="text-sm text-gray-600">Eliminate hot/cold rooms | Reduce dust & allergens | Quieter HVAC operation | Healthier home</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                    <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ five-star reviews | Free estimates | Satisfaction guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Professional Duct Sealing Services in Tucson, AZ
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="text-lg mb-6">
                    At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we're proud to be a certified Elite Aeroseal dealer, bringing Tucson homeowners the most advanced duct sealing technology available. Our professional duct sealing services eliminate energy-wasting air leaks that cost you hundreds of dollars annually in wasted heating and cooling.
                  </p>
                  <p className="text-lg mb-6">
                    Studies show that typical residential duct systems lose 20-30% of conditioned air through leaks, gaps, and poorly connected joints. In Tucson's extreme climate where air conditioning systems run nearly year-round, these losses have a massive impact on your energy bills and home comfort. Our duct sealing services—including cutting-edge Aeroseal technology—seal these leaks permanently, ensuring every bit of conditioned air reaches your living spaces.
                  </p>
                  <p className="text-lg mb-6">
                    Whether you need traditional mastic duct sealing for accessible ductwork or the revolutionary Aeroseal process that seals leaks from the inside out, our certified technicians have the expertise and equipment to deliver exceptional results. We provide before-and-after testing that proves exactly how much we've improved your system's efficiency.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <SchedulerEmbed
                      triggerText="Schedule Duct Sealing"
                      variant="default"
                      size="lg"
                      data-testid="button-schedule-section1"
                    />
                    <Button size="lg" variant="outline" asChild>
                      <a href="tel:+15203332665" data-testid="button-call-section1">
                        <Phone className="w-5 h-5 mr-2" />
                        (520) 333-2665
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-200 mb-6">
                    <img
                      src={ductSealingService}
                      alt="Professional HVAC technician sealing ductwork in Tucson home"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Why Choose Our Duct Sealing Services?
                  </h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>Certified Elite Aeroseal dealer with advanced technology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>Reduce energy bills by 20-30% or more</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>Improve home comfort and eliminate hot/cold spots</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>Verified results with before-and-after testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>10-year warranty on Aeroseal applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>Same-day service available throughout Tucson</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>Family and veteran-owned since 1979</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-muted/50 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                What is Aeroseal Duct Sealing?
              </h2>
              
              <div className="mb-12">
                <p className="text-lg mb-6">
                  Aeroseal is a revolutionary, patented duct sealing technology that seals air leaks from the inside of your ductwork—a game-changing approach that addresses leaks traditional methods simply cannot reach. Developed at the University of California and refined over two decades, Aeroseal has sealed ducts in over one million homes nationwide, consistently delivering dramatic improvements in energy efficiency and comfort.
                </p>
                <p className="text-lg mb-6">
                  The Aeroseal process works by temporarily blocking all your supply registers and return grilles, then pressurizing your duct system and injecting a safe, aerosolized sealant. As air escapes through leaks and gaps, the sealant particles are carried to the leak edges where they accumulate and form a permanent seal. Computer monitoring tracks the sealing process in real-time, showing exactly how much leakage is being eliminated.
                </p>
                <p className="text-lg mb-6">
                  Unlike traditional duct sealing methods that require manual access to every leak—often impossible when ducts run through walls, ceilings, or inaccessible crawlspaces—Aeroseal seals your entire duct system from the inside, regardless of where leaks are located. The technology can seal leaks up to 5/8 inch in diameter and typically reduces duct leakage by 90% or more.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  The Aeroseal Duct Sealing Process
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-primary text-white font-bold px-3 py-1 rounded-full mr-4 flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-bold mb-2">Initial Leak Testing</h4>
                      <p>We connect sophisticated diagnostic equipment to measure your duct system's current leakage rate, establishing a baseline for comparison.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-primary text-white font-bold px-3 py-1 rounded-full mr-4 flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-bold mb-2">System Preparation</h4>
                      <p>All supply registers and return grilles are temporarily blocked to ensure the sealant only goes where it's needed—to the leak edges.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-primary text-white font-bold px-3 py-1 rounded-full mr-4 flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-bold mb-2">Aeroseal Application</h4>
                      <p>The duct system is pressurized and aerosolized sealant is introduced. Computer monitoring shows real-time sealing progress as leaks are eliminated.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-primary text-white font-bold px-3 py-1 rounded-full mr-4 flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-bold mb-2">Final Verification</h4>
                      <p>After sealing is complete, we perform final leak testing and provide you with a detailed report showing before-and-after leakage measurements—proof of improved efficiency.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Aeroseal Service"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-aeroseal"
                />
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+15203332665" data-testid="button-call-aeroseal">
                    <Phone className="w-5 h-5 mr-2" />
                    (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Benefits of Professional Duct Sealing in Tucson
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Dramatic Energy Savings</h3>
                  <p className="text-lg">
                    Professional duct sealing typically reduces heating and cooling costs by 20-30% in Tucson homes. When ducts leak into attics, crawlspaces, or wall cavities, your HVAC system must work much harder to maintain comfortable temperatures. Sealing these leaks means more conditioned air reaches your living spaces, allowing your system to achieve desired temperatures faster while using less energy. For average Tucson homeowners spending $200+ monthly on cooling during summer, duct sealing can save $500-$700 annually.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Improved Home Comfort</h3>
                  <p className="text-lg">
                    Leaky ducts create uneven temperatures and uncomfortable hot or cold spots throughout your home. Rooms far from your HVAC system or served by leaking duct runs may never reach comfortable temperatures, while rooms closer to the air handler might be overcooled or overheated. Professional duct sealing ensures consistent airflow to all rooms, eliminating temperature variations and creating uniform comfort throughout your entire home—essential in Tucson's climate where AC performance matters most.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Better Indoor Air Quality</h3>
                  <p className="text-lg">
                    Leaky return ducts pull in unconditioned air from attics, crawlspaces, and wall cavities—along with dust, insulation fibers, allergens, and other contaminants. This compromised air is then distributed throughout your home, negatively impacting indoor air quality and potentially aggravating allergies and respiratory conditions. Sealed ducts ensure only filtered, clean air circulates through your living spaces, creating a healthier environment for your family year-round.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Extended HVAC System Life</h3>
                  <p className="text-lg">
                    When duct leaks force your HVAC system to run longer cycles to compensate for lost conditioned air, every component experiences increased wear and tear. Compressors, blower motors, and other mechanical parts have finite operational lifespans measured in run hours. By sealing duct leaks, your system achieves desired temperatures faster with shorter, more efficient cycles—reducing stress on components and potentially extending equipment life by several years, delaying costly replacement expenses.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg mb-6">
                  Ready to start saving money and improving your home comfort? Contact Intelligent Design today to schedule a duct sealing consultation and discover how much you could be saving.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Get Free Estimate"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-benefits"
                  />
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+15203332665" data-testid="button-call-benefits">
                      <Phone className="w-5 h-5 mr-2" />
                      (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-muted/50 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Traditional Duct Sealing vs. Aeroseal Technology
              </h2>
              
              <div className="mb-12">
                <p className="text-lg mb-6">
                  While both traditional duct sealing and Aeroseal technology address the same fundamental problem—air leaks in your ductwork—they differ dramatically in approach, effectiveness, and results. Understanding these differences helps homeowners make informed decisions about which duct sealing method best serves their needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Traditional Duct Sealing</h3>
                  <p className="text-lg mb-4">
                    Traditional duct sealing involves manually accessing ductwork and applying mastic sealant or specialized metallic tape to visible joints, seams, and connections. This method requires physical access to every leak location, limiting its effectiveness to exposed ductwork in attics, basements, or crawlspaces.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">+</span>
                      <span>Lower cost for accessible ductwork</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">+</span>
                      <span>Effective for visible, easily reached leaks</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">-</span>
                      <span>Cannot seal leaks inside walls, ceilings, or floors</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">-</span>
                      <span>Typically misses 40-60% of actual leakage</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">-</span>
                      <span>No quantifiable before-and-after measurements</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">-</span>
                      <span>Sealants can crack or fail over time</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border-2 border-primary">
                  <div className="bg-primary text-white text-sm font-bold px-3 py-1 rounded inline-block mb-3">
                    RECOMMENDED
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Aeroseal Technology</h3>
                  <p className="text-lg mb-4">
                    Aeroseal seals your duct system from the inside using aerosolized polymer particles that automatically find and seal leaks throughout the entire system, regardless of accessibility. Computer-controlled monitoring provides documented proof of sealing effectiveness.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">+</span>
                      <span>Seals 90%+ of all duct leaks</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">+</span>
                      <span>Reaches leaks inside walls, floors, and ceilings</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">+</span>
                      <span>Verified results with detailed before-and-after reports</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">+</span>
                      <span>10-year warranty, permanent flexible seal</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">+</span>
                      <span>Completed in single day with minimal disruption</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">+</span>
                      <span>Maximum energy savings and comfort improvement</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-center mb-8">
                As a certified Elite Aeroseal dealer, we recommend Aeroseal for most Tucson homes seeking comprehensive duct sealing. The superior results and verified performance make it the best long-term investment for energy efficiency and comfort.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Learn More About Aeroseal"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-comparison"
                />
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+15203332665" data-testid="button-call-comparison">
                    <Phone className="w-5 h-5 mr-2" />
                    (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Signs Your Tucson Home Needs Duct Sealing
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">High Energy Bills</h3>
                  <p className="text-lg">
                    If your monthly cooling costs seem excessive compared to neighbors with similar homes, or if bills have increased despite consistent usage, leaking ducts are likely wasting 20-30% of your conditioned air. Duct sealing typically pays for itself within 3-5 years through energy savings alone.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Uneven Room Temperatures</h3>
                  <p className="text-lg">
                    Certain rooms always too hot or too cold? Ducts serving distant rooms often develop leaks where sections connect, reducing airflow to those areas. Professional duct sealing restores balanced airflow, creating consistent comfort throughout your home.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Excessive Dust</h3>
                  <p className="text-lg">
                    Leaky return ducts pull dusty, contaminated air from attics and crawlspaces directly into your living spaces. If you're constantly dusting or notice unusual amounts of airborne particles, duct sealing will significantly improve your indoor air quality.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">HVAC Never Stops Running</h3>
                  <p className="text-lg">
                    When ducts leak heavily, your system struggles to reach thermostat setpoints, running continuous cycles trying to compensate for lost air. This excessive runtime wastes energy, increases wear on equipment, and drives up utility bills significantly.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Stuffy or Stale Air</h3>
                  <p className="text-lg">
                    Poor air circulation caused by duct leaks prevents proper ventilation and air exchange. Rooms may feel stuffy, odors linger longer, and humidity levels become unbalanced—all signs that your duct system isn't delivering adequate airflow where needed.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Noisy Ductwork</h3>
                  <p className="text-lg">
                    Whistling, rattling, or rushing air sounds coming from ducts often indicate air escaping through gaps and poorly sealed connections. These leaks waste energy while creating annoying noise. Professional sealing eliminates both the waste and the noise.
                  </p>
                </div>
              </div>

              <p className="text-lg text-center mb-8">
                Recognizing these signs early and addressing duct leaks promptly maximizes energy savings and prevents ongoing comfort and air quality problems. Contact us today for a professional duct leakage assessment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Assessment"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-signs"
                />
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+15203332665" data-testid="button-call-signs">
                    <Phone className="w-5 h-5 mr-2" />
                    (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ Section - LLM-Optimized with 11 Questions */}
          <ServiceFAQ faqs={ductSealingFAQs.faqs} />

          <section className="py-16 md:py-20 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Reduce Your Energy Bills with Professional Duct Sealing?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Contact Intelligent Design today for a duct leakage assessment and discover how much you could be saving with Aeroseal technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Service"
                  variant="destructive"
                  size="lg"
                  data-testid="button-schedule-cta"
                />
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-cta">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Contact Intelligent Design for Duct Sealing in Tucson
              </h2>
              
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className="font-bold text-xl mb-2">Intelligent Design Air Conditioning, Plumbing, Solar, & Electric</h3>
                    <p className="text-lg">Family and Veteran-Owned Since 1979</p>
                    <p className="text-lg">Elite Aeroseal Certified Dealer</p>
                  </div>
                  
                  <div>
                    <p className="text-lg"><span className="font-bold">Address:</span> 1145 E Fort Lowell Rd, Tucson, AZ 85719</p>
                    <p className="text-lg"><span className="font-bold">Phone:</span> <a href="tel:+15203332665" className="text-primary hover:underline">(520) 333-2665</a></p>
                    <p className="text-lg"><span className="font-bold">Hours:</span> 24/7 Emergency Service Available</p>
                  </div>
                  
                  <div>
                    <p className="font-bold text-lg mb-2">Service Areas:</p>
                    <p className="text-lg">Tucson, Oro Valley, Marana, Catalina Foothills, Vail, Sahuarita, Green Valley, and all of Pima County</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule Duct Sealing"
                    variant="default"
                    size="lg"
                    className="flex-1"
                    data-testid="button-schedule-contact"
                  />
                  <Button size="lg" variant="outline" className="flex-1" asChild>
                    <a href="tel:+15203332665" data-testid="button-call-contact">
                      <Phone className="w-5 h-5 mr-2" />
                      (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Common Questions - Conversational Q&A for AI Search Optimization */}
          <CommonQuestions questions={ductSealingCommonQuestions} />

          {/* FAQ Section - LLM-Optimized with 11 Questions */}
          <ServiceFAQ faqs={ductSealingFAQs.faqs} />
        </main>

        <Footer />
        <MobileFloatingActions />
      </div>
    </>
  );
}
