import { Scale } from "lucide-react";

type BrandLogoProps = {
  compact?: boolean;
  light?: boolean;
};

export function BrandLogo({
  compact = false,
  light = false,
}: BrandLogoProps) {
  const textColor = light ? "text-white" : "text-[#292929]";
  const secondaryColor = light ? "text-white/65" : "text-[#8f682a]";

  return (
    <div className="group flex items-center gap-3">
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
        <div
  className={`absolute inset-0 rotate-45 rounded-[0.9rem] border border-[#b78b3d]/35 shadow-[0_10px_28px_rgba(30,30,30,0.08)] transition duration-300 group-hover:rotate-[50deg] group-hover:border-[#b78b3d]/70 ${
    light ? "bg-white/5" : "bg-white"
  }`}
/>

        <span
          className={`relative z-10 text-lg font-semibold tracking-[-0.08em] ${
           light ? "text-[#d1ad6a]" : "text-[#a47831]"
  }`}
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          CB
        </span>

        <Scale
          size={11}
          strokeWidth={1.4}
          className="absolute -bottom-1 -right-1 z-20 rounded-full bg-[#b78b3d] p-[2px] text-white shadow-sm"
        />
      </div>

      {!compact && (
        <div className="flex flex-col">
          <span
            className={`text-xl font-semibold leading-none tracking-[0.06em] ${textColor}`}
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            CÁSSIO BRANDÃO
          </span>

          <span
            className={`mt-1.5 text-[9px] font-semibold uppercase tracking-[0.24em] ${secondaryColor}`}
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Advocacia & Consultoria Jurídica
          </span>
        </div>
      )}
    </div>
  );
}