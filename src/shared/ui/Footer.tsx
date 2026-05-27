import Link from "next/link";
import { Container } from "./Container";
import { Monogram } from "./Monogram";
import { legalPages, siteConfig } from "@/shared/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line bg-ink-2">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 sm:py-14 md:grid-cols-3 lg:gap-12 lg:py-20">
        <div className="space-y-5 sm:col-span-2 md:col-span-1">
          <Monogram />
          <p className="max-w-sm text-[13px] leading-relaxed text-mute sm:text-sm">
            Operação institucional reservada. Influência, estratégia e
            resultados ao lado de lideranças, campanhas e marcas que dependem
            de percepção e autoridade.
          </p>
        </div>

        <div>
          <h3 className="text-[10px] uppercase tracking-[0.32em] text-gold/80 sm:text-[11px]">
            Institucional
          </h3>
          <ul className="mt-4 space-y-3 text-[13px] text-cream/85 sm:mt-5 sm:text-sm">
            {legalPages.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="transition-colors hover:text-gold">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] uppercase tracking-[0.32em] text-gold/80 sm:text-[11px]">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-[13px] text-cream/85 sm:mt-5 sm:text-sm">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="break-all transition-colors hover:text-gold"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="text-mute">Instagram {siteConfig.instagram}</li>
            <li className="text-mute">Brasil · Portugal</li>
            <li className="text-mute">Atendimento por agendamento.</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col items-start justify-between gap-2 py-5 text-[10px] uppercase tracking-[0.28em] text-mute sm:flex-row sm:items-center sm:gap-3 sm:py-6 sm:text-[11px]">
          <span>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </span>
          <span className="text-gold/70">Discrição · Estratégia · Resultados</span>
        </Container>
      </div>
    </footer>
  );
}
