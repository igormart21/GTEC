import { Metadata } from 'next';
import { 
  Shield, 
  Clock, 
  Users, 
  Award, 
  Phone, 
  CheckCircle,
  Star,
  Truck,
  Wrench
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre Nós - G-Tec Desentupidora Porto Alegre',
  description: 'Conheça a G-Tec Desentupidora, empresa especializada em desentupimento em Porto Alegre com mais de 10 anos de experiência e equipamentos modernos.',
  keywords: 'sobre g-tec desentupidora, empresa desentupimento porto alegre, história desentupidora',
};

export default function SobrePage() {
  const stats = [
    { icon: Users, value: '1000+', label: 'Clientes Satisfeitos' },
    { icon: Clock, value: '24h', label: 'Atendimento' },
    { icon: Award, value: '10+', label: 'Anos de Experiência' },
    { icon: CheckCircle, value: '100%', label: 'Garantia' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Oferecemos garantia de 90 dias em todos os nossos serviços, garantindo sua satisfação.'
    },
    {
      icon: Clock,
      title: 'Atendimento 24h',
      description: 'Estamos disponíveis 24 horas por dia, 7 dias por semana para resolver suas emergências.'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Nossos técnicos são treinados e especializados em diferentes tipos de desentupimento.'
    },
    {
      icon: Truck,
      title: 'Equipamentos Modernos',
      description: 'Utilizamos equipamentos de última geração para garantir eficiência e rapidez.'
    },
    {
      icon: Wrench,
      title: 'Técnicas Avançadas',
      description: 'Aplicamos técnicas modernas que evitam quebras desnecessárias em sua propriedade.'
    },
    {
      icon: Star,
      title: 'Preços Justos',
      description: 'Oferecemos preços competitivos e transparentes, sem surpresas na hora do pagamento.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-soft to-primary-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Quem Somos
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto">
              Conheça mais sobre nós: atendimento 24h, equipe qualificada e serviço rápido em Porto Alegre e região
            </p>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-neutral-trueDark mb-6">
                Quem somos
              </h2>
              <div className="space-y-4 text-primary-gray leading-relaxed">
                <p>
                  A G‑Tec Desentupidora é especializada em serviços residenciais, comerciais e industriais
                  em Porto Alegre e região metropolitana. Com anos de experiência, atuamos com rapidez,
                  eficiência e total cuidado para oferecer soluções duradouras em desentupimento de pias,
                  vasos sanitários, ralos, redes de esgoto, limpeza de caixas de gordura e fossas sépticas.
                </p>
                <p>
                  Nossa equipe é formada por profissionais qualificados e treinados, que utilizam
                  equipamentos modernos e técnicas seguras para realizar o serviço com qualidade,
                  sem sujeira e sem transtornos desnecessários.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-poppins font-semibold text-neutral-trueDark mb-3">Cidades atendidas</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Porto Alegre',
                    'Canoas',
                    'São Leopoldo',
                    'Novo Hamburgo',
                    'Gravataí',
                    'Viamão',
                    'Alvorada',
                    'Cachoeirinha',
                    'Esteio',
                    'Sapucaia do Sul'
                  ].map((city) => (
                    <span key={city} className="px-3 py-1 rounded-full bg-primary-green/10 text-primary-soft text-sm">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-poppins font-bold text-primary-soft mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-green rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-primary-soft mb-4">
                Nossa missão
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Oferecer serviços de desentupimento com agilidade, qualidade e respeito ao cliente,
                utilizando técnicas modernas e equipamentos adequados para resolver com eficiência
                e profissionalismo.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-green rounded-lg flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-primary-soft mb-4">
                Nossa visão
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ser reconhecida como a melhor desentupidora de Porto Alegre e região,
                referência em atendimento, tecnologia e responsabilidade ambiental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-primary-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary-soft mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Na G‑Tec, nossos valores guiam cada atendimento, com ética, respeito e foco na qualidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-green rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-primary-soft mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que escolher a G‑Tec */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-neutral-trueDark mb-4">Por que escolher a G‑Tec Desentupidora?</h2>
            <p className="text-lg text-primary-gray max-w-3xl mx-auto">Serviço de qualidade, rápido e eficiente para resolver qualquer entupimento em Porto Alegre e região, com preço justo e transparência.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Preço justo e sem surpresas', desc: 'Orçamentos transparentes e valores acessíveis.' },
              { title: 'Rapidez e eficiência', desc: 'Atendimento ágil para minimizar transtornos.' },
              { title: 'Equipamentos modernos', desc: 'Tecnologia de ponta para serviços limpos e seguros.' },
              { title: 'Profissionais qualificados', desc: 'Equipe experiente e treinada para excelência.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-5 h-5 text-primary-green mr-2" />
                  <h3 className="font-poppins font-semibold text-neutral-trueDark">{item.title}</h3>
                </div>
                <p className="text-primary-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-gradient-to-r from-primary-soft to-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-4">O que nossos clientes dizem</h2>
            <p className="text-white/90">Atendimento rápido e sem complicação. Veja algumas avaliações:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Heidi Souza', text: 'Muito prestativos, pontuais e educados. Serviço de ótima qualidade. Recomendo!', date: '2025-01-20' },
              { name: 'Leandro Adolfo Kopper', text: 'Limparam fossa e filtro com rapidez. Bons equipamentos e execução ágil.', date: '2025-01-20' },
              { name: 'Rodrigo Spanholi', text: 'Rápidos e honestos.', date: '2025-01-20' },
              { name: 'Joice Imthurn', text: 'Excelente trabalho e atendimento.', date: '2025-01-08' },
              { name: 'Carmen Gregorio', text: 'Atendimento perfeito, equipe atenciosa e competente. Recomendo!', date: '2025-01-08' }
            ].map((t, idx) => (
              <div key={idx} className="rounded-xl bg-white/10 backdrop-blur p-6 shadow-lg">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/90 mb-4">{t.text}</p>
                <div className="text-sm text-white/80">{t.name} • {t.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona o atendimento */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-neutral-trueDark mb-4">Como funciona o atendimento da G‑Tec</h2>
            <p className="text-lg text-primary-gray max-w-3xl mx-auto">Nosso processo é simples, rápido e pensado para facilitar sua vida — do primeiro contato à finalização do serviço.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Entre em contato', desc: 'Informe o problema e a localização. Atendimento 24h.' },
              { step: '2', title: 'Avaliação e orçamento', desc: 'Analisamos a situação e enviamos um orçamento sem compromisso.' },
              { step: '3', title: 'Deslocamento imediato', desc: 'Com aprovação, nossa equipe vai até você com os equipamentos necessários.' },
              { step: '4', title: 'Execução limpa e eficiente', desc: 'Serviço rápido, sem sujeira e com total segurança.' }
            ].map((s, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary-green text-white flex items-center justify-center font-poppins font-semibold mb-4">{s.step}</div>
                <h3 className="font-poppins font-semibold text-neutral-trueDark mb-2">{s.title}</h3>
                <p className="text-primary-gray">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-6">
            Precisa de nossos serviços?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Entre em contato conosco e descubra por que somos a melhor escolha em desentupimento em Porto Alegre.
          </p>
          <div className="flex justify-center">
            <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark" href="https://wa.me/5514997655340">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
              Solicitar Orçamento Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
