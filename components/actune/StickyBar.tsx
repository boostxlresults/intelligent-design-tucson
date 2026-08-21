"use client";
import { useEffect, useState } from "react";
import { Phone, CalendarCheck } from "lucide-react";
import { useScheduler } from "@/components/integrations/ServiceTitanScheduler";
import { trackScheduleOpen } from "@/lib/analytics";

function fbq(...args: unknown[]) {
  try { (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq?.(...args); } catch { /* noop */ }
}

export default function StickyBar() {
  const [show, setShow] = useState(false);
  const { openScheduler, isLoading } = useScheduler();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-black/10 bg-white p-2 shadow-[0_-4px_16px_rgba(0,0,0,0.12)] md:hidden">
      <button
        type="button"
        onClick={() => { trackScheduleOpen("sticky-book"); openScheduler(); }}
        disabled={isLoading}
        className="flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#C8101F] px-4 py-3 text-base font-extrabold text-white disabled:opacity-60"
        data-testid="sticky-book"
      >
        <CalendarCheck className="h-5 w-5" /> Book Special
      </button>
      <a
        href="tel:5202018588"
        onClick={() => fbq("track", "Contact", { source: "sticky_bar" })}
        className="flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#FFD100] px-4 py-3 text-base font-extrabold text-[#1A1A1A]"
        data-testid="sticky-call"
      >
        <Phone className="h-5 w-5" /> (520) 201-8588
      </a>
    </div>
  );
}
