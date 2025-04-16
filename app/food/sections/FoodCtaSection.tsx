"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FoodCtaSection() {
  return (
    <section id="food-cta" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        <Image
          src="/images/food/nourish-bg.jpg"
          alt="Nourishment Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="container relative">
        <div className="max-w-3xl text-white mx-auto text-center">
          <span className="inline-block mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto">
              <span className="text-white text-3xl">✧</span>
            </div>
          </span>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
            Nourish Your <span className="text-nutrition-primary">Body</span> with Holistic Nutrition
          </h2>
          
          <p className="text-xl md:text-2xl font-accent text-white/90 mb-8">
            The third pillar of holistic wellbeing
          </p>
          
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Nutrition forms the third pillar of my holistic approach, working in harmony with mind and energy healing. 
            What we eat nourishes not just our physical body, but influences our mental clarity, emotional balance, 
            and energetic vitality.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button 
              asChild
              variant="nutrition"
              size="lg" 
              className="text-white font-medium text-lg px-8 py-6"
            >
              <Link href="/contact">
                Book a Consultation
              </Link>
            </Button>
            
            <span className="text-white/60">or</span>
            
            <Link 
              href="/contact#message"
              className="text-white font-medium underline underline-offset-4 hover:text-nutrition-primary transition-colors"
            >
              Ask a Question First
            </Link>
          </div>
          
          <div className="mt-16 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-lg mb-1">Personalized Plans</h3>
              <p className="text-white/70 text-sm">Tailored to your needs</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-lg mb-1">Holistic Approach</h3>
              <p className="text-white/70 text-sm">Food as medicine</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-lg mb-1">Transformative</h3>
              <p className="text-white/70 text-sm">Physical and energetic</p>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-white/20">
            <p className="text-white/80">
              "Nutrition is the third pillar in my integrated approach to wellbeing,
              complementing mindset coaching and energy healing to create a complete system
              for whole-person transformation."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 