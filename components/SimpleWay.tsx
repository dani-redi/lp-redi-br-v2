
import React, { useEffect, useMemo, useState, useRef } from 'react';
import { ScrollSection } from './ScrollSection';

const SimpleWay: React.FC = () => {
  const baseUrl = '/plataforma-de-vendas-comercio/';
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const features = useMemo(
    () => [
      { label: 'Dashboard', icon: 'space_dashboard', image: `${baseUrl}Dash.jpg` },
      { label: 'Pedidos', icon: 'shopping_bag', image: `${baseUrl}Pedidos.jpg` },
      { label: 'Produtos', icon: 'inventory_2', image: `${baseUrl}Produtos.jpg` },
      { label: 'Clientes', icon: 'group', image: `${baseUrl}Clientes.jpg` },
      { label: 'Vendedores', icon: 'support_agent', image: `${baseUrl}Vendedores.jpg` },
      { label: 'Impulsionar', icon: 'rocket_launch', image: `${baseUrl}Impulsionar.jpg` },
      { label: 'Catálogo', icon: 'view_module', image: `${baseUrl}Catalogo.jpg` },
      { label: 'Redi IA', icon: 'auto_awesome', image: `${baseUrl}Redi.jpg` }
    ],
    [baseUrl]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 120; // Width of one icon + gap
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      checkScrollButtons();
      carousel.addEventListener('scroll', checkScrollButtons);
      return () => carousel.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [features.length]);

  useEffect(() => {
    if (displayIndex === selectedIndex) {
      return;
    }

    setIsFading(true);
    const fadeOutTimer = window.setTimeout(() => {
      setDisplayIndex(selectedIndex);
      setIsFading(false);
    }, 200);

    return () => window.clearTimeout(fadeOutTimer);
  }, [displayIndex, selectedIndex]);

  return (
    <section className="py-6 md:py-8 px-4 md:px-6 bg-[#fafafa] relative">
      <div className="max-w-5xl mx-auto">
        <ScrollSection className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Explore tudo o que a Redi entrega
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Acesse cada área do produto com um clique e acompanhe o desempenho em tempo real.
          </p>
        </ScrollSection>

        {/* Mobile Carousel */}
        <ScrollSection stagger={1} className="md:hidden mb-6">
          <div className="relative w-full">
            <div className="flex items-center justify-center">
              {/* Left Arrow */}
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`absolute left-0 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md transition-all ${canScrollLeft
                  ? 'opacity-100 hover:scale-110'
                  : 'opacity-50 cursor-not-allowed'
                  }`}
              >
                <span className="material-symbols-rounded text-[#b539e6] text-xl">chevron_left</span>
              </button>

              {/* Carousel Container */}
              <div
                ref={carouselRef}
                className="flex overflow-x-auto scrollbar-hide gap-3 px-12 py-2 scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {features.map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={`font-semibold text-xs px-3 py-2 rounded-xl border shadow-sm transition-all flex flex-col items-center gap-1 w-24 flex-shrink-0 ${index === selectedIndex
                      ? 'bg-secondary/10 border-secondary/40 text-slate-900'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                  >
                    <span
                      className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-all ${index === selectedIndex
                        ? 'bg-secondary text-white border-secondary'
                        : 'bg-white border-slate-200 text-secondary'
                        }`}
                    >
                      <span className="material-symbols-rounded text-[18px]">{item.icon}</span>
                    </span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`absolute right-0 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md transition-all ${canScrollRight
                  ? 'opacity-100 hover:scale-110'
                  : 'opacity-50 cursor-not-allowed'
                  }`}
              >
                <span className="material-symbols-rounded text-[#b539e6] text-xl">chevron_right</span>
              </button>
            </div>
          </div>
        </ScrollSection>

        {/* Desktop Static */}
        <ScrollSection stagger={1} className="hidden md:flex flex-wrap justify-center gap-2 md:gap-3 mb-6">
          {features.map((item, index) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`font-semibold text-xs md:text-sm px-3 md:px-4 py-2 rounded-xl border shadow-sm transition-all flex flex-col items-center gap-1 w-24 md:w-28 ${index === selectedIndex
                ? 'bg-secondary/10 border-secondary/40 text-slate-900'
                : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                }`}
            >
              <span
                className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-all ${index === selectedIndex
                  ? 'bg-secondary text-white border-secondary'
                  : 'bg-white border-slate-200 text-secondary'
                  }`}
              >
                <span className="material-symbols-rounded text-[18px]">{item.icon}</span>
              </span>
              <span>{item.label}</span>
            </button>
          ))}
        </ScrollSection>

        <ScrollSection stagger={2} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 md:p-4 shadow-xl">
          <img
            src={features[displayIndex].image}
            alt="Dashboard Redi"
            className={`w-full rounded-xl border border-slate-100 bg-white object-cover transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'
              }`}
          />
        </ScrollSection>

        <ScrollSection stagger={3} className="mt-6 flex justify-center">
          <button
            onClick={() => window.open('https://app.rediredi.com/pt-BR/signup?' + window.location.search, '_blank')}
            className="bg-[#b539e6] hover:bg-[#b539e6]/90 text-white px-6 py-2.5 rounded-full font-semibold text-sm md:text-base transition-all shadow-lg shadow-[#b539e6]/20 hover:scale-105"
          >
            Comece grátis
          </button>
        </ScrollSection>
      </div>
    </section>
  );
};

export default SimpleWay;
