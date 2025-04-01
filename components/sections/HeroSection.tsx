"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

type HeroSectionProps = {
  title: string
  highlightText?: string
  highlightColor?: string
  subtitle?: string
  description?: string
  backgroundImage: string
  primaryButtonText?: string
  primaryButtonColor?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonColor?: string
  secondaryButtonHref?: string
}

export function HeroSection({
  title,
  highlightText,
  highlightColor = "#E3A76F",
  subtitle,
  description,
  backgroundImage,
  primaryButtonText,
  primaryButtonColor = "#E3A76F",
  primaryButtonHref = "#",
  secondaryButtonText,
  secondaryButtonColor = "#BFA8D9",
  secondaryButtonHref = "#"
}: HeroSectionProps) {
  const fullTitle = highlightText 
    ? title.replace(highlightText, `<span style="color: ${highlightColor}">${highlightText}</span>`)
    : title;

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f5f2]/90 to-transparent" />
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container relative">
        <div className="max-w-xl bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-lg">
          <h1 
            className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-4"
            dangerouslySetInnerHTML={{ __html: fullTitle }}
          />
          
          {subtitle && (
            <p className="text-xl md:text-2xl font-accent text-foreground/80 mb-4">
              {subtitle}
            </p>
          )}
          
          {description && (
            <p className="text-lg text-foreground/70 max-w-md font-body mb-8">
              {description}
            </p>
          )}
          
          {(primaryButtonText || secondaryButtonText) && (
            <div className="flex flex-wrap gap-4">
              {primaryButtonText && (
                <Button
                  style={{ backgroundColor: primaryButtonColor, color: "white" }}
                  className="hover:opacity-90 text-lg px-8 py-6 font-sans"
                  onClick={() => window.location.href = primaryButtonHref}
                >
                  {primaryButtonText}
                </Button>
              )}
              
              {secondaryButtonText && (
                <Button
                  variant="outline"
                  style={{ borderColor: secondaryButtonColor, color: secondaryButtonColor }}
                  className="hover:bg-opacity-10 text-lg px-8 py-6 font-sans"
                  onClick={() => window.location.href = secondaryButtonHref}
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 