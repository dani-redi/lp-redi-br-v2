import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const LanguageSelector: React.FC = () => {
  const { language, changeLanguage, t } = useTranslation();

  const languages = [
    { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
    { code: 'en-US', name: 'English', flag: '🇺🇸' },
    { code: 'es-ES', name: 'Español', flag: '🇪🇸' },
  ];

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-[#b539e6] transition-colors">
        <span>{languages.find(l => l.code === language)?.flag}</span>
        <span className="text-sm font-medium text-slate-700">
          {languages.find(l => l.code === language)?.name}
        </span>
        <span className="material-symbols-rounded text-slate-400 text-sm">
          expand_more
        </span>
      </button>
      
      <div className="absolute top-full right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-slate-50 transition-colors ${
              language === lang.code ? 'bg-[#b539e6]/10 text-[#b539e6]' : 'text-slate-700'
            }`}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
            {language === lang.code && (
              <span className="material-symbols-rounded text-[#b539e6] text-sm ml-auto">
                check
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
