export const siteUrl = "https://cassio-brandao-adv.vercel.app";

export const siteConfig = {
  name: "Cássio Brandão",
  legalName: "Cássio Brandão Advocacia & Consultoria Jurídica",
  shortName: "Cássio Brandão Advocacia",

  description:
    "Advocacia e consultoria jurídica com atuação estratégica, responsável e personalizada.",

  oab: {
    state: "BA",
    number: "85.055",
    formatted: "OAB/BA 85.055",
  },

  contact: {
    email: "advcassiobrandao@gmail.com",

    phone: {
      countryCode: "55",
      areaCode: "71",
      number: "91447099",
      formatted: "+55 71 9144-7099",
    },

    location: {
      city: "Salvador",
      state: "Bahia",
      short: "Salvador, Bahia",
      service: "Atendimento presencial e online",
    },
  },

  whatsapp: {
    message:
      "Olá, gostaria de solicitar um atendimento jurídico com o Dr. Cássio Brandão.",
  },

  seo: {
    title: "Cássio Brandão | Advocacia & Consultoria Jurídica",
    description:
      "Advocacia e consultoria jurídica em Salvador, Bahia, com atendimento presencial e online.",
    keywords: [
      "advogado em Salvador",
      "advocacia em Salvador",
      "consultoria jurídica",
      "direito dos contratos",
      "direito do consumidor",
      "direito administrativo",
      "direito trabalhista",
      "direito previdenciário",
      "direito digital",
    ],
  },
} as const;

export const whatsappNumber = [
  siteConfig.contact.phone.countryCode,
  siteConfig.contact.phone.areaCode,
  siteConfig.contact.phone.number,
].join("");

export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsapp.message,
)}`;

export const emailUrl = `mailto:${siteConfig.contact.email}`;