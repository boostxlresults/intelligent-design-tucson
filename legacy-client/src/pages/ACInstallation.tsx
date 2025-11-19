import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingActions from "@/components/MobileFloatingActions";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import SchedulerEmbed from "@/components/SchedulerEmbed";
import ACInstallationSchema from "@/components/ACInstallationSchema";
import TrustBar from "@/components/TrustBar";
import ServiceFAQ from "@/components/ServiceFAQ";
import { CommonQuestions } from "@/components/CommonQuestions";
import { acInstallationFAQs } from "@/data/faqs/hvac";
import { acInstallationCommonQuestions } from "@/data/commonQuestions/hvac";
import acInstallationImage from "@assets/generated_images/AC_installation_Tucson_home_423faef7.webp";
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";

export default function ACInstallation() {
  const description = 'Expert AC installation in Tucson, AZ. Professional new air conditioning system installation with energy-efficient units, expert sizing, and guaranteed quality. Get a free estimate today from Tucson\'s highest-rated HVAC installers.';
  const imageUrl = `${SITE_URL}${acInstallationImage}`;

  return (
    <>
      <MetaHead
        title="AC Installation Tucson AZ | New Air Conditioning Systems | Intelligent Design"
        description={description}
        canonical="https://www.idesignac.com/ac-installation-tucson"
        openGraph={[
          { property: "og:locale", content: "en_US" },
          { property: "og:type", content: "website" },
          { property: "og:title", content: "AC Installation Tucson AZ | New Air Conditioning Systems | Intelligent Design" },
          { property: "og:description", content: description },
          { property: "og:url", content: "https://www.idesignac.com/ac-installation-tucson" },
          { property: "og:site_name", content: "Intelligent Design" },
          { property: "og:image", content: imageUrl },
          { property: "og:image:width", content: "1920" },
          { property: "og:image:height", content: "1080" },
          { property: "og:image:alt", content: "Professional HVAC technician installing new air conditioning unit at Tucson home" }
        ]}
        twitter={[
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "AC Installation Tucson AZ | New Air Conditioning Systems | Intelligent Design" },
          { name: "twitter:description", content: description },
          { name: "twitter:image", content: imageUrl },
          { name: "twitter:image:alt", content: "Professional HVAC technician installing new air conditioning unit at Tucson home" }
        ]}
      />
      <GTM />
      <DNIInjector />
      <ACInstallationSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${acInstallationImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Highest-Rated AC Installation in Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Professional AC Installation | Energy-Efficient Systems | Expert Sizing | Free Estimates
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Free Estimate"
                  variant="destructive"
                  size="lg"
                  data-testid="button-schedule-installation-hero"
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
              Why Choose Intelligent Design for AC Installation?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Free In-Home Estimates</p>
                  <p className="text-sm text-gray-600">No-obligation consultation | Expert system sizing | Custom solutions for your home | Compare all options</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Energy-Efficient Systems Save Money</p>
                  <p className="text-sm text-gray-600">High SEER ratings reduce bills 30-50% | Quiet operation | Smart thermostat compatible | Eco-friendly refrigerants</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Rebates & Financing Available</p>
                  <p className="text-sm text-gray-600">TEP & SRP rebates up to $1,500 | Flexible financing options | 0% APR available | Make upgrades affordable</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Expert Installation Guaranteed</p>
                  <p className="text-sm text-gray-600">NATE certified installers | Precise load calculations | Code-compliant work | Workmanship warranty included</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Top Brands at Competitive Prices</p>
                  <p className="text-sm text-gray-600">Carrier, Trane, Lennox, Goodman & more | Factory warranties up to 10 years | Best value for your budget</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Clean, Fast Installation</p>
                  <p className="text-sm text-gray-600">Most installs completed in 1 day | Minimal disruption | Complete cleanup | Post-install system training</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is AC Installation Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Professional AC Installation Services in Tucson
              </h2>
              <p className="text-lg mb-4 text-foreground">
                Installing a new air conditioning system is one of the most important investments you'll make in your Tucson home. The right AC installation doesn't just provide cool comfort during our intense summer heat—it ensures energy efficiency, lower utility bills, and reliable performance for 15-20 years or more.
              </p>
              <p className="text-lg mb-4 text-foreground">
                At Intelligent Design, we specialize in professional AC installation throughout the greater Tucson area. Our expert technicians handle every aspect of the installation process, from helping you select the perfect system size and efficiency rating to precise installation that maximizes performance and longevity.
              </p>
              <p className="text-lg mb-6 text-foreground">
                Whether you're replacing an old, inefficient unit or installing air conditioning in a new construction home, we provide the expertise, quality equipment, and meticulous installation work that Tucson homeowners have trusted since 1979.
              </p>
            </div>
          </div>
        </section>

        {/* Why Professional Installation Matters */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Why Professional AC Installation Matters in Tucson
              </h2>
              <p className="text-lg mb-4 text-foreground">
                In Tucson's extreme climate, where temperatures regularly exceed 110°F during summer months, proper AC installation isn't optional—it's essential. A professionally installed air conditioning system can mean the difference between comfortable, efficient cooling and constant breakdowns, high energy bills, and premature system failure.
              </p>
              <p className="text-lg mb-4 text-foreground">
                Many homeowners don't realize that even the highest-quality AC unit will underperform if it's not installed correctly. Issues like improper sizing, incorrect refrigerant charge, poor airflow design, or faulty electrical connections can reduce efficiency by 30% or more and cut your system's lifespan in half.
              </p>
              <p className="text-lg mb-6 text-foreground">
                Our certified HVAC installers follow strict industry standards and manufacturer specifications to ensure your new system operates at peak efficiency from day one. We take the time to properly size your system using Manual J load calculations, design optimal ductwork layout, and test every component before we consider the job complete.
              </p>
              <div className="text-center">
                <SchedulerEmbed
                  triggerText="Get Your Free Estimate"
                  variant="destructive"
                  className="text-lg px-8 py-6"
                  data-testid="button-schedule-installation-1"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What's Included in Our Installation */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                What's Included in Our AC Installation Service
              </h2>
              <p className="text-lg mb-6 text-foreground">
                When you choose Intelligent Design for your AC installation, you get comprehensive service that covers every detail:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">In-Home Consultation</h3>
                  <p className="text-foreground">
                    Free assessment of your cooling needs, home size, insulation, and existing ductwork. We'll recommend the right system size and efficiency level for your specific situation and budget.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Manual J Load Calculation</h3>
                  <p className="text-foreground">
                    Precise sizing calculation that accounts for your home's square footage, ceiling height, insulation, windows, orientation, and Tucson's climate to ensure optimal system size—not too big, not too small.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Complete System Removal</h3>
                  <p className="text-foreground">
                    Safe removal and disposal of your old AC system, including proper refrigerant recovery according to EPA regulations. We handle all the heavy lifting and cleanup.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Expert Installation</h3>
                  <p className="text-foreground">
                    Professional installation of your new outdoor condenser, indoor air handler or furnace, thermostat, and all necessary components using industry best practices and manufacturer specifications.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Electrical & Refrigerant Work</h3>
                  <p className="text-foreground">
                    Proper electrical connections, circuit upgrades if needed, and precise refrigerant charging to manufacturer specifications for optimal efficiency and performance.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">System Testing & Calibration</h3>
                  <p className="text-foreground">
                    Comprehensive testing of all system components, airflow measurement, temperature differential verification, and thermostat calibration to ensure perfect operation.
                  </p>
                </div>
              </div>
              <p className="text-lg mb-6 text-foreground">
                Every installation also includes a complete walkthrough of your new system's operation, warranty registration, and maintenance recommendations to keep your AC running efficiently for years to come.
              </p>
              <div className="text-center">
                <Button
                  asChild
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold text-lg px-8 py-6 hover:bg-yellow-300"
                >
                  <a href="tel:5203332665" data-testid="button-call-installation-1">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (520) 333-2665 for Free Estimate
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Choosing the Right System */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Choosing the Right AC System for Your Tucson Home
              </h2>
              <p className="text-lg mb-4 text-foreground">
                Not all air conditioning systems are created equal, especially in Tucson's demanding climate. We help you select the perfect system based on your home's unique needs, your budget, and your long-term energy savings goals.
              </p>
              <p className="text-lg mb-4 text-foreground">
                <strong>SEER Ratings Matter:</strong> In Tucson, where your AC runs heavily for 6-8 months each year, investing in a high-efficiency system (16 SEER or higher) can save you hundreds of dollars annually on electricity bills. We'll show you exactly how much you can save with different efficiency levels.
              </p>
              <p className="text-lg mb-4 text-foreground">
                <strong>Right-Sizing Is Critical:</strong> Oversized systems waste energy and don't dehumidify properly. Undersized systems run constantly and struggle to keep up with Tucson's heat. Our Manual J calculations ensure your system is perfectly sized for optimal comfort and efficiency.
              </p>
              <p className="text-lg mb-6 text-foreground">
                <strong>Quality Brands:</strong> We install top-tier equipment from manufacturers like Carrier, Trane, Lennox, and Rheem—brands known for reliability in extreme climates. All systems come with strong manufacturer warranties and our own installation workmanship guarantee.
              </p>
              <div className="text-center">
                <SchedulerEmbed
                  triggerText="Schedule Your Free Consultation"
                  variant="destructive"
                  className="text-lg px-8 py-6"
                  data-testid="button-schedule-installation-2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Expert Installers */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Certified, Experienced AC Installation Technicians
              </h2>
              <p className="text-lg mb-4 text-foreground">
                AC installation is complex work that requires extensive training, proper licensing, and years of hands-on experience. Our installation crews are among the best in the industry, with credentials that include:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-foreground ml-4">
                <li>State of Arizona Contractor and HVAC licensing</li>
                <li>EPA Section 608 Universal Certification for refrigerant handling</li>
                <li>NATE (North American Technician Excellence) certification</li>
                <li>Manufacturer-specific installation training and certification</li>
                <li>Ongoing continuing education in latest installation techniques and technologies</li>
              </ul>
              <p className="text-lg mb-4 text-foreground">
                Beyond technical qualifications, our installers understand that we're working in your home. We treat every installation with respect—protecting your floors and belongings, maintaining a clean work area, and communicating clearly throughout the process.
              </p>
              <p className="text-lg mb-6 text-foreground">
                With over 45 years serving Tucson families, we've completed thousands of successful installations. Our team knows how to handle the unique challenges of Tucson homes, from older construction to modern energy-efficient designs.
              </p>
              <div className="text-center">
                <Button
                  asChild
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold text-lg px-8 py-6 hover:bg-yellow-300"
                >
                  <a href="tel:5203332665" data-testid="button-call-installation-2">
                    <Phone className="mr-2 h-5 w-5" />
                    (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Savings */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Save Money with Energy-Efficient AC Installation
              </h2>
              <p className="text-lg mb-4 text-foreground">
                If your current AC system is more than 10 years old, you're likely spending far more on electricity than necessary. Modern air conditioning systems are dramatically more efficient than units installed even a decade ago.
              </p>
              <p className="text-lg mb-4 text-foreground">
                A new, properly installed high-efficiency AC system can reduce your cooling costs by 30-50% compared to an older unit. For the average Tucson household, that translates to $600-$1,200 in annual savings—year after year.
              </p>
              <p className="text-lg mb-4 text-foreground">
                We also help you take advantage of available rebates and incentives. Tucson Electric Power and Southwest Gas often offer substantial rebates for high-efficiency equipment installation. We'll guide you through the rebate process and help you maximize your savings.
              </p>
              <p className="text-lg mb-6 text-foreground">
                When you factor in reduced repair costs (new systems rarely need repairs), lower energy bills, and improved home comfort, a new AC installation typically pays for itself within 5-7 years—then continues saving you money for another decade or more.
              </p>
              <div className="text-center">
                <SchedulerEmbed
                  triggerText="Get Free Estimate & Savings Analysis"
                  variant="destructive"
                  className="text-lg px-8 py-6"
                  data-testid="button-schedule-installation-3"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Financing & Warranties */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Financing Options & Comprehensive Warranties
              </h2>
              <p className="text-lg mb-4 text-foreground">
                We understand that AC installation is a significant investment. That's why we offer flexible financing options with approved credit, including special promotional rates and terms. Don't let budget concerns prevent you from getting the reliable cooling your home needs.
              </p>
              <p className="text-lg mb-4 text-foreground">
                Every installation we complete is backed by comprehensive warranty protection:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-foreground ml-4">
                <li><strong>Manufacturer's Equipment Warranty:</strong> Typically 10 years on parts, with extended warranties available</li>
                <li><strong>Installation Workmanship Guarantee:</strong> We stand behind our installation work</li>
                <li><strong>Satisfaction Guarantee:</strong> We're not satisfied until you are</li>
              </ul>
              <p className="text-lg mb-6 text-foreground">
                We also offer optional maintenance plans that protect your investment and keep your warranty valid. Regular maintenance is the key to getting the full 15-20 year lifespan from your new system.
              </p>
              <div className="text-center">
                <Button
                  asChild
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold text-lg px-8 py-6 hover:bg-yellow-300"
                >
                  <a href="tel:5203332665" data-testid="button-call-installation-3">
                    <Phone className="mr-2 h-5 w-5" />
                    Call for Financing Details
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency & Same-Day */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Fast AC Installation When You Need It Most
              </h2>
              <p className="text-lg mb-4 text-foreground">
                When your AC system fails completely during Tucson's brutal summer heat, waiting weeks for a new installation isn't an option. We prioritize emergency replacement installations and often complete them within 24-48 hours of approval.
              </p>
              <p className="text-lg mb-4 text-foreground">
                Our large inventory of high-quality equipment and multiple installation crews allow us to respond quickly, even during peak summer season. We maintain strong relationships with all major manufacturers, ensuring we can get the right system for your home without long delays.
              </p>
              <p className="text-lg mb-6 text-foreground">
                While we never compromise on installation quality for speed, we understand the urgency of getting your home cool again. Our efficient processes and experienced crews allow us to complete most residential installations in one day, with full testing and cleanup before we leave.
              </p>
              <div className="text-center">
                <SchedulerEmbed
                  triggerText="Schedule Fast Installation"
                  variant="destructive"
                  className="text-lg px-8 py-6"
                  data-testid="button-schedule-installation-4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Why Tucson Homeowners Choose Intelligent Design for AC Installation
              </h2>
              <p className="text-lg mb-4 text-foreground">
                With 45+ years serving the Tucson community and over 22,000 five-star reviews, we've earned our reputation as Tucson's most trusted HVAC installation company. Here's what sets us apart:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-foreground ml-4">
                <li>BBB A+ Rating with zero unresolved complaints</li>
                <li>Family and veteran-owned since 1979</li>
                <li>Licensed, bonded, and insured with full liability coverage</li>
                <li>Certified installation technicians with ongoing training</li>
                <li>Transparent, upfront pricing with no hidden fees</li>
                <li>Top-tier equipment from trusted manufacturers</li>
                <li>Comprehensive warranties on equipment and installation</li>
                <li>Flexible financing with approved credit</li>
                <li>24/7 emergency service available</li>
                <li>Serving all of greater Tucson including Oro Valley, Marana, Vail, Sahuarita, Green Valley, and Catalina</li>
              </ul>
              <p className="text-lg mb-6 text-foreground">
                We don't use high-pressure sales tactics. Our approach is simple: provide honest recommendations, accurate pricing, and exceptional installation quality that speaks for itself. Thousands of Tucson families trust us with their home comfort—we'd be honored to earn your trust too.
              </p>
              <div className="text-center">
                <Button
                  asChild
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold text-lg px-8 py-6 hover:bg-yellow-300"
                >
                  <a href="tel:5203332665" data-testid="button-call-installation-4">
                    <Phone className="mr-2 h-5 w-5" />
                    (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Professional AC Installation?
              </h2>
              <p className="text-lg mb-8">
                Get your free, no-obligation estimate today. We'll help you choose the perfect system and provide transparent pricing with no hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Free Estimate"
                  variant="destructive"
                  className="w-full sm:w-auto text-lg px-8 py-6"
                  data-testid="button-schedule-installation-5"
                />
                <Button
                  asChild
                  className="w-full sm:w-auto bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold text-lg px-8 py-6 hover:bg-yellow-300"
                >
                  <a href="tel:5203332665" data-testid="button-call-installation-5">
                    <Phone className="mr-2 h-5 w-5" />
                    (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information & Service Areas */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Intelligent Design</h2>
                  
                  <div className="space-y-4 text-lg">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Name:</h3>
                      <p className="text-foreground">Intelligent Design Air Conditioning, Plumbing, Solar, & Electric</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address:</h3>
                      <p className="text-foreground">
                        1145 E Fort Lowell Rd<br />
                        Tucson, AZ 85719
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone:</h3>
                      <p className="text-foreground">
                        <a href="tel:5203332665" className="hover:underline">(520) 333-2665</a>
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Hours:</h3>
                      <p className="text-foreground">24/7 Emergency Service Available</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Service Areas</h2>
                  <p className="text-lg mb-4 text-foreground">
                    Proudly serving Tucson and surrounding areas:
                  </p>
                  <ul className="grid grid-cols-2 gap-3 text-lg text-foreground">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Tucson
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Oro Valley
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Marana
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Vail
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Sahuarita
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Green Valley
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Catalina
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={acInstallationCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={acInstallationFAQs.faqs} />
      </main>

      <Footer />
    </>
  );
}
