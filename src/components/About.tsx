import { ArrowRight } from 'lucide-react'
import { stats } from '../data/content'
import ScrollReveal from './ScrollReveal'
import { scrollToSection } from '../utils/scrollTo'

export default function About() {
  return (
    <section id="about" className="border-t border-brand-text/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal variant="up">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
            About
          </p>
          <h2 className="font-serif text-4xl text-brand-text sm:text-5xl">
            Small team, serious craft.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-24">
          <ScrollReveal variant="left" delay={100}>
            <div>
              <p className="text-base leading-relaxed text-brand-muted lg:text-lg">
                DevsRUs is a focused software engineering studio — not an agency with
                layers of account managers between you and the people writing code. When
                you work with us, you work directly with senior engineers who care about
                architecture, performance, and the details that separate good software
                from great software.
              </p>
              <p className="mt-6 text-base leading-relaxed text-brand-muted lg:text-lg">
                We've spent six years helping startups and established companies ship
                products across fintech, healthcare, logistics, and e-commerce. We
                bring the same rigor to a landing page as we do to a distributed system
                — because your users notice the difference, even when they can't name it.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="group mt-8 flex items-center gap-2 text-sm font-medium text-brand-text transition-colors hover:text-brand-primary"
              >
                Let's talk about your project
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} variant="scale" delay={index * 100} className="h-full">
                <div className="h-full rounded-xl border border-brand-text/10 bg-white/40 p-6 lg:p-8">
                  <p className="font-serif text-4xl text-brand-primary lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-brand-muted">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
