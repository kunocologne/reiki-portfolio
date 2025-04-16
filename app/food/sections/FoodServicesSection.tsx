"use client"

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function FoodServicesSection() {
  const [activeTab, setActiveTab] = useState("consultations");

  const tabs = [
    { id: "consultations", label: "Consultations" },
    { id: "products", label: "Products" },
  ];

  return (
    <section id="food-services" className="py-16 md:py-24 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif mb-10 text-center text-terrakotta">Nutrition Services</h2>
        
        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-md bg-cream p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id 
                    ? "bg-terrakotta text-white shadow-sm" 
                    : "hover:bg-terrakotta/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {activeTab === "consultations" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-xl font-serif mb-4 text-terrakotta">Initial Nutrition Assessment</h3>
                <p className="mb-4">A comprehensive 90-minute session to evaluate your current nutrition status, health history, and goals.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check size={18} className="text-terrakotta mt-1 mr-2" />
                    <span>Personalized nutrition evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-terrakotta mt-1 mr-2" />
                    <span>Diet and lifestyle analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-terrakotta mt-1 mr-2" />
                    <span>Initial recommendations</span>
                  </li>
                </ul>
                <p className="font-medium mb-4">€120 / 90 minutes</p>
                <Button variant="nutrition" size="sm" asChild>
                  <Link href="/contact">Book Now</Link>
                </Button>
              </div>
              
              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-xl font-serif mb-4 text-terrakotta">Follow-Up Sessions</h3>
                <p className="mb-4">Regular 45-minute sessions to refine your nutrition plan, track progress, and provide ongoing support.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check size={18} className="text-terrakotta mt-1 mr-2" />
                    <span>Review progress and challenges</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-terrakotta mt-1 mr-2" />
                    <span>Adjust recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-terrakotta mt-1 mr-2" />
                    <span>Ongoing education and support</span>
                  </li>
                </ul>
                <p className="font-medium mb-4">€75 / 45 minutes</p>
                <Button variant="nutrition" size="sm" asChild>
                  <Link href="/contact">Book Now</Link>
                </Button>
              </div>
            </div>
          )}
          
          {activeTab === "products" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-xl font-serif mb-4 text-terrakotta">Seasonal Recipe Collection</h3>
                <p className="mb-4">Digital recipe book with 30+ seasonal, plant-focused recipes and nutrition guidance.</p>
                <p className="font-medium mb-4">€24.95</p>
                <Button variant="nutrition" size="sm" asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
              
              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-xl font-serif mb-4 text-terrakotta">Pantry Reset Guide</h3>
                <p className="mb-4">Comprehensive guide to stocking a nourishing whole-foods pantry with shopping lists.</p>
                <p className="font-medium mb-4">€18.95</p>
                <Button variant="nutrition" size="sm" asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 