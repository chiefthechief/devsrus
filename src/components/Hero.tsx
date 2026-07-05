import { ArrowRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { scrollToSection } from '../utils/scrollTo'

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-0 lg:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <ScrollReveal variant="up" delay={100}>
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
              Software Engineering Studio
            </p>
            <h1 className="font-serif text-5xl leading-[1.1] text-brand-text sm:text-6xl lg:text-[4.5rem]">
              We build software{' '}
              <span className="italic text-brand-primary">that works</span> for your
              business.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-muted lg:text-lg">
              DevsRUs partners with ambitious teams to design and ship websites, mobile
              apps, and custom software — built with craft, clarity, and a relentless
              focus on what moves your business forward.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button
                onClick={() => scrollToSection('contact')}
                className="rounded-full bg-brand-primary px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-primary/90"
              >
                Start a project
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="group flex items-center gap-2 text-sm font-medium text-brand-text transition-colors hover:text-brand-primary"
              >
                See our work
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="right" delay={250}>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-brand-text/10 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80"
                alt="Modern tech workspace with laptop and code on screen"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
