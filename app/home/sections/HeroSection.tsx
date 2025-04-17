"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="w-full relative overflow-hidden" 
      style={{ 
        background: 'linear-gradient(to bottom, var(--color-bg-light) 0%, var(--color-bg) 100%)',
        minHeight: '90vh' 
      }}
    >
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 max-w-7xl">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
            <span className="block">Wholeness Through</span>
            <span className="block mt-2">Healing, Space & Nourishment</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 font-body max-w-2xl">
            Embark on a transformative journey to balance, wellness, and integrated living through holistic practices and ancient wisdom.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/healing">
              <button 
                className="px-6 py-3 rounded-md font-semibold shadow-md transition-all hover:shadow-lg"
                style={{backgroundColor: '#A8A29E', color: 'white'}}
              >
                Discover Healing Modalities
              </button>
            </Link>
            
            <Link href="#triangle-concept">
              <button 
                className="px-6 py-3 rounded-md font-semibold shadow-sm transition-all hover:shadow-md border-2"
                style={{borderColor: '#BFA8D9', color: '#BFA8D9'}}
              >
                Learn My Approach
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-24 top-1/4 w-96 h-96 rounded-full bg-purple-100 opacity-50 blur-3xl"></div>
        <div className="absolute -left-24 top-1/3 w-80 h-80 rounded-full bg-orange-100 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-yellow-100 opacity-40 blur-3xl"></div>
      </div>
    </section>
  );
} 