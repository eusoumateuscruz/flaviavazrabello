# Flávia Vaz Rabello Advocacia

Site institucional da Dra. Flávia Vaz Rabello, com apresentação profissional, áreas de atuação, conteúdos jurídicos, perguntas frequentes e canais de contato. O projeto é uma aplicação React de página única (SPA), preparada para desenvolvimento independente e publicação na Vercel.

## Stack

- React 18 com TypeScript
- Vite 5
- React Router
- Tailwind CSS
- shadcn/ui e Radix UI
- Vitest e Testing Library
- ESLint

## Requisitos

- Node.js 20 LTS (intervalo suportado: `>=20 <23`)
- npm, incluído na instalação do Node.js
- Git

Com NVM, execute `nvm use`; o arquivo `.nvmrc` seleciona o Node.js 20.

## Instalação e desenvolvimento

```bash
git clone https://github.com/eusoumateuscruz/flaviavazrabello.git
cd flaviavazrabello
npm ci
npm run dev
```

O servidor de desenvolvimento usa, por padrão, `http://localhost:8080`.

## Comandos disponíveis

```bash
npm run lint       # verifica o código com ESLint
npm run test       # executa os testes uma vez
npm run test:watch # executa os testes em modo interativo
npm run build      # gera o build de produção em dist/
npm run preview    # serve localmente o conteúdo de dist/
```

Para validar uma alteração completa, execute lint, testes e build antes de abrir o pull request.

## Estrutura resumida

```text
public/             arquivos servidos sem transformação, imagens, favicon e SEO estático
src/assets/         imagens importadas pelo código e processadas pelo Vite
src/components/     componentes de layout e componentes reutilizáveis
src/components/ui/  componentes de interface baseados em shadcn/ui
src/data/           conteúdo estruturado dos artigos do blog
src/hooks/          hooks React reutilizáveis
src/lib/            utilitários, links e dados institucionais compartilhados
src/pages/          páginas associadas às rotas
src/test/           configuração e testes automatizados
```

## Rotas

As rotas são declaradas em `src/App.tsx` e renderizadas com React Router:

- `/`: página inicial
- `/sobre`: apresentação profissional
- `/areas` e `/areas-de-atuacao`: áreas de atuação
- `/servicos/:id` e `/areas-de-atuacao/:slug`: detalhes dos serviços
- `/blog` e `/blog/:slug`: listagem e artigos
- `/perguntas-frequentes`: perguntas frequentes
- `/contato`: formulário e canais de contato
- qualquer outra URL: página de não encontrado

O `vercel.json` reescreve as requisições para `index.html`, garantindo o carregamento direto das rotas da SPA.

## Imagens e conteúdo

- Coloque arquivos que precisam manter nome e URL em `public/` e referencie-os a partir da raiz, por exemplo `/images/hero-desktop.jpeg`.
- Coloque imagens processadas pelo Vite em `src/assets/` e importe-as no componente.
- Os artigos estão centralizados em `src/data/blogPosts.tsx`.
- Dados institucionais e links compartilhados estão em `src/lib/site.ts`.

Preserve textos, identidade visual, SEO e dados profissionais. Conteúdo jurídico e informações como OAB, telefone, WhatsApp, e-mail e endereço só devem ser alterados mediante solicitação explícita.

## Variáveis de ambiente e integrações

Atualmente o projeto não exige variáveis de ambiente. Não há referências a `import.meta.env` ou `process.env`, por isso nenhum arquivo `.env` é necessário para desenvolvimento ou build.

As integrações públicas atuais — WhatsApp, e-mail, redes sociais, Google Maps e Google Analytics — estão configuradas diretamente no código. O formulário da página de contato simula o envio no navegador e ainda não está conectado a uma API ou serviço de e-mail.

Arquivos `.env` e suas variantes são ignorados pelo Git. Se uma integração futura exigir configuração, documente as variáveis em `.env.example` com valores fictícios e nunca versione segredos.

## Deploy na Vercel

Use as seguintes configurações:

- Framework Preset: `Vite`
- Install Command: `npm ci`
- Build Command: `npm run build`
- Output Directory: `dist`
- Node.js: `20.x`

O fallback necessário para o React Router já está em `vercel.json`. Variáveis de ambiente futuras devem ser cadastradas no painel da Vercel, sem valores reais no repositório.

## Fluxo de contribuição

1. Atualize a branch principal local.
2. Crie uma branch própria, preferencialmente com prefixo `agent/`, `feature/`, `fix/` ou `docs/`.
3. Faça alterações pequenas e commits objetivos.
4. Execute `npm run lint`, `npm run test` e `npm run build`.
5. Envie a branch e abra um pull request para `main`, descrevendo mudanças, validações e riscos.

O projeto não depende mais de serviços exclusivos da plataforma que o gerou originalmente: desenvolvimento, testes, manutenção, build e deploy funcionam com GitHub, Node.js, npm, Vite e Vercel.
