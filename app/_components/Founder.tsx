import Image from "next/image";

export default function Founder() {
  return (
    <section id="team" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">
          Founder & Director
        </h3>

        {/* ================= DESKTOP / TABLET ================= */}
        <div className="hidden md:block">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-2">
              {/* Image */}
              <div className="relative bg-gray-100 h-72">
                <Image
                  src="/founder.jpeg"
                  alt="Obaidur Rahman"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-2xl font-semibold">Obaidur Rahman</h4>
                <p className="text-blue-600 font-medium mt-1">
                  Director & Founder
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  4+ Years Experience
                </p>

                <p className="text-gray-700 text-sm mt-4 leading-relaxed">
                  Alpha A1 Academy, Darbhanga is a leading multidisciplinary
                  higher education institute dedicated to delivering quality,
                  skill-based, and career-oriented education at an affordable
                  fee structure...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden space-y-6">
          {/* Image Card */}
          <div className="relative bg-gray-100 h-72">
            <Image
              src="/founder.jpeg"
              alt="Obaidur Rahman"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Description Card */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h4 className="text-xl font-semibold">Obaidur Rahman</h4>
            <p className="text-blue-600 font-medium mt-1">Director & Founder</p>
            <p className="text-sm text-gray-600 mt-2">4+ Years Experience</p>

            <p className="text-gray-700 text-sm mt-4 leading-relaxed">
              Alpha A1 Academy, Darbhanga is a leading multidisciplinary higher
              education institute dedicated to delivering quality, skill-based,
              and career-oriented education at an affordable fee structure. The
              institution offers undergraduate and postgraduate programs
              including BA, BSc, MSc, and highly demanded Paramedical courses
              such as MLT, RIT, OT, Physiotherapy, and Diploma in Technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
