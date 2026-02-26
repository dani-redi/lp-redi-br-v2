
import React from 'react';

const Header: React.FC = () => {
  const baseUrl = '/plataforma-de-vendas-comercio/';

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 py-3 md:py-4 px-4 md:px-6 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={`${baseUrl}redi-redi.svg`}
            alt="RediRedi"
            className="h-8 w-auto"
          />
        </div>

        <button
          onClick={() => window.open('https://app.rediredi.com/pt-BR/signup?' + window.location.search, '_blank')}
          className="bg-[#b539e6] hover:bg-[#b539e6]/90 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-[#b539e6]/20 text-sm md:text-base"
        >
          Comece grátis
        </button>
      </div>
    </header>
  );
};

export default Header;
