import '../styles/Footer.css'
import { companyContacts, navigationItems } from '../services/siteContent'
import { BrandMark } from './BrandMark'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__brand">
          <BrandMark />
          <p>Planejamento, execução e responsabilidade em cada obra.</p>
        </div>
        <div className="footer__column">
          <strong>Links rápidos</strong>
          {navigationItems.slice(0, 5).map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="footer__column">
          <strong>Contato</strong>
          <a href={`mailto:${companyContacts.email}`}>{companyContacts.email}</a>
          <a href={companyContacts.instagramUrl} target="_blank" rel="noreferrer">
            {companyContacts.instagram}
          </a>
          <span>{companyContacts.phone}</span>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© 2026 OCAH Construtora. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
