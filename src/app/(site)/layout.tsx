import { SiteFooter, SiteHeader } from "@/components/layout";

/**
 * Casca comum de todas as páginas do site: header fixo, conteúdo e rodapé.
 * O halo de fundo fica a cargo de cada página, que tem seu próprio arranjo.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink">
      <SiteHeader />
      <main className="relative z-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
