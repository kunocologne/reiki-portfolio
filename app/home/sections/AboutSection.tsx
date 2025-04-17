import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="w-full flex flex-col justify-start items-center gap-16 md:gap-20">
          {/* About Me Section */}
          <div className="w-full flex flex-col justify-start items-center gap-10 md:gap-16">
            {/* Section header */}
            <div className="flex flex-col justify-center items-center gap-5 md:gap-6">
              <div className="flex items-center justify-center gap-4">
                <div className="hidden sm:block w-12 md:w-24 h-0.5 opacity-70 bg-[#E3A76F]"></div>
                <h3 className="text-center text-[#333333] text-xs md:text-base font-medium font-['Work_Sans'] uppercase tracking-[3px] md:tracking-[5.60px]">About Me</h3>
                <div className="hidden sm:block w-12 md:w-24 h-0.5 opacity-70 bg-[#E3A76F]"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold font-['Playfair_Display'] text-[#1F2937] mb-6">Nathanael Mor</h2>
              <div className="w-16 md:w-24 h-1 bg-[#E3A76F] mx-auto mb-6"></div>
              <p className="text-center max-w-2xl text-[#4B5563] text-base md:text-lg font-['Lora']">Holistic Wellness & Healing Coach</p>
            </div>
            
            {/* Main content - Image and Bio */}
            <div className="w-full px-0 md:px-6 lg:px-10 py-6 md:py-10 flex flex-col lg:flex-row justify-between items-center gap-12 md:gap-16">
              {/* Profile Image */}
              <div className="w-full lg:w-[45%] flex justify-center lg:justify-start">
                <img 
                  src="/images/home/journey.jpg" 
                  alt="Nathanael Mor" 
                  className="w-full max-w-[500px] h-auto rounded-3xl object-cover shadow-lg" 
                />
              </div>
              
              <div className="w-full lg:w-[55%] flex flex-col justify-start items-start gap-7">
                <div className="flex items-center">
                  <div className="w-10 h-1 bg-[#E3A76F] mr-4"></div>
                  <h3 className="text-[#1F2937] text-2xl font-semibold font-['Playfair_Display'] leading-relaxed">My Healing Journey</h3>
                </div>
                
                <div className="text-[#4B5563] text-base md:text-lg font-normal font-['Lora'] leading-relaxed space-y-4">
                  <p>
                    My path began over three decades ago, shaped by a home where self-inquiry, energy work, and spiritual connection were part of everyday life. I received my first Reiki attunement at age eight and was practicing Qigong by nine—early initiations that gave me a deep sensitivity to energy and the unseen layers of healing.
                  </p>
                  <p>
                    Rather than growing out of that awareness, I grew into it. I continued learning from teachers across traditions, including a direct student of Hawayo Takata, and developed a way of seeing the world where healing isn't an event—it's a way of being.
                  </p>
                  <p>
                    Alongside this inner path, I was raised in the rhythm of my family's restaurant. Food became my second language—an intuitive practice of creativity, comfort, and connection. After high school, I bypassed the conventional route and opened a snack bar in Lisbon. That early venture showed me how food could shift energy, change moods, and invite people back into presence.
                  </p>
                  <p>
                    I later trained at Le Cordon Bleu in Paris, grounding my intuitive approach in classical technique. But it was when I returned home—where my family had adopted a gluten-free, vegan, sugar-free lifestyle—that everything clicked. Food wasn't just about flavor. It was medicine. A way to support the body's healing intelligence.
                  </p>
                  <p>
                    That insight led me deeper. I studied at the Hippocrates Health Institute, explored detox, raw nutrition, and cellular healing, and began growing wheatgrass and microgreens as a way to reconnect people with the source of their nourishment. Today, I hold space through retreats and workshops designed to help people return to alignment—physically, emotionally, and energetically. These experiences bring together healing food, nature, movement, journaling, and energetic practices to support real transformation.
                  </p>
                  <p>
                    My vision is to help create a new standard for wellbeing—one rooted in truth, vitality, and long-life potential. If you feel the call to live more fully, more freely, and more consciously, this work is for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Certifications Section */}
          <div className="w-full flex flex-col justify-start items-center gap-12 md:gap-16">
            <div className="flex items-center justify-center gap-4">
              <div className="hidden sm:block w-12 md:w-24 h-0.5 opacity-70 bg-[#E3A76F]"></div>
              <h3 className="text-center text-[#333333] text-xs md:text-base font-medium font-['Work_Sans'] uppercase tracking-[3px] md:tracking-[5.60px]">Trainings & certifications</h3>
              <div className="hidden sm:block w-12 md:w-24 h-0.5 opacity-70 bg-[#E3A76F]"></div>
            </div>
            
            <div className="w-full px-0 md:px-6 lg:px-10 py-6 md:py-10 flex flex-col lg:flex-row justify-between items-stretch gap-10 md:gap-12">
              {/* Certificates Image */}
              <div className="w-full lg:w-[45%] flex justify-center lg:justify-start items-center">
                <img 
                  src="/images/home/smile.png" 
                  alt="Nathanael Mor training certificates" 
                  className="w-full max-w-[500px] h-auto rounded-[20px] object-cover shadow-lg" 
                />
              </div>
              
              <div className="w-full lg:w-[55%] flex flex-col justify-between items-stretch gap-4 md:gap-6">
                {[
                  "Angel therapy practitioner",
                  "holistic coaching",
                  "meditation",
                  "nutritional therapy",
                  "SHAMANISM",
                  "TANTRA YOGA INSTRUCTOR"
                ].map((certification, index) => (
                  <div 
                    key={index}
                    className="w-full h-auto p-6 md:p-8 bg-gradient-to-r from-[#E3A76F] via-[#D08D9B] to-[#8B70AC] rounded-[20px] outline outline-1 outline-black/50 flex flex-col justify-center items-start shadow-md"
                  >
                    <div className="text-left text-white text-xl md:text-2xl lg:text-3xl font-medium font-['Work_Sans'] uppercase leading-tight tracking-[3px] md:tracking-[5.60px]">
                      {certification}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
