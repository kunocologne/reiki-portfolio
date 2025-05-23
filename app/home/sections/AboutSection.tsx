import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="w-full flex flex-col justify-start items-center gap-12 sm:gap-16 md:gap-20">
          {/* About Me Section */}
          <div className="w-full flex flex-col justify-start items-center gap-8 sm:gap-10 md:gap-16">
            {/* Section header */}
            <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6">
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div className="hidden sm:block w-8 md:w-12 lg:w-24 h-0.5 opacity-70 bg-[#E3A76F]"></div>
                <h3 className="text-center text-[#333333] text-xs md:text-base font-medium font-['Work_Sans'] uppercase tracking-[2px] sm:tracking-[3px] md:tracking-[5.60px]">About Me</h3>
                <div className="hidden sm:block w-8 md:w-12 lg:w-24 h-0.5 opacity-70 bg-[#E3A76F]"></div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold font-['Playfair_Display'] text-[#1F2937] mb-4 sm:mb-6">Nathanael Mor</h2>
              <div className="w-12 sm:w-16 md:w-24 h-1 bg-[#E3A76F] mx-auto mb-4 sm:mb-6"></div>
              <p className="text-center max-w-2xl text-[#4B5563] text-sm sm:text-base md:text-lg font-['Lora']">Holistic Wellness & Healing Coach</p>
            </div>
            
            {/* Main content - Image and Bio */}
            <div className="w-full py-4 sm:py-6 md:py-10 flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-10 md:gap-16">
              {/* Profile Image */}
              <div className="w-full lg:w-[45%] flex justify-center lg:justify-start px-4 sm:px-6 lg:px-0">
                <img 
                  src="/images/home/journey.jpg" 
                  alt="Nathanael Mor" 
                  className="w-full max-w-[500px] h-auto rounded-2xl sm:rounded-3xl object-cover shadow-lg" 
                />
              </div>
              
              <div className="w-full lg:w-[55%] flex flex-col justify-start items-start gap-5 sm:gap-7 px-4 sm:px-6 lg:px-0">
                <div className="flex items-center">
                  <div className="w-8 sm:w-10 h-1 bg-[#E3A76F] mr-3 sm:mr-4"></div>
                  <h3 className="text-[#1F2937] text-xl sm:text-2xl font-semibold font-['Playfair_Display'] leading-relaxed">My Healing Journey</h3>
                </div>
                
                <div className="text-[#4B5563] text-sm sm:text-base md:text-lg font-normal font-['Lora'] leading-relaxed space-y-3 sm:space-y-4">
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
          <div className="w-full flex flex-col justify-start items-center gap-8 sm:gap-10 md:gap-16">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="hidden sm:block w-8 md:w-12 lg:w-24 h-0.5 opacity-70 bg-[#E3A76F]"></div>
              <h3 className="text-center text-[#333333] text-xs md:text-base font-medium font-['Work_Sans'] uppercase tracking-[2px] sm:tracking-[3px] md:tracking-[5.60px]">Trainings & certifications</h3>
              <div className="hidden sm:block w-8 md:w-12 lg:w-24 h-0.5 opacity-70 bg-[#E3A76F]"></div>
            </div>
            
            <div className="w-full px-3 sm:px-6 md:px-12 lg:px-20 py-4 sm:py-6 md:py-10">
              <div className="flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-8 sm:gap-10 md:gap-12">
                {/* Certificates Image */}
                <div className="w-full lg:w-[46%] rounded-2xl sm:rounded-[20px] shadow-lg flex items-center justify-center bg-[#f8f5f0] overflow-hidden py-6 sm:py-8">
                  <img 
                    src="/images/home/smile.png" 
                    alt="Nathanael Mor" 
                    className="w-full h-auto object-contain scale-105 sm:scale-110"
                  />
                </div>
                
                {/* Certification Pills */}
                <div className="w-full lg:w-[46%] flex flex-col justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 py-2 sm:py-4">
                  {[
                    "Angel therapy practitioner",
                    "holistic coaching",
                    "meditation",
                    "nutritional therapy",
                    "shamanism",
                    "tantra yoga instructor"
                  ].map((certification, index) => (
                    <div 
                      key={index}
                      className="w-full max-w-[500px] h-[50px] sm:h-[60px] md:h-[70px] rounded-full shadow-md bg-gradient-to-r from-[#c5d7b9] to-[#e3c5a0] flex items-center justify-center lg:ml-auto"
                    >
                      <span className="text-white text-sm sm:text-base md:text-lg font-medium font-['Work_Sans'] uppercase tracking-[1px] sm:tracking-[2px] md:tracking-[3px] text-center px-4 sm:px-6">
                        {certification}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
