import { stats } from "../_data/chooseUs";
export default function WhyUs() {
  return (
    <section className="py-16 bg-gray-50" id="why-us">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm p-6 text-center"
            >
              <Icon className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-3xl font-bold">{item.value}</p>
              <p className="text-gray-600 mt-1">{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
