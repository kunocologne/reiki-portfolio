const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const directories = [
  'public/images/home',
  'public/images/healing',
  'public/images/sacred-house',
  'public/images/food',
];

// Files to copy (from -> to)
const filesToCopy = [
  // Healing page images
  { from: 'public/images/healing/Image 7.jpeg', to: 'public/images/healing/hero.jpg' },
  { from: 'public/images/healing/healing-1.jpg', to: 'public/images/healing/reiki.jpg' },
  { from: 'public/images/sacred-house/Image 4.jpeg', to: 'public/images/healing/tantra.jpg' },
  { from: 'public/images/sacred-house/Image 5.png', to: 'public/images/healing/chi-gong.jpg' },
  
  // Home page images
  { from: 'public/images/healing/Image 7.jpeg', to: 'public/images/home/hero.jpg' },
  { from: 'public/images/healing/Image 7.jpeg', to: 'public/images/home/profile.jpg' },
  { from: 'public/images/healing/healing-2.jpg', to: 'public/images/home/healing-1.jpg' },
  { from: 'public/images/sacred-house/retreat-1.jpg', to: 'public/images/home/sacred-1.jpg' },
  
  // Sacred House images
  { from: 'public/images/sacred-house/retreat-1.jpg', to: 'public/images/sacred-house/hero.jpg' },
  
  // Food images
  // These already exist in the correct location
];

// Create directories
directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Copy files
filesToCopy.forEach(file => {
  try {
    if (fs.existsSync(file.from)) {
      fs.copyFileSync(file.from, file.to);
      console.log(`Copied ${file.from} to ${file.to}`);
    } else {
      console.log(`Source file not found: ${file.from}`);
    }
  } catch (error) {
    console.error(`Error copying ${file.from} to ${file.to}: ${error.message}`);
  }
});

console.log('All files copied!'); 