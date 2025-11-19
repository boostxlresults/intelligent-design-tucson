#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const locationsDir = path.join(__dirname, '../data/pages/locations');
const files = fs.readdirSync(locationsDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts');

console.log(`\n🔧 Fixing location data structure in ${files.length} files...\n`);

let fixed = 0;

files.forEach(file => {
  const filePath = path.join(locationsDir, file);
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern to fix:
    // ],\n  \n  // NAP\n  showOfficeInfo: true\n};
    // Should become:
    // ]\n  },\n  \n  // FAQs\n  faqs: [],\n  \n  // NAP\n  showOfficeInfo: true\n};
    
    const pattern = /(\]\s*),\s*\n\s*\/\/ NAP\s*\n\s*showOfficeInfo:\s*true\s*\n\};/;
    
    if (pattern.test(content)) {
      content = content.replace(
        pattern,
        '$1\n  },\n  \n  // FAQs\n  faqs: [],\n  \n  // NAP\n  showOfficeInfo: true\n};'
      );
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${file}`);
      fixed++;
    } else {
      console.log(`⏭️  Skipped: ${file} (already correct or different pattern)`);
    }
  } catch (error) {
    console.log(`❌ Error: ${file} - ${error.message}`);
  }
});

console.log(`\n${'='.repeat(60)}`);
console.log(`✅ Fixed: ${fixed} files`);
