"use client";

import Script from 'next/script';

/**
 * ContractorCommerce Plugin
 * 
 * Changed from "afterInteractive" to "lazyOnload" to eliminate ~985 KiB of JS
 * from the critical rendering path. This was the #1 cause of the 3,170ms TBT.
 * 
 * "lazyOnload" fires after the page is fully loaded and idle — perfect for
 * a shop/inventory widget that users only interact with intentionally.
 */
export default function ContractorCommercePlugin() {
  const PLUGIN_KEY = "D32QhwUokdL5YZLParGpbxc7TuBTkYanGNQSR4zd";
  
  return (
    <Script
      id="contractor-commerce-plugin"
      src={`https://plugin.contractorcommerce.com?key=${PLUGIN_KEY}`}
      strategy="lazyOnload"
    />
  );
}
