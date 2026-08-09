import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "terracotta" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans uppercase tracking-[0.18em] text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-obsidian-900 text-sand-100 hover:bg-palm-800 focus:ring-obsidian-900 border border-obsidian-900 shadow-subtle",
      secondary:
        "bg-sand-200 text-obsidian-900 hover:bg-sand-300 border border-sand-400 focus:ring-sand-400",
      terracotta:
        "bg-terracotta-500 text-white hover:bg-terracotta-600 focus:ring-terracotta-500 border border-terracotta-500 shadow-subtle",
      outline:
        "bg-transparent text-obsidian-900 border border-obsidian-900 hover:bg-obsidian-900 hover:text-sand-100 focus:ring-obsidian-900",
      ghost:
        "bg-transparent text-obsidian-900 hover:bg-sand-200/70 border border-transparent focus:ring-sand-300",
    };

    const sizes = {
      sm: "px-4 py-2 text-[10px]",
      md: "px-6 py-3.5 text-xs",
      lg: "px-8 py-4 text-xs tracking-[0.2em]",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
