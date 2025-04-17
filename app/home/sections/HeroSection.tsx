"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 bg-[#E3DAC2] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="flex flex-col justify-start items-start gap-8 md:gap-10 max-w-full lg:max-w-[600px]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Playfair_Display'] leading-tight md:leading-[1.2]">
            <span className="text-[#333333]">Where </span>
            <span className="text-[#CB8563]">Food</span>
            <span className="text-[#333333]"> Heals, </span>
            <span className="text-[#2C7E86]">Energy</span>
            <span className="text-[#333333]"> Moves, and the </span>
            <span className="text-[#555555]">Body</span>
            <span className="text-[#333333]"> Remembers</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-[#555555] font-normal font-['Lora'] leading-relaxed max-w-[616px]">
            A grounded approach to whole-person wellbeing—through plant-based nourishment, energy work, and embodied movement.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-start items-center sm:items-start gap-4 w-full">
            <Link href="/healing" className="w-full sm:w-60">
              <button className="w-full h-12 px-8 py-3 bg-[#CB8563] rounded-lg shadow-lg flex justify-center items-center transition-all hover:bg-[#b77857]">
                <span className="text-white text-base md:text-lg font-medium font-['Inter'] leading-normal">Begin Your Journey</span>
              </button>
            </Link>
            
            <Link href="#triangle-concept" className="w-full sm:w-60">
              <button className="w-full h-12 px-8 py-3 bg-[#555555] rounded-lg shadow-lg flex justify-center items-center transition-all hover:bg-[#444444]">
                <span className="text-white text-base md:text-lg font-medium font-['Inter'] leading-normal">Explore The Work</span>
              </button>
            </Link>
          </div>
        </div>
        
        {/* Right Content - Images */}
        <div className="hidden lg:flex justify-start items-center gap-3 mt-10 lg:mt-0">
          <div className="w-64 xl:w-72 flex flex-col justify-start items-start gap-3">
            <Image 
              src="/images/home/hero-1.jpg" 
              alt="Wellness journey"
              width={280}
              height={351}
              className="w-full h-80 rounded-xl object-cover shadow-md"
            />
            <Image 
              src="/images/home/hero-2.jpg" 
              alt="Holistic wellness"
              width={280}
              height={177}
              className="w-full h-44 rounded-xl object-cover shadow-md"
            />
          </div>
          
          <div className="w-72 xl:w-80 flex flex-col justify-start items-start gap-3">
            <Image 
              src="/images/home/hero-3.jpg" 
              alt="Energy work"
              width={344}
              height={213}
              className="w-full h-52 rounded-xl object-cover shadow-md"
            />
            <Image 
              src="/images/home/hero-4.jpg" 
              alt="Movement practice"
              width={320}
              height={320}
              className="w-full h-80 rounded-xl object-cover shadow-md"
            />
          </div>
        </div>
        
        {/* Mobile Image - Only visible on mobile */}
        <div className="lg:hidden w-full max-w-md mx-auto mt-8">
          <Image 
            src="/images/home/hero-1.jpg" 
            alt="Wellness journey mobile"
            width={500}
            height={400}
            className="w-full h-auto rounded-xl object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
} 