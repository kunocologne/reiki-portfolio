"use client"

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HowToBeginSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps = [
    {
      number: 1,
      title: "Free Consultation",
      description: "We begin with a brief chat to understand your needs and determine if we're a good match for your healing journey.",
      details: "During this 15-minute call, I'll ask about your goals, answer any questions you might have about my approach, and explain how we can work together. This is a no-pressure conversation to ensure we're aligned before proceeding."
    },
    {
      number: 2,
      title: "Book Your Session",
      description: "Choose the healing modality and session length that feels right for you and select a convenient time.",
      details: "You'll receive a confirmation email with details about your session, what to expect, and any preparation suggestions to help you get the most from our time together. Payment is processed securely through our booking system."
    },
    {
      number: 3,
      title: "Pre-Session Preparation",
      description: "Simple steps to follow before your session to ensure you get the most benefit from our work together.",
      details: "I recommend wearing comfortable clothing, staying hydrated, and setting an intention for your healing. Try to arrive with an open mind and heart, ready to receive. If possible, arrange for some quiet time after your session to integrate the experience."
    },
    {
      number: 4,
      title: "Your Healing Experience",
      description: "Relax and receive as we work with energy to facilitate deep healing and transformation.",
      details: "Each session is unique and tailored to your specific needs in the moment. You'll lie comfortably (fully clothed) as I work with your energy field. Most clients experience deep relaxation, warmth, tingling, emotional release, or insights during our time together."
    },
    {
      number: 5,
      title: "Integration & Follow-Up",
      description: "Guidance on how to integrate your experience and determine your next steps on your healing journey.",
      details: "After your session, I'll share observations and provide personalized recommendations. You'll receive an email with integration practices and self-care suggestions. We'll discuss the potential benefits of follow-up sessions based on your goals and experience."
    }
  ];

  return (
    <section className="py-16 bg-purple-50" id="how-to-begin">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              How to Begin Your Healing Journey
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Taking the first step toward healing is an act of courage and self-love
            </motion.p>
          </div>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`bg-white rounded-xl shadow-sm p-6 transition-all duration-300 ${
                  activeStep === step.number ? "ring-2 ring-purple-300" : ""
                }`}
              >
                <div 
                  className="flex items-start gap-4 cursor-pointer"
                  onClick={() => setActiveStep(activeStep === step.number ? null : step.number)}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center border-2 border-purple-200">
                      <span className="text-xl font-serif font-bold text-purple-800">{step.number}</span>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-serif font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                    
                    {activeStep === step.number && (
                      <motion.div 
                        className="mt-4 pt-4 border-t border-purple-100 text-gray-600"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.details}
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="flex-shrink-0 self-start mt-1">
                    <svg 
                      className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${
                        activeStep === step.number ? "rotate-180" : ""
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p className="text-xl font-serif mb-6">Ready to transform your life?</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg font-medium shadow-md hover:bg-purple-700 transition-colors"
            >
              Schedule Your Free Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 