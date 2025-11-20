"use client";

import Script from 'next/script';

/**
 * ContractorCommercePlugin Component
 * 
 * Loads the Contractor Commerce plugin globally in the <head>
 * This enables interactive quote calculators and e-commerce functionality
 * 
 * Usage: Add to root layout for site-wide availability
 * 
 * Plugin supports:
 * - HVAC system quote calculator (navigator-key: NzdTlJWvihCCWjsf)
 * - Water heater quote calculator (navigator-key: ugVQLX7twEC3x7nG)
 * - Air filter shop (navigator-key: uaab4SY6TlT6rnz5)
 */
export default function ContractorCommercePlugin() {
  const PLUGIN_KEY = "D32QhwUokdL5YZLParGpbxc7TuBTkYanGNQSR4zd";
  
  return (
    <Script
      src={`https://plugin.contractorcommerce.com?key=${PLUGIN_KEY}`}
      strategy="afterInteractive"
      async
      defer
    />
  );
}
