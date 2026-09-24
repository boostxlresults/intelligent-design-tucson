/**
 * Published prices, one source of truth.
 *
 * Every page that prints a starting price, a price range, or an AggregateOffer
 * for these services imports from here. Two pages once disagreed on the AC
 * install floor ($7,000 on /new-air-conditioner, $4,800 on the cost page) and
 * a shopper, a quality rater, or an AI model reading both saw two floors from
 * the same company. Change a number here and every surface moves together.
 *
 * Ranges are installed prices including permit and haul-away, before any
 * current promotion. Refresh with the seasonal price review; bump `asOf`.
 */

export const PRICING_AS_OF = "2026";

/** Formats 4800 as "$4,800". */
export const usd = (n: number): string => "$" + n.toLocaleString("en-US");

/** Formats a range as "$4,800 - $6,500" (plain hyphen, house style). */
export const usdRange = (low: number, high: number): string => `${usd(low)} - ${usd(high)}`;

export type AcInstallRow = {
  size: string;
  home: string;
  std: [number, number];
  high: [number, number];
  hp: [number, number];
};

/** The 3x3 table on /lp/new-ac-unit-cost-tucson. Columns: standard efficiency
 *  (14-15 SEER2, single-stage), high efficiency (17+ SEER2, two-stage or
 *  variable), heat pump. */
export const AC_INSTALL_ROWS: AcInstallRow[] = [
  { size: "2 to 2.5 ton", home: "Up to about 1,500 sq ft", std: [4800, 6500], high: [6500, 8500], hp: [7000, 9500] },
  { size: "3 to 3.5 ton", home: "1,500 to 2,200 sq ft", std: [5500, 7500], high: [7500, 9500], hp: [8000, 11000] },
  { size: "4 to 5 ton", home: "2,200 to 3,000+ sq ft", std: [6500, 8500], high: [8500, 11000], hp: [9500, 14000] },
];

const allLows = AC_INSTALL_ROWS.flatMap((r) => [r.std[0], r.high[0], r.hp[0]]);
const allHighs = AC_INSTALL_ROWS.flatMap((r) => [r.std[1], r.high[1], r.hp[1]]);

export const AC_INSTALL = {
  /** Lowest installed price on the table. "From $4,800." */
  floor: Math.min(...allLows),
  /** Highest installed price on the table. */
  ceiling: Math.max(...allHighs),
  /** Where most Tucson homes land (3 to 3.5 ton, high efficiency, rounded). */
  typicalLow: 6500,
  typicalHigh: 11000,
  /** Efficiency tiers spanning all sizes, for the three-card layouts. */
  tiers: [
    { name: "Standard efficiency", seer: "14-15 SEER2, single-stage", low: Math.min(...AC_INSTALL_ROWS.map((r) => r.std[0])), high: Math.max(...AC_INSTALL_ROWS.map((r) => r.std[1])) },
    { name: "High efficiency", seer: "17+ SEER2, two-stage or variable", low: Math.min(...AC_INSTALL_ROWS.map((r) => r.high[0])), high: Math.max(...AC_INSTALL_ROWS.map((r) => r.high[1])) },
    { name: "Heat pump", seer: "Cooling and heating, variable-speed", low: Math.min(...AC_INSTALL_ROWS.map((r) => r.hp[0])), high: Math.max(...AC_INSTALL_ROWS.map((r) => r.hp[1])) },
  ],
} as const;

/** Other published prices referenced across the site. */
export const TUNE_UP_15 = 15;
export const TUNE_UP_2888 = 28.88;
export const DRAIN_CLEARING_SPECIAL = 48.88;
