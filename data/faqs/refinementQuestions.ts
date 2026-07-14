/**
 * Refinement Questions — Google Maps AI "Ask About This Place" Optimization
 * 
 * These questions mirror the follow-up refinement questions that Google Maps AI
 * auto-generates when users search for home services. By pre-answering these
 * on every service page, we increase the chance of being cited in AI responses.
 * 
 * Each category has:
 * - Universal questions (apply to all locations)
 * - Location-template questions (dynamically populated with location name)
 */

import type { FAQItem } from './types';

/**
 * Generate HVAC refinement questions for a specific location
 */
export function getHVACRefinementQuestions(location: string): FAQItem[] {
  return [
    {
      question: `Do you offer emergency AC repair in ${location}?`,
      answer: `Yes. Intelligent Design provides 24/7 emergency AC repair in ${location} and all of greater Tucson. Our technicians are dispatched from strategic locations across the metro area, so response times to ${location} are typically 1-2 hours. No overtime charges for emergency calls. Call (520) 333-2665 anytime.`
    },
    {
      question: `How much does AC repair cost in ${location}?`,
      answer: `AC repair costs in ${location} vary based on the issue. Simple repairs like capacitor replacement start around $150-$300, while major repairs like compressor replacement can range from $1,500-$3,000+. Intelligent Design provides upfront, transparent pricing before any work begins — no hidden fees. We also offer financing options and our $88.88 tune-up special to help prevent costly repairs.`
    },
    {
      question: `What HVAC brands do you service in ${location}?`,
      answer: `Intelligent Design services all major HVAC brands in ${location} including Carrier, Trane, Lennox, Goodman, Rheem, York, Amana, Daikin, Mitsubishi, and more. Our technicians average 17+ years of experience and are factory-trained on multiple brands. Whether you have a central AC, heat pump, ductless mini-split, or package unit, we can diagnose and repair it.`
    },
    {
      question: `Do you offer AC financing in ${location}?`,
      answer: `Yes. Intelligent Design offers multiple financing options for ${location} homeowners including 0% APR plans, low monthly payment options, and same-as-cash programs. We work with several lending partners to find the best fit for your budget. Financing is available for AC installations, replacements, and major repairs. Apply during your service appointment — approval takes minutes.`
    },
    {
      question: `How often should I get my AC tuned up in ${location}?`,
      answer: `In ${location} and the Tucson area, we recommend AC tune-ups twice a year — once in spring before the extreme summer heat, and once in fall before heating season. Tucson's desert climate puts extra stress on HVAC systems due to dust, extreme temperatures (110°F+), and monsoon humidity. Our comprehensive 86-point tune-up is currently just $88.88 and catches problems before they become expensive emergencies.`
    },
    {
      question: `Is Intelligent Design licensed and insured in Arizona?`,
      answer: `Yes. Intelligent Design is fully licensed (ROC #322428), bonded, and insured in Arizona. We've been serving the Tucson metro area including ${location} since 1979. We're also BBB A+ rated, veteran-owned, and maintain a 4.97 Google rating with over 3,600 reviews. All our technicians are background-checked, drug-tested, and NATE-certified.`
    },
    {
      question: `What is the IntelligentAC monitoring system?`,
      answer: `IntelligentAC is our proprietary smart AC monitoring system that uses advanced sensors to continuously monitor your HVAC system's performance. It can diagnose problems before they become emergencies, predict system failures, and alert you when it's time for a tune-up or filter change. Available to ${location} homeowners — it can save thousands in unexpected repair costs by catching issues early.`
    },
    {
      question: `Do you install ductless mini-splits in ${location}?`,
      answer: `Yes. Intelligent Design installs ductless mini-split systems in ${location} homes. Mini-splits are ideal for room additions, converted garages, older homes without ductwork, and areas where traditional ducted systems aren't practical. They're highly energy-efficient (up to 30 SEER2) and provide both heating and cooling. We carry Mitsubishi, Daikin, and other top brands.`
    },
    {
      question: `How long does AC installation take in ${location}?`,
      answer: `A standard AC replacement in ${location} typically takes 4-8 hours for a straightforward swap, or 1-2 days if ductwork modifications are needed. New installations in homes without existing systems may take 2-3 days. Intelligent Design handles all permits, inspections, and disposal of old equipment. We schedule installations to minimize disruption to your daily routine.`
    },
    {
      question: `Do you offer maintenance plans for ${location} homeowners?`,
      answer: `Yes. Intelligent Design offers Family Protection Plans for ${location} homeowners that include priority scheduling, discounted repairs, annual tune-ups, and extended warranties. Plans cover HVAC, plumbing, electrical, and more — so one plan protects your entire home. Members also get priority scheduling during peak summer months when wait times can be longest.`
    },
    {
      question: `What areas near ${location} do you serve?`,
      answer: `Intelligent Design serves all of greater Tucson including ${location}, Oro Valley, Marana, Catalina Foothills, Tanque Verde, Vail, Sahuarita, Green Valley, SaddleBrooke, Rita Ranch, Drexel Heights, and surrounding communities. We maintain the same fast response times and quality service across our entire service area. Call (520) 333-2665 or book online at idesignac.com.`
    }
  ];
}

/**
 * Generate Plumbing refinement questions for a specific location
 */
export function getPlumbingRefinementQuestions(location: string): FAQItem[] {
  return [
    {
      question: `Do you offer emergency plumbing in ${location}?`,
      answer: `Yes. Intelligent Design provides 24/7 emergency plumbing service in ${location}. Burst pipes, sewer backups, water heater failures, and major leaks can't wait — our plumbers respond within 1-2 hours. Call (520) 333-2665 for immediate assistance. No overtime charges.`
    },
    {
      question: `How much does a plumber cost in ${location}?`,
      answer: `Plumbing costs in ${location} depend on the job. Common repairs like faucet replacement ($150-$300), toilet repair ($100-$250), and water heater repair ($200-$500) are straightforward. Larger jobs like repiping ($3,000-$8,000) or sewer line replacement ($3,000-$10,000) vary by scope. Intelligent Design provides upfront pricing with no hidden fees — you'll know the cost before we start.`
    },
    {
      question: `Do you fix water heaters in ${location}?`,
      answer: `Yes. Intelligent Design repairs and replaces all types of water heaters in ${location} including traditional tank, tankless, hybrid/heat pump, and solar water heaters. We service all major brands: Rheem, A.O. Smith, Bradford White, Rinnai, and Navien. If your water heater is leaking, not producing hot water, or making strange noises, call us for same-day diagnosis.`
    },
    {
      question: `Do you offer drain cleaning in ${location}?`,
      answer: `Yes. Intelligent Design offers professional drain cleaning in ${location} using hydro-jetting, cable machines, and video camera inspection. Our $88.88 drain clearing special covers standard drain clogs. For stubborn blockages, tree root intrusion, or recurring problems, we use sewer camera inspection to identify the exact issue and recommend the right solution.`
    },
    {
      question: `Can you fix a slab leak in ${location}?`,
      answer: `Yes. Intelligent Design specializes in slab leak detection and repair in ${location}. We use electronic leak detection equipment to pinpoint leaks under your foundation without unnecessary demolition. Repair options include spot repair, rerouting, or full repiping depending on the severity and your home's plumbing condition. We also handle all concrete and flooring restoration.`
    },
    {
      question: `Do you install water softeners in ${location}?`,
      answer: `Yes. Tucson's water is notoriously hard (12-25 grains per gallon), and ${location} is no exception. Intelligent Design installs whole-home water softeners, water filtration systems, and reverse osmosis systems. Hard water damages pipes, water heaters, and fixtures over time — a water softener pays for itself in reduced maintenance costs. Free water quality testing available.`
    },
    {
      question: `Do you offer plumbing financing in ${location}?`,
      answer: `Yes. Intelligent Design offers flexible financing for plumbing projects in ${location} including 0% APR options and low monthly payments. Financing is available for water heater replacements, repiping, sewer line repair, and other major plumbing work. Apply during your service appointment — approval takes just minutes.`
    },
    {
      question: `Is Intelligent Design a licensed plumber in Arizona?`,
      answer: `Yes. Intelligent Design is a fully licensed plumbing contractor in Arizona (ROC #322428). We've been serving ${location} and the greater Tucson area since 1979. All our plumbers are licensed, background-checked, and drug-tested. We're BBB A+ rated with a 4.97 Google rating and over 3,600 reviews.`
    },
    {
      question: `Do you do repiping in ${location}?`,
      answer: `Yes. Intelligent Design is Tucson's repipe specialist serving ${location}. If your home has galvanized steel, polybutylene, or deteriorating copper pipes, whole-house repiping can solve recurring leaks, low water pressure, and discolored water. We use modern PEX and copper piping with minimal wall damage. Most whole-house repipes are completed in 1-2 days.`
    },
    {
      question: `What plumbing services do you offer in ${location}?`,
      answer: `Intelligent Design offers comprehensive plumbing services in ${location}: drain cleaning, sewer repair, water heater repair/replacement, repiping, leak detection, slab leak repair, faucet/fixture installation, toilet repair, garbage disposal, water softener installation, gas line repair, and 24/7 emergency service. One company for all your plumbing needs.`
    }
  ];
}

/**
 * Generate Electrical refinement questions for a specific location
 */
export function getElectricalRefinementQuestions(location: string): FAQItem[] {
  return [
    {
      question: `Do you offer electrical services in ${location}?`,
      answer: `Yes. Intelligent Design provides full residential and commercial electrical services in ${location}. Our licensed electricians handle panel upgrades, circuit breaker replacement, outlet installation, ceiling fan installation, whole-home surge protection, Generac generator installation, EV charger installation, and 24/7 emergency electrical service.`
    },
    {
      question: `How much does an electrical panel upgrade cost in ${location}?`,
      answer: `Electrical panel upgrades in ${location} typically range from $1,500-$4,000 depending on the amperage upgrade (100A to 200A is most common) and any additional work needed. If your home has a Federal Pacific or Zinsco panel, upgrading is strongly recommended for safety. Intelligent Design provides upfront pricing and financing options.`
    },
    {
      question: `Do you install Generac generators in ${location}?`,
      answer: `Yes. Intelligent Design is a certified Generac installer serving ${location}. Whole-home standby generators automatically power your home during outages — critical during Tucson's monsoon season when power outages are common. We handle sizing, installation, gas line connection, transfer switch, and all permits. Financing available.`
    },
    {
      question: `Do you install EV chargers in ${location}?`,
      answer: `Yes. Intelligent Design installs Level 2 EV chargers in ${location} homes. We handle the full installation including electrical panel assessment, dedicated circuit installation, and charger mounting. We install ChargePoint, Tesla Wall Connector, JuiceBox, and other popular brands. Most installations are completed in half a day.`
    },
    {
      question: `Do you offer emergency electrical service in ${location}?`,
      answer: `Yes. Intelligent Design provides 24/7 emergency electrical service in ${location}. Electrical emergencies like sparking outlets, burning smells, power outages, and exposed wiring are dangerous and shouldn't wait. Our licensed electricians respond quickly to ensure your family's safety. Call (520) 333-2665 immediately for electrical emergencies.`
    },
    {
      question: `Is Intelligent Design a licensed electrician in Arizona?`,
      answer: `Yes. Intelligent Design is a fully licensed electrical contractor in Arizona (ROC #322428). All our electricians are licensed, insured, background-checked, and follow NEC code requirements. We've been serving ${location} and greater Tucson since 1979 with a 4.97 Google rating and BBB A+ rating.`
    },
    {
      question: `Do you install whole-home surge protection in ${location}?`,
      answer: `Yes. Whole-home surge protection is especially important in ${location} and the Tucson area due to monsoon lightning strikes. Intelligent Design installs surge protection at your electrical panel to protect all electronics, appliances, and HVAC equipment from power surges. A single lightning strike can cause thousands in damage — surge protection costs a fraction of that.`
    },
    {
      question: `Can you add outlets or circuits to my ${location} home?`,
      answer: `Yes. Intelligent Design adds outlets, circuits, and dedicated lines in ${location} homes. Whether you need a dedicated circuit for a home office, additional outlets in a kitchen remodel, or outdoor outlets for landscape lighting, our electricians handle it safely and to code. We also install USB outlets, GFCI outlets, and smart switches.`
    }
  ];
}

/**
 * Generate Solar refinement questions for a specific location
 */
export function getSolarRefinementQuestions(location: string): FAQItem[] {
  return [
    {
      question: `How much do solar panels cost in ${location}?`,
      answer: `Solar panel installation costs in ${location} typically range from $15,000-$30,000 before incentives, depending on system size and your home's energy needs. After the 30% federal tax credit, costs drop significantly. Intelligent Design provides free solar assessments and customized quotes. With Tucson's 350+ days of sunshine, most systems pay for themselves in 5-7 years.`
    },
    {
      question: `Is solar worth it in ${location}?`,
      answer: `Absolutely. ${location} gets over 350 days of sunshine per year, making it one of the best locations in the country for solar. With TEP rates increasing annually, solar locks in your energy costs. The 30% federal tax credit, potential state incentives, and net metering make solar an excellent investment. Most ${location} homeowners see 15-25% returns on their solar investment.`
    },
    {
      question: `Do you offer solar financing in ${location}?`,
      answer: `Yes. Intelligent Design offers multiple solar financing options for ${location} homeowners including $0 down solar loans, low-interest financing, and lease options. Many homeowners find their monthly solar payment is less than their current electric bill — meaning you save money from day one. We help you compare options to find the best fit.`
    },
    {
      question: `How long does solar installation take in ${location}?`,
      answer: `Solar installation in ${location} typically takes 1-3 days for the physical installation, plus 2-4 weeks for permitting and utility interconnection. Intelligent Design handles all permits, HOA approvals (if applicable), inspections, and TEP interconnection paperwork. From contract signing to system activation, the full process usually takes 4-8 weeks.`
    },
    {
      question: `Do you install solar batteries in ${location}?`,
      answer: `Yes. Intelligent Design installs solar battery storage systems in ${location} including Tesla Powerwall, Enphase IQ Battery, and other leading brands. Battery storage lets you store excess solar energy for use at night, during outages, or during peak rate hours. With Tucson's monsoon season power outages, battery backup provides peace of mind.`
    },
    {
      question: `Will solar panels damage my roof in ${location}?`,
      answer: `No — when properly installed, solar panels actually protect the portion of roof they cover from sun and weather damage. Intelligent Design is both a solar installer AND a licensed roofing contractor, so we understand roof integrity. We inspect your roof before installation and can repair or replace roofing as needed. Our installations come with a 25-year roof penetration warranty.`
    },
    {
      question: `Do you handle solar permits in ${location}?`,
      answer: `Yes. Intelligent Design handles all solar permitting for ${location} including Pima County building permits, electrical permits, HOA architectural review submissions, and TEP interconnection applications. Our team manages the entire process so you don't have to deal with paperwork or bureaucracy.`
    },
    {
      question: `How much can I save with solar in ${location}?`,
      answer: `${location} homeowners typically save $100-$300+ per month on electricity with solar, depending on system size and energy usage. Over 25 years, total savings often exceed $50,000-$80,000. With TEP's net metering program, excess energy your panels produce is credited back to your account. Intelligent Design provides a detailed savings analysis during your free solar assessment.`
    }
  ];
}

/**
 * Generate Roofing refinement questions for a specific location
 */
export function getRoofingRefinementQuestions(location: string): FAQItem[] {
  return [
    {
      question: `Do you offer roof repair in ${location}?`,
      answer: `Yes. Intelligent Design provides roof repair services in ${location} for all roof types including tile, shingle, flat/TPO, foam, and metal roofs. Common repairs include cracked or missing tiles, flashing repair, leak repair, monsoon damage, and sun damage. We offer free roof inspections and same-day emergency repair for active leaks.`
    },
    {
      question: `How much does a new roof cost in ${location}?`,
      answer: `Roof replacement costs in ${location} vary by material and size. Typical ranges: tile roof ($15,000-$35,000), shingle roof ($8,000-$20,000), flat/TPO roof ($8,000-$18,000), and foam roof ($5,000-$15,000). Intelligent Design provides free inspections and detailed quotes. We also offer financing options to make roof replacement affordable.`
    },
    {
      question: `Do you do roof inspections in ${location}?`,
      answer: `Yes. Intelligent Design offers free roof inspections in ${location}. Our inspectors check for cracked tiles, damaged flashing, deteriorating underlayment, ponding water, and other issues. We provide a detailed report with photos and honest recommendations. Roof inspections are especially important before monsoon season and when buying/selling a home.`
    },
    {
      question: `Can you fix a roof leak in ${location}?`,
      answer: `Yes. Intelligent Design provides emergency roof leak repair in ${location}. Roof leaks can cause extensive water damage to your home's structure, insulation, and belongings if not addressed quickly. We identify the source of the leak, make immediate repairs, and recommend long-term solutions. Call (520) 333-2665 for urgent roof leak service.`
    },
    {
      question: `Do you offer roofing financing in ${location}?`,
      answer: `Yes. Intelligent Design offers flexible financing for roofing projects in ${location} including 0% APR options and low monthly payments. A new roof is a major investment, and we want to make it accessible. Apply during your free inspection — approval takes minutes. We also work with insurance companies on storm damage claims.`
    },
    {
      question: `Is Intelligent Design a licensed roofer in Arizona?`,
      answer: `Yes. Intelligent Design is a fully licensed roofing contractor in Arizona (ROC #322428). We've been serving ${location} and greater Tucson since 1979. All our roofers are trained, insured, and follow manufacturer specifications. We're BBB A+ rated with a 4.97 Google rating and over 3,600 reviews.`
    },
    {
      question: `What type of roof is best for ${location}?`,
      answer: `In ${location} and the Tucson area, tile roofs (concrete or clay) are the most popular and durable choice, lasting 50+ years. They handle extreme heat, UV exposure, and monsoon rain well. For flat roofs, TPO or foam are excellent options. Shingle roofs are more affordable but have shorter lifespans (15-25 years) in Arizona's harsh sun. Intelligent Design can recommend the best option for your home and budget.`
    },
    {
      question: `Do you handle insurance claims for roof damage in ${location}?`,
      answer: `Yes. Intelligent Design works with all major insurance companies on roof damage claims in ${location}. Monsoon storms, hail, and wind can cause significant roof damage. We document all damage thoroughly, provide detailed estimates, and work directly with your insurance adjuster to ensure your claim is handled properly. We make the process as stress-free as possible.`
    }
  ];
}

/**
 * Generate Drain Clearing refinement questions for a specific location
 */
export function getDrainClearingRefinementQuestions(location: string): FAQItem[] {
  return [
    {
      question: `How much does drain cleaning cost in ${location}?`,
      answer: `Intelligent Design offers drain clearing in ${location} starting at just $88.88 for our special. Standard drain cleaning for kitchen, bathroom, or laundry drains is very affordable. For more complex issues like main sewer line blockages or tree root intrusion, costs vary based on the method needed (cable machine vs. hydro-jetting). We always provide upfront pricing.`
    },
    {
      question: `Do you offer emergency drain service in ${location}?`,
      answer: `Yes. Intelligent Design provides 24/7 emergency drain and sewer service in ${location}. Sewer backups and completely blocked drains can't wait — they pose health hazards and can cause water damage. Our plumbers respond quickly with professional equipment to clear blockages fast. Call (520) 333-2665 for immediate assistance.`
    },
    {
      question: `Do you use cameras to inspect drains in ${location}?`,
      answer: `Yes. Intelligent Design uses HD sewer camera inspection in ${location} to visually inspect your drain and sewer lines. Camera inspection reveals the exact cause of blockages — whether it's tree roots, grease buildup, collapsed pipe, or foreign objects. This eliminates guesswork and ensures we recommend the right solution. Camera inspection is included with many of our drain services.`
    },
    {
      question: `What causes frequent drain clogs in ${location}?`,
      answer: `Common causes of drain clogs in ${location} include tree root intrusion (very common with Tucson's mesquite and palo verde trees), grease and food buildup in kitchen drains, hair and soap scum in bathroom drains, mineral buildup from Tucson's hard water, and aging clay or cast iron sewer pipes. If you're experiencing recurring clogs, a sewer camera inspection can identify the root cause.`
    },
    {
      question: `Do you offer hydro-jetting in ${location}?`,
      answer: `Yes. Intelligent Design offers professional hydro-jetting in ${location} for stubborn drain and sewer blockages. Hydro-jetting uses high-pressure water (up to 4,000 PSI) to scour pipe walls clean, removing grease, scale, tree roots, and debris. It's the most thorough drain cleaning method available and can restore pipes to near-new condition.`
    },
    {
      question: `Can you fix a broken sewer line in ${location}?`,
      answer: `Yes. Intelligent Design repairs and replaces sewer lines in ${location} using both traditional excavation and trenchless methods. Trenchless sewer repair (pipe lining or pipe bursting) minimizes yard disruption and is often faster and more cost-effective. We use sewer camera inspection to determine the best repair method for your situation.`
    }
  ];
}

/**
 * Get refinement questions by service category
 */
export function getRefinementQuestions(category: string, location: string): FAQItem[] {
  switch (category.toLowerCase()) {
    case 'hvac':
      return getHVACRefinementQuestions(location);
    case 'plumbing':
      return getPlumbingRefinementQuestions(location);
    case 'electrical':
      return getElectricalRefinementQuestions(location);
    case 'solar':
      return getSolarRefinementQuestions(location);
    case 'roofing':
      return getRoofingRefinementQuestions(location);
    case 'drain clearing':
    case 'drain-clearing':
      return getDrainClearingRefinementQuestions(location);
    default:
      return getHVACRefinementQuestions(location); // Default to HVAC
  }
}
