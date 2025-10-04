import { Service, Testimonial, FAQ, GalleryImage } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Desentupidora em Porto Alegre',
    description: 'Serviço completo de desentupimento para toda Porto Alegre com equipamentos modernos e técnicos especializados.',
    icon: 'Wrench',
    slug: 'desentupidora-porto-alegre',
    features: [
      'Atendimento 24 horas',
      'Equipamentos modernos',
      'Garantia de 90 dias',
      'Orçamento gratuito'
    ],
    price: undefined
  },
  {
    id: '2',
    title: 'Desentupidora de Pia',
    description: 'Especialistas em desentupimento de pias com técnicas avançadas e produtos específicos.',
    icon: 'Droplets',
    slug: 'desentupidora-pia-porto-alegre',
    features: [
      'Diagnóstico gratuito',
      'Produtos específicos',
      'Limpeza completa',
      'Prevenção de novos entupimentos'
    ],
    price: undefined
  },
  {
    id: '3',
    title: 'Desentupidora de Ralo',
    description: 'Desentupimento profissional de ralos com equipamentos de alta pressão.',
    icon: 'Circle',
    slug: 'desentupidora-ralo-porto-alegre',
    features: [
      'Equipamentos de alta pressão',
      'Limpeza profunda',
      'Inspeção por câmera',
      'Garantia de qualidade'
    ],
    price: undefined
  },
  {
    id: '4',
    title: 'Desentupidora de Vaso',
    description: 'Serviço especializado em desentupimento de vasos sanitários com técnicas seguras.',
    icon: 'Toilet',
    slug: 'desentupidora-vaso-porto-alegre',
    features: [
      'Técnicas seguras',
      'Produtos biodegradáveis',
      'Sem quebra de azulejos',
      'Atendimento rápido'
    ],
    price: undefined
  },
  {
    id: '5',
    title: 'Desentupidora de Esgoto',
    description: 'Desentupimento de redes de esgoto com equipamentos profissionais.',
    icon: 'Zap',
    slug: 'desentupidora-esgoto-porto-alegre',
    features: [
      'Equipamentos profissionais',
      'Inspeção completa',
      'Limpeza de rede',
      'Relatório técnico'
    ],
    price: undefined
  },
  {
    id: '6',
    title: 'Desentupidora de Caixa de Gordura',
    description: 'Limpeza e desentupimento de caixas de gordura com produtos específicos.',
    icon: 'Box',
    slug: 'desentupidora-caixa-gordura-porto-alegre',
    features: [
      'Produtos específicos',
      'Limpeza completa',
      'Manutenção preventiva',
      'Descarte correto'
    ],
    price: undefined
  },
  {
    id: '7',
    title: 'Limpa Fossa',
    description: 'Serviço completo de limpeza de fossas sépticas com caminhão limpa-fossa.',
    icon: 'Truck',
    slug: 'limpa-fossa-porto-alegre',
    features: [
      'Caminhão limpa-fossa',
      'Descarte ambiental correto',
      'Inspeção prévia',
      'Certificado de limpeza'
    ],
    price: undefined
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Silva',
    location: 'Centro, Porto Alegre',
    rating: 5,
    comment: 'Excelente atendimento! Resolveram o problema da minha pia rapidamente e com preço justo. Recomendo!'
  },
  {
    id: '2',
    name: 'João Santos',
    location: 'Cidade Baixa, Porto Alegre',
    rating: 5,
    comment: 'Profissionais muito competentes. Chegaram no horário marcado e resolveram o entupimento do esgoto sem quebrar nada.'
  },
  {
    id: '3',
    name: 'Ana Costa',
    location: 'Moinhos de Vento, Porto Alegre',
    rating: 5,
    comment: 'Atendimento 24h salvou minha noite! O técnico foi muito educado e resolveu o problema do vaso sanitário rapidamente.'
  },
  {
    id: '4',
    name: 'Carlos Oliveira',
    location: 'Petrópolis, Porto Alegre',
    rating: 5,
    comment: 'Serviço de limpeza de fossa impecável. Equipe profissional e equipamentos modernos. Vale cada centavo!'
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Qual o horário de atendimento?',
    answer: 'Atendemos 24 horas por dia, 7 dias por semana, incluindo feriados. Estamos sempre prontos para resolver sua emergência.'
  },
  {
    id: '2',
    question: 'Quanto custa o orçamento?',
    answer: 'O orçamento é totalmente gratuito! Nossos técnicos fazem uma avaliação completa sem cobrança prévia.'
  },
  {
    id: '3',
    question: 'Vocês oferecem garantia?',
    answer: 'Sim! Oferecemos garantia de 90 dias em todos os nossos serviços de desentupimento.'
  },
  {
    id: '4',
    question: 'Quanto tempo demora o atendimento?',
    answer: 'Dependendo da localização e do tipo de serviço, chegamos em até 1 hora após o contato.'
  },
  {
    id: '5',
    question: 'Vocês quebram azulejos?',
    answer: 'Não! Utilizamos técnicas modernas que evitam quebras desnecessárias. Preservamos sua propriedade.'
  },
  {
    id: '6',
    question: 'Aceitam cartão de crédito?',
    answer: 'Sim! Aceitamos cartão de crédito, débito, PIX e dinheiro. Facilitamos o pagamento para você.'
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery/desentupimento-1.jpg',
    alt: 'Equipamento de desentupimento profissional',
    category: 'equipamentos'
  },
  {
    id: '2',
    src: '/images/gallery/desentupimento-2.jpg',
    alt: 'Técnico trabalhando em desentupimento',
    category: 'servicos'
  },
  {
    id: '3',
    src: '/images/gallery/limpa-fossa-1.jpg',
    alt: 'Caminhão limpa-fossa em ação',
    category: 'limpa-fossa'
  },
  {
    id: '4',
    src: '/images/gallery/equipe-1.jpg',
    alt: 'Equipe técnica especializada',
    category: 'equipe'
  },
  {
    id: '5',
    src: '/images/gallery/desentupimento-3.jpg',
    alt: 'Desentupimento de esgoto',
    category: 'servicos'
  },
  {
    id: '6',
    src: '/images/gallery/equipamentos-1.jpg',
    alt: 'Equipamentos modernos',
    category: 'equipamentos'
  }
];
