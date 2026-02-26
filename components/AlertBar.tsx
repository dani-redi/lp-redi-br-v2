import React from 'react';

const AlertBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#b539e6] to-[#6200ee] text-white py-2.5 px-4 text-center text-xs md:text-sm font-medium">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
        <span>A Redi te ajuda a crescer em 2026.</span>
        <span className="text-white font-bold">20% OFF no primeiro ano. Planos a partir de R$169/mês.</span>
      </div>
    </div>
  );
};

export default AlertBar;
