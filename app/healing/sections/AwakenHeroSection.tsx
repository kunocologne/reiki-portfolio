"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function AwakenHeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);

  useEffect(() => {
    // After 3 seconds, if video hasn't loaded, show the fallback image
    const timer = setTimeout(() => {
      if (!isVideoLoaded) {
        setHasVideoError(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isVideoLoaded]);

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Background video with overlay */}
      {!hasVideoError && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadedData={() => setIsVideoLoaded(true)}
            onError={() => setHasVideoError(true)}
          >
            <source src="/videos/healing-background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-sage-green/30 via-sage-green/20 to-black/40 z-10"></div>
        </div>
      )}

      {/* Content */}
      <div className="container relative z-20 text-white text-center px-4">
        <div className="max-w-3xl mx-auto animate-fadeIn">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
            Awaken Your <span className="text-sage-green">Healing</span> Journey
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90 drop-shadow-md">
            Experience transformative energy work that awakens your body's natural 
            healing abilities and restores balance to mind, body, and spirit.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="mindset" 
              size="lg"
              asChild
              className="text-white font-medium text-lg transition-transform hover:scale-105"
            >
              <Link href="/contact">Book a Session</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="border-2 border-white text-white bg-transparent hover:bg-white/10 font-medium text-lg transition-transform hover:scale-105"
            >
              <Link href="#what-is-healing">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <Link 
          href="#what-is-healing" 
          aria-label="Scroll to learn more"
          className="flex flex-col items-center"
        >
          <span className="text-white text-sm mb-2">Discover More</span>
          <ChevronDown className="w-8 h-8 text-white" />
        </Link>
      </div>

      {/* Alternative background for when video isn't loaded */}
      {(hasVideoError || !isVideoLoaded) && (
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/healing/hero.jpg"
            alt="Healing background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sage-green/30 via-sage-green/20 to-black/40 z-10"></div>
        </div>
      )}
    </section>
  );
} 