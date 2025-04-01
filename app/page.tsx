import Image from "next/image"
import { Heart, Sparkles, Waves, Users, Star, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Metadata } from "next"
import { Navigation } from "@/components/layout/Navigation"

export const metadata: Metadata = {
  title: "Nathanel | Healing, Retreats & Holistic Nutrition",
  description: "Discover holistic transformation through energy healing, wellness retreats, and nutritional guidance. Connect with your true self and unlock your potential.",
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F5F2" }}>
      {/* Header */}
      <Navigation activePage="home" />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-gradient-to-b"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(232, 215, 183, 0.5), rgba(197, 225, 230, 0.3))`,
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}
          />
        </div>

        <div className="container relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                Healing, Growth, and <br />
                <span style={{ color: "#BFA8D9" }}>Transformation</span> <span className="text-3xl md:text-4xl">– Inside & Out</span>
              </h1>
              <p className="text-xl md:text-2xl font-accent text-foreground/80">
                Discover the path to wholeness through energy, nutrition, and mindful living
              </p>
              <p className="text-lg text-foreground/70 max-w-md font-body">
                Reiki Master, Certified Chef, and holistic practitioner with a passion for guiding 
                others in their journey of healing, growth, and transformation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  style={{ backgroundColor: "#A8C3A7", color: "white" }}
                  className="hover:opacity-90 text-lg px-8 py-6 font-sans"
                >
                  Explore My Offerings
                </Button>
                <Button
                  variant="outline"
                  style={{ borderColor: "#BFA8D9", color: "#BFA8D9" }}
                  className="hover:bg-opacity-10 text-lg px-8 py-6 font-sans"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-square max-w-md mx-auto">
              <Image 
                src="/images/home/hero.jpg" 
                alt="Nathanel"
                width={500}
                height={500}
                className="object-cover w-full h-full rounded-xl"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end"
              >
                <div className="p-6 w-full">
                  <p className="font-accent text-2xl text-white/90 text-center">Heart-centered living</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">About Me</h2>
            <p className="text-xl font-accent mb-8" style={{ color: "#BFA8D9" }}>
              My journey in holistic healing and culinary arts
            </p>
            <div className="prose prose-lg max-w-none">
              <p className="font-body text-left">
                Since childhood, I have been immersed in holistic healing, wellness, and culinary arts. My journey began at the age of 8 when my mother introduced me to Reiki, Qigong, and energy healing workshops. Over the years, I have deepened my expertise through extensive training, education, and hands-on experience in healing, nutrition, and fine dining.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mt-12 mb-20">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">My Background & Expertise</h3>
              
              <div className="mb-8">
                <h4 className="text-xl font-serif font-bold mb-3" style={{ color: "#BFA8D9" }}>Healing & Wellness</h4>
                <ul className="space-y-2 font-body">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mt-1 shrink-0"
                      style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}>
                      <span style={{ color: "#BFA8D9" }}>✓</span>
                    </div>
                    <span>Certified in Reiki, Qigong, Tantra, Yoga Teaching, and Angel Therapy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mt-1 shrink-0"
                      style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}>
                      <span style={{ color: "#BFA8D9" }}>✓</span>
                    </div>
                    <span>Studied at Hippocrates Health Institute, specializing in natural healing and nutrition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mt-1 shrink-0"
                      style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}>
                      <span style={{ color: "#BFA8D9" }}>✓</span>
                    </div>
                    <span>Advocate of mind-body-spirit integration for holistic well-being</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-serif font-bold mb-3" style={{ color: "#E3A76F" }}>Culinary Arts</h4>
                <ul className="space-y-2 font-body">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mt-1 shrink-0"
                      style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}>
                      <span style={{ color: "#E3A76F" }}>✓</span>
                    </div>
                    <span>Graduate of Le Cordon Bleu Paris, earning Le Grand Diplôme in pastry & cuisine</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mt-1 shrink-0"
                      style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}>
                      <span style={{ color: "#E3A76F" }}>✓</span>
                    </div>
                    <span>Experience in Michelin-starred restaurants in France and with celebrity chefs in Tel Aviv</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mt-1 shrink-0"
                      style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}>
                      <span style={{ color: "#E3A76F" }}>✓</span>
                    </div>
                    <span>Passionate about integrating healing principles into food and nutrition</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden">
                <Image 
                  src="/images/sacred-house/Image 5.png" 
                  alt="Nathanel" 
                  width={500} 
                  height={500}
                  className="object-cover w-full h-full" 
                />
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6">
                <Image 
                  src="/images/home/Image 1.jpeg" 
                  alt="Decorative Graphic" 
                  width={180} 
                  height={180}
                  className="opacity-20" 
                />
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-16">
            <h3 className="text-2xl font-serif font-bold mb-6 text-center">My Philosophy: The Three Pillars of Health</h3>
            <p className="font-body mb-8 text-center">
              I believe that true well-being is built upon three fundamental pillars—like a strong, balanced triangle:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}
                >
                  <Leaf className="h-6 w-6" style={{ color: "#E3A76F" }} />
                </div>
                <h4 className="font-serif font-bold text-lg mb-3 text-center">Nutrition</h4>
                <p className="text-foreground/70 font-body text-center">
                  Food is the foundation of health, influencing physical, emotional, and spiritual well-being. Mindful eating promotes longevity and vitality.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(168, 195, 167, 0.2)" }}
                >
                  <Waves className="h-6 w-6" style={{ color: "#A8C3A7" }} />
                </div>
                <h4 className="font-serif font-bold text-lg mb-3 text-center">Movement</h4>
                <p className="text-foreground/70 font-body text-center">
                  Just like a well-maintained vehicle, our bodies require exercise, strength, and flexibility to function optimally.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}
                >
                  <Heart className="h-6 w-6" style={{ color: "#BFA8D9" }} />
                </div>
                <h4 className="font-serif font-bold text-lg mb-3 text-center">Mindset & Spiritual Alignment</h4>
                <p className="text-foreground/70 font-body text-center">
                  Our thoughts shape our reality. Gratitude, joy, and purpose-driven living create inner harmony and fulfillment.
                </p>
              </div>
            </div>
            
            <div className="mt-16 p-8 bg-gray-50 rounded-xl">
              <h3 className="text-2xl font-serif font-bold mb-4 text-center">My Mission</h3>
              <p className="font-body text-center">
                I believe we all carry a divine spark—our unique purpose and gifts meant to be shared with the world. My mission is to guide you in unlocking your full potential through healing, nutrition, and self-discovery. Together, we can align your body, mind, and spirit for a life of balance, health, and fulfillment.
              </p>
              <p className="font-body text-center mt-4 text-lg font-accent" style={{ color: "#BFA8D9" }}>
                Let's walk this journey together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Overview */}
      <section className="py-20 relative" style={{ backgroundColor: "rgba(232, 215, 183, 0.2)" }}>
        <div className="absolute left-10 top-20 opacity-10">
          <Image 
            src="/icons/flower-of-life.svg"
            alt="Sacred Geometry"
            width={300}
            height={300}
          />
        </div>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">My Offerings</h2>
            <p className="text-xl font-accent mb-6" style={{ color: "#BFA8D9" }}>
              Holistic services to support your well-being journey
            </p>
            <p className="max-w-2xl mx-auto text-foreground/70 font-body">
              Explore my range of services designed to nourish and transform your body, mind, and spirit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Healing Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/home/hero.jpg"
                  alt="Healing & Energy Work"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-serif text-2xl font-bold">Healing & Energy Work</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-foreground/70 font-body mb-6">
                  Transform your energy and your life through personalized Reiki, Qigong, and energy healing sessions.
                  Restore balance and vitality through one-on-one work.
                </p>
                <Link href="/healing">
                  <Button className="w-full font-sans" style={{ backgroundColor: "#BFA8D9", color: "white" }}>
                    Book a Session
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sacred House Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/sacred-house/retreat-1.jpg"
                  alt="The Sacred House Retreats"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-serif text-2xl font-bold">The Sacred House Retreats</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-foreground/70 font-body mb-6">
                  Experience transformation in a sanctuary for healing. Join retreats focused on detox, 
                  fasting, energy work, yoga, and chakra activation in a supportive community.
                </p>
                <Link href="/sacred-house">
                  <Button className="w-full font-sans" style={{ backgroundColor: "#A8C3A7", color: "white" }}>
                    Join a Retreat
                  </Button>
                </Link>
              </div>
            </div>

            {/* Food Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/food/microgreens-1.jpg"
                  alt="Holistic Food & Microgreens"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-serif text-2xl font-bold">Holistic Food & Microgreens</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-foreground/70 font-body mb-6">
                  Nourish your body and elevate your spirit with food as medicine. Fresh microgreens, 
                  private chef services, and holistic cooking principles for optimum health.
                </p>
                <Link href="/food">
                  <Button className="w-full font-sans" style={{ backgroundColor: "#E3A76F", color: "white" }}>
                    Shop Microgreens
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-20 relative" style={{ backgroundColor: "rgba(197, 225, 230, 0.1)" }}>
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Workshops & Practices</h2>
            <p className="text-xl font-accent mb-2" style={{ color: "#BFA8D9" }}>
              Heart-centered energy work for all ages
            </p>
            <p className="max-w-2xl mx-auto text-foreground/70 font-body">
              In my workshops I cover guided meditations, Reiki methods, Chi Gong, eye gazing, and heart opening
              activities. People pair up and practice on each other in a supportive environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/sacred-house/retreat-2.jpg"
                alt="Workshop session"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="font-accent text-xl mb-1">Discover</p>
                  <h3 className="font-serif text-2xl font-bold">The healing power of energy work</h3>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif font-bold">What You'll Experience</h3>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1"
                    style={{ backgroundColor: "rgba(168, 195, 167, 0.2)" }}
                  >
                    <Leaf className="h-6 w-6" style={{ color: "#A8C3A7" }} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg">Guided Meditations</h4>
                    <p className="text-foreground/70 font-body">
                      Simple yet powerful meditations to center and connect with your heart energy.
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
                    <h4 className="font-serif font-bold text-lg">Reiki Methods</h4>
                    <p className="text-foreground/70 font-body">
                      Learn and practice fundamental Reiki techniques for self-healing and helping others.
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
                    <h4 className="font-serif font-bold text-lg">Chi Gong Practices</h4>
                    <p className="text-foreground/70 font-body">
                      Gentle movements that cultivate and direct energy throughout the body.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1"
                    style={{ backgroundColor: "rgba(197, 225, 230, 0.2)" }}
                  >
                    <Users className="h-6 w-6" style={{ color: "#C5E1E6" }} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg">Partner Practices</h4>
                    <p className="text-foreground/70 font-body">
                      Eye gazing and heart opening activities to deepen connection and awareness.
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

      {/* Kids Section */}
      <section className="py-20" style={{ backgroundColor: "rgba(168, 195, 167, 0.1)" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Energy Work for Children</h2>
              <p className="text-xl font-accent mb-4" style={{ color: "#BFA8D9" }}>
                Nurturing young hearts and minds
              </p>
              <p className="text-foreground/70 font-body">
                I am passionate about involving kids in these subtle practices. Children are naturally attuned to energy
                and can learn these skills with ease and joy. Through playful activities and age-appropriate exercises,
                children develop awareness of their own energy and how to use it positively.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(168, 195, 167, 0.3)" }}
                  >
                    <span style={{ color: "#A8C3A7" }}>✓</span>
                  </div>
                  <p className="font-body">Age-appropriate energy awareness games</p>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(168, 195, 167, 0.3)" }}
                  >
                    <span style={{ color: "#A8C3A7" }}>✓</span>
                  </div>
                  <p className="font-body">Simple meditation techniques for focus and calm</p>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(168, 195, 167, 0.3)" }}
                  >
                    <span style={{ color: "#A8C3A7" }}>✓</span>
                  </div>
                  <p className="font-body">Gentle movement practices for body awareness</p>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(168, 195, 167, 0.3)" }}
                  >
                    <span style={{ color: "#A8C3A7" }}>✓</span>
                  </div>
                  <p className="font-body">Heart-centered activities for emotional intelligence</p>
                </div>
              </div>
              <Button style={{ backgroundColor: "#A8C3A7", color: "white" }} className="hover:opacity-90 font-sans">
                Learn About Kids Programs
              </Button>
            </div>

            <div className="relative order-1 md:order-2">
              <div
                className="absolute -inset-4 rounded-full blur-xl"
                style={{
                  backgroundImage: `linear-gradient(to top right, rgba(168, 195, 167, 0.3), rgba(191, 168, 217, 0.3))`,
                }}
              />
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="/images/healing/healing-1.jpg"
                  alt="Children practicing energy work"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20" style={{ backgroundColor: "rgba(191, 168, 217, 0.1)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">The Purpose</h2>
            <p className="text-xl font-accent mb-8" style={{ color: "#BFA8D9" }}>
              Tools for everyday life
            </p>
            <div className="prose prose-lg max-w-none">
              <p className="font-body">
                The purpose of these workshops is to give people the knowledge, awareness, and tools to take with them
                into their day-to-day lives. By learning these practices, you'll be able to:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(197, 225, 230, 0.2)" }}
                >
                  <span className="text-2xl" style={{ color: "#C5E1E6" }}>
                    1
                  </span>
                </div>
                <h3 className="font-serif font-bold text-xl mb-3">Connect to Your Heart</h3>
                <p className="text-foreground/70 font-body">
                  Access your heart's wisdom and power in any situation, bringing more love and compassion to your life.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}
                >
                  <span className="text-2xl" style={{ color: "#E3A76F" }}>
                    2
                  </span>
                </div>
                <h3 className="font-serif font-bold text-xl mb-3">Manage Your Energy</h3>
                <p className="text-foreground/70 font-body">
                  Learn to sense, direct, and balance your energy for greater vitality and emotional wellbeing.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(168, 195, 167, 0.2)" }}
                >
                  <span className="text-2xl" style={{ color: "#A8C3A7" }}>
                    3
                  </span>
                </div>
                <h3 className="font-serif font-bold text-xl mb-3">Practice Self-Healing</h3>
                <p className="text-foreground/70 font-body">
                  Use simple techniques to reduce stress, relieve pain, and support your body's natural healing
                  abilities.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}
                >
                  <span className="text-2xl" style={{ color: "#BFA8D9" }}>
                    4
                  </span>
                </div>
                <h3 className="font-serif font-bold text-xl mb-3">Deepen Connections</h3>
                <p className="text-foreground/70 font-body">
                  Enhance your relationships through presence, empathy, and energy awareness with those around you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practices Section */}
      <section id="practices" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Healing Practices</h2>
            <p className="text-xl font-accent mb-2" style={{ color: "#BFA8D9" }}>
              Tools for connecting with your energy
            </p>
            <p className="max-w-2xl mx-auto text-foreground/70 font-body">
              Learn practical techniques for energy cultivation, heart-centered awareness, and balanced living that you
              can incorporate into your daily life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="grid gap-8">
              <div className="rounded-lg p-6 bg-gray-50/50 shadow-sm">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1"
                    style={{ backgroundColor: "rgba(168, 195, 167, 0.2)" }}
                  >
                    <Heart className="h-6 w-6" style={{ color: "#A8C3A7" }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">Heart Opening Meditation</h3>
                    <p className="text-foreground/70 font-body">
                      A guided practice to connect with your heart center, allowing for deeper compassion, self-love,
                      and emotional healing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg p-6 bg-gray-50/50 shadow-sm">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1"
                    style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}
                  >
                    <Sparkles className="h-6 w-6" style={{ color: "#BFA8D9" }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">Energy Cultivation</h3>
                    <p className="text-foreground/70 font-body">
                      Techniques to gather, circulate and direct life energy for increased vitality, mental clarity, and
                      inner balance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg p-6 bg-gray-50/50 shadow-sm">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1"
                    style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}
                  >
                    <Waves className="h-6 w-6" style={{ color: "#E3A76F" }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">Self-Healing Practices</h3>
                    <p className="text-foreground/70 font-body">
                      Daily rituals and techniques to maintain energetic hygiene, clear blockages, and support your
                      body's natural healing processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image 
                    src="/images/home/Image 1.jpeg" 
                    alt="Healing Practice" 
                    width={300} 
                    height={300}
                    className="object-cover w-full h-full" 
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image 
                    src="/images/home/Image 2.jpeg" 
                    alt="Healing Practice" 
                    width={300} 
                    height={300}
                    className="object-cover w-full h-full" 
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image 
                    src="/images/healing/Graphic 3.jpeg" 
                    alt="Healing Practice" 
                    width={300} 
                    height={300}
                    className="object-cover w-full h-full" 
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image 
                    src="/images/food/Image 6.jpeg" 
                    alt="Healing Practice" 
                    width={300} 
                    height={300}
                    className="object-cover w-full h-full" 
                  />
                </div>
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6">
                <Image 
                  src="/images/home/Graphic 1.jpeg" 
                  alt="Decorative Graphic" 
                  width={180} 
                  height={180}
                  className="opacity-20" 
                />
              </div>
              <div className="absolute -z-10 -top-6 -left-6">
                <Image 
                  src="/images/home/Graphic 3.jpeg" 
                  alt="Decorative Graphic" 
                  width={180} 
                  height={180}
                  className="opacity-20" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative bg-white">
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">What People Say</h2>
            <p className="text-xl font-accent mb-2" style={{ color: "#BFA8D9" }}>
              Voices of transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl relative">
              <div className="text-5xl font-serif absolute top-4 left-4 opacity-10" style={{ color: "#BFA8D9" }}>"</div>
              <div className="relative z-10">
                <p className="font-body italic mb-6">
                  "Nathanel's healing sessions have transformed my relationship with energy. I've experienced 
                  profound shifts in my emotional and physical well-being. His intuitive approach and gentle 
                  guidance made all the difference."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-serif font-bold">Sarah M.</p>
                    <p className="text-sm text-foreground/60">Reiki & Energy Work Client</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl relative">
              <div className="text-5xl font-serif absolute top-4 left-4 opacity-10" style={{ color: "#A8C3A7" }}>"</div>
              <div className="relative z-10">
                <p className="font-body italic mb-6">
                  "The Sacred House retreat was exactly what I needed. The combination of fasting, meditation, 
                  and energy work in such a serene environment helped me reconnect with myself. The community 
                  aspect was truly special."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-serif font-bold">Michael R.</p>
                    <p className="text-sm text-foreground/60">Retreat Participant</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl relative">
              <div className="text-5xl font-serif absolute top-4 left-4 opacity-10" style={{ color: "#E3A76F" }}>"</div>
              <div className="relative z-10">
                <p className="font-body italic mb-6">
                  "I've noticed such a difference in my energy since incorporating Nathanel's microgreens into 
                  my daily meals. His knowledge of food as medicine and holistic nutrition has completely 
                  changed how I think about what I eat."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-serif font-bold">Emma K.</p>
                    <p className="text-sm text-foreground/60">Nutrition Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(191, 168, 217, 0.2), rgba(168, 195, 167, 0.2))`,
        }}
      >
        <div className="absolute bottom-0 right-0 opacity-20">
          <Image 
            src="/Grpahic 2.jpg" 
            alt="Decorative Graphic" 
            width={250} 
            height={250}
          />
        </div>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Begin Your Journey</h2>
            <p className="text-xl mb-8 font-body">
              Ready to transform your life through healing, retreats, or holistic nutrition? 
              Explore my offerings and take the first step on your journey to wholeness.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/healing">
                <Button
                  style={{ backgroundColor: "#BFA8D9", color: "white" }}
                  className="hover:opacity-90 text-lg w-full py-6 font-sans"
                >
                  Healing Services
                </Button>
              </Link>
              <Link href="/sacred-house">
                <Button
                  style={{ backgroundColor: "#A8C3A7", color: "white" }}
                  className="hover:opacity-90 text-lg w-full py-6 font-sans"
                >
                  Retreats
                </Button>
              </Link>
              <Link href="/food">
                <Button
                  style={{ backgroundColor: "#E3A76F", color: "white" }}
                  className="hover:opacity-90 text-lg w-full py-6 font-sans"
                >
                  Food & Nutrition
                </Button>
              </Link>
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
                <Link href="/" className="text-foreground/80 hover:text-brand-purple transition-colors font-body font-bold" style={{ color: "#BFA8D9" }}>
                  Home
                </Link>
                <Link href="/healing" className="text-foreground/80 hover:text-brand-purple transition-colors font-body">
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

