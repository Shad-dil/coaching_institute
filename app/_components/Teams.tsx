export default function Teams() {
  const members = [
    {
      name: "Amit Kumar",
      role: "Director & Senior Faculty",
      experience: "12+ Years Experience",
      specialization: "Computer Fundamentals & Advanced Programming",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
    },
    {
      name: "Zeeshan Ahmad",
      role: "Academic In-Charge",
      experience: "8+ Years Experience",
      specialization: "Web Development & Office Automation",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
    },
    {
      name: "Ravi Kumar",
      role: "Technical Trainer",
      experience: "5+ Years Experience",
      specialization: "DCA, ADCA & Practical Labs",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
    },
  ];

  return (
    <section id="team" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-4">
          Our Expert Faculties
        </h3>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Learn from experienced professionals dedicated to quality computer
          education and student success.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <div
              key={m.name}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <img
                src={m.image}
                alt={m.name}
                className="w-full h-64 object-cover"
              />

              {/* Content */}
              <div className="p-6 text-center">
                <h4 className="text-xl font-semibold">{m.name}</h4>
                <p className="text-blue-600 font-medium mt-1">{m.role}</p>
                <p className="text-sm text-gray-600 mt-2">{m.experience}</p>

                <p className="text-gray-700 text-sm mt-4">{m.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
