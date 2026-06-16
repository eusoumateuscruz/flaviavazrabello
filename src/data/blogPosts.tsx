import type { ReactNode } from "react";

export type BlogPost = {
  slug: string;
  category: "Família" | "Bancário" | "Trabalhista" | "Geral";
  title: string;
  h1: string;
  excerpt: string;
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
      atende em Indaiatuba e em todo o Brasil de forma online. Agende sua consulta
      agora e dê o primeiro passo com segurança jurídica e acolhimento.
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
    slug: "demissao-sem-justa-causa-direitos",
    category: "Trabalhista",
    title: "Fui Demitido Sem Justa Causa: Quais São Meus Direitos?",
    h1: "Fui Demitido Sem Justa Causa: Quais São Meus Direitos?",
    excerpt:
      "FGTS, aviso prévio, 13º, seguro-desemprego e multa de 40%: entenda todas as verbas devidas e os prazos para reclamar na Justiça.",
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
            rescisão e garante que você receba tudo o que tem direito. Atendimento em Indaiatuba
            e online em todo o Brasil.
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
            proteger seus direitos. Atendimento em Indaiatuba e online em todo o Brasil.
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
    title: "Divórcio Consensual em Indaiatuba: o que você precisa saber antes de começar",
    h1: "Divórcio Consensual em Indaiatuba: o que você precisa saber antes de começar",
    excerpt:
      "Entenda como funciona o divórcio consensual, documentos necessários, prazos e quando a presença da advogada é obrigatória.",
    metaTitle: "Divórcio Consensual em Indaiatuba | Advogada Flávia Vaz Rabello",
    metaDescription:
      "Entenda como funciona o divórcio consensual em Indaiatuba, quais são os documentos necessários, quanto tempo leva e quando é obrigatório ter advogada. Tire suas dúvidas agora.",
    canonical: "https://www.flaviavazrabello.com.br/blog/divorcio-consensual-indaiatuba",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "O que é divórcio consensual?", acceptedAnswer: { "@type": "Answer", text: "É a separação em que ambos os cônjuges concordam com todos os termos — divisão de bens, guarda dos filhos e pensão. É mais rápido e menos custoso que o litigioso." } },
        { "@type": "Question", name: "Quando um dos cônjuges não quer assinar o divórcio, o que fazer?", acceptedAnswer: { "@type": "Answer", text: "Desde 2010, o divórcio é um direito de qualquer cônjuge. Se um não quiser assinar, é possível entrar com divórcio unilateral na Justiça sem o consentimento do outro." } },
        { "@type": "Question", name: "Preciso de advogada para o divórcio consensual em cartório?", acceptedAnswer: { "@type": "Answer", text: "Sim. A presença de advogada é obrigatória em todos os tipos de divórcio, inclusive no extrajudicial em cartório." } },
        { "@type": "Question", name: "Quais são os 3 tipos de divórcio?", acceptedAnswer: { "@type": "Answer", text: "Consensual extrajudicial (cartório), consensual judicial (com filhos menores) e litigioso (sem acordo entre as partes)." } },
        { "@type": "Question", name: "Quanto tempo demora o divórcio consensual em Indaiatuba?", acceptedAnswer: { "@type": "Answer", text: "O divórcio extrajudicial em cartório pode ser concluído em poucos dias. O judicial consensual leva em média 2 a 6 meses." } },
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

        <h2>Quanto custa o divórcio em Indaiatuba?</h2>
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

        <h2>Como dar entrada no divórcio em Indaiatuba?</h2>
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
];

export const getPostBySlug = (slug: string) =>
  BLOG_POSTS.find((p) => p.slug === slug);