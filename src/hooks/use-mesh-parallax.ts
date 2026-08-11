"use client";

import { useEffect, useRef, type RefObject } from "react";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

/**
 * Aplica parallax vertical leve a um elemento centralizado por
 * `translate(-50%,-50%)`, preservando essa centralização.
 *
 * A leitura do scroll é agendada em `requestAnimationFrame` para não disparar
 * layout a cada evento.
 */
export function useMeshParallax<T extends HTMLElement>(
  speed = 0.16,
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion) return;

    let frame = 0;

    const paint = () => {
      frame = 0;
      const offset = (window.scrollY || 0) * speed;
      element.style.transform = `translate(-50%, calc(-50% + ${offset.toFixed(1)}px))`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(paint);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    paint();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed, prefersReducedMotion]);

  return ref;
}
