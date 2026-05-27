import type { Metadata } from "next";
import { JsonLd } from "@/shared/seo/JsonLd";
import { breadcrumb, personSchema } from "@/shared/seo/schema";
import { siteConfig } from "@/shared/config/site";

const url = `${siteConfig.url}/sobre-nos`;

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Lucas Freitas Agência — operação institucional de influência, estratégia e resultados ao lado de lideranças, campanhas e marcas no Brasil e em Portugal.",
  alternates: { canonical: url },
  openGraph: {
    title: "Sobre Nós | " + siteConfig.name,
    description:
      "Operação institucional reservada de influência e posicionamento.",
    url,
    type: "article",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Sobre Nós",
  url,
  description: metadata.description,
  isPartOf: { "@type": "WebSite", url: siteConfig.url, name: siteConfig.name },
};

export default function SobreNosPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <JsonLd data={personSchema} />
      <JsonLd
        data={breadcrumb([
          { name: "Início", href: "/" },
          { name: "Sobre Nós", href: "/sobre-nos" },
        ])}
      />

      <p className="text-[11px] uppercase tracking-[0.42em] text-gold">
        Sobre Nós
      </p>
      <h1 className="mt-4">
        Operação institucional <span className="text-gold">conduzida com método.</span>
      </h1>

      <p>
        A <strong>Lucas Freitas Agência</strong> é uma operação reservada de
        influência, posicionamento e autoridade. Atua ao lado de lideranças
        políticas, personalidades públicas, artistas, atletas, diretorias de
        clubes e grandes marcas — no Brasil e em Portugal.
      </p>

      <h2>Missão</h2>
      <p>
        Construir e proteger reputação pública com estratégia, leitura de
        cenário e disciplina de execução. Cada projeto recebe avaliação
        preliminar antes do início do atendimento.
      </p>

      <h2>Trajetória</h2>
      <p>
        Mais de uma década de operação institucional, com participação em
        centenas de campanhas eleitorais vencedoras — prefeitos, deputados e
        lideranças nacionais — e na gestão de imagem de mais de mil nomes
        públicos. Em Portugal, atua junto a diretorias de clubes, lideranças e
        projetos institucionais.
      </p>

      <h2>Método</h2>
      <ul>
        <li>Diagnóstico de posicionamento, percepção e narrativa.</li>
        <li>Plano de influência com objetivos de curto, médio e longo prazo.</li>
        <li>Operação de bastidores — discrição absoluta.</li>
        <li>Mensuração contínua de autoridade e reputação.</li>
      </ul>

      <h2>Equipe</h2>
      <p>
        Liderada por <strong>Lucas Freitas</strong>, estrategista institucional,
        a operação reúne especialistas em estratégia eleitoral, comunicação,
        relações públicas, jurídico, dados e direção criativa.
      </p>

      <h2>Contato institucional</h2>
      <p>
        E-mail:{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        <br />
        Instagram: {siteConfig.instagram}
        <br />
        Atendimento somente por agendamento — agenda limitada por curadoria.
      </p>

      <p className="text-[12px] uppercase tracking-[0.28em] text-mute">
        Última atualização: 27 de maio de 2026
      </p>
    </>
  );
}
