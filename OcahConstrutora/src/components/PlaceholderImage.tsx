import '../styles/PlaceholderImage.css'

type PlaceholderImageProps = {
  label: string
  variant?: 'hero' | 'about'
}

export function PlaceholderImage({ label, variant = 'about' }: PlaceholderImageProps) {
  return (
    <div
      className={`placeholder-image placeholder-image--${variant}`}
      role="img"
      aria-label={`${label}. Imagem ilustrativa temporária.`}
    >
      <span className="placeholder-image__grid" aria-hidden="true" />
      <span className="placeholder-image__label">
        <small>Imagem ilustrativa</small>
        {label}
      </span>
    </div>
  )
}
