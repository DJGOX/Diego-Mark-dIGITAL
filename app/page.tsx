import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Tools from '@/components/Tools'
import Skills from '@/components/Skills'
import Portfolio from '@/components/Portfolio'
import Workflow from '@/components/Workflow'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Navigation />
      <Hero />
      <About />
      <Tools />
      <Skills />
      <Portfolio />
      <Workflow />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
