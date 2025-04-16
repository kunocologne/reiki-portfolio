"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ui/theme-provider"

type NavigationProps = {
  activePage?: 'home' | 'healing' | 'sacred-house' | 'food' | 'contact'
}

export function Navigation({ activePage = 'home' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  
  // Get pillar-specific colors
  const getActiveLinkColor = () => {
    switch(activePage) {
      case 'healing':
        return { color: "var(--mindset-primary)" };
      case 'food':
        return { color: "var(--nutrition-primary)" };
      case 'sacred-house':
        return { color: "var(--movement-primary)" };
      default:
        return { color: "var(--color-primary)" };
    }
  };
  
  const getButtonBgColor = () => {
    switch(activePage) {
      case 'healing':
        return { backgroundColor: "var(--mindset-primary)", color: "white" };
      case 'food':
        return { backgroundColor: "var(--nutrition-primary)", color: "white" };
      case 'sacred-house':
        return { backgroundColor: "var(--movement-primary)", color: "white" };
      default:
        return { backgroundColor: "var(--color-primary)", color: "white" };
    }
  };

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b"
      style={{ borderColor: "var(--color-secondary)" }}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-serif tracking-wide">Nathanael Mor</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="/" 
            className={`text-foreground/80 hover:text-brand-purple transition-colors font-body ${
              activePage === 'home' ? 'font-bold' : ''
            }`}
            style={activePage === 'home' ? getActiveLinkColor() : {}}
          >
            Home
          </Link>
          <Link 
            href="/healing" 
            className={`text-foreground/80 hover:text-brand-purple transition-colors font-body ${
              activePage === 'healing' ? 'font-bold' : ''
            }`}
            style={activePage === 'healing' ? getActiveLinkColor() : {}}
          >
            Healing
          </Link>
          <Link 
            href="/sacred-house" 
            className={`text-foreground/80 hover:text-brand-purple transition-colors font-body ${
              activePage === 'sacred-house' ? 'font-bold' : ''
            }`}
            style={activePage === 'sacred-house' ? getActiveLinkColor() : {}}
          >
            Sacred-House
          </Link>
          <Link 
            href="/food" 
            className={`text-foreground/80 hover:text-brand-purple transition-colors font-body ${
              activePage === 'food' ? 'font-bold' : ''
            }`}
            style={activePage === 'food' ? getActiveLinkColor() : {}}
          >
            Food
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Link href="/contact">
            <Button style={getButtonBgColor()} className="hidden md:flex hover:opacity-90 font-sans">
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
        <div className="md:hidden bg-white border-b border-t" style={{ borderColor: "var(--color-secondary)" }}>
          <nav className="container py-4 flex flex-col space-y-4">
            <Link 
              href="/" 
              className={`px-4 py-2 hover:bg-orange-50 rounded-md transition-colors font-body ${
                activePage === 'home' ? 'bg-orange-50 font-semibold' : ''
              }`}
              style={activePage === 'home' ? getActiveLinkColor() : {}}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/healing" 
              className={`px-4 py-2 hover:bg-orange-50 rounded-md transition-colors font-body ${
                activePage === 'healing' ? 'bg-orange-50 font-semibold' : ''
              }`}
              style={activePage === 'healing' ? getActiveLinkColor() : {}}
              onClick={() => setMobileMenuOpen(false)}
            >
              Healing
            </Link>
            <Link 
              href="/sacred-house" 
              className={`px-4 py-2 hover:bg-orange-50 rounded-md transition-colors font-body ${
                activePage === 'sacred-house' ? 'bg-orange-50 font-semibold' : ''
              }`}
              style={activePage === 'sacred-house' ? getActiveLinkColor() : {}}
              onClick={() => setMobileMenuOpen(false)}
            >
              Sacred-House
            </Link>
            <Link 
              href="/food" 
              className={`px-4 py-2 hover:bg-orange-50 rounded-md transition-colors font-body ${
                activePage === 'food' ? 'bg-orange-50 font-semibold' : ''
              }`}
              style={activePage === 'food' ? getActiveLinkColor() : {}}
              onClick={() => setMobileMenuOpen(false)}
            >
              Food
            </Link>
            <Link 
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button 
                style={getButtonBgColor()} 
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
