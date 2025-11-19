const fs = require('fs');
const path = require('path');

const locationsDir = path.join(__dirname, '../data/pages/locations');
const files = fs.readdirSync(locationsDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts');

console.log(`\n🔧 Adding trailing commas to sections array in ${files.length} location files...\n`);

let fixed = 0;

files.forEach(file => {
  const filePath = path.join(locationsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Pattern: Find the last item in sections array (ends with } or }) followed by newline and then ]
  // We need to add a comma after the } if it doesn't have one
  
  // Look for: }\n    ] or }\n  ] (closing brace of last section, then closing bracket of sections array)
  const pattern = /(\s+\})\s*(\n\s+\])/g;
  
  let modified = false;
  const newContent = content.replace(pattern, (match, closingBrace, rest) => {
    // Only add comma if there isn't one already
    if (!closingBrace.includes(',')) {
      modified = true;
      return closingBrace + ',' + rest;
    }
    return match;
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
