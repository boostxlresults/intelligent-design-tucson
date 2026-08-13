"use client";

import { trackPhoneClick } from "@/lib/analytics";

export default function CallCta({ className, children, source }: { className?: string; children: React.ReactNode; source: string }) {
  return (
    <a href="tel:5203332665" className={className} onClick={() => trackPhoneClick(source)}>
      {children}
    </a>
  );
}
