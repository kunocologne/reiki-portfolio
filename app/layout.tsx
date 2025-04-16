import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Nathanael Mor | Holistic Healing & Wellness',
  description: 'Journey to wholeness through healing, sacred space, and nourishment with Nathanael Mor - holistic wellness practitioner and guide.',
  keywords: 'holistic healing, reiki, wellness, sacred space, nutrition, mindfulness, holistic health',
  authors: [{ name: 'Nathanael Mor' }],
  creator: 'Nathanael Mor',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nathanaelmor.com',
    title: 'Nathanael Mor | Holistic Healing & Wellness',
    description: 'Transformative healing practices for mind, space, and nourishment',
    siteName: 'Nathanael Mor Wellness',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nathanael Mor Wellness',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nathanael Mor | Holistic Healing & Wellness',
    description: 'Transformative healing practices for mind, space, and nourishment',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
