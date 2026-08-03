import '../styles/BrandMark.css'

type BrandMarkProps = {
  theme?: 'light' | 'dark'
}

export function BrandMark({ theme = 'light' }: BrandMarkProps) {
  return (
    <a className={`brand-mark brand-mark--${theme}`} href="#inicio" aria-label="OCAH Construtora — início">
      <span className="brand-mark__symbol" aria-hidden="true">
        <span className="brand-mark__arch" />
      </span>
      <span className="brand-mark__text">
        <strong>Ocah</strong>
        <small>Construtora</small>
      </span>
    </a>
  )
}
