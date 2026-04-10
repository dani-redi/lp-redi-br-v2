# Limpezas Realizadas

Data: 10 de abril de 2026

Este arquivo registra as limpezas efetivamente aplicadas no estado atual da landing page RediRedi.

## 1. Código morto removido

Arquivos excluídos por não terem qualquer importação ativa no app:

- `components/LanguageSelector.tsx`
- `hooks/useScrollEffect.ts`
- `hooks/useTranslation.ts`

Também foram removidos diretórios que ficaram vazios após a limpeza:

- `hooks/`
- `lib/`
- `components/ui/`

## 2. Código simplificado

### `App.tsx`

- A barra promocional do topo deixou de ficar inline no app e passou a reutilizar `components/AlertBar.tsx`.

### `components/Hero.tsx`

- Removidos estados não utilizados do carrossel.

### `components/Stats.tsx`

- Removidas propriedades `description` que não eram renderizadas.
- Ajustado `text-semibold` para `font-semibold`.
- Substituída a chave do loop por `stat.label` em vez de índice.

### `components/ScrollSection.tsx`

- O atraso de animação passou a ser aplicado por `style.transitionDelay`, o que corrige o uso de valores como `1.5` em `stagger` e elimina dependência de classes CSS fixas.

## 3. Configuração consolidada

### `utils/constants.ts`

- Criado `BASE_PATH` para centralizar a base `/plataforma-de-vendas-comercio/`.

### Arquivos atualizados para usar `BASE_PATH`

- `vite.config.ts`
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/Hero.tsx`
- `components/Stats.tsx`
- `components/SimpleWay.tsx`
- `components/PainPoints.tsx`

### `vite.config.ts`

- Removido `loadEnv` sem uso.
- Removido o bloco `define` que expunha `process.env.API_KEY` e `process.env.GEMINI_API_KEY` sem consumo no frontend.

### `index.html`

- Ajustado `lang` para `pt-BR`.
- Ajustado o título para o idioma atual da página.
- Removidas classes CSS fixas de `stagger` que ficaram obsoletas após a simplificação de `ScrollSection`.

## 4. Assets e resíduos locais removidos

Arquivos removidos por ausência de uso:

- `public/hero-image.png`
- `public/redi-iaold.gif`

Também foram removidos resíduos locais do macOS quando presentes:

- `.DS_Store`
- `public/.DS_Store`

## 5. Dependências e tipagem

Dependências removidas por não uso no código:

- `clsx`
- `framer-motion`
- `tailwind-merge`

Dependências adicionadas para estabilizar a experiência no editor e a tipagem React:

- `@types/react`
- `@types/react-dom`

## 6. Segurança e validação

Comandos executados:

- `npm uninstall clsx framer-motion tailwind-merge`
- `npm install -D @types/react @types/react-dom`
- `npm audit fix`
- `npm run build`

Resultado final:

- build concluída com sucesso
- sem erros reportados no workspace
- `0 vulnerabilities` no `npm audit`
