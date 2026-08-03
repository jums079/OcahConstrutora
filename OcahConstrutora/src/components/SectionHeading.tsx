import '../styles/SectionHeading.css'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <span className="section-heading__line" aria-hidden="true" />
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  )
}
