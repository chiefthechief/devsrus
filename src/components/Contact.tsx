import { useState, type FormEvent } from 'react'
import { Building2, Code2, Mail, MapPin, Phone, Share2 } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="border-t border-brand-text/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal variant="up">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
            Contact
          </p>
          <h2 className="font-serif text-4xl text-brand-text sm:text-5xl">
            Ready to build something great?
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-24">
          <ScrollReveal variant="left" delay={100}>
            <div>
              <p className="text-base leading-relaxed text-brand-muted lg:text-lg">
                Tell us about your project — whether it's a new product, a redesign, or
                a system that needs rebuilding. We'll get back to you within one business
                day with next steps.
              </p>

              <div className="mt-10 space-y-6">
                <a
                  href="mailto:hello@devsrus.dev"
                  className="flex items-center gap-4 text-brand-text transition-colors hover:text-brand-primary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-text/10">
                    <Mail size={18} className="text-brand-primary" />
                  </div>
                  <span className="text-sm font-medium">hello@devsrus.dev</span>
                </a>
                <a
                  href="tel:+14155550142"
                  className="flex items-center gap-4 text-brand-text transition-colors hover:text-brand-primary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-text/10">
                    <Phone size={18} className="text-brand-primary" />
                  </div>
                  <span className="text-sm font-medium">+1 (415) 555-0142</span>
                </a>
                <div className="flex items-center gap-4 text-brand-text">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-text/10">
                    <MapPin size={18} className="text-brand-primary" />
                  </div>
                  <span className="text-sm font-medium">
                    San Francisco, CA — working globally
                  </span>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-text/10 text-brand-muted transition-colors hover:border-brand-primary hover:text-brand-primary"
                  aria-label="GitHub"
                >
                  <Code2 size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-text/10 text-brand-muted transition-colors hover:border-brand-primary hover:text-brand-primary"
                  aria-label="LinkedIn"
                >
                  <Building2 size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-text/10 text-brand-muted transition-colors hover:border-brand-primary hover:text-brand-primary"
                  aria-label="X (Twitter)"
                >
                  <Share2 size={18} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right" delay={200}>
            <div className="rounded-2xl border border-brand-text/10 bg-white/60 p-8 shadow-sm lg:p-10">
              {submitted ? (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                  <p className="font-serif text-2xl text-brand-text">Message sent!</p>
                  <p className="mt-3 text-sm text-brand-muted">
                    Thanks for reaching out. We'll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-text">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-brand-text/10 bg-white px-4 py-3 text-sm text-brand-text outline-none transition-colors focus:border-brand-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand-text">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-brand-text/10 bg-white px-4 py-3 text-sm text-brand-text outline-none transition-colors focus:border-brand-primary"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="project" className="mb-1.5 block text-sm font-medium text-brand-text">
                      Project type
                    </label>
                    <select
                      id="project"
                      name="project"
                      className="w-full rounded-lg border border-brand-text/10 bg-white px-4 py-3 text-sm text-brand-text outline-none transition-colors focus:border-brand-primary"
                    >
                      <option>Web Development</option>
                      <option>Mobile App</option>
                      <option>Custom Software</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-text">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full resize-none rounded-lg border border-brand-text/10 bg-white px-4 py-3 text-sm text-brand-text outline-none transition-colors focus:border-brand-primary"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-brand-primary px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-primary/90"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
