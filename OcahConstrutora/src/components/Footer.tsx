import { companyContacts, navigationItems } from '../services/siteContent'
import '../styles/Footer.css'
import { BrandMark } from './BrandMark'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <BrandMark theme="dark" />
          <p>Gestão, execução e acompanhamento de obras.</p>
        </div>
        <nav className="footer__navigation" aria-label="Navegação do rodapé">
          <span>Navegação</span>
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="footer__contact">
          <span>Contato</span>
          <a href={`mailto:${companyContacts.email}`}>{companyContacts.email}</a>
          <a href={companyContacts.instagramUrl} target="_blank" rel="noreferrer">
            {companyContacts.instagram}
          </a>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© 2026 OCAH Construtora. Todos os direitos reservados.</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>
  )
}
