import Image from "next/image";
import { Container } from "@/shared/ui/Container";

type Item = {
  value: string;
  label: string;
  highlight?: boolean;
  isMap?: boolean;
};

const items: Item[] = [
  { value: "+1.000", label: "Nomes públicos atendidos" },
  { value: "+200", label: "Campanhas eleitorais vencedoras" },
  { value: "+10 anos", label: "De operação institucional" },
  { value: "Brasil & Portugal", label: "Atuação internacional", highlight: true },
  { value: "", label: "Centenas de prefeitos e deputados eleitos", isMap: true },
];

export function Stats() {
  return (
    <section
      aria-label="Números da operação"
      className="marble-divider relative border-y border-line"
    >
      <Container>
        <ul className="grid grid-cols-1 divide-y divide-line lg:grid-cols-5 lg:divide-x lg:divide-y-0">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex min-h-[100px] flex-col items-center justify-center px-5 py-5 text-center sm:py-6 lg:px-4"
            >
              {item.isMap ? (
                <div className="flex items-center gap-3">
                  <Image
                    src="/brasil.png"
                    alt="Mapa do Brasil em traço dourado"
                    width={64}
                    height={64}
                    className="h-11 w-11 object-contain"
                  />
                  <span className="max-w-[140px] text-left text-[9px] uppercase leading-[1.55] tracking-[0.26em] text-cream/90">
                    Centenas de
                    <br />
                    prefeitos e deputados
                    <br />
                    eleitos
                  </span>
                </div>
              ) : (
                <>
                  <div
                    className={
                      item.highlight
                        ? "font-serif text-[16px] uppercase tracking-[0.18em] text-gold sm:text-[17px]"
                        : "font-serif text-[24px] tracking-tight text-cream sm:text-[26px]"
                    }
                  >
                    {item.value}
                  </div>
                  <div className="mt-2 max-w-[190px] text-[9px] uppercase leading-[1.55] tracking-[0.26em] text-mute">
                    {item.label}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
