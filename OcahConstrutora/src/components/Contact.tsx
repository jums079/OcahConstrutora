import { companyContacts, WHATSAPP_LINK } from '../services/siteContent'
import '../styles/Contact.css'

export function Contact() {
  return (
    <section className="contact section" id="contato">
      <div className="container contact__panel">
        <div className="contact__heading">
          <p className="eyebrow eyebrow--light">Vamos conversar</p>
          <h2>
            Seu próximo projeto começa com um <em>bom planejamento.</em>
          </h2>
          <a className="button button--light" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            Solicitar orçamento
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <address className="contact__details">
          <a href={`mailto:${companyContacts.email}`}>
            <span>E-mail</span>
            <strong>{companyContacts.email}</strong>
          </a>
          <a href={companyContacts.instagramUrl} target="_blank" rel="noreferrer">
            <span>Instagram</span>
            <strong>{companyContacts.instagram}</strong>
          </a>
          <a href={companyContacts.phoneUrl}>
            <span>Telefone</span>
            <strong>{companyContacts.phone}</strong>
          </a>
        </address>
      </div>
    </section>
  )
}
