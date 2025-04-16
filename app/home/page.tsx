import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import CtaSection from "./sections/CtaSection";
import ProjectsSection from "./sections/ProjectsSection";
import TriangleConceptSection from "./sections/TriangleConceptSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Nathanael Mor",
  description: "Discover Nathanael Mor's holistic approach to wellness through mindset, movement, and nutrition."
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TriangleConceptSection />
      <ProjectsSection />
      <CtaSection />
    </>
  );
}
