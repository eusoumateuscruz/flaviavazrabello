# Flávia Vaz Rabello Advocacia

Site institucional da Flávia Vaz Rabello Advocacia, com informações sobre áreas de atuação, artigos, perguntas frequentes e canais de contato. O projeto preserva a interface original criada no Lovable e está preparado para execução local e empacotamento no ChatGPT Sites.

## Tecnologias

- React 18 e TypeScript
- Vite 5
- React Router 6
- Tailwind CSS e componentes Radix UI/shadcn
- Vitest e Testing Library
- ESLint 9
- Bun como gerenciador de pacotes

## Requisitos

- Node.js 22 ou superior
- Bun 1.3.14 ou versão compatível

## Instalação e execução local

```powershell
bun install --frozen-lockfile
bun run dev
```

O servidor de desenvolvimento usa, por padrão, `http://localhost:8080`.

## Validação e build

```powershell
bun run typecheck
bun run lint
bun run test
bun run build
```

O build de produção é gerado em `dist`. Além dos assets estáticos do Vite, o build inclui `dist/server/index.js`, que serve os arquivos pela binding `ASSETS` e aplica fallback para `index.html` nas rotas da SPA.

## Estrutura principal

- `src/pages`: páginas e rotas da aplicação
- `src/components`: componentes compartilhados e de interface
- `src/data`: conteúdo dos artigos do blog
- `src/lib/site.ts`: dados institucionais e links externos centralizados
- `public`: imagens, favicon, `robots.txt` e `sitemap.xml`
- `worker`: entrada do runtime compatível com Cloudflare Workers/ChatGPT Sites
- `build`: integração que prepara os artefatos exigidos pelo ChatGPT Sites
- `.openai/hosting.json`: metadados de hospedagem, sem segredos

## Variáveis de ambiente

O código atual não utiliza variáveis de ambiente. O arquivo `.env.example` registra essa condição e pode ser ampliado se uma integração de backend for adicionada. Arquivos `.env` reais permanecem ignorados pelo Git.

## Integrações externas

- WhatsApp: links públicos montados no frontend
- Google Maps: mapa incorporado na página de contato
- Google Analytics: tag pública carregada em `index.html`
- Instagram, Facebook e TikTok: links externos no frontend

Não foram encontradas integrações com Supabase, autenticação, banco de dados, Edge Functions, webhooks ou funções serverless no código atual. Também não há callbacks ou redirects externos a cadastrar.

## ChatGPT Sites

- Instalação: `bun install --frozen-lockfile`
- Build: `bun run build`
- Saída: `dist`
- Runtime: módulo ESM compatível com Cloudflare Workers
- Roteamento: fallback SPA para atualização direta de rotas internas

O projeto pode ser vinculado ao ChatGPT Sites após o build validado. O identificador do projeto será gravado em `.openai/hosting.json`; valores de runtime devem ser cadastrados nas configurações protegidas do Sites, nunca nesse arquivo.

## Observações e pendências conhecidas

- O formulário de contato atual não possui endpoint: ele simula sucesso localmente e não transmite os dados. Para envio real, será necessário escolher e configurar um serviço de backend/e-mail.
- O rodapé contém um link para `/privacidade`, mas o repositório de origem não inclui o texto nem a rota da Política de Privacidade. O conteúdo jurídico deve ser fornecido ou aprovado antes da criação dessa página.
- `bun.lock` é o único lockfile vigente. Os lockfiles históricos e conflitantes (`package-lock.json` e `bun.lockb`) foram removidos após confirmar no histórico e em uma instalação congelada que o projeto usa Bun e que não há perda de dependências.
- O domínio canônico atual é `https://www.flaviavazrabello.com.br`. Se o domínio definitivo mudar, atualize os canonicals, Open Graph, JSON-LD, `robots.txt` e `sitemap.xml`.
