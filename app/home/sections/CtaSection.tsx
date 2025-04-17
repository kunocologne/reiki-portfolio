import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")` 
        }}
      ></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold mb-6">
            Begin Your Transformation Today
          </h2>
          
          <div className="w-16 md:w-24 h-1 bg-[#CB8563] mx-auto mb-6"></div>
          
          <p className="text-lg md:text-xl font-['Lora'] mb-8 text-[#555555]">
            Your journey to harmony through the three pillars starts with a single step
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="prose prose-lg max-w-none font-['Lora'] space-y-6 mb-8 text-center">
            <p>
              I offer personalized consultations to understand your unique needs and create a 
              tailored approach that balances all three pillars of wellness—<span className="text-[#CB8563] font-medium">Nutrition</span>, 
              <span className="text-[#2C7E86] font-medium"> Movement</span>, and 
              <span className="text-[#8B70AC] font-medium"> Mindset</span>—to support your holistic transformation.
            </p>
            <p>
              Whether you're seeking to optimize your nutrition, develop a sustainable
              movement practice, or cultivate a more aligned mindset, I'm here to guide
              you every step of the way.
            </p>
          </div>
          
          <div className="flex justify-center items-center mt-8">
            <Link href="/contact#message" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-3 bg-[#CB8563] rounded-lg shadow-lg flex justify-center items-center gap-2 text-white text-lg font-medium transition-all hover:bg-[#b77857]">
                <MessageCircle className="w-5 h-5" />
                Send a Message
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
