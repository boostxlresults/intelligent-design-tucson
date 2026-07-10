"use client";

import { useState } from "react";

/**
 * Hero image with a graceful fallback. Shows /images/cork/hero-cork-deck.jpg when
 * present; until that photo is generated + committed, renders a clean branded
 * placeholder instead of a broken image.
 */
export default function HeroImage() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="h-full w-full flex items-center justify-center text-center p-8 bg-gradient-to-br from-[#A64A2E]/25 to-[#A64A2E]/5">
        <div>
          <div className="text-6xl" aria-hidden>🩴</div>
          <p className="mt-4 text-lg font-semibold text-[#A64A2E]">Barefoot-cool cork pool deck</p>
          <p className="mt-1 text-sm text-neutral-600">Comfortable even on a 109°F Tucson afternoon.</p>
        </div>
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src="/images/cork/hero-cork-deck.jpg"
      alt="Boy lying comfortably barefoot on a terracotta cork pool deck on a 109 degree Tucson day"
      className="h-full w-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}
