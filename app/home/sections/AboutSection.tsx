import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-white via-[#f9f6f3] to-white overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="w-full inline-flex flex-col justify-start items-center gap-10">
          {/* About Me Section */}
          <div className="self-stretch flex flex-col justify-start items-center gap-10">
            {/* Section header */}
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="self-stretch inline-flex justify-center items-center">
                <div className="w-24 h-0.5 opacity-70 bg-orange-300"></div>
                <div className="px-8 inline-flex flex-col justify-start items-start">
                  <div className="flex flex-col justify-start items-center">
                    <div className="text-center justify-center text-zinc-800 text-3xl font-medium font-['Work_Sans'] uppercase leading-10 tracking-[5.60px]">About Me</div>
                  </div>
                </div>
                <div className="w-24 h-0.5 opacity-70 bg-orange-300"></div>
              </div>
              <div className="self-stretch text-center justify-center text-gray-800 text-5xl md:text-7xl font-bold font-['Playfair_Display'] leading-tight md:leading-[72px]">Nathanael Mor</div>
              <div className="w-full max-w-[873px] mx-auto text-center justify-center text-[#4B5563] text-xl md:text-2xl font-semibold font-['Playfair_Display'] leading-loose [text-shadow:_0px_0px_1px_rgb(255_255_255_/_0.50)]">Holistic Wellness & Healing Coach</div>
            </div>
            
            {/* Main content - Image and Bio */}
            <div className="self-stretch px-4 md:px-10 lg:px-20 py-10 flex flex-col lg:flex-row justify-between items-center gap-10">
              <div className="w-full lg:w-auto max-w-[597px] flex justify-center">
                <Image
                  src="/images/home/portrait-full.jpg"
                  alt="Nathanael Mor"
                  width={597}
                  height={895}
                  className="w-full h-auto rounded-3xl object-cover"
                  priority
                />
              </div>
              
              <div className="w-full lg:w-[610px] inline-flex flex-col justify-start items-start gap-7">
                <div className="self-stretch inline-flex justify-start items-center">
                  <div className="w-14 h-1 pr-4 inline-flex flex-col justify-start items-start">
                    <div className="w-10 h-1 bg-orange-300"></div>
                  </div>
                  <div className="justify-center text-gray-800 text-2xl font-semibold font-['Playfair_Display'] leading-loose">My Healing Journey</div>
                </div>
                
                <div className="self-stretch justify-center text-gray-600 text-base font-normal font-['Lora'] leading-normal">
                  My path began over three decades ago, shaped by a home where self-inquiry, energy work, and spiritual connection were part of everyday life. I received my first Reiki attunement at age eight and was practicing Qigong by nine—early initiations that gave me a deep sensitivity to energy and the unseen layers of healing.
                  <br/><br/>
                  Rather than growing out of that awareness, I grew into it. I continued learning from teachers across traditions, including a direct student of Hawayo Takata, and developed a way of seeing the world where healing isn't an event—it's a way of being.
                  <br/><br/>
                  Alongside this inner path, I was raised in the rhythm of my family's restaurant. Food became my second language—an intuitive practice of creativity, comfort, and connection. After high school, I bypassed the conventional route and opened a snack bar in Lisbon. That early venture showed me how food could shift energy, change moods, and invite people back into presence.
                  <br/><br/>
                  I later trained at Le Cordon Bleu in Paris, grounding my intuitive approach in classical technique. But it was when I returned home—where my family had adopted a gluten-free, vegan, sugar-free lifestyle—that everything clicked. Food wasn't just about flavor. It was medicine. A way to support the body's healing intelligence.
                  <br/><br/>
                  That insight led me deeper. I studied at the Hippocrates Health Institute, explored detox, raw nutrition, and cellular healing, and began growing wheatgrass and microgreens as a way to reconnect people with the source of their nourishment. Today, I hold space through retreats and workshops designed to help people return to alignment—physically, emotionally, and energetically. These experiences bring together healing food, nature, movement, journaling, and energetic practices to support real transformation.
                  <br/><br/>
                  My vision is to help create a new standard for wellbeing—one rooted in truth, vitality, and long-life potential. If you feel the call to live more fully, more freely, and more consciously, this work is for you.
                </div>
              </div>
            </div>
          </div>
          
          {/* Certifications Section */}
          <div className="w-full max-w-[1295px] flex flex-col justify-start items-start gap-20 mt-10">
            <div className="self-stretch inline-flex justify-center items-center">
              <div className="w-24 h-0.5 opacity-70 bg-orange-300"></div>
              <div className="px-8 inline-flex flex-col justify-start items-start">
                <div className="flex flex-col justify-start items-center">
                  <div className="text-center justify-center text-zinc-800 text-3xl font-medium font-['Work_Sans'] uppercase leading-10 tracking-[5.60px]">Trainings & certifications</div>
                </div>
              </div>
              <div className="w-24 h-0.5 opacity-70 bg-orange-300"></div>
            </div>
            
            <div className="self-stretch px-4 lg:px-20 py-10 flex flex-col lg:flex-row justify-between items-start gap-10">
              <div className="w-full lg:w-[595px] flex justify-center lg:justify-start">
                <Image
                  src="/images/home/certifications.jpg"
                  alt="Nathanael Mor training certificates"
                  width={595}
                  height={542}
                  className="w-full h-auto rounded-[20px] object-cover"
                />
              </div>
              
              <div className="w-full lg:w-[660px] inline-flex flex-col justify-start items-start gap-6">
                <div className="self-stretch h-auto p-6 md:p-10 bg-gradient-to-bl from-orange-300 to-neutral-400 rounded-[20px] outline outline-1 outline-black/50 flex flex-col justify-center items-start">
                  <div className="md:text-left text-black text-2xl md:text-3xl font-medium font-['Work_Sans'] uppercase leading-10 tracking-[5.60px]">Angel therapy practitioner</div>
                </div>
                
                <div className="self-stretch h-auto p-6 md:p-10 bg-gradient-to-bl from-orange-300 to-neutral-400 rounded-[20px] outline outline-1 outline-black/50 flex flex-col justify-center items-start">
                  <div className="md:text-left text-zinc-800 text-2xl md:text-3xl font-medium font-['Work_Sans'] uppercase leading-10 tracking-[5.60px]">holistic coaching</div>
                </div>
                
                <div className="self-stretch h-auto p-6 md:p-10 bg-gradient-to-bl from-orange-300 to-neutral-400 rounded-[20px] outline outline-1 outline-black/50 flex flex-col justify-center items-start">
                  <div className="md:text-left text-zinc-800 text-2xl md:text-3xl font-medium font-['Work_Sans'] uppercase leading-10 tracking-[5.60px]">meditation</div>
                </div>
                
                <div className="self-stretch h-auto p-6 md:p-10 bg-gradient-to-bl from-orange-300 to-neutral-400 rounded-[20px] outline outline-1 outline-black/50 flex flex-col justify-center items-start">
                  <div className="md:text-left text-zinc-800 text-2xl md:text-3xl font-medium font-['Work_Sans'] uppercase leading-10 tracking-[5.60px]">nutritional therapy</div>
                </div>
                
                <div className="self-stretch h-auto p-6 md:p-10 bg-gradient-to-bl from-orange-300 to-neutral-400 rounded-[20px] outline outline-1 outline-black/50 flex flex-col justify-center items-start">
                  <div className="md:text-left text-zinc-800 text-2xl md:text-3xl font-medium font-['Work_Sans'] uppercase leading-10 tracking-[5.60px]">SHAMANISM</div>
                </div>
                
                <div className="self-stretch h-auto p-6 md:p-10 bg-gradient-to-bl from-orange-300 to-neutral-400 rounded-[20px] outline outline-1 outline-black/50 flex flex-col justify-center items-start">
                  <div className="md:text-left text-zinc-800 text-2xl md:text-3xl font-medium font-['Work_Sans'] uppercase leading-10 tracking-[5.60px]">TANTRA YOGA INSTRUCTOR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
