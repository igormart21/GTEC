import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contato - G-Tec Desentupidora Porto Alegre',
  description: 'Entre em contato com a G-Tec Desentupidora. Atendimento 24 horas, orçamento gratuito. Porto Alegre e região. (14) 99765-5340',
  keywords: 'contato g-tec desentupidora, orçamento desentupimento, telefone desentupidora porto alegre',
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-red to-primary-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto">
              Solicite seu orçamento gratuito ou tire suas dúvidas. Estamos prontos para ajudar!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Component */}
      <ContactForm />

      {/* Additional Contact Info */}
      <section className="py-16 bg-accent-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary-soft mb-4">
              Outras formas de contato
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Escolha a forma mais conveniente para entrar em contato conosco.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-poppins font-semibold text-primary-soft mb-4">
                Telefone
              </h3>
              <p className="text-gray-600 mb-4">
                Para emergências e atendimento imediato
              </p>
              <a
                href="tel:+5514997655340"
                className="text-primary-green font-semibold text-lg hover:text-primary-dark transition-colors duration-200"
              >
                (14) 99765-5340
              </a>
            </div>

            <div className="text-center bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-poppins font-semibold text-primary-soft mb-4">
                E-mail
              </h3>
              <p className="text-gray-600 mb-4">
                Para orçamentos e informações detalhadas
              </p>
              <a
                href="mailto:contato@gtecdesentupidora.com.br"
                className="text-primary-green font-semibold text-lg hover:text-primary-dark transition-colors duration-200"
              >
                contato@gtecdesentupidora.com.br
              </a>
            </div>

            <div className="text-center bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-poppins font-semibold text-primary-soft mb-4">
                Instagram
              </h3>
              <p className="text-gray-600 mb-4">
                Siga-nos para dicas e acompanhe nossos trabalhos
              </p>
              <a
                href="https://www.instagram.com/desentupidora.portoalegre/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-green font-semibold text-lg hover:text-primary-dark transition-colors duration-200"
              >
                @desentupidora.portoalegre
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary-soft mb-4">
              Áreas de Atendimento
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Atendemos Porto Alegre e região metropolitana com qualidade e rapidez.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Centro',
              'Cidade Baixa',
              'Moinhos de Vento',
              'Petrópolis',
              'Bom Fim',
              'Floresta',
              'Santana',
              'Cristal',
              'Zona Sul',
              'Zona Norte',
              'Zona Leste',
              'Zona Oeste'
            ].map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
                <span className="text-primary-soft font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Não encontrou sua região? Entre em contato conosco!
            </p>
            <a
              href="tel:+5514997655340"
              className="inline-flex items-center px-8 py-4 bg-primary-green text-white rounded-lg font-poppins font-semibold hover:bg-primary-dark transition-colors duration-200"
            >
              Verificar Atendimento
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
