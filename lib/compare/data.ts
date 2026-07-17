/**
 * Data model for the /compare conquest landing pages (HVAC, Plumbing, Roofing, Solar).
 * Competitor figures are PUBLIC data (Google Business Profiles / BBB) captured on the
 * `asOf` date and must be re-verified quarterly. Ownership cells are the highest-scrutiny
 * on the page: `peOwned: "yes"` requires a citable `peSource`; otherwise use "unknown" ("—").
 */
export type Tri = "yes" | "no" | "unknown";

export interface Competitor {
  name: string;
  anchor: string;              // e.g. "rite-way"
  rating?: string;             // public Google rating, e.g. "4.9"
  reviews?: string;            // public Google review count, e.g. "13,158"
  bbb?: string;                // BBB rating if verified, else undefined
  locallyOwned: Tri;
  peOwned: Tri;
  peSource?: string;           // REQUIRED when peOwned === "yes" — public acquisition source
  ownerNote?: string;          // short sourced ownership note shown in the section
  blurb: string;               // one neutral, factual sentence
  closed?: boolean;            // solar: installer no longer operating -> orphaned-system angle
  national?: boolean;          // national brand, not a local Tucson company
}

export interface Testimonial { quote: string; name: string; area: string; }
export interface FAQ { q: string; a: string; }

export interface CompareVertical {
  slug: string;
  verticalLabel: string;       // "HVAC" | "Plumbing" | "Roofing" | "Solar"
  noun: string;                // "hvac companies" | "plumbers" ...
  campaign: string;
  servicePath: string;         // "/services/hvac"
  schemaType: string;          // schema.org business subtype
  warranty: string;            // Intelligent Design warranty highlight for this vertical
  title: string;
  description: string;
  h1: string;
  intro: string;
  competitors: Competitor[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  asOf: string;                // "July 2026"
}

/** Intelligent Design's own (highlighted) row — identical account-wide. */
export const IDACH = {
  name: "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
  rating: "4.97",
  reviews: "23,000+",
  bbb: "A+",
  locallyOwned: "yes" as Tri,
  peOwned: "no" as Tri,
  veteranOwned: "yes" as Tri,
  emergency: true,
  secondOpinion: true,
  financing: true,
};

const PARKER_SRC = "https://www.leonardgreen.com/investcorp-announces-sale-of-the-wrench-group-to-leonard-green/";
const RITEWAY_SRC = "https://www.globenewswire.com/news-release/2022/09/29/2525263/0/en/Rite-Way-Heating-Cooling-Plumbing-Acquires-Southern-Arizona-Plumbing.html";
const GOETTL_SRC = "https://cortecgroup.com/cortec-group-announces-investment-in-goettl/";

const AS_OF = "July 2026";

export const COMPARE_VERTICALS: CompareVertical[] = [
  {
    slug: "tucson-hvac-companies",
    verticalLabel: "HVAC",
    noun: "HVAC companies",
    campaign: "IDACH_Competitor-Conquest_HVAC",
    servicePath: "/services/hvac",
    schemaType: "HVACBusiness",
    warranty: "up to 12-year parts & labor coverage on qualifying installs",
    title: "Tucson HVAC Companies Compared (2026) | Intelligent Design — 23,000 Five-Star Reviews",
    description:
      "Comparing Rite Way, Parker & Sons, Goettl and other Tucson HVAC companies? See side-by-side ratings, ownership, response times & guarantees. BBB A+ · 4.97★ Google · Free second opinion.",
    h1: "How Tucson's HVAC Companies Compare — And Why 23,000 Customers Chose Intelligent Design",
    intro:
      "When you call Intelligent Design, you're calling a locally owned Tucson company — not a national private-equity platform. Below is an at-a-glance comparison of Tucson's HVAC companies using each company's public Google Business Profile rating and ownership status, so you can see who still answers to a local owner versus an out-of-state investment fund. We never rate a competitor's quality — the table wins on math and ownership facts.",
    competitors: [
      { name: "Rite Way Heating, Cooling & Plumbing", anchor: "rite-way", rating: "4.9", reviews: "13,158", bbb: "A+", locallyOwned: "no", peOwned: "yes", peSource: RITEWAY_SRC, ownerNote: "Acquired by Redwood Services, a private-equity-backed home-services platform (2020).", blurb: "Rite Way is one of Tucson's largest HVAC, plumbing and electrical providers, founded in 1959 and serving 13,000+ active customers." },
      { name: "Parker & Sons", anchor: "parker-and-sons", rating: "4.7", reviews: "5,590", bbb: "A+", locallyOwned: "no", peOwned: "yes", peSource: PARKER_SRC, ownerNote: "A brand of Wrench Group, owned by private-equity firm Leonard Green & Partners.", blurb: "Parker & Sons is a large Phoenix-based HVAC, plumbing and electrical company that also serves the Tucson market." },
      { name: "Goettl Air Conditioning and Plumbing", anchor: "goettl", rating: "4.7", reviews: "4,834", bbb: "A+", locallyOwned: "no", peOwned: "yes", peSource: GOETTL_SRC, ownerNote: "Recapitalized by private-equity firm Cortec Group (2021).", blurb: "Goettl is a regional HVAC and plumbing brand operating across Arizona and the Southwest, including Tucson." },
      { name: "D&H Air Conditioning & Heating & Plumbing", anchor: "d-and-h", rating: "4.8", reviews: "3,825", locallyOwned: "unknown", peOwned: "unknown", blurb: "D&H is a long-established Tucson HVAC and plumbing contractor offering repair, installation and maintenance." },
      { name: "Alaskan Air Conditioning & Heating", anchor: "alaskan", rating: "4.7", reviews: "3,753", locallyOwned: "unknown", peOwned: "unknown", blurb: "Alaskan Air Conditioning & Heating is a Tucson HVAC company providing cooling and heating service and installation." },
      { name: "Temperature Control, Inc.", anchor: "temperature-control", rating: "4.9", reviews: "2,221", locallyOwned: "unknown", peOwned: "unknown", blurb: "Temperature Control is a Tucson HVAC and plumbing company known for A/C, heating and plumbing service." },
      { name: "Perry Heating, Cooling and Plumbing", anchor: "perry", rating: "4.8", reviews: "1,732", locallyOwned: "unknown", peOwned: "unknown", blurb: "Perry Heating, Cooling and Plumbing is a Tucson-area contractor offering HVAC and plumbing services." },
      { name: "Mission Heating & Cooling", anchor: "mission", locallyOwned: "unknown", peOwned: "unknown", blurb: "Mission Heating & Cooling is a Tucson HVAC contractor serving residential cooling and heating needs." },
      { name: "Cool Breeze Comfort Solutions", anchor: "cool-breeze", locallyOwned: "unknown", peOwned: "unknown", blurb: "Cool Breeze Comfort Solutions is a Tucson-area HVAC company providing air conditioning service and repair." },
      { name: "Chas Roberts A/C & Plumbing", anchor: "chas-roberts", locallyOwned: "unknown", peOwned: "unknown", blurb: "Chas Roberts is one of Arizona's largest HVAC and plumbing companies, primarily Phoenix-based, also serving Tucson." },
      { name: "Hamstra Heating & Cooling", anchor: "hamstra", locallyOwned: "unknown", peOwned: "unknown", blurb: "Hamstra Heating & Cooling is a long-running Tucson HVAC contractor serving residential and commercial customers." },
      { name: "Oasis Heating & Cooling", anchor: "oasis", locallyOwned: "unknown", peOwned: "unknown", blurb: "Oasis is a Tucson-area HVAC company offering air conditioning and heating service." },
      { name: "Ambient Air", anchor: "ambient-air", locallyOwned: "unknown", peOwned: "unknown", blurb: "Ambient Air is a Tucson HVAC contractor providing cooling and heating services." },
      { name: "Green Valley Cooling & Heating", anchor: "green-valley-ch", locallyOwned: "unknown", peOwned: "unknown", blurb: "Green Valley Cooling & Heating serves the Green Valley and southern Tucson HVAC market." },
      { name: "Rincon Air", anchor: "rincon-air", locallyOwned: "unknown", peOwned: "unknown", blurb: "Rincon Air is a Tucson-area HVAC company offering A/C and heating service." },
      { name: "Russett Southwest", anchor: "russett-southwest", locallyOwned: "unknown", peOwned: "unknown", blurb: "Russett Southwest is a long-established Tucson HVAC contractor serving residential and commercial customers." },
      { name: "Semper Fi Heating & Cooling", anchor: "semper-fi", locallyOwned: "unknown", peOwned: "unknown", blurb: "Semper Fi Heating & Cooling is a Tucson HVAC company providing cooling and heating service." },
      { name: "Smart Choice Heating & Cooling", anchor: "smart-choice", locallyOwned: "unknown", peOwned: "unknown", blurb: "Smart Choice Heating & Cooling is a Tucson-area HVAC contractor." },
      { name: "Done Rite Services", anchor: "done-rite", locallyOwned: "unknown", peOwned: "unknown", blurb: "Done Rite Services is a Tucson HVAC and home-services contractor." },
      { name: "Family Air Cooling & Heating", anchor: "family-air", locallyOwned: "unknown", peOwned: "unknown", blurb: "Family Air Cooling & Heating is a Tucson HVAC company serving residential customers." },
      { name: "Cummings Plumbing Heating & Cooling", anchor: "cummings", rating: "4.7", reviews: "3,700+", bbb: "A+", locallyOwned: "unknown", peOwned: "unknown", blurb: "Cummings is a Tucson plumbing company that also offers heating and cooling service." },
      { name: "Jett Mechanical", anchor: "jett-mechanical", locallyOwned: "unknown", peOwned: "unknown", blurb: "Jett Mechanical is a Tucson-area HVAC and mechanical services contractor." },
      { name: "Oscar's Air Conditioning", anchor: "oscars", locallyOwned: "unknown", peOwned: "unknown", blurb: "Oscar's Air Conditioning is a Tucson HVAC contractor offering A/C service and repair." },
      { name: "StrongBuilt Plumbing", anchor: "strongbuilt-hvac", locallyOwned: "unknown", peOwned: "unknown", blurb: "StrongBuilt is a Tucson home-services company offering plumbing and related trades." },
    ],
    testimonials: [
      { quote: "Same-day AC repair in July and they didn't try to sell me a whole new system. Honest and fast.", name: "R. Alvarez", area: "Oro Valley" },
      { quote: "Got a second opinion from Intelligent Design after a scary quote elsewhere — saved us thousands.", name: "K. Nguyen", area: "Marana" },
      { quote: "Techs were on time, respectful, and explained everything. 5 stars.", name: "D. Foster", area: "Vail" },
    ],
    faqs: [
      { q: "Who has the best reviews in Tucson for HVAC?", a: "Intelligent Design carries a 4.97-star aggregate rating across 23,000+ verified reviews (Google, Facebook, PulseM and Angi) — more total five-star reviews than any other home-services company in Tucson — plus a BBB A+ rating. Compare our profile to any competitor's public rating before you book." },
      { q: "Is a second opinion on an AC quote really free?", a: "Yes. If another company gave you a repair or replacement quote, Intelligent Design will review it free and tell you honestly whether it's fair — no obligation." },
      { q: "What if I already signed a quote with another company?", a: "It's often not too late. Call (520) 333-2665 and we'll review your agreement and options; many quotes can still be re-evaluated before work begins." },
      { q: "Are these Tucson HVAC companies locally owned?", a: "Several large competitors — including Rite Way, Parker & Sons and Goettl — are owned by out-of-state private-equity platforms per public acquisition announcements. Intelligent Design remains a locally owned, veteran-owned Tucson company." },
      { q: "Do you service HVAC systems installed by other companies?", a: "Yes. We repair and maintain systems of every major brand regardless of who installed them, including systems from installers no longer in business." },
    ],
    asOf: AS_OF,
  },
  {
    slug: "tucson-plumbers",
    verticalLabel: "Plumbing",
    noun: "plumbers",
    campaign: "IDACH_Competitor-Conquest_Plumbing",
    servicePath: "/services/plumbing",
    schemaType: "Plumber",
    warranty: "up-front flat-rate pricing with warrantied workmanship",
    title: "Tucson Plumbers Compared (2026) | Intelligent Design — 23,000 Five-Star Reviews",
    description:
      "Comparing Roto-Rooter, Silverado, Cummings and other Tucson plumbers? See side-by-side ratings, ownership, response times & guarantees. BBB A+ · 4.97★ Google · Free second opinion.",
    h1: "How Tucson's Plumbers Compare — And Why 23,000 Customers Chose Intelligent Design",
    intro:
      "When you call Intelligent Design, you're calling a locally owned Tucson company — not a national private-equity platform or a franchise. Below is a side-by-side look at Tucson's plumbers using each company's public Google Business Profile rating and ownership status.",
    competitors: [
      { name: "Roto-Rooter Plumbing & Drain", anchor: "roto-rooter", rating: "4.7", reviews: "750+", locallyOwned: "no", peOwned: "unknown", national: true, blurb: "Roto-Rooter is a national plumbing and drain franchise brand with a Tucson location." },
      { name: "Silverado Rooter & Plumbing", anchor: "silverado", rating: "4.7", reviews: "980+", bbb: "A+", locallyOwned: "unknown", peOwned: "unknown", blurb: "Silverado Rooter & Plumbing is a Tucson full-service and 24/7 emergency plumbing company established in 2004." },
      { name: "Cummings Plumbing Heating & Cooling", anchor: "cummings-plumbing", rating: "4.7", reviews: "3,700+", bbb: "A+", locallyOwned: "unknown", peOwned: "unknown", blurb: "Cummings Plumbing is a Tucson plumbing company that also offers heating and cooling." },
      { name: "Parker & Sons", anchor: "parker-and-sons-plumbing", rating: "4.7", reviews: "5,590", bbb: "A+", locallyOwned: "no", peOwned: "yes", peSource: PARKER_SRC, ownerNote: "A brand of Wrench Group, owned by private-equity firm Leonard Green & Partners.", blurb: "Parker & Sons offers plumbing alongside HVAC and electrical across Arizona, including Tucson." },
      { name: "Code Blue Plumbing", anchor: "code-blue", locallyOwned: "unknown", peOwned: "unknown", blurb: "Code Blue Plumbing is a Tucson-area plumbing contractor offering repair and drain service." },
      { name: "Fusion Plumbing & Air", anchor: "fusion", locallyOwned: "unknown", peOwned: "unknown", blurb: "Fusion Plumbing & Air is a Tucson plumbing and HVAC company." },
      { name: "Cool Willy's", anchor: "cool-willys", locallyOwned: "unknown", peOwned: "unknown", blurb: "Cool Willy's is a Tucson-area plumbing and home-services contractor." },
      { name: "StrongBuilt Plumbing", anchor: "strongbuilt", locallyOwned: "unknown", peOwned: "unknown", blurb: "StrongBuilt is a Tucson plumbing company offering residential plumbing services." },
      { name: "Sam's Plumbing Services", anchor: "sams", locallyOwned: "unknown", peOwned: "unknown", blurb: "Sam's Plumbing Services is a Tucson-area plumbing contractor." },
      { name: "Bryant's Plumbing", anchor: "bryants", locallyOwned: "unknown", peOwned: "unknown", blurb: "Bryant's Plumbing is a Tucson plumbing company offering repair and installation." },
    ],
    testimonials: [
      { quote: "Cleared our main line same day and the price was exactly what they quoted. No surprises.", name: "M. Ruiz", area: "Green Valley" },
      { quote: "Second opinion on a repipe saved us a fortune — honest people.", name: "T. Bell", area: "Catalina Foothills" },
      { quote: "Master plumber showed up on time, wore shoe covers, fixed it right the first time.", name: "S. Patel", area: "Rita Ranch" },
    ],
    faqs: [
      { q: "Who is the best-reviewed plumber in Tucson?", a: "Intelligent Design carries a 4.97-star aggregate rating across 23,000+ verified reviews and a BBB A+ rating — more total five-star reviews than any other Tucson home-services company. Compare our public profile to any plumber before you book." },
      { q: "Is a free second opinion on a plumbing quote really free?", a: "Yes. Send us another company's plumbing quote and we'll review it free and tell you honestly if it's fair — no obligation." },
      { q: "What if I already signed a plumbing quote?", a: "Call (520) 333-2665 before work begins — many quotes can still be re-evaluated and we'll walk you through your options." },
      { q: "Is Intelligent Design locally owned?", a: "Yes — Intelligent Design is a locally owned, veteran-owned Tucson company, not a national franchise or private-equity platform." },
      { q: "Do you handle emergency and main-sewer-line plumbing?", a: "Yes. We offer 24/7 emergency plumbing, drain clearing, hydro-jetting, camera inspection and sewer line repair across the Tucson metro." },
    ],
    asOf: AS_OF,
  },
  {
    slug: "tucson-roofing-companies",
    verticalLabel: "Roofing",
    noun: "roofing companies",
    campaign: "IDACH_Competitor-Conquest_Roofing",
    servicePath: "/services/roofing",
    schemaType: "RoofingContractor",
    warranty: "ThermalCork 15-year warranty — the longest roof-coating warranty in the industry",
    title: "Tucson Roofing Companies Compared (2026) | Intelligent Design — 23,000 Five-Star Reviews",
    description:
      "Comparing Tucson roofing companies? See side-by-side ratings, ownership, warranties & guarantees — plus exclusive ThermalCork coating. BBB A+ · 4.97★ Google · Free second opinion.",
    h1: "How Tucson's Roofing Companies Compare — And Why 23,000 Customers Chose Intelligent Design",
    intro:
      "When you call Intelligent Design, you're calling a locally owned Tucson company — and Tucson's only certified ThermalCork roof-coating applicator. Below is a comparison of Tucson roofing companies using each company's public Google Business Profile rating. (This list is being reconciled against our full roofing conquest keyword set — figures verified quarterly.)",
    competitors: [
      { name: "DC Roofing of Arizona", anchor: "dc-roofing", rating: "4.8", reviews: "130+", bbb: "A+", locallyOwned: "unknown", peOwned: "unknown", blurb: "DC Roofing of Arizona is a Tucson residential and commercial roofing contractor (ROC #328733)." },
      { name: "Diversified Roofing", anchor: "diversified", locallyOwned: "unknown", peOwned: "unknown", blurb: "Diversified Roofing is an Arizona roofing contractor serving residential and commercial customers." },
      { name: "Lyons Roofing", anchor: "lyons", locallyOwned: "unknown", peOwned: "unknown", blurb: "Lyons Roofing is a long-established Arizona roofing company serving Tucson and Phoenix." },
      { name: "KY-KO Roofing", anchor: "ky-ko", locallyOwned: "unknown", peOwned: "unknown", blurb: "KY-KO Roofing is an Arizona roofing contractor offering repair and replacement." },
      { name: "Tucson Rubberized Coatings", anchor: "tucson-rubberized", locallyOwned: "unknown", peOwned: "unknown", blurb: "Tucson Rubberized Coatings is a local roof-coating and flat-roof specialist." },
      { name: "Ridgeline Roofers", anchor: "ridgeline", locallyOwned: "unknown", peOwned: "unknown", blurb: "Ridgeline Roofers is a Tucson-area roofing contractor." },
      { name: "Right Way Roofing", anchor: "right-way-roofing", locallyOwned: "unknown", peOwned: "unknown", blurb: "Right Way Roofing is an Arizona roofing company serving residential customers." },
    ],
    testimonials: [
      { quote: "ThermalCork dropped our summer cooling bills noticeably and the crew was spotless.", name: "J. Marsh", area: "Catalina Foothills" },
      { quote: "Free roof inspection found issues two other companies missed. Straight shooters.", name: "L. Ortega", area: "Marana" },
      { quote: "Tile repair done right and on schedule. Highly recommend.", name: "P. Coles", area: "Oro Valley" },
    ],
    faqs: [
      { q: "Who is the best-rated roofing company in Tucson?", a: "Intelligent Design carries a 4.97-star aggregate rating across 23,000+ verified reviews and a BBB A+ rating, and is Tucson's only certified ThermalCork roof-coating applicator. Compare our public profile to any roofer before you book." },
      { q: "What is ThermalCork and who installs it in Tucson?", a: "ThermalCork is a natural cork spray roof coating that creates a permanent thermal break, can cut energy costs up to 50%, and carries a 15-year warranty. Intelligent Design is Tucson's only certified applicator." },
      { q: "Is a free second opinion on a roofing quote really free?", a: "Yes — send us another roofer's quote or inspection and we'll review it free and tell you honestly whether it's fair." },
      { q: "Is Intelligent Design locally owned?", a: "Yes — Intelligent Design is a locally owned, veteran-owned Tucson company." },
      { q: "Do you offer free roof inspections?", a: "Yes. We provide free, no-obligation roof inspections with a written report across the Tucson metro." },
    ],
    asOf: AS_OF,
  },
  {
    slug: "tucson-solar-companies",
    verticalLabel: "Solar",
    noun: "solar companies",
    campaign: "IDACH_Competitor-Conquest_Solar",
    servicePath: "/services/solar",
    schemaType: "HomeAndConstructionBusiness",
    warranty: "workmanship warranty plus service for orphaned systems from closed installers",
    title: "Tucson Solar Companies Compared (2026) | Intelligent Design — 23,000 Five-Star Reviews",
    description:
      "Comparing Tucson solar companies — or stuck with a system from a closed installer? See ratings, ownership & who services orphaned systems. BBB A+ · 4.97★ Google · Free second opinion.",
    h1: "How Tucson's Solar Companies Compare — And Why 23,000 Customers Chose Intelligent Design",
    intro:
      "When you call Intelligent Design, you're calling a locally owned Tucson company that's still here to service what we sell. Many Arizona solar installers have closed their doors — if yours did, we service and repair orphaned systems. Below is a comparison of Tucson solar options using public Google Business Profile ratings.",
    competitors: [
      { name: "Technicians for Sustainability (TFS)", anchor: "tfs", rating: "4.9", reviews: "505", locallyOwned: "unknown", peOwned: "unknown", blurb: "Technicians for Sustainability is a Tucson solar installer established in 2003 and a longtime local brand." },
      { name: "Titan Solar Power (closed)", anchor: "titan-solar", locallyOwned: "no", peOwned: "unknown", closed: true, national: true, blurb: "Titan Solar Power was a large national installer that ceased operations in 2024, leaving many Arizona customers with orphaned systems." },
      { name: "Tesla Solar", anchor: "tesla-solar", locallyOwned: "no", peOwned: "no", national: true, blurb: "Tesla Solar is a national solar and battery provider without a dedicated local Tucson service branch." },
      { name: "Net Zero Solar", anchor: "net-zero", locallyOwned: "unknown", peOwned: "unknown", blurb: "Net Zero Solar is a Tucson-based solar installer serving residential and commercial customers." },
      { name: "Solar Solution AZ", anchor: "solar-solution", locallyOwned: "unknown", peOwned: "unknown", blurb: "Solar Solution AZ is an Arizona solar installer serving the Tucson market." },
      { name: "Rise Solar", anchor: "rise-solar", locallyOwned: "unknown", peOwned: "unknown", blurb: "Rise Solar is an Arizona solar company offering residential installation." },
    ],
    testimonials: [
      { quote: "Our original installer went out of business — Intelligent Design got our panels producing again.", name: "A. Weber", area: "Sahuarita" },
      { quote: "Straightforward solar quote with no high-pressure sales. Refreshing.", name: "C. Ramirez", area: "Green Valley" },
      { quote: "They integrated solar with our AC and the savings are real.", name: "H. Diaz", area: "Vail" },
    ],
    faqs: [
      { q: "My solar installer went out of business — who services my system in Tucson?", a: "Intelligent Design services and repairs orphaned solar systems from closed installers, including panels originally installed by Titan Solar Power and other companies no longer operating. Call (520) 333-2665." },
      { q: "Who is the best-rated solar company in Tucson?", a: "Intelligent Design carries a 4.97-star aggregate rating across 23,000+ verified reviews and a BBB A+ rating, and is a locally owned Tucson company that stands behind its installs." },
      { q: "Is a free second opinion on a solar quote really free?", a: "Yes — send us another company's solar proposal and we'll review it free and tell you honestly whether it's fair." },
      { q: "Is Intelligent Design locally owned?", a: "Yes — Intelligent Design is a locally owned, veteran-owned Tucson company that will be here to service your system for the long haul." },
      { q: "Do you offer solar batteries and HVAC integration?", a: "Yes. We install residential solar, battery storage, and energy-saving SunTrac HVAC integration." },
    ],
    asOf: AS_OF,
  },
];

export function getVertical(slug: string): CompareVertical | undefined {
  return COMPARE_VERTICALS.find((v) => v.slug === slug);
}
