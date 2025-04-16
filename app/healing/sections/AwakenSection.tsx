"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AwakenSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        <Image
          src="/images/healing/cta-bg.jpg"
          alt="Energy Healing"
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
            Begin Your <span className="text-mindset-primary">Mind-Body</span> Healing Journey
          </h2>
          
          <p className="text-xl md:text-2xl font-accent text-white/90 mb-8">
            Take the first step towards balance, clarity, and wholeness
          </p>
          
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Whether you're seeking relief from specific concerns or simply want to enhance your overall wellbeing, 
            my holistic approach to energy healing offers a gentle yet powerful path forward.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button 
              asChild
              variant="mindset"
              size="lg" 
              className="text-white font-medium text-lg px-8 py-6"
            >
              <Link href="/contact">
                Book Your Healing Session
              </Link>
            </Button>
            
            <span className="text-white/60">or</span>
            
            <Link 
              href="/contact#message"
              className="text-white font-medium underline underline-offset-4 hover:text-mindset-primary transition-colors"
            >
              Send a Message with Questions
            </Link>
          </div>
          
          <div className="mt-16 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-lg mb-1">60-90 Minutes</h3>
              <p className="text-white/70 text-sm">Per healing session</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-lg mb-1">In-Person & Distance</h3>
              <p className="text-white/70 text-sm">Healing options available</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-lg mb-1">Personalized</h3>
              <p className="text-white/70 text-sm">Tailored to your needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
