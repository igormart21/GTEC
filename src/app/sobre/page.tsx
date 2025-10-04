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
  title: 'Sobre Nós - G-tec Desentupidora Porto Alegre',
  description: 'Conheça a G-tec Desentupidora, empresa especializada em desentupimento em Porto Alegre com mais de 10 anos de experiência e equipamentos modernos.',
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
      <section className="bg-gradient-to-br from-accent-red to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Sobre a G-tec Desentupidora
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto">
              Mais de 10 anos de experiência em desentupimento em Porto Alegre e região
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-primary-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary-soft mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A G-tec Desentupidora nasceu da necessidade de oferecer um serviço de qualidade 
                  e confiança em Porto Alegre. Com mais de 10 anos de experiência no mercado, 
                  nos tornamos referência em desentupimento na região.
                </p>
                <p>
                  Nossa empresa foi fundada com o objetivo de resolver problemas de entupimento 
                  de forma rápida, eficiente e sem causar danos à propriedade dos nossos clientes. 
                  Ao longo dos anos, investimos em equipamentos modernos e capacitação da nossa equipe.
                </p>
                <p>
                  Hoje, atendemos Porto Alegre e região metropolitana com uma equipe de técnicos 
                  especializados e equipamentos de última geração, sempre mantendo nosso compromisso 
                  com a qualidade e satisfação do cliente.
                </p>
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

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-green rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-primary-soft mb-4">
                Nossa Missão
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Proporcionar soluções eficazes em desentupimento, utilizando técnicas modernas 
                e equipamentos adequados, sempre priorizando a satisfação do cliente e a 
                preservação de sua propriedade.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-green rounded-lg flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-primary-soft mb-4">
                Nossa Visão
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ser reconhecida como a melhor empresa de desentupimento de Porto Alegre, 
                expandindo nossos serviços para toda a região metropolitana e mantendo 
                sempre o mais alto padrão de qualidade.
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
              Os princípios que guiam nosso trabalho e garantem a qualidade dos nossos serviços.
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
