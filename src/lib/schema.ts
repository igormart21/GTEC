import { services } from '@/lib/data';

export const LocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "G-tec Desentupidora",
  "description": "Desentupidora profissional em Porto Alegre. Atendimento 24 horas, orçamento gratuito e garantia de 90 dias.",
  "url": "https://gtecdesentupidora.com.br",
  "telephone": "+5514997655340",
  "email": "contato@gtecdesentupidora.com.br",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Porto Alegre",
    "addressRegion": "RS",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-30.0346",
    "longitude": "-51.2177"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "PIX"],
  "currenciesAccepted": "BRL",
  "areaServed": [
    "Porto Alegre",
    "Canoas",
    "Gravataí",
    "Viamão",
    "Cachoeirinha",
    "Alvorada",
    "São Leopoldo"
  ],
  "serviceType": [
    "Desentupimento",
    "Limpeza de Fossa",
    "Desentupimento de Pia",
    "Desentupimento de Ralo",
    "Desentupimento de Vaso",
    "Desentupimento de Esgoto",
    "Limpeza de Caixa de Gordura"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Desentupimento",
    "itemListElement": services.map((service, index) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.title,
        "description": service.description
      },
      "position": index + 1
    }))
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Maria Silva"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Excelente atendimento! Resolveram o problema da minha pia rapidamente e com preço justo. Recomendo!"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "João Santos"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Profissionais muito competentes. Chegaram no horário marcado e resolveram o entupimento do esgoto sem quebrar nada."
    }
  ],
  "sameAs": [
    "https://www.instagram.com/desentupidora.portoalegre/"
  ]
};

export const FAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qual o horário de atendimento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Atendemos 24 horas por dia, 7 dias por semana, incluindo feriados. Estamos sempre prontos para resolver sua emergência."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto custa o orçamento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O orçamento é totalmente gratuito! Nossos técnicos fazem uma avaliação completa sem cobrança prévia."
      }
    },
    {
      "@type": "Question",
      "name": "Vocês oferecem garantia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim! Oferecemos garantia de 90 dias em todos os nossos serviços de desentupimento."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo demora o atendimento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dependendo da localização e do tipo de serviço, chegamos em até 1 hora após o contato."
      }
    },
    {
      "@type": "Question",
      "name": "Vocês quebram azulejos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não! Utilizamos técnicas modernas que evitam quebras desnecessárias. Preservamos sua propriedade."
      }
    },
    {
      "@type": "Question",
      "name": "Aceitam cartão de crédito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim! Aceitamos cartão de crédito, débito, PIX e dinheiro. Facilitamos o pagamento para você."
      }
    }
  ]
};
