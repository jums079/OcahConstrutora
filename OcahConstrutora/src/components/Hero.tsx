import { MessageCircle } from 'lucide-react'
import { WHATSAPP_LINK } from '../services/siteContent'
import '../styles/Hero.css'

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__inner container">
        <div className="hero__content">
          <p className="hero__eyebrow">Gestão, execução e acompanhamento de obras</p>
          <h1>Construímos com planejamento e executamos com excelência</h1>
          <p className="hero__description">
            Soluções completas com processos bem definidos, transparência e qualidade
            técnica para cada etapa do seu projeto.
          </p>
          <a className="hero__button" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" />
            Fale por WhatsApp
          </a>
        </div>

        <div
          className="hero__visual"
          role="img"
          aria-label="Imagem ilustrativa temporária de uma equipe em uma obra"
        >
          <div className="hero__visual-shape" aria-hidden="true" />
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85"
            alt=""
          />
          <span>Imagem ilustrativa</span>
        </div>
      </div>

      <div className="hero__waves" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </section>
  )
}
