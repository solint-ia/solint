"use client";

import { useTypewriter } from "@/hooks";
import { cn } from "@/lib/utils";

interface TypedHeadingProps {
  /** Texto exibido antes do trecho animado. */
  lead: string;
  /** Trecho digitado, destacado com o gradiente ciano→azul. */
  typed: string;
  /** Texto exibido depois do trecho animado (normalmente a pontuação final). */
  tail?: string;
  className?: string;
}

/**
 * H1 com efeito de digitação no trecho em destaque.
 *
 * O texto completo é renderizado no servidor e só então substituído pela
 * animação, então buscadores e leitores sem JavaScript veem o título inteiro.
 * O cursor é decorativo e fica fora da árvore de acessibilidade.
 */
export function TypedHeading({ lead, typed, tail, className }: TypedHeadingProps) {
  const { text, showCaret } = useTypewriter(typed);

  return (
    <h1
      className={cn(
        "m-0 mb-6 font-display font-semibold tracking-[-0.035em] text-balance text-white",
        className,
      )}
    >
      {lead}
      <span className="bg-[linear-gradient(96deg,#35D9FF_0%,#168CFF_56%,#8AB6FF_100%)] bg-clip-text text-transparent">
        {text}
      </span>
      {tail}
      {showCaret ? (
        <span
          aria-hidden="true"
          className="animate-caret ml-0.5 text-accent [-webkit-text-fill-color:#35D9FF]"
        >
          ▍
        </span>
      ) : null}
    </h1>
  );
}
