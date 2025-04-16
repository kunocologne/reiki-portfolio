"use client"

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
  imageSrc: string;
}

function AccordionItem({ title, content, isOpen, toggleOpen, imageSrc }: AccordionItemProps) {
  return (
    <div className="border-b border-amber-200 last:border-b-0">
      <button
        className="flex items-center justify-between w-full py-5 text-left"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-serif font-bold text-amber-800">{title}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-amber-700" />
        ) : (
          <ChevronDown className="w-5 h-5 text-amber-700" />
        )}
      </button>
      
      {isOpen && (
        <div className="pb-6 animate-fadeIn">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              {content}
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt={title}
                width={500}
                height={350}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function MovementJourneySection() {
  const [openItem, setOpenItem] = useState<string>("preparation");
  
  const toggleItem = (itemId: string) => {
    setOpenItem(openItem === itemId ? "" : itemId);
  };

  const journeyItems = [
    {
      id: "preparation",
      title: "Preparation: Before You Arrive",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Your journey begins before you arrive at Sacred House:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li><span className="font-medium">Welcome materials:</span> You'll receive guidance on preparing your body, mind, and spirit.</li>
            <li><span className="font-medium">Intention setting:</span> We invite you to begin reflecting on your intentions for the experience.</li>
            <li><span className="font-medium">Practical details:</span> Clear information about what to bring, directions, and scheduling.</li>
            <li><span className="font-medium">Optional pre-practices:</span> Simple preparatory exercises to begin your journey.</li>
          </ul>
          <p className="text-gray-700 italic">
            This preparation phase helps you arrive centered and ready to receive the full benefits of your time with us.
          </p>
        </div>
      ),
      imageSrc: "/images/sacred-house/journey-preparation.jpg"
    },
    {
      id: "immersion",
      title: "Immersion: During Your Stay",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            While at Sacred House, your days flow with purpose and rhythm:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li><span className="font-medium">Morning rituals:</span> Gentle awakening with meditation, followed by movement practices and nourishment.</li>
            <li><span className="font-medium">Core practices:</span> Immersive movement sessions, workshops, or healing modalities tailored to your journey.</li>
            <li><span className="font-medium">Integration periods:</span> Time for rest, reflection, and processing your experiences.</li>
            <li><span className="font-medium">Community connection:</span> Sharing circles and communal meals that foster belonging.</li>
            <li><span className="font-medium">Evening unwinding:</span> Gentle practices to integrate the day's experiences before rest.</li>
          </ul>
          <p className="text-gray-700 italic">
            Each element is designed to support a progressive journey of unfolding awareness and transformation.
          </p>
        </div>
      ),
      imageSrc: "/images/sacred-house/retreat-1.jpg"
    },
    {
      id: "challenges",
      title: "Navigating Challenges",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Transformation often involves working through challenges:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li><span className="font-medium">Emotional releases:</span> As the body opens, stored emotions may surface – we create safe space for this.</li>
            <li><span className="font-medium">Resistance points:</span> We help you recognize when you're meeting edges of growth.</li>
            <li><span className="font-medium">Individual support:</span> Our facilitators provide personalized guidance when needed.</li>
            <li><span className="font-medium">Honoring limits:</span> You're always invited to participate at your own level and pace.</li>
          </ul>
          <p className="text-gray-700 italic">
            These moments of challenge often precede the most significant breakthroughs and insights.
          </p>
        </div>
      ),
      imageSrc: "/images/sacred-house/journey-challenge.jpg"
    },
    {
      id: "integration",
      title: "Integration: Returning Home",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Your journey continues after you leave Sacred House:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li><span className="font-medium">Closing ceremony:</span> A powerful completion ritual to honor your experience.</li>
            <li><span className="font-medium">Take-home practices:</span> Simple, sustainable routines to maintain your connection.</li>
            <li><span className="font-medium">Follow-up support:</span> Resources and check-ins to support your continued journey.</li>
            <li><span className="font-medium">Community connection:</span> Options to stay connected with fellow participants.</li>
          </ul>
          <p className="text-gray-700 italic">
            The true power of the work emerges as you integrate insights into your daily life, creating lasting transformation.
          </p>
        </div>
      ),
      imageSrc: "/images/sacred-house/retreat-4.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="w-10 h-10 rounded-full bg-movement-primary flex items-center justify-center text-white text-xl mx-auto mb-4">
                ✦
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Your Movement Journey
            </h2>
            <div className="h-1 w-24 bg-movement-primary/50 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Understanding the transformational path from preparation to integration
            </p>
          </div>
          
          <div className="bg-amber-50 rounded-2xl p-8 md:p-10 shadow-sm">
            {journeyItems.map((item) => (
              <AccordionItem
                key={item.id}
                title={item.title}
                content={item.content}
                isOpen={openItem === item.id}
                toggleOpen={() => toggleItem(item.id)}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 