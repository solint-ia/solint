import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type CardVariant = "panel" | "clipped" | "highlight" | "amber" | "light";

const variants: Record<CardVariant, string> = {
  // Superfície padrão sobre o fundo escuro.
  panel:
    "rounded-2xl border border-accent/15 bg-[linear-gradient(180deg,rgb(15_20_29/0.78),rgb(9_12_17/0.62))] backdrop-blur-[6px]",
  // Cantos chanfrados — usada na timeline e nos cards "sobre".
  clipped:
    "rounded-lg border border-accent/16 bg-[linear-gradient(180deg,rgb(15_20_29/0.78),rgb(9_12_17/0.66))] backdrop-blur-[6px] [clip-path:polygon(18px_0,100%_0,100%_calc(100%-18px),calc(100%-18px)_100%,0_100%,0_18px)]",
  // Card em evidência dentro de um grupo.
  highlight:
    "rounded-2xl border border-accent/32 bg-[linear-gradient(150deg,rgb(18_26_40/0.9),rgb(10_14_20/0.8))] shadow-[0_0_46px_rgb(22_140_255/0.12)]",
  // Conclusão / etapa final.
  amber:
    "rounded-lg border border-amber/30 bg-[linear-gradient(180deg,rgb(15_20_29/0.78),rgb(9_12_17/0.66))] backdrop-blur-[6px] [clip-path:polygon(18px_0,100%_0,100%_calc(100%-18px),calc(100%-18px)_100%,0_100%,0_18px)]",
  // Card sobre as faixas claras.
  light:
    "rounded-[18px] border border-dashed border-[#0A1424]/16 bg-white shadow-[0_8px_24px_rgb(10_20_35/0.06)]",
};

const hoverEffects: Record<CardVariant, string> = {
  panel: "hover:-translate-y-1 hover:border-accent/40",
  clipped: "hover:-translate-y-1 hover:border-accent/36",
  highlight: "hover:-translate-y-1 hover:border-accent/50",
  amber: "hover:-translate-y-1 hover:border-amber/50",
  light: "hover:-translate-y-[5px] hover:border-blue-deep/40",
};

interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: CardVariant;
  /** Ativa elevação e realce de borda no hover. */
  interactive?: boolean;
  children: ReactNode;
}

/** Superfície base do site, com as variantes de borda e fundo da identidade. */
export function Card({
  as: Tag = "div",
  variant = "panel",
  interactive = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <Tag
      className={cn(
        "transition-[transform,border-color,box-shadow,opacity] duration-300 ease-out-solint",
        variants[variant],
        interactive && hoverEffects[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
