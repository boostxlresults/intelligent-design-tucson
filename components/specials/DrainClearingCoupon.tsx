"use client";

import { Phone, Scissors, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SchedulerEmbed from "@/components/integrations/SchedulerEmbed";

/**
 * DrainClearingCoupon Component
 * 
 * Prominent, coupon-style promotional section for the $28.88 Drain Clearing Special
 * Features above-the-fold placement for maximum visibility and conversion
 */
export default function DrainClearingCoupon() {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 border-t-4 border-b-4 border-dashed border-yellow-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Coupon Container */}
          <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-dashed border-yellow-500" data-testid="coupon-drain-special">
            {/* Scissors Icon - Top Left */}
            <div className="absolute -top-3 -left-3 bg-yellow-500 rounded-full p-2 shadow-lg z-10">
              <Scissors className="w-6 h-6 text-white transform rotate-45" />
            </div>
            
            {/* Scissors Icon - Top Right */}
            <div className="absolute -top-3 -right-3 bg-yellow-500 rounded-full p-2 shadow-lg z-10">
              <Scissors className="w-6 h-6 text-white transform -rotate-45" />
            </div>

            <div className="grid md:grid-cols-5 gap-6 p-8 md:p-10">
              {/* Left Side - Pricing */}
              <div className="md:col-span-2 flex flex-col items-center justify-center text-center border-r-0 md:border-r-4 md:border-dashed md:border-yellow-400 pb-6 md:pb-0">
                <div className="mb-4">
                  <p className="text-lg md:text-xl font-bold text-gray-700 mb-2">
                    LIMITED TIME OFFER
                  </p>
                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg shadow-lg">
                    <p className="text-sm font-semibold">DRAIN CLEARING SPECIAL</p>
                    <p className="text-5xl md:text-6xl font-black">
                      $28<sup className="text-3xl">.88</sup>
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-left">Kitchen & Bathroom Drains</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-left">Toilets & Tubs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-left">Same-Day Service Available</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Details & CTA */}
              <div className="md:col-span-3 flex flex-col justify-center space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Professional Drain Clearing - Tucson's Best Value!
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Our licensed master plumbers clear stubborn clogs fast with professional equipment. 
                    No hidden fees - just honest, upfront pricing.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-6">
                    <p className="text-sm text-gray-700">
                      <strong className="text-blue-900">45+ Years Serving Tucson</strong> • 22,000+ Five-Star Reviews • 
                      Family & Veteran-Owned • BBB A+ Rated • Licensed & Insured
                    </p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    variant="destructive"
                    className="text-lg px-8 py-6 h-auto font-bold shadow-lg"
                    asChild
                    data-testid="button-call-drain-special"
                  >
                    <a href="tel:+15203332665">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: (520) 333-2665
                    </a>
                  </Button>
                  
                  <SchedulerEmbed
                    triggerText="Schedule Online"
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold"
                    data-testid="button-schedule-drain-special"
                  />
                </div>

                <p className="text-xs text-gray-500 italic">
                  *$28.88 special applies to standard residential drain clearing. Main sewer lines, 
                  hydro jetting, and emergency after-hours service may require additional fees. 
                  Valid for new customers in Tucson service area.
                </p>
              </div>
            </div>

            {/* Bottom Scissors */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 rounded-full p-2 shadow-lg">
              <Scissors className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
