import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Badge } from "@/components/ui/Badge";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { ContactForm } from "./ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: `Contact & Concierge | ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function ContactPage() {
  return (
    <div className="bg-sand-100 py-16">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-4 pb-16">
        <Badge variant="terracotta">Sanctuary Concierge</Badge>
        <h1 className="font-serif text-4xl sm:text-6xl text-obsidian-900 font-normal">
          Contact & Location
        </h1>
        <p className="text-taupe-600 text-sm sm:text-base max-w-2xl mx-auto font-sans font-light leading-relaxed">
          We welcome your questions. Reach out directly for room information, directions, or help planning your visit.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-sand-200 border border-sand-300 p-8 space-y-6 shadow-subtle">
              <h2 className="font-serif text-2xl text-obsidian-900">Concierge Desk</h2>

              <div className="space-y-4 text-xs font-sans text-obsidian-900">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-terracotta-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold uppercase tracking-wider block">Address</span>
                    <span className="text-taupe-600 font-light mt-0.5 block">
                      {siteConfig.address}, {siteConfig.area ? `${siteConfig.area}, ` : ""}{siteConfig.city} {siteConfig.postalCode}, {siteConfig.country}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-terracotta-500 shrink-0" />
                  <div>
                    <span className="font-semibold uppercase tracking-wider block">Telephone</span>
                    <span className="text-taupe-600 font-light">
                      {siteConfig.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-terracotta-500 shrink-0" />
                  <div>
                    <span className="font-semibold uppercase tracking-wider block">Email</span>
                    <span className="text-taupe-600 font-light break-all">
                      {siteConfig.email}
                    </span>
                  </div>
                </div>

              </div>

              <div className="pt-2 border-t border-sand-300">
                <WhatsAppCTA variant="button" label="Direct WhatsApp Inquiry" className="w-full" />
              </div>
            </div>

            <div className="bg-palm-800 text-sand-100 p-8 space-y-3 shadow-subtle"><h3 className="font-serif text-xl">Finding the property</h3><p className="text-xs font-sans text-sand-200/80 font-light leading-relaxed">{siteConfig.arrivalNote}</p></div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Map Section */}
          <div className="mt-16 bg-sand-200 border border-sand-300 p-4 shadow-card">
            <div className="h-96 w-full relative">
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
  );
}
