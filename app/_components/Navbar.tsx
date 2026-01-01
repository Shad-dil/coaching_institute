"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import BannerNav from "./BannerNav";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const whatsappLink =
    "https://wa.me/919876543210?text=Hi%20Sir,%20I%20want%20to%20know%20more%20about%20admissions.";

  return (
    <header className="shadow-md top-0 z-50 text-white">
      {/* Top info bar (desktop only) */}
      <div className="hidden md:block bg-[#0F4529]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2 text-sm">
          <p>
            Confused which course to choose? Book a FREE demo class & talk
            directly to our instructor
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-white px-4 py-1.5 rounded border border-white"
          >
            Book Free Demo
          </a>
        </div>
      </div>
      {/* Navbar with Logo  */}
      <BannerNav />
      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center bg-[#0F4529] text-white">
        {/* ✅ Mobile-only logo */}
        <div className="flex items-center md:hidden">
          <img src="/logo.png" alt="Institute Logo" className="h-8 w-auto" />
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
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block border border-white px-5 py-2 rounded"
        >
          Admissions Open
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0F4529] border-t">
          <nav className="flex flex-col gap-4 px-6 py-4 text-white font-medium hover:text-blue-700">
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
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-blue-700 text-white px-4 py-2 rounded text-center"
            >
              Book Free Demo on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
