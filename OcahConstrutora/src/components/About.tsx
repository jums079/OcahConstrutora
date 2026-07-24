import { MapPin } from 'lucide-react'
import { businessSegments, regionalPresence } from '../services/siteContent'
import '../styles/About.css'
import { PlaceholderImage } from './PlaceholderImage'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section className="about section" id="sobre">
      <div className="container">
        <Reveal effect="fade-down">
          <SectionHeading eyebrow="Quem somos" title="Nossa essência" />
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__media" effect="fade-left">
            <PlaceholderImage label="Equipe OCAH em campo" />
          </Reveal>

          <Reveal className="about__content" effect="fade-right" delay={1}>
            <h3>Uma construção organizada do início ao fim.</h3>
            <p>
              A OCAH Construtora é uma empresa especializada na gestão, execução e
              acompanhamento de obras, comprometida em oferecer soluções completas com
              planejamento, transparência e excelência técnica.
            </p>
            <p>
              Atuamos com processos bem definidos, controle rigoroso e uma equipe
              qualificada para garantir que cada projeto seja conduzido com segurança,
              eficiência e qualidade.
            </p>

            <div className="about__segments" aria-label="Segmentos atendidos">
              {businessSegments.map((segment) => (
                <span key={segment}>{segment}</span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="about__locations" effect="fade-up">
          <strong>Presença regional</strong>
          <div>
            {regionalPresence.map((location) => (
              <span key={location}>
                <MapPin aria-hidden="true" />
                {location}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
