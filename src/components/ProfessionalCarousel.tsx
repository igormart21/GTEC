'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProfessionalCarouselProps {
  images: {
    src: string;
    alt: string;
    title: string;
    description: string;
  }[];
}

export default function ProfessionalCarousel({ images }: ProfessionalCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <div className="relative h-[240px] sm:h-[360px] md:h-[500px] md:min-h-[500px] lg:h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                sizes="(max-width: 768px) 100vw, 1024px"
                className="object-cover"
                priority={currentIndex === 0}
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
                    {images[currentIndex].title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                    {images[currentIndex].description}
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
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary-red scale-125'
                : 'bg-primary-gray hover:bg-primary-blue'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center space-x-4 mt-6">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentIndex
                ? 'ring-2 ring-primary-red scale-110'
                : 'hover:scale-105 opacity-70 hover:opacity-100'
            }`}
            aria-label={`Ver imagem ${index + 1}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
