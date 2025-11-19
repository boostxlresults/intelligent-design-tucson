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
import { indoorAirQualityFAQs } from "@/data/faqs/hvac";
import { indoorAirQualityCommonQuestions } from "@/data/commonQuestions/hvac";
import iaqHero from "@assets/generated_images/Clean_home_air_quality_system_c083313f.webp";
import iaqService from "@assets/generated_images/Technician_installing_air_quality_system_a3677047.webp";
import IndoorAirQualitySchema from '@/components/IndoorAirQualitySchema';
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";

export default function IndoorAirQuality() {
  const description = 'Expert indoor air quality solutions in Tucson: whole house humidifiers, air purifiers, UV lights, filtration systems. Improve health, comfort & HVAC efficiency. Call (520) 333-2665';
  const imageUrl = `${SITE_URL}${iaqHero}`;

  return (
    <>
      <GTM />
      <DNIInjector />
      <IndoorAirQualitySchema />
      
      <MetaHead
        title="Indoor Air Quality Tucson AZ | Air Purification & Humidifiers | Intelligent Design"
        description={description}
        canonical="https://www.idesignac.com/indoor-air-quality-tucson"
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Indoor Air Quality Tucson AZ | Air Purification & Humidifiers | Intelligent Design' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: 'https://www.idesignac.com/indoor-air-quality-tucson' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Indoor air quality system in Tucson home' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Indoor Air Quality Tucson AZ | Air Purification & Humidifiers | Intelligent Design' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Indoor air quality system in Tucson home' }
        ]}
      />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="relative text-white py-16 md:py-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${iaqHero})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Expert Indoor Air Quality Solutions & Humidifiers in Tucson, AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                  Over 22,000 5-Star Reviews
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  Breathe Cleaner, Healthier Air with Professional Air Purification, Filtration & Whole House Humidifier Systems
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule Service"
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
                Why Improve Your Indoor Air Quality?
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Breathe Healthier Air</p>
                    <p className="text-sm text-gray-600">Remove allergens, dust, pollen & bacteria | Reduce asthma attacks | Better for children & elderly</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Whole House Humidifiers</p>
                    <p className="text-sm text-gray-600">Combat Tucson's dry air | Prevent dry skin & nosebleeds | Protect wood furniture | Better sleep quality</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Advanced Air Purification</p>
                    <p className="text-sm text-gray-600">HEPA filtration systems | UV germicidal lights | Electronic air cleaners | Remove 99.97% of particles</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Eliminate Odors & VOCs</p>
                    <p className="text-sm text-gray-600">Remove cooking smells & pet odors | Filter harmful chemicals | Fresh, clean air throughout your home</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Protect Your HVAC System</p>
                    <p className="text-sm text-gray-600">Better filtration extends equipment life | Reduce maintenance costs | Improve system efficiency</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Expert Solutions for Tucson Climate</p>
                    <p className="text-sm text-gray-600">45+ years local experience | Custom recommendations | Professional installation | Free consultations</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Transform Your Tucson Home with Superior Indoor Air Quality Solutions
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="text-lg mb-6">
                    At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've been helping Tucson families breathe easier since 1979. Your indoor air quality directly impacts your health, comfort, and HVAC system efficiency—especially important in our desert climate where you spend up to 90% of your time indoors. Poor indoor air quality can lead to allergies, respiratory problems, increased dust, and higher energy bills.
                  </p>
                  <p className="text-lg mb-6">
                    Our comprehensive indoor air quality solutions address the unique challenges Tucson homeowners face: excessive dust from desert winds, extremely dry air that causes discomfort, seasonal pollen and allergens, and HVAC systems that circulate contaminants throughout your home. We install and service advanced air purification systems, whole house humidifiers and dehumidifiers, high-efficiency filtration, UV air sanitizers, and ventilation systems that work together to create the healthiest possible indoor environment.
                  </p>
                  <p className="text-lg mb-6">
                    Whether you're struggling with dry air causing static electricity and cracked skin, dealing with family members who suffer from allergies, noticing excessive dust buildup, or simply want to protect your HVAC investment while improving your family's health, our certified technicians have the expertise and technology to solve your indoor air quality challenges. We offer free in-home air quality assessments to identify your specific needs and recommend customized solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <SchedulerEmbed
                      triggerText="Get Free Assessment"
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
                      src={iaqService}
                      alt="Professional HVAC technician installing indoor air quality system and humidifier in Tucson home"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Why Choose Our Indoor Air Quality Services?
                  </h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>Comprehensive air quality testing and assessment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>Expert installation of all major IAQ brands</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>Whole house humidifiers for desert climate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>Advanced HEPA and UV air purification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>Reduce energy bills and extend HVAC life</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>Family and veteran-owned since 1979</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span>Over 22,000 5-star reviews from happy customers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Comprehensive Indoor Air Quality Products & Solutions
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-3">Whole House Humidifiers</h3>
                  <p className="text-gray-700 mb-4">
                    Combat Tucson's dry desert air with professionally installed whole house humidifier systems. Maintain ideal 30-50% humidity levels automatically throughout your entire home, preventing dry skin, static electricity, respiratory discomfort, and wood damage while reducing heating costs by up to 4%.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-3">Air Purification Systems</h3>
                  <p className="text-gray-700 mb-4">
                    Advanced HEPA filtration and electronic air cleaners remove up to 99.97% of airborne particles including dust, pollen, pet dander, smoke, and mold spores. Protect your family from allergens and contaminants that traditional filters miss.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-3">UV Air Sanitizers</h3>
                  <p className="text-gray-700 mb-4">
                    Ultraviolet air purification systems installed in your ductwork neutralize bacteria, viruses, mold, and other biological contaminants. UV-C light technology provides an additional layer of protection for your family's health.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-3">Media & HEPA Filters</h3>
                  <p className="text-gray-700 mb-4">
                    Upgrade from standard 1-inch filters to high-efficiency 4-5 inch media filters or true HEPA filtration. These advanced filters capture microscopic particles, dramatically improving air quality while maintaining optimal airflow and HVAC efficiency.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-3">Ventilation Systems</h3>
                  <p className="text-gray-700 mb-4">
                    Energy recovery ventilators (ERVs) and heat recovery ventilators (HRVs) bring fresh outdoor air inside while exhausting stale indoor air, all while recovering heating and cooling energy to minimize utility costs and maintain comfort.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-3">Air Quality Monitors</h3>
                  <p className="text-gray-700 mb-4">
                    Smart air quality monitoring systems provide real-time data on particulate levels, humidity, VOCs, and carbon dioxide. Track your indoor environment via smartphone apps and receive alerts when air quality needs attention.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <SchedulerEmbed
                  triggerText="Schedule Consultation"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                The Intelligent Design Advantage for Tucson Indoor Air Quality
              </h2>
              
              <p className="text-lg mb-6">
                Since 1979, Intelligent Design has been Tucson's trusted partner for creating healthier, more comfortable homes through superior indoor air quality solutions. Our family and veteran-owned company understands the unique air quality challenges Tucson homeowners face—from our dry desert climate to seasonal dust storms and year-round pollen. We've installed thousands of air purification systems, whole house humidifiers, and filtration solutions that have dramatically improved our customers' quality of life.
              </p>

              <p className="text-lg mb-6">
                Our certified technicians receive ongoing training on the latest indoor air quality technologies including advanced HEPA filtration, UV-C sanitization, smart humidification controls, and whole-home ventilation systems. We partner with leading manufacturers to offer the most effective, energy-efficient products backed by solid warranties and our own guarantee of workmanship. Every installation begins with a thorough air quality assessment where we test particulate levels, humidity, airflow, and identify specific contaminants affecting your home.
              </p>

              <p className="text-lg mb-6">
                What sets Intelligent Design apart is our comprehensive approach to indoor air quality. We don't just sell products—we solve problems. If you're experiencing excessive dust, dry air discomfort, allergy symptoms, musty odors, or high energy bills, we'll identify the root causes and recommend the most cost-effective solutions. Many air quality issues stem from ductwork problems, improper HVAC maintenance, or inadequate ventilation, and our whole-home expertise allows us to address these underlying factors.
              </p>

              <p className="text-lg mb-6">
                We believe clean, properly humidified air shouldn't be a luxury—it's a necessity for health and comfort. That's why we offer flexible financing options, maintenance plans to keep your systems running optimally, and same-day service for urgent air quality concerns. Our white-glove installation service includes complete system testing, app configuration for smart controls, detailed operation training, and follow-up support to ensure you're completely satisfied.
              </p>

              <p className="text-lg mb-8">
                When you choose Intelligent Design for indoor air quality solutions, you're choosing a company with over 22,000 five-star reviews, an A+ Better Business Bureau rating, and four generations of family ownership committed to Tucson's wellbeing. We're available 24/7 for emergency service, offer upfront pricing with no hidden fees, and stand behind every installation with comprehensive warranties. Experience the difference that truly clean, properly balanced air makes in your home.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Book Air Quality Service"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section3"
                />
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Whole House Humidifier Installation & Service in Tucson
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Why Tucson Homes Need Humidifiers</h3>
                  <p className="text-lg mb-4">
                    Tucson's desert climate creates some of the driest indoor air conditions in the country. During winter months when heating systems run frequently, indoor humidity can drop below 15%—far drier than the Sahara Desert. This extremely dry air causes numerous problems: painful static electricity shocks, cracked and bleeding skin, dry sinuses and nosebleeds, increased susceptibility to respiratory infections, damage to wood furniture and flooring, and higher heating bills.
                  </p>
                  <p className="text-lg mb-4">
                    Unlike portable humidifiers that only affect one room, require constant refilling, and can breed bacteria, whole house humidifiers integrate directly with your HVAC system to maintain consistent, healthy humidity levels throughout your entire home automatically. These systems monitor indoor humidity in real-time and add precise amounts of moisture as needed to achieve the ideal 30-50% range recommended by medical professionals and HVAC experts.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Benefits of Whole House Humidification</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span><strong>Healthier Living:</strong> Proper humidity keeps nasal passages and throat moist, strengthening your body's natural defenses against colds, flu, and respiratory infections</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span><strong>Energy Savings:</strong> Humidified air feels warmer, allowing you to lower your thermostat by 2-4 degrees and reduce heating costs by up to 4%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span><strong>Comfort & Skin Health:</strong> Eliminate dry, itchy skin, chapped lips, static shocks, and the discomfort of breathing dry desert air</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span><strong>Home Protection:</strong> Prevent wood floors, furniture, and musical instruments from cracking and warping due to low humidity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">✓</span>
                      <span><strong>Better Sleep:</strong> Properly humidified bedrooms reduce snoring, dry throat, and nighttime respiratory discomfort</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
                <h3 className="text-2xl font-bold text-primary mb-4">Types of Whole House Humidifiers We Install</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Bypass Humidifiers</h4>
                    <p className="text-gray-700">
                      Cost-effective and reliable, bypass humidifiers use your furnace's heat to evaporate water into the air. They're ideal for most Tucson homes and require minimal maintenance—just annual filter replacement and cleaning.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Power Humidifiers</h4>
                    <p className="text-gray-700">
                      Fan-powered units that provide higher output and faster humidification. Perfect for larger homes or those with particularly dry conditions. These work independently of your furnace fan, providing humidity even when heating isn't running.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Steam Humidifiers</h4>
                    <p className="text-gray-700">
                      The most advanced option, steam humidifiers boil water to create pure steam that's distributed throughout your home. They offer the most precise humidity control, work with any HVAC system, and require less frequent maintenance.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Smart Humidifiers</h4>
                    <p className="text-gray-700">
                      WiFi-connected systems with smartphone control and automated seasonal adjustments. Monitor and adjust your home's humidity from anywhere, receive maintenance alerts, and integrate with other smart home devices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <SchedulerEmbed
                  triggerText="Schedule Humidifier Installation"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Signs Your Tucson Home Needs Indoor Air Quality Improvement
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
                  <h3 className="text-lg font-bold text-primary mb-2">Excessive Dust</h3>
                  <p className="text-gray-700">
                    If you're constantly dusting and surfaces get dirty within days, your HVAC system is circulating too many particles. High-efficiency filtration can capture 99.97% of dust.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
                  <h3 className="text-lg font-bold text-primary mb-2">Allergy Symptoms</h3>
                  <p className="text-gray-700">
                    Sneezing, congestion, itchy eyes, or asthma symptoms that worsen indoors indicate airborne allergens. Air purification systems eliminate these triggers.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
                  <h3 className="text-lg font-bold text-primary mb-2">Dry Air Discomfort</h3>
                  <p className="text-gray-700">
                    Static shocks, dry skin, chapped lips, and nosebleeds signal humidity below 30%. Whole house humidifiers restore comfortable moisture levels.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
                  <h3 className="text-lg font-bold text-primary mb-2">Musty Odors</h3>
                  <p className="text-gray-700">
                    Stale or musty smells indicate mold, mildew, or inadequate ventilation. UV purifiers and proper ventilation eliminate odor sources.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
                  <h3 className="text-lg font-bold text-primary mb-2">Frequent Illness</h3>
                  <p className="text-gray-700">
                    Family members getting sick often may be affected by airborne viruses and bacteria. UV air sanitizers neutralize biological contaminants.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
                  <h3 className="text-lg font-bold text-primary mb-2">Stuffy Rooms</h3>
                  <p className="text-gray-700">
                    Rooms that feel stale or have poor airflow need improved ventilation. ERV/HRV systems bring in fresh air while maintaining efficiency.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
                  <h3 className="text-lg font-bold text-primary mb-2">High Energy Bills</h3>
                  <p className="text-gray-700">
                    Dirty air makes HVAC systems work harder. Clean air quality and proper humidity improve efficiency and reduce utility costs significantly.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
                  <h3 className="text-lg font-bold text-primary mb-2">Visible Mold</h3>
                  <p className="text-gray-700">
                    Mold growth in bathrooms, kitchens, or near vents indicates humidity imbalance and poor air circulation requiring professional solutions.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8">
                <p className="text-lg font-semibold text-gray-900">
                  Don't wait until poor air quality affects your family's health. Our free indoor air quality assessment identifies specific issues in your home and provides customized solutions that fit your budget.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Get Free Assessment"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section5"
                />
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+15203332665" data-testid="button-call-section5">
                    <Phone className="w-5 h-5 mr-2" />
                    (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Common Questions - Conversational Q&A for AI Search Optimization */}
          <CommonQuestions questions={indoorAirQualityCommonQuestions} />

          {/* FAQ Section - LLM-Optimized with 11 Questions */}
          <ServiceFAQ faqs={indoorAirQualityFAQs.faqs} />

          <section className="py-16 md:py-20 bg-primary text-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Breathe Easier with Professional Indoor Air Quality Solutions
              </h2>
              <p className="text-xl mb-8">
                Serving Tucson Since 1979 | Over 22,000 5-Star Reviews | Family & Veteran Owned
              </p>
              <p className="text-lg mb-2">
                <strong>Intelligent Design Air Conditioning, Plumbing, Solar, & Electric</strong>
              </p>
              <p className="text-lg mb-2">
                1145 E Fort Lowell Rd, Tucson, AZ 85719
              </p>
              <p className="text-lg mb-2">
                <a href="tel:+15203332665" className="hover:text-gray-200 font-bold text-xl">(520) 333-2665</a>
              </p>
              <p className="text-lg mb-8">
                24/7 Emergency Service Available | Same-Day Appointments
              </p>
              <div className="text-sm space-y-1">
                <p><strong>Service Areas:</strong> Tucson, Oro Valley, Marana, Sahuarita, Green Valley, Catalina, Vail, Rita Ranch, Tanque Verde, Flowing Wells, Casas Adobes, Catalina Foothills, and surrounding Pima County communities</p>
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
