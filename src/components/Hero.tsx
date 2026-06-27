import { motion } from 'framer-motion'
import { stats, clients } from '../data/site'
import { Icon } from './Icon'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40" aria-labelledby="hero-heading">
      {/* background flourishes */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl animate-float-slow" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-10 right-0 h-80 w-80 rounded-full bg-coral-500/20 blur-3xl animate-float-slow [animation-delay:-6s]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl container-px">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-fog-200"
          >
            <span className="h-2 w-2 rounded-full bg-coral-500" aria-hidden="true" />
            Booking projects for Q3 — 2 slots left
          </motion.span>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-6xl"
          >
            We design products
            <br />
            people <span className="text-gradient">love to use.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-xl text-lg text-fog-200"
          >
            Triad Studio is a tight-knit team of three senior designers turning
            complex ideas into intuitive, beautiful and high-converting digital
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-coral-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Start a project
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#work"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-paper transition-colors hover:bg-white/5 sm:w-auto"
            >
              View our work
            </a>
          </motion.div>
        </div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-4"
          role="region"
          aria-label="Key statistics"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-ink/40 p-6 text-center backdrop-blur">
              <div className="font-display text-3xl font-bold text-gradient">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-fog-300">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* client marquee */}
        <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]" aria-label="Trusted by teams at">
          <p id="clients-label" className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-fog-400">
            Trusted by teams at
          </p>
          <div className="flex w-max animate-marquee gap-12" aria-labelledby="clients-label">
            {[...clients, ...clients].map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="font-display text-xl font-semibold text-fog-400/80"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
