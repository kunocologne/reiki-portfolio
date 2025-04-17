"use client";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import TriangleConceptSection from "./sections/TriangleConceptSection";
import ProjectsSection from "./sections/ProjectsSection";
import ScrollProgress from "../components/ScrollProgress";
import SectionTransition from "../components/SectionTransition";
import BackToTop from "../components/BackToTop";
import CtaSection from "./sections/CtaSection";

export default function HomeContent() {
  return (
    <main className="overflow-hidden">
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
        <SectionTransition fromColor="white" toColor="#E3DAC2" />
        <TriangleConceptSection />
      </section>
      
      {/* Projects Section */}
      <section className="relative">
        <SectionTransition fromColor="#E3DAC2" toColor="white" />
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