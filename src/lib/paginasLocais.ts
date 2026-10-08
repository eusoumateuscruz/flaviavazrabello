/* Páginas locais: "serviço + Indaiatuba". Quem busca "advogada de divórcio em Indaiatuba"
   cai numa página feita para essa busca. Texto informativo, sem promessa de resultado,
   sem preço e sem captação (Provimento 205/2021 da OAB). Cada regra cita a lei. */

export type PaginaLocal = {
  slug: string;
  servico: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  secoes: { titulo: string; texto: string[] }[];
  faq: { pergunta: string; resposta: string }[];
  fontes: { nome: string; url: string }[];
};

export const PAGINAS_LOCAIS: PaginaLocal[] = [
  {
    slug: "advogada-de-divorcio-em-indaiatuba",
    servico: "Divórcio",
    title: "Advogada de Divórcio em Indaiatuba | Flávia Vaz Rabello",
    description:
      "Divórcio consensual e litigioso em Indaiatuba: como funciona em cartório e na Justiça, o que levar e como ficam guarda, pensão e partilha. Dra. Flávia Vaz Rabello, OAB 262057/SP.",
    h1: "Advogada de divórcio em Indaiatuba",
    intro:
      "Divórcio é um momento delicado. Aqui você entende os caminhos possíveis em Indaiatuba, o que muda em cada um e quais documentos separar antes da primeira conversa.",
    secoes: [
      {
        titulo: "Quais são os tipos de divórcio?",
        texto: [
          "Desde a Emenda Constitucional 66/2010, o divórcio não depende de separação prévia nem de prazo mínimo de casamento (Constituição Federal, art. 226, § 6º).",
          "Divórcio consensual: o casal está de acordo sobre o fim do casamento e sobre partilha, pensão e, se houver filhos, guarda e convivência. Pode ser feito em cartório ou na Justiça.",
          "Divórcio litigioso: quando não há acordo em algum ponto. Corre na Vara de Família, que em Indaiatuba fica no Fórum da comarca.",
        ],
      },
      {
        titulo: "Quando dá para fazer o divórcio em cartório?",
        texto: [
          "Com acordo entre o casal e assistência de advogado, o divórcio pode ser feito por escritura pública em cartório de notas (Código de Processo Civil, art. 733).",
          "Quando há filhos menores ou incapazes, as regras dependem de como guarda, convivência e pensão já foram definidas. Cada caso precisa ser avaliado antes de escolher o caminho.",
        ],
      },
      {
        titulo: "O que separar para a primeira conversa",
        texto: [
          "Certidão de casamento atualizada, documentos pessoais do casal, certidão de nascimento dos filhos, documentos dos bens (matrícula de imóveis, documento de veículos, extratos) e a última declaração de imposto de renda, se houver.",
        ],
      },
    ],
    faq: [
      {
        pergunta: "Preciso de advogado para me divorciar em cartório?",
        resposta: "Sim. A escritura de divórcio exige a assistência de advogado ou defensor público (Código de Processo Civil, art. 733, § 2º).",
      },
      {
        pergunta: "Posso me divorciar mesmo que a outra pessoa não queira?",
        resposta: "Sim. O divórcio é um direito de cada cônjuge e não depende da concordância do outro. Sem acordo, o pedido é feito na Justiça.",
      },
      {
        pergunta: "O divórcio decide a guarda e a pensão dos filhos?",
        resposta: "Esses pontos podem ser resolvidos junto com o divórcio, por acordo ou por decisão judicial, sempre olhando o interesse da criança.",
      },
    ],
    fontes: [
      { nome: "Constituição Federal, art. 226", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm" },
      { nome: "Código de Processo Civil, art. 733", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm" },
    ],
  },
  {
    slug: "advogada-de-inventario-em-indaiatuba",
    servico: "Inventário",
    title: "Advogada de Inventário em Indaiatuba | Flávia Vaz Rabello",
    description:
      "Inventário em cartório ou na Justiça em Indaiatuba: prazo de abertura, ITCMD em São Paulo, documentos e partilha. Dra. Flávia Vaz Rabello, OAB 262057/SP.",
    h1: "Advogada de inventário em Indaiatuba",
    intro:
      "Depois da perda de alguém da família, o inventário organiza os bens e as dívidas e faz a partilha entre os herdeiros. Veja como ele funciona e o que observar para evitar multa.",
    secoes: [
      {
        titulo: "Inventário em cartório ou na Justiça?",
        texto: [
          "Quando todos os herdeiros estão de acordo, o inventário pode ser feito por escritura pública em cartório de notas, com advogado (Código de Processo Civil, art. 610, § 1º e § 2º).",
          "Havendo desacordo, testamento ou outra situação que exija o juiz, o inventário corre na Justiça. Cada caso precisa ser avaliado antes de escolher o caminho.",
        ],
      },
      {
        titulo: "Qual é o prazo para abrir o inventário?",
        texto: [
          "O inventário deve ser aberto em até 2 meses da data do falecimento (Código de Processo Civil, art. 611).",
          "Em São Paulo, o atraso aumenta o imposto: multa de 10% sobre o ITCMD se passar de 60 dias e de 20% se passar de 180 dias (Lei estadual 10.705/2000, art. 21).",
        ],
      },
      {
        titulo: "Quanto é o imposto (ITCMD) em São Paulo?",
        texto: [
          "Em São Paulo, a alíquota do ITCMD é de 4% sobre o valor dos bens transmitidos (Lei estadual 10.705/2000, art. 16).",
        ],
      },
      {
        titulo: "O que separar para a primeira conversa",
        texto: [
          "Certidão de óbito, documentos pessoais de quem faleceu e dos herdeiros, certidão de casamento ou de união estável, documentos dos bens (matrículas, veículos, extratos bancários) e informações sobre dívidas.",
        ],
      },
    ],
    faq: [
      {
        pergunta: "Preciso de advogado para fazer inventário em cartório?",
        resposta: "Sim. A escritura de inventário exige que todas as partes estejam assistidas por advogado ou defensor público (Código de Processo Civil, art. 610, § 2º).",
      },
      {
        pergunta: "E se um herdeiro não concordar com a partilha?",
        resposta: "Sem acordo entre todos, o inventário precisa ser feito na Justiça, e o juiz decide os pontos em disputa.",
      },
      {
        pergunta: "Dá para vender um bem antes de terminar o inventário?",
        resposta: "Em regra, os bens só passam para os herdeiros com a partilha. Em alguns casos, é possível pedir autorização judicial para a venda. Vale avaliar a situação concreta.",
      },
    ],
    fontes: [
      { nome: "Código de Processo Civil, arts. 610 e 611", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm" },
      { nome: "Lei estadual SP 10.705/2000 (ITCMD)", url: "https://www.al.sp.gov.br/repositorio/legislacao/lei/2000/lei-10705-28.12.2000.html" },
    ],
  },
  {
    slug: "advogada-de-pensao-alimenticia-em-indaiatuba",
    servico: "Pensão alimentícia",
    title: "Advogada de Pensão Alimentícia em Indaiatuba | Flávia Vaz Rabello",
    description:
      "Pedido, revisão e cobrança de pensão alimentícia em Indaiatuba: como o valor é definido, alimentos provisórios e o que fazer quando a pensão atrasa. Dra. Flávia Vaz Rabello, OAB 262057/SP.",
    h1: "Advogada de pensão alimentícia em Indaiatuba",
    intro:
      "A pensão alimentícia garante o sustento de quem não consegue se manter sozinho, como filhos menores. Veja como o valor é definido e o que fazer para pedir, revisar ou cobrar.",
    secoes: [
      {
        titulo: "Como o valor da pensão é definido?",
        texto: [
          "A lei não fixa um percentual. O valor considera a necessidade de quem recebe e a possibilidade de quem paga (Código Civil, art. 1.694, § 1º).",
          "O pedido segue a Lei de Alimentos (Lei 5.478/1968), que permite ao juiz fixar alimentos provisórios logo no início do processo (art. 4º).",
        ],
      },
      {
        titulo: "Dá para mudar o valor depois?",
        texto: [
          "Sim. Se a situação de quem paga ou de quem recebe mudar, é possível pedir a revisão, para aumentar ou diminuir, ou até a exoneração (Código Civil, art. 1.699).",
        ],
      },
      {
        titulo: "O que fazer quando a pensão atrasa?",
        texto: [
          "A cobrança pode ser feita na Justiça. Para as 3 últimas parcelas vencidas antes do pedido e as que vencerem no processo, a lei permite pedir a prisão civil de quem deve, de 1 a 3 meses (Código de Processo Civil, art. 528, § 3º e § 7º).",
          "Para parcelas mais antigas, a cobrança segue pelo caminho da penhora de bens e valores.",
        ],
      },
    ],
    faq: [
      {
        pergunta: "Existe um percentual fixo de 30% do salário?",
        resposta: "Não. O percentual de 30% é um mito comum. O valor depende da necessidade de quem recebe e da possibilidade de quem paga, caso a caso.",
      },
      {
        pergunta: "Até quando o filho recebe pensão?",
        resposta: "A maioridade não encerra a pensão automaticamente. O fim precisa ser pedido e decidido pelo juiz, que avalia, por exemplo, se o filho ainda estuda.",
      },
      {
        pergunta: "Avós podem ser chamados a pagar pensão?",
        resposta: "Sim, de forma complementar, quando os pais não conseguem pagar o suficiente (Código Civil, art. 1.696).",
      },
    ],
    fontes: [
      { nome: "Código Civil, arts. 1.694 a 1.699", url: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" },
      { nome: "Lei de Alimentos (Lei 5.478/1968)", url: "https://www.planalto.gov.br/ccivil_03/leis/l5478.htm" },
      { nome: "Código de Processo Civil, art. 528", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm" },
    ],
  },
];
