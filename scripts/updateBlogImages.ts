/**
 * Update all blog post markdown files with correct hero images
 * Maps theme IDs to generated image paths and updates frontmatter
 */

import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';

const rootDir = process.cwd();

// Map theme IDs to actual generated image filenames
const themeToImageMap: Record<string, string> = {
  'hvac-ac-repair': '/attached_assets/generated_images/AC_repair_service_Tucson_0e76b972.png',
  'hvac-ac-install': '/attached_assets/generated_images/AC_installation_Tucson_home_a4d097e8.png',
  'hvac-maintenance': '/attached_assets/generated_images/AC_maintenance_service_6a47e66a.png',
  'hvac-energy': '/attached_assets/generated_images/Energy_efficient_AC_system_a620658e.png',
  'hvac-airquality': '/attached_assets/generated_images/Indoor_air_quality_service_7d8bfcfd.png',
  'hvac-thermostat': '/attached_assets/generated_images/Smart_thermostat_installation_6da163f6.png',
  'hvac-commercial': '/attached_assets/generated_images/Commercial_HVAC_service_f5d8b668.png',
  'hvac-airflow': '/attached_assets/generated_images/Airflow_problem_diagnosis_e435fe1c.png',
  'hvac-refrigerant': '/attached_assets/generated_images/Refrigerant_service_work_af00979b.png',
  'hvac-upgrade': '/attached_assets/generated_images/HVAC_system_upgrade_8cee17a0.png',
  'hvac-seasonal': '/attached_assets/generated_images/Seasonal_AC_preparation_f001c3a6.png',
  
  'solar-residential': '/attached_assets/generated_images/Residential_solar_installation_8a8bfb2c.png',
  'solar-commercial': '/attached_assets/generated_images/Commercial_solar_installation_4f71127b.png',
  'solar-savings': '/attached_assets/generated_images/Solar_panel_cost_savings_0fb811b1.png',
  'solar-monitoring': '/attached_assets/generated_images/Solar_system_monitoring_74b86b28.png',
  
  'plumbing-drain': '/attached_assets/generated_images/Drain_cleaning_service_35e09460.png',
  'plumbing-waterheater': '/attached_assets/generated_images/Water_heater_repair_service_91aa3eca.png',
  'plumbing-repipe': '/attached_assets/generated_images/Home_repiping_service_bf6aeff1.png',
  'plumbing-emergency': '/attached_assets/generated_images/Emergency_plumbing_service_3773a11e.png',
  'plumbing-backflow': '/attached_assets/generated_images/Backflow_prevention_testing_bd0d9ac4.png',
  
  'tips-energy': '/attached_assets/generated_images/Energy_saving_tips_68ca42a1.png',
  'tips-water': '/attached_assets/generated_images/Water_conservation_tips_3e904082.png',
  'tips-comfort': '/attached_assets/generated_images/Home_comfort_improvement_3a6feb26.png',
  'tips-diy': '/attached_assets/generated_images/DIY_vs_professional_help_bb8590e8.png',
  
  'roofing-repair': '/attached_assets/generated_images/Roof_repair_Tucson_5156ac7b.png',
  
  'electrical-service': '/attached_assets/generated_images/Electrical_service_work_e21d02b3.png',
};

/**
 * Main execution
 */
async function main() {
  console.log('🖼️  Updating Blog Post Images');
  console.log('==============================\n');
  
  // Read the theme mapping
  const mappingPath = path.join(rootDir, 'scripts', 'imageThemeMapping.json');
  const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'));
  const postToThemeMap = mapping.postToThemeMap;
  
  // Get all blog categories
  const blogDir = path.join(rootDir, 'public', 'content', 'blog');
  const categories = fs.readdirSync(blogDir).filter(item => {
    return fs.statSync(path.join(blogDir, item)).isDirectory();
  });
  
  let updatedCount = 0;
  let errorCount = 0;
  
  for (const category of categories) {
    const categoryDir = path.join(blogDir, category);
    const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.md'));
    
    console.log(`\n📁 Processing ${category} (${files.length} posts)...`);
    
    for (const file of files) {
      const slug = path.basename(file, '.md');
      const filePath = path.join(categoryDir, file);
      
      // Get theme ID for this post
      const themeId = postToThemeMap[slug];
      if (!themeId) {
        console.log(`   ⚠️  No theme mapping for: ${slug}`);
        errorCount++;
        continue;
      }
      
      // Get image path for this theme
      const imagePath = themeToImageMap[themeId];
      if (!imagePath) {
        console.log(`   ⚠️  No image for theme: ${themeId} (post: ${slug})`);
        errorCount++;
        continue;
      }
      
      // Read and update markdown file
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      
      // Update heroImage
      data.heroImage = imagePath;
      
      // Write back to file
      const updatedContent = matter.stringify(content, data);
      fs.writeFileSync(filePath, updatedContent, 'utf-8');
      
      updatedCount++;
    }
    
    console.log(`   ✅ Updated ${files.length} posts in ${category}`);
  }
  
  console.log(`\n\n📊 Summary:`);
  console.log(`   ✅ Successfully updated: ${updatedCount} posts`);
  if (errorCount > 0) {
    console.log(`   ⚠️  Errors: ${errorCount} posts`);
  }
  
  console.log(`\n🔄 Next step: Run generateBlogIndex.ts to update blogIndex.json`);
}

main().catch(console.error);
