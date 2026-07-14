import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CtaSection } from "@/components/sections/cta-section";
import { DifferentialsSection } from "@/components/sections/differentials-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PracticeAreasSection } from "@/components/sections/practice-areas-section";
import { ServiceProcessSection } from "@/components/sections/service-process-section";
import { LegalServiceJsonLd } from "@/components/shared/legal-service-json-ld";
import { SectionDivider } from "@/components/ui/section-divider";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://cassio-brandao-advocacia.vercel.app";

export default function Home() {
  return (
    <>
      <LegalServiceJsonLd siteUrl={siteUrl} />

      <Header />

      <main>
        <HeroSection />

        <SectionDivider />

        <AboutSection />

        <PracticeAreasSection />

        <DifferentialsSection />

        <ServiceProcessSection />

        <CtaSection />

        <ContactSection />
      </main>

      <Footer />

      <WhatsappButton />
    </>
  );
}