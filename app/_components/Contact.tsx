export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <h3 className="text-3xl font-bold text-center mb-6">Get In Touch</h3>
      <div className="max-w-3xl mx-auto grid gap-6">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-3 rounded outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded outline-none"
        />
        <input
          type="text"
          placeholder="Mobile Number"
          className="border p-3 rounded outline-none"
        />
        <textarea
          placeholder="Message"
          className="border p-3 rounded outline-none"
        />
        <button className="bg-blue-700 text-white py-3 rounded">
          Send Message
        </button>
      </div>
    </section>
  );
}
