import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Star } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background with pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber/5 via-soft-purple/10 to-sage-green/5 z-0">
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")` 
          }}
        ></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content Container */}
          <div className="grid md:grid-cols-12 gap-16 items-stretch">
            {/* Text Content - 7 columns on medium screens */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="relative mb-2">
                <div className="absolute top-0 left-0 w-10 h-10 -mt-4 -ml-4 rounded-full bg-amber/20"></div>
                <h4 className="text-sm uppercase tracking-wider text-gray-600 relative z-10">Your Wellness Journey</h4>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 relative">
                Begin Your Transformation Today
                <span className="absolute -bottom-3 left-0 w-20 h-1 bg-amber"></span>
              </h2>
              
              <p className="text-xl font-accent mb-8 text-amber">
                Your journey to harmony through the three pillars starts with a single step
              </p>
              
              <div className="prose prose-lg max-w-none font-body space-y-6 mb-8">
                <p>
                  I offer personalized consultations to understand your unique needs and create a 
                  tailored approach that balances all three pillars of wellness—<span className="text-nutrition-primary font-medium">Nutrition</span>, 
                  <span className="text-movement-primary font-medium"> Movement</span>, and 
                  <span className="text-mindset-primary font-medium"> Mindset</span>—to support your holistic transformation.
                </p>
                <p>
                  Whether you're seeking to optimize your nutrition, develop a sustainable movement 
                  practice, or cultivate a more aligned mindset, I'm here to guide you every step of the way.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button 
                  asChild
                  className="bg-amber hover:bg-amber/90 text-white rounded-full font-sans flex items-center gap-2 px-8 py-6"
                >
                  <Link href="/contact">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Consultation
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-amber text-amber hover:bg-amber/10 rounded-full font-sans flex items-center gap-2 px-8 py-6"
                >
                  <Link href="/contact#message">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send a Message
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Testimonials - 5 columns on medium screens */}
            <div className="md:col-span-5 flex flex-col">
              {/* Main testimonial */}
              <div className="bg-white rounded-2xl p-8 shadow-xl relative mb-6 flex-1">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-soft-purple rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl text-white">"</span>
                </div>
                
                <div className="pt-4">
                  <p className="italic font-body text-lg mb-8 leading-relaxed text-gray-700">
                    Working with Nathanael has completely transformed my approach to wellness. His 
                    guidance in all three pillars has helped me find balance I never thought possible.
                    I feel more energized, centered, and at peace than ever before.
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                      <Image 
                        src="/images/testimonials/sarah.jpg" 
                        alt="Sarah L." 
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-serif font-bold">Sarah L.</p>
                      <p className="text-sm text-gray-600">Wellness Client • 6 Months</p>
                    </div>
                  </div>
                  
                  <div className="flex mt-3">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Secondary testimonials */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 shadow-md">
                  <p className="italic font-body text-sm mb-3 text-gray-700 line-clamp-3">
                    "The nutrition guidance has changed my relationship with food completely. I have more energy and clarity."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full mr-2 overflow-hidden bg-nutrition-primary/20">
                      <span className="flex items-center justify-center h-full w-full text-nutrition-primary font-medium">M</span>
                    </div>
                    <div>
                      <p className="font-serif font-bold text-sm">Michael K.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 shadow-md">
                  <p className="italic font-body text-sm mb-3 text-gray-700 line-clamp-3">
                    "The mindset work we've done has been transformative. I'm more present and grounded."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full mr-2 overflow-hidden bg-mindset-primary/20">
                      <span className="flex items-center justify-center h-full w-full text-mindset-primary font-medium">J</span>
                    </div>
                    <div>
                      <p className="font-serif font-bold text-sm">Jordan T.</p>
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
