import Link from "next/link";
import Image from "next/image";

export default function TriangleConceptSection() {
  return (
    <section className="py-20 md:py-32 bg-[#e3dac2]" id="triangle-concept">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-12 md:mb-20">
          <div className="flex items-center gap-2 md:gap-4 mb-4">
            <div className="hidden sm:block w-12 md:w-24 h-0.5 bg-orange-300"></div>
            <h3 className="text-center text-zinc-800 text-xs md:text-base font-medium font-['Work_Sans'] uppercase tracking-[3px] md:tracking-[5.60px]">
              MY APPROACH
            </h3>
            <div className="hidden sm:block w-12 md:w-24 h-0.5 bg-orange-300"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold font-['Playfair_Display'] text-zinc-800 mb-6">
            The Three Pillars of Wellness
          </h2>
          
          <div className="w-16 md:w-24 h-1 bg-orange-300 mb-6 md:mb-8"></div>
          
          <p className="text-center max-w-2xl text-zinc-800 text-base md:text-lg font-['Lora'] px-4">
            My approach addresses the fundamental elements of wellness through these three 
            interconnected pillars. Like a triangle—the strongest shape in nature—these pillars support 
            each other to create a comprehensive foundation for vibrant health and well-being.
          </p>
        </div>

        {/* Triangle Diagram */}
        <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-16 md:mb-24">
          <div className="bg-white p-4 md:p-8 rounded-xl border-2 border-black flex items-center justify-center">
            <Image 
              src="/images/home/rectangle.png"
              alt="The Three Pillars of Wellness: Mindset, Movement, and Nutrition"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Three Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {/* Mindset Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-56">
              <Image
                src="/images/pillars/mindset.jpg"
                alt="Mindset - Spiritual Alignment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/0 to-black/60"></div>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#8B70AC] flex items-center justify-center text-white">
                <span className="text-2xl">✧</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-2xl font-bold font-['Playfair_Display']">Mindset</h3>
                <p className="text-white/90 text-sm font-['Lora']">Spiritual Alignment</p>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 font-['Lora'] mb-6">
                Our thoughts shape our reality. Joy, gratitude, 
                and connection to our purpose fuel the soul. 
                Recognizing the magic in life and embracing our 
                unique gifts allow us to thrive.
              </p>
              
              <h4 className="font-semibold font-['Playfair_Display'] text-lg mb-4">Key Elements:</h4>
              
              <ul className="space-y-2 mb-6">
                {['Meditation and mindfulness', 'Spiritual practices', 'Purpose alignment', 
                  'Emotional well-being techniques', 'Personal growth guidance'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mt-1.5 mr-2 w-2 h-2 rounded-full bg-[#8B70AC]"></div>
                    <span className="text-gray-700 text-sm font-['Lora']">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-gray-100 pt-4">
                <Link 
                  href="/mindset" 
                  className="flex items-center justify-center text-[#8B70AC] text-sm font-medium font-['Work_Sans'] border border-[#8B70AC] rounded-md py-2 px-4"
                >
                  Learn More About Mindset
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Movement Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-56">
              <Image
                src="/images/pillars/movement.jpg"
                alt="Movement - Physical Maintenance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/0 to-black/60"></div>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#2C7E86] flex items-center justify-center text-white">
                <span className="text-2xl">⟳</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-2xl font-bold font-['Playfair_Display']">Movement</h3>
                <p className="text-white/90 text-sm font-['Lora']">Physical Maintenance</p>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 font-['Lora'] mb-6">
                Just as a car needs regular care, our body 
                requires movement. Strength, flexibility, and 
                energy flow through exercise, yoga, and 
                stretching are essential to sustaining health.
              </p>
              
              <h4 className="font-semibold font-['Playfair_Display'] text-lg mb-4">Key Elements:</h4>
              
              <ul className="space-y-2 mb-6">
                {['Personalized movement routines', 'Yoga and stretching guidance', 'Energy flow techniques', 
                  'Physical alignment practices', 'Breathwork integration'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mt-1.5 mr-2 w-2 h-2 rounded-full bg-[#2C7E86]"></div>
                    <span className="text-gray-700 text-sm font-['Lora']">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-gray-100 pt-4">
                <Link 
                  href="/sacred-house" 
                  className="flex items-center justify-center text-[#2C7E86] text-sm font-medium font-['Work_Sans'] border border-[#2C7E86] rounded-md py-2 px-4"
                >
                  Learn More About Movement
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Nutrition Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-56">
              <Image
                src="/images/pillars/nutrition.jpg"
                alt="Nutrition - Fuel for the Body"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/0 to-black/60"></div>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#CB8563] flex items-center justify-center text-white">
                <span className="text-2xl">🌱</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-2xl font-bold font-['Playfair_Display']">Nutrition</h3>
                <p className="text-white/90 text-sm font-['Lora']">Fuel for the Body</p>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 font-['Lora'] mb-6">
                What we eat is the foundation of our physical, 
                mental, and spiritual health. Food is medicine, 
                and mindful nutrition supports longevity, vitality, 
                and emotional balance.
              </p>
              
              <h4 className="font-semibold font-['Playfair_Display'] text-lg mb-4">Key Elements:</h4>
              
              <ul className="space-y-2 mb-6">
                {['Personalized nutrition plans', 'Food as medicine approach', 'Mindful eating practices', 
                  'Seasonal & local food guidance', 'Healing recipes & meal preparation'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mt-1.5 mr-2 w-2 h-2 rounded-full bg-[#CB8563]"></div>
                    <span className="text-gray-700 text-sm font-['Lora']">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-gray-100 pt-4">
                <Link 
                  href="/nutrition" 
                  className="flex items-center justify-center text-[#CB8563] text-sm font-medium font-['Work_Sans'] border border-[#CB8563] rounded-md py-2 px-4"
                >
                  Learn More About Nutrition
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
