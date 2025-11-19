import { CommonQuestion } from '@/components/content/CommonQuestions';

// Common questions that apply to most plumbing services
export const plumbingEmergencyQuestions: CommonQuestion[] = [
  {
    question: "Do you provide 24/7 emergency plumbing service in Tucson?",
    answer: "Yes, Intelligent Design offers 24/7 emergency plumbing service throughout the greater Tucson area. We understand that plumbing emergencies like burst pipes, severe leaks, or sewer backups can't wait. Our emergency technicians respond quickly with fully stocked trucks to handle most repairs on the first visit, minimizing water damage and restoring your plumbing quickly."
  },
  {
    question: "How fast can you respond to a plumbing emergency?",
    answer: "We prioritize emergency plumbing calls and typically respond within 1-2 hours in the greater Tucson area. For severe emergencies like major leaks or sewer backups, we dispatch the nearest available technician immediately. Our goal is to stop the damage quickly, perform temporary repairs if needed, and schedule permanent solutions that work with your schedule."
  }
];

export const plumbingWarrantyQuestions: CommonQuestion[] = [
  {
    question: "What warranty do you provide on plumbing work?",
    answer: "We provide comprehensive warranties on both our workmanship and the products we install. Labor warranties typically cover one year on repairs and installations, while manufacturer warranties on fixtures, water heaters, and equipment vary from 3-12 years depending on the product. As a licensed, bonded, and insured contractor (ROC 322375), we stand behind all our work with our BBB A+ rating and commitment to customer satisfaction."
  }
];

export const plumbingMaintenanceQuestions: CommonQuestion[] = [
  {
    question: "Do you offer plumbing maintenance plans?",
    answer: "Yes, our Family Protection Plans include comprehensive plumbing maintenance with priority scheduling, discounted repairs, and preventive inspections. Regular maintenance catches small issues before they become expensive emergencies, extends the life of water heaters and fixtures, and ensures your plumbing system operates efficiently. Members also receive priority emergency service when problems do occur."
  },
  {
    question: "How often should I have my plumbing inspected in Tucson?",
    answer: "We recommend annual plumbing inspections for Tucson homes, especially those over 20 years old. Annual inspections catch developing leaks, identify worn fixtures, check water heater condition, inspect for signs of hard water damage, and verify proper operation of all plumbing components. In Tucson's hard water conditions and extreme heat, preventive inspections prevent costly emergency repairs and water damage."
  }
];

// Water heater specific questions
export const waterHeaterCommonQuestions: CommonQuestion[] = [
  {
    question: "How long do water heaters last in Tucson?",
    answer: "Traditional tank water heaters typically last 8-12 years in Tucson, while tankless water heaters can last 15-20+ years with proper maintenance. Tucson's extremely hard water accelerates mineral buildup and corrosion, potentially shortening lifespan without regular flushing and maintenance. Annual maintenance and anode rod replacement extend life significantly, protecting your investment."
  },
  {
    question: "Should I choose tank or tankless water heater for my Tucson home?",
    answer: "Both have advantages. Tankless water heaters provide endless hot water, save space, last longer, and reduce energy costs by 20-30%. However, they cost more upfront and may require electrical or gas line upgrades. Tank water heaters cost less initially, work with existing infrastructure, and meet most families' hot water needs. We evaluate your household size, usage patterns, budget, and utility setup to recommend the best option."
  },
  ...plumbingEmergencyQuestions,
  ...plumbingWarrantyQuestions,
  ...plumbingMaintenanceQuestions
];

// Leak detection and repair questions
export const leakDetectionCommonQuestions: CommonQuestion[] = [
  {
    question: "How do I know if I have a hidden water leak?",
    answer: "Signs of hidden leaks include unexplained increases in water bills, damp spots on walls or ceilings, musty odors, mold growth, running water sounds when fixtures are off, warm spots on floors (from hot water leaks), cracks in foundation or walls, and water meter activity when no water is being used. If you suspect a leak, professional detection prevents extensive water damage and expensive repairs."
  },
  {
    question: "Can you find leaks without damaging my home?",
    answer: "Yes, we use non-invasive leak detection technology including acoustic listening devices, thermal imaging cameras, moisture meters, and video inspection cameras to locate leaks without unnecessary demolition. These advanced tools pinpoint exact leak locations so repairs target only affected areas, minimizing disruption, damage, and repair costs while solving problems effectively."
  },
  ...plumbingEmergencyQuestions,
  ...plumbingWarrantyQuestions
];

// Drain cleaning questions
export const drainCleaningCommonQuestions: CommonQuestion[] = [
  {
    question: "How often should drains be professionally cleaned?",
    answer: "For most Tucson homes, annual drain cleaning prevents clogs and keeps plumbing flowing freely. Homes with older plumbing, heavy use, hard water buildup, or frequent slow drains benefit from cleaning every 6-12 months. Preventive drain cleaning is much less expensive than emergency calls for completely blocked drains and helps identify developing problems before they become serious."
  },
  {
    question: "Are chemical drain cleaners safe to use?",
    answer: "No, chemical drain cleaners damage pipes, create toxic fumes, and often fail to fully clear clogs. They're especially harmful to older Tucson homes with corroded pipes. Chemical cleaners can cause pipes to corrode faster and create dangerous conditions if mixed with other chemicals. Professional drain cleaning with mechanical augers or hydro-jetting clears blockages completely and safely without damaging your plumbing."
  },
  ...plumbingEmergencyQuestions,
  ...plumbingWarrantyQuestions
];

// Sewer line questions
export const sewerLineCommonQuestions: CommonQuestion[] = [
  {
    question: "How do I know if my sewer line needs repair?",
    answer: "Warning signs include multiple drains backing up simultaneously, sewage odors in your yard or home, unusually lush grass patches over sewer lines, gurgling sounds from drains or toilets, slow drains throughout the house, and sewage backups. Tucson's shifting soil and tree roots commonly damage sewer lines. If you notice these signs, immediate inspection with camera equipment diagnoses the problem and prevents sewage emergencies."
  },
  {
    question: "Can tree roots damage my sewer line in Tucson?",
    answer: "Yes, tree roots are a leading cause of sewer line problems in Tucson. Even desert-adapted trees like mesquite and palo verde have aggressive root systems seeking water, and they find it in sewer lines. Roots infiltrate through tiny cracks, then expand and break pipes. Camera inspection identifies root intrusion early, and we can clear roots, repair damaged sections, or recommend preventive measures like root barriers."
  },
  ...plumbingEmergencyQuestions,
  ...plumbingWarrantyQuestions,
  ...plumbingMaintenanceQuestions
];

// Repiping questions
export const repipingCommonQuestions: CommonQuestion[] = [
  {
    question: "How do I know if my home needs repiping?",
    answer: "Signs include frequent leaks in multiple locations, discolored water, low water pressure throughout the house, visible pipe corrosion, pipes over 50 years old (especially galvanized steel), and mineral buildup restricting flow. Many older Tucson homes have corroded pipes due to hard water and age. Repiping prevents ongoing leaks, improves water quality and pressure, and protects your home from water damage."
  },
  {
    question: "Will repiping disrupt my daily routine?",
    answer: "Modern repiping techniques minimize disruption significantly. Most residential repiping takes 2-5 days depending on home size and complexity. We work efficiently, maintain water access when possible, protect your home with drop cloths and careful wall/ceiling access, patch and paint affected areas, and coordinate work around your schedule. Many homeowners are surprised how smoothly the process goes with professional execution."
  },
  ...plumbingWarrantyQuestions,
  ...plumbingMaintenanceQuestions
];

// Fixture installation questions
export const fixtureInstallationCommonQuestions: CommonQuestion[] = [
  {
    question: "Can I install plumbing fixtures myself?",
    answer: "While simple fixture replacements might seem straightforward, professional installation ensures proper connections, prevents leaks, meets code requirements, and protects manufacturer warranties. Incorrect installation can cause water damage, void warranties, and create safety hazards. Our licensed plumbers install fixtures correctly the first time, saving you time, stress, and potential water damage from DIY mistakes."
  },
  ...plumbingWarrantyQuestions
];

// Water softener questions
export const waterSoftenerCommonQuestions: CommonQuestion[] = [
  {
    question: "Do I need a water softener in Tucson?",
    answer: "Tucson has some of the hardest water in the country, with mineral levels often exceeding 15 grains per gallon. This extreme hardness causes scale buildup in pipes, reduces appliance efficiency and lifespan, leaves spots on dishes and fixtures, makes soap less effective, and can irritate skin. A water softener protects your plumbing, extends appliance life, improves cleaning effectiveness, and provides better water for bathing and drinking."
  },
  {
    question: "How often do water softeners need maintenance?",
    answer: "Water softeners need salt refilling every 1-3 months depending on water usage and hardness levels. Annual professional maintenance includes cleaning the brine tank, checking resin bed condition, inspecting valves and seals, testing regeneration cycles, and ensuring optimal performance. Proper maintenance ensures consistent soft water, extends softener life, and prevents problems before they affect your water quality."
  },
  ...plumbingWarrantyQuestions,
  ...plumbingMaintenanceQuestions
];

// Garbage disposal questions
export const garbageDisposalCommonQuestions: CommonQuestion[] = [
  {
    question: "What can I safely put in my garbage disposal?",
    answer: "Disposals handle soft food scraps, vegetable peels, small fruit pieces, cooked food, and bread products. Avoid fibrous materials (celery, corn husks), hard items (bones, fruit pits), expandable foods (rice, pasta), grease and oils, coffee grounds, and eggshells. Run cold water while operating the disposal and for 15 seconds after to flush waste completely. Proper use prevents clogs and extends disposal life."
  },
  ...plumbingWarrantyQuestions
];

// General plumbing maintenance questions
export const plumbingInspectionCommonQuestions: CommonQuestion[] = [
  {
    question: "What's included in a plumbing inspection?",
    answer: "Comprehensive plumbing inspections include checking all visible pipes for leaks and corrosion, testing water pressure and flow, inspecting water heater condition and operation, checking toilets and fixtures for proper function, examining drain performance, testing shut-off valves, inspecting exposed piping in attics and crawl spaces, and identifying potential problems before they cause damage or emergencies."
  },
  ...plumbingMaintenanceQuestions,
  ...plumbingWarrantyQuestions
];
