import {
  BrainCircuit,
  Handshake,
  MessageSquareText,
  Scale,
} from "lucide-react";

const differentials = [
  {
    icon: Scale,
    number: "01",
    title: "Análise individual",
    description:
      "Cada situação é estudada de forma cuidadosa, considerando suas particularidades, riscos e possibilidades.",
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "Visão multidisciplinar",
    description:
      "Integração entre Direito, administração, gestão de pessoas e conhecimento sobre relações digitais.",
  },
  {
    icon: MessageSquareText,
    number: "03",
    title: "Comunicação clara",
    description:
      "Orientações objetivas e acessíveis para que cada decisão seja tomada com segurança e compreensão.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "Atendimento próximo",
    description:
      "Relacionamento profissional baseado em ética, respeito, disponibilidade e confiança.",
  },
];

export function DifferentialsSection() {
  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute left-[-15rem] top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-[#d8d8d8]/20 blur-3xl" />

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a47831]"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Diferenciais
            </p>

            <h2
              className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.025em] text-[#292929] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Conhecimento técnico com atendimento humano.
            </h2>

            <div className="mt-7 h-px w-14 bg-[#b78b3d]" />

            <p
              className="mt-8 max-w-lg text-base leading-8 text-[#6d6d6d]"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              A atuação jurídica vai além da aplicação da lei. Exige escuta,
              planejamento, clareza e compreensão das consequências de cada
              decisão.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {differentials.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[1.8rem] border border-[#b8bec7]/30 bg-gradient-to-br from-white to-[#f4f4f4] p-7 shadow-[0_20px_55px_rgba(30,30,30,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-[#b78b3d]/35 hover:shadow-[0_28px_70px_rgba(30,30,30,0.09)] sm:p-8"
                >
                  <span
                    className="absolute right-6 top-5 text-5xl font-semibold text-black/[0.035]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {item.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b78b3d]/30 bg-white shadow-[0_8px_24px_rgba(30,30,30,0.06)] transition duration-300 group-hover:rotate-3 group-hover:border-[#b78b3d]/70">
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-[#a47831]"
                    />
                  </div>

                  <h3
                    className="mt-7 text-2xl font-semibold text-[#303030]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {item.title}
                  </h3>

                  <div className="mt-4 h-px w-9 bg-[#b78b3d]/55 transition-all duration-300 group-hover:w-16" />

                  <p
                    className="mt-5 text-sm leading-7 text-[#707070]"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}