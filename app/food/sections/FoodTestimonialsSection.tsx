"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

export default function FoodTestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: "Nathanel's approach to nutrition transformed my relationship with food. Rather than focusing on restriction, he taught me to listen to my body and nourish it with foods that truly support my wellbeing. Six months later, my energy levels are consistently high, my digestion has improved dramatically, and I've developed a joyful connection to my meals.",
      name: "Emma S.",
      location: "Berlin, Germany",
      image: "/images/testimonials/testimonial-1.jpg",
      service: "Personalized Nutrition Consultation"
    },
    {
      id: 2,
      quote: "The plant-based cooking workshop was eye-opening. I've been vegetarian for years but was stuck in a rut with my meals. Nathanel shared simple yet powerful techniques that have made my cooking more flavorful, nutritious, and creative. His knowledge of herbs and spices alone was worth the price of admission!",
      name: "Marco L.",
      location: "Milan, Italy",
      image: "/images/testimonials/testimonial-2.jpg",
      service: "Plant-Based Cooking Workshop"
    },
    {
      id: 3,
      quote: "After struggling with health issues for years, I was skeptical about nutrition consultations. But Nathanel's holistic, personalized approach was different from anything I'd tried. He helped me identify specific food sensitivities and guided me toward healing options that worked with my lifestyle. The inflammation I lived with for years has diminished significantly.",
      name: "Sophia K.",
      location: "Vienna, Austria",
      image: "/images/testimonials/testimonial-3.jpg",
      service: "Nutrition Healing Program"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-nutrition-primary/5" id="food-testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="w-10 h-10 rounded-full bg-nutrition-primary flex items-center justify-center text-white text-xl mx-auto mb-4">
              ✧
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Nutrition Stories
          </h2>
          <div className="h-1 w-24 bg-nutrition-primary/50 mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            Hear from others who have experienced the transformative power of holistic nutrition
            and how it has helped them reconnect with their bodies and reclaim their health.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Main testimonial carousel */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-nutrition-primary flex items-center justify-center shadow-lg z-10">
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
                    <div className="w-12 h-12 rounded-full bg-nutrition-primary/10 flex items-center justify-center mr-4 overflow-hidden">
                      {testimonials[activeTestimonial].image ? (
                        <Image 
                          src={testimonials[activeTestimonial].image} 
                          alt={testimonials[activeTestimonial].name}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <span className="text-nutrition-primary font-medium text-sm">
                          {testimonials[activeTestimonial].name.split(' ')[0][0]}
                          {testimonials[activeTestimonial].name.split(' ')[1][0]}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-serif font-bold">{testimonials[activeTestimonial].name}</p>
                      <p className="text-sm text-gray-600">{testimonials[activeTestimonial].location}</p>
                    </div>
                  </div>
                  
                  <div className="flex mt-8 space-x-3">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-10 h-2 rounded-full transition-all duration-300 ${
                          activeTestimonial === index 
                            ? 'bg-nutrition-primary w-16' 
                            : 'bg-nutrition-primary/20'
                        }`}
                        aria-label={`View testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Image - takes up 2 columns on medium screens */}
                <div className="relative h-64 md:h-auto md:col-span-2">
                  <Image
                    src="/images/food/nourish-together-bg.jpg"
                    alt="Nutrition consultation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-nutrition-primary/30 to-nutrition-primary/10"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Small testimonial cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <span className="text-4xl text-nutrition-primary/60">"</span>
                </div>
                <div>
                  <p className="italic text-gray-700 mb-4">
                    The meal planning resources Nathanel provided have been game-changing. I'm saving time, eating better, and feeling more energetic than I have in years.
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-nutrition-primary/20 flex items-center justify-center mr-3">
                      <span className="text-nutrition-primary font-medium text-xs">AT</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Anna T.</p>
                      <p className="text-xs text-gray-500">Teacher</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <span className="text-4xl text-nutrition-primary/60">"</span>
                </div>
                <div>
                  <p className="italic text-gray-700 mb-4">
                    As an athlete, I needed specialized nutrition support. Nathanel created a plan that optimized my performance while respecting my food preferences and values.
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-nutrition-primary/20 flex items-center justify-center mr-3">
                      <span className="text-nutrition-primary font-medium text-xs">TM</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Thomas M.</p>
                      <p className="text-xs text-gray-500">Runner</p>
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