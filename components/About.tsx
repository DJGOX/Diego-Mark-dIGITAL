'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from './ScrollReveal'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="section-padding bg-dark-surface relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg-purple opacity-50"></div>
      <div className="max-w-6xl mx-auto relative z-10 space-y-8">
        <ScrollReveal variant="slideLeft" delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal variant="slideLeft" delay={0.2}>
            <div className="space-y-6 text-lg text-accent-secondary leading-relaxed"
            >
              <p>
                I am a multidisciplinary creative professional specializing in visual storytelling through design, video, and motion. With a deep passion for cinematic aesthetics and technical excellence, I transform concepts into compelling visual narratives.
              </p>
              <p>
                My work is driven by a creative mindset that balances artistic vision with technical mastery. I excel in bringing ideas to life using industry-standard tools and professional editing workflows, ensuring every project meets the highest standards of quality and impact.
              </p>
              <p>
                Whether it's crafting motion graphics, editing video content, or capturing stunning photography, I approach each project with meticulous attention to detail and a commitment to visual excellence.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slideRight" delay={0.3}>
            <div className="bg-dark-card p-8 rounded-lg border border-brand-purple/30 bg-gradient-to-br from-dark-card to-dark-surface/50"
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">Core Values</h3>
              <ul className="space-y-4">
                {[
                  { text: 'Visual storytelling excellence', color: 'from-brand-purple to-brand-pink' },
                  { text: 'Technical precision and mastery', color: 'from-brand-blue to-brand-cyan' },
                  { text: 'Creative innovation', color: 'from-brand-pink to-brand-red' },
                  { text: 'Professional workflow optimization', color: 'from-brand-cyan to-brand-teal' },
                  { text: 'Client-focused collaboration', color: 'from-brand-teal to-brand-green' },
                ].map((value, index) => (
                  <motion.li
                    key={value.text}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    className="flex items-start gap-3"
                  >
                    <span className={`bg-gradient-to-r ${value.color} bg-clip-text text-transparent font-bold mt-1`}>▸</span>
                    <span className="text-accent-secondary">{value.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
