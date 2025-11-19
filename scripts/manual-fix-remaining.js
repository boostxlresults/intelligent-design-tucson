#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'pages', 'services');

// Files that still have the "orphaned list" pattern
const problematicFiles = [
  'actuneup.ts', 'ceilingfaninstallation.ts', 'circuitbreakers.ts', 'electricalpanelupgrades.ts',
  'electricalrepair.ts', 'familyprotectionplans.ts', 'furnaces.ts', 'generacrepair.ts',
  'heaterinstallation.ts', 'heaterrepair.ts', 'heaterservice.ts', 'heatertuneup.ts',
  'heatpumps.ts', 'indoorairquality.ts', 'knowledgehub.ts', 'lightingupgrades.ts',
  'outdoormotionlighting.ts', 'outletsswitches.ts', 'privacypolicy.ts', 'rooterspecial.ts',
  'trenchlessrepair.ts', 'waterfiltration.ts'
];

let fixed = 0;

problematicFiles.forEach(filename => {
  const filepath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filepath)) return;
  
  let content = fs.readFileSync(filepath, 'utf8');
  const original = content;
  
  // Fix: Remove the orphaned `},` and merge orphaned list objects back into sections
  // Pattern: ]\n      },\n      {\n            "type": "list"
  // Fix to: ,\n      {\n            "type": "list"  (comma instead of ],},)
  content = content.replace(/(\])\n(\s+)(},\n\s+)({\n\s+"type":\s+"list")/g, (match, bracket, s1, brace, list) => {
    return `,\n${s1}${list}`;
  });
  
  // Also fix the final closing - remove extra ] before content closing
  // Pattern: ]\n      }\n]\n  }, -> ]\n  },
  content = content.replace(/(\])\n(\s+)(}\n)(\])\n(\s+)(},\n\s+\/\/ Interactive)/g, (match, b1, s1, close1, b2, s2, comment) => {
    return `${b1}\n${s2}},\n  // Interactive`;
  });
  
  if (content !== original) {
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`✓ Fixed ${filename}`);
    fixed++;
  }
});

console.log(`\n✅ Fixed ${fixed} files`);
