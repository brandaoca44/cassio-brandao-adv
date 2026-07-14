"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { BrandLogo } from "@/components/ui/brand-logo";
import { mainNavigation } from "@/lib/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-black/5 bg-white/92 shadow-[0_10px_40px_rgba(30,30,30,0.06)] backdrop-blur-xl"
          : "border-black/5 bg-white/90 backdrop-blur-xl"
      }`}
    >
      <div
        className={`container flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-[72px]" : "h-20"
        }`}
      >
        <a
          href="#inicio"
          onClick={closeMenu}
          aria-label="Ir para o início"
        >
          <BrandLogo />
        </a>

        <nav
          className="hidden items-center gap-7 xl:flex"
          aria-label="Navegação principal"
        >
          {mainNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-[#626262] transition duration-300 hover:text-[#242424] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#b78b3d] after:transition-all after:duration-300 hover:after:w-full"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden items-center justify-center rounded-full border border-[#b78b3d] bg-[#b78b3d] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(183,139,61,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#9e752f] xl:inline-flex"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Agendar atendimento
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#292929] shadow-sm xl:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-black/5 bg-white px-5 py-5 shadow-xl xl:hidden">
          <nav className="container flex flex-col" aria-label="Menu mobile">
            {mainNavigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-black/5 py-4 text-sm font-medium text-[#3c3c3c]"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contato"
              onClick={closeMenu}
              className="mt-6 flex items-center justify-center rounded-full bg-[#b78b3d] px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Agendar atendimento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}