'use client';

import { motion } from 'framer-motion';
import { Phone, FileText, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Entre em contato',
    description: 'Você nos informa o problema e a localização. Nossa equipe está disponível 24h para te atender.',
    color: 'bg-primary-red'
  },
  {
    icon: FileText,
    title: 'Avaliação e orçamento',
    description: 'Analisamos a situação e enviamos um orçamento sem compromisso.',
    color: 'bg-primary-blue'
  },
  {
    icon: Truck,
    title: 'Deslocamento imediato',
    description: 'Com o orçamento aprovado, nossa equipe vai até você com os equipamentos necessários.',
    color: 'bg-primary-green'
  },
  {
    icon: CheckCircle,
    title: 'Execução limpa e eficiente',
    description: 'Realizamos o desentupimento ou a limpeza com agilidade, sem sujeira e com total segurança.',
    color: 'bg-primary-gold'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-primary-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">
            Como funciona o atendimento da <span className="text-primary-red">G-tec Desentupidora</span>
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Nosso processo é simples, rápido e pensado para facilitar sua vida. Desde o primeiro contato até a finalização do serviço, garantimos agilidade, clareza e eficiência em cada etapa.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center group bg-gradient-to-r from-primary-soft to-primary-blue text-white rounded-2xl p-8 shadow-lg"
            >
              <div className="relative mb-6">
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-red text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                  {index + 1}
                </div>
                
                {/* Icon Container */}
                <div className={`w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-poppins font-semibold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-white/90 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-soft to-primary-blue rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-poppins font-bold mb-6">
              Pronto para resolver seu problema?
            </h3>
            <p className="text-xl mb-8 text-gray-200">
              Entre em contato agora e experimente nosso processo eficiente de atendimento.
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
