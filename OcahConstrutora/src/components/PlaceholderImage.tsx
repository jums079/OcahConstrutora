import '../styles/PlaceholderImage.css'

type PlaceholderImageProps = {
  label: string
}

export function PlaceholderImage({ label }: PlaceholderImageProps) {
  return (
    <figure className="placeholder-image">
      <img
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1100&q=85"
        alt={`${label}. Imagem ilustrativa temporária.`}
      />
      <figcaption>Imagem ilustrativa — substituição futura</figcaption>
    </figure>
  )
}
