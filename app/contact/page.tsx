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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation activePage="contact" />

      {/* Main content */}
      <main>
        {/* Hero Section - Simple for Contact Page */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#e3dac2]">
          <div className="container mx-auto px-4 md:px-6 lg:px-10 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-bold mb-4 sm:mb-6">Let's Connect</h1>
            <div className="w-12 sm:w-16 md:w-24 h-1 bg-[#CB8563] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#555555] font-['Lora']">
              I'd love to hear from you. Reach out to discuss how we can work together on your wellness journey.
            </p>
          </div>
        </section>
        
        {/* Contact Information Section */}
        <section className="py-12 sm:py-16 md:py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-10">
            <div className="max-w-2xl mx-auto">
              {/* Contact Information */}
              <div className="flex flex-col gap-6 sm:gap-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#333333] mb-2 text-center">
                  Get In Touch
                </h2>
                <p className="text-base sm:text-lg font-['Lora'] text-[#555555] mb-4 sm:mb-6 text-center">
                  I'm here to help you on your journey to wellness. Feel free to reach out with any questions 
                  or to schedule a consultation.
                </p>
                
                <div className="space-y-4 sm:space-y-6">
                  {/* Email Box */}
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 transition-all hover:shadow-xl">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
                      <div className="bg-[#E3A76F]/10 p-2 sm:p-3 rounded-full">
                        <Mail className="text-[#E3A76F] h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="flex flex-col items-center sm:items-start">
                        <h3 className="font-['Playfair_Display'] text-lg sm:text-xl font-medium mb-1">Email</h3>
                        <p className="text-[#555555] font-['Lora'] text-sm sm:text-base">nathanaelmor@gmail.com</p>
                        <a 
                          href="mailto:nathanaelmor@gmail.com" 
                          className="inline-block mt-2 text-[#CB8563] font-medium hover:text-[#b77857] transition-colors font-['Lora'] text-sm sm:text-base"
                        >
                          Send an email &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* WhatsApp Box */}
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 transition-all hover:shadow-xl">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
                      <div className="bg-[#25D366]/10 p-2 sm:p-3 rounded-full">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 sm:h-6 sm:w-6" 
                          fill="#25D366" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      <div className="flex flex-col items-center sm:items-start">
                        <h3 className="font-['Playfair_Display'] text-lg sm:text-xl font-medium mb-1">WhatsApp</h3>
                        <p className="text-[#555555] font-['Lora'] text-sm sm:text-base">+351 915 274 2800</p>
                        <a 
                          href="https://wa.me/351915274280" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-[#25D366] font-medium hover:text-[#1ea855] transition-colors font-['Lora'] text-sm sm:text-base"
                        >
                          Send a message &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer component */}
      <Footer activePage="contact" />
    </div>
  )
} 