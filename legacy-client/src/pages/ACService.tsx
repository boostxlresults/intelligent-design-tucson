import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingActions from "@/components/MobileFloatingActions";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import SchedulerEmbed from "@/components/SchedulerEmbed";
import ACServiceSchema from "@/components/ACServiceSchema";
import TrustBar from "@/components/TrustBar";
import ServiceFAQ from "@/components/ServiceFAQ";
import { CommonQuestions } from "@/components/CommonQuestions";
import { acServiceFAQs } from "@/data/faqs/hvac";
import { acMaintenanceCommonQuestions } from "@/data/commonQuestions/hvac";
import acServiceImage from "@assets/generated_images/AC_maintenance_service_in_Tucson_d21947d9.webp";
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";

export default function ACService() {
  const description = 'Expert AC service and maintenance in Tucson, AZ. Keep your air conditioning running efficiently with professional tune-ups, preventative maintenance, and system optimization. 24/7 service available from Intelligent Design.';
  const imageUrl = `${SITE_URL}${acServiceImage}`;

  return (
    <>
      <MetaHead
        title="AC Service Tucson AZ | Air Conditioning Maintenance & Tune-Ups | Intelligent Design"
        description={description}
        canonical="https://www.idesignac.com/ac-service-tucson"
        openGraph={[
          { property: "og:locale", content: "en_US" },
          { property: "og:type", content: "website" },
          { property: "og:title", content: "AC Service Tucson AZ | Air Conditioning Maintenance & Tune-Ups | Intelligent Design" },
          { property: "og:description", content: description },
          { property: "og:url", content: "https://www.idesignac.com/ac-service-tucson" },
          { property: "og:site_name", content: "Intelligent Design" },
          { property: "og:image", content: imageUrl },
          { property: "og:image:width", content: "1920" },
          { property: "og:image:height", content: "1080" },
          { property: "og:image:alt", content: "Professional HVAC technician performing air conditioning maintenance in Tucson" }
        ]}
        twitter={[
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "AC Service Tucson AZ | Air Conditioning Maintenance & Tune-Ups | Intelligent Design" },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: imageUrl },
          { name: "twitter:image:alt", content: "Professional HVAC technician performing air conditioning maintenance in Tucson" }
        ]}
      />
      <GTM />
      <DNIInjector />
      <ACServiceSchema />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative text-white py-16 md:py-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${acServiceImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Highest-Rated Air Conditioning Service in Tucson AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                  Over 22,000 5-Star Reviews
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  Professional AC Maintenance | Tune-Ups | System Optimization | 24/7 Service
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule AC Service Online"
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
                Why Maintain Your AC with Intelligent Design?
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Save 15-30% on Energy Bills</p>
                    <p className="text-sm text-gray-600">Regular maintenance keeps systems running efficiently | Prevent costly emergency repairs | Extend equipment lifespan</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Comprehensive 23-Point Inspection</p>
                    <p className="text-sm text-gray-600">Thorough system diagnostics | Refrigerant level check | Electrical component testing | Clean coils & filters</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Priority Scheduling & Discounts</p>
                    <p className="text-sm text-gray-600">Maintenance plan members get priority service | Exclusive discounts on repairs | No trip charges</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Prevent Breakdowns Before They Happen</p>
                    <p className="text-sm text-gray-600">Catch small issues early | Avoid summer AC failures | Keep your family comfortable year-round</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Maintain Manufacturer Warranties</p>
                    <p className="text-sm text-gray-600">Most warranties require annual service | We document all maintenance | Protect your investment</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Clean, Professional Service</p>
                    <p className="text-sm text-gray-600">Background-checked technicians | Respect your home | Detailed service report provided after every visit</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Professional AC Service Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Professional Air Conditioning Service in Tucson, AZ
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="text-lg mb-6">
                    Air conditioning service is more than just fixing problems when they arise. It's about maintaining optimal performance, preventing costly breakdowns, and ensuring your home stays comfortable year-round. In Tucson's extreme heat, regular AC service isn't just recommended—it's essential for your comfort and safety.
                  </p>
                  <p className="text-lg mb-6">
                    At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, our expert HVAC technicians provide comprehensive air conditioning service that keeps your system running at peak efficiency. With over 45 years of experience serving Tucson families, we understand the unique demands that Southern Arizona's climate places on your AC system.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
                      <a href="tel:+15203332665" data-testid="button-call-service">
                        Get Free Estimate
                      </a>
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src="https://www.idesignac.com/wp-content/uploads/2024/12/best-air-conditioning.jpg"
                      alt="HVAC technician performing professional air conditioning service and maintenance in Tucson home"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
                <p className="text-lg mb-4">
                  Our nearly perfect 4.97 rating on Google with over 22,000 reviews reflects our commitment to excellence in every service call. We don't just service air conditioners—we build lasting relationships with Tucson homeowners by delivering reliable, professional service every single time.
                </p>
                <p className="text-lg">
                  Our <a href="/about-us" className="text-primary font-semibold hover:underline">certified HVAC technicians average over 17 years of experience</a> and receive continuous training on the latest AC systems and technologies. This expertise ensures your air conditioning service is performed correctly the first time, maximizing your system's efficiency and lifespan.
                </p>
              </div>
            </div>
          </section>

          {/* What's Included in AC Service */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  What's Included in Our AC Service & Maintenance
                </h2>
                <p className="text-xl text-gray-700">
                  Comprehensive Service to Keep Your System Running Perfectly
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-3">Complete System Inspection</h3>
                  <p className="text-gray-700">
                    Thorough examination of all AC components including compressor, condenser, evaporator coils, refrigerant levels, and electrical connections to identify potential issues before they become major problems.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-3">Filter Replacement</h3>
                  <p className="text-gray-700">
                    Clean or replace air filters to ensure optimal airflow, improved indoor air quality, and maximum system efficiency. Dirty filters are a leading cause of AC system failures in Tucson.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-3">Coil Cleaning</h3>
                  <p className="text-gray-700">
                    Professional cleaning of evaporator and condenser coils removes dirt, debris, and buildup that reduces cooling efficiency and forces your system to work harder than necessary.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-3">Refrigerant Check</h3>
                  <p className="text-gray-700">
                    Precise measurement and adjustment of refrigerant levels. Low refrigerant is a common issue that reduces cooling capacity and can damage your compressor if left unaddressed.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-3">Thermostat Calibration</h3>
                  <p className="text-gray-700">
                    Verify and calibrate thermostat settings to ensure accurate temperature control and optimal system cycling, preventing energy waste and maintaining consistent comfort.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-3">Drain Line Service</h3>
                  <p className="text-gray-700">
                    Clear condensate drain lines to prevent water damage, mold growth, and system shutdowns. Clogged drains are especially common in Tucson's dry climate when dust mixes with condensation.
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <SchedulerEmbed
                  triggerText="Schedule Your AC Service"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
              </div>
            </div>
          </section>

          {/* Why Regular AC Service Matters */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div className="order-2 md:order-1">
                  <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src="https://www.idesignac.com/wp-content/uploads/2024/12/heating-cooling-service.jpg"
                      alt="Technician performing preventative AC maintenance to extend system lifespan"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    Why Regular AC Service Matters in Tucson
                  </h2>
                  <p className="text-lg mb-4">
                    Tucson's extreme temperatures—often exceeding 110°F in summer—place enormous stress on air conditioning systems. Without regular professional service, your AC works harder, consumes more energy, and experiences accelerated wear and tear.
                  </p>
                  <p className="text-lg mb-4">
                    <strong>Regular AC service provides:</strong>
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-lg"><strong>Lower Energy Bills:</strong> A well-maintained AC runs 15-20% more efficiently, saving hundreds annually on cooling costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-lg"><strong>Fewer Breakdowns:</strong> Preventative maintenance catches small issues before they become expensive emergency repairs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-lg"><strong>Extended System Life:</strong> Regular service can add years to your AC's lifespan, delaying the need for costly replacement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-lg"><strong>Better Air Quality:</strong> Clean filters and coils mean cleaner, healthier air for your family</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-lg"><strong>Warranty Protection:</strong> Many manufacturers require regular professional maintenance to keep warranties valid</span>
                    </li>
                  </ul>
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-maintenance">
                      <Phone className="w-5 h-5 mr-2" />
                      Call for Service Today
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Expert Technicians Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Experienced HVAC Technicians You Can Trust
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-lg mb-6">
                  When you schedule AC service with Intelligent Design, you're getting more than just a tune-up—you're getting peace of mind. Our technicians are licensed, certified, and extensively trained on all major AC brands and systems. They arrive on time, in clean uniforms, with fully stocked service vehicles ready to handle any maintenance need.
                </p>
                <p className="text-lg mb-6">
                  Every service call includes a detailed inspection report, clear explanations of any findings, and honest recommendations. We never use high-pressure sales tactics or recommend unnecessary services. Our goal is to build trust through transparency and exceptional workmanship.
                </p>
                <p className="text-lg mb-8">
                  As a family-owned and veteran-operated business serving Tucson since 1979, we understand the importance of reliable air conditioning in the Arizona desert. We treat every home as if it were our own, and we stand behind our work with comprehensive service guarantees.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Book Your Service Appointment"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-section3"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-appointment">
                      <Phone className="w-5 h-5 mr-2" />
                      (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* NAP + Service Area Section */}
          <section className="py-16 md:py-20 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    Contact Intelligent Design
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Business Name:</h3>
                      <p className="text-gray-700">Intelligent Design Air Conditioning, Plumbing, Solar, & Electric</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Address:</h3>
                      <p className="text-gray-700">1145 E Fort Lowell Rd</p>
                      <p className="text-gray-700">Tucson, AZ 85719</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Phone:</h3>
                      <p className="text-gray-700">
                        <a href="tel:+15203332665" className="text-primary hover:underline font-semibold">
                          (520) 333-2665
                        </a>
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Hours:</h3>
                      <p className="text-gray-700">24/7 Emergency Service Available</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    Service Areas
                  </h2>
                  <p className="text-lg mb-4">
                    Proudly serving Tucson and surrounding areas:
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      <span>Tucson</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      <span>Oro Valley</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      <span>Marana</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      <span>Vail</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      <span>Sahuarita</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      <span>Green Valley</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      <span>Catalina</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common Questions - Conversational Q&A for AI Search Optimization */}
          <CommonQuestions questions={acMaintenanceCommonQuestions} />

          {/* FAQ Section - LLM-Optimized with 11 Questions */}
          <ServiceFAQ faqs={acServiceFAQs.faqs} />
        </main>

        <Footer />
        <MobileFloatingActions />
      </div>
    </>
  );
}
