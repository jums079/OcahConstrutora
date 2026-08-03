import { MessageCircle } from 'lucide-react'
import { WHATSAPP_LINK } from '../services/siteContent'
import '../styles/FloatingWhatsApp.css'

export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a OCAH pelo WhatsApp"
    >
      <MessageCircle aria-hidden="true" />
    </a>
  )
}
