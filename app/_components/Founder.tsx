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
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
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

              <p className="text-gray-700 text-sm mt-4">
                Computer Fundamentals & Advanced Programming
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
