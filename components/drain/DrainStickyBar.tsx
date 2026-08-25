"use client";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import SchedulerEmbed from "@/components/integrations/SchedulerEmbed";

const PHONE = "5203486684";
const PHONE_DISPLAY = "(520) 348-6684";

export default function DrainStickyBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 bg-[#0d1b3e] px-3 py-2 shadow-2xl md:hidden">
      <div className="flex-1">
        <SchedulerEmbed
          triggerText="Book Online"
          fullWidth
          size="lg"
          className="w-full min-h-[44px] rounded-lg !bg-[#C8101F] text-[16px] font-extrabold !text-white"
        />
      </div>
      <a
        href={`tel:${PHONE}`}
        className="flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#FFD100] text-[16px] font-extrabold text-[#1A1A1A]"
      >
        <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
      </a>
    </div>
  );
}
