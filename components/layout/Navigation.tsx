"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type NavigationProps = {
  activePage?: 'home' | 'healing' | 'sacred-house' | 'food' | 'contact'
}

export function Navigation({ activePage = 'home' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b"
      style={{ borderColor: "#F8F5F2" }}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icons/flower-of-life.svg"
            alt="Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-2xl font-serif font-bold italic tracking-wide" style={{ fontStyle: 'italic', letterSpacing: '0.05em' }}>Nathanael Mor</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="/" 
            className={`text-foreground/80 hover:text-brand-purple transition-colors font-body ${
              activePage === 'home' ? 'font-bold' : ''
            }`}
            style={activePage === 'home' ? { color: "#E3A76F" } : {}}
          >
            Home
          </Link>
          <Link 
            href="/healing" 
            className={`text-foreground/80 hover:text-brand-purple transition-colors font-body ${
              activePage === 'healing' ? 'font-bold' : ''
            }`}
            style={activePage === 'healing' ? { color: "#E3A76F" } : {}}
          >
            Healing
          </Link>
          <Link 
            href="/sacred-house" 
            className={`text-foreground/80 hover:text-brand-purple transition-colors font-body ${
              activePage === 'sacred-house' ? 'font-bold' : ''
            }`}
            style={activePage === 'sacred-house' ? { color: "#E3A76F" } : {}}
          >
            Sacred House
          </Link>
          <Link 
            href="/food" 
            className={`text-foreground/80 hover:text-brand-purple transition-colors font-body ${
              activePage === 'food' ? 'font-bold' : ''
            }`}
            style={activePage === 'food' ? { color: "#E3A76F" } : {}}
          >
            Food
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Link href="/contact">
            <Button style={{ backgroundColor: "#E3A76F", color: "white" }} className="hidden md:flex hover:opacity-90 font-sans">
              Get in Touch
            </Button>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-t" style={{ borderColor: "#F8F5F2" }}>
          <nav className="container py-4 flex flex-col space-y-4">
            <Link 
              href="/" 
              className={`px-4 py-2 hover:bg-orange-50 rounded-md transition-colors font-body ${
                activePage === 'home' ? 'bg-orange-50 font-semibold' : ''
              }`}
              style={activePage === 'home' ? { color: "#E3A76F" } : {}}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/healing" 
              className={`px-4 py-2 hover:bg-orange-50 rounded-md transition-colors font-body ${
                activePage === 'healing' ? 'bg-orange-50 font-semibold' : ''
              }`}
              style={activePage === 'healing' ? { color: "#E3A76F" } : {}}
              onClick={() => setMobileMenuOpen(false)}
            >
              Healing
            </Link>
            <Link 
              href="/sacred-house" 
              className={`px-4 py-2 hover:bg-orange-50 rounded-md transition-colors font-body ${
                activePage === 'sacred-house' ? 'bg-orange-50 font-semibold' : ''
              }`}
              style={activePage === 'sacred-house' ? { color: "#E3A76F" } : {}}
              onClick={() => setMobileMenuOpen(false)}
            >
              Sacred House
            </Link>
            <Link 
              href="/food" 
              className={`px-4 py-2 hover:bg-orange-50 rounded-md transition-colors font-body ${
                activePage === 'food' ? 'bg-orange-50 font-semibold' : ''
              }`}
              style={activePage === 'food' ? { color: "#E3A76F" } : {}}
              onClick={() => setMobileMenuOpen(false)}
            >
              Food
            </Link>
            <Link 
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button 
                style={{ backgroundColor: "#E3A76F", color: "white" }} 
                className="mt-2 w-full hover:opacity-90 font-sans"
              >
                Get in Touch
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 