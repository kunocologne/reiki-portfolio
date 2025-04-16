import { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import AwakenHeroSection from "./sections/AwakenHeroSection";
import WhatIsHealingSection from "./sections/WhatIsHealingSection";
import HealingMethodsSection from "./sections/HealingMethodsSection";
import BeginJourneySection from "./sections/BeginJourneySection";
import WhyHealingSection from "./sections/WhyHealingSection";
import AwakenSection from "./sections/AwakenSection";
import FaqSection from "./sections/FaqSection";
import HealingTestimonialsSection from "./sections/HealingTestimonialsSection";

export const metadata: Metadata = {
  title: "Healing | Nathanel",
  description: "Experience transformative holistic healing with Nathanel, focusing on energy work, reiki, and mindfulness for mind-body wellness."
};

export default function HealingPage() {
  return (
    <MainLayout activePage="healing" theme="mindset">
      <AwakenHeroSection />
      <WhatIsHealingSection />
      <WhyHealingSection />
      <BeginJourneySection />
      <HealingMethodsSection />
      <HealingTestimonialsSection />
      <FaqSection />
      <AwakenSection />
    </MainLayout>
  );
}