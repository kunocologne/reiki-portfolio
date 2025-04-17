import Image from "next/image"
import { Heart, Sparkles, Waves, Users, Star, Leaf, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Metadata } from "next"
import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import FormSection from "./sections/FormSection"

export const metadata: Metadata = {
  title: "Contact | Nathanael Mor",
  description: "Get in touch with Nathanael Mor to begin your healing journey or inquire about services and retreats.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation activePage="contact" />

      {/* Main content */}
      <main>
        {/* Hero Section - Simple for Contact Page */}
        <section className="py-20 bg-[#e3dac2]">
          <div className="container mx-auto px-4 md:px-6 lg:px-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-bold mb-6">Let's Connect</h1>
            <div className="w-16 md:w-24 h-1 bg-[#CB8563] mx-auto mb-6"></div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#555555] font-['Lora']">
              I'd love to hear from you. Reach out to discuss how we can work together on your wellness journey.
            </p>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <FormSection />
      </main>

      {/* Footer component */}
      <Footer activePage="contact" />
    </div>
  )
} 