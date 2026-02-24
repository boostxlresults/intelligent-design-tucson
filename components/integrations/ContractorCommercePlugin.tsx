"use client";

import Script from 'next/script';

export default function ContractorCommercePlugin() {
  const PLUGIN_KEY = process.env.NEXT_PUBLIC_CONCOM_PLUGIN_KEY || "";
  
  return (
    <Script
      id="contractor-commerce-plugin"
      src={`https://plugin.contractorcommerce.com?key=${PLUGIN_KEY}`}
      strategy="afterInteractive"
    />
  );
}
