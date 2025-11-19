#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const locationsDir = path.join(__dirname, '../data/pages/locations');
const files = fs.readdirSync(locationsDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts');

console.log(`\n🔧 Fixing location data structure (final fix) in ${files.length} files...\n`);

let fixed = 0;

files.forEach(file => {
  const filePath = path.join(locationsDir, file);
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Pattern 1: Missing comma after sections array closing bracket
    // Before: ]\n  },\n  \n  // FAQs
    // After:  ],\n  },\n  \n  // FAQs
    if (content.match(/\]\s*\n\s*\},\s*\n\s*\/\/ FAQs/)) {
      content = content.replace(
        /(\])\s*\n(\s*\},\s*\n\s*\/\/ FAQs)/g,
        '$1,\n$2'
      );
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${file}`);
      fixed++;
    } else {
      console.log(`⏭️  Skipped: ${file} (no changes needed)`);
    }
  } catch (error) {
    console.log(`❌ Error: ${file} - ${error.message}`);
  }
});

console.log(`\n${'='.repeat(60)}`);
console.log(`✅ Fixed: ${fixed} files`);
