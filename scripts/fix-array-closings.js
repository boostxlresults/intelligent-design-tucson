#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const servicesDir = path.join(process.cwd(), 'data/pages/services');

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

  // Fix 1: Replace pattern where items array has comma instead of closing bracket
  // Pattern:             "last item"
  //             ,
  //       {
  // Should be:           "last item"
  //             ]
  //       },
  //       {
  
  content = content.replace(/(".*?")\n( {12}),\n( {6})\{/g, (match, lastItem, spaces1, spaces2) => {
    return `${lastItem}\n            ]\n      },\n${spaces2}{`;
  });

  // Fix 2: For files where we already added ], we need to ensure the previous } has a comma
  // Pattern: }\n  ],\n should check if previous line needs comma
  const lines = content.split('\n');
  for (let i = 0; i < lines.length - 2; i++) {
    if (lines[i].match(/^ {2}\}$/) && lines[i + 1].match(/^ {2}\],$/)) {
      // The } before ], should have a comma
      if (!lines[i].includes(',')) {
        lines[i] = '  },';
      }
    }
  }
  content = lines.join('\n');

  if (content !== originalContent) {
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`✓ Fixed ${filename}`);
    fixedCount++;
  } else {
    console.log(`  No changes for ${filename}`);
  }
});

console.log(`\n✅ Fixed ${fixedCount}/${allBrokenFiles.length} files`);
