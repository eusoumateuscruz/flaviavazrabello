import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type QA = { q: string; a: string };
type Section = { title: string; items: QA[] };

const SECTIONS: Section[] = [
  {
    title: "Sobre o Atendimento",
    items: [
      {
        q: "Como agendar uma consulta com a Dra. Flávia Vaz Rabello?",
        a: "Pelo WhatsApp (19) 99743-9157 ou pelo formulário de contato do site. O atendimento é presencial em Indaiatuba SP ou online para todo o Brasil.",
      },
      {
        q: "A Dra. Flávia atende fora de Indaiatuba?",
        a: "Sim. Além do atendimento presencial em Indaiatuba, realiza atendimento online para clientes em todo o Brasil. OAB 262057/SP.",
      },
      {
        q: "Quanto custa uma consulta?",
        a: "O valor é informado no primeiro contato, de acordo com a área e complexidade do caso. Entre em contato pelo WhatsApp para mais informações.",
      },
      {
        q: "O atendimento é sigiloso?",
        a: "Sim. Todo atendimento segue o sigilo profissional previsto no Código de Ética da OAB. Suas informações estão protegidas.",
      },
      {
        q: "Quais são as áreas de atuação da Dra. Flávia?",
        a: "Direito de Família e Sucessões, Direito Bancário, Direito do Consumidor, Direito do Trabalho e Assessoria Jurídica Extrajudicial e Judicial.",
      },
    ],
  },
  {
    title: "Direito de Família",
    items: [
      {
        q: "O que é divórcio consensual?",
        a: "É a separação em que ambos os cônjuges concordam com todos os termos. Pode ser feito em cartório (sem filhos menores) ou na Justiça. É mais rápido e menos custoso que o litigioso.",
      },
      {
        q: "Posso me divorciar sem sair de casa?",
        a: "Sim. O divórcio extrajudicial pode ser feito de forma online com representação por procuração. O divórcio judicial também pode ter etapas realizadas remotamente.",
      },
      {
        q: "Quanto tempo demora um divórcio em Indaiatuba?",
        a: "O extrajudicial em cartório pode ser concluído em dias. O judicial consensual leva em média 2 a 6 meses. O litigioso pode levar de 1 a 3 anos.",
      },
      {
        q: "E se meu cônjuge não quiser assinar o divórcio?",
        a: "Desde 2010, o divórcio é um direito de qualquer cônjuge. É possível entrar com divórcio unilateral na Justiça sem o consentimento do outro.",
      },
      {
        q: "Como funciona a guarda compartilhada?",
        a: "Ambos os pais dividem a responsabilidade legal sobre os filhos. É o modelo preferencial da lei brasileira. A criança geralmente tem uma residência principal mas mantém convivência com os dois genitores.",
      },
      {
        q: "Quem tem guarda compartilhada paga pensão?",
        a: "Depende da diferença de renda entre os pais. Se houver desequilíbrio financeiro significativo, o de maior renda pode ser obrigado a pagar pensão mesmo na guarda compartilhada.",
      },
      {
        q: "Como funciona a pensão alimentícia?",
        a: "É fixada com base nas necessidades do filho e na capacidade financeira do responsável. Pode ser estabelecida por acordo ou por decisão judicial, e revisada quando a situação financeira mudar.",
      },
      {
        q: "Preciso de advogada para fazer inventário?",
        a: "Sim. A presença de advogada é obrigatória em todos os tipos de inventário, judicial ou extrajudicial. O advogado organiza os documentos e garante que a partilha seja feita de forma legal.",
      },
      {
        q: "O que é alienação parental?",
        a: "É quando um dos pais interfere na relação da criança com o outro genitor, dificultando ou impedindo o contato. É crime previsto em lei e pode resultar em inversão da guarda.",
      },
      {
        q: "O que é abandono afetivo?",
        a: "É a omissão dos pais no dever de cuidado, convivência e afeto com os filhos. O filho prejudicado pode buscar reparação por danos morais na Justiça.",
      },
    ],
  },
  {
    title: "Direito Bancário",
    items: [
      {
        q: "O que são juros abusivos?",
        a: "São taxas que excedem significativamente a média de mercado divulgada pelo Banco Central. O consumidor tem direito de questionar judicialmente e pedir revisão do contrato.",
      },
      {
        q: "Como saber se estou pagando juros abusivos?",
        a: "Compare a taxa do seu contrato com a taxa média do Banco Central para aquela modalidade de crédito. Se a diferença for expressiva, consulte uma advogada especializada.",
      },
      {
        q: "Posso revisar um contrato bancário já assinado?",
        a: "Sim. Mesmo após assinar, é possível ingressar com ação revisional para questionar cláusulas abusivas e reduzir os juros cobrados.",
      },
      {
        q: "O banco pode me negativar se eu contestar a dívida?",
        a: "Enquanto a dívida está sendo contestada judicialmente, é possível pedir tutela de urgência para suspender a negativação. Se indevida, cabe indenização por danos morais.",
      },
      {
        q: "O que fazer se cair no golpe do Pix?",
        a: "Contate seu banco imediatamente pelo canal oficial, solicite o bloqueio via Mecanismo Especial de Devolução (MED), registre Boletim de Ocorrência e guarde todos os comprovantes.",
      },
    ],
  },
  {
    title: "Direito do Trabalho",
    items: [
      {
        q: "Quais são meus direitos na demissão sem justa causa?",
        a: "Saldo de salário, aviso prévio, 13º proporcional, férias com 1/3, multa de 40% do FGTS, saque do FGTS e seguro-desemprego (se tiver direito).",
      },
      {
        q: "Tenho prazo para reclamar direitos trabalhistas?",
        a: "Sim. O prazo é de 2 anos após o término do contrato. Só é possível cobrar verbas dos últimos 5 anos anteriores à ação. Não espere.",
      },
      {
        q: "O que é rescisão indireta?",
        a: "É quando a empresa comete falta grave — como não pagar salário ou praticar assédio — e o empregado encerra o contrato recebendo todas as verbas da demissão sem justa causa.",
      },
      {
        q: "Fui demitido durante doença, é legal?",
        a: "Depende. Empregados com doenças estigmatizantes como HIV, câncer ou dependência química têm estabilidade reconhecida pelos tribunais. Cada caso deve ser avaliado individualmente.",
      },
    ],
  },
  {
    title: "Direito do Consumidor",
    items: [
      {
        q: "O plano de saúde pode negar cobertura de procedimento?",
        a: "Não pode negar procedimentos previstos no rol da ANS. Em casos de negativa indevida, é possível obter autorização judicial de urgência em poucas horas.",
      },
      {
        q: "Tenho filho com TEA e o plano nega as terapias. O que fazer?",
        a: "A lei obriga os planos a cobrir todas as terapias necessárias para pacientes com TEA. É possível obter autorização judicial de urgência para garantir o tratamento imediatamente.",
      },
      {
        q: "Como funciona a indenização por danos morais?",
        a: "É a compensação por sofrimento causado por ato ilícito de empresa ou pessoa. O valor é definido pelo juiz com base na gravidade do dano e na capacidade financeira do responsável.",
      },
    ],
  },
];

const FAQ = () => {
  const allItems = SECTIONS.flatMap((s) => s.items);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <Seo
        title="Perguntas Frequentes | Advogada em Indaiatuba — Flávia Vaz Rabello"
        description="Tire suas dúvidas jurídicas com a Dra. Flávia Vaz Rabello, advogada em Indaiatuba SP. Respostas diretas sobre divórcio, pensão, guarda, juros abusivos, demissão e muito mais."
        canonical="https://www.flaviavazrabello.com.br/perguntas-frequentes"
        jsonLd={jsonLd}
      />
      <PageHero
        eyebrow="Dúvidas comuns"
        title="Perguntas Frequentes — Dra. Flávia Vaz Rabello"
        subtitle="Respostas diretas para as principais dúvidas sobre atendimento, divórcio, guarda, pensão, direito bancário, trabalhista e consumidor."
      />

      <section className="py-16 md:py-24">
        <div className="container-narrow max-w-4xl space-y-16 md:space-y-20">
          {SECTIONS.map((section, idx) => (
            <div key={section.title}>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-serif text-accent text-sm tracking-[0.2em] uppercase">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-primary">
                  {section.title}
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {section.items.map((item, i) => (
                  <AccordionItem
                    key={item.q}
                    value={`s${idx}-i${i}`}
                    className="border-border"
                  >
                    <AccordionTrigger className="text-left font-serif text-base md:text-lg text-primary hover:text-accent hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80 leading-relaxed text-[15px]">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;