import { ArrowUp, Mail, MapPin, MessageCircle, Scale } from "lucide-react";

import { BrandLogo } from "@/components/ui/brand-logo";
import { footerNavigation } from "@/lib/navigation";
import {
  emailUrl,
  siteConfig,
  whatsappUrl,
} from "@/lib/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#292929] text-white">
      <div className="container py-16">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.9fr]">
          <div>
            <BrandLogo light />

            <p
              className="mt-7 max-w-md text-sm leading-7 text-white/55"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              {siteConfig.description}
            </p>

            <div className="mt-7 flex items-center gap-3">
              <Scale
                size={16}
                strokeWidth={1.4}
                className="text-[#d1ad6a]"
              />

              <span
                className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {siteConfig.oab.formatted}
              </span>
            </div>
          </div>

          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-[0.15em] text-[#d1ad6a]"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Navegação
            </h3>

            <nav className="mt-6 flex flex-col gap-4">
              {footerNavigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-white/55 transition hover:text-white"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-[0.15em] text-[#d1ad6a]"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Contato
            </h3>

            <div className="mt-6 space-y-5">
              <a
                href={emailUrl}
                className="flex items-start gap-3 text-sm leading-6 text-white/55 transition hover:text-white"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#d1ad6a]"
                />

                <span className="break-all">
                  {siteConfig.contact.email}
                </span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm leading-6 text-white/55 transition hover:text-white"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                <MessageCircle
                  size={17}
                  className="mt-0.5 shrink-0 text-[#d1ad6a]"
                />

                <span>{siteConfig.contact.phone.formatted}</span>
              </a>

              <div
                className="flex items-start gap-3 text-sm leading-6 text-white/55"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#d1ad6a]"
                />

                <span>
                  {siteConfig.contact.location.short}
                  <br />
                  {siteConfig.contact.location.service}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p
            className="text-xs leading-6 text-white/40"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            © {currentYear} {siteConfig.shortName}. Todos os direitos
            reservados.
          </p>

          <a
            href="#inicio"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#b78b3d]/60 hover:text-[#d1ad6a]"
            aria-label="Voltar ao início"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}