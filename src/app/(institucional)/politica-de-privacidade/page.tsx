import type { Metadata } from "next";
import { JsonLd } from "@/shared/seo/JsonLd";
import { breadcrumb } from "@/shared/seo/schema";
import { siteConfig } from "@/shared/config/site";

const url = `${siteConfig.url}/politica-de-privacidade`;

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Lucas Freitas Agência coleta, utiliza e protege dados pessoais conforme a LGPD (Lei 13.709/2018).",
  alternates: { canonical: url },
  openGraph: {
    title: "Política de Privacidade | " + siteConfig.name,
    description: "Tratamento de dados pessoais conforme a LGPD.",
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
          { name: "Política de Privacidade", href: "/politica-de-privacidade" },
        ])}
      />

      <p className="text-[11px] uppercase tracking-[0.42em] text-gold">
        Institucional
      </p>
      <h1 className="mt-4">Política de Privacidade</h1>

      <p>
        Esta política descreve como a <strong>Lucas Freitas Agência</strong>{" "}
        (&quot;nós&quot;) coleta, utiliza, armazena e protege dados pessoais de
        visitantes e clientes deste site, em conformidade com a Lei Geral de
        Proteção de Dados Pessoais — LGPD (Lei nº 13.709/2018).
      </p>

      <h2>1. Dados que coletamos</h2>
      <ul>
        <li>
          <strong>Dados de identificação:</strong> nome, e-mail, telefone e
          empresa, quando voluntariamente informados em formulários ou contato
          institucional.
        </li>
        <li>
          <strong>Dados de navegação:</strong> endereço IP, tipo de dispositivo,
          páginas visitadas e tempo de permanência — coletados por cookies e
          ferramentas de análise.
        </li>
      </ul>

      <h2>2. Finalidade do tratamento</h2>
      <ul>
        <li>Responder a solicitações de curadoria e contato institucional.</li>
        <li>Cumprir obrigações legais, regulatórias e contratuais.</li>
        <li>Melhorar a experiência de navegação e segurança do site.</li>
        <li>Avaliar interesse e adequação a projetos sob curadoria.</li>
      </ul>

      <h2>3. Base legal</h2>
      <p>
        O tratamento é realizado com base em consentimento, execução de
        contrato, cumprimento de obrigação legal e legítimo interesse, conforme
        previsto nos artigos 7º e 11 da LGPD.
      </p>

      <h2>4. Compartilhamento</h2>
      <p>
        Dados podem ser compartilhados com prestadores de serviços essenciais
        (hospedagem, e-mail, analytics) sob contrato e cláusula de
        confidencialidade. Não comercializamos dados pessoais.
      </p>

      <h2>5. Direitos do titular</h2>
      <p>
        O titular pode, a qualquer tempo, solicitar: confirmação, acesso,
        correção, anonimização, portabilidade, eliminação, revogação de
        consentimento e informação sobre compartilhamento. As solicitações
        devem ser enviadas para <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>

      <h2>6. Retenção e segurança</h2>
      <p>
        Dados são armazenados pelo tempo necessário à finalidade ou exigência
        legal. Aplicamos medidas técnicas e organizacionais para proteger as
        informações contra acesso não autorizado.
      </p>

      <h2>7. Encarregado (DPO)</h2>
      <p>
        Encarregado de proteção de dados: contato institucional via{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>

      <p className="text-[12px] uppercase tracking-[0.28em] text-mute">
        Última atualização: 27 de maio de 2026
      </p>
    </>
  );
}
