import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  const navigation = [["Home", "/"], ["Rooms", "/rooms"], ["Gallery", "/gallery"], ["Contact", "/contact"]];
  return <footer className="border-t border-obsidian-800 bg-obsidian-900 pb-10 pt-20 text-sand-200">
    <div className="mx-auto max-w-7xl px-6 md:px-12">
      <div className="grid gap-12 border-b border-obsidian-800 pb-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4"><h2 className="font-serif text-3xl tracking-[0.18em] text-sand-100">{siteConfig.name}</h2><p className="text-[10px] uppercase tracking-[0.25em] text-terracotta-400">{siteConfig.city}, {siteConfig.country}</p><p className="max-w-xs text-xs font-light leading-relaxed text-sand-300/75">{siteConfig.description}</p><p className="inline-flex border border-sand-100/20 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-sand-100/70">Concept website — fictional property</p></div>
        <div><h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-sand-100">Explore</h3><ul className="space-y-3 text-xs">{navigation.map(([label, href]) => <li key={href}><Link href={href} className="text-sand-300/75 transition-colors hover:text-white focus-visible:text-white">{label}</Link></li>)}</ul></div>
        <div><h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-sand-100">Demo contact</h3><ul className="space-y-4 text-xs text-sand-300/75"><li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-400"/><span>{siteConfig.address}, {siteConfig.city}, {siteConfig.country}</span></li><li className="flex items-center gap-3"><Phone className="h-4 w-4 text-terracotta-400"/><span>{siteConfig.phone}</span></li><li className="flex items-center gap-3"><Mail className="h-4 w-4 text-terracotta-400"/><span className="break-all">{siteConfig.email}</span></li></ul></div>
        <div><h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-sand-100">Say hello</h3><p className="mb-5 text-xs font-light leading-relaxed text-sand-300/75">Contact controls are visual demonstrations and do not send to a real property.</p><Link href="/contact" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sand-100 transition-colors hover:text-terracotta-400"><MessageCircle className="h-4 w-4"/>View contact demo</Link></div>
      </div>
      <div className="flex flex-col gap-3 pt-8 text-[11px] text-sand-300/60 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} {siteConfig.name}. Portfolio demonstration.</p><p>Website concept by Amine</p></div>
    </div>
  </footer>;
}
