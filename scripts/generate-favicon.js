const sharp = require('sharp');
const path = require('path');

async function generateFavicons() {
  const logoPath = path.join(process.cwd(), 'public/logo.png');
  
  console.log('Generating favicons from:', logoPath);
  
  // Generate 32x32 favicon for app folder (Next.js uses this automatically)
  await sharp(logoPath)
    .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(process.cwd(), 'app/icon.png'));
  console.log('Created app/icon.png (32x32)');
  
  // Generate 16x16 small favicon
  await sharp(logoPath)
    .resize(16, 16, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(process.cwd(), 'public/favicon-16x16.png'));
  console.log('Created public/favicon-16x16.png');
    
  // Generate 32x32 favicon
  await sharp(logoPath)
    .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(process.cwd(), 'public/favicon-32x32.png'));
  console.log('Created public/favicon-32x32.png');
  
  // Generate apple-touch-icon (180x180) with white background for iOS
  await sharp(logoPath)
    .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .png()
    .toFile(path.join(process.cwd(), 'public/apple-touch-icon.png'));
  console.log('Created public/apple-touch-icon.png (180x180)');
    
  // Generate android-chrome icons
  await sharp(logoPath)
    .resize(192, 192, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(process.cwd(), 'public/android-chrome-192x192.png'));
  console.log('Created public/android-chrome-192x192.png');
    
  await sharp(logoPath)
    .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(process.cwd(), 'public/android-chrome-512x512.png'));
  console.log('Created public/android-chrome-512x512.png');

  console.log('\nAll favicons generated successfully!');
}

generateFavicons().catch(console.error);
