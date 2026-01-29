'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const tools = [
  {
    name: 'Adobe Photoshop',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
    description: 'Advanced image manipulation, compositing, and retouching for photography and digital art.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Adobe Illustrator',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg',
    description: 'Vector graphics creation, logo design, and scalable visual assets for branding and design.',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Adobe Premiere Pro',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg',
    description: 'Professional video editing, timeline management, and multi-format production workflows.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'After Effects',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg',
    description: 'Motion graphics, visual effects, compositing, and dynamic animation creation.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'DaVinci Resolve',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg',
    description: 'Advanced color grading, professional editing, and post-production finishing.',
    color: 'from-red-500 to-orange-500',
  },
]

export default function Tools() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="tools" ref={ref} className="section-padding bg-dark-bg relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg-blue opacity-30"></div>
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-teal bg-clip-text text-transparent">
              Tools & Software
            </h2>
            <p className="text-lg text-accent-secondary max-w-2xl mx-auto">
              Professional creative tools I use to bring visual concepts to life
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <ScrollReveal key={tool.name} variant="scale" delay={0.1 + index * 0.08}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-dark-card border border-dark-surface rounded-lg p-8 hover:border-brand-purple/50 hover:shadow-lg hover:shadow-brand-purple/20 transition-all cursor-pointer bg-gradient-to-br from-dark-card to-dark-surface/30"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform p-3`}>
                  <div className="relative w-full h-full">
                    <Image
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{tool.name}</h3>
                <p className="text-accent-secondary leading-relaxed">{tool.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
