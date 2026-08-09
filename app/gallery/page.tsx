import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { GalleryClient } from "./GalleryClient";

export const metadata: Metadata = {
  title: `Visual Gallery | ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function GalleryPage() {
  return <GalleryClient />;
}
