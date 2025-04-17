"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full py-20 md:py-40 bg-[#E3DAC2] overflow-hidden">
      <div className="container mx-auto px-4 md:px-20 flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Content */}
        <div className="inline-flex flex-col justify-start items-start gap-8 md:gap-12 max-w-full lg:max-w-[600px]">
          <h1 className="text-4xl md:text-6xl font-bold font-['Playfair_Display'] leading-tight md:leading-[60px]">
            <span className="text-[#333333]">Where </span>
            <span className="text-[#CB8563]">Food</span>
            <span className="text-[#333333]"> Heals, </span>
            <span className="text-[#2C7E86]">Energy</span>
            <span className="text-[#333333]"> Moves, and the </span>
            <span className="text-[#555555]">Body</span>
            <span className="text-[#333333]"> Remembers</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#555555] font-normal font-['Lora'] leading-7 max-w-[616px]">
            A grounded approach to whole-person wellbeing—through plant-based nourishment, energy work, and embodied movement.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-start items-start gap-4">
            <Link href="/healing" className="w-full sm:w-60">
              <button className="w-full h-12 px-8 py-3 bg-[#CB8563] rounded-lg shadow-lg flex justify-center items-center">
                <span className="text-white text-lg font-medium font-['Inter'] leading-7">Begin Your Journey</span>
              </button>
            </Link>
            
            <Link href="#triangle-concept" className="w-full sm:w-60">
              <button className="w-full h-12 px-8 py-3 bg-[#555555] rounded-lg shadow-lg flex justify-center items-center">
                <span className="text-white text-lg font-medium font-['Inter'] leading-7">Explore The Work</span>
              </button>
            </Link>
          </div>
        </div>
        
        {/* Right Content - Images */}
        <div className="hidden lg:flex justify-start items-center gap-2.5 mt-10 lg:mt-0">
          <div className="w-72 inline-flex flex-col justify-start items-start gap-2.5">
            <Image 
              src="/images/home/hero-1.jpg" 
              alt="Wellness journey"
              width={280}
              height={351}
              className="self-stretch h-80 rounded-xl object-cover"
            />
            <Image 
              src="/images/home/hero-2.jpg" 
              alt="Holistic wellness"
              width={280}
              height={177}
              className="self-stretch h-44 rounded-xl object-cover"
            />
          </div>
          
          <div className="w-80 inline-flex flex-col justify-start items-start gap-2.5">
            <Image 
              src="/images/home/hero-3.jpg" 
              alt="Energy work"
              width={344}
              height={213}
              className="w-80 h-52 rounded-2xl object-cover"
            />
            <Image 
              src="/images/home/hero-4.jpg" 
              alt="Movement practice"
              width={320}
              height={320}
              className="self-stretch h-80 rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 