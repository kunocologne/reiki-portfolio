import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";
import HeroSection from "./sections/HeroSection";
import FoodIntroSection from "./sections/FoodIntroSection";
import WhyNutritionSection from "./sections/WhyNutritionSection";
import FoodServicesSection from "./sections/FoodServicesSection";
import FoodJourneySection from "./sections/FoodJourneySection";
import FoodTestimonialsSection from "./sections/FoodTestimonialsSection";
import FoodFaqSection from "./sections/FoodFaqSection";
import FoodCtaSection from "./sections/FoodCtaSection";

export const metadata: Metadata = {
  title: "Holistic Nutrition | Nathanel's Nourishing Food Philosophy",
  description: "Discover the transformative power of conscious nutrition with Nathanel - the third pillar in his holistic wellness approach. Personalized nutrition guidance, workshops, and resources for your wellness journey.",
};

export default function FoodPage() {
  return (
    <MainLayout activePage="food" theme="nutrition">
      <HeroSection />
      <FoodIntroSection />
      <WhyNutritionSection />
      <FoodServicesSection />
      <FoodJourneySection />
      <FoodTestimonialsSection />
      <FoodFaqSection />
      <FoodCtaSection />
    </MainLayout>
  );
} 