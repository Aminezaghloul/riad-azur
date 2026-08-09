import { siteConfig } from "@/data/site";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden border-t border-obsidian-800 bg-obsidian-900 px-6 py-20 text-center text-sand-100">
      <div className="relative z-10 mx-auto max-w-3xl space-y-6">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-terracotta-400">{siteConfig.contactCta.eyebrow}</span>
        <h2 className="font-serif text-3xl font-normal tracking-wide sm:text-5xl">{siteConfig.contactCta.title}</h2>
        <p className="mx-auto max-w-xl text-xs font-light leading-relaxed text-sand-300/70 sm:text-sm">{siteConfig.contactCta.description}</p>
        <div className="flex flex-col justify-center gap-3 pt-4 sm:flex-row"><Link href="/contact"><Button size="lg" className="w-full sm:w-auto">Contact Us</Button></Link><WhatsAppCTA variant="button" label="WhatsApp" /></div>
      </div>
    </section>
  );
}
