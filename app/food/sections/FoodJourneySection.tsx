"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FoodJourneySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-nutrition-primary/5" id="food-journey">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="w-10 h-10 rounded-full bg-nutrition-primary flex items-center justify-center text-white text-xl mx-auto mb-4">
              ✧
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Your Nutrition Journey
          </h2>
          <div className="h-1 w-24 bg-nutrition-primary/50 mx-auto mb-6"></div>
          <p className="text-xl font-body mb-2 max-w-2xl mx-auto">
            Embarking on a nutritional path is a transformative commitment to your wellbeing.
          </p>
          <p className="text-lg font-body max-w-2xl mx-auto text-gray-600">
            The journey begins with awareness and intention, and unfolds through a process of 
            mindful transformation guided by the principles of holistic nutrition.
          </p>
        </div>
        
        {/* Journey Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-nutrition-primary/30 -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="bg-white p-6 rounded-xl shadow-md relative z-10">
              <div className="w-14 h-14 rounded-full bg-nutrition-primary flex items-center justify-center mx-auto mb-4 text-white border-4 border-white">
                <span className="font-bold text-xl">1</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-3 text-center">Discovery Call</h3>
              <p className="text-gray-600 text-center">
                We begin with a complimentary consultation to understand your goals, history, and unique nutritional needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md relative z-10">
              <div className="w-14 h-14 rounded-full bg-nutrition-primary flex items-center justify-center mx-auto mb-4 text-white border-4 border-white">
                <span className="font-bold text-xl">2</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-3 text-center">Initial Assessment</h3>
              <p className="text-gray-600 text-center">
                A comprehensive review of your current nutrition patterns, health concerns, and lifestyle factors to develop your plan.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md relative z-10">
              <div className="w-14 h-14 rounded-full bg-nutrition-primary flex items-center justify-center mx-auto mb-4 text-white border-4 border-white">
                <span className="font-bold text-xl">3</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-3 text-center">Personalized Plan</h3>
              <p className="text-gray-600 text-center">
                Receive your customized nutrition strategy with practical guidelines, meal ideas, and supportive practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md relative z-10">
              <div className="w-14 h-14 rounded-full bg-nutrition-primary flex items-center justify-center mx-auto mb-4 text-white border-4 border-white">
                <span className="font-bold text-xl">4</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-3 text-center">Ongoing Support</h3>
              <p className="text-gray-600 text-center">
                Regular follow-ups to refine your plan, celebrate progress, and address challenges as your body and needs evolve.
              </p>
            </div>
          </div>
        </div>
        
        {/* What to Expect */}
        <div className="mt-20 bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-serif font-bold mb-6 text-center">What to Expect in Your Nutrition Program</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-nutrition-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-nutrition-primary text-sm">✓</span>
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">Bio-Individual Approach</h4>
                    <p className="text-sm text-gray-600">Your nutrition plan is tailored specifically to your body's unique needs, preferences, and health goals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-nutrition-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-nutrition-primary text-sm">✓</span>
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">Practical Guidance</h4>
                    <p className="text-sm text-gray-600">Simple, actionable strategies that fit your lifestyle, including shopping guides and meal planning tools.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-nutrition-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-nutrition-primary text-sm">✓</span>
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">Whole Foods Focus</h4>
                    <p className="text-sm text-gray-600">Emphasis on nutrient-dense whole foods that nourish your body and support natural healing processes.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-nutrition-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-nutrition-primary text-sm">✓</span>
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">Mindful Eating Practices</h4>
                    <p className="text-sm text-gray-600">Learn techniques to reconnect with your body's hunger signals and transform your relationship with food.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-nutrition-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-nutrition-primary text-sm">✓</span>
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">Lifestyle Integration</h4>
                    <p className="text-sm text-gray-600">Address sleep, stress, and movement patterns that interact with nutrition to support overall wellbeing.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-nutrition-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-nutrition-primary text-sm">✓</span>
                  </span>
                  <div>
                    <h4 className="font-medium mb-1">Educational Approach</h4>
                    <p className="text-sm text-gray-600">Gain knowledge about how foods affect your unique biochemistry, empowering you to make informed choices.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Ready to transform your relationship with food and health? Begin your nutrition journey today.
          </p>
          
          <Button
            asChild
            variant="nutrition"
            size="lg"
            className="px-8 py-6 text-white font-medium text-lg"
          >
            <Link href="/contact">
              Schedule Your Discovery Call
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 