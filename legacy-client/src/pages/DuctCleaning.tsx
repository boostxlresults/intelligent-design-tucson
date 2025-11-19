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
import { ductCleaningFAQs } from "@/data/faqs/hvac";
import { ductCleaningCommonQuestions } from "@/data/commonQuestions/hvac";
import ductCleaningHero from "@assets/generated_images/Duct_cleaning_service_Tucson_home_755876f7.webp";
import ductCleaningService from "@assets/generated_images/Air_duct_cleaning_service_dd4fa139.webp";
import DuctCleaningSchema from '@/components/DuctCleaningSchema';
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";

export default function DuctCleaning() {
  const description = '#1 rated air duct cleaning in Tucson, AZ. Improve indoor air quality & HVAC efficiency with professional duct cleaning. Same-day service available. Call (520) 333-2665';
  const imageUrl = `${SITE_URL}${ductCleaningHero}`;

  return (
    <>
      <GTM />
      <DNIInjector />
      
      <DuctCleaningSchema />
      
      <MetaHead
        title="Duct Cleaning Tucson AZ | Air Duct Cleaning Service | Intelligent Design"
        description={description}
        canonical="https://www.idesignac.com/duct-cleaning-tucson"
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Duct Cleaning Tucson AZ | Air Duct Cleaning Service | Intelligent Design' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: 'https://www.idesignac.com/duct-cleaning-tucson' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Professional air duct cleaning service in Tucson home' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Duct Cleaning Tucson AZ | Air Duct Cleaning Service | Intelligent Design' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional air duct cleaning service in Tucson home' }
        ]}
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative text-white py-16 md:py-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${ductCleaningHero})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Highest-Rated Air Duct Cleaning in Tucson AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                  Over 22,000 5-Star Reviews
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  Professional Duct Cleaning | Improved Air Quality | Same-Day Service Available
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule Cleaning"
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
                Why Choose Professional Duct Cleaning?
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Breathe Healthier Indoor Air</p>
                    <p className="text-sm text-gray-600">Remove dust, allergens, mold spores & bacteria | Reduce asthma & allergy triggers | Safer for families & pets</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Improve HVAC Efficiency by 20-30%</p>
                    <p className="text-sm text-gray-600">Clean ducts = better airflow | Lower energy bills | System runs easier | Extends equipment life</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Advanced Truck-Mounted Equipment</p>
                    <p className="text-sm text-gray-600">Powerful HEPA-filtered vacuum systems | NADCA certified process | Camera inspection available</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Eliminate Unpleasant Odors</p>
                    <p className="text-sm text-gray-600">Remove musty, moldy smells | Pet odors | Smoke residue | Fresh, clean air throughout home</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                    <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ five-star reviews | Background-checked technicians | Licensed & insured</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Transparent Pricing & Same-Day Service</p>
                    <p className="text-sm text-gray-600">No hidden fees | Written estimates | Fast scheduling | Satisfaction guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Air Duct Cleaning Services Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Professional Air Duct Cleaning Services in Tucson, AZ
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="text-lg mb-6">
                    At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we provide comprehensive air duct cleaning services that dramatically improve your home's indoor air quality and HVAC system efficiency. Our professional duct cleaning goes far beyond simple vacuuming—we use state-of-the-art equipment and proven techniques to remove years of accumulated dust, allergens, and contaminants from your entire ductwork system.
                  </p>
                  <p className="text-lg mb-6">
                    Living in Tucson's desert environment means your air ducts face unique challenges. Desert dust, pollen from mesquite and palo verde trees, and particulates from monsoon dust storms constantly infiltrate your home's ventilation system. Over time, these contaminants build up inside your ductwork, reducing air quality and forcing your HVAC system to work harder to maintain comfortable temperatures.
                  </p>
                  <p className="text-lg mb-6">
                    Our thorough duct cleaning process removes dust, debris, allergens, pet dander, mold spores, and other pollutants that accumulate in your air ducts over time. By eliminating these contaminants, we help create a healthier living environment for you and your family while improving your HVAC system's performance and energy efficiency.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <SchedulerEmbed
                      triggerText="Schedule Duct Cleaning"
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
                      src={ductCleaningService}
                      alt="Professional technician performing air duct cleaning service in Tucson home"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
                <p className="text-lg mb-4">
                  With over 22,000 five-star reviews and a 4.97 Google rating, Intelligent Design has earned the trust of thousands of Tucson homeowners. Our experienced technicians average over 17 years of industry experience and receive ongoing training on the latest duct cleaning technologies and best practices. We use professional-grade equipment including HEPA-filtered negative air machines, rotary brush systems, and sanitization tools to ensure your ducts are thoroughly cleaned and sanitized.
                </p>
                <p className="text-lg">
                  We offer same-day service for most appointments and provide flexible scheduling to work around your busy schedule. Our transparent pricing means no hidden fees or surprise charges—you'll know exactly what to expect before we begin work. We also offer comprehensive maintenance plans that include regular duct inspections and cleaning to keep your indoor air quality at its best year-round.
                </p>
              </div>
            </div>
          </section>

          {/* Why Air Duct Cleaning Matters in Tucson Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Why Air Duct Cleaning Matters in Tucson's Desert Climate
                </h2>
              </div>

              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-lg mb-6">
                  Tucson's unique desert environment creates specific challenges for your home's air duct system. Unlike many other cities, Tucson experiences extreme temperature swings, intense UV exposure, powerful monsoon dust storms, and year-round allergen production from desert vegetation. These environmental factors make regular air duct cleaning not just recommended—it's essential for maintaining healthy indoor air quality.
                </p>
                <p className="text-lg mb-6">
                  <strong>Desert Dust and Particulate Matter:</strong> Tucson's desert location means fine dust particles are constantly present in the air. During monsoon season, massive dust storms (haboobs) can deposit pounds of dust throughout the Tucson valley. This fine particulate matter easily infiltrates your home through windows, doors, and your HVAC system's fresh air intake. Over time, this dust accumulates in your ductwork, creating thick layers that restrict airflow and continuously recirculate through your living spaces.
                </p>
                <p className="text-lg mb-6">
                  <strong>Year-Round Allergen Production:</strong> Tucson's desert plants produce allergens throughout much of the year. Mesquite trees bloom in spring and summer, palo verde trees release pollen in April and May, and various grasses and weeds add to the allergen load. These pollens enter your home and settle in your air ducts, where they're blown back into your living spaces every time your HVAC system runs. For allergy sufferers, contaminated ductwork can make symptoms significantly worse.
                </p>
                <p className="text-lg mb-6">
                  <strong>Extreme Heat Impact:</strong> Tucson's summer temperatures regularly exceed 100°F, with many days reaching 110°F or higher. This extreme heat causes your HVAC system to run almost continuously during summer months. More runtime means more air circulation through your ducts, which accelerates dust and debris buildup. Additionally, heat can cause dust and organic materials in your ducts to create musty odors that permeate your home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <SchedulerEmbed
                    triggerText="Book Duct Inspection"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-section2"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-section2">
                      Call: (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Health Benefits of Clean Air Ducts
                </h3>
                <p className="text-lg mb-4">
                  Indoor air quality directly impacts your family's health, especially in Tucson where people spend most of their time indoors to escape the extreme heat. Contaminated air ducts can harbor mold spores, bacteria, dust mites, and other allergens that trigger respiratory issues, asthma attacks, and allergic reactions. Children, elderly family members, and those with respiratory conditions are particularly vulnerable to poor indoor air quality.
                </p>
                <p className="text-lg">
                  Professional duct cleaning removes these harmful contaminants, significantly improving your indoor air quality. Many of our customers report noticeable improvements in their allergy symptoms, better sleep quality, and fewer respiratory issues after having their ducts professionally cleaned. Clean ducts mean cleaner air for your family to breathe, creating a healthier and more comfortable home environment.
                </p>
              </div>
            </div>
          </section>

          {/* Complete Duct Cleaning Process Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Our Complete Air Duct Cleaning Process
                </h2>
                <p className="text-xl text-gray-700">
                  Professional 7-Step System for Thorough Duct Cleaning
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div className="order-2 md:order-1">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src="https://www.idesignac.com/wp-content/uploads/2024/12/duct-cleaning-process.jpg"
                      alt="HVAC technician using professional duct cleaning equipment"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Step 1: Comprehensive Inspection
                  </h3>
                  <p className="text-lg mb-6">
                    Before we begin cleaning, our certified technicians conduct a thorough inspection of your entire duct system. We use camera inspection equipment to view the interior of your ducts and assess the level of contamination. This inspection helps us identify problem areas, locate any damage or leaks, and determine the most effective cleaning approach for your specific system. We'll show you the camera footage so you can see exactly what's inside your ducts.
                  </p>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Step 2: System Preparation and Protection
                  </h3>
                  <p className="text-lg">
                    We take great care to protect your home during the cleaning process. Our technicians cover floors and furniture near vents and registers, seal off areas that won't be cleaned, and ensure all access points are properly prepared. We create containment zones to prevent dust and debris from spreading throughout your home during the cleaning process.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 md:p-12 rounded-lg mb-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Step 3: Negative Air Pressure System
                    </h3>
                    <p className="text-lg mb-6">
                      We connect powerful HEPA-filtered negative air machines to your duct system. These industrial-grade machines create strong negative pressure throughout your ductwork, ensuring that all dislodged dust and debris is pulled into our collection system rather than released into your home. Our negative air machines are equipped with multi-stage HEPA filtration that captures 99.97% of particles as small as 0.3 microns.
                    </p>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Step 4: Agitation and Debris Removal
                    </h3>
                    <p className="text-lg">
                      Using specialized rotary brush systems and compressed air tools, we thoroughly agitate and dislodge dust, debris, and contaminants from every surface of your ductwork. Our technicians work systematically through both supply and return ducts, ensuring complete coverage of your entire system. The negative air pressure immediately captures all dislodged material, preventing it from settling back into your ducts.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Step 5: Sanitization Treatment
                    </h3>
                    <p className="text-lg mb-6">
                      After mechanical cleaning is complete, we apply EPA-approved antimicrobial treatments to sanitize your ductwork. This sanitization step kills bacteria, mold spores, and other biological contaminants that may be present in your ducts. The sanitizing agents we use are safe for your family and pets while being highly effective against harmful microorganisms.
                    </p>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Step 6: Air Filter Replacement
                    </h3>
                    <p className="text-lg">
                      We replace your old air filters with new, high-quality filters as part of every duct cleaning service. A fresh filter ensures your newly cleaned ducts stay cleaner longer and helps maintain optimal airflow and air quality. We can recommend the best filter type for your specific system and air quality needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-primary p-8 md:p-12 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                  Step 7: Final Verification and System Testing
                </h3>
                <p className="text-lg mb-6">
                  After cleaning is complete, we conduct a final camera inspection to verify that all ducts are thoroughly cleaned. We test your HVAC system to ensure proper airflow and operation. Our technicians will walk you through the results, showing you before-and-after camera footage and explaining what we accomplished. We also provide recommendations for maintaining clean ducts and optimal air quality going forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Professional Cleaning"
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
                      Get Free Estimate
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Signs Your Ducts Need Cleaning Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Signs Your Air Ducts Need Professional Cleaning
                </h2>
                <p className="text-xl text-gray-700">
                  Recognize These Warning Signs in Your Tucson Home
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Visible Dust Around Vents
                  </h3>
                  <p className="text-lg">
                    If you notice dust accumulating around your supply vents or return grills shortly after cleaning, it's a clear sign that dust is being blown out of your ductwork. Dark streaks or dust buildup on walls or ceilings near vents indicate significant contamination in your duct system that requires professional cleaning.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Musty or Stale Odors
                  </h3>
                  <p className="text-lg">
                    Unpleasant odors coming from your vents when your HVAC system runs indicate mold growth, accumulated dust, or other contaminants in your ductwork. These odors often become more noticeable when you first turn on your system after it's been off for a while. Musty smells can also indicate moisture problems that need immediate attention.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Increased Allergy Symptoms
                  </h3>
                  <p className="text-lg">
                    If family members experience worsening allergy symptoms, frequent sneezing, coughing, or respiratory irritation when indoors, contaminated air ducts may be the culprit. Dust mites, pollen, and other allergens trapped in your ductwork continuously circulate through your home, triggering allergic reactions and respiratory issues.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Higher Energy Bills
                  </h3>
                  <p className="text-lg">
                    Unexplained increases in your cooling and heating costs often result from restricted airflow caused by dust buildup in your ducts. When your HVAC system must work harder to push air through clogged ducts, it consumes more energy and raises your utility bills. Clean ducts improve system efficiency and reduce energy consumption.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Reduced Airflow
                  </h3>
                  <p className="text-lg">
                    Weak airflow from your vents or inconsistent temperatures between rooms suggests significant duct contamination. When dust and debris partially block your ductwork, air cannot flow freely through your system. This results in some rooms being too hot or too cold and reduces your overall comfort level.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Recent Construction or Renovation
                  </h3>
                  <p className="text-lg">
                    Home remodeling projects generate enormous amounts of dust, drywall particles, sawdust, and other debris that infiltrate your duct system. Even with the best precautions, construction dust finds its way into ductwork. Professional duct cleaning after renovation ensures all construction debris is removed from your ventilation system.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Inspection Today"
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
                      Call: (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Comprehensive Benefits Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Comprehensive Benefits of Professional Duct Cleaning
                </h2>
                <p className="text-xl text-gray-700">
                  Why Tucson Homeowners Choose Intelligent Design
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Dramatically Improved Indoor Air Quality
                  </h3>
                  <p className="text-lg mb-6">
                    Professional duct cleaning removes pounds of accumulated dust, allergens, and contaminants from your ventilation system, dramatically improving the air quality throughout your home. Clean ducts mean cleaner air for your family to breathe, reducing respiratory irritation and creating a healthier living environment. This is especially important in Tucson where people spend significant time indoors to escape extreme outdoor temperatures.
                  </p>
                  <p className="text-lg mb-6">
                    Many homeowners report immediate improvements in air quality after professional duct cleaning. The reduction in airborne dust means less frequent dusting and cleaning, while improved air purity helps reduce asthma and allergy symptoms. For families with young children, elderly members, or anyone with respiratory sensitivities, clean air ducts provide significant health benefits.
                  </p>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Significant Energy Savings (15-30%)
                  </h3>
                  <p className="text-lg">
                    Clean ductwork allows air to flow freely through your HVAC system, reducing the energy required to heat and cool your home. According to the U.S. Department of Energy, removing buildup from ductwork and HVAC components can improve system efficiency by 15-30%. For Tucson homeowners facing high cooling costs during our long, hot summers, this translates to substantial savings on monthly utility bills. The energy savings from professional duct cleaning often pay for the service within the first year.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Extended HVAC System Lifespan
                  </h3>
                  <p className="text-lg mb-6">
                    When your HVAC system doesn't have to work as hard to push air through clean ducts, all components experience less wear and tear. Reduced strain on your blower motor, heat exchanger, compressor, and other expensive components means fewer repairs and a longer system lifespan. Regular duct cleaning is one of the most cost-effective ways to protect your HVAC investment and avoid premature system replacement.
                  </p>
                  <p className="text-lg mb-6">
                    Clean ducts also prevent dust and debris from damaging sensitive HVAC components. When dust accumulates on heat exchangers, evaporator coils, and blower wheels, it reduces efficiency and can cause component failures. By keeping your duct system clean, you protect your entire HVAC system from contamination-related damage.
                  </p>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Reduced Allergens and Health Irritants
                  </h3>
                  <p className="text-lg">
                    Professional duct cleaning removes common allergens including pollen, pet dander, dust mites, mold spores, and other biological contaminants that accumulate in ductwork over time. For allergy and asthma sufferers, this reduction in airborne allergens can provide significant relief from symptoms. Clean ducts also eliminate musty odors caused by mold, mildew, or accumulated dust, creating a fresher-smelling home environment.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 md:p-12 rounded-lg mb-12">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                  Better Airflow Throughout Your Home
                </h3>
                <p className="text-lg mb-6">
                  Clean ductwork ensures consistent, strong airflow to every room in your home. When ducts are clogged with dust and debris, air cannot circulate properly, resulting in hot and cold spots, reduced comfort, and inefficient heating and cooling. Professional duct cleaning restores proper airflow, ensuring even temperatures throughout your home and optimal comfort in every room.
                </p>
                <p className="text-lg">
                  Improved airflow also means your HVAC system can maintain your desired temperature more effectively with less runtime. Your air conditioner won't have to run as long to cool your home, and your heating system will warm your space more efficiently. This improved performance contributes to both energy savings and enhanced comfort.
                </p>
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Get Started Today"
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
                      Call For Free Quote
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Common Questions - Conversational Q&A for AI Search Optimization */}
          <CommonQuestions questions={ductCleaningCommonQuestions} />

          {/* FAQ Section - LLM-Optimized with 11 Questions */}
          <ServiceFAQ faqs={ductCleaningFAQs.faqs} />

          {/* NAP Section */}
          <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Contact Intelligent Design for Air Duct Cleaning in Tucson
                </h2>
                <p className="text-xl text-gray-700">
                  Serving Tucson, Oro Valley, Marana, Vail, Sahuarita, Green Valley & Catalina
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="bg-gray-50 p-8 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-primary mb-6">
                      Business Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-lg mb-1">Intelligent Design Air Conditioning, Plumbing, Solar, & Electric</p>
                        <p className="text-gray-700">6930 S Tucson Blvd</p>
                        <p className="text-gray-700">Tucson, AZ 85756</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Phone:</p>
                        <a href="tel:+15203332665" className="text-primary text-xl font-bold hover:underline" data-testid="link-phone-nap">
                          (520) 333-2665
                        </a>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Hours:</p>
                        <p className="text-gray-700">24/7 Emergency Service Available</p>
                        <p className="text-gray-700">Monday - Sunday: Open 24 Hours</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Service Areas:</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Tucson, AZ</li>
                          <li>• Oro Valley, AZ</li>
                          <li>• Marana, AZ</li>
                          <li>• Vail, AZ</li>
                          <li>• Sahuarita, AZ</li>
                          <li>• Green Valley, AZ</li>
                          <li>• Catalina, AZ</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary text-white p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">
                      Why Choose Intelligent Design?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">✓</span>
                        <span>Over 22,000 5-Star Reviews</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">✓</span>
                        <span>Technicians Average 17+ Years Experience</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">✓</span>
                        <span>Same-Day Service Available</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">✓</span>
                        <span>100% Satisfaction Guarantee</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">✓</span>
                        <span>Upfront, Transparent Pricing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">✓</span>
                        <span>Professional NADCA-Certified Service</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="aspect-video rounded-lg overflow-hidden bg-gray-200 mb-6">
                    <img
                      src="https://www.idesignac.com/wp-content/uploads/2024/12/intelligent-design-tucson.jpg"
                      alt="Intelligent Design Air Conditioning service location in Tucson, Arizona"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-primary mb-6">
                      Schedule Your Air Duct Cleaning Today
                    </h3>
                    <p className="text-lg mb-6">
                      Don't wait to improve your home's air quality and HVAC efficiency. Contact Intelligent Design today to schedule your professional air duct cleaning service. Our friendly customer service team is available 24/7 to answer your questions and schedule your appointment.
                    </p>
                    <p className="text-lg mb-6">
                      We offer free estimates, convenient scheduling, and same-day service for most appointments. Experience the difference that professional duct cleaning can make in your Tucson home.
                    </p>
                    <Button
                      size="lg"
                      className="w-full bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                      asChild
                    >
                      <a href="tel:+15203332665" data-testid="button-call-nap">
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
        <MobileFloatingActions />
      </div>
    </>
  );
}
