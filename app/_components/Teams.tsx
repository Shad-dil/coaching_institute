export default function Teams() {
  const members = [
    { name: "Amit Sir", title: "Director" },
    { name: "Zeeshan Sir", title: "Incharge" },
    { name: "Ravi Sir", title: "Trainer" },
  ];

  return (
    <section id="team" className="bg-gray-50 py-20 px-6">
      <h3 className="text-3xl font-bold text-center mb-10">
        Meet Our Trainers
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        {members.map((m) => (
          <div key={m.name} className="bg-white p-6 rounded-lg shadow">
            <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-4" />
            <h4 className="font-semibold text-lg">{m.name}</h4>
            <p className="text-gray-600">{m.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
