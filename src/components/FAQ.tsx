'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/lib/data';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-accent-gold/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary-soft mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-primary-gray dark:text-primary-gray">
            Tire suas dúvidas sobre nossos serviços de desentupimento.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-red/10 border border-primary-red/20 rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openItems.includes(index)}
              >
                <h3 className="font-poppins font-semibold text-primary-soft pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <Minus className="w-5 h-5 text-primary-green" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary-green" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden text-primary-dark"
                  >
                    <div className="px-6 pb-4">
                      <p className="leading-relaxed !text-primary-dark dark:!text-primary-dark">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-primary-green rounded-xl p-8 text-white">
            <h3 className="text-2xl font-poppins font-bold mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-lg mb-6">
              Nossa equipe está pronta para esclarecer todas as suas dúvidas sobre nossos serviços.
            </p>
            <a
              href="tel:+5514997655340"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-blue/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-blue hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-blue hover:border-primary-dark"
            >
              Fale Conosco Agora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
