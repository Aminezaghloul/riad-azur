import { Hero } from "@/components/sections/Hero";
import { PropertyStory } from "@/components/sections/PropertyStory";
import { FeaturedRooms } from "@/components/sections/FeaturedRooms";
import { BotanicalCourtyard } from "@/components/sections/BotanicalCourtyard";
import { LocationSection } from "@/components/sections/LocationSection";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PropertyStory />
      <FeaturedRooms />
      <GalleryPreview />
      <BotanicalCourtyard />
      <LocationSection />
      <ContactCTA />
    </>
  );
}
