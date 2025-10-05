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
import piaCover from '../../../../assets/WhatsApp Image 2025-10-03 at 08.19.23 (2).jpeg';
import raloImgPrimary from '../../../../assets/AnyConv.com__imagem_2025-08-07_163823662-e1754595552785.webp';
import raloImgAlt from '../../../../assets/AnyConv.com__imagem_2025-08-07_163751998.webp';
import raloCover from '../../../../assets/WhatsApp Image 2025-10-03 at 08.19.22 (1).jpeg';
import vasoImg from '../../../../assets/Desentupimento-de-Privada-1.png.webp';
import vasoCover from '../../../../assets/WhatsApp Image 2025-10-03 at 08.19.22.jpeg';
import fossaCover from '../../../../assets/WhatsApp Image 2025-10-03 at 08.19.23 (1).jpeg';
import vasoImg1 from '../../../../assets/como-desentupir-vaso-sanitario-desentupidora-mercosul.jpg.webp';
import vasoImg2 from '../../../../assets/vaso-entupido2-1200x800-1.jpg.webp';
import fossaImg from '../../../../assets/WhatsApp Image 2025-10-03 at 08.19.24 (2).jpeg';
import fossaDamageImg from '../../../../assets/WhatsApp Image 2025-10-03 at 08.19.22 (2).jpeg';
import piaDanos1 from '../../../../assets/AnyConv.com__imagem_2025-08-07_161101690.webp';
import esgotoImg from '../../../../assets/WhatsApp Image 2025-10-03 at 08.19.24 (1).jpeg';
// imagem extra removida da seção conforme solicitado

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
      title: 'Serviço não encontrado - G-Tec Desentupidora',
    };
  }

  return {
    title: `${service.title} - G-Tec Desentupidora Porto Alegre`,
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
  const isRalo = service.slug === 'desentupidora-ralo-porto-alegre';
  const isVaso = service.slug === 'desentupidora-vaso-porto-alegre';
  const isFossa = service.slug === 'limpa-fossa-porto-alegre';
  const isEsgoto = service.slug === 'desentupidora-esgoto-porto-alegre';
  const isCaixa = service.slug === 'desentupidora-caixa-gordura-porto-alegre';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={(isPia || isRalo || isVaso || isFossa) ? "relative text-white py-20" : "bg-gradient-to-br from-primary-dark to-primary-green text-white py-20"}>
        {(isPia || isRalo || isVaso || isFossa) && (
          <>
            {isPia ? (
              <Image
                src={piaCover}
                alt="Desentupimento de pia - capa"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            ) : isRalo ? (
              <Image
                src={raloCover}
                alt="Desentupimento de ralo - capa"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            ) : isVaso ? (
              <Image
                src={vasoCover}
                alt="Desentupimento de vaso - capa"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            ) : (
              <Image
                src={fossaCover}
                alt="Limpeza de fossa séptica - capa"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-soft/80 to-primary-blue/60" />
          </>
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              {isPia
                ? 'Desentupimento de Pia'
                : isRalo
                ? 'Desentupimento de Ralo – Residencial e Comercial'
                : isVaso
                ? 'Desentupimento de Vaso Sanitário – Atendimento 24h'
                : isFossa
                ? 'Limpeza de Fossa Séptica'
                : isEsgoto
                ? 'Desentupimento de Esgoto – Equipe Especializada'
                : isCaixa
                ? 'Limpeza de Caixa de Gordura – Residencial e Comercial'
                : service.title}
            </h1>
            <div className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto">
              {isPia ? (
                <>
                  <p>Serviço especializado em desentupimento de pia.</p>
                  <p>
                    Rápido, eficiente e sem sujeira. Atendemos em Porto Alegre e região metropolitana.
                  </p>
                </>
              ) : isRalo ? (
                <>
                  <p>Desentupimento de ralos internos e externos,</p>
                  <p>com equipamentos modernos e sem quebrar pisos.</p>
                </>
              ) : isVaso ? (
                <>
                  <p>Serviço especializado em desentupimento de vaso sanitário.</p>
                  <p>Rápido, eficiente e sem sujeira. Atendemos em Porto Alegre e região metropolitana.</p>
                </>
              ) : isFossa ? (
                <>
                  <p>Serviço de limpeza de fossa séptica e manutenção com caminhão a vácuo.</p>
                  <p>Atendemos em Penha, Navegantes, Barra Velha e Balneário Piçarras.</p>
                </>
              ) : isEsgoto ? (
                <>
                  <p>Serviço especializado em desentupimento de esgoto.</p>
                  <p>Atendemos em Porto Alegre e região metropolitana.</p>
                </>
              ) : isCaixa ? (
                <>
                  <p>Limpeza de caixa de gordura para residências, restaurantes e empresas.</p>
                  <p>Atendemos em Porto Alegre e região metropolitana.</p>
                </>
              ) : (
                <p>{service.description}</p>
              )}
            </div>
            {(isPia || isRalo || isVaso || isFossa || isEsgoto || isCaixa) && (
              <div className="mt-8 flex justify-center">
                <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark" href="https://wa.me/5514997655340">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487"/></svg>
                  Orçamento sem compromisso
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
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
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

      {/* Pia - Danos causados */}
      {isPia && (
        <section className="py-16 bg-gradient-to-r from-primary-soft to-primary-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-4">Danos causados por entupimento de pia</h2>
                <p className="text-white/90 mb-6">
                  O entupimento de pias pode gerar problemas sérios em residências e comércios. A G‑Tec atua rápido para evitar transtornos no dia a dia, prejuízos financeiros e riscos à saúde.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                    <p className="text-white/90"><strong className="text-white">Mau cheiro:</strong> resíduos acumulados no encanamento liberam odores desagradáveis.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                    <p className="text-white/90"><strong className="text-white">Proliferação de bactérias:</strong> água parada e resíduos favorecem microrganismos.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                    <p className="text-white/90"><strong className="text-white">Infiltrações e vazamentos:</strong> a pressão da água pode comprometer a tubulação e causar danos estruturais.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                    <p className="text-white/90"><strong className="text-white">Gastos extras:</strong> adiar a solução pode exigir reparos complexos e mais caros.</p>
                  </li>
                </ul>
                <div className="mt-8">
                  <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark" href="https://wa.me/5514997655340">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487"/></svg>
                    Solicitar Orçamento Agora
                  </a>
                </div>
              </div>
              <div className="relative h-48 sm:h-64 lg:h-72 rounded-xl overflow-hidden shadow-lg">
                <Image src={piaDanos1} alt="Pia com desentupidor" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ralo Dedicated Section */}
      {isRalo && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="uppercase tracking-wide text-primary-red font-semibold mb-2">Orçamento sem compromisso</p>
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-neutral-trueDark mb-4">Desentupimento de Ralo</h2>
                <p className="text-lg text-primary-gray leading-relaxed mb-6">
                  Um ralo entupido pode causar alagamentos, mau cheiro e atrapalhar a rotina em casas e estabelecimentos comerciais. A G‑Tec Desentupidora oferece soluções rápidas e eficazes para o desentupimento de ralos internos e externos, utilizando equipamentos modernos e técnicas seguras que garantem a desobstrução sem sujeira e sem dor de cabeça.
                </p>
                <div className="space-y-3">
                  {[ 'Atendimento 24 horas', 'Sem sujeira e com agilidade', 'Equipe experiente', 'Preço justo e sem surpresa' ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-green" />
                      <span className="text-primary-gray">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark" href="https://wa.me/5514997655340">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487"/></svg>
                    Solicitar Orçamento Agora
                  </a>
                </div>
              </div>
              <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={raloImgAlt}
                  alt="Desentupimento de ralo com equipamento profissional"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Vaso Dedicated Section */}
      {isVaso && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="uppercase tracking-wide text-primary-red font-semibold mb-2">Orçamento sem compromisso</p>
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-neutral-trueDark mb-4">Desentupimento de Vaso Sanitário</h2>
                <p className="text-lg text-primary-gray leading-relaxed mb-6">
                  Um vaso sanitário entupido é um problema urgente e incômodo. A G‑Tec Desentupidora oferece soluções rápidas e eficazes para residências, comércios, empresas e condomínios. Utilizamos equipamentos modernos e técnicas seguras para resolver sem quebrar e sem sujeira.
                </p>
                <div className="space-y-3">
                  {[ 'Atendimento 24 horas', 'Sem sujeira e com agilidade', 'Equipe experiente', 'Preço justo e sem surpresa' ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-green" />
                      <span className="text-primary-gray">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark" href="https://wa.me/5514997655340">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487"/></svg>
                    Solicitar Orçamento Agora
                  </a>
                </div>
              </div>
              <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={vasoImg}
                  alt="Desentupimento de vaso sanitário com equipamento profissional"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Vaso - Danos causados */}
      {isVaso && (
        <section className="py-16 bg-gradient-to-r from-primary-soft to-primary-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-4">Danos causados por entupimento de vaso</h2>
                <p className="text-white/90 mb-6">
                  O entupimento de vasos sanitários causa transtornos imediatos, mau cheiro e riscos à saúde. A G‑Tec atua 24h para resolver com rapidez e segurança, evitando prejuízos maiores.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                    <p className="text-white/90"><strong className="text-white">Mau cheiro:</strong> resíduos no vaso e na tubulação liberam odores desagradáveis.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                    <p className="text-white/90"><strong className="text-white">Proliferação de bactérias:</strong> água parada e esgoto favorecem microrganismos nocivos.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                    <p className="text-white/90"><strong className="text-white">Transbordamento:</strong> refluxo de água e dejetos gera sujeira e risco de contaminação.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                    <p className="text-white/90"><strong className="text-white">Gastos extras:</strong> adiar a solução pode exigir reparos mais caros e complexos.</p>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 sm:h-64 lg:h-72 rounded-xl overflow-hidden shadow-lg">
                  <Image src={vasoImg1} alt="Procedimento de desentupimento de vaso 1" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                <div className="relative h-48 sm:h-64 lg:h-72 rounded-xl overflow-hidden shadow-lg">
                  <Image src={vasoImg2} alt="Procedimento de desentupimento de vaso 2" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Fossa Dedicated Section */}
      {isFossa && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="uppercase tracking-wide text-primary-red font-semibold mb-2">Orçamento sem compromisso</p>
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-neutral-trueDark mb-4">Limpeza de Fossa Séptica</h2>
                <p className="text-lg text-primary-gray leading-relaxed mb-6">
                  A falta de limpeza regular da fossa séptica pode gerar mau cheiro, transbordamentos e riscos à saúde. A G‑Tec Desentupidora realiza limpeza de fossa para residências, comércios, empresas e condomínios, com caminhão a vácuo, equipe experiente e descarte ambientalmente correto.
                </p>
                <div className="space-y-3">
                  {[ 'Atendimento 24 horas', 'Sem sujeira e com agilidade', 'Equipe experiente', 'Preço justo e sem surpresa' ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-green" />
                      <span className="text-primary-gray">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark" href="https://wa.me/5514997655340">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487"/></svg>
                    Solicitar Orçamento Agora
                  </a>
                </div>
              </div>
              <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={fossaImg}
                  alt="Limpeza de fossa séptica com caminhão a vácuo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Fossa - Danos causados */}
      {isFossa && (
        <section className="py-16 bg-gradient-to-r from-primary-soft to-primary-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-4">Danos causados pela falta de limpeza da fossa séptica</h2>
                <p className="text-white/90 mb-6">
                  A ausência de manutenção periódica na fossa séptica traz riscos para o imóvel e para a saúde. A G‑Tec realiza limpeza preventiva e corretiva 24h para evitar esses problemas.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90"><strong className="text-white">Mau cheiro:</strong> acúmulo de resíduos gera odores que se espalham pelo ambiente.</p></li>
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90"><strong className="text-white">Proliferação de pragas e bactérias:</strong> fossas cheias favorecem insetos, roedores e microrganismos nocivos.</p></li>
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90"><strong className="text-white">Transbordamento:</strong> excesso pode causar refluxo de esgoto, contaminando solo e ambientes.</p></li>
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90"><strong className="text-white">Danos estruturais:</strong> pressão interna compromete paredes da fossa e provoca infiltrações.</p></li>
                </ul>
              </div>
              <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={fossaDamageImg}
                  alt="Equipe G‑Tec realizando limpeza de fossa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Esgoto Dedicated Section */}
      {isEsgoto && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="uppercase tracking-wide text-primary-red font-semibold mb-2">Orçamento sem compromisso</p>
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-neutral-trueDark mb-4">Desentupimento de Esgoto</h2>
                <p className="text-lg text-primary-gray leading-relaxed mb-6">
                  Um esgoto entupido pode causar mau cheiro, refluxos e risco de contaminação. A G‑Tec Desentupidora atende residências, empresas, comércios e condomínios com soluções rápidas e eficazes, utilizando equipamentos modernos e técnicas adequadas para restabelecer o fluxo com segurança e sem sujeira.
                </p>
                <div className="space-y-3">
                  {[ 'Atendimento 24 horas', 'Sem sujeira e com agilidade', 'Equipe experiente', 'Preço justo e sem surpresa' ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-green" />
                      <span className="text-primary-gray">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark" href="https://wa.me/5514997655340">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487"/></svg>
                    Solicitar Orçamento Agora
                  </a>
                </div>
              </div>
              <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={esgotoImg}
                  alt="Desentupimento de esgoto com equipamento profissional"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Caixa de Gordura Dedicated Section */}
      {isCaixa && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="uppercase tracking-wide text-primary-red font-semibold mb-2">Orçamento sem compromisso</p>
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-neutral-trueDark mb-4">Limpeza de Caixa de Gordura</h2>
                <p className="text-lg text-primary-gray leading-relaxed mb-6">
                  A caixa de gordura é essencial para o bom funcionamento da rede, evitando que óleos e resíduos obstruam as tubulações. A G‑Tec realiza limpeza de caixa de gordura em residências, comércios, condomínios e indústrias, com equipe experiente e higienização completa para eliminar mau cheiro e prevenir entupimentos.
                </p>
                <div className="space-y-3">
                  {[ 'Atendimento 24 horas', 'Sem sujeira e com agilidade', 'Equipe experiente', 'Preço justo e sem surpresa' ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-green" />
                      <span className="text-primary-gray">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark" href="https://wa.me/5514997655340">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487"/></svg>
                    Solicitar Orçamento Agora
                  </a>
                </div>
              </div>
              <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/professional-service-2.jpg"
                  alt="Limpeza de caixa de gordura profissional"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Caixa de Gordura - Danos causados */}
      {isCaixa && (
        <section className="py-16 bg-gradient-to-r from-primary-soft to-primary-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-4">Danos causados pela falta de limpeza da caixa de gordura</h2>
                <p className="text-white/90 mb-6">
                  Quando a caixa de gordura não recebe manutenção periódica, o acúmulo de resíduos pode gerar
                  problemas sérios no imóvel e até impactar a rede pública de esgoto. A G‑Tec atua de forma
                  preventiva e corretiva para evitar transtornos e custos desnecessários.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90"><strong className="text-white">Mau cheiro:</strong> acúmulo de gordura em decomposição libera odores desagradáveis.</p></li>
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90"><strong className="text-white">Entupimento das tubulações:</strong> gordura solidificada bloqueia canos e impede o escoamento.</p></li>
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90"><strong className="text-white">Proliferação de insetos e pragas:</strong> ambiente sujo atrai baratas, moscas e vetores de doenças.</p></li>
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90"><strong className="text-white">Custos elevados de reparo:</strong> a falta de manutenção exige intervenções mais complexas e caras.</p></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Esgoto - Danos causados */}
      {isEsgoto && (
        <section className="py-16 bg-gradient-to-r from-primary-soft to-primary-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-4">Danos causados por entupimento de esgoto</h2>
                <p className="text-white/90 mb-6">
                  O entupimento do sistema de esgoto pode gerar consequências graves, afetando a saúde e até a estrutura do imóvel. A G‑Tec atua com rapidez para evitar esses riscos.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90"><strong className="text-white">Mau cheiro:</strong> esgoto parado libera gases que se espalham pelo ambiente.</p></li>
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90"><strong className="text-white">Proliferação de pragas:</strong> resíduos favorecem ratos, baratas e outros insetos.</p></li>
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90"><strong className="text-white">Refluxo de esgoto:</strong> retorno de água suja para pias, ralos e vasos, com risco de contaminação.</p></li>
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90"><strong className="text-white">Danos estruturais:</strong> infiltrações e vazamentos podem comprometer paredes e pisos.</p></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ralo - Danos causados */}
      {isRalo && (
        <section className="py-16 bg-gradient-to-r from-primary-soft to-primary-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-4">Danos causados por entupimento de ralo</h2>
                <p className="text-white/90 mb-6">
                  O entupimento de ralos pode gerar sérios transtornos no dia a dia. A G‑Tec atua rápido para evitar prejuízos e riscos à saúde, com atendimento 24h em Porto Alegre e região.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                    <p className="text-white/90"><strong className="text-white">Mau cheiro:</strong> resíduos orgânicos em decomposição liberam odores desagradáveis pelo ambiente.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                    <p className="text-white/90"><strong className="text-white">Proliferação de insetos e bactérias:</strong> ralos obstruídos favorecem baratas e microrganismos nocivos.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                    <p className="text-white/90"><strong className="text-white">Alagamentos:</strong> a água acumulada pode danificar pisos, móveis e estruturas.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                    <p className="text-white/90"><strong className="text-white">Gastos extras:</strong> adiar a solução aumenta o custo com reparos e manutenção.</p>
                  </li>
                </ul>
                <div className="mt-8">
                  <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark" href="https://wa.me/5514997655340">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487"/></svg>
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 sm:h-64 lg:h-72 rounded-xl overflow-hidden shadow-lg">
                  <Image src={raloImgPrimary} alt="Equipamento G‑Tec desentupindo ralo" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                <div className="relative h-48 sm:h-64 lg:h-72 rounded-xl overflow-hidden shadow-lg">
                  <Image src={raloImgAlt} alt="Ralo entupido sendo desobstruído" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
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
