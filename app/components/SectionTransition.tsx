import React from 'react';

interface SectionTransitionProps {
  fromColor: string;
  toColor: string;
}

export default function SectionTransition({ fromColor, toColor }: SectionTransitionProps) {
  return (
    <div className="absolute -top-20 left-0 w-full h-40 z-10" 
         style={{ background: `linear-gradient(to bottom, ${fromColor}, ${toColor})` }}>
    </div>
  );
} 