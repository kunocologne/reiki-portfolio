"use client";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import CtaSection from "./sections/CtaSection";
import ProjectsSection from "./sections/ProjectsSection";
import TriangleConceptSection from "./sections/TriangleConceptSection";
import ScrollProgress from "../components/ScrollProgress";
import SectionTransition from "../components/SectionTransition";
import BackToTop from "../components/BackToTop";

export default function HomeContent() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <ScrollProgress />
      <BackToTop />
      
      {/* Main content */}
      <HeroSection />
      
      <div className="relative">
        <SectionTransition fromColor="transparent" toColor="white" />
        <AboutSection />
      </div>
      
      <div className="relative">
        <SectionTransition fromColor="white" toColor="#F5F3EE" />
        <TriangleConceptSection />
      </div>
      
      <div className="relative">
        <SectionTransition fromColor="#F5F3EE" toColor="white" />
        <ProjectsSection />
      </div>
      
      <div className="relative">
        <SectionTransition fromColor="transparent" toColor="#E3DAC2" />
        <CtaSection />
      </div>
    </main>
  );
} 