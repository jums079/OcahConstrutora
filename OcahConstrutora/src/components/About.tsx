import '../styles/About.css'
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
            <img
              src="/images/portfolio/essence-2026.jpg"
              alt="Equipe OCAH reunida durante o planejamento de uma obra"
            />
            <span>Planejamento que orienta cada entrega</span>
          </Reveal>

          <Reveal className="about__content" effect="fade-right" delay={1}>
            <h3>Uma construção organizada do início ao fim.</h3>
            <p>
              A OCAH Construtora atua na gestão, execução e acompanhamento de obras, com
              processos definidos e uma equipe presente em cada etapa.
            </p>
            <p>
              Atendemos Sergipe e toda a região Nordeste, com capacidade para executar
              projetos em todo o Brasil.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
