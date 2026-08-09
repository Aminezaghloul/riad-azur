import React from "react";
import Image from "next/image";
import { Badge } from "../ui/Badge";
import { siteConfig } from "@/data/site";

export function PropertyStory() {
  return (
    <section id="property-story" className="py-24 bg-sand-100 border-t border-sand-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Editorial Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[480px] sm:h-[560px] w-full overflow-hidden shadow-card border border-sand-300">
              <Image
                src={siteConfig.images.property}
                alt={`${siteConfig.name} Architecture`}
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Overlay secondary image box */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-64 h-56 sm:h-72 hidden sm:block border-4 border-sand-100 shadow-modal overflow-hidden">
              <Image
                src={siteConfig.images.propertyDetail}
                alt="Plaster architectural detail"
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="terracotta">{siteConfig.property.eyebrow}</Badge>

            <h2 className="font-serif text-3xl sm:text-5xl text-obsidian-900 leading-[1.15] font-normal">
              {siteConfig.property.title}
            </h2>

            <p className="text-taupe-600 text-sm sm:text-base leading-relaxed font-sans font-light">
              {siteConfig.property.description}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
