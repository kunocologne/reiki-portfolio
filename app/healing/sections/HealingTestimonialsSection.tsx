"use client"

import Image from "next/image";
import { useState } from "react";

export default function HealingTestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "Working with Nathanel has been transformative. His holistic approach helped me reconnect with myself in ways I never thought possible. The energy healing sessions helped restore balance to my mind and spirit.",
      author: "Sarah M.",
      role: "Yoga Teacher",
      image: "/images/testimonials/sarah.jpg"
    },
    {
      quote: "After years of traditional therapy, Nathanel's energy healing sessions finally helped me process my trauma and find peace. The mind-body connection he facilitates is profound.",
      author: "Michael D.",
      role: "Business Executive",
      image: "/images/testimonials/michael.jpg"
    },
    {
      quote: "The combination of breathwork and energy healing has completely changed my relationship with anxiety. I now have tools that actually work and feel more connected to my inner wisdom.",
      author: "Leila K.",
      role: "Artist",
      image: "/images/testimonials/leila.jpg"
    }
  ];

  return (
    <section className="py-20 bg-mindset-primary/5" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="w-10 h-10 rounded-full bg-mindset-primary flex items-center justify-center text-white text-xl mx-auto mb-4">
              ✧
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Healing Stories
          </h2>
          <div className="h-1 w-24 bg-mindset-primary/50 mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            Hear from others who have experienced the transformative power of energy healing
            and how it has helped them reconnect with their mind, body, and spirit.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Main testimonial carousel */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-mindset-primary flex items-center justify-center shadow-lg z-10">
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
                    <div className="w-12 h-12 rounded-full bg-mindset-primary/10 flex items-center justify-center mr-4 overflow-hidden">
                      {testimonials[activeTestimonial].image ? (
                        <Image 
                          src={testimonials[activeTestimonial].image} 
                          alt={testimonials[activeTestimonial].author}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <span className="text-mindset-primary font-medium text-sm">
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
                            ? 'bg-mindset-primary w-16' 
                            : 'bg-mindset-primary/20'
                        }`}
                        aria-label={`View testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Image - takes up 2 columns on medium screens */}
                <div className="relative h-64 md:h-auto md:col-span-2">
                  <Image
                    src="/images/healing/testimonial-bg.jpg"
                    alt="Healing session"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-mindset-primary/30 to-mindset-primary/10"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Small testimonial cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <span className="text-4xl text-mindset-primary/60">"</span>
                </div>
                <div>
                  <p className="italic text-gray-700 mb-4">
                    The energy healing experience with Nathanel was deeply restful. I felt a sense of clarity and lightness that stayed with me for days afterward.
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-mindset-primary/20 flex items-center justify-center mr-3">
                      <span className="text-mindset-primary font-medium text-xs">JT</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Jamie T.</p>
                      <p className="text-xs text-gray-500">Writer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <span className="text-4xl text-mindset-primary/60">"</span>
                </div>
                <div>
                  <p className="italic text-gray-700 mb-4">
                    I was skeptical at first, but after just one session I felt a noticeable difference in my stress levels and sleep quality. I'm now a regular client.
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-mindset-primary/20 flex items-center justify-center mr-3">
                      <span className="text-mindset-primary font-medium text-xs">KR</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Kai R.</p>
                      <p className="text-xs text-gray-500">Engineer</p>
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