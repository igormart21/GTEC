import { Metadata } from 'next';
import { 
  Phone, 
  Shield, 
  CheckCircle, 
  Star,
  ArrowLeft,
  Wrench
} from 'lucide-react';
import Link from 'next/link';
import { services } from '@/lib/data';
import Image from 'next/image';
import piaImg from '../../../../assets/desentupimento-pia.jpg.webp';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Serviço não encontrado - G-tec Desentupidora',
    };
  }

  return {
    title: `${service.title} - G-tec Desentupidora Porto Alegre`,
    description: `${service.description} Atendimento 24 horas, orçamento gratuito e garantia de 90 dias.`,
    keywords: `${service.title.toLowerCase()}, desentupimento porto alegre, ${service.slug}`,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-poppins font-bold text-primary-dark mb-4">
            Serviço não encontrado
          </h1>
          <p className="text-gray-600 mb-8">
            O serviço solicitado não foi encontrado.
          </p>
          <Link
            href="/"
            className="bg-primary-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    );
  }

  const relatedServices = services.filter(s => s.id !== service.id).slice(0, 3);
  const isPia = service.slug === 'desentupidora-pia-porto-alegre';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link
              href="/"
              className="flex items-center text-gray-200 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao Início
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              {isPia ? 'Desentupimento de Pia' : service.title}
            </h1>
            <div className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto">
              {isPia ? (
                <>
                  <p>Serviço especializado em desentupimento de pia.</p>
                  <p>
                    Rápido, eficiente e sem sujeira. Atendemos em Porto Alegre e região metropolitana.
                  </p>
                </>
              ) : (
                <p>{service.description}</p>
              )}
            </div>
            {isPia && (
              <div className="mt-8 flex justify-center">
                <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark" href="https://wa.me/5514997655340">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
                  Solicitar Orçamento Agora
                </a>
              </div>
            )}
            {!isPia && service.price && (
              <div className="mt-6">
                <span className="text-2xl font-poppins font-bold text-primary-yellow">
                  {service.price}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pia Dedicated Section */}
      {isPia && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="uppercase tracking-wide text-primary-red font-semibold mb-2">Orçamento sem compromisso</p>
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-neutral-trueDark mb-4">Desentupimento de Pia</h2>
                <p className="text-lg text-primary-gray leading-relaxed mb-6">
                  Uma pia entupida pode causar mau cheiro, atrapalhar sua rotina e até provocar vazamentos. A G‑Tec Desentupidora oferece soluções rápidas e eficazes para o desentupimento de pia em residências, comércios e restaurantes em Porto Alegre e região metropolitana. Nossa equipe especializada utiliza equipamentos modernos para resolver o problema sem sujeira e sem dor de cabeça.
                </p>
                <div className="space-y-3">
                  {[ 
                    'Atendimento 24 horas',
                    'Sem sujeira e com agilidade',
                    'Equipe experiente',
                    'Preço justo e sem surpresa'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-green" />
                      <span className="text-primary-gray">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark" href="https://wa.me/5514997655340">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>
                    Solicitar Orçamento Agora
                  </a>
                </div>
              </div>
              <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={piaImg}
                  alt="Desentupimento de pia com equipamento profissional"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary-soft mb-6">
                Por que escolher nosso serviço?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  Nossa equipe especializada utiliza equipamentos modernos e técnicas avançadas 
                  para resolver problemas de entupimento de forma eficiente e segura. 
                  Garantimos a qualidade do serviço e a preservação de sua propriedade.
                </p>
                <p>
                  Com mais de 10 anos de experiência em Porto Alegre, conhecemos as particularidades 
                  da região e oferecemos soluções personalizadas para cada situação.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-poppins font-semibold text-primary-soft mb-4">
                  O que está incluído:
                </h3>
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-poppins font-bold text-primary-soft mb-6">
                Solicite seu orçamento
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-soft">Atendimento 24h</h4>
                    <p className="text-gray-600 text-sm">Disponível todos os dias</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-soft">Garantia de 90 dias</h4>
                    <p className="text-gray-600 text-sm">Tranquilidade garantida</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-soft">Orçamento gratuito</h4>
                    <p className="text-gray-600 text-sm">Sem compromisso</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark" href="https://wa.me/5514997655340">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
                  Solicitar Orçamento Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary-dark mb-4">
              Como funciona nosso atendimento
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Processo simples e eficiente para resolver seu problema rapidamente.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Contato',
                description: 'Entre em contato conosco por telefone ou formulário'
              },
              {
                step: '2',
                title: 'Orçamento',
                description: 'Fazemos uma avaliação gratuita do problema'
              },
              {
                step: '3',
                title: 'Execução',
                description: 'Realizamos o serviço com equipamentos modernos'
              },
              {
                step: '4',
                title: 'Garantia',
                description: 'Oferecemos garantia de 90 dias no serviço'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-lg font-poppins font-semibold text-primary-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary-dark mb-4">
                Outros serviços
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Conheça outros serviços que oferecemos em Porto Alegre.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => (
                <Link
                  key={relatedService.id}
                  href={`/servicos/${relatedService.slug}`}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-poppins font-semibold text-primary-dark mb-2">
                    {relatedService.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {relatedService.description}
                  </p>
                  <span className="text-primary-green font-semibold text-sm">
                    Saiba mais →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
