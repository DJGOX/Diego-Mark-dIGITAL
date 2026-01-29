'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from './ScrollReveal'

// Componente de icono 3D realista
const Icon3D = ({ children, gradient }: { children: React.ReactNode, gradient: string }) => {
  return (
    <div className="relative perspective-1000">
      <div className={`relative w-16 h-16 transform-style-3d group-hover:rotate-y-12 group-hover:rotate-x-12 transition-transform duration-500`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-lg shadow-2xl`}
          style={{
            transform: 'translateZ(8px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1) inset',
          }}
        >
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            {children}
          </div>
        </div>
        {/* Sombra 3D */}
        <div 
          className="absolute inset-0 rounded-lg opacity-50 blur-xl"
          style={{
            background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
            transform: 'translateZ(-8px) translateY(4px)',
          }}
        ></div>
      </div>
    </div>
  )
}

// Iconos SVG 3D personalizados
const VideoIcon3D = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 10L19.553 7.276C20.217 6.886 21 7.35 21 8.118V15.882C21 16.65 20.217 17.114 19.553 16.724L15 14V10Z" fill="currentColor" opacity="0.9"/>
    <rect x="3" y="6" width="12" height="12" rx="2" fill="currentColor" opacity="0.7"/>
    <rect x="5" y="8" width="8" height="8" rx="1" fill="currentColor" opacity="0.3"/>
  </svg>
)

const SocialMediaIcon3D = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.8"/>
    <circle cx="12" cy="12" r="7" fill="currentColor" opacity="0.5"/>
    <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
    <circle cx="17" cy="7" r="2" fill="white" opacity="0.9"/>
  </svg>
)

const MotionGraphicsIcon3D = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" opacity="0.8"/>
    <rect x="6" y="6" width="12" height="12" rx="1" fill="currentColor" opacity="0.5"/>
    <path d="M9 9L15 15M15 9L9 15" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
    <circle cx="12" cy="12" r="2" fill="white" opacity="0.9"/>
  </svg>
)

const CameraIcon3D = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="7" width="20" height="14" rx="2" fill="currentColor" opacity="0.8"/>
    <circle cx="12" cy="14" r="4" fill="currentColor" opacity="0.5"/>
    <circle cx="12" cy="14" r="2.5" fill="white" opacity="0.9"/>
    <rect x="6" y="5" width="3" height="2" rx="0.5" fill="currentColor" opacity="0.8"/>
    <rect x="15" y="5" width="3" height="2" rx="0.5" fill="currentColor" opacity="0.8"/>
  </svg>
)

const BrandIcon3D = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.8"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
    <circle cx="12" cy="12" r="2" fill="white" opacity="0.9"/>
  </svg>
)

const PromoIcon3D = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" opacity="0.8"/>
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
    <circle cx="12" cy="12" r="1.5" fill="white" opacity="0.9"/>
  </svg>
)

const services = [
  {
    title: 'Video Editing',
    icon: VideoIcon3D,
    gradient: 'from-brand-blue to-brand-cyan',
    description: 'Professional video editing services for commercials, documentaries, social media content, and corporate videos. Expert in narrative pacing, multi-cam editing, and seamless transitions.',
    features: ['Narrative Editing', 'Commercial Projects', 'Social Media Content', 'Multi-cam Editing'],
  },
  {
    title: 'Social Media Content',
    icon: SocialMediaIcon3D,
    gradient: 'from-brand-pink to-brand-red',
    description: 'Engaging social media content optimized for platforms like Instagram, TikTok, YouTube, and LinkedIn. Eye-catching visuals that drive engagement.',
    features: ['Short-form Videos', 'Reels & Stories', 'Platform Optimization', 'Trend Integration'],
  },
  {
    title: 'Motion Graphics',
    icon: MotionGraphicsIcon3D,
    gradient: 'from-brand-purple to-brand-pink',
    description: 'Dynamic motion graphics and animated content including title sequences, lower thirds, explainer videos, and visual effects.',
    features: ['Title Sequences', 'Animated Graphics', 'Visual Effects', 'Kinetic Typography'],
  },
  {
    title: 'Photography',
    icon: CameraIcon3D,
    gradient: 'from-brand-orange to-brand-yellow',
    description: 'Professional photography services including portraits, product photography, event coverage, and creative shoots with advanced lighting techniques.',
    features: ['Portrait Photography', 'Product Shots', 'Event Coverage', 'Creative Concepts'],
  },
  {
    title: 'Brand Visuals',
    icon: BrandIcon3D,
    gradient: 'from-brand-teal to-brand-green',
    description: 'Complete brand identity design including logos, visual guidelines, marketing materials, and cohesive brand aesthetics.',
    features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'Visual Guidelines'],
  },
  {
    title: 'Promotional Videos',
    icon: PromoIcon3D,
    gradient: 'from-brand-cyan to-brand-blue',
    description: 'High-impact promotional and marketing videos that tell your brand story and drive conversions. From concept to final delivery.',
    features: ['Brand Videos', 'Product Launches', 'Campaign Content', 'Marketing Assets'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref} className="section-padding bg-dark-bg relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg-purple opacity-20"></div>
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-purple via-brand-pink to-brand-red bg-clip-text text-transparent">
              Services
            </h2>
            <p className="text-lg text-accent-secondary max-w-2xl mx-auto">
              Comprehensive creative services tailored to your needs
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={service.title} variant="fadeUp" delay={0.15 + index * 0.08}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`bg-dark-card border border-dark-surface rounded-lg p-8 hover:border-brand-purple/50 transition-all group bg-gradient-to-br from-dark-card to-dark-surface/30 hover:shadow-lg hover:shadow-brand-purple/20`}
                >
                  <div className="mb-6 flex items-center justify-center">
                    <div className="relative">
                      <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl group-hover:shadow-${service.gradient.split(' ')[1]}/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                        style={{
                          transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)',
                          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1) inset, 0 1px 2px rgba(255, 255, 255, 0.2) inset',
                        }}
                      >
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60"></div>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent"></div>
                        <Icon className="w-10 h-10 text-white relative z-10 drop-shadow-lg" />
                      </div>
                      {/* Sombra 3D debajo */}
                      <div 
                        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-4 rounded-full blur-xl opacity-60 bg-gradient-to-r ${service.gradient}`}
                        style={{
                          transform: 'translateX(-50%) translateY(4px)',
                        }}
                      ></div>
                    </div>
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>{service.title}</h3>
                  <p className="text-accent-secondary mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-accent-secondary">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
