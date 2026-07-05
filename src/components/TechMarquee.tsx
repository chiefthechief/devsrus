import { techStack } from '../data/content'
import ScrollReveal from './ScrollReveal'

export default function TechMarquee() {
  const items = [...techStack, ...techStack]

  return (
    <ScrollReveal variant="fade" delay={100}>
      <div className="mt-16 overflow-hidden border-y border-brand-text/5 bg-brand-strip py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="mx-8 text-xs font-semibold uppercase tracking-[0.15em] text-brand-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}
