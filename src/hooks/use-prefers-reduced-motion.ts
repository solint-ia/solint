"use client";

import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Retorna `true` quando o usuário pediu menos movimento.
 *
 * Começa em `false` para casar com o HTML do servidor e evitar mismatch de
 * hidratação; o valor real chega no primeiro efeito. Toda animação controlada
 * por JS deve consultar este hook antes de iniciar.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(QUERY);
    setPrefersReduced(media.matches);

    const onChange = (event: MediaQueryListEvent) => setPrefersReduced(event.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return prefersReduced;
}
