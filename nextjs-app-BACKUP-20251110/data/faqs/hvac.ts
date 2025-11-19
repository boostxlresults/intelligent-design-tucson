/**
 * HVAC Service FAQs
 * 
 * Centralized FAQ data for all HVAC-related service pages
 * Each service should have minimum 11 questions for AI search optimization
 */

import { ServiceFAQs } from './types';

export const acRepairFAQs: ServiceFAQs = {
  serviceId: 'ac-repair',
  serviceName: 'AC Repair',
  faqs: [
    {
      question: "Why is my air conditioner not working?",
      answer: "Common reasons include power issues (tripped breaker or blown fuse), dirt and ice buildup blocking airflow, low refrigerant levels due to leaks, clogged air filters, or faulty components. In Tucson's extreme heat, AC units running nonstop may experience these issues more frequently."
    },
    {
      question: "Do you offer 24/7 emergency AC repair in Tucson?",
      answer: "Yes, Intelligent Design offers 24/7 emergency AC repair services in Tucson and surrounding areas. We understand that AC breakdowns can be more than inconvenient in Arizona's heat—they can be dangerous. Our skilled technicians are always ready to respond with rapid response times."
    },
    {
      question: "How quickly can you respond to an emergency AC repair call in Tucson?",
      answer: "We prioritize emergency AC repair calls and typically respond within 1-2 hours in the greater Tucson area. Our technicians are strategically located throughout Tucson, Oro Valley, Marana, and surrounding communities to ensure fast response times when you need us most."
    },
    {
      question: "How can I avoid emergency AC repairs?",
      answer: "The best way to reduce your chances of an HVAC emergency is by scheduling regular air conditioning maintenance. Seasonal maintenance checks for clogs, faulty components, and leaks to ensure your system runs at peak efficiency. Intelligent Design offers comprehensive maintenance plans with many benefits."
    },
    {
      question: "Do you provide AC repair in Oro Valley, Marana, and other Tucson suburbs?",
      answer: "Absolutely! We proudly serve all of greater Tucson, including Oro Valley, Marana, Catalina, Vail, Sahuarita, and Green Valley. Our service area covers the entire metropolitan region, and we maintain the same fast response times and quality service across all neighborhoods we serve."
    },
    {
      question: "What should I expect when I call for AC repair?",
      answer: "When you call Intelligent Design, our technicians will determine if you need emergency service or if the issue can wait. Upon arrival, we assess the indoor AC unit, ventilation, and thermostat to identify the problem. We check refrigerant levels, look for leaks, and provide clear explanations and repair options. Our goal is to resolve the issue correctly the first time."
    },
    {
      question: "How experienced are your AC repair technicians?",
      answer: "Our HVAC technicians average about 17 years of experience each and have seen all types of AC system issues. They continuously train on new HVAC technology and follow industry best practices. We're a BBB A+ rated company with over 22,000 five-star reviews and a 4.97 rating."
    },
    {
      question: "What are the most common AC problems in Tucson's climate?",
      answer: "In Tucson's extreme desert heat, the most common AC issues include refrigerant leaks from constant use, clogged condensate drains from high humidity during monsoon season, frozen evaporator coils from poor airflow, and compressor failures from overwork. Regular maintenance helps prevent these climate-specific problems."
    },
    {
      question: "Should I repair or replace my AC unit?",
      answer: "If your AC unit is more than 10 years old and requires significant repairs, replacement may be more cost-effective long-term. Our technicians will provide honest recommendations based on your system's condition, repair costs, and energy efficiency considerations. We can help you choose the right replacement unit if needed."
    },
    {
      question: "What factors affect AC repair costs?",
      answer: "AC repair costs vary based on the complexity of the issue, parts needed, time required, and system age. Simple repairs like capacitor or thermostat replacements are less expensive than major component work such as compressor or evaporator coil replacement. We always provide transparent, upfront pricing before any work begins, so you'll know exactly what to expect with no hidden fees or surprises. We explain all options clearly so you can make informed decisions."
    },
    {
      question: "What brands of AC units do you repair?",
      answer: "We repair all major AC brands including Carrier, Trane, Lennox, Goodman, Rheem, York, Amana, and more. Our technicians are factory-trained on multiple brands and have the expertise to diagnose and repair any system. Whether you have a residential or commercial unit, we can help."
    }
  ]
};

export const acInstallationFAQs: ServiceFAQs = {
  serviceId: 'ac-installation',
  serviceName: 'AC Installation',
  faqs: [
    {
      question: "How do I know what size AC unit I need for my Tucson home?",
      answer: "Proper AC sizing depends on your home's square footage, insulation quality, number of windows, ceiling height, and Arizona's climate demands. Our technicians perform a detailed load calculation using industry-standard methods to ensure your new system is perfectly sized. An oversized or undersized unit will cost you money and comfort."
    },
    {
      question: "How long does AC installation take in Tucson?",
      answer: "Most residential AC installations take 1-2 days depending on the complexity of the job. Straightforward replacements with existing ductwork typically take one full day. New installations with duct modifications or electrical upgrades may require two days. We'll provide a precise timeline during your free estimate."
    },
    {
      question: "What's the best time of year to replace my AC in Tucson?",
      answer: "The best time to install a new AC in Tucson is during spring (March-April) or fall (October-November) when temperatures are moderate and demand is lower. You'll often find better availability, competitive pricing, and avoid the stress of replacement during peak summer heat. However, we offer year-round installation with minimal wait times."
    },
    {
      question: "Do you offer financing for AC installation?",
      answer: "Yes, we offer flexible financing options for AC installation with approved credit. We partner with leading lenders to provide competitive rates and manageable monthly payments. Many customers take advantage of special promotional financing offers with low or zero interest for qualified buyers."
    },
    {
      question: "What AC brands do you install?",
      answer: "We install top-rated AC brands including Carrier, Trane, Lennox, Goodman, Rheem, and York. Each brand offers different features, efficiency levels, and price points. Our expert technicians will help you choose the best brand and model for your home, budget, and cooling needs."
    },
    {
      question: "Will a new AC lower my energy bills?",
      answer: "Yes, modern high-efficiency AC systems can reduce your cooling costs by 20-40% compared to older units. Systems with SEER ratings of 16 or higher are significantly more efficient than older 8-10 SEER units. In Tucson's climate where AC runs heavily, the energy savings can be substantial and often pay for themselves over time."
    },
    {
      question: "Do you handle permits and inspections for AC installation?",
      answer: "Absolutely! We handle all necessary permits and coordinate required inspections with Tucson authorities. Our team is fully licensed (ROC 340962, 322375, 296386, 276673) and ensures every installation meets all local building codes and manufacturer specifications for warranty compliance."
    },
    {
      question: "What warranty comes with a new AC installation?",
      answer: "New AC installations typically include manufacturer warranties on parts (5-10 years depending on the brand) and compressor warranties (up to 10 years). We also provide a workmanship warranty on our installation labor. Extended warranty options are available for additional peace of mind."
    },
    {
      question: "Can you install a new AC unit if my ductwork is old?",
      answer: "Yes, we can install a new AC with existing ductwork if it's in good condition. During our pre-installation assessment, we'll inspect your ducts for leaks, damage, or inefficiencies. If modifications or replacement are needed, we'll provide honest recommendations and competitive pricing for duct repair or upgrade."
    },
    {
      question: "Do you remove and dispose of my old AC unit?",
      answer: "Yes, removal and proper disposal of your old AC unit is included in our installation service. We handle all aspects of the removal process safely and in compliance with environmental regulations. We'll also haul away any old equipment and leave your property clean."
    },
    {
      question: "What makes Intelligent Design the best choice for AC installation in Tucson?",
      answer: "With over 45 years serving Tucson and 22,000+ five-star reviews, we combine expertise, transparency, and quality workmanship. We're family and veteran-owned, BBB A+ rated, and offer upfront pricing with no hidden fees. Our technicians average 17 years of experience, and we stand behind every installation with comprehensive warranties."
    }
  ]
};

export const acServiceFAQs: ServiceFAQs = {
  serviceId: 'ac-service',
  serviceName: 'AC Service',
  faqs: [
    {
      question: "What's included in an AC service appointment?",
      answer: "Our comprehensive AC service includes a complete system inspection, cleaning of coils and components, refrigerant level check and adjustment, air filter replacement, thermostat calibration, and electrical connection inspection. We also check condensate drains, measure airflow, and test system performance to ensure peak efficiency."
    },
    {
      question: "How often should I have my AC serviced in Tucson?",
      answer: "In Tucson's extreme climate, we recommend AC service twice a year—once in spring before the hot season and once in fall. Regular maintenance prevents breakdowns during peak summer heat, improves energy efficiency by up to 15%, and extends your system's lifespan by several years."
    },
    {
      question: "What's included in the cost of AC service?",
      answer: "Our comprehensive AC service includes complete system inspection, coil cleaning, refrigerant level check and adjustment, air filter replacement, thermostat calibration, electrical connection testing, condensate drain cleaning, and performance verification. We offer preventive maintenance plans that include regular service visits at discounted rates with priority scheduling and repair discounts. We always provide transparent, upfront pricing before any work begins, with no hidden fees."
    },
    {
      question: "Can AC service prevent expensive repairs?",
      answer: "Yes, regular AC service can prevent up to 95% of emergency breakdowns and expensive repairs. During service visits, we catch small issues before they become major problems—like worn belts, dirty coils, or low refrigerant. This proactive approach saves you money and prevents inconvenient breakdowns during Arizona's hottest days."
    },
    {
      question: "What if you find a problem during AC service?",
      answer: "If we discover any issues during your AC service, we'll explain the problem clearly and provide transparent repair options with upfront pricing. We never pressure you into unnecessary repairs—we simply present the facts and let you decide. Many minor issues can be addressed during the same visit."
    },
    {
      question: "Do I really need AC service if my system seems fine?",
      answer: "Yes, even if your AC appears to be working fine, hidden issues like dirty coils, low refrigerant, or worn components can reduce efficiency and lead to premature failure. Regular service ensures optimal performance, lower energy bills, and extends your system's lifespan. Prevention is always cheaper than emergency repairs."
    },
    {
      question: "How long does an AC service appointment take?",
      answer: "A thorough AC service typically takes 60-90 minutes depending on your system's size and condition. Our technicians work efficiently while being meticulous in their inspection. We'll provide an estimated time when scheduling your appointment."
    },
    {
      question: "Do you offer AC service plans or maintenance agreements?",
      answer: "Yes, we offer comprehensive preventive maintenance plans that include regular AC service visits, priority scheduling, discounts on repairs, and extended warranties. These plans are designed to keep your system running efficiently year-round while saving you money on unexpected repairs."
    },
    {
      question: "Will AC service improve my indoor air quality?",
      answer: "Yes, AC service improves indoor air quality by cleaning coils, replacing dirty filters, and removing dust and debris from the system. We also clean condensate drains that can harbor mold and bacteria. Improved air quality is especially important in Tucson where AC runs frequently."
    },
    {
      question: "What's the difference between AC service and AC tune-up?",
      answer: "AC service and AC tune-up are often used interchangeably and involve similar tasks—comprehensive inspection, cleaning, and optimization of your system. Our service includes checking refrigerant levels, cleaning coils, replacing filters, and testing all components to ensure peak performance and efficiency."
    },
    {
      question: "Do you service all AC brands and models?",
      answer: "Yes, we service all major AC brands including Carrier, Trane, Lennox, Goodman, Rheem, York, Amana, and more. Our technicians are factory-trained on multiple brands and equipped to service residential and commercial systems of all ages. Whether your unit is brand new or decades old, we can maintain it properly."
    }
  ]
};

export const acTuneupFAQs: ServiceFAQs = {
  serviceId: 'ac-tuneup',
  serviceName: 'AC Tune-Up',
  faqs: [
    {
      question: "What's included in Intelligent Design's 86-point AC tune-up?",
      answer: "Our comprehensive 86-point tune-up includes full system inspection, coil cleaning, refrigerant level check, air filter replacement, thermostat calibration, electrical connection testing, condensate drain cleaning, airflow measurement, motor lubrication, and detailed performance testing. We inspect every component to ensure optimal efficiency and reliability."
    },
    {
      question: "How is an 86-point tune-up different from a basic AC service?",
      answer: "Our 86-point tune-up is more comprehensive than basic service, covering every system component with precision testing and measurement. While basic service might check major components, our tune-up includes detailed inspection of electrical connections, refrigerant levels, airflow dynamics, safety controls, and performance optimization that goes well beyond standard maintenance."
    },
    {
      question: "When should I schedule my AC tune-up in Tucson?",
      answer: "The ideal time for AC tune-up in Tucson is early spring (March-April) before temperatures soar. This ensures your system is ready for the intense summer heat. We also recommend a fall tune-up (September-October) to prepare for mild winter use and catch any issues from summer wear and tear."
    },
    {
      question: "How long does an 86-point AC tune-up take?",
      answer: "Our comprehensive 86-point tune-up typically takes 90-120 minutes depending on your system's size and condition. We don't rush through the inspection—our technicians methodically check every component to ensure nothing is missed. Quality thorough service takes time, and we believe your comfort and safety are worth it."
    },
    {
      question: "Will an AC tune-up lower my energy bills?",
      answer: "Yes, a properly tuned AC can reduce energy consumption by 15-20% compared to a neglected system. Clean coils, proper refrigerant levels, calibrated thermostats, and optimized airflow all contribute to improved efficiency. In Tucson where AC runs 6-8 months per year, the savings add up quickly."
    },
    {
      question: "Can a tune-up extend my AC's lifespan?",
      answer: "Absolutely. Regular tune-ups can extend your AC's lifespan by 5-10 years beyond the typical 12-15 year expectancy. By catching wear early, keeping components clean, and maintaining proper refrigerant levels, you prevent the cascading failures that often lead to premature system replacement."
    },
    {
      question: "What if your tune-up discovers a repair need?",
      answer: "If we discover any issues during your tune-up, we'll explain the problem clearly and provide transparent repair options with upfront pricing. We prioritize repairs by urgency and safety, so you understand what needs immediate attention versus what can wait. You're never pressured into unnecessary work."
    },
    {
      question: "Do you offer tune-up plans or maintenance agreements?",
      answer: "Yes, our preventive maintenance plans include regular tune-up visits at discounted rates, along with priority scheduling, repair discounts, and extended warranties. These plans ensure your AC receives expert care year-round while saving you money on both maintenance and unexpected repairs."
    },
    {
      question: "What value does an 86-point AC tune-up provide?",
      answer: "Our 86-point tune-up provides exceptional value through comprehensive service that prevents costly breakdowns, improves energy efficiency, and extends equipment life. The service includes detailed inspection and optimization of every system component, performance testing, and early problem detection. Maintenance plan members receive significant discounts along with priority scheduling and repair discounts. Contact us for current pricing and seasonal promotions."
    },
    {
      question: "Is a tune-up worth it if my AC seems to be working fine?",
      answer: "Yes, tune-ups catch hidden issues before they cause breakdowns. Many AC problems develop gradually—dirty coils reduce efficiency, refrigerant slowly leaks, electrical connections loosen over time. By the time you notice symptoms, damage may be done. Regular tune-ups prevent these issues and save money long-term."
    },
    {
      question: "Do you tune up all AC brands and types?",
      answer: "Yes, we tune up all major AC brands including Carrier, Trane, Lennox, Goodman, Rheem, York, and more. Our technicians are trained on central air systems, heat pumps, ductless mini-splits, and commercial units. Whether your system is new or decades old, we have the expertise to optimize its performance."
    }
  ]
};

export const ductlessMiniSplitRepairFAQs: ServiceFAQs = {
  serviceId: 'ductless-mini-split-repair',
  serviceName: 'Ductless Mini Split Repair',
  faqs: [
    {
      question: "What are the most common ductless mini split problems in Tucson?",
      answer: "Common ductless mini split issues in Tucson's climate include refrigerant leaks from constant use, drainage problems from dust buildup, remote control malfunctions, dirty filters restricting airflow, frozen coils from poor maintenance, and compressor failures. Regular cleaning and maintenance prevent most of these issues."
    },
    {
      question: "How quickly can you repair my ductless mini split system?",
      answer: "We offer same-day and emergency ductless mini split repair services in Tucson. Most repairs are completed within 1-2 hours of our technician arriving. We stock common replacement parts on our service vehicles to minimize downtime and get your system running quickly."
    },
    {
      question: "Do you repair all ductless mini split brands?",
      answer: "Yes, we repair all major ductless mini split brands including Mitsubishi, Daikin, Fujitsu, LG, Carrier, and more. Our technicians are factory-trained on multiple brands and have the diagnostic tools and expertise to identify and fix issues with any system."
    },
    {
      question: "What factors affect ductless mini split repair costs?",
      answer: "Repair costs depend on the specific issue, parts required, and labor complexity. Simple maintenance like filter cleaning or remote troubleshooting is minimal, while component replacements like refrigerant leak repairs or compressor work are more involved. We always provide transparent, upfront pricing before any work begins. We'll explain all repair options and their benefits so you can make the best decision for your situation."
    },
    {
      question: "Can you repair just one zone of my multi-zone system?",
      answer: "Yes, we can repair individual zones in a multi-zone ductless system. Each indoor unit operates independently, so issues with one zone typically don't affect others. We'll diagnose the specific problem with the affected zone and provide repair options without disrupting your other working units."
    },
    {
      question: "Should I repair or replace my ductless mini split?",
      answer: "If your system is less than 10 years old and the repair cost is under 50% of replacement value, repair is usually the best option. Systems older than 12 years with major component failures may be better replaced with newer, more efficient models. We'll provide honest recommendations based on your specific situation."
    },
    {
      question: "Why is my ductless mini split leaking water?",
      answer: "Water leakage is typically caused by a clogged condensate drain line, which is common in Tucson's dusty environment. Other causes include dirty air filters restricting airflow, frozen coils, or improper installation. Our technicians can quickly diagnose and fix the drainage issue to prevent water damage."
    },
    {
      question: "My ductless unit isn't cooling properly. What's wrong?",
      answer: "Poor cooling can result from dirty filters, low refrigerant from leaks, dirty coils, faulty compressors, or incorrect thermostat settings. In Tucson's heat, mini splits work hard and require regular maintenance. We'll perform a complete diagnostic to identify the exact issue and restore proper cooling."
    },
    {
      question: "Do you offer emergency ductless mini split repair?",
      answer: "Yes, we provide 24/7 emergency repair services for ductless mini splits. We understand that system failures in Arizona's extreme heat can be dangerous. Our technicians are on call and ready to respond quickly to restore your comfort and safety."
    },
    {
      question: "How can I prevent ductless mini split problems?",
      answer: "Regular maintenance is key to preventing mini split issues. Clean or replace filters monthly, keep outdoor units clear of debris, schedule professional maintenance twice yearly, and address any unusual noises or performance changes immediately. Our maintenance plans make it easy to keep your system running efficiently."
    },
    {
      question: "What warranty do you provide on ductless mini split repairs?",
      answer: "We provide a comprehensive workmanship warranty on all ductless mini split repairs. Manufacturer warranties on replacement parts vary by brand and component. We'll clearly explain all applicable warranties before beginning any repair work."
    }
  ]
};

export const ductlessMiniSplitInstallationFAQs: ServiceFAQs = {
  serviceId: 'ductless-mini-split-installation',
  serviceName: 'Ductless Mini Split Installation',
  faqs: [
    {
      question: "What are the benefits of ductless mini splits for Tucson homes?",
      answer: "Ductless mini splits offer superior energy efficiency (up to 30% more efficient than traditional AC), zone-based temperature control, no ductwork losses, quiet operation, and easy installation without major renovations. They're perfect for Tucson's climate, room additions, homes without ducts, and multi-generational households with different comfort preferences."
    },
    {
      question: "How many zones do I need for my home?",
      answer: "Zone requirements depend on your home's layout, size, and cooling needs. A single-zone system works for one room or small space, while multi-zone systems (2-8 zones) cover entire homes. Our technicians perform detailed assessments to recommend the optimal number and placement of zones for even cooling and maximum efficiency."
    },
    {
      question: "How long does ductless mini split installation take?",
      answer: "Most single-zone installations take 4-6 hours. Multi-zone systems typically require 1-2 days depending on complexity and the number of zones. Installation is much faster than traditional central AC because there's no ductwork to install. We'll provide a precise timeline during your free estimate."
    },
    {
      question: "What brands of ductless mini splits do you install?",
      answer: "We install premium ductless mini split brands including Mitsubishi Electric, Daikin, Fujitsu, LG, Carrier, and more. Each brand offers different features, efficiency levels, and warranties. Our experts will help you choose the best system for your needs, budget, and home configuration."
    },
    {
      question: "Where do you mount the indoor units?",
      answer: "Indoor units can be mounted high on walls, recessed into ceilings, or floor-mounted depending on your space and aesthetic preferences. Wall-mounted units are most common and offer optimal air distribution. We'll recommend the best placement for effective cooling, aesthetics, and minimal wall penetration."
    },
    {
      question: "Do ductless mini splits also provide heating?",
      answer: "Yes, most ductless mini splits are heat pumps that provide both cooling and heating. They're highly efficient for Tucson's mild winters, using up to 50% less energy than electric resistance heating. You'll enjoy year-round comfort with a single system."
    },
    {
      question: "What factors determine ductless mini split installation costs?",
      answer: "Installation costs depend on system size, number of zones needed, brand selection, installation complexity, and any necessary electrical upgrades. Single-zone systems for individual rooms are more affordable, while whole-home multi-zone systems covering entire houses require larger investments. We provide detailed, transparent quotes during your free consultation that break down all costs. Flexible financing options are available to make installation affordable."
    },
    {
      question: "Do you handle permits for ductless installation?",
      answer: "Yes, we handle all necessary permits and coordinate required inspections. Our team is fully licensed (ROC 340962, 322375, 296386, 276673) and ensures every installation meets Tucson building codes and manufacturer specifications for optimal performance and warranty compliance."
    },
    {
      question: "Can I add more zones to my system later?",
      answer: "Yes, most multi-zone systems can accommodate additional indoor units if your outdoor unit has sufficient capacity. We'll design your initial installation with future expansion in mind if desired, making it easy and cost-effective to add zones as your needs change."
    },
    {
      question: "How energy efficient are ductless mini splits?",
      answer: "Ductless mini splits are among the most efficient cooling systems available, with SEER ratings often exceeding 20 (compared to 14-16 for traditional systems). Eliminating duct losses and allowing zone control can reduce cooling costs by 30-40%. In Tucson where AC runs heavily, the energy savings are substantial."
    },
    {
      question: "What makes Intelligent Design the best choice for ductless installation in Tucson?",
      answer: "With over 45 years serving Tucson and 22,000+ five-star reviews, we combine expertise, quality equipment, and transparent pricing. We're family and veteran-owned, BBB A+ rated, and our technicians average 17 years of experience. We stand behind every installation with comprehensive warranties and ongoing support."
    }
  ]
};

export const heaterTuneupFAQs: ServiceFAQs = {
  serviceId: 'heater-tuneup',
  serviceName: 'Heater Tune-Up',
  faqs: [
    {
      question: "When should I schedule a heater tune-up in Tucson?",
      answer: "The best time for heater tune-up in Tucson is early fall (September-October) before temperatures drop and you need reliable heating. While Tucson winters are mild, nighttime temperatures can dip into the 30s, making a well-maintained heater essential for comfort and safety."
    },
    {
      question: "What's included in a heater tune-up?",
      answer: "A comprehensive heater tune-up includes inspection of the heat exchanger, burner cleaning, thermostat calibration, safety control testing, air filter replacement, electrical connection checks, gas pressure measurement, and carbon monoxide testing. Technicians also check for unusual noises, pilot light issues, and verify proper airflow throughout the system."
    },
    {
      question: "What value does a heater tune-up provide?",
      answer: "A heater tune-up provides exceptional value through comprehensive safety inspection, efficiency optimization, and early problem detection that prevents costly emergency repairs. Intelligent Design offers preventive maintenance plans that include heater tune-ups at discounted rates along with priority scheduling and repair discounts. All pricing is transparent with no hidden fees, so you'll know exactly what to expect."
    },
    {
      question: "How often should I have my heater tuned up?",
      answer: "Annual heater tune-ups are recommended to ensure safe, efficient operation during Tucson's heating season. Even though heating demand is lower than cooling in Arizona, regular maintenance prevents carbon monoxide risks, improves efficiency, and extends equipment lifespan by catching small issues before they become expensive repairs."
    },
    {
      question: "Can a heater tune-up prevent breakdowns?",
      answer: "Yes, annual heater tune-ups can prevent up to 90% of emergency breakdowns during the heating season. Regular maintenance catches issues like cracked heat exchangers, faulty igniters, dirty burners, and worn blower motors before they fail. This proactive approach ensures your family stays warm and safe during cold desert nights."
    },
    {
      question: "Will a tune-up lower my heating bills?",
      answer: "Yes, a properly tuned heater operates 10-15% more efficiently than a neglected system. Clean burners, calibrated thermostats, proper gas pressure, and optimized airflow all contribute to reduced energy consumption. While heating bills are lower in Tucson than cooling bills, the savings still add up over the season."
    },
    {
      question: "How long does a heater tune-up take?",
      answer: "A thorough heater tune-up typically takes 60-90 minutes depending on the system type and condition. Technicians work methodically to inspect every component, test safety controls, and ensure optimal performance. Gas furnaces may take slightly longer than electric systems due to additional combustion safety checks."
    },
    {
      question: "Do you tune up all heater types?",
      answer: "Yes, Intelligent Design services all heater types including gas furnaces, electric furnaces, heat pumps, and dual-fuel systems. Technicians average 17 years of experience and are trained on all major brands including Carrier, Trane, Lennox, Goodman, Rheem, and York. Whether your system is new or decades old, expert service is provided."
    },
    {
      question: "What if you find a problem during the tune-up?",
      answer: "If issues are discovered during the tune-up, technicians explain the problem clearly and provide transparent repair options with upfront pricing. Repairs are prioritized by safety and urgency so homeowners understand what needs immediate attention versus what can wait. There's never pressure into unnecessary work."
    },
    {
      question: "Is a heater tune-up necessary if my system seems fine?",
      answer: "Yes, many heater problems develop silently and aren't noticed until the system fails. Cracked heat exchangers can leak carbon monoxide without symptoms, dirty burners reduce efficiency gradually, and worn components may work until the coldest night. Annual tune-ups catch these hidden issues before they compromise safety or comfort."
    },
    {
      question: "Do you offer heater tune-up plans?",
      answer: "Yes, comprehensive maintenance plans include annual heater tune-ups along with AC maintenance, priority scheduling, repair discounts, and extended warranties. These plans ensure heating and cooling systems receive expert care year-round while saving money on maintenance and unexpected repairs. Plans are especially valuable for Tucson homes where both systems work hard."
    }
  ]
};

export const ductCleaningFAQs: ServiceFAQs = {
  serviceId: 'duct-cleaning',
  serviceName: 'Duct Cleaning',
  faqs: [
    {
      question: "How often should I have my air ducts cleaned in Tucson?",
      answer: "In Tucson's dusty desert climate, air duct cleaning is recommended every 3-5 years for most homes. Homes with pets, allergies, recent renovations, or visible dust accumulation may benefit from more frequent cleaning. Tucson's monsoon season can also introduce additional dust and debris that accumulates in ductwork over time."
    },
    {
      question: "What are signs that my air ducts need cleaning?",
      answer: "Common signs include visible dust blowing from vents, musty or stale odors when the system runs, increased allergy symptoms, dusty surfaces shortly after cleaning, uneven airflow between rooms, and higher energy bills. In Tucson, excessive dust on vents is particularly common due to the desert environment and frequent dust storms."
    },
    {
      question: "What factors affect duct cleaning costs?",
      answer: "Duct cleaning costs depend on system size, accessibility, contamination level, and home square footage. Larger homes with extensive ductwork or heavily contaminated systems require more time and effort. Intelligent Design provides transparent, upfront pricing with no hidden fees. The investment often pays for itself through improved air quality, better system efficiency, and reduced HVAC maintenance needs over time."
    },
    {
      question: "How long does duct cleaning take?",
      answer: "Most residential duct cleaning takes 3-5 hours depending on the home's size and ductwork complexity. Larger homes or heavily contaminated systems may take longer. Technicians use powerful vacuum equipment and specialized tools to thoroughly clean all supply and return ducts, registers, and grilles without damaging the system."
    },
    {
      question: "Will duct cleaning improve my indoor air quality?",
      answer: "Yes, professional duct cleaning removes accumulated dust, allergens, pet dander, and debris that circulate through your home. This is especially beneficial in Tucson where dust infiltration is constant. Clean ducts help reduce allergy symptoms, eliminate musty odors, and create a healthier living environment for families with respiratory sensitivities."
    },
    {
      question: "Does duct cleaning help my AC work better?",
      answer: "Yes, clean ducts improve airflow efficiency by removing blockages and buildup that restrict air movement. Better airflow means your AC doesn't work as hard to cool your home, reducing energy consumption by 10-15% and extending equipment life. This is particularly important in Tucson where AC systems run 6-8 months per year."
    },
    {
      question: "What's involved in professional duct cleaning?",
      answer: "Professional duct cleaning includes inspection with cameras, high-powered vacuum extraction, agitation of debris with rotating brushes, cleaning of all supply and return vents, sanitization to eliminate mold and bacteria, and final inspection to verify cleanliness. Intelligent Design uses truck-mounted equipment that provides stronger suction than portable units."
    },
    {
      question: "Can duct cleaning remove mold?",
      answer: "Yes, professional duct cleaning can remove visible mold growth, though severe mold issues may require additional remediation. Tucson's monsoon humidity can create conditions for mold growth in ductwork, especially around condensate drains. Technicians identify moisture sources during cleaning and recommend solutions to prevent mold recurrence."
    },
    {
      question: "Do you clean both supply and return ducts?",
      answer: "Yes, comprehensive duct cleaning includes all supply ducts (delivering conditioned air), return ducts (pulling air back to the system), registers, grilles, and the main trunk lines. Both supply and return ducts accumulate dust and debris, so cleaning only one side provides incomplete results. Thorough cleaning ensures maximum air quality and efficiency benefits."
    },
    {
      question: "Is duct cleaning worth it?",
      answer: "Yes, duct cleaning provides measurable benefits including improved air quality, better system efficiency, extended HVAC lifespan, and reduced allergens. For Tucson homes where dust infiltration is constant and AC runs heavily, clean ducts directly impact comfort, health, and operating costs. Families with allergies or respiratory issues see especially significant improvements."
    },
    {
      question: "Do you use chemicals during duct cleaning?",
      answer: "Intelligent Design uses EPA-approved sanitizers only when necessary to address specific issues like mold, bacteria, or odors. Standard duct cleaning relies on mechanical removal with powerful vacuums and brushes. If sanitizers are recommended, technicians explain the products used and ensure they're safe for homes with children and pets."
    }
  ]
};

export const ductInstallationFAQs: ServiceFAQs = {
  serviceId: 'duct-installation',
  serviceName: 'Duct Installation',
  faqs: [
    {
      question: "How do I know if I need new ductwork?",
      answer: "Signs you need new ductwork include visible damage or disconnected sections, excessive dust despite cleaning, uneven temperatures between rooms, high energy bills, and ductwork older than 15-20 years. In Tucson, degraded duct insulation from extreme attic heat and poor initial installation during rapid housing growth are common issues requiring replacement."
    },
    {
      question: "How long does duct installation take?",
      answer: "New duct installation typically takes 2-5 days depending on home size, complexity, and accessibility. Whole-home duct replacement for an average house usually requires 3-4 days. Partial installations or additions for room expansions can often be completed in 1-2 days. Timelines are provided during the free consultation."
    },
    {
      question: "What type of ductwork is best for Tucson homes?",
      answer: "Rigid sheet metal ducts with proper insulation are best for Tucson's extreme attic temperatures, offering superior durability and efficiency. Flex duct is acceptable for short runs when properly installed and supported. Metal ducts resist rodent damage, don't degrade from heat, and provide better airflow than flex duct when properly designed."
    },
    {
      question: "What factors determine duct installation costs?",
      answer: "Duct installation costs depend on home size, materials selected (rigid metal vs. flex duct), accessibility of installation areas, design complexity, and whether it's new installation or replacement. Larger homes with complex layouts or difficult attic access require more labor and materials. Intelligent Design provides detailed, transparent quotes during free consultations that break down all cost factors. Flexible financing options are available for qualified buyers."
    },
    {
      question: "Will new ductwork lower my energy bills?",
      answer: "Yes, properly designed and installed ductwork can reduce energy consumption by 20-40% compared to old, leaky, or poorly designed systems. Eliminating duct leakage, proper insulation, and optimized airflow mean less wasted energy. In Tucson where cooling costs dominate utility bills, new ductwork often pays for itself within 5-7 years."
    },
    {
      question: "Do you handle duct design and sizing?",
      answer: "Yes, proper duct design is critical for system performance and is included with every installation. Technicians perform Manual D calculations considering your home's layout, HVAC capacity, airflow requirements, and static pressure. Intelligent Design's 45+ years of experience ensures ductwork is engineered for optimal comfort and efficiency."
    },
    {
      question: "Can you install ducts in a home that never had them?",
      answer: "Yes, ducts can be added to homes originally built with evaporative cooling or other systems. Installation may require creative routing through closets, soffits, or attics to minimize visual impact. Ductless mini-split systems are also an excellent alternative for homes where traditional ductwork installation is impractical or cost-prohibitive."
    },
    {
      question: "Do you insulate ductwork in Tucson attics?",
      answer: "Absolutely! Duct insulation is critical in Tucson where attic temperatures exceed 150°F in summer. Proper insulation prevents conditioned air loss, reduces energy waste, and prevents condensation issues. Intelligent Design uses high R-value insulation specifically rated for extreme Arizona temperatures to maximize efficiency."
    },
    {
      question: "What warranty comes with new duct installation?",
      answer: "Intelligent Design provides comprehensive workmanship warranties on all duct installation labor. Material warranties vary by component but typically range from 5-10 years. Installation is performed by licensed technicians (ROC 340962, 322375, 296386, 276673) following industry best practices and local building codes."
    },
    {
      question: "Do you remove old ductwork?",
      answer: "Yes, removal and proper disposal of old ductwork is included in replacement projects. Technicians safely remove old ducts, insulation, and any damaged materials from attics and crawl spaces. Work areas are left clean with debris hauled away. This ensures new ductwork has proper space and isn't compromised by old materials."
    },
    {
      question: "Can you add ducts for a room addition?",
      answer: "Yes, duct extensions for room additions are routinely installed. Technicians assess your existing HVAC capacity to ensure it can handle the additional load, then design and install ductwork that integrates seamlessly with your existing system. If capacity is insufficient, options for system upgrades or supplemental mini-splits will be discussed."
    }
  ]
};

export const ductRepairFAQs: ServiceFAQs = {
  serviceId: 'duct-repair',
  serviceName: 'Duct Repair',
  faqs: [
    {
      question: "What are signs that I need duct repair?",
      answer: "Common signs include whistling or rattling noises from ducts, rooms that are too hot or too cold, visible gaps or damage at duct connections, excessive dust, and higher energy bills. In Tucson's extreme attic heat, duct tape and mastic can fail over time, creating leaks that waste significant amounts of conditioned air."
    },
    {
      question: "What factors affect duct repair costs?",
      answer: "Duct repair costs depend on the extent of damage, accessibility of affected areas, materials needed, and whether multiple sections require attention. Simple seal repairs or reconnecting separated sections are less involved than extensive repairs to multiple damaged areas. Intelligent Design provides transparent, upfront pricing after thorough inspection. All work is guaranteed and performed by experienced technicians."
    },
    {
      question: "Can you repair ducts without replacing everything?",
      answer: "Yes, many duct issues can be repaired without full replacement. Common repairs include sealing leaks with mastic, reconnecting separated sections, replacing damaged duct segments, adding insulation, and securing loose ducts. Only when damage is extensive or ducts are beyond economical repair is full replacement recommended."
    },
    {
      question: "How quickly can you repair my ductwork?",
      answer: "Most duct repairs can be completed within 2-4 hours depending on the issue and accessibility. Emergency repairs for significant problems affecting system operation can often be scheduled within 24 hours. Intelligent Design maintains high availability throughout Tucson, Oro Valley, Marana, and surrounding areas for fast response."
    },
    {
      question: "Do you repair both flex duct and metal ductwork?",
      answer: "Yes, technicians repair both flex duct and rigid metal ductwork systems. Flex duct repairs often involve replacing damaged sections or re-securing sagging ducts. Metal duct repairs include sealing leaks, replacing rusted sections, and reinforcing connections. With 45+ years of experience, proper repair methods for all duct types are known."
    },
    {
      question: "Will duct repair improve my AC performance?",
      answer: "Yes, repairing duct leaks and damage can improve AC performance by 15-30%. Sealed ducts deliver more conditioned air to living spaces instead of wasting it in attics or crawlspaces. Better airflow means more even temperatures, improved comfort, and lower energy bills. In Tucson's extreme climate, duct repairs provide immediate, noticeable benefits."
    },
    {
      question: "Can you repair ducts in hard-to-reach attics?",
      answer: "Yes, technicians are equipped and trained to work in tight attic spaces common in Tucson homes. Proper safety equipment, specialized tools, and experience allow repairs even in challenging locations. The goal is to solve duct problems thoroughly regardless of accessibility challenges."
    },
    {
      question: "What causes ductwork to fail in Tucson?",
      answer: "Tucson's extreme attic temperatures (150°F+) cause duct tape adhesives to fail, mastic to crack, and flex duct to degrade over time. Other causes include poor initial installation, animal damage, settling of the home, and corrosion from condensation. Regular inspection helps catch issues before they significantly impact comfort and efficiency."
    },
    {
      question: "Do you use duct tape to repair ducts?",
      answer: "No, despite its name, duct tape is not effective for long-term duct repair, especially in Arizona's heat. Intelligent Design uses proper mastic sealant and metal-backed tape specifically designed for HVAC applications. These materials withstand extreme temperatures and provide lasting seals that won't fail after a few years."
    },
    {
      question: "Should I repair or replace my ductwork?",
      answer: "If ducts are less than 15 years old with isolated damage, repair is usually most cost-effective. Extensive damage, widespread leaks, inadequate sizing, or ducts older than 20 years often justify replacement. Technicians provide honest assessments and detailed comparisons of repair versus replacement costs and benefits."
    },
    {
      question: "Do you offer warranties on duct repairs?",
      answer: "Yes, all duct repairs come with comprehensive workmanship warranties. Warranty terms vary by repair type but typically cover labor and materials for 1-2 years. As a BBB A+ rated company with over 22,000 five-star reviews, Intelligent Design stands behind every repair with quality guaranteed."
    }
  ]
};

export const ductSealingFAQs: ServiceFAQs = {
  serviceId: 'duct-sealing',
  serviceName: 'Duct Sealing',
  faqs: [
    {
      question: "What is duct sealing and why is it important?",
      answer: "Duct sealing involves sealing leaks and gaps in ductwork to prevent conditioned air from escaping into attics or crawlspaces. This is critical in Tucson where typical duct systems lose 20-40% of air through leaks, wasting energy and money. Properly sealed ducts deliver more cool air to living spaces, improving comfort and reducing utility bills."
    },
    {
      question: "How much can duct sealing save on energy bills?",
      answer: "Duct sealing typically reduces cooling costs by 15-30% in Tucson homes by preventing conditioned air loss. In Tucson where AC systems run heavily during summer months, properly sealed ducts provide substantial ongoing energy savings. The service often pays for itself through energy savings alone, making it an excellent long-term investment in home efficiency and comfort."
    },
    {
      question: "What's included in professional duct sealing?",
      answer: "Professional duct sealing includes comprehensive inspection, pressure testing to locate leaks, sealing all accessible leaks with proper mastic and reinforcement, and post-sealing verification testing to confirm improvements. The service addresses both supply and return ducts for maximum efficiency gains. Financing options are available, and the energy savings from properly sealed ducts often provide excellent return on investment over time."
    },
    {
      question: "How is duct sealing performed?",
      answer: "Professional duct sealing involves pressure testing to locate leaks, applying mastic sealant to all joints and seams, using metal-backed tape for reinforcement, and post-sealing testing to verify improvements. Intelligent Design technicians seal both supply and return ducts, ensuring comprehensive results. All materials used are rated for extreme Arizona temperatures."
    },
    {
      question: "Is duct sealing worth it in Tucson?",
      answer: "Absolutely! Tucson's extreme summer heat means AC systems run 6-8 months per year, making duct efficiency critical. Sealing prevents cooled air from leaking into 150°F+ attics, dramatically improving system performance. Homeowners experience more even cooling, lower energy bills, reduced dust infiltration, and improved indoor air quality."
    },
    {
      question: "How long does duct sealing take?",
      answer: "Most residential duct sealing takes 4-8 hours depending on system size, number of leaks, and attic accessibility. Larger homes or systems with extensive leakage may require a full day. Technicians work methodically to seal all accessible leaks thoroughly, ensuring maximum benefit and long-lasting results."
    },
    {
      question: "Can you seal ducts in tight attics?",
      answer: "Yes, experienced technicians can seal ducts even in cramped Tucson attics. Proper safety equipment, specialized tools, and extensive training allow effective sealing in challenging spaces. While some areas may be inaccessible, sealing all reachable leaks still provides significant efficiency improvements and energy savings."
    },
    {
      question: "What materials are used for duct sealing?",
      answer: "Professional duct sealing uses mastic sealant (a specialized putty) and metal-backed foil tape rated for HVAC applications. These materials withstand extreme Arizona attic temperatures and remain effective for decades. Regular duct tape is never used as it fails quickly in heat. Only professional-grade materials provide lasting results."
    },
    {
      question: "Will duct sealing improve comfort in my home?",
      answer: "Yes, sealed ducts deliver more conditioned air to living spaces, improving airflow and temperature consistency throughout your home. Rooms that were previously too hot or cold typically see dramatic improvement. Better duct integrity also means your HVAC system cycles less frequently, providing more stable temperatures and improved comfort."
    },
    {
      question: "How do you test for duct leaks?",
      answer: "Technicians use duct blaster testing and pressure measurements to quantify leakage before and after sealing. Visual inspection with high-powered flashlights and thermal imaging cameras also identify problem areas. Post-sealing testing verifies improvements and ensures all accessible leaks are addressed. Detailed reports show the efficiency gains achieved."
    },
    {
      question: "Does duct sealing help with air quality?",
      answer: "Yes, sealed ducts prevent attic dust, insulation fibers, and contaminants from being pulled into your air supply. This is especially important in Tucson where attics accumulate significant dust. Sealed return ducts eliminate negative pressure that draws pollutants from garages or unconditioned spaces. The result is cleaner, healthier indoor air."
    }
  ]
};

export const smartThermostatInstallationFAQs: ServiceFAQs = {
  serviceId: 'smart-thermostat-installation',
  serviceName: 'Smart Thermostat Installation',
  faqs: [
    {
      question: "What are the benefits of a smart thermostat in Tucson?",
      answer: "Smart thermostats can reduce cooling costs by 10-23% through optimized scheduling, remote control, and learning your preferences. In Tucson where AC runs 6-8 months per year, these savings add up significantly over time. Additional benefits include remote temperature monitoring, energy usage reports, alerts for system issues, and integration with smart home systems for complete home automation."
    },
    {
      question: "What factors affect smart thermostat installation costs?",
      answer: "Smart thermostat installation costs depend on the thermostat model selected, existing wiring configuration, and whether additional wiring like a C-wire is needed. Popular models like Nest and Ecobee have different price points and features. Professional installation ensures proper setup, compatibility verification, and optimal configuration. Intelligent Design provides transparent pricing and can recommend the best thermostat for your system and needs."
    },
    {
      question: "How long does smart thermostat installation take?",
      answer: "Most smart thermostat installations take 1-2 hours depending on existing wiring and system compatibility. Systems requiring new wiring or C-wire installation may take slightly longer. Technicians also provide setup assistance including WiFi connection, app configuration, and programming your preferred schedule."
    },
    {
      question: "Which smart thermostat is best for Tucson homes?",
      answer: "Popular models for Tucson include Nest Learning Thermostat, Ecobee SmartThermostat, and Honeywell Home T9/T10. Each offers excellent energy savings and remote control. Ecobee includes remote sensors ideal for multi-story homes, while Nest excels at learning patterns. Technicians help select the best option based on your HVAC system, home layout, and preferences."
    },
    {
      question: "Can I install a smart thermostat myself?",
      answer: "While some homeowners attempt DIY installation, professional installation ensures compatibility, proper wiring, and optimal performance. Many HVAC systems have unique wiring requirements, and incorrect installation can damage equipment or void warranties. Professional installation by Intelligent Design includes setup, testing, and guidance on maximizing energy savings."
    },
    {
      question: "Do I need a C-wire for a smart thermostat?",
      answer: "Most smart thermostats require a C-wire (common wire) for continuous power, though some have workarounds or battery options. Many older Tucson homes lack C-wires. Technicians can install a C-wire, use adapter solutions, or recommend thermostats that work without C-wires. Proper power supply ensures reliable operation and prevents system errors."
    },
    {
      question: "Will a smart thermostat work with my old HVAC system?",
      answer: "Smart thermostats work with most HVAC systems including central AC, heat pumps, and furnaces, though compatibility varies by model. Systems older than 20-25 years may have compatibility limitations. Technicians verify compatibility before installation and can recommend solutions if upgrades are needed. Most Tucson homes have compatible systems."
    },
    {
      question: "Can I control my AC from my phone?",
      answer: "Yes, all major smart thermostats offer smartphone apps for iOS and Android that provide complete remote control. Adjust temperature, change modes, view energy usage, and receive alerts from anywhere. This is especially valuable when you're away and want to pre-cool your Tucson home before arriving or ensure energy isn't wasted."
    },
    {
      question: "Do smart thermostats work during internet outages?",
      answer: "Yes, smart thermostats continue operating your HVAC system during internet or WiFi outages using stored schedules and manual controls. You'll lose remote access and smart features temporarily, but heating and cooling continue normally. Once internet is restored, all smart features resume automatically without reprogramming."
    },
    {
      question: "Will a smart thermostat help with uneven temperatures?",
      answer: "Smart thermostats with remote sensors (like Ecobee) can significantly improve comfort in multi-level homes by averaging temperatures from multiple rooms. Some models learn which rooms need priority cooling during different times. Combined with proper duct sealing and system maintenance, smart thermostats help create more consistent temperatures throughout Tucson homes."
    },
    {
      question: "What warranty comes with smart thermostat installation?",
      answer: "Smart thermostats typically include manufacturer warranties of 1-3 years depending on brand and model. Intelligent Design also provides workmanship warranties on installation labor. As a BBB A+ rated company with 22,000+ five-star reviews, quality installation and ongoing support are guaranteed. Extended warranties may be available."
    }
  ]
};

export const indoorAirQualityFAQs: ServiceFAQs = {
  serviceId: 'indoor-air-quality',
  serviceName: 'Indoor Air Quality',
  faqs: [
    {
      question: "Why is indoor air quality important in Tucson?",
      answer: "Indoor air quality is critical in Tucson because homes are sealed tightly for AC efficiency, trapping pollutants, dust, and allergens inside. Desert dust, monsoon mold spores, and year-round air conditioning create unique challenges. Poor indoor air quality causes allergies, respiratory issues, headaches, and fatigue, especially impacting children and those with asthma."
    },
    {
      question: "What are signs of poor indoor air quality?",
      answer: "Common signs include persistent dust despite regular cleaning, musty or stale odors, increased allergy or asthma symptoms, dry or irritated eyes and throat, headaches, fatigue, and visible mold growth. Tucson homes may also experience excessive static electricity during dry months and condensation on windows during monsoon season."
    },
    {
      question: "What indoor air quality solutions do you offer?",
      answer: "Intelligent Design offers whole-home air purifiers, UV light systems, advanced filtration, dehumidifiers, humidifiers, ERV/HRV ventilation systems, and duct cleaning. Each solution addresses specific issues—HEPA filters capture particles, UV lights kill mold and bacteria, and ventilation systems bring in fresh air. Customized combinations provide comprehensive air quality improvement."
    },
    {
      question: "What factors affect indoor air quality system costs?",
      answer: "Indoor air quality system costs vary significantly by solution type. High-efficiency filters are the most economical option, while UV light systems, whole-home air purifiers, and ERV/HRV ventilation systems represent progressively larger investments with correspondingly greater benefits. Intelligent Design provides detailed consultations to recommend solutions fitting your needs and budget. Many solutions pay for themselves through improved health, reduced HVAC maintenance, and better system efficiency."
    },
    {
      question: "Will air purification help with desert dust?",
      answer: "Yes, whole-home air purifiers with HEPA filtration capture 99.97% of particles including desert dust, pollen, and fine particulates. This is especially beneficial during Tucson's windy months and dust storms. Better filtration means less dust on furniture, cleaner air for breathing, and reduced strain on your HVAC system from dust buildup."
    },
    {
      question: "Can UV lights really kill mold and bacteria?",
      answer: "Yes, UV-C light systems installed in HVAC systems effectively kill mold spores, bacteria, and viruses as air passes through. This is valuable in Tucson where monsoon humidity can promote mold growth in AC systems. UV lights also keep cooling coils cleaner, improving efficiency and preventing musty odors from circulating through your home."
    },
    {
      question: "Do I need a humidifier in Tucson?",
      answer: "Generally no, Tucson's desert climate is naturally dry and most homes don't need added humidity. However, winter months can be extremely dry (10-20% humidity), causing dry skin, irritated airways, and static electricity. Whole-home humidifiers set to maintain 30-40% humidity can improve comfort without encouraging mold growth or dust mites."
    },
    {
      question: "What's the difference between portable and whole-home air purifiers?",
      answer: "Portable purifiers treat single rooms and require regular filter changes and maintenance. Whole-home systems integrate with your HVAC to purify air throughout the entire house automatically. While whole-home systems cost more initially, they're more effective, convenient, and cost-efficient long-term than buying multiple portable units. They also require less ongoing maintenance and provide consistent air quality throughout your home."
    },
    {
      question: "How often should I change air filters?",
      answer: "In Tucson's dusty environment, standard 1-inch filters should be changed monthly during heavy AC use, every 2-3 months during milder weather. Higher-quality pleated filters last 2-3 months even during peak season. Whole-home purification systems have filters lasting 6-12 months. Regular changes protect your HVAC system and maintain air quality."
    },
    {
      question: "Will better air quality help my allergies?",
      answer: "Yes, comprehensive air quality improvements can dramatically reduce allergy symptoms by removing triggers like pollen, dust mites, pet dander, and mold spores. Many Tucson residents experience significant relief after installing HEPA filtration and UV lights. Combined with regular duct cleaning and proper humidity control, indoor air quality solutions create healthier living environments."
    },
    {
      question: "Can you test my indoor air quality?",
      answer: "Yes, Intelligent Design offers comprehensive indoor air quality assessments including particle counts, humidity measurements, carbon monoxide testing, and VOC detection. Testing identifies specific problems and guides customized solutions. With 45+ years of experience and advanced diagnostic equipment, accurate assessments and effective recommendations are provided for every Tucson home."
    }
  ]
};

export const homeEnergyUpgradesFAQs: ServiceFAQs = {
  serviceId: 'home-energy-upgrades',
  serviceName: 'Home Energy Upgrades',
  faqs: [
    {
      question: "What are home energy upgrades?",
      answer: "Home energy upgrades are improvements that reduce energy consumption and utility costs while improving comfort. Common upgrades include high-efficiency HVAC systems, smart thermostats, duct sealing, improved insulation, LED lighting, solar panels, and tankless water heaters. In Tucson's extreme climate, energy upgrades can reduce utility bills by 30-50% while increasing home value."
    },
    {
      question: "Which energy upgrades provide the best return on investment?",
      answer: "In Tucson, the highest ROI upgrades are duct sealing (2-3 year payback), programmable/smart thermostats (1-2 years), high-efficiency AC systems (5-8 years), and attic insulation improvements (3-5 years). Solar panels offer excellent long-term value with 6-10 year payback. Intelligent Design helps prioritize upgrades based on your home's specific needs and budget."
    },
    {
      question: "How much can energy upgrades save on utility bills?",
      answer: "Comprehensive energy upgrades typically reduce utility bills by 30-50% in Tucson homes. For homes with high summer cooling bills, this translates to substantial annual savings. Specific savings depend on current efficiency, upgrades performed, and usage patterns. Many upgrades qualify for utility rebates and tax credits, improving financial returns further and accelerating payback periods."
    },
    {
      question: "Do energy upgrades increase home value?",
      answer: "Yes, energy-efficient homes sell for 3-5% more on average and sell faster than comparable homes. Buyers increasingly prioritize low operating costs, especially in Tucson's expensive cooling climate. Professional energy upgrades make improvements visible to buyers and justify premium pricing through documented performance and efficiency gains."
    },
    {
      question: "What rebates are available for energy upgrades in Tucson?",
      answer: "Tucson Electric Power and Southwest Gas offer rebates for high-efficiency HVAC systems, smart thermostats, insulation, and duct sealing. Rebate amounts vary by equipment efficiency and type of upgrade. Federal tax credits cover 30% of solar installations through 2032. Some upgrades qualify for low-interest financing through utility programs. Intelligent Design helps identify and apply for all available incentives to maximize your savings."
    },
    {
      question: "Should I upgrade my AC or add solar first?",
      answer: "Upgrade HVAC efficiency first before adding solar. High-efficiency AC reduces your energy needs, allowing smaller (less expensive) solar systems to meet remaining demand. This approach maximizes savings and ROI. Intelligent Design can design a phased upgrade plan that optimizes both immediate comfort improvements and long-term energy independence."
    },
    {
      question: "How long do energy upgrades take to install?",
      answer: "Installation timelines vary by upgrade: smart thermostats take 1-2 hours, duct sealing 4-8 hours, AC replacement 1-2 days, and solar installation 1-3 days. Comprehensive whole-home upgrades can be phased over weeks or months to spread costs. Intelligent Design coordinates all trades for seamless project completion with minimal disruption."
    },
    {
      question: "Can I finance home energy upgrades?",
      answer: "Yes, multiple financing options exist including PACE programs (Property Assessed Clean Energy), utility-sponsored programs, home equity loans, and contractor financing. Some programs offer zero-interest financing for qualified upgrades. Intelligent Design works with several lenders to provide flexible terms. Many customers find monthly savings exceed monthly payments from day one."
    },
    {
      question: "What's included in a whole-home energy upgrade?",
      answer: "Comprehensive upgrades typically include energy audit, duct testing and sealing, high-efficiency HVAC installation, smart thermostat, improved insulation, air sealing, LED lighting, and potentially solar panels or battery storage. Intelligent Design creates customized upgrade packages based on audit findings, prioritizing improvements by ROI and impact on comfort and health."
    },
    {
      question: "How are energy upgrades documented for home sales?",
      answer: "Professional energy upgrades should be properly documented with equipment specifications, efficiency ratings, warranty information, and before/after energy assessments. This documentation is valuable for appraisers, lenders, and buyers. With 45+ years of experience, Intelligent Design provides comprehensive documentation for MLS listings and appraisals, ensuring upgrades are recognized in home valuations."
    },
    {
      question: "Will energy upgrades help during power outages?",
      answer: "Energy efficiency upgrades help homes maintain temperature longer during outages, but don't provide backup power alone. Adding battery storage with solar panels provides true backup capability during grid failures. Well-insulated, efficient homes lose temperature more slowly, extending comfort during monsoon storm outages common in Tucson."
    }
  ]
};

export const homeEnergyAuditFAQs: ServiceFAQs = {
  serviceId: 'home-energy-audit',
  serviceName: 'Home Energy Audit',
  faqs: [
    {
      question: "What is a home energy audit?",
      answer: "A home energy audit is a comprehensive assessment that identifies how your home uses energy and where improvements can reduce waste. Audits include blower door testing for air leaks, thermal imaging to find insulation gaps, duct leakage testing, HVAC efficiency evaluation, and appliance assessment. The result is a prioritized list of upgrades with estimated costs and savings."
    },
    {
      question: "How much does a home energy audit cost in Tucson?",
      answer: "Professional home energy audits vary in cost based on home size and assessment depth. Many Tucson utility companies offer subsidized or free audits for customers, making them very affordable. The audit investment is often recovered through the first year's energy savings from implementing recommended improvements. Intelligent Design includes audit credits toward completed upgrades, making the audit essentially free when you proceed with improvements."
    },
    {
      question: "What's included in a professional energy audit?",
      answer: "Comprehensive audits include blower door testing to measure air leakage, thermal imaging to locate insulation deficiencies, duct leakage testing, HVAC system efficiency evaluation, appliance and lighting assessment, and detailed analysis of utility bills. Auditors provide a written report with prioritized recommendations, cost estimates, and projected savings for each improvement."
    },
    {
      question: "How long does a home energy audit take?",
      answer: "Most residential energy audits take 2-4 hours depending on home size and complexity. Auditors inspect attics, crawlspaces, HVAC systems, and all living areas. Additional time is spent analyzing data and preparing detailed reports with recommendations. Results are typically delivered within 3-5 business days with clear explanations and next steps."
    },
    {
      question: "Is a home energy audit worth it?",
      answer: "Absolutely! Audits identify specific problems causing high bills and discomfort, preventing wasted money on ineffective upgrades. In Tucson where cooling costs dominate budgets, audits pinpoint the highest-impact improvements. Most homeowners save 25-40% on energy bills after implementing audit recommendations, with payback within 2-3 years."
    },
    {
      question: "What problems do energy audits typically find in Tucson homes?",
      answer: "Common findings include duct leakage (20-40% air loss), inadequate attic insulation, air leaks around windows and doors, inefficient HVAC equipment, and inadequate ventilation. Tucson-specific issues include degraded duct insulation from extreme attic heat, monsoon moisture problems, and insufficient shade on west-facing walls. Each issue has specific, cost-effective solutions."
    },
    {
      question: "Will an audit tell me if I need a new AC?",
      answer: "Yes, energy audits include HVAC performance testing that reveals if your AC is operating efficiently or nearing end of life. Auditors measure actual cooling capacity, airflow, and energy consumption compared to manufacturer specifications. If replacement is recommended, the audit helps you choose properly-sized, high-efficiency equipment for maximum comfort and savings."
    },
    {
      question: "Do energy audits help qualify for rebates?",
      answer: "Yes, many utility rebate programs require professional energy audits before approving incentives. Audits document existing conditions and verify that improvements meet program requirements. Intelligent Design is familiar with all local utility programs and ensures audits include documentation needed for maximum rebates and tax credits."
    },
    {
      question: "Can I do a home energy audit myself?",
      answer: "While DIY audits provide basic insights, professional audits use specialized equipment like blower doors, thermal cameras, and duct testing tools that homeowners don't have. Professionals also have experience interpreting results and prioritizing improvements by ROI. In Tucson's unique climate, professional expertise ensures recommendations address desert-specific challenges effectively."
    },
    {
      question: "What should I do after getting an energy audit?",
      answer: "Review the audit report carefully and prioritize improvements by ROI and impact on comfort. Start with low-cost/high-return items like air sealing and duct repairs, then tackle larger investments like HVAC replacement or solar. Intelligent Design provides implementation support, competitive pricing, and coordinates all trades for comprehensive upgrades based on audit findings."
    },
    {
      question: "How do energy audits help with home sales?",
      answer: "Professional energy audits provide comprehensive testing and documentation that validates home performance for buyers, appraisers, and lenders. Detailed audit reports demonstrate energy efficiency, identify completed upgrades, and justify premium pricing. With 45+ years of experience, Intelligent Design conducts thorough audits with professional documentation that supports home valuations and faster sales."
    }
  ]
};

export const hvacLocationFAQs: ServiceFAQs = {
  serviceId: 'hvac-location-general',
  serviceName: 'HVAC Services',
  faqs: [
    {
      question: "Do you offer emergency AC repair service?",
      answer: "Yes! We provide 24/7 emergency AC repair services throughout the greater Tucson area. When your air conditioning fails during Arizona's extreme heat, our licensed HVAC technicians respond quickly to restore comfort to your home. We typically arrive within 1-2 hours for emergency calls."
    },
    {
      question: "How quickly can you respond to AC emergencies?",
      answer: "For emergency calls, we typically arrive within 1-2 hours. Our proximity to communities throughout the Tucson area and fully-equipped service vehicles allow us to respond quickly with parts and tools to get your AC running again fast."
    },
    {
      question: "Are your HVAC technicians licensed in Arizona?",
      answer: "Absolutely! All our HVAC technicians hold valid Arizona contractor licenses (ROC 340962, 322375, 296386, 276673) and are fully bonded and insured. We maintain rigorous training programs to ensure our team stays current with the latest AC technology and Arizona energy efficiency standards."
    },
    {
      question: "What HVAC services do you offer?",
      answer: "We provide complete HVAC services including emergency AC repair, air conditioning installation and replacement, AC maintenance and tune-ups, ductless mini-split systems, heat pump installation, indoor air quality solutions, smart thermostat installation, duct cleaning, duct repair, and duct sealing for homes and businesses throughout the Tucson area."
    },
    {
      question: "Do you warranty your HVAC work?",
      answer: "Yes! We stand behind our work with comprehensive warranties. Our AC repairs and installations include workmanship guarantees, and we use quality equipment backed by manufacturer warranties. We're committed to your complete satisfaction and long-term comfort."
    },
    {
      question: "How much does HVAC service cost?",
      answer: "HVAC service costs vary based on the type of service needed, system complexity, and parts required. We provide transparent, upfront pricing before any work begins, so you'll know exactly what to expect with no hidden fees or surprises. Contact us for a free estimate tailored to your specific needs."
    },
    {
      question: "Do you offer financing for HVAC services?",
      answer: "Yes, we offer flexible financing options for HVAC installations and major repairs with approved credit. We partner with leading lenders to provide competitive rates and manageable monthly payments, making it easier to invest in your home's comfort and efficiency."
    },
    {
      question: "How often should I have my HVAC system serviced?",
      answer: "In Arizona's extreme climate, we recommend HVAC service twice a year—once in spring before the hot season for your AC, and once in fall for your heating system. Regular maintenance prevents breakdowns during peak use, improves energy efficiency by up to 15%, and extends your system's lifespan."
    },
    {
      question: "What brands of HVAC equipment do you work with?",
      answer: "We service and install all major HVAC brands including Carrier, Trane, Lennox, Goodman, Rheem, York, Amana, and more. Our technicians are factory-trained on multiple brands and have the expertise to diagnose, repair, and install any residential or commercial system."
    },
    {
      question: "Are you a local company?",
      answer: "Yes! Intelligent Design is a family and veteran-owned company that has been serving the Tucson community since 1979—over 45 years. We're proud members of this community and actively support local organizations including the Tucson Community Food Bank, Make-A-Wish Arizona, and various veteran support programs."
    },
    {
      question: "Why should I choose Intelligent Design for my HVAC needs?",
      answer: "With over 45 years serving Tucson and 22,000+ five-star reviews (4.97 rating), we combine expertise, transparency, and quality workmanship. We're BBB A+ rated, family and veteran-owned, and offer upfront pricing with no hidden fees. Our technicians average 17 years of experience, and we stand behind every job with comprehensive warranties and a 100% satisfaction guarantee."
    }
  ]
};

export const heatingLocationFAQs: ServiceFAQs = {
  serviceId: 'heating-location-general',
  serviceName: 'Heating Services',
  faqs: [
    {
      question: "Do you offer emergency heating repair service?",
      answer: "Yes! We provide 24/7 emergency heating repair services throughout the greater Tucson area. When your heater fails during cold winter nights, our licensed HVAC technicians respond quickly to restore warmth and comfort to your home. We typically arrive within 1-2 hours for emergency calls."
    },
    {
      question: "How quickly can you respond to heating emergencies?",
      answer: "For emergency heating calls, we typically arrive within 1-2 hours. Our proximity to communities throughout the Tucson area and fully-equipped service vehicles allow us to respond quickly with parts and tools to get your heating system running again fast."
    },
    {
      question: "Are your heating technicians licensed in Arizona?",
      answer: "Absolutely! All our heating technicians hold valid Arizona contractor licenses (ROC 340962, 322375, 296386, 276673) and are fully bonded and insured. We maintain rigorous training programs to ensure our team stays current with the latest heating technology and safety standards."
    },
    {
      question: "What heating services do you offer?",
      answer: "We provide complete heating services including emergency heater repair, furnace repair and replacement, heat pump installation and service, heating system maintenance and tune-ups, thermostat installation and repair, duct inspection and repair, and indoor air quality solutions for homes and businesses throughout the Tucson area."
    },
    {
      question: "Do you warranty your heating work?",
      answer: "Yes! We stand behind our work with comprehensive warranties. Our heating repairs and installations include workmanship guarantees, and we use quality equipment backed by manufacturer warranties. We're committed to your complete satisfaction and long-term comfort."
    },
    {
      question: "How much does heating service cost?",
      answer: "Heating service costs vary based on the type of service needed, system complexity, and parts required. We provide transparent, upfront pricing before any work begins, so you'll know exactly what to expect with no hidden fees or surprises. Contact us for a free estimate tailored to your specific heating needs."
    },
    {
      question: "Do you offer financing for heating system replacement?",
      answer: "Yes, we offer flexible financing options for heating system installations and major repairs with approved credit. We partner with leading lenders to provide competitive rates and manageable monthly payments, making it easier to invest in your home's comfort and efficiency."
    },
    {
      question: "How often should I have my heating system serviced?",
      answer: "We recommend annual heating system service before winter begins, typically in October or November. Regular maintenance prevents breakdowns during cold weather, improves energy efficiency, ensures safe operation (especially important for gas furnaces), and extends your system's lifespan."
    },
    {
      question: "What brands of heating equipment do you work with?",
      answer: "We service and install all major heating brands including Carrier, Trane, Lennox, Goodman, Rheem, York, Amana, and more. Our technicians are factory-trained on multiple brands and have the expertise to diagnose, repair, and install any residential or commercial heating system."
    },
    {
      question: "Do you service both furnaces and heat pumps?",
      answer: "Yes! We service, repair, and install all types of heating systems including gas furnaces, electric furnaces, heat pumps, and dual-fuel systems. Our technicians are experienced with all heating technologies and can recommend the best solution for your home and budget."
    },
    {
      question: "Why should I choose Intelligent Design for my heating needs?",
      answer: "With over 45 years serving Tucson and 22,000+ five-star reviews (4.97 rating), we combine expertise, transparency, and quality workmanship. We're BBB A+ rated, family and veteran-owned, and offer upfront pricing with no hidden fees. Our technicians average 17 years of experience, and we stand behind every job with comprehensive warranties and a 100% satisfaction guarantee."
    }
  ]
};
