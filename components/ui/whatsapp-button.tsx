import { MessageCircle } from "lucide-react";

import { whatsappUrl } from "@/lib/site";

export function WhatsappButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar em contato pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#b78b3d] text-white shadow-[0_18px_45px_rgba(30,30,30,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#9e752f] focus:outline-none focus:ring-4 focus:ring-[#b78b3d]/20"
    >
      <span className="absolute inset-0 rounded-full border border-[#b78b3d]/40 opacity-0 transition duration-300 group-hover:scale-125 group-hover:opacity-100" />

      <MessageCircle size={23} strokeWidth={1.8} />
    </a>
  );
}