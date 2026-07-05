import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import ScrollReveal from './components/ScrollReveal'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-brand-text/5 py-8">
        <ScrollReveal variant="fade">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-8">
            <p className="font-serif text-lg text-brand-text">DevsRUs</p>
            <p className="text-sm text-brand-muted">
              © {new Date().getFullYear()} DevsRUs. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
      </footer>
    </>
  )
}

export default App
