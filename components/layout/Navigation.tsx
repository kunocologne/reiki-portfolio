"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

type NavigationProps = {
  activePage?: 'home' | 'healing' | 'sacred-house' | 'food' | 'contact'
}

export function Navigation({ activePage }: NavigationProps) {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle scroll effect for adding shadow to navbar
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when user resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileMenuOpen])

  // Button color is now consistently orange (#CB8563)
  const getButtonBgColor = () => {
    return { backgroundColor: "#CB8563", color: "white" };
  };

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
            {/* Contact Button for all screen sizes */}
            <Link href="/contact">
              <Button 
                style={getButtonBgColor()} 
                className="hover:opacity-90 font-sans text-xs md:text-sm"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
