"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function SacredHouseHeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0 -z-10">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/sacred-house-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-lavendel/30 via-lavendel/20 to-black/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-5xl mx-auto text-white">
          {/* Logo or icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-lavendel/30 backdrop-blur-sm flex items-center justify-center">
              <Image 
                src="/icons/lotus.svg" 
                alt="Sacred House Icon" 
                width={60} 
                height={60}
                className="opacity-90"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
            <span className="text-lavendel">Sacred</span> House
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-light opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            A transformative space for healing, growth, and spiritual awakening
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button 
              variant="movement" 
              size="lg"
              asChild
              className="text-white font-medium text-lg transition-transform hover:scale-105 shadow-lg"
            >
              <Link href="/contact?retreat=inquiry">Book Your Retreat</Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white/10 font-medium text-lg transition-transform hover:scale-105"
              onClick={() => {
                const servicesSection = document.getElementById('sacred-house-services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Offerings
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/70 text-sm mb-2">Scroll to Discover</span>
        <ChevronDown className="w-8 h-8 text-white/70 animate-bounce" />
      </div>
    </section>
  );
}
