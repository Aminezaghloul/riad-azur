import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "sand" | "terracotta" | "palm" | "dark";
  className?: string;
}

export function Badge({ children, variant = "sand", className }: BadgeProps) {
  const variants = {
    sand: "bg-sand-200 text-taupe-600 border border-sand-400/80",
    terracotta: "bg-terracotta-500/10 text-terracotta-600 border border-terracotta-500/20",
    palm: "bg-palm-800/10 text-palm-800 border border-palm-800/20",
    dark: "bg-obsidian-900 text-sand-100 border border-obsidian-900",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-[10px] uppercase tracking-[0.25em] font-sans font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
