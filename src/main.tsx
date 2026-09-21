import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import { iniciarRastreamentoWhatsapp } from "./lib/tracking";
import { carregarArtigo } from "./lib/artigos";

iniciarRastreamentoWhatsapp();

/* Em artigo do blog em JSON, carrega o corpo antes de montar o React: assim a
   primeira renderizacao ja sai completa e substitui o HTML pre-renderizado sem
   piscar "Carregando". */
const rota = window.location.pathname.match(/^\/blog\/([^/]+)\/?$/);
const antes = rota ? carregarArtigo(rota[1]).catch(() => undefined) : Promise.resolve(undefined);

antes.then(() =>
  createRoot(document.getElementById("root")!).render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  )
);
