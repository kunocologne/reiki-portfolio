"use client"

import React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Twitter } from "lucide-react"

type FooterProps = {
  activePage?: 'home' | 'healing' | 'sacred-house' | 'food' | 'contact'
}

export function Footer({ activePage }: FooterProps) {
  // Get the right color based on the active page
  const getActiveColor = () => {
    switch (activePage) {
      case 'healing':
        return '#BFA8D9' // Purple for healing
      case 'sacred-house':
        return '#A8C3A7' // Green for sacred house
      case 'food':
        return '#E3A76F' // Orange for food
      case 'contact':
        return '#E3A76F' // Orange for contact
      default:
        return '#E3A76F' // Default orange
    }
  }

  const activeColor = getActiveColor()
  
  // Simplified rgba background styles
  const bgOpacity02 = { backgroundColor: `${activeColor}33` } // 20% opacity
  const borderOpacity03 = { borderColor: `${activeColor}4D` } // 30% opacity

  return (
    <footer className="bg-white border-t py-8 md:py-12" style={borderOpacity03}>
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="flex items-center gap-2 mb-6 md:mb-0">
            <span className="text-xl md:text-2xl font-serif tracking-wide">Nathanael Mor</span>
          </Link>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link 
                href="/" 
                className={`text-foreground/80 hover:text-foreground transition-colors font-body text-sm md:text-base ${
                  activePage === 'home' ? 'font-bold' : ''
                }`}
                style={activePage === 'home' ? { color: activeColor } : {}}
              >
                Home
              </Link>
              <Link 
                href="/healing" 
                className={`text-foreground/80 hover:text-foreground transition-colors font-body text-sm md:text-base ${
                  activePage === 'healing' ? 'font-bold' : ''
                }`}
                style={activePage === 'healing' ? { color: activeColor } : {}}
              >
                Healing
              </Link>
              <Link 
                href="/sacred-house" 
                className={`text-foreground/80 hover:text-foreground transition-colors font-body text-sm md:text-base ${
                  activePage === 'sacred-house' ? 'font-bold' : ''
                }`}
                style={activePage === 'sacred-house' ? { color: activeColor } : {}}
              >
                Sacred House
              </Link>
              <Link 
                href="/food" 
                className={`text-foreground/80 hover:text-foreground transition-colors font-body text-sm md:text-base ${
                  activePage === 'food' ? 'font-bold' : ''
                }`}
                style={activePage === 'food' ? { color: activeColor } : {}}
              >
                Food
              </Link>
            </nav>

            <div className="flex gap-3 md:gap-4 mt-6 md:mt-0">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110" 
                style={bgOpacity02}
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 md:h-5 md:w-5" style={{ color: activeColor }} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110" 
                style={bgOpacity02}
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 md:h-5 md:w-5" style={{ color: activeColor }} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110" 
                style={bgOpacity02}
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 md:h-5 md:w-5" style={{ color: activeColor }} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-6 md:mt-8 pt-6 md:pt-8 border-t text-center text-xs md:text-sm text-foreground/60 font-body"
          style={borderOpacity03}
        >
          <p>© {new Date().getFullYear()} Nathanael Mor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 