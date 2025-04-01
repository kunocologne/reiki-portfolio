import Image from "next/image"
import { Heart, Sparkles, Waves, Users, Star, Leaf, Calendar, Home, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Metadata } from "next"
import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"

export const metadata: Metadata = {
  title: "The Sacred House | Nathanael Mor Transformative Retreat Sanctuary",
  description: "Experience deep healing and renewal at our Sacred House retreat center. Join immersive workshops, weekend getaways, and transformative experiences in a supportive community.",
}

export default function SacredHouse() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F5F2" }}>
      {/* Header */}
      <Navigation activePage="sacred-house" />

      {/* Hero Section */}
      <HeroSection 
        title="The Sacred House"
        highlightText="Sacred"
        highlightColor="#A8C3A7"
        subtitle="A sanctuary for healing, growth, and connection"
        description="Experience profound transformation in our thoughtfully designed retreat space. Disconnect from daily stress and reconnect with your authentic self in a supportive community."
        backgroundImage="/images/sacred-house/retreat-1.jpg"
        primaryButtonText="Book a Retreat"
        primaryButtonColor="#A8C3A7"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Events"
        secondaryButtonColor="#BFA8D9"
        secondaryButtonHref="#retreat-offerings"
      />

      {/* About Sacred House Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="absolute right-10 top-20 opacity-10">
          <Image 
            src="/icons/metatron-cube.svg"
            alt="Sacred Geometry"
            width={300}
            height={300}
          />
        </div>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Our Sacred Space</h2>
            <p className="text-xl font-accent mb-8" style={{ color: "#A8C3A7" }}>
              A thoughtfully designed retreat center for collective healing
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/sacred-house/retreat-2.jpg" 
                  alt="Sacred House Interior" 
                  width={800} 
                  height={600}
                  className="object-cover w-full h-full" 
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-1/2 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <div className="aspect-square">
                  <Image 
                    src="/images/sacred-house/retreat-4.jpg" 
                    alt="Sacred House Detail" 
                    width={300} 
                    height={300}
                    className="object-cover w-full h-full" 
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-5 space-y-8 mt-16 md:mt-0">
              <p className="font-body text-lg">
                The Sacred House is more than just a retreat venue—it's a living sanctuary 
                designed to facilitate deep healing and transformation. Every aspect of our 
                space has been created with intention, from the natural building materials to 
                the sacred geometry integrated throughout the architecture.
              </p>

              <p className="font-body text-lg">
                Our property offers both indoor and outdoor spaces for practice, reflection, 
                and connection with nature. We've created an environment where energetic 
                work is supported by thoughtful design and attention to detail.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: "rgba(168, 195, 167, 0.1)" }}>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: "rgba(168, 195, 167, 0.2)" }}
                  >
                    <Home className="h-6 w-6" style={{ color: "#A8C3A7" }} />
                  </div>
                  <h4 className="font-serif font-bold">Accommodations</h4>
                </div>

                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: "rgba(191, 168, 217, 0.1)" }}>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}
                  >
                    <Sparkles className="h-6 w-6" style={{ color: "#BFA8D9" }} />
                  </div>
                  <h4 className="font-serif font-bold">Healing Spaces</h4>
                </div>

                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: "rgba(227, 167, 111, 0.1)" }}>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}
                  >
                    <Coffee className="h-6 w-6" style={{ color: "#E3A76F" }} />
                  </div>
                  <h4 className="font-serif font-bold">Organic Kitchen</h4>
                </div>

                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: "rgba(197, 225, 230, 0.1)" }}>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: "rgba(197, 225, 230, 0.2)" }}
                  >
                    <Leaf className="h-6 w-6" style={{ color: "#C5E1E6" }} />
                  </div>
                  <h4 className="font-serif font-bold">Gardens</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat Offerings Section */}
      <section id="retreat-offerings" className="py-24 relative" style={{ backgroundColor: "rgba(168, 195, 167, 0.1)" }}>
        <div className="absolute left-10 bottom-20 opacity-10">
          <Image 
            src="/icons/flower-of-life.svg"
            alt="Sacred Geometry"
            width={400}
            height={400}
          />
        </div>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Transformative Experiences</h2>
            <p className="text-xl font-accent mb-6" style={{ color: "#A8C3A7" }}>
              Curated retreats to nurture your mind, body, and spirit
            </p>
            <p className="max-w-2xl mx-auto text-foreground/70 font-body">
              Join us for immersive experiences designed to facilitate deep healing, 
              personal growth, and spiritual connection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Weekend Retreats Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow transform hover:-translate-y-2 duration-300">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/sacred-house/retreat-3.jpg"
                  alt="Weekend Retreats"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full" style={{ backgroundColor: "rgba(168, 195, 167, 0.8)" }}>
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">Weekend Retreats</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(168, 195, 167, 0.2)", color: "#A8C3A7" }}>2-3 Days</span>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(227, 167, 111, 0.2)", color: "#E3A76F" }}>From $595</span>
                </div>
                <p className="text-foreground/70 font-body mb-6">
                  A perfect introduction to our holistic approach. These 2-3 day experiences include 
                  energy work, yoga, meditation, and organic plant-based meals in a supportive community.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(168, 195, 167, 0.2)" }}>
                      <span style={{ color: "#A8C3A7" }}>✓</span>
                    </div>
                    <span className="text-sm">Daily meditation & yoga</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(168, 195, 167, 0.2)" }}>
                      <span style={{ color: "#A8C3A7" }}>✓</span>
                    </div>
                    <span className="text-sm">Energy healing sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(168, 195, 167, 0.2)" }}>
                      <span style={{ color: "#A8C3A7" }}>✓</span>
                    </div>
                    <span className="text-sm">Organic plant-based meals</span>
                  </div>
                </div>
                <Button className="w-full font-sans" style={{ backgroundColor: "#A8C3A7", color: "white" }}>
                  View Upcoming Dates
                </Button>
              </div>
            </div>

            {/* Seasonal Immersions Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow transform hover:-translate-y-2 duration-300">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/sacred-house/retreat-1.jpg"
                  alt="Seasonal Immersions"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full" style={{ backgroundColor: "rgba(191, 168, 217, 0.8)" }}>
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">Seasonal Immersions</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(191, 168, 217, 0.2)", color: "#BFA8D9" }}>5-7 Days</span>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(227, 167, 111, 0.2)", color: "#E3A76F" }}>From $1,495</span>
                </div>
                <p className="text-foreground/70 font-body mb-6">
                  Deeper transformation aligned with nature's rhythms. These 5-7 day retreats 
                  incorporate fasting, detox, and intensive energy work tailored to the season.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}>
                      <span style={{ color: "#BFA8D9" }}>✓</span>
                    </div>
                    <span className="text-sm">Guided juice fasting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}>
                      <span style={{ color: "#BFA8D9" }}>✓</span>
                    </div>
                    <span className="text-sm">Chakra activation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}>
                      <span style={{ color: "#BFA8D9" }}>✓</span>
                    </div>
                    <span className="text-sm">Seasonal ritual work</span>
                  </div>
                </div>
                <Button className="w-full font-sans" style={{ backgroundColor: "#BFA8D9", color: "white" }}>
                  View Upcoming Dates
                </Button>
              </div>
            </div>

            {/* Custom Group Retreats Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow transform hover:-translate-y-2 duration-300">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/sacred-house/retreat-4.jpg"
                  alt="Custom Group Retreats"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full" style={{ backgroundColor: "rgba(227, 167, 111, 0.8)" }}>
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">Custom Group Retreats</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(227, 167, 111, 0.2)", color: "#E3A76F" }}>Flexible</span>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(227, 167, 111, 0.2)", color: "#E3A76F" }}>Custom Pricing</span>
                </div>
                <p className="text-foreground/70 font-body mb-6">
                  Design a transformative experience for your group. Perfect for yoga studios, 
                  wellness practitioners, corporate teams, or friends seeking a shared healing journey.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}>
                      <span style={{ color: "#E3A76F" }}>✓</span>
                    </div>
                    <span className="text-sm">Customized programming</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}>
                      <span style={{ color: "#E3A76F" }}>✓</span>
                    </div>
                    <span className="text-sm">Exclusive facility use</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}>
                      <span style={{ color: "#E3A76F" }}>✓</span>
                    </div>
                    <span className="text-sm">Tailored catering</span>
                  </div>
                </div>
                <Button className="w-full font-sans" style={{ backgroundColor: "#E3A76F", color: "white" }}>
                  Inquire About Groups
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Our Facilities</h2>
            <p className="text-xl font-accent mb-2" style={{ color: "#BFA8D9" }}>
              Everything you need for comfort and transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-xl overflow-hidden">
              <Image 
                src="/images/sacred-house/retreat-2.jpg" 
                alt="Accommodations" 
                width={600} 
                height={400}
                className="object-cover w-full h-full" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-serif text-2xl font-bold">Accommodations</h3>
                  <p className="font-body text-white/90">Comfortable rooms with organic linens and natural materials</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <Image 
                src="/images/sacred-house/retreat-3.jpg" 
                alt="Practice Space" 
                width={600} 
                height={400}
                className="object-cover w-full h-full" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-serif text-2xl font-bold">Sacred Practice Space</h3>
                  <p className="font-body text-white/90">Light-filled studio for movement and meditation</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <Image 
                src="/images/healing/healing-2.jpg" 
                alt="Healing Room" 
                width={600} 
                height={400}
                className="object-cover w-full h-full" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-serif text-2xl font-bold">Healing Rooms</h3>
                  <p className="font-body text-white/90">Private spaces for individual treatments and sessions</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <Image 
                src="/images/food/microgreens-1.jpg" 
                alt="Communal Dining" 
                width={600} 
                height={400}
                className="object-cover w-full h-full" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-serif text-2xl font-bold">Communal Dining</h3>
                  <p className="font-body text-white/90">Gathering space for sharing nourishing meals together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 relative bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Sacred House Gallery</h2>
            <p className="text-xl font-accent mb-2" style={{ color: "#BFA8D9" }}>
              Experience the beauty of our sanctuary
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/sacred-house/retreat-2.jpg"
                  alt="Sacred House Space"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/sacred-house/retreat-4.jpg"
                  alt="Sacred House Space"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/sacred-house/retreat-1.jpg"
                  alt="Sacred House Space"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/sacred-house/retreat-2.jpg"
                  alt="Sacred House Space"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/sacred-house/retreat-3.jpg"
                  alt="Sacred House Space" 
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/sacred-house/retreat-4.jpg"
                  alt="Sacred House Space"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative" style={{ backgroundColor: "rgba(191, 168, 217, 0.1)" }}>
        <div className="absolute right-10 bottom-20 opacity-10">
          <Image 
            src="/icons/metatron-cube.svg"
            alt="Sacred Geometry"
            width={300}
            height={300}
          />
        </div>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Transformative Experiences</h2>
            <p className="text-xl font-accent mb-2" style={{ color: "#BFA8D9" }}>
              Words from our retreat participants
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm relative">
              <div className="text-6xl font-serif absolute top-4 left-4 opacity-10" style={{ color: "#A8C3A7" }}>"</div>
              <div className="relative z-10">
                <p className="font-body italic mb-6">
                  "The Sacred House retreat was a turning point in my healing journey. The combination of energy work, 
                  meditation, and being held in such a beautiful space allowed me to release years of accumulated stress. 
                  I left feeling completely renewed."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#A8C3A7]/20 flex items-center justify-center">
                    <span className="text-[#A8C3A7] font-bold">M</span>
                  </div>
                  <div>
                    <p className="font-serif font-bold">Maria J.</p>
                    <p className="text-sm text-foreground/60">Weekend Retreat Participant</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm relative">
              <div className="text-6xl font-serif absolute top-4 left-4 opacity-10" style={{ color: "#BFA8D9" }}>"</div>
              <div className="relative z-10">
                <p className="font-body italic mb-6">
                  "My seasonal immersion retreat coincided with a major life transition, and I couldn't have asked for better 
                  support. The fasting program helped clear my physical body while the energy work and community helped process 
                  emotional challenges. Truly life-changing."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#BFA8D9]/20 flex items-center justify-center">
                    <span className="text-[#BFA8D9] font-bold">D</span>
                  </div>
                  <div>
                    <p className="font-serif font-bold">David T.</p>
                    <p className="text-sm text-foreground/60">Seasonal Immersion Participant</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm relative">
              <div className="text-6xl font-serif absolute top-4 left-4 opacity-10" style={{ color: "#E3A76F" }}>"</div>
              <div className="relative z-10">
                <p className="font-body italic mb-6">
                  "We brought our yoga studio members for a custom weekend retreat, and it exceeded all expectations. 
                  The space itself is healing, and Nathanel's energy work added a dimension to our practice that we're still 
                  integrating months later. We'll definitely return."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E3A76F]/20 flex items-center justify-center">
                    <span className="text-[#E3A76F] font-bold">S</span>
                  </div>
                  <div>
                    <p className="font-serif font-bold">Sarah L.</p>
                    <p className="text-sm text-foreground/60">Yoga Studio Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-white">
        <div className="container">
          <div className="rounded-2xl overflow-hidden relative">
            <Image
              src="/images/sacred-house/retreat-3.jpg"
              alt="Sacred House Retreat"
              width={1200}
              height={600}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="p-12 max-w-xl">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">Begin Your Journey</h2>
                <p className="text-xl mb-8 text-white/90 font-body">
                  Ready to experience the transformative power of our Sacred House retreats? 
                  Reserve your space for upcoming events or inquire about custom group experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    style={{ backgroundColor: "#A8C3A7", color: "white" }}
                    className="hover:opacity-90 text-lg px-8 py-6 font-sans"
                  >
                    Book a Retreat
                  </Button>
                  <Button
                    variant="outline"
                    style={{ borderColor: "white", color: "white" }}
                    className="hover:bg-white/10 text-lg px-8 py-6 font-sans"
                  >
                    View Calendar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer activePage="sacred-house" />
    </div>
  )
} 