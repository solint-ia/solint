"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

const CHAR_DELAY_MS = 36;
const START_DELAY_MS = 450;
const CARET_LINGER_MS = 1400;

interface TypewriterState {
  /** Trecho já digitado. Igual ao texto completo quando o movimento é reduzido. */
  text: string;
  /** Se o cursor deve ser exibido ao lado do texto. */
  showCaret: boolean;
}

/**
 * Digita `fullText` caractere a caractere e mantém o cursor por um instante
 * depois de terminar.
 *
 * Com `prefers-reduced-motion`, entrega o texto completo de imediato e não
 * exibe cursor. O texto completo também é renderizado no servidor pelo
 * componente consumidor, então o conteúdo continua acessível sem JavaScript.
 */
export function useTypewriter(fullText: string): TypewriterState {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [typed, setTyped] = useState("");
  const [showCaret, setShowCaret] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    setHasStarted(true);
    setTyped("");
    setShowCaret(true);

    let index = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      index += 1;
      setTyped(fullText.slice(0, index));
      timer =
        index < fullText.length
          ? setTimeout(tick, CHAR_DELAY_MS)
          : setTimeout(() => setShowCaret(false), CARET_LINGER_MS);
    };

    timer = setTimeout(tick, START_DELAY_MS);
    return () => clearTimeout(timer);
  }, [fullText, prefersReducedMotion]);

  // Antes do primeiro efeito o texto completo já está na tela: só o substituímos
  // quando a animação realmente começou.
  return { text: hasStarted ? typed : fullText, showCaret };
}
