import { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout"
import SacredHouseHeroSection from "./sections/SacredHouseHeroSection";
import MovementIntroSection from "./sections/MovementIntroSection";
import WhyItWorksSection from "./sections/WhyItWorksSection";
import MovementJourneySection from "./sections/MovementJourneySection";
import MovementServicesSection from "./sections/MovementServicesSection";
import MovementTestimonialsSection from "./sections/MovementTestimonialsSection";
import MovementFaqSection from "./sections/MovementFaqSection";
import MovementCtaSection from "./sections/MovementCtaSection";

export const metadata: Metadata = {
  title: "Sacred House | Nathanel",
  description: "Experience transformative movement practices at Sacred House with Nathanel, focusing on dance, conscious movement, and embodied wisdom."
};

export default function SacredHousePage() {
  return (
    <MainLayout activePage="sacred-house" theme="movement">
      <SacredHouseHeroSection />
      <MovementIntroSection />
      <WhyItWorksSection />
      <MovementJourneySection />
      <MovementServicesSection />
      <MovementTestimonialsSection />
      <MovementFaqSection />
      <MovementCtaSection />
    </MainLayout>
  );
} 