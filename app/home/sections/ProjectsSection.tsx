import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-white" id="projects">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col justify-center items-center gap-7 mb-20">
          <div className="inline-flex justify-center items-center w-full">
            <div className="w-24 h-0.5 opacity-70 bg-orange-300"></div>
            <div className="px-8">
              <h3 className="text-center text-zinc-800 text-3xl font-medium font-['Work_Sans'] uppercase leading-10 tracking-[5.60px]">
                our projects
              </h3>
            </div>
            <div className="w-24 h-0.5 opacity-70 bg-orange-300"></div>
          </div>
          
          <h2 className="text-center text-gray-800 text-5xl md:text-7xl font-bold font-['Playfair_Display'] leading-tight md:leading-[72px]">
            Healing, Sacred House & Food
          </h2>
          
          <p className="text-center text-orange-300 text-xl md:text-2xl font-normal font-['Playfair_Display'] leading-loose [text-shadow:_0px_0px_1px_rgb(255_255_255_/_0.50)]">
            Discover how I apply the three pillars of wellness through these specialized offerings, each<br/>
            designed to nurture a different aspect of your wellbeing journey.
          </p>
        </div>

        {/* Pillars Connection Diagram */}
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-md outline outline-1 outline-black mb-20">
          <h3 className="text-center text-zinc-800 text-2xl font-bold font-['Playfair_Display'] leading-loose mb-4">
            How My Projects Connect to the Three Pillars
          </h3>
          
          <p className="text-center text-zinc-800 text-base font-normal font-['Lora'] leading-normal mb-8">
            Each of my projects and services is directly connected to one of the three pillars of wellness, creating a<br/>
            comprehensive approach that addresses all aspects of wellbeing.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-start gap-6">
            {/* Mind/Mindset Column */}
            <div className="w-full md:w-64 relative flex flex-col items-center">
              <div className="w-12 h-12 bg-[#8B70AC] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-normal leading-7">✧</span>
              </div>
              <h4 className="text-[#8B70AC] text-base font-bold font-['Playfair_Display'] leading-normal mb-2">
                Mind
              </h4>
              <p className="text-center text-zinc-800 text-sm font-normal font-['Lora'] leading-tight mb-6">
                Focuses on spiritual alignment and<br/>mental wellbeing
              </p>
              <div className="w-0.5 h-8 bg-[#8B70AC] mb-4"></div>
              <h5 className="text-[#8B70AC] text-base font-bold font-['Playfair_Display'] leading-normal">
                Healing Services
              </h5>
            </div>
            
            {/* Movement Column */}
            <div className="w-full md:w-64 relative flex flex-col items-center">
              <div className="w-12 h-12 bg-[#2C7E86] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-normal leading-7">⟳</span>
              </div>
              <h4 className="text-[#2C7E86] text-base font-bold font-['Playfair_Display'] leading-normal mb-2">
                Movement
              </h4>
              <p className="text-center text-zinc-800 text-sm font-normal font-['Lora'] leading-tight mb-6">
                Emphasizes physical maintenance<br/>and energy flow
              </p>
              <div className="w-0.5 h-8 bg-[#2C7E86] mb-4"></div>
              <h5 className="text-[#2C7E86] text-base font-bold font-['Playfair_Display'] leading-normal">
                Sacred House
              </h5>
            </div>
            
            {/* Nutrition Column */}
            <div className="w-full md:w-64 relative flex flex-col items-center">
              <div className="w-12 h-12 bg-[#CB8563] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-normal leading-7">🌱</span>
              </div>
              <h4 className="text-[#CB8563] text-base font-bold font-['Playfair_Display'] leading-normal mb-2">
                Nutrition
              </h4>
              <p className="text-center text-zinc-800 text-sm font-normal font-['Lora'] leading-tight mb-6">
                Recognizes food as fundamental to<br/>wellbeing
              </p>
              <div className="w-0.5 h-8 bg-[#CB8563] mb-4"></div>
              <h5 className="text-[#CB8563] text-base font-bold font-['Playfair_Display'] leading-normal">
                Sacred Kitchen
              </h5>
            </div>
          </div>
        </div>

        {/* Project Cards */}
        <div className="space-y-16">
          {/* Healing Card */}
          <div className="bg-white rounded-xl shadow-md outline outline-1 outline-black overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <div className="relative w-full h-[300px] md:h-full">
                <Image
                  src="/images/home/healing.jpg"
                  alt="Healing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/0"></div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <div className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B70AC] rounded-full flex justify-center items-center">
                    <span className="text-white text-xl">✧</span>
                  </div>
                  <span className="text-[#8B70AC] text-sm font-medium font-['Work_Sans'] leading-tight">Mindset</span>
                </div>
                <h3 className="text-zinc-800 text-2xl font-bold font-['Playfair_Display'] leading-loose">Healing</h3>
                <p className="text-gray-600 text-sm font-normal font-['Lora'] leading-tight">Connected to Mind</p>
              </div>
              
              <div className="pt-6">
                <div className="w-12 h-1 bg-[#8B70AC] mb-6"></div>
                <p className="text-gray-700 text-base font-normal font-['Lora'] leading-normal mb-8">
                  Holistic healing services focusing on energy work, spiritual alignment, and
                  mental well-being. Through Reiki and other healing modalities, I help restore
                  balance and harmony to your mind, body, and spirit.
                </p>
                
                <div className="mb-8">
                  <p className="text-zinc-800 text-sm font-normal font-['Work_Sans'] leading-tight mb-8">
                    The mind pillar focuses on spiritual alignment and mental
                    wellbeing. My Healing services directly apply these principles
                    through energy work and mindfulness practices that nurture your
                    psychological and spiritual health.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="w-2 h-2 mt-1.5 mr-3 bg-[#8B70AC] rounded-full"></div>
                      <span className="text-gray-700 text-sm font-normal font-['Lora'] leading-tight">Reiki healing sessions</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 mt-1.5 mr-3 bg-[#8B70AC] rounded-full"></div>
                      <span className="text-gray-700 text-sm font-normal font-['Lora'] leading-tight">Energy clearing & balancing</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 mt-1.5 mr-3 bg-[#8B70AC] rounded-full"></div>
                      <span className="text-gray-700 text-sm font-normal font-['Lora'] leading-tight">Intuitive guidance</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 mt-1.5 mr-3 bg-[#8B70AC] rounded-full"></div>
                      <span className="text-gray-700 text-sm font-normal font-['Lora'] leading-tight">Mindfulness practices</span>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/healing" 
                  className="inline-flex items-center px-4 py-2 border border-[#8B70AC] rounded-md text-[#8B70AC] text-sm font-medium font-['Work_Sans']"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Sacred House Card */}
          <div className="bg-white rounded-xl shadow-md outline outline-1 outline-black overflow-hidden flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative">
              <div className="relative w-full h-[300px] md:h-full">
                <Image
                  src="/images/home/sacred-house.jpg"
                  alt="Sacred House"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/0"></div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <div className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#2C7E86] rounded-full flex justify-center items-center">
                    <span className="text-white text-xl">⟳</span>
                  </div>
                  <span className="text-[#2C7E86] text-sm font-medium font-['Work_Sans'] leading-tight">Movement</span>
                </div>
                <h3 className="text-zinc-800 text-2xl font-bold font-['Playfair_Display'] leading-loose">Sacred House</h3>
                <p className="text-gray-600 text-sm font-normal font-['Lora'] leading-tight">Connected to Movement</p>
              </div>
              
              <div className="pt-6">
                <div className="w-12 h-1 bg-[#2C7E86] mb-6"></div>
                <p className="text-gray-700 text-base font-normal font-['Lora'] leading-normal mb-8">
                  A sanctuary for movement, connection, and community. Through retreats
                  and events featuring yoga, meditation, and mindful movement, Sacred House
                  creates spaces for transformation and growth.
                </p>
                
                <div className="mb-8">
                  <p className="text-zinc-800 text-sm font-normal font-['Work_Sans'] leading-tight mb-8">
                    The movement pillar emphasizes physical maintenance and energy
                    flow. Sacred House brings this pillar to life through communal
                    spaces dedicated to yoga, intentional movement, and activities
                    that strengthen the body-mind connection.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="w-2 h-2 mt-1.5 mr-3 bg-[#2C7E86] rounded-full"></div>
                      <span className="text-gray-700 text-sm font-normal font-['Lora'] leading-tight">Yoga and movement retreats</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 mt-1.5 mr-3 bg-[#2C7E86] rounded-full"></div>
                      <span className="text-gray-700 text-sm font-normal font-['Lora'] leading-tight">Community wellness events</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 mt-1.5 mr-3 bg-[#2C7E86] rounded-full"></div>
                      <span className="text-gray-700 text-sm font-normal font-['Lora'] leading-tight">Sacred movement practices</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 mt-1.5 mr-3 bg-[#2C7E86] rounded-full"></div>
                      <span className="text-gray-700 text-sm font-normal font-['Lora'] leading-tight">Nature connection experiences</span>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/sacred-house" 
                  className="inline-flex items-center px-4 py-2 border border-[#2C7E86] rounded-md text-[#2C7E86] text-sm font-medium font-['Work_Sans']"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Sacred Kitchen Card */}
          <div className="bg-white rounded-xl shadow-md outline outline-1 outline-black overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <div className="relative w-full h-[300px] md:h-full">
                <Image
                  src="/images/home/sacred-kitchen.jpg"
                  alt="Sacred Kitchen"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/0"></div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <div className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#CB8563] rounded-full flex justify-center items-center">
                    <span className="text-white text-xl">🌱</span>
                  </div>
                  <span className="text-[#CB8563] text-sm font-medium font-['Work_Sans'] leading-tight">Nutrition</span>
                </div>
                <h3 className="text-zinc-800 text-2xl font-bold font-['Playfair_Display'] leading-loose">Sacred Kitchen</h3>
                <p className="text-gray-600 text-sm font-normal font-['Lora'] leading-tight">Connected to Nutrition</p>
              </div>
              
              <div className="pt-6">
                <div className="w-12 h-1 bg-[#CB8563] mb-6"></div>
                <p className="text-gray-700 text-base font-normal font-['Lora'] leading-normal mb-8">
                  Holistic food experiences and nutritional wisdom from a chef's perspective.
                  From microgreens to full culinary experiences, I share how nutrition can be
                  both healing and delightful.
                </p>
                
                <div className="mb-8">
                  <p className="text-zinc-800 text-sm font-normal font-['Work_Sans'] leading-tight mb-8">
                    The nutrition pillar recognizes food as fundamental to wellbeing.
                    Sacred Kitchen embodies this pillar by providing nourishing
                    culinary experiences, growing practices, and education about how
                    food can serve as medicine for the body.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="w-2 h-2 mt-1.5 mr-3 bg-[#CB8563] rounded-full"></div>
                      <span className="text-gray-700 text-sm font-normal font-['Lora'] leading-tight">Holistic nutrition guidance</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 mt-1.5 mr-3 bg-[#CB8563] rounded-full"></div>
                      <span className="text-gray-700 text-sm font-normal font-['Lora'] leading-tight">Microgreens and organic growing</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 mt-1.5 mr-3 bg-[#CB8563] rounded-full"></div>
                      <span className="text-gray-700 text-sm font-normal font-['Lora'] leading-tight">Chef-created healing recipes</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 mt-1.5 mr-3 bg-[#CB8563] rounded-full"></div>
                      <span className="text-gray-700 text-sm font-normal font-['Lora'] leading-tight">Food as medicine workshops</span>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/sacred-kitchen" 
                  className="inline-flex items-center px-4 py-2 border border-[#CB8563] rounded-md text-[#CB8563] text-sm font-medium font-['Work_Sans']"
                >
                  Learn More
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