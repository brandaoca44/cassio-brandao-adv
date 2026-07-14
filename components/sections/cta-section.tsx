import { ArrowRight, Scale } from "lucide-react";

export function CtaSection() {
  return (
    <section className="bg-[#f7f7f7] px-4 py-10 sm:px-6 sm:py-14">
      <div className="container relative overflow-hidden rounded-[2.5rem] bg-[#292929] px-7 py-16 shadow-[0_30px_80px_rgba(30,30,30,0.16)] sm:px-12 lg:px-16 lg:py-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/5" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full border border-[#b78b3d]/15" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-72 bg-[#b78b3d]/5 blur-3xl" />

        <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <Scale
                size={18}
                strokeWidth={1.4}
                className="text-[#d1ad6a]"
              />

              <span
                className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d1ad6a]"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Orientação jurídica
              </span>
            </div>

            <h2
              className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Decisões importantes exigem segurança jurídica.
            </h2>

            <p
              className="mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Entre em contato para apresentar sua situação e entender quais
              caminhos jurídicos podem ser avaliados.
            </p>
          </div>

          <a
            href="#contato"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full border border-[#b78b3d] bg-[#b78b3d] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_18px_40px_rgba(183,139,61,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-[#9e752f]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Solicitar atendimento
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}