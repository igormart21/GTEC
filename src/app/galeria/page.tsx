import { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata: Metadata = {
  title: 'Galeria - G-Tec Desentupidora Porto Alegre',
  description: 'Conheça nossos equipamentos modernos e veja alguns dos nossos trabalhos realizados em Porto Alegre. Equipe especializada e equipamentos de última geração.',
  keywords: 'galeria g-tec desentupidora, equipamentos desentupimento, trabalhos realizados porto alegre',
};

export default function GaleriaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Nossa Galeria
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto">
              Conheça nossos equipamentos modernos e veja alguns dos nossos trabalhos realizados
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Component */}
      <GalleryGrid />

      {/* Additional Info */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary-soft mb-6">
                Equipamentos Modernos
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Investimos constantemente em equipamentos de última geração para garantir 
                  a eficiência e qualidade dos nossos serviços. Nossos equipamentos incluem:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                    <span>Equipamentos de alta pressão</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                    <span>Câmeras de inspeção</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                    <span>Caminhão limpa-fossa</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                    <span>Equipamentos de hidrojateamento</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                    <span>Produtos específicos para cada tipo de entupimento</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-poppins font-bold text-primary-soft mb-6">
                Por que escolher nossos equipamentos?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-soft mb-1">Eficiência</h4>
                    <p className="text-gray-600 text-sm">Resolvemos problemas mais rapidamente</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-soft mb-1">Segurança</h4>
                    <p className="text-gray-600 text-sm">Evitamos danos à sua propriedade</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-soft mb-1">Qualidade</h4>
                    <p className="text-gray-600 text-sm">Garantimos resultados duradouros</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
