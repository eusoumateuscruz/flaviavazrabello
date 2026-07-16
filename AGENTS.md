# Orientações para agentes e contribuidores

## Contexto do projeto

- Use português do Brasil em documentação, comentários relevantes e comunicação sobre o projeto.
- A aplicação usa React com Vite e TypeScript.
- Implemente interfaces com componentes funcionais e hooks.

## Preservação do site

- Preserve a identidade visual, o comportamento, as rotas e a responsividade existentes.
- Antes de criar um componente, verifique se já existe uma opção adequada em `src/components`.
- Reutilize e componha os componentes de `src/components/ui` (shadcn/ui) sempre que possível.
- Preserve SEO, metatags, canonicals, sitemap e dados estruturados.
- Não altere conteúdo jurídico sem solicitação explícita.
- Não altere telefone, WhatsApp, OAB, endereço, e-mail ou outros dados profissionais sem solicitação explícita.
- Mantenha acessibilidade básica: HTML semântico, navegação por teclado, rótulos, textos alternativos e contraste adequado.

## Implementação e segurança

- Evite dependências novas quando a solução puder ser construída com a stack atual.
- Nunca inclua segredos, tokens, senhas, chaves de API ou valores reais de ambiente no repositório.
- Quando forem necessárias variáveis de ambiente, documente-as em `.env.example` com valores claramente fictícios.
- Faça mudanças focadas e evite refatorações sem relação com a tarefa.

## Git e validação

- Não trabalhe diretamente em `main`; use uma branch própria.
- Produza commits pequenos, objetivos e coerentes com o diff.
- Antes de concluir, execute nesta ordem:

```bash
npm ci
npm run lint
npm run test
npm run build
```

- Corrija falhas relacionadas à tarefa e confirme que `dist/` foi gerada pelo build.
