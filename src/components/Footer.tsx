import { navLinks, studio } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-7xl container-px py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-coral-500 text-sm text-white">
                ▲
              </span>
              {studio.name}
            </a>
            <p className="mt-4 text-sm text-fog-400">
              {studio.tagline} We craft intuitive, beautiful and high-converting
              digital products.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterCol title="Navigate" links={navLinks.map((l) => l.label)} hrefs={navLinks.map((l) => l.href)} />
            <FooterCol
              title="Services"
              links={['UX Research', 'UI Design', 'Prototyping', 'Design Systems']}
              hrefs={['#services', '#services', '#services', '#services']}
            />
            <FooterCol
              title="Social"
              links={['Dribbble', 'LinkedIn', 'Instagram', 'GitHub']}
              hrefs={['#', '#', '#', '#']}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-fog-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {studio.name}. All rights reserved.</p>
          <p>Designed &amp; built with care.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  links,
  hrefs,
}: {
  title: string
  links: string[]
  hrefs: string[]
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-paper">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((link, i) => (
          <li key={link}>
            <a href={hrefs[i]} className="text-fog-400 transition-colors hover:text-paper">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
