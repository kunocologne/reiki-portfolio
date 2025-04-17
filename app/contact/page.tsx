import Image from "next/image"
import { Heart, Sparkles, Waves, Users, Star, Leaf, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Metadata } from "next"
import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Contact | Nathanael Mor",
  description: "Get in touch with Nathanael Mor to begin your healing journey or inquire about services and retreats.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-sand-beige">
      {/* Header */}
      <Navigation activePage="contact" />

      {/* Main content */}
      <main>
        {/* Hero Section - Simple for Contact Page */}
        <section className="py-20 bg-gradient-to-r from-soft-purple/20 to-sage-green/20">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Let's Connect</h1>
            <p className="text-xl max-w-3xl mx-auto text-soft-purple">
              I'd love to hear from you. Reach out to discuss how we can work together on your healing journey.
            </p>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16 container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-serif font-semibold mb-6 text-sage-green">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-sage-green/10 p-3 rounded-full">
                    <Mail className="text-sage-green h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">nathanaelmor@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-soft-purple/10 p-3 rounded-full">
                    <Phone className="text-soft-purple h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">+351 915 274 280</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-serif font-medium mb-4 text-sage-green">Follow Me</h3>
                <div className="flex space-x-4">
                  <Link href="https://instagram.com" className="bg-white p-3 rounded-full shadow-sm hover:shadow transition">
                    <Instagram className="h-5 w-5 text-soft-purple" />
                  </Link>
                  <Link href="https://facebook.com" className="bg-white p-3 rounded-full shadow-sm hover:shadow transition">
                    <Facebook className="h-5 w-5 text-soft-purple" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-serif font-semibold mb-6 text-soft-purple">Send a Message</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sage-green focus:border-sage-green"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sage-green focus:border-sage-green"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sage-green focus:border-sage-green"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sage-green focus:border-sage-green"
                    required
                  ></textarea>
                </div>
                
                <Button variant="default" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  )
} 