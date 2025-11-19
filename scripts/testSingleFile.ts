import { readFileSync } from 'fs';
import { join } from 'path';

const filePath = join(process.cwd(), '..', 'data/pages/services', 'plumbingrillito.ts');
const content = readFileSync(filePath, 'utf-8');

const faqsMatch = content.match(/\n  faqs: /);
if (faqsMatch && faqsMatch.index) {
  console.log(`✅ Found 'faqs:' at index ${faqsMatch.index}`);
  console.log(`Context: ...${content.substring(faqsMatch.index - 50, faqsMatch.index + 50)}...`);
} else {
  console.log('❌ No match found');
}
