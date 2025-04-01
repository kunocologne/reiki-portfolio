import Image from "next/image"
import { Heart, Sparkles, Waves, Users, Star, Leaf, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Metadata } from "next"
import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Contact Nathanael Mor | Energy Healing & Wellness",
  description: "Connect with Nathanael Mor for holistic healing services, retreat bookings, or culinary inquiries. Reach out for personalized sessions and wellness guidance.",
}

export default function Contact() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F5F2" }}>
      {/* Header */}
      <Navigation activePage="contact" />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Let's <span style={{ color: "#E3A76F" }}>Connect</span>
              </h1>
              <p className="text-lg md:text-xl font-accent text-foreground/80 mb-4">
                Ready to begin your healing journey?
              </p>
              <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto font-body">
                Whether you have questions about my services, want to book a session, 
                or are interested in visiting the Sacred House retreat, I'm here to help 
                guide you on your path to holistic wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 md:py-24 relative" style={{ backgroundColor: "#F8F5F2" }}>
        <div className="absolute left-0 md:left-10 top-10 md:top-20 opacity-10">
          <Image 
            src="/icons/flower-of-life.svg"
            alt="Sacred Geometry"
            width={250}
            height={250}
            className="w-48 h-48 md:w-auto md:h-auto"
          />
        </div>
        <div className="container px-4 sm:px-6">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            {/* Contact Form */}
            <div className="md:col-span-7 bg-white p-6 md:p-10 rounded-2xl shadow-sm">
              <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-body" htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#E3A76F]/20 focus:border-[#E3A76F] transition-all font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-body" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#E3A76F]/20 focus:border-[#E3A76F] transition-all font-body"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium font-body" htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#E3A76F]/20 focus:border-[#E3A76F] transition-all font-body"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="healing">Healing Sessions</option>
                    <option value="retreat">Sacred House Retreat</option>
                    <option value="food">Food & Microgreens</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium font-body" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Your message"
                    className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#E3A76F]/20 focus:border-[#E3A76F] transition-all font-body"
                  />
                </div>

                <Button
                  type="submit"
                  style={{ backgroundColor: "#E3A76F", color: "white" }}
                  className="w-full py-4 text-lg font-sans hover:opacity-90 transition-opacity"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-5 space-y-8">
              <h2 className="text-2xl md:text-4xl font-serif font-bold">Contact Information</h2>
              <p className="font-body text-foreground/70">
                Feel free to reach out through any of these channels, or fill out the form 
                for a personalized response. I typically respond within 24-48 hours.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}
                  >
                    <Mail className="h-5 w-5" style={{ color: "#E3A76F" }} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg">Email</h4>
                    <a 
                      href="mailto:hello@nathanael-mor.com" 
                      className="text-foreground/70 hover:text-[#E3A76F] transition-colors font-body"
                    >
                      hello@nathanael-mor.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}
                  >
                    <Phone className="h-5 w-5" style={{ color: "#E3A76F" }} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg">Phone</h4>
                    <a 
                      href="tel:+1234567890" 
                      className="text-foreground/70 hover:text-[#E3A76F] transition-colors font-body"
                    >
                      (123) 456-7890
                    </a>
                    <p className="text-sm text-foreground/60 font-body mt-1">Available 9am - 5pm, Monday - Friday</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}
                  >
                    <MapPin className="h-5 w-5" style={{ color: "#E3A76F" }} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg">The Sacred House</h4>
                    <p className="text-foreground/70 font-body">123 Serenity Lane, Healing Valley, CA 94123</p>
                    <p className="text-sm text-foreground/60 font-body mt-1">By appointment only</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t" style={{ borderColor: "rgba(227, 167, 111, 0.2)" }}>
                <h4 className="font-serif font-bold text-lg mb-4">Connect Socially</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                    style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" style={{ color: "#E3A76F" }} />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                    style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" style={{ color: "#E3A76F" }} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                    style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" style={{ color: "#E3A76F" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4">Find The Sacred House</h2>
              <p className="text-lg font-accent" style={{ color: "#E3A76F" }}>
                Our peaceful sanctuary awaits
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md aspect-[16/9] relative">
              <Image 
                src="/images/contact/map.jpg"
                alt="Map to Sacred House"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href="https://maps.google.com/?q=Sacred+House,California" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    style={{ backgroundColor: "#E3A76F", color: "white" }}
                    className="hover:opacity-90 font-sans shadow-xl transition-opacity"
                  >
                    Get Directions
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer activePage="contact" />
    </div>
  )
} 