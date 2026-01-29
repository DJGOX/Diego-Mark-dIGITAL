'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from './ScrollReveal'

const skillCategories = [
  {
    title: 'Graphic Design',
    skills: ['Logo Design', 'Brand Identity', 'Print Design', 'Digital Graphics', 'Typography'],
    gradient: 'from-brand-purple to-brand-pink',
  },
  {
    title: 'Video Editing',
    skills: ['Narrative Editing', 'Commercial Editing', 'Social Media Content', 'Multi-cam Editing', 'Audio Sync'],
    gradient: 'from-brand-blue to-brand-cyan',
  },
  {
    title: 'Motion Graphics',
    skills: ['2D Animation', 'Title Sequences', 'Lower Thirds', 'Visual Effects', 'Kinetic Typography'],
    gradient: 'from-brand-pink to-brand-red',
  },
  {
    title: 'Color Grading',
    skills: ['Cinematic Looks', 'Color Correction', 'LUT Creation', 'HDR Grading', 'Skin Tone Matching'],
    gradient: 'from-brand-orange to-brand-yellow',
  },
  {
    title: 'Photography',
    skills: ['Portrait Photography', 'Product Photography', 'Event Coverage', 'Lighting Techniques', 'Composition'],
    gradient: 'from-brand-cyan to-brand-teal',
  },
  {
    title: 'Video Production',
    skills: ['Pre-Production Planning', 'Camera Operation', 'Framing & Composition', 'Storytelling', 'Post-Production'],
    gradient: 'from-brand-teal to-brand-green',
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} className="section-padding bg-dark-surface relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg-teal opacity-30"></div>
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-teal via-brand-green to-brand-cyan bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-lg text-accent-secondary max-w-2xl mx-auto">
              Comprehensive creative capabilities across the full multimedia spectrum
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={category.title} variant="fadeUp" delay={0.15 + categoryIndex * 0.08}>
              <motion.div
                className={`bg-dark-card border border-dark-surface rounded-lg p-8 hover:border-brand-purple/50 transition-all bg-gradient-to-br from-dark-card to-dark-surface/30 hover:shadow-lg hover:shadow-brand-purple/20`}
              >
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.5 }}
                      className="flex items-center gap-3 text-accent-secondary"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
