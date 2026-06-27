import { useEffect, useState } from 'react'
import { navLinks, studio } from '../data/site'
import { Icon } from './Icon'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on escape key
  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onEscape)
    return () => document.removeEventListener('keydown', onEscape)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-ink/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
      role="banner"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between container-px" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-bold" aria-label={`${studio.name} - Home`}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-coral-500 text-sm text-white" aria-hidden="true">
            ▲
          </span>
          {studio.name}
        </a>

        <ul className="hidden items-center gap-8 text-sm text-fog-200 md:flex" role="menubar">
          {navLinks.map((link) => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                className="transition-colors hover:text-paper"
                role="menuitem"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Start a project
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 md:hidden"
        >
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-ink/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 py-4 container-px" role="menu">
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-fog-100 hover:bg-white/5"
                  role="menuitem"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li role="none">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-paper px-5 py-3 text-center font-semibold text-ink"
                role="menuitem"
              >
                Start a project
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
