/**
 * Cork Pool Deck journey configuration
 * ThermalCork Solutions color system + pricing
 *
 * PRICING: single source of truth. Update ratePerSqFt / band when real
 * numbers are supplied. All estimate math reads from here.
 */

export interface CorkColor {
  id: string;
  code: string;
  name: string;
  /** Approximate flat hex for swatch UI; renders use the real texture via Gemini */
  hex: string;
}

/** ThermalCork KC color line (swatch chart supplied 2026-07-09) */
export const CORK_COLORS: CorkColor[] = [
  { id: "kc-24", code: "KC 24", name: "KliuCork", hex: "#A64A2E" },
  { id: "kc-23", code: "KC 23", name: "Dark Red", hex: "#8A4B2E" },
  { id: "kc-17", code: "KC 17", name: "Salmon", hex: "#C77E5E" },
  { id: "kc-16", code: "KC 16", name: "Pink", hex: "#A97F72" },
  { id: "kc-01", code: "KC 01", name: "Cream", hex: "#C9B98A" },
  { id: "kc-02", code: "KC 02", name: "Yellow Ochre", hex: "#C2A968" },
  { id: "kc-03", code: "KC 03", name: "Yellow", hex: "#C6C244" },
  { id: "kc-06", code: "KC 06", name: "Beige", hex: "#B3A491" },
  { id: "kc-07", code: "KC 07", name: "Off-White", hex: "#C0BBB1" },
  { id: "kc-12", code: "KC 12", name: "Mustard", hex: "#7E7A2F" },
  { id: "kc-14", code: "KC 14", name: "Natural", hex: "#7A6A45" },
  { id: "kc-15", code: "KC 15", name: "Black", hex: "#1C1C1A" },
];

export const DEFAULT_COLOR_ID = "kc-24"; // KliuCork terracotta — matches the hero deck

/** Pricing — confirmed rate; band & minimum are sensible defaults, adjust if needed */
export const CORK_PRICING = {
  ratePerSqFt: 7.0, // USD — confirmed rate (2026-07-10)
  /** Range band shown to customer: rate × (1 ± band) */
  band: 0.15,
  minimumProjectPrice: 2500, // floor guard; confirm with Joey
};

export function estimateRange(sqFt: number): { low: number; high: number } {
  const base = sqFt * CORK_PRICING.ratePerSqFt;
  const low = Math.max(base * (1 - CORK_PRICING.band), CORK_PRICING.minimumProjectPrice);
  const high = Math.max(base * (1 + CORK_PRICING.band), CORK_PRICING.minimumProjectPrice);
  // round to nearest $50 for clean presentation
  const r = (n: number) => Math.round(n / 50) * 50;
  return { low: r(low), high: r(high) };
}

export const JOURNEY_STEPS = [
  "capture",
  "measure",
  "refine",
  "render",
  "lead1",
  "lead2",
  "estimate",
  "book",
  "booked",
] as const;

export type JourneyStep = (typeof JOURNEY_STEPS)[number];
