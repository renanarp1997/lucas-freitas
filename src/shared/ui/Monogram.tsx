import { cn } from "@/shared/lib/cn";

export function Monogram({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div
        aria-hidden
        className="font-serif text-[46px] leading-[0.85] tracking-[-0.04em] gold-gradient"
      >
        <span className="font-semibold italic">L</span>
        <span className="font-semibold -ml-[10px]">F</span>
      </div>
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-2">
          <span aria-hidden className="h-px w-3 bg-gold/55" />
          <span className="font-serif text-[12px] tracking-[0.32em] gold-gradient">
            LUCAS FREITAS
          </span>
          <span aria-hidden className="h-px w-3 bg-gold/55" />
        </div>
        <span className="mt-1.5 text-center text-[8px] tracking-[0.62em] text-gold/65">
          ESTRATEGISTA
        </span>
      </div>
    </div>
  );
}
