"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-obsidian-900 px-6 py-20 sm:px-10 lg:min-h-[88vh] lg:px-16">
      <Image src={site.heroImage} alt={`${site.name} property`} fill priority className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
      <div className="relative z-10 mx-auto w-full max-w-7xl space-y-6 pt-12 text-left">
        <motion.p initial={{opacity:0}} animate={{opacity:1}} className="inline-flex border border-white/30 bg-black/20 px-3 py-1.5 text-[9px] uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">Concept website — fictional property</motion.p>
        <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sand-100/80 sm:text-xs">{site.heroEyebrow}</motion.p>
        <motion.h1 initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.1}} className="max-w-2xl font-serif text-5xl font-normal leading-[1.02] text-white sm:text-6xl lg:text-7xl">{site.heroTitle}</motion.h1>
        <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.2}} className="max-w-xl text-sm font-light leading-relaxed text-sand-100/85 sm:text-base">{site.heroDescription}</motion.p>
        <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.3}} className="flex flex-col items-start gap-5 pt-4 sm:flex-row sm:items-center">
          <Link href="/rooms"><Button variant="primary" size="lg">{site.heroCtaText}</Button></Link>
          <Link href="/contact" className="inline-flex items-center gap-2 border-b border-white/50 pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:border-white">Contact Us <ArrowRight className="h-4 w-4" /></Link>
        </motion.div>
      </div>
    </section>
  );
}
