"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ServiceDetailsProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function ServiceDetails({ title, isOpen, onClick, children }: ServiceDetailsProps) {
  return (
    <div className="mt-4">
      <button 
        onClick={onClick}
        className="flex items-center text-sm font-medium"
        style={{ color: "var(--movement-primary)" }}
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

export default function MovementServicesSection() {
  const [openService, setOpenService] = useState<string | null>(null);
  
  const toggleService = (service: string) => {
    if (openService === service) {
      setOpenService(null);
    } else {
      setOpenService(service);
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="movement-services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="w-10 h-10 rounded-full bg-movement-primary flex items-center justify-center text-white text-xl mx-auto mb-4">
              ✦
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Services</h2>
          <div className="h-1 w-24 bg-movement-primary/50 mx-auto mb-6"></div>
          <p className="text-lg mb-2 max-w-3xl mx-auto text-gray-700">
            From individual sessions to immersive retreats, discover the movement experiences that best serve your journey
          </p>
        </div>

        {/* Movement Practices Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-semibold text-center mb-8">Movement Practices</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Ecstatic Dance Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/sacred-house/ecstatic-dance.jpg"
                  alt="Ecstatic Dance"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-serif text-2xl font-bold">Ecstatic Dance</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-xl mb-3">Free-Form Movement Medicine</h4>
                <p className="text-foreground/70 font-body mb-4">
                  A journey of free-form movement that allows you to express emotions, release tensions, and connect with your authentic self.
                </p>
                
                <div className="mb-4 py-2 px-3 bg-movement-primary/5 rounded-lg">
                  <span className="font-medium">Best for:</span> Emotional release, creative expression, joy cultivation.
                </div>
                
                <ServiceDetails 
                  title="Ecstatic Dance" 
                  isOpen={openService === 'ecstatic-dance'} 
                  onClick={() => toggleService('ecstatic-dance')}
                >
                  <p className="mb-2">
                    In our ecstatic dance sessions, you'll move to carefully curated music journeys in a safe, 
                    substance-free environment. There's no right or wrong way to move—only your body's natural 
                    expression.
                  </p>
                  <p>
                    These sessions typically begin with a guided warm-up, followed by a wave of music that builds 
                    in intensity before gradually returning to stillness, ending with integration and sharing.
                  </p>
                </ServiceDetails>
                
                <Link 
                  href="/contact?practice=ecstatic-dance" 
                  className="mt-4 inline-block px-6 py-3 rounded-lg font-medium text-white transition-colors"
                  style={{ backgroundColor: "var(--movement-primary)" }}
                >
                  Join a Dance
                </Link>
              </div>
            </div>

            {/* Conscious Movement Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/sacred-house/conscious-movement.jpg"
                  alt="Conscious Movement"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-serif text-2xl font-bold">Conscious Movement</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-xl mb-3">Mindful Embodiment Practices</h4>
                <p className="text-foreground/70 font-body mb-4">
                  A blend of gentle movements, breath awareness, and meditation that helps you inhabit your body with greater presence.
                </p>
                
                <div className="mb-4 py-2 px-3 bg-movement-primary/5 rounded-lg">
                  <span className="font-medium">Best for:</span> Stress reduction, mindfulness development, body awareness.
                </div>
                
                <ServiceDetails 
                  title="Conscious Movement" 
                  isOpen={openService === 'conscious-movement'} 
                  onClick={() => toggleService('conscious-movement')}
                >
                  <p className="mb-2">
                    Conscious movement sessions combine elements of yoga, qi gong, and authentic movement to 
                    create a transformative practice that brings you into deep relationship with your body.
                  </p>
                  <p>
                    These practices are accessible to all bodies and levels of experience, focusing on internal 
                    sensations rather than external form or appearance. You'll develop greater body awareness 
                    and learn to move with intention.
                  </p>
                </ServiceDetails>
                
                <Link 
                  href="/contact?practice=conscious-movement" 
                  className="mt-4 inline-block px-6 py-3 rounded-lg font-medium text-white transition-colors"
                  style={{ backgroundColor: "var(--movement-primary)" }}
                >
                  Explore Sessions
                </Link>
              </div>
            </div>

            {/* Sacred Dance Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/sacred-house/sacred-dance.jpg"
                  alt="Sacred Dance"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-serif text-2xl font-bold">Sacred Dance</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-xl mb-3">Ceremonial Movement Arts</h4>
                <p className="text-foreground/70 font-body mb-4">
                  Ancient and modern dance forms that connect you to earth wisdom, ancestral traditions, and the divine feminine.
                </p>
                
                <div className="mb-4 py-2 px-3 bg-movement-primary/5 rounded-lg">
                  <span className="font-medium">Best for:</span> Spiritual connection, feminine empowerment, cultural wisdom.
                </div>
                
                <ServiceDetails 
                  title="Sacred Dance" 
                  isOpen={openService === 'sacred-dance'} 
                  onClick={() => toggleService('sacred-dance')}
                >
                  <p className="mb-2">
                    Sacred dance traditions from around the world offer powerful ways to embody spiritual principles, 
                    connect with archetypal energies, and honor the cycles of nature and life.
                  </p>
                  <p>
                    These structured dance forms include elements from Middle Eastern dance, Indian temple dance, 
                    and indigenous circle dances, all adapted respectfully to create a bridge between ancient wisdom 
                    and contemporary practice.
                  </p>
                </ServiceDetails>
                
                <Link 
                  href="/contact?practice=sacred-dance" 
                  className="mt-4 inline-block px-6 py-3 rounded-lg font-medium text-white transition-colors"
                  style={{ backgroundColor: "var(--movement-primary)" }}
                >
                  Join a Ceremony
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Retreats Section */}
        <div className="pt-16 border-t border-gray-200">
          <h3 className="text-2xl font-serif font-semibold text-center mb-8">Immersive Retreats</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Detox Retreat Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/sacred-house/detox-retreat.jpg"
                  alt="Detox & Fasting Retreat"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-serif text-2xl font-bold">Detox & Fasting Retreat</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  A full-body reset through fasting, cleansing, and mindful nutrition.
                </p>
                
                <div className="mb-4 py-2 px-3 bg-movement-primary/5 rounded-lg">
                  <span className="font-medium">Best for:</span> Restoring energy, gut health, mental clarity.
                </div>
                
                <ServiceDetails 
                  title="Detox Retreat" 
                  isOpen={openService === 'detox-retreat'} 
                  onClick={() => toggleService('detox-retreat')}
                >
                  <p className="mb-2">
                    Our detox retreats combine supervised fasting with gentle movement, meditation, and rest to support your body's natural cleansing processes.
                  </p>
                  <h4 className="font-bold mb-2 mt-3">What's included:</h4>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li>Daily guided practices</li>
                    <li>Cleansing broths and juices</li>
                    <li>Supportive supplements</li>
                    <li>Re-integration meals</li>
                    <li>Post-retreat nutrition plan</li>
                  </ul>
                </ServiceDetails>
                
                <Link 
                  href="/contact?retreat=detox" 
                  className="mt-4 inline-block px-6 py-3 rounded-lg font-medium text-white transition-colors"
                  style={{ backgroundColor: "var(--movement-primary)" }}
                >
                  Explore Detox Retreat
                </Link>
              </div>
            </div>

            {/* Yoga Retreat Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/sacred-house/yoga-retreat.jpg"
                  alt="Yoga & Movement Retreat"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-serif text-2xl font-bold">Yoga & Movement Retreat</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Deepen your yoga practice while exploring movement and breath.
                </p>
                
                <div className="mb-4 py-2 px-3 bg-movement-primary/5 rounded-lg">
                  <span className="font-medium">Best for:</span> Flexibility, balance, and spiritual connection.
                </div>
                
                <ServiceDetails 
                  title="Yoga Retreat" 
                  isOpen={openService === 'yoga-retreat'} 
                  onClick={() => toggleService('yoga-retreat')}
                >
                  <p className="mb-2">
                    Our yoga retreats weave together various styles of yoga with complementary movement modalities for a comprehensive approach to embodied practice.
                  </p>
                  <h4 className="font-bold mb-2 mt-3">What's included:</h4>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li>Daily yoga classes</li>
                    <li>Specialized workshops</li>
                    <li>Nourishing meals</li>
                    <li>Accommodations</li>
                    <li>Personal practice guidance</li>
                  </ul>
                </ServiceDetails>
                
                <Link 
                  href="/contact?retreat=yoga" 
                  className="mt-4 inline-block px-6 py-3 rounded-lg font-medium text-white transition-colors"
                  style={{ backgroundColor: "var(--movement-primary)" }}
                >
                  Join a Yoga Retreat
                </Link>
              </div>
            </div>

            {/* Spiritual Retreat Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/sacred-house/spiritual-retreat.jpg"
                  alt="Spiritual Immersion Retreat"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-serif text-2xl font-bold">Spiritual Immersion Retreat</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Reconnect with yourself through meditation, energy work, and guided introspection.
                </p>
                
                <div className="mb-4 py-2 px-3 bg-movement-primary/5 rounded-lg">
                  <span className="font-medium">Best for:</span> Spiritual seekers, those in transition, personal transformation.
                </div>
                
                <ServiceDetails 
                  title="Spiritual Retreat" 
                  isOpen={openService === 'spiritual-retreat'} 
                  onClick={() => toggleService('spiritual-retreat')}
                >
                  <p className="mb-2">
                    Our spiritual immersion retreats provide space for deep connection with your inner wisdom through a variety of contemplative and energetic practices.
                  </p>
                  <h4 className="font-bold mb-2 mt-3">What's included:</h4>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li>Daily meditation</li>
                    <li>Energy healing sessions</li>
                    <li>Sacred ceremonies</li>
                    <li>Silence periods</li>
                    <li>Integration circles</li>
                  </ul>
                </ServiceDetails>
                
                <Link 
                  href="/contact?retreat=spiritual" 
                  className="mt-4 inline-block px-6 py-3 rounded-lg font-medium text-white transition-colors"
                  style={{ backgroundColor: "var(--movement-primary)" }}
                >
                  Experience Spiritual Immersion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 