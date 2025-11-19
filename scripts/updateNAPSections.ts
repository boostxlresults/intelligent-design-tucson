import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const pagesDir = join(process.cwd(), 'client/src/pages');

// Old and new values
const OLD_ADDRESS_LINE1 = '3616 E. Broadway Blvd.';
const NEW_ADDRESS_LINE1 = '1145 E Fort Lowell Rd';

const OLD_ADDRESS_LINE2 = 'Tucson, AZ 85716';
const NEW_ADDRESS_LINE2 = 'Tucson, AZ 85719';

const OLD_ROC = 'Licensed, Bonded & Insured ROC #171687';
const NEW_ROC = 'Licensed, Bonded & Insured AZ ROC 340962,  ROC 322375, ROC 296386, ROC 276673';

const OLD_SERVICE_AREAS = `Service Areas:
Tucson, Marana, Oro Valley, Sahuarita, Vail, Green Valley, Catalina, Casas Adobes, Flowing Wells, Tanque Verde, Corona de Tucson, Drexel Heights, and all surrounding areas.`;

const NEW_SERVICE_AREAS = `Service Areas:
Tucson, Marana, Oro Valley, Sahuarita, Vail, Green Valley, Catalina, Casas Adobes, Flowing Wells, Tanque Verde, Corona de Tucson, Drexel Heights, and all surrounding areas.`;

function updateNAPInFile(filePath: string): boolean {
  try {
    let content = readFileSync(filePath, 'utf-8');
    let updated = false;

    // Update address line 1
    if (content.includes(OLD_ADDRESS_LINE1)) {
      content = content.replace(new RegExp(OLD_ADDRESS_LINE1, 'g'), NEW_ADDRESS_LINE1);
      updated = true;
    }

    // Update address line 2
    if (content.includes(OLD_ADDRESS_LINE2)) {
      content = content.replace(new RegExp(OLD_ADDRESS_LINE2, 'g'), NEW_ADDRESS_LINE2);
      updated = true;
    }

    // Update ROC license
    if (content.includes(OLD_ROC)) {
      content = content.replace(new RegExp(OLD_ROC, 'g'), NEW_ROC);
      updated = true;
    }

    if (updated) {
      writeFileSync(filePath, content, 'utf-8');
      console.log(`✅ Updated: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error);
    return false;
  }
}

function main() {
  console.log('🔄 Starting NAP (Name, Address, Phone) updates across all service pages...\n');

  const files = readdirSync(pagesDir)
    .filter(file => file.endsWith('.tsx'))
    .map(file => join(pagesDir, file));

  let updatedCount = 0;
  
  for (const file of files) {
    if (updateNAPInFile(file)) {
      updatedCount++;
    }
  }

  console.log(`\n✨ Complete! Updated ${updatedCount} files with new business information.`);
  console.log('\nNew NAP Information:');
  console.log(`  Address: ${NEW_ADDRESS_LINE1}, ${NEW_ADDRESS_LINE2}`);
  console.log(`  License: ${NEW_ROC}`);
}

main();
