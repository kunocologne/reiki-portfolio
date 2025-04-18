// This file remains a server component for metadata
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import CtaSection from "./sections/CtaSection";
import ProjectsSection from "./sections/ProjectsSection";
import TriangleConceptSection from "./sections/TriangleConceptSection";
import { Metadata } from "next";
import HomeContent from "./HomeContent";

// Metadata needs to be exported from a server component
export const metadata: Metadata = {
  title: "Nathanael Mor | Holistic Wellness Expert",
  description: "Discover a balanced approach to wellness through mindset, movement, and nutrition with Nathanael Mor.",
};

export default function Home() {
  return <HomeContent />;
}
