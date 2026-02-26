
import React, { useState, useRef, useEffect } from 'react';
import { ScrollSection } from './ScrollSection';

const Hero: React.FC = () => {
  const baseUrl = '/plataforma-de-vendas-comercio/';
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const pauseCarousel = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = 'paused';
    }
  };

  const resumeCarousel = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = 'running';
    }
  };

  const handleMobileItemClick = (id: string) => {
    setHoveredItem((prev) => {
      const isSame = prev === id;
      const nextValue = isSame ? null : id;
      if (nextValue) {
        pauseCarousel();
      } else {
        resumeCarousel();
      }
      return nextValue;
    });
  };

  useEffect(() => {
    if (!hoveredItem) {
      resumeCarousel();
    }
  }, [hoveredItem]);

  const features = ['Catálogo', 'CRM', 'Pedidos', 'Central del Vendedor', 'Función compartir', 'Copiloto de IA'];

  const tooltips: { [key: string]: string } = {
    'Catálogo': 'Organize seus produtos com fotos, preços e descrições profissionais',
    'CRM': 'Gerencie sua carteira de clientes de forma inteligente e otimizada',
    'Pedidos': 'Controle suas vendas e administre o status dos pedidos',
    'Central do Vendedor': 'Crie e gerencie catálogos exclusivos para cada vendedor',
    'Compartilhamento': 'Promova facilmente no WhatsApp, redes sociais e catálogo digital',
    'Copiloto de IA': 'Receba oportunidades para vender mais com a Redi IA'
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-10 md:pt-10 md:pb-14 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Content */}
        <ScrollSection className="text-center mb-4 md:mb-6 max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-2 md:mb-3">
            A plataforma de vendas para o comércio que <span className="gradient-text">pensa grande.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-4 leading-relaxed max-w-3xl mx-auto font-medium">
            Venda mais no WhatsApp e Redes sociais com uma plataforma que organiza produtos, pedidos e oportunidades em um só lugar - sem complicação.
          </p>
        </ScrollSection>

        {/* Feature List - Moved Up */}
        <ScrollSection stagger={1} className="relative mb-8 md:mb-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          <div className="pt-6 md:pt-8">
            <div className="flex flex-col items-center justify-center gap-6 text-center">
              <span className="text-sm md:text-lg text-slate-500 font-semibold relative z-0">Mais que um catálogo:</span>
              {/* Mobile Carousel */}
              <div className="md:hidden relative w-full overflow-visible z-10">
                <div className="overflow-visible">
                  <div ref={carouselRef} className="flex animate-scroll gap-3" style={{ width: 'max-content' }}>
                    {/* Duplicar itens para loop infinito */}
                    {[...features, ...features].map((item, index) => (
                      <div
                        key={`${item}-${index}`}
                        className="relative flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 font-semibold text-xs whitespace-nowrap flex-shrink-0 cursor-help overflow-visible"
                        onClick={() => handleMobileItemClick(`${item}-${index}`)}
                      >
                        <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-secondary/10 text-secondary text-[10px]">✓</span>
                        {item}

                        {/* Tooltip */}
                        {hoveredItem === `${item}-${index}` && (
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-slate-900 text-white text-xs rounded-lg shadow-lg z-[200] max-w-[320px] w-[20rem] text-left leading-snug whitespace-normal" style={{ pointerEvents: 'none' }}>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900"></div>
                            {tooltips[item]}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Desktop Static */}
              <div className="hidden md:flex flex-wrap justify-center gap-3 md:gap-4">
                {features.map((item, index) => (
                  <div
                    key={item}
                    className="relative flex items-center gap-1 md:gap-1.5 px-2.5 md:px-4 py-1 md:py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 font-semibold text-xs md:text-sm cursor-help"
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="inline-flex items-center justify-center w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-secondary/10 text-secondary text-[10px] md:text-xs">✓</span>
                    {item}

                    {/* Tooltip */}
                    {hoveredItem === item && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg shadow-lg whitespace-nowrap z-50">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900"></div>
                        {tooltips[item]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollSection>

        {/* CTA Button */}
        <ScrollSection stagger={1.5} className="flex justify-center mb-8 md:mb-10">
          <button
            onClick={() => window.open('https://app.rediredi.com/pt-BR/signup?' + window.location.search, '_blank')}
            className="bg-[#b539e6] hover:bg-[#b539e6]/90 text-white px-8 py-3 rounded-full font-semibold text-sm md:text-base transition-all shadow-lg shadow-[#b539e6]/20 hover:scale-105"
          >
            Comece grátis
          </button>
        </ScrollSection>

      </div>
    </section>
  );
};

export default Hero;
