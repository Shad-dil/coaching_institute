"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import BannerNav from "./BannerNav";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);

  const whatsappLink =
    "https://wa.me/9321506675?text=Hi%20Sir,%20I%20want%20to%20know%20more%20about%20admissions.";

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      // Mobile only
      if (window.innerWidth < 768) {
        // Always show near top
        if (currentY < 60) {
          setVisible(true);
        }
        // Scrolling DOWN → hide
        else if (currentY > lastScrollY.current) {
          setVisible(false);
        }
        // Scrolling UP → show
        else {
          setVisible(true);
        }
      } else {
        // Desktop always visible
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop Top Info Bar */}
      <div className="hidden md:block bg-[#0F4529] text-white">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between text-sm">
          <p>
            Confused which course to choose? Book a FREE demo class & talk
            directly to our instructor
          </p>
          <a
            href={whatsappLink}
            className="border border-white px-4 py-1.5 rounded"
          >
            Book Free Demo
          </a>
        </div>
      </div>

      {/* Desktop Banner */}
      <BannerNav />

      {/* MAIN NAVBAR */}
      <div
        className={`
          bg-[#0F4529] text-white
          transition-transform duration-300
          fixed top-0 left-0 w-full z-50
          md:static md:translate-y-0
          ${visible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Mobile Logo */}
          <div className="md:hidden h-10 w-10 bg-white rounded flex items-center justify-center">
            <Image
              src="/main-logo.png"
              alt="Institute Logo"
              width={40}
              height={40}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 font-medium">
            <a href="#">Home</a>
            <a href="#courses">Courses</a>
            <a href="#why-us">Why Us</a>
            <a href="#noticeboard">Batches</a>
            <a href="#team">About Us</a>
            <a href="#students">Students</a>
            <a href="#address">Contact</a>
          </nav>

          {/* Desktop CTA */}
          <a
            href={whatsappLink}
            className="hidden md:inline-block border border-white px-5 py-2 rounded"
          >
            Admissions Open
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-white/20">
            <nav className="flex flex-col gap-4 px-6 py-4 font-medium">
              <a href="#courses" onClick={() => setOpen(false)}>
                Courses
              </a>
              <a href="#why-us" onClick={() => setOpen(false)}>
                Why Us
              </a>
              <a href="#noticeboard" onClick={() => setOpen(false)}>
                Batches
              </a>
              <a href="#team" onClick={() => setOpen(false)}>
                About Us
              </a>
              <a href="#students" onClick={() => setOpen(false)}>
                Students
              </a>
              <a href="#address" onClick={() => setOpen(false)}>
                Contact
              </a>

              <a
                href={whatsappLink}
                className="mt-2 bg-blue-700 px-4 py-2 rounded text-center"
              >
                Book Free Demo on WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>

      {/* Spacer to prevent content jump on mobile */}
      <div className="h-[72px] md:hidden" />
    </>
  );
}
