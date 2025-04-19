"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-[#E3DAC2] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-10 lg:gap-16">
        {/* Left Content */}
        <div className="flex flex-col justify-start items-start gap-6 sm:gap-8 md:gap-10 max-w-full lg:max-w-[600px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] leading-tight md:leading-[1.2]">
            <span className="text-[#333333]">Where </span>
            <span className="text-[#E3A76F]">Mind</span>
            <span className="text-[#333333]"> Heals, </span>
            <span className="text-[#2C7E86]">Energy</span>
            <span className="text-[#333333]"> Moves, and the </span>
            <span className="text-[#8B70AC]">Body</span>
            <span className="text-[#333333]"> Remembers</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#555555] font-normal font-['Lora'] leading-relaxed max-w-[616px]">
            A grounded approach to whole-person wellbeing—through plant-based nourishment, energy work, and embodied movement.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-start items-center sm:items-start gap-3 sm:gap-4 w-full">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto h-10 sm:h-12 px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg flex justify-center items-center transition-all hover:opacity-90" style={{ backgroundColor: "#BFA8D9" }}>
                <span className="text-white text-sm sm:text-base md:text-lg font-medium font-['Inter'] leading-normal">Start Healing</span>
              </button>
            </Link>
            
            <Link href="#triangle-concept" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto h-10 sm:h-12 px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg flex justify-center items-center transition-all hover:opacity-90" style={{ backgroundColor: "#A8A29E" }}>
                <span className="text-white text-sm sm:text-base md:text-lg font-medium font-['Inter'] leading-normal">Explore The Work</span>
              </button>
            </Link>
          </div>
        </div>
        
        {/* Images Section - Hidden on mobile, visible on sm and larger */}
        <div className="hidden sm:flex flex-col sm:flex-row lg:flex-row justify-center lg:justify-start items-center gap-2 sm:gap-3 mt-8 sm:mt-10 lg:mt-0 w-full lg:w-auto">
          <div className="w-full sm:w-1/2 lg:w-64 xl:w-72 flex flex-col justify-start items-center lg:items-start gap-2 sm:gap-3">
            <Image 
              src="/images/home/hero.jpg" 
              alt="Wellness journey"
              width={280}
              height={351}
              className="w-full max-w-xs sm:max-w-none h-56 sm:h-64 lg:h-80 rounded-xl object-cover shadow-md"
            />
            <Image 
              src="/images/home/move.jpg" 
              alt="Holistic wellness"
              width={280}
              height={177}
              className="w-full max-w-xs sm:max-w-none h-40 sm:h-44 rounded-xl object-cover shadow-md"
            />
          </div>
          
          <div className="w-full sm:w-1/2 lg:w-72 xl:w-80 flex-col justify-start items-center lg:items-start gap-2 sm:gap-3 flex">
            <Image 
              src="/images/home/food.jpg" 
              alt="Energy work"
              width={344}
              height={213}
              className="w-full max-w-xs sm:max-w-none h-48 sm:h-52 rounded-xl object-cover shadow-md"
            />
            <Image 
              src="/images/home/movement.jpg" 
              alt="Movement practice"
              width={320}
              height={320}
              className="w-full max-w-xs sm:max-w-none h-72 sm:h-80 rounded-xl object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 