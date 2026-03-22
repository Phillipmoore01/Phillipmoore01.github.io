import type { ReactNode } from 'react'

export type NavLink = {
  href: string
  label: string
}

export type NavbarProps = {
  brand: string
  brandHref?: string
  links: NavLink[]
  /** Optional content on the right (e.g. theme toggle). */
  end?: ReactNode
}

export function Navbar({ brand, brandHref = '/', links, end }: NavbarProps) {
  return (
    <header className="topbar">
      <a className="brand" href={brandHref}>
        {brand}
      </a>
      <div className="topbar-end">
        <nav className="topbar-nav" aria-label="Primary">
          {links.map((link) => (
            <a key={`${link.href}-${link.label}`} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        {end}
      </div>
    </header>
  )
}
