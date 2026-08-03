# 📌 Contexto do Projeto

Projeto frontend em React (Vite + TypeScript)

---

# 🧱 Padrões

## Estrutura

src/
- components/
- pages/
- services/
- styles/

---

## React

- Usar components, pages, services
- Não colocar lógica no App.tsx
- Componentes devem ser pequenos e reutilizáveis
- Evitar arquivos muito grandes

---

## API

- Todas chamadas devem ficar em services
- Nunca chamar API direto dentro de components
- Usar funções separadas por responsabilidade

---

## CSS

- Não usar !important
- Manter CSS organizado
- Evitar estilos inline
- Preferir classes reutilizáveis
- Separar estilos por componente

---

## Código

- Código simples e legível
- Evitar duplicação
- Nomear variáveis de forma clara
- Funções com responsabilidade única

---

# ⚠️ Regras

- Separação de responsabilidades
- Manter organização de pastas
- Não misturar lógica com UI
- Sempre pensar em reutilização
---

# 🚫 Evitar

- Código duplicado
- Componentes gigantes
- Lógica misturada com UI
