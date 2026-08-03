import { About } from '../components/About'
import { Clients } from '../components/Clients'
import { Contact } from '../components/Contact'
import { Differentials } from '../components/Differentials'
import { FloatingWhatsApp } from '../components/FloatingWhatsApp'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { Projects } from '../components/Projects'
import { Services } from '../components/Services'

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Differentials />
        <Clients />
        <Contact />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  )
}
