"use client"

import Link from "next/link"

type FooterProps = {
  activePage?: 'home' | 'healing' | 'sacred-house' | 'food' | 'contact'
}

export function Footer({ activePage }: FooterProps) {
  // Get active color based on page
  const getActiveColor = (page: string) => {
    if (activePage === page) {
      switch(page) {
        case 'healing':
          return { color: "var(--mindset-primary)" };
        case 'sacred-house':
          return { color: "var(--movement-primary)" };
        case 'food':
          return { color: "var(--nutrition-primary)" };
        case 'contact':
          return { color: "var(--nutrition-primary)" };
        default:
          return { color: "var(--color-primary)" };
      }
    }
    return {};
  };

  return (
    <footer className="bg-stone-50 py-8 border-t" style={{ borderColor: "var(--color-secondary)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href="/" className="font-serif text-xl tracking-wide">
              Nathanael Mor
            </Link>
          </div>
          
          {/* Copyright */}
          <div className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Nathanael Mor. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
} 