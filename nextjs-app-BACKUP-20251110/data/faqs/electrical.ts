/**
 * Electrical Service FAQs
 * 
 * Centralized FAQ data for all electrical service pages
 * Each service has minimum 11 questions for AI search optimization
 */

import { ServiceFAQs } from './types';

export const electricalRepairFAQs: ServiceFAQs = {
  serviceId: 'electrical-repair',
  serviceName: 'Electrical Repair',
  faqs: [
    {
      question: "What are the most common electrical problems in Tucson homes?",
      answer: "Common electrical issues include frequent circuit breaker trips, flickering lights, outlets that don't work, buzzing sounds from electrical panels, and burning smells near outlets or switches. In Tucson's older homes, especially those built before 1970, outdated wiring like knob-and-tube or aluminum wiring can cause safety hazards and requires immediate professional attention."
    },
    {
      question: "Do you offer emergency electrical repair services in Tucson?",
      answer: "Yes, Intelligent Design provides 24/7 emergency electrical repair services throughout Tucson and surrounding areas. We understand that electrical emergencies—like sparking outlets, smoking panels, or complete power loss—can pose serious safety risks and require immediate attention. Our licensed electricians respond quickly to protect your home and family."
    },
    {
      question: "What factors affect electrical repair costs?",
      answer: "Electrical repair costs depend on the complexity of the issue, parts needed, labor time, and materials required. Simple fixes like outlet or switch replacements are less involved than circuit repairs, panel work, or extensive rewiring projects. We provide transparent, upfront pricing before any work begins with no hidden fees. Our licensed electricians (ROC 276673) ensure all repairs meet Tucson/Pima County electrical codes."
    },
    {
      question: "Why do my circuit breakers keep tripping in my Tucson home?",
      answer: "Circuit breakers trip due to overloaded circuits (common when running multiple AC units or appliances), short circuits, ground faults, or faulty breakers. In Tucson's extreme heat, air conditioning units draw heavy power, and homes built before modern electrical demands may have undersized panels. Our electricians diagnose the root cause and recommend safe solutions including panel upgrades if needed."
    },
    {
      question: "Can you repair aluminum wiring in older Tucson homes?",
      answer: "Yes, we specialize in repairing and replacing aluminum wiring common in Tucson homes built in the 1960s-1970s. Aluminum wiring poses fire risks due to oxidation and loose connections over time. We can install copper pigtails at connections, replace outlets and switches with aluminum-rated devices, or completely rewire sections with modern copper wiring for maximum safety."
    },
    {
      question: "How quickly can you respond to electrical repair calls?",
      answer: "For emergency electrical issues, we typically respond within 1-2 hours in the greater Tucson area. For non-emergency repairs, we usually schedule appointments within 24-48 hours. Our electricians are strategically located throughout Tucson, Oro Valley, Marana, and surrounding communities to ensure fast response times when electrical problems arise."
    },
    {
      question: "What are signs that I need immediate electrical repair?",
      answer: "Call for immediate repair if you notice sparking outlets, burning smells, smoke from outlets or switches, buzzing or sizzling sounds from the electrical panel, outlets or switches hot to the touch, or frequent shocking when touching appliances. These indicate serious safety hazards that could lead to electrical fires and require urgent professional attention."
    },
    {
      question: "Are your electricians licensed to work in Tucson?",
      answer: "Absolutely. All our electricians are fully licensed (ROC 276673), bonded, and insured to perform electrical work throughout Tucson and Pima County. They average 17 years of experience and stay current with all Arizona electrical codes and safety regulations. We're also BBB A+ rated with over 22,000 five-star reviews reflecting our commitment to quality and safety."
    },
    {
      question: "Can electrical repairs help lower my energy bills?",
      answer: "Yes, many electrical repairs improve efficiency and reduce energy waste. Fixing faulty wiring, replacing old outlets and switches, repairing loose connections, and upgrading to modern LED-compatible dimmer switches all reduce phantom power draw and improve system efficiency. In Tucson where cooling costs dominate, even small efficiency improvements can provide noticeable ongoing savings on electricity bills."
    },
    {
      question: "Do you guarantee your electrical repair work?",
      answer: "Yes, we stand behind all electrical repairs with comprehensive workmanship warranties. If an issue arises with our repair work, we'll return to make it right at no additional charge. Our commitment to quality and customer satisfaction has earned us a 4.97-star rating across 22,000+ reviews and 45+ years of trusted service in Tucson."
    },
    {
      question: "Will electrical repairs bring my home up to current code?",
      answer: "Yes, all our electrical repairs comply with current National Electrical Code (NEC) and Tucson/Pima County requirements. When repairing electrical systems, we ensure everything meets modern safety standards including proper grounding, GFCI protection where required, and appropriate wire sizing. We can also identify other code violations during repairs and provide recommendations for bringing your entire system up to current standards."
    }
  ]
};

export const electricalPanelUpgradesFAQs: ServiceFAQs = {
  serviceId: 'electrical-panel-upgrades',
  serviceName: 'Electrical Panel Upgrades',
  faqs: [
    {
      question: "When does my Tucson home need an electrical panel upgrade?",
      answer: "Your home needs a panel upgrade if you have a 60-100 amp panel (common in pre-1980s Tucson homes), frequently tripping breakers, flickering lights when appliances run, plans to add EV charging or solar panels, or appliances that won't run simultaneously. Modern homes need 200-amp service to handle AC units, pool equipment, smart home devices, and electric vehicle charging safely."
    },
    {
      question: "What factors determine electrical panel upgrade costs?",
      answer: "Panel upgrade costs depend on panel size needed (100-amp, 200-amp, or larger), installation complexity, whether meter relocation or service line upgrades are required, and any necessary rewiring. Standard panel replacements are less expensive than complex upgrades requiring extensive electrical work. We provide detailed written estimates after inspecting your current system and electrical needs, with transparent pricing and no hidden fees."
    },
    {
      question: "How long does an electrical panel upgrade take?",
      answer: "Most residential panel upgrades take 6-12 hours of work, typically completed in one day. Your power will be off for 4-8 hours during the installation. We coordinate with Tucson Electric Power for meter disconnection and reconnection, handle all permits and inspections, and schedule work to minimize disruption to your daily routine."
    },
    {
      question: "Do I need a permit for an electrical panel upgrade in Tucson?",
      answer: "Yes, electrical panel upgrades require permits from Tucson/Pima County and must pass inspection to ensure code compliance and safety. Intelligent Design handles all permit applications, coordinates required inspections, and ensures your upgrade meets all National Electrical Code and local requirements. Never hire unlicensed electricians who skip permits—it creates liability and can void homeowner's insurance."
    },
    {
      question: "Will upgrading my electrical panel lower my insurance rates?",
      answer: "Yes, many insurance companies offer discounts for homes with updated electrical panels and modern wiring, especially when replacing outdated fuse boxes or panels with aluminum wiring. Upgrading from old Federal Pacific or Zinsco panels (known fire hazards) can be required for insurance coverage. Contact your insurer after upgrading to inquire about potential discounts that may be available."
    },
    {
      question: "Can I add solar panels or EV charging with my current electrical panel?",
      answer: "Most older Tucson homes with 100-amp or smaller panels need upgrades to safely support solar systems or EV charging. Solar installations typically require dedicated 20-30 amp circuits, while Level 2 EV chargers need 40-50 amp circuits. Our electricians assess your current capacity and recommend appropriate upgrades to support your renewable energy and electric vehicle goals."
    },
    {
      question: "What's the difference between a panel upgrade and a service upgrade?",
      answer: "A panel upgrade replaces just the breaker panel inside your home, while a service upgrade includes replacing the meter base, service entry cable, and sometimes the utility connection from the street—requiring utility company coordination. If your service line is adequate (200-amp), you may only need a panel upgrade. We'll inspect your entire system and recommend the right solution for your needs and budget."
    },
    {
      question: "Are Federal Pacific or Zinsco panels really dangerous?",
      answer: "Yes, both Federal Pacific Electric (FPE) and Zinsco panels have documented safety issues with breakers that fail to trip during overloads, creating serious fire risks. Many insurance companies refuse coverage or charge higher premiums for homes with these panels. If your Tucson home has FPE or Zinsco panels (common in 1960s-1980s construction), we strongly recommend immediate replacement with modern, safe panels."
    },
    {
      question: "Will a panel upgrade increase my home's value?",
      answer: "Yes, an upgraded 200-amp electrical panel increases home value, improves marketability, and is often required for home sales in Tucson. Buyers and inspectors look for modern electrical systems, and updated panels signal a well-maintained home. The upgrade typically returns 50-75% of cost at resale and can be required to close sales when outdated or unsafe panels are discovered during inspections."
    },
    {
      question: "How do I know what size electrical panel I need?",
      answer: "Most modern Tucson homes need 200-amp service to handle central AC (often two units), pool equipment, EV charging, appliances, and future expansion. Homes over 3,000 square feet or with extensive electrical demands may need 300-400 amp service. Our licensed electricians perform load calculations based on your current and planned electrical usage to recommend the right panel size for your needs."
    },
    {
      question: "Do you offer financing for electrical panel upgrades?",
      answer: "Yes, we offer flexible financing options for electrical panel upgrades with approved credit. We understand that panel upgrades are significant investments in your home's safety and functionality, and we work with leading lenders to provide manageable monthly payment plans. Our team can explain available financing options during your free consultation and estimate."
    }
  ]
};

export const circuitBreakersFAQs: ServiceFAQs = {
  serviceId: 'circuit-breakers',
  serviceName: 'Circuit Breaker Services',
  faqs: [
    {
      question: "Why does my circuit breaker keep tripping in Tucson?",
      answer: "Circuit breakers trip due to overloaded circuits (too many devices drawing power), short circuits, ground faults, or faulty breakers. In Tucson's extreme heat, air conditioning units and pool pumps draw heavy power, and running multiple high-draw appliances simultaneously can overload circuits. Our electricians diagnose whether you need circuit additions, panel upgrades, or appliance load balancing."
    },
    {
      question: "What factors affect circuit breaker service costs?",
      answer: "Circuit breaker costs depend on the work required—simple breaker replacements are less involved than adding new circuits or installing specialized GFCI or AFCI breakers. Adding new circuits requires running wire, which varies by distance and complexity. We provide transparent, upfront pricing before work begins and ensure all breaker work meets current Tucson electrical codes."
    },
    {
      question: "What's the difference between GFCI and AFCI breakers?",
      answer: "GFCI (Ground Fault Circuit Interrupter) breakers protect against electrical shocks in wet areas like bathrooms, kitchens, and outdoor outlets—essential for Tucson's monsoon season. AFCI (Arc Fault Circuit Interrupter) breakers detect dangerous electrical arcs that can cause fires, required by code in bedrooms and living areas. Modern homes need both types for comprehensive protection."
    },
    {
      question: "Can I replace a circuit breaker myself?",
      answer: "No, circuit breaker replacement should only be performed by licensed electricians due to serious safety risks and code requirements. Working inside electrical panels exposes you to potentially lethal voltages, and improper installation can cause fires or electrocution. In Tucson/Pima County, permits and inspections are required for breaker work, and DIY electrical work violates code and can void insurance."
    },
    {
      question: "How long do circuit breakers last?",
      answer: "Quality circuit breakers typically last 30-40 years under normal conditions, but Tucson's extreme temperatures and frequent power demands from AC units can shorten lifespans to 25-30 years. Breakers that trip frequently, feel hot, won't reset, or show signs of burning should be replaced immediately regardless of age. Older Federal Pacific and Zinsco breakers should be replaced even if they appear functional."
    },
    {
      question: "What causes a circuit breaker to fail?",
      answer: "Breakers fail from age-related wear, overheating from overloaded circuits, manufacturing defects, corrosion from moisture, and physical damage. In Tucson, extreme attic temperatures where panels are often located accelerate wear, and monsoon moisture can cause corrosion. Certain brands like Federal Pacific are prone to failure and should be replaced regardless of apparent condition."
    },
    {
      question: "Do I need more circuits for modern appliances?",
      answer: "Yes, modern homes require dedicated circuits for many appliances that older Tucson homes lack. EV chargers need dedicated 40-50 amp circuits, tankless water heaters require 40-60 amps, smart home systems benefit from dedicated circuits, and large appliances need individual circuits. Adding circuits prevents overloads, improves safety, and supports modern electrical demands that weren't anticipated in older home designs."
    },
    {
      question: "What are tandem breakers and when should they be used?",
      answer: "Tandem (double-pole) breakers fit two circuits into one panel slot, useful when panels are full but additional circuits are needed. However, they're only safe when panels are rated for tandems and total amperage doesn't exceed panel capacity. Our electricians determine if tandem breakers are appropriate or if a panel upgrade is needed to safely add circuits."
    },
    {
      question: "Why do I need GFCI breakers in Tucson?",
      answer: "GFCI protection is required by code in wet locations including bathrooms, kitchens, outdoor outlets, garages, and pool areas—all common in Tucson homes. GFCIs prevent electrocution by instantly cutting power when ground faults occur, especially important during monsoon season when moisture increases shock risks. All outdoor outlets and pool equipment must have GFCI protection per Arizona electrical code."
    },
    {
      question: "Can you add circuits without upgrading my panel?",
      answer: "It depends on your current panel capacity and available breaker spaces. If you have a 200-amp panel with empty slots and sufficient capacity, we can add circuits without upgrading. However, if your panel is full or undersized (100-amp or less), you'll need a panel upgrade to safely add circuits. We perform load calculations to determine safe options."
    },
    {
      question: "How do I know if my circuit breaker needs replacement?",
      answer: "Replace breakers that trip frequently without cause, won't reset or stay reset, feel hot to touch, show burn marks or discoloration, smell like burning plastic, or are Federal Pacific/Zinsco brands. If your breaker is over 30 years old or your panel trips multiple breakers simultaneously, professional inspection is essential. These are fire and safety hazards requiring immediate attention."
    }
  ]
};

export const outletsSwitchesFAQs: ServiceFAQs = {
  serviceId: 'outlets-switches',
  serviceName: 'Outlets & Switches',
  faqs: [
    {
      question: "What factors determine outlet and switch replacement costs?",
      answer: "Replacement costs depend on device type needed—standard outlets and switches are less expensive than specialized GFCI outlets, USB charging outlets, or smart switches. Whole-home upgrades with multiple devices benefit from volume pricing. Installation complexity, accessibility, and whether new wiring is needed also affect costs. We provide detailed, transparent estimates for any scope of work."
    },
    {
      question: "Why do my outlets not work in my Tucson home?",
      answer: "Non-working outlets result from tripped GFCI outlets upstream, loose wire connections, failed outlets, overloaded circuits, or tripped breakers. In older Tucson homes, aluminum wiring connections can loosen over time causing failures. Our electricians trace circuits to identify the root cause and make reliable repairs that restore power safely."
    },
    {
      question: "What are GFCI outlets and where do I need them?",
      answer: "GFCI (Ground Fault Circuit Interrupter) outlets prevent electrocution by cutting power within milliseconds when ground faults occur. Arizona code requires GFCIs in bathrooms, kitchens within 6 feet of sinks, all outdoor outlets, garages, crawl spaces, and pool areas. In Tucson, outdoor GFCIs are especially important during monsoon season when moisture increases shock risks."
    },
    {
      question: "Can you install USB charging outlets?",
      answer: "Yes, we install modern USB outlets with Type-A and Type-C charging ports, eliminating the need for wall adapters. These are perfect for bedrooms, kitchens, and home offices where you charge phones, tablets, and laptops. USB outlets provide convenient, clutter-free charging while maintaining standard AC outlets for other devices. We provide transparent pricing for any combination of standard and USB outlets."
    },
    {
      question: "Why do my outlets or switches feel warm or hot?",
      answer: "Warm or hot outlets/switches indicate dangerous conditions like loose wire connections, overloaded circuits, failing devices, or undersized wiring. This is a fire hazard requiring immediate professional attention. In Tucson's older homes, aluminum wiring connections are particularly prone to loosening and overheating. Never ignore hot outlets—they're warning signs of potential electrical fires."
    },
    {
      question: "Should I upgrade my old two-prong outlets?",
      answer: "Yes, two-prong (ungrounded) outlets common in pre-1960s Tucson homes should be upgraded for safety and functionality. Modern electronics need grounded (three-prong) outlets for protection. We can install GFCI outlets for protection without rewiring, or properly ground outlets if existing wiring allows. Upgrading also eliminates the need for dangerous three-to-two prong adapters."
    },
    {
      question: "Can you install smart light switches?",
      answer: "Yes, we install all types of smart switches including WiFi-enabled dimmer switches, motion-sensor switches, and voice-controlled switches compatible with Alexa, Google Home, and HomeKit. Smart switches improve convenience, enable automation, and reduce energy costs—important in Tucson where lighting contributes to cooling loads. Installation complexity varies based on existing wiring and switch features, and we provide transparent pricing before beginning work."
    },
    {
      question: "How many outlets should I have in each room?",
      answer: "Current electrical code requires outlets every 12 feet along walls and within 6 feet of doorways, ensuring you're never more than 6 feet from an outlet. Kitchens need outlets every 4 feet along counters. Modern homes benefit from additional outlets for all the devices we use today. We can add outlets during remodels or upgrades to meet current codes and improve convenience."
    },
    {
      question: "What causes outlets to spark when I plug something in?",
      answer: "Small sparks when plugging in devices are normal as electricity bridges the gap, but large sparks, continuous sparking, or burning smells indicate dangerous problems like damaged outlets, loose wiring, or short circuits. These require immediate professional attention. Never use damaged or sparking outlets—they're fire hazards that can ignite nearby materials."
    },
    {
      question: "Can you install outdoor outlets for my Tucson home?",
      answer: "Yes, we install weather-resistant outdoor outlets perfect for Tucson's climate, including monsoon season. All outdoor outlets require GFCI protection and weather-proof covers per electrical code. Outdoor outlets are ideal for holiday lighting, pool equipment, patio heaters, and outdoor entertainment. Installation costs vary based on location, wire run length required, and accessibility. We provide detailed estimates for outdoor electrical work."
    },
    {
      question: "How do I childproof my electrical outlets?",
      answer: "Modern tamper-resistant (TR) outlets have built-in shutters that prevent children from inserting objects, providing superior protection to plastic plug covers. All new outlets installed since 2008 must be TR-rated per code. We can upgrade your outlets to tamper-resistant models throughout your home, providing permanent childproofing without removable covers that can be choking hazards. Volume pricing is available for whole-home upgrades."
    }
  ]
};

export const lightingUpgradesFAQs: ServiceFAQs = {
  serviceId: 'lighting-upgrades',
  serviceName: 'Lighting Upgrades',
  faqs: [
    {
      question: "How much can LED lighting upgrades save on my Tucson energy bills?",
      answer: "LED upgrades typically reduce lighting energy costs by 75-80% compared to incandescent bulbs and 30-40% versus CFLs. For average Tucson homes, LEDs can dramatically reduce monthly lighting expenses. LEDs also reduce cooling loads since they generate minimal heat—important when AC costs dominate summer bills. Most homeowners see complete ROI within 2-3 years through combined lighting and cooling savings."
    },
    {
      question: "What types of lighting upgrades do you offer?",
      answer: "We install LED recessed lighting, under-cabinet lighting, dimmer switches, smart lighting systems, pendant lights, chandelier installations, track lighting, and whole-home LED conversions. We also upgrade outdoor lighting including security lighting, landscape lighting, and pathway lights. Our electricians ensure all installations are properly wired, code-compliant, and optimized for energy efficiency."
    },
    {
      question: "What factors affect lighting upgrade installation costs?",
      answer: "Lighting upgrade costs depend on project scope, fixture types selected, installation complexity, and whether new wiring is required. Simple LED bulb conversions are less involved than recessed lighting installations requiring cutting and wiring. Whole-home upgrades benefit from volume pricing. Smart lighting systems cost more than standard fixtures but provide advanced features and energy savings. We provide detailed, transparent estimates for any lighting project."
    },
    {
      question: "Can you install smart lighting systems?",
      answer: "Yes, we install complete smart lighting systems including WiFi-enabled bulbs, smart switches, motion sensors, and integration with Alexa, Google Home, and Apple HomeKit. Smart lighting provides scheduling, dimming, color changing, and voice control while reducing energy waste. Whole-home smart lighting installations vary based on home size, number of rooms, and desired features. We provide detailed estimates for complete smart lighting solutions."
    },
    {
      question: "Will new lighting reduce my cooling costs in Tucson?",
      answer: "Yes, LED lighting produces 75-80% less heat than incandescent bulbs, significantly reducing cooling loads during Tucson's long summer months. Replacing incandescent bulbs with LEDs can reduce heat output by hundreds of watts—equivalent to removing a small space heater from your home. This reduces AC runtime and costs, providing combined lighting and cooling savings throughout Tucson's hot season."
    },
    {
      question: "How long do LED lights last compared to traditional bulbs?",
      answer: "Quality LED bulbs last 25,000-50,000 hours (15-25 years at typical usage) compared to 1,000 hours for incandescent and 8,000 hours for CFLs. In Tucson where lights run heavily, LEDs virtually eliminate bulb replacement hassle and costs. Commercial-grade LEDs we install last even longer, with some rated for 100,000 hours, making them ideal for hard-to-reach fixtures."
    },
    {
      question: "Can you install recessed lighting in my existing Tucson home?",
      answer: "Yes, we install recessed LED lighting in existing homes, carefully cutting openings and running wiring through attics or crawl spaces. Modern LED recessed fixtures are IC-rated (safe against insulation) and airtight, important for Tucson's energy efficiency. Installation complexity depends on accessibility, existing wiring, and ceiling structure. We ensure all work meets electrical codes and doesn't compromise ceiling integrity."
    },
    {
      question: "What are the best LED bulbs for Tucson's climate?",
      answer: "For Tucson's extreme heat, choose quality LED bulbs rated for enclosed fixtures and high temperatures, especially for outdoor and garage applications where temperatures exceed 120°F. We recommend bulbs with 2700-3000K color temperature for warm, comfortable indoor lighting, and 4000-5000K for task lighting and garages. Quality brands like Philips, GE, and Cree perform reliably in our desert climate."
    },
    {
      question: "Can lighting upgrades increase my home's value?",
      answer: "Yes, modern LED lighting throughout a home is a selling point that appeals to buyers focused on energy efficiency and low maintenance. Recessed lighting, under-cabinet lighting, and outdoor security lighting particularly increase appeal and value. Whole-home lighting upgrades typically return 50-75% of cost at resale while providing immediate energy savings and improved aesthetics during homeownership."
    },
    {
      question: "Do you install dimmer switches for LED lights?",
      answer: "Yes, we install LED-compatible dimmer switches that prevent flickering and ensure smooth dimming. Not all dimmers work with LEDs, so using proper LED dimmers is essential. Dimming capability saves additional energy (dimmed lights use less power), extends bulb life, and creates ambiance. Installation cost varies depending on switch type, features selected, and existing wiring configuration."
    },
    {
      question: "How do I choose the right lighting for each room?",
      answer: "Kitchens and bathrooms benefit from bright LED recessed lighting (4000-5000K), living rooms and bedrooms from warm LEDs (2700-3000K) with dimmer controls, and garages from bright industrial LEDs (5000K+). Our electricians assess each room's function, natural light, and ceiling height to recommend optimal lighting solutions. We ensure adequate light levels while minimizing energy use and glare."
    }
  ]
};

export const outdoorMotionLightingFAQs: ServiceFAQs = {
  serviceId: 'outdoor-motion-lighting',
  serviceName: 'Outdoor Motion Lighting',
  faqs: [
    {
      question: "Why is outdoor motion lighting important for Tucson homes?",
      answer: "Outdoor motion lighting enhances security by deterring burglars and wildlife (javelina, coyotes) common in desert neighborhoods, improves safety by illuminating dark walkways and entry areas, and saves energy by only activating when needed. Motion lighting is especially valuable in Tucson's sprawling desert properties with limited street lighting and wildlife encounters."
    },
    {
      question: "What factors affect outdoor motion lighting costs?",
      answer: "Outdoor motion lighting costs depend on the number of fixtures needed, system sophistication (basic motion sensors vs. smart-enabled systems), wire run distances, integration with existing security systems, and property size. Advanced systems with smartphone control and multiple zones cost more than basic motion sensors. Whole-property perimeter lighting requires more extensive wiring and fixtures. We provide transparent estimates based on your specific security and lighting needs."
    },
    {
      question: "What areas should have motion lighting on my Tucson property?",
      answer: "We recommend motion lighting at all entry doors (front, back, side), garage areas, driveways, pathways to gates, dark corners where wildlife or intruders might hide, and pool areas for safety. In desert properties with extensive yards, perimeter motion lighting helps monitor property boundaries. Strategic placement maximizes security while minimizing nuisance activation from desert wildlife."
    },
    {
      question: "Will motion lights help deter wildlife in Tucson?",
      answer: "Yes, motion-activated lights effectively startle and deter javelina, coyotes, and other wildlife from approaching homes, patios, and pool areas. Bright LED motion lights are particularly effective because they create sudden illumination that wild animals find threatening. However, lights alone aren't foolproof—combining motion lighting with proper waste management and fencing provides best wildlife deterrence."
    },
    {
      question: "Can you install smart motion lighting I can control from my phone?",
      answer: "Yes, we install smart motion lighting systems controllable via smartphone apps, allowing you to adjust sensitivity, set schedules, receive notifications when lights activate, and integrate with home security systems. Smart motion lights can distinguish between animals and people, reducing false activations. Smart-enabled systems cost more than basic motion sensors but provide advanced features and remote control capabilities."
    },
    {
      question: "How do motion sensors work in Tucson's extreme heat?",
      answer: "Quality motion sensors use passive infrared (PIR) technology that detects heat signatures from movement. Tucson's extreme temperatures require commercial-grade sensors designed for desert climates that compensate for high ambient heat. We install sensors rated for operation in 120°F+ temperatures that won't false-trigger from heat and maintain reliable detection year-round."
    },
    {
      question: "Will motion lights be triggered by desert animals constantly?",
      answer: "Properly adjusted motion sensors minimize false triggering from small animals while detecting people and larger wildlife. We adjust sensitivity settings, mounting angles, and detection zones to balance security with preventing nuisance activations. Some smart motion lights can filter out animal-sized objects, only alerting for human-sized heat signatures. Proper installation is key to reliable performance."
    },
    {
      question: "What's the best type of motion light for monsoon season?",
      answer: "For Tucson's monsoon season, we recommend weatherproof LED motion lights with sealed housings, corrosion-resistant finishes, and at least IP65 waterproof ratings. LED fixtures withstand moisture and temperature extremes better than halogen lights. All outdoor electrical work includes GFCI protection per code, preventing shock hazards during wet conditions. Quality fixtures we install carry 5-10 year warranties."
    },
    {
      question: "How much energy do motion lights save compared to always-on outdoor lighting?",
      answer: "Motion lights reduce outdoor lighting energy use by 50-80% compared to dusk-to-dawn fixtures that run all night. LED motion lights only activate when needed, typically running just a few hours total per night depending on activity. For homes with multiple outdoor lights, motion sensors provide substantial monthly electricity savings while delivering better security through unexpected activation that surprises intruders."
    },
    {
      question: "Can motion lights integrate with my existing security system?",
      answer: "Yes, many motion lights can integrate with home security systems, cameras, and smart home platforms. When motion triggers lights, it can simultaneously activate cameras to record, send phone alerts, and integrate with alarm systems. We can configure integrated systems where all security components work together, providing comprehensive property protection. Integration complexity varies by system compatibility."
    },
    {
      question: "How long do outdoor motion sensor lights last in Tucson?",
      answer: "Quality LED motion sensor fixtures last 15-25 years with minimal maintenance, far longer than traditional halogen motion lights that require frequent bulb replacements. LED motion lights withstand Tucson's UV exposure, extreme heat, and monsoon weather better than older technologies. The motion sensors themselves typically last 10-15 years before requiring replacement, providing long-term reliability and security."
    }
  ]
};

export const ceilingFanInstallationFAQs: ServiceFAQs = {
  serviceId: 'ceiling-fan-installation',
  serviceName: 'Ceiling Fan Installation',
  faqs: [
    {
      question: "What factors affect ceiling fan installation costs?",
      answer: "Ceiling fan installation costs depend on whether proper electrical boxes exist, ceiling height and accessibility, fan complexity and features, and whether new wiring is required. Standard installations on existing fan-rated boxes are less involved than installations requiring ceiling box reinforcement or new wiring. High ceiling installations need specialized equipment and additional labor. We provide upfront pricing based on your specific installation requirements and ceiling configuration."
    },
    {
      question: "Can ceiling fans really help lower cooling costs in Tucson?",
      answer: "Yes, ceiling fans can reduce AC costs by 20-30% by circulating air and making rooms feel 4-6°F cooler through wind-chill effect. This allows you to raise thermostat settings without sacrificing comfort. In Tucson where cooling costs dominate summer bills, strategic ceiling fan use provides substantial monthly savings while improving comfort throughout your home, especially during shoulder seasons when fans alone may suffice."
    },
    {
      question: "What size ceiling fan do I need for my room?",
      answer: "Rooms up to 75 square feet need 29-36\" fans, 76-144 sq ft need 36-42\" fans, 144-225 sq ft need 44-50\" fans, and 225-400 sq ft need 50-60\" fans. Tucson's high ceilings in many homes may require downrods to position fans 8-9 feet above floor for optimal performance. Our electricians help you select properly sized fans for maximum cooling efficiency."
    },
    {
      question: "Can you install ceiling fans on high or vaulted ceilings?",
      answer: "Yes, we install ceiling fans on vaulted, cathedral, and high ceilings common in Tucson homes. High ceiling installations require special downrods, angled mounting boxes, and sometimes scaffolding or lifts for safe installation. Fans on 12-16 foot ceilings cost more to install due to equipment needs and complexity, but provide excellent air circulation in tall spaces. We provide detailed estimates for challenging installations."
    },
    {
      question: "Should ceiling fans run year-round in Tucson?",
      answer: "Yes, ceiling fans benefit Tucson homes year-round. In summer, fans run counterclockwise to push air down, creating cooling breeze. In winter (which is mild in Tucson), reverse to clockwise on low speed to pull cool air up and push warm air down, improving heating efficiency. Year-round fan use in Tucson primarily aids cooling but can improve comfort during cooler months too."
    },
    {
      question: "Can you install outdoor ceiling fans on my Tucson patio?",
      answer: "Yes, we install weatherproof outdoor ceiling fans designed for Tucson's extreme conditions including intense UV, monsoon moisture, and temperature extremes. Outdoor fans must be UL-rated for wet or damp locations and require GFCI-protected circuits. Patio fans make outdoor spaces comfortable during hot months, extending usable outdoor living time. Installation costs vary based on location, wiring requirements, and fan specifications."
    },
    {
      question: "What's the difference between fan-rated and regular ceiling boxes?",
      answer: "Fan-rated electrical boxes are reinforced to support ceiling fans' weight and vibration, while regular boxes aren't. Installing fans on non-rated boxes risks ceiling damage or fan collapse. If your existing box isn't fan-rated, we install proper fan-rated boxes anchored to ceiling joists. This additional work ensures safe, wobble-free operation and is essential for code compliance and safety."
    },
    {
      question: "Can you install ceiling fans with light kits?",
      answer: "Yes, we install ceiling fans with integrated or add-on light kits, providing both cooling and illumination from one fixture. This is ideal for bedrooms, living rooms, and dining areas. We ensure proper wiring for independent fan and light controls, either via pull chains, wall switches, or remote controls. Combo fan/light installations provide excellent value and convenience in a single fixture."
    },
    {
      question: "Do you install smart ceiling fans with remote or app control?",
      answer: "Yes, we install smart ceiling fans controlled via remote, smartphone apps, or voice assistants (Alexa, Google Home). Smart fans allow speed adjustment, light control, scheduling, and integration with home automation. This is especially convenient in bedrooms and living rooms. Smart fan installation costs vary based on fan features, control options selected, and integration complexity with existing home automation systems."
    },
    {
      question: "Why does my ceiling fan wobble or make noise?",
      answer: "Fan wobbling results from unbalanced blades, loose mounting, improper electrical box support, or bent blade irons. Noise comes from loose screws, worn bearings, or fan interference with ceiling. These issues indicate improper installation or maintenance needs. We can diagnose wobble/noise issues and correct them through balancing, tightening, or replacement if necessary. Repair costs depend on the specific issue and parts needed."
    },
    {
      question: "How long do ceiling fans last in Tucson?",
      answer: "Quality ceiling fans last 15-25 years with proper installation and minimal maintenance. Tucson's extreme attic temperatures and dust can shorten lifespan for lower-quality fans. We recommend fans with sealed, permanently lubricated bearings and weather-resistant finishes for longevity. Energy-efficient DC motor fans last longer and use 70% less energy than traditional AC motor fans, providing substantial annual electricity savings."
    }
  ]
};

export const generacInstallationFAQs: ServiceFAQs = {
  serviceId: 'generac-installation',
  serviceName: 'Generac Generator Installation',
  faqs: [
    {
      question: "Why do Tucson homeowners need backup generators?",
      answer: "Tucson experiences frequent power outages during monsoon season (June-September) from lightning strikes, high winds, and haboobs, plus occasional grid issues during peak summer demand. Generators keep AC running during outages—critical when temperatures exceed 110°F—and power medical equipment, refrigeration, and home security systems. Whole-home generators provide peace of mind and safety during Arizona's extreme weather."
    },
    {
      question: "What factors determine Generac generator installation costs?",
      answer: "Generac generator installation costs depend on generator size needed (10-26kW typical for homes), fuel type selected (natural gas vs. propane), installation complexity, distance from gas meter or need for propane tank, electrical work required, concrete pad preparation, and permitting fees. Every installation is unique based on your home's specific needs and existing infrastructure. We provide detailed written estimates including all components and installation work with transparent, upfront pricing."
    },
    {
      question: "What size Generac generator do I need for my Tucson home?",
      answer: "Most Tucson homes need 16-22kW generators to power two AC units (essential in our climate), refrigeration, lighting, and essential circuits. Smaller homes with one AC may function with 10-14kW units, while larger homes or those with pools may need 24-26kW generators. We perform detailed load calculations considering your AC units, appliances, and essential circuits to recommend properly sized generators."
    },
    {
      question: "How long does Generac generator installation take?",
      answer: "Typical residential Generac installation takes 2-4 days including site preparation, concrete pad installation, gas line connection, electrical transfer switch installation, generator hookup, permitting, and startup. Gas line extensions or extensive electrical work may extend timelines to 5-7 days. We coordinate all trades, handle permits and inspections, and test systems thoroughly before completion."
    },
    {
      question: "Should I choose natural gas or propane for my Tucson generator?",
      answer: "If natural gas service exists at your home, it's usually the best choice for convenience and unlimited fuel supply—you'll never run out during extended outages. Homes without natural gas use propane tanks (typically 250-500 gallons), which require monitoring and refilling but work anywhere. Natural gas hookup costs depend on existing line proximity, while propane requires tank installation and delivery setup. We'll assess your property and recommend the most cost-effective fuel option."
    },
    {
      question: "Do I need permits for Generac generator installation in Tucson?",
      answer: "Yes, generator installations require electrical permits from Tucson/Pima County, plus gas permits for fuel line connections. Generators must be installed per National Electrical Code and local setback requirements (typically 5 feet from structures). Intelligent Design handles all permitting, coordinates required inspections, and ensures code-compliant installation. Never hire installers who skip permits—it creates liability and violates codes."
    },
    {
      question: "How loud are Generac generators?",
      answer: "Modern Generac generators operate at 60-70 decibels (comparable to normal conversation or dishwasher). Quieter models with sound enclosures run around 60dB. Tucson's residential code requires generators be positioned to minimize neighbor impact, typically 5+ feet from property lines. We help position generators to balance noise, setback requirements, and service access while meeting all code requirements."
    },
    {
      question: "Will a generator power my whole house during outages?",
      answer: "Yes, properly sized whole-home generators power all essential circuits including AC, refrigeration, lights, outlets, and appliances. Some homeowners choose to exclude non-essential loads (pool equipment, garage circuits) to reduce generator size and cost. We design transfer switch configurations that prioritize critical loads, ensuring your family stays safe and comfortable during outages regardless of duration."
    },
    {
      question: "How do Generac generators know when to turn on?",
      answer: "Generac generators include automatic transfer switches that monitor utility power 24/7. When outages occur, generators auto-start within 10-20 seconds and transfer your home's power to generator supply. When utility power returns, the system automatically transfers back and shuts down the generator. This happens seamlessly whether you're home or away, providing uninterrupted protection."
    },
    {
      question: "What maintenance do Generac generators require?",
      answer: "Generac generators need annual professional maintenance including oil changes, air filter replacement, spark plug inspection, battery testing, and system diagnostics—similar to vehicle maintenance. We offer flexible maintenance plans to keep your generator running reliably. Generators also self-test weekly for 10-15 minutes to ensure readiness. Proper maintenance extends generator life to 20-30 years and ensures reliable operation during emergencies."
    },
    {
      question: "Do Generac generators increase home value?",
      answer: "Yes, installed generators typically increase home value by 3-5% and significantly improve marketability, especially in Tucson where power reliability concerns exist. Generators are particularly attractive to buyers with medical needs, home businesses, or those who've experienced extended outages. The investment often returns 50-100% of cost at resale while providing valuable protection during ownership."
    }
  ]
};

export const generacRepairFAQs: ServiceFAQs = {
  serviceId: 'generac-repair',
  serviceName: 'Generac Generator Repair',
  faqs: [
    {
      question: "What are common problems with Generac generators in Tucson?",
      answer: "Common issues include battery failures from extreme heat (Tucson's temperatures are harsh on batteries), fuel system problems from extended non-use, transfer switch failures, control panel errors, and oil leaks. Desert dust can clog air filters reducing performance, while monsoon moisture can cause electrical issues. Regular maintenance prevents most problems, but when issues arise, professional repair is essential for reliability."
    },
    {
      question: "What factors affect Generac generator repair costs?",
      answer: "Generator repair costs depend on the specific issue diagnosed, parts needed, and labor complexity. Simple repairs like battery replacements are less expensive than control board or transfer switch repairs, while major engine work requires more extensive service. We provide transparent diagnostic fees credited toward repairs and upfront pricing before any work begins, ensuring you understand exactly what you're paying for with no surprise charges."
    },
    {
      question: "Do you offer emergency Generac repair services?",
      answer: "Yes, we provide emergency generator repair services, especially critical during monsoon season when outages are frequent. We understand that non-functioning generators during Tucson's extreme heat pose safety risks, especially for families with medical needs or elderly members. Our technicians respond quickly to diagnose and repair generator issues to restore your backup power protection."
    },
    {
      question: "Why won't my Generac generator start?",
      answer: "Generators fail to start due to dead batteries (common in Tucson's heat), low fuel or fuel system issues, control panel errors, faulty starter motors, or safety lockouts from error codes. Sometimes generators enter maintenance lockout mode after hours of use. Our trained technicians diagnose starting issues, clear error codes, and make necessary repairs to restore reliable auto-start functionality."
    },
    {
      question: "How often should Generac generators be serviced in Tucson?",
      answer: "Tucson's extreme climate demands annual professional service including oil changes, air filter replacement (more frequent due to dust), battery testing, spark plug inspection, and system diagnostics. Generators in heavy use or those running during multiple outages may need semi-annual service. Regular maintenance prevents 90% of generator failures and ensures reliability when you need backup power most."
    },
    {
      question: "Can you repair older Generac generators?",
      answer: "Yes, we repair Generac generators of all ages, though parts availability and cost-effectiveness vary with age. Generators over 15-20 years old may need evaluation to determine if repairs or replacement make better financial sense. We provide honest recommendations based on repair costs, parts availability, and remaining expected lifespan. Our goal is the most cost-effective solution for your backup power needs."
    },
    {
      question: "What does a Generac generator service include?",
      answer: "Comprehensive service includes oil and filter changes, air filter replacement/cleaning, spark plug inspection and replacement, battery testing and replacement if needed, control system diagnostics, transfer switch testing, fuel system inspection, coolant level check, and full load testing. We also verify auto-start functionality and clear any error codes. Service typically takes 1-2 hours and ensures your generator is ready when you need it most."
    },
    {
      question: "Why does my generator run but not produce power?",
      answer: "Generators that run without producing power typically have transfer switch failures, circuit breaker trips, control board issues, or voltage regulation problems. The automatic transfer switch may not be engaging properly to deliver generator power to your home. These issues require professional diagnosis and repair—attempting DIY fixes on high-voltage transfer equipment is dangerous."
    },
    {
      question: "How long do Generac generators last in Tucson?",
      answer: "With proper annual maintenance, Generac generators typically last 20-30 years in residential applications. Tucson's extreme heat can reduce component lifespan, making regular service even more important. Generators running during frequent outages accumulate more hours and may need earlier replacement. Quality maintenance significantly extends generator life and ensures reliable performance throughout ownership."
    },
    {
      question: "Can you upgrade my older Generac generator's control system?",
      answer: "In some cases, we can upgrade control systems and transfer switches on older Generac generators to add features like mobile monitoring, remote start capability, and improved diagnostics. However, major upgrades may approach new generator costs. We evaluate whether upgrades, repairs, or replacement provide best value based on your current generator's condition and your needs."
    },
    {
      question: "Do you offer maintenance plans for Generac generators?",
      answer: "Yes, we offer annual maintenance plans for Generac generators that include scheduled service visits, priority emergency repair response, discounted repair rates, and reminders when service is due. Plan costs depend on generator size and service scope needed. Regular maintenance through our plans ensures your generator is always ready to protect your home during power outages, providing peace of mind and maximum reliability."
    }
  ]
};
