import { CommonQuestion } from '@/components/CommonQuestions';

// Common questions that apply to most electrical services
export const electricalEmergencyQuestions: CommonQuestion[] = [
  {
    question: "Do you provide 24/7 emergency electrical service in Tucson?",
    answer: "Yes, Intelligent Design offers 24/7 emergency electrical service throughout the greater Tucson area. We understand that electrical emergencies like power outages, sparking outlets, burning smells, or exposed wires pose serious safety hazards. Our licensed electricians respond quickly with fully stocked trucks to diagnose and resolve dangerous situations, restoring your safety and power."
  },
  {
    question: "How quickly can you respond to an electrical emergency?",
    answer: "We prioritize emergency electrical calls and typically respond within 1-2 hours in the greater Tucson area. For serious safety hazards like sparking, burning smells, or exposed wires, we dispatch the nearest available electrician immediately. Our goal is to eliminate the danger quickly and restore safe, reliable power to your home or business."
  }
];

export const electricalSafetyQuestions: CommonQuestion[] = [
  {
    question: "How do I know if my electrical system is safe?",
    answer: "Warning signs of electrical problems include frequently tripping breakers, flickering lights, outlets or switches that feel warm, burning or plastic smells, discolored outlets or switch plates, sparking when plugging in devices, and buzzing sounds from electrical panels. Homes over 40 years old or with outdated wiring should have professional safety inspections. Never ignore these warning signs—they indicate serious fire hazards."
  }
];

export const electricalWarrantyQuestions: CommonQuestion[] = [
  {
    question: "What warranty do you provide on electrical work?",
    answer: "We provide comprehensive warranties on both our workmanship and the electrical products we install. Labor warranties typically cover one year on installations and repairs, while manufacturer warranties on fixtures, panels, and equipment vary by product. As a fully licensed electrical contractor (ROC 340962) with over 45 years in business, we stand behind all our work with our BBB A+ rating and commitment to customer safety and satisfaction."
  }
];

// Panel upgrade questions
export const panelUpgradeCommonQuestions: CommonQuestion[] = [
  {
    question: "How do I know if I need an electrical panel upgrade?",
    answer: "Signs include frequent breaker trips, inability to run multiple appliances simultaneously, lack of available circuit spaces for new equipment, panel over 25 years old, flickering lights when appliances start, warm or buzzing panel, Federal Pacific or Zinsco brand panels (known fire hazards), or planning to add major equipment like EV chargers or pools. Most Tucson homes built before 1990 benefit from panel upgrades to 200-amp service."
  },
  {
    question: "Is my old electrical panel dangerous?",
    answer: "Panels over 25-30 years old may have deteriorated breakers, loose connections, and outdated safety features. Federal Pacific and Zinsco panels are documented fire hazards and should be replaced immediately. Even functioning older panels lack modern safety features like AFCI and GFCI protection. Professional inspection determines if your panel is safe or needs replacement to protect your family and home."
  },
  ...electricalEmergencyQuestions,
  ...electricalWarrantyQuestions
];

// EV charger questions
export const evChargerCommonQuestions: CommonQuestion[] = [
  {
    question: "Do I need an electrician to install an EV charger?",
    answer: "Yes, licensed electrician installation is required for safety, code compliance, and warranty protection. EV chargers draw significant power (often 40-50 amps), requiring dedicated circuits, proper wiring, and permits. DIY installation creates fire hazards, voids warranties, and violates electrical codes. Professional installation ensures safe, reliable charging that won't overload your electrical system."
  },
  {
    question: "Will installing an EV charger require a panel upgrade?",
    answer: "Many Tucson homes need panel upgrades to safely support EV chargers. If your panel is full, under 200-amp service, or over 25 years old, upgrading provides the capacity and safety features needed for EV charging. We perform load calculations to determine if your current panel can support a charger or if an upgrade is necessary for safe, reliable operation."
  },
  ...electricalWarrantyQuestions
];

// Generator questions
export const generatorCommonQuestions: CommonQuestion[] = [
  {
    question: "Why should I install a backup generator in Tucson?",
    answer: "Power outages during monsoon storms and extreme heat events can be dangerous and uncomfortable in Tucson. Generators keep AC running during summer outages (preventing heat-related illness), preserve food, power medical equipment, maintain security systems, and keep essential appliances operating. With monsoon season becoming more severe, backup power provides peace of mind and safety for your family."
  },
  {
    question: "What size generator do I need for my Tucson home?",
    answer: "Generator sizing depends on what you want to power during outages. Whole-home generators (20-25kW) power everything including AC, while smaller units (10-15kW) power essentials like refrigerators, lighting, and select outlets. In Tucson's heat, we recommend sizing generators to include AC capacity. Our electricians perform load calculations to determine the right size generator for your specific needs and budget."
  },
  ...electricalWarrantyQuestions
];

// Lighting questions
export const lightingCommonQuestions: CommonQuestion[] = [
  {
    question: "Should I upgrade to LED lighting throughout my home?",
    answer: "Yes, LED upgrades provide significant benefits in Tucson homes. LEDs use 75-80% less energy than incandescent bulbs, generate minimal heat (reducing AC costs), last 15-25 years, and provide excellent light quality. In Tucson where AC costs dominate energy bills, reducing heat from lighting delivers both lighting and cooling savings. Most homeowners see complete ROI within 2-3 years."
  },
  ...electricalWarrantyQuestions
];

// Outlet and switch questions
export const outletSwitchCommonQuestions: CommonQuestion[] = [
  {
    question: "When should I replace old outlets and switches?",
    answer: "Replace outlets and switches that feel loose, show cracks or damage, don't hold plugs firmly, feel warm, show discoloration, spark when used, or are over 15-20 years old. Older Tucson homes may have ungrounded outlets or worn devices that create fire hazards. Upgrading to modern grounded, tamper-resistant outlets with GFCI/AFCI protection improves safety significantly."
  },
  ...electricalEmergencyQuestions,
  ...electricalWarrantyQuestions
];

// Ceiling fan questions
export const ceilingFanCommonQuestions: CommonQuestion[] = [
  {
    question: "Can ceiling fans really reduce cooling costs in Tucson?",
    answer: "Yes, ceiling fans can reduce cooling costs by 20-30% when used properly. Fans create wind-chill effect allowing you to raise thermostat settings 4-6°F while maintaining comfort. In Tucson's dry heat, this evaporative cooling effect is very effective. Fans use only 15-90 watts compared to AC's 3,000+ watts, providing significant energy savings during Tucson's extended cooling season."
  },
  ...electricalWarrantyQuestions
];

// Electrical safety inspection questions
export const electricalInspectionCommonQuestions: CommonQuestion[] = [
  {
    question: "How often should I have my electrical system inspected?",
    answer: "We recommend electrical safety inspections every 3-5 years for homes under 25 years old, and annually for older homes. Inspections should be performed before buying a home, after additions or major renovations, if experiencing electrical problems, or if your home has outdated wiring like aluminum or knob-and-tube. Regular inspections catch developing problems before they become dangerous or expensive emergencies."
  },
  {
    question: "What's included in an electrical safety inspection?",
    answer: "Comprehensive inspections include examining the main electrical panel for safety issues, testing GFCI and AFCI protection, checking for overloaded circuits, inspecting visible wiring for damage, testing outlets and switches, verifying proper grounding, identifying code violations, checking outdoor electrical, and assessing overall system capacity. We provide a detailed report with recommended repairs and safety improvements prioritized by urgency."
  },
  ...electricalSafetyQuestions,
  ...electricalWarrantyQuestions
];

// Outdoor lighting questions
export const outdoorLightingCommonQuestions: CommonQuestion[] = [
  {
    question: "What outdoor lighting is best for Tucson's climate?",
    answer: "For Tucson's extreme heat and intense sun, choose LED fixtures rated for high temperatures and direct sun exposure. Weather-resistant (wet-rated) fixtures withstand monsoon rains. Motion-sensor lights provide security and reduce energy waste. We recommend bronze or powder-coated finishes that resist fading and corrosion. Solar lights struggle in Tucson's extreme heat, so AC-powered LED fixtures provide better reliability and performance."
  },
  ...electricalWarrantyQuestions
];
