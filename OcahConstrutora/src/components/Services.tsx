import { services } from '../services/siteContent'
import '../styles/Services.css'
import { SectionHeading } from './SectionHeading'

export function Services() {
  return (
    <section className="services section" id="servicos">
      <div className="container">
        <div className="services__intro">
          <SectionHeading
            eyebrow="Nossos serviços"
            title="Soluções completas para cada etapa da obra."
            description="Processos bem definidos, controle rigoroso e uma equipe qualificada para conduzir projetos de diferentes portes e complexidades."
          />
          <p className="services__note">
            <span>01</span>
            Do planejamento à execução
          </p>
        </div>
        <div className="services__grid">
          {services.map((service, index) => (
            <article className="service-card" key={service}>
              <span className="service-card__number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{service}</h3>
              <span className="service-card__arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
