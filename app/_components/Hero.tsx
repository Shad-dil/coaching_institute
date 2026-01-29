"use client";

import { useEffect, useState } from "react";

const images = ["/g4.jpeg", "/g2.jpeg", "/g3.jpeg", "g1.jpeg"];

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
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
        {/* Main Heading */}
        <h1 className="text-2xl md:text-5xl font-bold mb-4 leading-snug">
          Alpha A1 Academy, Darbhanga
        </h1>

        {/* Sub Heading */}
        <h2 className="text-base md:text-2xl font-semibold mb-4 max-w-3xl">
          Multidisciplinary Higher Education Institute{" "}
          <br className="hidden md:block" />
          Offering Career-Oriented & University-Approved Programs
        </h2>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-left">
          <p
            className="text-lg mt-4
  leading-relaxed
  text-justify
  hyphens-auto"
          >
            Affordable higher education with a strong focus on academic
            excellence, practical skills, and professional ethics. Programs
            offered across Arts, Science, Commerce, Engineering, Paramedical,
            Law, Education, Yoga, and more.
          </p>
        </div>

        {/* Highlights */}
        <p className="text-sm md:text-base mb-8">
          • UG & PG Programs • Paramedical & Technical Courses • Affordable Fees
          • Experienced Faculty
        </p>

        {/* CTA */}
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            className="bg-[#0F4529] hover:bg-[#0c3821] transition text-white px-6 py-3 rounded font-semibold"
            href="https://wa.me/9321506675?text=Hi%20Sir,%20I%20want%20to%20know%20more%20about%20admissions."
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Free Counselling on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
