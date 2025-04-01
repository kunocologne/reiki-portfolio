'use client';

import React, { useEffect, useState } from 'react';
import { fetchFigmaFile, fetchFigmaImages, isMcpAvailable } from '@/lib/figma-mcp-client';

interface Props {
  fileKey: string;
  nodeId?: string;
}

export default function FigmaDesignFromAPI({ fileKey, nodeId }: Props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState<Record<string, string>>({});
  
  useEffect(() => {
    async function loadFigmaDesign() {
      try {
        // Try MCP first
        if (await isMcpAvailable()) {
          try {
            const fileData = await fetchFigmaFile(fileKey);
            
            // Get node IDs
            let nodesToFetch: string[] = [];
            if (nodeId) {
              nodesToFetch = [nodeId];
            } else {
              // Get frames
              nodesToFetch = fileData.document.children
                .filter((node: any) => ['FRAME', 'COMPONENT', 'INSTANCE'].includes(node.type))
                .map((node: any) => node.id);
            }
            
            if (nodesToFetch.length > 0) {
              const imagesData = await fetchFigmaImages(fileKey, nodesToFetch);
              setImages(imagesData.images);
              setLoading(false);
              return;
            }
          } catch (err) {
            console.error('MCP error:', err);
          }
        }
        
        // Fallback to API route
        const response = await fetch(`/api/figma?fileKey=${fileKey}${nodeId ? `&nodeId=${nodeId}` : ''}`);
        if (!response.ok) throw new Error('API request failed');
        
        const data = await response.json();
        if (data.images) setImages(data.images);
        
        setLoading(false);
      } catch (err) {
        console.error('Error:', err);
        setError('Failed to load design');
        setLoading(false);
      }
    }
    
    loadFigmaDesign();
  }, [fileKey, nodeId]);
  
  const embedUrl = `https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/${fileKey}${nodeId ? `/?node-id=${nodeId}` : ''}`;
  
  if (loading) return <div className="flex justify-center py-20">Loading design...</div>;
  
  // Show images if available
  if (Object.keys(images).length > 0) {
    return (
      <div className="w-full">
        <div className="flex flex-col gap-4">
          {Object.entries(images).map(([id, url]) => (
            <div key={id} className="rounded-lg overflow-hidden shadow-lg">
              <img src={url} alt={`Design ${id}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  // Fallback to iframe
  return (
    <div className="w-full">
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
        <iframe 
          className="absolute top-0 left-0 w-full h-full border-0"
          src={embedUrl}
          allowFullScreen
        />
      </div>
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
    </div>
  );
} 