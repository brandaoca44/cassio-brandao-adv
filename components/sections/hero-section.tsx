"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  Award,
  Building2,
  CalendarDays,
  Scale,
  ShieldCheck,
} from "lucide-react";

const highlights = [
  {
    icon: Scale,
    title: "OAB/BA",
    description: "85.055",
  },
  {
    icon: Award,
    title: "Especialista",
    description: "Direito dos Contratos",
  },
  {
    icon: Building2,
    title: "MBA",
    description: "Administração Pública",
  },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-[#b78b3d]/15 bg-[#faf9f7] pb-14 pt-28 sm:pt-32 lg:min-h-screen lg:pb-0 lg:pt-20"
    >
      <div className="hero-marble pointer-events-none absolute inset-0 opacity-50" />

      <div className="pointer-events-none absolute -right-44 top-20 h-[34rem] w-[34rem] rounded-full border border-[#b78b3d]/10" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#d9d9d9]/20 blur-3xl" />

      <div className="container relative grid items-center gap-14 lg:min-h-[calc(100vh-80px)] lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="py-6 lg:py-12"
        >
          <div
            className="mb-6 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.19em] text-[#9a732f] sm:text-[11px]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            <span className="h-px w-10 bg-[#b78b3d]" />
            Advocacia & Consultoria Jurídica
          </div>

          <h1
            className="max-w-[520px] text-[2.15rem] font-medium leading-[1.1] tracking-[-0.03em] text-[#292929] sm:text-[2.7rem] lg:text-[3.2rem] xl:text-[3.55rem]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Segurança jurídica
            <br />
            para decisões que
            <br />
            <span className="gold-text italic">
              realmente importam.
            </span>
          </h1>

          <div className="mt-6 h-px w-20 bg-[#b78b3d]" />

          <p
            className="mt-7 max-w-[470px] text-[15px] leading-7 text-[#606060]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Atendimento jurídico responsável, moderno e próximo, com soluções
            construídas a partir das necessidades de cada pessoa, profissional
            ou organização.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contato"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#b78b3d] px-7 text-[10px] font-semibold uppercase tracking-[0.13em] text-white shadow-[0_18px_40px_rgba(183,139,61,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#9e752f]"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              <CalendarDays size={17} strokeWidth={1.6} />
              Agendar uma consulta

              <ArrowRight
                size={15}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#atuacao"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#8d8d8d]/45 bg-white/65 px-7 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#333333] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#b78b3d] hover:bg-white"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Áreas de atuação

              <ArrowRight
                size={15}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="mt-10 grid max-w-[620px] gap-6 border-t border-[#b78b3d]/20 pt-7 sm:grid-cols-3 sm:gap-0">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 ${
                    index > 0
                      ? "sm:border-l sm:border-[#b78b3d]/20 sm:pl-5"
                      : ""
                  }`}
                >
                  <Icon
                    size={25}
                    strokeWidth={1.35}
                    className="mt-0.5 shrink-0 text-[#a47831]"
                  />

                  <div>
                    <p
                      className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#424242]"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      {item.title}
                    </p>

                    <p
                      className="mt-1 text-xs leading-5 text-[#6c6c6c]"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, x: 18 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.85,
            delay: 0.12,
            ease: "easeOut",
          }}
          className="relative mx-auto w-full max-w-[590px] self-end lg:mx-0 lg:ml-auto"
        >
          <div className="absolute -inset-[1px] rounded-t-[2.4rem] bg-gradient-to-br from-[#d1ad6a] via-[#b78b3d]/35 to-[#f1dfb7]" />

          <div className="relative overflow-hidden rounded-t-[2.35rem] bg-[#171717] p-[7px] shadow-[0_30px_80px_rgba(24,24,24,0.18)]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[2rem] bg-[#171717] sm:aspect-[5/6] lg:min-h-[620px] lg:aspect-auto">
              <Image
                src="/images/cassio-brandao.jpeg"
                alt="Cássio Brandão, advogado"
                fill
                priority
                quality={100}
                sizes="(max-width: 1024px) 100vw, 720px"
                className="object-cover object-center"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/5" />

              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />

              <div className="absolute inset-x-5 bottom-5 rounded-[1.4rem] border border-[#d1ad6a]/50 bg-[#111111]/78 p-5 shadow-[0_22px_55px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:inset-x-7 sm:bottom-7 sm:p-6">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p
                      className="text-[11px] font-semibold uppercase tracking-[0.20em] text-[#d1ad6a]"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      Cássio Brandão
                    </p>

                    <p
                      className="mt-2 text-[1.15rem] font-medium leading-snug text-white sm:text-[1.45rem]"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      Advocacia & Consultoria Jurídica
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <span className="h-px w-10 bg-[#d1ad6a]" />

                      <span
                        className="text-[9px] uppercase tracking-[0.15em] text-white/60"
                        style={{ fontFamily: "var(--font-manrope)" }}
                      >
                        Ética · Estratégia · Confiança
                      </span>
                    </div>
                  </div>

                  <div className="hidden shrink-0 border-l border-[#d1ad6a]/35 pl-5 sm:block">
                    <Scale
                      size={28}
                      strokeWidth={1.3}
                      className="mx-auto text-[#d1ad6a]"
                    />

                    <p
                      className="mt-2 text-center text-[9px] font-semibold uppercase tracking-[0.12em] text-white/70"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      OAB/BA
                    </p>

                    <p
                      className="mt-1 text-center text-xs font-semibold text-[#d1ad6a]"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      85.055
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#d1ad6a]/35 bg-black/20 backdrop-blur-md">
                <ShieldCheck
                  size={19}
                  strokeWidth={1.5}
                  className="text-[#d1ad6a]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}