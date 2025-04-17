"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ui/theme-provider"

type NavigationProps = {
  activePage?: 'home' | 'healing' | 'sacred-house' | 'food' | 'contact'
}

export function Navigation({ activePage = 'home' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  
  // Handle scroll event for adding shadow to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when user resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
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
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b transition-all duration-200 ${
        scrolled ? 'shadow-md' : ''
      }`}
      style={{ borderColor: "var(--color-secondary)" }}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 relative z-20">
          <span className="text-xl md:text-2xl font-serif tracking-wide">Nathanael Mor</span>
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
        <div className="flex items-center gap-4 relative z-20">
          <Link href="/contact">
            <Button style={getButtonBgColor()} className="hidden md:flex hover:opacity-90 font-sans">
              Get in Touch
            </Button>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-gray-100 active:bg-gray-200"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay - separate from the content */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-10 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed right-0 top-0 bottom-0 w-[80%] max-w-xs bg-white shadow-xl z-40 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-20 pb-6 h-full overflow-y-auto">
          <nav className="container flex flex-col space-y-2">
            <Link 
              href="/" 
              className={`px-4 py-4 hover:bg-orange-50 rounded-md transition-colors font-body ${
                activePage === 'home' ? 'bg-orange-50 font-semibold' : ''
              }`}
              style={activePage === 'home' ? getActiveLinkColor() : {}}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/healing" 
              className={`px-4 py-4 hover:bg-orange-50 rounded-md transition-colors font-body ${
                activePage === 'healing' ? 'bg-orange-50 font-semibold' : ''
              }`}
              style={activePage === 'healing' ? getActiveLinkColor() : {}}
              onClick={() => setMobileMenuOpen(false)}
            >
              Healing
            </Link>
            <Link 
              href="/sacred-house" 
              className={`px-4 py-4 hover:bg-orange-50 rounded-md transition-colors font-body ${
                activePage === 'sacred-house' ? 'bg-orange-50 font-semibold' : ''
              }`}
              style={activePage === 'sacred-house' ? getActiveLinkColor() : {}}
              onClick={() => setMobileMenuOpen(false)}
            >
              Sacred-House
            </Link>
            <Link 
              href="/food" 
              className={`px-4 py-4 hover:bg-orange-50 rounded-md transition-colors font-body ${
                activePage === 'food' ? 'bg-orange-50 font-semibold' : ''
              }`}
              style={activePage === 'food' ? getActiveLinkColor() : {}}
              onClick={() => setMobileMenuOpen(false)}
            >
              Food
            </Link>
            <div className="px-4 pt-4">
              <Link 
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full"
              >
                <Button 
                  style={getButtonBgColor()} 
                  className="w-full hover:opacity-90 font-sans py-4"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
