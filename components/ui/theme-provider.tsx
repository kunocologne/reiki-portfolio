"use client"

import * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"

// Define all possible themes
export type PillarTheme = "default" | "mindset" | "movement" | "nutrition"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: PillarTheme
}

type ThemeProviderState = {
  theme: PillarTheme
  setTheme: (theme: PillarTheme) => void
}

const initialState: ThemeProviderState = {
  theme: "default",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "default",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<PillarTheme>(defaultTheme)

  useEffect(() => {
    const root = document.documentElement
    
    // Remove old theme class
    root.classList.remove("theme-default", "theme-mindset", "theme-movement", "theme-nutrition")
    // Add new theme class
    root.classList.add(`theme-${theme}`)
    
    // Update document body classes for easier styling
    document.body.classList.remove("theme-mindset", "theme-movement", "theme-nutrition")
    
    if (theme !== "default") {
      document.body.classList.add(`theme-${theme}`)
    }

    // Set CSS variables based on theme
    if (theme === "mindset") {
      // Mindset theme (Lavendel)
      root.style.setProperty("--primary", "var(--mindset-primary)")
      root.style.setProperty("--primary-foreground", "#FFFFFF")
      root.style.setProperty("--secondary", "var(--mindset-secondary)")
      root.style.setProperty("--accent", "var(--mindset-accent)")
      root.style.setProperty("--background", "var(--sand-beige)")
    } 
    else if (theme === "movement") {
      // Movement theme (Petrol)
      root.style.setProperty("--primary", "var(--movement-primary)")
      root.style.setProperty("--primary-foreground", "#FFFFFF")
      root.style.setProperty("--secondary", "var(--movement-secondary)")
      root.style.setProperty("--accent", "var(--movement-accent)")
      root.style.setProperty("--background", "var(--sand-beige)")
    } 
    else if (theme === "nutrition") {
      // Nutrition theme (Terrakotta)
      root.style.setProperty("--primary", "var(--nutrition-primary)")
      root.style.setProperty("--primary-foreground", "#FFFFFF")
      root.style.setProperty("--secondary", "var(--nutrition-secondary)")
      root.style.setProperty("--accent", "var(--nutrition-accent)")
      root.style.setProperty("--background", "var(--sand-beige)")
    } 
    else {
      // Default theme
      root.style.setProperty("--primary", "var(--sage-green)")
      root.style.setProperty("--primary-foreground", "#FFFFFF")
      root.style.setProperty("--secondary", "var(--soft-purple)")
      root.style.setProperty("--accent", "var(--amber)")
      root.style.setProperty("--background", "var(--sand-beige)")
    }
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: PillarTheme) => setTheme(theme),
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
} 