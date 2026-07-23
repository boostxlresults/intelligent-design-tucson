"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const CorkVisualizer = dynamic(() => import("./CorkVisualizer"), { ssr: false });

export default function VisualizerLauncher({ variant }: { variant: "hero" | "footer" }) {
  const [open, setOpen] = useState(false);
  const [startAtBooking, setStartAtBooking] = useState(false);

  // Deep link from estimate emails: /cool-cork-pool-decks?intent=inspection
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("intent") === "inspection") {
      setStartAtBooking(true);
      setOpen(true);
    }
  }, []);

  const primary = (
    <button
      onClick={() => { setStartAtBooking(false); setOpen(true); }}
      className="rounded-xl bg-[#A64A2E] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#A64A2E]/25 transition hover:bg-[#8f3f27] focus:outline-none focus:ring-4 focus:ring-[#A64A2E]/30"
    >
      Project Visualizer &amp; Price Range
    </button>
  );

  const secondary = (
    <button
      onClick={() => { setStartAtBooking(true); setOpen(true); }}
      className="rounded-xl border-2 border-neutral-900 px-8 py-4 text-lg font-semibold text-neutral-900 transition hover:bg-neutral-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-neutral-900/20"
    >
      Request a Free Deck Inspection &amp; Exact Estimate
    </button>
  );

  return (
    <>
      <div className={variant === "hero" ? "flex flex-col sm:flex-row gap-4" : "flex flex-col sm:flex-row gap-4 justify-center"}>
        {primary}
        {secondary}
      </div>
      {open && <CorkVisualizer open={open} onClose={() => setOpen(false)} startAtBooking={startAtBooking} />}
    </>
  );
}
