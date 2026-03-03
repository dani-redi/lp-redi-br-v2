
import React from 'react';
import { ScrollSection } from './ScrollSection';
import { handleSignupClick } from '../utils/url';

const PainPoints: React.FC = () => {
  const baseUrl = '/plataforma-de-vendas-comercio/';

  const points = [
    {
      title: "Sem visibilidade nas vendas?",
      description: "A Redi ativa lembretes automáticos de recompra com base no comportamento dos seus clientes e recupera vendas esquecidas."
    },
    {
      title: "Vendedor saiu e levou a carteira?",
      description: "A Redi centraliza tudo: clientes, histórico e pedidos e protege sua base, independente do vendedor."
    },
    {
      title: "Pedidos desorganizados?",
      description: "Organize tudo em um só lugar. A Redi conecta cliente, produto e pedido em segundos e ativa sua inteligência de vendas."
    },
    {
      title: "Sem histórico de compras?",
      description: "A Redi registra tudo automaticamente e transforma dados em novas oportunidades de venda."
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header with Image */}
        <ScrollSection className="bg-slate-50 rounded-2xl md:rounded-[2.5rem] overflow-hidden grid md:grid-cols-2 mb-10 md:mb-12 border border-slate-100">
          <div className="p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Cansou de perder vendas por alguns desses motivos?
            </h2>
          </div>
          <div className="relative min-h-[300px]">
            <img
              src={`${baseUrl}lp-woman.png`}
              alt="Mujer usando celular"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </ScrollSection>

        {/* Grid of Points */}
        <ScrollSection stagger={1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2rem] border border-slate-100 card-shadow flex flex-col h-full hover:border-secondary/20 transition-colors group"
            >
              <div className="w-3 h-3 bg-secondary rounded-full mb-6"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#b539e6] transition-colors">
                {point.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {point.description}
              </p>
            </div>
          ))}
        </ScrollSection>

        <ScrollSection stagger={2} className="flex justify-center">
          <button
            onClick={handleSignupClick}
            className="bg-[#b539e6] hover:bg-[#b539e6]/90 text-white px-6 py-2.5 rounded-full font-semibold text-sm md:text-base transition-all shadow-lg shadow-[#b539e6]/20 hover:scale-105"
          >
            Comece grátis
          </button>
        </ScrollSection>
      </div>
    </section>
  );
};

export default PainPoints;
