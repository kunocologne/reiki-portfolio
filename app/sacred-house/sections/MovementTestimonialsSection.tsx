"use client"

import Image from "next/image";
import { useState } from "react";

export default function MovementTestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "The Sacred House movement retreats have transformed my relationship with my body. I've discovered joy in movement that I haven't felt since childhood. Nathanel creates such a safe space for authentic expression.",
      author: "Eliza R.",
      role: "Dance Therapist",
      image: "/images/testimonials/eliza.jpg"
    },
    {
      quote: "As someone who always felt uncomfortable in traditional fitness settings, the conscious movement practices at Sacred House helped me connect with my body in a whole new way. I've gained strength, flexibility, and deep self-acceptance.",
      author: "Thomas J.",
      role: "Software Engineer",
      image: "/images/testimonials/thomas.jpg"
    },
    {
      quote: "The ecstatic dance ceremonies have become my monthly ritual for emotional release and spiritual connection. The Sacred House community feels like family now, and I leave each session feeling renewed and inspired.",
      author: "Maya K.",
      role: "Nurse Practitioner",
      image: "/images/testimonials/maya.jpg"
    }
  ];

  return (
    <section className="py-20 bg-movement-primary/5" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="w-10 h-10 rounded-full bg-movement-primary flex items-center justify-center text-white text-xl mx-auto mb-4">
              ✧
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Movement Stories
          </h2>
          <div className="h-1 w-24 bg-movement-primary/50 mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            Hear from others who have experienced the transformative power of movement
            and how it has helped them reconnect with their bodies, minds, and spirits.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Main testimonial carousel */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-movement-primary flex items-center justify-center shadow-lg z-10">
                <span className="text-3xl text-white">"</span>
              </div>
              
              <div className="md:grid md:grid-cols-5 items-stretch">
                {/* Testimonial content - takes up 3 columns on medium screens */}
                <div className="p-10 md:col-span-3 flex flex-col justify-center">
                  <div className="min-h-[180px] md:min-h-[200px] flex items-center">
                    <div className="transition-all duration-300 ease-in-out">
                      <p className="text-xl font-serif italic mb-8 text-gray-700 leading-relaxed">
                        "{testimonials[activeTestimonial].quote}"
                      </p>
                    </div>
                  </div>
                    
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full bg-movement-primary/10 flex items-center justify-center mr-4 overflow-hidden">
                      {testimonials[activeTestimonial].image ? (
                        <Image 
                          src={testimonials[activeTestimonial].image} 
                          alt={testimonials[activeTestimonial].author}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <span className="text-movement-primary font-medium text-sm">
                          {testimonials[activeTestimonial].author.split(' ')[0][0]}
                          {testimonials[activeTestimonial].author.split(' ')[1][0]}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-serif font-bold">{testimonials[activeTestimonial].author}</p>
                      <p className="text-sm text-gray-600">{testimonials[activeTestimonial].role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mt-8 space-x-3">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-10 h-2 rounded-full transition-all duration-300 ${
                          activeTestimonial === index 
                            ? 'bg-movement-primary w-16' 
                            : 'bg-movement-primary/20'
                        }`}
                        aria-label={`View testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Image - takes up 2 columns on medium screens */}
                <div className="relative h-64 md:h-auto md:col-span-2">
                  <Image
                    src="/images/sacred-house/movement-testimonial.jpg"
                    alt="Sacred movement session"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-movement-primary/30 to-movement-primary/10"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Small testimonial cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <span className="text-4xl text-movement-primary/60">"</span>
                </div>
                <div>
                  <p className="italic text-gray-700 mb-4">
                    The Sacred House movement retreats gave me the courage to reclaim my body after years of disconnection. I've never felt so empowered and alive.
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-movement-primary/20 flex items-center justify-center mr-3">
                      <span className="text-movement-primary font-medium text-xs">JT</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Jamie T.</p>
                      <p className="text-xs text-gray-500">Architect</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <span className="text-4xl text-movement-primary/60">"</span>
                </div>
                <div>
                  <p className="italic text-gray-700 mb-4">
                    I was skeptical about the sacred dance practices at first, but they've become a cornerstone of my spiritual practice. The community at Sacred House is unlike any I've experienced.
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-movement-primary/20 flex items-center justify-center mr-3">
                      <span className="text-movement-primary font-medium text-xs">KR</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Kai R.</p>
                      <p className="text-xs text-gray-500">Psychologist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 