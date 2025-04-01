import Image from "next/image"
import { Heart, Sparkles, Waves, Users, Star, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Metadata } from "next"
import { Navigation } from "@/components/layout/Navigation"

export const metadata: Metadata = {
  title: "Holistic Healing Services | One-on-One Sessions",
  description: "Experience transformative energy healing with personalized Reiki, Tantra Yoga, and Chi Gong sessions tailored to your unique journey and spiritual needs.",
}

export default function Healing() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F5F2" }}>
      {/* Header */}
      <Navigation activePage="healing" />

      {/* Hero Section with Parallax Effect */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#EBE3F3]/90 to-transparent" />
          <Image
            src="/images/healing/hero.jpg"
            alt="Energy Healing Session"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container px-4 sm:px-6">
          <div className="max-w-xl mx-auto md:mx-0 bg-white/80 backdrop-blur-sm p-6 md:p-8 lg:p-12 rounded-xl shadow-lg">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4">
              Energy <span style={{ color: "#BFA8D9" }}>Healing</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-accent text-foreground/80 mb-4">
              Personalized sessions for your unique journey
            </p>
            <p className="text-base lg:text-lg text-foreground/70 max-w-md font-body mb-8">
              Experience transformative one-on-one healing that combines ancient wisdom with modern energy techniques,
              tailored specifically to your personal needs and spiritual path.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                style={{ backgroundColor: "#BFA8D9", color: "white" }}
                className="hover:opacity-90 text-base md:text-lg px-6 py-4 md:px-8 md:py-6 font-sans"
              >
                Book a Session
              </Button>
              <Button
                variant="outline"
                style={{ borderColor: "#A8C3A7", color: "#A8C3A7" }}
                className="hover:bg-opacity-10 text-base md:text-lg px-6 py-4 md:px-8 md:py-6 font-sans"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white relative">
        <div className="absolute right-5 md:right-10 top-10 md:top-20 opacity-10">
          <Image 
            src="/icons/metatron-cube.svg"
            alt="Sacred Geometry"
            width={200}
            height={200}
            className="w-40 h-40 md:w-auto md:h-auto"
          />
        </div>
        <div className="container px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 md:mb-6">Healing Modalities</h2>
            <p className="text-lg md:text-xl font-accent mb-4 md:mb-8" style={{ color: "#BFA8D9" }}>
              Personalized approaches for your unique journey
            </p>
            <div className="prose prose-lg max-w-none">
              <p className="font-body text-base md:text-lg">
                Each session is crafted specifically for you, integrating various healing modalities 
                to address your unique needs. Together, we'll work to release energetic blockages, 
                restore balance, and activate your body's innate healing potential.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
            {/* Reiki Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300 relative h-full">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/healing/reiki.jpg"
                  alt="Reiki Healing"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full" 
                      style={{ backgroundColor: "rgba(191, 168, 217, 0.8)" }}>
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">Reiki Healing</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-foreground/70 font-body mb-6">
                  Experience the gentle yet powerful energy of Reiki to promote deep relaxation, 
                  reduce stress, and support your body's natural healing processes. As a certified 
                  Reiki Master, I channel universal life force energy to areas of imbalance.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" 
                      style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}>
                      <span style={{ color: "#BFA8D9" }}>✓</span>
                    </div>
                    <span className="text-sm">Chakra balancing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" 
                      style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}>
                      <span style={{ color: "#BFA8D9" }}>✓</span>
                    </div>
                    <span className="text-sm">Energetic cleansing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" 
                      style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}>
                      <span style={{ color: "#BFA8D9" }}>✓</span>
                    </div>
                    <span className="text-sm">Stress reduction</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold px-3 py-1 rounded-full" 
                    style={{ backgroundColor: "rgba(191, 168, 217, 0.2)", color: "#BFA8D9" }}>
                    60-90 min
                  </span>
                  <span className="font-bold" style={{ color: "#BFA8D9" }}>From $125</span>
                </div>
              </div>
            </div>

            {/* Tantra Yoga Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300 relative h-full">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/healing/tantra.jpg"
                  alt="Tantra Yoga"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full" 
                      style={{ backgroundColor: "rgba(168, 195, 167, 0.8)" }}>
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">Tantra Yoga</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-foreground/70 font-body mb-6">
                  Connect deeply with your sacred energy through Tantra Yoga practices that honor 
                  the divine masculine and feminine within. These sessions help awaken your authentic 
                  self and develop deeper awareness of your energetic being.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" 
                      style={{ backgroundColor: "rgba(168, 195, 167, 0.2)" }}>
                      <span style={{ color: "#A8C3A7" }}>✓</span>
                    </div>
                    <span className="text-sm">Energy circulation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" 
                      style={{ backgroundColor: "rgba(168, 195, 167, 0.2)" }}>
                      <span style={{ color: "#A8C3A7" }}>✓</span>
                    </div>
                    <span className="text-sm">Breath awareness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" 
                      style={{ backgroundColor: "rgba(168, 195, 167, 0.2)" }}>
                      <span style={{ color: "#A8C3A7" }}>✓</span>
                    </div>
                    <span className="text-sm">Sacred embodiment</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold px-3 py-1 rounded-full" 
                    style={{ backgroundColor: "rgba(168, 195, 167, 0.2)", color: "#A8C3A7" }}>
                    90 min
                  </span>
                  <span className="font-bold" style={{ color: "#A8C3A7" }}>From $150</span>
                </div>
              </div>
            </div>

            {/* Chi Gong Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300 relative h-full">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/healing/chi-gong.jpg"
                  alt="Chi Gong"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full" 
                      style={{ backgroundColor: "rgba(227, 167, 111, 0.8)" }}>
                      <Waves className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">Chi Gong</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-foreground/70 font-body mb-6">
                  Learn to cultivate, circulate and balance your chi (life force energy) through 
                  gentle flowing movements, breath work, and visualization. Chi Gong practices 
                  strengthen the body, calm the mind, and enhance your vital energy.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" 
                      style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}>
                      <span style={{ color: "#E3A76F" }}>✓</span>
                    </div>
                    <span className="text-sm">Energy cultivation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" 
                      style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}>
                      <span style={{ color: "#E3A76F" }}>✓</span>
                    </div>
                    <span className="text-sm">Movement meditation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" 
                      style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}>
                      <span style={{ color: "#E3A76F" }}>✓</span>
                    </div>
                    <span className="text-sm">Self-healing techniques</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold px-3 py-1 rounded-full" 
                    style={{ backgroundColor: "rgba(227, 167, 111, 0.2)", color: "#E3A76F" }}>
                    60 min
                  </span>
                  <span className="font-bold" style={{ color: "#E3A76F" }}>From $125</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-20 relative" style={{ backgroundColor: "rgba(197, 225, 230, 0.1)" }}>
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Healing Workshops</h2>
            <p className="text-xl font-accent mb-2" style={{ color: "#BFA8D9" }}>
              Group experiences for transformation
            </p>
            <p className="max-w-2xl mx-auto text-foreground/70 font-body">
              In my workshops, I create a supportive environment for participants to explore energy work, develop their intuition, and connect with others on a similar path.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/sacred-house/retreat-1.jpg"
                alt="Workshop session"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="font-accent text-xl mb-1">Discover</p>
                  <h3 className="font-serif text-2xl font-bold">The healing power of group energy</h3>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif font-bold">Workshop Offerings</h3>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1"
                    style={{ backgroundColor: "rgba(168, 195, 167, 0.2)" }}
                  >
                    <Leaf className="h-6 w-6" style={{ color: "#A8C3A7" }} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg">Heart-Centered Meditation</h4>
                    <p className="text-foreground/70 font-body">
                      Learn to connect with your heart's wisdom and develop a consistent meditation practice.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1"
                    style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}
                  >
                    <Heart className="h-6 w-6" style={{ color: "#BFA8D9" }} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg">Energy Awareness</h4>
                    <p className="text-foreground/70 font-body">
                      Develop your sensitivity to subtle energy and learn techniques for self-healing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1"
                    style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}
                  >
                    <Waves className="h-6 w-6" style={{ color: "#E3A76F" }} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg">Partner Practices</h4>
                    <p className="text-foreground/70 font-body">
                      Experience the power of connection through eye gazing and heart-opening exercises.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                style={{ backgroundColor: "#BFA8D9", color: "white" }}
                className="hover:opacity-90 px-8 py-6 text-lg font-sans"
              >
                Join a Workshop
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Your Healing Journey Section */}
      <section className="py-16 md:py-24 relative" style={{ backgroundColor: "rgba(191, 168, 217, 0.1)" }}>
        <div className="absolute left-0 md:left-10 bottom-10 md:bottom-20 opacity-10">
          <Image 
            src="/icons/flower-of-life.svg"
            alt="Sacred Geometry"
            width={250}
            height={250}
            className="w-48 h-48 md:w-auto md:h-auto"
          />
        </div>
        <div className="container px-4 sm:px-6">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-5 relative order-2 md:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg relative">
                <Image
                  src="/images/sacred-house/retreat-1.jpg"
                  alt="Healing Journey"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
                <div className="absolute -z-10 -bottom-6 -right-6 rounded-full" 
                  style={{ backgroundColor: "rgba(191, 168, 217, 0.2)", width: "100%", height: "100%" }}></div>
              </div>
            </div>
            
            <div className="md:col-span-7 space-y-6 md:space-y-8 order-1 md:order-2">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold">Your Healing Journey</h2>
              <p className="text-lg md:text-xl font-accent" style={{ color: "#BFA8D9" }}>
                A personalized path to wholeness
              </p>
              
              <div className="space-y-4 md:space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1"
                      style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}
                    >
                      <span className="font-serif font-bold text-xl" style={{ color: "#BFA8D9" }}>1</span>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg mb-2">Initial Consultation</h4>
                      <p className="text-foreground/70 font-body">
                        We begin with a heart-centered conversation about your current challenges, 
                        goals, and what brought you to seek healing. This helps me understand how 
                        to tailor your sessions to best serve your unique journey.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1"
                      style={{ backgroundColor: "rgba(168, 195, 167, 0.2)" }}
                    >
                      <span className="font-serif font-bold text-xl" style={{ color: "#A8C3A7" }}>2</span>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg mb-2">Personalized Sessions</h4>
                      <p className="text-foreground/70 font-body">
                        Based on your needs, I create a unique blend of healing modalities for each 
                        session. This holistic approach addresses physical, emotional, and energetic 
                        aspects simultaneously for integrated healing.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1"
                      style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}
                    >
                      <span className="font-serif font-bold text-xl" style={{ color: "#E3A76F" }}>3</span>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg mb-2">Integration & Growth</h4>
                      <p className="text-foreground/70 font-body">
                        After each session, I provide guidance for continuing your healing between 
                        visits, including simple practices to help integrate the energetic shifts 
                        and sustain your transformation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button
                style={{ backgroundColor: "#BFA8D9", color: "white" }}
                className="hover:opacity-90 text-lg px-8 py-6 font-sans"
              >
                Begin Your Journey
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="absolute right-0 md:right-10 top-10 md:top-20 opacity-10">
          <Image 
            src="/icons/metatron-cube.svg"
            alt="Sacred Geometry"
            width={200}
            height={200}
            className="w-40 h-40 md:w-auto md:h-auto"
          />
        </div>
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">Healing Experiences</h2>
            <p className="text-lg md:text-xl font-accent mb-2" style={{ color: "#BFA8D9" }}>
              Transformations shared by clients
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm relative">
              <div className="text-6xl font-serif absolute top-4 left-4 opacity-10" style={{ color: "#BFA8D9" }}>"</div>
              <div className="relative z-10">
                <p className="font-body italic mb-6">
                  "My sessions with Nathanel have been truly transformative. The combination of Reiki and 
                  breathing techniques helped me release deep emotional blocks I didn't even know I was carrying. 
                  I feel lighter, more present, and more connected to my purpose."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#BFA8D9]/20 flex items-center justify-center">
                    <span className="text-[#BFA8D9] font-bold">A</span>
                  </div>
                  <div>
                    <p className="font-serif font-bold">Amelia S.</p>
                    <p className="text-sm text-foreground/60">Weekly Client, 6 Months</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm relative">
              <div className="text-6xl font-serif absolute top-4 left-4 opacity-10" style={{ color: "#A8C3A7" }}>"</div>
              <div className="relative z-10">
                <p className="font-body italic mb-6">
                  "After my first Chi Gong session, I noticed an immediate difference in my chronic back pain. 
                  Nathanel's gentle guidance and energy work have given me tools I use daily. Three months later, 
                  I'm more mobile than I've been in years and sleeping better than ever."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#A8C3A7]/20 flex items-center justify-center">
                    <span className="text-[#A8C3A7] font-bold">J</span>
                  </div>
                  <div>
                    <p className="font-serif font-bold">James R.</p>
                    <p className="text-sm text-foreground/60">Monthly Client, 1 Year</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm relative">
              <div className="text-6xl font-serif absolute top-4 left-4 opacity-10" style={{ color: "#E3A76F" }}>"</div>
              <div className="relative z-10">
                <p className="font-body italic mb-6">
                  "The Tantra Yoga practices Nathanel taught me have completely transformed my relationship 
                  with myself and others. I've developed a new appreciation for my body's wisdom and learned 
                  to channel my energy in ways that serve my highest good."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E3A76F]/20 flex items-center justify-center">
                    <span className="text-[#E3A76F] font-bold">L</span>
                  </div>
                  <div>
                    <p className="font-serif font-bold">Leila T.</p>
                    <p className="text-sm text-foreground/60">Bi-Weekly Client, 9 Months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="rounded-2xl overflow-hidden relative">
            <div className="aspect-video md:aspect-auto md:h-[500px]">
              <Image
                src="/images/healing/hero.jpg"
                alt="Healing Energy Work"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="p-6 md:p-12 max-w-md md:max-w-xl">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 md:mb-6 text-white">Ready to Transform?</h2>
                <p className="text-base md:text-xl mb-6 md:mb-8 text-white/90 font-body">
                  Begin your healing journey today with a personalized session tailored to your unique needs. 
                  Together, we'll activate your innate healing abilities and guide you toward wholeness.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    style={{ backgroundColor: "#BFA8D9", color: "white" }}
                    className="hover:opacity-90 text-base md:text-lg px-6 py-4 md:px-8 md:py-6 font-sans"
                  >
                    Book a Session
                  </Button>
                  <Button
                    variant="outline"
                    style={{ borderColor: "white", color: "white" }}
                    className="hover:bg-white/10 text-base md:text-lg px-6 py-4 md:px-8 md:py-6 font-sans"
                  >
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 relative" style={{ backgroundColor: "rgba(197, 225, 230, 0.1)" }}>
        <div className="absolute left-0 md:left-10 bottom-10 md:bottom-20 opacity-10">
          <Image 
            src="/icons/flower-of-life.svg"
            alt="Sacred Geometry"
            width={250}
            height={250}
            className="w-48 h-48 md:w-auto md:h-auto"
          />
        </div>
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">Common Questions</h2>
            <p className="text-lg md:text-xl font-accent mb-2" style={{ color: "#BFA8D9" }}>
              Everything you need to know about healing sessions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h4 className="font-serif font-bold text-xl mb-4">What should I expect in my first session?</h4>
              <p className="text-foreground/70 font-body">
                Your first session begins with a conversation about your goals and challenges, followed by 
                a combination of energy work tailored to your needs. You'll remain fully clothed and comfortable 
                throughout. Most people experience deep relaxation, release, and often insights or sensations 
                as energy shifts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h4 className="font-serif font-bold text-xl mb-4">How many sessions will I need?</h4>
              <p className="text-foreground/70 font-body">
                Healing is a uniquely personal journey that varies for each individual. Some experience 
                significant shifts after just one session, while others benefit from ongoing support. 
                After your initial session, we'll discuss what approach might serve you best based on your 
                response and goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h4 className="font-serif font-bold text-xl mb-4">Can energy healing help with physical conditions?</h4>
              <p className="text-foreground/70 font-body">
                Energy healing can complement conventional medical care by supporting your body's natural 
                healing processes. While not a replacement for medical treatment, many clients report improvement 
                in physical symptoms as energy blockages are cleared and balance is restored. Always consult with 
                your healthcare provider for medical conditions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h4 className="font-serif font-bold text-xl mb-4">How can I prepare for my session?</h4>
              <p className="text-foreground/70 font-body">
                Arrive in comfortable clothing and with an open mind. It's helpful to hydrate well before 
                your session and avoid alcohol or heavy meals. Setting a simple intention for your healing 
                can focus the energy, but it's also perfectly fine to come without specific expectations 
                and simply be present for the experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12" style={{ borderColor: "rgba(232, 215, 183, 0.3)" }}>
        <div className="container px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center gap-2 mb-6 md:mb-0">
              <Image
                src="/icons/flower-of-life.svg"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-2xl font-serif font-bold">Nathanel</span>
            </Link>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Link href="/" className="text-foreground/80 hover:text-brand-purple transition-colors font-body">
                  Home
                </Link>
                <Link href="/healing" className="text-foreground/80 hover:text-brand-purple transition-colors font-body font-bold" style={{ color: "#BFA8D9" }}>
                  Healing
                </Link>
                <Link href="/sacred-house" className="text-foreground/80 hover:text-brand-purple transition-colors font-body">
                  Sacred House
                </Link>
                <Link href="/food" className="text-foreground/80 hover:text-brand-purple transition-colors font-body">
                  Food
                </Link>
                <Link href="/contact" className="text-foreground/80 hover:text-brand-purple transition-colors font-body">
                  Contact
                </Link>
              </nav>

              <div className="flex gap-4 mt-6 md:mt-0">
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110" 
                  style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}
                  aria-label="Instagram"
                >
                  <Heart className="h-5 w-5" style={{ color: "#BFA8D9" }} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110" 
                  style={{ backgroundColor: "rgba(168, 195, 167, 0.2)" }}
                  aria-label="Facebook"
                >
                  <Sparkles className="h-5 w-5" style={{ color: "#A8C3A7" }} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110" 
                  style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}
                  aria-label="Twitter"
                >
                  <Waves className="h-5 w-5" style={{ color: "#E3A76F" }} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="mt-8 pt-8 border-t text-center text-sm text-foreground/60 font-body"
            style={{ borderColor: "rgba(232, 215, 183, 0.3)" }}
          >
            <p>© {new Date().getFullYear()} Nathanel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 