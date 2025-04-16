"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Brain, ActivityIcon, Utensils } from 'lucide-react';

// Define the pillar types and their properties
const pillars = [
  {
    id: 'mindset',
    name: 'Mindset',
    description: 'Energy healing, meditation practices, and spiritual guidance.',
    icon: Brain,
    color: '#BFA8D9',
    bgColor: 'rgba(191, 168, 217, 0.2)',
    hoverBgColor: 'rgba(191, 168, 217, 0.3)',
    position: { top: '5%', left: '50%', transform: 'translateX(-50%)' },
    link: '/healing'
  },
  {
    id: 'movement',
    name: 'Movement',
    description: 'Creating strong, flexible bodies through conscious movement.',
    icon: '🧘‍♀️',
    color: '#f8d2dd',
    hover: '#e3a8b8',
    active: '#c97a92',
    bgColor: 'rgba(168, 195, 167, 0.2)',
    hoverBgColor: 'rgba(168, 195, 167, 0.3)',
    position: { bottom: '10%', left: '20%' },
    link: '/sacred-house'
  },
  {
    id: 'nutrition',
    name: 'Nutrition',
    description: 'Plant-based culinary education and personalized nutrition.',
    icon: Utensils,
    color: '#E3A76F',
    bgColor: 'rgba(227, 167, 111, 0.2)',
    hoverBgColor: 'rgba(227, 167, 111, 0.3)',
    position: { bottom: '10%', right: '20%' },
    link: '/food'
  }
];

export default function Triangle() {
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[600px] md:h-[700px]">
      {/* Triangle SVG Background */}
      <svg className="absolute w-full h-full" viewBox="0 0 800 700" preserveAspectRatio="xMidYMid meet">
        {/* Main outline triangle */}
        <motion.polygon
          points="400,50 100,600 700,600"
          fill="none"
          stroke={hoveredPillar ? pillars.find(p => p.id === hoveredPillar)?.color || '#BFA8D9' : '#BFA8D9'}
          strokeWidth="2"
          initial={{ opacity: 0.2 }}
          animate={{ 
            opacity: hoveredPillar ? 0.4 : 0.2,
            stroke: hoveredPillar ? pillars.find(p => p.id === hoveredPillar)?.color || '#BFA8D9' : '#BFA8D9'
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Inner triangle */}
        <motion.polygon
          points="400,150 175,500 625,500"
          fill="rgba(191, 168, 217, 0.05)"
          stroke="#BFA8D9"
          strokeWidth="1"
          initial={{ opacity: 0.3 }}
          animate={{ 
            opacity: hoveredPillar ? 0.5 : 0.3,
            fill: hoveredPillar ? `rgba(${hoveredPillar === 'mindset' ? '191, 168, 217' : hoveredPillar === 'movement' ? '168, 195, 167' : '227, 167, 111'}, 0.05)` : 'rgba(191, 168, 217, 0.05)',
            stroke: hoveredPillar ? pillars.find(p => p.id === hoveredPillar)?.color || '#BFA8D9' : '#BFA8D9'
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Connection lines */}
        <line x1="400" y1="150" x2="400" y2="600" stroke="#BFA8D9" strokeWidth="1" strokeDasharray="5,5" className="opacity-30" />
        <line x1="175" y1="500" x2="400" y2="500" stroke="#A8C3A7" strokeWidth="1" strokeDasharray="5,5" className="opacity-30" />
        <line x1="625" y1="500" x2="400" y2="500" stroke="#E3A76F" strokeWidth="1" strokeDasharray="5,5" className="opacity-30" />
        
        {/* Circles at vertices */}
        <motion.circle 
          cx="400" cy="150" r="30" 
          fill="rgba(191, 168, 217, 0.1)" 
          stroke="#BFA8D9" 
          strokeWidth="1"
          animate={{ 
            fill: hoveredPillar === 'mindset' ? 'rgba(191, 168, 217, 0.2)' : 'rgba(191, 168, 217, 0.1)',
            r: hoveredPillar === 'mindset' ? 35 : 30,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.circle 
          cx="175" cy="500" r="30" 
          fill="rgba(168, 195, 167, 0.1)" 
          stroke="#A8C3A7" 
          strokeWidth="1"
          animate={{ 
            fill: hoveredPillar === 'movement' ? 'rgba(168, 195, 167, 0.2)' : 'rgba(168, 195, 167, 0.1)',
            r: hoveredPillar === 'movement' ? 35 : 30,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.circle 
          cx="625" cy="500" r="30" 
          fill="rgba(227, 167, 111, 0.1)" 
          stroke="#E3A76F" 
          strokeWidth="1"
          animate={{ 
            fill: hoveredPillar === 'nutrition' ? 'rgba(227, 167, 111, 0.2)' : 'rgba(227, 167, 111, 0.1)',
            r: hoveredPillar === 'nutrition' ? 35 : 30,
          }}
          transition={{ duration: 0.3 }}
        />
      </svg>

      {/* Pillar cards positioned over the SVG */}
      {pillars.map((pillar) => (
        <motion.div
          key={pillar.id}
          className="absolute w-64 bg-white p-6 rounded-xl shadow-md z-10 cursor-pointer"
          style={{
            ...pillar.position,
            borderTop: `4px solid ${pillar.color}`
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: pillars.findIndex(p => p.id === pillar.id) * 0.2 }}
          whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
          onMouseEnter={() => setHoveredPillar(pillar.id)}
          onMouseLeave={() => setHoveredPillar(null)}
        >
          <Link href={pillar.link} className="block">
            <div 
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: hoveredPillar === pillar.id ? pillar.hoverBgColor : pillar.bgColor }}
            >
              <pillar.icon className="h-7 w-7" style={{ color: pillar.color }} />
            </div>
            
            <h4 
              className="font-serif font-bold text-xl mb-2 text-center"
              style={{ color: pillar.color }}
            >
              {pillar.name}
            </h4>
            
            <p className="text-foreground/80 text-sm text-center">
              {pillar.description}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
} 