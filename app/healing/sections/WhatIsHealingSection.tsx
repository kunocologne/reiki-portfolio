"use client"

import Image from "next/image";
import Link from "next/link";

export default function WhatIsHealingSection() {
  return (
    <section className="py-16 bg-white" id="what-is-healing">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center mb-2">
                <span className="w-10 h-10 rounded-full bg-mindset-primary flex items-center justify-center text-white text-xl mr-2">
                  ✧
                </span>
                <span className="text-mindset-primary text-lg font-medium">Mind Pillar</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold">
                The Foundation of Holistic Healing
              </h2>
            </div>
            <div className="h-1 w-24 bg-mindset-primary/50 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Healing begins in the mind. As one of the three pillars of wellness, the mind
              forms the foundation of our approach to energy healing, creating harmony between
              thoughts, emotions, and spiritual connection that radiates through the entire being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                What is Energy Healing?
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Energy healing is a holistic practice that activates the body's subtle energy systems 
                  to remove blocks and promote health and wellbeing. By breaking through these energetic blocks,
                  the body's inherent ability to heal itself is stimulated.
                </p>
                
                <p className="text-lg">
                  The practice works with the subtle vibrational field that surrounds and penetrates our 
                  physical body—often called the "aura" or "biofield." When this energy becomes stagnant 
                  or imbalanced due to stress, emotional trauma, or negative thought patterns, physical 
                  and emotional symptoms can manifest.
                </p>

                <div className="bg-mindset-primary/10 p-6 rounded-xl my-6 border-l-4 border-mindset-primary">
                  <p className="text-lg italic font-serif">
                    "Energy healing doesn't just address symptoms—it works with the root energetic 
                    imbalances that cause them, creating profound transformation on all levels."
                  </p>
                </div>
                
                <p className="text-lg">
                  Through various modalities like Reiki, Tantra energy work, and breathwork, 
                  I help restore flow and balance to your energy system, removing blockages 
                  and facilitating your body's natural healing processes.
                </p>
              </div>
              
              <div className="mt-6">
                <Link 
                  href="#healing-methods" 
                  className="inline-flex items-center text-mindset-primary font-medium hover:text-mindset-primary/80 transition-colors"
                >
                  Explore healing methods
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="space-y-8 animate-fadeInRight">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/healing/energy-healing.jpg"
                  alt="Energy healing session"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-mindset-primary/10 p-6 rounded-xl animate-fadeIn delay-200">
                  <h3 className="font-serif font-semibold text-xl mb-3">Mind-Body Connection</h3>
                  <p>Energy healing recognizes that emotional and mental states directly impact physical well-being, treating you as a whole person.</p>
                </div>
                
                <div className="bg-mindset-primary/10 p-6 rounded-xl animate-fadeIn delay-300">
                  <h3 className="font-serif font-semibold text-xl mb-3">Spiritual Alignment</h3>
                  <p>Brings harmony between your thoughts, emotions, and higher self, enhancing intuition and inner wisdom.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fadeIn delay-400">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-mindset-primary/20">
              <div className="w-12 h-12 rounded-full bg-mindset-primary/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-mindset-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-xl mb-2">Safe & Non-Invasive</h3>
              <p className="text-gray-600">Energy healing is gentle, non-invasive, and has no side effects, making it safe for people of all ages and health conditions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-mindset-primary/20">
              <div className="w-12 h-12 rounded-full bg-mindset-primary/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-mindset-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-xl mb-2">Whole-Person Healing</h3>
              <p className="text-gray-600">Addresses physical, emotional, mental, and spiritual aspects simultaneously for complete wellbeing.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-mindset-primary/20">
              <div className="w-12 h-12 rounded-full bg-mindset-primary/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-mindset-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-xl mb-2">Awakens Inner Wisdom</h3>
              <p className="text-gray-600">Connects you with your body's innate intelligence and healing capacity, empowering you on your wellness journey.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 