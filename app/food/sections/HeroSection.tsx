import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-nutrition-primary/40 via-black/50 to-black/40" />
        <Image
          src="/images/food/food-hero.jpg"
          alt="Wholesome Nutrition"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container relative">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 drop-shadow-lg">
            Food as <span className="text-nutrition-primary">Medicine</span>
          </h1>
          <p className="text-xl md:text-2xl font-accent text-white/90 mb-4 drop-shadow-md">
            Nourish your body, mind, and spirit
          </p>
          <p className="text-lg text-white/80 max-w-2xl font-body mb-8 drop-shadow-sm">
            Discover the transformative power of whole, plant-based nutrition and how mindful 
            eating practices can become a cornerstone of your healing journey and overall wellbeing.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="nutrition" 
              size="lg"
              asChild
              className="text-white font-medium transition-transform hover:scale-105 shadow-lg"
            >
              <Link href="/contact">Book a Consultation</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="border-2 border-white text-white bg-transparent hover:bg-white/10 font-medium transition-transform hover:scale-105"
            >
              <Link href="#food-services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
