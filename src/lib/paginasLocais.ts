/* Páginas locais: "serviço + Indaiatuba". Quem busca "advogada de divórcio em Indaiatuba"
   cai numa página feita para essa busca. Texto informativo, sem promessa de resultado,
   sem preço e sem captação (Provimento 205/2021 da OAB). Cada regra cita a lei. */

export type PaginaLocal = {
  slug: string;
  servico: string;
  /** id da área em PRACTICE_AREAS (familia, trabalhista...); padrão: familia */
  area?: string;
  areaNome?: string;
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
  {
    slug: "advogada-trabalhista-em-indaiatuba",
    servico: "Direito do Trabalho",
    area: "trabalhista",
    areaNome: "Direito do Trabalho",
    title: "Advogada Trabalhista em Indaiatuba | Flávia Vaz Rabello",
    description:
      "Rescisão, verbas não pagas, horas extras, FGTS e rescisão indireta em Indaiatuba: prazos para entrar com a ação e documentos para separar. Dra. Flávia Vaz Rabello, OAB 262057/SP.",
    h1: "Advogada trabalhista em Indaiatuba",
    intro:
      "Foi demitido, saiu da empresa ou está com algum direito em atraso? Veja os prazos que a lei dá para cobrar, os direitos mais comuns e o que separar antes da primeira conversa.",
    secoes: [
      {
        titulo: "Qual é o prazo para entrar com a ação trabalhista?",
        texto: [
          "A ação deve ser proposta em até 2 anos depois do fim do contrato de trabalho, e nela é possível cobrar os direitos dos últimos 5 anos (Constituição Federal, art. 7º, XXIX).",
          "Passados os 2 anos, o direito de cobrar se perde. Por isso, vale procurar orientação logo depois da saída da empresa.",
        ],
      },
      {
        titulo: "Em quanto tempo a empresa deve pagar a rescisão?",
        texto: [
          "As verbas rescisórias devem ser pagas em até 10 dias contados do fim do contrato (CLT, art. 477, § 6º). O atraso gera multa de um salário a favor do trabalhador (CLT, art. 477, § 8º).",
          "Na demissão sem justa causa, a empresa também deposita a indenização de 40% sobre o saldo do FGTS (Lei 8.036/1990, art. 18, § 1º).",
        ],
      },
      {
        titulo: "Quais são os direitos que mais aparecem?",
        texto: [
          "Horas extras não pagas, intervalo de almoço não concedido, verbas rescisórias em atraso, FGTS não depositado, adicional de insalubridade ou periculosidade e reconhecimento de vínculo de quem trabalhou sem carteira assinada.",
          "Quando a empresa descumpre obrigações graves, como atrasar salários ou deixar de depositar o FGTS, o trabalhador pode pedir a rescisão indireta, que funciona como uma demissão sem justa causa (CLT, art. 483).",
        ],
      },
      {
        titulo: "O que separar para a primeira conversa",
        texto: [
          "Carteira de trabalho (física ou digital), contrato, holerites, termo de rescisão (TRCT), extrato do FGTS (aplicativo FGTS), controles de ponto, se tiver, e mensagens ou e-mails sobre jornada e pagamentos.",
        ],
      },
    ],
    faq: [
      {
        pergunta: "Posso entrar com ação trabalhista ainda trabalhando na empresa?",
        resposta: "Sim. A ação pode ser proposta durante o contrato. Os 2 anos de prazo só começam a contar depois que o contrato termina (Constituição Federal, art. 7º, XXIX).",
      },
      {
        pergunta: "Como vejo se o FGTS foi depositado?",
        resposta: "Pelo aplicativo FGTS, da Caixa, que mostra o extrato de cada depósito feito pela empresa.",
      },
      {
        pergunta: "Quem trabalhou sem carteira assinada tem direitos?",
        resposta: "Sim. Comprovado o vínculo de emprego, é possível pedir o registro na carteira e os direitos do período, como férias, 13º salário e FGTS.",
      },
    ],
    fontes: [
      { nome: "Constituição Federal, art. 7º", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm" },
      { nome: "CLT, arts. 477 e 483", url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452compilado.htm" },
      { nome: "Lei do FGTS (Lei 8.036/1990), art. 18", url: "https://www.planalto.gov.br/ccivil_03/leis/l8036consol.htm" },
    ],
  },
  {
    slug: "advogada-de-familia-em-indaiatuba",
    servico: "Direito de Família",
    title: "Advogada de Família em Indaiatuba | Flávia Vaz Rabello",
    description:
      "Divórcio, guarda, pensão, união estável e inventário em Indaiatuba: como cada caso funciona, em cartório ou na Justiça. Dra. Flávia Vaz Rabello, OAB 262057/SP.",
    h1: "Advogada de família em Indaiatuba",
    intro:
      "Questões de família mexem com a vida inteira: filhos, casa, patrimônio. Aqui você vê os assuntos que a advocacia de família resolve em Indaiatuba e o caminho de cada um.",
    secoes: [
      {
        titulo: "O que a advocacia de família resolve",
        texto: [
          "Divórcio consensual e litigioso, guarda e convivência dos filhos, pensão alimentícia (fixação, revisão, execução e exoneração), reconhecimento e dissolução de união estável, partilha de bens, pacto antenupcial, inventário e testamento.",
          "Também casos como investigação e reconhecimento de paternidade, filiação socioafetiva, alienação parental, autorização de viagem de menor e mudança de nome no registro civil.",
        ],
      },
      {
        titulo: "Acordo primeiro, sempre que possível",
        texto: [
          "Nas ações de família, a lei manda buscar primeiro a solução por acordo, com apoio de mediação e conciliação (Código de Processo Civil, art. 694).",
          "Com acordo entre as partes, divórcio, dissolução de união estável e inventário podem ser feitos em cartório, por escritura, com advogado (Código de Processo Civil, arts. 610 e 733). Quando há filhos menores ou incapazes, o caminho depende do caso.",
        ],
      },
      {
        titulo: "União estável: precisa de papel?",
        texto: [
          "A união estável existe quando a convivência é pública, contínua, duradoura e com objetivo de constituir família, mesmo sem contrato (Código Civil, art. 1.723).",
          "Formalizar por escritura em cartório ou por contrato ajuda a provar a data de início e a definir o regime de bens. Sem contrato escrito, vale a comunhão parcial de bens (Código Civil, art. 1.725).",
        ],
      },
    ],
    faq: [
      {
        pergunta: "O atendimento é só presencial?",
        resposta: "Não. O atendimento é presencial em Indaiatuba, no Itaici Office, ou online, com consulta agendada.",
      },
      {
        pergunta: "Dá para resolver sem processo na Justiça?",
        resposta: "Em muitos casos, sim. Com acordo entre as partes, divórcio, dissolução de união estável e inventário podem ser feitos em cartório, sempre com advogado.",
      },
      {
        pergunta: "Quem não casou no papel tem direito à partilha?",
        resposta: "Sim, se a união estável for reconhecida. Sem contrato escrito, aplica-se a comunhão parcial de bens (Código Civil, art. 1.725).",
      },
    ],
    fontes: [
      { nome: "Código de Processo Civil, arts. 610, 694 e 733", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm" },
      { nome: "Código Civil, arts. 1.723 e 1.725", url: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" },
    ],
  },
  {
    slug: "advogada-de-guarda-de-filhos-em-indaiatuba",
    servico: "Guarda de filhos",
    title: "Advogada de Guarda de Filhos em Indaiatuba | Flávia Vaz Rabello",
    description:
      "Guarda compartilhada ou unilateral, convivência, mudança de guarda e viagem com filhos em Indaiatuba: o que diz a lei. Dra. Flávia Vaz Rabello, OAB 262057/SP.",
    h1: "Advogada de guarda de filhos em Indaiatuba",
    intro:
      "Depois da separação, a pergunta mais importante é como fica a rotina dos filhos. Veja como a lei trata a guarda, a convivência e as mudanças que podem ser pedidas depois.",
    secoes: [
      {
        titulo: "Guarda compartilhada ou unilateral?",
        texto: [
          "Na guarda compartilhada, pai e mãe dividem as decisões sobre a vida dos filhos. Quando os dois estão aptos e não há acordo, ela é a regra (Código Civil, art. 1.584, § 2º).",
          "Na guarda unilateral, um dos pais fica com a guarda e o outro mantém a convivência e o dever de acompanhar os interesses dos filhos (Código Civil, art. 1.583, § 5º, e art. 1.589).",
        ],
      },
      {
        titulo: "Dá para mudar a guarda depois?",
        texto: [
          "Sim. Se a situação da criança mudar, a guarda e a convivência podem ser revistas, sempre olhando o melhor interesse do filho.",
          "Atos que dificultam o contato da criança com o outro genitor podem caracterizar alienação parental, que a Justiça pode reconhecer e corrigir (Lei 12.318/2010).",
        ],
      },
      {
        titulo: "Viagem com filhos",
        texto: [
          "Criança ou adolescente com menos de 16 anos não pode viajar para fora da comarca onde mora sem os pais ou responsáveis, salvo autorização (Estatuto da Criança e do Adolescente, art. 83).",
          "Para o exterior, a viagem com só um dos pais exige autorização expressa do outro, com firma reconhecida, ou autorização judicial (Estatuto da Criança e do Adolescente, art. 84).",
        ],
      },
    ],
    faq: [
      {
        pergunta: "Guarda compartilhada quer dizer que a criança mora metade do tempo em cada casa?",
        resposta: "Não necessariamente. Guarda compartilhada é dividir as decisões. A casa de referência e o tempo de convivência são definidos conforme o interesse da criança.",
      },
      {
        pergunta: "Quem tem a guarda compartilhada deixa de pagar pensão?",
        resposta: "Não. Guarda e pensão são assuntos diferentes. A pensão continua a ser definida pela necessidade do filho e pela possibilidade de quem paga.",
      },
      {
        pergunta: "Posso pedir a regulamentação das visitas?",
        resposta: "Sim. A convivência pode ser fixada por acordo ou pela Justiça, com dias, horários, férias e datas especiais.",
      },
    ],
    fontes: [
      { nome: "Código Civil, arts. 1.583, 1.584 e 1.589", url: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" },
      { nome: "Lei da Alienação Parental (Lei 12.318/2010)", url: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12318.htm" },
      { nome: "Estatuto da Criança e do Adolescente, arts. 83 e 84", url: "https://www.planalto.gov.br/ccivil_03/leis/l8069.htm" },
    ],
  },
  {
    slug: "advogada-de-direito-bancario-em-indaiatuba",
    servico: "Direito Bancário",
    area: "bancario",
    areaNome: "Direito Bancário",
    title: "Advogada de Direito Bancário em Indaiatuba | Flávia Vaz Rabello",
    description:
      "Revisão de contrato, juros abusivos, busca e apreensão de veículo, conta bloqueada e salário penhorado em Indaiatuba. Dra. Flávia Vaz Rabello, OAB 262057/SP.",
    h1: "Advogada de direito bancário em Indaiatuba",
    intro:
      "Financiamento atrasado, juros que não param de crescer, conta bloqueada. Veja o que a lei diz sobre os problemas com banco que mais aparecem e o que separar antes da conversa.",
    secoes: [
      {
        titulo: "Contrato com banco segue o Código do Consumidor",
        texto: [
          "O Código de Defesa do Consumidor se aplica às instituições financeiras (Súmula 297 do Superior Tribunal de Justiça).",
          "Por isso, cláusulas abusivas, cobranças que não estavam no contrato e juros muito acima da média do mercado podem ser discutidos na revisão do contrato.",
        ],
      },
      {
        titulo: "Busca e apreensão do veículo financiado",
        texto: [
          "No financiamento com alienação fiduciária, depois da apreensão o devedor tem 5 dias para pagar a dívida pendente e receber o veículo de volta (Decreto-Lei 911/1969, art. 3º, § 2º).",
          "O prazo para apresentar a defesa no processo é de 15 dias depois da apreensão (Decreto-Lei 911/1969, art. 3º, § 3º). Por isso, vale procurar orientação logo.",
        ],
      },
      {
        titulo: "Salário e poupança bloqueados",
        texto: [
          "Em regra, salário e aposentadoria não podem ser penhorados, e a poupança é protegida até 40 salários mínimos (Código de Processo Civil, art. 833, IV e X).",
          "Quando valores protegidos são bloqueados por ordem judicial, é possível pedir o desbloqueio no processo.",
        ],
      },
    ],
    faq: [
      {
        pergunta: "Revisar o contrato suspende as parcelas?",
        resposta: "Não automaticamente. Cada caso precisa ser analisado, inclusive para não piorar a situação com o atraso.",
      },
      {
        pergunta: "O que levar para a primeira conversa?",
        resposta: "Contrato, extratos, boletos, notificações recebidas do banco e, se houver processo, o número dele.",
      },
      {
        pergunta: "O banco pode bloquear todo o dinheiro da conta?",
        resposta: "O bloqueio judicial pode atingir a conta, mas salário e poupança até 40 salários mínimos são protegidos por lei e podem ser liberados.",
      },
    ],
    fontes: [
      { nome: "Súmula 297 do STJ", url: "https://scon.stj.jus.br/SCON/sumanot/toc.jsp" },
      { nome: "Decreto-Lei 911/1969, art. 3º", url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del0911.htm" },
      { nome: "Código de Processo Civil, art. 833", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm" },
    ],
  },
  {
    slug: "advogada-do-consumidor-em-indaiatuba",
    servico: "Direito do Consumidor",
    area: "consumidor",
    areaNome: "Direito do Consumidor",
    title: "Advogada do Consumidor em Indaiatuba | Flávia Vaz Rabello",
    description:
      "Golpe do Pix, fraude bancária, negativação indevida, voo cancelado e plano de saúde em Indaiatuba: o que diz a lei. Dra. Flávia Vaz Rabello, OAB 262057/SP.",
    h1: "Advogada do consumidor em Indaiatuba",
    intro:
      "Caiu em golpe, teve o nome negativado sem dever ou ficou sem o serviço que contratou? Veja os direitos que mais aparecem e o que guardar desde o primeiro momento.",
    secoes: [
      {
        titulo: "Golpe do Pix e fraude bancária",
        texto: [
          "O banco responde pelos danos causados por fraudes ligadas à sua própria operação, mesmo quando praticadas por terceiros (Súmula 479 do Superior Tribunal de Justiça).",
          "Comunique o banco assim que perceber o golpe e peça a devolução pelo Mecanismo Especial de Devolução (MED) do Pix. Guarde o boletim de ocorrência, os comprovantes e as conversas.",
        ],
      },
      {
        titulo: "Voo cancelado, atrasado ou overbooking",
        texto: [
          "A companhia aérea deve dar assistência conforme a espera: comunicação a partir de 1 hora, alimentação a partir de 2 horas e hospedagem a partir de 4 horas, quando for preciso pernoitar (Resolução ANAC 400/2016, art. 27).",
          "Prejuízos e transtornos podem gerar indenização, conforme o caso.",
        ],
      },
      {
        titulo: "Plano de saúde e compras",
        texto: [
          "Negativa de cobertura de tratamento, exame ou medicamento pode ser discutida com base no contrato e na Lei dos Planos de Saúde (Lei 9.656/1998).",
          "Em compras fora da loja física, como internet e telefone, o consumidor pode desistir em até 7 dias do recebimento (Código de Defesa do Consumidor, art. 49).",
        ],
      },
    ],
    faq: [
      {
        pergunta: "Meu nome foi negativado por uma dívida que não é minha. O que fazer?",
        resposta: "Guarde a consulta do cadastro e os comprovantes. A negativação indevida pode ser cancelada e, conforme o caso, gerar indenização.",
      },
      {
        pergunta: "Qual o prazo para reclamar de produto com defeito?",
        resposta: "30 dias para produtos não duráveis e 90 dias para duráveis (Código de Defesa do Consumidor, art. 26).",
      },
      {
        pergunta: "O que guardar depois de um golpe?",
        resposta: "Comprovantes de transferência, prints das conversas, protocolo do banco e boletim de ocorrência.",
      },
    ],
    fontes: [
      { nome: "Código de Defesa do Consumidor, arts. 26 e 49", url: "https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm" },
      { nome: "Súmula 479 do STJ", url: "https://scon.stj.jus.br/SCON/sumanot/toc.jsp" },
      { nome: "Resolução ANAC 400/2016", url: "https://www.anac.gov.br/assuntos/legislacao/legislacao-1/resolucoes/2016/resolucao-no-400-13-12-2016" },
      { nome: "Lei dos Planos de Saúde (Lei 9.656/1998)", url: "https://www.planalto.gov.br/ccivil_03/leis/l9656.htm" },
    ],
  },
  {
    slug: "advogada-civel-em-indaiatuba",
    servico: "Direito Civil e Contratos",
    area: "extrajudicial",
    areaNome: "Assessoria Jurídica",
    title: "Advogada Cível em Indaiatuba | Flávia Vaz Rabello",
    description:
      "Contratos, regularização de imóveis, usucapião, cobranças e cumprimento de sentença em Indaiatuba. Dra. Flávia Vaz Rabello, OAB 262057/SP.",
    h1: "Advogada cível em Indaiatuba",
    intro:
      "Contrato que vai ser assinado, imóvel sem escritura, uma dívida que ninguém paga. Veja como a assessoria jurídica atua antes do problema e quando ele já chegou à Justiça.",
    secoes: [
      {
        titulo: "Contratos: revisar antes de assinar",
        texto: [
          "Compra e venda, locação, prestação de serviço e sociedade: a leitura antes da assinatura evita cláusulas que geram prejuízo depois.",
          "Quando o contrato já foi descumprido, é possível notificar a outra parte, negociar ou levar o caso à Justiça.",
        ],
      },
      {
        titulo: "Regularização de imóveis e usucapião",
        texto: [
          "Quem tem a posse de um imóvel por longo tempo, sem oposição, pode pedir a usucapião. O prazo geral é de 15 anos e cai para 10 se o imóvel for a moradia (Código Civil, art. 1.238).",
          "A usucapião também pode ser feita em cartório, sem processo, com advogado (Lei de Registros Públicos, art. 216-A).",
        ],
      },
      {
        titulo: "Cobranças e cumprimento de sentença",
        texto: [
          "Depois de uma condenação a pagar, o devedor é intimado para pagar em 15 dias. Sem pagamento, o valor recebe multa de 10% e honorários de 10% (Código de Processo Civil, art. 523).",
        ],
      },
    ],
    faq: [
      {
        pergunta: "A usucapião em cartório é mais rápida?",
        resposta: "Costuma ser, quando a documentação está completa e não há oposição de vizinhos ou do antigo dono. Cada caso precisa ser avaliado.",
      },
      {
        pergunta: "Vale a pena revisar um contrato simples?",
        resposta: "Sim, principalmente quando envolve imóvel, valores altos ou prazos longos.",
      },
      {
        pergunta: "Ganhei a ação, mas a outra parte não paga. E agora?",
        resposta: "Pede-se o cumprimento de sentença, que pode levar à penhora de bens e valores do devedor (Código de Processo Civil, arts. 523 e 831).",
      },
    ],
    fontes: [
      { nome: "Código Civil, art. 1.238", url: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" },
      { nome: "Lei de Registros Públicos, art. 216-A", url: "https://www.planalto.gov.br/ccivil_03/leis/l6015compilada.htm" },
      { nome: "Código de Processo Civil, arts. 523 e 831", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm" },
    ],
  },
];
