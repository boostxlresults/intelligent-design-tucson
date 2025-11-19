#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const locationsDir = path.join(__dirname, '../data/pages/locations');
const files = fs.readdirSync(locationsDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts');

console.log(`\n🔧 Fixing ${files.length} location data files...\n`);

let fixed = 0;
let errors = 0;

files.forEach(file => {
  const filePath = path.join(locationsDir, file);
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix: Move showOfficeInfo to be a proper field (add comma after faqs array)
    // Pattern: ]\n  \n  // NAP\n  showOfficeInfo: true\n};
    if (content.includes('showOfficeInfo: true\n};')) {
      content = content.replace(
        /(\],?\s*\n\s*\/\/ NAP\s*\n\s*showOfficeInfo:\s*true)\s*\n\};/g,
        '$1\n};'
      );
      
      // Now add comma after faqs array if missing
      content = content.replace(
        /(faqs:\s*\[[^\]]*\]\s*)\n(\s*\/\/ NAP)/g,
        '$1,\n$2'
      );
      
      modified = true;
    }
    
    // Fix: Array closing with comma instead of proper syntax
    // Pattern: ]\n      }\n],  (should be ]\n      }\n  ],)
    content = content.replace(
      /(\]\s*\n\s*\}\s*\n)(\],)/g,
      '$1  $2'
    );
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${file}`);
      fixed++;
    } else {
      console.log(`⏭️  Skipped: ${file} (no changes needed)`);
    }
  } catch (error) {
    console.log(`❌ Error: ${file} - ${error.message}`);
    errors++;
  }
});

console.log(`\n${'='.repeat(60)}`);
console.log(`✅ Fixed: ${fixed} files`);
console.log(`❌ Errors: ${errors} files`);
console.log(`⏭️  Skipped: ${files.length - fixed - errors} files`);
