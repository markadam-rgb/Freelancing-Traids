import { team } from '../data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="relative border-y border-white/5 bg-ink-soft/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeading
          eyebrow="About us"
          title="Four friends. One studio. Zero hand-offs."
          description="We met years ago designing under the same roof and never stopped collaborating. Triad Studio is small on purpose — you work directly with the people doing the work."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-card/60 p-7 text-center transition-colors hover:border-brand-400/40">
                <div
                  className={`mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br ${member.accent} font-display text-2xl font-bold text-white shadow-lg`}
                >
                  {member.initials}
                </div>
                <h3 className="mt-5 text-xl font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand-300">{member.role}</p>
                <p className="mt-3 text-sm text-fog-300">{member.bio}</p>
                <div className="mt-5 flex justify-center gap-2">
                  {member.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-fog-300 transition-colors hover:bg-white/5 hover:text-paper"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
