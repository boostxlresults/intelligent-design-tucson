"use client";

import Script from 'next/script';
import { usePathname } from 'next/navigation';

const HIGH_PRIORITY_ROUTES = [
  '/free-online-hvac-quote',
  '/free-online-water-heater-quote',
  '/filter-shop',
];

export default function ContractorCommercePlugin() {
  const pathname = usePathname();
  const PLUGIN_KEY = "D32QhwUokdL5YZLParGpbxc7TuBTkYanGNQSR4zd";
  
  const isHighPriority = HIGH_PRIORITY_ROUTES.some(route => pathname?.startsWith(route));
  
  return (
    <Script
      src={`https://plugin.contractorcommerce.com?key=${PLUGIN_KEY}`}
      strategy={isHighPriority ? "afterInteractive" : "lazyOnload"}
    />
  );
}
