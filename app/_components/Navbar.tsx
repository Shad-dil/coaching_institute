export default function Navbar() {
  return (
    <header className="hidden md:block bg-white shadow-md md:sticky md:top-0 md:z-50">
      <div className="flex justify-between items-center px-6 py-2 bg-gray-300 ">
        <p>
          Confused which course to choose? Book a FREE demo class & talk
          directly to our instructor
        </p>
        <a
          className="bg-blue-700 text-white px-4 py-2 rounded"
          href="https://wa.me/919876543210?text=Hi%20Sir,%20I%20want%20to%20book%20a%20free%20demo%20class." // replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Free Demo on WhatsApp
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">
          YOUR Computer Institute
        </h1>
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#courses">Courses</a>
          <a href="#why-us">Why Us</a>
          <a href="#noticeboard">Batches</a>
          <a href="#team">Team</a>
          <a href="#students">Students</a>
          <a href="#address">Contact</a>
        </nav>
        <a
          className="bg-blue-700 text-white px-4 py-2 rounded"
          href="https://wa.me/919876543210?text=Hi%20Sir,%20I%20want%20to%20book%20a%20free%20demo%20class." // replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
        >
          Enrol Now
        </a>
      </div>
    </header>
  );
}
