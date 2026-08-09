"use client";

import React from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
  isOpen: boolean;
  images: { url: string; caption?: string; title?: string }[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ImageLightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const handlePrev = () => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    onNavigate((currentIndex + 1) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian-900/95 backdrop-blur-md transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
    >
      {/* Top bar controls */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 text-white">
        <div className="text-xs uppercase tracking-widest font-sans opacity-80">
          {currentIndex + 1} / {images.length}
        </div>
        <button
          onClick={onClose}
          className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full focus:outline-none transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image container */}
      <div className="relative w-full max-w-5xl h-[75vh] px-4 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={currentImage.url}
            alt={currentImage.caption || currentImage.title || "Property gallery image"}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>
      </div>

      {/* Image caption */}
      {(currentImage.title || currentImage.caption) && (
        <div className="absolute bottom-6 left-6 right-6 text-center text-white/90 z-10">
          {currentImage.title && (
            <h4 className="font-serif text-lg tracking-wide">{currentImage.title}</h4>
          )}
          {currentImage.caption && (
            <p className="text-xs font-sans text-white/70 mt-1 max-w-lg mx-auto">
              {currentImage.caption}
            </p>
          )}
        </div>
      )}

      {/* Navigation Chevrons */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full focus:outline-none transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full focus:outline-none transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </>
      )}
    </div>
  );
}
