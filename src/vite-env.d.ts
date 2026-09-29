/// <reference types="vite/client" />

declare module "virtual:artigos-publicados" {
  const carregadores: Record<string, () => Promise<import("@/lib/artigos").Artigo>>;
  export default carregadores;
}
