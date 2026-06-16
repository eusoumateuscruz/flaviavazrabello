import { Link, useParams } from "react-router-dom";
import { ArrowRight, MessageSquare, CheckCircle2, Gavel, Users, ShieldCheck } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import Seo from "@/components/Seo";
import { WHATSAPP_URL, PRACTICE_AREAS } from "@/lib/site";
import SectionHeader from "@/components/SectionHeader";
import flaviaFoto from "@/assets/flavia_sobre_branco.png";

const SLUG_TO_ID: Record<string, string> = {
  "direito-de-familia": "familia",
  "direito-bancario": "bancario",
  "direito-do-consumidor": "consumidor",
  "direito-do-trabalho": "trabalhista",
  "assessoria-juridica": "extrajudicial",
};

const ID_TO_SLUG: Record<string, string> = Object.fromEntries(
  Object.entries(SLUG_TO_ID).map(([s, i]) => [i, s])
);

const SEO_BY_SLUG: Record<string, { title: string; description: string }> = {
  "direito-de-familia": {
    title: "Advogada de Família em Indaiatuba | Divórcio, Pensão, Guarda — Flávia Vaz Rabello",
    description: "Especialista em Direito de Família em Indaiatuba. Divórcio consensual e litigioso, guarda de filhos, pensão alimentícia, inventário e partilha. Atendimento humanizado.",
  },
  "direito-bancario": {
    title: "Advogada Direito Bancário em Indaiatuba | Juros Abusivos — Flávia Vaz Rabello",
    description: "Revisão de contratos bancários e combate a juros abusivos em Indaiatuba SP. A Dra. Flávia Vaz Rabello defende seus direitos contra cobranças indevidas.",
  },
  "direito-do-consumidor": {
    title: "Advogada do Consumidor em Indaiatuba | Flávia Vaz Rabello",
    description: "Defesa dos direitos do consumidor em Indaiatuba SP. Problemas com empresas, cobranças indevidas, produtos defeituosos. Consulte a Dra. Flávia Vaz Rabello.",
  },
  "direito-do-trabalho": {
    title: "Advogada Trabalhista em Indaiatuba | Flávia Vaz Rabello",
    description: "Direito do Trabalho em Indaiatuba SP. Rescisão indireta, verbas trabalhistas, assédio moral e demissão sem justa causa. Defenda seus direitos.",
  },
  "assessoria-juridica": {
    title: "Assessoria Jurídica em Indaiatuba | Flávia Vaz Rabello Advocacia",
    description: "Assessoria jurídica extrajudicial e judicial em Indaiatuba SP. Prevenção de conflitos, análise de contratos e acompanhamento processual personalizado.",
  },
};

const PROVIDER = {
  "@type": "LegalService",
  name: "Flávia Vaz Rabello Advocacia",
  url: "https://www.flaviavazrabello.com.br",
  telephone: "+55-19-99743-9157",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indaiatuba",
    addressRegion: "SP",
    addressCountry: "BR",
  },
};

const SERVICE_SCHEMA: Record<string, { name: string; serviceType: string; description: string }> = {
  "direito-de-familia": {
    name: "Advogada de Direito de Família em Indaiatuba",
    serviceType: "Direito de Família e Sucessões",
    description:
      "Serviços jurídicos em Direito de Família: divórcio, guarda de filhos, pensão alimentícia, inventário, partilha, alienação parental e interdição.",
  },
  "direito-bancario": {
    name: "Advogada de Direito Bancário em Indaiatuba",
    serviceType: "Direito Bancário",
    description:
      "Revisão de contratos bancários, combate a juros abusivos, renegociação de dívidas e defesa contra cobranças indevidas.",
  },
  "direito-do-consumidor": {
    name: "Advogada do Consumidor em Indaiatuba",
    serviceType: "Direito do Consumidor",
    description:
      "Defesa dos direitos do consumidor: problemas com empresas, cobranças indevidas, produtos defeituosos e descumprimento contratual.",
  },
  "direito-do-trabalho": {
    name: "Advogada Trabalhista em Indaiatuba",
    serviceType: "Direito do Trabalho",
    description:
      "Direito do Trabalho: rescisão indireta, verbas trabalhistas não pagas, assédio moral, demissão sem justa causa e acordos trabalhistas.",
  },
  "assessoria-juridica": {
    name: "Assessoria Jurídica em Indaiatuba",
    serviceType: "Assessoria Jurídica Extrajudicial e Judicial",
    description:
      "Assessoria jurídica preventiva e contenciosa: análise de contratos, acompanhamento processual, orientação jurídica e resolução extrajudicial de conflitos.",
  },
};

const FAQ_BY_SLUG: Record<string, { name: string; text: string }[]> = {
  "direito-de-familia": [
    {
      name: "Quanto tempo demora um divórcio em Indaiatuba?",
      text: "O divórcio consensual extrajudicial pode ser concluído em poucos dias quando feito em cartório, sem filhos menores envolvidos. O divórcio judicial consensual leva em média 2 a 6 meses. Já o divórcio litigioso pode durar de 1 a 3 anos dependendo da complexidade do caso.",
    },
    {
      name: "Como funciona a pensão alimentícia em Indaiatuba?",
      text: "A pensão alimentícia é fixada com base nas necessidades do alimentando e na capacidade financeira do alimentante. Pode ser estabelecida por acordo entre as partes ou por decisão judicial. Em casos urgentes, é possível pedir alimentos provisórios que valem desde o início do processo.",
    },
    {
      name: "O que é alienação parental e o que posso fazer?",
      text: "Alienação parental é quando um dos pais interfere na relação da criança com o outro genitor, dificultando ou impedindo o contato. É crime previsto em lei. A parte prejudicada pode ingressar com ação judicial para reconhecimento e cessação da alienação, podendo resultar em inversão da guarda.",
    },
    {
      name: "Preciso de advogado para fazer inventário em Indaiatuba?",
      text: "Sim, a presença de advogado é obrigatória em todos os tipos de inventário, seja judicial ou extrajudicial (em cartório). O advogado orienta os herdeiros, organiza os documentos e garante que a partilha seja feita de forma legal e segura para todos.",
    },
  ],
  "direito-bancario": [
    {
      name: "Como identificar juros abusivos no meu contrato?",
      text: "Juros abusivos são aqueles que excedem significativamente a taxa média de mercado divulgada pelo Banco Central. Para identificá-los, compare a taxa do seu contrato com a taxa média do mercado para o mesmo tipo de crédito. Se a diferença for grande, é possível questionar judicialmente a revisão do contrato.",
    },
    {
      name: "Posso revisar um contrato bancário que já assinei?",
      text: "Sim. A revisão de contratos bancários é um direito do consumidor. Mesmo após assinar o contrato, se houver cláusulas abusivas, juros acima da média de mercado ou práticas irregulares, é possível entrar com ação revisional e buscar a redução dos valores cobrados.",
    },
    {
      name: "O banco pode negativar meu nome mesmo eu contestando a dívida?",
      text: "Enquanto a dívida estiver sendo questionada judicialmente, é possível solicitar tutela de urgência para suspender a negativação ou exigir a retirada do nome dos órgãos de proteção ao crédito. Se a negativação for indevida, você tem direito a indenização por danos morais.",
    },
  ],
  "direito-do-trabalho": [
    {
      name: "Fui demitido sem justa causa, quais são meus direitos?",
      text: "Na demissão sem justa causa você tem direito a: saldo de salário, aviso prévio (trabalhado ou indenizado), 13º salário proporcional, férias proporcionais acrescidas de 1/3, multa de 40% sobre o FGTS, saque do FGTS e seguro-desemprego (se tiver direito). O prazo para buscar seus direitos é de 2 anos após a demissão.",
    },
    {
      name: "O que é rescisão indireta e quando posso pedir?",
      text: "A rescisão indireta é a demissão com justa causa do empregador. Você pode pedir quando a empresa comete faltas graves como: não pagar salário, exigir tarefas perigosas sem equipamento adequado, assédio moral, reduzir salário ilegalmente ou descumprir obrigações legais. Nesse caso você recebe todas as verbas rescisórias como se tivesse sido demitido sem justa causa.",
    },
    {
      name: "Tenho prazo para entrar com reclamação trabalhista?",
      text: "Sim. O prazo é de 2 anos após o término do contrato de trabalho para acionar a Justiça do Trabalho. Porém, só é possível cobrar verbas dos últimos 5 anos anteriores à ação. Por isso é importante não deixar passar tempo demais antes de buscar seus direitos.",
    },
  ],
};

const ServicePage = () => {
  const { id, slug } = useParams();
  const lookupId = id || (slug ? SLUG_TO_ID[slug] : undefined);
  const service = PRACTICE_AREAS.find((area) => area.id === lookupId);

  if (!service) {
    return (
      <div className="container-narrow py-32 text-center">
        <h1 className="text-4xl font-serif text-primary">Serviço não encontrado</h1>
        <Link to="/areas" className="mt-8 inline-block text-accent underline">Voltar para áreas de atuação</Link>
      </div>
    );
  }

  const WHATSAPP_MESSAGE = encodeURIComponent(`Olá Dra. Flávia, gostaria de saber mais sobre ${service.title}.`);
  const WHATSAPP_LINK = `${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`;
  const seoSlug = slug || ID_TO_SLUG[service.id];
  const seo = seoSlug ? SEO_BY_SLUG[seoSlug] : undefined;
  const canonical = seoSlug ? `https://www.flaviavazrabello.com.br/areas-de-atuacao/${seoSlug}` : "";
  const schemas: object[] = [];
  if (seoSlug && SERVICE_SCHEMA[seoSlug]) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      ...SERVICE_SCHEMA[seoSlug],
      provider: PROVIDER,
      areaServed: { "@type": "City", name: "Indaiatuba" },
      url: canonical,
    });
  }
  if (seoSlug && FAQ_BY_SLUG[seoSlug]) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_BY_SLUG[seoSlug].map((q) => ({
        "@type": "Question",
        name: q.name,
        acceptedAnswer: { "@type": "Answer", text: q.text },
      })),
    });
  }

  return (
    <div className="bg-background">
      {seo && seoSlug && (
        <Seo
          title={seo.title}
          description={seo.description}
          canonical={canonical}
          jsonLd={schemas.length ? schemas : undefined}
        />
      )}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <HeroBackground />
        <div className="container-narrow relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="label-eyebrow text-accent mb-6 block animate-fade-in">
              Área de Atuação
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary leading-tight animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              {service.title}
            </h1>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              {service.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent px-8 py-4 text-xs font-medium uppercase tracking-widest text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-xl group"
              >
                Falar com Especialista
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-narrow">
          <SectionHeader title="Serviços Oferecidos" />
          <div className="grid sm:grid-cols-2 gap-8 mt-16">
            {service.services.map((s, idx) => (
              <div key={idx} className="p-8 border border-border bg-card flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                <span className="text-lg text-primary font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-5xl mb-8">Precisa de assistência especializada?</h2>
          <p className="text-primary-foreground/80 mb-12 max-w-2xl mx-auto text-lg">
            Estamos prontos para analisar seu caso e oferecer a melhor solução jurídica.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-5 rounded-none font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-2xl"
          >
            Iniciar Atendimento
            <MessageSquare className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
