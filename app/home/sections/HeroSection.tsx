"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-[#E8D7B7] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="flex flex-col justify-start items-start gap-8 md:gap-10 max-w-full lg:max-w-[600px]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] leading-tight md:leading-[1.2]">
            <span className="text-[#333333]">Where </span>
            <span className="text-[#BFA8D9]">Mind</span>
            <span className="text-[#333333]"> Heals, </span>
            <span className="text-[#A8C3A7]">Energy</span>
            <span className="text-[#333333]"> Moves, and the </span>
            <span className="text-[#555555]">Body</span>
            <span className="text-[#333333]"> Remembers</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-[#555555] font-normal font-['Lora'] leading-relaxed max-w-[616px]">
            A grounded approach to whole-person wellbeing—through plant-based nourishment, energy work, and embodied movement.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-start items-center sm:items-start gap-4 w-full">
            <Link href="/healing" className="w-full sm:w-60">
              <button className="w-full h-12 px-8 py-3 rounded-lg shadow-lg flex justify-center items-center transition-all hover:opacity-90" style={{ backgroundColor: "#BFA8D9" }}>
                <span className="text-white text-base md:text-lg font-medium font-['Inter'] leading-normal">Begin Your Journey</span>
              </button>
            </Link>
            
            <Link href="#triangle-concept" className="w-full sm:w-60">
              <button className="w-full h-12 px-8 py-3 rounded-lg shadow-lg flex justify-center items-center transition-all hover:opacity-90" style={{ backgroundColor: "#A8C3A7" }}>
                <span className="text-white text-base md:text-lg font-medium font-['Inter'] leading-normal">Explore The Work</span>
              </button>
            </Link>
          </div>
        </div>
        
        {/* Right Content - Images (desktop only) */}
        <div className="hidden lg:flex justify-start items-center gap-3 mt-10 lg:mt-0">
          <div className="w-64 xl:w-72 flex flex-col justify-start items-start gap-3">
            <Image 
              src="/images/home/hero.jpg" 
              alt="Wellness journey"
              width={280}
              height={351}
              className="w-full h-80 rounded-xl object-cover shadow-md"
            />
            <Image 
              src="/images/home/move.jpg" 
              alt="Holistic wellness"
              width={280}
              height={177}
              className="w-full h-44 rounded-xl object-cover shadow-md"
            />
          </div>
          
          <div className="w-72 xl:w-80 flex flex-col justify-start items-start gap-3">
            <Image 
              src="/images/home/food.jpg" 
              alt="Energy work"
              width={344}
              height={213}
              className="w-full h-52 rounded-xl object-cover shadow-md"
            />
            <Image 
              src="/images/home/movement.jpg" 
              alt="Movement practice"
              width={320}
              height={320}
              className="w-full h-80 rounded-xl object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 