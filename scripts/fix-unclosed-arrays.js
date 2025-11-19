#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const servicesDir = path.join(process.cwd(), 'data/pages/services');

// All files that need fixing based on logs
const allBrokenFiles = [
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
  'waterfiltration.ts',
  'ceilingfaninstallation.ts',
  'circuitbreakers.ts',
  'electricalpanelupgrades.ts',
  'electricalrepair.ts',
  'generacrepair.ts',
  'lightingupgrades.ts',
  'outdoormotionlighting.ts',
  'outletsswitches.ts'
];

let fixedCount = 0;

allBrokenFiles.forEach(filename => {
  const filepath = path.join(servicesDir, filename);
  if (!fs.existsSync(filepath)) {
    console.log(`⚠ File not found: ${filename}`);
    return;
  }

  let content = fs.readFileSync(filepath, 'utf8');
  const originalContent = content;

  // Pattern 1: Fix unclosed items arrays that have comma instead of closing bracket
  // This pattern: "item text"\n            ,  should be: "item text"\n            ]
  content = content.replace(/(".*?")\s*\n(\s+),\s*\n(\s+)\{/g, (match, lastItem, spaces1, spaces2) => {
    // The comma should be a closing bracket for the items array
    return `${lastItem}\n            ]\n      },\n${spaces2}{`;
  });

  // Pattern 2: Fix lines where we have ],\n  }\n  ],  (double closing)
  // Should be: ]\n      }\n  ],
  content = content.replace(/\]\s*\n\s*\}\s*\n\s*\],/g, ']\n      }\n  ],');

  // Pattern 3: Ensure sections array has closing ], before faqs field
  // Pattern: }\n  ],\n\n  // Interactive should have comma after }
  content = content.replace(/\}\s*\n(\s*\],\s*\n\s*\n\s*\/\/ Interactive Content)/g, '},\n$1');

  if (content !== originalContent) {
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`✓ Fixed ${filename}`);
    fixedCount++;
  } else {
    console.log(`  No changes needed for ${filename}`);
  }
});

console.log(`\n✅ Fixed ${fixedCount}/${allBrokenFiles.length} files`);
