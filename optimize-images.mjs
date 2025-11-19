#!/usr/bin/env node

import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGE_DIR = path.join(__dirname, 'attached_assets', 'generated_images');
const TARGET_QUALITY = 85;
const MAX_WIDTH = 1920;
const TARGET_MAX_SIZE_KB = 200;

async function getFileSizeKB(filePath) {
  const stats = await fs.stat(filePath);
  return (stats.size / 1024).toFixed(2);
}

async function optimizeImage(inputPath, outputPath) {
  try {
    const originalSize = await getFileSizeKB(inputPath);
    
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    
    // Determine if resizing is needed
    const needsResize = metadata.width > MAX_WIDTH;
    
    // Build sharp pipeline
    let pipeline = sharp(inputPath);
    
    if (needsResize) {
      pipeline = pipeline.resize(MAX_WIDTH, null, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // Convert to WebP with quality optimization
    await pipeline
      .webp({ 
        quality: TARGET_QUALITY,
        effort: 6 // Higher effort = better compression (0-6)
      })
      .toFile(outputPath);
    
    const newSize = await getFileSizeKB(outputPath);
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    return {
      original: originalSize,
      optimized: newSize,
      savings: savings,
      resized: needsResize
    };
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🖼️  Image Optimization Script');
  console.log('================================\n');
  console.log(`📁 Directory: ${IMAGE_DIR}`);
  console.log(`🎯 Target Quality: ${TARGET_QUALITY}%`);
  console.log(`📏 Max Width: ${MAX_WIDTH}px`);
  console.log(`💾 Target Size: ~${TARGET_MAX_SIZE_KB}KB per image\n`);
  
  try {
    // Find all PNG files
    const files = await fs.readdir(IMAGE_DIR);
    const pngFiles = files.filter(f => f.toLowerCase().endsWith('.png'));
    
    if (pngFiles.length === 0) {
      console.log('❌ No PNG files found to optimize');
      return;
    }
    
    console.log(`📊 Found ${pngFiles.length} PNG files to optimize\n`);
    
    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;
    let successCount = 0;
    let failCount = 0;
    
    // Process each image
    for (let i = 0; i < pngFiles.length; i++) {
      const filename = pngFiles[i];
      const inputPath = path.join(IMAGE_DIR, filename);
      const outputFilename = filename.replace(/\.png$/i, '.webp');
      const outputPath = path.join(IMAGE_DIR, outputFilename);
      
      process.stdout.write(`[${i + 1}/${pngFiles.length}] ${filename}... `);
      
      const result = await optimizeImage(inputPath, outputPath);
      
      if (result) {
        totalOriginalSize += parseFloat(result.original);
        totalOptimizedSize += parseFloat(result.optimized);
        successCount++;
        
        const status = parseFloat(result.optimized) <= TARGET_MAX_SIZE_KB ? '✅' : '⚠️';
        console.log(`${status} ${result.original}KB → ${result.optimized}KB (${result.savings}% saved)${result.resized ? ' [resized]' : ''}`);
      } else {
        failCount++;
        console.log('❌ FAILED');
      }
    }
    
    // Summary
    console.log('\n================================');
    console.log('📈 Optimization Summary:');
    console.log('================================');
    console.log(`✅ Successfully optimized: ${successCount} images`);
    console.log(`❌ Failed: ${failCount} images`);
    console.log(`📦 Total original size: ${totalOriginalSize.toFixed(2)} KB (${(totalOriginalSize / 1024).toFixed(2)} MB)`);
    console.log(`📦 Total optimized size: ${totalOptimizedSize.toFixed(2)} KB (${(totalOptimizedSize / 1024).toFixed(2)} MB)`);
    console.log(`💰 Total savings: ${(totalOriginalSize - totalOptimizedSize).toFixed(2)} KB (${((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1)}%)`);
    
    const avgOptimizedSize = totalOptimizedSize / successCount;
    if (avgOptimizedSize <= TARGET_MAX_SIZE_KB) {
      console.log(`\n🎉 SUCCESS! Average size ${avgOptimizedSize.toFixed(2)}KB is under target ${TARGET_MAX_SIZE_KB}KB`);
    } else {
      console.log(`\n⚠️  WARNING: Average size ${avgOptimizedSize.toFixed(2)}KB exceeds target ${TARGET_MAX_SIZE_KB}KB`);
      console.log(`   Consider reducing quality or max width.`);
    }
    
    console.log('\n✨ Optimization complete!');
    
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

main();
