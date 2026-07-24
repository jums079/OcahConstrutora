import { WHATSAPP_LINK } from '../services/siteContent'
import '../styles/Hero.css'
import { PlaceholderImage } from './PlaceholderImage'

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__inner container">
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">Gestão e execução de obras</p>
          <h1>
            Construímos com <em>planejamento.</em>
          </h1>
          <p className="hero__description">
            Soluções completas para conduzir cada projeto com segurança, eficiência,
            transparência e excelência técnica.
          </p>
          <div className="hero__actions">
            <a className="button button--light" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Fale pelo WhatsApp
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--ghost" href="#servicos">
              Conheça nossos serviços
            </a>
          </div>
        </div>
        <div className="hero__media">
          <PlaceholderImage label="Obra OCAH" variant="hero" />
          <div className="hero__seal" aria-hidden="true">
            <strong>OCAH</strong>
            <span>Construtora</span>
          </div>
        </div>
      </div>
      <a className="hero__scroll" href="#servicos">
        <span>Explore</span>
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  )
}
