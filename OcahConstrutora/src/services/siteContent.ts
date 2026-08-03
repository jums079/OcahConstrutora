export const WHATSAPP_LINK = 'https://wa.me/5579998152300?text=Olá'

export const navigationItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Obras', href: '#obras' },
  { label: 'A OCAH', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contato', href: '#contato' },
]

export const services = [
  {
    name: 'Alvenaria e pós-estrutura',
    description: 'Execução das etapas construtivas após a estrutura.',
  },
  {
    name: 'Instalações elétricas',
    description: 'Soluções elétricas integradas às necessidades do projeto.',
  },
  {
    name: 'Pisos e revestimentos',
    description: 'Aplicação de pisos, revestimentos, vinílicos e laminados.',
  },
  {
    name: 'Pintura e acabamentos',
    description: 'Finalização de ambientes comerciais, corporativos e institucionais.',
  },
  {
    name: 'Gesso e drywall',
    description: 'Forros e divisórias para organizar e adaptar diferentes espaços.',
  },
  {
    name: 'Gestão e projetos',
    description: 'Coordenação técnica desde o planejamento até a conclusão da obra.',
  },
]

type Client = {
  name: string
  featured: boolean
  image?: string
  size?: 'compact' | 'institutional' | 'standard'
  wordmark?: string
  wordmarkStyle?: 'bmg' | 'vivo'
}

export const clients: Client[] = [
  {
    name: 'Aya Construtora',
    image: '/images/portfolio/aya-construtora-transparent.png',
    featured: true,
    size: 'compact',
  },
  {
    name: 'Êxito 25',
    image: '/images/portfolio/exito-transparent.png',
    featured: true,
  },
  { name: 'Tok&Stok', image: '/images/portfolio/client-02.png', featured: true },
  { name: 'MRV', image: '/images/portfolio/client-06.png', featured: true },
  { name: 'Vivo', wordmark: 'vivo', wordmarkStyle: 'vivo', featured: false },
  { name: 'Banco BMG', wordmark: 'bmg', wordmarkStyle: 'bmg', featured: false },
  { name: 'Allianz', image: '/images/portfolio/client-05.png', featured: false },
  { name: 'Sebrae', image: '/images/portfolio/client-03.png', featured: false },
  {
    name: 'TV Atalaia',
    image: '/images/portfolio/client-09.png',
    featured: false,
    size: 'institutional',
  },
  { name: 'Stanza', image: '/images/portfolio/client-01.png', featured: false },
  {
    name: 'Governo de Sergipe',
    image: '/images/portfolio/client-11.png',
    featured: false,
    size: 'institutional',
  },
]

export const featuredProjects = [
  { image: '/images/portfolio/project-06.jpg', name: 'Tok&Stok', type: 'Execução de obra comercial' },
  { image: '/images/portfolio/project-02.jpg', name: 'Banco BMG', type: 'Ambiente corporativo' },
  { image: '/images/portfolio/project-07.jpg', name: 'Vivo', type: 'Espaço de atendimento' },
  { image: '/images/portfolio/project-04.jpg', name: 'Fachada', type: 'Serviço técnico em altura' },
]

export const companyDifferentials = [
  'Planejamento rigoroso',
  'Gestão completa da obra',
  'Transparência em todas as etapas',
  'Equipe qualificada',
  'Controle técnico e segurança',
  'Compromisso com prazo',
]

export const companyContacts = {
  email: 'ocahconstrutora@gmail.com',
  instagram: '@ocahconstrutora.se',
  instagramUrl: 'https://www.instagram.com/ocahconstrutora.se/',
  phone: '(79) 99815-2300',
}

export const contactChannels = [
  {
    label: 'WhatsApp',
    value: companyContacts.phone,
    href: WHATSAPP_LINK,
    external: true,
    actionLabel: 'Falar no WhatsApp',
  },
  {
    label: 'E-mail',
    value: companyContacts.email,
    href: `mailto:${companyContacts.email}`,
    external: false,
    actionLabel: 'Enviar e-mail',
  },
  {
    label: 'Instagram',
    value: companyContacts.instagram,
    href: companyContacts.instagramUrl,
    external: true,
    actionLabel: 'Ver Instagram',
  },
]
