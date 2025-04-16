"use client"

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

type FaqItemProps = {
  question: string;
  answer: React.ReactNode;
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
            <svg className="h-6 w-6 text-nutrition-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="text-base text-gray-700 leading-relaxed">{answer}</div>
        </div>
      )}
    </div>
  );
}

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FaqItem[] = [
  {
    question: "What is your approach to nutrition?",
    answer: (
      <>
        <p>
          My approach centers on whole-food, primarily plant-based nutrition that honors bio-individuality. 
          This means I don't advocate for a one-size-fits-all diet, but rather guide you to discover the 
          foods that best nourish your unique body.
        </p>
        <p className="mt-2">
          I focus on addition rather than restriction, helping you incorporate more nutrient-dense, 
          life-giving foods while developing a healthy, non-dogmatic relationship with eating. My philosophy 
          integrates nutritional science with ancient wisdom and mindful eating practices.
        </p>
      </>
    ),
  },
  {
    question: "Do I need to be vegan or vegetarian to work with you?",
    answer: (
      <>
        <p>
          Not at all. While I emphasize the benefits of plant-forward eating, I respect that nutrition 
          is highly personal. I support clients across various dietary preferences and help them optimize 
          their chosen approach. My focus is on quality, mindfulness, and sustainability rather than rigid labels.
        </p>
      </>
    ),
  },
  {
    question: "How is holistic nutrition different from conventional dietetics?",
    answer: (
      <>
        <p>
          Holistic nutrition views food not just as calories or nutrients, but as information that 
          communicates with your entire being. While conventional dietetics often focuses primarily on 
          macronutrients and weight management, holistic nutrition:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Considers the emotional, mental, and spiritual aspects of eating</li>
          <li>Recognizes the importance of food quality and sourcing</li>
          <li>Addresses root causes rather than just symptoms</li>
          <li>Emphasizes personalization based on individual needs</li>
          <li>Integrates traditional food wisdom with modern nutritional science</li>
        </ul>
      </>
    ),
  },
  {
    question: "What happens in a nutrition consultation?",
    answer: (
      <>
        <p>
          An initial consultation begins with a comprehensive assessment of your current health, 
          nutritional patterns, lifestyle factors, and wellness goals. I create a safe space for you 
          to share your relationship with food and any challenges you're experiencing.
        </p>
        <p className="mt-2">
          Together, we develop a personalized nutrition strategy that fits your life. This includes 
          practical recommendations, mindful eating practices, recipes, and simple steps to implement 
          right away. Follow-up sessions track your progress, address challenges, and refine your approach 
          as you evolve.
        </p>
      </>
    ),
  },
  {
    question: "Can nutrition help with specific health conditions?",
    answer: (
      <>
        <p>
          Nutrition can play a powerful role in managing and improving many health conditions. Food choices 
          can significantly impact inflammation, gut health, hormonal balance, energy levels, and immune function 
          - all of which underlie numerous health concerns.
        </p>
        <p className="mt-2">
          While I don't diagnose or treat medical conditions (and always recommend working with your healthcare 
          provider), I can offer complementary nutritional support for concerns like digestive issues, energy 
          imbalances, inflammatory conditions, and hormonal health.
        </p>
      </>
    ),
  }
];

export default function FoodFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section className="py-20 bg-nutrition-primary/5" id="food-faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="w-10 h-10 rounded-full bg-nutrition-primary flex items-center justify-center text-white text-xl mx-auto mb-4">
              ?
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-24 bg-nutrition-primary/50 mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            Find answers to common questions about holistic nutrition and how it can support your journey to vibrant health.
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
        
        <div className="mt-12 text-center">
          <p className="mb-6 text-lg">Have more questions? I'm happy to help!</p>
          <Button 
            variant="outline" 
            className="border-nutrition-primary text-nutrition-primary hover:bg-nutrition-primary/10"
            asChild
          >
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 