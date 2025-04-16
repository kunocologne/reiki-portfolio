"use client"

import Link from "next/link";
import Image from "next/image";

export default function MovementCtaSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/sacred-house/retreat-1.jpg"
          alt="Sacred House Retreat"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Begin Your Movement Journey
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 leading-relaxed">
            Take the first step toward embodied transformation. Connect with us to explore options.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white rounded-lg font-medium text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Join a Retreat
            </Link>
            
            <Link 
              href="/contact"
              className="px-8 py-4 bg-transparent hover:bg-white/10 border-2 border-white text-white rounded-lg font-medium text-lg transition-all"
            >
              Schedule a Consultation
            </Link>
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber-600/30 flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="font-serif font-medium text-xl mb-1">Flexible Schedules</h3>
              <p className="text-white/80">Options for every lifestyle</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber-600/30 flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="font-serif font-medium text-xl mb-1">Personalized Approach</h3>
              <p className="text-white/80">Tailored to your needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber-600/30 flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-serif font-medium text-xl mb-1">All Experience Levels</h3>
              <p className="text-white/80">Beginners always welcome</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 