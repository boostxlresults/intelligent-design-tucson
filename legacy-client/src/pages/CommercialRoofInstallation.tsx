import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceFAQ from '@/components/ServiceFAQ';
import { commercialRoofInstallationFAQs } from '@/data/faqs/roofing';
import { CommonQuestions } from "@/components/CommonQuestions";
import { commercialRoofingCommonQuestions } from "@/data/commonQuestions/roofing";
import GTM from '@/components/GTM';
import DNIInjector from '@/components/DNIInjector';
import CommercialRoofInstallationSchema from '@/components/CommercialRoofInstallationSchema';
import TrustBar from '@/components/TrustBar';
import MobileFloatingActions from '@/components/MobileFloatingActions';
import SchedulerEmbed from '@/components/SchedulerEmbed';
import roofInstallationHero from '@assets/generated_images/commercial_roof_installation_crew_c7b33cd7.webp';
import { MetaHead } from '@/components/MetaHead';
import { SITE_URL } from '@/lib/constants';

export default function CommercialRoofInstallation() {
  const description = 'Expert commercial roof installation in Tucson. TPO, EPDM, modified bitumen systems. Project management, warranties, minimal downtime. Call (520) 333-2665 for free consultation.';
  const imageUrl = `${SITE_URL}${roofInstallationHero}`;

  return (
    <>
      <MetaHead
        title="Commercial Roof Installation Tucson AZ | New Commercial Roofing Systems"
        description={description}
        canonical={`${SITE_URL}/commercial-roof-installation-tucson`}
        openGraph={[
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: 'Commercial Roof Installation Tucson AZ | New Commercial Roofing Systems' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/commercial-roof-installation-tucson` },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1920' },
          { property: 'og:image:height', content: '1080' },
          { property: 'og:image:alt', content: 'Commercial roof installation crew working on TPO roofing system in Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Commercial Roof Installation Tucson AZ | New Commercial Roofing Systems' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Commercial roof installation crew working on TPO roofing system in Tucson' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <CommercialRoofInstallationSchema />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${roofInstallationHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/10" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Commercial Roof Installation Tucson AZ
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Over 22,000 5-Star Reviews
              </p>
              <p className="text-xl mb-8 text-gray-200">
                TPO & EPDM Systems | Modified Bitumen | Project Management | Comprehensive Warranties | 45+ Years Experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Schedule Consultation"
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
              Why Choose Intelligent Design for Commercial Roof Installation?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Expert Project Management</p>
                  <p className="text-sm text-gray-600">Detailed scheduling | Permit handling | Minimal downtime | Professional coordination</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Premium Roofing Systems</p>
                  <p className="text-sm text-gray-600">TPO, EPDM, modified bitumen | Energy-efficient | Manufacturer-certified | Proven durability</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Comprehensive Warranties</p>
                  <p className="text-sm text-gray-600">15-30 year material warranties | Labor warranties | Extended coverage options | Manufacturer backed</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">45+ Years Commercial Experience</p>
                  <p className="text-sm text-gray-600">Family & veteran-owned | 22,000+ reviews | Licensed & insured | Trusted since 1979</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Energy Efficiency Focus</p>
                  <p className="text-sm text-gray-600">Cool roof technology | Reduce cooling costs | Utility rebates | Sustainable solutions</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Free Consultation & Estimates</p>
                  <p className="text-sm text-gray-600">Roof assessment | System recommendations | Detailed proposals | Financing available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Commercial Roof Installation in Tucson, AZ
              </h2>
              <p className="text-lg mb-6">
                A new commercial roof is a significant investment in your building's protection, energy efficiency, and long-term value. Whether you're constructing a new building, replacing a failed roof, or proactively upgrading before problems develop, professional installation determines your roof's performance for decades. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we've installed thousands of commercial roofs throughout Tucson since 1979, delivering quality workmanship, energy-efficient systems, and comprehensive warranties that protect your investment.
              </p>
              <p className="text-lg mb-6">
                Tucson's extreme climate demands roofing systems specifically designed for desert conditions. Our intense UV radiation—among the highest in the nation—requires membranes with superior UV resistance and stabilizers. Daily temperature swings of 40°F or more create thermal stress that tests seam strength and material flexibility. Brief but powerful monsoon storms challenge drainage systems and membrane attachment. Extreme heat for 4-6 months annually accelerates aging and requires reflective cool roof technology to control energy costs. These factors make roofing system selection and professional installation critical for long-term performance.
              </p>
              <p className="text-lg mb-8">
                We understand that commercial roof installation must balance quality, cost, and minimal business disruption. Our team provides comprehensive project management from initial consultation through final inspection—detailed roof assessments and system recommendations, transparent proposals with all costs clearly outlined, permit acquisition and building department coordination, precise scheduling to minimize operational impact, daily communication and project updates, quality installation following manufacturer specifications, thorough final inspection and cleanup, and complete warranty documentation. Whether you need a cost-effective EPDM system, energy-efficient TPO roofing, or durable modified bitumen, we deliver professional installation that protects your building and your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SchedulerEmbed
                  triggerText="Get Free Consultation"
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
                Commercial Roofing System Options
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                TPO Single-Ply Roofing
              </h3>
              <p className="text-lg mb-6">
                TPO (Thermoplastic Polyolefin) has become the most popular commercial roofing membrane in Tucson for excellent reasons. TPO's bright white surface reflects 75-85% of solar radiation, dramatically reducing roof surface temperatures and building cooling costs. In Tucson's intense sun, this translates to cooling cost reductions of 15-30% compared to darker roofing systems. TPO membranes are heat-weldable, creating seams that are stronger than the membrane itself—critical for Tucson's wind exposure and thermal stress cycles.
              </p>
              <p className="text-lg mb-6">
                TPO offers exceptional UV resistance formulated specifically for high-UV environments like Tucson. Modern TPO membranes include UV stabilizers and additives that prevent degradation even under intense desert sun exposure. Flexibility at temperature extremes allows TPO to handle Tucson's daily temperature swings without cracking or becoming brittle. TPO is available in 45-mil, 60-mil, and 80-mil thicknesses—we typically recommend 60-mil for most Tucson commercial applications, balancing durability with cost-effectiveness.
              </p>
              <p className="text-lg mb-6">
                Installation methods include fully-adhered systems using bonding adhesives, mechanically-attached systems with plates and fasteners, and ballasted systems held by gravel or pavers. For Tucson's wind exposure, we typically recommend fully-adhered or mechanically-attached systems. TPO installations qualify for long-term manufacturer warranties—15 to 30 years depending on membrane thickness and installation method. With proper installation and basic maintenance, TPO roofing systems regularly achieve 25-30+ year service lives in Tucson's climate.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                EPDM Rubber Roofing
              </h3>
              <p className="text-lg mb-6">
                EPDM (Ethylene Propylene Diene Monomer) rubber roofing has been protecting Tucson commercial buildings for over 50 years with proven reliability and cost-effectiveness. EPDM's synthetic rubber composition provides excellent UV resistance, weather durability, and flexibility across temperature extremes. Black EPDM is the most common, though white EPDM with reflective coatings is available for energy-conscious applications. EPDM's key advantage is lower installation cost—typically $4.00-$7.50 per square foot installed versus $4.50-$8.00 for TPO—making it ideal when upfront budget is a primary concern.
              </p>
              <p className="text-lg mb-8">
                EPDM roofs installed in the 1970s-1980s are still performing today, demonstrating exceptional long-term durability. Available in large sheets (up to 50 feet wide), EPDM installations minimize seams and potential leak points. Seams are typically adhered using liquid adhesives or tape—not heat-welded like TPO. While black EPDM absorbs more solar radiation than white TPO, proper insulation beneath the membrane and regular reflective coating application mitigate heat transfer. EPDM is particularly well-suited for owner-occupied buildings where long-term performance and minimal maintenance outweigh concerns about cooling costs. Warranties typically span 15-25 years, but with basic maintenance (periodic cleaning and coating application), EPDM roofs routinely achieve 30-40 year service lives in Tucson's climate.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <SchedulerEmbed
                  triggerText="Request Installation Quote"
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
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions - Conversational Q&A for AI Search Optimization */}
        <CommonQuestions questions={commercialRoofingCommonQuestions} />

        {/* FAQ Section - LLM-Optimized with 11 Questions */}
        <ServiceFAQ faqs={commercialRoofInstallationFAQs.faqs} />
      </main>

      <Footer />
    </>
  );
}