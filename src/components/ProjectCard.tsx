export type ProjectCardProps = {
  title: string
  href: string
  description?: string
}

export function ProjectCard({ title, href, description }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3 className="project-card-title">
        <a href={href} rel="noreferrer">
          {title}
        </a>
      </h3>
      {description ? <p className="project-card-desc">{description}</p> : null}
    </article>
  )
}
