import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

interface FigmaDesignProps {
  fileKey: string;
  nodeId?: string;
}

interface FigmaNode {
  id: string;
  name: string;
  type: string;
}

interface FigmaFileResponse {
  document: {
    children: FigmaNode[];
  };
  name: string;
}

const FigmaDesign: React.FC<FigmaDesignProps> = ({ fileKey, nodeId }) => {
  const [fileData, setFileData] = useState<FigmaFileResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchFigmaFile = async () => {
      try {
        // This would need to be handled by a server component or API route
        // due to the need for API key authorization
        setLoading(false);
        
        // For MVP, we'll display an iframe that embeds the Figma file
      } catch (err) {
        setError('Failed to load Figma design');
        setLoading(false);
      }
    };
    
    fetchFigmaFile();
  }, [fileKey]);
  
  if (loading) {
    return <div className="flex items-center justify-center h-96">Loading Figma design...</div>;
  }
  
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-96 gap-4">
        <p className="text-red-500">{error}</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    );
  }
  
  // Embed Figma file in an iframe
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
      <div className="mt-4 text-center">
        <a 
          href={`https://www.figma.com/file/${fileKey}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-brand-purple hover:underline"
        >
          Open in Figma
        </a>
      </div>
    </div>
  );
};

export default FigmaDesign; 