import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Figma exact colors
        "zinc-800": "#333333",
        "neutral-600": "#555555",
        "violet-300": "#BFA8D9",
        "stone-300": "#E3DAC2",
        "neutral-400": "#A8A29E",
        
        // Brand colors directly defined
        "brand-green": "#A8C3A7", // Sage Green
        "brand-purple": "#BFA8D9", // Soft Purple
        "brand-beige": "#E8D7B7", // Sand Beige
        "brand-blue": "#C5E1E6", // Light Blue
        "brand-amber": "#E3A76F", // Warm Amber
        
        // Theme colors
        "theme": {
          DEFAULT: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          accent: "var(--color-accent)",
          text: "var(--color-text)",
        },
        
        // Pillar-specific colors
        "nutrition": {
          primary: "var(--nutrition-primary)",
          secondary: "var(--nutrition-secondary)",
          accent: "var(--nutrition-accent)",
        },
        "mindset": {
          primary: "var(--mindset-primary)",
          secondary: "var(--mindset-secondary)",
          accent: "var(--mindset-accent)",
        },
        "sacred-house": {
          primary: "var(--sacred-house-primary)",
          secondary: "var(--sacred-house-secondary)",
          accent: "var(--sacred-house-accent)",
        },
        // Text colors
        "text": {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          light: "var(--text-light)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-inter)", "Work Sans", "sans-serif"],
        accent: ["var(--font-playfair)", "Cormorant Garamond", "serif"],
        body: ["Lora", "serif"],
        "playfair": ["Playfair Display", "serif"],
        "lora": ["Lora", "serif"],
        "inter": ["Inter", "sans-serif"],
      },
      backgroundColor: {
        'primary-brand': 'var(--color-primary)',
        'secondary-brand': 'var(--color-secondary)',
        'sage-green': 'var(--sage-green)',
        'soft-purple': 'var(--soft-purple)',
        'sand-beige': 'var(--sand-beige)',
        'light-blue': 'var(--light-blue)',
        'amber': 'var(--amber)',
      },
      textColor: {
        'primary-brand': 'var(--color-primary)',
        'secondary-brand': 'var(--color-secondary)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config

