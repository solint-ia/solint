"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  /** Elemento renderizado. Use para preservar a semântica (section, article…). */
  as?: ElementType;
  /** Atraso em segundos, para escalonar itens de uma mesma linha. */
  delay?: number;
  className?: string;
}

/**
 * Revela o conteúdo ao entrar na viewport, uma única vez.
 *
 * Framer Motion já respeita `prefers-reduced-motion` quando a redução está
 * ativa no sistema, e o `globals.css` neutraliza o restante das animações.
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  className,
  ...props
}: RevealProps) {
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px", amount: 0.08 }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1], delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
