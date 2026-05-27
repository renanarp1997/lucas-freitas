import type { Metadata } from "next";
import { JsonLd } from "@/shared/seo/JsonLd";
import { breadcrumb } from "@/shared/seo/schema";
import { siteConfig } from "@/shared/config/site";

const url = `${siteConfig.url}/politica-de-cookies`;

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Como utilizamos cookies e tecnologias semelhantes neste site, e como você pode gerenciar suas preferências.",
  alternates: { canonical: url },
  openGraph: {
    title: "Política de Cookies | " + siteConfig.name,
    description: "Uso de cookies, consentimento e opções de gerenciamento.",
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
          { name: "Política de Cookies", href: "/politica-de-cookies" },
        ])}
      />

      <p className="text-[11px] uppercase tracking-[0.42em] text-gold">
        Institucional
      </p>
      <h1 className="mt-4">Política de Cookies</h1>

      <p>
        Esta política explica o uso de cookies e tecnologias similares pela{" "}
        <strong>Lucas Freitas Agência</strong> no site{" "}
        <a href={siteConfig.url}>{siteConfig.url}</a>.
      </p>

      <h2>1. O que são cookies</h2>
      <p>
        Cookies são pequenos arquivos de texto armazenados no seu dispositivo
        que permitem reconhecer preferências, melhorar a navegação e medir
        desempenho.
      </p>

      <h2>2. Tipos de cookies utilizados</h2>
      <ul>
        <li>
          <strong>Essenciais:</strong> indispensáveis ao funcionamento do site;
          não dependem de consentimento.
        </li>
        <li>
          <strong>Desempenho/analytics:</strong> coletam estatísticas de uso de
          forma agregada para melhorar a experiência.
        </li>
        <li>
          <strong>Funcionalidade:</strong> memorizam preferências (idioma,
          região).
        </li>
        <li>
          <strong>Marketing:</strong> usados eventualmente para mensurar
          campanhas; só ativados com seu consentimento.
        </li>
      </ul>

      <h2>3. Consentimento</h2>
      <p>
        Ao continuar navegando, você pode aceitar ou recusar categorias não
        essenciais. O consentimento pode ser revisto a qualquer momento pelo
        seu navegador ou pelo painel de preferências do site, quando
        disponível.
      </p>

      <h2>4. Como gerenciar</h2>
      <p>
        A maioria dos navegadores permite controlar cookies nas configurações.
        Bloquear cookies essenciais pode limitar o funcionamento do site.
      </p>

      <h2>5. Atualizações</h2>
      <p>
        Esta política pode ser atualizada para refletir mudanças regulatórias
        ou de produto. A data abaixo indica a versão vigente.
      </p>

      <p className="text-[12px] uppercase tracking-[0.28em] text-mute">
        Última atualização: 27 de maio de 2026
      </p>
    </>
  );
}
