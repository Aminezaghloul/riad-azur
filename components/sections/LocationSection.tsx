import React from "react";
import { MapPin, Navigation } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Badge } from "../ui/Badge";
import { WhatsAppCTA } from "../ui/WhatsAppCTA";
import { Button } from "../ui/Button";

export function LocationSection() {
  return (
    <section className="py-24 bg-sand-100 border-t border-sand-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Details */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="palm">{siteConfig.city} Location</Badge>

            <h2 className="font-serif text-3xl sm:text-5xl text-obsidian-900 leading-tight font-normal">
              In the Heart of {siteConfig.city}
            </h2>

            <p className="text-taupe-600 text-sm sm:text-base leading-relaxed font-sans font-light">
              {siteConfig.locationDescription}
            </p>

            <div className="space-y-4 pt-2 text-xs font-sans">
              <div className="flex items-start gap-4 p-4 bg-sand-200 border border-sand-300">
                <MapPin className="w-5 h-5 text-terracotta-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-obsidian-900 uppercase tracking-wider">Demo address</h4>
                  <p className="text-taupe-600 font-light mt-0.5">
                    {siteConfig.address}, {siteConfig.area ? `${siteConfig.area}, ` : ""}{siteConfig.city} {siteConfig.postalCode}, {siteConfig.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-sand-200 border border-sand-300">
                <Navigation className="w-5 h-5 text-terracotta-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-obsidian-900 uppercase tracking-wider">Arrival</h4>
                  <p className="text-taupe-600 font-light mt-0.5">
                    {siteConfig.arrivalNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <a href={siteConfig.directionsUrl} target="_blank" rel="noopener noreferrer"><Button variant="primary">Open Marrakech Directions</Button></a>
              <WhatsAppCTA variant="button" label="Preview WhatsApp" />
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-6">
            <div className="relative h-[420px] sm:h-[480px] w-full bg-sand-300 border border-sand-400 overflow-hidden shadow-card">
              <iframe
                title={`${siteConfig.name} Location Map`}
                src={siteConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(90%) brightness(95%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
