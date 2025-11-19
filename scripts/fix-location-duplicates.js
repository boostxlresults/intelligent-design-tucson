#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const locationsDir = path.join(__dirname, '../data/pages/locations');
const files = fs.readdirSync(locationsDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts');

console.log(`\n🔧 Removing duplicate faqs and extra braces in ${files.length} files...\n`);

let fixed = 0;

files.forEach(file => {
  const filePath = path.join(locationsDir, file);
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove duplicate faqs pattern:
    // faqs: []\n  },\n  \n  // FAQs\n  faqs: [],
    // Should become:
    // faqs: [],
    const duplicatePattern = /faqs:\s*\[\]\s*\n\s*\},\s*\n\s*\/\/ FAQs\s*\n\s*faqs:\s*\[\],?/g;
    
    if (duplicatePattern.test(content)) {
      content = content.replace(
        duplicatePattern,
        'faqs: [],'
      );
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${file}`);
      fixed++;
    } else {
      console.log(`⏭️  Skipped: ${file}`);
    }
  } catch (error) {
    console.log(`❌ Error: ${file} - ${error.message}`);
  }
});

console.log(`\n${'='.repeat(60)}`);
console.log(`✅ Fixed: ${fixed} files`);
