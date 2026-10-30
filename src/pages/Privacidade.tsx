import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";

// Texto padrão LGPD com os dados do próprio site. Revisar com a Dra. Flávia antes de publicar.
const TEXTO = `<p><em>Última atualização: 30 de outubro de 2026.</em></p>
<p>Esta política explica como a advogada Flávia Vaz Rabello (Flávia Vaz Rabello Advocacia) trata os dados pessoais de quem visita este site ou entra em contato pelos canais indicados nele, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018, LGPD).</p>
<h2>1. Quem é o controlador dos dados</h2>
<p>Flávia Vaz Rabello, advogada inscrita na OAB/SP sob o nº 262.057, com endereço em Avenida Coronel Antonio Estanislau do Amaral, 635, sala 10, Itaici Office, Itaici, Indaiatuba/SP, CEP 13340-480.</p>
<h2>2. Quais dados podem ser tratados</h2>
<ul>
<li><strong>Dados que você nos envia:</strong> nome, telefone, e-mail e as informações que você decidir compartilhar ao entrar em contato por WhatsApp, telefone ou e-mail.</li>
<li><strong>Dados de navegação:</strong> informações técnicas coletadas de forma automática, como páginas visitadas, tempo de permanência, tipo de dispositivo e navegador, cidade aproximada e origem do acesso. Esses dados só são coletados pelas ferramentas de medição (Google Tag Manager, Google Analytics e Microsoft Clarity, que registra de forma anônima os cliques e a rolagem nas páginas) se você permitir no aviso de cookies, e não identificam você pelo nome.</li>
</ul>
<h2>3. Para que usamos os dados</h2>
<ul>
<li>Responder ao seu contato e prestar o atendimento solicitado.</li>
<li>Entender como o site é usado, para melhorar o conteúdo e a navegação.</li>
<li>Cumprir obrigações legais e regulatórias.</li>
</ul>
<p>As bases legais são o seu consentimento (para a medição de audiência e os cookies de análise), a execução de procedimentos preliminares a pedido seu e o cumprimento de obrigação legal, nos termos do artigo 7º da LGPD.</p>
<h2>4. WhatsApp, telefone e e-mail</h2>
<p>Ao clicar em um botão de WhatsApp, telefone ou e-mail, você é direcionado para o aplicativo correspondente. A conversa passa a seguir também os termos e a política de privacidade do serviço utilizado (por exemplo, WhatsApp ou o seu provedor de e-mail). Recomendamos não enviar documentos ou informações sensíveis antes de o atendimento ser iniciado.</p>
<h2>5. Formulário de contato</h2>
<p>O formulário da página de contato não envia nem guarda dados: o atendimento é feito pelo WhatsApp, telefone ou e-mail.</p>
<h2 id="cookies">6. Cookies e ferramentas de medição</h2>
<p>Cookies são pequenos arquivos que o site guarda no seu navegador. Aqui eles se dividem em três grupos, e só os necessários funcionam sem a sua permissão. Na primeira visita aparece um aviso com as opções Aceitar, Recusar e Personalizar.</p>
<p><strong>Necessários, sempre ligados.</strong> Guardam a sua escolha sobre cookies neste navegador, com a data e a versão do aviso, e mantêm o site funcionando. A escolha vale por 6 meses ou até o texto do aviso mudar, quando perguntamos de novo.</p>
<p><strong>Análise, só com a sua permissão.</strong> O Google Analytics, carregado pelo Google Tag Manager, conta visitas, páginas vistas e cliques para entendermos como o site é usado. O Microsoft Clarity mostra, sem identificar você, como as páginas são usadas (cliques e rolagem), para melhorar o site.</p>
<p><strong>Anúncios, só com a sua permissão.</strong> Hoje este site não usa ferramenta de anúncios. Se isso mudar, ela só funcionará com a sua permissão e esta página será atualizada.</p>
<p>Cada ferramenta define por quanto tempo os próprios cookies ficam no navegador, e esses prazos estão na documentação dela: <a href="https://policies.google.com/technologies/cookies?hl=pt-BR" target="_blank" rel="noopener">Google</a> e <a href="https://learn.microsoft.com/pt-br/clarity/setup-and-installation/cookie-list" target="_blank" rel="noopener">Microsoft Clarity</a>.</p>
<p><strong>Como mudar a sua escolha.</strong> Use o link "Cookies" no rodapé de qualquer página para ligar ou desligar cada grupo quando quiser. Você também pode apagar ou bloquear cookies nas configurações do seu navegador; o site continua funcionando normalmente.</p>
<h2>7. Compartilhamento</h2>
<p>Os dados não são vendidos. Podem ser compartilhados apenas com prestadores de serviço necessários ao funcionamento do site e da medição (hospedagem e ferramentas de medição do Google e da Microsoft, estas só se você permitir), com autoridades, quando houver obrigação legal, ou mediante a sua autorização.</p>
<h2>8. Por quanto tempo guardamos</h2>
<p>Os dados são mantidos pelo tempo necessário para cumprir as finalidades acima e as obrigações legais. Depois disso, são excluídos ou anonimizados.</p>
<h2>9. Segurança</h2>
<p>Adotamos medidas técnicas e administrativas razoáveis para proteger os dados contra acesso não autorizado, perda ou uso indevido. O site usa conexão segura (HTTPS).</p>
<h2>10. Seus direitos</h2>
<p>Você pode pedir, a qualquer momento: confirmação de que tratamos seus dados, acesso, correção, anonimização, bloqueio ou eliminação de dados desnecessários, portabilidade, informação sobre compartilhamento e revogação do consentimento, conforme o artigo 18 da LGPD.</p>
<h2>11. Como falar sobre privacidade</h2>
<p>Para exercer seus direitos ou tirar dúvidas sobre esta política, fale conosco pelo e-mail <a href="mailto:advogada@flaviavazrabello.com.br">advogada@flaviavazrabello.com.br</a> ou telefone/WhatsApp <a href="tel:+5519997439157">(19) 99743-9157</a>.</p>
<h2>12. Atualizações</h2>
<p>Esta política pode ser atualizada. A data da última versão fica sempre no início da página.</p>
`;

const PROSA =
  "prose prose-neutral max-w-none prose-headings:font-serif prose-headings:text-primary " +
  "prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 " +
  "prose-p:text-foreground/80 prose-p:leading-relaxed prose-li:text-foreground/80 prose-strong:text-primary " +
  "prose-a:text-accent prose-a:underline-offset-2 hover:prose-a:underline";

const Privacidade = () => (
  <>
    <Seo
      title="Política de Privacidade | Flávia Vaz Rabello Advocacia"
      description="Como a advogada Flávia Vaz Rabello trata os dados pessoais de quem visita o site ou entra em contato, conforme a LGPD."
      canonical="https://www.flaviavazrabello.com.br/politica-de-privacidade"
    />
    <PageHero eyebrow="Privacidade" title="Política de Privacidade" subtitle="Como tratamos os dados pessoais de quem visita o site ou entra em contato." />
    <section className="py-16 md:py-24">
      <div className="container-narrow max-w-3xl">
        <div className={PROSA} dangerouslySetInnerHTML={{ __html: TEXTO }} />
      </div>
    </section>
  </>
);

export default Privacidade;
