import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingActions from "@/components/MobileFloatingActions";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import SchedulerEmbed from "@/components/SchedulerEmbed";
import ACRepairSchema from "@/components/ACRepairSchema";
import TrustBar from "@/components/TrustBar";
import ServiceFAQ from "@/components/ServiceFAQ";
import { CommonQuestions } from "@/components/CommonQuestions";
import { acRepairFAQs } from "@/data/faqs/hvac";
import { acRepairCommonQuestions } from "@/data/commonQuestions/hvac";
import acRepairImage from "@assets/generated_images/Professional_AC_repair_in_Tucson_8bf9f61d.webp";
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";

export default function ACRepair() {
  const description = 'Top-rated AC repair in Tucson, AZ. Fast, reliable air conditioning repair & service. 24/7 emergency AC repair. Stay cool with affordable Tucson a/c repair solutions from Intelligent Design.';
  const imageUrl = `${SITE_URL}${acRepairImage}`;

  return (
    <>
      <MetaHead
        title="AC Repair Tucson AZ | Air Conditioning Repair Service Tucson"
        description={description}
        canonical="https://www.idesignac.com/ac-repair-tucson"
        openGraph={[
          { property: "og:locale", content: "en_US" },
          { property: "og:type", content: "website" },
          { property: "og:title", content: "AC Repair Tucson AZ | Air Conditioning Repair Service Tucson" },
          { property: "og:description", content: description },
          { property: "og:url", content: "https://www.idesignac.com/ac-repair-tucson" },
          { property: "og:site_name", content: "Intelligent Design" },
          { property: "og:image", content: imageUrl },
          { property: "og:image:width", content: "1920" },
          { property: "og:image:height", content: "1080" },
          { property: "og:image:alt", content: "Professional HVAC technician repairing air conditioning unit at Tucson home" }
        ]}
        twitter={[
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "AC Repair Tucson AZ | Air Conditioning Repair Service Tucson" },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: imageUrl },
          { name: "twitter:image:alt", content: "Professional HVAC technician repairing air conditioning unit at Tucson home" }
        ]}
      />
      <GTM />
      <DNIInjector />
      <ACRepairSchema />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative text-white py-16 md:py-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${acRepairImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Highest-Rated AC Repair in Tucson AZ
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                  Over 22,000 5-Star Reviews
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  24/7 Emergency AC Repair | Fast Response Times | Expert Technicians
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule AC Repair Online"
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
                Why Choose Intelligent Design for AC Repair?
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">24/7 Emergency AC Repair</p>
                    <p className="text-sm text-gray-600">Fast response when you need it most | Same-day service available | No overtime charges</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                    <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ five-star reviews | BBB A+ rated since 1979</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Upfront, Transparent Pricing</p>
                    <p className="text-sm text-gray-600">No hidden fees | Written estimates before work begins | Financing options available</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Expert Certified Technicians</p>
                    <p className="text-sm text-gray-600">NATE certified | Factory trained on all major brands | Background-checked professionals</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">100% Satisfaction Guarantee</p>
                    <p className="text-sm text-gray-600">Workmanship warranty on all repairs | Parts & labor coverage | If it's not right, we'll make it right</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">All Brands & Models Serviced</p>
                    <p className="text-sm text-gray-600">Carrier, Trane, Lennox, Goodman & more | Residential & commercial | Old & new systems</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best AC Repair Company Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Best Air Conditioning Repair Company in Tucson, AZ
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="text-lg mb-6">
                    Living in Tucson, AZ, it is essential to have your air conditioner (AC) up and running. If your AC has not been working its best (or if it's not working at all), contact our expert HVAC technicians at Intelligent Design Air Conditioning, Plumbing, Solar, & Electric.
                  </p>
                  <p className="text-lg mb-6">
                    We provide the best air conditioning service in Tucson, AZ. Our trusted air conditioning repair team is available 24/7, so you won't have to wait to restore your comfort at home. We can provide you with the fast and effective quality service you need!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <SchedulerEmbed
                      triggerText="Schedule Online Now"
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
                        Call For A Free Quote
                      </a>
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src="https://www.idesignac.com/wp-content/uploads/2024/12/best-air-conditioning.jpg"
                      alt="Professional AC repair technician servicing air conditioning unit in Tucson, Arizona"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
                <p className="text-lg mb-4">
                  In Tucson, AZ, the good reputation of an HVAC company is very important. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we have earned the trust of the Tucson community. We have a nearly perfect 4.97 rating on Google with over 22,000 reviews.
                </p>
                <p className="text-lg">
                  Our <a href="/about-us" className="text-primary font-semibold hover:underline">HVAC technicians are highly experienced and qualified</a>, averaging over 17 years of experience each. They continuously train on new HVAC systems technology to provide you with the most advanced solutions available.
                </p>
              </div>
            </div>
          </section>

          {/* Why AC Isn't Working Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  AC Repair Tucson – Why Your Air Conditioner Isn't Working
                </h2>
                <p className="text-xl text-gray-700 font-semibold">
                  Southern Arizona Air Conditioning Systems Repair Services
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-lg mb-6">
                  Why do residential air conditioners fail? There are a few common reasons why this happens. If the unit is not kicking on at all, there may be a power issue. Air conditioners require large surges of power to run and can trip a circuit breaker or blow a fuse—especially during summer heat waves when the unit may be running almost nonstop.
                </p>
                <p className="text-lg">
                  Dirt, ice buildup, and moisture can all be culprits behind air conditioner malfunctions. If components become clogged with dirt or moisture, air cannot move properly throughout your system. Components may become damaged by these types of clogs and buildup. As a result, you may notice less air flowing through your vents or vents blowing air that is not cool enough.
                </p>
              </div>
            </div>
          </section>

          {/* What to Expect Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div className="order-1 md:order-1">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src="https://www.idesignac.com/wp-content/uploads/2024/12/idesign-ac.jpg"
                      alt="Intelligent Design HVAC technician diagnosing AC system in Tucson home"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="order-2 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    What to Expect When You Call for Air Conditioning Repair in Tucson AZ
                  </h2>
                  <h3 className="text-xl font-semibold mb-4">
                    Best Air Conditioning System Repair Companies in Tucson AZ
                  </h3>
                  <p className="text-lg mb-6">
                    When you call Intelligent Design Air Conditioning, Plumbing, Solar, & Electric for system repairs, our HVAC technicians will determine if you need emergency AC repair service in Tucson or if the issue can wait until the following business day.
                  </p>
                  <p className="text-lg">
                    When our service technician arrives at your home, we will assess the indoor air conditioning unit, ventilation, and thermostat to determine the root of the problem. During this process, the service technician will check the refrigerant level and look for any possible leaks. Low refrigerant is often caused by slow system leaks that require professional service to identify and repair.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 md:p-12 rounded-lg text-center">
                <p className="text-lg mb-6">
                  By choosing Intelligent Design Air Conditioning, Plumbing, Solar, & Electric for your HVAC services, you can rest assured that we will resolve the reason for the call and do the job right the first time. Our HVAC technicians average about 17 years of experience each, so they have seen all HVAC system issues imaginable.
                </p>
                <p className="text-lg mb-8">
                  If our team cannot repair your system—or if your Air Conditioning Unit is more than 10 years old and requires significant repairs—we can recommend the right replacement unit and install it in your home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Online Now"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-section2"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-quote-2">Call For A Free Quote</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* How to Avoid Emergency Repairs Section */}
          <section className="bg-primary text-white py-16 md:py-20">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How You Can Avoid Emergency AC Repair in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Every air conditioning system will experience regular wear and tear, meaning every system will need maintenance and repairs at some point. Wondering how you can reduce your chances of an HVAC emergency? The best way to do this is by scheduling regular air conditioning maintenance.
              </p>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric offers best-in-class maintenance plans that come with many perks. You can use seasonal maintenance to check for clogs, faulty components, and leaks, then rest easy knowing that your system is working at its best.
              </p>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has been the number one HVAC company in Tucson for the last 7 years in a row. You can trust our team of professionals for all your heating and cooling needs!
              </p>
              <p className="text-lg">
                For Tucson AC repair from licensed professionals and a 100% satisfaction guarantee, do not delay. Call Intelligent Design Air Conditioning, Plumbing, Solar, & Electric today. You can reach us at <a href="tel:+15203332665" className="text-yellow-400 hover:text-yellow-300 underline font-bold" data-testid="link-call-24-7">(520) 333-2665</a> for AC repair service in Tucson at any time, 24/7.
              </p>
            </div>
          </section>

          {/* Emergency AC Repair Section */}
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12 bg-gray-100 py-6 rounded-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  #1 Rated Emergency AC Repair Services in Tucson, AZ
                </h2>
              </div>

              <div className="text-center max-w-4xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  Emergency AC Repair Services: Immediate Response, Expert Solutions
                </h3>
                <p className="text-lg mb-6">
                  In Tucson, a sudden AC breakdown can be more than an inconvenience—it can be a real emergency. At <a href="/about-intelligent-design" className="text-primary font-semibold hover:underline">Intelligent Design Air Conditioning, Plumbing, Solar, & Electric</a>, we understand the urgency and are always ready to respond. Our skilled technicians can handle any AC emergency, ensuring that you're never left in the heat.
                </p>
                <p className="text-lg mb-8">
                  With our 24/7 Emergency AC Repair Services, you can rest assured that help is only a call away. We provide rapid response times, expert diagnostics, and efficient repairs. Our goal is to get your AC back up and running as fast as possible, minimizing discomfort and disruption.
                </p>

                <div className="bg-gray-50 p-8 md:p-12 rounded-lg mb-8">
                  <p className="text-lg mb-6">
                    Emergency AC repair is more than a quick fix. It's about understanding the problem, finding the right solution, and ensuring that the repair is correct the first time. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, our team is experienced in handling all types of AC emergencies. We don't patch things up; we make sure your AC is restored to optimal performance.
                  </p>
                  <p className="text-lg">
                    Our Emergency AC Repair Services are comprehensive and meticulous. We diagnose the issue, provide clear explanations, and offer the best repair options. We use quality parts and follow industry best practices to ensure lasting repairs.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Online Now"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-emergency"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-emergency">Call For A Free Quote</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Commitment to Excellence Section */}
          <section className="bg-gray-100 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src="https://www.idesignac.com/wp-content/uploads/2024/03/emergency.jpg"
                    alt="Intelligent Design technician providing excellent AC repair service in Tucson"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    Commitment to Excellence in Emergency Services
                  </h3>
                  <p className="text-lg mb-6">
                    At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, our commitment is to provide top-notch emergency AC repair services. We approach every service call with the goal of exceeding your expectations. Our team has the latest tools and knowledge to ensure your AC system is always restored to its best.
                  </p>
                  <p className="text-lg mb-8">
                    From the moment you call us to the completion of the repair, we ensure a smooth, hassle-free experience. Our technicians are courteous, professional, and always ready to answer any questions. Transparency is our goal, and we keep you informed throughout the entire process. Your emergency is our priority.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <SchedulerEmbed
                      triggerText="Schedule Online Now"
                      variant="default"
                      size="lg"
                      data-testid="button-schedule-excellence"
                    />
                    <Button
                      size="lg"
                      className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                      asChild
                    >
                      <a href="tel:+15203332665" data-testid="button-call-excellence">Call For A Free Quote</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Questions - Conversational Q&A for AI Search Optimization */}
          <CommonQuestions questions={acRepairCommonQuestions} />

          {/* FAQ Section - LLM-Optimized with 11 Questions */}
          <ServiceFAQ 
            faqs={acRepairFAQs.faqs}
            sectionHeading="Frequently Asked Questions About AC Repair in Tucson"
            sectionDescription="Get answers to common questions about AC repair services in Tucson and surrounding areas"
            serviceName={acRepairFAQs.serviceName}
            serviceId={acRepairFAQs.serviceId}
          />

          {/* Service Area & Contact Information */}
          <section className="bg-white py-16 md:py-20 border-t">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Your Local AC Repair Experts in Tucson
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has been serving the greater Tucson area since 1979. We're proud to be your trusted local HVAC company.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Contact Us</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Business Name</h4>
                      <p className="text-lg">Intelligent Design Air Conditioning, Plumbing, Solar, & Electric</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Address</h4>
                      <p className="text-lg">1145 E Fort Lowell Rd<br />Tucson, AZ 85719</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Phone</h4>
                      <a 
                        href="tel:+15203332665" 
                        className="text-lg font-bold text-primary hover:text-primary/80 transition-colors"
                        data-testid="link-nap-phone"
                      >
                        (520) 333-2665
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Service Hours</h4>
                      <p className="text-lg font-semibold text-destructive">24/7 Emergency Service Available</p>
                      <p className="text-base text-muted-foreground mt-1">Day or night, we're here when you need us</p>
                    </div>
                  </div>
                </div>

                {/* Service Area */}
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Areas We Serve</h3>
                  <p className="text-lg mb-6">
                    We proudly provide AC repair, installation, and maintenance services throughout the greater Tucson metropolitan area, including:
                  </p>
                  <ul className="grid grid-cols-2 gap-3 text-lg">
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Tucson
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Oro Valley
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Marana
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Vail
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Sahuarita
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Green Valley
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      Catalina
                    </li>
                  </ul>
                  <p className="text-base text-muted-foreground mt-6">
                    Don't see your area listed? Call us at <a href="tel:+15203332665" className="text-primary font-semibold hover:underline">(520) 333-2665</a> to confirm service availability in your neighborhood.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-primary text-white py-16 md:py-20">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Immediate Response, Quality Repairs
              </h3>
              <p className="text-lg mb-6">
                Why wait in discomfort when you can have immediate emergency AC repair services in Tucson? At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we're always ready to respond to your AC emergencies. Our technicians are equipped to restore your comfort as soon as possible.
              </p>
              <p className="text-xl font-semibold">
                Reach out to us anytime, day or night, and let us take care of your emergency AC repair needs. We're here for you, providing quality repairs and peace of mind.
              </p>
            </div>
          </section>
        </main>

        <Footer />
        <MobileFloatingActions />
      </div>
    </>
  );
}
