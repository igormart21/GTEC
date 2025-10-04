'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { services } from '@/lib/data';
import { 
  Wrench, 
  Droplets, 
  Circle, 
  Toilet, 
  Zap, 
  Box, 
  Truck 
} from 'lucide-react';

const iconMap = {
  Wrench,
  Droplets,
  Circle,
  Toilet,
  Zap,
  Box,
  Truck,
};

const ServiceCards = () => {
  return (
    <section className="py-12 sm:py-16 bg-primary-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary-soft mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-primary-gray max-w-3xl mx-auto">
            Oferecemos soluções completas em desentupimento para Porto Alegre e região, 
            com equipamentos modernos e técnicos especializados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-neutral-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-blue rounded-lg mb-4 mx-auto">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-poppins font-semibold text-primary-soft mb-3 text-center">
                    {service.title}
                  </h3>
                  
                  <p className="text-primary-gray mb-4 text-center">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                        <span className="text-sm text-primary-gray">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {service.price && (
                    <div className="text-center mb-4">
                      <span className="text-lg font-poppins font-bold text-primary-red">
                        {service.price}
                      </span>
                    </div>
                  )}

                  <Link
                    href={`/servicos/${service.slug}`}
                    className="block w-full bg-gradient-to-r from-primary-blue to-primary-blue/80 text-white py-3 px-4 rounded-lg font-medium hover:from-primary-dark hover:to-primary-blue hover:scale-105 transition-all duration-300 text-center shadow-lg border-2 border-primary-blue hover:border-primary-dark"
                  >
                    Saiba Mais
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark" href="https://wa.me/5514997655340">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"></path></svg>
            Solicitar Orçamento Agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCards;
