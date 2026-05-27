import { cn } from "@/shared/lib/cn";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "outline" | "ghost";
  icon?: ReactNode;
};

export function GoldButton({
  className,
  children,
  variant = "outline",
  icon,
  ...rest
}: Props) {
  const base =
    "group inline-flex items-center justify-between gap-6 px-6 py-4 text-[11px] uppercase tracking-[0.32em] font-medium transition-colors duration-300";

  const styles = {
    outline:
      "border border-gold/60 text-gold hover:border-gold hover:bg-gold/[0.06]",
    ghost: "text-gold hover:text-gold-2",
  } as const;

  return (
    <a className={cn(base, styles[variant], className)} {...rest}>
      <span>{children}</span>
      {icon ?? (
        <svg
          width="22"
          height="10"
          viewBox="0 0 22 10"
          fill="none"
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            d="M0 5h20m0 0L16 1m4 4l-4 4"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="square"
          />
        </svg>
      )}
    </a>
  );
}
