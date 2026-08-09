"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface WhatsAppCTAProps { variant?: "floating" | "button" | "minimal"; customMessage?: string; className?: string; label?: string }

export function WhatsAppCTA({ variant = "floating", customMessage, className, label = "WhatsApp" }: WhatsAppCTAProps) {
  const message = customMessage || `Hello ${siteConfig.name}, I would like some information about the property.`;
  const handleDemo = () => window.alert(`WhatsApp demonstration only — no message was sent.\n\nPreview: ${message}`);
  const shared = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2";

  if (variant === "floating") return <button type="button" onClick={handleDemo} aria-label="Preview fictional WhatsApp contact" title="WhatsApp demo — no message will be sent" className={cn(shared,"fixed bottom-5 right-5 z-30 flex items-center gap-3 rounded-full bg-[#167e3e] px-4 py-3 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#126d35] active:translate-y-0",className)}><MessageCircle className="h-5 w-5"/><span className="hidden text-xs font-semibold uppercase tracking-wider md:inline">{label}</span></button>;
  if (variant === "minimal") return <button type="button" onClick={handleDemo} className={cn(shared,"inline-flex items-center gap-2 border-b border-sand-400 pb-0.5 text-sm font-medium text-obsidian-900 transition-colors hover:border-terracotta-500 hover:text-terracotta-500",className)}><MessageCircle className="h-4 w-4 text-[#167e3e]"/><span>{label}</span></button>;
  return <button type="button" onClick={handleDemo} title="Demonstration only" className={cn(shared,"inline-flex items-center justify-center gap-3 bg-obsidian-900 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-sand-100 shadow-card transition-all duration-300 hover:bg-palm-800 active:scale-[.98]",className)}><MessageCircle className="h-4 w-4 text-[#4ade80]"/><span>{label}</span></button>;
}
