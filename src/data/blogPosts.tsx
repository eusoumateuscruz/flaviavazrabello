import type { ReactNode } from "react";
import blogGolpePix from "@/assets/blog-golpe-pix.jpg";
import blogGuardaCompartilhada from "@/assets/blog-guarda-compartilhada.jpg";
import blogDemissao from "@/assets/blog-demissao.jpg";
import blogJurosAbusivos from "@/assets/blog-juros-abusivos.jpg";
import blogDivorcioConsensual from "@/assets/blog-divorcio-consensual.jpg";
import blogAlienacaoParentalOQueEComoProvar from "@/assets/blog-alienacao-parental-o-que-e-como-provar.jpg";
import blogAssedioMoralNoTrabalhoOQueFazer from "@/assets/blog-assedio-moral-no-trabalho-o-que-fazer.jpg";
import blogCompraCanceladaLojaNaoDevolveuDinheiro from "@/assets/blog-compra-cancelada-loja-nao-devolveu-dinheiro.jpg";
import blogEmpresaNaoPagouHorasExtrasOQueFazer from "@/assets/blog-empresa-nao-pagou-horas-extras-o-que-fazer.jpg";
import blogNomeSujoIndevidamenteOQueFazer from "@/assets/blog-nome-sujo-indevidamente-o-que-fazer.jpg";
import blogPensaoAlimenticiaComoECalculadoOValor from "@/assets/blog-pensao-alimenticia-como-e-calculado-o-valor.jpg";
import blogProdutoComDefeitoQuaisSaoMeusDireitos from "@/assets/blog-produto-com-defeito-quais-sao-meus-direitos.jpg";
import blogRevisaoContratoFinanciamentoVeiculo from "@/assets/blog-revisao-contrato-financiamento-veiculo.jpg";

export type BlogPost = {
  slug: string;
  category: "Família" | "Bancário" | "Trabalhista" | "Geral" | "Consumidor";
  title: string;
  h1: string;
  excerpt: string;
  cover: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  jsonLd?: object | object[];
  content: ReactNode;
};

const WHATSAPP = "https://wa.me/5519997439157";

const Cta = () => (
  <div className="mt-10 p-6 md:p-8 bg-secondary/40 border border-border">
    <p className="text-foreground/85 leading-relaxed">
      Você não precisa enfrentar esse momento sozinha(o). A Dra. Flávia Vaz Rabello
      atende clientes em todo o Brasil de forma online, com escritório em
      Indaiatuba/SP para atendimento presencial. Agende sua consulta agora e dê o
      primeiro passo com segurança jurídica e acolhimento.
    </p>
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors"
    >
      Agendar Consulta
    </a>
  </div>
);

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "golpe-do-pix-o-que-fazer",
    category: "Bancário",
    title: "Caí no Golpe do Pix: O Que Fazer Agora?",
    h1: "Caí no Golpe do Pix: O Que Fazer Agora?",
    excerpt:
      "Passo a passo para tentar recuperar o dinheiro via MED, denunciar o golpista e avaliar a responsabilidade do banco.",
    cover: blogGolpePix,
    metaTitle: "Golpe do Pix: O Que Fazer se Você For Vítima | Advogada Flávia Vaz Rabello",
    metaDescription:
      "Saiba o que fazer imediatamente se cair no golpe do Pix, como tentar recuperar o dinheiro, onde denunciar e quais são seus direitos como vítima. Orientação jurídica especializada.",
    canonical: "https://www.flaviavazrabello.com.br/blog/golpe-do-pix-o-que-fazer",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "O que fazer imediatamente após cair no golpe do Pix?", acceptedAnswer: { "@type": "Answer", text: "Contate seu banco imediatamente pelo canal oficial, solicite o bloqueio via MED, registre Boletim de Ocorrência e guarde todos os comprovantes e conversas." } },
        { "@type": "Question", name: "O banco é obrigado a devolver o dinheiro do golpe do Pix?", acceptedAnswer: { "@type": "Answer", text: "Depende do caso. O Mecanismo Especial de Devolução (MED) pode bloquear e devolver valores em até 7 dias se o dinheiro ainda estiver na conta do golpista. Em outros casos, pode ser necessária ação judicial." } },
        { "@type": "Question", name: "O golpe do Pix é crime?", acceptedAnswer: { "@type": "Answer", text: "Sim. Pode configurar estelionato, furto mediante fraude ou crime de invasão de dispositivo informático, com penas agravadas quando praticado por meios eletrônicos." } },
        { "@type": "Question", name: "Como saber se é golpe do Pix?", acceptedAnswer: { "@type": "Answer", text: "Desconfie de pedidos de devolução de Pix, ligações do banco pedindo dados, links por WhatsApp ou SMS e promessas de ganho fácil via transferência. Sempre verifique pelo canal oficial do banco." } },
        { "@type": "Question", name: "Onde denunciar golpe do Pix?", acceptedAnswer: { "@type": "Answer", text: "Banco Central, Procon, Polícia Civil (Boletim de Ocorrência), consumidor.gov.br e SaferNet Brasil." } },
      ],
    },
    content: (
      <>
        <h2>O que é o golpe do Pix?</h2>
        <p>
          O golpe do Pix é qualquer fraude que envolva transferências via sistema de pagamento
          instantâneo. Os golpistas usam diferentes abordagens para enganar as vítimas e fazê-las
          transferir dinheiro voluntariamente ou obter acesso indevido às suas contas. O Pix em si
          é seguro — o problema está nas técnicas de engenharia social usadas pelos criminosos.
        </p>

        <h2>Quais são os golpes do Pix mais comuns?</h2>
        <ul>
          <li><strong>Golpe do Pix errado (devolução):</strong> o golpista alega ter enviado um Pix errado e pede devolução — o Pix original é cancelado, mas o da vítima não.</li>
          <li><strong>Pix reverso:</strong> promessa falsa de devolução com lucro.</li>
          <li><strong>Golpe do falso funcionário do banco:</strong> ligação se passando pelo banco pedindo confirmação de dados.</li>
          <li><strong>Falso suporte técnico:</strong> ativação de golpe via link malicioso.</li>
          <li><strong>QR Code falso:</strong> código adulterado em lojas físicas ou sites.</li>
        </ul>

        <h2>O que fazer imediatamente após cair no golpe do Pix?</h2>
        <ol>
          <li>Entre em contato com seu banco imediatamente pelo canal oficial e informe a fraude.</li>
          <li>Solicite o bloqueio preventivo (mecanismo MED — Mecanismo Especial de Devolução).</li>
          <li>Registre um Boletim de Ocorrência online (bo.pc.sp.gov.br para SP).</li>
          <li>Guarde todos os comprovantes, prints e conversas.</li>
          <li>Denuncie ao Banco Central pelo site bcb.gov.br.</li>
          <li>Consulte uma advogada para avaliar possibilidade de ressarcimento judicial.</li>
        </ol>

        <h2>O banco devolve o dinheiro no golpe do Pix?</h2>
        <p>
          Depende. O Banco Central criou o Mecanismo Especial de Devolução (MED) para casos de
          fraude. Se o dinheiro ainda estiver na conta do destinatário, o banco pode bloquear e
          devolver em até 7 dias. Se já tiver sido movimentado, a devolução é mais difícil mas não
          impossível — pode ser buscada via ação judicial.
        </p>

        <h2>É possível recuperar o dinheiro perdido no golpe do Pix?</h2>
        <p>
          Sim, em alguns casos. As possibilidades incluem: acionamento do MED junto ao banco, ação
          judicial contra o fraudador (se identificado) e, em casos específicos, responsabilização
          do banco por falha na segurança. Uma advogada especializada analisa seu caso e indica o
          melhor caminho.
        </p>

        <h2>Onde denunciar o golpe do Pix?</h2>
        <ul>
          <li><strong>Banco Central:</strong> registra reclamações contra instituições financeiras (bcb.gov.br)</li>
          <li><strong>Procon:</strong> para questionar a conduta do banco</li>
          <li><strong>Polícia Civil:</strong> Boletim de Ocorrência por estelionato</li>
          <li><strong>Consumidor.gov.br:</strong> plataforma federal de resolução de conflitos</li>
          <li><strong>SaferNet Brasil:</strong> denúncias de crimes digitais</li>
        </ul>

        <h2>O golpe do Pix é crime?</h2>
        <p>
          Sim. Dependendo da modalidade, o golpe do Pix pode configurar estelionato (Art. 171 do
          Código Penal), furto mediante fraude ou crime de invasão de dispositivo informático
          (Lei 12.737/12). A pena pode ser agravada quando praticado por meio eletrônico ou em
          larga escala.
        </p>

        <h2>Como evitar golpes no Pix?</h2>
        <ul>
          <li>Nunca transfira para devolver um Pix sem verificar diretamente com seu banco.</li>
          <li>Desconfie de ligações, mesmo que o número pareça do banco.</li>
          <li>Não clique em links recebidos por SMS, WhatsApp ou e-mail.</li>
          <li>Ative o limite noturno do Pix no aplicativo do seu banco.</li>
          <li>Confirme sempre o nome do destinatário antes de confirmar a transferência.</li>
        </ul>

        <div className="mt-10 p-6 md:p-8 bg-secondary/40 border border-border">
          <p className="text-foreground/85 leading-relaxed">
            Se você foi vítima de golpe do Pix e quer saber se pode recuperar o dinheiro ou
            responsabilizar o banco, a Dra. Flávia Vaz Rabello pode orientar você. Atendimento
            online em todo o Brasil e presencial em Indaiatuba/SP.
          </p>
          <a
            href="https://wa.me/5519997439157"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors"
          >
            Falar com a Advogada
          </a>
        </div>
      </>
    ),
  },
  {
    slug: "guarda-compartilhada-como-funciona",
    category: "Família",
    title: "Guarda Compartilhada: Como Funciona, Direitos e Mitos",
    h1: "Guarda Compartilhada: Como Funciona, Direitos e Mitos",
    excerpt:
      "Entenda o modelo padrão de guarda no Brasil, quem paga pensão, os 3 tipos de guarda e quando a mãe pode (ou não) recusar.",
    cover: blogGuardaCompartilhada,
    metaTitle: "Guarda Compartilhada: Como Funciona e Seus Direitos | Advogada Flávia Vaz Rabello",
    metaDescription:
      "Entenda o que é guarda compartilhada, como funciona na prática, quem paga pensão, quais são os 3 tipos de guarda e quando a mãe pode negar. Tire suas dúvidas com advogada especializada.",
    canonical: "https://www.flaviavazrabello.com.br/blog/guarda-compartilhada-como-funciona",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "O que é guarda compartilhada?", acceptedAnswer: { "@type": "Answer", text: "É o modelo em que ambos os pais dividem a responsabilidade legal sobre os filhos. É o modelo preferencial da lei brasileira desde 2014." } },
        { "@type": "Question", name: "Quem tem guarda compartilhada paga pensão alimentícia?", acceptedAnswer: { "@type": "Answer", text: "Depende da diferença de renda entre os pais. Se houver desequilíbrio financeiro significativo, o pai de maior renda pode ser obrigado a pagar pensão mesmo na guarda compartilhada." } },
        { "@type": "Question", name: "A mãe pode recusar a guarda compartilhada?", acceptedAnswer: { "@type": "Answer", text: "Não unilateralmente. A guarda compartilhada é o padrão legal e cabe ao juiz decidir. A guarda unilateral só é aplicada quando a compartilhada for inviável ou prejudicial à criança." } },
        { "@type": "Question", name: "Quais são os 3 tipos de guarda?", acceptedAnswer: { "@type": "Answer", text: "Guarda compartilhada (ambos os pais têm responsabilidade conjunta), guarda unilateral (apenas um dos pais) e guarda alternada (a criança alterna períodos com cada genitor)." } },
      ],
    },
    content: (
      <>
        <h2>O que é guarda compartilhada?</h2>
        <p>
          Guarda compartilhada é o modelo em que ambos os pais dividem as responsabilidades legais
          sobre os filhos — decisões sobre saúde, educação e criação. Não significa necessariamente
          tempo igual com cada genitor, mas sim responsabilidade compartilhada. É o modelo
          preferencial da legislação brasileira desde 2014.
        </p>

        <h2>Como funciona a guarda compartilhada na prática?</h2>
        <p>
          Na guarda compartilhada, ambos os pais participam ativamente das decisões importantes
          sobre a vida dos filhos. A criança geralmente tem uma residência principal, mas mantém
          convivência frequente com os dois genitores. A divisão do tempo é acordada entre as
          partes ou definida pelo juiz com base no melhor interesse da criança.
        </p>

        <h2>Quais são os 3 tipos de guarda?</h2>
        <ol>
          <li><strong>Guarda compartilhada:</strong> ambos os pais têm autoridade legal conjunta sobre os filhos — modelo padrão no Brasil.</li>
          <li><strong>Guarda unilateral:</strong> apenas um dos pais tem a guarda, o outro tem direito de visitas. Aplicada quando um dos genitores não tem condições de exercer a guarda.</li>
          <li><strong>Guarda alternada:</strong> a criança passa períodos alternados (semanas, meses) com cada genitor. Menos comum e controversa entre especialistas.</li>
        </ol>

        <h2>Como funciona a guarda de 15 em 15 dias?</h2>
        <p>
          É um modelo de guarda alternada em que a criança fica 15 dias com cada genitor. Não é a
          mesma coisa que guarda compartilhada. Alguns especialistas alertam que pode ser
          prejudicial para crianças pequenas devido à instabilidade de rotina. O juiz avalia caso
          a caso se esse modelo é adequado ao bem-estar da criança.
        </p>

        <h2>Quem tem guarda compartilhada paga pensão?</h2>
        <p>
          Depende. Na guarda compartilhada, se houver diferença significativa de renda entre os
          pais, o de maior renda pode ser obrigado a pagar pensão para equilibrar os custos da
          criança. Se os pais têm renda similar e o tempo com a criança é equilibrado, pode não
          haver pensão. Cada caso é analisado individualmente pelo juiz.
        </p>

        <h2>O que o pai tem que pagar na guarda compartilhada?</h2>
        <p>
          Além da pensão alimentícia (se houver), ambos os pais são responsáveis proporcionalmente
          pelos gastos com saúde, educação, lazer e necessidades da criança. O pai que não tem a
          residência principal contribui financeiramente de acordo com sua capacidade econômica.
        </p>

        <h2>A mãe pode negar a guarda compartilhada?</h2>
        <p>
          A guarda compartilhada é o modelo legal preferencial no Brasil. A mãe não pode
          simplesmente recusar — cabe ao juiz decidir o que é melhor para a criança. A guarda
          unilateral só é determinada quando a guarda compartilhada for inviável ou prejudicial
          ao menor.
        </p>

        <h2>O que prejudica o pai na guarda compartilhada?</h2>
        <p>
          Comportamentos que podem prejudicar qualquer genitor na definição da guarda incluem:
          alienação parental, histórico de violência doméstica, negligência com os cuidados da
          criança, ausência injustificada e instabilidade emocional ou financeira grave. A
          advogada especializada orienta como preservar seus direitos em todas as fases do
          processo.
        </p>

        <h2>Quais são as regras da guarda compartilhada?</h2>
        <p>
          As principais regras incluem: decisões importantes devem ser tomadas em conjunto, ambos
          os pais têm acesso a informações escolares e médicas da criança, nenhum genitor pode
          mudar a criança de cidade sem autorização do outro ou do juiz, e os pais devem evitar
          conflitos na presença dos filhos.
        </p>

        <div className="mt-10 p-6 md:p-8 bg-secondary/40 border border-border">
          <p className="text-foreground/85 leading-relaxed">
            Está passando por uma separação e tem dúvidas sobre a guarda dos seus filhos? A Dra.
            Flávia Vaz Rabello atua com sensibilidade e estratégia para proteger o melhor
            interesse do menor e garantir seus direitos como genitor(a). Agende sua consulta
            online (atendimento em todo o Brasil) ou presencial em Indaiatuba/SP.
          </p>
          <a
            href="https://wa.me/5519997439157"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors"
          >
            Agendar Consulta
          </a>
        </div>
      </>
    ),
  },
  {
    slug: "demissao-sem-justa-causa-direitos",
    category: "Trabalhista",
    title: "Fui Demitido Sem Justa Causa: Quais São Meus Direitos?",
    h1: "Fui Demitido Sem Justa Causa: Quais São Meus Direitos?",
    excerpt:
      "FGTS, aviso prévio, 13º, seguro-desemprego e multa de 40%: entenda todas as verbas devidas e os prazos para reclamar na Justiça.",
    cover: blogDemissao,
    metaTitle: "Demissão Sem Justa Causa: Seus Direitos | Advogada Flávia Vaz Rabello",
    metaDescription:
      "Saiba quais são todos os seus direitos na demissão sem justa causa: FGTS, aviso prévio, 13º salário, seguro-desemprego e multa de 40%. Entenda os prazos e como agir.",
    canonical: "https://www.flaviavazrabello.com.br/blog/demissao-sem-justa-causa-direitos",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Quais são meus direitos na demissão sem justa causa?", acceptedAnswer: { "@type": "Answer", text: "Saldo de salário, aviso prévio, 13º proporcional, férias proporcionais com 1/3, multa de 40% do FGTS, saque do FGTS e seguro-desemprego (se tiver direito)." } },
        { "@type": "Question", name: "Qual o prazo para entrar com reclamação trabalhista?", acceptedAnswer: { "@type": "Answer", text: "2 anos após o término do contrato de trabalho. Porém, só é possível cobrar verbas dos últimos 5 anos anteriores à ação." } },
        { "@type": "Question", name: "O que é rescisão indireta?", acceptedAnswer: { "@type": "Answer", text: "É quando a empresa comete falta grave — como não pagar salário ou praticar assédio — e o empregado pode encerrar o contrato recebendo todas as verbas da demissão sem justa causa." } },
        { "@type": "Question", name: "Quem tem doença pode ser demitido sem justa causa?", acceptedAnswer: { "@type": "Answer", text: "Em geral sim, mas empregados com doenças estigmatizantes como HIV, câncer ou dependência química têm estabilidade reconhecida pelos tribunais. Cada caso deve ser avaliado individualmente." } },
      ],
    },
    content: (
      <>
        <h2>O que é demissão sem justa causa?</h2>
        <p>
          É quando a empresa encerra o contrato de trabalho sem que o empregado tenha cometido
          nenhuma falta grave. É diferente da demissão por justa causa, onde o empregado praticou
          alguma infração prevista na CLT. Na demissão sem justa causa, o trabalhador tem direito
          a um conjunto de verbas rescisórias.
        </p>

        <h2>Quais são meus direitos na demissão sem justa causa?</h2>
        <p>Quando demitido sem justa causa, você tem direito a:</p>
        <ul>
          <li>Saldo de salário dos dias trabalhados no mês</li>
          <li>Aviso prévio (trabalhado ou indenizado)</li>
          <li>13º salário proporcional</li>
          <li>Férias proporcionais + 1/3 constitucional</li>
          <li>Multa de 40% sobre o saldo do FGTS</li>
          <li>Saque do FGTS</li>
          <li>Seguro-desemprego (se tiver direito pelo tempo de serviço)</li>
        </ul>

        <h2>Qual o valor da multa por demissão sem justa causa?</h2>
        <p>
          A multa é de 40% sobre o saldo total do FGTS acumulado durante o contrato. Além disso,
          a empresa deve depositar mais 10% do FGTS para a União (contribuição social). Esse
          valor é calculado sobre todo o período trabalhado, não apenas sobre o saldo atual.
        </p>

        <h2>Como calcular a rescisão sem justa causa?</h2>
        <p>
          O cálculo leva em conta: salário, tempo de serviço, aviso prévio proporcional ao tempo
          de casa (mínimo 30 dias, acrescido de 3 dias por ano trabalhado, até 90 dias), férias e
          13º proporcionais. Para garantir que o cálculo está correto, consulte uma advogada
          trabalhista antes de assinar a rescisão.
        </p>

        <h2>Quais são os 3 tipos de demissão?</h2>
        <ol>
          <li><strong>Sem justa causa:</strong> pela empresa, sem falta do empregado — assegura todas as verbas rescisórias.</li>
          <li><strong>Por justa causa:</strong> pelo empregado que cometeu falta grave — perde multa do FGTS, aviso prévio e seguro-desemprego.</li>
          <li><strong>Rescisão indireta:</strong> quando a empresa comete falta grave — empregado tem os mesmos direitos da demissão sem justa causa.</li>
        </ol>

        <h2>O que é rescisão indireta e quando posso pedir?</h2>
        <p>
          A rescisão indireta é a "justa causa do empregador". Você pode solicitá-la quando a
          empresa comete faltas graves como: não pagar salário em dia, exigir tarefas
          humilhantes, não cumprir obrigações legais ou praticar assédio moral. Nesse caso, você
          pede demissão mas recebe todas as verbas como se tivesse sido demitido sem justa causa.
        </p>

        <h2>Tenho prazo para reclamar meus direitos trabalhistas?</h2>
        <p>
          Sim. O prazo é de 2 anos após o término do contrato de trabalho para ingressar na
          Justiça do Trabalho. Porém, só é possível cobrar verbas dos últimos 5 anos anteriores
          ao ajuizamento da ação. Por isso, não deixe passar tempo demais antes de buscar
          orientação jurídica.
        </p>

        <h2>Quem tem doença crônica pode ser demitido sem justa causa?</h2>
        <p>
          Em geral, sim — a empresa pode demitir sem justa causa mesmo que o empregado tenha
          doença. Mas há exceções importantes: empregados com doenças que geram estigma ou
          preconceito (como HIV, câncer ou dependência química) têm estabilidade reconhecida
          pelos tribunais. Consulte uma advogada para avaliar seu caso específico.
        </p>

        <h2>Como sacar o FGTS após demissão sem justa causa?</h2>
        <p>
          Após a demissão, você recebe o Termo de Rescisão e pode sacar o FGTS diretamente pelo
          aplicativo FGTS, agências da Caixa Econômica Federal ou canais digitais. O prazo para
          a empresa depositar a multa de 40% é de 10 dias após o término do contrato.
        </p>

        <div className="mt-10 p-6 md:p-8 bg-secondary/40 border border-border">
          <p className="text-foreground/85 leading-relaxed">
            Foi demitido e tem dúvidas sobre seus direitos? A Dra. Flávia Vaz Rabello analisa sua
            rescisão e garante que você receba tudo o que tem direito. Atendimento online em
            todo o Brasil e presencial em Indaiatuba/SP.
          </p>
          <a
            href="https://wa.me/5519997439157"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors"
          >
            Consultar Advogada
          </a>
        </div>
      </>
    ),
  },
  {
    slug: "como-identificar-juros-abusivos",
    category: "Bancário",
    title: "Como Identificar Juros Abusivos no Seu Contrato e o Que Fazer",
    h1: "Como Identificar Juros Abusivos no Seu Contrato e o Que Fazer",
    excerpt:
      "Saiba como comparar a taxa do seu contrato com a média do Banco Central, identificar cobranças ilegais e buscar a revisão judicial.",
    cover: blogJurosAbusivos,
    metaTitle: "Como Identificar Juros Abusivos no Contrato | Advogada Flávia Vaz Rabello",
    metaDescription:
      "Saiba como calcular se está pagando juros abusivos no financiamento, cartão de crédito ou empréstimo. Entenda seus direitos e como recorrer com apoio jurídico especializado.",
    canonical: "https://www.flaviavazrabello.com.br/blog/como-identificar-juros-abusivos",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "O que são juros abusivos?", acceptedAnswer: { "@type": "Answer", text: "São taxas de juros que superam significativamente a média de mercado do Banco Central, configurando cobrança desproporcional protegida pelo Código de Defesa do Consumidor." } },
        { "@type": "Question", name: "Como saber se os juros do meu contrato são abusivos?", acceptedAnswer: { "@type": "Answer", text: "Compare a taxa do seu contrato com a taxa média de mercado divulgada pelo Banco Central para aquela modalidade de crédito. Diferenças significativas podem caracterizar abusividade." } },
        { "@type": "Question", name: "É possível revisar um contrato bancário já assinado?", acceptedAnswer: { "@type": "Answer", text: "Sim. Mesmo após assinar o contrato, é possível ingressar com ação revisional para questionar cláusulas abusivas e reduzir os juros cobrados." } },
        { "@type": "Question", name: "O banco pode me negativar se eu contestar a dívida?", acceptedAnswer: { "@type": "Answer", text: "Enquanto a dívida está sendo questionada judicialmente, é possível pedir tutela de urgência para suspender ou cancelar a negativação. Se indevida, cabe indenização por danos morais." } },
      ],
    },
    content: (
      <>
        <h2>O que são juros abusivos?</h2>
        <p>
          Juros abusivos são taxas de juros que excedem significativamente a média de mercado
          praticada pelo sistema financeiro, configurando cobrança desproporcional e ilegal. O
          Código de Defesa do Consumidor e o entendimento dos tribunais protegem o consumidor
          contra esse tipo de prática.
        </p>

        <h2>Qual taxa de juros é considerada abusiva?</h2>
        <p>
          Não existe um percentual fixo definido em lei para configurar abusividade. O parâmetro
          utilizado pelos tribunais é a taxa média de mercado divulgada mensalmente pelo Banco
          Central do Brasil. Se a taxa cobrada no seu contrato for significativamente superior à
          média do mercado para aquele tipo de crédito, pode ser considerada abusiva.
        </p>

        <h2>Como calcular se estou pagando juros abusivos?</h2>
        <ol>
          <li>Acesse o site do Banco Central (bcb.gov.br) e consulte as taxas médias de juros por modalidade de crédito.</li>
          <li>Compare com a taxa descrita no seu contrato.</li>
          <li>Se a diferença for expressiva, procure uma advogada especializada para análise do contrato.</li>
        </ol>
        <p>
          Aplicativos de simulação financeira também podem ajudar, mas a análise jurídica é
          indispensável para embasar uma ação revisional.
        </p>

        <h2>Juros abusivos em financiamento de carro: o que fazer?</h2>
        <p>
          O financiamento de veículos é uma das modalidades com mais reclamações de juros
          abusivos. Se você perceber que a taxa está muito acima da média do mercado, é possível
          ingressar com ação revisional para reduzir os juros e até obter restituição dos valores
          pagos a mais. A Dra. Flávia Vaz Rabello tem experiência nesse tipo de demanda.
        </p>

        <h2>E no cartão de crédito e empréstimo pessoal?</h2>
        <p>
          Cartão de crédito rotativo e empréstimos pessoais também são alvos frequentes de
          cobrança abusiva. Mesmo que você já tenha assinado o contrato, é possível questionar
          judicialmente cláusulas abusivas e pedir revisão dos valores.
        </p>

        <h2>É crime cobrar juros abusivos?</h2>
        <p>
          Sim. A cobrança de juros abusivos pode configurar crime de usura (Lei 1.521/51), além
          de violar o Código de Defesa do Consumidor. O consumidor prejudicado pode buscar tanto
          a revisão dos valores quanto indenização por danos.
        </p>

        <h2>O que fazer em caso de juros abusivos?</h2>
        <ol>
          <li>Guarde todos os documentos do contrato.</li>
          <li>Solicite o extrato completo das cobranças.</li>
          <li>Consulte uma advogada especializada em Direito Bancário.</li>
          <li>Avalie se cabe ação revisional ou acordo extrajudicial.</li>
          <li>Registre reclamação no Banco Central, Procon ou consumidor.gov.br.</li>
        </ol>

        <h2>Vale a pena entrar com ação revisional de juros?</h2>
        <p>
          Em muitos casos, sim. A ação revisional pode reduzir o saldo devedor, diminuir as
          parcelas e gerar restituição de valores pagos a mais. Uma análise prévia com advogada
          especializada permite saber se o seu caso tem viabilidade antes de qualquer decisão.
        </p>

        <h2>Onde reclamar de juros abusivos?</h2>
        <p>
          Além da via judicial, você pode registrar reclamações no Banco Central (bacen.gov.br),
          Procon do seu município ou na plataforma consumidor.gov.br. Para casos mais complexos
          ou que envolvam valores maiores, a via judicial tende a ser mais eficaz.
        </p>

        <div className="mt-10 p-6 md:p-8 bg-secondary/40 border border-border">
          <p className="text-foreground/85 leading-relaxed">
            Suspeita que está pagando juros abusivos no seu financiamento, cartão ou empréstimo?
            A Dra. Flávia Vaz Rabello analisa o seu contrato e orienta os melhores passos para
            proteger seus direitos. Atendimento online em todo o Brasil e presencial em
            Indaiatuba/SP.
          </p>
          <a
            href="https://wa.me/5519997439157"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors"
          >
            Falar com a Advogada
          </a>
        </div>
      </>
    ),
  },
  {
    slug: "divorcio-consensual-indaiatuba",
    category: "Família",
    title: "Divórcio Consensual: o que você precisa saber antes de começar",
    h1: "Divórcio Consensual: o que você precisa saber antes de começar",
    excerpt:
      "Entenda como funciona o divórcio consensual, documentos necessários, prazos e quando a presença da advogada é obrigatória.",
    cover: blogDivorcioConsensual,
    metaTitle: "Divórcio Consensual: Guia Completo | Advogada Flávia Vaz Rabello",
    metaDescription:
      "Entenda como funciona o divórcio consensual no Brasil, quais documentos são necessários, quanto tempo leva e quando a advogada é obrigatória. Atendimento online em todo o país.",
    canonical: "https://www.flaviavazrabello.com.br/blog/divorcio-consensual-indaiatuba",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "O que é divórcio consensual?", acceptedAnswer: { "@type": "Answer", text: "É a separação em que ambos os cônjuges concordam com todos os termos — divisão de bens, guarda dos filhos e pensão. É mais rápido e menos custoso que o litigioso." } },
        { "@type": "Question", name: "Quando um dos cônjuges não quer assinar o divórcio, o que fazer?", acceptedAnswer: { "@type": "Answer", text: "Desde 2010, o divórcio é um direito de qualquer cônjuge. Se um não quiser assinar, é possível entrar com divórcio unilateral na Justiça sem o consentimento do outro." } },
        { "@type": "Question", name: "Preciso de advogada para o divórcio consensual em cartório?", acceptedAnswer: { "@type": "Answer", text: "Sim. A presença de advogada é obrigatória em todos os tipos de divórcio, inclusive no extrajudicial em cartório." } },
        { "@type": "Question", name: "Quais são os 3 tipos de divórcio?", acceptedAnswer: { "@type": "Answer", text: "Consensual extrajudicial (cartório), consensual judicial (com filhos menores) e litigioso (sem acordo entre as partes)." } },
        { "@type": "Question", name: "Quanto tempo demora o divórcio consensual?", acceptedAnswer: { "@type": "Answer", text: "O divórcio extrajudicial em cartório pode ser concluído em poucos dias. O judicial consensual leva em média 2 a 6 meses." } },
      ],
    },
    content: (
      <>
        <h2>O que é divórcio consensual?</h2>
        <p>
          O divórcio consensual é a separação em que ambos os cônjuges concordam com todos os termos:
          divisão de bens, guarda dos filhos, pensão alimentícia e demais questões. Por não haver
          disputa judicial, o processo é mais rápido, menos custoso e emocionalmente menos desgastante
          do que o divórcio litigioso.
        </p>

        <h2>Qual a diferença entre divórcio consensual e litigioso?</h2>
        <p>
          No divórcio consensual, as partes chegam a um acordo e o processo tramita de forma simples,
          seja em cartório ou na Justiça. No litigioso, não há consenso — um dos cônjuges contesta os
          termos, o que transforma o processo em uma disputa judicial que pode durar anos. Mesmo no
          divórcio litigioso, é possível negociar acordos parciais com o suporte de uma advogada
          especializada.
        </p>

        <h2>Divórcio consensual: judicial ou extrajudicial?</h2>
        <p>Existem duas formas de realizar o divórcio consensual:</p>
        <ul>
          <li>
            <strong>Extrajudicial (em cartório):</strong> mais rápido, possível quando não há filhos
            menores ou incapazes e o casal está de acordo com todos os termos. Pode ser concluído em
            poucos dias.
          </li>
          <li>
            <strong>Judicial:</strong> necessário quando há filhos menores. O acordo é homologado por
            um juiz para garantir os direitos das crianças. Costuma levar de 2 a 6 meses.
          </li>
        </ul>

        <h2>Quais os documentos necessários para o divórcio?</h2>
        <p>
          Os documentos básicos incluem: certidão de casamento atualizada, RG e CPF de ambos os
          cônjuges, certidão de nascimento dos filhos (se houver), comprovante de residência e
          documentos dos bens a partilhar (escritura, documentos de veículos etc.). Uma advogada
          especializada orienta a documentação completa para evitar atrasos.
        </p>

        <h2>Quais são os 3 tipos de divórcio?</h2>
        <ol>
          <li>Consensual extrajudicial: em cartório, sem filhos menores, rápido e menos oneroso.</li>
          <li>Consensual judicial: com filhos menores, homologado pelo juiz.</li>
          <li>Litigioso: quando não há acordo entre as partes, resolvido por processo judicial.</li>
        </ol>

        <h2>E quando um dos cônjuges não quer assinar?</h2>
        <p>
          Desde 2010, o divórcio no Brasil é um direito potestativo — ou seja, nenhum cônjuge pode
          impedir o outro de se divorciar. Se um não quiser assinar, é possível ingressar com o
          divórcio unilateral na Justiça, sem necessidade do consentimento do outro. A Dra. Flávia
          Vaz Rabello pode orientar você sobre esse caminho.
        </p>

        <h2>Quem fica com a casa no divórcio?</h2>
        <p>
          Depende do regime de bens e do que foi acordado. No regime de comunhão parcial (o mais
          comum), os bens adquiridos durante o casamento são divididos. A casa pode ser vendida e o
          valor dividido, ou um dos cônjuges pode ficar com ela compensando o outro em dinheiro ou
          outros bens. Um acordo bem elaborado evita disputas futuras.
        </p>

        <h2>Quanto custa o divórcio?</h2>
        <p>
          O custo varia conforme o tipo de divórcio. O extrajudicial em cartório tem taxas menores. O
          judicial pode envolver custas processuais e honorários advocatícios. Consulte a Dra. Flávia
          para uma avaliação do seu caso específico.
        </p>

        <h2>Preciso de advogada para o divórcio consensual?</h2>
        <p>
          Sim. A presença de advogada é obrigatória em qualquer tipo de divórcio, seja em cartório
          ou na Justiça. Além de ser uma exigência legal, uma advogada especializada garante que o
          acordo proteja seus interesses e evita erros que podem gerar problemas futuros —
          especialmente em relação à guarda dos filhos e à partilha de bens.
        </p>

        <h2>Como dar entrada no divórcio?</h2>
        <p>
          O primeiro passo é agendar uma consulta com uma advogada especializada em Direito de
          Família. Na consulta, você apresenta sua situação, os documentos disponíveis e recebe
          orientação completa sobre o melhor caminho para o seu caso — cartório ou Justiça, prazo
          estimado e custos envolvidos.
        </p>

        <Cta />
      </>
    ),
  },
  {
    slug: "alienacao-parental-o-que-e-como-provar",
    category: "Família",
    title: "O Que é Alienação Parental e Como Comprovar?",
    h1: "O Que é Alienação Parental e Como Comprovar?",
    excerpt:
      "Entenda o que caracteriza alienação parental segundo a Lei nº 12.318/2010, exemplos de condutas e como reunir provas para uma ação judicial.",
    cover: blogAlienacaoParentalOQueEComoProvar,
    metaTitle: "O Que é Alienação Parental e Como Comprovar? | Advogada Flávia Vaz Rabello",
    metaDescription:
      "Entenda o que caracteriza alienação parental segundo a Lei nº 12.318/2010, exemplos de condutas e como reunir provas para uma ação judicial.",
    canonical: "https://www.flaviavazrabello.com.br/blog/alienacao-parental-o-que-e-como-provar",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Alienação parental é crime no Brasil?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No Brasil, a alienação parental não é considerada crime — não gera pena de reclusão nem antecedentes criminais —, mas é uma prática ilícita. Regida pela Lei nº 12.318/2010, é classificada como uma forma de abuso moral e violência psicológica contra a criança. Pode ser considerada crime se envolver acusação falsa contra o genitor, situação agravada se houver difamação, calúnia ou injúria."
            }
          },
          {
            "@type": "Question",
            "name": "Denúncia falsa de abuso pode ser considerada alienação?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, a denúncia falsa de abuso é considerada uma das formas mais graves de alienação parental previstas expressamente na legislação brasileira. De acordo com o artigo 2º, inciso VI, da Lei nº 12.318/2010, \"apresentar falsa denúncia contra genitor, contra familiares deste ou contra avós, para obstar ou dificultar a convivência deles com a criança ou adolescente\" configura formalmente o ato alienador."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://www.flaviavazrabello.com.br/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.flaviavazrabello.com.br/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "O Que é Alienação Parental e Como Comprovar?",
            "item": "https://www.flaviavazrabello.com.br/blog/alienacao-parental-o-que-e-como-provar"
          }
        ]
      }
    ],
    content: (
      <>
        <h2>O que caracteriza alienação parental segundo a lei</h2>
        <p>A Lei nº 12.318/2010 define alienação parental como a interferência na formação psicológica da criança ou do adolescente promovida por um dos genitores, pelos avós ou por quem tenha a criança sob autoridade, guarda ou vigilância, com o objetivo de fazer com que ela repudie o outro genitor ou tenha prejudicado o vínculo com ele, sem motivo legítimo para isso.</p>
        <p>É importante frisar o "sem motivo legítimo": afastamento justificado por risco real (violência, negligência comprovada) não é alienação parental, é proteção.</p>
        <h2>Exemplos de condutas que podem caracterizar alienação</h2>
        <p>Entre as condutas exemplificadas na própria lei estão: dificultar o exercício da autoridade parental do outro genitor, dificultar o contato do filho com o outro genitor ou com a família dele, omitir deliberadamente informações relevantes sobre a criança, e apresentar falsa denúncia contra o genitor especificamente para dificultar ou impedir a convivência.</p>
        <h2>Como reunir provas de forma consistente</h2>
        <p>Mensagens, e-mails, testemunhas que presenciaram as condutas relatadas e registros de tentativas frustradas de contato ajudam a formar o conjunto probatório inicial. Na maioria dos casos, porém, o elemento central e mais decisivo da prova é a perícia psicológica ou biopsicossocial determinada pelo próprio juiz, conduzida por profissional especializado e imparcial.</p>
        <h2>O que o juiz pode determinar quando a alienação é comprovada</h2>
        <p>Comprovada a alienação, a lei prevê um rol de medidas que podem ser aplicadas de forma gradual e proporcional à gravidade — começando por advertência formal ao genitor alienador, passando por acompanhamento psicológico da família, ampliação forçada da convivência com o genitor alienado e, em casos mais graves e persistentes, inversão da guarda.</p>
        <h2>A diferença entre alienação parental e proteção legítima</h2>
        <p>Nem todo afastamento de um genitor é alienação. Quando existe risco real e comprovável — violência doméstica, abuso, negligência grave —, o afastamento do filho é proteção, não alienação, e denunciar esse risco às autoridades competentes é uma obrigação, não uma falta.</p>
        <div className="mt-10 p-6 md:p-8 bg-secondary/40 border border-border">
        <p className="text-foreground/85 leading-relaxed">Suspeita que está vivendo uma situação de alienação parental, ou foi acusado injustamente? A Dra. Flávia Vaz Rabello atua com estratégia e sensibilidade para proteger o vínculo entre pais e filhos. Agende sua consulta online (atendimento em todo o Brasil) ou presencial em Indaiatuba/SP.</p>
        <a href="https://wa.me/5519997439157" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors">Agendar Consulta</a>
        </div>
      </>
    ),
  },
  {
    slug: "assedio-moral-no-trabalho-o-que-fazer",
    category: "Trabalhista",
    title: "Assédio Moral no Trabalho: O Que Fazer?",
    h1: "Assédio Moral no Trabalho: O Que Fazer?",
    excerpt:
      "Entenda o que caracteriza assédio moral no ambiente de trabalho, como reunir provas e quais medidas o trabalhador pode tomar.",
    cover: blogAssedioMoralNoTrabalhoOQueFazer,
    metaTitle: "Assédio Moral no Trabalho: O Que Fazer? | Advogada Flávia Vaz Rabello",
    metaDescription:
      "Entenda o que caracteriza assédio moral no ambiente de trabalho, como reunir provas e quais medidas o trabalhador pode tomar.",
    canonical: "https://www.flaviavazrabello.com.br/blog/assedio-moral-no-trabalho-o-que-fazer",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Denunciar assédio moral pode gerar demissão por retaliação?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A retaliação por uma denúncia legítima pode, ela própria, ser objeto de questionamento judicial — mas a situação deve ser avaliada com orientação jurídica desde o início, para reunir provas de forma adequada."
            }
          },
          {
            "@type": "Question",
            "name": "Assédio moral é diferente de assédio sexual no ambiente de trabalho?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. O assédio sexual envolve conotação sexual explícita ou implícita e tem tratamento jurídico próprio, inclusive criminal, enquanto o assédio moral se relaciona à humilhação e degradação continuada das condições de trabalho, sem necessariamente ter natureza sexual."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://www.flaviavazrabello.com.br/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.flaviavazrabello.com.br/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Assédio Moral no Trabalho: O Que Fazer?",
            "item": "https://www.flaviavazrabello.com.br/blog/assedio-moral-no-trabalho-o-que-fazer"
          }
        ]
      }
    ],
    content: (
      <>
        <h2>O que realmente caracteriza assédio moral</h2>
        <p>A caracterização jurídica exige repetição e prolongamento no tempo — um episódio isolado, por mais desagradável que tenha sido, tende a não configurar assédio moral no sentido jurídico. Costuma envolver humilhações públicas recorrentes, isolamento proposital do trabalhador, sobrecarga de trabalho claramente injustificada, ou desqualificação constante das capacidades do trabalhador, de forma sistemática.</p>
        <h2>Como reunir provas de forma consistente</h2>
        <p>Mensagens, e-mails, testemunhas que presenciaram diretamente as situações relatadas, laudos médicos ou psicológicos relacionados ao impacto na saúde do trabalhador, e gravações — observados os limites legais — ajudam a formar o conjunto probatório necessário. Manter um registro cronológico próprio, com datas, fortalece muito a prova ao longo do tempo.</p>
        <h2>Rescisão indireta: quando o trabalhador pode encerrar o contrato</h2>
        <p>Em casos graves e devidamente comprovados, o trabalhador pode pedir a rescisão indireta do contrato — juridicamente equivalente, para efeito de todos os direitos rescisórios, a uma demissão sem justa causa promovida pelo empregador —, com base no descumprimento grave de obrigações contratuais pelo empregador.</p>
        <h2>Indenização por danos morais</h2>
        <p>Comprovado o assédio, é possível pedir indenização por danos morais na Justiça do Trabalho, cujo valor é fixado pelo juiz considerando a gravidade da conduta, sua repetição ao longo do tempo, a posição hierárquica de quem praticou o assédio, e o impacto concreto sofrido pelo trabalhador, inclusive na sua saúde.</p>
        <h2>Diferença entre cobrança dura e assédio moral</h2>
        <p>É importante distinguir cobrança legítima de resultados — ainda que firme ou incômoda — de assédio moral propriamente dito. Metas desafiadoras e feedback direto fazem parte da relação de trabalho normal. O que caracteriza assédio é o padrão de humilhação e a desproporção entre a conduta e qualquer justificativa profissional legítima.</p>
        <div className="mt-10 p-6 md:p-8 bg-secondary/40 border border-border">
        <p className="text-foreground/85 leading-relaxed">Está passando por uma situação de assédio moral no trabalho e não sabe como agir? A Dra. Flávia Vaz Rabello orienta sobre como reunir provas e quais medidas cabem ao seu caso. Agende sua consulta online (atendimento em todo o Brasil) ou presencial em Indaiatuba/SP.</p>
        <a href="https://wa.me/5519997439157" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors">Agendar Consulta</a>
        </div>
      </>
    ),
  },
  {
    slug: "compra-cancelada-loja-nao-devolveu-dinheiro",
    category: "Consumidor",
    title: "Compra Cancelada e a Loja Não Devolveu o Dinheiro: O Que Fazer?",
    h1: "Compra Cancelada e a Loja Não Devolveu o Dinheiro: O Que Fazer?",
    excerpt:
      "Saiba o prazo legal para devolução do dinheiro em compras canceladas e quais medidas tomar quando a loja não cumpre esse prazo.",
    cover: blogCompraCanceladaLojaNaoDevolveuDinheiro,
    metaTitle: "Compra Cancelada e Loja Não Devolveu o Dinheiro | Advogada Flávia Vaz Rabello",
    metaDescription:
      "Saiba o prazo legal para devolução do dinheiro em compras canceladas e quais medidas tomar quando a loja não cumpre esse prazo.",
    canonical: "https://www.flaviavazrabello.com.br/blog/compra-cancelada-loja-nao-devolveu-dinheiro",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "A loja pode cobrar alguma taxa de cancelamento dentro do direito de arrependimento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não. No exercício regular do direito de arrependimento dentro do prazo legal, não cabe cobrança de taxas ou penalidades ao consumidor, incluindo os custos de frete de devolução."
            }
          },
          {
            "@type": "Question",
            "name": "O direito de arrependimento de 7 dias vale também para compra em loja física?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Em regra, não. Aplica-se especificamente a compras feitas fora do estabelecimento comercial (internet, telefone, domicílio); compras presenciais seguem outras regras."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://www.flaviavazrabello.com.br/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.flaviavazrabello.com.br/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Compra Cancelada e a Loja Não Devolveu o Dinheiro: O Que Fazer?",
            "item": "https://www.flaviavazrabello.com.br/blog/compra-cancelada-loja-nao-devolveu-dinheiro"
          }
        ]
      }
    ],
    content: (
      <>
        <h2>Direito de arrependimento: quando ele existe</h2>
        <p>Em compras realizadas fora do estabelecimento comercial físico — pela internet, por telefone ou em domicílio —, o consumidor tem até 7 dias corridos, contados a partir do recebimento do produto, para desistir da compra, sem necessidade de apresentar qualquer justificativa.</p>
        <h2>Prazo legal para devolução do valor pago</h2>
        <p>Exercido o direito de arrependimento dentro do prazo legal, todos os valores eventualmente pagos devem ser devolvidos de imediato pela loja, sempre monetariamente atualizados — a devolução não pode ficar condicionada a análises ou aprovações internas demoradas.</p>
        <h2>O que fazer quando a loja não devolve dentro do prazo</h2>
        <p>Formalizar a solicitação de cancelamento por escrito é essencial, guardando os comprovantes de cada etapa. Não havendo solução voluntária, é possível registrar reclamação em plataformas de defesa do consumidor (como consumidor.gov.br) e, persistindo o problema, buscar solução por via judicial.</p>
        <h2>Cartão de crédito: estorno x devolução em dinheiro</h2>
        <p>Quando a compra foi feita no cartão de crédito, a devolução costuma ocorrer por estorno na fatura, o que pode levar uma ou mais faturas subsequentes para se refletir integralmente, dependendo dos prazos operacionais da administradora do cartão.</p>
        <h2>Compra cancelada por outros motivos</h2>
        <p>Vale diferenciar o direito de arrependimento (7 dias, sem justificativa) de outras formas de cancelamento — como quando o produto não é entregue no prazo, chega com defeito, ou a própria loja cancela a venda por falta de estoque. Nesses casos, a devolução integral também é devida, com base em outras disposições do Código de Defesa do Consumidor.</p>
        <div className="mt-10 p-6 md:p-8 bg-secondary/40 border border-border">
        <p className="text-foreground/85 leading-relaxed">Cancelou uma compra e a loja não devolveu o valor dentro do prazo? A Dra. Flávia Vaz Rabello orienta sobre como formalizar a cobrança e, se necessário, buscar a via judicial. Agende sua consulta online (atendimento em todo o Brasil) ou presencial em Indaiatuba/SP.</p>
        <a href="https://wa.me/5519997439157" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors">Agendar Consulta</a>
        </div>
      </>
    ),
  },
  {
    slug: "empresa-nao-pagou-horas-extras-o-que-fazer",
    category: "Trabalhista",
    title: "Empresa Não Pagou Horas Extras: O Que Fazer?",
    h1: "Empresa Não Pagou Horas Extras: O Que Fazer?",
    excerpt:
      "Entenda como comprovar horas extras não pagas, qual o adicional legal aplicável e como buscar o pagamento na Justiça do Trabalho.",
    cover: blogEmpresaNaoPagouHorasExtrasOQueFazer,
    metaTitle: "Empresa Não Pagou Horas Extras: O Que Fazer? | Advogada Flávia Vaz Rabello",
    metaDescription:
      "Entenda como comprovar horas extras não pagas, qual o adicional legal aplicável e como buscar o pagamento na Justiça do Trabalho.",
    canonical: "https://www.flaviavazrabello.com.br/blog/empresa-nao-pagou-horas-extras-o-que-fazer",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Trabalho aos finais de semana sempre gera direito a hora extra?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depende inteiramente da jornada contratual e da escala de trabalho estabelecida — o que gera direito ao adicional é o trabalho realizado além da jornada normal contratada, não o dia específico da semana em si."
            }
          },
          {
            "@type": "Question",
            "name": "Existe prazo para entrar com reclamação trabalhista sobre horas extras não pagas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, aplica-se prazo prescricional de até 2 anos após o encerramento do contrato de trabalho para ajuizar a ação, podendo a reclamação alcançar os últimos 5 anos do vínculo."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://www.flaviavazrabello.com.br/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.flaviavazrabello.com.br/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Empresa Não Pagou Horas Extras: O Que Fazer?",
            "item": "https://www.flaviavazrabello.com.br/blog/empresa-nao-pagou-horas-extras-o-que-fazer"
          }
        ]
      }
    ],
    content: (
      <>
        <h2>O que caracteriza tecnicamente hora extra</h2>
        <p>É considerada hora extra o tempo efetivamente trabalhado além da jornada contratual estabelecida, respeitado o limite constitucional de duas horas extras diárias, salvo exceções específicas previstas em lei ou em acordo/convenção coletiva da categoria profissional.</p>
        <h2>O adicional legal mínimo garantido por lei</h2>
        <p>A Constituição Federal garante adicional de, no mínimo, 50% sobre o valor da hora normal de trabalho para o trabalho extraordinário — podendo ser superior se assim previsto em convenção ou acordo coletivo da categoria.</p>
        <h2>Como comprovar as horas extras trabalhadas</h2>
        <p>Registros de ponto — mesmo informais, como planilhas próprias ou aplicativos de controle de horário — mensagens trocadas com superiores hierárquicos sobre horários, testemunhas que presenciaram a jornada real praticada, e até e-mails com horário de envio registrado podem servir como prova relevante em uma reclamação trabalhista.</p>
        <h2>Banco de horas: como funciona a compensação</h2>
        <p>Quando existe acordo formal de banco de horas, as horas extras podem ser compensadas com folgas em vez de pagamento direto, desde que observadas rigorosamente as regras legais sobre o prazo máximo de compensação. O descumprimento dessas regras pode gerar direito ao pagamento das horas não compensadas corretamente.</p>
        <h2>Horas extras habituais e seu reflexo em outras verbas</h2>
        <p>Horas extras pagas com habitualidade ao longo do contrato de trabalho se refletem no cálculo de outras verbas, como 13º salário, férias e FGTS, aumentando a base de cálculo dessas verbas proporcionalmente. Isso significa que o não pagamento de horas extras gera uma cadeia de valores não recebidos que vai além do valor "simples" das horas em si.</p>
        <div className="mt-10 p-6 md:p-8 bg-secondary/40 border border-border">
        <p className="text-foreground/85 leading-relaxed">A sua empresa não paga corretamente as horas extras trabalhadas? A Dra. Flávia Vaz Rabello analisa sua jornada e orienta sobre como comprovar e reivindicar os valores devidos. Agende sua consulta online (atendimento em todo o Brasil) ou presencial em Indaiatuba/SP.</p>
        <a href="https://wa.me/5519997439157" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors">Agendar Consulta</a>
        </div>
      </>
    ),
  },
  {
    slug: "nome-sujo-indevidamente-o-que-fazer",
    category: "Bancário",
    title: "Nome Sujo Indevidamente: O Que Fazer?",
    h1: "Nome Sujo Indevidamente: O Que Fazer?",
    excerpt:
      "Saiba o que fazer quando seu nome é negativado indevidamente nos órgãos de proteção ao crédito e quais medidas legais são cabíveis.",
    cover: blogNomeSujoIndevidamenteOQueFazer,
    metaTitle: "Nome Sujo Indevidamente: O Que Fazer? | Advogada Flávia Vaz Rabello",
    metaDescription:
      "Saiba o que fazer quando seu nome é negativado indevidamente nos órgãos de proteção ao crédito e quais medidas legais são cabíveis.",
    canonical: "https://www.flaviavazrabello.com.br/blog/nome-sujo-indevidamente-o-que-fazer",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Recebi cobrança de dívida que não reconheço — o que fazer primeiro?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O recomendável é reunir todos os documentos que comprovem a inexistência da relação ou da dívida e buscar orientação jurídica para avaliar a melhor medida, extrajudicial ou judicial, conforme a resposta obtida."
            }
          },
          {
            "@type": "Question",
            "name": "A empresa tem prazo legal para retirar a negativação depois que eu pago a dívida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, a lei prevê prazo para baixa do registro após a quitação da dívida, e o descumprimento desse prazo pode gerar responsabilização do credor."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://www.flaviavazrabello.com.br/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.flaviavazrabello.com.br/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Nome Sujo Indevidamente: O Que Fazer?",
            "item": "https://www.flaviavazrabello.com.br/blog/nome-sujo-indevidamente-o-que-fazer"
          }
        ]
      }
    ],
    content: (
      <>
        <h2>Identifique a origem exata da negativação</h2>
        <p>O primeiro passo prático é identificar junto aos órgãos de proteção ao crédito (SPC, Serasa) qual é a origem exata da negativação — qual credor a incluiu, o valor exato apontado e a data —, o que ajuda a confirmar se a dívida realmente existe, se já foi paga anteriormente, ou se de fato não corresponde a nenhuma relação sua com aquele credor.</p>
        <h2>A notificação prévia é obrigatória por lei</h2>
        <p>A lei exige que o consumidor seja notificado previamente, por correspondência, antes da inclusão de seu nome em cadastros de inadimplentes. A ausência dessa notificação prévia, por si só, já é motivo consistente para questionar judicialmente a negativação, independentemente de a dívida em si ser real ou não.</p>
        <h2>Negativação mantida mesmo após o pagamento</h2>
        <p>Quando a dívida já foi quitada mas o nome permanece negativado, ou quando a baixa do registro não é feita dentro do prazo legal após o pagamento, também é possível buscar reparação — já que a manutenção indevida do registro configura falha do credor.</p>
        <h2>Reparação por danos morais</h2>
        <p>A jurisprudência brasileira consolidada reconhece, em diversas situações de negativação claramente indevida, que ela gera dano moral presumido, o que dispensa a necessidade de provar prejuízo financeiro ou emocional específico, bastando demonstrar a irregularidade da negativação em si para pedir indenização judicialmente.</p>
        <h2>Negativação por fraude: quando a dívida não é sua</h2>
        <p>Um cenário cada vez mais comum é a negativação por fraude — alguém abriu uma conta ou fez uma compra em seu nome, usando seus dados sem autorização. Nesses casos, além do questionamento judicial da própria negativação, vale registrar boletim de ocorrência, o que fortalece a prova de que você não é a pessoa responsável pela dívida original.</p>
        <div className="mt-10 p-6 md:p-8 bg-secondary/40 border border-border">
        <p className="text-foreground/85 leading-relaxed">Teve o nome negativado indevidamente e não sabe como resolver? A Dra. Flávia Vaz Rabello analisa seu caso e orienta sobre o caminho mais adequado para limpar seu nome e, quando cabível, buscar reparação. Agende sua consulta online (atendimento em todo o Brasil) ou presencial em Indaiatuba/SP.</p>
        <a href="https://wa.me/5519997439157" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors">Agendar Consulta</a>
        </div>
      </>
    ),
  },
  {
    slug: "pensao-alimenticia-como-e-calculado-o-valor",
    category: "Família",
    title: "Pensão Alimentícia: Como é Calculado o Valor?",
    h1: "Pensão Alimentícia: Como é Calculado o Valor?",
    excerpt:
      "Entenda os critérios usados para calcular o valor da pensão alimentícia, o binômio necessidade-possibilidade e quais verbas salariais entram no cálculo.",
    cover: blogPensaoAlimenticiaComoECalculadoOValor,
    metaTitle: "Pensão Alimentícia: Como é Calculado o Valor? | Advogada Flávia Vaz Rabello",
    metaDescription:
      "Entenda os critérios usados para calcular o valor da pensão alimentícia, o binômio necessidade-possibilidade e quais verbas salariais entram no cálculo.",
    canonical: "https://www.flaviavazrabello.com.br/blog/pensao-alimenticia-como-e-calculado-o-valor",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Pensão alimentícia tem valor mínimo obrigatório?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não existe um valor mínimo fixado em lei. O valor é sempre definido conforme a análise das necessidades da criança e da capacidade financeira de quem paga, caso a caso."
            }
          },
          {
            "@type": "Question",
            "name": "13º salário e férias entram no cálculo da pensão?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, entram no cálculo. Só não entram os descontos de INSS, IRPF, FGTS, a multa rescisória de 40%, o vale refeição/alimentação e o aviso prévio indenizado."
            }
          },
          {
            "@type": "Question",
            "name": "Quais verbas salariais entram na pensão alimentícia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Entram no valor da pensão: salário base, horas extras, décimo terceiro, adicionais (noturno, periculosidade, insalubridade, transferência), terço constitucional de férias, comissões, gratificações habituais e PLR."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://www.flaviavazrabello.com.br/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.flaviavazrabello.com.br/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Pensão Alimentícia: Como é Calculado o Valor?",
            "item": "https://www.flaviavazrabello.com.br/blog/pensao-alimenticia-como-e-calculado-o-valor"
          }
        ]
      }
    ],
    content: (
      <>
        <h2>Como funciona o binômio necessidade-possibilidade</h2>
        <p>A lei brasileira não estabelece um percentual fixo sobre a renda para o cálculo da pensão alimentícia — essa é, de longe, a maior fonte de confusão sobre o tema. O juiz avalia, de um lado, as necessidades reais do alimentando (a criança, na maioria dos casos) — moradia, educação, saúde, alimentação, lazer compatível com o padrão de vida que a família tinha antes da separação — e, de outro lado, os rendimentos e o patrimônio de quem deve pagar a pensão, incluindo não só o salário formal mas também outras fontes de renda comprovadas.</p>
        <h2>Por que percentuais como 30% da renda não são regra</h2>
        <p>É muito comum ouvir falar em percentuais de referência, como 20% ou 30% da renda líquida por filho, mas eles funcionam apenas como parâmetro prático usado informalmente por alguns juízes e advogados — não como regra legal escrita em lei. O valor final sempre depende da análise concreta das necessidades específicas daquela criança e da capacidade de pagamento efetivamente demonstrada no caso.</p>
        <h2>O que entra no cálculo das necessidades da criança</h2>
        <p>Costumam ser consideradas despesas com escola (incluindo material e uniforme), plano de saúde, medicamentos e tratamentos médicos, atividades extracurriculares, vestuário, transporte e moradia, entre outras, sempre proporcionais à idade da criança e à realidade financeira que a família tinha antes da separação.</p>
        <h2>Quais verbas salariais entram no cálculo</h2>
        <p>Entram no valor da pensão: salário base, horas extras, décimo terceiro, adicionais (noturno, periculosidade, insalubridade, transferência), terço constitucional de férias, comissões, gratificações habituais e PLR. Já os descontos de INSS, IRPF, FGTS, a multa rescisória de 40%, o vale refeição/alimentação e o aviso prévio indenizado não entram na base de cálculo.</p>
        <h2>Quando o valor pode ser revisado</h2>
        <p>Tanto quem paga quanto quem recebe a pensão pode pedir revisão do valor sempre que houver mudança relevante na situação financeira de qualquer uma das partes — perda de emprego, aumento significativo de renda, novo filho a sustentar — ou nas necessidades do alimentando. Isso se faz por meio de uma ação revisional própria, não basta um pedido informal.</p>
        <h2>Pensão para além dos 18 anos</h2>
        <p>Um ponto que gera muita dúvida: a pensão alimentícia não cessa automaticamente ao completar 18 anos. Se o filho está cursando ensino superior ou tem alguma condição que justifique a continuidade da dependência, a obrigação pode se estender — mas ela não é presumida: normalmente exige que o próprio filho, agora maior de idade, ajuíze ou mantenha a ação em seu nome.</p>
        <div className="mt-10 p-6 md:p-8 bg-secondary/40 border border-border">
        <p className="text-foreground/85 leading-relaxed">Tem dúvidas sobre como a pensão alimentícia do seu filho é calculada, ou precisa pedir revisão de um valor já fixado? A Dra. Flávia Vaz Rabello atua com atenção técnica e humana para garantir que o valor reflita corretamente a necessidade da criança e a capacidade de quem paga. Agende sua consulta online (atendimento em todo o Brasil) ou presencial em Indaiatuba/SP.</p>
        <a href="https://wa.me/5519997439157" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors">Agendar Consulta</a>
        </div>
      </>
    ),
  },
  {
    slug: "produto-com-defeito-quais-sao-meus-direitos",
    category: "Consumidor",
    title: "Produto com Defeito: Quais São os Meus Direitos?",
    h1: "Produto com Defeito: Quais São os Meus Direitos?",
    excerpt:
      "Entenda os prazos e opções do consumidor diante de um produto com defeito: reparo, troca, devolução do dinheiro ou abatimento no preço.",
    cover: blogProdutoComDefeitoQuaisSaoMeusDireitos,
    metaTitle: "Produto com Defeito: Quais São os Meus Direitos? | Advogada Flávia Vaz Rabello",
    metaDescription:
      "Entenda os prazos e opções do consumidor diante de um produto com defeito: reparo, troca, devolução do dinheiro ou abatimento no preço.",
    canonical: "https://www.flaviavazrabello.com.br/blog/produto-com-defeito-quais-sao-meus-direitos",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "A loja pode se recusar a trocar um produto com defeito comprovado?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não, respeitados os prazos legais para reparo, a recusa em cumprir uma das opções previstas em lei — reparo, troca, devolução ou abatimento — configura descumprimento direto do Código de Defesa do Consumidor."
            }
          },
          {
            "@type": "Question",
            "name": "Perdi a nota fiscal do produto — ainda tenho direito de reclamar do defeito?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, a nota fiscal ajuda a comprovar a compra, mas outros meios de prova também são aceitos, como comprovante de pagamento no cartão ou e-mail de confirmação da compra."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://www.flaviavazrabello.com.br/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.flaviavazrabello.com.br/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Produto com Defeito: Quais São os Meus Direitos?",
            "item": "https://www.flaviavazrabello.com.br/blog/produto-com-defeito-quais-sao-meus-direitos"
          }
        ]
      }
    ],
    content: (
      <>
        <h2>Prazo para o fornecedor sanar o defeito</h2>
        <p>A lei garante ao fornecedor um prazo de até 30 dias corridos para reparar o vício do produto, contado a partir do momento em que o consumidor formaliza a reclamação — salvo se as próprias partes acordarem prazo diferente, respeitando o limite legal de negociação.</p>
        <h2>O que fazer se o defeito não for resolvido dentro do prazo</h2>
        <p>Esgotado o prazo de 30 dias sem solução, o consumidor pode escolher, a seu critério, entre três alternativas: substituição do produto por outro da mesma espécie em perfeitas condições, restituição da quantia paga devidamente atualizada, ou abatimento proporcional do preço.</p>
        <h2>Defeitos que colocam em risco a segurança</h2>
        <p>Quando o defeito é considerado essencial ao funcionamento do produto ou compromete diretamente sua segurança de uso, o consumidor pode exigir a substituição imediata, sem necessidade de aguardar o prazo padrão de 30 dias para reparo.</p>
        <h2>Diferença entre vício do produto e defeito de segurança</h2>
        <p>Vício do produto se refere a problemas de qualidade que o tornam impróprio ao uso a que se destina. Já o defeito relacionado à segurança ("fato do produto") pode gerar, além da troca ou devolução, responsabilização adicional do fornecedor por eventuais danos causados ao consumidor.</p>
        <h2>Garantia legal x garantia contratual (estendida)</h2>
        <p>A garantia legal (30 dias para produtos não duráveis, 90 dias para duráveis) é obrigatória por lei e não pode ser suprimida. Já a garantia contratual, oferecida voluntariamente pelo fabricante ou vendedor, é adicional e complementa a legal, nunca a substitui.</p>
        <div className="mt-10 p-6 md:p-8 bg-secondary/40 border border-border">
        <p className="text-foreground/85 leading-relaxed">Comprou um produto com defeito e a loja não resolveu dentro do prazo? A Dra. Flávia Vaz Rabello orienta sobre seus direitos como consumidor e o melhor caminho para resolver. Agende sua consulta online (atendimento em todo o Brasil) ou presencial em Indaiatuba/SP.</p>
        <a href="https://wa.me/5519997439157" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors">Agendar Consulta</a>
        </div>
      </>
    ),
  },
  {
    slug: "revisao-contrato-financiamento-veiculo",
    category: "Bancário",
    title: "Posso Revisar Contrato de Financiamento de Veículo?",
    h1: "Posso Revisar Contrato de Financiamento de Veículo?",
    excerpt:
      "Entenda em quais situações é possível pedir revisão judicial de contrato de financiamento de veículo e quais cláusulas costumam ser questionadas.",
    cover: blogRevisaoContratoFinanciamentoVeiculo,
    metaTitle: "Posso Revisar Contrato de Financiamento de Veículo? | Advogada Flávia Vaz Rabello",
    metaDescription:
      "Entenda em quais situações é possível pedir revisão judicial de contrato de financiamento de veículo e quais cláusulas costumam ser questionadas.",
    canonical: "https://www.flaviavazrabello.com.br/blog/revisao-contrato-financiamento-veiculo",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Revisar o contrato impede a busca e apreensão do veículo em caso de atraso?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não automaticamente. É possível, dependendo da situação e do estágio do processo, pedir a suspensão da ação de busca e apreensão mediante depósito do valor considerado devido, mas essa é sempre uma análise específica de cada caso."
            }
          },
          {
            "@type": "Question",
            "name": "Um financiamento de veículo já quitado pode ser revisado depois?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, é possível buscar a revisão de contratos já quitados dentro do prazo prescricional aplicável, com pedido de restituição dos valores pagos a maior ao longo de todo o contrato."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://www.flaviavazrabello.com.br/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.flaviavazrabello.com.br/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Posso Revisar Contrato de Financiamento de Veículo?",
            "item": "https://www.flaviavazrabello.com.br/blog/revisao-contrato-financiamento-veiculo"
          }
        ]
      }
    ],
    content: (
      <>
        <h2>Cláusulas mais comumente questionadas</h2>
        <p>Entre os pontos mais frequentemente revisados judicialmente em financiamentos de veículo estão: a taxa de juros remuneratórios muito acima da média de mercado, a capitalização de juros em periodicidade não claramente informada, tarifas de cadastro e de avaliação do bem cobradas sem informação prévia clara, e a chamada venda casada — a obrigação de contratar seguro ou outros produtos junto ao financiamento.</p>
        <h2>Como identificar possível abusividade</h2>
        <p>Comparar a taxa de juros contratada com a taxa média divulgada publicamente pelo Banco Central para financiamento de veículos é um bom primeiro passo, gratuito e acessível, assim como revisar com atenção todas as tarifas e encargos listados no contrato original.</p>
        <h2>O que pode ser pedido em uma ação revisional</h2>
        <p>Além do recálculo do saldo devedor com base em taxas consideradas adequadas ao mercado, é possível pedir a restituição de valores já pagos indevidamente ao longo do contrato, a exclusão de tarifas questionadas e, quando cabível, a readequação das parcelas ainda não pagas.</p>
        <h2>Financiamento com alienação fiduciária: atenção redobrada</h2>
        <p>No financiamento com alienação fiduciária, o bem permanece formalmente em garantia do banco até a quitação total, e o atraso no pagamento pode levar à ação de busca e apreensão do veículo. Por isso, discutir judicialmente eventuais cláusulas abusivas é especialmente recomendável antes que a inadimplência se agrave.</p>
        <h2>Financiamento já quitado antecipadamente</h2>
        <p>Na quitação antecipada, além de verificar se o cálculo aplicou corretamente o desconto proporcional de juros futuros — um direito do consumidor frequentemente ignorado —, ainda é possível, dentro do prazo prescricional, questionar cláusulas abusivas do contrato original mesmo depois de quitado.</p>
        <div className="mt-10 p-6 md:p-8 bg-secondary/40 border border-border">
        <p className="text-foreground/85 leading-relaxed">Desconfia de cláusulas abusivas no seu contrato de financiamento de veículo? A Dra. Flávia Vaz Rabello analisa seu contrato e orienta sobre a viabilidade de uma revisão judicial. Agende sua consulta online (atendimento em todo o Brasil) ou presencial em Indaiatuba/SP.</p>
        <a href="https://wa.me/5519997439157" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors">Agendar Consulta</a>
        </div>
      </>
    ),
  },
];

export const getPostBySlug = (slug: string) =>
  BLOG_POSTS.find((p) => p.slug === slug);