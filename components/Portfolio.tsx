'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { X } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const portfolioItems = [
  {
    id: 1,
    category: 'Video Editing',
    title: 'Commercial Campaign',
    description: 'High-energy commercial edit with dynamic cuts and color grading.',
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    category: 'Motion Graphics',
    title: 'Title Sequence',
    description: 'Cinematic title sequence with custom motion graphics and typography.',
    tools: ['After Effects', 'Illustrator'],
    image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    category: 'Photography',
    title: 'Portrait Series',
    description: 'Professional portrait photography with advanced lighting techniques.',
    tools: ['Photoshop', 'Lightroom'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    category: 'Graphic Design',
    title: 'Brand Identity',
    description: 'Complete brand identity system with logo, typography, and visual guidelines.',
    tools: ['Illustrator', 'Photoshop'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    category: 'Video Editing',
    title: 'Documentary Edit',
    description: 'Narrative documentary with seamless storytelling and emotional pacing.',
    tools: ['Premiere Pro', 'DaVinci Resolve'],
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    category: 'Motion Graphics',
    title: 'Social Media Content',
    description: 'Animated social media content with engaging motion graphics.',
    tools: ['After Effects', 'Premiere Pro'],
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop',
  },
]

const categories = ['All', 'Video Editing', 'Motion Graphics', 'Photography', 'Graphic Design']

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null)

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section id="portfolio" ref={ref} className="section-padding bg-dark-bg relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg-orange opacity-20"></div>
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-orange via-brand-red to-brand-pink bg-clip-text text-transparent">
              Portfolio
            </h2>
            <p className="text-lg text-accent-secondary max-w-2xl mx-auto">
              Selected works showcasing creative excellence across different mediums
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.15}>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-brand-orange to-brand-red text-white shadow-lg shadow-brand-orange/50'
                    : 'bg-dark-card text-accent-secondary hover:text-brand-orange border border-dark-surface hover:border-brand-orange/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <ScrollReveal key={item.id} variant="scale" delay={0.1 + index * 0.06}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedItem(item)}
                  className="group bg-dark-card border border-dark-surface rounded-lg overflow-hidden cursor-pointer hover:border-brand-purple/50 hover:shadow-lg hover:shadow-brand-purple/20 transition-all bg-gradient-to-br from-dark-card to-dark-surface/30"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-medium text-accent-primary bg-dark-bg/90 px-3 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-accent-secondary line-clamp-2">{item.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-bg/95 backdrop-blur-md z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-dark-card border border-dark-surface rounded-lg overflow-hidden"
            >
              <div className="relative aspect-video">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-dark-bg/90 rounded-full flex items-center justify-center hover:bg-dark-bg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium text-accent-primary bg-dark-surface px-3 py-1 rounded">
                    {selectedItem.category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-4">{selectedItem.title}</h3>
                <p className="text-lg text-accent-secondary mb-6">{selectedItem.description}</p>
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-accent-secondary">Tools Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-4 py-2 bg-dark-surface rounded-lg text-sm text-accent-secondary border border-dark-surface"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
