import '../styles/Footer.css'
import { BrandMark } from './BrandMark'
import { Reveal } from './Reveal'

export function Footer() {
  return (
    <footer className="footer">
      <Reveal className="container footer__content" effect="fade-down">
        <BrandMark />
        <p>© 2026 OCAH Construtora — Todos os direitos reservados.</p>
      </Reveal>
    </footer>
  )
}
