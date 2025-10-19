export default function SectionDivider() {
  return (
    <div className="relative w-full flex justify-center my-12">
      <div className="h-[1px] w-2/3 bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent animate-pulse" />
      {/* optional subtle glow dots */}
      <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full blur-[2px] animate-ping" />
    </div>
  );
}
