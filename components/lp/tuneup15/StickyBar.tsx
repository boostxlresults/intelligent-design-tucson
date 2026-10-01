"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

/**
 * Mobile sticky bottom bar: Call on the left, Claim on the right. Hidden while
 * the hero form is on screen (the visitor already has both actions in front
 * of them), shown once it scrolls away. Desktop never shows it.
 */
export default function StickyBar({ phoneTel, watchId, claimHref }: { phoneTel: string; watchId: string; claimHref: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = document.getElementById(watchId);
    if (!el || typeof IntersectionObserver === "undefined") {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => setShow(!entry.isIntersecting), { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, [watchId]);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-50 flex gap-2 bg-white p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(0,0,0,0.15)] transition-transform duration-200 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={`tel:${phoneTel}`}
        data-lp-call="sticky"
        data-testid="lp15-sticky-call"
        className="flex h-14 flex-1 items-center justify-center gap-2 rounded-lg border-2 border-neutral-900 bg-white text-[17px] font-bold text-neutral-900"
      >
        <Phone className="h-5 w-5" aria-hidden="true" /> Call
      </a>
      <a
        href={claimHref}
        data-testid="lp15-sticky-claim"
        className="flex h-14 flex-1 items-center justify-center rounded-lg bg-[#2FBF5C] text-[17px] font-bold text-black"
      >
        Claim $15 Tune-Up
      </a>
    </div>
  );
}
