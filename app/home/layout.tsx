import { Metadata } from "next";
import { MainLayout } from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  title: "Nathanel | Healing, Retreats & Holistic Nutrition",
  description: "Discover holistic transformation through energy healing, wellness retreats, and nutritional guidance. Connect with your true self and unlock your potential.",
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout activePage="home" theme="default">
      {children}
    </MainLayout>
  );
} 