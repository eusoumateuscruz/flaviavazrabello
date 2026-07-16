# AGENTS.md

## Escopo

Este repositório contém o site institucional da Flávia Vaz Rabello Advocacia. Preserve layout, textos, imagens, fontes, cores, rotas, SEO, responsividade e integrações existentes. O repositório GitHub é a fonte principal e `https://www.flaviavazrabello.com.br/` é a referência visual.

## Stack e gerenciador

- React 18 + TypeScript + Vite 5
- React Router 6
- Tailwind CSS + Radix UI/shadcn
- Vitest + Testing Library
- ESLint 9
- Bun 1.3.14 (`bun.lock` é o único lockfile)

Não use npm, pnpm ou yarn neste projeto. Não recrie `package-lock.json` ou `bun.lockb`.

## Comandos obrigatórios

```powershell
bun install --frozen-lockfile
bun run dev
bun run typecheck
bun run lint
bun run test
bun run build
```

O servidor de desenvolvimento usa a porta 8080. O build de produção fica em `dist` e deve conter `server/index.js` e `.openai/hosting.json` para o ChatGPT Sites.

## Regras de implementação

- Preserve os assets essenciais em `public` e `src/assets`; não carregue imagens essenciais do domínio oficial.
- Centralize contatos, links sociais, WhatsApp e áreas de atuação em `src/lib/site.ts`.
- Mantenha fallback SPA no Worker para acesso direto e refresh de rotas internas.
- Não reintroduza `lovable-tagger`; ele é específico do editor Lovable e bloqueia o servidor local neste ambiente.
- Não adicione segredos ao código, `.env.example` ou `.openai/hosting.json`.
- O formulário de contato não possui backend. Não simule envio; mantenha o aviso transparente de que os dados não são transmitidos.
- Não altere DNS, domínio oficial ou produção fora do fluxo explícito do ChatGPT Sites.

## Validação visual e funcional

Antes de publicar, valide pelo menos 1440, 1024, 768, 430, 390 e 360 px, sem overflow horizontal. Teste menu desktop/mobile, todas as rotas, refresh direto, imagens, formulário, WhatsApp, telefone, e-mail, redes sociais, cabeçalho, rodapé e console do navegador.

