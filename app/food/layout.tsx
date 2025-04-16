import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food | Nathanel",
  description: "Discover the power of nutrition in your healing journey with our plant-based, organic approach to food as medicine.",
};

export default function FoodLayout({ children }: { children: React.ReactNode }) {
  return children;
} 