import { ArrowUpRight } from 'lucide-react'
import { featuredProjects } from '../services/siteContent'
import '../styles/Projects.css'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section className="projects section" id="obras">
      <div className="container">
        <Reveal effect="fade-down">
          <SectionHeading
            eyebrow="Portfólio"
            title="Obras em destaque"
            description="Projetos executados para marcas de diferentes segmentos."
          />
        </Reveal>
        <div className="projects__grid">
          {featuredProjects.map((project, index) => (
            <Reveal
              className={`project-card project-card--${index + 1}`}
              effect="fade-up"
              delay={(index % 3) as 0 | 1 | 2}
              key={`${project.name}-${project.image}`}
            >
              <img src={project.image} alt={`${project.name}: ${project.type}`} loading="lazy" />
              <div className="project-card__overlay">
                <span>{project.type}</span>
                <h3>{project.name}</h3>
                <ArrowUpRight aria-hidden="true" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
