import { services } from '../data/content'
import ScrollReveal from './ScrollReveal'

export default function Services() {
  return (
    <section id="services" className="bg-brand-dark py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal variant="up">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
            Services
          </p>
          <h2 className="font-serif text-4xl text-white sm:text-5xl">
            Three ways we help you ship.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid border border-white/10 md:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} variant="up" delay={index * 120} className="h-full">
              <div
                className={`group h-full p-8 transition-colors hover:bg-white/5 lg:p-10 ${
                  index < services.length - 1 ? 'md:border-r md:border-white/10' : ''
                } ${index > 0 ? 'border-t border-white/10 md:border-t-0' : ''}`}
              >
                <span className="text-sm font-semibold text-brand-primary">
                  {service.number}
                </span>
                <h3 className="mt-4 font-serif text-2xl text-white lg:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
