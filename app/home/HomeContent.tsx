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
    <main className="min-h-screen bg-[#FAFAFA] overflow-hidden">
      <ScrollProgress />
      <BackToTop />
      
      {/* Hero Section */}
      <section className="relative">
        <HeroSection />
      </section>
      
      {/* About Section */}
      <section className="relative">
        <SectionTransition fromColor="#E3DAC2" toColor="white" />
        <AboutSection />
      </section>
      
      {/* Triangle Concept Section */}
      <section className="relative">
        <SectionTransition fromColor="white" toColor="#e3dac2" />
        <TriangleConceptSection />
      </section>
      
      {/* Projects Section */}
      <section className="relative">
        <SectionTransition fromColor="#e3dac2" toColor="white" />
        <ProjectsSection />
      </section>
      
      {/* CTA Section */}
      <section className="relative">
        <SectionTransition fromColor="white" toColor="#E3DAC2" />
        <CtaSection />
      </section>
    </main>
  );
} 