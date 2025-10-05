'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Zap, 
  FileText, 
  Wrench, 
  Users,
  Clock,
  Shield,
  CheckCircle,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const strategicImages = [
  {
    src: '/images/strategic-differentiator-1.jpg',
    alt: 'Técnico profissional realizando desentupimento com equipamento moderno',
    title: 'Equipamentos Profissionais',
    description: 'Utilizamos equipamentos de última geração para garantir eficiência máxima.'
  },
  {
    src: '/images/strategic-differentiator-2.jpg',
    alt: 'Profissional especializado trabalhando com máquina de desentupimento',
    title: 'Técnicos Especializados',
    description: 'Nossa equipe é treinada para resolver qualquer tipo de problema.'
  }
];

const differentiators = [
  {
    icon: Zap,
    title: 'Atendimento rápido e eficiente',
    description: 'Soluções ágeis e sem sujeira, com deslocamento rápido entre cidades vizinhas.',
    color: 'text-primary-red',
    bgColor: 'bg-primary-red',
    delay: 0.1
  },
  {
    icon: FileText,
    title: 'Orçamento sem compromisso',
    description: 'Você envia seu problema e nossa equipe retorna com a solução ideal, sem custos iniciais.',
    color: 'text-primary-blue',
    bgColor: 'bg-primary-blue',
    delay: 0.2
  },
  {
    icon: Wrench,
    title: 'Tecnologia de ponta',
    description: 'Utilizamos equipamentos como hidrojateamento, vídeo inspeção e caminhão auto vácuo.',
    color: 'text-primary-green',
    bgColor: 'bg-primary-green',
    delay: 0.3
  },
  {
    icon: Users,
    title: 'Equipe experiente',
    description: 'Treinamento constante e experiência para resolver desde os casos simples até os mais complexos.',
    color: 'text-primary-gold',
    bgColor: 'bg-primary-gold',
    delay: 0.4
  }
];

const stats = [
  { icon: Clock, value: '24h', label: 'Atendimento' },
  { icon: Shield, value: '90', label: 'Dias de Garantia' },
  { icon: Users, value: '1000+', label: 'Clientes Satisfeitos' },
  { icon: Star, value: '5.0', label: 'Avaliação Média' }
];

export default function StrategicDifferentiators() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === strategicImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(currentImageIndex === 0 ? strategicImages.length - 1 : currentImageIndex - 1);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(currentImageIndex === strategicImages.length - 1 ? 0 : currentImageIndex + 1);
  };

  const goToImage = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(index);
  };
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-primary-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">
            Por que escolher a{' '}
            <span className="text-primary-red">G-Tec Desentupidora</span>?
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Nossos diferenciais garantem o melhor atendimento em desentupimento em Porto Alegre e região.
          </p>
        </motion.div>

        {/* Strategic Images Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16"
        >
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative h-[400px] md:h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={strategicImages[currentImageIndex].src}
                      alt={strategicImages[currentImageIndex].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 1024px"
                      className="object-cover"
                      priority={currentImageIndex === 0}
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-soft/80 via-transparent to-transparent" />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-white"
                      >
                        <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-2">
                          {strategicImages[currentImageIndex].title}
                        </h3>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                          {strategicImages[currentImageIndex].description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Play/Pause Button */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
                aria-label={isAutoPlaying ? "Pausar slideshow" : "Reproduzir slideshow"}
              >
                <div className={`w-3 h-3 ${isAutoPlaying ? 'bg-white' : 'bg-white'}`}>
                  {isAutoPlaying ? (
                    <div className="w-full h-full bg-white rounded-sm" />
                  ) : (
                    <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[3px] border-y-transparent ml-1" />
                  )}
                </div>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-3 mt-6">
              {strategicImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-primary-red scale-125'
                      : 'bg-primary-gray hover:bg-primary-blue'
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-gradient-to-r from-primary-soft to-primary-blue rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full text-white">
                {/* Icon */}
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-poppins font-bold text-white mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-6 flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-green mr-2" />
                  <span className="text-sm font-medium text-white">Garantido</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-soft to-primary-blue rounded-2xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl lg:text-4xl font-poppins font-bold mb-4">
              Números que comprovam nossa excelência
            </h3>
            <p className="text-xl text-gray-200">
              Resultados reais de anos de dedicação e qualidade
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-poppins font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-200 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-soft to-primary-blue rounded-2xl p-8 shadow-lg text-white">
            <h3 className="text-2xl lg:text-3xl font-poppins font-bold text-white mb-4">
              Pronto para resolver seu problema?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contato agora e experimente a diferença de um atendimento profissional e eficiente.
            </p>

            <div className="flex justify-center">
              <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark" href="https://wa.me/5514997655340">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
                Solicitar Orçamento Agora
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
