import { Instagram, Mail, MessageCircle } from 'lucide-react'
import { contactChannels } from '../services/siteContent'
import '../styles/Contact.css'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const contactIcons = [MessageCircle, Mail, Instagram]

export function Contact() {
  return (
    <section className="contact section" id="contato">
      <div className="container">
        <Reveal effect="fade-down">
          <SectionHeading eyebrow="Entre em contato" title="Fale com a OCAH Construtora" />
        </Reveal>

        <div className="contact__grid">
          {contactChannels.map((channel, index) => {
            const ContactIcon = contactIcons[index]
            const effect = index % 2 === 0 ? 'fade-down' : 'fade-up'

            return (
              <Reveal
                className="contact-card"
                effect={effect}
                delay={index as 0 | 1 | 2 | 3}
                key={channel.label}
              >
                <ContactIcon aria-hidden="true" />
                <h3>{channel.label}</h3>
                <p>{channel.value}</p>
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={channel.external ? '_blank' : undefined}
                    rel={channel.external ? 'noreferrer' : undefined}
                  aria-label={`Abrir contato por ${channel.label}`}
                >
                    {channel.actionLabel}
                  </a>
                ) : null}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
