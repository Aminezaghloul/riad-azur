import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { roomsData } from "@/data/rooms";
import { siteConfig } from "@/data/site";
import { RoomDetailClient } from "./RoomDetailClient";

interface RoomDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return roomsData.map((room) => ({
    slug: room.slug,
  }));
}

export function generateMetadata({ params }: RoomDetailPageProps): Metadata {
  const room = roomsData.find((r) => r.slug === params.slug);
  if (!room) return { title: "Room Not Found" };

  return {
    title: `${room.name} | ${siteConfig.name}`,
    description: room.shortDescription,
  };
}

export default function RoomDetailPage({ params }: RoomDetailPageProps) {
  const room = roomsData.find((r) => r.slug === params.slug);

  if (!room) {
    notFound();
  }

  return <RoomDetailClient room={room} />;
}
