import { services } from '../data/site'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Everything you need to design
              <br className="hidden sm:block" /> a product worth using
            </>
          }
          description="Four senior designers covering the full product journey — from first research interview to the final shipped pixel."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-card/60 p-7 transition-colors hover:border-brand-400/50">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-600/0 blur-2xl transition-colors duration-500 group-hover:bg-brand-600/20" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-coral-500/20 text-brand-300 ring-1 ring-inset ring-white/10">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2.5 text-fog-300">{service.description}</p>
                  <ul className="mt-5 space-y-2.5">
                    {service.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm text-fog-200">
                        <Icon name="check" className="h-4 w-4 shrink-0 text-coral-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
