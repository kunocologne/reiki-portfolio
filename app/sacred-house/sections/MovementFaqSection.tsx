"use client"

import { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-6 text-left focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <svg className="h-6 w-6 text-movement-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-base text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function MovementFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What can I expect at a Sacred House event?",
      answer: "Each Sacred House event offers a unique experience, but all share common elements: a warm welcome, a clear introduction to the practice, a guided movement journey, and time for integration. Our events are held in beautiful spaces that support the depth of the work, with attention to comfortable temperatures, appropriate sound, and adequate space to move freely. You'll be invited to participate at your own level of comfort, with no pressure to conform to any particular movement style."
    },
    {
      question: "Do I need dance or movement experience to participate?",
      answer: "Absolutely not! Sacred House practices are designed to be accessible to people of all movement backgrounds and body types. There is no 'right way' to move here - we emphasize authentic expression over technique or performance. Beginners often find these practices particularly liberating because they invite you to discover your body's natural way of moving rather than imposing external forms or steps to follow."
    },
    {
      question: "How does movement connect to the second pillar of wellness?",
      answer: "Movement forms the second pillar in Nathanel's holistic approach to wellness, complementing the first pillar of mindset. Where mindset work addresses our mental and spiritual patterns, movement practices create embodied change by working directly with the physical vessel that houses our consciousness. Movement helps process emotions stored in the body, releases tension, increases energy flow, and creates new neural pathways that support transformation. The body often knows what the mind has forgotten, and movement helps us access this deeper wisdom."
    },
    {
      question: "What should I wear to movement sessions?",
      answer: "Wear comfortable clothing that allows you to move freely. Layers are recommended as your body temperature may change throughout the session. Most practices are done barefoot to allow for better grounding and sensory feedback, but clean, soft-soled indoor shoes are fine if needed. Avoid jewelry that might get in the way or potentially cause injury during movement. We practice in a judgment-free environment, so wear whatever feels good to move in rather than worrying about how you look."
    },
    {
      question: "Are Sacred House retreats suitable for all fitness levels?",
      answer: "Yes, our retreats accommodate all fitness levels and physical abilities. Movement practices are offered as invitations rather than demands, and you're encouraged to honor your body's needs at all times. We emphasize the felt experience of movement rather than achieving particular poses or forms. Our facilitators are skilled at offering modifications and alternatives to ensure everyone can participate meaningfully, regardless of fitness level, age, or physical limitations."
    },
    {
      question: "How is movement at Sacred House different from exercise classes?",
      answer: "Unlike conventional exercise classes that focus primarily on physical fitness, Sacred House movement practices address the whole person - body, mind, emotions, and spirit. Rather than following prescribed routines aimed at external results, our practices invite inner exploration, emotional expression, and spiritual connection. The emphasis is on presence and process rather than performance and products. While physical benefits naturally occur, they're considered welcome side effects rather than the primary goal of the work."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section className="py-20 bg-movement-primary/5" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="w-10 h-10 rounded-full bg-movement-primary flex items-center justify-center text-white text-xl mx-auto mb-4">
              ?
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-24 bg-movement-primary/50 mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            Find answers to common questions about Sacred House and how movement can support your wellness journey.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="px-6 md:px-10">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onToggle={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 