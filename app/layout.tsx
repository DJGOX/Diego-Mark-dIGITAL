import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Creative Visual & Video Specialist | Portfolio',
  description: 'Professional creative services in video editing, motion graphics, photography, and visual design using Adobe Creative Cloud and professional editing workflows.',
  keywords: 'video editing, motion graphics, photography, graphic design, Adobe Premiere Pro, After Effects, DaVinci Resolve, creative services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-dark-bg text-accent-primary">
        {children}
      </body>
    </html>
  )
}
