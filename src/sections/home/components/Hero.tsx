import Image from "next/image";
import { Container } from "@/shared/ui/Container";
import { GoldButton } from "@/shared/ui/GoldButton";

export function Hero() {
  return (
    <section
      id="topo"
      aria-label="Apresentação"
      className="relative isolate flex flex-col overflow-hidden bg-ink pb-14 pt-24 sm:pt-28 lg:min-h-[88vh] lg:justify-center lg:pb-10 lg:pt-28 xl:min-h-[90vh]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(140%_80%_at_70%_25%,rgba(201,162,76,0.10),transparent_55%),radial-gradient(80%_60%_at_8%_95%,rgba(201,162,76,0.06),transparent_60%)]"
      />

      <Container className="relative grid items-center gap-10 lg:grid-cols-[48fr_52fr] lg:gap-10">
        <div className="relative z-10 order-2 flex flex-col justify-center lg:order-1 lg:py-4">
          <p className="text-[10px] uppercase tracking-[0.42em] text-gold sm:text-[11px]">
            Influência <span className="text-gold/40">·</span> Estratégia{" "}
            <span className="text-gold/40">·</span> Resultados
          </p>

          <h1 className="mt-5 font-serif text-[34px] font-medium leading-[1.04] tracking-[-0.015em] text-cream sm:mt-6 sm:text-[46px] md:text-[58px] lg:text-[70px] xl:text-[82px]">
            CONSTRUÍMOS
            <br />
            INFLUÊNCIA REAL<span className="text-gold">.</span>
          </h1>

          <p className="mt-6 max-w-md text-[13px] leading-[1.7] text-mute sm:mt-7 sm:text-[14px]">
            Atuação reservada ao lado de nomes públicos, campanhas, operações
            institucionais e marcas que dependem de percepção, influência e
            autoridade.
          </p>

          <div className="mt-7 sm:mt-9">
            <GoldButton href="#contato" className="w-full sm:w-auto">
              Solicitar curadoria
            </GoldButton>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 -translate-y-2 scale-110 bg-[radial-gradient(50%_55%_at_55%_45%,rgba(201,162,76,0.14),transparent_72%)] blur-xl"
          />

          <div
            className="group/photo relative mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden sm:max-w-[420px] lg:ml-auto lg:aspect-[3/4] lg:max-w-[500px]"
            style={{
              boxShadow:
                "0 40px 80px -20px rgba(0,0,0,0.75), 0 0 0 1px rgba(201,162,76,0.08)",
            }}
          >
            <div className="absolute inset-0 scale-[1.08]">
              <Image
                src="/founder.png"
                alt="Lucas Freitas, estrategista institucional, em retrato corporativo"
                fill
                priority
                sizes="(min-width: 1024px) 500px, (min-width: 640px) 420px, 90vw"
                className="object-cover object-[50%_22%]"
                style={{
                  filter: "brightness(0.88) contrast(1.1) saturate(0.88)",
                }}
              />
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_55%_38%,transparent_42%,rgba(7,6,10,0.55)_96%)]"
            />

            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-ink/85 via-ink/25 to-transparent"
            />

            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent"
            />

            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-ink/55 to-transparent"
            />
          </div>
        </div>
      </Container>

      <div
        aria-hidden
        className="vertical-rail pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 text-[9px] font-medium uppercase text-gold/55 lg:block lg:right-5"
      >
        Discrição · Estratégia · Resultados
      </div>
    </section>
  );
}
