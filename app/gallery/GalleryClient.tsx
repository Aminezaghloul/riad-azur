"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { galleryData, GalleryItem } from "@/data/gallery";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { cn } from "@/lib/utils";
import { Maximize2 } from "lucide-react";

const categories = [
  "All",
  "Courtyard",
  "Rooms",
  "Rooftop",
  "Riad",
  "Details",
] as const;

export function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  const lightboxImages = filteredItems.map((item) => ({
    url: item.imageUrl,
    title: item.title,
    caption: item.caption,
  }));

  return (
    <div className="bg-sand-100 py-16">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-4 pb-12">
        <Badge variant="terracotta">Sanctuary Journal</Badge>
        <h1 className="font-serif text-4xl sm:text-6xl text-obsidian-900 font-normal">
          Visual Gallery
        </h1>
        <p className="text-taupe-600 text-sm sm:text-base max-w-2xl mx-auto font-sans font-light leading-relaxed">
          Explore the architecture, atmosphere, rooms, and quiet details that shape the property.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] transition-all duration-300",
                activeCategory === cat
                  ? "bg-obsidian-900 text-sand-100 shadow-subtle font-medium"
                  : "bg-sand-200 text-taupe-600 hover:bg-sand-300 hover:text-obsidian-900"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <button type="button"
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative h-80 bg-sand-300 border border-sand-400 overflow-hidden cursor-pointer shadow-subtle text-left"
              aria-label={`Open ${item.title} in gallery`}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-obsidian-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-sand-100">
                <div className="flex justify-end">
                  <Maximize2 className="w-5 h-5 text-terracotta-400" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-terracotta-400 font-sans block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-normal">{item.title}</h3>
                  <p className="text-xs font-sans text-sand-300/80 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        isOpen={lightboxIndex !== null}
        images={lightboxImages}
        currentIndex={lightboxIndex || 0}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
}
