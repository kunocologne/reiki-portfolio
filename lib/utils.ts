import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { PillarTheme } from "@/components/ui/theme-provider"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Map pages to their pillar themes
export const pageToThemeMap = {
  'home': 'default',
  'healing': 'mindset',
  'food': 'nutrition',
  'sacred-house': 'sacredHouse',
  'contact': 'default'
} as const

// Get color variables for a specific theme or pillar
export function getThemeColors(theme: PillarTheme) {
  switch (theme) {
    case "nutrition": // Food page
      return {
        primary: "var(--nutrition-primary)",
        secondary: "var(--nutrition-secondary)",
        accent: "var(--nutrition-accent)",
        text: "var(--text-primary)",
        background: "var(--sand-beige)",
      }
    case "mindset": // Healing page
      return {
        primary: "var(--mindset-primary)",
        secondary: "var(--mindset-secondary)",
        accent: "var(--mindset-accent)", 
        text: "var(--text-primary)",
        background: "var(--soft-purple)",
      }
    case "sacredHouse": // Sacred House page
      return {
        primary: "var(--sacred-house-primary)",
        secondary: "var(--sacred-house-secondary)",
        accent: "var(--sacred-house-accent)",
        text: "var(--text-primary)",
        background: "var(--amber)",
      }
    default: // Home page
      return {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        text: "var(--text-primary)",
        background: "var(--sage-green)",
      }
  }
}

// Get color classes for a specific theme or pillar
export function getThemeClasses(theme: PillarTheme) {
  switch (theme) {
    case "nutrition": // Food page
      return {
        primary: "text-nutrition-primary",
        background: "bg-nutrition-primary",
        border: "border-nutrition-primary",
        hover: "hover:bg-nutrition-secondary",
      }
    case "mindset": // Healing page
      return {
        primary: "text-mindset-primary",
        background: "bg-mindset-primary",
        border: "border-mindset-primary",
        hover: "hover:bg-mindset-secondary",
      }
    case "sacredHouse": // Sacred House page
      return {
        primary: "text-sacred-house-primary",
        background: "bg-sacred-house-primary",
        border: "border-sacred-house-primary",
        hover: "hover:bg-sacred-house-secondary",
      }
    default: // Home page
      return {
        primary: "text-primary",
        background: "bg-primary",
        border: "border-primary", 
        hover: "hover:bg-primary/90",
      }
  }
}
