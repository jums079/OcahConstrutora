import { clients } from '../services/siteContent'
import '../styles/Clients.css'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Clients() {
  return (
    <section className="clients section" id="clientes">
      <div className="container">
        <Reveal effect="fade-up">
          <SectionHeading
            eyebrow="Confiança construída"
            title="Clientes e parceiros"
            description="Marcas e instituições que já confiaram seus projetos à OCAH."
          />
        </Reveal>
        <div className="clients__grid">
          {clients.map((client, index) => (
            <Reveal
              className={`client-logo ${client.featured ? 'client-logo--featured' : ''} ${
                client.size === 'compact' ? 'client-logo--compact' : ''
              } ${
                client.size === 'institutional' ? 'client-logo--institutional' : ''
              }`}
              effect="zoom"
              delay={(index % 5) as 0 | 1 | 2 | 3 | 4}
              key={client.name}
            >
              {client.image ? (
                <img src={client.image} alt={`Logo ${client.name}`} />
              ) : (
                <span
                  className={`client-wordmark client-wordmark--${client.wordmarkStyle}`}
                  aria-label={client.name}
                >
                  {client.wordmark}
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
