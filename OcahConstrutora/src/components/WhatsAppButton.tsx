import { WHATSAPP_LINK } from '../services/siteContent'
import '../styles/WhatsAppButton.css'

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a OCAH Construtora pelo WhatsApp"
    >
      <span className="whatsapp-button__icon" aria-hidden="true">◔</span>
      <span>WhatsApp</span>
    </a>
  )
}
