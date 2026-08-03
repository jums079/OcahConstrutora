import { MessageCircle } from 'lucide-react'
import { WHATSAPP_LINK } from '../services/siteContent'
import '../styles/Hero.css'

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__inner container">
        <div className="hero__content">
          <h1>Engenharia que transforma planejamento em excelência</h1>
          <p className="hero__description">
            Gestão de obras do projeto à entrega, com controle técnico e transparência.
          </p>
          <a className="hero__button" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </div>

        <div
          className="hero__visual"
          role="img"
          aria-label="Equipe da OCAH Construtora"
        >
          <div className="hero__visual-shape" aria-hidden="true" />
          <img
            src="/images/portfolio/hero-01.png"
            alt=""
          />
          <span>Equipe OCAH</span>
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
