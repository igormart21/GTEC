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
                ? 'Desentupidora de Pia em Porto Alegre – Atendimento 24h'
                : isRalo
                ? 'Desentupidora de Ralo em Porto Alegre – Atendimento 24h'
                : isVaso
                ? 'Desentupidora de Vaso em Porto Alegre – Atendimento 24h'
                : isFossa
                ? 'Limpa Fossa em Porto Alegre – Atendimento 24h'
                : isEsgoto
                ? 'Desentupidora de Esgoto em Porto Alegre – Atendimento 24h'
                : isCaixa
                ? 'Desentupidora de Caixa de Gordura em Porto Alegre – Atendimento 24h'
                : service.title}
            </h1>
            <div className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto">
              {isPia ? (
                <>
                  <p>Desentupidora de pia em Porto Alegre com equipe própria e equipamentos modernos.</p>
                </>
              ) : isRalo ? (
                <>
                  <p>Desentupidora de ralo em Porto Alegre com equipe experiente e equipamentos de alta pressão.</p>
                  <p>Desentupidora de ralo 24h em Porto Alegre para atendimento urgente, sem quebrar pisos.</p>
                </>
              ) : isVaso ? (
                <>
                  <p>Desentupidora de vaso em Porto Alegre com equipe própria e técnicas seguras.</p>
                  <p>Desentupidora de Vaso 24h em Porto Alegre para atendimento urgente, sem quebrar e sem sujeira.</p>
                </>
              ) : isFossa ? (
                <>
                  <p>Limpa fossa em Porto Alegre com caminhão a vácuo e equipe experiente.</p>
                  <p>Atendimento 24h com descarte ambientalmente correto.</p>
                </>
              ) : isEsgoto ? (
                <>
                  <p>Desentupidora de esgoto em Porto Alegre com resposta urgente e equipamentos profissionais.</p>
                  <p>Atendimento 24h em redes internas e externas.</p>
                </>
              ) : isCaixa ? (
                <>
                  <p>Desentupidora de caixa de gordura em Porto Alegre com higienização completa.</p>
                  <p>Desentupidora de Caixa de Gordura 24h em Porto Alegre para atendimento urgente.</p>
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
        <section className="py-16 bg-white" aria-labelledby="pia-por-que-gtec">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="uppercase tracking-wide text-primary-red font-semibold mb-2">Orçamento sem compromisso</p>
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-neutral-trueDark mb-4">Desentupidora de pia – Porto Alegre</h2>
                <p className="text-lg text-primary-gray leading-relaxed mb-6">
                  Precisa de <strong>desentupidora de pia</strong>? Atuamos em toda a cidade com <strong>Desentupidora de Pia 24h em Porto Alegre</strong> e resposta rápida para casos de <strong>desentupidora de pia urgente em Porto Alegre</strong>. Utilizamos técnicas avançadas e equipamentos profissionais para desobstruir sua pia sem sujeira, com segurança e eficiência.
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
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487"/></svg>
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

      {/* Pia - Por que contratar a G‑Tec */}
      {isPia && (
        <section className="py-16 bg-gradient-to-r from-primary-soft to-primary-blue text-white" aria-labelledby="pia-beneficios-gtec">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 id="pia-beneficios-gtec" className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-4">Por que contratar a G‑Tec Desentupidora de pia em Porto Alegre</h2>
                <p className="text-white/90 mb-6">
                  Somos referência como <strong>Desentupidora de Pia 24h em Porto Alegre</strong>, com atendimento realmente urgente. Nossa equipe chega rápido, identifica a causa do entupimento e executa a solução de forma segura e limpa, preservando sua estrutura e evitando retrabalhos.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                    <p className="text-white/90">Atendimento <strong>urgente</strong> 24h para desentupir sua pia no menor tempo possível.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                    <p className="text-white/90">Técnicas modernas que evitam sujeira e preservam a sua cozinha e bancada.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                    <p className="text-white/90">Diagnóstico preciso para evitar <strong>entupimentos recorrentes</strong> e gastos futuros.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                    <p className="text-white/90">Equipe própria, preço justo e <strong>garantia de 90 dias</strong>.</p>
                  </li>
                </ul>
                <div className="mt-8">
                  <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark" href="https://wa.me/5514997655340">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487"/></svg>
                    Falar no WhatsApp
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
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-neutral-trueDark mb-4">Desentupidora de ralo – Porto Alegre</h2>
                <p className="text-lg text-primary-gray leading-relaxed mb-6">
                  Precisa de <strong>desentupidora de ralo</strong>? Atuamos em toda a cidade com <strong>Desentupidora de Ralo 24h em Porto Alegre</strong> e resposta rápida para casos de <strong>desentupidora de ralo urgente em Porto Alegre</strong>. Desentupimos ralos internos e externos sem quebrar pisos, com segurança e eficiência.
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
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-neutral-trueDark mb-4">Desentupidora de vaso – Porto Alegre</h2>
                <p className="text-lg text-primary-gray leading-relaxed mb-6">Precisa de <strong>desentupidora de vaso</strong>? Atuamos em toda a cidade com <strong>Desentupidora de Vaso 24h em Porto Alegre</strong> e resposta rápida para casos de <strong>desentupidora de vaso urgente em Porto Alegre</strong>. Técnicas seguras que não quebram e não fazem sujeira.</p>
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

      {/* Vaso - Por que contratar a G‑Tec */}
      {isVaso && (
        <section className="py-16 bg-gradient-to-r from-primary-soft to-primary-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-4">Por que contratar a G‑Tec Desentupidora de vaso em Porto Alegre</h2>
                <p className="text-white/90 mb-6">Somos referência como <strong>Desentupidora de Vaso 24h em Porto Alegre</strong>, com atendimento urgente. Resolvemos o entupimento sem quebrar e sem sujeira, com segurança e eficiência.</p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                    <p className="text-white/90">Atendimento <strong>urgente</strong> 24h para desentupir seu vaso o quanto antes.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                    <p className="text-white/90">Técnicas seguras e modernas, sem quebrar e sem sujeira.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                    <p className="text-white/90">Diagnóstico preciso para evitar <strong>entupimentos recorrentes</strong>.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-white" />
                    <p className="text-white/90">Equipe própria, preço justo e <strong>garantia de 90 dias</strong>.</p>
                  </li>
                </ul>
                <div className="mt-8">
                  <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark" href="https://wa.me/5514997655340">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487"/></svg>
                    Falar no WhatsApp
                  </a>
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
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-neutral-trueDark mb-4">Limpa fossa – Porto Alegre</h2>
                <p className="text-lg text-primary-gray leading-relaxed mb-6">Precisa de <strong>limpa fossa</strong>? Atuamos com <strong>Limpa Fossa 24h em Porto Alegre</strong> e resposta rápida para <strong>limpa fossa urgente em Porto Alegre</strong>. Serviço com caminhão a vácuo, equipe experiente e descarte ambientalmente correto.</p>
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

      {/* Fossa - Por que contratar a G‑Tec */}
      {isFossa && (
        <section className="py-16 bg-gradient-to-r from-primary-soft to-primary-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-4">Por que contratar a G‑Tec Limpa Fossa em Porto Alegre</h2>
                <p className="text-white/90 mb-6">Somos referência como <strong>Limpa Fossa 24h em Porto Alegre</strong>, com atendimento urgente. Realizamos limpeza preventiva e corretiva com caminhão a vácuo e descarte ambientalmente correto.</p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90">Atendimento <strong>urgente</strong> 24h com caminhão a vácuo.</p></li>
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90">Procedimentos seguros e <strong>descarte ambientalmente correto</strong>.</p></li>
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90">Diagnóstico preventivo para evitar <strong>transbordamentos</strong> e odores.</p></li>
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90">Equipe própria, preço justo e serviço garantido.</p></li>
                </ul>
                <div className="mt-8">
                  <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark" href="https://wa.me/5514997655340">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-
                  </a>
              </div>
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
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-neutral-trueDark mb-4">Desentupidora de esgoto – Porto Alegre</h2>
                <p className="text-lg text-primary-gray leading-relaxed mb-6">Precisa de <strong>desentupidora de esgoto</strong>? Atuamos com <strong>Desentupidora de Esgoto 24h em Porto Alegre</strong> e resposta rápida para <strong>desentupidora de esgoto urgente em Porto Alegre</strong>. Solução segura em redes internas e externas, sem sujeira.</p>
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

      {/* Esgoto - Por que contratar a G‑Tec */}
      {isEsgoto && (
        <section className="py-16 bg-gradient-to-r from-primary-soft to-primary-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-4">Por que contratar a G‑Tec Desentupidora de esgoto em Porto Alegre</h2>
                <p className="text-white/90 mb-6">Somos referência como <strong>Desentupidora de Esgoto 24h em Porto Alegre</strong>, com atendimento urgente. Resolvemos entupimentos em redes internas e externas com segurança e eficiência.</p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90">Atendimento <strong>urgente</strong> 24h para desentupir seu esgoto o quanto antes.</p></li>
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90">Equipamentos profissionais e técnicas modernas, sem sujeira.</p></li>
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90">Diagnóstico preciso para evitar <strong>entupimentos recorrentes</strong>.</p></li>
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90">Equipe própria, preço justo e <strong>garantia de 90 dias</strong>.</p></li>
                </ul>
                <div className="mt-8">
                  <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark" href="https://wa.me/5514997655340">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487"/></svg>
                    Falar no WhatsApp
                  </a>
                </div>
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
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-neutral-trueDark mb-4">Desentupidora de caixa de gordura – Porto Alegre</h2>
                <p className="text-lg text-primary-gray leading-relaxed mb-6">Precisa de <strong>desentupidora de caixa de gordura</strong>? Atuamos com <strong>Desentupidora de Caixa de Gordura 24h em Porto Alegre</strong> e resposta rápida para <strong>desentupidora de caixa de gordura urgente em Porto Alegre</strong>. Higienização completa para residências, restaurantes e empresas.</p>
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

      {/* Caixa de Gordura - Por que contratar a G‑Tec */}
      {isCaixa && (
        <section className="py-16 bg-gradient-to-r from-primary-soft to-primary-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-4">Por que contratar a G‑Tec Desentupidora de caixa de gordura em Porto Alegre</h2>
                <p className="text-white/90 mb-6">Somos referência como <strong>Desentupidora de Caixa de Gordura 24h em Porto Alegre</strong>, com atendimento urgente. Higienização completa que elimina mau cheiro e previne entupimentos.</p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90">Atendimento <strong>urgente</strong> 24h para limpar/desentupir sua caixa de gordura.</p></li>
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90">Procedimentos seguros e higiênicos, sem sujeira.</p></li>
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90">Prevenção de <strong>entupimentos recorrentes</strong> com orientação técnica.</p></li>
                  <li className="flex items-start space-x-3"><span className="mt-2 w-2 h-2 rounded-full bg-white" /><p className="text-white/90">Equipe própria, preço justo e <strong>garantia de 90 dias</strong>.</p></li>
                </ul>
                <div className="mt-8">
                  <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark" href="https://wa.me/5514997655340">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-
                  </a>
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
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-
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
