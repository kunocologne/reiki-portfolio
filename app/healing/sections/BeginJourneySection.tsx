"use client"
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BeginJourneySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-mindset-primary/5" id="healing-journey">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="w-10 h-10 rounded-full bg-mindset-primary flex items-center justify-center text-white text-xl mx-auto mb-4">
              ✧
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Your Healing Journey
          </h2>
          <div className="h-1 w-24 bg-mindset-primary/50 mx-auto mb-6"></div>
          <p className="text-xl font-body mb-2 max-w-2xl mx-auto">
            Embarking on a healing path is a sacred commitment to yourself.
          </p>
          <p className="text-lg font-body max-w-2xl mx-auto text-gray-600">
            The journey begins with awareness and intention, and unfolds through a process of 
            gentle transformation guided by the principles of the mind pillar.
          </p>
        </div>
        
        {/* Journey Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-mindset-primary/30 -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="bg-white p-6 rounded-xl shadow-md relative z-10">
              <div className="w-14 h-14 rounded-full bg-mindset-primary flex items-center justify-center mx-auto mb-4 text-white border-4 border-white">
                <span className="font-bold text-xl">1</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-3 text-center">Initial Consultation</h3>
              <p className="text-gray-600 text-center">
                We begin with a conversation about your needs, goals, and any areas of concern to create a personalized approach.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md relative z-10">
              <div className="w-14 h-14 rounded-full bg-mindset-primary flex items-center justify-center mx-auto mb-4 text-white border-4 border-white">
                <span className="font-bold text-xl">2</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-3 text-center">Energy Assessment</h3>
              <p className="text-gray-600 text-center">
                I evaluate your energy field to identify blockages, imbalances, and areas where healing energy can be most effective.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md relative z-10">
              <div className="w-14 h-14 rounded-full bg-mindset-primary flex items-center justify-center mx-auto mb-4 text-white border-4 border-white">
                <span className="font-bold text-xl">3</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-3 text-center">Healing Sessions</h3>
              <p className="text-gray-600 text-center">
                Through gentle, hands-on or distant energy work, we release blockages and restore balance to your mind, body, and spirit.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md relative z-10">
              <div className="w-14 h-14 rounded-full bg-mindset-primary flex items-center justify-center mx-auto mb-4 text-white border-4 border-white">
                <span className="font-bold text-xl">4</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-3 text-center">Integration & Growth</h3>
              <p className="text-gray-600 text-center">
                I provide tools and practices to help you maintain your energetic balance and continue your healing journey.
              </p>
            </div>
          </div>
        </div>
        
        {/* What to Expect */}
        <div className="mt-20 bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-serif font-bold mb-6 text-center">What to Expect During a Session</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-mindset-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-mindset-primary text-sm">✓</span>
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">Comfortable Environment</h4>
                    <p className="text-sm text-gray-600">Sessions take place in a peaceful setting with soft lighting, gentle music, and aromatherapy to promote relaxation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-mindset-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-mindset-primary text-sm">✓</span>
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">Gentle Touch</h4>
                    <p className="text-sm text-gray-600">Light, non-invasive touch on or above the body channels healing energy to where it's needed most.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-mindset-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-mindset-primary text-sm">✓</span>
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">Mind-Body Awareness</h4>
                    <p className="text-sm text-gray-600">Guided visualization and breathwork help you connect with your body's wisdom and engage in the healing process.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-mindset-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-mindset-primary text-sm">✓</span>
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">Energy Sensations</h4>
                    <p className="text-sm text-gray-600">You may experience warmth, tingling, pulsing, or deep relaxation as energy moves through blockages.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-mindset-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-mindset-primary text-sm">✓</span>
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">Emotional Release</h4>
                    <p className="text-sm text-gray-600">As energy shifts, you may experience emotional release—all responses are normal and honored in the healing space.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-mindset-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-mindset-primary text-sm">✓</span>
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">Post-Session Integration</h4>
                    <p className="text-sm text-gray-600">We'll discuss your experience and provide personalized recommendations to support your continued healing.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Ready to begin your transformation? Take the first step on your healing journey today.
          </p>
          
          <Button
            asChild
            variant="mindset"
            size="lg"
            className="px-8 py-6 text-white font-medium text-lg"
          >
            <Link href="/contact">
              Book Your Healing Session
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 