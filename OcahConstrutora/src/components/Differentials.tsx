import {
  BadgeCheck,
  CalendarCheck,
  ClipboardCheck,
  Eye,
  HardHat,
  ListChecks,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { companyDifferentials } from '../services/siteContent'
import '../styles/Differentials.css'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const differentialIcons = [
  ListChecks,
  ClipboardCheck,
  Eye,
  HardHat,
  BadgeCheck,
  CalendarCheck,
  ShieldCheck,
  Sparkles,
]

export function Differentials() {
  return (
    <section className="differentials section" id="diferenciais">
      <div className="container">
        <Reveal effect="fade-up">
          <SectionHeading
            eyebrow="Nosso compromisso"
            title="Por que escolher a OCAH?"
            description="Organização e acompanhamento próximo para reduzir riscos e manter a obra no caminho certo."
          />
        </Reveal>
        <div className="differentials__grid">
          {companyDifferentials.map((differential, index) => {
            const DifferentialIcon = differentialIcons[index]

            return (
              <Reveal
                className="differential"
                effect="fade-up"
                delay={(index % 4) as 0 | 1 | 2 | 3}
                key={differential}
              >
                <DifferentialIcon aria-hidden="true" />
                <span>{differential}</span>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
