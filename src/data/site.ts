export const studio = {
  name: 'Triad Studio',
  tagline: 'A four-person UI/UX design studio.',
  email: 'hello@triadstudio.design',
  location: 'Remote · Working worldwide',
}

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '60+', label: 'Products shipped' },
  { value: '12', label: 'Industries served' },
  { value: '4.9/5', label: 'Average client rating' },
  { value: '4', label: 'Senior designers, zero hand-offs' },
]

export const clients = [
  'Northwind',
  'Lumen',
  'Cobalt',
  'Fernfolk',
  'Apex Labs',
  'Hatch',
  'Vela',
  'Meridian',
]

export type Service = {
  title: string
  description: string
  icon: string
  points: string[]
}

export const services: Service[] = [
  {
    title: 'UX Research & Strategy',
    description:
      'We de-risk decisions before a pixel is drawn — interviews, journey maps and data that point the way.',
    icon: 'compass',
    points: ['User & stakeholder interviews', 'Journey & service mapping', 'Heuristic & competitive audits'],
  },
  {
    title: 'UI & Visual Design',
    description:
      'Interfaces that are beautiful, accessible and unmistakably yours — down to the last micro-interaction.',
    icon: 'layers',
    points: ['Brand-aligned visual systems', 'Responsive web & mobile UI', 'WCAG AA accessibility'],
  },
  {
    title: 'Prototyping & Testing',
    description:
      'Clickable prototypes you can put in front of real users, then iterate with confidence.',
    icon: 'cursor',
    points: ['Interactive Figma prototypes', 'Moderated usability tests', 'Rapid iteration sprints'],
  },
  {
    title: 'Design Systems',
    description:
      'Scalable component libraries that keep your product consistent as your team grows.',
    icon: 'grid',
    points: ['Token-driven libraries', 'Documentation & governance', 'Designer ↔ dev parity'],
  },
  {
    title: 'Product & Web Design',
    description:
      'End-to-end design for SaaS dashboards, marketing sites and everything in between.',
    icon: 'browser',
    points: ['SaaS & dashboard UX', 'High-converting landing pages', 'Information architecture'],
  },
  {
    title: 'Design-to-Dev Handoff',
    description:
      'We speak engineer — specs, assets and pairing that make build time painless.',
    icon: 'code',
    points: ['Production-ready specs', 'Pairing with your engineers', 'QA & polish reviews'],
  },
]

export type Project = {
  title: string
  category: string
  tags: string[]
  blurb: string
  metric: string
  gradient: string
}

export const projects: Project[] = [
  {
    title: 'Lumen Banking App',
    category: 'Fintech',
    tags: ['Mobile', 'UX Research', 'Design System'],
    blurb: 'Reimagined onboarding for a challenger bank, cutting sign-up drop-off dramatically.',
    metric: '+38% activation',
    gradient: 'from-brand-500 to-brand-700',
  },
  {
    title: 'Fernfolk Marketplace',
    category: 'E-commerce',
    tags: ['Web', 'UI Design', 'Prototyping'],
    blurb: 'A warm, trustworthy marketplace for independent makers and their craft.',
    metric: '+52% conversion',
    gradient: 'from-coral-500 to-coral-600',
  },
  {
    title: 'Apex Labs Dashboard',
    category: 'SaaS',
    tags: ['Dashboard', 'Design System', 'Web App'],
    blurb: 'A dense analytics dashboard made calm, scannable and a joy to use daily.',
    metric: '−41% support tickets',
    gradient: 'from-brand-600 to-coral-500',
  },
  {
    title: 'Vela Health',
    category: 'Healthcare',
    tags: ['Mobile', 'Accessibility', 'UX Research'],
    blurb: 'Accessible telehealth designed for every age, ability and anxious moment.',
    metric: 'WCAG AA',
    gradient: 'from-brand-400 to-brand-600',
  },
  {
    title: 'Hatch Learning',
    category: 'EdTech',
    tags: ['Web', 'UI Design', 'Branding'],
    blurb: 'A playful yet focused learning platform for curious young minds.',
    metric: '+27% retention',
    gradient: 'from-coral-400 to-brand-500',
  },
  {
    title: 'Meridian Travel',
    category: 'Travel',
    tags: ['Mobile', 'Prototyping', 'UX Strategy'],
    blurb: 'Trip planning that feels like daydreaming, then booking in a single tap.',
    metric: '+44% bookings',
    gradient: 'from-brand-700 to-coral-600',
  },
]

export const projectFilters = ['All', 'Fintech', 'E-commerce', 'SaaS', 'Healthcare', 'EdTech', 'Travel']

export type Step = {
  no: string
  title: string
  description: string
}

export const process: Step[] = [
  {
    no: '01',
    title: 'Discover',
    description:
      'We dig into your goals, users and constraints — aligning the four of us and your team on what success looks like.',
  },
  {
    no: '02',
    title: 'Design',
    description:
      'Wireframes become polished, accessible interfaces. You see work weekly, never a big-reveal surprise.',
  },
  {
    no: '03',
    title: 'Validate',
    description:
      'We test with real users and iterate, so launch decisions are backed by evidence, not opinion.',
  },
  {
    no: '04',
    title: 'Deliver',
    description:
      'Production-ready files, a living design system and pairing with your engineers through build and beyond.',
  },
]

export type Member = {
  name: string
  role: string
  bio: string
  initials: string
  accent: string
  socials: { label: string; href: string }[]
}

export const team: Member[] = [
  {
    name: 'Jeshwanth Varma',
    role: 'UX Research & Strategy',
    bio: 'Turns messy problems into clear plans, grounding every design decision in real user insight.',
    initials: 'JV',
    accent: 'from-brand-500 to-brand-700',
    socials: [
      { label: 'LinkedIn', href: '#' },
      { label: 'Dribbble', href: '#' },
    ],
  },
  {
    name: 'Praveen',
    role: 'UI & Visual Design',
    bio: 'Obsessed with type, motion and the last 5% of polish. Believes craft is a competitive advantage.',
    initials: 'PR',
    accent: 'from-coral-500 to-coral-600',
    socials: [
      { label: 'LinkedIn', href: '#' },
      { label: 'Dribbble', href: '#' },
    ],
  },
  {
    name: 'Nitheish',
    role: 'Product & Design Systems',
    bio: 'Bridges design and engineering. Builds systems that scale and ship without losing their soul.',
    initials: 'NI',
    accent: 'from-brand-600 to-coral-500',
    socials: [
      { label: 'LinkedIn', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
  {
    name: 'Hariharan',
    role: 'Prototyping & Interaction',
    bio: 'Brings ideas to life with clickable prototypes and micro-interactions that feel effortless.',
    initials: 'HA',
    accent: 'from-coral-400 to-brand-500',
    socials: [
      { label: 'LinkedIn', href: '#' },
      { label: 'Dribbble', href: '#' },
    ],
  },
]

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Triad felt like part of our team from day one. They shipped a design system that our engineers actually love using.',
    name: 'Priya Nair',
    role: 'VP Product, Apex Labs',
  },
  {
    quote:
      'The new onboarding flow paid for the whole engagement in its first month. Sharp thinking, beautiful execution.',
    name: 'Daniel Foster',
    role: 'Founder, Lumen',
  },
  {
    quote:
      'Four senior designers, zero hand-off chaos. Communication was effortless and the work was world-class.',
    name: 'Hannah Cole',
    role: 'Head of Design, Vela Health',
  },
]
