import type { Metadata } from "next";
import { JsonLd } from "@/shared/seo/JsonLd";
import { breadcrumb } from "@/shared/seo/schema";
import { siteConfig } from "@/shared/config/site";

const url = `${siteConfig.url}/termos-de-uso`;

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Regras de acesso, navegação e utilização do site da Lucas Freitas Agência.",
  alternates: { canonical: url },
  openGraph: {
    title: "Termos de Uso | " + siteConfig.name,
    description: "Regras de acesso, navegação e uso do site.",
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
          { name: "Termos de Uso", href: "/termos-de-uso" },
        ])}
      />

      <p className="text-[11px] uppercase tracking-[0.42em] text-gold">
        Institucional
      </p>
      <h1 className="mt-4">Termos de Uso</h1>

      <p>
        Estes Termos regem o acesso e a utilização do site{" "}
        <a href={siteConfig.url}>{siteConfig.url}</a>, mantido pela{" "}
        <strong>Lucas Freitas Agência</strong>. Ao acessar ou utilizar o site,
        você declara concordar integralmente com estes Termos.
      </p>

      <h2>1. Uso permitido</h2>
      <p>
        O site é disponibilizado para fins informativos e institucionais. É
        vedado o uso para finalidade ilícita, ofensiva, fraudulenta ou que
        viole direitos de terceiros.
      </p>

      <h2>2. Propriedade intelectual</h2>
      <p>
        Marcas, logotipos, textos, imagens, vídeos e demais elementos
        publicados são protegidos por direitos de propriedade intelectual. É
        proibida a reprodução, distribuição, modificação ou uso comercial sem
        autorização prévia e por escrito.
      </p>

      <h2>3. Conta e contato</h2>
      <p>
        Informações enviadas por formulários e canais oficiais devem ser
        verdadeiras. Reservamo-nos o direito de não responder a solicitações
        que não se enquadrem na curadoria de atendimento.
      </p>

      <h2>4. Links externos</h2>
      <p>
        Eventuais links para sites de terceiros são oferecidos por
        conveniência. Não assumimos responsabilidade pelo conteúdo, políticas
        ou práticas desses sites.
      </p>

      <h2>5. Limitação de responsabilidade</h2>
      <p>
        Empregamos esforços para manter o site disponível, preciso e seguro,
        mas não garantimos ausência de erros, interrupções ou falhas. Na
        máxima extensão permitida em lei, não nos responsabilizamos por
        prejuízos decorrentes de uso ou indisponibilidade.
      </p>

      <h2>6. Alterações</h2>
      <p>
        Estes Termos podem ser alterados a qualquer tempo. O uso continuado do
        site após publicação implica concordância com a versão vigente.
      </p>

      <h2>7. Foro</h2>
      <p>
        Fica eleito o foro da comarca da sede da agência, com renúncia a
        qualquer outro, para dirimir questões oriundas destes Termos.
      </p>

      <p className="text-[12px] uppercase tracking-[0.28em] text-mute">
        Última atualização: 27 de maio de 2026
      </p>
    </>
  );
}
