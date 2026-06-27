import { useState } from 'react'
import type { FormEvent } from 'react'
import { studio } from '../data/site'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

type Fields = {
  name: string
  email: string
  projectType: string
  budget: string
  message: string
}

const emptyFields: Fields = {
  name: '',
  email: '',
  projectType: 'UI/UX Design',
  budget: '$5k – $15k',
  message: '',
}

const projectTypes = [
  'UI/UX Design',
  'Web / Landing Page',
  'Mobile App',
  'Design System',
  'UX Research',
  'Other',
]

const budgets = ['< $5k', '$5k – $15k', '$15k – $40k', '$40k+']

export function Contact() {
  const [fields, setFields] = useState<Fields>(emptyFields)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState<string | null>(null)

  const update = (key: keyof Fields, value: string) => {
    setFields((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {}
    if (!fields.name.trim()) next.name = 'Please tell us your name.'
    if (!fields.email.trim()) next.email = 'An email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      next.email = 'That email looks off.'
    if (fields.message.trim().length < 10)
      next.message = 'A little more detail helps us reply well.'
    return next
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setSending(true)
    setSendError(null)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: studio.web3formsKey,
          subject: `New project enquiry from ${fields.name}`,
          from_name: fields.name,
          name: fields.name,
          email: fields.email,
          'Project type': fields.projectType,
          Budget: fields.budget,
          message: fields.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setSendError(data.message || 'Something went wrong. Please try again or email us directly.')
      }
    } catch {
      setSendError('Network error. Please try again or email us directly.')
    } finally {
      setSending(false)
    }
  }

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-paper placeholder:text-fog-500 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30'

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl container-px">
        <div className="grid gap-10 rounded-3xl border border-white/10 bg-ink-card/50 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
          {/* left: pitch */}
          <Reveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
              <span className="h-px w-6 bg-brand-400" />
              Let's talk
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Have a product worth
              <br /> designing well?
            </h2>
            <p className="mt-4 text-lg text-fog-300">
              Tell us a little about it. We reply to every enquiry within one
              business day — usually with a few sharp questions and some early
              thoughts.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <a
                href={`mailto:${studio.email}`}
                className="flex items-center gap-3 text-fog-200 transition-colors hover:text-paper"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
                  <Icon name="mail" className="h-5 w-5 text-brand-300" />
                </span>
                {studio.email}
              </a>
              <div className="flex items-center gap-3 text-fog-200">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
                  <Icon name="compass" className="h-5 w-5 text-coral-400" />
                </span>
                {studio.location}
              </div>
            </div>
          </Reveal>

          {/* right: form */}
          <Reveal delay={0.1}>
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-brand-400/30 bg-brand-500/10 p-10 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-coral-500 text-white">
                  <Icon name="check" className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold">Message sent!</h3>
                <p className="mt-2 max-w-sm text-fog-300">
                  Thanks, {fields.name.split(' ')[0] || 'there'} — we've got your
                  note and will be in touch within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFields(emptyFields)
                    setSubmitted(false)
                  }}
                  className="mt-6 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/5"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" error={errors.name}>
                    <input
                      className={inputClass}
                      type="text"
                      placeholder="Jane Cooper"
                      value={fields.name}
                      onChange={(e) => update('name', e.target.value)}
                    />
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <input
                      className={inputClass}
                      type="email"
                      placeholder="jane@company.com"
                      value={fields.email}
                      onChange={(e) => update('email', e.target.value)}
                    />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Project type">
                    <select
                      className={inputClass}
                      value={fields.projectType}
                      onChange={(e) => update('projectType', e.target.value)}
                    >
                      {projectTypes.map((t) => (
                        <option key={t} className="bg-ink-card">
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Budget">
                    <select
                      className={inputClass}
                      value={fields.budget}
                      onChange={(e) => update('budget', e.target.value)}
                    >
                      {budgets.map((b) => (
                        <option key={b} className="bg-ink-card">
                          {b}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Project details" error={errors.message}>
                  <textarea
                    className={`${inputClass} min-h-32 resize-y`}
                    placeholder="What are you building, and what does success look like?"
                    value={fields.message}
                    onChange={(e) => update('message', e.target.value)}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={sending}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-coral-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {sending ? 'Sending…' : 'Send message'}
                  {!sending && (
                    <Icon
                      name="arrow"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  )}
                </button>
                {sendError && (
                  <p className="text-center text-xs text-coral-400">{sendError}</p>
                )}
                <p className="text-center text-xs text-fog-500">
                  We reply to every enquiry within one business day.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-fog-200">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-coral-400">{error}</span>}
    </label>
  )
}
