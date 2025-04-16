"use client"

import Image from "next/image";
import Link from "next/link";

export default function WhyHealingSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-mindset-primary/5 to-white" id="why-healing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="w-10 h-10 rounded-full bg-mindset-primary flex items-center justify-center text-white text-xl mx-auto mb-4">
              ✧
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Why Energy Healing Works
          </h2>
          <div className="h-1 w-24 bg-mindset-primary/50 mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            Energy healing is supported by ancient wisdom and modern science, working at the intersection 
            of mind, body, and energy to create profound transformation.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Main explanation with image */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[400px]">
              <Image 
                src="/images/healing/why-healing.jpg" 
                alt="Energy field visualization" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-mindset-primary/30 to-transparent"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-gray-800">The Science Behind Energy Healing</h3>
              
              <p className="text-gray-700">
                Modern science is beginning to validate what ancient healing traditions have known for millennia: 
                that our bodies are comprised of energy fields that affect our physical, mental, and emotional health.
              </p>
              
              <p className="text-gray-700">
                Quantum physics has shown that everything in our universe is made of energy vibrating at different 
                frequencies. When these energies become blocked or imbalanced due to stress, trauma, or negative 
                thought patterns, physical and emotional symptoms can manifest.
              </p>
              
              <p className="text-gray-700">
                Energy healing works by identifying and clearing these blockages, allowing your body's innate healing 
                intelligence to flow freely again, supporting both physical recovery and emotional release.
              </p>
              
              <div className="pt-4">
                <Link 
                  href="#journey"
                  className="text-mindset-primary font-medium hover:underline flex items-center"
                >
                  Learn how to begin your healing journey
                  <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Mind-Body-Spirit Connection Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-md border-t-4" style={{ borderColor: 'var(--mindset-primary)' }}>
              <div className="w-12 h-12 rounded-full bg-mindset-primary/20 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-mindset-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">The Mind Connection</h3>
              <p className="text-gray-600">
                Energy healing engages directly with the mind pillar, releasing mental blocks and emotional patterns 
                that limit your potential. As the mind clears, many experience enhanced clarity, reduced stress, and 
                a stronger connection to their intuition.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-t-4" style={{ borderColor: 'var(--movement-primary)' }}>
              <div className="w-12 h-12 rounded-full bg-movement-primary/20 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-movement-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">The Body Connection</h3>
              <p className="text-gray-600">
                Our bodies hold the memories of our experiences. Energy healing helps release physical tension and trauma 
                stored in the body, supporting relaxation, pain reduction, and improved physical function. This complements 
                the movement pillar of holistic wellness.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-t-4" style={{ borderColor: 'var(--nutrition-primary)' }}>
              <div className="w-12 h-12 rounded-full bg-nutrition-primary/20 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-nutrition-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">The Energy Connection</h3>
              <p className="text-gray-600">
                Energy healing works with your biofield—the energy that surrounds and permeates your body. By balancing this 
                field, healing supports proper energy flow throughout your entire system, complementing the nutrition pillar 
                by enhancing how your body processes and utilizes energy.
              </p>
            </div>
          </div>
          
          {/* Research and Evidence */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-serif font-bold text-center mb-6">Evidence-Based Benefits</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-mindset-primary/20 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-mindset-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Stress Reduction</span>
                    <p className="text-gray-600 mt-1">Studies show energy healing activates the parasympathetic nervous system, significantly reducing stress hormones and promoting relaxation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-mindset-primary/20 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-mindset-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Improved Sleep</span>
                    <p className="text-gray-600 mt-1">Many clients report better sleep quality and reduced insomnia after energy healing sessions, supporting overall mental and physical health.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-mindset-primary/20 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-mindset-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Pain Management</span>
                    <p className="text-gray-600 mt-1">Research shows energy healing can help reduce both acute and chronic pain by releasing tension and improving energy flow in affected areas.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-mindset-primary/20 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-mindset-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Emotional Healing</span>
                    <p className="text-gray-600 mt-1">Energy healing helps process and release stored emotions, supporting recovery from trauma, grief, and other emotional challenges.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 