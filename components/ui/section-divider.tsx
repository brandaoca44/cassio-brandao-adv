export function SectionDivider() {
  return (
    <div
      className="flex items-center justify-center gap-4 bg-white py-5"
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#b78b3d]/50 sm:w-28" />

      <span className="relative flex h-7 w-7 items-center justify-center">
        <span className="absolute h-3 w-3 rotate-45 border border-[#b78b3d]/45 bg-white" />
        <span className="relative h-1 w-1 rounded-full bg-[#b78b3d]" />
      </span>

      <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#b78b3d]/50 sm:w-28" />
    </div>
  );
}