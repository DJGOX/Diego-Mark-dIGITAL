'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Mail, Linkedin, Instagram } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" ref={ref} className="section-padding bg-dark-surface relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg-purple opacity-30"></div>
      <div className="max-w-4xl mx-auto relative z-10 space-y-16">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-purple via-brand-pink to-brand-red bg-clip-text text-transparent">
              Let's Create Something Powerful
            </h2>
            <p className="text-lg text-accent-secondary max-w-2xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's discuss your next creative project.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal variant="slideLeft" delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-dark-surface rounded-lg text-accent-primary placeholder-accent-secondary focus:outline-none focus:border-accent-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-dark-surface rounded-lg text-accent-primary placeholder-accent-secondary focus:outline-none focus:border-accent-primary transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-card border border-dark-surface rounded-lg text-accent-primary placeholder-accent-secondary focus:outline-none focus:border-accent-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-pink text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:from-brand-pink hover:to-brand-purple transition-all shadow-lg shadow-brand-purple/50"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </ScrollReveal>

          <ScrollReveal variant="slideRight" delay={0.25}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-accent-secondary leading-relaxed mb-8">
                  Whether you're looking for video editing, motion graphics, photography, or complete creative direction, I'm here to help bring your vision to life. Let's collaborate on something extraordinary.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:contact@diegomd.com"
                  className="flex items-center gap-4 text-accent-secondary hover:text-accent-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan border border-transparent flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span>contact@diegomd.com</span>
                </a>

                <div className="flex items-center gap-4 pt-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-white transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-pink to-brand-red flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
