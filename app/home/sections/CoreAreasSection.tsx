import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CoreAreasSection() {
  const corePillars = [
    {
      title: "Nutrition",
      subtitle: "Fuel for the Body",
      description: "What we eat is the foundation of our physical, mental, and spiritual health. Food is medicine, and mindful nutrition supports longevity, vitality, and emotional balance.",
      features: [
        "Personalized nutrition plans",
        "Food as medicine approach",
        "Mindful eating practices",
        "Seasonal & local food guidance",
        "Healing recipes & meal preparation"
      ],
      image: "/images/home/nutrition.jpg",
      link: "/nutrition",
      theme: "nutrition",
      color: "var(--nutrition-primary)",
      icon: "🌱"
    },
    {
      title: "Movement",
      subtitle: "Physical Maintenance",
      description: "Just as a car needs regular care, our body requires movement. Strength, flexibility, and energy flow through exercise, yoga, and stretching are essential to sustaining health.",
      features: [
        "Personalized movement routines",
        "Yoga and stretching guidance",
        "Energy flow techniques",
        "Physical alignment practices",
        "Breathwork integration"
      ],
      image: "/images/home/movement.jpg",
      link: "/sacred-house",
      theme: "movement",
      color: "var(--movement-primary)",
      icon: "⟳"
    },
    {
      title: "Mindset",
      subtitle: "Spiritual Alignment",
      description: "Our thoughts shape our reality. Joy, gratitude, and connection to our purpose fuel the soul. Recognizing the magic in life and embracing our unique gifts allow us to thrive.",
      features: [
        "Meditation and mindfulness",
        "Spiritual practices",
        "Purpose alignment",
        "Emotional well-being techniques",
        "Personal growth guidance"
      ],
      image: "/images/home/mindset.jpg",
      link: "/mindset",
      theme: "mindset",
      color: "var(--mindset-primary)",
      icon: "✧"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="core-areas">
      <div className="container">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-wider text-gray-500 mb-2 block">Holistic Approach</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">The Three Pillars of Wellness</h2>
          <div className="h-1 w-24 bg-amber mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto font-body">
            My approach addresses the fundamental elements of wellness through these 
            three interconnected pillars. Like a triangle—the strongest shape in nature—these
            pillars support each other to create a comprehensive foundation for vibrant health and well-being.
          </p>
        </div>

        {/* Triangle graphic representation */}
        <div className="relative max-w-2xl mx-auto mb-20 hidden md:block">
          <svg viewBox="0 0 400 350" className="w-full">
            <polygon 
              points="200,10 10,340 390,340" 
              fill="none" 
              stroke="url(#gradient)" 
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--nutrition-primary)" />
                <stop offset="50%" stopColor="var(--movement-primary)" />
                <stop offset="100%" stopColor="var(--mindset-primary)" />
              </linearGradient>
            </defs>
            
            {/* Nutrition Node */}
            <circle cx="10" cy="340" r="15" fill="var(--nutrition-primary)" />
            <text x="10" y="370" textAnchor="middle" fill="var(--text-primary)" fontSize="14">Nutrition</text>
            
            {/* Movement Node */}
            <circle cx="390" cy="340" r="15" fill="var(--movement-primary)" />
            <text x="390" y="370" textAnchor="middle" fill="var(--text-primary)" fontSize="14">Movement</text>
            
            {/* Mindset Node */}
            <circle cx="200" cy="10" r="15" fill="var(--mindset-primary)" />
            <text x="200" y="40" textAnchor="middle" fill="var(--text-primary)" fontSize="14">Mindset</text>
            
            {/* Center */}
            <circle cx="200" cy="230" r="30" fill="var(--amber)" fillOpacity="0.2" />
            <text x="200" y="235" textAnchor="middle" fill="var(--text-primary)" fontSize="14">Wholeness</text>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {corePillars.map((pillar, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl group"
            >
              {/* Colored top accent bar */}
              <div 
                className="absolute top-0 inset-x-0 h-2 z-10" 
                style={{ backgroundColor: pillar.color }}
              ></div>
              
              {/* Image container with overlay */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"
                ></div>
                
                {/* Icon badge */}
                <div 
                  className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-xl"
                  style={{ backgroundColor: pillar.color }}
                >
                  <span className="text-white">{pillar.icon}</span>
                </div>
                
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-serif font-bold">{pillar.title}</h3>
                  <p className="text-white/90 text-sm">{pillar.subtitle}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="mb-6 font-body text-gray-700">{pillar.description}</p>
                
                <h4 className="font-serif font-semibold mb-4 text-lg">Key Elements:</h4>
                <ul className="mb-8 space-y-3">
                  {pillar.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span 
                        className="inline-block w-2 h-2 mt-2 mr-3 rounded-full flex-shrink-0" 
                        style={{ backgroundColor: pillar.color }}
                      ></span>
                      <span className="font-body text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-gray-100">
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full justify-center group-hover:border-transparent transition-all duration-300 hover:bg-opacity-90 hover:text-white flex items-center"
                    style={{ 
                      borderColor: pillar.color, 
                      color: pillar.color,
                      "--hover-bg": pillar.color,
                      "&:hover": {
                        backgroundColor: pillar.color
                      }
                    } as any}
                  >
                    <Link href={pillar.link} className="flex items-center">
                      Learn More About {pillar.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
