
import React from 'react';
import { BASE_PATH } from '../utils/constants';
import SignupLink from './SignupLink';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 py-3 md:py-4 px-4 md:px-6 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={`${BASE_PATH}redi-redi.svg`}
            alt="RediRedi"
            className="h-8 w-auto"
          />
        </div>

        <SignupLink
          className="bg-[#b539e6] hover:bg-[#b539e6]/90 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-[#b539e6]/20 text-sm md:text-base"
        >
          Comece grátis
        </SignupLink>
      </div>
    </header>
  );
};

export default Header;
