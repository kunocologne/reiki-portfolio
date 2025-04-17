"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[500px] md:h-[779px] px-4 sm:px-8 md:px-20 py-10 md:py-40 bg-stone-300 flex justify-center items-center">
      <div className="flex-1 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        <div className="inline-flex flex-col justify-start items-center md:items-start gap-6 md:gap-14">
          <div className="flex flex-col justify-start items-center md:items-start">
            <div className="justify-center text-zinc-800 text-4xl md:text-6xl font-bold font-['Playfair_Display'] leading-[44px] md:leading-[60px]">Connect to</div>
            <div className="flex flex-col justify-start items-center md:items-start">
              <div className="justify-center text-violet-300 text-4xl md:text-6xl font-bold font-['Playfair_Display'] leading-[44px] md:leading-[60px]">Your Heart,</div>
              <div className="pt-4 flex flex-col justify-start items-center md:items-start">
                <div className="self-stretch text-center md:text-left justify-center text-zinc-800 text-4xl md:text-6xl font-bold font-['Playfair_Display'] leading-[44px] md:leading-[60px]">Unlock Infinite Energy</div>
              </div>
            </div>
          </div>
          
          <div className="inline-flex justify-center items-center">
            <div className="text-center md:text-left justify-center text-neutral-600 text-lg md:text-xl font-normal font-['Lora'] leading-7">
              Guided by a Reiki Master taught by one of Hawayo Takata's
              students, discover the transformative power of energy work that
              I've been practicing since I was nine years old.
            </div>
          </div>
          
          <div className="inline-flex flex-col sm:flex-row justify-start items-center gap-4">
            <Link 
              href="#core-areas"
              className="w-full sm:w-60 h-12 px-8 py-6 rounded-lg shadow-lg flex justify-center items-center overflow-hidden"
              style={{ backgroundColor: "#A8A29E" }}
            >
              <div className="justify-center text-white text-lg font-medium font-['Inter'] leading-7">Begin Your Journey</div>
            </Link>
            
            <Link 
              href="/contact"
              className="w-full sm:w-60 h-12 px-8 py-6 bg-white rounded-lg shadow-lg outline outline-1 outline-offset-[-1px] flex justify-center items-center overflow-hidden"
              style={{ outlineColor: "#BFA8D9" }}
            >
              <div className="text-lg font-medium font-['Inter'] leading-7" style={{ color: "#BFA8D9" }}>Learn More</div>
            </Link>
          </div>
        </div>
        
        <div className="relative mt-6 md:mt-0">
          <Image
            src="/images/home/portrait.jpg"
            alt="Nathanael Mor"
            width={384}
            height={560}
            className="w-64 sm:w-80 md:w-96 h-auto md:h-[560px] relative rounded-[20px] object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
} 