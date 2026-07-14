import { practiceAreas } from "@/lib/practice-areas";

export function PracticeAreasSection() {
  return (
    <section
      id="atuacao"
      className="relative overflow-hidden bg-[#f7f7f7] py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-56 top-10 h-[34rem] w-[34rem] rounded-full border border-[#b78b3d]/10" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a47831]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Áreas de atuação
          </p>

          <h2
            className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#292929] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Soluções jurídicas para diferentes necessidades.
          </h2>

          <p
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#707070]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Atendimento técnico, responsável e personalizado, com análise
            cuidadosa de cada situação.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <article
                key={area.id}
                className={`group rounded-[1.75rem] border border-black/5 bg-white p-7 shadow-[0_18px_50px_rgba(30,30,30,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#b78b3d]/30 hover:shadow-[0_24px_60px_rgba(30,30,30,0.08)] sm:p-8 ${
                  index === practiceAreas.length - 1
                    ? "md:col-span-2 xl:col-span-1"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b78b3d]/25 bg-[#fafafa] shadow-sm transition duration-300 group-hover:rotate-3 group-hover:border-[#b78b3d]/60 group-hover:bg-white">
                    <Icon
                      size={21}
                      strokeWidth={1.5}
                      className="text-[#a47831]"
                    />
                  </div>

                  <span
                    className="text-xs font-semibold text-[#c4c4c4]"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className="mt-8 text-2xl font-semibold text-[#303030]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {area.title}
                </h3>

                <div className="mt-4 h-px w-10 bg-[#b78b3d]/60 transition-all duration-300 group-hover:w-16" />

                <p
                  className="mt-5 text-sm leading-7 text-[#707070]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {area.shortDescription}
                </p>

                <a
                  href={`https://wa.me/557191447099?text=${encodeURIComponent(
                    `Olá, gostaria de obter informações sobre ${area.title}.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9a732f] transition hover:text-[#6f501f]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Solicitar orientação
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}