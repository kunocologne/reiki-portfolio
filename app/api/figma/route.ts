import { NextResponse } from 'next/server';

// Use the same API key as the MCP
const FIGMA_API_KEY = process.env.FIGMA_API_KEY || 'figd_ki_V_SEQg05BjIlpIbnCoXWw29bQiqL492RqEkZh';
const FIGMA_API_BASE = 'https://api.figma.com/v1';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fileKey = searchParams.get('fileKey');
  const nodeId = searchParams.get('nodeId');
  
  if (!fileKey) {
    return NextResponse.json({ error: 'Missing fileKey' }, { status: 400 });
  }
  
  try {
    // Get file data
    const fileResponse = await fetch(`${FIGMA_API_BASE}/files/${fileKey}`, {
      headers: { 'X-Figma-Token': FIGMA_API_KEY }
    });
    
    if (!fileResponse.ok) throw new Error('Figma API error');
    
    const fileData = await fileResponse.json();
    
    // Get nodes to fetch
    let nodesToFetch: string[] = [];
    
    if (nodeId) {
      nodesToFetch = [nodeId];
    } else {
      nodesToFetch = fileData.document.children
        .filter((node: any) => ['FRAME', 'COMPONENT', 'INSTANCE'].includes(node.type))
        .map((node: any) => node.id);
    }
    
    // Get image URLs
    if (nodesToFetch.length > 0) {
      const imagesResponse = await fetch(
        `${FIGMA_API_BASE}/images/${fileKey}?ids=${nodesToFetch.join(',')}&format=png`, 
        { headers: { 'X-Figma-Token': FIGMA_API_KEY } }
      );
      
      if (!imagesResponse.ok) throw new Error('Figma API error');
      
      const imagesData = await imagesResponse.json();
      
      return NextResponse.json({
        file: fileData,
        images: imagesData.images
      });
    }
    
    return NextResponse.json({ file: fileData });
  } catch (error) {
    console.error('Figma API error:', error);
    return NextResponse.json({ error: 'Failed to fetch from Figma API' }, { status: 500 });
  }
} 