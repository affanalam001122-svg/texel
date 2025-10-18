import type { Metadata } from 'next'
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Texel - Where Ideas Meet Execution',
  description: 'Premium creative agency specializing in digital innovation and design excellence. We build beautiful, functional, and user-friendly websites and applications.',
  keywords: 'creative agency, digital innovation, design excellence, web development, mobile development, branding, UI/UX, SEO, marketing',
  openGraph: {
    title: 'Texel - Where Ideas Meet Execution',
    description: 'Premium creative agency specializing in digital innovation and design excellence. We build beautiful, functional, and user-friendly websites and applications.',
    url: 'https://texel.com',
    siteName: 'Texel',
    images: [
      {
        url: 'https://texel.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texel - Where Ideas Meet Execution',
    description: 'Premium creative agency specializing in digital innovation and design excellence. We build beautiful, functional, and user-friendly websites and applications.',
    creator: '@texel',
    images: ['https://texel.com/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://texel.com',
    languages: {
      'en-US': 'https://texel.com/en-US',
    },
  },
  icons: {
    icon: '/cropped_circle_image (1).png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased flex flex-col min-h-screen bg-background text-foreground`}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
