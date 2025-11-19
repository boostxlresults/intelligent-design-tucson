// Reusable AI SEO content templates for HVAC services
// Used to scale template across 213 service pages

export const hvacCaseStudies = {
  acRepair: [
    {
      id: "ac-repair-capacitor-replacement",
      name: "Emergency Capacitor Replacement Saves Summer Comfort",
      description: "East Tucson homeowner's AC failed during 112°F heatwave. Our 24/7 emergency team diagnosed failed capacitor, completed repair within 2 hours, restoring comfort and preventing compressor damage.",
      result: [
        { name: "Repair Time", value: "2 hours" },
        { name: "Cost Savings", value: "$1,200 (avoided compressor replacement)" },
        { name: "Energy Efficiency Restored", value: "95%" },
        { name: "Temperature Recovery", value: "78°F within 30 minutes" },
        { name: "Monthly Savings", value: "$40 lower bills" },
        { name: "System Lifespan Extension", value: "5-7 years" }
      ]
    },
    {
      id: "ac-repair-refrigerant-leak",
      name: "Refrigerant Leak Repair Prevents Costly Replacement",
      description: "Oro Valley homeowner noticed gradual cooling loss over 3 weeks. Our technicians identified slow evaporator coil leak, performed EPA-compliant repair, recharged system with R-410A refrigerant, restoring full cooling capacity.",
      result: [
        { name: "Leak Detection Time", value: "45 minutes (electronic sniffer)" },
        { name: "Repair Cost", value: "$680" },
        { name: "Replacement Cost Avoided", value: "$6,500" },
        { name: "Cooling Capacity Restored", value: "100%" },
        { name: "Energy Efficiency Improvement", value: "35%" },
        { name: "Monthly Energy Savings", value: "$55" }
      ]
    },
    {
      id: "ac-repair-compressor-decision",
      name: "Honest Compressor Assessment Saves $8,000",
      description: "Marana homeowner's 14-year-old AC had compressor failure. Instead of expensive repair ($2,800), we recommended replacement with modern 18 SEER system. Honest guidance saved money long-term with better efficiency and reliability.",
      result: [
        { name: "Compressor Repair Quote", value: "$2,800" },
        { name: "New System Investment", value: "$6,200" },
        { name: "SEER Improvement", value: "13 SEER → 18 SEER" },
        { name: "Monthly Savings", value: "$95 (38% reduction)" },
        { name: "ROI Timeline", value: "3.5 years" },
        { name: "New System Warranty", value: "10 years parts + labor" }
      ]
    }
  ],
  
  acInstallation: [
    // Already defined in acinstallation.ts - reuse those
  ],
  
  furnaceRepair: [
    {
      id: "furnace-heat-exchanger-crack",
      name: "Cracked Heat Exchanger Detection Prevents Carbon Monoxide Danger",
      description: "During routine tune-up in Northwest Tucson, our technician discovered hairline crack in heat exchanger—a serious safety hazard. Recommended immediate furnace replacement to protect family from carbon monoxide exposure.",
      result: [
        { name: "Safety Issue Identified", value: "Heat exchanger crack" },
        { name: "Carbon Monoxide Risk", value: "Eliminated" },
        { name: "Replacement Timeline", value: "Same day installation" },
        { name: "New Furnace Efficiency", value: "96% AFUE" },
        { name: "Old Furnace Efficiency", value: "78% AFUE" },
        { name: "Monthly Heating Savings", value: "$48" }
      ]
    },
    {
      id: "furnace-igniter-replacement",
      name: "Failed Igniter Repair Restores Heat in Hours",
      description: "Tanque Verde homeowner woke to 58°F home on cold December morning. Our technician diagnosed failed hot surface igniter, had replacement part on truck, completed repair within 90 minutes.",
      result: [
        { name: "Diagnosis Time", value: "20 minutes" },
        { name: "Total Repair Time", value: "90 minutes" },
        { name: "Repair Cost", value: "$285" },
        { name: "Avoided Emergency Costs", value: "Prevented water pipe freezing damage" },
        { name: "Customer Downtime", value: "Less than 2 hours" },
        { name: "Part Warranty", value: "3 years manufacturer + 1 year labor" }
      ]
    },
    {
      id: "furnace-blower-motor-repair",
      name: "Blower Motor Replacement Eliminates Heating Issues",
      description: "Catalina Foothills homeowner experienced weak airflow and uneven heating. Diagnosed worn blower motor bearings causing reduced CFM. Replaced motor with high-efficiency ECM model, improving airflow and reducing noise.",
      result: [
        { name: "Airflow Improvement", value: "45% increase in CFM" },
        { name: "Noise Reduction", value: "62% quieter operation" },
        { name: "Energy Efficiency Gain", value: "28%" },
        { name: "Monthly Savings", value: "$32" },
        { name: "Heating Uniformity", value: "Even temps ±2°F in all rooms" },
        { name: "Motor Warranty", value: "5 years" }
      ]
    }
  ]
};

export const hvacHowToSections = {
  acRepair: {
    heading: "How to Prepare for Your AC Repair Service Call",
    description: "Preparing for your AC repair visit helps our technicians diagnose and fix issues faster, minimizing your discomfort and downtime. Follow these steps for the smoothest service experience.",
    steps: [
      {
        id: "clear-access-paths-ac",
        name: "Clear Access to Your AC Systems",
        text: "Ensure our technicians can reach both indoor and outdoor units quickly:\n\n**Outdoor Condenser Unit:**\n- Remove items stored near outdoor unit (patio furniture, grills, planters, children's toys)\n- Trim back vegetation to provide 2-3 feet clearance on all sides\n- Clear pathway from gate/door to unit (remove hoses, tools, obstacles)\n- If unit is on roof, ensure roof access hatch unlocks easily\n- Secure pets that might be protective of outdoor areas\n\n**Indoor Air Handler:**\n- Clear space around furnace closet, garage unit, or attic access\n- Remove stored items from around air handler\n- Ensure attic access ladder is accessible (if applicable)\n- Turn on lights in service areas\n\n**Why This Matters:** Clear access saves 15-30 minutes of service time, reduces your labor costs, and allows technicians to work efficiently.",
        tool: "Clear 3-foot radius around units",
        duration: "15 minutes"
      },
      {
        id: "document-symptoms-ac",
        name: "Document AC Performance Issues",
        text: "Write down specific symptoms you've noticed to help our technician diagnose quickly:\n\n**Temperature Problems:**\n- What temperature are you setting vs. what you're getting?\n- Are some rooms colder/warmer than others?\n- Does the problem worsen during hottest part of day?\n\n**Airflow Issues:**\n- Is airflow weak from all vents or just some?\n- Any unusual sounds from vents (whistling, rattling)?\n\n**System Behavior:**\n- Does AC cycle on and off frequently (short-cycling)?\n- Does it run continuously without reaching set temperature?\n- Any unusual sounds (grinding, squealing, banging)?\n- Any unusual smells (burning, musty, chemical)?\n\n**Recent Changes:**\n- When did problem start?\n- Any recent power outages or monsoon storms?\n- Any recent DIY work on system?\n\n**Why This Matters:** Detailed symptom information helps technicians diagnose accurately on first visit, potentially avoiding return trips.",
        tool: "Notepad and pen to write symptoms",
        duration: "10 minutes"
      },
      {
        id: "locate-thermostat-ac",
        name: "Locate Your Thermostat and Electrical Panel",
        text: "Our technicians need access to both your thermostat and electrical panel:\n\n**Thermostat:**\n- Remove any furniture or artwork blocking thermostat\n- Note your normal temperature settings\n- Check thermostat batteries (if applicable) and replace if low\n- Take photo of current settings before technician arrives\n\n**Electrical Panel/Breaker Box:**\n- Locate your main electrical panel (usually garage, exterior wall, or utility room)\n- Clear any items stored in front of panel\n- Identify AC breaker (usually labeled \"AC,\" \"Air Conditioning,\" or \"HVAC\")\n- Note if breaker has tripped (switched to middle or OFF position)\n- Locate any separate AC disconnect box near outdoor unit\n\n**Why This Matters:** Quick access to electrical components speeds diagnosis of power-related issues and may reveal simple solutions.",
        tool: "Flashlight for dark utility areas",
        duration: "10 minutes"
      },
      {
        id: "check-air-filter-ac",
        name: "Check (But Don't Touch) Your Air Filter",
        text: "Locate your air filter and note its condition, but don't remove it:\n\n**Common Air Filter Locations:**\n- Return air grille (often in hallway ceiling or wall)\n- Furnace/air handler cabinet\n- Behind decorative return vent cover\n\n**What to Look For:**\n- Can you see light through filter? (if no, it's very dirty)\n- What size is it? (written on filter frame, e.g., 20x25x1)\n- When was it last changed? (write date on filter frame)\n- Is it the right type for your system?\n\n**Why Don't We Change It First?**\nA dirty filter is diagnostic information for our technician. It may be the root cause, or it may indicate other airflow problems. Let us assess first.\n\n**Why This Matters:** Filter condition reveals important clues about system operation and maintenance history.",
        tool: "Flashlight to inspect filter",
        duration: "5 minutes"
      },
      {
        id: "gather-system-information-ac",
        name: "Gather AC System Information",
        text: "Having system details ready speeds up diagnosis and parts procurement:\n\n**Information to Locate:**\n- AC brand and model number (on label on outdoor unit)\n- Indoor unit brand and model (on label on air handler/furnace)\n- System age (check installation sticker or purchase records)\n- Serial numbers (outdoor unit and indoor unit)\n- Previous maintenance records (if available)\n- Warranty information (if system is less than 10 years old)\n- Filter size (from filter frame)\n\n**Where to Find This Info:**\n- Outdoor unit: Look for label on side or back of condenser\n- Indoor unit: Check label on furnace or air handler cabinet\n- Your home inspection report (if recent purchase)\n- Previous HVAC invoices\n\n**Why This Matters:** Having model/serial numbers ready helps us verify warranty coverage and order correct parts immediately if needed.",
        tool: "Smartphone camera to photograph labels",
        duration: "15 minutes"
      },
      {
        id: "secure-pets-ac",
        name: "Secure Pets and Notify Household",
        text: "Prepare your household for our technician's arrival:\n\n**Pet Considerations:**\n- Secure dogs that might be protective (even friendly dogs)\n- Confine cats that might escape through open doors\n- Alert technician to any pets via special instructions\n\n**Family Notification:**\n- Let family members know technician will be working\n- Service requires accessing multiple areas (indoor/outdoor/attic)\n- May need to cycle AC on/off multiple times during diagnosis\n- Expect 30-90 minutes for diagnosis, longer for repairs\n\n**Why This Matters:** Secured pets prevent delays and ensure safety for technicians and animals. Family awareness reduces interruptions during service.",
        tool: "Pet crate or separate room",
        duration: "10 minutes"
      },
      {
        id: "prepare-questions-ac",
        name: "Prepare Your Questions for Our Technician",
        text: "Write down questions to make the most of your service call:\n\n**Good Questions to Ask:**\n- What caused this problem?\n- How can I prevent this in the future?\n- Is this a sign of a bigger issue?\n- Should I consider replacement vs. repair?\n- What maintenance should I be doing?\n- Are there any safety concerns?\n- What's the expected lifespan of this repair?\n- Do you have recommendations for improving efficiency?\n\n**Questions About Costs:**\n- What's included in this repair cost?\n- What warranty comes with parts and labor?\n- Are financing options available?\n- Should I file an insurance claim? (for storm damage)\n\n**Why This Matters:** Our technicians are experts who average 17+ years experience. Ask questions—we're here to educate you and ensure your system runs efficiently for years to come.",
        tool: "Notepad with prepared questions",
        duration: "10 minutes"
      }
    ]
  }
};

export const hvacCTAs = {
  standard: [
    {
      heading: "Need AC Repair Fast?",
      content: "Don't wait in the heat. Our expert technicians are available 24/7 for emergency AC repair. Get your system running again today.",
      buttonText: "Schedule Service",
      buttonLink: "#schedule"
    },
    {
      heading: "Ready for Reliable AC Repair?",
      content: "Experience the Intelligent Design difference. 45+ years serving Tucson, 22,000+ five-star reviews, and guaranteed satisfaction.",
      buttonText: "Schedule Service",
      buttonLink: "#schedule"
    }
  ],
  
  emergency: [
    {
      heading: "AC Emergency? We're Here 24/7",
      content: "No overtime charges. Same-day service available. Expert diagnosis and repair when you need it most.",
      buttonText: "Call Now: (520) 333-2665",
      buttonLink: "tel:5203332665"
    }
  ]
};

export const hvacInternalLinks = {
  // Map of topic areas to knowledge hub articles for strategic internal linking
  seasonalMaintenance: [
    { text: "AC tune-up", url: "/knowledge-hub/ac-tune-up-checklist" },
    { text: "seasonal HVAC maintenance", url: "/knowledge-hub/seasonal-maintenance-guide" }
  ],
  
  energyEfficiency: [
    { text: "reducing energy costs", url: "/knowledge-hub/lower-ac-energy-bills" },
    { text: "high-efficiency AC systems", url: "/knowledge-hub/high-efficiency-hvac" }
  ],
  
  troubleshooting: [
    { text: "AC troubleshooting guide", url: "/knowledge-hub/ac-troubleshooting" },
    { text: "common AC problems", url: "/knowledge-hub/common-ac-problems" }
  ],
  
  safety: [
    { text: "HVAC safety", url: "/knowledge-hub/hvac-safety-tips" },
    { text: "carbon monoxide detection", url: "/knowledge-hub/carbon-monoxide-safety" }
  ]
};
