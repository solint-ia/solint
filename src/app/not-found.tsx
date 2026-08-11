import type { Metadata } from "next";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-ink px-6 text-center">
      <span className="font-mono text-[11px]/none tracking-[0.14em] text-marker">
        erro 404
      </span>
      <h1 className="m-0 max-w-[520px] font-display text-[clamp(1.8rem,4vw,2.6rem)]/[1.16] font-semibold tracking-[-0.03em] text-balance text-white">
        Não encontramos essa página.
      </h1>
      <p className="m-0 max-w-[420px] text-pretty text-base/[1.65] font-light text-muted">
        O endereço pode ter mudado. Volte ao início para seguir navegando.
      </p>
      <Button href="/">Voltar para a home</Button>
    </main>
  );
}
