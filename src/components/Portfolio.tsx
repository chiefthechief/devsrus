import { projects } from '../data/content'
import ScrollReveal from './ScrollReveal'

export default function Portfolio() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal variant="up">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl text-brand-text sm:text-5xl">
            Projects we're proud to ship.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={project.name} variant="up" delay={(index % 3) * 100} className="h-full">
              <article className="group h-full overflow-hidden rounded-xl border border-brand-text/10 bg-white/40 transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-brand-text">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-brand-text/10 px-2.5 py-0.5 text-xs text-brand-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
