import { Container } from "@/shared/ui/Container";
import { GoldButton } from "@/shared/ui/GoldButton";
import { siteConfig } from "@/shared/config/site";

export function Contato() {
  return (
    <section
      id="contato"
      aria-label="Contato"
      className="relative bg-ink py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(201,162,76,0.10),transparent_70%)]"
      />
      <Container className="flex flex-col items-center text-center">
        <span className="text-[10px] uppercase tracking-[0.42em] text-gold sm:text-[11px]">
          Contato
        </span>
        <h2 className="mt-5 max-w-3xl font-serif text-[28px] leading-[1.1] text-cream sm:mt-6 sm:text-[36px] md:text-[48px]">
          Atendimento por agendamento.
          <br />
          Agenda limitada por curadoria<span className="text-gold">.</span>
        </h2>
        <p className="mt-5 max-w-xl text-[13px] leading-[1.7] text-mute sm:mt-6 sm:text-[15px]">
          Cada projeto recebe avaliação preliminar de posicionamento,
          influência e autoridade antes do início do atendimento.
        </p>

        <div className="mt-8 flex w-full max-w-sm flex-col items-center gap-5 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-6">
          <GoldButton
            href={`mailto:${siteConfig.email}`}
            className="w-full sm:w-auto"
          >
            Solicitar curadoria
          </GoldButton>
          <a
            href={`mailto:${siteConfig.email}`}
            className="break-all text-[11px] uppercase tracking-[0.32em] text-cream/85 underline-offset-8 hover:text-gold hover:underline sm:text-[12px]"
          >
            {siteConfig.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
