import { process } from '../data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeading
          eyebrow="How we work"
          title="A calm, collaborative process"
          description="No black boxes and no big-reveal surprises — just steady, transparent progress you can see every week."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.no} delay={i * 0.08}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-ink-card/40 p-7">
                <span className="font-display text-5xl font-bold text-white/10">
                  {step.no}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-fog-300">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
