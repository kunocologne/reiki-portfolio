"use client"

import Image from "next/image";

export default function WhyItWorksSection() {
  return (
    <section className="py-20 bg-amber-50/50" id="why-it-works">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="w-10 h-10 rounded-full bg-movement-primary flex items-center justify-center text-white text-xl mx-auto mb-4">
                ✦
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Why It Works
            </h2>
            <div className="h-1 w-24 bg-movement-primary/50 mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto text-gray-700">
              The science and wisdom behind our movement practices
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-movement-primary/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-movement-primary">
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">Nervous System Regulation</h3>
              <p className="text-gray-700 mb-4">
                Our movement practices activate the parasympathetic nervous system, reducing stress hormones like cortisol and increasing feel-good neurotransmitters like serotonin and dopamine.
              </p>
              <p className="text-gray-700">
                This regulation creates a foundation for healing by shifting from "fight or flight" to "rest and digest" states, where true transformation can occur.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-movement-primary/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-movement-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M22 12H12l4.2-4.2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">Somatic Release</h3>
              <p className="text-gray-700 mb-4">
                The body stores emotions and trauma in cellular memory. Conscious movement practices help release these stored tensions, creating space for new patterns and freedom.
              </p>
              <p className="text-gray-700">
                This process of releasing what no longer serves us makes room for vitality and authentic expression to emerge.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-movement-primary/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-movement-primary">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">Mind-Body Integration</h3>
              <p className="text-gray-700 mb-4">
                Modern life often creates disconnection between our thoughts and physical sensations. Our practices rebuild this vital connection, improving intuition and self-awareness.
              </p>
              <p className="text-gray-700">
                This integration helps us make choices aligned with our true needs and deepest wisdom, rather than conditioned patterns.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-movement-primary/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-movement-primary">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">Collective Resonance</h3>
              <p className="text-gray-700 mb-4">
                When we move together intentionally, we create powerful energetic fields that amplify individual transformation. This "group field" supports deeper work than is possible alone.
              </p>
              <p className="text-gray-700">
                The Sacred House creates container spaces where this collective resonance can flourish, accelerating personal growth and healing.
              </p>
            </div>
          </div>

          {/* Research Section */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-serif font-semibold mb-6">
                  Research-Backed Approach
                </h3>
                <p className="text-gray-700 mb-6">
                  Our movement practices draw from both ancient wisdom traditions and cutting-edge research in neuroscience, somatic psychology, and trauma studies.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Polyvagal theory informs our nervous system regulation techniques</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Somatic experiencing principles guide our trauma-informed practices</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Flow state research shows movement practices improve neuroplasticity</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Embodied cognition studies confirm the body's role in emotional processing</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-full min-h-[300px]">
                <Image
                  src="/images/sacred-house/research.jpg"
                  alt="Research-backed movement practices"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 