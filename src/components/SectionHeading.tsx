import { Reveal } from './Reveal'

type Props = {
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: Props) {
  const centered = align === 'center'
  return (
    <Reveal className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
        <span className="h-px w-6 bg-brand-400" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && (
        <p className={`mt-4 text-lg text-fog-300 ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
