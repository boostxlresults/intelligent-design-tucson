import { CommonQuestion } from '@/components/content/CommonQuestions';

// Common questions for solar services
export const solarGeneralQuestions: CommonQuestion[] = [
  {
    question: "Is solar worth it in Tucson?",
    answer: "Absolutely! Tucson receives over 350 days of sunshine annually, making it one of the best locations in the country for solar. With high electricity rates, abundant sun, significant tax incentives, and net metering from utilities, most Tucson homeowners see ROI within 6-10 years. Solar systems last 25-30+ years, providing decades of free electricity after payback and protecting against rising utility rates."
  },
  {
    question: "How much can solar panels save on my electric bill?",
    answer: "Most Tucson homes with properly sized solar systems reduce electricity bills by 70-100%. Homes with high summer cooling costs see the most dramatic savings. With net metering, excess solar production during the day offsets evening usage, potentially eliminating electricity bills entirely. The exact savings depend on your usage patterns, system size, roof orientation, and available solar incentives."
  }
];

export const solarWarrantyQuestions: CommonQuestion[] = [
  {
    question: "What warranties come with solar panel installation?",
    answer: "Solar systems include multiple warranties: solar panel manufacturers provide 25-year performance warranties and 10-15 year product warranties, inverter manufacturers provide 10-25 year warranties (depending on type), and installation workmanship is typically covered for 5-10 years. As a licensed solar contractor (ROC 276673) with over 45 years in business, we stand behind all installations and help you navigate any warranty claims."
  }
];

export const solarFinancingQuestions: CommonQuestion[] = [
  {
    question: "What solar incentives and rebates are available in Tucson?",
    answer: "Current solar incentives include the federal Investment Tax Credit (ITC) providing 30% tax credit through 2032, accelerated depreciation for businesses (MACRS), Tucson Electric Power and Southwest Gas rebates and credits, and net metering allowing you to sell excess power back to utilities at retail rates. These combined incentives significantly improve solar ROI and reduce payback periods. We help you identify and apply for all available incentives."
  },
  {
    question: "Do you offer financing for solar installations?",
    answer: "Yes, we offer multiple financing options including solar loans with competitive rates, lease programs with zero upfront costs, and power purchase agreements (PPAs). Many homeowners choose solar loans to capture the full 30% federal tax credit while spreading costs over time. We help you evaluate options to find the best fit for your budget and financial goals."
  }
];

export const solarMaintenanceQuestions: CommonQuestion[] = [
  {
    question: "Do solar panels need maintenance in Tucson?",
    answer: "Solar panels are low-maintenance but benefit from periodic cleaning and inspection. In Tucson's dusty environment, dust storms and monsoon season can deposit dust, pollen, and debris that reduce efficiency by 15-25%. Annual professional cleaning restores full performance. We also inspect electrical connections, check inverter operation, verify monitoring systems, and ensure all components function properly. Regular maintenance protects your investment and maximizes energy production."
  }
];

// Residential solar questions
export const residentialSolarCommonQuestions: CommonQuestion[] = [
  {
    question: "Will solar panels work during monsoon season and cloudy days?",
    answer: "Yes, modern solar panels generate electricity even on cloudy days, though at reduced output (typically 10-25% of sunny day production). During monsoons and winter, batteries or grid connection provide power when needed. Tucson's 350+ sunny days per year mean annual production far exceeds consumption in most cases. Net metering credits excess summer production against lower winter production, balancing your energy needs year-round."
  },
  {
    question: "How long does residential solar installation take?",
    answer: "Most residential solar installations take 1-3 days depending on system size and roof complexity. The complete process from initial consultation to activation typically takes 6-12 weeks, including design, permitting, utility interconnection approval, installation, and inspection. We handle all permitting, utility coordination, and inspections to make the process smooth and hassle-free."
  },
  ...solarGeneralQuestions,
  ...solarWarrantyQuestions,
  ...solarFinancingQuestions,
  ...solarMaintenanceQuestions
];

// Commercial solar questions
export const commercialSolarCommonQuestions: CommonQuestion[] = [
  {
    question: "What are the benefits of commercial solar in Tucson?",
    answer: "Commercial solar provides immediate operating cost reduction, protection against rising utility rates, enhanced corporate sustainability image, significant tax benefits including 30% ITC and accelerated depreciation, increased property value, and predictable energy costs for budgeting. Tucson's abundant sunshine and high commercial electricity rates make solar particularly attractive for businesses, with many seeing ROI within 5-8 years."
  },
  {
    question: "Can solar power my entire business?",
    answer: "Many Tucson businesses can offset 70-100% of electricity usage with appropriately sized solar systems. Factors include available roof or ground space, roof orientation and condition, electrical usage patterns, and budget. Businesses with daytime operations benefit most as production aligns with consumption. Energy storage can shift solar production to evening hours if needed. We design systems optimized for your specific usage and goals."
  },
  ...solarWarrantyQuestions,
  ...solarFinancingQuestions,
  ...solarMaintenanceQuestions
];

// Solar + AC integration questions
export const solarACCommonQuestions: CommonQuestion[] = [
  {
    question: "Can solar panels power my air conditioning?",
    answer: "Yes, solar is ideal for powering AC in Tucson homes. AC usage peaks during sunny daytime hours when solar production is highest, creating perfect alignment. A properly sized solar system can offset 100% of AC costs. Some homeowners upgrade to more efficient AC systems when adding solar, maximizing savings. The combination of solar and efficient AC can reduce overall energy costs by 60-80% or more."
  },
  {
    question: "Should I upgrade my AC before or after installing solar?",
    answer: "We generally recommend upgrading to high-efficiency AC before installing solar. New high-efficiency systems use 30-50% less electricity, allowing smaller (less expensive) solar systems to meet your needs. This approach maximizes total savings and ROI. However, if your AC is relatively new, solar installation can proceed first. We evaluate your specific situation to recommend the optimal sequence."
  },
  ...solarWarrantyQuestions,
  ...solarFinancingQuestions
];

// Solar maintenance questions (standalone)
export const solarMaintenanceAloneCommonQuestions: CommonQuestion[] = [
  {
    question: "How do I know if my solar panels need cleaning?",
    answer: "Signs include visible dust, pollen, or bird droppings on panels, reduced energy production compared to previous months (check monitoring systems), and panels that haven't been cleaned in 6-12 months. In Tucson's dusty climate with haboobs and monsoon dust, panels typically need cleaning 1-2 times per year. Clean panels produce 15-25% more energy than dirty ones, making professional cleaning a valuable investment."
  },
  {
    question: "Can I clean solar panels myself?",
    answer: "While possible, we don't recommend DIY solar panel cleaning. Safety risks include working on roofs in extreme heat, potential for falling, and risk of damaging panels with improper techniques or equipment. Using incorrect cleaning methods, harsh chemicals, or high-pressure washing can damage panels and void warranties. Professional cleaning ensures safety, uses proper techniques and equipment, and protects your warranty while maximizing panel performance."
  },
  ...solarMaintenanceQuestions,
  ...solarWarrantyQuestions
];

// Solar general questions
export const solarCostsCommonQuestions: CommonQuestion[] = [
  {
    question: "What factors affect solar installation costs?",
    answer: "Solar installation costs depend on system size (kilowatts needed), roof type and condition, roof pitch and accessibility, electrical upgrades needed, permit and interconnection fees, equipment quality selected (panels, inverters, batteries), and installation complexity. Larger systems cost more but provide better per-watt pricing. We provide detailed estimates showing all costs, available incentives, projected savings, and expected ROI for complete transparency."
  },
  ...solarGeneralQuestions,
  ...solarWarrantyQuestions,
  ...solarFinancingQuestions
];

export const solarTaxCreditsCommonQuestions: CommonQuestion[] = [
  {
    question: "How does the federal solar tax credit work?",
    answer: "The federal Investment Tax Credit (ITC) provides a 30% tax credit on total solar installation costs through 2032, then steps down to 26% in 2033 and 22% in 2034. This credit reduces your federal income tax liability dollar-for-dollar. For example, if your system costs $20,000, you receive a $6,000 tax credit. The credit has no cap and can be carried forward if it exceeds your tax liability in the installation year."
  },
  {
    question: "What other incentives exist besides the federal tax credit?",
    answer: "Additional incentives include utility company rebates and credits, accelerated depreciation for commercial installations (MACRS), net metering programs allowing you to sell excess power, property tax exemptions in some areas, and potential state/local incentives. These combined incentives can reduce total solar costs by 40-50% or more. We stay current on all available programs and help you maximize your incentive benefits."
  },
  ...solarFinancingQuestions,
  ...solarWarrantyQuestions
];
