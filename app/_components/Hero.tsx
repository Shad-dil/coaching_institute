"use client";

import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[520px] overflow-hidden">
      {/* Slider Images */}
      {images.map((img, i) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
        <h1 className="text-2xl md:text-5xl font-bold md:mb-4 mb-3">
          Job-Focused Computer Courses in Darbhanga
        </h1>
        <h2 className="text-md md:text-3xl font-bold md:mb-4 mb-3">
          Trusted Offline Coaching Institute with Practical Training
        </h2>
        <p className="max-w-2xl md:text-lg text-sm md:mb-8 mb-4">
          • Practical training • Small batches • Affordable fees • Offline +
          personal attention
        </p>

        <div className="flex gap-4">
          <a
            className="bg-[#0F4529] text-white px-4 py-2 rounded"
            href="https://wa.me/9321506675?text=Hi%20Sir,%20I%20want%20to%20book%20a%20free%20demo%20class." // replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Free Demo on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
