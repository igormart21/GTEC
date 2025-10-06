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
    description: 'Desentupidora de pia em Porto Alegre com atendimento 24h e resposta urgente. Especialistas em desentupimento de pias residenciais e comerciais com técnicas avançadas, sem sujeira e com orçamento gratuito.',
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
    description: 'Desentupidora de ralo em Porto Alegre com atendimento 24h e resposta urgente. Desentupimento de ralos internos e externos com equipamentos de alta pressão, sem quebrar pisos e com orçamento gratuito.',
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
    description: 'Desentupidora de vaso em Porto Alegre com atendimento 24h e resposta urgente. Técnicas seguras que não quebram e não fazem sujeira, com orçamento gratuito.',
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
    description: 'Desentupidora de esgoto em Porto Alegre 24h, com atendimento urgente. Equipamentos profissionais e solução segura para redes internas e externas.',
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
    description: 'Limpeza de caixa de gordura em Porto Alegre 24h, atendimento urgente para residências, restaurantes e empresas. Higienização completa e prevenção de entupimentos.',
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
    description: 'Limpa fossa em Porto Alegre 24h com caminhão a vácuo, resposta urgente e descarte ambientalmente correto. Atendimento residencial e comercial.',
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
    src: '/images/professional-service-1.jpg',
    alt: 'Serviço profissional de desentupimento',
    category: 'equipamentos'
  },
  {
    id: '2',
    src: '/images/professional-service-2.jpg',
    alt: 'Equipe técnica em atendimento',
    category: 'servicos'
  },
  {
    id: '3',
    src: '/images/strategic-differentiator-1.jpg',
    alt: 'Equipamentos modernos de inspeção',
    category: 'limpa-fossa'
  },
  {
    id: '4',
    src: '/images/strategic-differentiator-2.jpg',
    alt: 'Técnicas avançadas em campo',
    category: 'equipe'
  },
  {
    id: '5',
    src: '/images/hero-background.png',
    alt: 'Atendimento 24h G‑Tec',
    category: 'servicos'
  },
  {
    id: '6',
    src: '/images/hero-background-new.jpg',
    alt: 'Tecnologia e segurança',
    category: 'equipamentos'
  }
];
