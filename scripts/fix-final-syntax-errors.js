#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files with "Expected ',', got ':'" error (missing ] and comma before faqs)
const missingBracketFiles = [
  'acservice.ts',
  'actuneup.ts',
  'ductrepair.ts',
  'familyprotectionplans.ts',
  'furnaces.ts',
  'heaterinstallation.ts',
  'heaterrepair.ts',
  'heaterservice.ts',
  'heatertuneup.ts',
  'heatpumps.ts',
  'indoorairquality.ts',
  'knowledgehub.ts',
  'privacypolicy.ts',
  'rooterspecial.ts',
  'trenchlessrepair.ts',
  'waterfiltration.ts'
];

// Files with extra ] bracket
const extraBracketFiles = [
  'ceilingfaninstallation.ts',
  'circuitbreakers.ts',
  'electricalpanelupgrades.ts',
  'electricalrepair.ts',
  'generacrepair.ts',
  'lightingupgrades.ts',
  'outdoormotionlighting.ts',
  'outletsswitches.ts'
];

const servicesDir = path.join(process.cwd(), 'data/pages/services');

// Fix Pattern 1: Add closing ] and comma before faqs field
function fixMissingBracket(content) {
  // Find the pattern: },\n\n  // Interactive Content\n  faqs:
  // Replace with: }\n  ],\n\n  // Interactive Content\n  faqs:
  
  const pattern = /(\}\s*,?\s*)\n(\s*)\n(\s*)\/\/ Interactive Content\n(\s*)faqs:/;
  
  if (pattern.test(content)) {
    return content.replace(pattern, (match, closing, space1, space2, space3) => {
      return `}\n  ],\n\n  // Interactive Content\n  faqs:`;
    });
  }
  
  return content;
}

// Fix Pattern 2: Remove extra ] bracket
function fixExtraBracket(content) {
  // Find pattern: ]\n      },\n]\n  },\n\n  // Interactive Content
  // Replace with: ]\n      }\n  ],\n\n  // Interactive Content
  
  const pattern = /(\]\s*\n\s*\}\s*,\s*\n)(\]\s*\n)(\s*\}\s*,\s*\n\s*\n\s*\/\/ Interactive Content)/;
  
  if (pattern.test(content)) {
    return content.replace(pattern, (match, part1, extraBracket, part3) => {
      // Remove the extra ] and add proper closing
      return `]\n      }\n  ],\n\n  // Interactive Content`;
    });
  }
  
  return content;
}

let fixedCount = 0;

// Fix missing bracket files
console.log('Fixing files with missing closing bracket...');
missingBracketFiles.forEach(filename => {
  const filepath = path.join(servicesDir, filename);
  if (fs.existsSync(filepath)) {
    let content = fs.readFileSync(filepath, 'utf8');
    const fixed = fixMissingBracket(content);
    
    if (fixed !== content) {
      fs.writeFileSync(filepath, fixed, 'utf8');
      console.log(`✓ Fixed ${filename}`);
      fixedCount++;
    } else {
      console.log(`⚠ Pattern not found in ${filename}, trying manual fix...`);
      // Try a more specific pattern for each error line number
      content = content.replace(/\}\s*,?\s*\n\s*\n\s*\/\/ Interactive Content\n\s*faqs:/m, 
        '}\n  ],\n\n  // Interactive Content\n  faqs:');
      fs.writeFileSync(filepath, content, 'utf8');
      console.log(`✓ Manually fixed ${filename}`);
      fixedCount++;
    }
  }
});

// Fix extra bracket files
console.log('\nFixing files with extra closing bracket...');
extraBracketFiles.forEach(filename => {
  const filepath = path.join(servicesDir, filename);
  if (fs.existsSync(filepath)) {
    let content = fs.readFileSync(filepath, 'utf8');
    const fixed = fixExtraBracket(content);
    
    if (fixed !== content) {
      fs.writeFileSync(filepath, fixed, 'utf8');
      console.log(`✓ Fixed ${filename}`);
      fixedCount++;
    } else {
      console.log(`⚠ Pattern not found in ${filename}, trying manual fix...`);
      // Manual pattern: find double ]\n and replace appropriately
      content = content.replace(/\]\s*\n(\s*)\}\s*,\s*\n\]\s*\n(\s*)\}\s*,/m,
        ']\n$1}\n  ],\n\n$2},');
      fs.writeFileSync(filepath, content, 'utf8');
      console.log(`✓ Manually fixed ${filename}`);
      fixedCount++;
    }
  }
});

console.log(`\n✅ Fixed ${fixedCount} files total`);
