const fs = require('fs');
const path = require('path');

const locationsDir = path.join(__dirname, '../data/pages/locations');
const files = fs.readdirSync(locationsDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts');

console.log(`\n🔧 Fixing bracket indentation in ${files.length} location files...\n`);

let fixed = 0;

files.forEach(file => {
  const filePath = path.join(locationsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Pattern: Find },\n followed by any whitespace then ]
  // Replace with },\n] (no indentation on the bracket)
  const pattern = /(\},\n)\s+(\])/g;
  
  let modified = false;
  const newContent = content.replace(pattern, (match, closingComma, bracket) => {
    modified = true;
    return closingComma + bracket; // No spaces before ]
  });
  
  if (modified) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ Fixed: ${file}`);
    fixed++;
  } else {
    console.log(`⏭️  Skipped: ${file}`);
  }
});

console.log(`\n${'='.repeat(60)}`);
console.log(`✅ Fixed: ${fixed} files`);
