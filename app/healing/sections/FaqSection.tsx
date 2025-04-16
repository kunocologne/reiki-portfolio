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
            <svg className="h-6 w-6 text-mindset-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What happens during a healing session?",
      answer: "During a healing session, you'll be guided through a gentle process that begins with a brief consultation about your current needs. You'll then relax fully clothed on a treatment table or seated in a chair while I work with your energy field. I use a combination of light touch and no-touch techniques to balance your energy and facilitate deep relaxation. Many people experience sensations of warmth, tingling, or deep peace during the session. We'll conclude with time to integrate the experience and discuss any insights that arose."
    },
    {
      question: "How does energy healing work with the mind pillar?",
      answer: "Energy healing works directly with the mind pillar by helping to calm the nervous system and release thought patterns that may be causing stress or limiting beliefs. As energy flows more freely, mental clarity often improves, and many clients report enhanced focus, reduced anxiety, and greater emotional balance. The mind-body connection is strengthened, allowing you to access deeper wisdom and intuition that may have been obscured by mental noise or stress."
    },
    {
      question: "How many sessions will I need?",
      answer: "The number of sessions varies depending on your individual needs and goals. Some people experience significant benefits from a single session, while others prefer to work with energy healing as part of their ongoing wellness routine. For specific issues, a series of 3-5 sessions often provides noticeable results. After your first session, we can discuss a recommended approach tailored to your unique situation."
    },
    {
      question: "Is energy healing spiritual or religious?",
      answer: "Energy healing is spiritual in nature but not tied to any specific religion. It works with universal life force energy that transcends any particular belief system. People of all faiths, as well as those who don't identify with any spiritual tradition, can benefit from energy healing. I create a space that honors your personal beliefs while facilitating connection to your own inner wisdom and healing capacity."
    },
    {
      question: "Can you do distant or remote healing sessions?",
      answer: "Yes, energy healing can be effectively conducted at a distance. Energy is not limited by physical proximity, and many clients report that distant sessions are just as powerful as in-person work. For remote sessions, we connect via phone or video call for the initial and closing parts of our time together, while you relax in a comfortable space during the healing portion. This option makes healing accessible regardless of your location."
    },
    {
      question: "Can energy healing help with physical conditions?",
      answer: "While energy healing is not a replacement for medical care, it can be a valuable complement to conventional treatments. By supporting the body's natural healing mechanisms, releasing energy blockages, and reducing stress, energy healing can create optimal conditions for physical healing. Many clients report improvements in pain levels, sleep quality, and overall vitality. I always recommend working with appropriate healthcare providers for medical conditions while using energy healing as a complementary approach."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section className="py-20 bg-mindset-primary/5" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="w-10 h-10 rounded-full bg-mindset-primary flex items-center justify-center text-white text-xl mx-auto mb-4">
              ?
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-24 bg-mindset-primary/50 mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            Find answers to common questions about energy healing and how it can support your mind-body wellness journey.
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