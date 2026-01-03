"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function BannerNav() {
  return (
    <div className="bg-white border-b border-gray-200 p-10 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/main-logo.png"
              alt="Institute Logo"
              className="h-24 w-auto"
              width={100}
              height={100}
            />
          </div>

          {/* Right: Info items */}
          <div className="flex flex-wrap items-center gap-6">
            <InfoItem
              icon={<Phone size={18} />}
              label="CALL US NOW"
              value="+91 9321506675"
              href="tel:+91 9321506675"
            />

            <InfoItem
              icon={<Mail size={18} />}
              label="MAIL ADDRESS"
              value="alphaa1academy@gmail.com"
              href="mailto:alphaa1academy@gmail.com"
            />

            <InfoItem
              icon={<MapPin size={18} />}
              label="LOCATION ADDRESS"
              value="Ekmi,Laheriasarai - Darbhanga, Bihar - 846003"
              href="https://maps.google.com?q=Laheriasarai+Darbhanga+Bihar"
              external
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

function InfoItem({ icon, label, value, href, external }: InfoItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="border border-green-700 text-green-700 p-2 rounded">
        {icon}
      </div>

      <div className="leading-tight">
        <p className="text-gray-500 text-xs font-semibold">{label} :</p>

        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="text-black font-semibold hover:text-green-700"
        >
          {value}
        </a>
      </div>
    </div>
  );
}
