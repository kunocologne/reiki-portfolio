import React from 'react';

interface FigmaEmbedProps {
  fileKey: string;
  nodeId?: string;
}

export default function FigmaEmbed({ fileKey, nodeId }: FigmaEmbedProps) {
  const embedUrl = `https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/${fileKey}${nodeId ? `/?node-id=${nodeId}` : ''}`;
  
  return (
    <div className="w-full">
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
        <iframe 
          className="absolute top-0 left-0 w-full h-full border-0"
          src={embedUrl}
          allowFullScreen
        />
      </div>
    </div>
  );
} 