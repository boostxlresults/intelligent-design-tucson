/**
 * Septic Service FAQs
 * 
 * Centralized FAQ data for all septic-related service pages
 * Each service has minimum 11 questions for AI search optimization
 */

import { ServiceFAQs } from './types';

export const septicRepairFAQs: ServiceFAQs = {
  serviceId: 'septic-repair',
  serviceName: 'Septic Repair',
  faqs: [
    {
      question: "What are the signs that my septic system needs repair in Tucson?",
      answer: "Warning signs include slow drains throughout the house, sewage odors in the yard or home, soggy spots or unusually green grass over the drain field, sewage backups in toilets or drains, gurgling sounds from plumbing, and standing water near the septic tank. In Tucson's desert climate, these issues can escalate quickly due to extreme heat affecting bacterial action."
    },
    {
      question: "How much does septic repair cost in Tucson, Arizona?",
      answer: "Septic repair costs vary based on the type of repair needed. Simple pump replacements or baffle repairs may cost $500-$1,500, while drain field repairs can range from $2,000-$10,000. Complete system failures requiring major reconstruction may cost $10,000-$25,000. Intelligent Design provides detailed estimates after inspection so you know exactly what to expect."
    },
    {
      question: "What causes septic system failure in Tucson?",
      answer: "Common causes include lack of regular pumping (recommended every 3-5 years), flushing non-biodegradable items, excessive water use overwhelming the system, tree root intrusion from desert vegetation like mesquite and palo verde, damage from vehicles driving over the tank or drain field, and age-related deterioration. Tucson's caliche soil can also complicate drain field function."
    },
    {
      question: "Can you repair a collapsed septic tank?",
      answer: "In most cases, collapsed septic tanks require replacement rather than repair. Concrete tanks can develop cracks and structural failures over time, especially in Tucson's expansive clay soils. We'll perform a thorough inspection to determine if repair is possible or if tank replacement is the safer, more cost-effective option."
    },
    {
      question: "How long does septic repair take?",
      answer: "Simple repairs like pump replacement or baffle installation typically take 2-4 hours. Drain field repairs may take 2-3 days. Major repairs involving tank access or line replacement can take 3-5 days. We provide accurate timelines after inspection and work efficiently to minimize disruption to your household."
    },
    {
      question: "Do you handle Pima County septic permits for repairs?",
      answer: "Yes, Intelligent Design handles all Pima County Department of Environmental Quality (PDEQ) permits required for septic repairs. Major repairs and modifications require permits and inspections. Our team is experienced with local regulations and coordinates all necessary approvals, inspections, and documentation."
    },
    {
      question: "Can tree roots damage my septic system?",
      answer: "Yes, tree roots are a leading cause of septic system damage in Tucson. Desert trees like mesquite, palo verde, and mulberry have aggressive root systems that seek out moisture in septic lines and drain fields. Roots can infiltrate pipes, clog distribution lines, and damage tank walls. We can clear roots and recommend solutions to prevent future intrusion."
    },
    {
      question: "What is a drain field and can it be repaired?",
      answer: "A drain field (or leach field) is the area where wastewater from your septic tank is distributed into the soil for natural treatment. Drain fields can fail due to soil compaction, root intrusion, biomat buildup, or overloading. Repairs may include adding distribution lines, soil aeration, or installing alternative systems. Complete failure may require new drain field installation."
    },
    {
      question: "How often should I pump my septic tank to avoid repairs?",
      answer: "Most septic tanks should be pumped every 3-5 years, depending on household size and tank capacity. Regular pumping prevents solids from overflowing into the drain field, which is the most expensive component to repair. In Tucson's heat, bacterial action can be affected, making regular pumping even more important."
    },
    {
      question: "Do you offer emergency septic repair services?",
      answer: "Yes, Intelligent Design offers emergency septic repair services for sewage backups and system failures. Septic emergencies pose health risks and require immediate attention. Our technicians respond quickly with the equipment needed to diagnose problems and provide emergency repairs or pumping to restore function."
    },
    {
      question: "What warranty do you provide on septic repairs?",
      answer: "We stand behind our septic repair work with comprehensive warranties. Parts and equipment carry manufacturer warranties, and our labor is guaranteed. Specific warranty terms vary by repair type and are explained clearly before work begins. We're committed to your long-term satisfaction."
    }
  ]
};

export const septicInstallationFAQs: ServiceFAQs = {
  serviceId: 'septic-tank-installation',
  serviceName: 'Septic Tank Installation',
  faqs: [
    {
      question: "How much does septic tank installation cost in Tucson?",
      answer: "Septic tank installation in Tucson typically costs $8,000-$25,000 depending on tank size, type (concrete, fiberglass, or plastic), soil conditions, drain field requirements, and property accessibility. Tucson's caliche soil often requires additional excavation work. We provide detailed estimates after site evaluation and soil testing."
    },
    {
      question: "What size septic tank do I need for my Tucson home?",
      answer: "Septic tank size is based on the number of bedrooms and expected daily water usage. A 2-bedroom home typically needs a 750-1,000 gallon tank, 3-bedroom homes need 1,000-1,250 gallons, and 4+ bedroom homes need 1,250-1,500+ gallons. Pima County regulations specify minimum sizes, and we help you select the right capacity for your household."
    },
    {
      question: "How long does septic tank installation take?",
      answer: "Complete septic system installation typically takes 3-7 days, depending on soil conditions, system complexity, and weather. This includes site preparation, excavation, tank installation, drain field construction, piping connections, and backfilling. Pima County inspections are scheduled at key stages throughout the process."
    },
    {
      question: "What permits are required for septic installation in Pima County?",
      answer: "Septic installation in Pima County requires permits from the Pima County Department of Environmental Quality (PDEQ). Requirements include site evaluation, soil percolation testing, system design approval, and inspections during installation. Intelligent Design handles all permitting, testing, and inspections as part of our installation service."
    },
    {
      question: "What type of septic tank is best for Tucson's desert climate?",
      answer: "Concrete tanks are the most popular in Tucson due to durability and resistance to ground shifting. Fiberglass tanks are lightweight and resist corrosion. Plastic (polyethylene) tanks are economical and easy to install. The best choice depends on your property, soil conditions, budget, and local regulations. We'll recommend the optimal option for your situation."
    },
    {
      question: "Does Tucson's caliche soil affect septic installation?",
      answer: "Yes, Tucson's caliche (hardpan) soil significantly impacts septic installation. Caliche is a calcium carbite layer that doesn't absorb water well, affecting drain field function. Special excavation equipment may be needed, and alternative drain field designs or soil amendments may be required. Site evaluation and percolation testing determine the best approach for your property."
    },
    {
      question: "What is a percolation test and why is it required?",
      answer: "A percolation (perc) test measures how quickly water drains through soil, determining if your property can support a conventional septic system. Pima County requires perc tests before approving septic permits. Results determine drain field size and design. Our team conducts professional perc tests as part of the site evaluation process."
    },
    {
      question: "Can I install a septic system on any property in Tucson?",
      answer: "Not all properties are suitable for conventional septic systems. Factors include soil type, percolation rate, water table depth, lot size, setback requirements from wells and property lines, and slope. Some properties may require alternative systems. Pima County regulations determine approval. We evaluate your property to determine feasibility and options."
    },
    {
      question: "How far must septic tanks be from wells and property lines?",
      answer: "Pima County requires minimum setbacks: typically 100 feet from wells, 5-10 feet from property lines, and specific distances from structures, pools, and water features. Drain fields have additional setback requirements. These distances vary based on soil type and local regulations. We ensure your installation meets all setback requirements."
    },
    {
      question: "Do you install alternative septic systems?",
      answer: "Yes, we install alternative septic systems for properties where conventional systems aren't feasible. Options include aerobic treatment units (ATUs), mound systems, drip irrigation systems, and sand filter systems. Alternative systems may be required due to poor soil percolation, high water tables, or small lot sizes. Pima County permits are required."
    },
    {
      question: "What maintenance is required after septic installation?",
      answer: "Regular maintenance includes pumping every 3-5 years, avoiding flushing non-biodegradable items, conserving water to prevent system overload, keeping vehicles off the drain field, and avoiding planting trees near the system. We provide maintenance guidelines and offer ongoing service to protect your investment."
    }
  ]
};

export const septicReplacementFAQs: ServiceFAQs = {
  serviceId: 'septic-tank-replacement',
  serviceName: 'Septic Tank Replacement',
  faqs: [
    {
      question: "When should I replace my septic tank instead of repairing it?",
      answer: "Replacement is typically needed when the tank has structural damage like collapsed walls or severe cracks, when the tank is undersized for your household, when concrete tanks have significant deterioration, or when the system is 30+ years old and experiencing frequent failures. After inspection, we'll provide honest recommendations on repair vs. replacement."
    },
    {
      question: "How much does septic tank replacement cost in Tucson?",
      answer: "Septic tank replacement in Tucson typically costs $5,000-$15,000 for the tank and installation. Costs vary based on tank size, type, accessibility, whether the drain field also needs replacement, and soil conditions. Complete system replacement including drain field ranges from $15,000-$30,000. We provide detailed estimates after inspection."
    },
    {
      question: "How long does septic tank replacement take?",
      answer: "Tank-only replacement typically takes 2-3 days including excavation, old tank removal, new tank installation, connections, and backfilling. Complete system replacement including drain field takes 4-7 days. We coordinate Pima County inspections and work efficiently to restore your system quickly."
    },
    {
      question: "Do I need a permit to replace my septic tank in Pima County?",
      answer: "Yes, septic tank replacement in Pima County requires permits from the Pima County Department of Environmental Quality (PDEQ). Like-for-like tank replacement follows a specific permit process, while system upgrades or modifications may require additional approvals. Intelligent Design handles all permitting and inspections."
    },
    {
      question: "Can I upgrade to a larger septic tank during replacement?",
      answer: "Yes, replacement is an ideal time to upgrade tank size if your household has grown or you're experiencing capacity issues. Larger tanks require Pima County approval and may require drain field modifications. We evaluate your needs and obtain necessary permits for tank upgrades."
    },
    {
      question: "What happens to the old septic tank during replacement?",
      answer: "Old septic tanks are pumped, then either crushed in place and filled with clean fill material, or excavated and removed. Pima County has specific requirements for tank abandonment. Removal and proper disposal of old tanks is included in our replacement service, with all work meeting county regulations."
    },
    {
      question: "Will I need to replace my drain field when replacing the tank?",
      answer: "Not always. If the drain field is functioning properly and the new tank is similar in size, the existing drain field may continue to work well. However, if you're upgrading tank size significantly or the drain field shows signs of failure, replacement may be recommended. Inspection determines drain field condition."
    },
    {
      question: "What type of replacement tank should I choose?",
      answer: "Concrete tanks are most durable and common in Tucson. Fiberglass tanks resist corrosion and are lighter for installation. Plastic tanks are economical. Tank type depends on your property, soil conditions, accessibility, and budget. We'll recommend the best option based on your specific situation and long-term needs."
    },
    {
      question: "How long do new septic tanks last?",
      answer: "Modern septic tanks last 20-40+ years with proper maintenance. Concrete tanks typically last 30-40 years, fiberglass 25-30 years, and quality plastic tanks 20-30 years. Regular pumping, avoiding system abuse, and protecting the tank from vehicle traffic extend lifespan. We provide maintenance guidance to maximize your investment."
    },
    {
      question: "Can I replace just part of my septic system?",
      answer: "Yes, we can replace individual components like the tank, distribution box, or portions of the drain field without complete system replacement. This targeted approach is cost-effective when some components are still functioning. After thorough inspection, we recommend the most economical solution for your situation."
    },
    {
      question: "Do you offer financing for septic tank replacement?",
      answer: "Yes, we offer flexible financing options for septic tank replacement and system upgrades with approved credit. We understand that septic replacement is a significant expense. Our team can explain available financing options during your free estimate to help you manage the investment."
    }
  ]
};

export const septicPermittingFAQs: ServiceFAQs = {
  serviceId: 'septic-permitting',
  serviceName: 'Septic Permitting',
  faqs: [
    {
      question: "What septic permits are required in Pima County, Arizona?",
      answer: "Pima County requires permits from the Department of Environmental Quality (PDEQ) for new septic installations, major repairs, tank replacement, and system modifications. Permits ensure systems meet health and environmental standards. The permit process includes site evaluation, soil testing, system design review, and inspections during construction."
    },
    {
      question: "How long does the septic permitting process take in Pima County?",
      answer: "The complete permitting process typically takes 2-6 weeks depending on permit type and site complexity. Initial application review takes 1-2 weeks, soil testing results take 3-5 days, and design approval takes 1-2 weeks. Intelligent Design manages the entire process to minimize delays and keep your project on schedule."
    },
    {
      question: "What is involved in a septic site evaluation?",
      answer: "Site evaluation includes assessing lot size, topography, soil type, depth to groundwater, setback requirements from wells and property lines, and potential drain field locations. We conduct professional site evaluations that meet Pima County requirements, identifying the best location and system type for your property."
    },
    {
      question: "What is a percolation test and when is it required?",
      answer: "A percolation (perc) test measures how quickly water absorbs into soil, determining if conventional septic systems are feasible and sizing drain fields correctly. Pima County requires perc tests for new installations and major modifications. Our team conducts certified perc tests as part of the permitting process."
    },
    {
      question: "Can you help with septic permits for new construction in Tucson?",
      answer: "Yes, we provide complete septic permitting services for new construction projects throughout Pima County. We coordinate with builders and Pima County PDEQ, conducting site evaluations, soil testing, system design, permit applications, and required inspections. Our experience ensures smooth permitting for new home projects."
    },
    {
      question: "What if my property doesn't pass the percolation test?",
      answer: "If standard perc tests fail, alternative options include deeper soil testing, alternative system designs (mound systems, aerobic treatment units, drip irrigation systems), or engineered solutions. Pima County allows various alternative systems when conventional septic isn't feasible. We evaluate all options and recommend the most practical solution."
    },
    {
      question: "Do I need a permit to repair my existing septic system?",
      answer: "Minor repairs like pump replacement or tank lid repair typically don't require permits. Major repairs involving tank replacement, drain field work, or system modifications require Pima County permits. We determine permit requirements during inspection and handle all necessary applications for major repairs."
    },
    {
      question: "What inspections are required during septic installation?",
      answer: "Pima County requires inspections at key stages: after excavation and before tank placement, after tank installation and piping connections, and after drain field installation before backfilling. Our installation process includes scheduling and coordinating all required inspections to ensure code compliance."
    },
    {
      question: "How much do septic permits cost in Pima County?",
      answer: "Pima County septic permit fees vary by project type. New installation permits typically range from $500-$1,500 depending on system complexity. Repair and modification permits are generally $200-$500. Site evaluation and perc testing fees are additional. We include permit costs in our project estimates for transparency."
    },
    {
      question: "What documentation is needed for septic permit applications?",
      answer: "Required documentation includes property survey or site plan, soil test results, system design drawings, setback verification, well location (if applicable), and property ownership verification. Intelligent Design prepares and submits all required documentation, ensuring complete applications that avoid delays."
    },
    {
      question: "Do you handle permits for septic-to-sewer conversions?",
      answer: "Yes, we handle permits for septic-to-sewer conversions when municipal sewer becomes available. This includes septic system abandonment permits, sewer connection permits, and proper tank decommissioning according to Pima County requirements. We coordinate with both the county and utility providers for smooth transitions."
    }
  ]
};
