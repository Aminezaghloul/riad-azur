import Image from "next/image";
import Link from "next/link";
import { galleryData } from "@/data/gallery";
import { Button } from "@/components/ui/Button";

export function GalleryPreview() {
  const images = galleryData.slice(0, 5);
  return (
    <section className="border-t border-sand-300 bg-sand-100 py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:grid-rows-2">
          {images.map((item, index) => (
            <div key={item.id} className={`relative overflow-hidden bg-sand-300 ${index === 0 ? "col-span-2 h-[28rem] md:col-span-7 md:row-span-2 md:h-[42rem]" : "h-56 md:col-span-5 md:h-auto"}`}>
              <Image src={item.imageUrl} alt={item.title} fill className="object-cover transition-transform duration-700 hover:scale-105" sizes={index === 0 ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 50vw, 40vw"} />
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-[10px] uppercase tracking-[0.28em] text-terracotta-500">A visual journal</p><h2 className="mt-2 font-serif text-3xl text-obsidian-900 sm:text-4xl">The character of the property</h2></div>
          <Link href="/gallery"><Button variant="outline">Explore the Gallery</Button></Link>
        </div>
      </div>
    </section>
  );
}
