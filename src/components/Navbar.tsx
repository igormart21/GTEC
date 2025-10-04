'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Início' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/galeria', label: 'Galeria' },
    { href: '/contato', label: 'Contato' },
  ];

  const serviceItems = [
    { href: '/servicos/desentupidora-porto-alegre', label: 'Desentupidora Porto Alegre' },
    { href: '/servicos/desentupidora-pia-porto-alegre', label: 'Desentupidora de Pia' },
    { href: '/servicos/desentupidora-ralo-porto-alegre', label: 'Desentupidora de Ralo' },
    { href: '/servicos/desentupidora-vaso-porto-alegre', label: 'Desentupidora de Vaso' },
    { href: '/servicos/desentupidora-esgoto-porto-alegre', label: 'Desentupidora de Esgoto' },
    { href: '/servicos/desentupidora-caixa-gordura-porto-alegre', label: 'Caixa de Gordura' },
    { href: '/servicos/limpa-fossa-porto-alegre', label: 'Limpa Fossa' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28">
              <Image
                src="/images/g-tec-logo.png"
                alt="G-tec Desentupidora Logo"
                fill
                sizes="(max-width: 768px) 64px, (max-width: 1024px) 96px, 112px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-primary-gray hover:text-primary-blue transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-primary-gray hover:text-primary-blue transition-colors duration-200 font-medium flex items-center">
                Serviços
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-neutral-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-primary-gray hover:bg-primary-blue hover:text-white transition-colors duration-200"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+5514997655340"
              className="flex items-center space-x-2 text-primary-blue hover:text-primary-dark transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(14) 99765-5340</span>
            </a>
            <a
              href="https://www.instagram.com/desentupidora.portoalegre/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-blue hover:text-primary-dark transition-colors duration-200"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-primary-gray hover:text-primary-blue hover:bg-neutral-light transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-light"
          >
            <div className="px-4 py-2 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-primary-gray hover:text-primary-blue transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="border-t border-neutral-light pt-2">
                <p className="text-sm font-semibold text-primary-soft mb-2">Serviços:</p>
                {serviceItems.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block py-1 text-sm text-primary-gray hover:text-primary-blue transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-neutral-light pt-2 flex items-center space-x-4">
                <a
                  href="tel:+5514997655340"
                  className="flex items-center space-x-2 text-primary-blue"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">(14) 99765-5340</span>
                </a>
                <a
                  href="https://www.instagram.com/desentupidora.portoalegre/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-blue"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
