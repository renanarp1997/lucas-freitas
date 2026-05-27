import type { ReactNode } from "react";

const Icon = ({ children }: { children: ReactNode }) => (
  <span
    aria-hidden
    className="grid size-9 shrink-0 place-items-center text-gold"
  >
    {children}
  </span>
);

const items: Array<{ label: string; svg: ReactNode }> = [
  {
    label: "Lideranças públicas",
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round">
        <path d="M3 8l4 4 5-7 5 7 4-4-2 11H5L3 8z" />
        <circle cx="3" cy="7" r="1" fill="currentColor" stroke="none" />
        <circle cx="21" cy="7" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="3" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Cantores",
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M5 11a7 7 0 0014 0" />
        <path d="M12 18v3M9 21h6" />
      </svg>
    ),
  },
  {
    label: "Campanhas eleitorais",
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
        <rect x="3" y="9" width="18" height="11" rx="1" />
        <path d="M9 9V6h6v3" />
        <path d="M9 14h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Atores",
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
        <path d="M3 8h18v12H3z" />
        <path d="M3 8l3-3h3l-3 3M9 8l3-3h3l-3 3M15 8l3-3h3l-3 3" />
      </svg>
    ),
  },
  {
    label: "Artistas",
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
        <path d="M12 3l2.6 5.4 5.9.85-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.85L12 3z" />
      </svg>
    ),
  },
  {
    label: "Diretoria de clubes",
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
        <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Atletas",
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round">
        <path d="M8 4h8v4a4 4 0 01-8 0V4z" />
        <path d="M16 5h3v2a3 3 0 01-3 3M8 5H5v2a3 3 0 003 3" />
        <path d="M12 12v4" />
        <path d="M9 20h6l-1-4h-4l-1 4z" />
      </svg>
    ),
  },
  {
    label: "Grandes empresas",
    svg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
        <path d="M4 21V7l8-3 8 3v14" />
        <path d="M4 21h16" strokeLinecap="round" />
        <path d="M9 11h2M13 11h2M9 15h2M13 15h2M9 19h2M13 19h2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function OndeAtuamos() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.42em] text-gold">
          Atuação
        </span>
        <span className="h-px w-12 bg-gold/50" />
      </div>

      <h2 className="mt-6 font-serif text-[26px] leading-[1.1] text-cream md:text-[30px]">
        Onde atuamos
      </h2>

      <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5">
        {items.map((it) => (
          <li key={it.label} className="flex items-center gap-3">
            <Icon>{it.svg}</Icon>
            <span className="text-[11px] uppercase leading-tight tracking-[0.18em] text-cream/90">
              {it.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
