import type { Metadata } from "next";
import { JsonLd } from "@/shared/seo/JsonLd";
import { breadcrumb } from "@/shared/seo/schema";
import { siteConfig } from "@/shared/config/site";

const url = `${siteConfig.url}/termos-de-servico`;

export const metadata: Metadata = {
  title: "Termos de Serviço",
  description:
    "Condições gerais para prestação dos serviços de estratégia, posicionamento e operação institucional pela Lucas Freitas Agência.",
  alternates: { canonical: url },
  openGraph: {
    title: "Termos de Serviço | " + siteConfig.name,
    description: "Condições gerais para serviços e relações comerciais.",
    url,
    type: "article",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumb([
          { name: "Início", href: "/" },
          { name: "Termos de Serviço", href: "/termos-de-servico" },
        ])}
      />

      <p className="text-[11px] uppercase tracking-[0.42em] text-gold">
        Institucional
      </p>
      <h1 className="mt-4">Termos de Serviço</h1>

      <p>
        Estes Termos descrevem as condições gerais para a prestação dos
        serviços da <strong>Lucas Freitas Agência</strong>, integrando o
        contrato específico firmado entre as partes.
      </p>

      <h2>1. Objeto</h2>
      <p>
        Consultoria, estratégia, posicionamento, gestão de reputação,
        comunicação institucional e operação de bastidores para lideranças,
        campanhas, personalidades públicas e marcas no Brasil e em Portugal.
      </p>

      <h2>2. Curadoria de atendimento</h2>
      <p>
        A operação é reservada. Solicitações passam por avaliação preliminar e
        podem ser declinadas a critério da agência, preservando a coerência
        estratégica da carteira.
      </p>

      <h2>3. Confidencialidade</h2>
      <p>
        Todas as informações trocadas no contexto de contratos e propostas
        são tratadas como confidenciais. NDAs específicos podem ser firmados
        conforme a sensibilidade do projeto.
      </p>

      <h2>4. Remuneração e prazos</h2>
      <p>
        Valores, escopo, prazos, entregáveis e cláusulas de não-concorrência
        são definidos em proposta comercial específica, assinada por ambas as
        partes.
      </p>

      <h2>5. Responsabilidades do contratante</h2>
      <ul>
        <li>Fornecer informações verdadeiras e completas.</li>
        <li>Validar conteúdos e estratégias antes da execução.</li>
        <li>Cumprir obrigações financeiras e contratuais.</li>
      </ul>

      <h2>6. Rescisão</h2>
      <p>
        As hipóteses, prazos e efeitos da rescisão são previstos no contrato
        específico. Descumprimento grave autoriza rescisão imediata.
      </p>

      <h2>7. Foro</h2>
      <p>
        Aplicável o foro estipulado em contrato; na ausência, o da sede da
        agência.
      </p>

      <p className="text-[12px] uppercase tracking-[0.28em] text-mute">
        Última atualização: 27 de maio de 2026
      </p>
    </>
  );
}
