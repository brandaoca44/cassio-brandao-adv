import {
  FileSearch,
  Lightbulb,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Contato inicial",
    description:
      "O cliente apresenta sua situação e fornece as informações iniciais necessárias para o atendimento.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Análise jurídica",
    description:
      "Os fatos e documentos são avaliados cuidadosamente para identificar riscos, direitos e possibilidades.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Definição da estratégia",
    description:
      "São apresentadas as alternativas jurídicas mais adequadas, com explicações claras sobre cada caminho.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Acompanhamento",
    description:
      "O cliente recebe orientação e acompanhamento durante todas as etapas do atendimento jurídico.",
  },
];

export function ServiceProcessSection() {
  return (
    <section
      id="atendimento"
      className="relative overflow-hidden bg-[#f7f7f7] py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-48 top-0 h-[32rem] w-[32rem] rounded-full border border-[#b78b3d]/10" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a47831]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Como funciona
          </p>

          <h2
            className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.025em] text-[#292929] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Um atendimento jurídico claro e organizado.
          </h2>

          <p
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#707070]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Do primeiro contato ao acompanhamento da demanda, cada etapa é
            conduzida com transparência, responsabilidade e atenção.
          </p>
        </div>

        <div className="relative mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-11 hidden h-px bg-gradient-to-r from-transparent via-[#b78b3d]/30 to-transparent xl:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group relative rounded-[1.75rem] border border-[#b8bec7]/30 bg-white p-7 shadow-[0_18px_50px_rgba(30,30,30,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#b78b3d]/35 hover:shadow-[0_24px_65px_rgba(30,30,30,0.08)]"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#b78b3d]/30 bg-white shadow-[0_10px_30px_rgba(30,30,30,0.08)] transition duration-300 group-hover:border-[#b78b3d]/70">
                    <Icon
                      size={21}
                      strokeWidth={1.5}
                      className="text-[#a47831]"
                    />
                  </div>

                  <span
                    className="text-4xl font-semibold text-black/[0.06]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="mt-7 text-2xl font-semibold text-[#303030]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {step.title}
                </h3>

                <div className="mt-4 h-px w-9 bg-[#b78b3d]/55 transition-all duration-300 group-hover:w-16" />

                <p
                  className="mt-5 text-sm leading-7 text-[#707070]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}