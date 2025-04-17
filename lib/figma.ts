import type { 
  GetFileResponse, 
  Node
} from '@figma/rest-api-spec';

const FIGMA_API_KEY = process.env.NEXT_PUBLIC_FIGMA_API_KEY || '';
const FIGMA_API_BASE = 'https://api.figma.com/v1';

export interface FigmaImage {
  url: string;
  width: number;
  height: number;
}

/**
 * Get file data from Figma API
 */
export async function getFigmaFile(fileKey: string): Promise<GetFileResponse> {
  if (!FIGMA_API_KEY) {
    throw new Error('Figma API key is not set');
  }

  const response = await fetch(`${FIGMA_API_BASE}/files/${fileKey}`, {
    headers: {
      'X-Figma-Token': FIGMA_API_KEY
    }
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch Figma file: ${response.statusText}`);
  }
  
  return response.json();
}

/**
 * Get image URLs for nodes from Figma API
 */
export async function getFigmaImages(fileKey: string, nodeIds: string[]): Promise<Record<string, string>> {
  if (!FIGMA_API_KEY) {
    throw new Error('Figma API key is not set');
  }

  const response = await fetch(`${FIGMA_API_BASE}/images/${fileKey}?ids=${nodeIds.join(',')}&format=png`, {
    headers: {
      'X-Figma-Token': FIGMA_API_KEY
    }
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch Figma images: ${response.statusText}`);
  }
  
  const data = await response.json();
  return data.images;
}

/**
 * Get node by ID from Figma file
 */
export function findNodeById(file: GetFileResponse, nodeId: string): Node | null {
  function searchNode(node: Node): Node | null {
    if (node.id === nodeId) return node;
    
    if ('children' in node && node.children) {
      for (const child of node.children) {
        const found = searchNode(child);
        if (found) return found;
      }
    }
    
    return null;
  }
  
  return searchNode(file.document);
}

/**
 * Extract image info from a node
 */
export function extractImageInfo(node: Node): FigmaImage | null {
  if (!('absoluteBoundingBox' in node) || !node.absoluteBoundingBox) {
    return null;
  }
  
  const box = node.absoluteBoundingBox;
  return {
    url: '',  // To be filled by getFigmaImages
    width: box.width || 0,
    height: box.height || 0
  };
}

/**
 * Process file and get images for frames, components, or instances
 */
export async function processFigmaFile(fileKey: string, nodeId?: string): Promise<FigmaImage[]> {
  // Get file data
  const fileData = await getFigmaFile(fileKey);
  
  // If nodeId is provided, only get that node
  let nodesToProcess: Node[] = [];
  
  if (nodeId) {
    const node = findNodeById(fileData, nodeId);
    if (node) nodesToProcess = [node];
  } else {
    // Get all top-level frames
    nodesToProcess = fileData.document.children.filter((node: Node) => 
      node.type === 'FRAME' || node.type === 'COMPONENT' || node.type === 'INSTANCE'
    );
  }
  
  // Extract image info
  const images: FigmaImage[] = [];
  const nodeIds: string[] = [];
  
  for (const node of nodesToProcess) {
    const imageInfo = extractImageInfo(node);
    if (imageInfo) {
      images.push(imageInfo);
      nodeIds.push(node.id);
    }
  }
  
  // Get image URLs
  if (nodeIds.length > 0) {
    const imageUrls = await getFigmaImages(fileKey, nodeIds);
    
    // Add URLs to image info
    images.forEach((image, index) => {
      const nodeId = nodeIds[index];
      if (imageUrls[nodeId]) {
        image.url = imageUrls[nodeId];
      }
    });
  }
  
  return images;
} 