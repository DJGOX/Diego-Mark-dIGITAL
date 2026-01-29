'use client'

import { useRef } from 'react'
import { Lightbulb, Camera, Scissors, Palette, Rocket } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const workflowSteps = [
  {
    step: 1,
    title: 'Concept & Planning',
    icon: Lightbulb,
    gradient: 'from-brand-yellow to-brand-orange',
    description: 'Understanding your vision, defining objectives, and creating a strategic creative plan that aligns with your goals.',
  },
  {
    step: 2,
    title: 'Shooting / Asset Creation',
    icon: Camera,
    gradient: 'from-brand-blue to-brand-cyan',
    description: 'Professional photography, video recording, or creating digital assets with attention to composition, lighting, and quality.',
  },
  {
    step: 3,
    title: 'Editing & Post-Production',
    icon: Scissors,
    gradient: 'from-brand-purple to-brand-pink',
    description: 'Precise editing, sequencing, and refinement using professional tools to craft compelling narratives.',
  },
  {
    step: 4,
    title: 'Color Grading',
    icon: Palette,
    gradient: 'from-brand-pink to-brand-red',
    description: 'Advanced color correction and grading to achieve the perfect mood, tone, and cinematic aesthetic.',
  },
  {
    step: 5,
    title: 'Final Delivery',
    icon: Rocket,
    gradient: 'from-brand-cyan to-brand-teal',
    description: 'Exporting in optimal formats, ensuring quality across all platforms, and delivering polished final assets.',
  },
]

export default function Workflow() {
  const ref = useRef(null)

  return (
    <section id="workflow" ref={ref} className="section-padding bg-dark-surface relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg-blue opacity-20"></div>
      <div className="max-w-3xl mx-auto relative z-10 space-y-12">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple bg-clip-text text-transparent">
              Creative Workflow
            </h2>
            <p className="text-lg text-accent-secondary max-w-2xl mx-auto">
              A structured process that ensures every project reaches its full creative potential
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline vertical */}
        <div className="relative">
          <div 
            className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-brand-yellow via-brand-blue via-brand-purple to-brand-cyan opacity-40"
            aria-hidden="true"
          />

          <ul className="space-y-0 list-none">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <li key={step.step}>
                  <ScrollReveal variant="fadeUp" delay={0.1 + index * 0.06}>
                    <div className="relative flex gap-6 pl-14">
                      {/* Nodo en la línea */}
                      <div className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg border-2 border-dark-surface z-10`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Contenido */}
                      <div className="flex-1 min-w-0 pb-10">
                        <span className="text-xs font-bold text-accent-secondary uppercase tracking-wider block mb-1">
                          Step {step.step}
                        </span>
                        <h3 className={`text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                          {step.title}
                        </h3>
                        <p className="text-accent-secondary text-sm md:text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
