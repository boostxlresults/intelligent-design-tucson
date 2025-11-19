import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingActions from "@/components/MobileFloatingActions";
import TrustBar from "@/components/TrustBar";
import SchedulerEmbed from "@/components/SchedulerEmbed";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import waterFiltrationHero from "@assets/generated_images/Water_filtration_system_installation_b800de70.webp";
import cleanWaterTucsonLogo from "@assets/WaterClean~Png_1761771071635.png";
import WaterFiltrationSchema from '@/components/WaterFiltrationSchema';
import ServiceFAQ from '@/components/ServiceFAQ';
import { waterFiltrationFAQs } from '@/data/faqs/plumbing';
import { CommonQuestions } from "@/components/CommonQuestions";
import { waterSoftenerCommonQuestions } from "@/data/commonQuestions/plumbing";

export default function WaterFiltration() {
  const description = "Authorized Brita PRO® partner in Tucson. Whole-home water filtration systems, water softeners, and reverse osmosis with EPA-certified lab testing before and after installation. Remove contaminants, improve taste, protect your family. Call (520) 333-2665 for free water test.";
  const imageUrl = `${SITE_URL}${waterFiltrationHero}`;

  return (
    <>
      <MetaHead
        title="Brita PRO® Water Filtration Systems Tucson | Whole-Home Water Filters | Intelligent Design"
        description={description}
        canonical={`${SITE_URL}/water-filtration-tucson`}
        openGraph={[
          { property: 'og:title', content: 'Brita PRO® Water Filtration Systems Tucson | Whole-Home Water Filters' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/water-filtration-tucson` },
          { property: 'og:type', content: 'website' },
          { property: 'og:image', content: imageUrl },
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Brita PRO® Water Filtration Systems Tucson | Whole-Home Water Filters' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Professional water filtration system installation in Tucson home' },
        ]}
      />
      <GTM />
      <DNIInjector />
      <WaterFiltrationSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${waterFiltrationHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Brita PRO® Water Filtration Systems in Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                Authorized Brita PRO® Partner | EPA-Certified Lab Testing | Whole-Home Filtration | Water Softeners | Reverse Osmosis
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Free Water Test"
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

        {/* TrustBar Component */}
        <TrustBar />

        {/* Clean Water Tucson Partnership Section */}
        <section className="bg-blue-50 py-12 border-y border-blue-100">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <img 
                  src={cleanWaterTucsonLogo} 
                  alt="Clean Water Tucson Logo" 
                  className="h-24 md:h-32 w-auto"
                  data-testid="img-clean-water-tucson-logo"
                />
              </div>
              <div className="text-center md:text-left max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3" data-testid="heading-clean-water-partnership">
                  Proud Partner of Clean Water Tucson
                </h2>
                <p className="text-lg text-gray-700 mb-4" data-testid="text-partnership-description">
                  Intelligent Design has partnered with Clean Water Tucson to provide comprehensive water quality solutions for Tucson families. Together, we offer expert water testing, advanced filtration systems, and professional installation to ensure your family has access to clean, safe water.
                </p>
                <Button
                  variant="outline"
                  className="gap-2"
                  asChild
                >
                  <a 
                    href="https://cleanwatertucson.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-testid="link-clean-water-tucson"
                  >
                    Learn More About Clean Water Tucson
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Page Highlights Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              Why Choose Brita PRO® Water Filtration from Intelligent Design?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Authorized Brita PRO® Partner</p>
                  <p className="text-sm text-gray-600">Factory-trained technicians | IAPMO system-certified products | Made in USA | Full warranty support</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">EPA-Certified Lab Testing Before & After</p>
                  <p className="text-sm text-gray-600">Test 100+ contaminants | Customized solutions | Verify results | Peace of mind guarantee</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Whole-Home Protection</p>
                  <p className="text-sm text-gray-600">Every faucet, shower, appliance | Not just drinking water | Complete filtration | Healthier living</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Remove Chlorine, Heavy Metals & Contaminants</p>
                  <p className="text-sm text-gray-600">Better taste & odor | Protect family health | Custom filtration | Proven technology</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Protect Appliances & Plumbing</p>
                  <p className="text-sm text-gray-600">Water softener options | Reduce scale buildup | Extend appliance life | Lower energy bills</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Tucson Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | Licensed plumbers | 22,000+ reviews | Same-day installation available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Brita PRO® Water Filtration Systems in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                Your family deserves clean, safe water throughout your entire home—not just at the kitchen sink. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we're proud to be an authorized Brita PRO® partner serving Tucson and surrounding areas with professional whole-home water filtration solutions.
              </p>
              <p className="text-lg mb-6">
                Unlike pitcher filters or under-sink systems that only address drinking water, Brita PRO whole-home water filtration systems treat all the water entering your home. Every faucet, shower, appliance, and fixture receives filtered water customized to remove the specific contaminants found in your Tucson water supply.
              </p>
              <p className="text-lg mb-8">
                What sets Brita PRO apart is the commitment to scientific verification. We test your water with an independent, EPA-certified laboratory before installation to identify exactly what contaminants need to be removed. Then we test again after installation to prove your system is working as designed. This level of accountability and transparency is unmatched in the water filtration industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Free Water Test"
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

        {/* Brita PRO Systems Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Brita PRO® Water Treatment Systems
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Whole-Home Water Filtration Systems
              </h3>
              <p className="text-lg mb-6">
                Brita PRO whole-home water filtration systems are the most comprehensive solution for protecting your family from water contaminants. These systems install at your home's main water line, filtering all water before it reaches any fixture or appliance. The filtration media is customized based on your EPA-certified water test results, ensuring your system removes exactly what's in your water.
              </p>
              <p className="text-lg mb-6">
                What makes Brita PRO unique is that all products are certified as an integrated system by IAPMO R&T—not just at the component level like many competitors. This system-level certification, combined with manufacturing at an IAPMO-certified facility in the USA, ensures the highest quality and reliability. Brita PRO is the only whole-home filtration provider with this comprehensive certification standard.
              </p>
              <p className="text-lg mb-6">
                Common contaminants removed by Brita PRO whole-home systems include chlorine, chloramines, sediment, heavy metals (lead, mercury, arsenic), pesticides, herbicides, industrial chemicals, volatile organic compounds (VOCs), PFAS (forever chemicals), nitrates, and trihalomethanes (THMs). The result is cleaner, safer water for drinking, cooking, bathing, and all household uses.
              </p>
              
              <h4 className="text-xl font-bold text-primary mb-3 mt-6">
                Brita PRO® Platinum Series Filtration Systems
              </h4>
              <p className="text-lg mb-4">
                The Platinum Series offers specialized filtration solutions targeted at specific water quality issues commonly found in Tucson and surrounding areas:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Carbon Platinum Series:</span> Removes unpleasant chlorine smell and taste through advanced carbon filtration technology.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Catalytic Carbon Platinum Series:</span> Specifically designed to reduce chloramines, a common disinfectant used by many municipal water systems.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Particulate Platinum Series:</span> Removes sediment and other particulates that affect water appearance and quality.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Neutralizer Carbon Platinum Series:</span> Raises water pH to neutralize corrosive effects on fixtures and appliances.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Iron Platinum Series:</span> Eliminates unwanted iron that causes metallic taste and staining.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Nitrate Platinum Series:</span> High-flow nitrate removal using advanced platinum technology.
                  </div>
                </li>
              </ul>

              <h4 className="text-xl font-bold text-primary mb-3 mt-6">
                Brita PRO® Titanium Series – Premium Filtration Technology
              </h4>
              <p className="text-lg mb-4">
                The Titanium Series represents Brita PRO's most advanced filtration technology, targeting the most serious water quality concerns:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Lead Titanium Series:</span> Certified to remove 99.7% of lead in ALL the water your family uses at a flow rate of 8 gallons per minute. This is the only whole-home system with this level of lead removal certification, making it ideal for homes with older plumbing or concern about lead contamination.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">Chloramine Titanium Series:</span> Next-generation chloramine removal technology that's more effective and longer-lasting than standard carbon filtration.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold">PFAS Titanium Series:</span> Removes PFAS (per- and polyfluoroalkyl substances), also known as "forever chemicals," which have been linked to various health concerns and don't break down naturally in the environment.
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Advanced Water Softener Systems
              </h3>
              <p className="text-lg mb-6">
                According to the U.S. Geological Survey, approximately 85% of American households have hard water—and Tucson is definitely among them. Our water contains high levels of calcium and magnesium minerals that cause scale buildup, reduce appliance efficiency, and create cleaning challenges. Brita PRO advanced water softener systems remove these hardness minerals through an ion-exchange process, delivering soft water throughout your home.
              </p>
              <p className="text-lg mb-6">
                Soft water protects your water heater, dishwasher, washing machine, and plumbing fixtures from scale damage. You'll notice softer skin and hair after bathing, cleaner dishes, brighter laundry, and reduced soap and detergent usage. Most Tucson homeowners see their water-using appliances last years longer with a Brita PRO water softener installed.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Reverse Osmosis Drinking Water Systems
              </h3>
              <p className="text-lg mb-6">
                For the ultimate in drinking water quality, Brita PRO offers high-capacity under-sink reverse osmosis systems. These advanced systems remove up to 99% of dissolved contaminants including fluoride, nitrates, sodium, and microscopic particles that other filters miss. The multi-stage filtration process produces water comparable to premium bottled water.
              </p>
              <p className="text-lg mb-8">
                Brita PRO reverse osmosis systems feature large storage tanks to ensure you always have filtered water available for drinking and cooking. The systems are more efficient than traditional RO units, wasting less water during the filtration process. Many Tucson families combine a whole-home filtration or softener system with a reverse osmosis unit for comprehensive water quality improvement.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Get Free Water Analysis"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Brita PRO Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Brita PRO® Water Filtration?
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                EPA-Certified Laboratory Testing
              </h3>
              <p className="text-lg mb-6">
                Most water filtration companies make claims about what their systems remove without ever testing your actual water. Brita PRO takes a completely different approach. Before recommending any system, we test your water with an independent, EPA-certified laboratory that analyzes over 100 potential contaminants.
              </p>
              <p className="text-lg mb-6">
                You receive a detailed report showing exactly what's in your water—not generalized information about Tucson water, but specific data about your home's water supply. This allows us to design a filtration system customized to remove the contaminants actually present in your water. After installation, we test again to verify the system is performing as designed. This scientific approach provides peace of mind that you simply can't get with other water filtration products.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Customized Filtration Solutions
              </h3>
              <p className="text-lg mb-6">
                Not all water is the same, and not all homes need the same filtration solution. Some Tucson neighborhoods have high chlorine levels but minimal hardness. Others have hard water but fewer chemical contaminants. Some water supplies contain concerning levels of heavy metals or agricultural chemicals that require specialized filtration.
              </p>
              <p className="text-lg mb-6">
                Brita PRO systems are customized based on your water test results. We select the appropriate filtration media, configure the system for your home's water usage, and ensure the solution addresses your specific water quality issues. This targeted approach is far more effective than one-size-fits-all filtration products that may not address the contaminants actually in your water.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Whole-Home Protection vs. Point-of-Use Filters
              </h3>
              <p className="text-lg mb-6">
                Many homeowners think about water quality only when drinking or cooking. But your family is exposed to water contaminants through many other pathways—showering in chlorinated water, washing dishes, doing laundry, and using appliances. Chlorine and other chemicals can be absorbed through skin during bathing or inhaled as vapor during hot showers.
              </p>
              <p className="text-lg mb-6">
                Brita PRO whole-home systems filter all the water entering your home, providing comprehensive protection. Every shower becomes healthier for skin and hair. Every load of laundry is washed in cleaner water. Your dishwasher, water heater, and plumbing fixtures are protected from damaging contaminants and scale. This whole-home approach provides benefits that under-sink or pitcher filters simply cannot match.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Professional Installation & Support
              </h3>
              <p className="text-lg mb-8">
                As an authorized Brita PRO partner, Intelligent Design has completed extensive training on proper system installation, configuration, and maintenance. Our licensed plumbers have decades of experience working with Tucson's unique plumbing systems and water conditions. We ensure your Brita PRO system is installed correctly, configured optimally, and maintained properly for years of reliable performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section3">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Water Test: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                The Benefits of Brita PRO® Water Filtration
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Health & Safety Protection
              </h3>
              <p className="text-lg mb-6">
                The most important benefit of Brita PRO water filtration is protecting your family's health. Municipal water treatment removes many contaminants but doesn't eliminate everything. According to the Environmental Working Group, the most common contaminant in U.S. tap water is trihalomethanes (THMs), which form when chlorine used for disinfection combines with organic matter. At elevated levels, THMs have been associated with increased cancer risk and other health concerns.
              </p>
              <p className="text-lg mb-6">
                Other concerning contaminants include PFAS ("forever chemicals" that don't break down in the environment), lead from aging infrastructure, arsenic (a confirmed carcinogen), chloramines and their byproducts, nitrates from agricultural runoff, and various heavy metals like mercury and copper. Studies show that hot water uses like showers and dishwashing result in greater absorption of many contaminants than drinking them—making whole-home filtration especially important.
              </p>
              <p className="text-lg mb-6">
                Brita PRO systems are designed to remove these specific health threats, providing an additional layer of protection beyond municipal treatment. This is especially important for families with young children, pregnant women, elderly members, or anyone with compromised immune systems. Clean water is foundational to good health, and Brita PRO delivers the peace of mind that comes from knowing your water is safe.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Improved Taste & Odor
              </h3>
              <p className="text-lg mb-6">
                Tucson tap water often has a noticeable chlorine taste and odor that makes drinking water less appealing. Chloramines, minerals, and other dissolved compounds can create off-flavors that affect the taste of coffee, tea, and food prepared with tap water. Many families resort to bottled water for drinking and cooking, adding significant ongoing expense.
              </p>
              <p className="text-lg mb-6">
                Brita PRO removes chlorine, chloramines, and other taste-affecting contaminants, dramatically improving water flavor. Customers consistently report that filtered water tastes "cleaner" and "fresher." Coffee and tea taste noticeably better. Ice cubes are crystal clear instead of cloudy. Most families stop buying bottled water entirely, saving money while enjoying better-tasting water straight from the tap.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Appliance & Plumbing Protection
              </h3>
              <p className="text-lg mb-6">
                Hard water and sediment cause serious problems for water-using appliances. Scale buildup inside water heaters reduces efficiency and shortens lifespan. Dishwashers and washing machines work harder and wear out faster. Faucets and showerheads develop mineral deposits that restrict water flow. Pipes become clogged over time, leading to reduced water pressure and eventual leaks.
              </p>
              <p className="text-lg mb-6">
                Brita PRO water softeners prevent these problems by removing hardness minerals before they can cause damage. Soft water allows appliances to run more efficiently, using less energy and lasting years longer. Plumbing fixtures stay cleaner and function better. Many Tucson homeowners find that the appliance protection and energy savings from a Brita PRO softener pay for the system within a few years.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Softer Skin, Hair & Laundry
              </h3>
              <p className="text-lg mb-6">
                Hard water makes it difficult to rinse soap and shampoo completely, leaving residue on skin and hair. This can cause dry, itchy skin and dull, brittle hair. Laundry washed in hard water feels stiff and scratchy, with colors fading faster. You need more detergent and soap to get things clean, adding cost and environmental impact.
              </p>
              <p className="text-lg mb-6">
                With a Brita PRO water softener, you'll immediately notice softer, healthier-feeling skin and shinier, more manageable hair. Soap and shampoo rinse away completely and lather better, so you use less product. Laundry comes out softer and cleaner, with colors staying brighter longer. These quality-of-life improvements make soft water one of the most appreciated home upgrades Tucson families can make.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Environmental Benefits
              </h3>
              <p className="text-lg mb-8">
                Switching to Brita PRO whole-home water filtration eliminates the need for bottled water, dramatically reducing plastic waste. The average family using bottled water generates hundreds of plastic bottles annually—bottles that require petroleum to produce and often end up in landfills or oceans. Brita PRO provides better water quality than most bottled water while eliminating plastic waste entirely. You'll also use less soap, detergent, and cleaning products because soft water cleans more effectively, reducing chemical use and environmental impact.
              </p>
              <div className="flex justify-center">
                <SchedulerEmbed
                  triggerText="Schedule Free Consultation"
                  variant="default"
                  size="lg"
                  data-testid="button-schedule-section4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                The Brita PRO® Installation Process
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Step 1: Free Water Testing
              </h3>
              <p className="text-lg mb-6">
                Your Brita PRO journey begins with comprehensive water testing. We collect a water sample from your home and send it to an independent, EPA-certified laboratory for analysis using Safe Home® Pro lab-certified testing kits—the most trusted brand in water testing. The lab analyzes over 100 potential contaminants including heavy metals (lead, arsenic, mercury), pesticides, bacteria, minerals, chlorine, chloramines, nitrates, PFAS, THMs, and other chemical compounds. You receive a detailed report showing exactly what's in your water and at what concentrations.
              </p>
              <p className="text-lg mb-6">
                This comprehensive testing reveals not just general water quality metrics, but specific threats like lead levels (especially important for homes built before 1986), agricultural contaminants, industrial chemicals, and disinfection byproducts. With this detailed data, we can design the perfect filtration solution for your exact water quality challenges.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Step 2: Customized System Design
              </h3>
              <p className="text-lg mb-6">
                Based on your water test results, we design a Brita PRO system specifically for your water quality issues and household needs. If your water has high chlorine but minimal hardness, we'll configure a filtration-focused system. If hard water is your primary concern, we'll recommend a water softener or combination system. For families wanting the ultimate water quality, we can combine whole-home filtration, softening, and reverse osmosis drinking water.
              </p>
              <p className="text-lg mb-6">
                We consider your home size, daily water usage, number of bathrooms, and plumbing configuration to ensure proper system sizing and placement. You'll receive a detailed proposal explaining exactly what system we recommend, why it's the best solution for your water quality issues, and transparent pricing for equipment and installation.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Step 3: Professional Installation
              </h3>
              <p className="text-lg mb-6">
                Once you approve the proposal, we schedule installation at your convenience. Our licensed plumbers arrive with all necessary equipment and materials, ready to complete the installation in a single visit. Most Brita PRO whole-home systems take 3-6 hours to install, depending on complexity and your home's plumbing layout.
              </p>
              <p className="text-lg mb-6">
                We install the main filtration or softening unit at your home's water entry point, ensuring all water is treated before reaching any fixture. For reverse osmosis systems, we install the unit under your kitchen sink with a dedicated filtered water faucet. Throughout installation, we work cleanly and minimize disruption to your home. Our technicians explain how the system works, show you how to monitor it, and answer all your questions.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Step 4: Post-Installation Testing
              </h3>
              <p className="text-lg mb-6">
                After your Brita PRO system has been operating for a few weeks, we collect another water sample for EPA-certified lab testing. This post-installation test verifies that your system is removing contaminants as designed. You receive a second detailed report showing the dramatic improvement in your water quality—proof that your investment is delivering real results.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Step 5: Ongoing Maintenance & Support
              </h3>
              <p className="text-lg mb-8">
                Brita PRO systems require periodic filter changes and maintenance to continue operating effectively. We provide reminder service and can handle all maintenance for you. Most whole-home filters need replacement every 6-12 months. Water softeners require salt replenishment and occasional resin cleaning. We make maintenance easy with scheduled service visits and genuine Brita PRO replacement components.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Start with Free Water Test"
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

        {/* Why Choose Us Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Tucson Trusts Intelligent Design for Brita PRO®
              </h2>
              <p className="text-lg mb-6">
                Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has served Tucson families since 1979. We're a family and veteran-owned business with over 45 years of experience providing honest, professional service. Our team includes licensed, experienced plumbers who have completed Brita PRO's rigorous training program and maintain authorization as an official Brita PRO partner.
              </p>
              <p className="text-lg mb-6">
                With over 22,000 five-star reviews and a nearly perfect 4.97 Google rating, we've built our reputation on quality workmanship, transparent pricing, and exceptional customer service. When you choose Intelligent Design for your Brita PRO water filtration system, you're getting factory-authorized installation, genuine equipment, expert service, and a team that stands behind every installation.
              </p>
              <p className="text-lg mb-6">
                We offer flexible financing options to make Brita PRO systems affordable for every Tucson family. Clean, safe water shouldn't be a luxury—it's a necessity. Our financing programs allow you to enjoy the benefits of whole-home water filtration immediately while making convenient monthly payments.
              </p>
              <p className="text-lg mb-8">
                As a full-service home services company, we can also address any plumbing upgrades needed for optimal system performance. If your water heater needs replacement, we can install a new high-efficiency model that will benefit even more from soft, filtered water. If you have plumbing leaks or issues, we'll fix them during the same visit. This comprehensive approach ensures your entire plumbing system works together efficiently.
              </p>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-section6">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Started: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={waterSoftenerCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={waterFiltrationFAQs.faqs} />

        {/* Business Information Section (NAP) */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Get Clean Water with Brita PRO® Today
              </h2>
              <div className="bg-card p-8 rounded-lg border text-center">
                <h3 className="text-2xl font-bold mb-4" data-testid="text-business-name">
                  Intelligent Design Air Conditioning, Plumbing, Solar, & Electric
                </h3>
                <div className="space-y-2 text-lg mb-6">
                  <p data-testid="text-address-line1">1145 E Fort Lowell Rd</p>
                  <p data-testid="text-address-line2">Tucson, AZ 85719</p>
                  <p className="text-xl font-bold text-primary" data-testid="text-phone">(520) 333-2665</p>
                  <p className="font-semibold" data-testid="text-hours">Authorized Brita PRO® Partner</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Service Areas:</h4>
                  <p className="text-base">
                    Tucson, Oro Valley, Marana, Vail, Sahuarita, Green Valley, Catalina, and surrounding areas
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SchedulerEmbed
                    triggerText="Schedule Free Water Test"
                    variant="default"
                    size="lg"
                    data-testid="button-schedule-final"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-final">
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
    </>
  );
}