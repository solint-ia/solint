"use client";

import { useCallback, useEffect, useRef } from "react";

/** Marca cada nó por onde a linha do fluxo deve passar. */
export const FLOW_NODE_ATTR = "data-flow-node";

/** Tensão da Catmull-Rom convertida em Bézier. Valores maiores = curvas mais abertas. */
const TENSION = 0.26;

interface Point {
  x: number;
  y: number;
}

/** Converte uma sequência de pontos em um path suave (Catmull-Rom → cúbicas). */
function smoothPath(points: Point[]): string {
  const [first] = points;
  if (!first) return "";

  let d = `M${first.x.toFixed(1)},${first.y.toFixed(1)}`;

  for (let i = 0; i < points.length - 1; i += 1) {
    const p1 = points[i]!;
    const p2 = points[i + 1]!;
    const p0 = points[i - 1] ?? p1;
    const p3 = points[i + 2] ?? p2;

    const c1x = p1.x + (p2.x - p0.x) * TENSION;
    const c1y = p1.y + (p2.y - p0.y) * TENSION;
    const c2x = p2.x - (p3.x - p1.x) * TENSION;
    const c2y = p2.y - (p3.y - p1.y) * TENSION;

    d += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
  }

  return d;
}

/**
 * Traça uma linha contínua ligando todos os `data-flow-node` de um wrapper.
 *
 * Devolve o ref do wrapper e uma lista de refs de `<path>` que recebem o mesmo
 * traçado — útil para sobrepor a linha base e os pulsos animados.
 */
export function useConnectorPath<W extends HTMLElement>(pathCount = 1) {
  const wrapRef = useRef<W>(null);
  const pathsRef = useRef<(SVGPathElement | null)[]>(Array(pathCount).fill(null));

  const setPathRef = useCallback(
    (index: number) => (element: SVGPathElement | null) => {
      pathsRef.current[index] = element;
    },
    [],
  );

  const draw = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const origin = wrap.getBoundingClientRect();
    const nodes = Array.from(wrap.querySelectorAll(`[${FLOW_NODE_ATTR}]`));
    if (nodes.length < 2) return;

    const points = nodes.map((node) => {
      const rect = node.getBoundingClientRect();
      return {
        x: rect.left - origin.left + rect.width / 2,
        y: rect.top - origin.top + rect.height / 2,
      };
    });

    const d = smoothPath(points);
    for (const path of pathsRef.current) path?.setAttribute("d", d);
  }, []);

  useEffect(() => {
    let frame = requestAnimationFrame(draw);

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", schedule);
    void document.fonts?.ready.then(schedule);

    const observer = new ResizeObserver(schedule);
    if (wrapRef.current) observer.observe(wrapRef.current);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
    };
  }, [draw]);

  return { wrapRef, setPathRef };
}
