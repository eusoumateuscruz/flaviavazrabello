// Aviso de cookies (LGPD) do padrão da agência, para sites que não usam o gerador do modelo base.
// Kit ferramentas/cookies (ver o README). Depende do trecho consentimento-head.html no <head>.
// Uso: <script src="/js/aviso-cookies.js" defer data-versao="..." data-politica="/politica-de-privacidade/#cookies"
//        data-analise="Google Analytics e Microsoft Clarity" data-anuncios="Google Ads e Meta" [data-anuncios-texto="..."]></script>
//   Site sem anúncios: data-anuncios="nenhum".
// Cores e fonte vêm do site: --ck-fundo, --ck-tinta, --ck-tinta-2, --ck-linha, --ck-destaque,
// --ck-destaque-tinta, --ck-fonte e --ck-raio (com valores neutros se o site não definir).
// Categorias: necessários (sempre ligados), análise (analytics_storage) e anúncios (ad_storage,
// ad_user_data, ad_personalization). Escolha no localStorage com versão e data, válida por 6 meses.
// Botão ou link com data-abrir-cookies reabre o aviso com as categorias, para mudar ou revogar.
(function () {
  var script = document.currentScript;
  var VERSAO = script.dataset.versao;
  var POLITICA = script.dataset.politica || '/politica-de-privacidade/#cookies';
  var ANALISE = script.dataset.analise || 'Google Analytics';
  // data-anuncios="nenhum": site sem anúncios; o aviso fica só com necessários e análise.
  var COM_ANUNCIOS = script.dataset.anuncios !== 'nenhum';
  var ANUNCIOS = script.dataset.anuncios || 'Google Ads e Meta';
  // Texto da categoria anúncios: sem remarketing, use data-anuncios-texto (ex.: "Medem se a visita vinda de um anúncio terminou em contato").
  var ANUNCIOS_TEXTO = script.dataset.anunciosTexto || 'Medem o resultado dos anúncios e permitem mostrar anúncios a quem visitou o site';
  var VALIDADE_MESES = 6;

  var esc = function (t) {
    return String(t).replace(/[&<>"]/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch];
    });
  };

  var css =
    '#aviso-cookies{--_fundo:var(--ck-fundo,#fff);--_tinta:var(--ck-tinta,#1d2329);--_tinta-2:var(--ck-tinta-2,#4a535c);--_linha:var(--ck-linha,#d9dde1);--_destaque:var(--ck-destaque,#1d2329);--_destaque-tinta:var(--ck-destaque-tinta,#fff);position:fixed;right:16px;bottom:16px;left:16px;z-index:2147483000;display:grid;gap:16px;box-sizing:border-box;max-width:520px;max-height:calc(100dvh - 32px);overflow-y:auto;padding:24px;border:1px solid var(--_linha);border-radius:var(--ck-raio,12px);background:var(--_fundo);color:var(--_tinta-2);-webkit-text-fill-color:var(--_tinta-2);box-shadow:0 12px 40px rgba(0,0,0,.18);font:400 15px/1.55 var(--ck-fonte,inherit);text-align:left}' +
    '#aviso-cookies[hidden],#aviso-cookies [hidden]{display:none}' +
    '#aviso-cookies:focus{outline:none}' +
    '#aviso-cookies *{box-sizing:border-box}' +
    '#aviso-cookies p,#aviso-cookies label{margin:0;color:var(--_tinta-2);-webkit-text-fill-color:var(--_tinta-2);font:inherit;text-transform:none;letter-spacing:normal}' +
    '#aviso-cookies p.ck-titulo{color:var(--_tinta);-webkit-text-fill-color:var(--_tinta);font-weight:600;font-size:16px}' +
    '#aviso-cookies a{color:var(--_tinta);-webkit-text-fill-color:var(--_tinta);text-decoration:underline;text-underline-offset:2px}' +
    '#aviso-cookies fieldset{display:grid;gap:8px;margin:0;padding:0;border:0;min-width:0}' +
    '#aviso-cookies legend{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}' +
    '#aviso-cookies .ck-cat{display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;padding-top:12px;border-top:1px solid var(--_linha)}' +
    '#aviso-cookies .ck-cat input{width:20px;height:20px;margin:2px 0 0;accent-color:var(--_destaque)}' +
    '#aviso-cookies .ck-cat strong{color:var(--_tinta);-webkit-text-fill-color:var(--_tinta);font-weight:600}' +
    '#aviso-cookies .ck-acoes{display:grid;grid-template-columns:1fr 1fr;gap:8px}' +
    '#aviso-cookies button{min-height:48px;margin:0;padding:0 16px;border:1px solid var(--_destaque);border-radius:var(--ck-raio,12px);background:var(--_destaque);color:var(--_destaque-tinta);-webkit-text-fill-color:var(--_destaque-tinta);font:600 15px/1.2 var(--ck-fonte,inherit);cursor:pointer;text-transform:none;letter-spacing:normal;box-shadow:none}' +
    '#aviso-cookies button.ck-sec{grid-column:1/-1;background:transparent;color:var(--_tinta);-webkit-text-fill-color:var(--_tinta);border-color:var(--_linha)}' +
    '#aviso-cookies button:focus-visible,#aviso-cookies input:focus-visible,#aviso-cookies a:focus-visible{outline:2px solid var(--_destaque);outline-offset:2px}' +
    '@media (max-width:480px){#aviso-cookies{right:12px;bottom:12px;left:12px;padding:20px;gap:12px;font-size:14px}}';

  var categoria = function (id, titulo, texto, fixa) {
    return (
      '<div class="ck-cat"><input type="checkbox" id="ck-' + id + '"' +
      (fixa ? ' checked disabled' : ' data-categoria="' + id + '"') +
      '><label for="ck-' + id + '"><strong>' + titulo + '</strong> ' + texto + '</label></div>'
    );
  };

  var html =
    '<p class="ck-titulo" id="ck-titulo">Cookies neste site</p>' +
    '<p id="ck-texto">Com a sua permissão, ' + (COM_ANUNCIOS ? 'usamos cookies para medir as visitas (análise) e os resultados dos anúncios (anúncios).' : 'usamos cookies para medir as visitas (análise).') + ' Os necessários, que guardam a sua escolha, ficam sempre ligados. Detalhes na <a href="' + esc(POLITICA) + '">política de privacidade</a>.</p>' +
    '<fieldset id="ck-opcoes" hidden><legend>Categorias de cookies</legend>' +
    categoria('necessarios', 'Necessários, sempre ligados.', 'Guardam a sua escolha sobre cookies e mantêm o site funcionando.', true) +
    categoria('analise', 'Análise.', 'Contam visitas e cliques para entender como o site é usado (' + esc(ANALISE) + ').') +
    (COM_ANUNCIOS ? categoria('anuncios', 'Anúncios.', esc(ANUNCIOS_TEXTO) + ' (' + esc(ANUNCIOS) + ').') : '') +
    '</fieldset>' +
    '<div class="ck-acoes">' +
    '<button type="button" data-consentimento="recusar">Recusar</button>' +
    '<button type="button" data-consentimento="aceitar">Aceitar</button>' +
    '<button type="button" class="ck-sec" data-ck-personalizar aria-controls="ck-opcoes">Personalizar</button>' +
    '<button type="button" class="ck-sec" data-consentimento="salvar" hidden>Salvar minha escolha</button>' +
    '</div>';

  var estilo = document.createElement('style');
  estilo.textContent = css;
  document.head.appendChild(estilo);

  var aviso = document.createElement('div');
  aviso.id = 'aviso-cookies';
  aviso.setAttribute('role', 'dialog');
  aviso.setAttribute('aria-labelledby', 'ck-titulo');
  aviso.setAttribute('aria-describedby', 'ck-texto');
  aviso.tabIndex = -1;
  aviso.hidden = true;
  aviso.innerHTML = html;

  var opcoes = aviso.querySelector('#ck-opcoes');
  var personalizar = aviso.querySelector('[data-ck-personalizar]');
  var salvar = aviso.querySelector('[data-consentimento="salvar"]');
  var caixa = function (k) { return aviso.querySelector('[data-categoria="' + k + '"]'); };
  var voltarPara = null;

  var escolhaSalva = function () {
    try {
      var c = JSON.parse(localStorage.getItem('consentimento'));
      if (!c || c.versao !== VERSAO) return null;
      var vence = new Date(c.data);
      vence.setMonth(vence.getMonth() + VALIDADE_MESES);
      return vence > new Date() ? c : null;
    } catch (e) {
      return null;
    }
  };

  var estado = function (sim) { return sim ? 'granted' : 'denied'; };

  var mostrarOpcoes = function (sim) {
    opcoes.hidden = !sim;
    salvar.hidden = !sim;
    personalizar.hidden = sim;
  };

  var abrir = function (comOpcoes) {
    var atual = escolhaSalva();
    caixa('analise').checked = Boolean(atual && atual.analise);
    if (COM_ANUNCIOS) caixa('anuncios').checked = Boolean(atual && atual.anuncios);
    mostrarOpcoes(comOpcoes);
    if (!aviso.isConnected) document.body.appendChild(aviso);
    aviso.hidden = false;
    aviso.focus({ preventScroll: true });
  };

  var fechar = function () {
    var focoDentro = aviso.contains(document.activeElement);
    aviso.hidden = true;
    if (focoDentro && voltarPara) voltarPara.focus();
    voltarPara = null;
  };

  var escolher = function (analise, anuncios) {
    var antes = window.consentimento;
    try {
      localStorage.setItem('consentimento', JSON.stringify({ versao: VERSAO, data: new Date().toISOString(), analise: analise, anuncios: anuncios }));
    } catch (e) {}
    gtag('consent', 'update', {
      analytics_storage: estado(analise),
      ad_storage: estado(anuncios),
      ad_user_data: estado(anuncios),
      ad_personalization: estado(anuncios)
    });
    dataLayer.push({
      event: 'consentimento',
      consentimento: analise && anuncios ? 'aceito' : analise || anuncios ? 'personalizado' : 'recusado',
      consentimento_analise: estado(analise),
      consentimento_anuncios: estado(anuncios),
      consentimento_versao: VERSAO
    });
    fechar();
    // Revogou algo que estava ligado: recarrega para nenhuma ferramenta já carregada seguir rodando.
    if (antes && ((antes.analise && !analise) || (antes.anuncios && !anuncios))) {
      location.reload();
      return;
    }
    if (window.liberarConsentimento) window.liberarConsentimento(analise, anuncios);
  };

  aviso.addEventListener('click', function (e) {
    if (e.target.closest('[data-ck-personalizar]')) {
      mostrarOpcoes(true);
      caixa('analise').focus();
      return;
    }
    var alvo = e.target.closest('[data-consentimento]');
    var acao = alvo && alvo.dataset.consentimento;
    if (acao === 'aceitar') escolher(true, COM_ANUNCIOS);
    else if (acao === 'recusar') escolher(false, false);
    else if (acao === 'salvar') escolher(caixa('analise').checked, COM_ANUNCIOS && caixa('anuncios').checked);
  });

  // Esc fecha sem mudar nada, só quando já existe uma escolha válida.
  aviso.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && escolhaSalva()) fechar();
  });

  document.addEventListener('click', function (e) {
    var botao = e.target.closest('[data-abrir-cookies]');
    if (!botao) return;
    e.preventDefault();
    voltarPara = botao;
    abrir(true);
  });

  var iniciar = function () { if (!escolhaSalva()) abrir(false); };
  if (document.body) iniciar();
  else document.addEventListener('DOMContentLoaded', iniciar);
})();
