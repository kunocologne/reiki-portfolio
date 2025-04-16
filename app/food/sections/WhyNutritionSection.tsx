"use client"

import Image from "next/image";
import Link from "next/link";

export default function WhyNutritionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-nutrition-primary/5 to-white" id="why-nutrition">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="w-10 h-10 rounded-full bg-nutrition-primary flex items-center justify-center text-white text-xl mx-auto mb-4">
              ✧
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Why Holistic Nutrition Works
          </h2>
          <div className="h-1 w-24 bg-nutrition-primary/50 mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            Holistic nutrition is grounded in both ancient wisdom and modern science, addressing the whole person 
            to create lasting health and vitality.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Main explanation with image */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[400px]">
              <Image 
                src="/images/food/why-nutrition.jpg" 
                alt="Holistic nutrition approach" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-nutrition-primary/30 to-transparent"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-gray-800">The Science of Nourishment</h3>
              
              <p className="text-gray-700">
                Modern nutritional science is confirming what traditional food cultures have practiced for generations: 
                that food is not just calories, but information that communicates with our cells and shapes our health.
              </p>
              
              <p className="text-gray-700">
                Research in epigenetics and nutrigenomics shows how food compounds can switch genes on or off, 
                influencing health outcomes. Meanwhile, emerging studies on the gut microbiome reveal how the foods we 
                eat shape our immune function, mood, and even brain health.
              </p>
              
              <p className="text-gray-700">
                Holistic nutrition works by harnessing these insights, using food as a powerful tool to address 
                the root causes of imbalance and create optimal conditions for your body to heal and thrive.
              </p>
              
              <div className="pt-4">
                <Link 
                  href="#food-journey"
                  className="text-nutrition-primary font-medium hover:underline flex items-center"
                >
                  Discover your personal nutrition journey
                  <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Mind-Body-Food Connection Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-md border-t-4" style={{ borderColor: 'var(--nutrition-primary)' }}>
              <div className="w-12 h-12 rounded-full bg-nutrition-primary/20 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-nutrition-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">Bio-Individual Approach</h3>
              <p className="text-gray-600">
                Your nutritional needs are as unique as your fingerprint. A holistic approach honors your biochemical 
                individuality, genetic predispositions, and personal health history to create truly personalized 
                nutrition guidance.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-t-4" style={{ borderColor: 'var(--nutrition-primary)' }}>
              <div className="w-12 h-12 rounded-full bg-nutrition-primary/20 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-nutrition-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">Food as Medicine</h3>
              <p className="text-gray-600">
                Food contains powerful compounds that can heal or harm. The right foods can reduce inflammation, 
                support organ function, and promote cellular repair. Holistic nutrition harnesses these natural 
                properties to address the root causes of health issues.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-t-4" style={{ borderColor: 'var(--nutrition-primary)' }}>
              <div className="w-12 h-12 rounded-full bg-nutrition-primary/20 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-nutrition-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">Mindful Eating Practices</h3>
              <p className="text-gray-600">
                How we eat is as important as what we eat. Mindful eating practices reconnect you with your body's 
                innate wisdom, improve digestion, and transform your relationship with food from one of restriction 
                to one of nourishment and joy.
              </p>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-serif font-bold text-center mb-6">Evidence-Based Benefits</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutrition-primary/20 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-nutrition-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Inflammation Reduction</span>
                    <p className="text-gray-600 mt-1">Whole, unprocessed foods rich in antioxidants and polyphenols have been shown to significantly reduce chronic inflammation, a root cause of many health issues.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutrition-primary/20 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-nutrition-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Enhanced Energy</span>
                    <p className="text-gray-600 mt-1">Properly nourished cells produce more efficient energy, leading to improved stamina, mental clarity, and reduced fatigue throughout the day.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutrition-primary/20 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-nutrition-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Gut Health Restoration</span>
                    <p className="text-gray-600 mt-1">A holistic approach to nutrition supports a healthy gut microbiome, improving digestion, nutrient absorption, and immune function.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutrition-primary/20 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-nutrition-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Mood Stabilization</span>
                    <p className="text-gray-600 mt-1">Research confirms the powerful connection between nutrition and mental health, with dietary changes showing effectiveness in supporting emotional wellbeing.</p>
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