 export const WHATSAPP_URL = "https://wa.me/5519997439157";
 export const EMAIL = "advogada@flaviavazrabello.com.br";
 export const LOCATION = "Avenida Coronel Antonio Estanislau do Amaral, 635 - sala 10 - Itaici Office - Itaici - CEP 13.340-480 - Indaiatuba/SP";
 export const PHONES = ["19 9 9743-9157", "19 3016-2688"];
 export const HOURS = {
   weekdays: "09h00 às 18h30",
   saturday: "Mediante agendamento"
 };
export const OAB = "OAB 262057/SP";
export const FIRM_NAME = "Flávia Vaz Rabello Advocacia";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/advogadarabello/",
  instagram: "https://www.instagram.com/flaviavazrabello.adv/",
  tiktok: "https://www.tiktok.com/@flaviavazrabello.adv",
};

export const NAV_LINKS = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Áreas de Atuação", to: "/areas" },
  { label: "Blog", to: "/blog" },
  { label: "Contato", to: "/contato" },
];

export const PRACTICE_AREAS = [
   {
     id: "familia",
     title: "Direito de Família e Sucessões",
     description:
       "Atuação humanizada em momentos decisivos, buscando a proteção dos laços familiares e do patrimônio.",
     services: ["Divórcio e União Estável", "Guarda, Alimentos e Visitas", "Inventário e Partilha", "Interdição, Tutela e Curatela", "Alienação Parental", "Abandono Afetivo"],
   },
   {
     id: "bancario",
     title: "Direito Bancário",
     description:
       "Defesa contra abusos financeiros e proteção do seu patrimônio frente a instituições bancárias.",
     services: [
       "Revisão de Contratos",
       "Juros Abusivos",
       "Revisão de Financiamento de Veículos",
       "Busca e Apreensão",
     ],
   },
   {
     id: "consumidor",
     title: "Direito do Consumidor",
     description:
       "Garantia de que seus direitos sejam respeitados em relações de consumo e transações digitais.",
     services: [
       "Indenizações por Danos Morais e Materiais",
       "Proteção contra Golpes e Fraudes",
       "Práticas Abusivas",
     ],
   },
   {
     id: "trabalhista",
     title: "Direito do Trabalho",
     description:
       "Defesa dos direitos do trabalhador com foco em justiça e reparação de danos nas relações laborais.",
     services: ["Reclamações Trabalhistas", "Assédio Moral e Sexual", "Danos Morais e Materiais", "Verbas Rescisórias"],
   },
   {
     id: "extrajudicial",
     title: "Assessoria Jurídica Extrajudicial e Judicial",
     description:
       "Consultoria preventiva para evitar litígios e atuação contenciosa estratégica quando necessária.",
     services: [
       "Consultoria Preventiva (Extrajudicial)",
       "Atuação Contenciosa (Judicial)",
       "Regularização de Imóveis",
       "Direito Civil e Contratos",
     ],
   },
];
