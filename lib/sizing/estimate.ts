/**
 * Preliminary AC sizing RANGE estimator for Tucson (ASHRAE/IECC climate zone 2B,
 * hot-dry). This is deliberately approximate and always returns a RANGE — it is
 * NOT a Manual J. Accurate sizing requires an in-home ACCA Manual J load
 * calculation plus a blower-door test and thermal-imaging scan (the DOE/ACCA
 * method). The tool weighs the same envelope factors Manual J considers so the
 * ballpark is honest, and every result reinforces that the exact size can only
 * be confirmed on site.
 */
export interface SizingInputs {
  sqft: number;
  insulation: "poor" | "average" | "good";
  stories: 1 | 2;
  ceiling: "standard" | "high";
  sun: "low" | "average" | "high";
  windows: "single" | "average" | "efficient";
  occupants: number;
}

export interface SizingResult {
  lowTons: number;
  highTons: number;
  midTons: number;
  priceLow?: number;
  priceHigh?: number;
}

// Average Tucson home baseline ~500 conditioned sq ft per ton, then adjusted by
// the envelope factors a Manual J weighs.
const SQFT_PER_TON_BASELINE = 500;
const INSULATION = { poor: 1.12, average: 1.0, good: 0.9 } as const;
const CEILING = { standard: 1.0, high: 1.06 } as const;
const SUN = { low: 0.95, average: 1.0, high: 1.06 } as const;
const WINDOWS = { single: 1.08, average: 1.0, efficient: 0.94 } as const;

/**
 * Price display is intentionally OFF. Showing an install price built from a
 * square-footage-style guess would contradict our whole message. Flip to true
 * only after real install pricing by tonnage tier is filled into PRICE_PER_TON.
 */
export const SHOW_PRICE = false;
const PRICE_PER_TON: Record<string, [number, number]> = {
  // "3": [8500, 12000],  // example — replace with real ID pricing before enabling
};

export function estimateSizing(i: SizingInputs): SizingResult {
  const sqft = Math.max(400, Math.min(8000, Number(i.sqft) || 0));
  let tons = sqft / SQFT_PER_TON_BASELINE;
  tons *= INSULATION[i.insulation] ?? 1;
  tons *= CEILING[i.ceiling] ?? 1;
  tons *= SUN[i.sun] ?? 1;
  tons *= WINDOWS[i.windows] ?? 1;
  tons *= i.stories === 2 ? 0.97 : 1.02;
  const extraOcc = Math.max(0, (Number(i.occupants) || 2) - 3);
  tons *= 1 + Math.min(0.08, extraOcc * 0.02);

  // Round midpoint to the nearest half-ton, clamp to a sane residential window,
  // then present a full one-ton band so the output reads honestly as a range.
  let mid = Math.round(tons * 2) / 2;
  mid = Math.max(2, Math.min(4.5, mid));
  const lowTons = Math.max(1.5, mid - 0.5);
  const highTons = Math.min(5, mid + 0.5);

  const result: SizingResult = { lowTons, highTons, midTons: mid };
  if (SHOW_PRICE) {
    const lo = PRICE_PER_TON[String(lowTons)]?.[0];
    const hi = PRICE_PER_TON[String(highTons)]?.[1];
    if (lo && hi) { result.priceLow = lo; result.priceHigh = hi; }
  }
  return result;
}

export function tons(n: number): string {
  return `${n}`;
}
