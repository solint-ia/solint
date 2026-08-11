"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks";

const ROTATION_MS = 5200;

/**
 * Terminal simulado do hero da home: alterna entre mensagens curtas de status.
 *
 * Decorativo — a informação já está no título e no parágrafo acima.
 */
export function TerminalLine({ lines }: { lines: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || lines.length < 2) return;

    const timer = setInterval(
      () => setIndex((current) => (current + 1) % lines.length),
      ROTATION_MS,
    );
    return () => clearInterval(timer);
  }, [lines.length, prefersReducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="mt-[-22px] mb-8.5 flex items-center gap-2.5 font-mono text-[12.5px]/[1.4] tracking-[0.04em] text-[#5F86AE]"
    >
      <span className="text-accent">&gt;</span>
      <span>{lines[index]}</span>
      <span className="animate-caret h-[13px] w-[7px] flex-none bg-accent" />
    </div>
  );
}
