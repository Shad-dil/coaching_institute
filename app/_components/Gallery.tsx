"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/gallery/g1.jpeg",
  "/gallery/g2.jpeg",
  "/gallery/g3.jpeg",
  "/gallery/g4.jpeg",
  //   "/gallery/lab-1.jpg",
  //   "/gallery/event-2.jpg",
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Gallery || Alpha A1 Academy</h2>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(src)}
            className="relative aspect-[4/5] overflow-hidden rounded-xl group"
          >
            <Image
              src={src}
              alt="Alpha A1 Academy gallery"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
          </button>
        ))}
      </div>

      {/* Fullscreen Preview */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative w-full max-w-3xl aspect-[4/5]">
            <Image
              src={activeImage}
              alt="Preview"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
