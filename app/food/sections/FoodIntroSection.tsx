"use client"

import Image from "next/image";
import Link from "next/link";

export default function FoodIntroSection() {
  return (
    <section id="food-intro" className="py-16 md:py-24 bg-cream">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-nutrition-primary">Nutrition: The Third Pillar of Holistic Wellness</h2>
            <p className="mb-4 text-lg">
              As the third essential pillar in my holistic approach to wellness, nutrition completes the 
              mind-body-nourishment trilogy, working in harmony with healing and movement practices.
            </p>
            <p className="mb-4">
              My approach integrates modern nutritional science with ancient wisdom traditions, 
              recognizing that truly nourishing food connects us to nature, community, and ourselves.
            </p>
            <p className="mb-4">
              When we transform our relationship with food, we transform our entire being—creating 
              a foundation for vibrant health that supports both physical vitality and spiritual growth.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/food/food-intro.jpg" 
              alt="Holistic Nutrition" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 