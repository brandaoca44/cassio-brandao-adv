import { siteConfig, whatsappUrl } from "@/lib/site";

type LegalServiceJsonLdProps = {
  siteUrl: string;
};

export function LegalServiceJsonLd({
  siteUrl,
}: LegalServiceJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteUrl}/#legal-service`,
    name: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    image: `${siteUrl}/opengraph-image`,
    description: siteConfig.seo.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone.formatted,
    areaServed: [
      {
        "@type": "City",
        name: siteConfig.contact.location.city,
      },
      {
        "@type": "State",
        name: siteConfig.contact.location.state,
      },
      {
        "@type": "Country",
        name: "Brasil",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.location.city,
      addressRegion: "BA",
      addressCountry: "BR",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "atendimento jurídico",
        telephone: siteConfig.contact.phone.formatted,
        email: siteConfig.contact.email,
        availableLanguage: ["Portuguese"],
        url: whatsappUrl,
      },
    ],
    knowsAbout: [
      "Direito dos Contratos",
      "Direito do Consumidor",
      "Direito Administrativo",
      "Direito Trabalhista",
      "Direito Previdenciário",
      "Direito Digital",
      "Consultoria Jurídica",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}