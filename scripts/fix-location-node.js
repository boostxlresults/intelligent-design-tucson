const fs = require('fs');
const path = require('path');

const locationsDir = path.join(__dirname, '../data/pages/locations');
const files = fs.readdirSync(locationsDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts');

console.log(`\n🔧 Fixing location file structures with Node.js...\n`);

let fixed = 0;

files.forEach(file => {
  const filePath = path.join(locationsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Strategy: Find the last "}]" which closes the sections array,
  // and replace everything after it until the final "};" with correct structure
  
  const pattern = /(\s+\}\s*\n\s+)\],?\s*\n+\s*\},?\s*\n+\s*\},?\s*\n+\s*(\/\/\s*FAQs?\s*.*?\n\s*faqs:\s*\[\],?\s*\n\s*\/\/\s*NAP\s*\n\s*showOfficeInfo:\s*true\s*\n\};)/s;
  
  const replacement = '$1]\n  },\n  \n  $2';
  
  const newContent = content.replace(pattern, replacement);
  
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ Fixed: ${file}`);
    fixed++;
  } else {
    console.log(`⏭️  No match: ${file}`);
  }
});

console.log(`\n${'='.repeat(60)}`);
console.log(`✅ Fixed: ${fixed} files`);
