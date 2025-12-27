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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Build Your Career with Practical Computer Training
        </h1>
        <p className="max-w-2xl text-lg mb-8">
          Job-oriented courses with expert trainers and real-world practice.
        </p>

        <div className="flex gap-4">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold">
            View Courses
          </button>
          <button className="border border-white px-6 py-3 rounded">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
