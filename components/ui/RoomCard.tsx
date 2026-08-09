"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Maximize, Bed } from "lucide-react";
import { Room } from "@/data/rooms";
import { siteConfig } from "@/data/site";
import { Button } from "./Button";

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <>
      <div className="group bg-sand-200 border border-sand-300 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-card">
        <div>
          {/* Image preview */}
          <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-sand-300">
            <Image
              src={room.heroImage}
              alt={room.name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-4 left-4 bg-sand-100/90 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-obsidian-900 font-sans font-medium">
              {room.view}
            </div>
            {room.price !== undefined && (
              <div className="absolute bottom-4 right-4 bg-obsidian-900/90 text-sand-100 px-3 py-1.5 text-xs font-serif tracking-wider">
                From {room.price.toLocaleString("en-US")} {siteConfig.currencySymbol} <span className="text-[10px] font-sans font-light">/ night*</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center space-x-4 text-[11px] text-taupe-600 font-sans tracking-wide">
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-terracotta-500" />
                {room.capacity} Guests
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Maximize className="w-3.5 h-3.5 text-terracotta-500" />
                {room.sizeSqM} m²
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 truncate">
                <Bed className="w-3.5 h-3.5 text-terracotta-500" />
                {room.bed}
              </span>
            </div>

            <Link href={`/rooms/${room.slug}`} className="block group-hover:text-terracotta-500 transition-colors">
              <h3 className="font-serif text-2xl sm:text-3xl text-obsidian-900 font-normal">
                {room.name}
              </h3>
            </Link>

            <p className="text-taupe-600 text-xs sm:text-sm font-sans line-clamp-2 leading-relaxed font-light">
              {room.shortDescription}
            </p>
            <p className="text-[10px] text-taupe-500">* Fictional demonstration rate.</p>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="p-6 sm:p-8 pt-0 flex items-center justify-between gap-4 border-t border-sand-300/60 mt-4">
          <Link
            href={`/rooms/${room.slug}`}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-obsidian-900 font-sans font-semibold hover:text-terracotta-500 transition-colors group/link"
          >
            <span>Explore Room</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </Link>

          <Link href="/contact" className="w-max">
            <Button variant="outline" size="sm" className="text-[10px]">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

    </>
  );
}
