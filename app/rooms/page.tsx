import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { RoomCard } from "@/components/ui/RoomCard";
import { roomsData } from "@/data/rooms";
import { siteConfig } from "@/data/site";
import { Coffee, Wifi, Car, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: `Rooms | ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function RoomsPage() {
  return (
    <div className="bg-sand-100 py-16">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-4 pb-16">
        <Badge variant="terracotta">Accommodations</Badge>
        <h1 className="font-serif text-4xl sm:text-6xl text-obsidian-900 font-normal">
          Rooms
        </h1>
        <p className="text-taupe-600 text-sm sm:text-base max-w-2xl mx-auto font-sans font-light leading-relaxed">
          Three imagined rooms shaped by tadelakt, woven textiles and the intimate character of a Marrakech riad. All details and rates are for demonstration only.
        </p>
      </div>

      {/* Room collection */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </div>
      </div>

      {/* Included Perks in Every Stay */}
      <section className="bg-sand-200 py-20 border-t border-b border-sand-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <Badge variant="palm">Included Privileges</Badge>
            <h2 className="font-serif text-3xl text-obsidian-900">Every Stay Includes</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-sand-100 p-6 border border-sand-300 space-y-3">
              <Car className="w-6 h-6 text-terracotta-500" />
              <h3 className="font-serif text-xl text-obsidian-900">Private Airport Pickup</h3>
              <p className="text-xs text-taupe-600 font-sans font-light leading-relaxed">
                Direct transfer from the airport with luggage porter escort to the property doorstep.
              </p>
            </div>

            <div className="bg-sand-100 p-6 border border-sand-300 space-y-3">
              <Coffee className="w-6 h-6 text-terracotta-500" />
              <h3 className="font-serif text-xl text-obsidian-900">Farm-to-Table Breakfast</h3>
              <p className="text-xs text-taupe-600 font-sans font-light leading-relaxed">
                Served daily poolside or on your room terrace with fresh citrus juice, flatbreads, and espresso.
              </p>
            </div>

            <div className="bg-sand-100 p-6 border border-sand-300 space-y-3">
              <Sparkles className="w-6 h-6 text-terracotta-500" />
              <h3 className="font-serif text-xl text-obsidian-900">Organic Argan Care</h3>
              <p className="text-xs text-taupe-600 font-sans font-light leading-relaxed">
                Custom botanical shampoo, hair oil, and body wash handcrafted locally in organic cooperatives.
              </p>
            </div>

            <div className="bg-sand-100 p-6 border border-sand-300 space-y-3">
              <Wifi className="w-6 h-6 text-terracotta-500" />
              <h3 className="font-serif text-xl text-obsidian-900">High-Speed Fibre WiFi</h3>
              <p className="text-xs text-taupe-600 font-sans font-light leading-relaxed">
                Seamless connectivity in every room, courtyard alcove, and rooftop sunbed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
