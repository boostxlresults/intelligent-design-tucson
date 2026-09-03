import type { ServicePageData } from '@/types/services';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

const castIronPipeRepairFAQs = {
  serviceId: 'cast-iron-pipe-repair-tucson',
  serviceName: 'Cast Iron Pipe Repair Tucson',
  faqs: [
    {
      question: "How long do cast iron pipes last?",
      answer: "Cast iron pipes typically last 50–75 years under normal conditions. However, Tucson's naturally aggressive soil chemistry and water quality can accelerate corrosion. Pipes installed before 1975 are approaching or past their expected lifespan. Many Tucson homes built in the 1950s–1970s have cast iron drain lines that are now showing signs of internal deterioration even if they haven't failed catastrophically yet. A sewer camera inspection is the only way to know for certain what condition your cast iron pipes are in."
    },
    {
      question: "Does homeowners insurance cover cast iron pipe repair or replacement?",
      answer: "It depends on the cause of failure. Homeowners insurance typically covers sudden, accidental pipe failures — like a pipe that bursts unexpectedly. However, insurance almost always excludes gradual deterioration, corrosion, or slow leaks over time, which is how most cast iron pipe failures occur. If roots, soil movement, or long-term corrosion are involved, your claim may be denied. We recommend calling your insurance provider before any work begins. Some policies have specific riders for service lines. Our team can provide detailed documentation and camera footage to support your claim if applicable."
    },
    {
      question: "How do I know if my cast iron pipes need replacing?",
      answer: "The most reliable way is a professional sewer camera inspection — our cameras travel the full length of your drain lines and show live video of pipe condition. Warning signs that suggest cast iron pipe problems include: frequent drain clogs or backups that keep returning, gurgling sounds from multiple fixtures, sewage odors inside or outside your home, slow drains throughout the house (not just one fixture), foundation cracks or soft spots in your yard (from underground leaks), and water stains on basement walls or ceilings below drain lines. If your home was built before 1980 and has never had a camera inspection, scheduling one is strongly recommended."
    },
    {
      question: "What are the signs of cast iron pipe failure?",
      answer: "Cast iron pipes fail in predictable ways: (1) Internal tuberculation — rust and mineral deposits narrow the pipe interior, causing slow drains; (2) Pitting corrosion — the pipe wall develops holes from the inside out, causing leaks; (3) Joint separation — lead-caulked joints between sections open up, allowing root intrusion and leaks; (4) Cracking — the pipe becomes brittle over time and cracks under soil pressure or heavy loads above; (5) Bellying — sections sag and collect standing water and debris. Tucson homeowners often notice multiple slow drains, recurring clogs despite professional clearing, and musty smells first. By the time visible symptoms appear, deterioration is usually significant."
    },
    {
      question: "Can cast iron pipes be repaired, or do they need to be replaced?",
      answer: "In most cases, cast iron pipes can be rehabilitated without full replacement using CIPP (Cured-In-Place Pipe) lining — the same no-dig technology we use for sewer line repair. We use the HammerHead D125-QL QuickLok inversion drum system, which installs a seamless epoxy liner inside your existing cast iron pipe. The liner bonds to the interior surface, sealing cracks, pinholes, and joint gaps while restoring full flow capacity. The result is essentially a brand-new pipe inside the old one, with a 50-year warranty. Full pipe replacement (dig-and-replace) is only necessary when pipes have collapsed completely or when sections are so deteriorated that lining can't adhere properly. We assess every situation individually with a camera inspection first."
    },
    {
      question: "What is CIPP pipe lining and how does it work on cast iron pipes?",
      answer: "CIPP stands for Cured-In-Place Pipe lining. We saturate a flexible liner with a two-part epoxy resin, then insert it into your cast iron pipe using our HammerHead D125-QL QuickLok inversion drum. Air pressure inflates the liner against the pipe wall, conforming it to the exact interior shape — including any bends or changes in diameter. The epoxy cures within a few hours, creating a smooth, jointless new pipe inside the old one. The new liner is actually stronger than the original cast iron. Once cured, we reinstate any lateral connections and perform a final camera inspection to verify quality. There's no excavation, no destruction of your yard or driveway, and the whole process typically completes in one day."
    },
    {
      question: "How much does cast iron pipe repair cost in Tucson?",
      answer: "Cost varies based on the length and diameter of pipe being repaired, accessibility, and severity of deterioration. CIPP lining typically costs 30–50% less than traditional dig-and-replace when you factor in the avoided landscaping and hardscape restoration costs. We provide transparent, upfront pricing after a camera inspection so you know exactly what you're paying before any work begins. Financing options are available for larger projects. Call (520) 333-2665 or schedule online for a no-obligation camera inspection and estimate."
    },
    {
      question: "Will you need to dig up my yard to repair cast iron pipes?",
      answer: "In the vast majority of cases, no. Our HammerHead D125-QL QuickLok CIPP system is entirely trenchless — we access your pipe through existing cleanout points or small access pits. No trenching, no landscaping destruction, no driveway removal. We can line cast iron drain lines, sewer laterals, and interior drain stacks without opening walls in most homes. For collapsed sections that can't be lined, minimal spot excavation may be required, but this is the exception rather than the rule. We always perform a camera inspection first to determine whether trenchless repair is appropriate for your specific situation."
    },
    {
      question: "How long does cast iron pipe repair take?",
      answer: "A CIPP lining project on a typical residential sewer lateral (40–100 feet) usually completes in one day. The liner cure time is 2–4 hours depending on temperature and epoxy formulation. Larger or more complex jobs involving multiple pipe sections may take 2 days. Contrast this with traditional dig-and-replace, which typically takes 3–7 days for the work itself, plus weeks waiting for landscaping and hardscape contractors to restore your property. We give you a specific timeframe after the camera inspection."
    },
    {
      question: "What is the HammerHead D125-QL QuickLok system?",
      answer: "The HammerHead D125-QL QuickLok inversion drum is a professional-grade CIPP installation system designed for lateral pipe lining. It uses controlled air pressure to invert (turn inside-out) a resin-saturated liner tube into the host pipe, ensuring complete wall contact and uniform liner thickness. The QuickLok design speeds setup and takedown between jobs while maintaining precise pressure control during the inversion process. HammerHead is one of the most trusted names in trenchless rehabilitation equipment, used by certified contractors throughout North America. Intelligent Design uses this system as part of our commitment to industry-leading trenchless repair technology."
    },
    {
      question: "Do you offer a warranty on cast iron pipe repair?",
      answer: "Yes. Our CIPP pipe lining installations are backed by a 50-year transferable warranty. The liner material itself is engineered for a minimum 50-year service life under normal conditions. The warranty transfers to new owners if you sell the home, which can be a meaningful selling point. We also guarantee our workmanship — if there's any issue with the installation, we'll address it at no cost to you. Every completed job includes a final camera inspection with recorded video so you have documentation of the work performed."
    }
  ]
};

export const castironpiperepairData: ServicePageData = {
  title: 'Cast Iron Pipe Repair Tucson AZ | No-Dig CIPP Lining | HammerHead D125-QL',
  description: 'Cast iron pipe repair in Tucson using the HammerHead D125-QL QuickLok CIPP lining system. No-dig trenchless repair. 50-year warranty. Same-day camera inspection. Call (520) 333-2665.',
  slug: 'cast-iron-pipe-repair-tucson',

  h1: 'Cast Iron Pipe Repair in Tucson, AZ — No Digging Required',
  h2Subheading: 'Trenchless CIPP Lining for Cast Iron Pipes',
  tagline: 'HammerHead D125-QL QuickLok System | No-Dig CIPP Technology | 50-Year Warranty | Same-Day Camera Inspection | Tucson’s Cast Iron Pipe Experts',
  heroImage: '/generated_images/hammerhead_d125ql_cipp_tucson.jpg',
  heroImageAlt: 'Intelligent Design technician operating HammerHead D125-QL QuickLok CIPP lining system at a Tucson AZ residential job site',

  serviceName: 'Cast Iron Pipe Repair',
  category: 'Plumbing',

  highlights: [
    {
      title: 'HammerHead D125-QL QuickLok System',
      description: 'Professional-grade CIPP inversion drum | Precision pressure control | Uniform liner wall contact | Industry-leading trenchless equipment'
    },
    {
      title: 'No Excavation — Zero Yard Destruction',
      description: 'Trenchless access through existing cleanouts | No driveway or landscaping removal | Minimal disruption | Completes in one day'
    },
    {
      title: '50-Year Transferable Warranty',
      description: 'Engineered for 50-year service life | Transferable to new owners | Adds home value | Backed by written guarantee'
    },
    {
      title: 'Answers Tucson\'s Top Cast Iron Questions',
      description: 'Camera inspection shows exact pipe condition | Insurance documentation provided | Repair vs. replace recommendation | Honest, upfront pricing'
    },
    {
      title: 'CIPP Technology Stronger Than Original Pipe',
      description: 'Seamless, jointless new pipe inside old cast iron | Root-proof | Corrosion-resistant epoxy | Restores full flow capacity'
    },
    {
      title: '46+ Years Serving Tucson Homeowners',
      description: 'Family & veteran-owned | Licensed plumbers | 23,000+ reviews | Financing available'
    }
  ],

  content: {
    mainHeading: 'Cast Iron Pipe Repair Experts in Tucson, AZ',
    sections: [
      {
        type: 'heading',
        heading: 'Does Your Tucson Home Have Cast Iron Pipes?',
        level: 2,
        content: 'Does Your Tucson Home Have Cast Iron Pipes?'
      },
      {
        type: 'paragraph',
        content: 'Homes built in Tucson before 1980 almost certainly have cast iron drain lines. At the time, cast iron was the standard for sewer laterals, interior drain stacks, and main lines — durable, heavy, and built to last decades. The problem is those decades are now up. Cast iron pipes have an expected lifespan of 50–75 years, which means Tucson homes from the 1950s through the 1970s are now in the failure zone. And unlike a burst pipe that makes itself known immediately, cast iron fails gradually — internal corrosion, joint deterioration, and bellied sections that slowly choke flow and leak ground-level sewage before homeowners realize anything is wrong.'
      },
      {
        type: 'paragraph',
        content: 'At Intelligent Design, we specialize in diagnosing and repairing cast iron pipes using the [link:/services/trenchless-repair|HammerHead D125-QL QuickLok CIPP lining system] — the same trenchless technology used by municipal utilities and certified pipeline contractors. Our no-dig approach means we rehabilitate your cast iron pipes from the inside, leaving your yard, driveway, and landscaping completely untouched.'
      },
      {
        type: 'cta',
        heading: 'Worried About Your Cast Iron Pipes?',
        content: 'Schedule a camera inspection today. We\'ll show you the live video of your pipe condition and give you an honest recommendation — repair, line, or replace. No guessing, no pressure. Call (520) 333-2665 or book online.',
        buttonText: 'Schedule Camera Inspection',
        buttonLink: 'tel:+15203332665'
      },
      {
        type: 'heading',
        heading: 'The HammerHead D125-QL QuickLok System',
        level: 2,
        content: 'The HammerHead D125-QL QuickLok System'
      },
      {
        type: 'paragraph',
        content: 'Not all CIPP systems are equal. Intelligent Design uses the HammerHead D125-QL QuickLok inversion drum — professional-grade equipment engineered specifically for lateral pipe rehabilitation. The QuickLok drum uses controlled air pressure to invert a resin-saturated liner tube into your existing cast iron pipe. As it inverts, the liner turns inside-out and presses firmly against the pipe wall, conforming to bends, diameter changes, and irregular surfaces created by years of corrosion and joint shifting. The resin cures under controlled conditions, creating a seamless, jointless new pipe inside the old cast iron — one that is structurally stronger than the original and rated for 50 years of service.'
      },
      {
        type: 'paragraph',
        content: 'The D125-QL designation means the drum is rated for pipe diameters from 2 to 8 inches — covering the full range of residential lateral and interior drain lines. QuickLok refers to the tool-free locking system that speeds setup between jobs while maintaining precise pressure regulation during inversion. This is not entry-level equipment. It\'s the same system used by certified contractors on municipal infrastructure projects, deployed by Intelligent Design for every residential CIPP lining job in Tucson.'
      },
      {
        type: 'heading',
        heading: 'Signs Your Cast Iron Pipes Need Attention',
        level: 2,
        content: 'Signs Your Cast Iron Pipes Need Attention'
      },
      {
        type: 'paragraph',
        content: 'Cast iron deterioration follows a predictable pattern. Internal tuberculation — the buildup of rust and mineral deposits on the pipe interior — narrows the flow path and causes slow drains throughout the house. As corrosion progresses, the pipe wall develops pinholes from the inside out, allowing sewage to seep into the surrounding soil. Lead-caulked joints between cast iron sections open over time, creating entry points for tree roots and ground movement. In the later stages, sections of pipe develop cracks or collapse entirely under soil pressure.'
      },
      {
        type: 'paragraph',
        content: 'Tucson homeowners typically notice: slow drains in multiple fixtures at once (not just one sink), [link:/services/drain-clearing|drain clogs] that keep returning a few weeks after professional clearing, gurgling sounds from toilets or floor drains, sewage odors inside the home or in the yard, patches of unusually green or soft ground above the sewer line path, and foundation cracks near drain lines. If your home is pre-1980 and you\'re experiencing any of these, the cast iron pipes are the first place to look.'
      },
      {
        type: 'heading',
        heading: 'Repair vs. Replace: What\'s Right for Your Situation?',
        level: 2,
        content: 'Repair vs. Replace: What\'s Right for Your Situation?'
      },
      {
        type: 'paragraph',
        content: 'The most common question we hear: can my cast iron pipes be lined, or do they need full replacement? The honest answer depends on the condition of your specific pipes, which is why we always start with a [link:/services/sewer-camera-inspection|sewer camera inspection] before recommending anything. CIPP lining works when pipe walls are still structurally present — even if corroded, cracked, or leaking. The epoxy liner bonds to the interior surface, sealing defects and reinforcing the remaining pipe structure. Full replacement via [link:/services/sewer-line-repair|sewer line repair] is necessary when sections have collapsed completely, when pipe alignment is so badly off that a liner can\'t navigate the bends, or when the pipe wall is so deteriorated that there\'s nothing for the liner to adhere to. In our experience, the majority of cast iron pipes in Tucson are candidates for lining rather than replacement — saving significant cost and avoiding all excavation.'
      },
      {
        type: 'cta',
        heading: 'Get an Honest Assessment of Your Cast Iron Pipes',
        content: 'Camera inspection + written recommendation + upfront pricing before any work begins. Call (520) 333-2665 or schedule online. Financing available.',
        buttonText: 'Book Camera Inspection',
        buttonLink: 'tel:+15203332665'
      }
    ]
  },

  faqs: castIronPipeRepairFAQs,
  commonQuestions: getRefinementQuestions('Plumbing', 'Tucson'),
};
