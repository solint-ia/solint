"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks";

/** Posições, tamanhos e tempos fixos — variados de propósito para não parecer grade. */
const PARTICLES = [
  { left: "8%", top: "24%", size: 3, color: "#8AE3FF", duration: 12, delay: 0 },
  { left: "16%", top: "66%", size: 2, color: "#5FB6FF", duration: 14, delay: 1.2 },
  { left: "27%", top: "40%", size: 3, color: "#B7E9FF", duration: 11, delay: 2.1 },
  { left: "38%", top: "80%", size: 2, color: "#8AE3FF", duration: 15, delay: 0.6 },
  { left: "48%", top: "16%", size: 2, color: "#B7E9FF", duration: 13, delay: 2.8 },
  { left: "59%", top: "62%", size: 3, color: "#5FB6FF", duration: 12, delay: 1.7 },
  { left: "70%", top: "28%", size: 2, color: "#8AE3FF", duration: 14, delay: 0.3 },
  { left: "80%", top: "76%", size: 3, color: "#8AE3FF", duration: 11, delay: 2.4 },
  { left: "89%", top: "46%", size: 2, color: "#5FB6FF", duration: 13, delay: 1 },
  { left: "94%", top: "14%", size: 2, color: "#B7E9FF", duration: 15, delay: 3.2 },
] as const;

/** Raio de influência do cursor, em pixels. */
const INFLUENCE_RADIUS = 240;
/** Deslocamento máximo de uma partícula empurrada pelo cursor. */
const MAX_PUSH = 26;
/** Suavização do movimento a cada quadro (0–1). */
const EASING = 0.07;

interface ParticleState {
  element: HTMLSpanElement;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
}

/**
 * Partículas do hero da home: derivam continuamente e são levemente repelidas
 * pelo cursor.
 *
 * A repulsão só é ativada em ponteiros precisos (mouse/trackpad) e nunca com
 * `prefers-reduced-motion`.
 */
export function HeroParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion) return;
    if (!window.matchMedia("(pointer:fine)").matches) return;

    const particles: ParticleState[] = Array.from(
      container.querySelectorAll<HTMLSpanElement>("[data-particle]"),
    ).map((element) => ({ element, x: 0, y: 0, targetX: 0, targetY: 0 }));
    if (particles.length === 0) return;

    let frame: number | null = null;

    const loop = () => {
      let settled = true;

      for (const particle of particles) {
        particle.x += (particle.targetX - particle.x) * EASING;
        particle.y += (particle.targetY - particle.y) * EASING;

        if (
          Math.abs(particle.targetX - particle.x) > 0.15 ||
          Math.abs(particle.targetY - particle.y) > 0.15
        ) {
          settled = false;
        }

        particle.element.style.transform = `translate(${particle.x.toFixed(1)}px,${particle.y.toFixed(1)}px)`;
      }

      frame = settled ? null : requestAnimationFrame(loop);
    };

    const kick = () => {
      if (frame === null) frame = requestAnimationFrame(loop);
    };

    const onMouseMove = (event: MouseEvent) => {
      for (const particle of particles) {
        const rect = particle.element.getBoundingClientRect();
        const dx = rect.left + rect.width / 2 - event.clientX;
        const dy = rect.top + rect.height / 2 - event.clientY;
        const distance = Math.hypot(dx, dy) || 1;
        const force = Math.max(0, 1 - distance / INFLUENCE_RADIUS) * MAX_PUSH;

        particle.targetX = (dx / distance) * force;
        particle.targetY = (dy / distance) * force;
      }
      kick();
    };

    const onMouseLeave = () => {
      for (const particle of particles) {
        particle.targetX = 0;
        particle.targetY = 0;
      }
      kick();
    };

    const host = container.parentElement ?? container;
    host.addEventListener("mousemove", onMouseMove);
    host.addEventListener("mouseleave", onMouseLeave);

    return () => {
      host.removeEventListener("mousemove", onMouseMove);
      host.removeEventListener("mouseleave", onMouseLeave);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={containerRef} aria-hidden="true" className="absolute inset-0">
      {PARTICLES.map((particle) => (
        <span
          key={particle.left + particle.top}
          data-particle
          className="absolute will-change-transform"
          style={{ left: particle.left, top: particle.top }}
        >
          <span
            className="animate-drift block rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              background: particle.color,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        </span>
      ))}
    </div>
  );
}
