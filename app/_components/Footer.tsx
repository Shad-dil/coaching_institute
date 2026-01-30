import { FacebookIcon, MailCheck, PhoneCall } from "lucide-react";
import Image from "next/image";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="bg-[#16482b] text-white py-16 px-6"
      id="address"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* ✅ Card 1: Brand + Trust */}
          <FooterCard title="Alphaa1 Academy">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 bg-white rounded flex items-center justify-center font-bold">
                <Image
                  src="/main-logo.png"
                  alt="Institute Logo"
                  className="h-15 w-auto"
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-xl font-semibold">Alphaa1 Academy</p>
            </div>

            <p
              className="text-sm text-white mt-4
  leading-relaxed
  text-justify
  hyphens-auto"
            >
              Multidisciplinary Higher Education Institute Offering
              Career-Oriented & University-Approved Programs Affordable higher
              education with a strong focus on academic excellence, practical
              skills, and professional ethics. Programs offered in Arts,
              Science, Commerce, Engineering, Paramedical, Law, Education, Yoga,
              and more — guided by experienced faculty and student-centric
              support.
            </p>

            {/* Trust Badges */}
            <ul className="mt-4 text-sm text-white space-y-1">
              <li>✔ UG & PG Programs</li>
              <li>✔ Paramedical & Technical Courses</li>
              <li>✔ Affordable Fees</li>
              <li>✔ Experienced Faculty</li>
            </ul>
          </FooterCard>

          {/* ✅ Card 2: Address (SEO critical) */}
          <FooterCard title="Contact & Address">
            <address className="not-italic text-sm text-white leading-relaxed">
              <strong>Alphaa1 Academy</strong> <br />
              4VCH+Q24, Rampur Ramdeo
              <br />
              urf Chand Dih, <br />
              Darbhanga, Bihar – 846003
            </address>

            <p className="mt-4 text-sm flex justify-start items-center gap-2">
              <PhoneCall className="h-4 w-4" />{" "}
              <a href="tel:+919321506675" className="hover:underline">
                +91 93215 06675
              </a>
            </p>

            <p className="mt-2 text-sm flex justify-start items-center gap-2">
              <MailCheck className=" h-4 w-4" />
              <a
                href="mailto:alphaa1academydbg@gmail.com"
                className="hover:underline"
              >
                alphaa1academydbg@gmail.com
              </a>
            </p>
            <p className="mt-2 text-xl flex justify-start items-center gap-2">
              <a
                href="https://www.facebook.com/share/1TLxKzR9LR/?mibextid=wwXIfr"
                target="_blank"
                className="hover:underline"
              >
                <FaFacebook className=" h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/alphaa1academy?igsh=MXNnaXV5enIxM3phaw%3D%3D&utm_source=qr"
                target="_blank"
                className="hover:underline"
              >
                <FaInstagram className=" h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@alphaa1academydarbhanga"
                target="_blank"
                className="hover:underline"
              >
                <FaYoutube className=" h-8 w-8" />
              </a>
            </p>

            <p className="mt-3 text-sm text-white">
              Timings: Monday – Saturday, 9:00 AM – 7:00 PM
            </p>
          </FooterCard>

          {/* ✅ Card 3: Google Map */}
          <FooterCard title="Our Location on Google Map">
            <div className="w-full h-56 rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.299256619559!2d85.8726648803378!3d26.121783918152072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb9002d5f6a9d%3A0x11605970cfee0a31!2sAlpha%20A1%20Academy!5e0!3m2!1sen!2sin!4v1769687530998!5m2!1sen!2sin"
                loading="lazy"
                className="w-full h-70 rounded"
              ></iframe>
            </div>
          </FooterCard>
        </div>

        {/* ✅ Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-white">
          © {new Date().getFullYear()} Alphaa1 Academy, Darbhanga. <br />
          All rights reserved. Designed & developed by <br />
          <a
            href="https://dilshad.online"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Md Dilshad
          </a>
        </div>
      </div>
    </footer>
  );
}

/* 🔹 Reusable Card */
function FooterCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#089141] p-6 rounded-lg shadow-md h-full">
      <h3 className="text-lg font-semibold mb-4 text-white">{title}</h3>
      {children}
    </div>
  );
}
