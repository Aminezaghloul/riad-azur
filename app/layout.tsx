import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

const cormorant = Cormorant_Garamond({ subsets:["latin"], weight:["300","400","500","600","700"], variable:"--font-cormorant", display:"swap" });
const jakarta = Plus_Jakarta_Sans({ subsets:["latin"], weight:["300","400","500","600","700"], variable:"--font-jakarta", display:"swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: { default: `${site.name} — Boutique Riad Concept in ${site.city}`, template: `%s | ${site.name}` },
  description: site.description,
  keywords: [site.name, "boutique riad concept", "Marrakech riad", "Moroccan interior design", "hospitality web design"],
  authors: [{ name: "Amine" }], creator: "Amine",
  openGraph: { title:`${site.name} — ${site.tagline}`, description:site.description, siteName:site.name, images:[{url:site.heroImage,width:1200,height:630,alt:`Courtyard at ${site.name}`}], locale:"en_GB", type:"website" },
  twitter: { card:"summary_large_image", title:`${site.name} | ${site.city}`, description:site.description, images:[site.heroImage] },
  robots: { index:true, follow:true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{children:React.ReactNode}>) {
  return <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}><body className="bg-sand-100 text-obsidian-900 font-sans selection:bg-terracotta-500 selection:text-white antialiased min-h-screen flex flex-col justify-between"><a href="#main-content" className="skip-link">Skip to content</a><div><Navbar/><main id="main-content">{children}</main></div><div><Footer/><WhatsAppCTA variant="floating"/></div></body></html>;
}
