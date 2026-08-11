import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type IconBoxSize = "sm" | "md" | "lg";

const boxSizes: Record<IconBoxSize, string> = {
  sm: "size-7 rounded-lg",
  md: "size-[34px] rounded-[10px]",
  lg: "size-[46px] rounded-xl",
};

const iconSizes: Record<IconBoxSize, number> = {
  sm: 15,
  md: 17,
  lg: 22,
};

interface IconBoxProps {
  icon: LucideIcon;
  size?: IconBoxSize;
  tone?: "cyan" | "amber";
  className?: string;
}

/** Ícone dentro do contêiner quadrado com borda luminosa da identidade. */
export function IconBox({ icon: Icon, size = "md", tone = "cyan", className }: IconBoxProps) {
  return (
    <span
      className={cn(
        "flex flex-none items-center justify-center border bg-panel-2/80",
        boxSizes[size],
        tone === "amber" ? "border-amber/28 text-amber" : "border-accent/20 text-accent",
        className,
      )}
    >
      <Icon size={iconSizes[size]} strokeWidth={1.4} aria-hidden="true" />
    </span>
  );
}
