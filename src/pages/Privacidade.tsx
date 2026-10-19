import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";

// Texto padrão LGPD com os dados do próprio site. Revisar com a Dra. Flávia antes de publicar.
const TEXTO = `<p><em>Última atualização: 19 de outubro de 2026.</em></p>
<p>Esta política explica como a advogada Flávia Vaz Rabello (Flávia Vaz Rabello Advocacia) trata os dados pessoais de quem visita este site ou entra em contato pelos canais indicados nele, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018, LGPD).</p>
<h2>1. Quem é o controlador dos dados</h2>
<p>Flávia Vaz Rabello, advogada inscrita na OAB/SP sob o nº 262.057, com endereço em Avenida Coronel Antonio Estanislau do Amaral, 635, sala 10, Itaici Office, Itaici, Indaiatuba/SP, CEP 13340-480.</p>
<h2>2. Quais dados podem ser tratados</h2>
<ul>
<li><strong>Dados que você nos envia:</strong> nome, telefone, e-mail e as informações que você decidir compartilhar ao entrar em contato por WhatsApp, telefone ou e-mail.</li>
<li><strong>Dados de navegação:</strong> informações técnicas coletadas de forma automática, como páginas visitadas, tempo de permanência, tipo de dispositivo e navegador, cidade aproximada e origem do acesso. Esses dados são coletados por ferramentas de medição (Google Tag Manager, Google Analytics e Microsoft Clarity, que registra de forma anônima os cliques e a rolagem nas páginas) e não identificam você pelo nome.</li>
</ul>
<h2>3. Para que usamos os dados</h2>
<ul>
<li>Responder ao seu contato e prestar o atendimento solicitado.</li>
<li>Entender como o site é usado, para melhorar o conteúdo e a navegação.</li>
<li>Cumprir obrigações legais e regulatórias.</li>
</ul>
<p>As bases legais são o seu consentimento, a execução de procedimentos preliminares a pedido seu, o cumprimento de obrigação legal e o legítimo interesse, nos termos do artigo 7º da LGPD.</p>
<h2>4. WhatsApp, telefone e e-mail</h2>
<p>Ao clicar em um botão de WhatsApp, telefone ou e-mail, você é direcionado para o aplicativo correspondente. A conversa passa a seguir também os termos e a política de privacidade do serviço utilizado (por exemplo, WhatsApp ou o seu provedor de e-mail). Recomendamos não enviar documentos ou informações sensíveis antes de o atendimento ser iniciado.</p>
<h2>5. Formulário de contato</h2>
<p>O formulário da página de contato não envia nem guarda dados: o atendimento é feito pelo WhatsApp, telefone ou e-mail.</p>
<h2>6. Cookies e ferramentas de medição</h2>
<p>O site usa cookies e tecnologias semelhantes para medir audiência e o uso das páginas. Você pode bloquear ou apagar cookies nas configurações do seu navegador; o site continua funcionando normalmente.</p>
<h2>7. Compartilhamento</h2>
<p>Os dados não são vendidos. Podem ser compartilhados apenas com prestadores de serviço necessários ao funcionamento do site e da medição (hospedagem e ferramentas de medição do Google e da Microsoft), com autoridades, quando houver obrigação legal, ou mediante a sua autorização.</p>
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
