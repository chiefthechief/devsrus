import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'
import { scrollToSection } from '../utils/scrollTo'
import { useScrollPosition } from '../hooks/useScrollPosition'

export default function Navbar() {
  const scrolled = useScrollPosition(24)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-bg/80 backdrop-blur-md border-b border-brand-text/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <button
          onClick={() => scrollToSection('hero')}
          className="font-serif text-2xl text-brand-text transition-opacity hover:opacity-70"
        >
          DevsRUs
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-sm font-medium text-brand-muted transition-colors hover:text-brand-text"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="rounded-full bg-brand-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-primary/90"
          >
            Start a project
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-brand-text md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-brand-text/5 bg-brand-bg/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="rounded-lg px-3 py-3 text-left text-sm font-medium text-brand-muted transition-colors hover:bg-brand-text/5 hover:text-brand-text"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="mt-2 rounded-full bg-brand-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-primary/90"
            >
              Start a project
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
