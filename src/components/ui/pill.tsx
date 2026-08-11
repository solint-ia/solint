import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type PillTone = "cyan" | "amber" | "light";

const tones: Record<PillTone, string> = {
  cyan: "border-accent/22 bg-panel-4/72 text-[#AEB9C6]",
  amber: "border-amber/30 bg-panel-4/75 text-amber-soft",
  light: "border-[#0A1424]/14 text-paper-tag",
};

interface PillProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: PillTone;
  children: ReactNode;
}

/** Etiqueta arredondada usada em fluxos, listas de tecnologias e tags. */
export function Pill({ tone = "cyan", className, children, ...props }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-[5px] text-[0.78rem]/[1.2] font-normal",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
