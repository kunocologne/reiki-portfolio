"use client"

import Image from "next/image";
import Link from "next/link";
import { Heart, CheckCircle, Users, UserCheck, User } from "lucide-react";

export default function WorkshopsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#faf7f2] to-white">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Heart-Centered Workshops
          </h2>
          <div className="w-24 h-1 bg-amber mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-accent leading-relaxed">
            In my workshops, I create a safe and supportive environment where participants of all ages can discover and practice heart-centered energy work. These workshops combine guided meditations, Reiki methods, Chi Gong, eye gazing, and heart-opening activities.
          </p>
        </div>

        {/* Workshop Benefits */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-8 text-center">
            Workshop Benefits
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-50 hover:shadow-md transition-all">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-[#f2e6d9] rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-5 h-5 text-amber" />
                </div>
                <h4 className="font-serif text-xl font-medium text-gray-800">Accessible Techniques</h4>
              </div>
              <p className="text-gray-600">
                Learn simple yet powerful techniques that can be immediately applied in your daily life to connect with and harness your heart energy.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-50 hover:shadow-md transition-all">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-[#e8f0e8] rounded-full flex items-center justify-center mr-4">
                  <Users className="w-5 h-5 text-movement-primary" />
                </div>
                <h4 className="font-serif text-xl font-medium text-gray-800">For All Ages</h4>
              </div>
              <p className="text-gray-600">
                Specially designed activities for both adults and children, fostering intergenerational connection and teaching young ones about their energetic nature.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-50 hover:shadow-md transition-all">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-[#e9e2f5] rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-5 h-5 text-mindset-primary" />
                </div>
                <h4 className="font-serif text-xl font-medium text-gray-800">Partner Practice</h4>
              </div>
              <p className="text-gray-600">
                Participants pair up to practice techniques on each other, developing confidence and deepening understanding through direct experience.
              </p>
            </div>
          </div>
        </div>
        
        {/* Workshop Types */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Group Workshops */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/healing/chi-gong.jpg"
                  alt="Group Workshops"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <span className="text-white text-sm bg-amber/80 px-3 py-1 rounded-full mb-2 inline-block">
                    From heart to heart
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-5 h-5 text-amber mr-2" />
                  <h4 className="font-serif text-xl font-medium text-gray-800">Group Workshops</h4>
                </div>
                <p className="text-gray-600 mb-6">
                  Interactive sessions for groups of all sizes, focused on teaching practical energy work techniques in a collaborative environment.
                </p>
                <Link 
                  href="/contact?workshop=group"
                  className="text-amber font-medium hover:underline flex items-center"
                >
                  Join a group session
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Family Workshops */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/healing/tantra.jpg"
                  alt="Family Workshops"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <span className="text-white text-sm bg-movement-primary/80 px-3 py-1 rounded-full mb-2 inline-block">
                    Connecting generations
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <UserCheck className="w-5 h-5 text-movement-primary mr-2" />
                  <h4 className="font-serif text-xl font-medium text-gray-800">Family Workshops</h4>
                </div>
                <p className="text-gray-600 mb-6">
                  Special sessions where parents and children learn together, strengthening bonds while discovering energy awareness as a family.
                </p>
                <Link 
                  href="/contact?workshop=family"
                  className="text-movement-primary font-medium hover:underline flex items-center"
                >
                  Book for your family
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Private Sessions */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/healing/healing-session.jpg"
                  alt="Private Sessions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <span className="text-white text-sm bg-mindset-primary/80 px-3 py-1 rounded-full mb-2 inline-block">
                    Personalized healing
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <User className="w-5 h-5 text-mindset-primary mr-2" />
                  <h4 className="font-serif text-xl font-medium text-gray-800">Private Sessions</h4>
                </div>
                <p className="text-gray-600 mb-6">
                  One-on-one personalized guidance for those seeking deeper understanding or addressing specific energy imbalances.
                </p>
                <Link 
                  href="/contact?workshop=private"
                  className="text-mindset-primary font-medium hover:underline flex items-center"
                >
                  Schedule private session
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-amber text-white rounded-lg font-medium hover:bg-amber/90 transition-colors"
          >
            Discover All Workshops
          </Link>
        </div>
      </div>
    </section>
  );
} 