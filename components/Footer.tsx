'use client'

import ScrollReveal from './ScrollReveal'

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-dark-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <ScrollReveal variant="fade" delay={0.1}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-accent-secondary text-sm">
              © {new Date().getFullYear()} Diego MD. All rights reserved.
            </p>
            <p className="text-accent-secondary text-sm">
              Creative Visual & Video Specialist
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
