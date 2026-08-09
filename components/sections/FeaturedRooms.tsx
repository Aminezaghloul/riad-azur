import React from "react";
import Link from "next/link";
import { Badge } from "../ui/Badge";
import { RoomCard } from "../ui/RoomCard";
import { roomsData } from "@/data/rooms";
import { Button } from "../ui/Button";

export function FeaturedRooms() {
  return (
    <section className="py-24 bg-sand-100 border-t border-sand-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <Badge variant="palm">Accommodations</Badge>
            <h2 className="font-serif text-3xl sm:text-5xl text-obsidian-900 leading-tight font-normal">
              Our Rooms
            </h2>
            <p className="text-taupe-600 text-sm max-w-xl font-sans font-light">
              A considered collection of rooms, each with its own character and connection to the property.
            </p>
          </div>

          <Link href="/rooms" className="shrink-0">
            <Button variant="outline" size="md">
              View All Rooms
            </Button>
          </Link>
        </div>

        {/* Grid of Rooms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.filter((room) => room.featured).sort((a, b) => a.order - b.order).map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
