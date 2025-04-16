"use client"

import Image from "next/image";

export default function MovementIntroSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="movement-intro">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Pillar Badge */}
          <div className="flex justify-center mb-4">
            <span className="px-4 py-1 bg-movement-primary/10 text-movement-primary rounded-full text-sm font-medium">
              The Second Pillar: Movement
            </span>
          </div>
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="w-10 h-10 rounded-full bg-movement-primary flex items-center justify-center text-white text-xl mx-auto mb-4">
                ✦
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Welcome to Sacred House
            </h2>
            <div className="h-1 w-24 bg-movement-primary/50 mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto text-gray-700">
              A sanctuary where movement becomes medicine, forming the second pillar of our holistic approach to wellbeing.
            </p>
          </div>
          
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text Content */}
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-serif font-semibold mb-6 text-movement-primary">
                The Philosophy of Sacred Movement
              </h3>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                The ancient wisdom traditions have always known what modern science is now confirming: 
                movement is essential medicine for body, mind, and spirit. In the Sacred House, movement 
                is approached as a ritual, a meditation, and a celebration.
              </p>
              
              <p className="mb-8 text-gray-700 leading-relaxed">
                This second pillar of our holistic approach recognizes that the body was designed to move—not 
                just for physical fitness, but as a pathway to deeper awareness, emotional release, and 
                spiritual connection.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-movement-primary/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-movement-primary">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Embodied Wisdom</h4>
                    <p className="text-gray-600">
                      Movement creates a dialogue between mind and body, accessing the innate wisdom held within 
                      our physical form.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-movement-primary/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-movement-primary">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="9" y1="15" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Ritual & Practice</h4>
                    <p className="text-gray-600">
                      Regular, intentional movement practices create rhythm and ritual in life, anchoring us in presence 
                      and purpose.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-movement-primary/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-movement-primary">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Joy & Expression</h4>
                    <p className="text-gray-600">
                      Movement is a natural expression of joy and vitality, allowing emotions to flow and creativity 
                      to flourish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="order-1 md:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl">
                <Image
                  src="/images/sacred-house/movement-philosophy.jpg"
                  alt="Sacred movement practice"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-movement-primary/10 z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-movement-primary/5 z-0"></div>
              
              {/* Quote overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <p className="italic text-gray-700 font-serif">
                  "Movement is the unfolding of your body's story, a sacred dialogue between your inner and outer worlds."
                </p>
                <p className="text-right text-sm font-medium mt-2 text-movement-primary">— Nathanel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-movement-primary/5 -skew-y-3 -translate-y-32 z-0"></div>
    </section>
  );
} 