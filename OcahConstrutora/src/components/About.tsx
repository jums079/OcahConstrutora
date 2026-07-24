import { businessSegments, regionalPresence } from '../services/siteContent'
import '../styles/About.css'
import { PlaceholderImage } from './PlaceholderImage'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section className="about section" id="sobre">
      <div className="container about__grid">
        <div className="about__media">
          <PlaceholderImage label="Nossa equipe em campo" variant="about" />
          <div className="about__locations">
            <span>Presença regional</span>
            {regionalPresence.map((location) => (
              <strong key={location}>{location}</strong>
            ))}
          </div>
        </div>
        <div className="about__content">
          <SectionHeading eyebrow="Nossa essência" title="Uma construção organizada do início ao fim." />
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
          <p>
            Nosso compromisso é reduzir riscos, otimizar recursos e entregar resultados que
            atendam às expectativas de cada cliente.
          </p>
          <div className="about__segments" aria-label="Segmentos atendidos">
            <span className="about__segments-title">Segmentos atendidos</span>
            <div>
              {businessSegments.map((segment) => (
                <span key={segment}>{segment}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
