// Script to help organize images in the project
// To run: node scripts/organize-images.js

const fs = require('fs');
const path = require('path');

// Directories to create if they don't exist
const directories = [
  'public/images/home',
  'public/images/healing',
  'public/images/sacred-house',
  'public/images/food',
  'public/images/contact',
  'public/icons',
];

// Create directories if they don't exist
directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Copy files from old locations to new locations
const fileMappings = [
  // SVG icons
  { from: 'public/noun-flower-of-life-5338811.svg', to: 'public/icons/flower-of-life.svg' },
  { from: 'public/noun-metatron-cube-5338810.svg', to: 'public/icons/metatron-cube.svg' },
  
  // Sacred House images
  { from: 'public/sacred-house/retreat-1.jpg', to: 'public/images/sacred-house/retreat-1.jpg' },
  { from: 'public/sacred-house/retreat-2.jpg', to: 'public/images/sacred-house/retreat-2.jpg' },
  { from: 'public/sacred-house/retreat-3.jpg', to: 'public/images/sacred-house/retreat-3.jpg' },
  { from: 'public/sacred-house/retreat-4.jpg', to: 'public/images/sacred-house/retreat-4.jpg' },
  
  // Food images
  { from: 'public/food/microgreens-1.jpg', to: 'public/images/food/microgreens-1.jpg' },
  { from: 'public/food/microgreens-2.jpg', to: 'public/images/food/microgreens-2.jpg' },
  { from: 'public/food/microgreens-3.jpg', to: 'public/images/food/microgreens-3.jpg' },
  
  // Healing images
  { from: 'public/healing/healing-1.jpg', to: 'public/images/healing/healing-1.jpg' },
  { from: 'public/healing/healing-2.jpg', to: 'public/images/healing/healing-2.jpg' },
  { from: 'public/healing/healing-3.jpg', to: 'public/images/healing/healing-3.jpg' },
];

// Copy files
fileMappings.forEach(mapping => {
  if (fs.existsSync(mapping.from)) {
    fs.copyFileSync(mapping.from, mapping.to);
    console.log(`Copied: ${mapping.from} -> ${mapping.to}`);
  } else {
    console.log(`Source file not found: ${mapping.from}`);
  }
});

// Create map image from existing image for contact page
if (fs.existsSync('public/images/contact/Image 3.jpeg') && !fs.existsSync('public/images/contact/map.jpg')) {
  fs.copyFileSync('public/images/contact/Image 3.jpeg', 'public/images/contact/map.jpg');
  console.log('Created map image for contact page');
}

console.log('Image organization complete!'); 