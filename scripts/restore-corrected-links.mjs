import fs from 'fs';
import path from 'path';

// Mapping of old incorrect URLs to correct URLs and their display text patterns
const linkRestorations = [
  {
    oldSlug: 'furnaces',
    newUrl: '/services/furnaces-tucson',
    displayTexts: ['furnace installations', 'furnace systems', 'furnaces', 'Furnaces', 'furnace']
  },
  {
    oldSlug: 'solar-ac',
    newUrl: '/services/solar-a-c',
    displayTexts: ['solar AC', 'Solar AC', 'solar-powered AC', 'solar air conditioning', 'solar A/C']
  },
  {
    oldSlug: 'family-protection-plans',
    newUrl: '/family-protection-plans',
    displayTexts: ['Family Protection Plan', 'Family Protection Plans', 'protection plan', 'protection plans']
  },
  {
    oldSlug: 'air-quality',
    newUrl: '/services/indoor-air-quality-tucson',
    displayTexts: ['air quality', 'Air Quality', 'indoor air quality', 'Indoor Air Quality']
  },
  {
    oldSlug: 'hybrid-water-heaters-tucson',
    newUrl: '/services/hybrid-water-heaters',
    displayTexts: ['hybrid water heaters', 'Hybrid Water Heaters', 'hybrid water heater']
  },
  {
    oldSlug: 'metal-roofs-tucson',
    newUrl: '/services/metal-roofs',
    displayTexts: ['metal roofs', 'Metal Roofs', 'metal roofing', 'metal roof']
  },
  {
    oldSlug: 'generac-installation-green-valley',
    newUrl: '/services/generac-installation',
    displayTexts: ['Generac installation', 'generator installation', 'Generac generator installation']
  },
  {
    oldSlug: 'generac-repair-green-valley',
    newUrl: '/services/generac-repair',
    displayTexts: ['Generac repair', 'generator repair', 'Generac generator repair']
  },
  {
    oldSlug: 'new-home-buyer-offer',
    newUrl: '/new-homebuyer-offer',
    displayTexts: ['new homebuyer offer', 'New Homebuyer Offer', 'New Home Buyer Offer']
  },
  {
    oldSlug: 'realtor-offer',
    newUrl: '/realtors-offer',
    displayTexts: ['realtor offer', 'Realtor Offer', 'REALTORS offer', 'realtors offer']
  },
  {
    oldSlug: 'realtors-offer',
    newUrl: '/realtors-offer',
    displayTexts: ['realtor offer', 'Realtor Offer', 'REALTORS offer', 'realtors offer']
  },
  {
    oldSlug: 'recent-projects',
    newUrl: '/recent-projects',
    displayTexts: ['recent projects', 'Recent Projects', 'our recent projects']
  },
  {
    oldSlug: 'knowledgehub',
    newUrl: '/knowledge-hub',
    displayTexts: ['knowledge hub', 'Knowledge Hub']
  },
  {
    oldSlug: 'preventative-maintenance',
    newUrl: '/services/ac-tuneup-tucson',
    displayTexts: ['preventative maintenance', 'preventive maintenance', 'Preventative Maintenance']
  },
  {
    oldSlug: 'preventative-maintenance-plans',
    newUrl: '/services/ac-tuneup-tucson',
    displayTexts: ['preventative maintenance plans', 'maintenance plans', 'Preventative Maintenance Plans']
  },
  {
    oldSlug: 'hvac-tucson-plans',
    newUrl: '/services/hvac-tucson',
    displayTexts: ['HVAC plans', 'HVAC maintenance plans', 'HVAC service plans']
  },
  {
    oldSlug: 'duct-services',
    newUrl: '/services/duct-services-tucson',
    displayTexts: ['duct services', 'Duct Services', 'complete duct services']
  },
  {
    oldSlug: 'duct-inspection-tucson',
    newUrl: '/services/duct-services-tucson',
    displayTexts: ['duct inspection', 'Duct Inspection', 'duct inspections']
  },
  {
    oldSlug: 'tankless-water-heater-installation',
    newUrl: '/services/water-heater-installation',
    displayTexts: ['tankless water heater installation', 'tankless installation']
  },
  {
    oldSlug: 'insurance-claim-assistance',
    newUrl: '/services/residential-roof-repair',
    displayTexts: ['insurance claim assistance', 'Insurance Claim Assistance']
  },
  {
    oldSlug: 'irrigation-repair',
    newUrl: '/services/leak-detection-tucson',
    displayTexts: ['irrigation repair', 'Irrigation Repair']
  },
  {
    oldSlug: 'roof-insurance-claims',
    newUrl: '/services/residential-roof-repair',
    displayTexts: ['roof insurance claims', 'Roof Insurance Claims', 'insurance claims']
  },
  {
    oldSlug: 'plumbing-armory-park',
    newUrl: '/services/plumbing-tucson',
    displayTexts: ['Armory Park', 'plumbing in Armory Park']
  },
  {
    oldSlug: 'plumbing-flowing-wells',
    newUrl: '/services/plumbing-tucson',
    displayTexts: ['Flowing Wells', 'plumbing in Flowing Wells']
  },
  {
    oldSlug: 'plumbing-iron-horse',
    newUrl: '/services/plumbing-tucson',
    displayTexts: ['Iron Horse', 'plumbing in Iron Horse']
  },
  {
    oldSlug: 'plumbing-midtown-tucson',
    newUrl: '/services/plumbing-tucson',
    displayTexts: ['Midtown Tucson', 'plumbing in Midtown']
  },
  {
    oldSlug: 'plumbing-rebates-tucson',
    newUrl: '/services/plumbing-tucson',
    displayTexts: ['plumbing rebates', 'Plumbing Rebates']
  },
  {
    oldSlug: 'plumbing-sam-hughes',
    newUrl: '/services/plumbing-tucson',
    displayTexts: ['Sam Hughes', 'plumbing in Sam Hughes']
  },
  {
    oldSlug: 'plumbing-south-tucson',
    newUrl: '/services/plumbing-tucson',
    displayTexts: ['South Tucson', 'plumbing in South Tucson']
  },
];

const servicesDir = 'data/pages/services';
let totalRestored = 0;
let filesModified = 0;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;
  let restoredCount = 0;
  
  for (const restoration of linkRestorations) {
    for (const displayText of restoration.displayTexts) {
      // Look for the display text that was previously a link
      // We need to find text that:
      // 1. Is NOT already inside a [link:...|...] tag
      // 2. Matches the display text exactly
      
      // First, protect existing links by replacing them with placeholders
      const linkPlaceholders = [];
      const existingLinkPattern = /\[link:[^\]]+\]/g;
      let tempContent = content.replace(existingLinkPattern, (match) => {
        linkPlaceholders.push(match);
        return `__LINK_PLACEHOLDER_${linkPlaceholders.length - 1}__`;
      });
      
      // Now look for the plain display text
      const escapedText = displayText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const plainTextPattern = new RegExp(`\\b${escapedText}\\b`, 'g');
      
      // Only restore if the text appears in content that looks like it should be linked
      // (e.g., in service descriptions, not in headings or random places)
      let modified = false;
      tempContent = tempContent.replace(plainTextPattern, (match) => {
        // Check if this is in a context where it should be a link
        // For now, just restore all instances
        restoredCount++;
        modified = true;
        return `[link:${restoration.newUrl}|${match}]`;
      });
      
      // Restore the protected links
      for (let i = 0; i < linkPlaceholders.length; i++) {
        tempContent = tempContent.replace(`__LINK_PLACEHOLDER_${i}__`, linkPlaceholders[i]);
      }
      
      if (modified) {
        content = tempContent;
      }
    }
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Restored ${restoredCount} links in ${path.basename(filePath)}`);
    totalRestored += restoredCount;
    filesModified++;
  }
  
  return content !== originalContent;
}

// Get all TypeScript files in services directory
const files = fs.readdirSync(servicesDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts')
  .map(f => path.join(servicesDir, f));

console.log(`Processing ${files.length} service data files to restore corrected links...\n`);

for (const file of files) {
  processFile(file);
}

console.log('\n=== Summary ===');
console.log(`Total links restored: ${totalRestored}`);
console.log(`Files modified: ${filesModified}`);
