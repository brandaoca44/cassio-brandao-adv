import {
  BookOpen,
  BriefcaseBusiness,
  Cpu,
  GraduationCap,
  Handshake,
  MonitorCheck,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Formação sólida",
    description:
      "Especialização em Direito dos Contratos, MBA em Administração Pública e formação em Gestão de Pessoas.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Visão estratégica",
    description:
      "Integração entre conhecimento jurídico, gestão, administração e relações profissionais.",
  },
  {
    icon: BookOpen,
    title: "Atualização constante",
    description:
      "Capacitação contínua em diferentes áreas do Direito, gestão e transformação digital.",
  },
  {
    icon: Cpu,
    title: "Atuação moderna",
    description:
      "Conhecimento sobre contratos eletrônicos, Direito Digital, tecnologia e novas relações jurídicas.",
  },
  {
    icon: MonitorCheck,
    title: "Experiência com sistemas",
    description:
      "Atuação com PJe, Projudi, TRT5, TRF1, e-CAC, INSS e outros sistemas institucionais.",
  },
  {
    icon: Handshake,
    title: "Relacionamento humano",
    description:
      "Atendimento baseado em ética, respeito, escuta e comunicação clara.",
  },
];

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="border-t border-black/5 bg-white py-24 sm:py-28"
    >
      <div className="container grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a47831]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Sobre o advogado
          </p>

          <h2
            className="mt-5 max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-0.025em] text-[#292929] sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Experiência, formação e compromisso.
          </h2>

          <div className="mt-7 h-px w-14 bg-[#b78b3d]" />

          <p
            className="mt-8 max-w-xl text-base leading-8 text-[#686868]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Cássio Brandão é advogado inscrito na OAB/BA, especialista
            em Direito dos Contratos e profissional com formação
            complementar em Administração Pública, Gestão de Pessoas e
            Recursos Humanos.
          </p>

          <p
            className="mt-5 max-w-xl text-base leading-8 text-[#686868]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Sua atuação reúne conhecimento jurídico, capacidade
            analítica e uma compreensão ampla das necessidades de
            pessoas, profissionais, empresas e instituições.
          </p>

          <a
            href="#contato"
            className="mt-9 inline-flex items-center justify-center rounded-full border border-[#b78b3d] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#8f682a] transition duration-300 hover:bg-[#b78b3d] hover:text-white"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Falar com o advogado
          </a>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-black/5 bg-black/5 sm:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group bg-[#fafafa] p-7 transition duration-300 hover:bg-white sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#b78b3d]/20 bg-white shadow-sm transition duration-300 group-hover:border-[#b78b3d]/50">
                  <Icon
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#a47831]"
                  />
                </div>

                <h3
                  className="mt-6 text-xl font-semibold text-[#303030]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-7 text-[#707070]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}