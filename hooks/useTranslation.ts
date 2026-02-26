import React from 'react';

// Sistema de tradução baseado em localização
export interface Translation {
  [key: string]: string | Translation;
}

export const translations: Record<string, Translation> = {
  'pt-BR': {
    // Alerta topo
    'alert.title': '🎯 A Redi te ajuda a crescer em 2026.',
    'alert.discount': '20% OFF em todos os planos',
    'alert.deadline': 'Só até 31 de Janeiro',
    
    // Header
    'header.button': 'Começar Agora',
    
    // Hero
    'hero.title': 'A plataforma de vendas para o comércio que',
    'hero.highlight': 'pensa grande.',
    'hero.subtitle': 'Venda mais no WhatsApp e Redes sociais com uma plataforma que organiza produtos, pedidos e oportunidades em um só lugar - sem complicação.',
    'hero.feature.title': 'Venda em qualquer lugar',
    'hero.feature.description': 'A Redi transforma seu WhatsApp em uma máquina de vendas com CRM integrado e automações que realmente funcionam. Seus vendedores ganham agilidade e você ganha controle total sobre cada conversa.',
    'hero.badge': 'Sem taxas escondidas',
    'hero.cta': 'Comece grátis',
    
    // Stats
    'stats.title': 'Resultados reais para quem usa a Redi no dia a dia',
    'stats.subtitle': 'Métricas que mostram o impacto real da nossa plataforma no seu negócio',
    'stats.badge': 'Resultados Comprovados',
    'stats.button': 'Ver Resultados Detalhados',
    'stats.revenue.label': 'aumento na receita por visita',
    'stats.revenue.description': 'Mais eficiência em cada conversão',
    'stats.roi.label': 'retorno sobre gasto com anúncios',
    'stats.roi.description': 'Dobrando o ROI das campanhas',
    'stats.cost.label': 'redução no custo por visita',
    'stats.cost.description': 'Economia significativa em aquisição',
    'stats.ticket.label': 'aumento no ticket médio',
    'stats.ticket.description': 'Maiores valores por venda',
    
    // PainPoints
    'painpoints.title': 'Problemas que a Redi resolve',
    'painpoints.subtitle': 'Transforme desafios em oportunidades com nossa plataforma inteligente',
    'painpoints.button': 'Experimente Grátis',
    'painpoints.point1.title': 'Vendas perdidas',
    'painpoints.point1.description': 'Deixe de perder oportunidades por falta de organização no atendimento.',
    'painpoints.point2.title': 'Controle zero',
    'painpoints.point2.description': 'Tenha visibilidade total do seu funil de vendas e performance da equipe.',
    'painpoints.point3.title': 'Processos manuais',
    'painpoints.point3.description': 'Automatize tarefas repetitivas e foque no que realmente importa: vender.',
    'painpoints.point4.title': 'Comunicação desorganizada',
    'painpoints.point4.description': 'Centralize todas as conversas e nunca mais perca um cliente.',
    
    // SimpleWay
    'simpleway.title': 'Explore tudo o que a Redi entrega',
    'simpleway.subtitle': 'Acesse cada área do produto com um clique e acompanhe o desempenho em tempo real.',
    'simpleway.button': 'Comece grátis',
    'simpleway.feature1': 'Dashboard',
    'simpleway.feature2': 'CRM',
    'simpleway.feature3': 'Automação',
    'simpleway.feature4': 'Relatórios',
    
    // Footer
    'footer.copyright': '© 2026 RediRedi. Todos os direitos reservados.',
  },
  
  'en-US': {
    // Alert
    'alert.title': '🎯 Redi helps you grow in 2026.',
    'alert.discount': '20% OFF on all plans',
    'alert.deadline': 'Only until January 31st',
    
    // Header
    'header.button': 'Get Started Now',
    
    // Hero
    'hero.title': 'The sales platform for commerce that',
    'hero.highlight': 'thinks big.',
    'hero.subtitle': 'Sell more on WhatsApp and Social Networks with a platform that organizes products, orders and opportunities in one place - no complications.',
    'hero.feature.title': 'Sell anywhere',
    'hero.feature.description': 'Redi transforms your WhatsApp into a sales machine with integrated CRM and automations that really work. Your salespeople gain agility and you gain full control over every conversation.',
    'hero.badge': 'No hidden fees',
    'hero.cta': 'Comece grátis',
    
    // Stats
    'stats.title': 'Real results for those who use Redi daily',
    'stats.subtitle': 'Metrics that show the real impact of our platform on your business',
    'stats.badge': 'Proven Results',
    'stats.button': 'View Detailed Results',
    'stats.revenue.label': 'increase in revenue per visit',
    'stats.revenue.description': 'More efficiency in every conversion',
    'stats.roi.label': 'return on ad spend',
    'stats.roi.description': 'Doubling campaign ROI',
    'stats.cost.label': 'reduction in cost per visit',
    'stats.cost.description': 'Significant acquisition savings',
    'stats.ticket.label': 'increase in average ticket',
    'stats.ticket.description': 'Higher values per sale',
    
    // PainPoints
    'painpoints.title': 'Problems that Redi solves',
    'painpoints.subtitle': 'Transform challenges into opportunities with our smart platform',
    'painpoints.button': 'Try for Free',
    'painpoints.point1.title': 'Lost sales',
    'painpoints.point1.description': 'Stop losing opportunities due to lack of organization in customer service.',
    'painpoints.point2.title': 'Zero control',
    'painpoints.point2.description': 'Get full visibility of your sales funnel and team performance.',
    'painpoints.point3.title': 'Manual processes',
    'painpoints.point3.description': 'Automate repetitive tasks and focus on what really matters: selling.',
    'painpoints.point4.title': 'Disorganized communication',
    'painpoints.point4.description': 'Centralize all conversations and never lose a customer again.',
    
    // SimpleWay
    'simpleway.title': 'Explore everything Redi delivers',
    'simpleway.subtitle': 'Access every area of the product with one click and track performance in real time.',
    'simpleway.button': 'Comece grátis',
    'simpleway.feature1': 'Dashboard',
    'simpleway.feature2': 'CRM',
    'simpleway.feature3': 'Automation',
    'simpleway.feature4': 'Reports',
    
    // Footer
    'footer.copyright': '© 2026 RediRedi. All rights reserved.',
  },
  
  'es-ES': {
    // Alert
    'alert.title': '🎯 Redi te ayuda a crecer en 2026.',
    'alert.discount': '20% DESCUENTO en todos los planes',
    'alert.deadline': 'Solo hasta el 31 de Enero',
    
    // Header
    'header.button': 'Comenzar Ahora',
    
    // Hero
    'hero.title': 'La plataforma de ventas para el comercio que',
    'hero.highlight': 'piensa en grande.',
    'hero.subtitle': 'Vende más en WhatsApp y Redes Sociales con una plataforma que organiza productos, pedidos y oportunidades en un solo lugar - sin complicaciones.',
    'hero.feature.title': 'Vende en cualquier lugar',
    'hero.feature.description': 'Redi transforma tu WhatsApp en una máquina de ventas con CRM integrado y automatizaciones que realmente funcionan. Tus vendedores ganan agilidad y tú ganas control total sobre cada conversación.',
    'hero.badge': 'Sin tarifas ocultas',
    'hero.cta': 'Comece grátis',
    
    // Stats
    'stats.title': 'Resultados reales para quienes usan Redi a diario',
    'stats.subtitle': 'Métricas que muestran el impacto real de nuestra plataforma en tu negocio',
    'stats.badge': 'Resultados Comprobados',
    'stats.button': 'Ver Resultados Detallados',
    'stats.revenue.label': 'aumento en ingresos por visita',
    'stats.revenue.description': 'Más eficiencia en cada conversión',
    'stats.roi.label': 'retorno sobre gasto en anuncios',
    'stats.roi.description': 'Duplicando el ROI de campañas',
    'stats.cost.label': 'reducción en costo por visita',
    'stats.cost.description': 'Ahorros significativos en adquisición',
    'stats.ticket.label': 'aumento en ticket promedio',
    'stats.ticket.description': 'Valores más altos por venta',
    
    // PainPoints
    'painpoints.title': 'Problemas que Redi resuelve',
    'painpoints.subtitle': 'Transforma desafíos en oportunidades con nuestra plataforma inteligente',
    'painpoints.button': 'Probar Gratis',
    'painpoints.point1.title': 'Ventas perdidas',
    'painpoints.point1.description': 'Deja de perder oportunidades por falta de organización en la atención.',
    'painpoints.point2.title': 'Control cero',
    'painpoints.point2.description': 'Obtén visibilidad total de tu embudo de ventas y rendimiento del equipo.',
    'painpoints.point3.title': 'Procesos manuales',
    'painpoints.point3.description': 'Automatiza tareas repetitivas y enfócate en lo que realmente importa: vender.',
    'painpoints.point4.title': 'Comunicación desorganizada',
    'painpoints.point4.description': 'Centraliza todas las conversaciones y nunca más pierdas un cliente.',
    
    // SimpleWay
    'simpleway.title': 'Explora todo lo que Redi entrega',
    'simpleway.subtitle': 'Accede a cada área del producto con un clic y sigue el rendimiento en tiempo real.',
    'simpleway.button': 'Comece grátis',
    'simpleway.feature1': 'Panel',
    'simpleway.feature2': 'CRM',
    'simpleway.feature3': 'Automatización',
    'simpleway.feature4': 'Informes',
    
    // Footer
    'footer.copyright': '© 2026 RediRedi. Todos los derechos reservados.',
  }
};

// Função para detectar o idioma baseado na localização
export const detectLanguageFromLocation = async (): Promise<string> => {
  try {
    // Tenta obter localização do usuário
    const position = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        timeout: 5000,
        enableHighAccuracy: false
      });
    });

    // Aqui você usaria uma API de geolocalização reversa
    // Para simplificar, vamos usar o idioma do navegador como fallback
    const browserLang = navigator.language || 'pt-BR';
    
    // Mapeamento de países para idiomas
    const countryLanguageMap: Record<string, string> = {
      'BR': 'pt-BR',
      'PT': 'pt-BR',
      'AO': 'pt-BR',
      'MZ': 'pt-BR',
      'US': 'en-US',
      'GB': 'en-US',
      'CA': 'en-US',
      'AU': 'en-US',
      'ES': 'es-ES',
      'MX': 'es-ES',
      'AR': 'es-ES',
      'CO': 'es-ES',
      'PE': 'es-ES',
      'VE': 'es-ES',
      'CL': 'es-ES',
      'EC': 'es-ES',
      'UY': 'es-ES',
      'PY': 'es-ES',
      'BO': 'es-ES',
    };

    // Simulação de detecção de país (na prática, usaria API)
    // Por ora, vamos usar o idioma do navegador
    if (browserLang.startsWith('pt')) return 'pt-BR';
    if (browserLang.startsWith('en')) return 'en-US';
    if (browserLang.startsWith('es')) return 'es-ES';
    
    return 'pt-BR'; // Default
  } catch (error) {
    // Fallback para idioma do navegador
    const browserLang = navigator.language || 'pt-BR';
    if (browserLang.startsWith('pt')) return 'pt-BR';
    if (browserLang.startsWith('en')) return 'en-US';
    if (browserLang.startsWith('es')) return 'es-ES';
    
    return 'pt-BR'; // Default
  }
};

// Hook para tradução
export const useTranslation = () => {
  const [language, setLanguage] = React.useState<string>('pt-BR');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const initLanguage = async () => {
      try {
        const detectedLang = await detectLanguageFromLocation();
        setLanguage(detectedLang);
      } catch (error) {
        console.warn('Failed to detect language, using default');
      } finally {
        setIsLoading(false);
      }
    };

    initLanguage();
  }, []);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const changeLanguage = (lang: string) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem('redi-language', lang);
    }
  };

  return { t, language, changeLanguage, isLoading };
};
