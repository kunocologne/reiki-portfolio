import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section className="py-20 md:py-32 bg-white" id="projects">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-12 md:mb-20">
          <div className="flex items-center gap-2 md:gap-4 mb-4">
            <div className="hidden sm:block w-12 md:w-24 h-0.5 bg-orange-300"></div>
            <h3 className="text-center text-zinc-800 text-xs md:text-base font-medium font-['Work_Sans'] uppercase tracking-[3px] md:tracking-[5.60px]">
              MY PROJECTS
            </h3>
            <div className="hidden sm:block w-12 md:w-24 h-0.5 bg-orange-300"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold font-['Playfair_Display'] text-zinc-800 mb-6">
            Featured Wellness Projects
          </h2>
          
          <div className="w-16 md:w-24 h-1 bg-orange-300 mb-6 md:mb-8"></div>
          
          <p className="text-center max-w-2xl text-zinc-800 text-base md:text-lg font-['Lora'] px-4">
            Explore my collection of wellness initiatives designed to nurture mind, body, and spirit. 
            Each project represents my commitment to holistic health and balanced living through 
            the three pillars of wellness.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Project Card 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="relative h-64">
              <Image
                src="/images/projects/seasonal-retreats.jpg"
                alt="Seasonal Wellness Retreats"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/0 to-black/60"></div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full">
                <span className="text-sm font-medium text-[#CB8563]">Seasonal Events</span>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold font-['Playfair_Display'] text-zinc-800 mb-3">
                Seasonal Wellness Retreats
              </h3>
              
              <p className="text-gray-700 font-['Lora'] mb-6">
                Immersive weekend experiences that align with nature's rhythms. Each season brings unique 
                opportunities for renewal, reflection, and rejuvenation through practices tailored to the 
                energetic qualities of the time.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#e3dac2]/50 rounded-full text-xs font-medium text-zinc-700">Mindset</span>
                <span className="px-3 py-1 bg-[#e3dac2]/50 rounded-full text-xs font-medium text-zinc-700">Movement</span>
                <span className="px-3 py-1 bg-[#e3dac2]/50 rounded-full text-xs font-medium text-zinc-700">Nutrition</span>
              </div>
              
              <Link href="/projects/seasonal-retreats" className="inline-block mt-2 text-[#CB8563] font-medium hover:text-[#b77857] transition-colors">
                Learn more &rarr;
              </Link>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="relative h-64">
              <Image
                src="/images/projects/meditation-program.jpg"
                alt="30-Day Mindfulness Program"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/0 to-black/60"></div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full">
                <span className="text-sm font-medium text-[#8B70AC]">Digital Program</span>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold font-['Playfair_Display'] text-zinc-800 mb-3">
                30-Day Mindfulness Program
              </h3>
              
              <p className="text-gray-700 font-['Lora'] mb-6">
                A comprehensive digital experience guiding participants through daily meditation, 
                journaling, and mindfulness exercises. Designed to establish lasting habits 
                that transform mental clarity and emotional balance.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#e3dac2]/50 rounded-full text-xs font-medium text-zinc-700">Mindset</span>
                <span className="px-3 py-1 bg-[#e3dac2]/50 rounded-full text-xs font-medium text-zinc-700">Stress Reduction</span>
              </div>
              
              <Link href="/projects/mindfulness-program" className="inline-block mt-2 text-[#8B70AC] font-medium hover:text-[#7a619a] transition-colors">
                Learn more &rarr;
              </Link>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="relative h-64">
              <Image
                src="/images/projects/wellness-kitchen.jpg"
                alt="Wellness Kitchen Workshops"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/0 to-black/60"></div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full">
                <span className="text-sm font-medium text-[#2C7E86]">Workshops</span>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold font-['Playfair_Display'] text-zinc-800 mb-3">
                Wellness Kitchen Workshops
              </h3>
              
              <p className="text-gray-700 font-['Lora'] mb-6">
                Hands-on culinary experiences that teach the art of preparing nourishing, 
                seasonal meals. Participants learn about food as medicine and how to incorporate 
                healing ingredients into everyday cooking.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#e3dac2]/50 rounded-full text-xs font-medium text-zinc-700">Nutrition</span>
                <span className="px-3 py-1 bg-[#e3dac2]/50 rounded-full text-xs font-medium text-zinc-700">Hands-on</span>
              </div>
              
              <Link href="/projects/wellness-kitchen" className="inline-block mt-2 text-[#2C7E86] font-medium hover:text-[#236b72] transition-colors">
                Learn more &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 md:mt-16 text-center">
          <Link href="/projects">
            <button className="px-8 py-3 bg-transparent border-2 border-[#CB8563] text-[#CB8563] rounded-lg shadow-md font-medium text-lg transition-all hover:bg-[#CB8563]/10">
              View All Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
} 