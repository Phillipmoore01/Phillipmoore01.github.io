import { ContactForm } from './ContactForm.tsx'

export type FooterProps = {
  email: string
  githubUrl: string
  className?: string
}

function githubLinkLabel(url: string): string {
  try {
    const u = new URL(url)
    const path = u.pathname.replace(/\/$/, '')
    return `${u.hostname}${path}`
  } catch {
    return url
  }
}

export function Footer({ email, githubUrl, className }: FooterProps) {
  const mailto = `mailto:${email}`
  const cls = ['panel', 'site-footer', className].filter(Boolean).join(' ')

  return (
    <footer id="contact" className={cls}>
      <h2>Contact</h2>
      <ContactForm fallbackEmail={email} />
      <p>
        Email:{' '}
        <a href={mailto}>{email}</a>
      </p>
      <p>
        GitHub:{' '}
        <a href={githubUrl} rel="noreferrer">
          {githubLinkLabel(githubUrl)}
        </a>
      </p>
    </footer>
  )
}
