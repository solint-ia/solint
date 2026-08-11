import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Concatena classes condicionais resolvendo conflitos do Tailwind.
 * Sempre prefira `cn` a template strings para permitir override por prop.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Formata um índice base-0 como rótulo de etapa ("01", "02", ...). */
export function stepLabel(index: number): string {
  return String(index + 1).padStart(2, "0");
}
