export type HeroProps = {
  title: string
  tagline: string
  className?: string
}

export function Hero({ title, tagline, className }: HeroProps) {
  const cls = ['hero', className].filter(Boolean).join(' ')
  return (
    <section className={cls} aria-labelledby="hero-title">
      <h1 id="hero-title">{title}</h1>
      <p>{tagline}</p>
    </section>
  )
}
