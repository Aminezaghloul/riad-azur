"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Maximize, Bed, ArrowLeft, Check, Sparkles, Image as ImageIcon } from "lucide-react";
import { Room } from "@/data/rooms";
import { siteConfig } from "@/data/site";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

interface RoomDetailClientProps {
  room: Room;
}

export function RoomDetailClient({ room }: RoomDetailClientProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryImages = room.images.map((url, idx) => ({
    url,
    title: `${room.name} — Image ${idx + 1}`,
    caption: room.subtitle,
  }));

  return (
    <div className="bg-sand-100 py-12">
      {/* Top back navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <Link
          href="/rooms"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-taupe-600 hover:text-obsidian-900 transition-colors font-sans"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Rooms</span>
        </Link>
      </div>

      {/* Main Hero Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[420px] md:h-[520px]">
          {/* Main Large Image */}
          <div
            className="md:col-span-8 relative h-full bg-sand-300 border border-sand-400 overflow-hidden cursor-pointer group"
            onClick={() => setLightboxIndex(0)}
          >
            <Image
              src={room.images[0] || room.heroImage}
              alt={room.name}
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute bottom-4 left-4 bg-obsidian-900/80 backdrop-blur-md text-sand-100 px-3 py-1.5 text-xs font-sans flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-terracotta-400" />
              <span>Expand Photos ({room.images.length})</span>
            </div>
          </div>

          {/* Secondary Stacked Images */}
          <div className="hidden md:grid md:col-span-4 grid-rows-2 gap-4 h-full">
            {room.images.slice(1, 3).map((imgUrl, i) => (
              <div
                key={i}
                className="relative h-full bg-sand-300 border border-sand-400 overflow-hidden cursor-pointer group"
                onClick={() => setLightboxIndex(i + 1)}
              >
                <Image
                  src={imgUrl}
                  alt={`${room.name} detail ${i + 1}`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Details and contact sidebar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Content */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <Badge variant="terracotta">{room.view}</Badge>
              <h1 className="font-serif text-4xl sm:text-6xl text-obsidian-900 font-normal mt-2">
                {room.name}
              </h1>
              <p className="text-taupe-600 text-sm sm:text-base font-sans font-light mt-2 leading-relaxed">
                {room.subtitle}
              </p>
            </div>

            {/* Quick Specs Bar */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-sand-300 text-xs font-sans">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-terracotta-500 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase text-taupe-600 tracking-wider block">Capacity</span>
                  <span className="font-semibold text-obsidian-900">{room.capacity} Guests</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Maximize className="w-5 h-5 text-terracotta-500 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase text-taupe-600 tracking-wider block">Size</span>
                  <span className="font-semibold text-obsidian-900">{room.sizeSqM} m²</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Bed className="w-5 h-5 text-terracotta-500 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase text-taupe-600 tracking-wider block">Bed Type</span>
                  <span className="font-semibold text-obsidian-900 truncate">{room.bed}</span>
                </div>
              </div>
            </div>

            {/* Room Narrative */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-obsidian-900">Room Details</h3>
              <p className="text-taupe-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                {room.description}
              </p>
            </div>

            {/* Highlights */}
            {room.highlights && room.highlights.length > 0 && (
              <div className="bg-sand-200 p-6 border border-sand-300 space-y-3">
                <h4 className="font-serif text-xl text-obsidian-900">Room Highlights</h4>
                <ul className="space-y-2 text-xs font-sans text-taupe-600">
                  {room.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-terracotta-500 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Amenities Grid */}
            <div className="space-y-4 pt-4">
              <h3 className="font-serif text-2xl text-obsidian-900">Amenities & Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-obsidian-900">
                {room.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-sand-200/70 border border-sand-300/60">
                    <Check className="w-4 h-4 text-terracotta-500 shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky inquiry card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-sand-200 p-8 border border-sand-300 shadow-card space-y-6">
              <div className="border-b border-sand-300 pb-4">
                <span className="text-[10px] uppercase tracking-widest text-taupe-600 block">Rate</span>
                {room.price !== undefined ? (
                  <div className="flex flex-wrap items-baseline gap-2"><span className="font-serif text-4xl text-obsidian-900">From {room.price.toLocaleString("en-US")} {siteConfig.currencySymbol}</span><span className="text-xs font-sans text-taupe-600">/ night*</span></div>
                ) : <p className="font-serif text-2xl text-obsidian-900">Contact us for rates</p>}
              </div>
              <p className="text-[10px] leading-relaxed text-taupe-600">* Fictional rate and room information shown for website demonstration only.</p>

              <div className="space-y-3">
                <Link href="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full text-xs"
                >
                  Contact Us
                </Button>
              </Link>

                <WhatsAppCTA
                  variant="button"
                  customMessage={`Hello ${siteConfig.name}, I would like to know more about the ${room.name}.`}
                  label="Inquire About This Room"
                  className="w-full"
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        isOpen={lightboxIndex !== null}
        images={galleryImages}
        currentIndex={lightboxIndex || 0}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />

    </div>
  );
}
