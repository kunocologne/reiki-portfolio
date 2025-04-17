"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

type NavigationProps = {
  activePage?: 'home' | 'healing' | 'sacred-house' | 'food' | 'contact'
}

export function Navigation({ activePage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  // Handle scroll effect for adding shadow to navbar
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        return '#A8A29E' // Default stone color
    }
  }

  const getButtonBgColor = () => {
    switch (activePage) {
      case 'healing':
        return 'bg-violet-500/20 hover:bg-violet-500/30'
      case 'sacred-house':
        return 'bg-green-500/20 hover:bg-green-500/30'
      case 'food':
        return 'bg-amber-500/20 hover:bg-amber-500/30'
      case 'contact':
        return 'bg-amber-500/20 hover:bg-amber-500/30'
      default:
        return 'bg-stone-500/20 hover:bg-stone-500/30'
    }
  }

  const activeColor = getActiveColor()
  const buttonBgColor = getButtonBgColor()

  // Simplified rgba background styles
  const bgOpacity02 = { backgroundColor: `${activeColor}33` } // 20% opacity
  const bgOpacity01 = { backgroundColor: `${activeColor}1A` } // 10% opacity

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-shadow duration-300',
        hasScrolled ? 'shadow-md bg-white/90 backdrop-blur-sm' : 'bg-white'
      )}
    >
      <div className="container px-4 sm:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-serif tracking-wide">Nathanael Mor</span>
          </Link>

          <div className="flex items-center gap-4">
            <Button 
              asChild 
              variant="outline" 
              size="sm"
              className={cn(
                "rounded-full font-medium transition-all duration-300",
                buttonBgColor
              )}
              style={{ 
                borderColor: activeColor,
                color: activeColor
              }}
            >
              <Link href="/contact">
                Contact
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
