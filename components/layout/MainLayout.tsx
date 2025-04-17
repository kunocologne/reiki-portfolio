"use client"

import { ReactNode } from "react"
import { Navigation } from "./Navigation"
import { Footer } from "./Footer"
import { ThemeProvider, PillarTheme } from "@/components/ui/theme-provider"

interface MainLayoutProps {
  children: ReactNode
  activePage?: 'home' | 'healing' | 'sacred-house' | 'food' | 'contact'
  theme?: PillarTheme
}

export function MainLayout({
  children,
  activePage = 'home',
  theme = 'default'
}: MainLayoutProps) {
  // Map pages to their corresponding pillar themes
  const getPageTheme = (): PillarTheme => {
    switch(activePage) {
      case 'healing':
        return 'mindset'; // Healing page uses Mindset colors
      case 'food':
        return 'nutrition'; // Food page uses Nutrition colors
      case 'sacred-house':
        return 'movement'; // Sacred House page uses Movement colors
      default:
        return theme;
    }
  };

  return (
    <ThemeProvider defaultTheme={getPageTheme()}>
      <div className="min-h-screen flex flex-col overflow-x-hidden" style={{ backgroundColor: "var(--sand-beige)" }}>
        {/* Navigation */}
        <Navigation activePage={activePage} />
        
        {/* Main Content */}
        <main className="flex-grow overflow-x-hidden">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  )
} 