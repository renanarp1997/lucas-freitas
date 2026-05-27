import Image from "next/image";
import { Container } from "@/shared/ui/Container";
import { GoldButton } from "@/shared/ui/GoldButton";
import { OndeAtuamos } from "./OndeAtuamos";

export function About() {
  return (
    <section
      id="sobre"
      aria-label="Sobre"
      className="relative bg-ink py-16 sm:py-20 lg:py-24"
    >
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="relative hidden aspect-[3/4] w-full overflow-hidden grayscale md:block lg:col-span-3">
          <Image
            src="/WhatsApp Image 2026-05-27 at 16.39.37.jpeg"
            alt="Silhueta corporativa em janela urbana representando bastidores institucionais"
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent"
          />
        </div>

        <div className="lg:col-span-3">
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.42em] text-gold sm:text-[11px]">
              Sobre
            </span>
            <span className="h-px w-12 bg-gold/50" />
          </div>

          <h2 className="mt-5 font-serif text-[24px] leading-[1.1] text-cream sm:text-[26px] md:text-[30px]">
            Estratégia é saber influenciar com propósito<span className="text-gold">.</span>
          </h2>

          <div className="mt-6 space-y-3 text-[13px] leading-[1.7] text-mute sm:text-[14px]">
            <p>Nem toda influência é pública.</p>
            <p>Parte dela acontece nos bastidores.</p>
            <p>
              Presença pública não se improvisa. Ela é construída com método,
              leitura e posicionamento.
            </p>
          </div>

          <div className="mt-7">
            <GoldButton href="#trajetoria" variant="ghost" className="px-0">
              Conhecer trajetória
            </GoldButton>
          </div>
        </div>

        <div
          id="trajetoria"
          className="relative hidden aspect-[3/4] w-full overflow-hidden grayscale md:block lg:col-span-3"
        >
          <Image
            src="/WhatsApp Image 2026-05-27 at 16.39.37 (1).jpeg"
            alt="Auditório lotado representando a relação entre líder público e audiência"
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
          />
        </div>

        <div id="atuacao" className="lg:col-span-3">
          <OndeAtuamos />
        </div>
      </Container>
    </section>
  );
}
