export default function Footer() {
  return (
    <footer
      className="bg-[#0f172a] text-white py-16 px-6"
      id="address"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Alphaa1 Academy – Computer & Professional Coaching in Darbhanga
        </h2>

        {/* Main Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* ✅ Card 1: Brand + Trust */}
          <FooterCard title="Alphaa1 Academy">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 bg-blue-700 rounded flex items-center justify-center font-bold">
                A1
              </div>
              <p className="text-xl font-semibold">Alphaa1 Academy</p>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              Alphaa1 Academy is a trusted computer and professional coaching
              institute in Darbhanga, Bihar. We focus on clear fundamentals,
              practical training, and personal guidance to help students build
              strong skills and confidence for their future.
            </p>

            {/* Trust Badges */}
            <ul className="mt-4 text-sm text-gray-300 space-y-1">
              <li>✔ Experienced & Qualified Instructors</li>
              <li>✔ Practical & Job-Oriented Training</li>
              <li>✔ Small Batch for Personal Attention</li>
              <li>✔ Student Support & Career Guidance</li>
            </ul>
          </FooterCard>

          {/* ✅ Card 2: Address (SEO critical) */}
          <FooterCard title="Contact & Address">
            <address className="not-italic text-sm text-gray-300 leading-relaxed">
              <strong>Alphaa1 Academy</strong> <br />
              4VCH+Q24, Rampur Ramdeo
              <br />
              urf Chand Dih, <br />
              Darbhanga, Bihar – 846003
            </address>

            <p className="mt-4 text-sm">
              📞{" "}
              <a href="tel:+919876543210" className="hover:underline">
                +91 98765 43210
              </a>
              <br />
              📞{" "}
              <a href="tel:+919123456789" className="hover:underline">
                +91 91234 56789
              </a>
            </p>

            <p className="mt-2 text-sm">
              ✉️{" "}
              <a
                href="mailto:alphaa1academy@gmail.com"
                className="hover:underline"
              >
                alphaa1academy@gmail.com
              </a>
            </p>

            <p className="mt-3 text-sm text-gray-400">
              Timings: Monday – Saturday, 9:00 AM – 7:00 PM
            </p>
          </FooterCard>

          {/* ✅ Card 3: Google Map */}
          <FooterCard title="Our Location on Google Map">
            <div className="w-full h-56 rounded overflow-hidden">
              <iframe
                title="Alphaa1 Academy Location in Darbhanga"
                src="https://www.google.com/maps?q=Darbhanga%20Bihar&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://maps.app.goo.gl/zWL43YuXiXSAyrXt8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-blue-400 hover:underline"
            >
              View on Google Maps
            </a>
          </FooterCard>
        </div>

        {/* ✅ Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Alphaa1 Academy, Darbhanga. <br />
          All rights reserved. Designed & developed by{" "}
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
    <div className="bg-[#020617] p-6 rounded-lg shadow-md h-full">
      <h3 className="text-lg font-semibold mb-4 text-blue-400">{title}</h3>
      {children}
    </div>
  );
}
