
import React, { useState } from 'react';
import { ScrollSection } from './ScrollSection';

const Stats: React.FC = () => {
  const baseUrl = '/plataforma-de-vendas-comercio/';
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const stats = [
    {
      label: 'Leads Gerados por Mês',
      value: '+50 Mil',
      description: '',
      icon: 'shopping_cart',
      color: 'from-[#b539e6] to-[#6200ee]',
      tooltip: 'Total de pedidos pelos botões "comprar" e "pedir pelo whatsapp" gerados pelo catálogo'
    },
    {
      label: 'ROI Médio Mensal',
      value: '30x',
      description: '(Sobre mensalidade)',
      icon: 'savings',
      color: 'from-[#b539e6] to-[#6200ee]',
      tooltip: 'GMV médio mensal / mensalidade do plano Essential'
    },
    {
      label: 'Novas Oportunidades Diárias',
      value: '5 a 10',
      description: '(Geradas pela Redi IA)',
      icon: 'ads_click',
      color: 'from-[#b539e6] to-[#6200ee]',
      tooltip: 'Novas oportunidades de vendas de produtos geradas por Redi IA'
    },
    {
      label: 'Aumento nas Vendas',
      value: 'até 30%',
      description: '(Canais da Redi)',
      icon: 'trending_up',
      color: 'from-[#b539e6] to-[#6200ee]',
      tooltip: 'Aumento nas vendas nos canais gerenciados pela RediRedi - WhatsApp, Catálogo e Redes Sociais'
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#f5f0ff] via-[#f8f5ff] to-[#faf8ff] py-14 md:py-6 px-4 md:px-6 relative overflow-visible">
      <div className="max-w-7xl mx-auto relative">
        <ScrollSection className="text-center mb-6 md:mb-8">

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto text-semibold">
            Resultados reales para quienes usan Redi en su día a día
          </p>
        </ScrollSection>

        <ScrollSection stagger={1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 overflow-visible">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-[#b539e6]/20 hover:border-[#b539e6]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#b539e6]/10 hover:-translate-y-1 flex flex-col items-center text-center overflow-visible"
            >
              {/* Ícone de ajuda / Tooltip */}
              <div
                className="absolute top-3 right-3 cursor-help z-[100]"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setHoveredCard(hoveredCard === idx ? null : idx)}
              >
                <span className="material-symbols-rounded text-zinc-300 text-lg hover:text-zinc-400 transition-colors">help</span>

                {hoveredCard === idx && (
                  <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-slate-900 text-white text-sm rounded-lg shadow-lg z-[9999] w-56 md:w-72 text-right leading-snug whitespace-normal" style={{ pointerEvents: 'none' }}>
                    <div className="absolute bottom-0 right-4 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900"></div>
                    <span>{stat.tooltip}</span>
                  </div>
                )}
              </div>
              {/* Icon and Value container */}
              <div className="flex items-center gap-4 mb-2">
                {/* Icon container */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <span className="material-symbols-rounded text-white text-xl">{stat.icon}</span>
                </div>

                {/* Value */}
                <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
              </div>

              {/* Label */}
              <h3 className="text-slate-900 font-bold text-lg mb-1 leading-tight">
                {stat.label}
              </h3>

              {/* Hover effect decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#b539e6]/5 to-[#6200ee]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </ScrollSection>

        {/* Image + Text Aside */}
        <ScrollSection stagger={2} className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-1 md:gap-2 mb-8 md:mb-6 bg-white p-6 sm:p-4 md:p-2 rounded-xl md:rounded-2xl border border-[#b539e6]/20 hover:border-[#b539e6]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#b539e6]/10 hover:-translate-y-1">
          <div className="w-full md:w-72 md:text-left text-center md:pl-8 md:py-4">
            <img
              src={`${baseUrl}redi-ia.gif`}
              alt="Redi IA em ação"
              className="rounded-xl md:rounded-2xl w-1/3 md:w-2/3 object-cover mx-auto md:mx-0"
            />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-sm md:text-xl font-bold text-slate-900 mb-1.5 md:mb-2">
              A Redi IA trabalha para você vender mais.
            </h3>
            <p className="text-xs md:text-base text-slate-600 leading-relaxed font-medium">
              Ela analisa produtos, clientes e comportamento de compra para decidir o que vender, para quem e quando, gerando novas oportunidades automaticamente.
            </p>
          </div>
        </ScrollSection>

        {/* Meta Business Partners Badge */}
        <ScrollSection stagger={3} className="flex justify-center">
          <img
            src={`${baseUrl}meta-partner.svg`}
            alt="RediRedi - Meta Business Partners"
            className="h-12 md:h-12 w-auto"
          />
        </ScrollSection>

      </div>
    </section>
  );
};

export default Stats;
