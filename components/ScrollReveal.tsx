'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

export type RevealVariant = 'fadeUp' | 'slideLeft' | 'slideRight' | 'scale' | 'fade'

interface ScrollRevealProps {
  children: ReactNode
  variant?: RevealVariant
  delay?: number
  className?: string
  once?: boolean
  margin?: string | { top?: number; right?: number; bottom?: number; left?: number }
}

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
}

const transition = {
  duration: 0.7,
  ease: [0.25, 0.46, 0.45, 0.94],
}

export default function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
  once = true,
  margin = '-80px',
}: ScrollRevealProps) {
  const ref = useRef(null)
  const marginValue = typeof margin === 'string' 
    ? margin 
    : margin 
      ? `${margin.top || 0}px ${margin.right || 0}px ${margin.bottom || 0}px ${margin.left || 0}px`
      : undefined
  const isInView = useInView(ref, { once, margin: marginValue as any })
  const v = variants[variant]

  return (
    <motion.div
      ref={ref}
      initial={v.hidden}
      animate={isInView ? v.visible : v.hidden}
      transition={{ ...transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
