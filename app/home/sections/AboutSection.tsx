import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-white via-[#f9f6f3] to-white overflow-x-hidden">
      <div className="container mx-auto px-6 flex flex-col justify-between items-center">
        {/* Section header */}
        <div className="flex flex-col justify-center items-center gap-7 mb-20">
          <div className="inline-flex justify-center items-center">
            <div className="w-24 h-0.5 opacity-70 bg-orange-300"></div>
            <div className="px-8">
              <div className="text-center text-zinc-800 text-3xl font-medium font-['Work_Sans'] uppercase leading-10 tracking-[5.60px]">About Me</div>
            </div>
            <div className="w-24 h-0.5 opacity-70 bg-orange-300"></div>
          </div>
          <div className="text-center text-gray-800 text-7xl font-bold font-['Playfair_Display'] leading-[72px]">Nathanael Mor</div>
          <div className="text-center text-orange-300 text-2xl font-normal font-['Playfair_Display'] leading-loose [text-shadow:_0px_0px_1px_rgb(255_255_255_/_0.50)]">
            Reiki Master, Nutritional Therapist, and Holistic Wellness<br/>Guide
          </div>
        </div>

        {/* Main content - Image and Bio */}
        <div className="w-full inline-flex justify-between items-center flex-col lg:flex-row gap-16 lg:gap-0 mb-20">
          <div className="relative max-w-[595px]">
            <Image
              src="/images/home/portrait.jpg"
              alt="Nathanael Mor"
              width={595}
              height={542}
              className="rounded-[20px] object-cover"
              priority
            />
          </div>
          
          <div className="w-full lg:w-[512px] inline-flex flex-col justify-start items-start gap-8">
            <div className="inline-flex justify-start items-center">
              <div className="w-14 h-1 pr-4">
                <div className="w-10 h-1 bg-orange-300"></div>
              </div>
              <div className="text-gray-800 text-2xl font-semibold font-['Playfair_Display'] leading-loose">My Healing Journey</div>
            </div>
            
            <div className="relative">
              <div className="inline-flex flex-col justify-start items-start mb-6">
                <div className="text-orange-300 text-xl font-normal font-['Playfair_Display'] leading-normal [text-shadow:_0px_0px_1px_rgb(255_255_255_/_0.50)]">
                  With over 15 years of dedicated practice in holistic<br/>
                  healing, I've guided hundreds of individuals toward<br/>
                  wellness through an integrated mind-body-spirit<br/>
                  approach.
                </div>
              </div>
              
              <div className="inline-flex flex-col justify-start items-start mb-6">
                <div className="text-gray-600 text-base font-normal font-['Lora'] leading-normal">
                  My own path to healing began at an early age when I discovered the<br/>
                  profound connection between mind, body, and spirit. After<br/>
                  experiencing significant health challenges in my youth, I found that<br/>
                  conventional approaches only addressed symptoms, not root causes.
                </div>
              </div>
              
              <div className="inline-flex flex-col justify-start items-start mb-6">
                <div className="text-gray-600 text-base font-normal font-['Lora'] leading-normal">
                  This realization led me on a journey across cultures and healing<br/>
                  traditions, studying with mentors from around the world. I was<br/>
                  fortunate to learn Reiki directly from a student of Hawayo Takata,<br/>
                  who brought this healing practice to the Western world.
                </div>
              </div>
              
              <div className="pl-7 pr-4 py-2 rounded-tr rounded-br border-l-4 border-neutral-200">
                <div className="text-gray-600 text-base font-normal font-['Work_Sans'] leading-normal">
                  "I believe that each of us carries a divine spark—a unique<br/>
                  gift and role in this world. My mission is to help you<br/>
                  awaken your full potential and find harmony in all aspects<br/>
                  of your being."
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="w-full flex flex-col justify-start items-center gap-10">
          <div className="inline-flex justify-center items-center">
            <div className="w-24 h-0.5 opacity-70 bg-orange-300"></div>
            <div className="px-8">
              <div className="text-center text-zinc-800 text-3xl font-medium font-['Work_Sans'] uppercase leading-10 tracking-[5.60px]">Trainings & certifications</div>
            </div>
            <div className="w-24 h-0.5 opacity-70 bg-orange-300"></div>
          </div>
          
          {/* First certification row */}
          <div className="w-full p-10 bg-gradient-to-bl from-orange-300 to-neutral-400 rounded-[20px] outline outline-[3px] outline-black flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-14">
            <div className="flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-14">
              <div className="flex justify-start items-start">
                <div className="pr-4">
                  <div className="text-white text-3xl font-thin font-['Hiragino_Sans'] leading-10">⬦</div>
                </div>
                <div className="flex flex-col justify-start items-start gap-1.5">
                  <div className="text-white text-2xl font-medium font-['Playfair_Display'] leading-9">Holistic Coaching</div>
                  <div className="text-white text-xl font-normal font-['Lora'] leading-loose">12+ years</div>
                </div>
              </div>
              
              <div className="flex justify-start items-start">
                <div className="pr-4">
                  <div className="text-white text-3xl font-normal font-['Zapf_Dingbats'] leading-10">✦</div>
                </div>
                <div className="flex flex-col justify-start items-start gap-1.5">
                  <div className="text-white text-2xl font-medium font-['Playfair_Display'] leading-9">Nutritional Therapy</div>
                  <div className="text-white text-xl font-normal font-['Lora'] leading-loose">12+ years</div>
                </div>
              </div>
              
              <div className="flex justify-start items-start">
                <div className="pr-4">
                  <div className="text-white text-3xl font-medium font-['Lucida_Grande'] leading-10">○</div>
                </div>
                <div className="flex flex-col justify-start items-start gap-1.5">
                  <div className="text-white text-2xl font-medium font-['Playfair_Display'] leading-9">Meditation</div>
                  <div className="text-white text-xl font-normal font-['Lora'] leading-loose">15+ years</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Second certification row */}
          <div className="w-full p-10 bg-gradient-to-tr from-orange-300 to-neutral-400 rounded-[20px] outline outline-[3px] outline-black flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-14 mb-10">
            <div className="flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-14">
              <div className="flex justify-center items-center">
                <div className="pr-4">
                  <div className="text-white text-3xl font-normal font-['Apple_Symbols'] leading-10">⬡</div>
                </div>
                <div className="flex flex-col justify-start items-start gap-1.5">
                  <div className="text-white text-2xl font-medium font-['Playfair_Display'] leading-9">Space Clearing</div>
                  <div className="text-white text-xl font-normal font-['Lora'] leading-loose">8+ years</div>
                </div>
              </div>
              
              <div className="flex justify-center items-center">
                <div className="pr-4">
                  <div className="text-white text-3xl font-thin font-['Hiragino_Sans'] leading-10">♢</div>
                </div>
                <div className="flex flex-col justify-start items-start gap-1.5">
                  <div className="text-white text-2xl font-medium font-['Playfair_Display'] leading-9">Breathwork</div>
                  <div className="text-white text-xl font-normal font-['Lora'] leading-loose">10+ years</div>
                </div>
              </div>
              
              <div className="flex justify-center items-center">
                <div className="pr-4">
                  <div className="text-white text-3xl font-normal font-['Zapf_Dingbats'] leading-10">✧</div>
                </div>
                <div className="flex flex-col justify-start items-start gap-1.5">
                  <div className="text-white text-2xl font-medium font-['Playfair_Display'] leading-9">Reiki Master</div>
                  <div className="text-white text-xl font-normal font-['Lora'] leading-loose">15+ years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
