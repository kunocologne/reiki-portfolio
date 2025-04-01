import Image from "next/image"
import { Heart, Sparkles, Waves, Users, Star, Leaf, ShoppingBag, Salad, Sprout } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Metadata } from "next"
import { Navigation } from "@/components/layout/Navigation"

export const metadata: Metadata = {
  title: "Holistic Food & Microgreens | Nathanel",
  description: "Discover the healing power of food with organic microgreens, holistic nutrition, and private chef services. Food as medicine for optimal health and vitality.",
}

export default function Food() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F5F2" }}>
      {/* Header */}
      <Navigation activePage="food" />

      {/* Hero Section with Parallax and Overlapping Elements */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F9F5F0]/90 to-transparent" />
          <Image
            src="/images/food/microgreens-1.jpg"
            alt="Fresh Microgreens"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container relative">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 z-10">
              <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-lg">
                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                  Food as <span style={{ color: "#E3A76F" }}>Medicine</span>
                </h1>
                <p className="text-xl md:text-2xl font-accent text-foreground/80 mt-4 mb-4">
                  Nourish your body, elevate your spirit
                </p>
                <p className="text-lg text-foreground/70 max-w-md font-body mb-8">
                  Experience the healing power of thoughtfully grown microgreens, organic nutrition, 
                  and holistic culinary expertise that nurtures your well-being from the inside out.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    style={{ backgroundColor: "#E3A76F", color: "white" }}
                    className="hover:opacity-90 text-lg px-8 py-6 font-sans"
                  >
                    Shop Microgreens
                  </Button>
                  <Button
                    variant="outline"
                    style={{ borderColor: "#A8C3A7", color: "#A8C3A7" }}
                    className="hover:bg-opacity-10 text-lg px-8 py-6 font-sans"
                  >
                    Learn About Nutrition
                  </Button>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 relative hidden md:block">
              <div className="absolute -left-20 -top-12 w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/food/microgreens-2.jpg"
                  alt="Culinary Arts"
                  width={224}
                  height={224}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -right-12 bottom-16 w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/food/microgreens-3.jpg"
                  alt="Healthy Food"
                  width={256} 
                  height={256}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute right-10 top-20 opacity-10">
          <Image 
            src="/icons/metatron-cube.svg"
            alt="Sacred Geometry"
            width={300}
            height={300}
          />
        </div>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif font-bold">Food Philosophy</h2>
              <p className="text-xl font-accent" style={{ color: "#E3A76F" }}>
                The foundation of vibrant health
              </p>
              
              <p className="text-lg font-body">
                My approach to food is rooted in the belief that what we eat becomes who we are—physically, 
                energetically, and spiritually. With culinary training from Le Cordon Bleu Paris and deep study 
                of nutritional healing at Hippocrates Health Institute, I've developed a unique perspective on 
                food as a transformative healing force.
              </p>
              
              <p className="text-lg font-body">
                I believe that food in its most vital, living state contains not just nutrients but also vibrational 
                energy that can elevate our body's natural healing abilities. This is why I focus on organic, 
                living foods like microgreens—tiny powerhouses of nutrition that can transform your health.
              </p>
              
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-5 rounded-xl" style={{ backgroundColor: "rgba(227, 167, 111, 0.1)" }}>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}
                  >
                    <Leaf className="h-6 w-6" style={{ color: "#E3A76F" }} />
                  </div>
                  <h4 className="font-serif font-bold text-sm">Organic & Living</h4>
                </div>
                
                <div className="text-center p-5 rounded-xl" style={{ backgroundColor: "rgba(168, 195, 167, 0.1)" }}>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: "rgba(168, 195, 167, 0.2)" }}
                  >
                    <Sprout className="h-6 w-6" style={{ color: "#A8C3A7" }} />
                  </div>
                  <h4 className="font-serif font-bold text-sm">Nutrient Dense</h4>
                </div>
                
                <div className="text-center p-5 rounded-xl" style={{ backgroundColor: "rgba(191, 168, 217, 0.1)" }}>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}
                  >
                    <Sparkles className="h-6 w-6" style={{ color: "#BFA8D9" }} />
                  </div>
                  <h4 className="font-serif font-bold text-sm">Energetically Aligned</h4>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/food/microgreens-3.jpg"
                  alt="Holistic Food Philosophy"
                  width={600}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 rounded-full" 
                style={{ backgroundColor: "rgba(227, 167, 111, 0.1)" }}></div>
              <div className="absolute -z-10 -top-8 -right-8 w-48 h-48 rounded-full" 
                style={{ backgroundColor: "rgba(168, 195, 167, 0.1)" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Microgreens Offerings */}
      <section className="py-24" style={{ backgroundColor: "rgba(168, 195, 167, 0.1)" }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Microgreens</h2>
            <p className="text-xl font-accent mb-6" style={{ color: "#E3A76F" }}>
              Nutrient-Dense Powerhouses for Your Health
            </p>
            <p className="max-w-2xl mx-auto text-foreground/70 font-body">
              Our microgreens are grown with intention in small batches using organic methods. 
              These tiny nutritional powerhouses contain up to 40x the nutrients of their mature counterparts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sunflower Microgreens */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-transform hover:-translate-y-2 duration-300">
              <div className="relative aspect-square">
                <Image
                  src="/images/food/microgreens-1.jpg"
                  alt="Sunflower Microgreens"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-sm font-bold px-3 py-1 rounded-full" 
                    style={{ color: "#E3A76F" }}>Bestseller</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-serif text-xl font-bold">Sunflower Microgreens</h3>
                  <span className="font-bold" style={{ color: "#E3A76F" }}>$12</span>
                </div>
                <p className="text-foreground/70 font-body mb-4">
                  Nutty, crunchy greens packed with protein, healthy fats, and chlorophyll. 
                  Perfect for salads, sandwiches, or as a nutritious snack.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: "#A8C3A7" }}></span>
                    <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: "#A8C3A7" }}></span>
                    <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: "#A8C3A7" }}></span>
                    <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: "#A8C3A7" }}></span>
                    <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: "#A8C3A7" }}></span>
                  </div>
                  <Button size="sm" className="rounded-full" style={{ backgroundColor: "#E3A76F", color: "white" }}>
                    <ShoppingBag className="h-4 w-4 mr-2" /> Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Pea Shoot Microgreens */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-transform hover:-translate-y-2 duration-300">
              <div className="relative aspect-square">
                <Image
                  src="/images/food/microgreens-2.jpg"
                  alt="Pea Shoot Microgreens"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-serif text-xl font-bold">Pea Shoot Microgreens</h3>
                  <span className="font-bold" style={{ color: "#E3A76F" }}>$10</span>
                </div>
                <p className="text-foreground/70 font-body mb-4">
                  Sweet, crisp greens with the flavor of fresh peas. High in vitamins A, C, and folate, 
                  supporting immune function and energy.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: "#A8C3A7" }}></span>
                    <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: "#A8C3A7" }}></span>
                    <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: "#A8C3A7" }}></span>
                    <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: "#A8C3A7" }}></span>
                    <span className="inline-block w-4 h-4 rounded-full opacity-20" style={{ backgroundColor: "#A8C3A7" }}></span>
                  </div>
                  <Button size="sm" className="rounded-full" style={{ backgroundColor: "#E3A76F", color: "white" }}>
                    <ShoppingBag className="h-4 w-4 mr-2" /> Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Radish Microgreens */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-transform hover:-translate-y-2 duration-300">
              <div className="relative aspect-square">
                <Image
                  src="/images/food/microgreens-3.jpg"
                  alt="Radish Microgreens"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-sm font-bold px-3 py-1 rounded-full" 
                    style={{ color: "#BFA8D9" }}>New</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-serif text-xl font-bold">Radish Microgreens</h3>
                  <span className="font-bold" style={{ color: "#E3A76F" }}>$11</span>
                </div>
                <p className="text-foreground/70 font-body mb-4">
                  Spicy, zesty greens that add a flavorful kick to any dish. Rich in antioxidants 
                  and compounds that support detoxification.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: "#A8C3A7" }}></span>
                    <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: "#A8C3A7" }}></span>
                    <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: "#A8C3A7" }}></span>
                    <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: "#A8C3A7" }}></span>
                    <span className="inline-block w-4 h-4 rounded-full opacity-20" style={{ backgroundColor: "#A8C3A7" }}></span>
                  </div>
                  <Button size="sm" className="rounded-full" style={{ backgroundColor: "#E3A76F", color: "white" }}>
                    <ShoppingBag className="h-4 w-4 mr-2" /> Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              style={{ backgroundColor: "#E3A76F", color: "white" }}
              className="hover:opacity-90 text-lg px-8 py-6 font-sans">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Available Microgreens</h2>
            <p className="text-xl font-accent mb-2" style={{ color: "#BFA8D9" }}>
              Nutrient-dense living foods for vitality
            </p>
            <p className="max-w-2xl mx-auto text-foreground/70 font-body">
              All microgreens are grown organically in small batches to ensure optimal freshness and nutritional value. Available for pickup or local delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div
              className="rounded-xl p-8 text-center hover:shadow-lg transition-shadow relative overflow-hidden h-full"
              style={{ backgroundColor: "rgba(232, 215, 183, 0.2)" }}
            >
              <div className="absolute top-2 right-2 opacity-10">
                <Image 
                  src="/icons/Icon 1.jpg"
                  alt="Private Chef Icon"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}
              >
                <Star className="h-8 w-8" style={{ color: "#E3A76F" }} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Sunflower Microgreens</h3>
              <p className="text-foreground/70 font-body">
                Nutty and crunchy with a mild flavor, these protein-rich greens support heart health and immune function.
              </p>
            </div>

            <div
              className="rounded-xl p-8 text-center hover:shadow-lg transition-shadow relative overflow-hidden h-full"
              style={{ backgroundColor: "rgba(232, 215, 183, 0.2)" }}
            >
              <div className="absolute top-2 right-2 opacity-10">
                <Image 
                  src="/icons/Icon 3.jpeg"
                  alt="Workshop Icon"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "rgba(168, 195, 167, 0.2)" }}
              >
                <Sparkles className="h-8 w-8" style={{ color: "#A8C3A7" }} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Pea Shoots</h3>
              <p className="text-foreground/70 font-body">
                Sweet and tender with high levels of antioxidants, vitamins A, C, and E, folate, and essential minerals.
              </p>
            </div>

            <div
              className="rounded-xl p-8 text-center hover:shadow-lg transition-shadow relative overflow-hidden h-full"
              style={{ backgroundColor: "rgba(232, 215, 183, 0.2)" }}
            >
              <div className="absolute top-2 right-2 opacity-10">
                <Image 
                  src="/icons/Icon 2.jpge.webp"
                  alt="Retreat Icon"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}
              >
                <Waves className="h-8 w-8" style={{ color: "#BFA8D9" }} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Radish Microgreens</h3>
              <p className="text-foreground/70 font-body">
                Spicy and vibrant with powerful detoxifying properties, supporting liver health and digestion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Client Experiences</h2>
            <p className="text-xl font-accent mb-2" style={{ color: "#BFA8D9" }}>
              The healing power of conscious cuisine
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="flex gap-4 items-start">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}
                >
                  <span className="text-xl" style={{ color: "#E3A76F" }}>
                    "
                  </span>
                </div>
                <div>
                  <p className="text-foreground/70 font-body italic mb-4">
                    "Nathanel transformed our retreat experience with his incredible food. Not only was every dish absolutely delicious, but participants reported improved digestion, increased energy, and heightened clarity during our program. His understanding of how food affects our energetic state is unparalleled."
                  </p>
                  <p className="font-serif font-bold">Rachel L., Retreat Facilitator</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="flex gap-4 items-start">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(168, 195, 167, 0.2)" }}
                >
                  <span className="text-xl" style={{ color: "#A8C3A7" }}>
                    "
                  </span>
                </div>
                <div>
                  <p className="text-foreground/70 font-body italic mb-4">
                    "Working with Nathanel as our private chef has been life-changing. His food is not only exquisite but has completely shifted our family's relationship with eating. My chronic inflammation has decreased dramatically, and my children are actually excited about vegetables now! His presence in our kitchen brings such positive energy."
                  </p>
                  <p className="font-serif font-bold">Daniel & Sofia M.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="flex gap-4 items-start">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}
                >
                  <span className="text-xl" style={{ color: "#BFA8D9" }}>
                    "
                  </span>
                </div>
                <div>
                  <p className="text-foreground/70 font-body italic mb-4">
                    "I attended Nathanel's weekend culinary workshop with no prior knowledge of plant-based cooking. His teaching style made complex techniques accessible, and I left with practical skills and a deeper appreciation for how food can be medicine. Three months later, I'm still implementing what I learned, and my energy and mental clarity have improved significantly."
                  </p>
                  <p className="font-serif font-bold">James T.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="flex gap-4 items-start">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(197, 225, 230, 0.2)" }}
                >
                  <span className="text-xl" style={{ color: "#C5E1E6" }}>
                    "
                  </span>
                </div>
                <div>
                  <p className="text-foreground/70 font-body italic mb-4">
                    "Nathanel catered my mother's 70th birthday celebration, and it was unlike any dining experience we've ever had. The fusion of gourmet techniques with health-supportive ingredients created dishes that were sophisticated yet nourishing. Guests were amazed that food could be both healing and indulgent at the same time."
                  </p>
                  <p className="font-serif font-bold">Elena P.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Services Section */}
      <section className="py-24 bg-white relative">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/food/microgreens-2.jpg"
                  alt="Private Chef Services"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -z-10 -top-6 -left-6 rounded-full" style={{ backgroundColor: "rgba(227, 167, 111, 0.1)", width: "100%", height: "100%" }}></div>
            </div>
            
            <div className="md:col-span-7 space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif font-bold">Private Chef Services</h2>
              <p className="text-xl font-accent" style={{ color: "#E3A76F" }}>
                Culinary expertise with a healing focus
              </p>
              
              <p className="text-lg font-body">
                With training from Le Cordon Bleu Paris and experience in Michelin-starred restaurants, 
                I bring culinary excellence to your table with a healing intention. My private chef services 
                combine gourmet techniques with nutritional wisdom to create meals that nourish body and soul.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1"
                      style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}
                    >
                      <Salad className="h-6 w-6" style={{ color: "#E3A76F" }} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg">Special Events</h4>
                      <p className="text-foreground/70 font-body">
                        Elevate your gatherings with customized menus featuring organic, seasonal ingredients and artistic presentation.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1"
                      style={{ backgroundColor: "rgba(168, 195, 167, 0.2)" }}
                    >
                      <Leaf className="h-6 w-6" style={{ color: "#A8C3A7" }} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg">Healing Meal Plans</h4>
                      <p className="text-foreground/70 font-body">
                        Personalized meal preparation targeting specific health goals with therapeutic food combinations.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1"
                      style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}
                    >
                      <Sparkles className="h-6 w-6" style={{ color: "#BFA8D9" }} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg">Cooking Classes</h4>
                      <p className="text-foreground/70 font-body">
                        Learn the art of nutritious food preparation with hands-on instruction in your home or a group setting.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1"
                      style={{ backgroundColor: "rgba(197, 225, 230, 0.2)" }}
                    >
                      <Users className="h-6 w-6" style={{ color: "#C5E1E6" }} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg">Retreat Catering</h4>
                      <p className="text-foreground/70 font-body">
                        Complete nutritional support for wellness retreats, featuring cleansing and energizing menu options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button
                style={{ backgroundColor: "#E3A76F", color: "white" }}
                className="hover:opacity-90 text-lg px-8 py-6 font-sans"
              >
                Inquire About Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Tips Section */}
      <section className="py-24 relative" style={{ backgroundColor: "rgba(227, 167, 111, 0.05)" }}>
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Nutrition Wisdom</h2>
            <p className="text-xl font-accent mb-2" style={{ color: "#E3A76F" }}>
              Simple tips for vibrant health
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}
              >
                <span className="text-2xl font-serif font-bold" style={{ color: "#E3A76F" }}>1</span>
              </div>
              <h3 className="font-serif font-bold text-xl mb-4">Eat Living Foods</h3>
              <p className="text-foreground/70 font-body">
                Incorporate raw, sprouted, and fermented foods into your daily diet to maximize enzyme activity and life force energy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "rgba(168, 195, 167, 0.2)" }}
              >
                <span className="text-2xl font-serif font-bold" style={{ color: "#A8C3A7" }}>2</span>
              </div>
              <h3 className="font-serif font-bold text-xl mb-4">Hydrate Mindfully</h3>
              <p className="text-foreground/70 font-body">
                Drink filtered water with a pinch of mineral salt to enhance cellular absorption and support electrolyte balance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "rgba(191, 168, 217, 0.2)" }}
              >
                <span className="text-2xl font-serif font-bold" style={{ color: "#BFA8D9" }}>3</span>
              </div>
              <h3 className="font-serif font-bold text-xl mb-4">Eat with Intention</h3>
              <p className="text-foreground/70 font-body">
                Practice mindful eating by removing distractions and expressing gratitude before meals to enhance digestion and nutrient absorption.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "rgba(197, 225, 230, 0.2)" }}
              >
                <span className="text-2xl font-serif font-bold" style={{ color: "#C5E1E6" }}>4</span>
              </div>
              <h3 className="font-serif font-bold text-xl mb-4">Listen to Your Body</h3>
              <p className="text-foreground/70 font-body">
                Develop awareness of how different foods affect your energy, mood, and wellbeing to create your optimal personal nutrition plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#E3A76F]/10 to-[#A8C3A7]/10 p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute -right-12 -bottom-12">
              <Image 
                src="/Graphic 1.jpeg" 
                alt="Decorative Element" 
                width={250} 
                height={250}
                className="opacity-20" 
              />
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Transform Your Health?</h2>
              <p className="text-lg mb-8 font-body max-w-2xl mx-auto">
                Whether you're looking to incorporate nutrient-dense microgreens into your diet, 
                book private chef services, or learn more about holistic nutrition, I'm here to support 
                your journey to vibrant health.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  style={{ backgroundColor: "#E3A76F", color: "white" }}
                  className="hover:opacity-90 text-lg px-8 py-6 font-sans"
                >
                  Shop Microgreens
                </Button>
                <Button
                  variant="outline"
                  style={{ borderColor: "#A8C3A7", color: "#A8C3A7" }}
                  className="hover:bg-opacity-10 text-lg px-8 py-6 font-sans"
                >
                  Contact Me
                </Button>
              </div>
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
                <Link href="/healing" className="text-foreground/80 hover:text-brand-purple transition-colors font-body">
                  Healing
                </Link>
                <Link href="/sacred-house" className="text-foreground/80 hover:text-brand-purple transition-colors font-body">
                  Sacred House
                </Link>
                <Link href="/food" className="text-foreground/80 hover:text-brand-purple transition-colors font-body font-bold" style={{ color: "#E3A76F" }}>
                  Food
                </Link>
                <Link href="/contact" className="text-foreground/80 hover:text-brand-purple transition-colors font-body">
                  Contact
                </Link>
              </nav>

              <div className="flex gap-4 mt-6 md:mt-0">
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110" 
                  style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}
                  aria-label="Instagram"
                >
                  <Heart className="h-5 w-5" style={{ color: "#E3A76F" }} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110" 
                  style={{ backgroundColor: "rgba(227, 167, 111, 0.2)" }}
                  aria-label="Facebook"
                >
                  <Sparkles className="h-5 w-5" style={{ color: "#E3A76F" }} />
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