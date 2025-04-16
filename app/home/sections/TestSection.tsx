"use client"

import Image from "next/image";
import Link from "next/link";
import { Heart, Users, CheckCircle } from "lucide-react";

export default function TestSection() {
  return (
    <section className="bg-[#e8d7b7] py-20">
      <div className="container max-w-[1400px] mx-auto px-4">
        {/* Section Header */}
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-[#333333] mb-12">
          Heart-Centered Workshops
        </h2>
        
        {/* Description */}
        <div className="max-w-[672px] mx-auto mb-16">
          <p className="text-lg text-[#0a0a0a] text-opacity-70 text-center">
            In my workshops, I create a safe and supportive environment where participants of all ages can discover and practice heart-centered energy work. These workshops combine guided meditations, Reiki methods, Chi Gong, eye gazing, and heart-opening activities.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Workshop Image - Left Side */}
          <div className="md:col-span-5">
            <div className="relative w-full h-[483px] rounded-2xl overflow-hidden shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/healing/chi-gong.jpg"
                alt="Workshop session"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Workshop Benefits - Right Side */}
          <div className="md:col-span-7">
            <h3 className="font-serif text-2xl font-semibold text-[#333333] mb-6">
              Workshop Benefits
            </h3>

            {/* Benefit 1 */}
            <div className="mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#a8c3a7] bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 stroke-[#a8c3a7]" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-medium text-[#333333] mb-2">
                    Accessible Techniques
                  </h4>
                  <p className="text-[#0a0a0a] text-opacity-70">
                    Learn simple yet powerful techniques that can be immediately applied in your daily life to connect with and harness your heart energy.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#bfa8d9] bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 stroke-[#bfa8d9]" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-medium text-[#333333] mb-2">
                    For All Ages
                  </h4>
                  <p className="text-[#0a0a0a] text-opacity-70">
                    Specially designed activities for both adults and children, fostering intergenerational connection and teaching young ones about their energetic nature.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#e3a76f] bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 stroke-[#e3a76f]" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-medium text-[#333333] mb-2">
                    Partner Practice
                  </h4>
                  <p className="text-[#0a0a0a] text-opacity-70">
                    Participants pair up to practice techniques on each other, developing confidence and deepening understanding through direct experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="bg-[#a8c3a7] text-white py-2.5 px-4 rounded-md font-medium mt-4">
              Join a Workshop
            </button>
          </div>
        </div>

        {/* Workshop Types */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Group Workshop */}
          <div className="bg-white rounded-xl overflow-hidden shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="relative h-48">
              <Image 
                src="/images/healing/chi-gong.jpg"
                alt="Group Workshops"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="font-serif text-xl font-medium text-[#333333] mb-2">
                Group Workshops
              </h4>
              <p className="text-[#0a0a0a] text-opacity-70 mb-6">
                Interactive sessions for groups of all sizes, focused on teaching practical energy work techniques in a collaborative environment.
              </p>
              <p className="text-[#0a0a0a] text-opacity-80 font-medium">
                From heart to heart
              </p>
            </div>
          </div>

          {/* Family Workshop */}
          <div className="bg-white rounded-xl overflow-hidden shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="relative h-48">
              <Image 
                src="/images/healing/tantra.jpg"
                alt="Family Workshops"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="font-serif text-xl font-medium text-[#333333] mb-2">
                Family Workshops
              </h4>
              <p className="text-[#0a0a0a] text-opacity-70 mb-6">
                Special sessions where parents and children learn together, strengthening bonds while discovering energy awareness as a family.
              </p>
              <p className="text-[#a8c3a7] font-medium">
                Connecting generations
              </p>
            </div>
          </div>

          {/* Private Sessions */}
          <div className="bg-white rounded-xl overflow-hidden shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="relative h-48">
              <Image 
                src="/images/healing/healing-session.jpg"
                alt="Private Sessions"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="font-serif text-xl font-medium text-[#333333] mb-2">
                Private Sessions
              </h4>
              <p className="text-[#0a0a0a] text-opacity-70 mb-6">
                One-on-one personalized guidance for those seeking deeper understanding or addressing specific energy imbalances.
              </p>
              <p className="text-[#e3a76f] font-medium">
                Personalized healing
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <button className="bg-[#bfa8d9] text-white py-3 px-8 rounded-md font-medium shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]">
            Discover All Workshops
          </button>
        </div>
      </div>
    </section>
  );
} 