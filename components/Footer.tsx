
import React from 'react';

const Footer: React.FC = () => {
  const baseUrl = '/plataforma-de-vendas-comercio/';

  return (
    <footer className="bg-[#b539e6] text-white py-5 md:py-6 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <img src={`${baseUrl}redi-redi.svg`} alt="RediRedi" className="h-7 w-auto brightness-0 invert" />
        </div>
        <p className="text-sm md:text-base font-medium text-white/90 text-center">
          © 2026 RediRedi. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="YouTube" className="text-white/90 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
              <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18.1 5 12 5 12 5s-6.1 0-7.7.3a2.7 2.7 0 0 0-1.9 1.9A28.4 28.4 0 0 0 2 12a28.4 28.4 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C5.9 19 12 19 12 19s6.1 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28.4 28.4 0 0 0 22 12a28.4 28.4 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="text-white/90 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1a4.2 4.2 0 0 1 3.8-2.1c4.1 0 4.9 2.7 4.9 6.2V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.3-2 2.7V21h-4V9Z" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook" className="text-white/90 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
              <path d="M13.5 9H15V6.5A8.7 8.7 0 0 0 12.7 6C10.4 6 9 7.4 9 9.9V11H6.5v3H9v7h3v-7h2.2l.3-3H12v-1.6c0-.9.2-1.4 1.5-1.4Z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="text-white/90 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
              <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5ZM17.5 7.8a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
