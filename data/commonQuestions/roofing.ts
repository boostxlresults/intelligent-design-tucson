import { CommonQuestion } from '@/components/CommonQuestions';

// Common questions for roofing services
export const roofingEmergencyQuestions: CommonQuestion[] = [
  {
    question: "Do you provide emergency roof repair in Tucson?",
    answer: "Yes, Intelligent Design offers 24/7 emergency roof repair throughout the greater Tucson area. We understand that roof leaks and storm damage can't wait—they cause immediate water damage, threaten safety, and worsen rapidly. Our roofing teams respond quickly to provide emergency tarping and temporary weatherproofing, then schedule permanent repairs to protect your home or business."
  },
  {
    question: "How quickly can you respond to a roofing emergency?",
    answer: "We prioritize emergency roofing calls and typically respond within 1-3 hours in the greater Tucson area. During monsoon season when emergency demand is highest, we maintain additional crews to ensure rapid response. Our goal is to stop water intrusion immediately with temporary protection, then return to complete permanent repairs as soon as possible."
  }
];

export const roofingWarrantyQuestions: CommonQuestion[] = [
  {
    question: "What warranty do you provide on roofing work?",
    answer: "We provide comprehensive warranties on both workmanship and materials. Workmanship warranties typically cover 5-10 years depending on the project, while manufacturer warranties on roofing materials range from 15-50 years based on product. As a fully licensed roofing contractor (ROC 296386) with over 45 years in business, we stand behind all installations with our BBB A+ rating and commitment to quality."
  }
];

export const roofingMaintenanceQuestions: CommonQuestion[] = [
  {
    question: "How often should I have my roof inspected in Tucson?",
    answer: "We recommend annual roof inspections in Tucson, plus additional inspections after major monsoon storms. Tucson's extreme UV exposure, monsoon winds, hail, and temperature swings (120°F+ days to near-freezing nights) stress roofing materials significantly. Annual inspections catch small issues like loose tiles, worn flashing, or minor leaks before they become expensive problems. Post-monsoon inspections identify storm damage while it's still covered under insurance."
  },
  {
    question: "Do you offer roof maintenance plans?",
    answer: "Yes, our Family Protection Plans include comprehensive roof maintenance with annual inspections, priority scheduling for repairs, discounted service rates, and preventive maintenance. Regular maintenance extends roof life by 20-30%, catches problems early, and ensures your roof remains in warranty-compliant condition. Members also receive priority emergency service during monsoon season when demand is highest."
  }
];

// Roof repair questions
export const roofRepairCommonQuestions: CommonQuestion[] = [
  {
    question: "How do I know if my roof needs repair?",
    answer: "Signs include missing or damaged shingles or tiles, water stains on ceilings, leaks during or after rain, cracked or curling shingles, granules in gutters (shingles), daylight visible through roof boards, sagging roof areas, and worn or damaged flashing. In Tucson, extreme heat can cause rapid shingle deterioration and tile cracking. If you notice any signs, immediate inspection prevents small problems from becoming expensive replacements."
  },
  {
    question: "Should I repair or replace my roof?",
    answer: "If your roof is less than halfway through its expected lifespan and damage is localized, repair is typically most cost-effective. However, widespread damage, multiple leaks, roof age over 15-20 years (for shingles) or visible deterioration suggest replacement provides better long-term value. We provide honest assessments and cost comparisons for both options so you can make an informed decision."
  },
  ...roofingEmergencyQuestions,
  ...roofingWarrantyQuestions,
  ...roofingMaintenanceQuestions
];

// Roof replacement questions
export const roofReplacementCommonQuestions: CommonQuestion[] = [
  {
    question: "How long does roof replacement take in Tucson?",
    answer: "Most residential roof replacements take 1-3 days depending on roof size, complexity, and material type. Simple shingle replacements often complete in 1-2 days, while tile or metal roofs may take 2-4 days. Commercial roofs take 1-4 weeks depending on size. We work efficiently to minimize disruption, protect your property, and complete quality installations quickly. Weather delays during monsoon season can extend timelines slightly."
  },
  {
    question: "What roofing material is best for Tucson's climate?",
    answer: "For Tucson's extreme conditions, concrete or clay tiles last 40-50+ years and reflect heat excellently. Metal roofing lasts 40-70 years with superior heat reflection and durability. Architectural shingles are economical and last 20-30 years but absorb more heat. Flat roofs benefit from reflective TPO or PVC membranes. The best choice depends on your budget, home style, desired longevity, and energy efficiency goals. We help you evaluate all factors."
  },
  ...roofingWarrantyQuestions,
  ...roofingMaintenanceQuestions
];

// Roof inspection questions
export const roofInspectionCommonQuestions: CommonQuestion[] = [
  {
    question: "What's included in a roof inspection?",
    answer: "Comprehensive roof inspections include examining all roofing materials for damage or wear, checking flashing around chimneys and vents, inspecting gutters and drainage, evaluating ventilation systems, checking for signs of leaks or water damage, assessing remaining roof life, documenting condition with photos, and providing a detailed written report with recommended repairs prioritized by urgency and importance."
  },
  {
    question: "Should I get a roof inspection before monsoon season?",
    answer: "Absolutely! Pre-monsoon inspections identify vulnerable areas that could fail during storms, allowing preventive repairs that cost far less than emergency repairs and water damage. Catching loose tiles, worn flashing, or deteriorated seals before monsoon season protects your home. We recommend spring inspections (April-May) to address issues before June monsoon onset."
  },
  ...roofingMaintenanceQuestions,
  ...roofingWarrantyQuestions
];

// Roof coating questions
export const roofCoatingCommonQuestions: CommonQuestion[] = [
  {
    question: "How long does roof coating last in Tucson?",
    answer: "Quality roof coatings typically last 10-20 years in Tucson depending on coating type, application thickness, and roof condition. Reflective coatings withstand extreme UV exposure and temperature swings well. With proper maintenance including periodic cleaning and minor touch-ups, coatings can be recoated to extend roof life even further, making them excellent alternatives to costly replacement."
  },
  {
    question: "Can roof coating stop leaks?",
    answer: "Roof coating can seal minor leaks and prevent future leaks by creating a seamless waterproof membrane. However, significant damage must be repaired first—coating alone won't fix structural issues, major cracks, or extensive deterioration. We thoroughly inspect your roof, make necessary repairs, then apply coating to waterproof and protect the entire surface. This approach solves existing problems while preventing new ones."
  },
  ...roofingWarrantyQuestions,
  ...roofingMaintenanceQuestions
];

// Material-specific questions
export const tileRoofCommonQuestions: CommonQuestion[] = [
  {
    question: "How long do tile roofs last in Tucson?",
    answer: "Concrete and clay tile roofs typically last 40-50+ years in Tucson with proper maintenance. Tiles withstand extreme UV, heat, and weather exceptionally well. However, underlayment typically needs replacement after 20-25 years. Individual broken tiles should be replaced promptly to protect underlayment. With regular maintenance and underlayment replacement, tile roofs can last 60-75+ years, making them excellent long-term investments."
  },
  ...roofingMaintenanceQuestions,
  ...roofingWarrantyQuestions
];

export const shingleRoofCommonQuestions: CommonQuestion[] = [
  {
    question: "How long do shingle roofs last in Tucson?",
    answer: "Architectural shingles typically last 20-30 years in Tucson, though extreme heat and UV exposure accelerate aging compared to milder climates. Premium shingles with reflective coatings last longer than standard shingles. Regular maintenance, prompt repairs, and adequate attic ventilation extend shingle life. Warning signs of shingle failure include granule loss, curling, cracking, and missing shingles—all reasons for professional inspection."
  },
  ...roofingMaintenanceQuestions,
  ...roofingWarrantyQuestions
];

export const metalRoofCommonQuestions: CommonQuestion[] = [
  {
    question: "Are metal roofs good for Tucson's heat?",
    answer: "Yes, metal roofs are excellent for Tucson! They reflect solar radiation far better than shingles, reducing cooling costs by 20-30%. Standing seam metal roofs last 40-70 years, require minimal maintenance, withstand monsoon winds and hail, and don't absorb heat like shingles. Modern finishes resist fading and corrosion. While initially more expensive than shingles, metal roofs provide superior long-term value through energy savings, longevity, and near-zero maintenance."
  },
  ...roofingWarrantyQuestions,
  ...roofingMaintenanceQuestions
];

export const flatRoofCommonQuestions: CommonQuestion[] = [
  {
    question: "What's the best flat roof material for Tucson?",
    answer: "For Tucson's climate, TPO and PVC single-ply membranes are excellent choices, offering high reflectivity, heat resistance, and 20-30 year lifespans. These white reflective roofs dramatically reduce cooling costs. SPF (spray polyurethane foam) provides superior insulation and waterproofing. Modified bitumen works well for low-traffic roofs. The best choice depends on your building's use, budget, and performance priorities. We recommend solutions optimized for Tucson's extreme conditions."
  },
  ...roofingWarrantyQuestions,
  ...roofingMaintenanceQuestions
];

// Commercial roofing questions
export const commercialRoofingCommonQuestions: CommonQuestion[] = [
  {
    question: "Can you work around my business operations?",
    answer: "Yes, we schedule commercial roofing work to minimize business disruption. Many projects can be done during off-hours, phased to keep businesses operational, or scheduled during slower seasons. We coordinate closely with facility managers, provide protection for merchandise and equipment, maintain safety protocols, and work efficiently to complete projects on schedule. Our experience with commercial properties ensures smooth execution."
  },
  {
    question: "Do you handle commercial roof warranties and inspections?",
    answer: "Yes, we provide comprehensive commercial roof warranties, annual inspections for warranty compliance, detailed documentation, and ongoing maintenance to protect your investment. Many commercial warranties require annual inspections—we ensure your roof remains in warranty-compliant condition. Our systematic approach to commercial roofing protects your property investment and provides predictable maintenance budgets."
  },
  ...roofingWarrantyQuestions,
  ...roofingMaintenanceQuestions
];
