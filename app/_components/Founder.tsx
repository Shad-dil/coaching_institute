export default function Founder() {
  return (
    <section id="team" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-4">
          Founder & Director
        </h3>

        <div className="flex justify-center mt-8">
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            {/* Image */}
            <img
              src="/founder.jpeg"
              alt={"Obaidur Rahman"}
              className="w-full h-64 object-cover"
            />

            {/* Content */}
            <div className="p-6 text-center">
              <h4 className="text-xl font-semibold">Obaidur Rahman</h4>
              <p className="text-blue-600 font-medium mt-1">
                Director & Founder
              </p>
              <p className="text-sm text-gray-600 mt-2">4+ Years Experience</p>
              <p className="text-gray-700 text-sm mt-4 md:block hidden">
                Alpha A1 Academy, Darbhanga is a leading multidisciplinary
                <br />
                higher education institute dedicated to delivering quality,
                <br />
                skill-based, and career-oriented education at an affordable fee
                <br />
                structure. The institution offers a diverse range of
                <br />
                undergraduate and postgraduate programs, including BA, BSc, and
                <br />
                MSc, along with highly demanded Paramedical courses such as
                <br />
                Medical Laboratory Technology (MLT), Radiology & Imaging
                <br />
                Technology (RIT), Operation Theatre Technology (OT),
                <br />
                Physiotherapy (PT), and Diploma in Technology (DT).
              </p>
              <p className="text-gray-700 text-sm mt-4 md:hidden block">
                Alpha A1 Academy, Darbhanga is a leading multidisciplinary
                higher education institute dedicated to delivering quality,
                skill-based, and career-oriented education at an affordable fee
                structure. The institution offers a diverse range of
                undergraduate and postgraduate programs, including BA, BSc, and
                MSc, along with highly demanded Paramedical courses such as
                Medical Laboratory Technology (MLT), Radiology & Imaging
                Technology (RIT), Operation Theatre Technology (OT),
                Physiotherapy (PT), and Diploma in Technology (DT).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
