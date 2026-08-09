export interface SiteConfig {
  name: string; logoText: string; siteUrl: string; tagline: string; description: string;
  heroEyebrow: string; heroTitle: string; heroDescription: string; heroImage: string; heroCtaText: string;
  property: { eyebrow: string; title: string; description: string };
  atmosphere: { eyebrow: string; title: string; description: string; highlights: string[] };
  locationDescription: string; arrivalNote: string;
  contactCta: { eyebrow: string; title: string; description: string };
  images: { property: string; propertyDetail: string; atmosphere: string };
  phone: string; whatsapp: string; whatsappDisplay: string; email: string;
  address: string; city: string; area: string; country: string; postalCode: string;
  mapEmbedUrl: string; directionsUrl: string;
  currencySymbol: string;
}

export const site: SiteConfig = {
  name: "Riad Azur",
  logoText: "RIAD AZUR",
  siteUrl: "https://riad-azur.example",
  tagline: "A quiet rhythm in the medina.",
  description: "A fictional boutique riad concept in Marrakech, with intimate rooms, a zellige courtyard and warm Moroccan hospitality.",
  heroEyebrow: "Marrakech, Morocco",
  heroTitle: "Stillness, at the heart of the medina.",
  heroDescription: "Three intimate rooms, a sun-washed courtyard and the generous spirit of Moroccan hospitality.",
  heroImage: "/images/property/1566665797739-1674de7a421a.jpg",
  heroCtaText: "Discover the Rooms",
  property: {
    eyebrow: "The Riad",
    title: "A hidden house shaped by craft and light.",
    description: "Behind a quiet medina doorway, Riad Azur gathers hand-cut zellige, carved cedar and softly polished tadelakt around an open courtyard. It is an imagined retreat with the intimacy of a private home and the warmth of attentive local hosting.",
  },
  atmosphere: {
    eyebrow: "The Atmosphere",
    title: "Slow mornings. Amber evenings.",
    description: "Mint tea beneath the arches, filtered light across patterned tiles and rooftop sunsets over the Atlas horizon set an unhurried pace.",
    highlights: ["A serene zellige courtyard", "Locally inspired materials", "Warm, personal hospitality"],
  },
  locationDescription: "Imagined within the historic medina, Riad Azur is a short walk from souks, artisan workshops and the lively lanes around Jemaa el-Fna—yet calm enough to feel removed from their bustle.",
  arrivalNote: "This is a fictional demo address. The directions link opens the Marrakech medina for portfolio demonstration only.",
  contactCta: {
    eyebrow: "Direct Contact",
    title: "Curious about the Riad Azur concept?",
    description: "Explore the rooms, discover the atmosphere or use the demonstration contact form to experience the full website journey.",
  },
  images: {
    property: "/images/property/1582719478250-c89cae4dc85b.jpg",
    propertyDetail: "/images/property/1578683010236-d716f9a3f461.jpg",
    atmosphere: "/images/property/1507652313519-d4e9174996dd.jpg",
  },
  phone: "+212 5 00 00 00 00",
  whatsapp: "",
  whatsappDisplay: "+212 6 00 00 00 00",
  email: "hello@riadazur.example",
  address: "18 Derb Azur (demo address)",
  city: "Marrakech",
  area: "Medina",
  country: "Morocco",
  postalCode: "40000",
  mapEmbedUrl: "https://www.google.com/maps?q=Marrakech%20Medina%2C%20Morocco&output=embed",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Marrakech%20Medina%2C%20Morocco",
  currencySymbol: "MAD",
};

export const siteConfig = site;
