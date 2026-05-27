import { Container } from "@/shared/ui/Container";

export function Quote() {
  return (
    <section
      aria-label="Assinatura"
      className="border-y border-line bg-ink-2 py-10 sm:py-12"
    >
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-10">
        <p className="relative max-w-3xl pl-7 font-serif text-[15px] uppercase leading-[1.5] tracking-[0.08em] text-cream sm:pl-8 sm:text-[18px] md:text-[22px]">
          <span
            aria-hidden
            className="absolute left-0 top-0 font-serif text-[40px] leading-none text-gold sm:text-[44px]"
          >
            “
          </span>
          Influência, política e imagem pública
          <br className="hidden sm:inline" />{" "}
          conduzidas com discrição e estratégia.
        </p>

        <p
          className="text-[26px] text-gold-2 sm:text-[28px] md:text-[32px]"
          style={{ fontFamily: "var(--font-script)" }}
        >
          Lucas Freitas
        </p>
      </Container>
    </section>
  );
}
