const https = require('https');
const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const directories = [
  'public/images/home',
  'public/images/healing',
  'public/images/sacred-house',
  'public/images/food',
  'public/images/contact',
];

// Unsplash images to download with corrected URLs
const unsplashImages = [
  // Home page images
  { url: 'https://source.unsplash.com/random/800x600/?meditation', path: 'public/images/home/hero.jpg', description: 'Home hero image - meditation' },
  { url: 'https://source.unsplash.com/random/600x600/?spiritual', path: 'public/images/home/profile.jpg', description: 'Profile image - spiritual teacher' },
  { url: 'https://source.unsplash.com/random/800x600/?healing', path: 'public/images/home/healing-1.jpg', description: 'Home healing image' },
  { url: 'https://source.unsplash.com/random/800x600/?retreat', path: 'public/images/home/sacred-1.jpg', description: 'Home sacred house image' },
  
  // Healing page images
  { url: 'https://source.unsplash.com/random/1600x900/?energy,healing', path: 'public/images/healing/hero.jpg', description: 'Healing hero image' },
  { url: 'https://source.unsplash.com/random/800x600/?reiki', path: 'public/images/healing/reiki.jpg', description: 'Reiki healing image' },
  { url: 'https://source.unsplash.com/random/800x600/?yoga', path: 'public/images/healing/tantra.jpg', description: 'Tantra yoga image' },
  { url: 'https://source.unsplash.com/random/800x600/?meditation', path: 'public/images/healing/chi-gong.jpg', description: 'Chi gong image' },
  
  // Sacred House images
  { url: 'https://source.unsplash.com/random/1600x900/?retreat,nature', path: 'public/images/sacred-house/hero.jpg', description: 'Sacred house hero image' },
  { url: 'https://source.unsplash.com/random/800x600/?retreat', path: 'public/images/sacred-house/retreat-1.jpg', description: 'Retreat image 1' },
  { url: 'https://source.unsplash.com/random/800x600/?nature,meditation', path: 'public/images/sacred-house/retreat-2.jpg', description: 'Retreat image 2' },
  { url: 'https://source.unsplash.com/random/800x600/?spiritual,nature', path: 'public/images/sacred-house/retreat-3.jpg', description: 'Retreat image 3' },
  { url: 'https://source.unsplash.com/random/800x600/?yoga,retreat', path: 'public/images/sacred-house/retreat-4.jpg', description: 'Retreat image 4' },
  
  // Food images
  { url: 'https://source.unsplash.com/random/800x600/?microgreens', path: 'public/images/food/microgreens-1.jpg', description: 'Microgreens image 1' },
  { url: 'https://source.unsplash.com/random/800x600/?organic,food', path: 'public/images/food/microgreens-2.jpg', description: 'Microgreens image 2' },
  { url: 'https://source.unsplash.com/random/800x600/?healthy,food', path: 'public/images/food/microgreens-3.jpg', description: 'Microgreens image 3' },
];

// Create directories
directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Download images
async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download image, status code: ${res.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${filepath}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete the file if there was an error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  for (const img of unsplashImages) {
    try {
      await downloadImage(img.url, img.path);
    } catch (error) {
      console.error(`Error downloading ${img.path}: ${error.message}`);
    }
  }
  console.log('All images downloaded!');
}

downloadAllImages(); 