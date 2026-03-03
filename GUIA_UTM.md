# Guia de Implementação: Parâmetros UTM Padrão

Este documento detalha a implementação da lógica de injeção automática de parâmetros UTM na Landing Page e fornece o passo a passo de como replicar esse comportamento em outras páginas, componentes ou novos botões no futuro.

## 1. Contexto e O Problema

Originalmente, os diversos botões de "Comece grátis" na página redirecionavam o usuário utilizando a chamada direta estática abaixo:

```tsx
window.open('https://app.rediredi.com/pt-BR/signup?' + window.location.search, '_blank')
```

**Problemas com a abordagem antiga:**
1. A concatenação básica `?` + `location.search` gerava falhas de formatação como `??` se a base URL já possuísse parâmetros acoplados indevidamente.
2. Quando um usuário organicamente acessava o site direto pela home page (sem parâmetros nas URLs), a aplicação Redi recebia um lead em branco em questões de tracking de anúncios, resultando em perda de origem de dado.
3. Repetição de código na aplicação inteira (violando o conceito DRY - Don't Repeat Yourself).

## 2. A Solução Implementada

Para resolver esses pontos, criamos e arquitetamos uma função utilitária global e testável chamada `handleSignupClick`. Essa função interage nativamente com as bibliotecas nativas web API `URL` e `URLSearchParams`, avaliando a URL atual de maneira robusta. 

**O que essa função faz na prática?**
1. Checa a URL do navegador.
2. Procura ativamente por chaves (keys) iniciados com a tag `utm_` (ex: `utm_source`, `utm_campaign`, `utm_medium`, etc).
3. Caso **NÃO POSSUA NENHUM** parâmetro referente a tracking UTM, a função injeta explicitamente o comportamento padrão: `utm_source=organic_lp`.
4. Caso já exista alguma campanha UTM rodando, a aplicação irá preservar os valores e enviá-los ao App.

O processamento lógico mora de forma contida na raiz do sistema:
**Arquivo utilitário: `utils/url.ts`**
```typescript
export const handleSignupClick = () => {
  const url = new URL('https://app.rediredi.com/pt-BR/signup');
  const params = new URLSearchParams(window.location.search);
  
  let hasUtm = false;
  params.forEach((_, key) => {
    if (key.startsWith('utm_')) {
      hasUtm = true;
    }
  });

  if (!hasUtm) {
    params.set('utm_source', 'organic_lp');
  }

  url.search = params.toString();
  window.open(url.toString(), '_blank');
};
```

---

## 3. Passo a Passo: Replicando em outras estruturas

Se você, desenvolvedor, possuir a missão de criar uma NOVA seção ou página contendo um CTA (Call to Action) para o "Sign Up" (Cadastro), basta acoplar a função citada, sem a necessidade de reescrever lógica pura de URLs.

### Passo 1: Importe a função analítica `handleSignupClick`
No topo do seu arquivo do componente (ex: `NovoComponente.tsx`):

```tsx
import { handleSignupClick } from '../utils/url';
```
*(Nota: Certifique-se apenas se o caminho das pastas (ex: `../` ou `../../`) está correto).*

### Passo 2: Acople-o no evento de Interação do Componente HTML
No elemento de ação como seu `<button>` contendo a funcionalidade de "Comece grátis", apenas vincule à sua prop `onClick`.

**Em vez de utilizar isso (Padrão Antigo):**
```tsx
<button 
   onClick={() => window.open('https://app.rediredi.com/pt-BR/signup?' + window.location.search, '_blank')}
>
  Comece grátis
</button>
```

**Faça isso (Padrão Novo e Recomendado):**
```tsx
<button onClick={handleSignupClick}>
  Comece grátis
</button>
```

### O que acontece no final?
Todos os botões que acionarem com clique a função `handleSignupClick` irão herdar as boas práticas de atribuição orgânica "organic_lp", preservando a saúde analítica das suas plataformas do Google Analytics/Plataforma Ads.
