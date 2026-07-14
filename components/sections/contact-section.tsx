"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Scale,
} from "lucide-react";
import {
  emailUrl,
  siteConfig,
  whatsappUrl,
} from "@/lib/site";

const areas = [
  "Direito dos Contratos",
  "Direito do Consumidor",
  "Direito Administrativo",
  "Direito Trabalhista",
  "Direito Previdenciário",
  "Direito Digital",
  "Consultoria Jurídica",
  "Outro assunto",
];

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Solicitação de atendimento jurídico - ${name}`,
    );

    const body = encodeURIComponent(
      [
        `Nome: ${name}`,
        `Telefone: ${phone}`,
        `Área jurídica: ${area}`,
        "",
        "Descrição da situação:",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:advcassiobrandao@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-52 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[#d8d8d8]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-10 h-[28rem] w-[28rem] rounded-full border border-[#b78b3d]/10" />

      <div className="container relative">
        <div className="overflow-hidden rounded-[2.5rem] border border-[#b8bec7]/30 bg-gradient-to-br from-[#ffffff] via-[#fafafa] to-[#eeeeee] shadow-[0_30px_90px_rgba(30,30,30,0.08)]">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative overflow-hidden border-b border-black/5 p-8 sm:p-12 lg:border-b-0 lg:border-r lg:p-14">
              <div className="absolute -left-28 -top-28 h-72 w-72 rounded-full border border-[#b78b3d]/10" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#b78b3d]/30 bg-white shadow-[0_10px_30px_rgba(30,30,30,0.07)]">
                  <Scale
                    size={23}
                    strokeWidth={1.4}
                    className="text-[#a47831]"
                  />
                </div>

                <p
                  className="mt-9 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a47831]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Entre em contato
                </p>

                <h2
                  className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.025em] text-[#292929] sm:text-5xl"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Vamos analisar sua situação com responsabilidade.
                </h2>

                <p
                  className="mt-7 text-base leading-8 text-[#6d6d6d]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Envie uma breve descrição da sua necessidade. O contato será
                  utilizado para uma avaliação inicial do atendimento.
                </p>

                <div className="mt-10 space-y-5">
                  <a
                    href={emailUrl}
                    className="group flex items-center gap-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#b78b3d]/25 bg-white">
                      <Mail
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#a47831]"
                      />
                    </span>

                    <span>
                      <span
                        className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#929292]"
                        style={{ fontFamily: "var(--font-manrope)" }}
                      >
                        E-mail
                      </span>

                      <span
                        className="mt-1 block break-all text-sm font-semibold text-[#383838] transition group-hover:text-[#a47831]"
                        style={{ fontFamily: "var(--font-manrope)" }}
                      >
                        {siteConfig.contact.email}
                      </span>
                    </span>
                  </a>

                   <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4"
                      >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#b78b3d]/25 bg-white">
                      <MessageCircle
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#a47831]"
                   />
               </span>

              <span>
                <span
                        className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#929292]"
                        style={{ fontFamily: "var(--font-manrope)" }}
                     >
                        {siteConfig.contact.phone.formatted}
                </span>

                 <span
                       className="mt-1 block text-sm font-semibold text-[#383838] transition group-hover:text-[#a47831]"
                       style={{ fontFamily: "var(--font-manrope)" }}
                    >
                       +55 71 9144-7099
                 </span>
                  </span>
                 </a>

                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#b78b3d]/25 bg-white">
                      <MapPin
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#a47831]"
                      />
                    </span>

                    <span>
                      <span
                        className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#929292]"
                        style={{ fontFamily: "var(--font-manrope)" }}
                      >
                        Atendimento
                      </span>

                      <span
                        className="mt-1 block text-sm font-semibold text-[#383838]"
                        style={{ fontFamily: "var(--font-manrope)" }}
                      >
                        Salvador, Bahia e atendimento online
                      </span>
                    </span>
                  </div>
                </div>

                <div className="mt-10 border-t border-black/5 pt-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#a47831]"
                    />

                    <p
                      className="text-xs leading-6 text-[#777777]"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      Atendimento pautado pela confidencialidade, ética
                      profissional e respeito às particularidades de cada caso.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/70 p-8 sm:p-12 lg:p-14">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#555555]"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    Nome completo
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Digite seu nome"
                    className="h-14 w-full rounded-2xl border border-black/10 bg-white px-5 text-sm text-[#303030] outline-none transition placeholder:text-[#aaaaaa] focus:border-[#b78b3d]/60 focus:ring-4 focus:ring-[#b78b3d]/5"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#555555]"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      Telefone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="(00) 00000-0000"
                      className="h-14 w-full rounded-2xl border border-black/10 bg-white px-5 text-sm text-[#303030] outline-none transition placeholder:text-[#aaaaaa] focus:border-[#b78b3d]/60 focus:ring-4 focus:ring-[#b78b3d]/5"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="area"
                      className="mb-2.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#555555]"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      Área jurídica
                    </label>

                    <select
                      id="area"
                      name="area"
                      required
                      value={area}
                      onChange={(event) => setArea(event.target.value)}
                      className="h-14 w-full rounded-2xl border border-black/10 bg-white px-5 text-sm text-[#303030] outline-none transition focus:border-[#b78b3d]/60 focus:ring-4 focus:ring-[#b78b3d]/5"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      <option value="" disabled>
                        Selecione uma área
                      </option>

                      {areas.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#555555]"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    Conte brevemente sua situação
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Descreva brevemente como podemos ajudar..."
                    className="w-full resize-none rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm leading-7 text-[#303030] outline-none transition placeholder:text-[#aaaaaa] focus:border-[#b78b3d]/60 focus:ring-4 focus:ring-[#b78b3d]/5"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#b78b3d] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_18px_40px_rgba(183,139,61,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#9e752f]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Enviar solicitação
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

                <p
                  className="text-center text-[11px] leading-5 text-[#8a8a8a]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  O envio das informações não estabelece automaticamente uma
                  relação advogado-cliente.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}