"use client"

import { useEffect, useRef } from "react"
import { Heart, Sparkles, Waves } from "lucide-react"

export default function HomepageGraphic() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 1200
    canvas.height = 800

    // Colors from the specified palette
    const sageGreen = "#A8C3A7"
    const softPurple = "#BFA8D9"
    const sandBeige = "#E8D7B7"
    const lightBlue = "#C5E1E6"
    const warmAmber = "#E3A76F"

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
    gradient.addColorStop(0, sandBeige)
    gradient.addColorStop(1, lightBlue)
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw flowing energy lines
    ctx.strokeStyle = softPurple
    ctx.lineWidth = 3
    ctx.beginPath()

    // Create flowing curves
    for (let i = 0; i < 5; i++) {
      ctx.beginPath()
      ctx.moveTo(0, 200 + i * 100)

      // Create wavy pattern
      for (let x = 0; x < canvas.width; x += 50) {
        const y = 200 + i * 100 + Math.sin(x / 50) * 20
        ctx.lineTo(x, y)
      }

      ctx.strokeStyle = i % 2 === 0 ? softPurple : sageGreen
      ctx.stroke()
    }

    // Draw circular energy center
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Outer glow
    const radiusGlow = 220
    const glowGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radiusGlow)
    glowGradient.addColorStop(0, "rgba(191, 168, 217, 0.8)")
    glowGradient.addColorStop(0.7, "rgba(191, 168, 217, 0.2)")
    glowGradient.addColorStop(1, "rgba(191, 168, 217, 0)")

    ctx.fillStyle = glowGradient
    ctx.beginPath()
    ctx.arc(centerX, centerY, radiusGlow, 0, Math.PI * 2)
    ctx.fill()

    // Heart center
    const heartSize = 100
    ctx.fillStyle = warmAmber

    // Draw stylized heart
    ctx.save()
    ctx.translate(centerX, centerY)
    ctx.beginPath()
    ctx.moveTo(0, -heartSize / 4)
    ctx.bezierCurveTo(heartSize / 2, -heartSize, heartSize, -heartSize / 4, 0, heartSize / 2)
    ctx.bezierCurveTo(-heartSize, -heartSize / 4, -heartSize / 2, -heartSize, 0, -heartSize / 4)
    ctx.fill()
    ctx.restore()

    // Add text
    ctx.textAlign = "center"

    // Title
    ctx.font = "bold 64px 'Cormorant Garamond', serif"
    ctx.fillStyle = "#333"
    ctx.fillText("Energy Healing", centerX, 150)

    // Subtitle
    ctx.font = "italic 36px 'Sacramento', cursive"
    ctx.fillStyle = "#333"
    ctx.fillText("Connect to the Heart, the Greatest Power", centerX, 200)

    // Services
    ctx.font = "28px 'Work Sans', sans-serif"
    ctx.fillStyle = "#333"
    const services = ["Reiki", "Tantra Yoga", "Chi Gong", "Energy Work"]
    services.forEach((service, i) => {
      ctx.fillText(service, centerX, canvas.height - 150 + i * 40)
    })

    // Small decorative elements
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const size = Math.random() * 3 + 1

      ctx.fillStyle = i % 2 === 0 ? sageGreen : softPurple
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
    }
  }, [])

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-xl">
      <canvas ref={canvasRef} className="w-full h-auto" style={{ maxHeight: "80vh" }} />

      {/* Overlay content for better accessibility and SEO */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center pointer-events-none">
        <h1
          className="text-5xl font-bold font-serif text-gray-800 mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Energy Healing
        </h1>
        <p className="text-2xl italic mb-8" style={{ fontFamily: "'Sacramento', cursive" }}>
          Connect to the Heart, the Greatest Power
        </p>

        <div className="flex items-center justify-center space-x-6 mt-8">
          <div className="flex flex-col items-center">
            <Heart className="w-10 h-10 mb-2" style={{ color: "#BFA8D9" }} />
            <span className="font-medium" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              Reiki
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Sparkles className="w-10 h-10 mb-2" style={{ color: "#A8C3A7" }} />
            <span className="font-medium" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              Tantra Yoga
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Waves className="w-10 h-10 mb-2" style={{ color: "#E3A76F" }} />
            <span className="font-medium" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              Chi Gong
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

