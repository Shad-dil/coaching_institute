export default function WhyUs() {
  const reasons = [
    "Experienced Faculty",
    "Practical Training",
    "Certificate on Completion",
    "Placement Assistance",
  ];
  return (
    <section id="why-us" className="bg-gray-50 py-20 px-6">
      <h3 className="text-3xl font-bold text-center mb-10">Why Choose Us</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
        {reasons.map((r) => (
          <div key={r} className="p-6 bg-white rounded shadow">
            <p className="font-semibold">{r}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
