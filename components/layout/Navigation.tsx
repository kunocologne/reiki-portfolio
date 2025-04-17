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

  // Get button color based on the active page
  const getButtonBgColor = () => {
    switch (activePage) {
      case 'healing':
        return { backgroundColor: "#BFA8D9", color: "white" };
      case 'sacred-house':
        return { backgroundColor: "#A8C3A7", color: "white" };
      case 'food':
        return { backgroundColor: "#E3A76F", color: "white" };
      case 'contact':
        return { backgroundColor: "#E3A76F", color: "white" };
      default:
        return { backgroundColor: "#E8D7B7", color: "white" };
    }
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
            {/* Desktop Contact Button */}
            <div className="hidden md:block">
              <Link href="/contact">
                <Button 
                  style={getButtonBgColor()} 
                  className="hover:opacity-90 font-sans text-sm"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-b shadow-sm" style={{ borderColor: "#f8f8f8" }}>
            <div className="py-4 px-4">
              <Link 
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button 
                  style={getButtonBgColor()} 
                  className="w-full hover:opacity-90 font-sans text-sm"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
