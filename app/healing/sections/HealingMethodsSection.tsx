"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface MethodDetailsProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function MethodDetails({ title, isOpen, onClick, children }: MethodDetailsProps) {
  return (
    <div className="mt-4">
      <button 
        onClick={onClick}
        className="flex items-center text-sm font-medium"
        style={{ color: "#BFA8D9" }}
      >
        {isOpen ? "Less details" : "More details"}
        <svg 
          className={`ml-1 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      {isOpen && (
        <div className="mt-3 text-gray-600 text-sm transition-opacity duration-300 opacity-100">
          {children}
        </div>
      )}
    </div>
  );
}

export default function HealingMethodsSection() {
  const [openMethod, setOpenMethod] = useState<string | null>(null);
  
  const toggleMethod = (method: string) => {
    if (openMethod === method) {
      setOpenMethod(null);
    } else {
      setOpenMethod(method);
    }
  };

  return (
    <section className="py-16 bg-gray-50" id="healing-methods">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Healing Methods</h2>
          <p className="text-xl font-accent mb-2 max-w-3xl mx-auto">
            Discover various modalities to support your unique journey toward balance and well-being
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Reiki Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/healing/reiki.jpg"
                alt="Reiki Healing"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-serif text-2xl font-bold">Reiki</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-xl mb-3">Universal Energy Healing</h4>
              <p className="text-foreground/70 font-body mb-4">
                A gentle, hands-on practice that clears energy blockages and promotes deep relaxation.
              </p>
              
              <div className="mb-4 py-2 px-3 bg-purple-50 rounded-lg">
                <span className="font-medium">Best for:</span> Stress relief, emotional healing, restoring inner peace.
              </div>
              
              <MethodDetails 
                title="Reiki" 
                isOpen={openMethod === 'reiki'} 
                onClick={() => toggleMethod('reiki')}
              >
                <p className="mb-2">
                  During a Reiki session, you'll lie fully clothed on a massage table while I gently place my hands
                  on or slightly above different areas of your body, allowing universal life energy to flow through.
                </p>
                <p>
                  Many clients report feelings of warmth, tingling, or deep relaxation as energy blockages are released
                  and your body's natural healing abilities are activated.
                </p>
              </MethodDetails>
              
              <Link 
                href="/contact" 
                className="mt-4 inline-block px-6 py-3 rounded-lg font-medium text-white transition-colors"
                style={{ backgroundColor: "#BFA8D9" }}
              >
                Experience Reiki
              </Link>
            </div>
          </div>

          {/* Tantra Energy Work Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/healing/tantra.jpg"
                alt="Tantra Energy Work"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-serif text-2xl font-bold">Tantra Energy Work</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-xl mb-3">Sacred Energy Activation</h4>
              <p className="text-foreground/70 font-body mb-4">
                A combination of breath, movement, and energy activation to clear emotional blockages and awaken deeper self-connection.
              </p>
              
              <div className="mb-4 py-2 px-3 bg-purple-50 rounded-lg">
                <span className="font-medium">Best for:</span> Emotional release, reconnecting with your inner self, spiritual awakening.
              </div>
              
              <MethodDetails 
                title="Tantra" 
                isOpen={openMethod === 'tantra'} 
                onClick={() => toggleMethod('tantra')}
              >
                <p className="mb-2">
                  These sessions blend ancient tantric practices with modern energy work to help you release emotional
                  blockages stored in the body and connect more deeply with your authentic self.
                </p>
                <p>
                  Through guided breathwork, gentle movement, and energy activation techniques, you'll experience
                  a profound journey of self-discovery and emotional liberation.
                </p>
              </MethodDetails>
              
              <Link 
                href="/contact" 
                className="mt-4 inline-block px-6 py-3 rounded-lg font-medium text-white transition-colors"
                style={{ backgroundColor: "#BFA8D9" }}
              >
                Book a Tantra Session
              </Link>
            </div>
          </div>

          {/* Breathwork & Essential Oils Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/healing/breathwork.jpg"
                alt="Breathwork & Essential Oils"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-serif text-2xl font-bold">Breathwork & Essential Oils</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-xl mb-3">Aromatic Breath Healing</h4>
              <p className="text-foreground/70 font-body mb-4">
                Combining deep breathwork with plant-based essential oils to open energy pathways and promote emotional clarity.
              </p>
              
              <div className="mb-4 py-2 px-3 bg-purple-50 rounded-lg">
                <span className="font-medium">Best for:</span> Grounding, anxiety relief, emotional detox.
              </div>
              
              <MethodDetails 
                title="Breathwork" 
                isOpen={openMethod === 'breathwork'} 
                onClick={() => toggleMethod('breathwork')}
              >
                <p className="mb-2">
                  Through guided conscious breathing techniques combined with carefully selected therapeutic-grade
                  essential oils, you'll experience a powerful method for clearing stagnant energy and emotions.
                </p>
                <p>
                  This practice helps to oxygenate the body, calm the nervous system, and create space for
                  emotional processing and release in a safe, supported environment.
                </p>
              </MethodDetails>
              
              <Link 
                href="/contact" 
                className="mt-4 inline-block px-6 py-3 rounded-lg font-medium text-white transition-colors"
                style={{ backgroundColor: "#BFA8D9" }}
              >
                Try Breathwork
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
