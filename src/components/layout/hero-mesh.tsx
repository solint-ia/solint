"use client";

import { useMeshParallax } from "@/hooks";
import { cn } from "@/lib/utils";

/** Padrão de fundo que diferencia o hero de cada página. */
const patterns = {
  // Home: linhas diagonais largas.
  lines:
    "bg-[repeating-linear-gradient(122deg,rgb(53_217_255/0.04)_0_1px,rgb(0_0_0/0)_1px_54px)]",
  // Prospect: linhas diagonais mais densas.
  diagonal:
    "bg-[repeating-linear-gradient(74deg,rgb(53_217_255/0.055)_0_1px,rgb(0_0_0/0)_1px_44px)] opacity-90",
  // Agentes de IA: malha de pontos.
  dots: "bg-[radial-gradient(circle_at_center,rgb(53_217_255/0.13)_1.1px,rgb(0_0_0/0)_1.7px)] bg-[length:34px_34px] opacity-90",
  // Soluções: grade ortogonal.
  grid: "bg-[repeating-linear-gradient(0deg,rgb(53_217_255/0.05)_0_1px,rgb(0_0_0/0)_1px_64px),repeating-linear-gradient(90deg,rgb(53_217_255/0.05)_0_1px,rgb(0_0_0/0)_1px_64px)] opacity-90",
} as const;

export type MeshPattern = keyof typeof patterns;

/** A home dissolve a malha num raio mais amplo que as páginas internas. */
const masks = {
  wide: "[mask-image:radial-gradient(112%_104%_at_32%_40%,#000_0%,rgb(0_0_0/0.66)_58%,rgb(0_0_0/0)_94%)]",
  narrow:
    "[mask-image:radial-gradient(96%_92%_at_30%_38%,#000_0%,rgb(0_0_0/0.62)_52%,rgb(0_0_0/0)_86%)]",
} as const;

interface HeroMeshProps {
  pattern: MeshPattern;
  mask?: keyof typeof masks;
  /** Opacidade da malha em primeiro plano — a home usa um valor mais alto. */
  meshOpacity?: number;
}

/**
 * Fundo do hero: padrão geométrico + malha SVG com parallax leve, dissolvida
 * nas bordas por uma máscara radial. Puramente decorativo.
 */
export function HeroMesh({ pattern, mask = "narrow", meshOpacity = 0.34 }: HeroMeshProps) {
  const meshRef = useMeshParallax<HTMLImageElement>(0.16);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        masks[mask],
      )}
    >
      <div className={cn("absolute -inset-[10%]", patterns[pattern])} />

      {/* eslint-disable-next-line @next/next/no-img-element -- decorativo, sem otimização necessária */}
      <img
        ref={meshRef}
        src="/assets/hero-mesh.svg"
        alt=""
        className="absolute top-1/2 left-1/2 w-[min(2600px,200%)] -translate-1/2"
        style={{ opacity: meshOpacity }}
      />

      {/* eslint-disable-next-line @next/next/no-img-element -- decorativo, sem otimização necessária */}
      <img
        src="/assets/hero-mesh.svg"
        alt=""
        className="animate-mesh absolute top-1/2 left-1/2 w-[min(3400px,260%)] -translate-1/2 opacity-14 blur-[7px]"
      />
    </div>
  );
}
