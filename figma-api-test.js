const https = require('https');
const fs = require('fs');

const fileKey = '3gU1Cy5rHbFRzlyoibzMjU';
const workshopNodeId = '31:480'; // Heart Centered Workshops frame ID
const FIGMA_API_KEY = 'figd_d3wn-2jPYzd-MJjv2RKEcUv0EcMLV6f9DC2uZKQ0';
const FIGMA_API_BASE = 'https://api.figma.com/v1';

function getFigmaFile() {
  const options = {
    hostname: 'api.figma.com',
    path: `/v1/files/${fileKey}`,
    method: 'GET',
    headers: {
      'X-FIGMA-TOKEN': FIGMA_API_KEY
    }
  };

  const req = https.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      if (res.statusCode === 200) {
        console.log('Figma file data retrieved successfully');
        try {
          const jsonData = JSON.parse(data);
          console.log('Document name:', jsonData.name);
          
          // Get details about the Workshop section
          console.log(`\nGetting details about the Heart Centered Workshops section (ID: ${workshopNodeId})...`);
          const workshopNode = findNode(jsonData.document, workshopNodeId);
          
          if (workshopNode) {
            console.log('\nWorkshop Section Structure:');
            printNodeStructure(workshopNode);
            
            // Save the workshop node data to a file for reference
            fs.writeFileSync('workshop-section.json', JSON.stringify(workshopNode, null, 2));
            console.log('\nWorkshop section details saved to workshop-section.json');
            
            // Get image URLs for the workshop section
            getImageUrls(workshopNodeId);
          } else {
            console.log('Workshop section not found in the document');
          }
        } catch (e) {
          console.error('Error parsing JSON:', e);
        }
      } else {
        console.error('Failed to fetch Figma file:', data);
      }
    });
  });
  
  req.on('error', (e) => {
    console.error(`Error: ${e.message}`);
  });
  
  req.end();
}

function findNode(node, targetId) {
  // Check if this is the node we're looking for
  if (node.id === targetId) {
    return node;
  }
  
  // If this node has children, check each child
  if (node.children) {
    for (const child of node.children) {
      const result = findNode(child, targetId);
      if (result) return result;
    }
  }
  
  return null;
}

function printNodeStructure(node, depth = 0) {
  const indent = '  '.repeat(depth);
  const name = node.name || '(unnamed)';
  const type = node.type || '(unknown type)';
  
  console.log(`${indent}- ${name} (${type})`);
  
  if (node.children) {
    for (const child of node.children) {
      printNodeStructure(child, depth + 1);
    }
  }
}

function getImageUrls(nodeId) {
  const options = {
    hostname: 'api.figma.com',
    path: `/v1/images/${fileKey}?ids=${nodeId}&format=png&scale=2`,
    method: 'GET',
    headers: {
      'X-FIGMA-TOKEN': FIGMA_API_KEY
    }
  };

  const req = https.request(options, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      if (res.statusCode === 200) {
        try {
          const jsonData = JSON.parse(data);
          console.log('\nImage URLs for the workshop section:');
          console.log(JSON.stringify(jsonData.images, null, 2));
          
          fs.writeFileSync('workshop-images.json', JSON.stringify(jsonData.images, null, 2));
          console.log('Image URLs saved to workshop-images.json');
        } catch (e) {
          console.error('Error parsing image JSON:', e);
        }
      } else {
        console.error('Failed to fetch image URLs:', data);
      }
    });
  });
  
  req.on('error', (e) => {
    console.error(`Error getting images: ${e.message}`);
  });
  
  req.end();
}

getFigmaFile(); 