"use client";

import { useEffect, useRef, useState } from "react";

/** Marca cada etapa candidata a ficar ativa durante o scroll. */
export const STEP_ATTR = "data-step";

/** Fração da viewport considerada a "linha de leitura". */
const FOCUS_RATIO = 0.42;

/**
 * Detecta qual etapa está mais próxima da linha de leitura durante o scroll e
 * devolve seu índice, para destacar a etapa corrente de um fluxo longo.
 */
export function useActiveStep<W extends HTMLElement>() {
  const wrapRef = useRef<W>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const steps = Array.from(wrap.querySelectorAll(`[${STEP_ATTR}]`));
    if (steps.length === 0) return;

    let frame = 0;

    const paint = () => {
      frame = 0;
      const focusLine = window.innerHeight * FOCUS_RATIO;
      let bestIndex = 0;
      let bestDistance = Number.POSITIVE_INFINITY;

      steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        const center = rect.top + Math.min(rect.height, window.innerHeight) / 2;
        const distance = Math.abs(center - focusLine);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });

      setActiveIndex(bestIndex);
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(paint);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    paint();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return { wrapRef, activeIndex };
}
