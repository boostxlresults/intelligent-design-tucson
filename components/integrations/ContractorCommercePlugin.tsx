"use client";

import Script from 'next/script';

export default function ContractorCommercePlugin() {
  const PLUGIN_KEY = "D32QhwUokdL5YZLParGpbxc7TuBTkYanGNQSR4zd";
  
  return (
    <Script
      id="contractor-commerce-plugin"
      src={`https://plugin.contractorcommerce.com?key=${PLUGIN_KEY}`}
      strategy="afterInteractive"
    />
  );
}
