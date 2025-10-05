# G-Tec Desentupidora - Website

Website profissional para a G-Tec Desentupidora, empresa especializada em desentupimento em Porto Alegre e região.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações e transições
- **Lucide React** - Ícones modernos
- **next-seo** - Otimização para SEO

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── sobre/              # Página Sobre
│   ├── galeria/            # Página Galeria
│   ├── contato/            # Página Contato
│   ├── servicos/           # Páginas de Serviços
│   │   └── [slug]/         # Páginas dinâmicas de serviços
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   ├── sitemap.ts          # Sitemap XML
│   └── robots.ts           # Robots.txt
├── components/             # Componentes reutilizáveis
│   ├── Navbar.tsx          # Navegação principal
│   ├── Hero.tsx            # Seção hero da página inicial
│   ├── ServiceCards.tsx    # Cards de serviços
│   ├── Testimonials.tsx    # Depoimentos de clientes
│   ├── FAQ.tsx             # Perguntas frequentes
│   ├── GalleryGrid.tsx     # Galeria de imagens
│   ├── ContactForm.tsx     # Formulário de contato
│   └── Footer.tsx          # Rodapé
├── lib/                    # Utilitários e dados
│   ├── data.ts             # Dados mockados
│   └── schema.ts           # Schema.org JSON-LD
└── types/                  # Definições TypeScript
    └── index.ts            # Interfaces e tipos
```

## 🎨 Design System

### Cores
- **Primary Dark**: #0D3B66 (Azul escuro)
- **Primary Green**: #1FAB89 (Verde)
- **Primary Yellow**: #F4D35E (Amarelo)
- **Primary Orange**: #EE6C4D (Laranja)

### Fontes
- **Poppins**: Títulos e cabeçalhos
- **Inter**: Texto do corpo

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **sm**: 640px+
- **md**: 768px+
- **lg**: 1024px+
- **xl**: 1280px+

## 🔍 SEO

- Meta tags otimizadas
- Schema.org (LocalBusiness, FAQPage)
- Sitemap XML automático
- Robots.txt
- OpenGraph e Twitter Cards
- URLs amigáveis

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Build para produção:**
   ```bash
   npm run build
   ```

4. **Executar em produção:**
   ```bash
   npm start
   ```

## 📄 Páginas Disponíveis

### Páginas Principais
- **/** - Página inicial com hero, serviços, depoimentos, FAQ e galeria
- **/sobre** - Informações sobre a empresa
- **/galeria** - Galeria de equipamentos e trabalhos
- **/contato** - Formulário de contato e informações

### Páginas de Serviços
- **/servicos/desentupidora-porto-alegre** - Desentupidora geral
- **/servicos/desentupidora-pia-porto-alegre** - Desentupimento de pia
- **/servicos/desentupidora-ralo-porto-alegre** - Desentupimento de ralo
- **/servicos/desentupidora-vaso-porto-alegre** - Desentupimento de vaso
- **/servicos/desentupidora-esgoto-porto-alegre** - Desentupimento de esgoto
- **/servicos/desentupidora-caixa-gordura-porto-alegre** - Caixa de gordura
- **/servicos/limpa-fossa-porto-alegre** - Limpeza de fossa

## 📞 Informações de Contato

- **Telefone**: (14) 99765-5340
- **Instagram**: [@desentupidora.portoalegre](https://www.instagram.com/desentupidora.portoalegre/)
- **E-mail**: contato@gtecdesentupidora.com.br
- **Atendimento**: 24 horas por dia, 7 dias por semana

## ✨ Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Animações suaves com Framer Motion
- ✅ Formulário de contato funcional
- ✅ SEO otimizado
- ✅ Schema.org para rich snippets
- ✅ Galeria interativa
- ✅ FAQ expansível
- ✅ Navegação mobile-friendly
- ✅ Carregamento otimizado
- ✅ Acessibilidade básica

## 🔧 Personalização

Para personalizar o site:

1. **Cores**: Edite `tailwind.config.ts`
2. **Dados**: Modifique `src/lib/data.ts`
3. **Conteúdo**: Atualize os componentes em `src/components/`
4. **SEO**: Ajuste as meta tags em `src/app/layout.tsx`

## 📈 Performance

- Lazy loading de imagens
- Otimização de builds
- Componentes otimizados
- CSS purging automático
- Bundle splitting

## 🌐 Deploy

O site está pronto para deploy em:
- Vercel (recomendado)
- Netlify
- AWS Amplify
- Qualquer plataforma que suporte Next.js

## 📝 Licença

Este projeto foi desenvolvido especificamente para a G-Tec Desentupidora.