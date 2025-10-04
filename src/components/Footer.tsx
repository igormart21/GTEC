'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { href: '/servicos/desentupidora-porto-alegre', label: 'Desentupidora Porto Alegre' },
    { href: '/servicos/desentupidora-pia-porto-alegre', label: 'Desentupidora de Pia' },
    { href: '/servicos/desentupidora-ralo-porto-alegre', label: 'Desentupidora de Ralo' },
    { href: '/servicos/desentupidora-vaso-porto-alegre', label: 'Desentupidora de Vaso' },
    { href: '/servicos/desentupidora-esgoto-porto-alegre', label: 'Desentupidora de Esgoto' },
    { href: '/servicos/desentupidora-caixa-gordura-porto-alegre', label: 'Caixa de Gordura' },
    { href: '/servicos/limpa-fossa-porto-alegre', label: 'Limpa Fossa' },
  ];

  const pages = [
    { href: '/', label: 'Início' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/galeria', label: 'Galeria' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <footer className="bg-gradient-to-r from-primary-blue to-primary-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative w-32 h-32">
                <Image
                  src="/images/g-tec-logo.png"
                  alt="G-tec Desentupidora Logo"
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-poppins font-bold">
                  G-tec Desentupidora
                </h3>
                <p className="text-sm text-gray-300">Porto Alegre</p>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em desentupimento em Porto Alegre e região. 
              Atendimento 24 horas com equipamentos modernos e técnicos qualificados.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/desentupidora.portoalegre/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-green rounded-lg flex items-center justify-center hover:bg-primary-yellow hover:text-primary-dark transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-green rounded-lg flex items-center justify-center hover:bg-primary-yellow hover:text-primary-dark transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">
              Nossos Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-primary-yellow transition-colors duration-200 text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-gray-300 hover:text-primary-yellow transition-colors duration-200 text-sm"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-green mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    <a
                      href="tel:+5514997655340"
                      className="hover:text-primary-yellow transition-colors duration-200"
                    >
                      (14) 99765-5340
                    </a>
                  </p>
                  <p className="text-xs text-gray-400">Atendimento 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-green mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    <a
                      href="mailto:contato@gtecdesentupidora.com.br"
                      className="hover:text-primary-yellow transition-colors duration-200"
                    >
                      contato@gtecdesentupidora.com.br
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-green mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Porto Alegre e região
                  </p>
                  <p className="text-xs text-gray-400">RS, Brasil</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-green mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    24 horas por dia
                  </p>
                  <p className="text-xs text-gray-400">7 dias por semana</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="tel:+5514997655340"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-gold to-primary-yellow text-primary-dark rounded-lg font-semibold hover:from-primary-yellow hover:to-primary-gold hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-gold hover:border-primary-yellow"
              >
                <Phone className="w-4 h-4 mr-2" />
                Ligar Agora
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} G-tec Desentupidora. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <Link
                href="/politica-privacidade"
                className="text-gray-400 hover:text-primary-yellow transition-colors duration-200"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos-uso"
                className="text-gray-400 hover:text-primary-yellow transition-colors duration-200"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
