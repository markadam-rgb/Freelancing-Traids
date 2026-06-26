import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projectFilters, projects } from '../data/site'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'

export function Portfolio() {
  const [filter, setFilter] = useState('All')

  const visible =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter)

  return (
    <section id="work" className="relative border-y border-white/5 bg-ink-soft/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeading
          eyebrow="Selected work"
          title="Outcomes, not just pretty screens"
          description="A few recent engagements. Every project pairs craft with measurable business impact."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === f
                  ? 'bg-paper text-ink'
                  : 'border border-white/15 text-fog-300 hover:text-paper'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-card/60"
              >
                <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  {/* faux UI preview */}
                  <div className="absolute inset-5 rounded-xl bg-ink/30 p-4 backdrop-blur-sm ring-1 ring-white/20 transition-transform duration-500 group-hover:-translate-y-1.5">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-white/50" />
                      <span className="h-2 w-2 rounded-full bg-white/40" />
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                    </div>
                    <div className="mt-4 h-2.5 w-2/3 rounded-full bg-white/60" />
                    <div className="mt-2 h-2.5 w-1/2 rounded-full bg-white/30" />
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      <div className="h-10 rounded-lg bg-white/25" />
                      <div className="h-10 rounded-lg bg-white/20" />
                      <div className="h-10 rounded-lg bg-white/30" />
                    </div>
                  </div>
                  <span className="absolute right-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-paper backdrop-blur">
                    {project.metric}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-300">
                      {project.category}
                    </span>
                    <Icon
                      name="arrow"
                      className="h-4 w-4 text-fog-400 transition-transform group-hover:translate-x-1 group-hover:text-paper"
                    />
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
                  <p className="mt-1.5 text-sm text-fog-300">{project.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-fog-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
