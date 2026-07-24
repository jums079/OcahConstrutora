export const WHATSAPP_LINK = 'https://wa.me/5579988542641?text=Olá'

export const navigationItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export const services = [
  { name: 'Alvenaria', description: 'Execução de serviços de alvenaria nas diferentes etapas da obra.' },
  { name: 'Elétrica', description: 'Soluções elétricas conduzidas com planejamento e controle técnico.' },
  { name: 'Pisos e revestimentos', description: 'Aplicação de pisos e revestimentos para diferentes ambientes.' },
  { name: 'Pintura', description: 'Serviços de pintura integrados ao planejamento geral da obra.' },
  { name: 'Pós-estrutura', description: 'Execução das etapas posteriores à estrutura da construção.' },
  { name: 'Vinílico e laminado', description: 'Instalação de acabamentos vinílicos e laminados.' },
  { name: 'Forro de gesso', description: 'Execução de forros de gesso para ambientes corporativos e comerciais.' },
  { name: 'Dry wall', description: 'Soluções em dry wall para divisão e organização de espaços.' },
  { name: 'Gestão', description: 'Gestão e acompanhamento com processos bem definidos e controle rigoroso.' },
  { name: 'Projetos', description: 'Planejamento técnico para orientar cada etapa da execução.' },
]

export const businessSegments = [
  'Comercial',
  'Corporativo',
  'Condomínios',
  'Órgãos públicos',
  'Instituições',
]

export const regionalPresence = ['Sergipe / Matriz', 'Salvador / BA', 'Maceió / AL']

export const companyContacts = {
  email: 'ocahconstrutora@gmail.com',
  instagram: '@ocahconstrutora.se',
  instagramUrl: 'https://www.instagram.com/ocahconstrutora.se/',
  phone: '(79) 99815-2300',
  phoneUrl: 'tel:+5579998152300',
}

export const contactChannels = [
  {
    label: 'WhatsApp',
    value: 'Fale com nosso time',
    href: WHATSAPP_LINK,
    external: true,
  },
  {
    label: 'E-mail',
    value: companyContacts.email,
    href: `mailto:${companyContacts.email}`,
    external: false,
  },
  {
    label: 'Instagram',
    value: companyContacts.instagram,
    href: companyContacts.instagramUrl,
    external: true,
  },
  {
    label: 'Telefone',
    value: companyContacts.phone,
    href: companyContacts.phoneUrl,
    external: false,
  },
]
