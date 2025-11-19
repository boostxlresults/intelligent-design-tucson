import { CommonQuestion } from '@/components/CommonQuestions';

// Common questions that apply to most HVAC services
export const hvacEmergencyQuestions: CommonQuestion[] = [
  {
    question: "Do you offer 24/7 emergency HVAC service in Tucson?",
    answer: "Yes, Intelligent Design provides 24/7 emergency HVAC service throughout the greater Tucson area. We understand that AC failures during summer can be dangerous and uncomfortable, so our team is always ready to respond quickly to restore your comfort and safety."
  },
  {
    question: "How quickly can you respond to an emergency call?",
    answer: "We prioritize emergency calls and typically respond within 1-2 hours in the greater Tucson area. During extreme heat events or peak demand periods, we do our best to reach you as quickly as possible. Our emergency technicians carry fully stocked trucks to handle most repairs on the first visit."
  }
];

export const hvacWarrantyQuestions: CommonQuestion[] = [
  {
    question: "What warranty do you provide on HVAC work?",
    answer: "We provide comprehensive warranties on both our workmanship and the equipment we install. Installation labor is typically covered for one year, while manufacturer equipment warranties range from 5-12 years depending on the brand and model. As a factory-authorized dealer, we can also offer extended warranty options for additional peace of mind."
  },
  {
    question: "Do you service all HVAC brands?",
    answer: "Yes, our licensed technicians service all major HVAC brands including Carrier, Trane, Lennox, Rheem, Goodman, York, American Standard, and more. With over 45 years of experience, we have the expertise and diagnostic tools to repair any residential or commercial HVAC system in Tucson."
  }
];

export const hvacMaintenanceQuestions: CommonQuestion[] = [
  {
    question: "Do you offer maintenance plans for HVAC systems?",
    answer: "Yes, our Family Protection Plans provide comprehensive preventive maintenance with priority scheduling, discounted repairs, and extended warranties. Regular maintenance extends equipment life, improves efficiency, prevents breakdowns, and ensures your system is ready for Tucson's extreme temperatures. Members also receive priority emergency service."
  },
  {
    question: "How often should I have my HVAC system serviced in Tucson?",
    answer: "In Tucson's extreme climate, we recommend servicing your AC twice per year—once in spring before cooling season and once in fall. Heating systems should be serviced annually before winter. Regular maintenance prevents breakdowns, improves efficiency, extends equipment life, and maintains manufacturer warranties. Our Family Protection Plans include all necessary service visits."
  }
];

export const hvacFinancingQuestions: CommonQuestion[] = [
  {
    question: "Do you offer financing for HVAC installations and repairs?",
    answer: "Yes, we offer flexible financing options to make HVAC installations and major repairs more affordable. Multiple plans are available with various terms and interest rates to fit different budgets. Our team can help you find a financing option that works for your situation, ensuring you get the comfort you need when you need it."
  }
];

// Service-specific common questions
export const acRepairCommonQuestions: CommonQuestion[] = [
  ...hvacEmergencyQuestions,
  {
    question: "What are the signs my AC needs immediate repair?",
    answer: "Signs requiring immediate attention include complete system failure, warm air blowing from vents, unusual noises like grinding or squealing, burning or electrical smells, water leaking inside your home, frozen evaporator coils, and dramatically reduced airflow. Any of these issues can worsen quickly and should be addressed by a professional technician right away."
  },
  ...hvacWarrantyQuestions,
  ...hvacMaintenanceQuestions
];

export const acInstallationCommonQuestions: CommonQuestion[] = [
  {
    question: "How long does AC installation take in Tucson?",
    answer: "Most residential AC installations take 1-2 days depending on system complexity and any necessary modifications. Straightforward replacements can often be completed in one day, while new installations requiring ductwork, electrical upgrades, or permit inspections may take 2-3 days. We work efficiently to minimize disruption while ensuring quality installation."
  },
  {
    question: "Will you remove my old AC unit?",
    answer: "Yes, we handle complete removal and proper disposal of your old AC unit as part of every installation. This includes disconnecting refrigerant lines, safely recovering refrigerant per EPA regulations, removing the outdoor condenser and indoor air handler, and cleaning up the installation area. Proper disposal ensures environmental compliance and safety."
  },
  ...hvacWarrantyQuestions,
  ...hvacMaintenanceQuestions,
  ...hvacFinancingQuestions
];

export const acMaintenanceCommonQuestions: CommonQuestion[] = [
  {
    question: "What's included in AC maintenance service?",
    answer: "Comprehensive AC maintenance includes cleaning or replacing air filters, checking refrigerant levels and pressures, cleaning condenser and evaporator coils, inspecting electrical connections, testing thermostat calibration, lubricating moving parts, checking condensate drain lines, measuring airflow, and testing overall system performance. This thorough service prevents breakdowns and maintains peak efficiency."
  },
  {
    question: "Can I skip AC maintenance if my system seems fine?",
    answer: "No, regular maintenance is essential even when systems appear to be working properly. Tucson's extreme heat and dust put tremendous stress on AC equipment. Small issues like dirty coils, low refrigerant, or worn components reduce efficiency and shorten equipment life before causing noticeable problems. Preventive maintenance saves money by catching issues early and maintaining peak efficiency."
  },
  ...hvacMaintenanceQuestions,
  ...hvacWarrantyQuestions
];

export const heatingRepairCommonQuestions: CommonQuestion[] = [
  ...hvacEmergencyQuestions,
  {
    question: "Do I need heating service if I rarely use heat in Tucson?",
    answer: "Yes, even in Tucson's mild climate, your heating system should be serviced annually. Desert nights can drop below freezing, and a failed heating system during cold snaps is uncomfortable and can cause pipe freezing. Annual service ensures your system works when needed, maintains efficiency, and catches potential safety issues like cracked heat exchangers."
  },
  ...hvacWarrantyQuestions,
  ...hvacMaintenanceQuestions
];

export const heatingInstallationCommonQuestions: CommonQuestion[] = [
  {
    question: "What type of heating system is best for Tucson homes?",
    answer: "For Tucson's mild winters and extreme summers, heat pumps are often ideal as they provide both efficient heating and cooling in one system. Gas furnaces are excellent for homes with natural gas access. Electric furnaces work well for smaller homes or those without gas service. We evaluate your home's size, existing equipment, utility costs, and comfort needs to recommend the best option."
  },
  ...hvacWarrantyQuestions,
  ...hvacMaintenanceQuestions,
  ...hvacFinancingQuestions
];

export const heatingMaintenanceCommonQuestions: CommonQuestion[] = [
  {
    question: "When should I schedule heating maintenance in Tucson?",
    answer: "Schedule heating maintenance in early fall (September-October) before temperatures drop and demand increases. This timing ensures your system is ready when you need it and allows for repairs before cold weather arrives. Our technicians have more availability during fall, making scheduling easier and ensuring thorough service without rushed appointments."
  },
  ...hvacMaintenanceQuestions,
  ...hvacWarrantyQuestions
];

export const heatPumpCommonQuestions: CommonQuestion[] = [
  {
    question: "How does a heat pump work in Tucson's climate?",
    answer: "Heat pumps transfer heat rather than generate it, making them highly efficient in Tucson's moderate climate. In summer, they extract heat from indoor air and move it outside (like an AC). In winter, they reverse this process, extracting heat from outdoor air and bringing it inside. Since Tucson winters rarely drop below freezing, heat pumps operate efficiently year-round."
  },
  {
    question: "Can heat pumps keep my home cool during Tucson summers?",
    answer: "Absolutely! Modern heat pumps cool just as effectively as traditional AC systems, with many high-efficiency models specifically designed for extreme heat. In cooling mode, heat pumps function identically to air conditioners. Many Tucson homeowners choose heat pumps for their year-round versatility, energy efficiency, and reliable performance in both extreme heat and occasional cold."
  },
  ...hvacEmergencyQuestions,
  ...hvacWarrantyQuestions,
  ...hvacMaintenanceQuestions
];

export const ductworkCommonQuestions: CommonQuestion[] = [
  {
    question: "How do I know if my ductwork needs repair or replacement?",
    answer: "Signs include uneven temperatures between rooms, excessive dust, higher energy bills, visible disconnected or damaged ducts, noisy airflow, rooms that are hard to heat or cool, and musty odors from vents. In Tucson's attics, extreme heat can deteriorate duct insulation and connections over time. Professional duct inspection identifies leaks and damage not visible without accessing attic spaces."
  },
  {
    question: "Can you repair ductwork without tearing up my ceilings?",
    answer: "In most Tucson homes, ductwork is accessible through attic spaces, allowing complete repairs and sealing without touching ceilings or walls. Our technicians access ducts from above, sealing leaks and making repairs from within the attic. Only in rare cases where ducts run through inaccessible spaces or walls might minimal ceiling access be needed, which we discuss before beginning work."
  },
  ...hvacWarrantyQuestions,
  ...hvacMaintenanceQuestions
];

export const ductSealingCommonQuestions: CommonQuestion[] = [
  {
    question: "How much energy can I save with duct sealing?",
    answer: "Properly sealed ductwork typically reduces cooling costs by 15-30% in Tucson homes. Since 20-40% of conditioned air escapes through leaky ducts in many homes, sealing this waste directly improves efficiency. For a home with substantial duct leakage, savings can be even greater. Most homeowners see ROI within 2-4 years through reduced energy bills alone."
  },
  ...hvacMaintenanceQuestions,
  ...hvacWarrantyQuestions
];

export const smartThermostatCommonQuestions: CommonQuestion[] = [
  {
    question: "Is professional installation necessary for smart thermostats?",
    answer: "While some homeowners attempt DIY installation, professional installation ensures compatibility, proper wiring, and optimal configuration. Incorrect installation can damage your HVAC system, void warranties, or create safety hazards. Our technicians verify compatibility, install necessary wiring like C-wires, configure settings for maximum efficiency, and teach you how to use all features effectively."
  },
  ...hvacWarrantyQuestions
];

export const indoorAirQualityCommonQuestions: CommonQuestion[] = [
  {
    question: "How quickly will I notice improvements after installing air quality systems?",
    answer: "Most homeowners notice improvements within days. Reduced dust becomes apparent immediately, allergy and respiratory symptoms typically improve within 1-2 weeks as irritants are removed, and odors diminish quickly. Whole-home systems provide consistent results, while portable solutions show improvement only in treated rooms. Long-term benefits include better health, reduced HVAC maintenance, and improved comfort."
  },
  {
    question: "Are air quality systems safe for children and pets?",
    answer: "Yes, all our air quality solutions are completely safe for children and pets. HEPA filters mechanically trap particles with no emissions. UV light systems are contained within ductwork where humans and pets never contact them. Even ozone-free air purifiers are safe for continuous use. In fact, improved air quality particularly benefits children, elderly family members, and pets who are more sensitive to air pollutants."
  },
  ...hvacWarrantyQuestions,
  ...hvacMaintenanceQuestions
];

export const energyAuditCommonQuestions: CommonQuestion[] = [
  {
    question: "How long does a home energy audit take?",
    answer: "Comprehensive home energy audits typically take 2-4 hours depending on home size and complexity. This includes blower door testing, thermal imaging throughout the home, duct leakage testing, HVAC inspection, and detailed discussion of findings and recommendations. We provide a written report with prioritized improvements, estimated costs, and projected savings for each recommendation."
  },
  {
    question: "What should I do to prepare for an energy audit?",
    answer: "Preparation is minimal. Ensure our technicians can access your attic, garage, utility areas, and all rooms. Have recent utility bills available for review. Clear access to your HVAC equipment, water heater, and electrical panel. Turn off exhaust fans during the audit. Our technicians bring all necessary testing equipment and will explain each step of the process as they work."
  },
  ...hvacMaintenanceQuestions
];

export const ductCleaningCommonQuestions: CommonQuestion[] = [
  {
    question: "How often should ducts be cleaned in Tucson?",
    answer: "In Tucson's dusty environment, duct cleaning every 3-5 years is recommended for most homes. Homes with pets, allergies, recent remodeling, or visible dust buildup may benefit from more frequent cleaning. New homes should have ducts cleaned after construction to remove drywall dust and debris. After major dust storms or if you notice musty odors, inspection and possible cleaning is wise."
  },
  {
    question: "Will duct cleaning help with my allergies?",
    answer: "Yes, duct cleaning removes accumulated dust, pollen, pet dander, and other allergens that circulate through your home every time your HVAC runs. For maximum allergy relief, combine duct cleaning with high-efficiency filtration or whole-home air purification. Many allergy sufferers notice significant improvement after cleaning, especially when paired with regular filter changes and ongoing air quality improvements."
  },
  ...hvacWarrantyQuestions
];
