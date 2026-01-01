"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const whatsappLink =
    "https://wa.me/919876543210?text=Hi%20Sir,%20I%20want%20to%20know%20more%20about%20admissions.";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top info bar (desktop only) */}
      <div className="hidden md:block bg-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2 text-sm">
          <p>
            Confused which course to choose? Book a FREE demo class & talk
            directly to our instructor
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white px-4 py-1.5 rounded"
          >
            Book Free Demo
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a className="text-2xl font-bold text-blue-700" href="#">
          Alphaa1 Academy
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
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
          className="hidden md:inline-block bg-blue-700 text-white px-5 py-2 rounded font-medium"
        >
          Admissions Open
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium hover:text-blue-700">
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
