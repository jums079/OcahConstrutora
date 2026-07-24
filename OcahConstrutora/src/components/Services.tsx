import {
  Blocks,
  Building2,
  ClipboardCheck,
  DraftingCompass,
  Grid3X3,
  Layers,
  Paintbrush,
  PanelsTopLeft,
  SquareStack,
  Zap,
} from 'lucide-react'
import { services } from '../services/siteContent'
import '../styles/Services.css'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const serviceIcons = [
  Blocks,
  Zap,
  Grid3X3,
  Paintbrush,
  Building2,
  Layers,
  SquareStack,
  PanelsTopLeft,
  ClipboardCheck,
  DraftingCompass,
]

export function Services() {
  return (
    <section className="services section" id="servicos">
      <div className="container">
        <Reveal effect="fade-down">
          <SectionHeading eyebrow="O que fazemos" title="Serviços oferecidos" />
        </Reveal>

        <div className="services__grid">
          {services.map((service, index) => {
            const ServiceIcon = serviceIcons[index]

            return (
              <Reveal
                className="service-card"
                effect="fade-down"
                delay={(index % 5) as 0 | 1 | 2 | 3 | 4}
                key={service.name}
              >
                <ServiceIcon className="service-card__icon" aria-hidden="true" />
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
