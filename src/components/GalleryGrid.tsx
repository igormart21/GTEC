'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { galleryImages } from '@/lib/data';

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedImage(index);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-16 bg-primary-red/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary-soft mb-4">
            Nossa Galeria
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça nossos equipamentos modernos e veja alguns dos nossos trabalhos realizados em Porto Alegre.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg"
              onClick={() => openModal(index)}
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-primary-green font-bold text-lg">+</span>
                  </div>
                </div>
              </div>
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
          <div className="bg-gradient-to-r from-primary-dark to-primary-green rounded-xl p-8 text-white">
            <h3 className="text-2xl font-poppins font-bold mb-4">
              Quer ver mais trabalhos?
            </h3>
            <p className="text-lg mb-6">
              Siga-nos no Instagram para acompanhar nossos trabalhos e dicas de manutenção.
            </p>
            <a
              href="https://www.instagram.com/desentupidora.portoalegre/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-green to-primary-green/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-green hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-green hover:border-primary-dark"
            >
              Seguir no Instagram
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>

              <div className="bg-primary-green/10 border border-primary-green/20 rounded-xl p-2 sm:p-4">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-3 sm:mb-4">
                  <Image
                    src={galleryImages[currentIndex].src}
                    alt={galleryImages[currentIndex].alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="px-2 sm:px-4 pb-2 sm:pb-4 text-center">
                  <h3 className="text-lg font-poppins font-semibold text-primary-soft mb-1">
                    {galleryImages[currentIndex].alt}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Categoria: {galleryImages[currentIndex].category}
                  </p>
                  <p className="text-xs text-gray-500">
                    {currentIndex + 1} de {galleryImages.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryGrid;
