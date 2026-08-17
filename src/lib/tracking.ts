/**
 * Rastreamento de conversão — cliques em WhatsApp.
 *
 * Empurra o evento `clique_whatsapp` para o dataLayer, consumido pelo
 * container GTM-524W4WZR, que o encaminha para a propriedade GA4
 * G-CWZT5XCLWB. (O container GTM-N3LZP5GV, citado aqui antes, e de outra
 * propriedade e nunca teve relacao com este site.)
 *
 * O listener é delegado no `document` de propósito: como este site é uma SPA
 * (react-router), listeners presos a elementos se perdem a cada troca de rota.
 * A delegação cobre também qualquer link renderizado depois da montagem.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const SELETOR_WHATSAPP = 'a[href*="wa.me"], a[href*="api.whatsapp.com"]';

function slug(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    // 80 e folgado para os slugs mais longos de blog (o maior hoje da 47) e
    // continua abaixo do limite de 100 caracteres do GA4 para valor de
    // parametro, ja contando o prefixo "pagina-"/"secao-". Em 40, slugs de post
    // eram cortados no meio e ficavam ilegiveis no relatorio.
    .slice(0, 80);
}

/** Descobre de qual bloco da página partiu o clique. */
function origemDoClique(el: Element): string {
  const explicito = el.closest<HTMLElement>("[data-cta-origem]");
  if (explicito?.dataset.ctaOrigem) return explicito.dataset.ctaOrigem;

  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "rodape";

  const secao = el.closest<HTMLElement>("section[id], article[id]");
  if (secao?.id) return `secao-${slug(secao.id)}`;

  const rota = window.location.pathname.replace(/^\/+|\/+$/g, "");
  return `pagina-${slug(rota || "home")}`;
}

export function iniciarRastreamentoWhatsapp(): void {
  document.addEventListener(
    "click",
    (evento) => {
      const alvo = (evento.target as Element | null)?.closest?.(SELETOR_WHATSAPP);
      if (!alvo) return;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "clique_whatsapp",
        cta_origem: origemDoClique(alvo),
        cta_pagina: window.location.pathname,
      });
    },
    true, // fase de captura: registra antes de qualquer handler que pare a propagação
  );
}
