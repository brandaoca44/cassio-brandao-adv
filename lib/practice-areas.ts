import {
  BriefcaseBusiness,
  Building2,
  FileText,
  Landmark,
  Laptop,
  Scale,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type PracticeArea = {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  description: string;
  examples: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    id: "contratos",
    icon: FileText,
    title: "Direito dos Contratos",
    shortDescription:
      "Elaboração, análise, revisão e negociação de contratos civis e empresariais.",
    description:
      "Atuação preventiva e consultiva para proporcionar maior clareza, equilíbrio e segurança às relações contratuais.",
    examples: [
      "Elaboração de contratos",
      "Revisão de cláusulas",
      "Negociação contratual",
      "Rescisão e inadimplemento",
    ],
  },
  {
    id: "consumidor",
    icon: ShieldCheck,
    title: "Direito do Consumidor",
    shortDescription:
      "Atuação em conflitos relacionados a produtos, serviços, cobranças e práticas abusivas.",
    description:
      "Orientação e acompanhamento em demandas decorrentes das relações entre consumidores e fornecedores.",
    examples: [
      "Cobranças indevidas",
      "Produtos com defeito",
      "Descumprimento de ofertas",
      "Negativação indevida",
    ],
  },
  {
    id: "administrativo",
    icon: Landmark,
    title: "Direito Administrativo",
    shortDescription:
      "Consultoria e acompanhamento em processos e relações com a Administração Pública.",
    description:
      "Atuação em questões administrativas, contratos públicos, servidores e procedimentos perante órgãos públicos.",
    examples: [
      "Processos administrativos",
      "Contratos públicos",
      "Demandas de servidores",
      "Orientação perante órgãos públicos",
    ],
  },
  {
    id: "trabalhista",
    icon: BriefcaseBusiness,
    title: "Direito Trabalhista",
    shortDescription:
      "Orientação preventiva e atuação em questões relacionadas às relações de trabalho.",
    description:
      "Análise de direitos, obrigações e conflitos decorrentes das relações profissionais e empresariais.",
    examples: [
      "Verbas trabalhistas",
      "Rescisões",
      "Orientação preventiva",
      "Conflitos profissionais",
    ],
  },
  {
    id: "previdenciario",
    icon: Scale,
    title: "Direito Previdenciário",
    shortDescription:
      "Orientação em aposentadorias, pensões, benefícios e procedimentos administrativos.",
    description:
      "Análise e acompanhamento de requerimentos relacionados à Previdência Social e aos benefícios previdenciários.",
    examples: [
      "Aposentadorias",
      "Pensões",
      "Benefícios previdenciários",
      "Requerimentos administrativos",
    ],
  },
  {
    id: "digital",
    icon: Laptop,
    title: "Direito Digital",
    shortDescription:
      "Consultoria sobre contratos eletrônicos, internet e novas relações digitais.",
    description:
      "Orientação jurídica voltada à tecnologia, aos ambientes digitais e às novas formas de contratação e interação.",
    examples: [
      "Contratos eletrônicos",
      "Crimes cibernéticos",
      "Relações em plataformas digitais",
      "Responsabilidade na internet",
    ],
  },
  {
    id: "consultoria",
    icon: Building2,
    title: "Consultoria Jurídica",
    shortDescription:
      "Apoio estratégico para pessoas, profissionais, empresas e instituições.",
    description:
      "Atuação preventiva voltada à identificação de riscos, organização de processos e tomada segura de decisões.",
    examples: [
      "Análise preventiva",
      "Pareceres e orientações",
      "Gestão de riscos",
      "Apoio estratégico",
    ],
  },
];