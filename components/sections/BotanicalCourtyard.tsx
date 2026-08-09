import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { siteConfig } from "@/data/site";

export function BotanicalCourtyard() {
  return (
    <section className="py-24 bg-sand-200 border-t border-sand-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <Badge variant="palm">{siteConfig.atmosphere.eyebrow}</Badge>

            <h2 className="font-serif text-3xl sm:text-5xl text-obsidian-900 leading-tight font-normal">
              {siteConfig.atmosphere.title}
            </h2>

            <p className="text-taupe-600 text-sm sm:text-base leading-relaxed font-sans font-light">
              {siteConfig.atmosphere.description}
            </p>

            <div className="space-y-4 pt-2">
              {siteConfig.atmosphere.highlights.map((item, index) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-palm-800/10 text-palm-800 flex items-center justify-center font-serif text-sm font-semibold shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-serif text-lg text-obsidian-900">{item}</h4>
                    <p className="text-taupe-600 text-xs font-sans mt-0.5">
                      Part of the character and rhythm of a stay at {siteConfig.name}.
                    </p>
                  </div>
                </div>
              ))}
            </div>

              <div className="pt-4">
                <Link href="/contact">
                  <Button variant="primary">Contact Us</Button>
                </Link>
              </div>
          </div>

          {/* Large Visual Feature */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative h-[450px] sm:h-[550px] w-full overflow-hidden shadow-card border border-sand-300">
              <Image
                src={siteConfig.images.atmosphere}
                alt={`${siteConfig.name} atmosphere`}
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
